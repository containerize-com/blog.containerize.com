---
title: "Cómo crear un sitio web de aprendizaje electrónico con Moodle LMS" 
seoTitle: "Cómo crear un sitio web de aprendizaje electrónico con Moodle LMS" 
description: "Moodle LMS es una solución de aprendizaje electrónico gratuito y de código abierto para crear una plataforma de aprendizaje en línea. Echa un vistazo a la guía para familiarizarse con ella." 
date: Fri, 11 Jun 2021 22:35:00 +0000
author: Masood Anwer
summary: "Cree una plataforma de aprendizaje en línea con la plataforma de aprendizaje electrónico de código abierto. Este artículo explica cómo usar Moodle LMS para crear un sitio de aprendizaje a distancia." 
url: /es/how-to-create-e-learning-platform-with-moodle-lms/
categories: ['Learning Management System']
---

## Cree una plataforma de aprendizaje en línea con plataforma de aprendizaje electrónico de código abierto. Este artículo explica cómo usar Moodle LMS para crear un sitio de aprendizaje a distancia.

{{< figure align=center src="images/moodle-banner.png" alt="Moodle LMS">}}

Hemos sido afectados por Covid 19 por más de un año. Cada parte del mundo se ha colocado bajo bloqueo. Tiene un impacto negativo en la vida y las empresas de las personas en todo el mundo. Más importante aún, tiene un gran impacto en nuestro sistema educativo. Las instituciones educativas tienen que hacer la transición al aprendizaje en línea para que los estudiantes puedan continuar su educación desde la comodidad de sus propios hogares. Sin una plataforma de aprendizaje electrónico sólida y segura, el aprendizaje en línea es imposible. En este artículo, veremos el proyecto ** Moodle Open Source **, que permite a los maestros y estudiantes comunicarse y aprender desde cualquier lugar.
Cubriremos las siguientes secciones de este artículo para ** Crear sitio web de aprendizaje electrónico ** usando Moodle.
  * [Requisitos previos][1]
  * [¿Qué es Moodle?][2]
  * [Características de Moodle][3]
  * [Instalación de Moodle][4]
  * [Conclusión][5]

## Requisitos previos {#Preequisites}
Si aún no lo ha hecho, debe instalar y configurar el entorno de la lámpara en su servidor.

## ¿Qué es Moodle? {#Qué}
[** Moodle **][6] es una solución de aprendizaje electrónico gratuito y de código abierto. Moodle significa entorno de aprendizaje dinámico modular orientado a objetos. Fue creado para dar a los educadores, administradores y alumnos una plataforma de aprendizaje electrónico para crear y entregar entornos de aprendizaje individualizados. Además, Moodle es un ** lms adecuado para escuelas **, universidades y cursos de capacitación profesional en empresas. Es una de las soluciones populares ** de aprendizaje a distancia ** para crear un sitio web de LMS. Además, Moodle proporciona a los maestros y estudiantes herramientas ricas y entornos de aprendizaje colaborativo. Moodle tiene una aplicación móvil para teléfonos y tabletas para iPhone, Android y Windows. La aplicación móvil se puede usar desde cualquier ubicación del mundo. Este ** LMS ** autohostado ** está escrito en PHP y almacena datos en bases de datos MySQL/PostgreSQL. Viene con una extensa documentación de usuario y desarrollador. Todo el código fuente está disponible en [** GitHub **][7]. La licencia para esta solución de código abierto ** es GPLV3+.

## Características de Moodle {#Feature}
Moodle viene con muchas características. Sin embargo, en este artículo, repasaremos algunas de las siguientes características clave.
** Herramientas y actividades de colaboración **: Foros, wikis, glosarios, actividades de bases de datos y otras herramientas permiten a los usuarios colaborar y aprender juntos. Un grupo de elementos en un curso de Moodle se conoce como una actividad. Una actividad es típicamente algo que hace un estudiante en el que interactúa con otros estudiantes y/o el maestro.
** Track Progress **: Los educadores y los estudiantes pueden realizar un seguimiento de su progreso y finalización utilizando una variedad de herramientas para rastrear actividades o materiales específicos, así como a nivel de curso. Hay varias formas de rastrear el progreso de los estudiantes en Moodle, como calificaciones, competencias, finalización de la actividad, finalización del curso, insignias, informes de cursos y análisis.
** Gestión de complementos **: Los complementos le permiten extender la funcionalidad fundamental de Moodle agregando nuevas características. Los usuarios pueden agregar complementos para una variedad de tareas, como actividades adicionales, nuevos tipos de preguntas de prueba, nuevos informes, conectores de sistemas y muchos más. Se puede usar una interfaz de administración para instalar y deshabilitar complementos.
** Gestión del curso **: Cree y administre cursos que satisfagan una variedad de necesidades. Las clases dirigidas por el instructor, las clases a su propio ritmo, las clases combinadas y las clases completamente en línea son todas las opciones.
** Autoevaluación **: Talleres y encuestas son actividades incorporadas que alientan a los estudiantes a ver, calificar y revisar el trabajo de su propio y otros compañeros de clase como grupo.

## Instalación de Moodle {#moodle}
Siga la siguiente guía paso a paso para instalar Moodle LMS en Ubuntu 18.04.
  * Primero, ejecute los comandos a continuación para cambiar DirectLory Descargar y descargar Moodle.
```
cd /var/www/
sudo git clone -b MOODLE_38_STABLE git://git.moodle.org/moodle.git moodle
```
  * Ejecute los siguientes comandos Crear directorio de datos y establecer permisos.
```
sudo mkdir -p /var/www/moodledata
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/
sudo chown www-data:www-data /var/www/moodledata
```
  * Crear archivo de configuración Nginx para el sitio de Moodle.
```
sudo nano /etc/nginx/sites-available/moodle
```
  * Agregue el código a continuación y guarde el archivo.
```
server {
   listen 80;
   listen [::]:80;
   root /var/www/moodle;
   index  index.php index.html index.htm;
   server_name  example.com;

   client_max_body_size 100M;
   autoindex off;
   location / {
       try_files $uri $uri/ =404;
   }

   location /dataroot/ {
     internal;
     alias /var/www/moodledata/;
   }

   location ~ [^/].php(/|$) {
       include snippets/fastcgi-php.conf;
       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       include fastcgi_params;
   }
}
```
  * Crear un enlace simbólico para habilitar el sitio recién creado.
```
sudo ln -s /etc/nginx/sites-available/moodle /etc/nginx/sites-enabled/
```
  * Reiniciar el servidor web Nginx.
```
sudo systemctl restart nginx
```
  * A continuación, abra su navegador y escriba http://example.com. Reemplace "Ejemplo.com" con el nombre de dominio real o IP de su servidor.
  * Ahora, puede ver el asistente de instalación. Seleccione un idioma y haga clic en el botón Siguiente.

{{< figure align=center src="images/moodle-install-1-1024x408.png" alt="Moodle - Elija un idioma">}}

  * Debe revisar y asegurarse de que la URL del sitio, el directorio de Moodle Root y las rutas de directorio de datos sean correctas. También puede cambiar la ruta del "directorio de datos" y debe estar fuera del directorio de código Moodle para la seguridad. Haga clic en el botón Siguiente.

{{< figure align=center src="images/moodle-install-2-1024x529.png" alt="Moodle - Establecer la ruta del directorio de datos">}}

  * Elija un controlador de base de datos en este paso. Sin embargo, puede usar el ya seleccionado y hacer clic en el botón Siguiente.

{{< figure align=center src="images/moodle-install-3-1024x413.png" alt="Moodle - Elija el controlador de la base de datos">}}

  * Proporcionar configuraciones de base de datos, como host de base de datos, nombre de la base de datos, usuario de la base de datos, contraseña de base de datos y prefijo de tabla. Haga clic en el botón Siguiente.

{{< figure align=center src="images/moodle-install-4.png" alt="Moodle - Configuración de la base de datos">}}

  * Haga clic en el botón Confirmar para estar de acuerdo con los términos y condiciones.
  * Puede ver una lista de extensiones PHP requeridas. Sin embargo, tendrá que instalar cualquier complemento que falte. Haga clic en el botón Continuar para mover el siguiente paso.
  * En este punto, debe completar los datos del administrador para crear una cuenta. Haga clic en el botón "Actualizar perfil".
  * Proporcione información para su sitio, como nombre completo del sitio, nombre corto para el sitio, resumen de la página principal, zona horaria predeterminada y correo electrónico sin respuesta. Haga clic en el botón "Guardar cambios".
  * Complete el registro de su sitio proporcionando información como nombre del sitio, idioma, región, dirección de correo electrónico, etc.

## conclusión {#conclusion}
Aprendimos sobre Moodle y sus características principales en este artículo. También superamos un enfoque paso a paso para configurar ** Moodle LMS ** para ** Crear sitio web de aprendizaje electrónico **. Puede revisar la [** documentación oficial de Moodle **][8] para sentirse más cómodo con varias funciones, como cursos, registro de estudiantes, progreso de seguimiento, etc. Espero que hayas encontrado esta publicación útil para crear un sitio web de LMS.
Finalmente, [** Contenerize.com **][9] se encuentra en un proceso consistente de escribir publicaciones de blog sobre los últimos productos de código abierto más recientes. Por lo tanto, manténgase en contacto con esta categoría [** Sistema de gestión de aprendizaje **][10] para las últimas actualizaciones.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  *[** Herramientas LMS de código abierto **][11]
  *[** Moodle-Sistema de e-Learning **][12]

  
[1]: #Prerequisites
[2]: #What
[3]: #Features
[4]: #Moodle
[5]: #Conclusion
[6]: https://moodle.org/
[7]: https://github.com/moodle/moodle
[8]: https://docs.moodle.org/
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/learning-management-system/
[11]: https://products.containerize.com/lms/
[12]: https://products.containerize.com/lms/moodle/
