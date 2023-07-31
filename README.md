# Teste Técnico - EAD Plataforma

## Índice

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Visão Geral

Este projeto foi desenvolvido como parte de um teste técnico para a empresa EAD Plataforma, com o objetivo de avaliar minhas habilidades de desenvolvimento e organização de código. O projeto é uma aplicação web construída com Next.js, uma estrutura de renderização do lado do servidor (SSR) e React.

### Funcionalides Principais
#### 1. Página Dashboard

A página de dashboard apresenta uma listagem paginada dos clientes registrados no sistema. Cada cliente é exibido com informações relevantes, como nome, e-mail, número de telefone, montante e status. Além disso, a página de dashboard permite a edição e exclusão de clientes.

#### 2. Página Configurações
A página de configurações possui um seletor de tema com armazenamento no localStorage do navegador, para que o mesmo tema seja aplicado automaticamente na próxima vez que o usuário acessar a página.

#### 3. Página Perfil

A página de perfil exibe informações detalhadas do usuário conectado à aplicação. Essas informações são nome, email, telefone e foto de perfil.

## Tecnologias Utilizadas

- Next.js 13: O Next.js 13 oferece diversas melhorias, como desempenho aprimorado, suporte a React 18 e outras funcionalidades avançadas.
- TypeScript: O TypeScript é uma linguagem de programação que adiciona tipagem estática ao JavaScript, proporcionando mais segurança e robustez ao código.
- Ant Design: O Ant Design é uma biblioteca de componentes de interface de usuário (UI) que oferece um conjunto de elementos prontos e personalizáveis para uma aparência moderna e responsiva.
- Axios: O Axios é um cliente HTTP baseado em Promises que facilita a comunicação com APIs externas e recursos do servidor.
- Sass: O Sass é uma extensão do CSS que fornece recursos avançados, como variáveis, aninhamento de seletores e funções, para uma melhor organização e reutilização de estilos.

## Pré-requisitos

Para executar este projeto localmente, é necessário ter o seguinte software instalado em sua máquina:

    Node.js (versão 16.8 ou posterior)
    npm ou yarn

## Instalação

Para configurar o projeto em seu ambiente local, siga os seguintes passos:

1. Clone este repositório:

```
git clone https://github.com/GuMarques/desafio-front-eadplataforma
```

2. Acesse o diretório do projeto

```
cd nome-do-repositorio
```

3. Instale as dependências

```
npm install
```

ou

```
yarn install
```

## Uso

Para iniciar o servidor de desenvolvimento e executar a aplicação localmente, utilize o seguinte comando:

```
npm run dev
```

ou

```
yarn dev
```

Após o servidor iniciar com sucesso, acesse a aplicação em seu navegador através do endereço [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

A estrutura de pastas do projeto segue a convenção padrão do Next.js:

```
/
|-- .next/          # Arquivos de build do Next.js
|-- layouts/        # Imagens com o design que o site deve seguir
|-- public/         # Recursos públicos (logo)
|-- src/            # Código-fonte da aplicação
    |-- app/        # Páginas do projeto no novo modo do Next.js 13
    |-- components/ # Componentes reutilizáveis
    |-- context/    # Contextos para compartilhar estado entre componentes
    |-- interfaces/ # Interfaces TypeScript
    |-- lib/        # Configuração do Ant Design
    |-- services/   # Lógica de serviço para comunicação com a API
    |-- styles/     # Arquivos de estilos (Sass)
    |-- utils/      # Funções auxiliares
```
