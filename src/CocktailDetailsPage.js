import React from 'react';

class CocktailDetailsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="details-page">
                <h3>{this.props.details.strDrink}</h3>
                <img src={this.props.details.strDrinkThumb} alt="{this.props.details.strDrink}" />
                <button className="back-button" onClick={this.props.onBackClick}>Back</button>
            </section>);
    }
}

export default CocktailDetailsPage;