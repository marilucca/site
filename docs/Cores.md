# Como editar cores

## Alterando as cores da Template que estamos usando

Para alterar as cores da nossa template, primeiro temos que abrir o arquivo de configuração que essa template utiliza(`./tailwind.config.js`). Para editar a cor que a template usa, mudamos o valor das propriedaes `lighter`, `default` e `darker` da nossa cor primária(_primary_) para ser o código da cor que queremos utilizar. Exemplo:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(103,44%, 44%)',
          default: 'hsl(103,44%,39%)',
          darker: 'hsl(103,44%,34%)',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
```

## Adicionando novas cores

Para adicionar novas cores, primeiro devemos abrir nosso arquivo CSS, localizado em: `src/css/styles.css`. Depois, criamos o estilo que queremos e usamos uma das propriedades relacionadas a coloração dos nossos elementos para mudar sua cor. Exemplo:

Para mudar a cor de um texto, faríamos:

```css
.my-text {
  color: #508e37;
}
```

Depois de criar nosso estilo no arquivo CSS, devemos aplicá-lo em algum elemento no nosso HTML. Mas preste atenção que, nesse projeto, nosso HTML está localizado nos arquivos `.js` (isso ocorre devido ao Gatsby, ferramenta que estamos usando). Não se preocupe com outras coisas que estejam nesses arquivos, se concentrem apenas na estrutura HTML contida neles.

Para aplicar nosso estilo em algum elemento HTML, abra o arquivo que ele esteja localizado e inclua o identificador do estilo na propriedade **className** do seu elemento HTML. Exemplo:

Alterando a cor de um parágrafo na página inicial do site (arquivo `src/pages/index.js`):

```jsx
// <!-- coisas anteriores -->
<p className="my-text">Meu texto aqui</p>
// <!-- coisas posteriores -->
```
