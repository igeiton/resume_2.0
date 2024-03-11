import { useState } from 'react';
import Nav from './Nav';
import Photo from './Photo';
import './header.css';
import klaus from '../../assets/klaus.jpg';
import uploadPhoto from '../../assets/upload-photo.png';

export default function Header({ setPage }) {
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
                style={{ backgroundImage: `url(${background})` }}
                className="background"
            ></div>
            <Photo setBackground={setBackground} />
            <Nav setPage={setPage} />
        </header>
    );
}
