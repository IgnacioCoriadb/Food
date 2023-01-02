import './App.css';
import {Route} from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Home from './Components/home/Home.jsx';
import RecipeId from './Components/Recipes/RecipeId';
import NewRecipe from './Components/NewRecipe/newRecipe';
import Project from './Components/Project/Project';

function App() {
  return (
    <div className="App">

      <Route>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/recipe/:id" component={RecipeId}/>
        <Route exact path="/newRecipe" component={NewRecipe}/>
        <Route exact path="/project" component={Project}/>
      </Route>
    </div>
  );
}

export default App;
