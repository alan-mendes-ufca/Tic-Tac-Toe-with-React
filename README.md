# Tic Tac Toe - Next.js

> Um projeto de **aprendizado de React.js** através da construção de um **Jogo da Velha (Tic Tac Toe)** seguindo a documentação oficial do [React](https://pt-br.react.dev/).

### 📚 Aprendizados Práticos

Este projeto foi construído com foco em aprender:

- Como criar e aninhar componentes
- Como adicionar marcações e estilos
- Como exibir dados
- Como renderizar elementos condicionalmente e listas
- Como responder a eventos e atualizar a tela
- Como compartilhar dados entre componentes
- Como pensar em React

### 🏗️ Base Infraestrutural

As configurações base da API foram desenvolvidas utilizando um **template de API reutilizável**, também feito por mim:

👉 **[Template API - alan-mendes-ufca/template-api](https://github.com/alan-mendes-ufca/template-api)**

Este template fornece uma estrutura sólida e profissional para a parte backend do projeto.

## 📁 Estrutura do Projeto

```
├── components/          # Componentes React reutilizáveis
│   ├── Board.jsx       # Tabuleiro do jogo
│   ├── Game.jsx        # Lógica principal do jogo
│   ├── History.jsx     # Histórico de movimentos
│   ├── Square.jsx      # Quadrado individual
│   ├── Turn.jsx        # Indicador de turno
│   └── Victory.jsx     # Tela de vitória
├── pages/              # Páginas Next.js
│   ├── index.jsx       # Página inicial
│   ├── _app.jsx        # App wrapper
│   └── styles.css      # Estilos globais
├── models/             # Modelos de banco de dados
│   ├── user.js
│   ├── password.js
│   └── content.js
├── infra/              # Configuração de infraestrutura
│   ├── compose.yaml    # Docker Compose
│   ├── database.js     # Configuração do banco
│   ├── migrations/     # Migrações do banco
│   └── scripts/        # Scripts auxiliares
├── tests/              # Testes automatizados
│   ├── orchestrator.js
│   └── integration/    # Testes de integração
└── workflows/          # CI/CD workflows
    ├── linting.yaml
    └── tests.yaml
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- npm ou yarn

### Desenvolvimento Local

1. **Instale as dependências:**

```bash
npm install
```

2. **Inicie o banco de dados:**

```bash
docker-compose -f infra/compose.yaml up -d
```

3. **Execute as migrações:**

```bash
npm run migrate
```

4. **Inicie o servidor:**

```bash
npm run dev
```

5. **Acesse a aplicação:**
   Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📦 Scripts Disponíveis

| Comando           | Descrição                          |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Inicia servidor de desenvolvimento |
| `npm test`        | Executa testes com Jest            |
| `npm run lint`    | Valida código (ESLint + Prettier)  |
| `npm run migrate` | Executa migrações do banco         |

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza tecnologias modernas do ecossistema JavaScript:

- **Frontend:** Next.js, React, CSS
- **Backend:** Node.js
- **Banco de Dados:** PostgreSQL
- **Testes:** Jest
- **Qualidade:** ESLint, Prettier
- **DevOps:** Docker, Docker Compose
- **Validação:** commitlint

**Referências de documentação utilizadas:**

- 📖 [React - Official Documentation](https://react.dev)
- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 📖 [Jest Documentation](https://jestjs.io/docs/getting-started)

## ✨ Recursos Principais

- ✅ Interface interativa do Jogo da Velha
- ✅ Sistema de histórico de movimentos
- ✅ Detecção automática de vitória
- ✅ Controle de turnos dos jogadores

---

## 📚 Conceitos de React

Nesta seção você encontra os conceitos fundamentais de React que foram aplicados neste projeto, baseado na documentação oficial.

### Fundamentos

- **React e React DOM** são os pré-requisitos de instalação
- **`.jsx`** é JavaScript XML - permite escrever HTML em JavaScript
- React requer que elementos estejam aninhados em um pai (`<div></div>` ou `<></>`)

**Referência:** [React Getting Started](https://react.dev/learn)

### Componentes

Componentes são blocos de construção do React - partes da interface com sua própria aparência, funcionalidade e estado.

```jsx
export default function Button() {
  return <button>Hello World</button>;
}
```

- **`export default`** especifica o componente raiz
- **`{ }`** indica código JavaScript, não string literal
- Componentes podem ter seu próprio estado e ciclo de vida

**Referência:** [React Components](https://react.dev/learn/your-first-component)

### Estilos

**Usando `className`:**

```jsx
<img className="avatar" />
```

**Métodos de estilização:**

- Importar arquivo CSS: `import './styles.css'`
- Usar tag `<link>` no retorno
- Atributo `style` para estilos dinâmicos

**Referência:** [Styling Components](https://react.dev/learn/adding-styles)

## Renderização condicional

- o uso de condições pode ser feito normalmente com `if`, por `ternários`, dentro do jsx, e operadores lógicos (`&& e ||`)

## Renderizando litas

- `map()`
  - o `map()` é muito **semelhamente** ao `forEach()`: os dois iteram sob uma lista de forma mais semântica e chamam uma função para cada elemento.
  - Sua _diferença fundamental_ é dada pelo **retorno**:
    - `forEach()` retorna `undefined`
    - `map()` retorna uma nova lista com os dados modificados

## Respondendo a eventos

- funções de **event handler**(`onClick`, `onChange`, `onSubmit`, etc) podem ser declaradas dentro de componentes

## Hooks

- `import { useState } from 'react';`: adiciona a funcionalidade de **memória** ao componente
  - Ao utilizar um estado, será retornado o estado atual e uma função que permite atualiza-lo (`[algo, setAlgo]`)
