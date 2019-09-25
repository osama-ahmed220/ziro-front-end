import * as React from "react";
import { MeQuery } from "../generated/apolloComponent";
import { meQuery } from "../graphql/user/query/me";
import { MyContext } from "../interfaces/MyContext";
import redirect from "./redirect";
import { StatelessPage } from "../interfaces";

export const withAuth = <T extends object>(C: React.ComponentClass<T> | React.FunctionComponent<T>, isRedirect: boolean = false) => {
  const AuthFunctionComponent: StatelessPage<T> = (props) => <C {...props} />;
  AuthFunctionComponent.getInitialProps = async ({ apolloClient, ...ctx }: MyContext) => {
    // console.log(123);
    const response = await apolloClient.query<MeQuery>({ query: meQuery });
    if (!response || !response.data || !response.data.me) {
      if (isRedirect) {
        redirect(ctx, "/login");
      }
      return {
        me: null
      };
    }

    return {
      me: response.data.me,
      query: ctx.query
    };
  };
  return AuthFunctionComponent;
};
