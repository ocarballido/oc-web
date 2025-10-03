import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(process.env.HYGRAPH_API_ENDPOIN as string);

export default hygraph;
