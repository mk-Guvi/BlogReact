import "./styles.css";
import Header from "./commonComponents/Header";
import Home from "./pages/Home";
import AddPost from "../src/pages/AddPost";
import Post from "../src/pages/Post";
import Authors from "../src/pages/Authors";
import { Route, Switch, Link } from "react-router-dom";
import routes from "../src/routes/routes";
import { useContext } from "react";
import {ThemeContext} from "./providers/ThemeProvider/ThemeProvider";
import { Button } from "reactstrap";

export default function App() {
  const theme = useContext(ThemeContext);
  return (
    <>
      {/* <ul>
            <li>
              <Link to={routes.home}>Home</Link>
            </li>
            <li>
              <Link to={routes.authors}>Authors</Link>
            </li>
            <li>
              <Link to={routes.newPost}>Add POSTS</Link>
            </li>
          </ul> */}
      <Header />
      <Button className="but"onClick={theme.toggle}>{theme.mode}</Button>
      <Switch>
        <Route exact path={routes.home}>
          <Home />
        </Route>
        <Route path={routes.newPost}>
          <AddPost />
        </Route>
        <Route path={routes.post}>
          <Post />
        </Route>
        <Route path={routes.authors}>
          <Authors />
        </Route>
      </Switch>
    </>
  );
}
