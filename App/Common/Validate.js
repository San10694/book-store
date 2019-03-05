export const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }

    // message
    if (!values.msg) {
        errors.msg = 'Required';
    } else if (values.msg.length > 1000) {
        errors.msg = 'Must be 1000 characters or less';
    }

    // subject

    if (!values.sbj) {
        errors.sbj = 'Required';
    } else if (values.sbj.length > 300) {
        errors.sbj = 'Must be 300 characters or less';
    }

    //city
    if (!values.city) {
        errors.city = 'Required';
    } else if (values.city.length > 15) {
        errors.city = 'Must be 15 characters or less';
    }

    //state
    if (!values.state) {
        errors.state = 'Required';
    } else if (values.state.length > 20) {
        errors.state = 'Must be 20 characters or less';
    }

    //landmark
    if (!values.landmark) {
        errors.landmark = 'Required';
    } else if (values.landmark.length > 50) {
        errors.landmark = 'Must be 50 characters or less';
    }

    //email
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    //contact number
    if (!values.mobileNumber) {
        errors.mobileNumber = 'Required';
    } else if (!/^(0|[1-9][0-9]{9})$/i.test(values.mobileNumber)) {
        errors.mobileNumber = 'Invalid phone number, must be 10 digits';
    }

    //pincode
    if (!values.pinCode) {
        errors.pinCode = 'Required';
    } else if (!/^(^[1-9][0-9]{5})$/i.test(values.pinCode)) {
        errors.pinCode = 'Invalid Pincode, must be 6 digits';
    }

    //password
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length <= 4) {
        errors.password = 'Too Short!!';
    }

    //otp
    if (!values.otp) {
        errors.otp = 'Required';
    } else if (values.otp.length === 6) {
        errors.otp = 'Incorrect';
    }

    if (!values.number) {
        errors.number = 'Required';
    } else if (!/^(0|[1-9][0-9]{9})$/i.test(values.mobileNumber)) {
        errors.number = 'Invalid phone number, must be 10 digits';
    }

    if (!values.cvc) {
        errors.cvc = 'Required';
    } else if (values.cvc.length > 3 && values.cvc.length) {
        errors.cvc = 'CVV is Incorrect';
    }

    if (!values.cvv) {
        errors.cvv = 'Required';
    } else if (values.cvv.length > 3 && values.cvv.length) {
        errors.cvv = 'CVV is Incorrect';
    }

    if (!values.expMonth) {
        errors.expMonth = 'Required';
    } else if (values.expMonth.length > 2 && values.expMonth.length) {
        errors.expMonth = 'ExpMonth is Incorrect';
    }

    if (!values.expYear) {
        errors.expYear = 'Required';
    } else if (values.expYear.length > 2 && values.expYear.length) {
        errors.expYear = 'ExpYear is Incorrect';
    }

    if (!values.cardNumber) {
        errors.cardNumber = 'Required';
    } else if (values.cardNumber.length > 16 && values.cardNumber.length) {
        errors.expYear = 'CardNumber is Incorrect';
    }
    return errors;
};