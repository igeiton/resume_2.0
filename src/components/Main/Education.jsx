export default function Education() {
    return (
        <div id="page" className="education">
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="src/assets/languages-2.png" alt="lang" />
                    <span>Языки:</span>
                </div>
                <ul>
                    <li>Русский - Native</li>
                    <li>Английский — B1.</li>
                </ul>
            </div>
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="src/assets/mortarboard.png" alt="education" />
                    <span>Образование:</span>
                </div>
                <ul>
                    <li>АЛТГТУ им. И.И. Ползунова (2026).</li>
                    <li>ФИТ, информационная безопасность.</li>
                </ul>
            </div>
        </div>
    );
}
