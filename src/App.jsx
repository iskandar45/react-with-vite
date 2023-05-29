import Layouts from "./components/templates/Layouts"
import Detail from "./pages/Detail"
import Home from "./pages/Home"
import { BrowserRouter, Switch, Route } from "react-router-dom"
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layouts>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
        </Layouts>
      </Switch>
    </BrowserRouter>
  )
}
