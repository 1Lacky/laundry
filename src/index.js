import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import data from './data'
import './index.css';

ReactDOM.render(<App data={data} />, document.getElementById('root'));
