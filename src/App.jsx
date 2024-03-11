import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './style.css';

export default function App() {
    const [page, setPage] = useState(
        localStorage.getItem('page') || 'contacts'
    );

    useEffect(() => {
        localStorage.setItem('page', page);
    });

    return (
        <>
            <Header setPage={setPage} />
            <Main currentPage={page} />
        </>
    );
}
