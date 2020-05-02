const AddCocktailValidator = values => {
  const errors = {};

  if (!values.drinkName) {
    errors.drinkName = "Required";
  } else if (!/^[A-Z0-9._-]+$/i.test(values.drinkName)) {
    errors.drinkName = "Drink name invalid";
  }

  if (!values.firstIngredient) {
    errors.firstIngredient = "Required";
  } else if (values.firstIngredient.length > 50) {
    errors.firstIngredient = "Ingredient name must have 50 characters maximum";
  }

  if (!values.secondIngredient) {
    errors.secondIngredient = "Required";
  } else if (values.firstIngredient && values.firstIngredient === values.secondIngredient) {
    errors.secondIngredient = "Ingredients must be different";
  }
  if (!values.drinkQuantity) {
    errors.drinkQuantity = "Required";
  } else if (!/^[0-9]+$/i.test(values.drinkQuantity)) {
    errors.drinkQuantity = "Quantity must be a number";
  }
  return errors;
}

export default AddCocktailValidator;