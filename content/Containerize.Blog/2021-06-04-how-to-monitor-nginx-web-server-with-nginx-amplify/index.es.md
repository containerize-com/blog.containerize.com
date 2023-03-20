---
title: "Cómo monitorear el servidor web Nginx con Nginx Amplify" 
seoTitle: "Cómo monitorear el servidor web Nginx con Nginx Amplify" 
description: "Nginx Amplify es un agente de monitoreo gratuito para el servidor web Nginx y las aplicaciones PHP. Este artículo trata sobre cómo monitorear el servidor web Nginx con Nginx Amplify" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "Monitoree las aplicaciones NGINX, PHP, el sistema operativo con NGINX amplifique y mejore la configuración. Este artículo lo guía a configurar y configurar Nginx Amplify." 
url: /es/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## Monitorear Nginx, aplicaciones PHP, sistema operativo con Nginx Amplify y mejorar la configuración. Este artículo lo guía a configurar y configurar Nginx Amplify.

{{< figure align=center src="images/nginx-post.png" alt="Monitorear el servidor web Nginx con Nginx Amplify">}}


## Descripción general {#install}
** Monitoreo del servidor web ** es muy importante para los sitios web de alto tráfico. El ** Agente de monitoreo ** registrará métricas esenciales sobre el servidor web regularmente. Esas métricas críticas se pueden usar para optimizar la configuración de Nginx. Le ayudará a mejorar el rendimiento de su servidor web y su aplicación.
En esta publicación de blog, cubriremos las siguientes secciones para ** Nginx Monitoring ** Herramienta de código abierto.
  * [Servidor web nginx][1]
  * [Nginx amplifica][2]
  * [Instalar nginx amplificando][3]
  * [Monitoreo de métricas][4]

## servidor web nginx {#nginx}
[Nginx][5] es un servidor web de código abierto y abierto. Es simple, liviano y fácil de configurar que Apache. Nginx Web Server también funciona como proxy inverso, equilibrador de carga, proxy de correo y caché HTTP. Funciona para los protocolos HTTP, HTTPS, SMTP, POP3 e IMAP. NGINX es un servidor web de alta velocidad, confiable y eficiente en la memoria que mejora el rendimiento de sus aplicaciones. Además, ha crecido en popularidad y ahora se considera el servidor web más popular. Además, NGINX es adecuado para cualquier tipo de sitio web que incluya sitios y aplicaciones de alto tráfico. Se puede instalar y configurar en casi todos los sistemas operativos.

### instalar nginx
  * Ejecute los comandos a continuación para instalar el servidor web NGINX.
```
sudo apt update
sudo apt install nginx
```
  * Una vez que haya terminado con la instalación, abra su navegador y escriba "http: // ip \ _of \ _your_server". Verá la siguiente página de bienvenida.

{{< figure align=center src="images/nginx-home.png" alt="¡Bienvenido a nginx!">}}


## nginx Amplify {#amplify}
Nginx Amplify es una herramienta de monitoreo gratuita para Nginx Open Source, Nginx Plus y PHP-FPM. Es una herramienta basada en SaaS para el monitoreo y las aplicaciones del servidor NGINX. Los usuarios pueden realizar un seguimiento fácilmente de los activos de infraestructura, monitorear el rendimiento y ajustar la configuración. Proporciona información integral que los usuarios pueden utilizar para optimizar la configuración del servidor web y la aplicación. Actúa como un agente en el servidor que aloja las aplicaciones NGINX y PHP. NGINX AMPLIFY es una ligera y de monitoreo de registros de monitoreo para amplificar los servidores sin comprometer el rendimiento. Puede ver las métricas en el tablero de Amplify. El agente está disponible para todos los sistemas operativos primarios como Rhel, Centos, Ubuntu, Debian, Fedora y FreebSD. Nginx Amplify tiene tres componentes principales, como Nginx Amplify Agent, Nginx Amplify Web UI y Nginx Amplify Backend.
  *** Nginx Amplify Agent ** - Funciona en el sistema que se está monitoreando. Toda la comunicación se encripta usando SSL/TLS.
  *** Nginx AMPLIFICA UI ** - Web UI muestra las métricas para servidores web, aplicaciones y sistemas operativos.
  *** Nginx amplifica el backend **: es un componente clave que se implementa como un SaaS y es responsable de recopilar métricas, mantener una base de datos, ejecutar un motor de análisis y proporcionar una API central.

## instalar nginx amplificando {#install}
Siga a continuación la guía paso a paso para la instalación de Nginx Amplify en Ubuntu.
  * Primero, debe crear una cuenta en el Nginx [Sitio web][6].
  * Después de iniciar sesión, verá a continuación la pantalla en el sitio web Nginx Amplify. Ahora, conéctese a su servidor a través de SSH y use comandos dados en los siguientes pasos.

{{< figure align=center src="images/amplify-1.png" alt="Instalar Nginx Amplify">}}

  * Ejecute el siguiente comando para descargar el agente.
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  * Ejecute el siguiente comando para instalar Nginx Amplify en el servidor. Reemplace xxxxx con la tecla API real. Puede encontrarlo en el tablero Nginx Amplify.
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  * Una vez que haya terminado con la instalación, puede verificar el estado con el siguiente comando.
```
$ sudo service amplify-agent status
```
  * Ahora, debe configurar Nginx Amplify Agent para ver las métricas.

{{< figure align=center src="images/amplify-2-1.png" alt="Configuración de monitoreo de NGINX">}}

  * Cree un archivo nuevo con la configuración stub_status.
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  * Copie el siguiente código en él y guarde el archivo.
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * Reinicie el servidor web NGINX para activar el módulo stub_status.
```
$ sudo service nginx restart
```
  * Ahora, abra el archivo de configuración de Nginx con el siguiente comando.
```
$ sudo nano /etc/nginx/nginx.conf
```
  * Agregue el código a continuación y guárdelo.
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * Reinicie el servicio Nginx para aplicar todos los cambios.
```
$ sudo service nginx restart
```
  * A continuación, navegue para amplificar el tablero y haga clic en el botón "Finalizar". Debería ver la siguiente página.

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="Monitoreo del servidor web">}}

  *Puede ver las estadísticas en formato más fácil y legible haciendo clic en la pestaña ** Descripción general **. Se verá como se muestra a continuación.

{{< figure align=center src="images/amplify-overview.png" alt="Estadísticas de monitoreo de Nginx">}}


## Monitoreo de métricas {#monitoring}
Nginx Amplify Agent recopila los siguientes tipos de datos:
  *** Métricas Nginx **: recopila varias métricas relacionadas con Nginx de stub_status, archivos registrados y del estado del proceso.
  *** Métricas del sistema ** - Nginx Amplify monitorea una variedad de métricas del sistema, como el uso de CPU, el uso de la memoria, el tráfico de redes y muchos más.
  *** Métricas PHP-FPM **-Si identifica un proceso maestro PHP-FPM, obtiene métricas del estado de PHP-FPM.
  *** Métricas MySQL ** - El agente puede utilizar el conjunto de variables global MySQL de variables para recopilar métricas.
  *** Metadatos Nginx **: el agente recopila datos sobre instancias Nginx, como datos de paquetes, información de compilación, ruta binaria, configuraciones de configuración de compilación y muchos más.
  *** Metadatos del sistema **: el agente recopila datos sobre el sistema operativo, incluido el nombre de host, el tiempo de actividad, el sabor del sistema operativo y otros detalles.

## Conclusión
Hemos superado el servidor web Nginx y Nginx amplificamos el agente de monitoreo avanzado con gran detalle. Nginx Amplify es bastante simple de configurar y configurar. Además, hemos superado las métricas críticas que Nginx Amplify puede rastrear ** monitorear nginx **. Estas métricas importantes se pueden usar para mejorar la configuración de su servidor y aplicaciones web NGINX.
Finalmente, [Contenerize.com][7] se encuentra en un proceso consistente de escribir publicaciones de blog sobre otros productos de código abierto más recientes. Por lo tanto, manténgase en contacto con esta categoría [pila de soluciones del servidor web][8] para las últimas actualizaciones.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [Cómo usar Nginx como equilibrador de carga para su aplicación][9]
  * [Cómo configurar y configurar Nginx como proxy inverso][10]

  
[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
