# Como editar fontes

Para editar fontes, devemos primeiro importá-las no projeto. Para isso, abra o arquivo `./gatsby-config.js` e navegue até a seguinte seção:

```js
// ...coisas anteriores
{
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],

        web: [
          {
            file: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
            name: "Bebas Neue",
          },
          {
            file: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap',
            name: 'Montserrat',
          }
        ],
        custom: [],
      },
/// ...coisas posteriores
```

## Adicionando uma fonte do Google Fonts

Para adicionar uma fonte do Google Fonts, primeiro precisamos ir até o site (fonts.google.com)[fonts.google.com], escolher os estilos de fontes que queremos e copiar o link de importação dessa fontes. Após fazer isso, criamos uma nova entrada na propriedade `web` da seção de configuração:

```js
{
  web: [
    // ...outras fontes
    {
      file: '<link da fonte do Google Fonts>',
      name: 'Nome da fonte',
    },
  ];
}
```

## Adicionando um arquivo de fonte local

Para utilizar arquivos de fontes locais, realizamos um procedimento similar ao anterior (fontes do Google Fonts). A principal diferença é que precisamos fazer o upload do arquivo da fonte para nosso projeto, colocando-o na pasta `fonts`. Após isso, abrimos o mesmo arquivo de configuração e, invés de mudarmos a propriedade `web`, mudamos a propriedade `custom`:

```js
{
  custom: [
    // ...outras fontes
    {
      file: '<caminho para o arquivo de fonte>',
      name: 'Nome da Fonte',
    },
  ];
}
```

## Aplicando a fonte aos nossos elementos HTML

Para aplicar a fonte aos nossos elementos HTML, primiero devemos criar um estilo CSS no nosso arquivo de estilos (`src/css/styles.css`):

```css
.minha-fonte {
  font-family: 'Montserrat', sans-serif;
}
```

Depois de criar nosso estilo no arquivo CSS, devemos aplicá-lo em algum elemento no nosso HTML. Mas preste atenção que, nesse projeto, nosso HTML está localizado nos arquivos `.js` (isso ocorre devido ao Gatsby, ferramenta que estamos usando). Não se preocupe com outras coisas que estejam nesses arquivos, se concentrem apenas na estrutura HTML contida neles.

Para aplicar nosso estilo em algum elemento HTML, abra o arquivo que ele esteja localizado e inclua o identificador do estilo na propriedade **className** do seu elemento HTML. Exemplo:

Alterando a fonte de um parágrafo na página inicial (`src/pages/index.js`)

```jsx
<p className="minha-fonte">Meu texto aqui</p>
```

Outra forma de mudar a fonte, é mudá-la em todos os elementos HTML responsáveis pelos textos do site. No nosso arquivo de estilos (`src/css/styles.css`), podemos fazer a seguinte regra de estilo:

```css
h1,
h2,
h3,
h4,
h5,
h6,
p,
div,
span {
  font-family: 'Minha Fonte', sans-serif;
}
```

Essa regra seleciona todos os elementos HTML comumente utilizados para renderizar textos e muda a fonte que usam.
