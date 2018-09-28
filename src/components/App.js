import Menu from './Menu';
import data from '../data/recipes';

import AddColorForm from './AddColorForm';


const logColor = (title, color) =>
    console.log(`New Color: ${title} ${color}`)



const App = () => 
    <div>
        <Menu recipes={data} />
        <hr/>
        <AddColorForm onNewColor={logColor} />
    </div>

export default App