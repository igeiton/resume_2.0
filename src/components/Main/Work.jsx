export default function Work() {
    return (
        <div id="page" className="work">
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="src/assets/sumfla.png" alt="Yandex" />
                    <span>Sumfla: 8 месяцев коммерческого опыта.</span>
                </div>
                <ul>
                    <li>
                        Разрабатывал компоненты web-мессенджера. Оптимизировал
                        процесс передачи пропсов подкомпонентов на верхние
                        уровни без стейт менеджера. Периодически вносил правки в
                        Redux состояния.
                    </li>
                    <li>
                        Стек: git, React, TypeScript, react-router, Redux
                        Toolkit, Vite, sass/scss
                    </li>
                </ul>
            </div>

            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="src/assets/yandex.png" alt="Yandex" />
                    <span>
                        Yandex (NDA): 6 месяцев коммерческого опыта в Toloka.
                    </span>
                </div>
                <ul>
                    <li>
                        Создавал шаблоны на нативном JS с использованием
                        встроенных (кастомизированных) классов и методов.
                        Работал с API (google/yandex-map и тп.). Поток задач
                        происходил от внутренних и внешних заказчиков.
                    </li>
                    <li>Стек: JS, HTML, CSS</li>
                </ul>
            </div>

            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="src/assets/yandex.png" alt="Yandex" />
                    <span>
                        Yandex (NDA): 4 месяца коммерческого опыта в
                        автоматизации процессов.
                    </span>
                </div>
                <ul>
                    <li>
                        Автоматизировал процессы маршрутизации тикетов на
                        groovy. Работал с Tracker (включает доски: скрам,
                        аджайл, канбан и тд), хитманом и нирваной.
                    </li>
                    <li>
                        Разработал программу для перевода кода на русский язык
                        (понятный для любого пользователя) с использованием
                        регулярных выражений.
                    </li>
                    <li>
                        Стек: git-подобная система контроля версий (nda), groovy
                    </li>
                </ul>
            </div>
        </div>
    );
}
