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
const utilizadoresRoutes = require("./routes/utilizadores_routes");
const pontosRoutes = require("./routes/pontos_routes");
const regiaosRoutes = require("./routes/regiao_routes");
const atividadesRoutes = require("./routes/atividades_routes");
const reservasRoutes = require("./routes/resevas_routes");
const recompensasRoutes = require("./routes/recompensas_routes");
const voucherRoutes = require("./routes/Voucher_routes");



//Login
const loginRoutes = require("./routes/login_routes");
app.use('/login', loginRoutes);
//

//Rota
app.use('/dashboard', dashboardRoutes);
app.use('/utilizadores', utilizadoresRoutes);
app.use('/pontos', pontosRoutes);
app.use('/regiao', regiaosRoutes);
app.use('/atividades', atividadesRoutes);
app.use('/reservas', reservasRoutes);
app.use('/recompensas', recompensasRoutes);
app.use('/vouchers', voucherRoutes);



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