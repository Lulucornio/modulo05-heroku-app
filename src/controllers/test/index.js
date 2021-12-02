const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const { User } = require("../../db/models");

class TestController {


    /*Agregar el endpoint the index con un mensaje de bienvenida
Agregar el endpoint GET /api/test/authenticated
Agregar el endpoint GET /api/test/admin-only
Agregar el endpoint GET /api/test/public */
  static authenticated(req, res, next) {
        res.json({
          message: "Autenticado correctamente",
        });
  }


static adminOnly(req, res, next) {
    res.json({
      message: "Autenticado como admin OK",
    });
}

static public(req, res, next) {
    res.json({
      message: "Public Endpoint",
    });
}






}

module.exports = TestController;
