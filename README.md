# Multi App

Este projeto é uma aplicação multifuncional construída com React e Vite. Ele inclui várias funcionalidades, cada uma implementada como um módulo separado. Abaixo está uma descrição detalhada de cada funcionalidade disponível no projeto.

## Funcionalidades

### 1. Gerador de QR Code

O módulo de Gerador de QR Code permite que os usuários gerem QR Codes a partir de um texto inserido. O QR Code é gerado dinamicamente conforme o usuário digita.

### 2. Buscador de Endereço IP

O módulo de Buscador de Endereço IP permite que os usuários insiram um endereço IP e obtenham informações detalhadas sobre ele, como localização, ISP, etc.

### 3. Motor de Busca de Filmes

O módulo de Motor de Busca de Filmes permite que os usuários pesquisem filmes por título. Os resultados incluem informações como pôster, título e ano de lançamento.

### 4. Aplicativo de Tarefas (Todo App)

O módulo de Aplicativo de Tarefas permite que os usuários adicionem, editem e excluam tarefas. As tarefas são armazenadas em uma API simulada.

### 5. Aplicativo de Quiz

O módulo de Aplicativo de Quiz permite que os usuários respondam a perguntas de múltipla escolha e vejam sua pontuação ao final.

### 6. Tradutor de Idiomas

O módulo de Tradutor de Idiomas permite que os usuários traduzam texto entre diferentes idiomas usando a API MyMemory.

## Como Executar

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório.
   ```bash
    git clone https://github.com/gomessgbr/maisPraTi-atividade5.git
   ```
2. Instale as dependências com `yarn install`.

   ```bash
   npm i
   ```

3. Inicie o servidor de desenvolvimento com `yarn dev`.

   ```bash
     npm run dev
   ```

## Dependências

O projeto utiliza as seguintes dependências principais:

- React
- Vite
- Axios
- Styled-components
- React-router-dom
- QRCode.react
- React-icons
- React-responsive-carousel
