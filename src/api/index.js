import { Server } from "miragejs";

new Server({ 
    routes() {
        this.namespace = "api"

        this.get('/list', () => ({
            list: [
                'abc',
                'def', 
                'mno',
                'pqr',
                'xyz', 
            ]
        })) 
    }
})