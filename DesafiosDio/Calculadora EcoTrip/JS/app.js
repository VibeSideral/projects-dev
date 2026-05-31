// ═══════════════════════════════════════════════════════════
// APP LOGIC - EcoTrip
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════
let origemSel = null;
let destinoSel = null;
let selectedTransport = null;
let modoAtual = 'cidades'; // 'cidades' | 'km'

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
(function init(){
  // Monta grids de cidades
  renderCidadesGrid('grid-origem', 'origem');
  renderCidadesGrid('grid-destino', 'destino');

  // Monta grid de transportes
  const tGrid = document.getElementById('transport-grid');
  TRANSPORTES.forEach(t => {
    const div = document.createElement('div');
    div.className = 'transport-card';
    div.id = 'tc-' + t.id;
    div.innerHTML = `<span class="t-icon">${t.icon}</span><div class="t-name">${t.nome}</div><div class="t-co2">${t.fator > 0 ? t.fator+' gCO₂/km' : 'Zero emissões'}</div>`;
    div.onclick = () => {
      selectedTransport = t.id;
      document.querySelectorAll('.transport-card').forEach(c => c.classList.remove('selected'));
      div.classList.add('selected');
    };
    tGrid.appendChild(div);
  });
})();

function renderCidadesGrid(containerId, tipo) {
  const grid = document.getElementById(containerId);
  grid.innerHTML = '';
  CIDADES.forEach(c => {
    const div = document.createElement('div');
    div.className = 'city-card';
    div.id = `city-${tipo}-${c.id}`;
    div.innerHTML = `<span class="city-flag">${c.emoji}</span><div class="city-info"><div class="city-name">${c.nome}</div><div class="city-state">${c.estado}</div></div>`;
    div.onclick = () => selecionarCidade(tipo, c.id);
    grid.appendChild(div);
  });
}

// ═══════════════════════════════════════════════════════════
// MODO (CIDADES / KM)
// ═══════════════════════════════════════════════════════════
function setMode(modo) {
  modoAtual = modo;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.input-mode').forEach(m => m.classList.remove('active'));
  document.getElementById('btn-mode-' + modo).classList.add('active');
  document.getElementById('mode-' + modo).classList.add('active');
  document.getElementById('err-1').style.display = 'none';
}

// ═══════════════════════════════════════════════════════════
// SELEÇÃO DE CIDADES
// ═══════════════════════════════════════════════════════════
function selecionarCidade(tipo, cidadeId) {
  if (tipo === 'origem') {
    origemSel = cidadeId;
    document.querySelectorAll('[id^="city-origem-"]').forEach(el => el.classList.remove('selected'));
    document.getElementById('city-origem-' + cidadeId).classList.add('selected');
  } else {
    destinoSel = cidadeId;
    document.querySelectorAll('[id^="city-destino-"]').forEach(el => el.classList.remove('selected'));
    document.getElementById('city-destino-' + cidadeId).classList.add('selected');
  }

  atualizarBloqueios();
  atualizarPreview();
}

function atualizarBloqueios() {
  CIDADES.forEach(c => {
    const elDest = document.getElementById('city-destino-' + c.id);
    if (elDest) elDest.classList.toggle('disabled', c.id === origemSel);

    const elOrig = document.getElementById('city-origem-' + c.id);
    if (elOrig) elOrig.classList.toggle('disabled', c.id === destinoSel);
  });
}

function atualizarPreview() {
  const preview = document.getElementById('dist-preview');
  if (!origemSel || !destinoSel) { preview.classList.remove('show'); return; }

  const dist = getDistancia(origemSel, destinoSel);
  const nomeO = CIDADES.find(c => c.id === origemSel).nome;
  const nomeD = CIDADES.find(c => c.id === destinoSel).nome;

  if (dist !== null && dist > 0) {
    document.getElementById('dp-val').textContent = dist.toLocaleString('pt-BR') + ' km';
    document.getElementById('dp-route').textContent = nomeO + ' → ' + nomeD + ' (distância rodoviária estimada)';
    preview.classList.add('show');
  }
}

// ═══════════════════════════════════════════════════════════
// DISTÂNCIA FINAL
// ═══════════════════════════════════════════════════════════
function getDistanciaFinal() {
  if (modoAtual === 'km') {
    return parseFloat(document.getElementById('distancia-manual').value) || 0;
  }
  if (!origemSel || !destinoSel) return 0;
  return getDistancia(origemSel, destinoSel) || 0;
}

function getRotaLabel() {
  if (modoAtual === 'km') {
    const km = parseFloat(document.getElementById('distancia-manual').value);
    return km ? km.toLocaleString('pt-BR') + ' km (manual)' : '';
  }
  if (origemSel && destinoSel) {
    const nO = CIDADES.find(c => c.id === origemSel).nome;
    const nD = CIDADES.find(c => c.id === destinoSel).nome;
    return nO + ' → ' + nD;
  }
  return '';
}

// ═══════════════════════════════════════════════════════════
// NAVEGAÇÃO
// ═══════════════════════════════════════════════════════════
function goStep(n) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + n).classList.add('active');
  document.querySelectorAll('.step-tab').forEach((t, i) => {
    t.classList.remove('active', 'done');
    if (i + 1 < n)  t.classList.add('done');
    if (i + 1 === n) t.classList.add('active');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextStep(from) {
  const err = document.getElementById('err-' + from);
  if (from === 1) {
    const dist = getDistanciaFinal();
    const pass = parseInt(document.getElementById('passageiros').value);
    if (dist <= 0 || !pass || pass <= 0) { err.style.display = 'block'; return; }
    err.style.display = 'none';
    goStep(2);
  } else if (from === 2) {
    if (!selectedTransport) { err.style.display = 'block'; return; }
    err.style.display = 'none';
    goStep(3);
  }
}

function resetar() {
  origemSel = null; destinoSel = null; selectedTransport = null;
  document.querySelectorAll('.city-card').forEach(c => c.classList.remove('selected','disabled'));
  document.querySelectorAll('.transport-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('dist-preview').classList.remove('show');
  document.getElementById('distancia-manual').value = '';
  document.getElementById('passageiros').value = '1';
  document.getElementById('eficiencia').value = '0';
  document.getElementById('efic-val').textContent = '0%';
  setMode('cidades');
  goStep(1);
}

// ═══════════════════════════════════════════════════════════
// CÁLCULO
// ═══════════════════════════════════════════════════════════
function calcular() {
  const distancia   = getDistanciaFinal();
  const passageiros = parseInt(document.getElementById('passageiros').value) || 1;
  const idavolta    = parseFloat(document.getElementById('idavolta').value);
  const perfil      = parseFloat(document.getElementById('perfil').value);
  const eficiencia  = parseFloat(document.getElementById('eficiencia').value) / 100;
  const tipoFator   = parseFloat(document.getElementById('tipoviagem').value);

  const transp      = TRANSPORTES.find(t => t.id === selectedTransport);
  const distTotal   = distancia * idavolta;
  const fatorAjust  = transp.fator * perfil * tipoFator * (1 + eficiencia);

  const emissaoTotal  = (fatorAjust * distTotal * passageiros) / 1000;
  const emissaoPorPax = (fatorAjust * distTotal) / 1000;
  const emissaoPorKm  = (fatorAjust * passageiros) / 1000;
  const arvores       = Math.max(1, Math.ceil(emissaoTotal / 21));
  const kmCarroEq     = Math.round(emissaoTotal / (192 / 1000));
  const diasTV        = Math.round(emissaoTotal / 0.096);

  let badge, badgeClass;
  if (emissaoTotal < 50)        { badge = '🟢 Impacto Baixo';  badgeClass = 'badge-ok'; }
  else if (emissaoTotal < 200)  { badge = '🟡 Impacto Médio';  badgeClass = 'badge-warn'; }
  else                          { badge = '🔴 Impacto Alto';   badgeClass = 'badge-danger'; }

  const rota = getRotaLabel();

  document.getElementById('res-total').innerHTML = emissaoTotal >= 1000
    ? `${(emissaoTotal/1000).toFixed(2)}<span> t</span>`
    : `${emissaoTotal.toFixed(1)}<span> kg</span>`;

  const badgeEl = document.getElementById('res-badge');
  badgeEl.className = 'result-badge ' + badgeClass;
  badgeEl.textContent = badge;

  document.getElementById('res-route').textContent = rota
    ? '📍 ' + rota + (idavolta == 2 ? ' (ida e volta)' : ' (somente ida)')
    : '';

  document.getElementById('metrics-grid').innerHTML = [
    ['👤', emissaoPorPax.toFixed(1) + ' kg', 'Por Passageiro'],
    ['📏', emissaoPorKm.toFixed(3) + ' kg',  'Por Km Total'],
    ['🌳', arvores,                           'Árvores p/ Compensar'],
    ['🔁', distTotal.toLocaleString('pt-BR') + ' km', 'Distância Total'],
    ['📺', diasTV.toLocaleString('pt-BR') + ' h',     '≈ TV 4K ligada'],
    ['🚗', kmCarroEq.toLocaleString('pt-BR') + ' km', '≈ Carro gasolina'],
  ].map(([i,v,n]) =>
    `<div class="metric-card"><span class="metric-icon">${i}</span><div class="metric-val">${v}</div><div class="metric-name">${n}</div></div>`
  ).join('');

  const compData = TRANSPORTES.map(t => ({
    ...t, emissao: (t.fator * distTotal * passageiros) / 1000
  })).sort((a,b) => a.emissao - b.emissao);
  const maxComp = Math.max(...compData.map(c => c.emissao), 1);

  document.getElementById('comp-rows').innerHTML = compData.map(c => {
    const pct = (c.emissao / maxComp * 100).toFixed(1);
    const sel = c.id === selectedTransport;
    return `<div class="comp-row ${sel ? 'highlight' : ''}">
      <div class="comp-label">${c.icon} ${c.nome}</div>
      <div class="comp-bar-wrap"><div class="comp-bar" style="width:${pct}%;background:${c.cor}"></div></div>
      <div class="comp-val">${c.emissao.toFixed(1)} kg</div>
    </div>`;
  }).join('');

  document.getElementById('offset-title').textContent = `Compensar ${emissaoTotal.toFixed(1)} kg de CO₂`;
  document.getElementById('offset-desc').textContent =
    `Plante ${arvores} árvore${arvores !== 1 ? 's' : ''} e deixe-as crescer por 1 ano, ou contribua com créditos de carbono certificados (Gold Standard / Verra). A SOS Mata Atlântica e o Instituto Arapyaú aceitam doações para plantio no Brasil.`;

  const tips = [...TIPS].sort(() => Math.random() - 0.5).slice(0, 4);
  document.getElementById('tips-grid').innerHTML = tips.map(tip =>
    `<div class="tip-item"><span class="tip-icon">${tip.icon}</span><div class="tip-text"><strong>${tip.t}</strong>${tip.d}</div></div>`
  ).join('');

  goStep(4);
}
