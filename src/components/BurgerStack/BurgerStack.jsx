import Ingredient from "../Ingredient";

const BurgerStack = (props) => {
  return (
    <div>
      <h2>Burger ingredients</h2>
      <ul>
        {props.burgerIngs.length === 0 ? (
          <p>No ingredients</p>
        ) : (
          props.burgerIngs.map((ing, index) => {
            return (
              <Ingredient
                key={index}
                ingredient={ing}
                onClick={props.onRemoveFromBurger}
                isInStack={true}
              />
            );
          })
        )}
      </ul>
      ;
    </div>
  );
};

export default BurgerStack;
