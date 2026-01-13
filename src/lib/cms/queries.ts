export const GET_PROJECTS_BY_TYPE = `
	query GetProjects($design: Boolean, $code: Boolean, $locales: [Locale!]!) {
    projects(
      locales: $locales
      where: {
        OR: [
          { design: $design }
          { code: $code }
        ]
      }
      orderBy: date_DESC
    ) {
      id
      title
      shortDescription
      link
      code
      client
      design
      date
      thumbnail {
        url
      }
    }
  }
`;

export const GET_DESIGN_PROJECTS = `
	query GetProjects {
		projects(where: { design: true }, orderBy: date_DESC) {
			id
			title
			shortDescription
			link
			code
			design
			date
            thumbnail {
                url
            }
		}
	}
`;

export const GET_DEVELOP_PROJECTS = `
	query GetProjects {
		projects(where: { code: true }, orderBy: date_DESC) {
			id
			title
			shortDescription
			link
			code
			design
			date
            thumbnail {
                url
            }
		}
	}
`;

export const GET_PROJECT_BY_ID = `
	query GetProjectById($id: ID!, $locales: [Locale!]!) {
		project(where: { id: $id }, locales: $locales) {
			id
			title
			shortDescription
			description
			client
			role
			code
			date
			design
			images {
				url
			}
			technologies {
				... on Badge {
				id
					badgeTitle
				}
			}
			link
			thumbnail {
				url
			}
		}
	}
`;

export const GET_TRAJECTORIES = `
	query GetTrajectories($locales: [Locale!]!) {
		trajectories(locales: $locales) {
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

export const GET_WELCOME = `
	query GetWelcome($locales: [Locale!]!) {
		welcomes(locales: $locales) {
			id
			thinkCard {
				... on ThinkCard {
				id
				type
				tools {
					... on Badge {
					id
					badgeTitle
					}
				}
				title
				link
				description
				}
			}
			title
			subtitle
			content
		}
	}
`;

export const GET_SKILLS = `
	query GetSkills($locales: [Locale!]!) {
		skills(locales: $locales) {
			skill {
				type
				categories {
					... on SkillCategoryList {
						id
						list
						title
					}
				}
			}
		}
	}
`;
