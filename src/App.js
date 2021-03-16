import "./styles.css";
import Home from "./pages/Home";
import AddPost from "../src/pages/AddPost";
import Authors from "../src/pages/Authors";
import { Route, Switch } from "react-router-dom";
import routes from "../src/routes/routes";

export default function App() {
  return (
    <Switch>
      <Route exact path={routes.home}>
        <Home />
      </Route>
      <Route path={routes.newPost}>
        <AddPost />
      </Route>
      <Route path={routes.authors}>
        <Authors />
      </Route>
    </Switch>
  );
}
