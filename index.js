const express = require("express");
const app = express();

const Students = require("./student.route")


app.use(Students);

app.use('/', (req, res, next) => {
    res.send(`<a style="font-size:3em;" href="/students">show all students</a>`)
});

app.listen(3000, (err) => {
    console.log(`server connected on port 3000 && http://localhost:3000`);
});

