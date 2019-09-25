import App, { Container } from "next/app";
import { withRouter, WithRouterProps } from "next/router";
import { ApolloProvider, compose } from "react-apollo";

import withApollo from "../lib/withApollo";

class MyApp extends App<WithRouterProps | any> {

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default compose(
  withApollo,
  withRouter
)(MyApp);
