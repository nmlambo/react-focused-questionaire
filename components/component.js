import React from 'react';
import ReactDOM from 'react-dom';
import { DivWithHeight } from './DivWithHeight';

const App = (props) => {
    return (
        <div style={{ border: '1px solid black', height: props.height }}>
            <span>{props.height}</span>
            <input type="text" onChange={(e) => setDivHeight(e.target.value)} />
        </div>

    )

}

const setDivHeight = (height) => {
    window.setDivHeight(height);
}

const App = () => {
    return (
        <div>
            <DivWithHeight />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));