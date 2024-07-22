const express = require("express");
const path = require("path");
const app = express(); //Создаем экземпляр приложения
const cookieParser = require("cookie-parser");

const port = 3000; 

//Импортируем роуты из отдельных файлов
const indexRouter = require("./routes/index.api.routes");

app.use(cookieParser()); // чтение кук
app.use(express.urlencoded({ extended: true })); //Для чтения из POST запросов
app.use(express.json()); //Для чтения json из body
app.use(express.static(path.join(__dirname, "public"))); //статика

app.use("/api", indexRouter);

app.listen(port, () => {
  console.log(`listen port ${port}`);
});
