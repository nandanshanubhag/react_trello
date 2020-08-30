import validator from 'validator';

const checkIsValid = (name, value) => {
    if (name === 'email') {
        return validator.isEmail(value);
    }
    return !!value;
};

export { checkIsValid }