---
title: "Configurar reglas avanzadas de gestión de rebote y rebote en Phplist" 
seoTitle: "Configurar reglas avanzadas de gestión de rebote y rebote en Phplist" 
description: "Habilite la gestión avanzada de rebote en Phplist y maneje los correos electrónicos de rebote. Cree reglas de rebote y automatice el proceso para tomar varias acciones en los mensajes devueltos." 
date: Mon, 01 Feb 2021 19:28:58 +0000
author: Masood Anwer
summary: "Dependiendo del tipo de código de error de rebote devuelto por la MTA, Advanced Bounce Management permite la ejecución automatizada de diferentes acciones." 
url: /es/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
categories: ['Newsletters']
---

## Dependiendo del tipo de código de error de rebote devuelto por la MTA, Advanced Bounce Management permite la ejecución automatizada de diferentes acciones.

{{< figure align=center src="images/advanced-bounce-management-in-phpList.png" alt="Configurar reglas avanzadas de gestión de rebote y rebote en Phplist">}}

En nuestro tutorial [anterior][1], ya habíamos abordado **Phplist Bounce Processing **. Si no está familiarizado con el procesamiento de rebote, puede leerlo. Puede descargar correos electrónicos no entregados a su proyecto Phplist utilizando el procesamiento de rebote. ¿Cómo se trata con los correos electrónicos descargados? No tengo idea, echemos un vistazo a la gestión de rebote avanzada que le permite resolver  **los correos electrónicos de rebote**  . Cada mensaje de correo electrónico devuelto tiene código de error que devuelve el MTA (agente de transferencia de correo). Además, puede revisar el encabezado de correo electrónico del mensaje devuelto y contiene toda la información en el código de error.
  * [Habilitar el manejo avanzado de rebote][2]
  * [Agregar regla de rebote][3]
  * [Reglas de rebote de la lista][4]
  * [Conclusión][5]

## habilite el manejo avanzado de rebote   {#enable}
Lo primero es lo primero, habilite el manejo avanzado **de rebote**  copiando el siguiente código en el archivo config.php.
```
define('USE_ADVANCED_BOUNCEHANDLING',1);
```
Después de eso, navegue a **Sistema> Administrar rebotes> Lista de reglas de rebote**  para crear reglas de rebote.
Puede crear reglas de rebote basadas en expresiones regulares. Puede encontrar la razón por la cual **El correo electrónico se recupera**  en el encabezado y usarlo para la expresión regular. Además, seleccione acciones apropiadas basadas en el código de error o la expresión regular. Phplist admite las siguientes acciones. La declaración de acción se explica por sí misma, por lo que no necesitamos ir en detalle.
  * Eliminar suscriptor
  * Suscriptor no confirmado
  * Suscriptor de la lista negra
  * Dirección de correo electrónico de la lista negra
  * Eliminar suscriptor y rebotar
  * Suscriptor no confirm y elimina el rebote
  * Agregue suscriptor a la lista de no se envíe y elimine el rebote
  * Agregue la dirección de correo electrónico a la lista de no enviar y eliminar el rebote
  * Eliminar rebote

## Agregar regla de rebote   {#Add}
Creemos nuestra primera regla de rebote.
  *Primero, ingrese la expresión regular como **(la cuenta ha sido suspendida | Cuenta no disponible)** 
  * Después de eso, seleccione la acción apropiada
  * Finalmente, agregue nota/memo para la regla

{{< figure align=center src="images/add-bounce-rule.png" alt="Crear regla de rebote en phplist">}}

Puede agregar reglas de rebote por las siguientes razones y seleccionar una acción apropiada para manejar rebotes. Sin embargo, puede buscar respuestas SMTP y agregar más reglas a la lista.
  * Destinatario archivado
  * type = mx: host no encontrado
  * Lo sentimos, no hay un buzón con ese nombre
  * Buzón discapacitado
  * cuenta deshabilitada
  * Este buzón ha sido bloqueado debido a la inactividad
  * Usuario desconocido
  * No hay tal receptor
  * etcétera …
**Nota:  **Debe envolver la razón de rebote entre paréntesis y usar el símbolo de tubería **  |  **o **  o**  Declaración, si desea agregar múltiples razones en una regla de rebote.

## Reglas de rebote de la lista   {#list}
Después de crear un número de reglas, su lista **Reglas de rebote**  se verá como en la siguiente captura de pantalla. Puede realizar otras acciones, como cambios de pedido y eliminación en esta página.

{{< figure align=center src="images/bounce-regular-expressions.png" alt="Lista de reglas de rebote">}}


## conclusión   {#conclusion}
En este tutorial, aprendimos sobre Advanced **Bounce Management**  y desarrollamos las reglas de rebote necesarias. Sería genial permitir esta función para que pueda automatizar el proceso de limpieza de direcciones de correo electrónico no válidas de sus listas. También le permitiría mantener el nivel mínimo de correos electrónicos devueltos. Además, sus listas tendrán suscriptores legítimos.
Además, [Contenerize.com][6] está en camino para mejorar la pila de productos de código abierto en múltiples idiomas y marcos. Para actualizaciones periódicas, estén atentos en la categoría [Newsletters][7] para obtener artículos más interesantes.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [Phplist - Boletín de código abierto y software de marketing por correo electrónico][8]
  * [Cómo crear y enviar boletín de boletín usando Phplist][9]
  * [Cómo configurar y procesar rebotes en Phplist][1]
  * [Guía para principiantes para desarrollar el complemento Phplist][10]

  
[1]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[2]: #Enable
[3]: #Add
[4]: #List
[5]: #Conclusion
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[10]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
