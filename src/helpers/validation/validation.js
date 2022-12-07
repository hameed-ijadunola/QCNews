export function validateEmail(value) {
  if (validateFilled(value)) {
    return validateFilled(value);
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return 'Enter a valid email address!';
  } else {
    return null;
  }
}

export function validatePassword(value) {
  if (validateFilled(value)) {
    return validateFilled(value);
  }
  if (
    !/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/i.test(
      value,
    )
  ) {
    return 'Password should have at least one number, and be 8 characters long';
  } else {
    return null;
  }
}
export function validateConfirmPassword(password, confirm_password) {
  if (validateFilled(confirm_password)) {
    return validateFilled(confirm_password);
  }
  if (password !== confirm_password) {
    return 'Passwords do not match!';
  } else {
    return null;
  }
}

export function validateName(value) {
  if (validateFilled(value)) {
    return validateFilled(value);
  }
  if (!/^[a-zA-Z-' ]{3,30}$/i.test(value)) {
    return 'Enter a name 3 to 30 characters long';
  } else {
    return null;
  }
}

export function validateCode(value) {
  if (validateFilled(value)) {
    return validateFilled(value);
  }
  if (!value) {
    return 'Enter a valid code';
  } else {
    return null;
  }
}
export function validatePhoneNumber(value) {
  if (validateFilled(value)) {
    return validateFilled(value);
  }
  if (!/^[0][7-9][0-1][0-9]{8}$/i.test(value)) {
    return 'Enter phone number in this format: 08012345678';
  } else {
    return null;
  }
}

export const validateFilled = value => {
  if (!value) {
    return 'Required';
  }
  return null;
};
export const validateYear = value => {
  if (validateFilled(value)) {
    return validateFilled(value);
  }
  if (
    (value && (isNaN(value) || value.length !== 4)) ||
    value < 1970 ||
    value > new Date().getFullYear()
  ) {
    return 'Enter valid year';
  }
  return null;
};
