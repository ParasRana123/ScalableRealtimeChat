import {Server} from "socket.io";

class socketService {
    private _io: Server;

    constructor() {
        console.log("Init Socket Server");
        this._io = new Server();
    }

    get io() {
        return this._io;
    }
}

export default socketService;