import express from 'express';
import cors from 'cors';
import router from '../../../routes/router';
import ServerInterface from '../ServerInterface';

//Singleton class
export class ExpressServer implements ServerInterface{
    private app: express.Application;
    private port: number;
    public static instance: ExpressServer;
    private initialized: boolean = false;

    private constructor(port: number) {
        this.app = express();
        this.port = port;
    }

    /**
     * @param { number } port 
     * @returns { ExpressServer } Instance of ExpressServer 
     */
    public static getInstance(port: number): ExpressServer {
        return ExpressServer.instance || (ExpressServer.instance = new ExpressServer(port));
    }

    /**
     * Initialize server
     * @throws { Error } If server already initialized
     */
    public init(){
        if(this.initialized) throw new Error('Server already initialized');

        this.middlewares();
        this.routes();
        this.listen();

        this.initialized = true;
    }

    /**
     * Set middlewares
     */
    protected middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    /**
     * Set all routes
     */
    protected routes() {
        this.app.use('/api', router);
    }

    /**
     * Start server listening
    */
    protected listen() {
        this.app.listen(this.port, () => {
            console.log(`Server started on port ${this.port}`);
        });
    }
}