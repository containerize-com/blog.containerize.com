---
title: "¿Qué es el administrador? | Herramienta de gestión de bases de datos de código abierto" 
seoTitle: "¿Qué es el administrador? | Herramienta de gestión de bases de datos de código abierto" 
description: "¿Qué es el administrador? Un sistema de gestión de bases de datos basado en la web con una interfaz amigable para el desarrollador. Discutamos cómo administrar las bases de datos con un administrador de código abierto." 
date: Fri, 05 Mar 2021 09:23:11 +0000
author: bilalahmed
summary: "Adminer es un sistema de gestión de bases de datos basado en la web de código abierto para administrar bases de datos. Aprendamos cómo configurar Adminer en localhost y revisar sus características clave." 
url: /es/what-is-adminer-open-source-database-management-tool/
categories: ['Database Management Software']
---

## Adminer es un sistema de administración de bases de datos basado en la web de código abierto para administrar bases de datos. Aprendamos cómo configurar Adminer en localhost y revisar sus características clave.
{{_LINE_11_}}

## Descripción general
Las tareas relacionadas con los datos son mucho más críticas ahora que nunca. La herramienta de gestión de bases de datos se ha convertido en una parte integral de cualquier negocio. Sin embargo, hay muchos sistemas de gestión de bases de datos basados ​​en la web que ofrecen soluciones a tareas tales desafiantes. Las empresas están generando toneladas de datos diariamente y se vuelven difíciles de mantener. Además, las organizaciones tienden a simplificar el acceso a los datos y el control de datos. Estas herramientas gratuitas ayudan a reducir la redundancia de datos, hacen que las bases de datos fueran eficientes y confiables. Además, hemos publicado publicaciones de blog sobre temas como [herramientas de software DBMS de código abierto de Top Open][1], y algunas más.
Por lo tanto, la comunidad de código abierto ha desarrollado Adminer, que es una herramienta de gestión de bases de datos gratuitas de nivel empresarial. En este tutorial de administrador, cubriremos los siguientes puntos.
  * [¿Qué es administrador?][2]
  * [Características importantes del administrador][3]
  * [Administrador vs PhpMyadmin][4]
  * [Administrar bases de datos con Administrador][5]
  * [Conclusión][6]

## ¿Qué es el administrador? {#qué}
Cuando se trata de una herramienta de administración de bases de datos MySQL de alto rendimiento livianas, fácil de usar, Adminer ha ganado una amplia popularidad y ofrece muchas mejoras en comparación con PhPMyAdmin. Inicialmente, esta herramienta de gestión de bases de datos fue desarrollada por Jakub Vrana en 2007 como una alternativa a PhPMyAdmin, de modo que todo lo que tiene que hacer es descargar e instalar un archivo PHP único en la base de datos de su aplicación.
Como herramienta de gestión de bases de datos de código abierto, también es de uso gratuito y está escrito en PHP. Lo que establece este sistema de gestión de bases de datos basado en la web es un buen diseño de interfaz de usuario para una experiencia de usuario perfecta, así como características de seguridad fuertes para mantener los datos a salvo de cualquier ataques o intentos de piratería maliciosa. Esta herramienta de gestión de bases de datos es fácil de configurar y requiere requisitos simples como Ubuntu y Lamp. Los usuarios pueden encontrar documentación integral con respecto al desarrollo y la implementación. Por lo tanto, puede encontrar archivos fuente de este sistema de administración de bases de datos basado en la web en [Github][7].

## Características importantes del administrador {#important}
Algunas características básicas pero importantes de esta herramienta de gestión de bases de datos incluyen:
  * Tiene muchas funciones de bases de datos, incluida la base de datos seleccionar, editar tablas, insertar/editar datos en tablas y clasificar/buscar datos en múltiples columnas
  * Admite múltiples bases de datos que incluyen: MySQL, PostgreSQL, SQLite, MS SQL, Oracle y SimpleDB Database y más
  * Está disponible en 43 idiomas que incluyen inglés, árabe, persa, polaco, holandés, etc.
  * Puede editar fácilmente objetos de base de datos como vistas, desencadenantes, procedimientos almacenados, permisos de usuario y más.
  * Adminer también proporciona medidas de seguridad contra la inyección de SQL, el robo de sesión, los ataques de software de secuencias de comandos del sitio cruzado (XSS) y otros ataques también.

## Adminer vs PhpMyadmin {#AdMiner}
Entonces, cuando hablamos de lo que es Administrador, sería interesante saber la comparación entre Administrador frente a PhPMyadmin. Cuando se trata de elegir entre Adminer y PhPMyAdmin, Adminer se encuentra en la parte superior para las características flexibles y la carga de archivos de luz que proporciona. Del mismo modo, en comparación con PhPMyAdmin, admite múltiples bases de datos, incluidas MySQL, SQLite y muchos otros. Del mismo modo, es más intuitivo e inteligente que PhPMyadmin cuando se trata de agregar campos adicionales que Adminer realiza automáticamente o manipulación con todos los índices al mismo tiempo.

## Administrar bases de datos con Adminer {#Manage}
En la sección de este tutorial de administrador, pasaremos cómo podemos administrar las bases de datos con Adminer.
**Requisitos del sistema**
Para que Adminer se ejecute en su sistema, es importante que tenga los siguientes requisitos ya configurados en su servidor:
  * PHP versión 5, 7 u 8
  * Un controlador de base de datos como MySQL, SQLite, PostgreSQL, etc.
**Instalación**
Si tiene estos dos requisitos del sistema, simplemente descargue el archivo de [][8] y comience cargando el archivo PHP a su servidor. Para el servidor XAMPP, cambie el nombre del archivo descargado como "Adminer.php" y coloque este archivo en la carpeta HTDOCS.
** Acceso a la interfaz de usuario **
Después de pasar por eso, ¿qué es administrador? Ahora acceda a esta aplicación desde http: su-ip-address/adminer.php como se muestra:
{{_LINE_42_}}
**Conectar al servidor**
Inicie sesión en esta herramienta de administración de bases de datos gratuitas utilizando el nombre de usuario y la contraseña de su servidor. Ahora, si desea acceder solo a una base de datos, ingrese su nombre. Puede dejar este campo en blanco para acceder a todas las bases de datos que ya existen en el servidor.
** Administrar bases de datos **
Después de iniciar sesión, verá una lista de todas sus bases de datos actuales. Haga clic en cualquier base de datos para administrarla.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-2-1024x449.png" alt="Administrar bases de datos con la herramienta de administración de bases de datos de administrador">}}

En la siguiente pantalla, verá la lista de todas las tablas de bases de datos seleccionadas. Desde aquí puede exportar la base de datos o sus tablas, agregar o editar tabla/columnas, alterar datos a través de consultas SQL y mucho más como se muestra aquí:

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-5-1024x534.png" alt="Herramienta de gestión de bases de datos">}}

** Crear nueva base de datos **
Para crear una nueva base de datos, haga clic en "Crear base de datos", ingrese el nombre de la base de datos y haga clic en "Guardar".

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-3-1024x370.png" alt="Herramienta de gestión de bases de datos">}}

** Insertar/actualizar registros **
Agregar nuevos registros a una tabla es bastante simple. Haga clic en el enlace del nuevo elemento que lo redirigirá a la pantalla Insertar. Aquí podrá agregar nuevos datos para todas las columnas de la tabla, junto con el tipo de datos, por lo que agregar nuevos datos es un proceso rápido.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-4-1024x462.png" alt="Administrador vs phpmyadmin">}}


## conclusión {#conclusion}
Esto nos lleva al final de este tutorial de administrador. Hemos pasado por algunos temas importantes, como lo que es Adminer, Adminer vs PhPMyadmin y otros aspectos de este sistema de gestión de bases de datos basado en la web de código abierto. Con suerte, esta publicación de blog lo ayudará seguramente si está buscando instalar una herramienta de administración de bases de datos de código abierto. Es una interfaz intuitiva, inteligente y fácil de usar, lo convierte en una herramienta de gestión de bases de datos muy popular. Además, admite muchas bases de datos, incluidas MySQL, SQLite, MongoDB y mucho más, junto con medidas de seguridad para proteger y prevenir cualquier evento de piratería maliciosa. En general, esta herramienta de administración de bases de datos no solo es de código abierto, sino que también es gratuita.
Finalmente, [Contenerize.com][9] está escribiendo continuamente publicaciones de blog sobre otros productos y temas de código abierto. Por lo tanto, manténgase en contacto con la categoría [Herramientas de gestión de bases de datos][10] para actualizaciones regulares. Además, puede seguirnos en nuestras cuentas de redes sociales [Facebook][11], [LinkedIn][12] y [Twitter][13].

## Explorar
Para obtener más información sobre las herramientas gratuitas de gestión de bases de datos basadas en la web, consulte las siguientes páginas:
  * [Administrador | Sistema gratuito de gestión de bases de datos basado en la web][14]
  * [Herramientas de software DBMS de código abierto de Top Open][1]
  * [Top 5 herramientas de gestión de bases de datos de código abierto en 2021][15]
  * [Automatice las operaciones comerciales con software gratuito y de código abierto][16]

  
[1]: https://products.containerize.com/database-management
[2]: #what
[3]: #important
[4]: #adminer
[5]: #manage
[6]: #conclusion
[7]: https://github.com/vrana/adminer
[8]: https://www.adminer.org/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/database-management/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/database-management/adminer
[15]: https://blog.containerize.com/2021/01/16/top-5-open-source-database-management-tools-in-2021/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
