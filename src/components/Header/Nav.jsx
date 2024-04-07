import Button from './Button';
import CustomLink from '../CustomLink';

export default function Nav() {
    return (
        <nav>
            <CustomLink to="/contacts">
                <Button>Contacts</Button>
            </CustomLink>

            <CustomLink to="/stack">
                <Button>Stack</Button>
            </CustomLink>

            <CustomLink to="/work">
                <Button>Work</Button>
            </CustomLink>

            <CustomLink to="/education">
                <Button>Education</Button>
            </CustomLink>
        </nav>
    );
}
