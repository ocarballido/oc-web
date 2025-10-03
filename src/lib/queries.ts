// /lib/queries.ts
// export const GET_PROJECTS = `
// 	query GetProjects {
// 		projects {
// 			id
// 			title
// 			shortDescription
// 			link
// 			code
// 			client
// 			role
// 			design
// 			description
// 			technologies {
//                 ... on Badge {
//                     id
//                     badgeTitle
//                 }
//             }
// 			year
// 		}
// 	}
// `;
export const GET_PROJECTS = `
	query GetProjects {
		projects {
			id
			title
			shortDescription
			link
			code
			design
			year
            thumbnail {
                url
            }
		}
	}
`;

export const GET_TRAJECTORIES = `
	query GetTrajectories {
        trajectories {
            begin
            company
            end
            id
            location
            responsabilities
            role
            tools {
            ... on Badge {
                id
                badgeTitle
            }
            }
        }
    }
`;
