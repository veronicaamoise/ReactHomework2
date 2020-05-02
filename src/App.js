import React from 'react';
import './App.sass';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CocktailList from './cocktail/lists/CocktailList';

import CocktailDetailsPage from './cocktail/item/CocktailDetailsPage.js';
import Navbar from './NavBar';
import AddCocktailPage from './cocktail/add/AddCocktailPage.js';

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
            <Route path="/alcoholic"><CocktailList categoryName="Alcoholic" categoryFilter="a=Alcoholic"/></Route>
            <Route path="/non-alcoholic"><CocktailList categoryName="Non Alcoholic" categoryFilter="a=Non_Alcoholic"/></Route>
            <Route path="/ordinary"><CocktailList categoryName="Ordinary" categoryFilter="c=Ordinary_Drink"/></Route>
            <Route path="/cocktail-glasses"><CocktailList categoryName="Cocktail glasses" categoryFilter="g=Cocktail_glass"/></Route>
            <Route path="/champagne-flutes"><CocktailList categoryName="Champagne flute" categoryFilter="g=Champagne_flute"/></Route>
            <Route path="/cocktail/add" component={AddCocktailPage}></Route>
            <Route path="/cocktail/:cocktailId" component={CocktailDetailsPage}></Route>            
            <Route path="/"><CocktailList categoryName="Alcoholic" categoryFilter="a=Alcoholic"/></Route>
          </Switch>
        </BrowserRouter>
        <footer className="app-footer"></footer>
      </div>
    );  
}

export default App;
