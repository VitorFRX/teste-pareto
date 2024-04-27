# Etapas do Projeto:

- Aqui definirei a estrutura e demais recursos do projeto.

### Definição do Escopo:
<br>

- Realizar operações de CRUD para gravar os registros de mensagens no banco de dados. O cliente poderá recuperá-las e utilizá-las quando julgar necessário.

    [`CRUD`]: 
    <blockquote>
        Prisma ORM: Um ORM estável e tem consultas bem otimizadas e métodos precisos para busca e gravação de dados. Atualização um pouco deficiente, porém
        flexível para alteração manual de query's livre de dependências.
    </blockquote>
<br>

- Realizar integração com Claude 3, se atentar ao treinamento da I.A trazendo respostas mais objetivas e humanas.

    [`INTEGRAÇÃO CLAUDE 3`]:
    <blockquote>
        Chave de API's: Acessando a Dashboard do `Claude 3` de forma bem intuitiva, basta clicar no botão `Get API keys` e gerar uma chave
        de API para ser utilizada na aplicação.
    </blockquote>


- Criar interface

    [`INTERFACE`]:
    <blockquote>
        Inteface do Usuário: Para esta tarefa, visando desempenho e flexibilidade utilizo ShadCN que possui componentes bem construídos, visivelmente
        agradáveis e flexíveis para alteração, visando desacoplamento essa biblioteca não instala um componente externo, mas sim importa o mesmo inteiramente para a
        aplicação, assim evitando acoplamentos desnecessários.
    </blockquote>

<br>

- Autenticação

    [`AUTENTICAÇÃO`]: 
    
    <blockquote>
        Autenticação do Usuário: Utilizarei Social Integration do Google, aliado a uma autenticação convencional pelo Banco de Dados.
    </blockquote>

<br>

- Tecnologias

    [`TECHNOLOGIAS`]:
        <p>`Front-End` - ReactJS</p>
        <p>`NextJS` - BackEnd</p>
        <p>`API` - Claude 3</p>
        <p>`Host` - Cloud Run (GCP)</p>
        <p>`Banco de Dados` - MySQL (CloudSQL Google)</p>
        <p>`Cloud` - GCP (Google Cloud Platform)</p>


### Planejamento:

[`ARQUITETURA`]:
        <p>`Front-End` - Modules + MVVM</p>
        <p>`NextJS` - MVC</p>
        <p>`API` - Camada de Serviço</p>
        <p>`INFRA` - GCP</p>
        <p>`Banco de Dados`:</p>
        <ul>
            <li>Tabelas - `singular` em `lowercase`</li>
            <li>Campos - `snake_case`</li>
        </ul>
        <p>`Cloud` - CLI GCP</p>




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Faça as requisições para [http://localhost:3000](http://localhost:3000) para retornar as respostas
