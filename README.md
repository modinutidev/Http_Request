# Requizição HTTP com Axios, Ciclo de Vida, FlatList e ActivityIndicator
<p>
Este projeto foi desenvolvido com o objetivo de mostrar a aplicação de alguns conceitos, funções e bibliotecas do React Native.
</p>

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/48818414/152078079-9a84be32-c36c-4f24-adf7-3ea2fc20c010.gif)

## Ciclo de vida (Hook useEffect), Função Assíncrona (Async Await) e Tratativa de exceção (Try Catch)
<p>
Para renderizar os componentes do aplicativo foi explorada a função de ciclo de vida Hook useEffect. Esta função é executada sempre que o componente é iniciado ou quando uma variável que a função esteja monitorando é atualizada.
<br/>
Foi adicionado em useEffect a função getMovies, assim sempre que a aplicação é inicializada a função é executada recebendo todos os filmes cadastrado em uma API.
Os dados são acessado por meio de um endpoint (URL de uma API) de forma assíncrona (async await), que assim que a API retorna com os valores armazena os resultados em uma variável local para a renderização posterior do componente ComponentMovie.
<br/>
Também foi incrementado na função getMovies tratativa de exceção (try catch) que se caso ocorra algum problema na comunicação com a API, ou problema de conexão com a internet, uma mensagem de erro é emitida ao usuário.
</p>
 
## Renderização condicional e Indicador e Loading
<p>
Para renderizar os filmes utilizei o FlatList que tem uma sintax simples, batas preencher ao menos três atributos, data, keyExtractor, renderItem. Em data atribuímos a variável movies onde contém fotos dos filmes cadastrados na API, keyExtractor que atribuimos um id ou key de cada item de data e renderItem que recebe um componente para renderizar item por item.
<br/>
Foi utilizado o ActivityIndicator que mostra um loadind enquanto os itens não são renderizados mostrando ao usuário que a aplicação está trabalhando para algo ser mostrado.
</p>
