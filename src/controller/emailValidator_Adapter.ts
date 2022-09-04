import isEmail from "validator/lib/isEmail";

export interface EmailValidator{
     isEmail(value: string): boolean;
}

export class emailValidator_Adapter implements EmailValidator{
     isEmail(value: string): boolean {
          return isEmail(value);
     }
}

export function validaEmail(EmailValidator: EmailValidator, email: string): boolean{
     if (EmailValidator.isEmail(email)) {
          return true;
     } else {
          return false;
     }
}