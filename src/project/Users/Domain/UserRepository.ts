import { UserEntity } from "./UserEntity";

export interface UserRepository {
    all(): Promise<UserEntity[]>;
    find(userId: number): Promise<UserEntity>;
    create(entity: UserEntity): void;
}