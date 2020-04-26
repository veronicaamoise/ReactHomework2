import React from 'react';
import axios from 'axios';

import CocktailListItem from '../item/CocktailListItem.js';

class NonAlcoholicCocktailList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cocktailList: []};
    }

    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            .then(res => {
                this.setState({ cocktailList: res.data.drinks });
            });
    }

    render() {
        const cocktailListElems = this.state.cocktailList.map(cocktail =>
            <CocktailListItem
                details={cocktail}
                key={cocktail.idDrink} />);
        return (
            <div className="cocktail-category">
                <h2>Non Alcoholic</h2>
                {cocktailListElems}
            </div>
        );
    }
}

export default NonAlcoholicCocktailList;