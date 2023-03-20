---
title: "Una guía para principiantes para usar la aplicación de facturación de cráter" 
seoTitle: "Una guía para principiantes para usar la aplicación de facturación de cráter" 
description: "Un tutorial para comenzar con un sistema de facturas de código abierto. Esta directriz de Crater lo ayuda a familiarizarse con los conceptos y características centrales." 
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: "Este tutorial lo ayudará a aprender sobre aplicaciones de facturación de cráter. Es un sistema de factura gratuito y de código abierto para las pequeñas empresas." 
url: /es/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']
---

## Este tutorial lo ayudará a aprender sobre aplicaciones de facturación de cráter. Es un sistema de factura gratuito y de código abierto para las pequeñas empresas.

{{< figure align=center src="images/blog-crater.png" alt="Sistema de facturas de código abierto">}}

Cada negocio necesita algún tipo de sistema para la gestión de facturas, gastos, pagos y muchos más. El software de facturación lo ayuda a administrarlo para que pueda realizar fácilmente tareas de facturación y mantener el enfoque en otras cosas importantes. En esta publicación, aprenderemos cómo configurar el cráter y usarlo para manejar las operaciones contables para el negocio.
  * [Introducción sobre el cráter][1]
  * [Procedimiento de instalación del cráter][2]
  * [Exploración de características][3]
  * [Conclusión][4]

## Introducción sobre Crater {#Introduction}
[Cráter][5] es una aplicación de facturación gratuita y de código abierto. Es absolutamente gratis, y puede actualizarlo fácilmente a las versiones más recientes. Es un sistema de contabilidad gratuito para pequeñas empresas y freelancers. También es una solución de facturación completa, que le permite realizar un seguimiento de los gastos y pagos, calcular los impuestos y producir estimaciones y facturas. Además, viene con las aplicaciones móviles listos para dispositivos para iPhone y Android. Le permitirá administrarlo desde cualquier lugar. Dado que Crater es un software de facturación basado en la web, la aplicación web está diseñada con Laravel y Vuejs, y las aplicaciones móviles están construidas con React Native. Toda la documentación relacionada con el desarrollo y la implementación está disponible. El código fuente completo se puede encontrar en [GitHub][6].

## Procedimiento de instalación del cráter {#Installation}
Discutiremos cómo instalar el cráter con el método manual y usar Docker en esta sección.

### Instalación manual
  * Descargue la última versión desde.
  * Cargue el archivo zip descargado a su servidor y extraiga.
  * Apunte su dominio al directorio público dentro de la carpeta de cráter.
  * Navegue a la raíz de su proyecto y ejecute el comando "sudo chmod -r 775 ./" para asignar privilegios apropiados.
  * Abra su sitio en el navegador y siga el asistente de instalación.

### Instalación de Docker
  * Instale Docker en su servidor :.
  * Instale Docker Compose siguiendo esta guía :.
  * Repositorio de cráter clon mediante el uso de este comando.
```
git clone https://github.com/bytefury/crater
```
  * Ejecute los comandos a continuación uno por uno para instalar el cráter.
```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```
  * Abra el sitio del cráter en su navegador y siga el asistente de instalación.

## Exploración de características {#Feature}
En esta sección, exploraremos las características centrales de esta aplicación de facturación de código abierto. Una vez que haya terminado con la instalación, abra su sitio http://example.com e inicie sesión en la aplicación.
  *** Panel de control ** - Después de iniciar sesión, lo llevarán al tablero, que muestra la vista completa de la aplicación.

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}

  *** Configuración **: ahora navegue a la página de configuración y agregue varias configuraciones de aplicaciones web, como configuración de cuenta, información de la empresa, preferencias, personalizaciones, notificaciones, módulos de pago, etc.

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}

  *** Elementos ** - Se puede acceder a la pestaña Elementos desde el menú de la barra lateral. Desde esta pestaña, puede administrar sus artículos. Puede usar elementos mientras crea estimaciones y facturas.
  *** Estimaciones **: cree una cotización integral que incluya tarifas, descuentos, inventario y más. Una de las tres plantillas construidas se puede usar para crear una estimación. Se pueden agregar impuestos adicionales a la estimación, y también se pueden agregar como un impuesto compuesto.
  *** Facturas ** - Haga facturas profesionales y envíelas a sus clientes. Puede usar plantillas disponibles para generar factura. Puede agregar impuestos adicionales a la factura, así como un impuesto compuesto. Además, puede proporcionar un porcentaje o descuento de valor fijo a sus clientes. Además, puede aplicar descuentos a los artículos individuales, así como al monto general de la factura.
  *** Pagos **: este módulo le ayuda a seguir el seguimiento de los pagos que tiene de sus clientes.
  *** Gastos **: el módulo de gastos le ayuda a realizar un seguimiento de cuánto gasta en diferentes servicios.
  *** Impuestos ** - Usando esta función, puede administrar fácilmente sus impuestos. Puede agregar múltiples impuestos sobre el monto total de la factura o en el artículo individual.
  *** Informes ** - Obtenga información completa sobre todas sus facturas, ya sea para uno o varios clientes. Crater Supports viene con cuatro tipos de informes, como informe de ventas, informe de ganancias y pérdidas, informe de gastos e informe de impuestos.

## conclusión {#conclusion}
Aprendimos sobre Crater y cómo configurarlo manualmente y con Docker. También hemos analizado algunas de las características que cada software de facturación de contabilidad debe proporcionar. Con suerte, esta guía puede ayudarlo a implementar rápidamente un sistema de factura de código abierto para su negocio.
Finalmente, [Contenerize.com][7] escribe continuamente publicaciones de blog sobre otros productos y temas de código abierto. Por lo tanto, manténgase en contacto con la categoría [facturación][8] para actualizaciones regulares.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [Cráter - Sistema de contabilidad gratuito para pequeñas empresas][5]
  * [Top 5 Software de contabilidad de código abierto en el año 2021][9]

  
[1]: #Introduction
[2]: #Installation
[3]: #Feature
[4]: #Conclusion
[5]: https://products.containerize.com/invoicing/crater/
[6]: https://github.com/bytefury/crater
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/invoicing/
[9]: https://blog.containerize.com/invoicing/top-5-open-source-accounting-software-in-the-year-2021/
