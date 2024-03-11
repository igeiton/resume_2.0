export default function Button({ name, setPage }) {
    function scrollIntoMain() {
        document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <button
            onClick={() => {
                setPage();
                scrollIntoMain();
            }}
        >
            {name}
        </button>
    );
}
