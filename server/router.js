const stocks = require("./controllers/stocks.controller");
const User = require("./controllers/user.controller");
const industries = require("./controllers/industries.controller");
const Sessions = require("./controllers/sessions.controller");
const ResetPasswordRequests = require("./controllers/resetPasswordRequests.controller")

module.exports = (app) => {
    app.post("/stocks", stocks.findAllUserStocks);
    app.post("/stocks_overview", stocks.userStocksOverview);
    app.post("/userinfo", User.getInfo);
    app.post("/industries", industries.getIndustries);
    app.post("/settings/deleteinfo", User.deleteInfo);
    app.post("/settings/changeinfo", User.changeInfo);
    app.post("/settings/changePassword", User.changePassword);
    app.post("/register", User.newAccount);
    app.post("/uploadImg", User.uploadImg);
    app.post("/login", User.login);
    app.post("/verify", Sessions.verifySession);
    app.get("/img/:sessionId", User.getImg);
    app.post("/resetPassword/request", ResetPasswordRequests.createRequest);
    app.post("/resetPassword/check", ResetPasswordRequests.checkRequest);
    app.post("/resetPassword/changePassword", ResetPasswordRequests.changePassword);
};
