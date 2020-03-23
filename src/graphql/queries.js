/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const fetchRecipe = /* GraphQL */ `
  query FetchRecipe($id: ID!) {
    fetchRecipe(id: $id) {
      id
      name
      ingredients
      instructions
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      name
      ingredients
      instructions
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: TableRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ingredients
        instructions
      }
      nextToken
    }
  }
`;
