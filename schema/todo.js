export default `

    type Todo {
        id: Int!,
        user_id: Int!,
        title: String!
        description: String!
        completed: Boolean
    }

    type Query {
        todo(id: Int!): Todo
        todos: [Todo!]!
    }

    type Mutation {
        createTodo(title: String!, description: String!, user_id: Int!): Todo!
    }
    
`;
