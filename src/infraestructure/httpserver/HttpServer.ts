import express, {Express} from "express";

export class HttpServer {

    private app: Express = express()

    constructor() {
        this.app;
        this.setupMiddleware();
        this.startServer();
    }

    private setupMiddleware() {
        this.app.use(express.json())
    }

    public assignEndpoint(method: string, path: string, handler: any): void {
        switch (method) {
            case "GET":
                this.app.get(path, handler)
                break;
            case "POST":
                this.app.post(path, handler)
                break;
            case "PUT":
                this.app.put(path, handler)
                break;
            case "DELETE":
                this.app.delete(path, handler)
                break;
            case "USE":
                this.app.use(path, handler)
                break;
            default:
                this.app.get(path, handler)
                break;
        }
    }

    private startServer(): void {
        this.app.listen(3000, () => {
            console.log("Server online")
        })
    }

}