### README.md

# Objective UI

Welcome to the Objective UI project! This repository contains a design system and a collection of reusable components developed to enhance your front-end development experience. The project is structured as a monorepo and is published on npm for easy integration into your projects.

Bem-vindo ao projeto Objective UI! Este repositório contém um sistema de design e uma coleção de componentes reutilizáveis desenvolvidos para melhorar sua experiência de desenvolvimento front-end. O projeto é estruturado como um monorepo e está publicado no npm para fácil integração em seus projetos.

## Table of Contents / Tabela de Conteúdos

- [Challenge Description / Descrição do Desafio](#challenge-description--descrição-do-desafio)
- [Project Architecture / Arquitetura do Projeto](#project-architecture--arquitetura-do-projeto)
- [Installation / Instalação](#installation--instalação)
- [Running the Library Locally / Executando a Biblioteca Localmente](#running-the-library-locally--executando-a-biblioteca-localmente)
- [Using the Design System / Usando o Sistema de Design](#using-the-design-system--usando-o-sistema-de-design)
- [Documentation / Documentação](#documentation--documentação)

## Challenge Description / Descrição do Desafio

The objective of this challenge is to demonstrate your skills in componentizing front-end elements. You are required to create three components based on the provided models:

O objetivo deste desafio é demonstrar suas habilidades na componentização de elementos front-end. Você deve criar três componentes com base nos modelos fornecidos:

1. **Input Component / Componente de Input**
   - Props: `Title`, `PlaceHolder`, `Icon`, `Events`
   - Outras props opcionais para enriquecimento.

2. **Card Component / Componente de Card**
   - Deve ser criado utilizando o Padrão de Composição (Composition Pattern).
   - Props e subcomponentes são de sua escolha.

3. **Pagination Component / Componente de Paginação**
   - Props: `TotalPages`, `ActivePage`, `Events`
   - Pode ser estático ou dinâmico.

All components must be responsive and internalize their styles and HTML.

Todos os componentes devem ser responsivos e internalizar seus estilos e HTML.

## Project Architecture / Arquitetura do Projeto

This project is organized as a monorepo using workspaces to manage multiple packages. The key packages include:

Este projeto é organizado como um monorepo usando workspaces para gerenciar múltiplos pacotes. Os pacotes principais incluem:

- `@objective-ui/tokens`: Contains design tokens such as colors, fonts, and spacings. / Contém tokens de design como cores, fontes e espaçamentos.
- `@objective-ui/react`: Provides the React components. / Fornece os componentes React.
- `@objective-ui/docs`: Contains documentation and Storybook setup for visualizing and testing components. / Contém documentação e configuração do Storybook para visualizar e testar componentes.

### Monorepo Structure / Estrutura do Monorepo

```
objective-ui/
├── packages/
│   ├── tokens/
│   ├── react/
│   └── docs/
└── ...
```

## Installation / Instalação

To get started with Objective UI, follow these steps:

Para começar a usar o Objective UI, siga estes passos:

1. **Clone the repository / Clone o repositório:**
   ```sh
   git clone https://github.com/italoog/objective-ui.git
   cd objective-ui
   ```

2. **Install dependencies / Instale as dependências:**
   ```sh
   npm install
   ```

## Running the Library Locally / Executando a Biblioteca Localmente

To run and develop the library locally, use the following commands:

Para executar e desenvolver a biblioteca localmente, use os seguintes comandos:

1. **Start the development server / Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

2. **Build the project / Construa o projeto:**
   ```sh
   npm run build
   ```

## Using the Design System / Usando o Sistema de Design

You can use the Objective UI design system in your projects by installing the packages from npm:

Você pode usar o sistema de design Objective UI em seus projetos instalando os pacotes do npm:

1. **Install the packages / Instale os pacotes:**
   ```sh
   npm install @objective-ui/react @objective-ui/tokens
   ```

2. **Import and use the components / Importe e use os componentes:**
   ```jsx
   import { TextInput, Card, Pagination } from '@objective-ui/react';
   import { theme } from '@objective-ui/tokens';

   function App() {
     return (
       <div style={{ fontFamily: theme.fonts.default }}>
         <TextInput placeholder="Search" icon={<MagnifyingGlass />} />
         <Card 
           label="Example Card" 
           firstColumnText={["Item 1", "Item 2"]} 
           secondColumnText={["Item A", "Item B"]} 
         />
         <Pagination 
           currentPage={1} 
           totalPages={5} 
           onPageChange={(page) => console.log('Page:', page)} 
         />
       </div>
     );
   }
   ```

## Documentation / Documentação

You can view the full documentation and explore the available components in the [online Storybook](https://italoog.github.io/objective-ui/).

Você pode ver a documentação completa e explorar os componentes disponíveis no [Storybook online](https://italoog.github.io/objective-ui/).

## Challenge Components / Componentes do Desafio

### Input Component / Componente de Input
A simple, customizable input component with props for title, placeholder, icon, and events.

Um componente de input simples e personalizável com props para título, placeholder, ícone e eventos.

### Card Component / Componente de Card
A complex component created using the Composition Pattern, demonstrating the capability to manage and reuse subcomponents effectively.

Um componente complexo criado utilizando o Padrão de Composição, demonstrando a capacidade de gerenciar e reutilizar subcomponentes de forma eficaz.

### Pagination Component / Componente de Paginação
A dynamic or static pagination component with total pages, active page, and event handling to manage page changes.

Um componente de paginação dinâmico ou estático com total de páginas, página ativa e manipulação de eventos para gerenciar mudanças de página.

---

We hope you enjoy using Objective UI and find it useful in your projects. Contributions are welcome! For any issues or feature requests, please open an issue on [GitHub](https://github.com/italoog/objective-ui).

Esperamos que você aproveite o uso do Objective UI e o ache útil em seus projetos. Contribuições são bem-vindas! Para qualquer problema ou solicitação de recursos, por favor, abra uma issue no [GitHub](https://github.com/italoog/objective-ui).

---

© 2024 Italo Gomes

---
