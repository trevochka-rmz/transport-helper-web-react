import React from 'react';
import './Schedule.css';

const Schedule = () => {
    // Моковые данные расписания (можно заменить на API)
    const schedules = [
        {
            id: 1,
            route: 'Москва → Санкт-Петербург',
            departure: '08:00',
            arrival: '14:30',
            price: '1500 ₽',
            link: 'https://bus.tutu.ru',
        },
        {
            id: 2,
            route: 'Москва → Казань',
            departure: '10:15',
            arrival: '18:45',
            price: '2200 ₽',
            link: 'https://bus.tutu.ru',
        },
        {
            id: 3,
            route: 'Москва → Сочи',
            departure: '22:30',
            arrival: '14:00 (+1 день)',
            price: '3200 ₽',
            link: 'https://bus.tutu.ru',
        },
    ];

    return (
        <div className="schedule-container">
            <h1 className="schedule-title">Расписание транспорта</h1>

            <div className="schedule-list">
                {schedules.map((schedule) => (
                    <div key={schedule.id} className="schedule-card">
                        <div className="schedule-info">
                            <h3>{schedule.route}</h3>
                            <p>
                                <strong>Отправление:</strong>{' '}
                                {schedule.departure}
                            </p>
                            <p>
                                <strong>Прибытие:</strong> {schedule.arrival}
                            </p>
                            <p>
                                <strong>Стоимость:</strong> {schedule.price}
                            </p>
                        </div>
                        <a
                            href={schedule.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="schedule-link"
                        >
                            Посмотреть расписание
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;
