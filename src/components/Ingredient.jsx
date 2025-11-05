 const Ingredient = ({ ingredient, onClick, isInStack }) => {
  return (
    <li style={{backgroundColor:ingredient.color}}>
      {ingredient.name}
      <button onClick={() => onClick(ingredient)}>
        {isInStack ? "X" : "+"}
      </button>
    </li>
  )
}

export default Ingredient
