import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

import styled from 'styled-components';

import AddCocktailValidator from './AddCocktailValidator.js';
import ImageInputPreview from '../../reusable/ImageInputPreview.js';

const SubmitButton = styled.button`
  height: 28px;
  width: 200px;
  border-radius: 5px;
  background-color: lightgrey;
  margin: 4px;
`;

const heightFill = { height: 'calc(100% - 167px)' };

function AddCocktailPage(props) {
  const [drinkThumb, setDrinkThumb] = useState(null);
  const [saved, setSaved] = useState(false);

  const hideDetails = () => {
    props.history.push('/');
  };

  return (
    <div style={heightFill}>
      <Formik initialValues={{ drinkName: "", firstIngredient: "", secondIngredient: "", drinkQuantity: "" }}
        validateOnBlur
        validate={AddCocktailValidator}

        onSubmit={(values, { setSubmitting, isValid }) => {
          setSubmitting(false);
          setSaved(true);
        }}>
        {({ isValid, values }) =>
          (<Form>
            {saved ? <React.Fragment><div className="float-container">
              <img src={drinkThumb} height="200" width="200" alt="No file selected" />
            </div>
              <div className="float-container">
                <label>{values.drinkName}</label>
                <label>{values.firstIngredient}</label>
                <label>{values.secondIngredient}</label>
                <label>{values.drinkQuantity}</label>
                <SubmitButton disabled={!isValid} onClick={hideDetails}>Hide details</SubmitButton>
              </div></React.Fragment> :
              <React.Fragment>
                <ImageInputPreview setImage={setDrinkThumb} />
                <div className="float-container">
                  <Field type="text" name="drinkName" placeholder="Name"></Field>
                  <ErrorMessage name="drinkName"></ErrorMessage>
                  <Field type="text" name="firstIngredient" placeholder="Ingredient 1"></Field>
                  <ErrorMessage name="firstIngredient"></ErrorMessage>
                  <Field type="text" name="secondIngredient" placeholder="Ingredient 2"></Field>
                  <ErrorMessage name="secondIngredient"></ErrorMessage>
                  <Field type="text" name="drinkQuantity" placeholder="Quantity"></Field>
                  <ErrorMessage name="drinkQuantity"></ErrorMessage>
                  <SubmitButton type="submit" disabled={!isValid}>Create cocktail</SubmitButton>
                </div>
              </React.Fragment>}
          </Form>
          )}
      </Formik>
    </div>
  );
}

export default AddCocktailPage;