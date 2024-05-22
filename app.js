const express = require('express');
const app = express();
const ejs = require('ejs');
const port = 8000;

// Datos simulados desde un array de rutas
const routesData = [
    { path: '/', title: 'Página de inicio', content: '¡Bienvenido a mi sitio web!' },
    { path: '/about', title: 'Acerca de nosotros', content: 'Somos una empresa comprometida...' },
    // Agrega más rutas y datos según tus necesidades
];

app.set('view engine', 'ejs');

// Define la ruta raíz antes de cualquier otra definición de ruta
app.get('/', function (req, res) {
    const routeData = routesData.find(route => route.path === '/');

    if (!routeData) {
        res.status(404).send('Página no encontrada');
        return;
    }

    res.render('index', { data: routeData });
});

// Define otras rutas aquí
app.get('/:route', function (req, res) {
    const requestedRoute = req.params.route;
    const routeData = routesData.find(route => route.path === `/${requestedRoute}`);

    if (!routeData) {
        res.status(404).send('Página no encontrada');
        return;
    }

    res.render('index', { data: routeData });
});

app.listen(port, function (error) {
    if (error) throw error;
    else console.log("El servidor está en funcionamiento en el puerto " + port);
});
