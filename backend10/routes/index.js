var express = require("express");
var router = express.Router();
const fs = require("fs");

router.get("/", function (req, res, next) {
    const files = fs.readdirSync("public/database");
    res.render("index", { files: files, filename: null, filedata: null });
});

router.post("/create", function (req, res, next) {
    fs.writeFileSync(`public/database/${req.body.filename}`, "");
    res.redirect(`/edit/${req.body.filename}`);
});

router.post("/edit/:filename", function (req, res, next) {
    const files = fs.readdirSync("public/database");
    const filedata = fs.readFileSync(
        `public/database/${req.params.filename}`,
        "utf-8"
    );
    res.render("index", {
        files: files,
        filedata: filedata,
        filename: req.params.filename,
    });
});

router.post("/save/:filename", function (req, res, next) {
    fs.writeFileSync(
        `public/database/${req.params.filename}`,
        req.body.filedata
    );
    res.redirect(`/edit/${req.params.filename}`);
});

router.get("/delete/:filename", function (req, res, next) {
    fs.unlinkSync(`public/database/${req.params.filename}`);
    res.redirect("/");
});

module.exports = router;