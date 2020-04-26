import React from 'react';
import axios from 'axios';

import CocktailListItem from '../item/CocktailListItem.js';

class ChampagneFluteCocktailList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cocktailList: []};
    }

    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute')
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
                <h2>Champagne flute</h2>
                {cocktailListElems}
            </div>
        );
    }
}

export default ChampagneFluteCocktailList;