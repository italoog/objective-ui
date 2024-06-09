### Objective UI

Bem-vindo ao projeto Objective UI! Este repositório contém um sistema de design e uma coleção de componentes reutilizáveis desenvolvidos para melhorar sua experiência de desenvolvimento front-end. O projeto é estruturado como um monorepo e está publicado no npm para fácil integração em seus projetos.

## Tabela de Conteúdos

- [Descrição do Desafio](#descrição-do-desafio)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Instalação](#instalação)
- [Executando a Biblioteca Localmente](#executando-a-biblioteca-localmente)
- [Usando o Sistema de Design](#usando-o-sistema-de-design)
- [Documentação](#documentação)

## Descrição do Desafio

O objetivo deste desafio é demonstrar suas habilidades na componentização de elementos front-end. Você deve criar três componentes com base nos modelos fornecidos:

1. **Componente de Input**
   - Props: `Title`, `PlaceHolder`, `Icon`, `Events`
   - Outras props opcionais para enriquecimento.

2. **Componente de Card**
   - Deve ser criado utilizando o Padrão de Composição (Composition Pattern).
   - Props e subcomponentes são de sua escolha.

3. **Componente de Paginação**
   - Props: `TotalPages`, `ActivePage`, `Events`
   - Pode ser estático ou dinâmico.

Todos os componentes devem ser responsivos e internalizar seus estilos e HTML.

## Arquitetura do Projeto

Este projeto é organizado como um monorepo usando workspaces para gerenciar múltiplos pacotes. Os pacotes principais incluem:

- `@objective-ui/tokens`: Contém tokens de design como cores, fontes e espaçamentos.
- `@objective-ui/react`: Fornece os componentes React e o tema.
- `@objective-ui/docs`: Contém documentação e configuração do Storybook para visualizar e testar componentes.

### Estrutura do Monorepo

```
objective-ui/
├── packages/
│   ├── tokens/
│   ├── react/
│   └── docs/
└── ...
```

## Instalação

Para começar a usar o Objective UI, siga estes passos:

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/italoog/objective-ui.git
   cd objective-ui
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

## Executando a Biblioteca Localmente

Para executar e desenvolver a biblioteca localmente, use os seguintes comandos:

1. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

2. **Construa o projeto:**
   ```sh
   npm run build
   ```

## Usando o Sistema de Design

Você pode usar o sistema de design Objective UI em seus projetos instalando os pacotes do npm:

1. **Instale os pacotes:**
   ```sh
   npm install @objective-ui/react @objective-ui/tokens
   ```

2. **Importe e use os componentes:**
   ```jsx
   import { TextInput, Card, Pagination, theme } from '@objective-ui/react';
   import { MagnifyingGlass } from 'phosphor-react';

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

## Documentação

Você pode ver a documentação completa e explorar os componentes disponíveis no [Storybook online](https://italoog.github.io/objective-ui/).

## Atenção Especial aos Componentes do Desafio

### Componente de Input
Um componente de input simples e personalizável com props para título, placeholder, ícone e eventos.

### Componente de Card
Um componente complexo criado utilizando o Padrão de Composição, demonstrando a capacidade de gerenciar e reutilizar subcomponentes de forma eficaz.

### Componente de Paginação
Um componente de paginação dinâmico ou estático com total de páginas, página ativa e manipulação de eventos para gerenciar mudanças de página.

---

Esperamos que você aproveite o uso do Objective UI e o ache útil em seus projetos. Contribuições são bem-vindas! Para qualquer problema ou solicitação de recursos, por favor, abra uma issue no [GitHub](https://github.com/italoog/objective-ui).

---

© 2024 Italo Gomes
