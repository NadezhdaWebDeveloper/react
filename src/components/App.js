import Menu from './Menu';
import StarRating from './StarRating';
import data from '../data/recipes';

import AddColorForm from './AddColorForm';


const logColor = (title, color) =>
    console.log(`New Color: ${title} ${color}`)



const App = () => 
    <div>
        <Menu recipes={data} />
        <hr/>
        <AddColorForm onNewColor={logColor} />
        <hr/>
        <StarRating totalStars={7} starsSelected={3} />
    </div>

export default App