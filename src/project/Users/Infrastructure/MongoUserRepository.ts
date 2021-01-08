import MongoUser from '../../../models/mongoose/MongoUser';
import { UserEntity } from '../Domain/UserEntity';
import { UserRepository } from '../Domain/UserRepository';

export class MongoUserRepository implements UserRepository {
    all = async(): Promise<UserEntity[]> => {
        let data = await MongoUser.find({}).exec();
        return await Promise.resolve(data.map(item => UserEntity.fromObject(item)));
    }

    find(userId: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

    create(entity: UserEntity): void {
        let newUser = new MongoUser();

        const { _id, name, email, password } = entity.toStoreObject();

        newUser._id = _id;
        newUser.name = name;
        newUser.email = email;
        newUser.setPassword(password);

        newUser.save();
    }
}