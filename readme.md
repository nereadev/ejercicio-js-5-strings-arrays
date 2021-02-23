## Ejercicio 5 - Strings y arrays

Crea una función que se llame `esPalindromo`, que reciba como parámetro una cadena, y que devuelva `true` o `false` dependiendo de si la cadena es un palíndromo o no.

Algoritmo para detectar si es palíndromo:
1. Pasar todo el texto a minúsculas.
2. Quitar espacios y signos de puntuación.
3. Cambiar las letras con acentos por letras sin acentos.
4. Invertir el texto normalizado.
5. Comparar el texto normalizado con el resultado de invertirlo.

Pistas:
- Expresión regular para detectar espacios y signos de puntuación: `/[.,:;()_?¿!¡-\s]/g`
- Cambiar letras con acentos por letras sin acentos: `texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')`
- Para invertir un string hay que convertirlo primero en array, invertir el array y volver a convertirlo en string
- Puedes convertir un string en array y viceversa con los métodos split() y join()