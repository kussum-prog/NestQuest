const joi = require('joi');

const LogInValidation = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
});

const SignUpValidation = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
    email: joi.string().email().required(),
    address: joi.string().required()
});

module.exports = {LogInValidation,SignUpValidation};