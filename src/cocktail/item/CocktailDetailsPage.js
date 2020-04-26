import React from 'react';
import axios from 'axios';

class CocktailDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { details: { strDrink: null, strDrinkThumb: null } };        
    }

    componentDidMount() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.cocktailId}`)
            .then(res => {
                this.setState({ details: res.data.drinks[0] });
            });
    }

    render() {
        return (
            <section className="details-page">
                <h3>{this.state.details.strDrink}</h3>
                <img src={this.state.details.strDrinkThumb} alt="{this.props.details.strDrink}" />                
                <button className="back-button" onClick={this.props.history.goBack} >Back</button>
            </section>);
    }
}

export default CocktailDetailsPage;