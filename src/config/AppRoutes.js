import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import {
  App,
  Signup,
  Home,
  CreatePredictors,
  TrainingEvent
} from './../components/index';

import {
  Signin,
} from './../container/index';

const ParentApp = () => (
  <div>
    <App/>

    {/* App routing goes here!! */}
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/createPredictors" component={CreatePredictors} /> 
    <Route exact path="/login" component={Signin} /> 
    <Route exact path="/dashboard" component={Home} />
    <Route exact path="/trainingEvent" component={TrainingEvent} />

  </div>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route component={ParentApp} />
    </BrowserRouter>
  )
};

export default AppRoutes;