import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from '../config';
import HttpException from '../exceptions/HttpException';
import routes from '../api';
import { errors } from 'celebrate';

export default ({ app }: { app: express.Application }) => {
    /**
     * Health Check endpoints
     * @TODO Explain why they are here
     */
    app.get('/status', (req: Request, res: Response) => {
        res.status(200).end();
    });

    app.head('/status', (req: Request, res: Response) => {
        res.status(200).end();
    });

    // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    // It shows the real origin IP in the heroku or Cloudwatch logs
    app.enable('trust proxy');

    // The magic package that prevents frontend developers going nuts
    // Alternate description:
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors());

    // Middleware that transforms the raw string of req.body into json
    app.use(bodyParser.json());
    // Load API routes
    app.use(config.api.prefix, routes());

    app.use(errors());
    /// catch 404 and forward to error handler
    // app.use((req: Request, res: Response, next) => {
    //     var err = new HttpException(404, 'Not Found');
    //     next(err);
    // });

    // /// error handlers
    // app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
    //     /**
    //      * Handle 401 thrown by express-jwt library
    //      */
    //     if (err.name === 'UnauthorizedError') {
    //         return res
    //             .status(err.status)
    //             .send({ message: err.message })
    //             .end();
    //     }
    //     return next(err);
    // });

    // app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
    //     res.status(err.status || 500);
    //     res.json({
    //         errors: {
    //             message: err.message,
    //         },
    //     });
    // });
};