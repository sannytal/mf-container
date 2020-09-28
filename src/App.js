import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import MicroFrontend from './MicroFrontend';

const {
  REACT_APP_PRODUCT_HOST: ProductHost,
  REACT_APP_FEEDBACK_HOST: FeedBackHost,
  REACT_APP_USER_HOST: userHost,
} = process.env;

const Product = ({ history }) => (
  <MicroFrontend history={history} host={ProductHost} name="Product" />
);
const FeedBack = ({ history }) => (
  <MicroFrontend history={history} host={FeedBackHost} name="Feedback" />
);
const User = ({ history }) => (
  <MicroFrontend history={history} host={userHost} name="User" />
);

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Product} />
        <Route exact path="/feedback" component={FeedBack} />
        <Route exact path="/user" render={User} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
