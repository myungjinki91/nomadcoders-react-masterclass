import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./routers/Coins";
import Coin from "./routers/Coin";

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
