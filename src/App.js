import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Users from "./components/Users";
import Tags from "./components/Tags";
import Layout from "./components/Layout";
import UserDetail from "./components/UserDetail";
import TagPosts from "./components/TagPosts";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact={true} component={Home} path="/" />
          <Route component={Users} path="/users" />
          <Route component={Tags} path="/tags" />
          <Route component={About} path="/about" />
          <Route component={Contact} path="/contact" />
          <Route component={UserDetail} path="/userdetail/:id" />
          <Route component={TagPosts} path="/tagposts/:name" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
