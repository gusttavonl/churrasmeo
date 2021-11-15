# **Churrasmeo Backend**

Churrasmeo API.

O objetivo é mostrar uma API com uma arquitetura desacoplada, utilizando TDD como metodologia de trabalho, Clean Architecture para a distribuição de responsabilidades em camadas, sempre seguindo os princípios do SOLID.
<br /><br />


> ## APIs construídas no desafio
1. [Cadastro de uma Conta - POST] /account ( É necessário estar autenticado, para criar uma nova conta pode se logar como adminitrador, igual o exemplo da documentação do swagger )
2. [Login - POST] /login ( Não é necessário estar autenticado )
3. [Listagem de uma conta - GET] /account/:id - É necessário estar autenticado / :id = Id da conta
4. [Atualização de uma conta - PUT] /account/:id - É necessário estar autenticado / :id = Id da conta
5. [Exclusão de uma conta - DELETE] /account/:id - É necessário estar autenticado / :id = Id da conta

6. [Adicionar churras - POST] /barbecue/ - É necessário estar autenticado /
7. [Atualizar churras - PUT] /barbecue/:id - É necessário estar autenticado / :id = Id do churras
8. [Listar todos os churras - GET] /barbecue-all/:id - É necessário estar autenticado / :id = Id da conta
9. [Listar um churras - GET] /barbecue/:id - É necessário estar autenticado / :id = Id do churras
10. [Excluir churras - DELETE] /barbecue/:id - É necessário estar autenticado / :id = Id do churras

11. [Adicionar participante - POST] /participants/ - É necessário estar autenticado /
12. [Atualizar participante - PUT] /participants/:id - É necessário estar autenticado / :id = Id do participante
13. [Listar todos os participante - GET] /participants-all/:id - É necessário estar autenticado / :id = Id do churras
14. [Listar um participante - GET] /participants/:id - É necessário estar autenticado / :id = Id do participante
15. [Excluir participante - DELETE] /participants/:id - É necessário estar autenticado / :id = Id do participante


> ## Testes
* Testes Unitários
* Testes de Integração (API Rest)
* Cobertura de Testes
* Mocks
* Stubs
* Fakes
> ## Princípios e Patterns
* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* Separation of Concerns (SOC)
* Don't Repeat Yourself (DRY)
* You Aren't Gonna Need It (YAGNI)
* Keep It Simple, Silly (KISS)

* Factory
* Adapter
* Composite
* Decorator
* Proxy
* Dependency Injection
* Abstract Server
* Composition Root
* Builder
* Singleton
> ## Node Js
* Documentação de API com Swagger
* API Rest com Express
* Segurança (Hashing, Encryption e Encoding)
* CORS
* Middlewares
* Nível de Acesso nas Rotas (Admin)

> ## Typescript
* POO Avançado
* Interface
* TypeAlias
* Namespace
* Utility Types
* Modularização de Paths
* Configurações
* Build

> ## PostgreSQL
* connect
* create
* save
* getOne
* delete
* update

## Como executar o servidor 

```bash
Servidor no deploy: https://churrasmeo.herokuapp.com/
```
