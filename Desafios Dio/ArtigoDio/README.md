# [Como Estruturar o Código de um Jogo para Escalar sem Virar uma Bagunça]
## Descrição

Este projeto consiste na recriação e modernização de uma página inspirada na Wikipedia, com foco em design minimalista, responsividade, acessibilidade e experiência do usuário. O objetivo foi transformar um layout simples em uma interface moderna, intuitiva e agradável, utilizando HTML5, CSS3 e JavaScript puro.

## Funcionalidades Implementadas

- **Design Moderno e Minimalista:**
  - Layout limpo, com espaçamento adequado, tipografia moderna e cores suaves.
  - Header integrado com logo, título, navegação, pesquisa e links de acesso.
  - Barra de doação estilizada e responsiva.

- **Modo Escuro/Claro Automático e Manual:**
  - Detecção automática do tema do sistema operacional.
  - Botão flutuante para alternar entre os modos.
  - Persistência da escolha do usuário via localStorage.

- **Navegação SPA (Single Page Application):**
  - Navegação entre tópicos sem recarregar a página.
  - Conteúdo dinâmico para os temas: Sonic the Hedgehog, Tetris, História das Linguagens de Programação e JavaScript.
  - Imagens e links de referência para cada tema.

- **Seção de Eventos Atuais Dinâmica:**
  - Eventos com descrições detalhadas.
  - Rotação automática dos assuntos a cada 4 segundos.

- **Acessibilidade:**
  - Uso de HTML semântico (header, nav, main, aside, footer).
  - Labels, ARIA e navegação por teclado.
  - Contraste adequado em todos os modos.

- **Responsividade:**
  - Layout adaptado para desktop, tablet e mobile.
  - Elementos reorganizados para melhor experiência em telas menores.

## Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, custom properties, dark mode)
- JavaScript (SPA, manipulação de DOM, localStorage)

## Estrutura do Projeto

- `index.html` — Página principal e scripts de navegação/tema.
- `assets/css/style.css` — Estilos modernos, responsivos e dark mode.
- `assets/images/` — Imagens dos temas e ícones.

## Melhorias Realizadas

- Refatoração completa do HTML para semântica e acessibilidade.
- Criação de header moderno com navegação e pesquisa integradas.
- Implementação de tabs para navegação SPA entre temas.
- Adição de modo escuro/claro automático e manual.
- Atualização visual de todas as seções, incluindo eventos e doações.
- Inclusão de imagens ilustrativas para cada tema.
- Rotação automática dos eventos atuais.
- Garantia de responsividade e experiência consistente em todos os dispositivos.

## Como Visualizar

Abra o arquivo `index.html` em seu navegador preferido. Para melhor experiência, utilize o modo desktop e mobile.

## Créditos e Referências

- [Wikipedia](https://pt.wikipedia.org/)
- [Download do NVDA](https://www.nvaccess.org/download/)

---
Projeto educacional — Módulo 3 - Trilha HTML