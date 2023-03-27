---
title: "¿Qué es async en JavaScript? | Una guía de JavaScript" 
seoTitle: "¿Qué es async en JavaScript?" 
description: "¿Qué es async en JavaScript? Las palabras clave de Async & Await se utilizan para operar operaciones asíncronas mejor que las promesas tradicionales en JavaScript." 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "¿Qué es async en JavaScript? Las palabras clave de Async & Await se utilizan para operar operaciones asíncronas mejor que las promesas tradicionales en JavaScript." 
url: /es/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017 introdujo JavaScript Async/Weit, que es un envoltorio en torno a las promesas. Async/Agait se utiliza para consumir API basadas en la promesa de la manera moderna y simple.

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="¿Qué es async en JavaScript??">}}


## Descripción general
Cubrimos [promesas de JavaScript][1] en nuestra publicación de blog anterior y debe visitar si desea obtener una comprensión clara del concepto detrás de las promesas de JavaScript. En esta serie de [JavaScript Tutorials][2], estamos aquí con otra guía de JavaScript que demostrará las características modernas de JavaScript Async/Weit. Esta publicación de blog es para aquellos que tienen conocimiento previo de las promesas de JavaScript. Además, trataremos de cubrir  **qué es async/espera en javascript** , y cuando necesitemos usar async/esperanza. Además, también cubriremos errores de manejo con async/espera. Entonces, lea exhaustivamente a este **Tutorial de async/esperanza javascript**  para marcar este concepto verificado.
Revisaremos las siguientes secciones en este tutorial de espera de JavaScript Async:
*  **[¿Qué es async/espera en JavaScript? Async espera sintaxis][3]**  
*  **[¿Cuándo usar Async/Await?][4]**  
*  **[Manejo de errores con async/a espera][5]**  

## ¿Qué es async/espera en JavaScript? Asíncrata espera sintaxis {#What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax}

ECMAScript 2017 lanzó nuevas características de JavaScript y Async/Await es una de las más utilizadas entre estas características. Async/Agait está construido sobre las promesas y en realidad es una forma moderna de manejar las promesas de JavaScript.
Veamos cómo usar las palabras clave async/espera en el código JavaScript:
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().then(function(){
  console.log(data); // results printed.
})
```
Bueno, la palabra clave Async al inicio de la función implica que esta función le devolverá una promesa. Por lo tanto, la palabra clave de espera siempre se usa dentro del cuerpo de la función async para detener la ejecución de la función hasta que la promesa se resuelva. Lo importante a tener en cuenta aquí es que no puede usar la palabra clave esperar dentro del cuerpo de una función regular. Sin embargo, puede usar solo esperar con funciones asincrónicas declaradas con la palabra clave Async.

## ¿Cuándo usar async/espera? {#When-to-use-AsyncAwait}

Hasta ahora, tienes la respuesta a**¿Qué es Async? Dado que esto es solo un envoltorio alrededor de las promesas tradicionales de JavaScript, es mejor usar esta nueva forma de crear y manejar promesas de una manera más limpia y legible. Además, puede deshacerse de múltiples promesas. Then () llamadas usando async/esperanza que eventualmente hace que el código fuente sea más manejable y mantenible. La palabra clave espera encapsula la instrucción .then () en una sola línea.

## Manejo de errores con async/espera {#Error-handling-with-AsyncAwait}

El manejo de errores es una tarea crítica cuando se trata del desarrollo de software a nivel empresarial. Hay múltiples formas de detectar errores en el enfoque Async/espera.

{{< figure align=center src="images/async-await.png" alt="intente atrapar async espera javascript">}}

 **Intente atrapar async espera javascript** : nada nuevo con este enfoque de manejo de errores. Sin embargo, puede usar un bloque de prueba/captura dentro de una función async como se muestra en el fragmento de código a continuación:
```
async function getValues() {
  try{
    let promise = new Promise(function(resolve, reject) {
     // processing.. 
    });

    let data = await promise; // waits until the promise fulfills
   
    return data;
  } catch(err){
    // you may handle errors the way you want..
  }
 
}
```
Usando el bloque Try/Catch, puede atrapar las excepciones dentro del cuerpo de una función asíncrata.
Mientras que, hay otro enfoque para manejar errores en los que puede agregar el bloque .catch () al final de la llamada de función. Dado que Async/Agait devuelve una promesa, por lo que capta los errores en el bloque .catch ().
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().catch(err){
 // catch the errors 
}
```

## Conclusión
Estamos terminando este  **JavaScript Async espera el tutorial**  . Espero que tengas una mejor comprensión de**¿Qué es Async? Además, hemos pasado por JavaScript Async espera la sintaxis que hace que el código fuente sea menos complejo. Esta característica de JavaScript se usa ampliamente debido a su rico uso y rendimiento. En los próximos días, escribiremos más sobre las características y conceptos de JavaScript para que pueda obtener un comando fuerte sobre los conceptos JS. Además, hay otros artículos interesantes mencionados en la sección "Ver también".

## Conéctate con nosotros
Por último, [Contenerize.com][6] ofrece tutoriales continuos de JavaScript sobre varios temas emocionantes. Puede mantenerse actualizado siguiéndonos en nuestras plataformas de redes sociales, incluidas [Facebook][7], [LinkedIn][8] y [Twitter][9].

## Hacer una pregunta
Puede informarnos sobre sus preguntas o consultas en nuestro [Foro][10].

## Preguntas frecuentes
 **¿Qué es Async que espera en JavaScript con ejemplo?** 
Puede visitar este [enlace][3] para comprender el concepto de asíncrono espera.
 **¿Qué es async espera vs promesa?** 
 * Async/Await hace que el código fuente sea más claro y legible en comparación con las promesas en las que el encadenamiento de la promesa puede hacer que el código fuente sea un desastre.
 * El manejo de errores es bastante similar en ambos enfoques.
 * La depuración es menos difícil en la esperanza de asíncrono.
 * Las promesas mantienen a los estados como pendientes, resueltos o rechazados. Mientras que el async/esperanza se resuelve o se rechaza.

## Ver también
  * [¿Qué es la promesa en JavaScript? | Tutorial de JavaScript][1]
  * [¿Qué es la computación sin servidor? | Arquitectura sin servidor][11]
  * [¿Qué es la multitenancia? | ¿Por qué un enfoque de múltiples inquilinos?][12]
  * [¿Qué es generativo AI? Inteligencia artificial generativa][13]
  * [Cómo integrar chatgpt con hojas de Google][14]
  * [Cómo usar chatgpt en vscode | El código de extensión VScode GPT][15]
  * [¿Qué es OpenAi Chatbot GPT-3 | Chatgpt una revolución ai][16]
  * [Una introducción a la inteligencia artificial | ¿Qué es AI?][17]



 [1]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
 [2]: https://blog.containerize.com/categories/programming/
 [3]: #What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax
 [4]: #When-to-use-AsyncAwait
 [5]: #Error-handling-with-AsyncAwait
 [6]: https://www.containerize.com/
 [7]: https://web.facebook.com/containerize
 [8]: https://www.linkedin.com/company/containerize/
 [9]: https://twitter.com/containerize_co
 [10]: https://forum.containerize.com/
 [11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
 [12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
 [13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
 [14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
 [15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
 [16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
 [17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
