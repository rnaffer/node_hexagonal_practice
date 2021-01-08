import { IUser, IUserInputDTO } from "../../../interfaces/IUser";
import { UserEntity } from "../Domain/UserEntity";
import { UserRepository } from "../Domain/UserRepository";

export class UserCreator {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;        
    }

    execute(userInput: IUserInputDTO): IUser {
        const user = UserEntity.fromObject(userInput);

        this.repository.create(user);
        return user.toObject();
    }
}
