const IngredientList = (props) => {
  return (
    <div >
    <h2>Burger ingredients</h2>
    <ul>
      {props.list.map((ing, index) => {
        return <li key={index} style={{backgroundColor:ing.color}}>
            <h2>{ing.name}</h2>
            <button onClick={()=>props.onAddToBurger(ing)}>+</button>
            
        </li>;
      })}
    </ul>
    </div>
  );
};

export default IngredientList;
