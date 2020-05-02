import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import CocktailListItem from '../item/CocktailListItem.js';

const AddButton = styled.button`
    border-radius: 100%;
    height: 50px;
    width: 50px;
    font-size: 16px;
    position: fixed;
    bottom: 50px;
    left: 50px;
    border-style: none;
`;

function CocktailList(props) {
    const [cocktailList, setCocktailList] = useState([]);

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${props.categoryFilter}`)
            .then(res => {
                setCocktailList(res.data.drinks);
            });
    }, [props.categoryFilter]);

    const listElems = cocktailList.map(cocktail =>
        <CocktailListItem
            details={cocktail}
            key={cocktail.idDrink} />);

    return (
        <div className="cocktail-category">
            <h2>{props.categoryName}</h2>
            {listElems}
            <AddButton><Link to="cocktail/add">Add</Link></AddButton>
        </div>
    );
}

export default CocktailList;