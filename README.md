# QA Test Documentation

Repositório contendo exemplos profissionais de documentação utilizada no processo de testes de software.

## Conteúdo

- Plano de Testes
- Casos de Teste
- Relatório de Bugs

Esses documentos simulam a documentação utilizada por equipes de QA em ambientes reais de desenvolvimento.

---

## Estrutura

docs/

test-plan.md
test-cases.md
bug-report.md

---

## Objetivo

Demonstrar habilidades em:

- Planejamento de testes
- Escrita de casos de teste
- Registro e acompanhamento de bugs
- Documentação de qualidade de software

Template de Plano de Testes (test-plan.md)

# Test Plan 

## Project
E-commerce Web Application

## Objective
Garantir que as funcionalidades principais do sistema funcionem corretamente.

## Scope

Funcionalidades testadas:

- Login
- Catálogo de produtos
- Carrinho de compras
- Checkout

## Test Types

- Teste funcional
- Teste de regressão
- Teste exploratório

## Test Environment

Browser: Chrome  
Sistema: Windows / Linux

## Test Tools

- Cypress
- Postman
- GitHub

Template de Casos de Teste (test-cases.md)

# Test Cases

## TC01 - Login válido

Precondição  
Usuário cadastrado no sistema

Passos
1. Acessar página de login
2. Inserir usuário válido
3. Inserir senha válida
4. Clicar em login

Resultado esperado  
Usuário deve acessar o dashboard.

---

## TC02 - Login inválido

Passos
1. Inserir usuário inválido
2. Inserir senha inválida
3. Clicar em login

Resultado esperado  
Sistema deve exibir mensagem de erro.

Template de Bug Report (bug-report.md) 

# Bug Report

## Bug ID
BUG-001

## Title
Erro ao realizar login com credenciais válidas

## Environment
Chrome / Windows 11

## Steps to Reproduce

1. Acessar página de login
2. Inserir credenciais válidas
3. Clicar em login

## Expected Result
Usuário deve acessar o sistema.

## Actual Result
Sistema retorna erro de autenticação.

## Severity
High
