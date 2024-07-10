const express = require('express');
const router = require('./routes/mainRoutes')
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// untuk bisa menerima req body berupa json, perlu dilakukan setting
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT : ${PORT}`);
})
