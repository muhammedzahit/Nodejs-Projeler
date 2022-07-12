import { gql } from "@apollo/client";

const GET_ALL_USERS = gql`
    query getAllUsers{
    users{
        id
        fullName
    }
    }
`

export default GET_ALL_USERS