import React from 'react';
import { Link } from 'react-router-dom';

const CocktailListItem = (props) => {    

    return (
    <div className="cocktail-item">
        <img src={props.details.strDrinkThumb} alt={props.details.strDrink} />
        <p className="cocktail-name" ><Link to={`/cocktail/${props.details.idDrink}`}>{props.details.strDrink}</Link></p>
    </div>);
}

export default CocktailListItem;