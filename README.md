# Facilita Jurídico

## Parte 1

### Descrição

Uma empresa que realiza limpeza em residências enfrenta desafios no gerenciamento de seus clientes e busca uma solução eficiente para cadastrar e visualizar as informações que hoje são controladas em planilhas. Para centralizar as informações e ajudar na expansão da empresa, ela deseja uma plataforma onde seja possível gerenciar os seus clientes. O sistema deve ser composto por um backend em Node.js utilizando PostgreSQL como banco de dados, e um frontend em React.

A empresa utiliza as seguintes informações para gerenciar seus clientes: nome, email e telefone.

Na plataforma criada deve ser possível:

- Listar os seus clientes e filtrar com base nas informações cadastradas
- Cadastrar clientes novos

## Parte 2

Suponha que, além de cadastrar e visualizar clientes, a empresa deseja otimizar as rotas de atendimento para maximizar a eficiência na visitação dos clientes. Considere um mapa bidimensional representando a localização dos clientes, onde cada ponto cartesiano possui um cliente. Cada cliente cadastrado possui uma coordenada X e uma coordenada Y nesse mapa.

O objetivo é calcular a rota partindo da empresa (0,0) e que passe pela localização de todos os clientes cadastrados no banco de dados e retorne à empresa no final. A rota deve ser calculada para ter a menor distância possível.

O algoritmo para calcular essa rota deve estar disponibilizado via rota da api para ser chamado pelo front quando necessário.

Implemente um botão na tela de clientes que, ao ser clicado, abre uma modal e mostra a ordem de visitação dos clientes na rota calculada. A visualização pode ser a mais simples possível mostrando uma lista dos clientes na ordem que devem ser visitados do primeiro ao último cliente da rota.

Ao desenvolver essa segunda parte, altere a rota de cadastro e visualização para que seja possível cadastrar e visualizar as coordenadas X e Y dos clientes da empresa.

## Solução desenvolvida

A solução baseada em node, react e postgres foi desenvolvida e versionada no github.

### Requisitos de Instalação - Linux

#### Git

Se o Git não estiver instalado, você pode instalá-lo usando o gerenciador de pacotes da sua distribuição Linux. Abra um terminal e execute o seguinte comando:

```bash
# Debian/Ubuntu
sudo apt-get update
sudo apt-get install git

# Fedora
sudo dnf install git

# Arch Linux
sudo pacman -S git
```

#### PostgreSQL

Para instalar o PostgreSQL, você pode usar o gerenciador de pacotes da sua distribuição. No Ubuntu, por exemplo:

```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

#### Node.js

Para instalar o Node.js, você pode usar o gerenciador de pacotes Node Version Manager (NVM). Execute os seguintes comandos:

```bash
# Instale o NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Recarregue o perfil do terminal
source ~/.bashrc

# Instale o Node.js usando o NVM
nvm install node
```

### Requisitos de Instalação

Os métodos abaixo são descritos para sistemas operacionais Linux baseados na arquitetura Debian. Para outros sistemas, os métodos são similares, no entanto, recomenda-se buscar a documentação apropriada correspondente ao seu sistema operacional.

#### Git

Baixe e instale o Git do [site oficial](https://git-scm.com/).

#### PostgreSQL

Baixe e instale o PostgreSQL do [site oficial](https://www.postgresql.org/download/).

#### Node.js

Baixe e instale o Node.js do [site oficial](https://nodejs.org/).


### Clone do projeto em seu computador 

Para clonar um projeto Git, você pode usar o comando `git clone`. 

### Clonando o Projeto

1. Abra um terminal.

2. Navegue até o diretório onde você deseja clonar o projeto.

3. Execute o seguinte comando para clonar o repositório:

   ```bash
   git clone https://github.com/esthercamilo/facilita_juridico.git
   ```

Depois de executar esses comandos, o projeto será clonado para o diretório local especificado.


## Criação do banco de dados e instalação

**Nota importante:** Antes de inicializar o processo de instalação, você deve criar manualmente o arquivo de credenciais nomeado .env na raiz do projeto. Esse arquivo tem o seguinte conteúdo:

```bash
DB_PASSWORD=\<preencha aqui a senha de admin do banco\>
```

Crie um banco de dados chamado facilitajuridicodb

```bash
createdb -h localhost -U postgres facilitajuridicodb
```

Restaure o banco utilizando o script dump.sql

```bash
pg_restore -h localhost -U postgres -d facilitajuridicodb -c \<caminho_para_o_dump\>
```


Instalar as dependências do servidor. Na raiz do projeto execute

```bash
npm install
```

Instalar as dependências do frontend. Na pasta `frontend` execute:

```bash
npm install
```



## Execução

Abra um terminal na raiz do projeto e inicialize o servidor node

```bash
node server.js
```

Abra outro terminal na pasta frontend e inicialize a aplicação

```bash
npm start
```


### Detalhes técnicos

1. Algoritmo escolhido para cálculo das distâncias

O algoritmo TSP (Problema do Caixeiro Viajante) foi escolhido devido à sua capacidade de otimizar eficientemente o percurso total, garantindo a visita a todos os pontos de interesse exatamente uma vez e retornando ao ponto de origem. O algoritmo 2-opt foi selecionada devido à sua simplicidade de implementação e desempenho aceitável para grafos de tamanhos moderados. 

2. Conforme exigência do teste, não se utilizou ORM, mas a conexão com o banco foi realizada com a biblioteca express.





