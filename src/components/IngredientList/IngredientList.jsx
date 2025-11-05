import Ingredient from "../Ingredient";

const IngredientList = (props) => {
  return (
    <div>
      <h2>Burger ingredients</h2>
      <ul>
        {props.list.map((ing, index) => {
          return (
            <Ingredient
              key={index}
              ingredient={ing}
              onClick={props.onAddToBurger}
              isInStack={false}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientList;
