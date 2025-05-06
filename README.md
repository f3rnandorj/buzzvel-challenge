![GitHub License](https://img.shields.io/github/license/f3rnandorj/buzzvel-challenge?style=plastic&logo=Utech&logoColor=%23ea580c&label=Fernando%20H&color=blue)
![Static Badge](https://img.shields.io/badge/Buzzvel-Utech-%23ea580c?link=https%3A%2F%2Fbuzzvel.com%2F)


# Buzzvel Challenge

## About the Project

This is a responsive landing page built as part of the Buzzvel Frontend Challenge. The project aims to demonstrate modern web development techniques, responsive design principles, and best practices in React and Next.js development.

The project includes a fully responsive landing page with multiple sections, authentication forms, and interactive components designed according to the provided Figma designs.

## Overview of Technologies Used

- **Next.js 14**: React framework with App Router for server and client components
- **React 18**: JavaScript library for building user interfaces
- **TypeScript**: Strongly typed programming language
- **Tailwind CSS**: Utility-first CSS framework
- **React Hook Form**: For form management and validation
- **Zod**: Schema validation library
- **Swiper**: For carousel and slider components
- **React Toastify**: For toast notifications
- **ESLint**: For code linting and formatting
- **Husky**: For pre-commit verification

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

## Project Structure

- `/src/app/`: Next.js App Router structure

  - `/page.tsx`: Main landing page
  - `/(auth)/`: Authentication routes
    - `/signin/`: Sign in page and components
    - `/signup/`: Sign up page and components
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

---

# Desafio Buzzvel (Português)

## Sobre o Projeto

Esta é uma landing page responsiva construída como parte do Desafio Frontend da Buzzvel. O projeto tem como objetivo demonstrar técnicas modernas de desenvolvimento web, princípios de design responsivo e melhores práticas no desenvolvimento com React e Next.js.

O projeto inclui uma landing page totalmente responsiva com múltiplas seções, formulários de autenticação e componentes interativos projetados de acordo com os designs fornecidos no Figma.

## Visão Geral das Tecnologias Utilizadas

- **Next.js 14**: Framework React com App Router para componentes servidor e cliente
- **React 18**: Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript**: Linguagem de programação fortemente tipada
- **Tailwind CSS**: Framework CSS utilitário
- **React Hook Form**: Para gerenciamento e validação de formulários
- **Zod**: Biblioteca de validação de esquema
- **Swiper**: Para componentes de carrossel e slider
- **React Toastify**: Para notificações toast
- **ESLint**: Para linting e formatação de código
- **Husky**: Para verificação pre-commit

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

## Estrutura do Projeto

- `/src/app/`: Estrutura do App Router do Next.js

  - `/page.tsx`: Página principal da landing page
  - `/(auth)/`: Rotas de autenticação
    - `/signin/`: Página e componentes de login
    - `/signup/`: Página e componentes de cadastro
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
