---
title: "¿Qué son los tipos de datos de JavaScript? | Una guía para principiantes" 
seoTitle: "¿Qué son los tipos de datos de JavaScript? | Una guía para principiantes" 
description: "¿Qué son los tipos de datos de JavaScript? Siga esta guía para principiantes para aprender 7 tipos de datos utilizados en el número JavaScript, String, Boolean, Null, Undefined y más." 
date: Fri, 17 Feb 2023 08:57:43 +0000
author: muhammadmustafa
summary: "La popularidad de JavaScript es imparable debido a su adaptabilidad. Siga esta guía para principiantes de JavaScript y comience a fomentar su experiencia en JS Stack." 
url: /es/what-are-javascript-data-types-a-beginners-guide/
categories: ['Programming']
---

## La popularidad de JavaScript es imparable debido a su adaptabilidad. Siga esta guía para principiantes de JavaScript y comience a fomentar su experiencia en JS Stack.

{{< figure align=center src="images/What-are-JavaScript-Data-Types-A-Beginners-Guide-1.png" alt="What are JavaScript Data Types? |¿Qué son los tipos de datos de JavaScript? | Una guía para principiantes">}}


## Descripción general
No importa si usted es un nivel mediocre o un desarrollador experimentado, obtendrá las soluciones a sus problemas durante los trabajos de desarrollo. [Contenerize.com][1] ha comenzado a escribir publicaciones de blog de tutoriales en la categoría de programación y estamos comenzando con una guía**JavaScript Beginner**. Dado que estamos comenzando, este artículo trata sobre los tipos de datos de JavaScript. Explore**¿Cuáles son los tipos de datos de JavaScript?**y ver ejemplos de cómo puede usarlos en el código fuente de manera eficiente. Por lo tanto, pase a través de esta guía para principiantes para que pueda tener una buena comprensión de**JavaScript Tipos de datos**.
Estamos cubriendo el siguiente punto:
  * [¿Qué es un tipo de datos?][2]
  * [¿Qué son los tipos de datos de JavaScript?][3]

## Tipos de datos explicados | ¿Qué es un tipo de datos? {#What-is-a-data-type}
Un tipo de datos se trata de decirle al compilador cómo interpretar o compilar los datos. El uso de los tipos de datos es crítico y debe usarse sabiamente. En palabras simples, se trata del formato de los datos, como el número, la cadena, el booleano y más. Sin embargo, existen dos categorías de tipos de datos tipos de datos primitivos y tipos de datos no ejercicios. Hay ocho tipos de datos primitivos por los que pasaremos en la siguiente sección.

## ¿Qué son los tipos de datos de JavaScript? {#What-ar-javaScript-data-types}
De hecho, JavaScript es un lenguaje tipado libremente, lo que significa que no tiene que definir el tipo de variable explícitamente. Puede asignar cualquier valor a una variable y esa variable almacenará ese valor como cadena, bigint, boolean o más.

{{< figure align=center src="images/web-development.png" alt="Guía para principiantes de JavaScript">}}


#### Tipos de datos primitivos
Los tipos de datos primitivos son aquellos que son inmutables y no se pueden cambiar después de la creación e inicialización. Sin embargo, puede reasignar un nuevo valor pero no puede mutar el valor existente.
Por ejemplo:
```
var name = "my name is mustafa";
name = "my name is changed";
console.log(name) // output:  my name is changed
name[0] = "M";
console.log(name) // output: my name is changed
```
En el ejemplo anterior, String es un tipo de datos primitivos y el valor anterior está siendo reemplazado por el nuevo valor, pero el cambio en el valor existente no se está reflejando. Entonces, podemos ver que todavía es "mi nombre ha cambiado", no "mi nombre ha cambiado";

#### Tipos de datos no ejercicios
Los tipos de datos no primitivos son mutables, en palabras simples opuestas a los tipos de datos primitivos.
Por ejemplo:
```
var arr = [1,2,3];
arr[0] = 11;
console.log(arr) // output: [11,2,3]
```
Además, los tipos de datos primitivos se comparan por valor, y los tipos de datos no ejercicios siempre se comparan por referencia.
Por ejemplo:
```
// Primitive Data Type

var first_name = "mustafa";
var last_name = "mustafa";
first_name === last_name  // true

// Non-Primitive Data Type

var arr = [1,2];
var arr2 = [1,2];
arr === arr2 // false
// BUT
var arr = [1,2];
var arr2 = [1,2];
arr = arr2;
arr === arr2 // true
```
Ahora, pasemos por los tipos de datos uno por uno. Hay 6 tipos de datos primitivos y 1 tipo de datos no ejercicios.
**Los tipos de datos primitivos incluyen:**
***Cadena**: Este tipo de datos representa datos textuales que consisten en una secuencia de caracteres rodeados de citas.
***Número**: Representa datos decimales/no decimales, particularmente entero o flotante.
***booleano**: representación de valores lógicos verdaderos o falsos.
***Símbolo**: El símbolo se usa para contener valores únicos.
***Undefined**: una variable sin ningún valor o una variable no inicializada.
***NULL**: La ausencia de cualquier valor se considera nula.
**El tipo de datos no ejercicios incluye:**
**Objeto**: Se utiliza para almacenar la recopilación de datos que consiste en pares de valor clave.

## Conclusión
Este es el final de esta**Guía de principiantes de JavaScript**. Hemos pasado por**¿Cuáles son los tipos de datos de JavaScript**? Además, hemos explorado lo que es un tipo de datos en pocas palabras. Debe tener una mejor comprensión de los tipos de datos no primitivos y no primitivos**en JavaScript. Esta publicación de blog realmente lo ayudará si está buscando prepararse para una entrevista de trabajo.
Finalmente, [Contenerize.com][1] está escribiendo continuamente publicaciones de blog sobre otros productos y temas de código abierto. Además, puede seguirnos en nuestras cuentas de redes sociales [Facebook][4], [LinkedIn][5] y [Twitter][6].

## Hacer una pregunta
Puede informarnos sobre sus preguntas o consultas en nuestro [Foro][7].

## Preguntas frecuentes
**¿Cuáles son los 8 tipos de datos de JavaScript?**
Visite este [enlace][3] para conocer los 8 tipos de datos de JavaScript.

## Ver también
  * [Free & Open Source Popular JavaScript Frameworks][8]
  * [Automatice las operaciones comerciales utilizando software gratuito y de código abierto][9]
  * [Top 10 tecnologías de código abierto para aprender en 2022][10]

  
[1]: https://www.containerize.com/
[2]: #What-is-a-data-type
[3]: #What-are-JavaScript-Data-Types
[4]: https://web.facebook.com/containerize
[5]: https://www.linkedin.com/company/containerize/
[6]: https://twitter.com/containerize_co
[7]: https://forum.containerize.com/
[8]: //blog.containerize.com/2022/02/02/free-open-source-popular-javascript-frameworks/
[9]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[10]: //blog.containerize.com/2022/01/31/top-10-open-source-trending-technologies-of-2022/
