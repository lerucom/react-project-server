const restify = require('restify');
const { BadRequestError, NotFoundError } = require('restify-errors');

const server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.pre((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // * - разрешаем всем
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') { // Preflight
        res.send();
        next(false);
        return;
    }

    next();
});


let nextId = 1;
let items = [
    {
        id: "1",
        categoryId: "1",
        name: "Фиксатор спининга",
        description: "Фиксатор спининга, с креплением. Есть в наличии 999 шт., бесплатная доставка по России при заказе на общую сумму от 10000 руб.",
        price: 1100,
        image: "/uploads/fiksator-spininga.jpg",
        размер: "124.4мм x 59.2мм x 8.97мм",
        вес: "360 г",
        цвет: "черный"
    },
    {
        id: "2",
        categoryId: "2",
        name: "Ручка РИБ",
        description: "Ручка РИБ, с намоткой. Есть в наличии 999 шт., бесплатная доставка по России при заказе на общую сумму от 10000 руб.",
        price: 250,
        image: "/uploads/ruchka-rib.jpg",
        размер: "124.4мм x 59.2мм x 8.97мм",
        вес: "140 г",
        цвет: "черный"
    },
    {
        id: "3",
        categoryId: "3",
        name: "Рым леерный",
        description: "Рым леерный удлиненный. Есть в наличии 999 шт., бесплатная доставка по России при заказе на общую сумму от 10000 руб.",
        price: 175,
        image: "/uploads/rym-leerniy.jpg",
        размер: "124.4мм x 59.2мм x 8.97мм",
        вес: "110 г",
        цвет: "черный"
    },
    {
        id: "4",
        categoryId: "3",
        name: "Рым ручка",
        description: "Рым ручка буксировочная. Есть в наличии 999 шт., бесплатная доставка по России при заказе на общую сумму от 10000 руб.",
        price: 300,
        image: "/uploads/rym-ruchka.jpg",
        размер: "124.4мм x 59.2мм x 8.97мм",
        вес: "180 г",
        цвет: "черный"
    },
    {
        id: "5",
        categoryId: "3",
        name: "Рым якорный",
        description: "Рым якорный под 12 мм трос. Есть в наличии 999 шт., бесплатная доставка по России при заказе на общую сумму от 10000 руб.",
        price: 850,
        image: "/uploads/rym-yakorniy.jpg",
        размер: "124.4мм x 59.2мм x 8.97мм",
        вес: "260 г",
        цвет: "черный"
    },
    {
        id: "6",
        categoryId: "4",
        name: "Тент носовой",
        description: "Тент носовой ветрозащитный. Есть в наличии 999 шт., бесплатная доставка по России при заказе на общую сумму от 10000 руб.",
        price: 2200,
        image: "/uploads/tent-nosovoy.jpg",
        размер: "124.4мм x 59.2мм x 8.97мм",
        вес: "600 г",
        цвет: "синий"
    }
];

server.get('/items', (req, res, next) => {
    res.send(items);
    next();
});

const port = process.env.PORT || 7777;

server.listen(port, () => {
    console.log('server started');
});
