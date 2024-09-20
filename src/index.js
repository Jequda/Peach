import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner'
import './scss/global.scss'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    root.appendChild(Header());
    root.appendChild(Banner());
});
