import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner'
import { About } from './components/About/About'
import { Map } from './components/Map/Map'
import './scss/global.scss'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    root.appendChild(Header());
    root.appendChild(Banner());
    root.appendChild(About());
    root.appendChild(Map());
});
