function esPalindromo(cadena) {

  const expRegular = /[.,:;()_?¿!¡-\s]/g;

  let palindromo1 = cadena
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replaceAll(expRegular, "");

  let palindromo2 = palindromo1
    .split("")
    .reverse()
    .join("");

  if (palindromo1 === palindromo2) {
    return true;
  } else {
    return false;
  }

}


