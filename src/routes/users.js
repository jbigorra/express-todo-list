const express = require('express');
const router = express.Router();

const users = [
    { username: "Pepito" },
    { username: "Manolito" },
];

const usersRepo = {
    users: [
        { username: "Pepito" },
        { username: "Manolito" },
    ]
};

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render("users/index", { users });
});

router.post('/', function(req, res, next) {
    const user = {
        username: req.body.username
    };

    users.push(user);

    console.log(users)

    res.render("users/index", { users });
});

module.exports = router;
