import {gql} from '@apollo/client'

const GET_POSTS = gql`
	query getPosts($searchKey: String) {
		posts(searchKey: $searchKey) {
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

export default GET_POSTS