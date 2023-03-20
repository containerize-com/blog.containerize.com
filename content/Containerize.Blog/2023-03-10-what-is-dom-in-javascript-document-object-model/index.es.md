---
title: "¿Qué es Dom en JavaScript? | Modelo de objetos de documento" 
seoTitle: "¿Qué es Dom en JavaScript?" 
description: "¿Qué es Dom en JavaScript? Esta guía demostrará el modelo de objeto de documento, las propiedades de DOM, los niveles de DOM y cómo acceder a los elementos DOM." 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "¿Qué es Dom en JavaScript? Esta guía demostrará el modelo de objeto de documento, las propiedades de DOM, los niveles de DOM y cómo acceder a los elementos DOM." 
url: /es/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## La representación de un documento HTML dentro de un navegador web se trata como un árbol DOM HTML. Es una serie de objetos y define la estructura de una página web.

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="¿Qué es Dom en JavaScript??">}}


## Descripción general
Bienvenido a otra emocionante publicación de blog en la serie de [programación de JavaScript][1]. En este artículo, vamos a tocar un concepto muy básico pero esencial de desarrollo web. Sí, vamos a cubrir el modelo de objeto de documento en JavaScript. En el pasado, hemos publicado tutoriales JavaScript que son obligatorios para comenzar el desarrollo utilizando el lenguaje JavaScript. Por lo tanto, le sugerimos que lea esta publicación de blog a fondo para que no se pierda nada relacionado con este importante concepto. Comencemos esta guía y descubramos**qué es DOM en JavaScript**, DOM Propiedades y cómo puede interactuar con ella mediante programación.
Cubriremos los siguientes temas en esta guía de JavaScript:
***[¿Qué es el modelo de objeto de documento (DOM)?][2]**
***[niveles dom][3]**
***[¿Qué son las propiedades DOM y cómo acceder a ellas?][4]**

## ¿Qué es el modelo de objeto de documento (DOM)? {#What-is-Document-Object-Model}
Dom representa?**Modelo de objetos de documento (DOM)**es la representación de una página web dentro de un navegador web. Simplemente, la representación jerárquica de los elementos de un documento HTML en un navegador se conoce como modelo de objeto de documento. Se forma en forma de árbol que realmente genera el navegador web. Consiste en varios nodos que están conectados entre sí formando una forma de árbol. Además, los elementos DOM tienen atributos y eventos adjuntos a ellos.
De hecho, DOM es una interfaz de programación que formula la estructura lógica de una página web y dicta la forma de acceder a los elementos de la página. Básicamente, JavaScript no reconoce las etiquetas HTML como el título, H1 y, etc., por lo tanto, una vez que un documento HTML se carga en un navegador web, se crea DOM, lo que hace que JavaScript comprenda los elementos del documento.

## Dom niveles {#DOM-Levels}
Esta sección demostrará los diversos niveles de DOM. Primero, hay un objeto de ventana en un navegador que siempre está en la parte superior, y luego hay un nodo de documento. Echemos un vistazo a la imagen a continuación:

{{< figure align=center src="images/DOM.png" alt="Niveles de DOM">}}

Bueno, puedes ver los elementos DOM en la imagen de arriba. La ventana y el documento son los objetos de navegador de nivel superior y luego tenemos el elemento HTML como raíz. Continuando, tenemos los nodos de la cabeza y el cuerpo, el nodo del título pertenece al nodo de la cabeza y el nodo del cuerpo contiene todos los nodos que se vuelven y visibles en el navegador web. Además, los elementos corporales contienen atributos que podemos ver en la imagen, como la etiqueta de anclaje que contiene el atributo "HREF". Del mismo modo, otros nodos DOM contienen varios atributos como IMG, Meta y más.

## ¿Cuáles son las propiedades DOM y cómo acceder a ellas? {#What-ar-dom-properties-and-ship-to-access-them}
Hasta ahora, hemos presentado una respuesta a lo que es DOM en JavaScript y los niveles DOM, y también hemos pasado por los nodos DOM. En esta sección, pasaremos por las propiedades DOM y veremos cómo podemos interactuar con ellas. Cada elemento DOM tiene un valor vinculado a él, como la etiqueta "P" tiene propiedad de texto, la etiqueta IMG tiene la imagen, etc. Los métodos JavaScript se utilizan para acceder a los valores de los nodos. Además, puede agregar/eliminar los oyentes de eventos a los elementos DOM.
Puede encontrar las siguientes propiedades de DOM**:
**Innerhtml**: Esta propiedad se usa para establecer o obtener el contenido HTML de un nodo DOM.
```
let htmlContent = document.getElementById("customID").innerHTML;
```
**InnteText**: Use esta propiedad DOM para acceder o establecer el contenido textual de un elemento HTML.
```
let textualContent = document.getElementById("customID").innerText;
```
**ParentElement**: Puede usar esta propiedad para acceder al nodo principal del elemento.
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
**Estilo**: actualice el atributo de estilo de un elemento.
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
**Título**: Use esta propiedad para actualizar el elemento de título de DOM.
```
document.getElementById("customID").title= "this is a web page";
```
 Los siguientes son algunos de los métodos que podemos usar para interactuar con JavaScript DOM:
**AddEventListener ()**: Este método DOM se usa para conectar un controlador de eventos a un elemento.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getAttribute ()**: Este método DOM se usa para conectar un controlador de eventos a un elemento.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**GetElementById ()**: Método para obtener un elemento específico con la "ID" dada.
```
let element = document.getElementById("myID");
```
**QuerySelector ()**: Use este método para obtener el primer elemento secundario que se coincide con un selector CSS.
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
**toString ()**: puede usar este método para convertir un elemento en una cadena.
Del mismo modo, hay muchos otros métodos y propiedades que puede explorar.

## Conclusión
Estamos terminando este tutorial de Javasxcript aquí con la esperanza de tener una buena comprensión de**Lo que es DOM en JavaScript**. También hemos pasado por**DOM, niveles DOM, HTML DOM Tree y DOM Propiedades**. Esta publicación de blog es muy esencial para los novatos que buscan tener un fuerte control sobre los conceptos de Javascrit. Además, hay otros artículos relevantes que puede encontrar en la sección "Ver también".

## Conéctate con nosotros
Finalmente, [Contenerize.com][5] ofrece tutoriales de JavaScript en curso sobre varios temas emocionantes. Puede permanecer en el bucle siguiéndonos en nuestras plataformas de redes sociales, incluidas [Facebook][6], [LinkedIn][7] y [Twitter][8].

## Hacer una pregunta
Puede informarnos sobre sus preguntas o consultas en nuestro [Foro][9].

## Preguntas frecuentes
**¿Qué se usa DOM en JavaScript?**
Puede visitar este [enlace][2] para obtener una respuesta detallada a esta pregunta.

## Ver también
  * [¿Qué es la promesa en JavaScript? | Tutorial de JavaScript][10]
  * [¿Qué es la computación sin servidor? | Arquitectura sin servidor][11]
  * [¿Qué es la multitenancia? | ¿Por qué un enfoque de múltiples inquilinos?][12]
  * [¿Qué es generativo AI? Inteligencia artificial generativa][13]
  * [¿Qué es Async esperando en JavaScript? | Una guía de JavaScript][14]
  * [Cómo usar chatgpt en vscode | El código de extensión VScode GPT][15]
  * [¿Qué es OpenAi Chatbot GPT-3 | Chatgpt una revolución ai][16]
  * [Una introducción a la inteligencia artificial | ¿Qué es AI?][17]

  
[1]: https://blog.containerize.com/categories/programming/
[2]: #What-is-Document-Object-Model
[3]: #DOM-levels
[4]: #What-are-DOM-properties-and-how-to-access-them
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
