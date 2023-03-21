---
title: "Cómo configurar y configurar NGINX como proxy inverso" 
seoTitle: "Cómo configurar y configurar NGINX como proxy inverso" 
description: "Este tutorial trata sobre cómo configurar y configurar Nginx como proxy inverso. Nginx se considera uno de los servidores web proxy inverso más populares de código abierto." 
date: Fri, 07 May 2021 07:38:05 +0000
author: yasir saeed
summary: "Nginx es un servidor web de código abierto que también puede actuar como un proxy inverso. Este tutorial lo ayudará a aprender cómo configurar y configurar NGINX como proxy inversa." 
url: /es/how-to-setup-and-configure-nginx-as-reverse-proxy/
categories: ['Web Server Solution Stack']
---

## nginx es un servidor web de código abierto que también puede actuar como un proxy inverso. Este tutorial lo ayudará a aprender cómo configurar y configurar NGINX como proxy inversa.

{{< figure align=center src="images/nginx-as-reverse-proxy.png" alt="Use Nginx como servidor proxy inverso">}}


## Descripción general:
Nginx y Apache son dos servidores web de código abierto más populares **que a menudo se usan con PHP. Un proxy inverso o una puerta de enlace actúa como una conexión entre el cliente y el servidor. El cliente y el servidor intercambian información entre sí para trabajar de manera continua y eficiente. Los proxies inversos más comunes son  **Nginx y Apache**   y ambos pueden configurarse en la misma máquina virtual al alojar múltiples sitios web. Un proxy inverso protege los servidores web de los ataques y la puerta de enlace de conexión aparece al cliente como un servidor web ordinario donde no se necesitan configuraciones especiales de proxy inverso Nginx. El cliente envía una solicitud mientras el proxy inverso decide dónde pasar la información solicitada y luego entregar el resultado de salida final al cliente.
Después de mucho aprecio por nuestra serie sobre los tutoriales de Redis, recibimos muchas solicitudes para comenzar una serie sobre tutoriales NGINX. Entonces, la semana pasada comenzamos con un tutorial sobre cómo usar [Balancer de carga de proxy inverso de Nginx][1] para sus aplicaciones. Este simple ejemplo de configuración de proxy de Nginx Reverse proporciona muchos beneficios de rendimiento del proxy inversa de Nginx y Nginx. Nginx Simple Reverse Proxy es el servidor Nginx proxy de código abierto más utilizado en Internet. En este tutorial, **Configuraremos y exploraremos cómo usar NGINX como proxy inverso**  y cómo configurarlo como proxy inverso en un solo servidor. ¡Entonces empecemos!
  * ¿Qué es un servidor proxy?
  * ADELANTE VS REVERSE PROXY
  * Configurar proxy inverso
  * ¿Cuáles son las ventajas del proxy inverso de Nginx?
  * Conclusión

## ¿Qué es un servidor proxy?
**Un servidor proxy**  actúa como una puerta de enlace entre usted e Internet. Es un servidor intermediario que separa a los usuarios finales de los sitios web que navegan. Los servidores proxy proporcionan diferentes niveles de funcionalidad, seguridad y privacidad según su caso de uso o política de la empresa.
Con un servidor proxy, el tráfico de Internet fluye a través del servidor proxy en su camino a la dirección que solicitó. La solicitud luego regresa a través de ese mismo servidor proxy (principalmente), y luego el servidor proxy reenvía los datos recibidos del sitio web a usted.

## Adelante vs proxy inverso:

{{< figure align=center src="images/forward-proxy-server-1024x482.png" alt="nginx como servidor proxy inverso">}}

En general, cuando hablamos del poder, la mayoría de las veces nos referimos al poder delantero. **Los proxies delanteros**  son excelentes para evitar las restricciones de los países, como el gran firewall de China. El cliente simplemente se conecta a recursos bloqueados a través del proxy de avance. Los proxies de reenvío pueden ocultar las identidades del usuario cambiando su dirección IP. Por lo tanto, básicamente Nginx como proxy avanzado se encuentra entre el cliente e Internet, por lo que el servidor final no es consciente del cliente real.

{{< figure align=center src="images/reverse-proxy-server-1024x482.png" alt="nginx como proxy inverso">}}

**Los proxies inversos  **también actúan como intermediarios, pero se sientan al otro lado de la conexión. Los proxies inversos son excelentes en **  Balancio de carga** , optimización web y seguridad. El proxy inverso se usa típicamente para distribuir la carga entre varios servidores, mostrar sin problemas contenido de diferentes sitios web o aprobar solicitudes de procesamiento a servidores de aplicaciones a través de protocolos que no sean HTTP.

## Configure Nginx como proxy inverso:
Cuando NGINX proxies una solicitud, envía la solicitud a un servidor proxiado especificado, obtiene la respuesta y la envía nuevamente al cliente. Es posible presentar solicitudes a un servidor HTTP o un servidor no HTTP utilizando un protocolo especificado. Los protocolos compatibles incluyen **FastCGI, UWSGI, SCGI y Memcached** .
Para pasar una solicitud a un servidor proxied HTTP, la directiva **proxy_pass  **se especifica dentro de una ubicación ** ** . Por ejemplo:
```
location /path/to/location/ {
    proxy_pass http://www.backendserver.com/link/;
}
```
Esta configuración de ejemplo de proxy inversa de Nginx da como resultado que se encuentren todas las solicitudes procesadas en esta ubicación al servidor proxizado en la dirección especificada. Esta dirección se puede especificar como un nombre de dominio o una dirección IP. La dirección también puede incluir un puerto:
```
location ~ \.php {
    proxy_pass http://127.0.0.1:8000;
}
```
Incluso puede pasar encabezados modificados o personalizados al servidor proxiado en nginx **proxy \ _set \ _header**  host a continuación en el ejemplo.
```
location /path/to/location/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
```
Nginx también admite el búfer que ayuda a mejorar el rendimiento. Con Buffering habilitado, NGINX almacenará la respuesta que recibe del servidor proxy siempre que el cliente lo necesite para descargar.
En lugar de representar todas las solicitudes a un solo servidor, también puede **configurar múltiples servidores de backend**  y dejar que el equilibrio NGINX se cargue entre esos servidores proxizados. Ya hemos cubierto esto en nuestro tutorial sobre [equilibrio de carga Nginx][1].

## ¿Cuáles son las ventajas del proxy inverso de Nginx?
Los siguientes son los beneficios de configurar el servidor proxy reverso NGINX:
  *Nginx es uno de los servidores web de código abierto más populares ** que también es la herramienta proxy más popular. Nginx Reverse Proxy Config es muy simple de implementar, ya que proporciona al usuario una seguridad de alta gama contra los ataques de servidor web DDoS y DOS.
  *Ayuda a crear una carga equilibrada entre los sitios web de alto tráfico y los servidores de backend como **Dropbox, Netflix y Zynga** .
  * Proporciona un mecanismo de almacenamiento en caché para un servidor de fondo más lento y sitios de alto tráfico para configurar Nginx Reverse Proxy Virtual Host. No requiere configurar un nuevo proceso para cada solicitud web desde el lado del cliente.
  * También actúa como un servidor proxy inverso para múltiples protocolos como HTTP, HTTPS, TCP, UDP, SMTP, IMAP y POP3, etc.
  *Nginx puede **manejar más de 10000 conexiones**  con una huella de memoria baja y puede operar múltiples servidores web en una sola dirección IP.
  * También ayuda a almacenar en caché del contenido y realizar el cifrado SSL para reducir la carga del servidor de host web. Nginx es uno de los mejores servidores web para mejorar el rendimiento del contenido estático comprimiéndolo y aumentando el tiempo de carga.
  * Es una herramienta excelente para un entorno de servidor múltiple y también puede ser útil para diferentes tareas como mantener un solo servidor anónimo.

## Conclusión:
En este **Tutorial de proxy inverso  **Nginx ** , exploramos lo que es un servidor Nginx proxy y configurando Nginx Reverse Proxy. Diferencia entre el servidor proxy reverso VS Nginx. También aprendimos por ejemplo cómo configurar Nginx como proxy inverso. Ahora comprende completamente cómo instalar  **Configuración de proxy inversa Nginx paso a paso**  . El tutorial anterior le ayuda a comenzar con una configuración de proxy inversa. En nuestros próximos tutoriales, discutiremos temas más interesantes sobre NGINX.
_ ¿Cuál es su servidor de proxy_ reverse más favorito que es fácil, dinámico y completo? ¿Tiene alguna pregunta sobre liderar_ _open Source _Reverse prox__y, **Balancer de carga para HTTP y TCP**  Aplicaciones basadas en?

## Explorar
Es posible que encuentre los artículos más relacionados.
  * [Cómo configurar Apache como un proxy inverso para Ubuntu/Debian][3]
  * [Asegure Nginx con vamos a cifrar en Ubuntu 20.04][4]
  * [Cómo usar Nginx como equilibrador de carga para su aplicación][1]
  * [Cómo instalar y asegurar phpmyadmin con Nginx en Ubuntu][5]
  * [Configurar el soporte HTTP/2 en Nginx en Ubuntu/Debian][6]
  * [Instale múltiples versiones PHP con Nginx en Ubuntu][7]
  * [Configurar nginx con pasajero en el servidor de producción de AWS][8]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
