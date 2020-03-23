/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe(
    $id: ID
    $name: String
    $ingredients: [String!]
    $instructions: [String!]
  ) {
    onCreateRecipe(
      id: $id
      name: $name
      ingredients: $ingredients
      instructions: $instructions
    ) {
      id
      name
      ingredients
      instructions
    }
  }
`;
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe(
    $id: ID
    $name: String
    $ingredients: [String!]
    $instructions: [String!]
  ) {
    onUpdateRecipe(
      id: $id
      name: $name
      ingredients: $ingredients
      instructions: $instructions
    ) {
      id
      name
      ingredients
      instructions
    }
  }
`;
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe(
    $id: ID
    $name: String
    $ingredients: [String!]
    $instructions: [String!]
  ) {
    onDeleteRecipe(
      id: $id
      name: $name
      ingredients: $ingredients
      instructions: $instructions
    ) {
      id
      name
      ingredients
      instructions
    }
  }
`;
