import { HttpServer } from "../infraestructure/httpserver/HttpServer";

const httpServer = new HttpServer()


httpServer.assignEndpoint("POST", "/account", (req, res) => {
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
})