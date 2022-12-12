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
const pontosRoutes = require("./routes/pontosinteresse_routes");
const regiaoRoutes = require("./routes/regiao_routes");
const atividadesRoutes = require("./routes/atividades_routes");
const reservasRoutes = require("./routes/reservas_routes");
const recompensasRoutes = require("./routes/recompensas_routes");
const voucherRoutes = require("./routes/voucher_routes");





//Login
const administradorRoutes = require("./routes/administrador_routes");
app.use('/admin', administradorRoutes);
//

//Rota
app.use('/dashboard', dashboardRoutes);
app.use('/utilizador', utilizdoresRoutes);
app.use('/pontosinteresse', pontosRoutes);
app.use('/regiao', regiaoRoutes);
app.use('/atividades', atividadesRoutes);
app.use('/reservas', reservasRoutes);
app.use('/recompensas', recompensasRoutes);
app.use('/voucher', voucherRoutes);

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