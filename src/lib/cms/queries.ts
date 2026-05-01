export const GET_PROJECTS_BY_TYPE = `
	query GetProjects($design: Boolean, $code: Boolean, $locales: [Locale!]!) {
    projects(
      locales: $locales
	  first: 30
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
				id
			}
			technologies {
				... on Badge {
					id
					badgeTitle
				}
			}
			problem {
				... on TitleSubtitleDescription {
					id
					title
					subtitle
					description
					list
				}
			}
			users {
				... on TitleSubtitleDescription {
					id
					title
					subtitle
					description
					list
				}
			}
			solution {
				... on TitleSubtitleDescription {
					id
					title
					subtitle
					description
					list
				}
			}
			principles {
				... on TitleSubtitleDescription {
					id
					title
					subtitle
					description
					list
				}
			}
			uxDecisions {
				... on TitleSubtitleDescription {
					id
					title
					subtitle
					description
					list
				}
			}
			outcome {
				... on TitleSubtitleDescription {
					id
					title
					subtitle
					description
					list
				}
			}
			needsTable
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

// ─── PORTFOLIO ITEM ───────────────────────────────────────────────────────────
// Añadir al final de /src/lib/cms/queries.ts

export const GET_PORTFOLIO_ITEMS = `
	query GetPortfolioItems($locales: [Locale!]!) {
		portfolioItems(locales: $locales, orderBy: year_DESC) {
			title
			slug
			portfolioType
			discipline
			year
			roleAndScope
			featured
			contextSummary
			liveUrl
			coverImage {
				url
			}
		}
	}
`;

export const GET_PORTFOLIO_ITEM = `
	query GetPortfolioItem($slug: String!, $locales: [Locale!]!) {
		portfolioItem(where: { slug: $slug }, locales: $locales) {
			title
			slug
			portfolioType
			discipline
			year
			roleAndScope
			stackInContext
			techStack
			liveUrl
			featured
			coverImage {
				url
			}

			contextSummary
			contextBody { raw }
			contextTags
			measurableGoal

			processSummary
			processTags
			realUser { raw }
			criticalFlows { raw }
			explorationAndDiscarded { raw }
			informationArchitecture { raw }
			processImages {
				url
			}

			designDecisionsSummary
			designDecisionsTags
			designDecisions {
				decisionTitle
				decisionBody { raw }
				decisionImage {
					url
				}
			}
			visualSystem { raw }
			edgeCases { raw }

			codeTransitionSummary
			codeTransitionTags
			componentArchitecture { raw }
			whatChangedWhenCoding { raw }
			tokensAndNaming { raw }
			handoffAndDocs { raw }

			gallery {
				url
			}
			beforeAfterImages {
				url
			}
			videoUrl

			resultSummary
			whatChanged { raw }
			whatIdoDifferently { raw }
			metrics { raw }
			nextSteps { raw }
		}
	}
`;
