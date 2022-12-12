const express = require('express');
const cors = require('cors');
const app = express();

//Login
const middleware = require('./middleware');

app.use(cors())

//Configurações
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(express.json());
//app.options('*',cors());

// Configurar CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// importação de rotas [1]
const dashboardRoutes = require("./routes/dashboard_routes");
const utilizdoresRoutes = require("./routes/utilizador_routes");
const compraRoutes = require("./routes/compra_routes");

//Login
const administradorRoutes = require("./routes/administrador_routes");
app.use('/admin', administradorRoutes);
//

//Rota
app.use('/dashboard', dashboardRoutes);
app.use('/utilizador', utilizdoresRoutes);
app.use('/compra', compraRoutes);
app.use('/contem', contemRoutes);
app.use('/formulario', formularioRoutes);
app.use('/historico', historicoRoutes);
app.use('/packs', packsRoutes);
app.use('/possui', possuiRoutes);
app.use('/servico', servicosRoutes);
app.use('/tipoPacks', tipoPacksRoutes);
app.use('/tipoTrabalhadores', tipoTrabalhadoresRoutes);
app.use('/trabalha', trabalhaRoutes);
app.use('/trabalhadores', trabalhadoresRoutes);

//Rotas
app.use("/teste", (req, res) => {
  res.send("Rota TESTE.");
});
app.use('/', (req, res) => {
  res.send("BACKEND");
});

app.listen(app.get('port'), () => {
  console.log("Start server on port " + app.get('port'))
})

//