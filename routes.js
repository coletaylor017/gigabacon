const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
	res.render("home", (err, html) => {
        if (err) {
            console.log("Error while rendering home page: ", err);
        }

        // when a callback is specified, the call to render() does not send a response automatically.
        res.send(html);
    });
});

module.exports = router;