import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MHead from "./head";
import MyAppBar from "./AppBar";

export interface LayoutProps {
  title?: string;
}

const useStyles = makeStyles(() => ({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
    },
  },
}));

const Layout: React.SFC<LayoutProps> = ({
  children,
  title = "TODO Test"
}) => {
  useStyles();
  return <>
    <MHead title={title} />
    <MyAppBar />
    {children}
  </>;
};

export default Layout;
