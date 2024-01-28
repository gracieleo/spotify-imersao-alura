Criação da pasta do projeto por linha de comando:
- mkdir nome-pasta (criar)
- cd nome-pasta   (acessar)
- code .  (abrir)

Pasta styles
onde ficam os:
- arquivos de estilo (reset, main-content, sidebar-footer, media-queries)
- arquivo de media querie ficam no final após os css principais
- arquivo de variaveis (vars) que são usadas nos arquivos de estilo
- esse arquivo de variaveis é carregado após o arquivo de reset.css e antes de qualquer outro estilo

Ferramentas:
- IDE VSCode
- Extensão Live Server = cria um servidor local para hospedar seu projeto e atualizar automaticamente a página quando você faz alterações no código.
- [Font Awesome ícones] https://fontawesome.com
- Links para CDN : [solid.css] https://use.fontawesome.com/releases/v5.15.4/css/solid.css E [fontawesome.css] https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css
- Arquivo [Reset CSS]   https://meyerweb.com/eric/tools/css/reset/reset.css
- Node.js
- Json-server = ferramenta que permite criar facilmente uma API 'falsa' com base em arquivos JSON. JSON-Server é uma biblioteca Node.js que simula uma API RESTful a partir de um arquivo.

Atalhos
- criação arquivo html = ! + enter
- criar div com uma classe = div.nomeClass + enter

json-server
- npm install -g json-server@0.17.4  instalação
- json-server --watch api-artists/artists.json --port 3000  (inicializar/subir a api em http://localhost:3000/artist)

- CÓDIGO javascript é careegado ao final do html para atrasar o carregamento dele


O que é CDN ?
- Rede de fornecimento, entrega e distribuição de conteúdo. Folhas de estilos externas.
esses 2 links são as cdn que são importadas no codigo HTML

O que é o arquivo Reset CSS ?
- Uma folha de estilo de redefinição é uma coleção de regras CSS usadas para limpar a formatação padrão do navegador de elementos HTML, removendo possíveis inconsistências entre diferentes navegadores.
Existem modelos prontos na internet ou pode pedir para uma IA criar.

biblioteca de JS React 
- trabalha com a ideia de componentes (Sidebar, Header,Footer, Main) , usa json e html
- no projeto react vai criar uma pasta para cada componente com 2 arquivos um .js e um .css 
- vai chmar os componentes criados em html e css das aulas anteriores via import
- class vira className
- App.css é a função principal onde serão importados os componentes  criados como tags

- npx create-react-app nome-projeto (criar projeto)
- npm start (iniciar/abrir um projeto)


html css js
![image](https://github.com/gracieleo/spotify-imersao-alura/assets/53338148/71402718-23c4-4190-b0a6-96025ccc04fb)


busca artista
![image](https://github.com/gracieleo/spotify-imersao-alura/assets/53338148/767168eb-e61b-4905-8aea-29d57e789e73)

React
![image](https://github.com/gracieleo/spotify-imersao-alura/assets/53338148/ff5bff7f-440b-4cd8-bff4-6cf37e3691d0)
