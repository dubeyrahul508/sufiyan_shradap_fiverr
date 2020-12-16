import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  return (  
      <Switch>
        <Route exact path="/product_page" component={ProductPage} />
        <Route exact path="/" component={Home} />
      </Switch> 
  );
}

export default App;
