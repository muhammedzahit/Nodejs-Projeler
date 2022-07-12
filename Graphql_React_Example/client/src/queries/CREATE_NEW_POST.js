import { gql } from "@apollo/client";

const CREATE_NEW_POST = gql`
    mutation($description : String!, $title : String!, $user_id : ID!){
    addNewPost(description:$description, title:$title, user_id:$user_id){
        id
    } 
}
`

export default CREATE_NEW_POST