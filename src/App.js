import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ChampagneFluteCocktailList from './cocktail/lists/ChampagneFluteCocktailList.js';
import CocktailGlassesList from './cocktail/lists/CocktailGlassesList';
import OrdinaryCocktailList from './cocktail/lists/OrdinaryCocktailList';
import NonAlcoholicCocktailList from './cocktail/lists/NonAlcoholicCocktailList';
import AlcoholicCocktailList from './cocktail/lists/AlcoholicCocktailList';

import CocktailDetailsPage from './cocktail/item/CocktailDetailsPage.js';
import Navbar from './NavBar';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Cocktails
        </p>
        </header>
        <BrowserRouter>
          <div className="categories-menu"><Navbar /></div>
          <Switch>
            <Route path="/alcoholic" component={AlcoholicCocktailList}></Route>
            <Route path="/non-alcoholic" component={NonAlcoholicCocktailList}></Route>
            <Route path="/ordinary" component={OrdinaryCocktailList}></Route>
            <Route path="/cocktail-glasses" component={CocktailGlassesList}></Route>
            <Route path="/champagne-flutes" component={ChampagneFluteCocktailList}></Route>
            <Route path="/cocktail/:cocktailId" component={CocktailDetailsPage}></Route>
            <Route path="/" component={AlcoholicCocktailList}></Route>
          </Switch>
        </BrowserRouter>
        <footer className="app-footer"></footer>
      </div>
    );  
}

export default App;
