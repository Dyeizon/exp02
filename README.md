# Sorteador Online

## Tecnologias
ExpressJS com EJS como Template Engine


## Como funciona
É um sorteador que aleatoriza um número entre x e y. Além de sortear, ele armazena os números sorteados em um array, e o mostra no fim da página.
Modelado nos padrões MVC, o SorteadorModel conta com o atributo `history`, que é um array, que armazena todos os números sorteados, contendo também funções de get e set. O SorteadorView renderiza o arquivo index.html e passa como parâmetro o array `history`. O SorteadorController recebe tanto o Model quanto o View como parâmetro, para interligá-los, e implementa a função `add_history` que chama a mesma função do Model, `show_history` que renderiza o atributo na View, e `random_num` que faz o cálculo de aleatorização entre x e y.

Na interface, o usuário pode inserir dois números e utilizar o botão de submit para enviar a requisição ao Controller através da rota `/sortear`, que captura os campos do corpo da requisição POST do formulário, e os utiliza em suas funções.
