/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me_projects {
  __typename: "Project";
  id: string;
  title: string;
}

export interface MeQuery_me {
  __typename: "User";
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  projects: MeQuery_me_projects[];
}

export interface MeQuery {
  me: MeQuery_me;
}
