import React from 'react';

const CocktailListItem = (props) => {
    var onImageClick = () => {
        props.openCocktailPage(props.details);
    };

    var onTitleClick = () => {
        props.showCocktailDetails(props.details);
    };

    return (
    <div className="cocktail-item">
        <img src={props.details.strDrinkThumb} alt={props.details.strDrink} onClick={onImageClick}/>
        <p className="cocktail-name" onClick={onTitleClick}>{props.details.strDrink}</p>
    </div>);
}

export default CocktailListItem;