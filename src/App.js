import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from './components/Layout';
import  '../src/styles/global.css'
import notFound from './pages/notFound'
import Home from './pages/Home'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import 'bootstrap/dist/css/bootstrap.css';
const App =()=>(
 
<BrowserRouter>
<Layout>
  <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/project/:id" component={Project} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/project" component={Project} />
      <Route component={notFound}  />
    </Switch>
  </Layout>
</BrowserRouter>

 
);

export default App;


