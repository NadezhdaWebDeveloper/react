import {Component} from 'react';

import data from '../data/recipes';

import Menu from './Menu';
import ColorList from './ColorList';
import AddColorForm from './AddColorForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }
    }

    render() {
        const {colors} = this.state;
        return (
            <div className="app">
                <Menu recipes={data} />
                <hr/>
                <br/>
                <AddColorForm />
                <ColorList colors={colors} />
            </div>
        )
    }
}

export default App