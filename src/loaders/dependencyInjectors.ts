import Container from "typedi";
import LoggerInstance from "./logger"
import { MongoUserRepository } from "../project/Users/Infrastructure/MongoUserRepository";
import { SignUpUser } from "../project/Users/Application/SignUpUser";

export default () => {
    const signUpUser = new SignUpUser(new MongoUserRepository());

    Container.set('logger', LoggerInstance);
    Container.set('SignUpUser', signUpUser);
}