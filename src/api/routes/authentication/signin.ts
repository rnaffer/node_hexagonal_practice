import { NextFunction, Request, Response, Router } from 'express';
import Container from 'typedi';
import { Logger } from 'winston';
import { IUserInputDTO } from '../../../interfaces/IUser';
import { SignUpUser } from '../../../project/Users/Application/SignUpUser';

export default(route: Router) => {
    route.post('/signin', async (req: Request, res: Response, next: NextFunction) => {
        const logger: Logger = Container.get('logger');

        try {
            const { email, password } = req.body;
            const signUpUser: SignUpUser = Container.get('SingUpUser');

            const { user, token } = await signUpUser.execute(req.body as IUserInputDTO);

            return res.status(201).json({ user, token });
        } catch (e) {
            logger.error('🔥 error: %o', e);
            return next(e);
        }
    }); 
}