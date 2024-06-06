# Sistema-login

![Logo](https://raw.githubusercontent.com/jefersonsann/sistema-login-auth.v5/main/public/logo.png)

![screenshot](https://raw.githubusercontent.com/jefersonsann/sistema-login-auth.v5/main/public/screenshot.png)

## Funcionalidades do projeto

<ul>
  <li>Registro de usuário:
    ['Nome', 'username', 'email', 'password', 'confirmPassword']
  </li>
  <li>Login com autenticação JWT: ['email ou username', 'senha']</li>
  <li>Middleware com proteção de rotas: ['publicRoutes', 'privateRoutes', 'apiAuthPrefix']</li>
  <li>Após o usuário autenticado, é possível adicionar imagem de perfil</li>
</ul>

## Tecnologias e Dependências utilizadas

<ul>
  <li>Next</li>
  <li>prisma</li>
  <li>react-hook-form</li>
  <li>bcrypt</li>
  <li>uuid</li>
  <li>zod</li>
  <li>next-auth</li>
</ul>

## Como executar o projeto

```bash
# clonar repositório:
git clone https://github.com/jefersonsann/sistema-login-auth.v5.git

# entrar na pasta do projeto
cd sistema-login-auth.v5

# instalar dependências
npm install

# inicializar projeto
npm run dev
```

## Autor

[Jeferson Santos](https://jefersonsann.com)
