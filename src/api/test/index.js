const express = require("express");
const TestController = require("../../controllers/test");
const Authentication = require('../../controllers/auth')
const router = express.Router();

// GET /api/test/authenticated
router.get("/authenticated", Authentication.login ,TestController.authenticated);

// GET /api/users/admin-only
router.get("/admin-only", TestController.adminOnly);

// GET /api/users/public
router.get("/public", TestController.public);

module.exports = router;


