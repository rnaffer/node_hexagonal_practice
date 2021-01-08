import { IUser, IUserInputDTO } from '../../../interfaces/IUser';
import { AuthHelper } from '../../Shared/Auth/AuthHelper';
import { UserRepository } from '../Domain/UserRepository';
import { UserCreator } from './UserCreator';

export class SignUpUser {
    private userCreator: UserCreator;

    constructor(repository: UserRepository) {
       this.userCreator = new UserCreator(repository);
    }

    execute(userInput: IUserInputDTO): Promise<{ user: IUser; token: string}> {

        const user = this.userCreator.execute(userInput);
        const token = AuthHelper.generateToken(user);

        return Promise.resolve({ user, token });
    }
}