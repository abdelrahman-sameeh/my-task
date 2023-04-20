const router = require("express").Router();

router.get('/students', (req, res, next) => {
  res.send(`
    <ul style="font-size:15px;">
    <li>student 1</li>
    <li>student 2</li>
    <li>student 3</li>
    <li>student 4</li>
    <li>student 5</li>
    <li>student 6</li>
    <li>student 7</li>
    <li>student 8</li>
    <li>student 9</li>
    <li>student 10</li>
    </ul>`)
})


module.exports = router;
