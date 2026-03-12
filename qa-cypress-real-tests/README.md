# QA Cypress Real Tests

Portfólio de QA com testes **reais** usando **Cypress** em dois níveis:

- **UI E2E**: fluxo de compra no site público [SauceDemo](https://www.saucedemo.com/)
- **API Testing**: testes com `cy.request()` contra a API pública [ReqRes](https://reqres.in/)

> Objetivo: demonstrar organização de projeto, escrita de cenários, boas práticas e execução em CI.

## ✅ O que tem aqui

### 1) UI E2E (SauceDemo)
- Login
- Adicionar item ao carrinho
- Checkout completo até a tela de sucesso

Arquivo: `cypress/e2e/ui/saucedemo_checkout.cy.js`

### 2) API Testing (ReqRes)
- `GET /api/users?page=2` valida lista e estrutura
- `POST /api/users` valida criação (resposta com `id` e `createdAt`)
- `GET /api/unknown/23` valida `404`

Arquivo: `cypress/e2e/api/reqres_users.cy.js`

## ▶️ Como rodar local

### Pré-requisitos
- Node.js 18+ (recomendado)

### Instalação
```bash
npm install
```

### Abrir Cypress (modo interativo)
```bash
npm run cy:open
```

### Rodar em modo headless (CI)
```bash
npm test
```

## 🔐 Variáveis de ambiente

O login do SauceDemo usa variáveis de ambiente:

- `SAUCE_USER`
- `SAUCE_PASS`

Localmente, há valores padrão no `cypress.config.js`.

### GitHub Actions (recomendado)
Crie Secrets no repositório:
- `SAUCE_USER`
- `SAUCE_PASS`

Workflow: `.github/workflows/ci.yml`

## 🧪 Tecnologias
- Cypress
- GitHub Actions

