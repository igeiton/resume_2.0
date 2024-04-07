import Contacts from './Contacts';
import Stack from './Stack';
import Work from './Work';
import Education from './Education';
import './main.css';
import { Navigate, Routes, Route } from 'react-router-dom';

export default function Main() {
    return (
        <main>
            <div className="background"></div>

            <Routes>
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/stack" element={<Stack />} />
                <Route path="/work" element={<Work />} />
                <Route path="/education" element={<Education />} />
            </Routes>
        </main>
    );
}
