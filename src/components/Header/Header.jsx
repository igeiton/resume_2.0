import { useState } from 'react';
import Nav from './Nav';
import Photo from './Photo';
import './header.css';
import uploadPhoto from '../../assets/upload-photo.png';
import bar from '../../assets/bar.png';

export default function Header() {
    const [background, setBackground] = useState(
        localStorage.getItem('photo') || uploadPhoto
    );

    let combinedKeys;
    document.onkeydown = (e) => {
        if (e.key === 'Control') {
            combinedKeys = 'Control';
        }
        if (combinedKeys + e.key === 'ControlF5') {
            localStorage.clear();
        }
    };

    return (
        <header>
            <div
                style={{ backgroundImage: `url(${bar})` }}
                className="background"
            ></div>
            <Photo setBackground={setBackground} />
            <Nav />
        </header>
    );
}
