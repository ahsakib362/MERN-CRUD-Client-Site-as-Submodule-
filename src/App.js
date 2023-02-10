import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import CreatePage from './Pages/CreatePage';
import ReadPage from './Pages/ReadPage';
import UpdatePage from './Pages/UpdatePage';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>

          <Route exact path="/" render={(props)=><ReadPage {...props} key={Date.now()} />}/>
          <Route exact path="/CreateProduct" component={CreatePage}/>
          <Route exact path="/UpdateProduct/:id" component={UpdatePage}/>

        </Switch>
      </BrowserRouter>
    </Fragment>
    
  )
}

export default App



