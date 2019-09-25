import { ApolloQueryResult } from "apollo-boost";
// import { MeMe } from "../generated/apolloComponent";

// export interface CrudProps<D, U, C> {
//   deleteBy: D;
//   updateBy: U;
//   create: C;
//   me?: MeMe;
// }

export interface withRefetch<V, Q> {
  refetch: (variables?: V) => Promise<ApolloQueryResult<Q>>;
}

export interface StatelessPage<P = {}> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P | any>
}
