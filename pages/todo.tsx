import * as React from 'react';
import Layout from '../components/layout';

interface IToDoProps {
}

const ToDo: React.FunctionComponent<IToDoProps> = (_) => {
  return <Layout>
    <div>TODO</div>
  </Layout>;
};

export default ToDo;
