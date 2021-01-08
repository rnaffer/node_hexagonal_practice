import { celebrate } from 'celebrate';
import { NextFunction, Request, Response, Router } from 'express';
import Container from 'typedi';
import { Logger } from 'winston';
import { IUserInputDTO } from '../../../interfaces/IUser';
import { SignUpUser } from '../../../project/Users/Application/SignUpUser';
import signUpValidations from './validators/auth-validators';

export default(route: Router) => {
    route.post('/signup', 
        celebrate(signUpValidations), 
        async (req: Request, res: Response, next: NextFunction) => {
            const logger: Logger = Container.get('logger');

            logger.debug('body: %o', req.body);

            try {
                const signUpUser: SignUpUser = Container.get('SignUpUser');

                const { user, token } = await signUpUser.execute(req.body as IUserInputDTO);

                return res.status(201).json({ user, token });
            } catch (e) {
                logger.error('🔥 error: %o', e);
                return next(e);
            }
    }); 
}