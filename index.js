const { ApolloServer, gql} = require("apollo-server");

const typeDefs = gql`
    scalar Date

    type Usuario{
        id: ID!,
        nome: String!,
        email: String!,
        token: String!,     
    }

    # Entradas da API
    type Query {
        HelloWorld: String,
        Teste: String,
        Login: String,
        HoraAtual: Date,
        Auth: Usuario
    }
    `

const resolvers = {

    Query: {
        HelloWorld: () => "Bem-vindo a API GraphQL",
        Teste: () => "Rota de Teste",
        Login: () => "Rota de Login",
        HoraAtual: () => new Date()
    }

}

const server = new ApolloServer({ 
    typeDefs, 
    resolvers 
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});

