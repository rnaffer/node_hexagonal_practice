import { Joi, Segments } from "celebrate";

let signUpValidations = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required()
            .messages({
                'any.required': 'Name is required'
            }),
        email: Joi.string().required()
            .messages({
                'any.required': 'Email is required'
            }),
        password: Joi.string().required()
            .messages({
                'any.required': 'Password is required'
            }),
    }),
};

export default signUpValidations;