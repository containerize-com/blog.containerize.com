---
title: "Cómo configurar el soporte HTTP/2 en Nginx en Ubuntu/Debian" 
seoTitle: "Cómo configurar el soporte HTTP/2 en Nginx en Ubuntu/Debian" 
description: "HTTP2 o H2 es un protocolo binario y una versión mejorada del protocolo HTTP que permite aumentar la velocidad de las páginas del sitio después de que NGINX habilite el soporte HTTP2" 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP/2 es un protocolo multiplexado robusto para mejorar la velocidad y la seguridad de la carga de la página. En este tutorial, aprenderemos cómo configurar Nginx con soporte HTTP/2." 
url: /es/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## http/2 es un protocolo multiplexado robusto para mejorar la velocidad y la seguridad de la carga de la página. En este tutorial, aprenderemos cómo configurar Nginx con soporte HTTP/2.

{{< figure align=center src="images/nginx-enable-http2.png" alt="Nginx habilita el soporte HTTP2 en Ubuntu y Debian">}}


## **Descripción general** 
Nginx es un servidor web de código abierto y confiable. Ganó popularidad debido a su baja huella de memoria, equilibrio de carga, alta escalabilidad, almacenamiento en caché, soporte para la mayoría de los protocolos y proxy inverso. Ahora hablemos de cómo Nginx habilita el protocolo HTTP2.
Uno de los protocolos compatibles con NGINX es HTTP/2, que se publicó en mayo de 2015. La principal ventaja de HTTP/2 es su alta velocidad de transferencia para sitios web ricos en contenido, reduce la carga en el servidor web y puede iniciar múltiples solicitudes paralelas En una sola conexión TCP. Nginx Enable HTTP2 es una versión mejorada del protocolo HTTP. Antes de comenzar, necesitaremos algunos servidores Ubuntu o Debian con certificado SSL. En este tutorial, le guiaremos paso a paso sobre cómo habilitar HTTP2 en Ubuntu.
  * Actualización de los paquetes e instalación de Nginx
  * Habilitando el soporte HTTP/2
  * Agregar el nombre del servidor
  * Agregar los certificados SSL
  * Eliminar a los cifrados
  * Redirigir todas las solicitudes HTTP a HTTPS
  * Reiniciar nginx
  * Conclusión

## Paso 1: Actualización de los paquetes e instalación de NGINX {#4597}

El primer paso es actualizar y actualizar los repositorios en el sistema de embalaje APT. El uso de la actualización descargará los últimos paquetes de versión y la actualización instalará la última versión de los paquetes en la lista. Ejecute el siguiente comando APT para actualizar y actualizar los paquetes.
```
sudo apt-get update && apt-get upgrade
```
El siguiente paso es instalar la última versión del paquete NGINX. El soporte para el protocolo HTTP/2 se introdujo en Nginx versión 1.9.5 y superior. Por lo tanto, tendremos que instalar la última versión del paquete NGINX. Ejecute el siguiente comando de instalación de uso apt para instalar los paquetes NGINX:
```
sudo apt-get install nginx
```
Se le solicitará que confirme el proceso de instalación paso a paso. Seleccione la opción Sí y finalice el proceso de instalación. Después de que finalice el proceso de instalación, el siguiente paso es verificar la versión del paquete si hemos instalado la versión correcta o no. Puede verificar la versión del servidor web NGINX escribiendo el comando:
```
sudo nginx -v
```
La salida del comando de verificación de la versión anterior debe ser similar al siguiente:
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## Paso 2: Habilitación de soporte HTTP/2 {#f4d2}

Después de instalar el paquete NGINX, necesitamos habilitar HTTP2 Nginx. El usuario tiene que cambiar el puerto de escucha de 80 a 443. Abra el archivo de configuración de Nginx:
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
Puede ver que el valor predeterminado de NGINX está configurado para escuchar es el puerto 80.
escuchar 80 default_server;
escuchar [::]: 80 default_server;
Como puede ver, hay dos variables de escucha diferentes. La primera variable de escucha es para todas las conclecciones IPv4 y la segunda es para conexiones IPv6. Habilitaremos el cifrado para ambas variables. Cambie el número de puerto de escucha a 443 y agregue la conexión SSL para el protocolo HTTPS como se muestra a continuación:
Escuchar 443 SSL http2 default_server;
escuchar [::]: 443 ssl http2 default_server;
Observe que además de SSL, también agregamos HTTP2. Nginx ahora puede usar navegadores que admiten el protocolo HTTP/2.

## Paso 3: Agregar el nombre del servidor {#a745}

El siguiente paso es cambiar el servidor \ _name para que el nombre del servidor esté asociado con el nombre de dominio. El usuario solo necesita cambiar el nombre del servidor en el archivo de configuración. Localice la entrada del servidor \ _name en el archivo de configuración y cambie _ a su dominio real, así:
```
server_name example.com www.example.com;
```
Guarde el archivo de configuración del servidor editando en el editor de texto. Puede verificar la configuración de Nginx para los errores de sintaxis con el comando:
```
sudo nginx -t
```
Si la sintaxis está libre de errores, verá la siguiente salida:
nginx: el archivo de configuración /etc/nginx/nginx.conf Syntax está bien
nginx: archivo de configuración /etc/nginx/nginx.conf La prueba es exitosa

## Paso 4: Agregar los certificados SSL {#37c0}

El siguiente paso es habilitar la configuración de NGINX HTTPS para usar su certificado SSL. Puede generar un certificado autoestimado o [instalar un certificado gratuito de Let's Cifre][1]. Si no tiene un certificado SSL, siga este tutorial. Agregue sus certificados SSL dentro del directorio de configuración de NGINX similar a:
```
sudo mkdir /etc/nginx/ssl
```
Copie su certificado y la clave privada a esta ubicación y también reemplace el ejemplo.com con su nombre de dominio real:
sudo cp /path/to/your/certificate.crt /etc/nginx/ssl/example.com.crt
sudo cp /path/to/your/private.key /etc/nginx/ssl/example.com.key
Ahora abra el archivo de configuración del servidor NGINX una vez más. Agregue y configure nuevas líneas SSL dentro del bloque Nginx Server con la ubicación de sus certificados para habilitar la configuración de Nginx SSL:
sudo nano /etc/nginx/sites-available/domain-name.com
ssl_certificate /etc/nginx/ssl/example.com.crt;
ssl_certificate_key /etc/nginx/ssl/example.com.key;
Guarde el archivo del archivo Nginx y salga del editor de texto.

## Paso 5: Eliminar a los cifrados {#d291}

CIPHER es un algoritmo utilizado en criptografía para cifrado de datos y descifrado. Las suites de cifrado son un montón de algoritmos criptográficos utilizados para asegurar conexiones de red. HTTP/2 tiene una enorme lista negra de cifrados inseguros que deben eliminarse. Aquí utilizaremos un set de cifrado popular, aprobado por Internet Giants Cloudflare.
Abra el siguiente archivo de configuración de Nginx /etc/nginx/nginx.conf y agregue las líneas a continuación justo después de **SSL \ _PREFER \ _SERVER_CIPHERS.** Estas líneas incluyen la lista de los últimos cifras que los navegadores HTTP2 entienden.
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
Puede configurar GZIP en apagado y agregar proxy \ _max \ _temp \ _file \ _Size 0; Para evitar err \ _http2 \ _protocol_error nginx error.

## Paso 6: redirige todas las solicitudes HTTP a HTTPS {#b387}

Ahora debemos decirle a Nginx HTTP2 proxy qué debería servir al contenido a través de HTTPS solo si el servidor recibe una solicitud HTTP. Finalmente, ignorando las líneas comentadas, su archivo de configuración de Nginx /etc/nginx/sites-available/domain-name.com debería parecer similar a esto:
servidor {escuchar 443 ssl http2 default_server; escuchar [::]: 443 ssl http2 default_server; root/var/www/html; index.html index.htm index.nginx-debian.html; server_name ejemplo.com; ubicación/{try_files $ uri $ uri/= 404 ; } ssl_certificate /etc/nginx/ssl/example.com.crt;ssl_certificate_key /etc/nginx/ssl/example.com.key;ssl_dhparam /etc/nginx/ssl/dhparam.pem; {escuchar 80; escuchar [::]: 80; server_name Ejemplo.com; devolver 301 https: // $ server_name $ request_uri;}
Guarde el archivo /etc/nginx/sites-available/domain-name.com y luego sal. Verifique las configuraciones para obtener errores de sintaxis:
```
sudo nginx -t
```

## Paso 7: Reiniciar Nginx {#e687}

Para aplicar todos los cambios, reinicie el servidor proxy inverso NGINX HTTP2 y verifique el estado de configuración.
sudo systemctl reiniciar nginx
SUDO SYSTEMCTL ESTADO NGINX

## **Conclusión:**  {#4a1a}

Felicitaciones, ha aprendido con éxito cómo configurar el soporte de Nginx Config HTTP2 en el servidor Ubuntu. Su configuración de Nginx HTTP2 ahora sirve páginas HTTP/2 y también eliminó la diferencia entre los protocolos HTTP/1 y HTTP/2. Si aún enfrenta algún problema de configuración, háganos saber en la sección de comentarios.
¿Tiene alguna pregunta sobre el protocolo multiplexado HTTP2? _, Por favor_ [Póngase en contacto][2].

## Explorar
También puede que le gusten los artículos a continuación:
  * [Cómo configurar Apache como un proxy inverso para Ubuntu/Debian][3]
  * [Cómo][3][Instalar y asegurar phpMyadmin con Nginx en Ubuntu][4]
  * [Cómo configurar Nginx con pasajero en el servidor de producción de AWS][5]
  * [Asegurar y cifrar nginx con vamos en cifrado en Ubuntu 20.04][1]
  * [Cómo instalar y configurar OwnCloud con Apache en Ubuntu][6]



[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
