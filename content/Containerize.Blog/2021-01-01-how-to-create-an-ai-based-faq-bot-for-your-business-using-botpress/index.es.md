---
title: "Cómo crear un bot basado en AI para su negocio utilizando botpress" 
seoTitle: "Cómo crear un bot basado en AI para su negocio utilizando botpress" 
description: "En esta publicación de blog, aprenderemos cómo automatizar las consultas de sus clientes utilizando un bot basado en AI utilizando botpress en su sitio web." 
date: Fri, 01 Jan 2021 12:38:51 +0000
author: Assad Mahmood
summary: "Las empresas necesitan mejores plataformas de atención al cliente para resolver eficientemente sus consultas. En este tutorial, aprenderemos cómo crear un bot basado en la IA usando botpress" 
url: /es/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
categories: ['Live Chat']
---

## Las empresas necesitan mejores plataformas de atención al cliente para resolver sus consultas de manera eficiente. En este tutorial, aprenderemos cómo crear un bot basado en AI usando botpress

{{< figure align=center src="images/botpress-banner.png" alt="Preguntas frecuentes para su negocio utilizando botpress">}}

La automatización de las preguntas frecuentes consiste en mejorar la experiencia de su cliente en línea mediante el uso de chatbots para responder preguntas frecuentes. Con los avances en la inteligencia artificial y el aprendizaje automático, la demanda de chatbots conversacionales basados ​​en IA ha ganado mucha popularidad y demanda. Y esto se debe principalmente a que todo el negocio quiere mejorar la experiencia de su cliente, incluso cuando el negocio está fuera de línea. Los chatbots conversacionales han hecho esto posible para las empresas para dar a sus clientes el soporte de alto toque siempre disponible que desean. El propósito de esta publicación de blog es ayudarlo a configurar un bot basado en AI utilizando botpress.
En este artículo, aprenderemos sobre el módulo NLU de BotPress y cómo funciona la comprensión / procesamiento del lenguaje natural y puede ayudar a las empresas a lograr un alto nivel de satisfacción del cliente. ¡Empecemos!
  ***[¿Qué es el procesamiento del lenguaje natural][1]** 
  *[**Determine su caso de uso** ][2]
  *[**Instalar botpress** ][3]
  *[**Crea un nuevo bot** ][4]
  *[**Entrena tu bot y un bot** ][5]
  *[**Conclusión** ][6]

## ¿Qué es el procesamiento del lenguaje natural   {#nlu}
El procesamiento del lenguaje natural (PNL) es una rama de la inteligencia artificial que ayuda a las computadoras a comprender, interpretar y manipular el lenguaje humano. La PNL ayuda a las computadoras a comunicarse con humanos en su propio idioma. Y hace posible que las computadoras lean un texto, escuchen el discurso, lo interpreten, mida el sentimiento.
La tarea básica de la PNL incluye tokenización y análisis, siguen, etiquetado de parte de voz, detección de idiomas e identificación de relaciones semánticas.
NLU es el módulo de botpress que procesa cada mensaje entrante y realiza clasificación de intención, identificación del lenguaje, extracción de entidad y etiquetado de ranuras.

## Determine su caso de uso   {#case}
Si desea crear un chatbot de AI FAQ, debe tener un caso de uso para su negocio. En aras de este tutorial, queremos que nuestros usuarios hagan cualquier pregunta aleatoria relacionada con el precio de nuestro producto y el tiempo de nuestro negocio.

## instalar botpress   {#install}
Para instalar BotPress, diríjase a su [sitio web][7], haga clic en "Descargue gratis" y seleccione su plataforma. Para este tutorial, estoy usando la versión Mac. Una vez que se completa la descarga, puede extraer el archivo zip y ejecutar el siguiente comando en su terminal entrando en la carpeta correcta.
```
./bp
```

{{< figure align=center src="images/Screenshot-2021-01-01-at-4.43.39-PM.png" alt="comienzo de botpress">}}


## crea un nuevo bot   {#create}
Ahora, queremos crear nuestro primer bot haciendo clic en **Crear bot  **y luego seleccionar **  nuevo bot **. Voy a llamar a nuestro bot el bot de preguntas frecuentes, y luego, como plantilla de bot, seleccionaré  **Bot vacío **  antes de hacer clic en  **Crear bot**  .

{{< figure align=center src="images/create-bot.gif" alt="crear botón nuevo">}}

Ahora editaremos este bot en Botpress Studio Editor.

{{< figure align=center src="images/bot-press-edit-in-studio.gif" alt="BotPress Edit en Studio">}}

Ahora, en el estudio, tienes varios menús a lo largo de la barra lateral izquierda. Pero en aras de la simplicidad, nos ateneremos a la sección de preguntas y respuestas.
Haga clic en el icono "Preguntas y A" y agregue preguntas posibles / frecuentes y sus respuestas apropiadas.

{{< figure align=center src="images/bot-press-q-and-a.gif" alt="Preguntas y respuestas de BotPress">}}


## Entrena tu bote de preguntas frecuentes   {#train}
Una vez que haya terminado ahora, tendrá que entrenar su bot de preguntas frecuentes haciendo clic en el botón "Train Chatbot" en la esquina inferior derecha de la sección de preguntas y respuestas.

{{< figure align=center src="images/train-bot.gif" alt="Botpress Train Bot">}}

Una vez realizado el entrenamiento, puede probar su bot de preguntas frecuentes utilizando la herramienta de emulador incorporada.

{{< figure align=center src="images/test-faq-bot.gif" alt="Pon a prueba tu BOT de preguntas frecuentes">}}

Ahora, que tiene su BOT de preguntas frecuentes lista, puede implementar este bot en su sitio web siguiendo la guía [Incrustación oficial][8] de BotPress.

## conclusión   {#conclusion}
En esta publicación de blog, aprendimos y entendimos el procesamiento del lenguaje natural. También tenemos nuestra práctica con el proceso de creación de BOT. Entrenamos un bot de preguntas frecuentes simple que ayuda a sus clientes a conocer los tiempos y planes de pago de su negocio. El propósito del tutorial era ayudar a los principiantes a comenzar rápidamente con un bot basado en AI utilizando botpress.

  
[1]: #nlu
[2]: #case
[3]: #install
[4]: #create
[5]: #train
[6]: #conclusion
[7]: https://botpress.com/download
[8]: https://botpress.com/docs/channels/web
