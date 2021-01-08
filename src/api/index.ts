import { Router } from 'express';
import authentication from './routes/authentication';

export default () => {
    const app = Router();
    authentication(app);

    return app;
}