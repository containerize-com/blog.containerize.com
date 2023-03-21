---
title: "Características de exploración del gerente de registros médicos Hospitalrun" 
seoTitle: "Características de exploración del gerente de registros médicos Hospitalrun" 
description: "Siga esta guía para comenzar con el gerente de registro médico Hospitalrun. Es de código abierto, multilingüe y automatiza muchos de los procesos importantes." 
date: Wed, 04 Aug 2021 18:37:19 +0000
author: muhammadmustafa
summary: "El sistema de gestión del hospital es una parte esencial de los establecimientos de salud. HospitalRun proporciona control de datos, roles de acceso y gestión de ingresos." 
url: /es/features-exploration-of-medical-record-manager-hospitalrun/
categories: ['Healthcare Software']
---

## El sistema de gestión del hospital es una parte esencial de los establecimientos de salud. HospitalRun proporciona control de datos, roles de acceso y gestión de ingresos.

{{< figure align=center src="images/blog-banners-template-1.png" alt="gerente de registro médico">}}


## Descripción general
Open Source [Software de atención médica][1] ha ganado una inmensa popularidad en el pasado reciente. En primer lugar, se debe al avance de la tecnología. En segundo lugar, Covid-19 influyó en la industria médica en todos los sentidos y dio a luz una nueva oportunidad para la comunidad de código abierto. Es muy importante proporcionar servicios de salud de alta calidad a los pacientes cuando todo el mundo está pasando por un tiempo crucial. Afortunadamente, hay varias soluciones de gestión de registros de salud de código abierto que proporcionan centralizaciones de datos, transparencia, seguridad, integraciones y muchas otras características poderosas. Estos servicios de salud gratuitos ofrecen un manejo sin problemas de flujos de trabajo, como médicos, pacientes, clínicas y otros miembros del personal. Recientemente, [Contenerize.com][2] ha publicado algunos artículos sobre sistemas de gestión de información hospitalaria de código abierto que incluyen [Software de registro de salud de pacientes de código abierto de los 5 principales][3], [Características de la exploración de la solución de salud médica OpenEmr][4], y [cómo el software de salud en línea permite la industria de la salud][5].
En el pasado, escribimos un artículo que describe el procedimiento de configuración de [HospitalRun][6] en Localhost. En esta publicación de blog, exploraremos [HospitalRun][6] más al cubrir los siguientes puntos.
  ***[¿Por qué Hospitalrun?][7]** 
  ***[pacientes y módulos de programación][8]** 
  ***[Integración y medicamentos de laboratorio][9]** 
  ***[Imágenes e incidentes][10]** 
  ***[Conclusión][11]** 

## ¿Por qué Hospitalrun?   {#por qué}
Hay muchas razones detrás de la popularidad de este administrador de registros médicos. HospitalRun es un sistema de información de salud y de salud electrónico completo. Admite versiones fuera de línea y en línea. Le permite integrar clínicas y proporciona sincronización de datos. Además, es multilingüe, multiplataforma, y ​​se le ocurre capacidades de autohostación. Este sistema de registros del paciente ofrece gestión de registros del paciente, programación de citas, medicamentos y manejo de recetas. También hay una disposición para generar informes personalizados que contienen detalles de diagnóstico completos. Además, los miembros del personal médico pueden recibir ayuda del módulo de alta del paciente. Sobre todo, este sistema de gestión del hospital ofrece gestión de casos accidentales y de emergencia. Es seguro, confiable y fácil de usar. Sin embargo, este sistema de gestión de registros médicos está completamente escrito en JavaScript y todo el código fuente está disponible en [GitHub][12] con documentación sobre el desarrollo y la implementación.

## pacientes y módulos de programación   {#modules}
En esta sección, pasaremos por el tablero de este sistema de gestión de información del hospital. Una vez que inicie sesión, aterrizará en el tablero de HospitalRun como se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.40.46-1024x502.png" alt="gerente de registro médico">}}

En la parte superior derecha, hay dos opciones. En primer lugar, la configuración en la que los usuarios pueden elegir un idioma como inglés, italiano, turco y más. En segundo lugar, existe una opción para crear un nuevo registro del paciente, una nueva cita, solicitud de medicamentos, Laboratorio de solicitud, nueva solicitud de imagen e incidente de informe.

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.45.03-1024x576.png" alt="sistema de gestión del hospital">}}

Hay múltiples opciones, como pacientes, programación, medicamentos, laboratorios, imágenes e incidentes en el lado izquierdo. En el módulo de pacientes, puede agregar nuevos registros de pacientes y ver la lista de pacientes ya agregados. Este gerente de registro médico gratuito permite a los usuarios registrar registros completos de pacientes, como nombre, dirección, contacto, tipo de paciente y otros detalles básicos. En la lista de pacientes, también hay una barra de búsqueda en la que los usuarios pueden buscar a los pacientes en la lista. Además, en el módulo de programación, los trabajadores médicos pueden programar una cita. La interfaz de este módulo se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.23.42-1024x576.png" alt="Sistema de gestión de la información del hospital">}}

La interfaz muestra las citas programadas. Además, los usuarios pueden aplicar filtros para ver el número de citas por día, por semana y por mes. Hay una opción en la esquina superior derecha donde los funcionarios de atención médica pueden reservar una nueva cita. Los funcionarios médicos pueden insertar detalles de la cita, como fecha de inicio, fecha de finalización, razón y más.

## Integración de laboratorio y medicamentos   {#lab}
Esta sección describe las funcionalidades de dos módulos prominentes de este software de salud gratuito. El módulo de medicamentos permite a los usuarios agregar datos contra medicamentos en los que pueden establecer la prioridad de medicamentos, como la rutina, urgente o lo antes posible. Del mismo modo, hay una lista de solicitudes de medicamentos donde los funcionarios pueden buscar por filtros.

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.54.03-1024x576.png" alt="Sistema de gestión de registros médicos">}}

En el módulo de laboratorio, los oficiales de atención médica pueden solicitar el laboratorio insertando información, visita y tipo de paciente. Junto con eso, los trabajadores de la salud pueden agregar una nota adicional. Del mismo modo, hay filtros en la opción de solicitudes de laboratorio donde los usuarios pueden realizar funciones de búsqueda.

## Imágenes e incidentes   {#imaging}
La imagen se trata de crear una representación visual de algo escaneando con un campo electromagnético. HospitalRun ofrece administración de registros de imágenes. Además, permite a los usuarios crear nuevas solicitudes de imagen, y este módulo está vinculado con el módulo del paciente, ya que otros módulos están entrelazados entre sí. Del mismo modo, los usuarios pueden ver la lista de solicitudes de imágenes. A continuación, en el módulo de incidentes, los funcionarios pueden informar un incidente insertando los detalles. Por lo tanto, los usuarios pueden ver la lista de incidentes ya reportados. Hay una representación gráfica de incidentes también disponibles en el último como se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-08-02-at-19.59.11-1024x577.png" alt="gestión de registros de salud">}}


## conclusión   {#conclusion}
Este es el final de esta publicación de blog. De hecho, la mayoría de las instituciones de salud dependen de las operaciones manuales. Podría ser vulnerable con respecto a la seguridad e integridad de los datos. Sin embargo, los sistemas automatizados se aseguran de los aspectos básicos y más críticos de las operaciones de atención médica de rutina. Por lo tanto, la instalación de un buen administrador de registros médicos de código abierto protege sus activos de fuentes no autorizadas y lo ayuda a realizar tareas de rutina con facilidad y confianza. Estos software de código abierto sincronizan múltiples entidades, como médicos, pacientes, clínicas, laboratorios y facilitan el flujo de trabajo. La conclusión es que es hora de adoptar un software de código abierto para que su hospital o clínica se golpee con los últimos desafíos. Puede ahorrar su tiempo y esfuerzos y centrarse en tareas importantes y críticas.
Finalmente, [Contenerize.com][2] está escribiendo artículos sobre otros productos de código abierto. Por lo tanto, manténgase en contacto con la categoría [tecnologías de atención médica][1] para noticias y actualizaciones regulares.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [Openemr][13]
  * [OpenMRS][14]
  * [Hospitalrun][15]
  * [Hospital abierto][16]
  * [Solismado][17]
  * [Software de registro de salud del paciente de código abierto Top 5][3]
  * [Cuenta con exploración de la solución de salud médica Openemr][4]
  * [Cómo configurar el Hospital del Sistema EHealth en Localhost][18]
  * [Cómo el software de salud en línea permite la industria de la salud][5]

  
[1]: https://products.containerize.com/healthcare-technologies/
[2]: https://www.containerize.com/
[3]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[4]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[5]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[6]: https://products.containerize.com/healthcare-technologies/hospitalrun/
[7]: #why
[8]: #modules
[9]: #lab
[10]: #imaging
[11]: #Conclusion
[12]: https://github.com/HospitalRun/hospitalrun
[13]: https://products.containerize.com/health-care-technologies/openemr
[14]: https://products.containerize.com/health-care-technologies/openmrs
[15]: https://products.containerize.com/healthcare-technologies/hospitalrun
[16]: https://products.containerize.com/healthcare-technologies/open-hospital
[17]: https://products.containerize.com/healthcare-technologies/solismed
[18]: https://blog.containerize.com/healthcare-software/how-to-install-hospitalrun-hospital-management-system/
