### Passo a Passo do desenvolvimento do projeto e o que aprendi.

O intuito do projeto, foi desenvolver um aplicativo que faz calculos de investimentos, baseado em valores passados pelo usuário.

## Componentes de projeto.

# Header.jsx

- Componente responsável por exibir o Header da aplicaçao, exibindo um título e uma imagem.

# UserInput.jsx

- Esse componente recebe como props 2 parametros. O primeiro é uma funcao responsavel por editar os valores de um State, baseado na mudanca dos valores dos inputs pelo o usuário. O segundo é o propio State, que é utilizado para alterar a propriedade value de cada input.

Basicamente esse componente exibe 4 labels e 4 inputs na tela, inputs responsaveis para captar os valores necessários para fazer os calculos dos investimentos.

# Results.jsx

- Esse componente recebe como prop o State com os valores digitados pelo usuário.
- Faz o import de uma funçao responsavel pelo calculo dos investimentos, que recebe o State como parametro.
- Retorna uma tabela, que é preenchida com o uso do .map, percorrendo todo o objto e mostrando os valores na tela dentro de cada <td>.

# App.jsx

- Foi criado um state, chamado userInput, que é responsavel por armazenar os dados digitados do usuário.
- Esse state foi declarado primeiramente no componente UserInput, mas como o mesmo state seria usado em mais de um componente, foi feito um state lifiting no mesmo.
- Nesse componente tambem foi declarada a funçao que é responsavel por fazer o update dos valores desse state.
- E para finalizar foi importado e chamado os os componentes da aplicaçao.
