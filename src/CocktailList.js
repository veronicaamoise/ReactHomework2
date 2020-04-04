import React from 'react';
import axios from 'axios';

import CocktailListItem from './CocktailListItem.js';
import CocktailDetails from './CocktailDetails.js';

class CocktailList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktailList: [],
            showDetails: false,
            selectedCocktail: null
        };
        this.category = {
            name: props.categoryName,
            filter: props.categoryFilter
        };
    }

    componentDidMount() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${this.category.filter}`)
            .then(res => {
                this.setState({ cocktailList: res.data.drinks });
            });
    }

    showCocktailDetails = (cocktail) => this.setState({ showDetails: true, selectedCocktail: cocktail });
    
    hideCocktailDetails = () => this.setState({ showDetails: false });

    render() {
        const cocktailListElems = this.state.cocktailList.map(cocktail =>
            <CocktailListItem
                details={cocktail}
                key={cocktail.idDrink}
                showCocktailDetails={this.showCocktailDetails}
                openCocktailPage={this.props.openCocktailPage} />);
        return (
            <React.Fragment>
                {this.state.showDetails
                    ? <CocktailDetails details={this.state.selectedCocktail} onBackClick={this.hideCocktailDetails} />
                    : null}
                <div className="cocktail-category">
                    <h2>{this.category.name}</h2>
                    {cocktailListElems}
                </div>
            </React.Fragment>
        );
    }
}

export default CocktailList;