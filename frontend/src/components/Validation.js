export const validateFullName = (name) => {
    if (!name || name.length < 3) {
        return "Full Name is required and must be at least 3 characters long.";
    }
    return null;
};

export const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        return "A valid Email Address is required.";
    }
    return null;
};

export const validateAge = (age) => {
    if (!age || isNaN(age) || age < 18) {
        return "Age must be a number and at least 18.";
    }
    return null;
};

export const validateGender = (gender) => {
    if (!gender) {
        return "Gender must be selected.";
    }
    return null;
};

export const validateAddress = (address) => {
    if (!address || address.length < 10) {
        return "Address is required and must be at least 10 characters long.";
    }
    return null;
};