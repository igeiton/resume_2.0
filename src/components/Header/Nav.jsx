import Button from './Button';

export default function Nav({ setPage }) {
    return (
        <nav>
            <Button setPage={() => setPage('contacts')} name="Contacts" />
            <Button setPage={() => setPage('stack')} name="Stack" />
            <Button setPage={() => setPage('work')} name="Work" />
            <Button setPage={() => setPage('education')} name="Education" />
        </nav>
    );
}
