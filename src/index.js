import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner'
import { About } from './components/About/About'
import { Map } from './components/Map/Map'
import { Mission } from './components/Mission/Mission'
import { Directions } from './components/Directions/Directions'
import './scss/global.scss'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    root.appendChild(Header());
    root.appendChild(Banner());
    root.appendChild(About());
    root.appendChild(Map());
    root.appendChild(Mission());
    root.appendChild(Directions());
});
