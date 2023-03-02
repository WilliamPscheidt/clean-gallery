import { HttpServer } from "../infraestructure/httpserver/HttpServer";
import { AccountRegister } from "../domain/accountRegister.usecase";

const httpServer = new HttpServer()
const accountRegister = new AccountRegister()


httpServer.assignEndpoint("POST", "/account_test", (req, res) => {
    const RegisterData = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password
    }
})

/**httpServer.assignEndpoint("POST", "/account", (req, res) => {
    res.send({"ok": "Ok, register"})
})

httpServer.assignEndpoint("POST", "/account", (req, res) => {
    res.send({"ok": "Ok, login"})
})

httpServer.assignEndpoint("POST", "/gallery", (req, res) => {
    res.send({"ok": "Ok, gallery post"})
})

httpServer.assignEndpoint("GET", "/gallery", (req, res) => {
    res.send({"ok": "Ok, gallery get"})
})

httpServer.assignEndpoint("DELETE", "/gallery", (req, res) => {
    res.send({"ok": "Ok, gallery delete"})
})

httpServer.assignEndpoint("PUT", "/gallery", (req, res) => {
    res.send({"ok": "Ok, gallery post"})
})**/