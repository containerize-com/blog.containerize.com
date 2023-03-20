---
title: "Cómo configurar la solución CMDB Ralph en localhost" 
seoTitle: "Cómo configurar la solución CMDB Ralph en localhost" 
description: "Este tutorial se trata de configurar Ralph en Localhost. Ralph es una solución CMDB gratuita que proporciona características para rastrear activos y configuraciones." 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "La solución de gestión de activos de TI reduce los costos operativos y aumenta la eficiencia. Este artículo trata sobre cómo configurar el software CMDB Ralph en su máquina local." 
url: /es/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

## La solución de gestión de activos de TI reduce los costos operativos y aumenta la eficiencia. Este artículo trata sobre cómo configurar el software CMDB Ralph en su máquina local.

{{< figure align=center src="images/ralph.png" alt="Solución CMDB">}}


## **Descripción general**
En el momento actual, las organizaciones están prosperando para cumplir con el ritmo de la tecnología empleando una enorme infraestructura de TI. A continuación, no es menos que un desafío administrar entornos tan grandes. Requiere mano de obra y poder tecnológico para lograr tales tareas críticas. A veces, se convierte en una molestia para formular procesos y procedimientos para manejar redes complejas de sistemas que incluyen impresoras, computadoras de escritorio, escáneres, teléfonos y otros accesorios de TI. Del mismo modo, las configuraciones de estos nodos también son importantes ya que hay altas posibilidades de tiempo de inactividad de cualquier máquina en la red. Por lo tanto, debe haber una verificación consistente sobre estas configuraciones.
Sin embargo, hay muchos de código abierto y software gratuito disponibles para realizar un seguimiento y el registro de los activos. Este software se conoce como software de base de datos de gestión de configuración (CMDB). Recientemente, [Contenerize.com][1] publicó una solución CMDB [Ralph][2] que proporciona muchas características para mejores activos y gestión de configuración. En esta publicación de blog, exploraremos a Ralph cubriendo los siguientes puntos.
  *** [Breve introducción de CMDB Software Asset Management Ralph][3] **
  *** [Características de Ralph][4] **
  *** [¿Cómo configurar Ralph en localhost?][5] **
  *** [Conclusión][6] **

## Breve introducción de la gestión de activos de software CMDB Ralph {#Intro}
Ralph es una solución gratuita de gestión de activos de código abierto. Es multiplataforma y viene con capacidades de autohostación. Hay un ecosistema completo de seguimiento de activos en tiempo real. Por lo tanto, los usuarios pueden realizar un análisis para informar. Permite a los usuarios registrar detalles de los activos sobre su ciclo de vida. Además, este software de gestión de activos digitales de código abierto proporciona espacio para almacenar información sobre los activos de los centros de datos. Por otro lado, esta solución CMDB también proporciona soporte para administrar software, licencia, certificados y otros contratos. Ralph no solo apoya la gestión de activos, sino que también proporciona disposiciones para realizar acciones en esos activos. Sin embargo, las acciones están relacionadas con la implementación de un host, generar facturas, seguimiento de dominios o gestión de inventario.
Esta solución de gestión de activos de TI presenta una interfaz RESTFUL. Los desarrolladores pueden integrar muchas aplicaciones de terceros utilizando los puntos finales de API expuestos por esta herramienta gratuita de código abierto. Además, Ralph está escrito en Python junto con la entrada de HTML, CSS y JavaScript. Por lo tanto, existe una documentación integral disponible con respecto al desarrollo y la implementación. El código fuente de esta solución de gestión de acciones está disponible en [Github][7].

## Características de Ralph {#Feature}
Ralph ofrece muchas características. Sin embargo, mencionaremos algunas de las siguientes características clave.
** Extensible **: Este software de gestión de activos digitales de código abierto es altamente extensible. Los desarrolladores pueden implementarlo en las instalaciones o en la nube según sus necesidades.
** Soporte para centros de datos: ** Ralph también ofrece soporte para almacenes de datos, habitaciones de centros de datos, servidores y bastidores. Los usuarios pueden realizar un seguimiento de todos los componentes, su red y configuraciones.
** REST API **: Este software CMDB gratuito es altamente personalizable. De hecho, proporciona una API REST para integraciones de terceros. Los desarrolladores pueden extenderlo de acuerdo con sus requisitos.
** Interfaz de usuario intuitiva: ** Hay una interfaz de usuario lógica disponible en esta solución CMDB donde los usuarios pueden navegar fácilmente. Además, el panel de administración proporciona varios widgets que muestran datos que llegan en tiempo real.
** Interfaz de línea de comandos **: Ralph presenta una interfaz de línea de comandos que proporciona una facilidad para descubrir direcciones MAC para la implementación de hosts.
** Soporte para activos no físicos **: Esta solución de gestión de equipos no solo proporciona soporte para activos físicos, sino que también administra recursos no físicos como dominios, software y licencias.

## ¿Cómo configurar Ralph en localhost? {#configuración}
En esta sección, pasaremos por el proceso de instalación del software de gestión de recursos Ralph en la máquina local. Es bastante fácil de configurar y usar.
Antes de pasar a la siguiente sección, asegúrese de haber instalado los siguientes requisitos previos.
  * [Docker-Compose][8]
  * [Docker][9]
La mayoría del software de código abierto ofrece imágenes de Docker para las implementaciones en varias plataformas. Da facilidad a los desarrolladores y acelera el proceso de desarrollo y implementación.
Una vez que se instalen los requisitos previos, active Docker. Ahora, abra el terminal y ejecute el siguiente comando para hacer un directorio vacío:
```
mkdir ralph<br>cd ralph
```
Después de eso, haga un nuevo archivo llamado "Docker-compose.yml" y llénelo con los siguientes datos.
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
Ahora, guarde el archivo y ejecute el siguiente comando para hacer la compilación:
```
docker-compose build

```
Tras una compilación exitosa, ejecute el siguiente comando para la base de datos:
```
docker-compose run –rm web /root/init.sh

```
Si todo va bien, ejecute el siguiente comando para girar el contenedor de Docker:
```
docker-compose up -d
```
Después de ejecutar ese comando, los contenedores Docker estarán en funcionamiento como se muestra en la imagen a continuación:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="Solución CMDB">}}

Finalmente, abra el navegador y acceda a la aplicación en esta dirección http://127.0.0.1.
Mostrará la página de inicio de sesión como se muestra en la imagen a continuación:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="Solución CMDB">}}


## conclusión {#conclusion}
Después de pasar por esta publicación del blog del Tutorial CMDB, una cosa está clara que la gestión de activos es casi imposible sin una buena solución CMDB. El software de gestión de recursos tiene roles específicos en la gestión y el seguimiento de los activos, las configuraciones y sus relaciones. Hay disposiciones para rastrear aquellos cambios que apenas se realizan en activos digitales o físicos. Estas herramientas gratuitas son fáciles de configurar, usar y vienen con documentación y orientación detalladas. Finalmente, [** Contenerize.com **][1] está destinado a escribir artículos sobre otros productos de código abierto. Por lo tanto, manténgase en contacto con este [][10] ** [Software CMDB][11] ** Categoría para las últimas actualizaciones.

## Explorar
  *** [Software CMDB][11] **
  *** [Ralph][2] **
  *[** Automatizar operaciones comerciales utilizando software de código abierto y de código abierto **][12]
  *** [Tendencias de desarrollo de software a tener en cuenta en 2021][13] **

  
[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/
