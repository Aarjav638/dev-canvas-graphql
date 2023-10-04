export const getUserQuery = `
    query GetUser($email: String!){
        user(by: {email: $email}) {
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedinUrl
        }
    }
`;

export const getProjectsQuery = `
query GetProjects($category: String, $endCursor: String) {
    projectCollection(first: 8, after: $endCursor, filter: {category: {eq: $category}}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        title
        githubUrl
        description
        liveSiteUrl
        id
        image
        category
        createdBy {
          id
          email
          name
          avatarUrl
        }
      }
    }
  }
}
`;

export const getProjectByIdQuery = `
query GetProjectById($id: ID!) {
  project(by: {id: $id}) {
    title
    githubUrl
    description
    liveSiteUrl
    id
    image
    category
    createdBy {
      id
      email
      name
      avatarUrl
    }
  }
}
`;

export const getProjectsOfUserQuery = `
  query getUserProjects($id: ID!, $last: Int = 4) {
    user(by: { id: $id }) {
      id
      name
      email
      description
      avatarUrl
      githubUrl
      linkedinUrl
      projects(last: $last) {
        edges {
          node {
            id
            title
            image
          }
        }
      }
    }
  }
`;
