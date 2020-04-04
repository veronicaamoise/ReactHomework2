import React from 'react';

class CocktailDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="details-section">
                <button onClick={this.props.onBackClick}>Hide details</button>
                <div className="flex-container">
                    <img src={this.props.details.strDrinkThumb} alt="{this.props.details.strDrink}" />
                    <div className="cocktail-info">
                        <input disabled value={this.props.details.strDrink} />
                        <input disabled value={this.props.details.idDrink} />
                    </div>
                </div>
            </section>);
    }
}

export default CocktailDetails;