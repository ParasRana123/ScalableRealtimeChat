import {Server} from "socket.io";
import Redis from "ioredis";

const pub = new Redis();
const sub = new Redis();

class SocketService {
    private _io: Server;

    constructor() {
        console.log("Init Socket Server");
        this._io = new Server({
            cors: {
                allowedHeaders: ["*"],
                origin: "*"
            }
        });
    }

    public initListeners() {
        const io = this.io;
        console.log("Initialised Socket Listeners...");
        io.on("connect" , socket => {
            console.log("New socket connected" , socket.id);

            socket.on("event:message" , async ({message} : {message: string}) => {
                console.log('New message recieved' , message);

                // Publish the recieved message to the redis

            })
        })
    }

    get io() {
        return this._io;
    }
}

export default SocketService;