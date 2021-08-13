const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
router.post("/", async function (req, res) {
	try{
		user = req.body;
		userDB = await userModel.get(user);
		if (userDB === null){
			throw "invalid user"
		}
		res.status(200).send({ content: "Get User Successful", username: user.username });;
	}catch{
		res.status(401).send({ content: "Unauthorized" });
	}

});

module.exports = router;
