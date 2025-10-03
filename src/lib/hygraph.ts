import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(process.env.HYGRAPH_API_ENDPOIN as string);

// const hygraph = new GraphQLClient(process.env.HYGRAPH_API_ENDPOIN as string, {
// 	headers: {
// 		Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
// 	},
// });

export default hygraph;
