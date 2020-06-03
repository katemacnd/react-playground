import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import RouletteGun from './state-drills/RouletteGun'

ReactDOM.render(<RouletteGun chamber='null' spinningTheChamber='false' bulletInChamber/>, document.getElementById('root'));
