---
title: "¿Qué son los patrones de diseño de JavaScript? | Guía para principiantes" 
seoTitle: "Patrones de diseño de JavaScript" 
description: "Esta guía para principiantes de JavaScript explica los patrones de diseño de JavaScript. Lleve su desarrollo al siguiente nivel adoptando los mejores patrones de código." 
date: 2023-03-24T00:00:00+00:00
author: muhammadmustafa
summary: "Esta guía para principiantes de JavaScript explica los patrones de diseño de JavaScript. Lleve su desarrollo al siguiente nivel adoptando los mejores patrones de código." 
url: /ar/what-are-javascript-design-patterns-beginners-guide/
tags: ["JavaScript Design Patterns", "learning JavaScript design patterns", "factory pattern JavaScript", "observer pattern JavaScript", "singleton pattern javascript", "module design pattern"]
categories: ['Programming']
---

## Los desarrolladores muestran una intención positiva en el aprendizaje de los patrones de diseño de JavaScript. Los patrones de diseño JS le dan a su código fuente un diseño para que sea eficiente y mantenible.

{{< figure align=center src="images/what-are-javascript-design-patterns-beginners-guide.png" alt="Patrones de diseño de JavaScript">}}


## Descripción general
Una gran cantidad de programadores de JavaScript no están claros sobre **JavaScript Patterns** y este espacio debe llenarse. En esta serie de [Tutoriales JavaScript][1], estamos escribiendo esta publicación de blog que cubrirá los patrones de diseño JavaScript más utilizados, como el patrón de diseño del módulo, el patrón de observador y más. Además, intentaremos demostrar el uso de ejemplos de código para que no quede ambigüedad en su mente. Este tema es muy importante si sigue una carrera en JavaScript. Por lo tanto, manténgase conectado a lo largo de este artículo, y al final de esta publicación de blog, debe tener una sólida comprensión de los patrones de diseño JS.
Los siguientes puntos se cubrirán en esta Guía de principiantes de JavaScript:
* **[¿Qué son los patrones de diseño de JavaScript?][2]** 
* **[Patrón de diseño del módulo][3]** 
* **[Patrón de fábrica JavaScript][4]** 
* **[JavaScript de patrón Singleton][5]** 
* **[Patrón de observador JavaScript][6]** 

## ¿Qué son los patrones de diseño de JavaScript? {#What-are-JavaScript-design-patterns}

Los patrones de diseño de JavaScript son soluciones en forma de plantillas que proporcionan soluciones eficientes a los problemas comunes que ocurren repetidamente al escribir el código fuente. En palabras más simples, los patrones de diseño son estilos/órdenes predefinidos para escribir código Javasciprt mantenible y manejable.
En pequeñas organizaciones, la mayoría de los desarrolladores no prestan atención a los patrones de diseño, pero se convierte en un tema crítico cuando está construyendo software comercial a gran escala. Básicamente, hay varios desarrolladores que trabajan para el software de nivel empresarial que tienen su propio estilo de código de escritura. Por lo tanto, opta por un patrón de diseño para evitar problemas repetidos, crear bloques de código reutilizables y acelerar el desarrollo de aplicaciones.

## Patrón de diseño de módulos {#Module-design-pattern}

Este es el patrón de diseño más común y favorito que optan los desarrolladores. Según este patrón de diseño, los bloques de código de aplicación se colocan por separado entre sí en forma de módulos. Este patrón de diseño de JavaScript proporciona aislamiento y encapsulación. Además, puede realizar funciones y atributos públicos/privados a los que no puede acceder desde fuera del módulo. Sobre todo, los módulos en el patrón de diseño modular siempre devuelven un objeto.
Puede usar este patrón de diseño en caso de que esté construyendo una aplicación comercial destacada a nivel empresarial. Por lo tanto, puede construir un módulo separado para cada característica para traer independencia.
El siguiente fragmento de código demuestra el patrón de diseño modular:
```
const student = (function () {
  // Private
  let name = "mustafa";
  let program = "computer science";
  const getStudentName = () => name;
  const getStudentProgram = () => program;

  // Public
  return {
    name,
    program,
    getName: () => getStudentName(),
    getStudentProgram: () => getStudentProgram(),
  };
})();

student.name;
student.program;
student.getStudentProgram();
```

## Patrón de fábrica JavaScript {#Factory-pattern-JavaScript}

Según este patrón de diseño, crea objetos que usan una interfaz en lugar de llamar al constructor con el operador **nuevo** . De hecho, especificamos un tipo de objeto y la fábrica crea una instancia y nos envía para su uso. Además, este patrón de diseño de JavaScript ofrece un control completo sobre la creación de objetos. Además, puede elegir este patrón de diseño para manejar objetos simples y complejos y también es aconsejable usar el patrón de fábrica para el desacoplamiento.
Escribamos un fragmento de código para una mayor exploración.
```
// sandwich.js
const Sandwich = function({name }) {
  this.name = name || "";
};
module.exports = Sandwich;
```
```
// burger.js
const Burger = function({name }) {
    this.name = name || "";
};
module.exports = Burger;
```
```
// gadFoodFactory.js
const Sandwich = require("./sandwich");
const Burger = require("./burger");
const food = { Burger, Sandwich };
module.exports = {
    createFood(type, attributes) {
        const GadFoodType = food[type];
        return new GadFoodType(attributes);
    }
};
```
```
// index.js
const gadFoodFactory = require("./gadFoodFactory");
const mySandwich = gadFoodFactory.createFood("Sandwich", {
    name: "Chicken"
});
const myBurger = gadFoodFactory.createFood("Burger", {
    name: "Grilled",
});
console.log(mySandwich);
console.log(myBurger);
```

## Singleton Pattern JavaScript {#Singleton-pattern-JavaScript}

Este patrón de diseño es muy popular que restringe la instanciación de una clase a un solo objeto. El servicio en JavaScript Framework Angular sigue este patrón donde crea solo una instancia del servicio y ese objeto es accesible para todos los módulos. Además, todo el cliente conectado al objeto único comparte los mismos recursos y niveles de acceso.
La demostración del patrón **singleton** es la siguiente:
```
let singletonPattern = new (function () {

  let name = "mustafa";

  this.printName = function() {
      console.log(name);
  }
})();

singletonPattern.printName();

// output: mustafa
```

## Javascript de patrón de observador {#Observer-pattern-JavaScript}

El patrón Observer es bastante útil para construir aplicaciones comerciales escalables. Un mecanismo de notificación está involucrado en este patrón de código. Cada vez que hay un cambio, desencadena un evento que notifica a otras suscripciones dependientes. Entonces, este patrón transmite el último estado a otros objetos en los módulos. De hecho, se trata de informar el cambio a los suscriptores automáticamente.
Los siguientes ejemplos de código siguen el patrón de observador:
```
function ObserverFunc() {
this.observerArray = [];
}

ObserverFunc.prototype.subscribe = function (ele) {
this.observerArray.push(ele);
}

ObserverFunc.prototype.unsubscribe = function (element) {
const elementIndex = this.observerArray.indexOf(element);
if (elementIndex &gt; -1) {
this.observerArray.splice(elementIndex, 1);
}
}

ObserverFunc.prototype.notifyAll = function (element) {
this.observerArray.forEach(function (observerElement) {
observerElement(element);
});
}
```

## Conclusión
Eso es todo para los patrones de diseño **JavaScript** . Esperamos que haya disfrutado este **tutorial de JavaScript** y haya aprendido los conceptos de patrones de diseño. Hemos cubierto los patrones de código más utilizados, como patrones de diseño de módulos, singleton, observador y patrones de diseño de fábrica. Este artículo le dará una imagen clara con la ayuda de los fragmentos de código. Además, hay otras publicaciones de blog muy relevantes que puede encontrar en la sección "Ver también" a continuación.

## Conéctate con nosotros
Finalmente, [Contenerize.com][7] está en un proceso consistente de escribir publicaciones de JavaScript sobre nuevos temas. Puede permanecer en el bucle siguiéndonos en nuestras plataformas de redes sociales, incluidas [Facebook][8], [LinkedIn][9] y [Twitter][10].

## Hacer una pregunta
Puede informarnos sobre sus preguntas o consultas en nuestro [Foro][11].

## Preguntas frecuentes
**¿Cuáles son los patrones de diseño más populares en JavaScript?**
Los patrones de patrón de módulo, observador, fábrica y singleton se usan ampliamente en la programación de JavaScript. Siga este [enlace][2] para explorar más.

## Ver también
 * [Aprenda conceptos básicos de JavaScript para ayudar a su carrera][12]
 * [Una introducción a la inteligencia artificial | ¿Qué es AI?][13]
 * [Cómo integrar chatgpt con hojas de Google][14]
 * [Cómo usar chatgpt en vscode | El código de extensión VScode GPT][15]
 * [¿Qué es OpenAi Chatbot GPT-3 | Chatgpt una revolución ai][16]
 * [Integración de Google Docs con ChatGPT | Operai GPT-3][17]
 * [¿Cuáles son los 5 mejores marcos de IA de código abierto][18]
 * [¿Qué es generativo AI? Inteligencia artificial generativa][19]



[1]: https://blog.containerize.com/categories/programming/
[2]: #What-are-JavaScript-design-patterns
[3]: #Module-design-pattern
[4]: #Factory-pattern-JavaScript
[5]: #Singleton-pattern-JavaScript
[6]: #Observer-pattern-JavaScript
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/learn-javascript-basic-concepts-to-help-your-career/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
