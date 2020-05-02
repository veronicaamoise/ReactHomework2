import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';

function CocktailDetailsPage(props) {
    const [details, setDetails] = useState({ strDrink: null, strDrinkThumb: null });
    const match = useRouteMatch();

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.cocktailId}`)
        .then(res => {
            setDetails(res.data.drinks[0]);
        });
    }, []);


    return (
        <section className="details-page">
            <h3>{details.strDrink}</h3>
            <img src={details.strDrinkThumb} alt={details.strDrink} />
            <button className="back-button" onClick={props.history.goBack} >Back</button>
        </section>);
}

export default CocktailDetailsPage;