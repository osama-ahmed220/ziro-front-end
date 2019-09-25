import Maybe from "graphql/tsutils/Maybe";

export type UserBasicFragmentFragment = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  name: string;

  email: string;

  password: string;
};

export type MeQuery = {
  __typename?: "Query";

  me: Maybe<MeMe>;
};

export type MeMe = UserBasicFragmentFragment;