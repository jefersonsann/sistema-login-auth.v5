# Sistema-login

![Logo](https://raw.githubusercontent.com/jefersonsann/sistema-login-auth.v5/main/public/logo.png)

![screenshot](https://raw.githubusercontent.com/jefersonsann/sistema-login-auth.v5/main/public/screenshot.png)

## Funcionalidades do projeto

- **Registro de usuário:**
  ['Nome', 'username', 'email', 'password', 'confirmPassword']
- **Login com autenticação JWT:** ['email ou username', 'senha']
- **Middleware com proteção de rotas:** ['publicRoutes', 'privateRoutes', 'apiAuthPrefix']
- **Usuário autenticado:** É possível adicionar imagem de perfil

## Tecnologias e Dependências utilizadas

- **Next:** Framework para React que facilita a construção de aplicações web, com funcionalidades como renderização do lado do servidor e geração estática.
- **prisma:** ORM para Node.js e TypeScript, facilitando o gerenciamento do banco de dados.
- **react-hook-form:** Biblioteca para formulários em React, simplificando a manipulação e validação de dados de entrada.
- **bcrypt:** Biblioteca de hashing para senhas, proporcionando uma maneira segura de armazenar senhas criptografadas.
- **uuid:** Biblioteca para gerar identificadores únicos universais (UUIDs), utilizados para identificar de forma única informações em sistemas.
- **zod:** Biblioteca para validação e parsing de dados em TypeScript e JavaScript, oferecendo segurança de tipo.
- **next-auth:** Biblioteca para autenticação em aplicações Next.js, suportando provedores de login como OAuth, email, e credenciais.

## Como executar o projeto

```bash
  git clone https://github.com/jefersonsann/sistema-login-auth.v5.git
```

Entre no diretório do projeto

```bash
  cd sistema-login-auth.v5
```

Instale as dependências

```bash
  npm install
```

Inicie o projeto

```bash
  npm run dev
```

## Autor

[Jeferson Santos](https://jefersonsann.com)
