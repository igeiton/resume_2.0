import { Link, useMatch } from 'react-router-dom';

export default function CustomLink({ children, to }) {
    const match = useMatch(to);

    return (
        <Link to={to} className={match ? 'activeLink' : ''}>
            {children}
        </Link>
    );
}
