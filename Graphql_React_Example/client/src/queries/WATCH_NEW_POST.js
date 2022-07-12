import {gql} from '@apollo/client'

const POST_SUBSCRIPTION = gql`
		subscription($searchKey : String){
			watchNewPosts(searchKey : $searchKey) {
				id
				title
				short_description
				user {
					id
					fullName
					photoUrl
				}
			}
		}
	`;

export default POST_SUBSCRIPTION