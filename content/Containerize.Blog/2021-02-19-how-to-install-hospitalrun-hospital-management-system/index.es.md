---
title: "Cómo instalar Hospitalrun | Sistema de gestión del hospital" 
seoTitle: "Cómo instalar Hospitalrun | Sistema de gestión del hospital" 
description: "Este artículo le ayuda a instalar HospitalRun en localhost. Automatice los procesos médicos utilizando un sistema de gestión hospitalaria gratuita de origen rico, de código abierto." 
date: Fri, 19 Feb 2021 09:24:09 +0000
author: muhammadmustafa
summary: "Solución de salud autohospedada para facilitar a los médicos y pacientes. Aprendamos cómo implementar el hospital gratuito en el localhost siguiendo simples pasos." 
url: /es/how-to-install-hospitalrun-hospital-management-system/
categories: ['Healthcare Software']
---

## Solución de salud autohospedada para facilitar a los médicos y pacientes. Aprendamos cómo implementar el hospital gratuito en el localhost siguiendo los simples pasos.

{{< figure align=center src="images/hospitalrun.png" alt="Sistema de gestión del hospital">}}


## Descripción general
Recientemente publicamos una publicación de blog sobre [cómo el software de salud en línea empodera a la industria de la salud][1] que describe el impacto del sistema de gestión de hospitales de código abierto en la industria de la salud. La industria mundial de software de salud está ganando valor con el paso del tiempo. De hecho, es que la tecnología ha transformado todos los campos de la vida. El número de pacientes y miembros del personal se ha ido tan alto que se ha convertido en una molestia para administrar datos tan grandes. Por otro lado, hay muchas tareas que llevan mucho tiempo que tienen lugar todos los días y las entidades de atención médica realizan repetidamente esas tareas. Por lo tanto, la comunidad fuente de código abierto ha desarrollado un software médico de código abierto que viene con muchos módulos útiles para abordar las necesidades de atención médica.
Se desarrollan software médico de código abierto para administrar los registros de los pacientes con respecto a su historial médico, así como con las disposiciones para la gestión del hospital. Además, el software de salud de código abierto está aprovechando la inteligencia artificial para proporcionar niveles avanzados de servicios. La mayoría de los tratamientos de enfermedades ahora están siendo manejados por el software que no solo diagnostica los problemas, sino que también brinda asistencia en la cura. Sin embargo, hay muchos software emergente para hospitales. En esta publicación de blog, cubriremos los siguientes puntos.
  *[** ¿Qué es Hospitalrun? **][2]
  *[** ¿Cuáles son las características de HospitalRun **][3]
  *[** Pasos de instalación de HospitalRun? **][4]
  *[** Conclusión **][5]

## ¿Qué es Hospitalrun? {#intro}
HospitalRun es un sistema gratuito de gestión de información hospitalaria de código abierto. Esta solución de atención médica gratuita es amigable con el medio ambiente, ya que los usuarios pueden hacer uso completo de este software gratuito, incluso si no hay conectividad a Internet. Proporciona muchas características, como gestión de usuarios, registros de pacientes, citas, sistema de facturación, sistema de alta del paciente y más. La interfaz de usuario de este sistema eHealth de código abierto es lógico donde los usuarios pueden navegar a través de diferentes elementos fácilmente. Además, es fácil de configurar y ofrece una imagen de Docker donde los desarrolladores pueden implementarla utilizando una imagen Docker.
Este ** Sistema de gestión del hospital ** ofrece una provisión para integrar los laboratorios para centralizar los registros médicos del paciente. Además, también permite a los usuarios mantener registros de visitas de pacientes, medicamentos y evaluaciones. Este sistema de registro de eHealth es seguro, flexible y ofrece integraciones con aplicaciones de terceros. Hay una comunidad muy vibrante que brinda apoyo para HospitalRun. Además, hay un sistema completo de alta del paciente. Este software médico de código abierto está completamente escrito en JavaScript. Además, hay una documentación integral disponible con respecto al desarrollo y la implementación. De hecho, este software médico de código abierto proporciona diferentes paneles para diferentes departamentos, como el departamento de apoyo, el departamento clínico y el departamento administrativo. Todos estos roles vienen con diferentes niveles de permiso y acceso.

## ¿Cuáles son las características de HospitalRun? {#características}
En esta sección, pasaremos por algunas de las siguientes características clave de este sistema eHealth.
  *** Autohostado **: HospitalRun viene con capacidades de autohospedación y requiere menos esfuerzos para implementar en servidores.
  *** Programación de citas **: Este sistema de salud permite a los usuarios programar las citas. Hay un módulo completo para las citas disponibles en el tablero. Además, los usuarios pueden buscar en las citas con la ayuda de filtros.
  *** Sistema de alta del paciente **: Este sistema de manejo del hospital mantiene el registro de pacientes que han sido dados de alta.
  *** Gestión de medicamentos **: Este sistema de registro de eHealth permite a los usuarios registrar datos completos de medicamentos de un paciente en particular.
  *** Manejo de registros de pacientes **: Existe un módulo completo para el manejo de registros de los pacientes. Los usuarios pueden registrar los detalles de los nuevos pacientes, ingresados ​​a los pacientes con su historial médico completo, como medicina, informes y visitas.
  *** Sistema de facturación personalizado **: Hay un rico sistema de facturación disponible en este software de salud de código abierto. Permite a los usuarios generar y administrar facturas con detalles completos como precios de laboratorio, cargos de barrio, precios de imágenes y etc.
  *** Registros médicos electrónicos **: Este software médico de código abierto proporciona todos los módulos necesarios para mantener registros médicos y administrativos.
  *** Flexible **: HospitalRun es flexible y lo suficientemente extensible como para que los desarrolladores puedan extender su funcionalidad para cumplir con las funcionalidades necesarias.

## Pasos de instalación de HospitalRun? {#pasos}
Esta sección de la publicación del blog describe los pasos de instalación de HospitalRun.
Antes de comenzar, primero instale los siguientes requisitos previos:
  * [Docker][6]
  * [Docker-Compose][7]
Una vez que se instalen los requisitos previos, descargue el código fuente de este [enlace][8].
Después de eso, abra el terminal y ejecute los siguientes comandos:
CD genérico
servidor de CD
Ahora, cambie la contraseña en la fila 8,9 de \ `conf/initcouch.sh \` y la contraseña en la fila 7 de _config-demo.js_.
Luego, ejecute el siguiente comando para hacer construir y ejecutar la aplicación:
_docker-compose build && docker-composa up_
Después de eso, girará el contenedor Docker como se muestra en la imagen a continuación:

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.45.48-1024x554.png" alt="Sistema de gestión del hospital">}}

Finalmente, puede acceder a esta solución de atención médica en el navegador en http: // localhost/#/login. Mostrará la siguiente pantalla de inicio de sesión.

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.46.35-1024x676.png" alt="Sistema de gestión del hospital">}}


## conclusión {#conclusion}
Este es el final de este artículo de tutorial. Este sistema de registro del paciente realmente ayuda a automatizar ** Servicios de atención médica **. El sistema moderno de gestión de hospitales de código abierto viene con herramientas analíticas de datos que ayudan a los trabajadores de la salud a tomar las medidas necesarias para mejores instalaciones de salud. Esta publicación de blog realmente lo ayudará si está buscando seriamente desplegar un sistema eHealth para su hospital/clínica. Estas soluciones de código abierto son rentables, ya que están integradas con laboratorios y otras clínicas y también minimizan el papeleo mediante la computarización de cada proceso. La solución de atención médica de código abierto permite a los usuarios tener imágenes de todas las operaciones de atención médica, como los medicamentos, el alta, el alta, los informes y el manejo de la facturación de los pacientes. Además, puede centrarse en otras tareas importantes, como la planificación de recursos y la evaluación de riesgos. Sin embargo, hay muchos otros software de nivel empresarial para hospitales que se mencionan en la sección "Explorar" a continuación.
Al final, **** [contenedorize.com][9] **** está destinado a escribir en otros productos de código abierto. Por lo tanto, manténgase en contacto con esta categoría [tecnologías de atención médica][10] para las últimas actualizaciones.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [Openemr][11]
  * [OpenMRS][12]
  * [Hospitalrun][13]
  * [Hospital abierto][14]
  * [Solismado][15]
  * [Cosas para revisar antes de optar el software de código abierto en 2021][16]
  * [Cuenta con exploración del gerente de registro médico Hospitalrun][17]
  * [Software de registro de salud del paciente de código abierto de los 5 principales][18]
  * [Cuenta con exploración de la solución de salud médica Openemr][19]
  * [Cómo configurar el Hospital del Sistema EHealth en Localhost][20]
  * [Cómo el software de salud en línea permite la industria de la salud][1]

  
[1]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[2]: #intro
[3]: #features
[4]: #steps
[5]: #Conclusion
[6]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Finstall%2F&h=b220f083ceda72a13e4e77091860b9761ee26229422b3c2590128582d7227f81&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[7]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Fcompose%2Finstall%2F&h=58cfa40eb1b8827698a31cbe9ac3661def22ae2b5c28eb832c19da2e3b5a5b0d&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[8]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fhospitalrun.fra1.cdn.digitaloceanspaces.com%2Fdeployments%2Fhr-1.0.0-beta-generic.zip&h=3e79da04f5c6cd968d616537e74f30eef38c16590dc0cbc1945ec8ad214de9c0&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/health-care-technologies
[11]: https://products.containerize.com/health-care-technologies/openemr
[12]: https://products.containerize.com/health-care-technologies/openmrs
[13]: https://products.containerize.com/healthcare-technologies/hospitalrun
[14]: https://products.containerize.com/healthcare-technologies/open-hospital
[15]: https://products.containerize.com/healthcare-technologies/solismed
[16]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
[17]: https://blog.containerize.com/healthcare-software/features-exploration-of-medical-record-manager-hospitalrun/
[18]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[19]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[20]: https://blog.containerize.com/healthcare-software/es/how-to-install-hospitalrun-hospital-management-system/
