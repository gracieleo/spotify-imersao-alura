## Projeto desenvolvido na semana Imersão Front-end Alura 

### Criação da Pasta do Projeto
Para criar e acessar a pasta do projeto por linha de comando, siga os seguintes passos:


![image](https://github.com/gracieleo/spotify-imersao-alura/assets/53338148/cd7860b7-2e06-4724-a450-1c0ca108f4a1)

### Ferramentas utilizadas:
- IDE VSCode
- Extensão Live Server (cria um servidor local para hospedar seu projeto e atualizar automaticamente a página quando você faz alterações no código)
- [Font Awesome ícones](https://fontawesome.com)
- Links para CDN : [solid.css](https://use.fontawesome.com/releases/v5.15.4/css/solid.css) e [fontawesome.css](https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css)
- Arquivo [Reset CSS](https://meyerweb.com/eric/tools/css/reset/reset.css) para normalizar estilos e garantir uma experiência consistente em diferentes navegadores.
- Node.js
- Json-server (ferramenta que permite criar facilmente uma API 'falsa' com base em arquivos JSON. JSON-Server é uma biblioteca Node.js que simula uma API RESTful a partir de um arquivo)

#### Pasta styles, onde ficam:
- arquivos de estilo (reset, main-content, sidebar-footer, media-queries)
- arquivo de media querie ficam no final após os css principais
- arquivo de variaveis (vars) que são usadas nos arquivos de estilo
- esse arquivo de variaveis é carregado após o arquivo de reset.css e antes de qualquer outro estilo

#### Atalhos
- criação arquivo html = ! + enter
- criar div com uma classe = div.nomeClass + enter

#### Json-Server
Instalação

![image](https://github.com/gracieleo/spotify-imersao-alura/assets/53338148/94e40816-a77f-40fc-806b-22dede232821)

Inicializar/subir a api em http://localhost:3000/artist

![image](https://github.com/gracieleo/spotify-imersao-alura/assets/53338148/477b60ee-9a5b-489a-967d-14a1dc0a10dd)


#### CÓDIGO JavaScript é carregado ao final do HTML para atrasar o carregamento dele.
#### O que é CDN ?
- Rede de fornecimento, entrega e distribuição de conteúdo. Folhas de estilos externas.

#### O que é o arquivo Reset CSS ?
- Uma folha de estilo de redefinição é uma coleção de regras CSS usadas para limpar a formatação padrão do navegador de elementos HTML, removendo possíveis inconsistências entre diferentes navegadores.
Existem modelos prontos na internet ou pode pedir para uma IA criar.

#### Biblioteca de JS => React 
- trabalha com a ideia de componentes (Sidebar, Header,Footer, Main)
- no projeto React vai criar uma pasta para cada componente com dois arquivos um .js e um .css 
- vai chmar os componentes criados em HTML e CSS das aulas anteriores via import
- class vira className
- App.css é a função principal onde serão importados os componentes  criados como tags

- *npx create-react-app nome-projeto* (instala todas as dependencias para criar executar um app react.js)
- *npm start* (iniciar/abrir um projeto, inicia o servidor Node.js)

### Resultado:
*Página em HTML | CSS | JavaScript*
![image](https://github.com/gracieleo/spotify-imersao-alura/assets/53338148/71402718-23c4-4190-b0a6-96025ccc04fb)


*Busca por artista:*
![image](https://github.com/gracieleo/spotify-imersao-alura/assets/53338148/767168eb-e61b-4905-8aea-29d57e789e73)

*Página em React*
![image](https://github.com/gracieleo/spotify-imersao-alura/assets/53338148/ff5bff7f-440b-4cd8-bff4-6cf37e3691d0)
