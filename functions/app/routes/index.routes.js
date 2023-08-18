const { authJwt } = require("../middlewares");
const userController = require("../controllers/user.controller");
const barberController = require("../controllers/barber.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.set('Access-Control-Allow-Origin', '*');

          // Send response to OPTIONS requests
          res.set('Access-Control-Allow-Methods', 'GET');
          res.set('Access-Control-Allow-Headers', 'Content-Type');
          res.set('Access-Control-Max-Age', '3600');
        
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/user", async(req, res) => {
        const response = await userController.getByName(req.query.barber);
        res.status(200).send(response);
    });

    app.get("/api/barber", [authJwt.verifyToken], async(req, res) => {
        const response = await barberController.getByEmail(req.query.email);
        res.status(200).send(response);
    });
};
