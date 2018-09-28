import '../stylesheets/Menu.css';
import Recipe from './Recipe';

const Menu = ({recipes}) => 
    <article>
        <header>
            <h1>Delicions Recipes</h1>
        </header>
        <div className="recipes">
        {
            recipes.map((recipe, idx) => {
                return <Recipe key={idx} {...recipe} />
            })
        }
        </div>
    </article>

export default Menu