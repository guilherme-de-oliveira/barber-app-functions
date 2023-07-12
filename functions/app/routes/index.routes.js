const { authJwt } = require("../middlewares");
const userController = require("../controllers/user.controller");
const barberController = require("../controllers/barber.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test", [authJwt.verifyToken], async(req, res) => {
        console.log(req.query);
        console.log('testestsettes goliva: ');
        res.status(200).send('testtttt');
    });

    app.get("/api/user", async(req, res) => {
        console.log(req.query);
        console.log('sera?');
        const response = await userController.getByName(req.query.barber);
        console.log('response: ');
        console.log(response);
        res.status(200).send(response);
    });

    app.get("/api/barber", [authJwt.verifyToken], async(req, res) => {
        console.log(req.query);
        const response = await barberController.getByEmail(req.query.email);
        console.log('response: ');
        console.log(response);
        res.status(200).send(response);
    });

    // app.put("/api/barber", [authJwt.verifyToken], async(req, res) => {
    //     console.log('PUTT');
    //     console.log(req.query);
    //     // const response = await barberController.getByEmail(req.query.email);
    //     console.log('response: ');
    //     // console.log(response);
    //     res.status(200).send(response);
    // });


    // app.get(
    //     "/api/admin",
    //     [authJwt.verifyToken, authJwt.isAdmin],
    //     controller.adminBoard
    // );
};
