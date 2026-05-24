/**
 * ═══════════════════════════════════════════════════════════
 * BACKEND BÁSICO - EcoTrip
 * ═══════════════════════════════════════════════════════════
 * Arquivo contendo todas as constantes necessárias para
 * o funcionamento da Calculadora de Impacto Ambiental
 */

// ═══════════════════════════════════════════════════════════
// DADOS — 10 CIDADES DO BRASIL
// ═══════════════════════════════════════════════════════════
const CIDADES = [
  { id:'SP', nome:'São Paulo',       estado:'SP', emoji:'🏙️' },
  { id:'RJ', nome:'Rio de Janeiro',  estado:'RJ', emoji:'🌊' },
  { id:'BH', nome:'Belo Horizonte',  estado:'MG', emoji:'⛰️' },
  { id:'BSB',nome:'Brasília',        estado:'DF', emoji:'🏛️' },
  { id:'SSA',nome:'Salvador',        estado:'BA', emoji:'🌴' },
  { id:'FOR',nome:'Fortaleza',       estado:'CE', emoji:'☀️' },
  { id:'REC',nome:'Recife',          estado:'PE', emoji:'🌺' },
  { id:'MAN',nome:'Manaus',          estado:'AM', emoji:'🌳' },
  { id:'POA',nome:'Porto Alegre',    estado:'RS', emoji:'🍷' },
  { id:'CWB',nome:'Curitiba',        estado:'PR', emoji:'🌲' },
];

// ═══════════════════════════════════════════════════════════
// TABELA DE DISTÂNCIAS RODOVIÁRIAS (km)
// Fonte: DNIT / Google Maps - rotas principais
// ═══════════════════════════════════════════════════════════
const DISTANCIAS = {
  // São Paulo
  'SP-RJ':430,  'SP-BH':590,  'SP-BSB':1015,'SP-SSA':1960,'SP-FOR':2995,
  'SP-REC':2660,'SP-MAN':3869,'SP-POA':1109,'SP-CWB':408,
  
  // Rio de Janeiro
  'RJ-BH':434,  'RJ-BSB':1148,'RJ-SSA':1655,'RJ-FOR':2800,
  'RJ-REC':2328,'RJ-MAN':4420,'RJ-POA':1551,'RJ-CWB':856,
  
  // Belo Horizonte
  'BH-BSB':742, 'BH-SSA':1373,'BH-FOR':2615,'BH-REC':2050,
  'BH-MAN':4183,'BH-POA':1740,'BH-CWB':1011,
  
  // Brasília
  'BSB-SSA':1452,'BSB-FOR':2207,'BSB-REC':2104,
  'BSB-MAN':3483,'BSB-POA':2090,'BSB-CWB':1439,
  
  // Salvador
  'SSA-FOR':1193,'SSA-REC':839, 'SSA-MAN':4076,
  'SSA-POA':2918,'SSA-CWB':2318,
  
  // Fortaleza
  'FOR-REC':800, 'FOR-MAN':5136,'FOR-POA':4108,'FOR-CWB':3523,
  
  // Recife
  'REC-MAN':4690,'REC-POA':3709,'REC-CWB':3120,
  
  // Manaus
  'MAN-POA':5070,'MAN-CWB':4488,
  
  // Porto Alegre
  'POA-CWB':591,
};

/**
 * Função para recuperar distância entre duas cidades
 * @param {string} a - ID da cidade A
 * @param {string} b - ID da cidade B
 * @returns {number} Distância em km
 */
function getDistancia(a, b) {
  if (a === b) return 0;
  return DISTANCIAS[a+'-'+b] || DISTANCIAS[b+'-'+a] || null;
}

// ═══════════════════════════════════════════════════════════
// DADOS — MEIOS DE TRANSPORTE
// Fator de emissão em gCO₂/km/passageiro
// Fontes: IPCC AR6 (2023), ANAC, IEA, Agência Internacional de Energia
// ═══════════════════════════════════════════════════════════
const TRANSPORTES = [
  { id:'carro-gas',  icon:'🚗', nome:'Carro (gasolina)',  fator:192, cor:'#e74c3c' },
  { id:'carro-elet', icon:'⚡', nome:'Carro Elétrico',    fator:53,  cor:'#2ecc71' },
  { id:'moto',       icon:'🏍️', nome:'Moto',              fator:113, cor:'#e67e22' },
  { id:'onibus',     icon:'🚌', nome:'Ônibus',            fator:68,  cor:'#27ae60' },
  { id:'trem',       icon:'🚆', nome:'Trem / Metrô',      fator:14,  cor:'#16a085' },
  { id:'aviao-ec',   icon:'✈️', nome:'Avião (econômica)', fator:255, cor:'#8e44ad' },
  { id:'aviao-ex',   icon:'🛫', nome:'Avião (executiva)', fator:612, cor:'#6c3483' },
  { id:'ferry',      icon:'⛴️', nome:'Balsa / Ferry',     fator:120, cor:'#2980b9' },
  { id:'bicicleta',  icon:'🚲', nome:'Bicicleta',         fator:0,   cor:'#1abc9c' },
  { id:'a-pe',       icon:'🚶', nome:'A pé',              fator:0,   cor:'#1abc9c' },
];

// ═══════════════════════════════════════════════════════════
// DICAS PARA REDUZIR PEGADA DE CARBONO
// ═══════════════════════════════════════════════════════════
const TIPS = [
  { 
    icon:'🚌', 
    t:'Prefira ônibus ou trem',   
    d:'São até 14x menos poluentes que o avião e 3x menos que o carro individual.' 
  },
  { 
    icon:'👥', 
    t:'Viaje em grupo',            
    d:'Compartilhar o carro divide a emissão por passageiro.' 
  },
  { 
    icon:'⚡', 
    t:'Considere um carro elétrico',
    d:'Emitem ~72% menos CO₂ que os movidos a gasolina no Brasil.' 
  },
  { 
    icon:'🎒', 
    t:'Leve menos bagagem',        
    d:'Cada 10 kg extra num avião gera ~3 kg de CO₂ a mais em voos longos.' 
  },
  { 
    icon:'🌱', 
    t:'Compense o carbono',        
    d:'Projetos de reflorestamento certificados neutralizam emissões inevitáveis.' 
  },
  { 
    icon:'🔧', 
    t:'Mantenha o veículo',        
    d:'Pneus calibrados e filtro limpo melhoram a eficiência em até 10%.' 
  },
  { 
    icon:'🛣️', 
    t:'Planeje a rota',            
    d:'Evitar engarrafamentos e paradas desnecessárias economiza combustível.' 
  },
  { 
    icon:'🌤️', 
    t:'Evite horários de pico',    
    d:'Tráfego congestionado aumenta o consumo em até 40%.' 
  },
];

// ═══════════════════════════════════════════════════════════
// CONSTANTES DE CÁLCULO
// ═══════════════════════════════════════════════════════════
const CALCULOS = {
  // 1 árvore média absorve ~21 kg de CO₂ em 1 ano
  KG_CO2_POR_ARVORE_POR_ANO: 21,
  
  // Referência: carro a gasolina emite ~192 gCO₂/km/passageiro
  FATOR_REFERENCIA_CARRO: 192,
  
  // TV 4K consome ~0.096 kg CO₂/hora no Brasil (mix energético)
  KG_CO2_POR_HORA_TV: 0.096,
};

// ═══════════════════════════════════════════════════════════
// CONFIGURAÇÕES DO APP
// ═══════════════════════════════════════════════════════════
const CONFIG = {
  versao: '1.0.0',
  autor: 'DIO - Desafios',
  dataAtualizacao: '2026-05-24',
  tema: 'ecotrip-verde',
  idioma: 'pt-BR',
};

// ═══════════════════════════════════════════════════════════
// FUNÇÕES UTILITÁRIAS
// ═══════════════════════════════════════════════════════════

/**
 * Obtém dados de uma cidade pelo ID
 * @param {string} id - ID da cidade
 * @returns {object} Objeto da cidade
 */
function getCidade(id) {
  return CIDADES.find(c => c.id === id);
}

/**
 * Obtém dados de um transporte pelo ID
 * @param {string} id - ID do transporte
 * @returns {object} Objeto do transporte
 */
function getTransporte(id) {
  return TRANSPORTES.find(t => t.id === id);
}

/**
 * Calcula equivalência em árvores
 * @param {number} kg - Quilos de CO₂
 * @returns {number} Número de árvores
 */
function calcularArvores(kg) {
  return Math.max(1, Math.ceil(kg / CALCULOS.KG_CO2_POR_ARVORE_POR_ANO));
}

/**
 * Calcula equivalência em km de carro
 * @param {number} kg - Quilos de CO₂
 * @returns {number} Quilômetros equivalentes
 */
function calcularKmCarroEquivalente(kg) {
  return Math.round(kg / (CALCULOS.FATOR_REFERENCIA_CARRO / 1000));
}

/**
 * Formata número para locale pt-BR
 * @param {number} num - Número a formatar
 * @returns {string} Número formatado
 */
function formatarNumero(num) {
  return num.toLocaleString('pt-BR');
}

/**
 * Obtém dicas aleatórias
 * @param {number} quantidade - Quantidade de dicas
 * @returns {array} Array com dicas aleatórias
 */
function getDicasAleatorias(quantidade = 4) {
  const cópia = [...TIPS];
  return cópia.sort(() => Math.random() - 0.5).slice(0, quantidade);
}

// Exportar para uso em módulos (se necessário)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CIDADES, DISTANCIAS, TRANSPORTES, TIPS, CALCULOS, CONFIG,
    getDistancia, getCidade, getTransporte, calcularArvores,
    calcularKmCarroEquivalente, formatarNumero, getDicasAleatorias
  };
}
