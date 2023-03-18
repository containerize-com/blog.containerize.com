---
title: "Cómo dockerizar WordPress | Docker WordPress" 
seoTitle: "Cómo dockerizar WordPress | Docker WordPress" 
description: "¿Qué es Docker & Docker Compose? En este artículo, aprenderemos cómo instalar Docker, Docker Compose y cómo dockerizar WordPress en un contenedor Docker." 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "Un software de contenedor incluye una aplicación, sus dependencias y hace que la aplicación se ejecute en cualquier entorno informático. Aprendamos a dockerizar WordPress." 
url: /es/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## Un software de contenedor genera una aplicación, sus dependencias y hace que la aplicación se ejecute en cualquier entorno informático. Aprendamos a dockerizar WordPress.

{{< figure align=center src="images/dockerwordpress.png" alt="Dockerize WordPress">}}


## Descripción general
Bienvenido a otra publicación de blog en la categoría [Blogging] [1] de software de código abierto. Hemos publicado algunos artículos sobre temas como [impulsar sus clientes potenciales con la integración gratuita de CivicRM WordPress] [2], [Cómo construir su sitio web con WordPress y Gatsby] [3], y algo más. Sin embargo, este artículo traerá más información y detalles sobre las plataformas de blogs de código abierto y ** Software de contenedores **. Realizaremos algunas preguntas calientes como qué es Docker & ** Cómo instalar Docker Compose ** y aprenderemos cómo dockerizar WordPress.
La contenedorización se ha convertido en una tendencia importante en el desarrollo de software como alternativa a la virtualización. Implica encapsular o agrupar el código de software y todas sus dependencias para que pueda ejecutarse en cualquier infraestructura de manera consistente. La contenedorización permite a los desarrolladores crear e implementar aplicaciones de manera más rápida y segura. Docker es la aplicación de contenedores más popular utilizada en la comunidad de desarrolladores. En este tutorial, aprenderemos cómo dockerizar WordPress usando Docker Compose. Entonces, comencemos con los siguientes puntos.
  *[** ¿Qué es Docker? **] [4]
  *[** ¿Por qué necesitas dockerizar WordPress **?] [5]
  *** [Cómo instalar Docker Compose] [6] **
  *** [Dockerize WordPress] [7] **
  *** [Conclusión] [8] **

## ¿Qué es Docker? {#estibador}
En palabras simples, Docker es un software de contenedor ** de código abierto ** que hace la virtualización más rápido y más ligero. Es tan ligero que se puede lanzar un contenedor Docker en solo unos segundos. Y puede ejecutar fácilmente docenas de contenedores Docker en una sola PC. Los desarrolladores usan Docker para crear, implementar y ejecutar aplicaciones utilizando contenedores. Los contenedores permiten que un desarrollador empaquete una aplicación con todas las piezas que necesita, como bibliotecas y otras dependencias, e implementa como un solo paquete. Al hacerlo, el desarrollador puede estar seguro de que la aplicación se ejecutará en cualquier infraestructura. Además, existe una gran comunidad de desarrolladores y apoyo que siempre está viva para proporcionar la máxima asistencia en cualquier relevancia. Docker se ha convertido en un componente imprescindible de cualquier empresa de software debido a sus potentes características y usos.

## ¿Por qué necesitas dockerizar WordPress? {#por qué}
En esta sección, sabremos sobre la necesidad detrás de Dockering WordPress. WordPress es un software de blogging de código abierto líder que es muy adoptado por el mundo de la tecnología. Sin embargo, para ejecutar WordPress localmente, necesita Apache/Nginx, MySQL Server, PHP y toneladas de otras dependencias. Y la implementación en el entorno de puesta en escena o producción es una pesadilla cuando se trata de administrar esas dependencias. A veces, se convierte en una molestia para que los desarrolladores e ingenieros de apoyo repitan las implementaciones repetidamente a medida que exige tiempo y mano de obra.
Por lo tanto, la contenedores puede ayudarlo con esto. Todo lo que necesita es Docker: la instalación en sí toma segundos y no se requiere una configuración adicional
No importa si se trata de una máquina de desarrollo, escenario o servidor en vivo y qué sistema operativo es, Docker funciona igual en todas partes. Esto significa que no tendrá que buscar errores que, por ejemplo, aparezcan en un entorno y no se puedan reproducir en otro.

## Cómo instalar Docker Compose {#Install}

### Prerrequisitos
Puede usar Docker Compose para ejecutar fácilmente WordPress en un entorno aislado construido con contenedores Docker. Esta guía demuestra cómo usar la composición para configurar y ejecutar WordPress.
Docker Compose se basa en Docker Engine, así que asegúrese de tener el motor Docker instalado. En sistemas de escritorio como Docker Desktop para Mac y Windows, Docker Compose se incluye como parte de esas instalaciones de escritorio. Sin embargo, primero en Linux Systems, instale el motor Docker siguiendo su [Guía oficial] [9].

### Instalar composición en Linux
Ejecute este comando para descargar la versión estable actual de Docker Compose:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
Aplicar permisos ejecutables al binario:
```
sudo chmod +x /usr/local/bin/docker-compose
```
Prueba de instalación ejecutando el comando de versión:
```
docker-compose --version
```

### Defina un Dockerfile para WordPress
Lo primero que debemos hacer es definir cómo se verá nuestra imagen en un ** _ Dockerfile _ **. Es un archivo de texto que se agrega al directorio con las fuentes de su aplicación.
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
"**/var/www/html/wordpress **" contendrá contenido completo de WordPress junto con temas, complementos y contenidos. Si su repositorio solo contiene el tema o el complemento, simplemente agregue la carpeta relevante.
Cree un archivo Docker-Compose.yml que inicie su blog de WordPress y una instancia de MySQL separada con un montaje de volumen para la persistencia de datos:
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
Ahora, ejecute el comando en el directorio de su proyecto
```
docker-compose up -d
```
Esto se ejecuta ** _ Docker-Compose up _ ** en modo separado, extrae las imágenes de Docker necesarias e inicia los contenedores de WordPress y la base de datos.
Una vez que los contenedores han comenzado, puede abrir la URL en el navegador web y comenzar a usar su aplicación:
```
http://localhost:8000
```

## conclusión {#conclusion}
Esto nos lleva al final de esta publicación de blog. En este artículo, aprendimos sobre lo que es Docker, ** Cómo instalar Docker Compose **. También aprendimos cómo dockerizar WordPress usando Docker-Compose. Además, le presentamos el concepto detrás de Docker y cómo puede definir aplicaciones simples de múltiples contenedores. Sin embargo, este software de contenedor ** de código abierto ** es una opción líder para todas las organizaciones de software. Por lo tanto, este artículo realmente lo ayudará si está buscando optar por Docker para sus aplicaciones. Hay muchos otros artículos relevantes y software de blogs en la sección "Explorar" a continuación.
Finalmente, [Contenerize.com] [10] está escribiendo artículos sobre otros productos de código abierto. Por lo tanto, manténgase en contacto con la categoría [Blogging] [1] para noticias y actualizaciones regulares. Además, puede seguirnos en nuestras cuentas de redes sociales [Facebook] [11], [LinkedIn] [12] y [Twitter] [13].

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [WordPress] [14]
  * [Jekyll] [15]
  * [Discurso] [16]
  * [Ghost] [17]
  * [Cómo dockerizar WordPress con Docker Compose] [18]
  * [Aumente sus clientes potenciales con la integración gratuita de WordPress CivicRM] [2]
  * [Automatizar el sistema de boletos con WordPress y Osticket] [19]
  * [Cómo integrar el foro del discurso con WordPress] [20]
  * [Aumente el tráfico de búsqueda de sitios web siguiendo los 7 mejores blogs de SEO] [21]
  * [Cómo construir su sitio web con WordPress y Gatsby] [3]
  * [Cómo habilitar la compresión de GZIP en WordPress para una mejor PagSpeed ​​y SEO] [22]
[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/es/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
