import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context';
import { Route } from 'react-router';
import PageInfo from './functionPage';
import RequestInfo from './components/RequestPage';

export default () => {
  return (
    <UserProvider>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={PageInfo} />
            <Route path='/details' exact component={RequestInfo} />
          </div>
        </BrowserRouter> 
    </UserProvider>
  );
};
