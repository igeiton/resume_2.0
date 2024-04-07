export default function Button({ children }) {
    function scrollIntoMain() {
        document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
    }

    return <div onClick={scrollIntoMain}>{children}</div>;
}
