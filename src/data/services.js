const services = [
    {
        name: 'Плед',
        images_path: '/images/blanket.jpg',
        description:
            'Тёплый плед для комфорта во время поездки. Возвращается после использования.',
        price: 0, // Бесплатно
    },
    {
        name: 'Бутылка воды',
        images_path: '/images/water_bottle.jpg',
        description:
            'Бесплатная бутылка питьевой воды 0.5л. Одна на пассажира.',
        price: 0, // Бесплатно
    },
    {
        name: 'Помощь с багажом',
        images_path: '/images/luggage_help.jpg',
        description: 'Помощь в размещении и выносе багажа из автобуса.',
        price: 0, // Бесплатно
    },
    {
        name: 'Зарядка телефона',
        images_path: '/images/charging.jpg',
        description: 'Возможность зарядить телефон или планшет через USB-порт.',
        price: 50, // Платно (чтобы избежать злоупотреблений)
    },
    {
        name: 'Горячий чай/кофе',
        images_path: '/images/hot_drink.jpg',
        description: 'Чашка горячего чая или кофе с сахаром по желанию.',
        price: 100,
    },
    {
        name: 'Подушка для шеи',
        images_path: '/images/neck_pillow.jpg',
        description: 'Удобная дорожная подушка для комфортного сна.',
        price: 150, // Залоговая стоимость (возвращается)
    },
    {
        name: 'Влажные салфетки',
        images_path: '/images/wet_wipes.jpg',
        description: 'Пачка освежающих влажных салфеток.',
        price: 30,
    },
    {
        name: 'Дополнительная остановка',
        images_path: '/images/extra_stop.jpg',
        description: 'Запрос на дополнительную остановку (при возможности).',
        price: 200, // Платно, чтобы избежать злоупотреблений
    },
    {
        name: 'Уборка места',
        images_path: '/images/cleaning.jpg',
        description: 'Профессиональная уборка места после поездки.',
        price: 0, // Бесплатно (входит в стоимость билета)
    },
    {
        name: 'Аптечка первой помощи',
        images_path: '/images/first_aid.jpg',
        description:
            'Предоставление базовых медицинских средств при необходимости.',
        price: 0, // Бесплатно
    },
    {
        name: 'Wi-Fi доступ',
        images_path: '/images/wifi.jpg',
        description: 'Высокоскоростной интернет на время поездки.',
        price: 120,
    },
    {
        name: 'Детское кресло',
        images_path: '/images/baby_seat.jpg',
        description: 'Дополнительное детское кресло для безопасности ребёнка.',
        price: 300, // Залог (возвращается)
    },
    {
        name: 'Кондиционер (регулировка)',
        images_path: '/images/ac.jpg',
        description: 'Индивидуальная регулировка температуры на месте.',
        price: 0, // Бесплатно
    },
    {
        name: 'Экскурсионное сопровождение',
        images_path: '/images/guide.jpg',
        description:
            'Краткий рассказ гида о достопримечательностях по маршруту.',
        price: 0, // Бесплатно (входит в тур)
    },
    {
        name: 'Фото на память',
        images_path: '/images/photo.jpg',
        description:
            'Профессиональное фото на фоне автобуса или достопримечательностей.',
        price: 250,
    },
];
export default services;
