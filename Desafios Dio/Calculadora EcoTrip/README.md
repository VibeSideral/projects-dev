Mapa Mental do projeto

ecotrip.html
│
├── <style>  ← CSS
│     ├── Variáveis de cor (:root)
│     ├── Header e decoração
│     ├── Barra de passos
│     ├── Cards e formulários
│     ├── Alternador de modo
│     ├── Cards de cidade
│     ├── Botões
│     └── Responsividade (@media)
│
├── <body>   ← HTML
│     ├── <header>
│     ├── <div.steps-bar>
│     └── <main>
│           ├── #panel-1  Trajeto (cidades + km)
│           ├── #panel-2  Transporte
│           ├── #panel-3  Detalhes
│           ├── #panel-4  Resultado
│           └── #panel-5  Como Usar
│
└── <script> ← JavaScript
      ├── Dados (CIDADES, DISTANCIAS, TRANSPORTES, TIPS)
      ├── Estado (origemSel, destinoSel, selectedTransport, modoAtual)
      ├── init()           → gera cards ao carregar
      ├── setMode()        → alterna modos
      ├── selecionarCidade() → registra seleção + bloqueia duplicata
      ├── atualizarPreview() → mostra distância calculada
      ├── goStep()         → navega entre painéis
      ├── nextStep()       → valida antes de avançar
      ├── getDistanciaFinal() → unifica os dois modos
      ├── calcular()       → aplica a fórmula
      ├── renderResultado() → preenche o painel 4
      └── resetar()        → volta ao estado inicial
