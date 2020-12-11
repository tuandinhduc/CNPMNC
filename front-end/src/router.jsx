import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home, User, Error, Login, Detail, Signup, PostPage } from "./pages";
import { useAuth } from "./hooks/use-auth.js";
export default function Router() {
  const { user } = useAuth();
  console.log(user);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path={`/posts/:postId`} component={Detail} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/post" component={PostPage} />

        {user == "user" ? (
          <Route path="/user" component={User} />
        ) : (
          <Redirect to="/" />
        )}
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
