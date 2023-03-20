---
title: "Aprenda conceptos básicos de JavaScript para ayudar a su carrera" 
seoTitle: "Conceptos básicos de JavaScript" 
description: "Siga este tutorial de JavaScript para aprender conceptos básicos de JavaScript. Los ámbitos, el elevación y los cierres son conceptos muy básicos pero obligatorios en JavaScript." 
date: 2023-03-17T00:00:00+00:00
author: muhammadmustafa
summary: "Siga este tutorial de JavaScript para aprender conceptos básicos de JavaScript. Los ámbitos, el elevación y los cierres son conceptos muy básicos pero obligatorios en JavaScript." 
url: /es/learn-javascript-basic-concepts-to-help-your-career/
tags: ["JavaScript Basic Concepts", "what is hoisting in JavaScript", "JavaScript closures", "scopes in JavaScript", "JavaScript fundamental"]
categories: ['Programming']
---

## Aprendamos algunos fundamentos básicos de JavaScript que un desarrollador debe saber. Este lenguaje de programación interpretado se usa ampliamente para desarrollar aplicaciones de nivel empresarial.

{{< figure align=center src="images/Learn-JavaScript-Basic-Concepts-to-Help-Your-Career.png" alt="Conceptos básicos de JavaScript">}}


## Descripción general
JavaScript es un lenguaje de secuencias de comandos utilizado para desarrollar aplicaciones dinámicas basadas en la web. Utilizamos HTML y CSS para crear sitios web estáticos, mientras que JavaScript se usa para agregar interactividad. En nuestra publicación de blog anterior, cubrimos [modelo de objeto de documento] [1] y ahora cubriremos otros conceptos básicos importantes**JavaScript**. Los desarrolladores web tienden a optar por este lenguaje de secuencias de comandos debido a sus ricas características y marcos. Además, puede hacer desarrollo en la parte delantera y en la parte trasera aprendiendo JavaScript. Sin embargo, no solo puede desarrollar aplicaciones web sino también aplicaciones móviles. Este tutorial de JavaScript lo ayudará si se está preparando para una sesión de entrevista. Sin embargo, vale la pena leer esta guía para agregar más a su cubo de conocimiento.
Cubriremos los siguientes puntos en este artículo:
***[Lo que está elevando en JavaScript] [2]**
***[Scopes in JavaScript] [3]**
***[Cierres de JavaScript] [4]**

## ¿Qué está elevando en JavaScript {#What-is-is-hoisting-in-javaScript}
El fenómeno de tomar función o declaración variable en la parte superior del alcance actual se conoce como elevación. Este es un concepto muy crítico y la mayoría de los desarrolladores de JavaScript no son conscientes de ello. Sin embargo, una cosa importante a tener en cuenta aquí es que solo las declaraciones de función/variable se toman en la parte superior, no la inicialización de la función/variable.
Tomemos un ejemplo y veamos el fragmento de código a continuación;
```
printResults();
function printResults(){
    console.log("hello programmers")
}
// output: hello programmers

```
En el ejemplo de código anterior, realizamos la llamada de función antes de la declaración de función, pero aunque el código se ejecuta con éxito y eso se debe a la elevación de JavaScript. Básicamente, durante el tiempo de compilación, el intérprete JavaScript escanea el código, reúne todas las funciones/variables y las pone en memoria llamada entorno léxico. Lo mismo sucede con las variables.
```
name = "mustafa";
console.log(name);
var name;

```
Del mismo modo, la inicialización de la variable de nombre se ha realizado antes de su declaración, y el código funciona sin ningún error. Nuevamente, durante el tiempo de compilación, el intérprete JS investigó el entorno léxico para encontrar la declaración variable y, por lo tanto, ejecutó el código.
Entonces, si declara variables con palabras clave LET y const, JavaScript las izará de manera un poco diferente.
```
name = "mustafa";
console.log(name);
let name;
// Uncaught ReferenceError: Cannot access 'name' before initialization

```
Se produjo el error en el fragmento de código anterior. La razón es que la inicialización no se realizó mientras elevaba esta variable. En pocas palabras, todas las declaraciones se inicializan con "indefinido", mientras que las variables declaradas con "let" o "const" no se inicializan en el elevación.

## Scopes en JavaScript {#Scopes-in-JavaScript}
El alcance es uno de los conceptos básicos de JavaScript que un desarrollador debe conocer. Sin embargo, trabajar con ámbitos de JavaScript no es sencillo y es un poco diferente. Por lo tanto, hay tres tipos de ámbitos en JavaScript y estos son los siguientes:
* * Level de bloque**: Variables declaradas con "Let" o "Const" contiene el alcance de nivel de bloque.
```
if(true){
  let a = 1;
}
// a is not accessible outside the curly braces.
```
La variable "A" no es accesible fuera de las láminas rizadas {} porque tiene un alcance de nivel de bloque.
* * Level de función**: Las variables declaradas dentro de la función JavaScript tienen el alcance local.
```
function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is not accessible outside the function.
```
Una cosa importante a tener en cuenta aquí es que las variables declaradas con "let" "const" y "var" tienen el alcance de la función dentro del cuerpo de la función.
* * A nivel global**: Las variables declaradas fuera de la función se convierten en variables globales. No importa si los ha declarado usando palabras clave "Let", "const" o "var". Además, una variable se convierte en una variable global si se declara sin usar ninguna palabra clave como se muestra en el fragmento de código a continuación:
```
function innerFunc(){
        last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is accessible outside the function too and is of global scope
```

## JavaScript Cierres {#JavaScript-Closures}
Este es otro concepto importante que fortalece su conocimiento de JavaScript sobre ámbitos y encapsulación de datos. En la forma más simple, una función dentro de una función se conoce como cierre. Puede llamar a la función interna un cierre. Esta función interna tiene tres tipos de alcance:
 * Tiene su propio alcance de nivel de bloque.
 * Tiene acceso a las variables de los padres.
 * También se pueden acceder a las variables en el alcance global dentro del cierre.
 Veamos cómo crear un cierre:
```
 function myFunction(){
    let first_name = "mustafa";
    function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+first_name+" "+last_name);
    }
    return innerFunc()
}
myFunction()
// output: hello mustafa ashraf
```
La variable First_Name es accesible dentro de la función llamada InnerFunc, pero la función principal no puede tener acceso a la variable Last_Name. Este comportamiento permite a los programadores crear variables privadas en la cadena de alcance.

## Conclusión
Estamos terminando esta guía de JavaScript aquí y esperamos que tenga una mejor comprensión de**JavaScript Conceptos básicos**. Además, también hemos pasado por**JavaScript cierres, alcances en JavaScript**y elevación. Hay muchos otros conceptos importantes que son obligatorios para los principiantes. Por lo tanto, este artículo lo ayudará si está prosperando para mejorar o actualizar sus conceptos de JavaScript. Además, puede revisar las publicaciones de blog mencionadas en la sección "Ver también".

## Conéctate con nosotros
Finalmente, [Contenerize.com] [5] ofrece tutoriales de JavaScript en curso sobre varios temas emocionantes. Puede permanecer en el bucle siguiéndonos en nuestras plataformas de redes sociales, incluidas [Facebook] [6], [LinkedIn] [7] y [Twitter] [8].

## Hacer una pregunta
Puede informarnos sobre sus preguntas o consultas en nuestro [Foro] [9].

## Preguntas frecuentes
* * ¿Cuáles son los conceptos importantes para aprender en JavaScript?**
Siga este principiante de JavaScript [Guía] [2] para conocer los conceptos básicos de JavaScript.

## Ver también
  * [¿Qué es DOM en JavaScript? | Modelo de objeto de documento] [1]
  * [¿Qué es la promesa en JavaScript? | Tutorial de JavaScript] [10]
  * [¿Qué es la computación sin servidor? | Arquitectura sin servidor] [11]
  * [¿Qué es la multitenancia? | ¿Por qué un enfoque de múltiples inquilinos?] [12]
  * [¿Qué es generativo AI? Inteligencia artificial generativa] [13]
  * [¿Qué es Async esperando en JavaScript? | Una guía de JavaScript] [14]
  * [Cómo usar chatgpt en vscode | El código de extensión VScode GPT] [15]
  * [¿Qué es OpenAi Chatbot GPT-3 | Chatgpt una revolución ai] [16]
  * [Una introducción a la inteligencia artificial | ¿Qué es AI?] [17]
  * [¿Qué es Async esperando en JavaScript? | Una guía de JavaScript] [18]
[1]: https://blog.containerize.com/what-is-dom-in-javascript-document-object-model/
[2]: #What-is-hoisting-in-JavaScript
[3]: #Scopes-in-JavaScript
[4]: #JavaScript-Closures
[5]: https://www.containerize.com/
[6]: https://web.facebook.com/containerize
[7]: https://www.linkedin.com/company/containerize/
[8]: https://twitter.com/containerize_co
[9]: https://forum.containerize.com/
[10]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[18]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
