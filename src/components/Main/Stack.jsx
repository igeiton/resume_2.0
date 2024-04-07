export default function Stack() {
    return (
        <div id="page" className="stack">
            <div className="tech">
                <div>
                    <img src="src/assets/typescript-dark.png" alt="" />
                    <span>TypeScript</span>
                </div>
            </div>

            <div className="tech">
                <div>
                    <img src="src/assets/js.png" alt="" />
                    <span>JavaScript</span>
                </div>
            </div>

            <div className="tech">
                <div>
                    <img src="src/assets/science.png" alt="" />
                    <span>ReactJS</span>
                </div>

                <ul>
                    <li>
                        <img src="src/assets/redux.png" alt="" />
                        <span>Redux</span>
                    </li>
                    <li>
                        <img src="src/assets/redux.png" alt="" />
                        <span>Redux Toolkit</span>
                    </li>
                    <li>
                        <img src="src/assets/redux.png" alt="" />
                        <span>Redux Persist</span>
                    </li>
                    <li>
                        <img src="src/assets/react_router-square.png" alt="" />
                        <span>Redux Router</span>
                    </li>
                    <li>
                        <img src="src/assets/sc.png" alt="" />
                        <span>Styled Components</span>
                    </li>
                </ul>
            </div>

            <div className="tech">
                <div>
                    <img src="src/assets/css-dark.png" alt="" />
                    <span>CSS</span>
                </div>

                <ul>
                    <li>
                        <img src="src/assets/sass.png" alt="" />
                        <span>SASS/SCSS</span>
                    </li>
                    <li>
                        <img src="src/assets/tailwind.png" alt="" />
                        <span>Tailwind</span>
                    </li>
                    <li>
                        <img src="src/assets/less.png" alt="" />
                        <span>Less</span>
                    </li>
                </ul>
            </div>

            <div className="tech">
                <div>
                    <img src="src/assets/git.png" alt="" />
                    <span>Git</span>
                </div>
            </div>

            <div className="tech">
                <div>
                    <img src="src/assets/webpack.png" alt="" />
                    <span>Webpack</span>
                </div>
            </div>

            <div className="tech">
                <div>
                    <img src="src/assets/vite.svg" alt="" />
                    <span>Vite</span>
                </div>
            </div>

            <div className="tech">
                <div>
                    <span>
                        Принципы:{' '}
                        <span style={{ fontSize: 21 * 0.8 + 'px' }}>
                            ООП, REST API, KISS/DRY
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}
