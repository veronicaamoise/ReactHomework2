import React from 'react';
import './App.css';
import CocktailList from './CocktailList.js';
import CocktailDetailsPage from './CocktailDetailsPage.js';

class App extends React.Component {
   constructor(props) {
    super(props);
    this.categories = [
      { name: 'Alcoholic', filter: 'a=Alcoholic' },
      { name: 'Non-Alcoholic', filter: 'a=Non_Alcoholic' },
      { name: 'Ordinary', filter: 'c=Ordinary_Drink' },
      { name: 'Cocktail glass', filter: 'g=Cocktail_glass' },
      { name: 'Champagne flute', filter: 'g=Champagne_flute' }];
    this.state = {
      showCocktailPage: false,
      selectedCocktail: null
    }
  }

  openCocktailPage = (cocktail) => this.setState({ selectedCocktail: cocktail, showCocktailPage: true });

  closeCocktailPage = () => this.setState({ showCocktailPage: false });

  render() {
    const buttonList = this.categories.map((cat, index) => <button key={index}>{cat.name}</button>);
    const categoryCompList = this.categories.map(cat =>
      <CocktailList categoryName={cat.name} categoryFilter={cat.filter} openCocktailPage={this.openCocktailPage} key={cat.name} />);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Cocktails
        </p>
        </header>
        <div className="categories-menu">{buttonList}</div>
        <div className="search-input" >
          <input type="text" placeholder="Search by name" />
        </div>
        {this.state.showCocktailPage
          ? <CocktailDetailsPage details={this.state.selectedCocktail} onBackClick={this.closeCocktailPage} />
          : categoryCompList}
        <footer className="app-footer"></footer>
      </div>
    );
  }
}

export default App;
