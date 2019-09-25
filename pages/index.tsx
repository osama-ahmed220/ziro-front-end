import * as React from 'react';
import LoginScreen from '../components/LoginScreen';
import { StatelessPage } from '../interfaces';
import { withAuth } from '../lib/withAuth';

interface IIndexProps {
}

const Index: StatelessPage<IIndexProps> = ({ }) => {
  return <LoginScreen />;
};

export default withAuth(Index);
