import { ObjectId } from 'mongodb';

export class UserEntity {
    private _id: ObjectId;
    private name: string;
    private email: string;
    private password: string;

    constructor(_id: ObjectId, name: string, email: string, password: string) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static fromObject(data: any): UserEntity {
        return new UserEntity(
            data._id ?? new ObjectId(),
            data.name,
            data.email,
            data.password
        );
    }

    toObject(): any {
        return {
            _id: this._id,
            name: this.name,
            email: this.email,
        }
    }

    toStoreObject(): any {
        return {
            _id: this._id,
            name: this.name,
            email: this.email,
            password: this.password
        }
    }

    getId(): ObjectId {
        return this._id;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }
}
