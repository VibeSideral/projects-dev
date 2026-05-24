# 🌿 EcoTrip — Calculadora de Pegada de Carbono

> Planeje viagens conscientes. Calcule o impacto ambiental do seu transporte em poucos cliques.

---

## 📖 Sobre o Projeto

**EcoTrip** é uma aplicação web single-page (SPA) que permite ao usuário calcular a **emissão de CO₂** de uma viagem entre cidades brasileiras, com base na distância percorrida e no meio de transporte escolhido.

A interface guia o usuário por um fluxo de **5 etapas progressivas**, com validações a cada passo, modo claro/escuro e dicas de sustentabilidade ao final.

---

## ✨ Funcionalidades

- 🗺️ **Seleção de origem e destino** entre cidades cadastradas
- 📏 **Cálculo automático de distância** com preview em tempo real
- 🚗 **Múltiplos meios de transporte** (carro, ônibus, avião, trem etc.)
- 🌡️ **Cálculo de emissão de CO₂** com fórmula baseada em distância × fator de emissão
- 💡 **Dicas de sustentabilidade** personalizadas ao resultado
- 🌙 **Alternador de modo claro/escuro**
- 📱 **Layout responsivo** para mobile e desktop
- ♻️ **Botão de reset** para reiniciar o fluxo

---

## 🗂️ Estrutura do Projeto

```
ecotrip/
└── ecotrip.html          # Arquivo único (HTML + CSS + JS)
```

### Mapa Mental Interno do `ecotrip.html`

```
ecotrip.html
│
├── <style>  ─────────────────────────── CSS
│   ├── Variáveis de cor (:root)
│   ├── Header e decoração
│   ├── Barra de passos (steps-bar)
│   ├── Cards e formulários
│   ├── Alternador de modo (claro/escuro)
│   ├── Cards de cidade
│   ├── Botões
│   └── Responsividade (@media)
│
├── <body>  ──────────────────────────── HTML
│   ├── <header>
│   ├── <div.steps-bar>
│   └── <main>
│       ├── #panel-1 → Trajeto (seleção de cidades + km)
│       ├── #panel-2 → Transporte (escolha do modal)
│       ├── #panel-3 → Detalhes (informações adicionais)
│       ├── #panel-4 → Resultado (emissão calculada + dicas)
│       └── #panel-5 → Como Usar (tutorial)
│
└── <script>  ────────────────────────── JavaScript
    ├── 📦 Dados
    │   ├── CIDADES        → lista de cidades disponíveis
    │   ├── DISTANCIAS     → matriz de distâncias entre pares
    │   ├── TRANSPORTES    → meios de transporte + fatores de emissão
    │   └── TIPS           → dicas de sustentabilidade
    │
    ├── 🔄 Estado
    │   ├── origemSel      → cidade de origem selecionada
    │   ├── destinoSel     → cidade de destino selecionada
    │   ├── selectedTransport → transporte escolhido
    │   └── modoAtual      → modo claro ou escuro
    │
    └── ⚙️ Funções
        ├── init()              → gera cards de cidade ao carregar a página
        ├── setMode()           → alterna entre modo claro e escuro
        ├── selecionarCidade()  → registra seleção e bloqueia duplicata
        ├── atualizarPreview()  → exibe a distância calculada em tempo real
        ├── goStep()            → navega diretamente entre painéis
        ├── nextStep()          → valida dados antes de avançar
        ├── getDistanciaFinal() → unifica os dois modos de cálculo
        ├── calcular()          → aplica a fórmula de emissão de CO₂
        ├── renderResultado()   → preenche o painel de resultado (#panel-4)
        └── resetar()           → volta ao estado inicial
```

---

## 🚀 Como Usar

1. **Clone ou baixe** o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ecotrip.git
   ```

2. **Abra o arquivo** diretamente no navegador:
   ```bash
   # Sem dependências ou servidor necessário
   open ecotrip.html
   ```

3. **Siga os 5 passos** na interface:
   - Escolha a cidade de **origem** e **destino**
   - Selecione o **meio de transporte**
   - Preencha os **detalhes** da viagem
   - Veja o **resultado** com a emissão de CO₂
   - Confira as **dicas** para reduzir seu impacto

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura da página e painéis |
| **CSS3** | Estilização, variáveis de cor, responsividade |
| **JavaScript (ES6+)** | Lógica, estado, navegação e cálculos |

> Sem frameworks, sem dependências externas. Funciona com um único arquivo `.html`.

---

## 📐 Fórmula de Cálculo

```
Emissão (kg CO₂) = Distância (km) × Fator de Emissão do Transporte (kg CO₂/km)
```

Cada meio de transporte possui um **fator de emissão** próprio cadastrado no objeto `TRANSPORTES`.

---

## 🌱 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um **fork** do projeto
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/nova-cidade
   ```
3. Faça o **commit** das suas alterações:
   ```bash
   git commit -m "feat: adiciona cidade de Campinas"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin feature/nova-cidade
   ```
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  Feito com 💚 para um planeta mais consciente
</div>
