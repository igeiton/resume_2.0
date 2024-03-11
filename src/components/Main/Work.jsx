export default function Work() {
    return (
        <div id="page" className="work">
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="src/assets/yandex.png" alt="Yandex" />
                    <span>(NDA) 6 месяцев коммерческого опыта в Toloka.</span>
                </div>
                <ul>
                    <li>
                        Создавал шаблоны на нативном JS с использованием
                        встроенных (кастомизированных) классов и методов.
                    </li>
                    <li>
                        Работал с простыми API (например, google/yandex-map).
                        Задачи выполнялись как для внутренних, так и внешних
                        заказчиков.
                    </li>
                </ul>
            </div>
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="src/assets/yandex.png" alt="Yandex" />
                    <span>
                        (NDA) 9 месяцев коммерческого опыта в автоматизации
                        процессов.
                    </span>
                </div>
                <ul>
                    <li>
                        Автоматизировал процессы маршрутизации тикетов на
                        groovy.
                    </li>
                    <li>Работал с: скрам доской, хитманом и нирваной.</li>
                    <li>Использовал внутреннюю систему контроля версий.</li>
                </ul>
            </div>
        </div>
    );
}
