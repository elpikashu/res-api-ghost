import app from './app.js'

import {PORT,USER,DATABASE,DBHOST,DBPASSWORD,DBPORT} from './config.js'

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permitir acceso desde cualquier origen
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.listen(PORT)

console.log("Server running on port "+PORT)

