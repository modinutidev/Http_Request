# Requizição HTTP com Axios, Ciclo de Vida, FlatList e ActivityIndicator
<p>
Este projeto foi desenvolvido com o objetivo de mostrar a aplicação de alguns conceitos, funções e bibliotecas do React Native.
</p>
 
## Ciclo de vida (Hook useEffect), Função Assíncrona (Async Await) e Tratativa de exceção (Try Catch)
<p>
Para renderizar os componentes do aplicativo foi explorada a função de ciclo de vida Hook useEffect. Esta função é executada sempre que o componente for iniciado ou quando uma variável que a função esteja monitorando é atualizada.
<br/>
A função useEffect é responsável por executar a função getMovies que recebe todos os filmes cadastrados em uma API externa por meio de um endpoint (URL de uma API) de forma assíncrona (async await), que assim que a API retorna com os valores armazena os resultados em uma variável local para a renderização posterior do componente ComponentMovie.
<br/>
Também foi adicionado a função getMovies tratativa de exceção (try catch) que se caso ocorra algum problema na comunicação com a API uma mensagem de erro é emitida ao usuário.
</p>
 
## Renderização condicional e Indicador e Loading
<p>
Para renderizar os filmes utilizei o FlatList que tem uma sintax simples, batas preencher ao menos três atributos, data, keyExtractor, renderItem. Em data atribuímos a variável movies onde contém fotos dos filmes cadastrados na API, keyExtractor que atribuimos um id ou key de cada item de data e renderItem que recebe um componente para renderizar item por item.
<br/>
Foi utilizado o ActivityIndicator que mostra um loadind enquanto os itens não são renderizados mostrando ao usuário que a aplicação está trabalhando para algo ser mostrado
</p>
