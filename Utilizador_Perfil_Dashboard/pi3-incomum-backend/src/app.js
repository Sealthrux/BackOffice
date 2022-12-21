const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

//Configurações
app.set('port', process.env.PORT || 3000);

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
const utilizadoresRoutes = require("./routes/utilizador_routes");

//Rota
app.use('/utilizador', utilizadoresRoutes);

//Rotas
app.use("/teste", (req, res) => {
  res.send("Rota TESTE.");
});
app.use('/', (req, res) => {
  res.send("Backend");
});
app.listen(app.get('port'), () => {
  console.log("Start server on port " + app.get('port'))
})