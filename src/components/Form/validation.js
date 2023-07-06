export default function Validate(userData) {
  const regexEmail = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  const regexNumber = new RegExp("[0-9]");
  let errors = {};
  // let arrPass = userData.password.ssplit("");
  if (userData.email.trim().length === 0) {
    errors.email = "El email no puede estar vacío";
  } else if (!regexEmail.test(userData.email)) {
    errors.email = "Ingrese un email válido";
  } else if (userData.email.trim().length > 35) {
    errors.email = "El email no puede contener más de 35 caracteres";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  } else if (!regexNumber.test(errors.pas)) {
    errors.password = "La contraseña debe incluir un número";
    // arrPass.every((element) => {
    //   if (!isNaN(element)) {
    //     console.log(element);
    //     delete errors.password;
    //     return false;
    //   } else {
    //     errors.password = "La contraseña debe incluir un número";
    //     return true;
    //   }
    // });
  }
  return errors;
}
