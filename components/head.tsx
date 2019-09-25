import * as React from "react";
import Head from "next/head";

export interface LayoutProps {
  title?: string;
}

const MHead: React.SFC<LayoutProps> = ({
  title = "TODO Test"
}) => (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="shortcut icon"
        href="/static/favicon.ico"
        type="image/x-icon"
      />
    </Head>
  );

export default MHead;
