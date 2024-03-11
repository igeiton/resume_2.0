import { useState } from 'react';
import Contacts from './Contacts';
import Stack from './Stack';
import Work from './Work';
import Education from './Education';
import './main.css';

export default function Main({ currentPage }) {
    return (
        <main>
            <div className="background"></div>
            {currentPage == 'contacts' && <Contacts />}
            {currentPage == 'stack' && <Stack />}
            {currentPage == 'work' && <Work />}
            {currentPage == 'education' && <Education />}
        </main>
    );
}
