import { HttpServer } from "../infraestructure/httpserver/HttpServer";
import { RegisterUser } from "../data/RegisterUser";
const registerUser = new RegisterUser()

const httpServer = new HttpServer()

httpServer.assignEndpoint("POST", "/account", (req, res) => {
    try{
        registerUser.handle({
            "name": req.body.name,
            "email": req.body.email,
            "password": req.body.password
        })
        res.status(201).send({success: "user created"})
    } catch (error) {
        res.send({"error": error})
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