import Ingredient from './Ingredient'

const IngredientsList = ({list}) =>
    <ul className="ingredients">
    {
        list.map((ingredient, idx) => {
            return <Ingredient key={idx} {...ingredient} />
        })
    }
    </ul>

export default IngredientsList