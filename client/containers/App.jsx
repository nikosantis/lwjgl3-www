// @flow
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { BreakpointProvider } from '../components/Breakpoint';

// Pull common modules that we want preloaded in the main chunk
import '../components/icons/Icon';
import './PageView';

const supportsHistory = 'pushState' in window.history;

const App = () => (
  <BreakpointProvider>
    <BrowserRouter forceRefresh={!supportsHistory} keyLength={12}>
      <Layout />
    </BrowserRouter>
  </BreakpointProvider>
);

export default App;
