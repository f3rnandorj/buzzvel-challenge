[![GitHub License](https://img.shields.io/github/license/f3rnandorj/buzzvel-challenge?style=flat&logo=Utech&logoColor=%23ea580c&label=Fernando%20H&color=blue)](https://github.com/f3rnandorj/buzzvel-challenge/blob/main/LICENSE)
[![Static Badge](https://img.shields.io/badge/Buzzvel-Utech-%23ea580c?link=https%3A%2F%2Fbuzzvel.com%2F)](https://buzzvel.com/)

> **Note:** This documentation is available in [English](#buzzvel-challenge) and [Português](#desafio-buzzvel-português). (Desca a tela para ter acesso a versão em português)

Deploy: https://buzzvel-challenge-omega.vercel.app/

![image](https://github.com/user-attachments/assets/05bcdddc-3b1c-468c-8527-7042a1bb1b2e)

# Buzzvel Challenge 🇺🇸

## About the Project

Responsive landing page developed for the Buzzvel Frontend Challenge, showcasing modern web technologies and design best practices. The project aims to demonstrate modern web development techniques, responsive design principles, and best practices in React and Next.js development.

The project includes a fully responsive landing page with multiple sections, authentication forms, and interactive components designed according to the provided Figma designs.

![image](https://github.com/user-attachments/assets/c434bfc5-6d82-4d54-8536-8b6a04fb07ee)

## Overview of Technologies Used

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io/)
[![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=flat&logo=testing-library&logoColor=white)](https://testing-library.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)
[![Zod](https://img.shields.io/badge/Zod-3068B7?style=flat&logo=zod&logoColor=white)](https://zod.dev/)

- **Next.js 14**: React framework with App Router for server and client components, offering superior page routing, server-side rendering, and static site generation capabilities.
- **React 18**: JavaScript library for building user interfaces with the latest features like concurrent rendering and automatic batching for better performance.
- **TypeScript**: Strongly typed programming language that builds on JavaScript, providing better tooling at any scale and improved developer experience.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development with highly customizable design tokens and built-in responsive design utilities.
- **React Hook Form**: Performant, flexible and extensible forms with easy-to-use validation and minimal re-renders.
- **Zod**: TypeScript-first schema validation library with static type inference for creating robust form validations.
- **Jest**: Delightful JavaScript testing framework with a focus on simplicity, used for unit and integration tests.
- **React Testing Library**: Testing utilities focused on testing components the way users interact with them, encouraging good testing practices.
- **Swiper**: Modern mobile touch slider with hardware accelerated transitions and excellent behavior.
- **React Toastify**: Notification library for React applications providing seamless integration for toast messages.
- **ESLint**: Static code analysis tool for identifying problematic patterns in JavaScript and TypeScript code.
- **Husky**: Git hooks tool to enforce code quality checks before commits.

## Requirements

- Node.js 18+
- Yarn package manager

## How to Run

Clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/f3rnandorj/buzzvel-challenge
cd buzzvel-challenge

# Install dependencies
yarn

# Run development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Run Tests

This project includes component tests using Jest and React Testing Library. Here's how to run them:

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Generate test coverage report
yarn test:coverage
```

The test coverage report will be available in the `/coverage` directory after running the coverage command.

For each tested component, you can find detailed test case documentation in the corresponding `__tests__/ComponentName.spec.md` file.

## Project Structure

- `/src/app/`: Next.js App Router structure

  - `/page.tsx`: Main landing page
  - `/(auth)/`: Authentication routes
    - `/signin/`: Sign in page and components
      - `page.tsx`: Sign in page
      - `signInSchema.ts`: Form validation schema
      - `/components/`: Sign in components
        - `SignInForm.tsx`: Sign in form component
    - `/signup/`: Sign up page and components
      - `page.tsx`: Sign up page
      - `signUpSchema.ts`: Form validation schema
      - `/components/`: Sign up components
        - `SignUpForm.tsx`: Sign up form component
  - `/components/`: Page-specific components organized by sections
    - `/HeroSection/`: Hero banner section
    - `/FeaturesSection/`: Features showcase section
    - `/TestimonialsSection/`: User testimonials
    - `/FooterSection/`: Footer with navigation sections
    - And more specialized sections...

- `/src/components/`: Reusable UI components

  - `/Button/`: Custom button component
  - `/Form/`: Form-related components
  - `/Header/`: Navigation header
  - `/TextInput/`: Input field components
  - And more UI elements...

- `/src/assets/`: Static assets

  - `/icons/`: SVG icons
  - `/images/`: Images used across the site

- `/src/hooks/`: Custom React hooks
- `/src/utils/`: Utility functions

## Key Features & Differences

- **Fully Responsive Design**: Adapts smoothly to all device sizes from mobile to desktop
- **Form Management**: Uses React Hook Form with Zod for efficient form handling and validation
- **Component Architecture**: Modular components organized by feature and functionality
- **Optimized Assets**: Properly sized and optimized images for better performance
- **Accessibility**: Focus states and semantic HTML for better accessibility
- **Animations**: Subtle animations for improved user experience
- **Type Safety**: Full TypeScript implementation for robust code
- **SEO Optimization**: Proper metadata, semantic HTML structure, and performance optimization for better search engine rankings

## Figma Design

The implementation follows the design from Figma: [Buzzvel FE - Test 2025](https://www.figma.com/design/2gQ4cpmifmwTHnYmYa8edC/Buzzvel-FE---Test-2025--Copy-?node-id=1-10103&p=f&t=tlrqQ26OuA0xXj0M-0)

## Contact Information

You can reach me at:

- Email: f3rnandorj10@gmail.com
- LinkedIn: https://www.linkedin.com/in/fernando-h-fernandes/

## Favicon

The favicon for this project was generated using [RealFaviconGenerator](https://realfavicongenerator.net/)

## How to Use

1. Navigate to the homepage to explore the landing page design
2. Click on "Sign In" or "Sign Up" to see the authentication forms
3. Test the responsiveness by resizing your browser window
4. Interact with the carousel components in the testimonials section

## CI/CD Automation

The project uses GitHub Actions workflows to automate the Continuous Integration process:

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/f3rnandorj/buzzvel-challenge/pull-request-checks.yml?label=CI&logo=github&style=flat)](https://github.com/f3rnandorj/buzzvel-challenge/actions)

A CI pipeline runs automatically on every pull request to the `main` and `dev` branches, performing the following checks:

- **Code Linting**: Enforces code style and catches potential issues with ESLint
- **TypeScript Compilation**: Verifies type safety by running the TypeScript compiler
- **Automated Testing**: Runs the full test suite with Jest

These automated checks help maintain code quality and prevent regressions by validating each change before it's merged.

```yaml
# .github/workflows/pull-request-checks.yml
name: Pull Request Checks

on:
  pull_request:
    branches:
      - main
      - dev

jobs:
  run-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: Install Packages
        run: yarn install
      - name: Run Lint
        run: yarn lint
      - name: Run TypeScript compiler
        run: yarn tsc --noEmit
      - name: Run test
        run: yarn test
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

# Desafio Buzzvel 🇧🇷

## Sobre o Projeto

Página de destino responsiva desenvolvida para o Buzzvel Frontend Challenge, apresentando tecnologias web modernas e melhores práticas de design. O projeto tem como objetivo demonstrar técnicas modernas de desenvolvimento web, princípios de design responsivo e melhores práticas no desenvolvimento com React e Next.js.

O projeto inclui uma landing page totalmente responsiva com múltiplas seções, formulários de autenticação e componentes interativos projetados de acordo com os designs fornecidos no Figma.

![image](https://github.com/user-attachments/assets/4bd435cb-f159-45b2-8467-805308041169)

## Visão Geral das Tecnologias Utilizadas

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io/)
[![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=flat&logo=testing-library&logoColor=white)](https://testing-library.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)
[![Zod](https://img.shields.io/badge/Zod-3068B7?style=flat&logo=zod&logoColor=white)](https://zod.dev/)

- **Next.js 14**: Framework React com App Router para componentes servidor e cliente, oferecendo roteamento de páginas superior, renderização do lado do servidor e capacidades de geração de sites estáticos.
- **React 18**: Biblioteca JavaScript para construção de interfaces de usuário com os recursos mais recentes, como renderização concorrente e agrupamento automático para melhor desempenho.
- **TypeScript**: Linguagem de programação fortemente tipada que se baseia em JavaScript, fornecendo melhores ferramentas em qualquer escala e melhor experiência para desenvolvedores.
- **Tailwind CSS**: Framework CSS utilitário para desenvolvimento rápido de UI com tokens de design altamente personalizáveis e utilitários de design responsivo integrados.
- **React Hook Form**: Formulários performáticos, flexíveis e extensíveis com validação fácil de usar e re-renderizações mínimas.
- **Zod**: Biblioteca de validação de esquema com foco em TypeScript e inferência de tipo estático para criar validações de formulário robustas.
- **Jest**: Framework de testes JavaScript encantador com foco na simplicidade, usado para testes unitários e de integração.
- **React Testing Library**: Utilitários de teste focados em testar componentes da maneira como os usuários interagem com eles, incentivando boas práticas de teste.
- **Swiper**: Slider sensível ao toque moderno com transições aceleradas por hardware e excelente comportamento.
- **React Toastify**: Biblioteca de notificações para aplicações React, fornecendo integração perfeita para mensagens toast.
- **ESLint**: Ferramenta de análise de código estático para identificar padrões problemáticos em código JavaScript e TypeScript.
- **Husky**: Ferramenta de hooks Git para impor verificações de qualidade de código antes dos commits.

## Requisitos

- Node.js 18+
- Gerenciador de pacotes yarn

## Como Executar

Clone o repositório e instale as dependências:

```bash
# Clone o repositório
git clone https://github.com/f3rnandorj/buzzvel-challenge
cd buzzvel-challenge

# Instale as dependências
yarn install

# Execute o servidor de desenvolvimento
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Como Executar os Testes

Este projeto inclui testes de componentes usando Jest e React Testing Library. Veja como executá-los:

```bash
# Executar todos os testes
yarn test

# Executar testes em modo de observação
yarn test:watch

# Gerar relatório de cobertura de testes
yarn test:coverage
```

O relatório de cobertura de testes estará disponível no diretório `/coverage` após executar o comando de cobertura.

Para cada componente testado, você pode encontrar documentação detalhada dos casos de teste no arquivo correspondente `__tests__/NomeDoComponente.spec.md`.

## Estrutura do Projeto

- `/src/app/`: Estrutura do App Router do Next.js

  - `/page.tsx`: Página principal da landing page
  - `/(auth)/`: Rotas de autenticação
    - `/signin/`: Página e componentes de login
      - `page.tsx`: Página de login
      - `signInSchema.ts`: Esquema de validação do formulário
      - `/components/`: Componentes de login
        - `SignInForm.tsx`: Componente de formulário de login
    - `/signup/`: Página e componentes de cadastro
      - `page.tsx`: Página de cadastro
      - `signUpSchema.ts`: Esquema de validação do formulário
      - `/components/`: Componentes de cadastro
        - `SignUpForm.tsx`: Componente de formulário de cadastro
  - `/components/`: Componentes específicos de página organizados por seções
    - `/HeroSection/`: Seção do banner principal
    - `/FeaturesSection/`: Seção de exibição de recursos
    - `/TestimonialsSection/`: Depoimentos de usuários
    - `/FooterSection/`: Rodapé com seções de navegação
    - E mais seções especializadas...

- `/src/components/`: Componentes UI reutilizáveis

  - `/Button/`: Componente de botão personalizado
  - `/Form/`: Componentes relacionados a formulários
  - `/Header/`: Cabeçalho de navegação
  - `/TextInput/`: Componentes de campo de entrada
  - E mais elementos de UI...

- `/src/assets/`: Recursos estáticos

  - `/icons/`: Ícones SVG
  - `/images/`: Imagens usadas em todo o site

- `/src/hooks/`: Hooks React personalizados
- `/src/utils/`: Funções utilitárias

## Características Principais e Diferenciais

- **Design Totalmente Responsivo**: Adapta-se suavemente a todos os tamanhos de dispositivos, de mobile a desktop
- **Gerenciamento de Formulários**: Usa React Hook Form com Zod para manipulação e validação eficiente de formulários
- **Arquitetura de Componentes**: Componentes modulares organizados por recurso e funcionalidade
- **Ativos Otimizados**: Imagens adequadamente dimensionadas e otimizadas para melhor desempenho
- **Acessibilidade**: Estados de foco e HTML semântico para melhor acessibilidade
- **Animações**: Animações sutis para melhorar a experiência do usuário
- **Segurança de Tipos**: Implementação completa de TypeScript para código robusto
- **Otimização para SEO**: Metadados adequados, estrutura HTML semântica e otimização de desempenho para melhor posicionamento nos mecanismos de busca

## Design no Figma

A implementação segue o design do Figma: [Buzzvel FE - Test 2025](https://www.figma.com/design/2gQ4cpmifmwTHnYmYa8edC/Buzzvel-FE---Test-2025--Copy-?node-id=1-10103&p=f&t=tlrqQ26OuA0xXj0M-0)

## Informações de Contato

Você pode me encontrar em:

- Email: f3rnandorj10@gmail.com
- LinkedIn: https://www.linkedin.com/in/fernando-h-fernandes/?locale=pt_BR

## Favicon

O favicon deste projeto foi gerado usando [RealFaviconGenerator](https://realfavicongenerator.net/)

## Como Usar

1. Navegue até a página inicial para explorar o design da landing page
2. Clique em "Entrar" ou "Cadastrar" para ver os formulários de autenticação
3. Teste a responsividade redimensionando a janela do seu navegador
4. Interaja com os componentes de carrossel na seção de depoimentos

## Automação de CI/CD

O projeto utiliza fluxos de trabalho do GitHub Actions para automatizar o processo de Integração Contínua:

[![Status do Fluxo de Trabalho GitHub](https://img.shields.io/github/actions/workflow/status/f3rnandorj/buzzvel-challenge/pull-request-checks.yml?label=CI&logo=github&style=flat)](https://github.com/f3rnandorj/buzzvel-challenge/actions)

Um pipeline de CI é executado automaticamente em cada pull request para as branches `main` e `dev`, realizando as seguintes verificações:

- **Linting de Código**: Impõe o estilo de código e detecta possíveis problemas com ESLint
- **Compilação TypeScript**: Verifica a segurança de tipos executando o compilador TypeScript
- **Testes Automatizados**: Executa a suíte completa de testes com Jest

Essas verificações automatizadas ajudam a manter a qualidade do código e prevenir regressões, validando cada alteração antes que seja mesclada.

```yaml
# .github/workflows/pull-request-checks.yml
name: Pull Request Checks

on:
  pull_request:
    branches:
      - main
      - dev

jobs:
  run-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: Install Packages
        run: yarn install
      - name: Run Lint
        run: yarn lint
      - name: Run TypeScript compiler
        run: yarn tsc --noEmit
      - name: Run test
        run: yarn test
```

## Licensa

Este projeto está licenciado sob a Licença MIT - veja o arquivo de [LICENSE](./LICENSE) para detalhes.
