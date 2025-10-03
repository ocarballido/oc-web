export const GET_WELCOME = `
	query GetWelcome {
		welcome(where: {}) {
			subtitle
			title
			content {
			html
			markdown
			}
			thinkCard {
			... on ThinkCard {
				id
				link
				title
				tools {
				... on Badge {
					id
					badgeTitle
				}
				}
				type
			}
			}
		}
	}
`;

export const GET_PROJECTS = `
	query GetProjects {
		projects(orderBy: year_DESC) {
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

export const GET_DESIGN_PROJECTS = `
	query GetProjects {
		projects(where: { design: true }, orderBy: year_DESC) {
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

export const GET_DEVELOP_PROJECTS = `
	query GetProjects {
		projects(where: { code: true }, orderBy: year_DESC) {
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
