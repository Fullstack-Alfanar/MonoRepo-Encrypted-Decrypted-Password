const emailRegex =
  /^[a-zA-Z0-9" ".!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const passwordRegex =
  /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

export class ValidateForm {
  static validateEmail(email: string) {
    if (email == "") {
      return { status: false, message: "You must enter an email address" };
    }
    if (!emailRegex.test(email)) {
      return { status: false, message: "You entered an invalid email" };
    }
    return { status: true, message: "Email is valid" };
  }
  static validatePassword(password: string) {
    if (password == "") {
      return { status: false, message: "You must enter a password" };
    }
    if (!passwordRegex.test(password)) {
      return {
        status: false,
        message:
          "Password must be minimum 8 characters and include at least 1 letter, 1 number, and 1 special character ",
      };
    }
    return { status: true, message: "password is valid" };
  }
}
