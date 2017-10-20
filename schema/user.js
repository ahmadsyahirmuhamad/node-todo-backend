export default `

    type User {
        id: Int!,
        email: String!
        password: String!
        first_name: String!
        last_name: String!
        todos: [Todo!]
    }

    type Query {
        getUser(id: Int!): User
        allUsers: [User!]!
    }

    type Mutation {
        createUser(email: String!, password: String!, first_name: String!, last_name: String!): User!
    }

`;
