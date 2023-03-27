---
title: "¿Qué es la promesa en JavaScript? | Tutorial de JavaScript" 
seoTitle: "¿Qué es la promesa en JavaScript?" 
description: "¿Qué es la promesa en JavaScript? Una promesa es un bloque de código que da el resultado final de una operación asincrónica como pendiente, completada o rechazada." 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "¿Qué es la promesa en JavaScript? Una promesa es un bloque de código que da el resultado final de una operación asincrónica como completada o rechazada." 
url: /es/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

## ¿Estás luchando por aprender el concepto de promesas de JavaScript? Este artículo explicará cómo crear una promesa, por qué usamos Promise en JavaScript y más.

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


## Descripción general
Esperamos que tenga una mejor comprensión de [tipos de datos JavaScript][1]. Ahora, esta es otra publicación de blog en la categoría [Programación][2]. En este tutorial de JavaScript, pasaremos por **lo que es prometedor en JavaScript** , y junto con eso, también veremos cuáles son las operaciones asincrónicas, el uso de promesas y cómo crear promesas en JavaScript. Primero, un proceso/operación asíncrona es uno que se ejecuta independientemente con respecto a otros procesos y no crea ningún bloqueo. Por lo tanto, debe manejar operaciones asíncronas, de lo contrario, puede crear anormalidades en su código JavaScript. Por lo tanto, exploraremos cómo podemos manejar operaciones asíncronas utilizando promesas.
Cubriremos los siguientes puntos en este tutorial de JavaScript:
* **[¿Qué es la promesa en JavaScript? Promesas explicadas][3]** 
* **[¿Por qué usamos la promesa en JavaScript?][4]** 
* **[¿Cómo funciona la promesa en JavaScript?][5]** 
* **[¿Cómo crear una promesa?][6]** 

## ¿Qué es la promesa en JavaScript? Promisiones explicaron {#What-is-promise-in-JavaScript-Promises-Explained}

Una promesa es un objeto que representa un valor de un clima de operación de asíncrono que se resuelve, se rechaza o está en estado pendiente. En palabras más simples, las promesas se utilizan para devolver un valor que aún no se ha producido por un bloque de código asincrónico. De hecho, hay tres **estados de promesa** y puede estar en cualquiera de los siguientes estados:
**pendiente** : La promesa está en un estado pendiente, lo que significa que está en fase inicial y actualmente está en ejecución.
**Cumplimiento** : La promesa se resuelve y el valor se ha devuelto.
**Rechazado** : Este es el estado causado por cualquier error, lo que significa que la promesa ha sido rechazada.
Una cosa importante a tener en cuenta aquí es que el valor/estado devuelto por la promesa es inmutable y no se puede cambiar, lo que significa promesas asegurarse de que no haya un comportamiento inusual.

## ¿Por qué usamos Promise en JavaScript? {#Why-we-use-promise-in-JavaScript}

Si no está al tanto de **Callback Hell**, déjame compartir qué es. Primero, una devolución de llamada es una función dentro de otra función. Básicamente, una función de devolución de llamada se pasa como un segundo argumento en una función que se ejecuta al recibir resultados. Entonces, en muchos escenarios, debe anidar una función de devolución de llamada y, a medida que aumenta la anidación, se vuelve casi imposible de manejar. Por lo tanto, llamamos a esta larga anidación de funciones de devolución de llamada**Hell de devolución de llamada** .
Entonces, una promesa es una forma de evitar una situación de infierno de devolución de llamada. El uso de promesas ofrece una mejor legibilidad y un mejor manejo de errores. Además, puede manejar mejor las operaciones asincrónicas recuperando el valor devuelto y pasando ese valor a la siguiente función en la cadena.

## ¿Cómo funciona la promesa en JavaScript? {#How-promise-works-in-JavaScript}

Ahora, comprendamos el mecanismo de trabajo detrás de las promesas. Eche un vistazo al diagrama mencionado a continuación.

{{< figure align=center src="images/what-is-a-promise.png" alt="¿Cómo funciona la promesa en JavaScript??" >}}

Según el flujo de trabajo mencionado anteriormente, los detalles de implementación son bastante claros. Promise comienza a la ejecución sobre su creación y está en el estado pendiente esperando la respuesta. Hay dos opciones, o habrá datos o habrá un error al final del procesamiento. Al recibir datos, entra en el bloque .then () y entra en el bloque .catch () en caso de un error.

## ¿Cómo crear una promesa? {#How-to-create-a-promise}

Hasta ahora, hemos cubierto el concepto básico de promesa. Ahora, vamos a explorar cómo podemos crear una promesa en JavaScript. Usemos el siguiente constructor de promesa para crear una promesa.
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
Promise Constructor toma una función como un argumento que nuevamente toma dos argumentos primero, resuelve y el otro rechazo. Invoca el método Resolve () en caso de éxito y entra en el bloque de rechazo () en caso de error o rechazo.
Vamos un poco profundos y exploremos la creación de la promesa un poco más.
```
let data = "";

let dataValue = new Promise(function (resolve, reject) {
    if (data) {
        resolve("There is some data.");
    } else {
        reject("There is no data");
    }
});

console.log(dataValue);
```
En el fragmento de código anterior, puede hacer más llamadas de API en el bloque resolve ().
Ahora, veamos el patrón de ejecución de una promesa de JavaScript.
```
let promiseExecution = new Promise((res, rej) => {
  console.log('synchronous execution');
  if (true) {
    res('Success');
  } else {
    rej('Error');
  }
})

promiseExecution.then((data) => {
  console.log('It is executing asynchronously: ' + data);
}).catch((err) => {
  console.log('It is executing asynchronously: ' + err);
}).finally(() => {
  console.log('promise is completed');
});

console.log('Hello Word');
```
El siguiente es la salida del fragmento de código anterior:
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
Entonces, el código dentro del cuerpo de la promesa funciona sincrónicamente para que se imprima la "ejecución sincrónica". A continuación, el bloque. Then () funciona de manera asincrónica y espera hasta que se haya generado el resultado, pero la ejecución del programa no se detiene por eso se imprime "Hello Word" y la ejecución de la promesa se ha aplazado. Después de eso, el bloque .Then () se ejecuta y devuelve los valores que prometió. Esa es la historia de las promesas de JavaScript. Una vez más, dado que JavaScript está enhebrado solo, las promesas se utilizan para manejar las operaciones asíncronas de una manera que no es de bloqueo.

## Conclusión
Este es el final de este **Tutorial JavaScript**. Espero que tengas una buena idea de las promesas de JavaScript. Hemos cubierto **lo que es prometedor en JavaScript** , por qué usamos Promise en JavaScript,**cómo la promesa funciona en JavaScript** y cómo crear una promesa. Además, cubriremos este tema más sobre su uso avanzado y sus disposiciones. Por lo tanto, revise este artículo en caso de que se esté preparando para una sesión de entrevista.

## Conéctate con nosotros
Finalmente, [Contenerize.com][7] ofrece tutoriales de JavaScript en curso sobre varios temas emocionantes. Puede permanecer en el bucle siguiéndonos en nuestras plataformas de redes sociales, incluidas [Facebook][8], [LinkedIn][9] y [Twitter][10].

## Hacer una pregunta
Puede informarnos sobre sus preguntas o consultas en nuestro [Foro][11].

## Preguntas frecuentes
**¿Cuáles son las promesas en JavaScript con ejemplo?** 
Siga este [enlace][3] para saber cuáles son las promesas en JavaScript.

## Ver también
  * [¿Qué son los tipos de datos de JavaScript? | Una guía para principiantes][1]
  * [Arquitectura basada en contenedores y contenedores de Kubernetes Multi-Tenancy][12]
  * [¿Qué es la computación sin servidor? | Arquitectura sin servidor][13]
  * [¿Qué es la multitenancia? | ¿Por qué un enfoque de múltiples inquilinos?][14]
  * [¿Qué son los tipos de datos de JavaScript? | Una guía para principiantes][15]



[1]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-promise-in-JavaScript-Promises-Explained
[4]: #Why-we-use-promise-in-JavaScript
[5]: #How-promise-works-in-JavaScript
[6]: #How-to-create-a-promise
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/kubernetes-multi-tenancy-container-based-architecture/
[13]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[14]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[15]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
