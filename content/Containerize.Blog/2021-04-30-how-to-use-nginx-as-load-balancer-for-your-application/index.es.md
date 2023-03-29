---
title: "Cómo usar Nginx como equilibrador de carga para su aplicación" 
seoTitle: "Cómo usar Nginx como equilibrador de carga para su aplicación" 
description: "Nginx es un servidor web de código abierto popular. Es bien conocido por su alto rendimiento y escalabilidad. En este tutorial, aprenderemos a usar Nginx como un equilibrador de carga" 
date: Fri, 30 Apr 2021 07:31:14 +0000
author: Assad Mahmood
summary: "Nginx es popular por su alto rendimiento y escalabilidad. Es el servidor web de código abierto #1. En este tutorial, aprenderemos a usar NGINX como equilibrador de carga." 
url: /es/how-to-use-nginx-as-load-balancer-for-your-application/
categories: ['Web Server Solution Stack']
---

## nginx es popular por su alto rendimiento y escalabilidad. Es el servidor web de código abierto #1. En este tutorial, aprenderemos a usar NGINX como equilibrador de carga.

{{< figure align=center src="images/nginx-as-load-balancer.png" alt="Cómo usar Nginx como equilibrador de carga">}}

Los sitios web modernos de alto tráfico cumplen cientos de miles, y en algunos casos millones de solicitudes concurrentes de usuarios o clientes y devuelven el texto, imágenes, videos o datos correctos, todo de manera rápida y confiable. Para satisfacer las necesidades de estos altos volúmenes y la potencia informática, necesita más servidores. Con más servidores, necesita una forma de equilibrar la carga del tráfico entre estos servidores. En este tutorial del blog, exploraremos qué es un equilibrador de carga y cómo podemos usar NGINX como equilibrador de carga.
Para configurar el equilibrio de carga NGINX como un requisito previo, deberá tener al menos dos hosts con un software de servidor web instalado y configurado para ver las ventajas de equilibrio de carga con Nginx. Si ya tiene uno en ejecución de la configuración del host web, duplíquelo creando una imagen personalizada e implementándola en un nuevo servidor web. Por lo tanto, aprendamos cómo configurar la configuración de equilibrio de carga NGINX paso a paso para sus servidores en la nube.
* **[servidor web nginx][1]** 
* **[Balancer de carga][2]** 
* **[Configurar nginx como equilibrador de carga (round robin)][3]** 
* **[sobre diferentes directivas ascendentes][4]** 
* **[Conclusión][5]** 

## Servidor web nginx {#webserver}

Nginx es un servidor web de alto rendimiento y de código abierto. Además de sus capacidades del servidor HTTP, NGINX también puede funcionar como un servidor proxy para el correo electrónico (IMAP, POP3 y SMTP) y un proxy inverso y para cargar saldo NGINX para servidores HTTP, TCP y UDP. Mejora el rendimiento, la confiabilidad y la seguridad de sus aplicaciones. Es popular por su rico conjunto de características, configuración simple y bajo consumo de recursos.
¿Cómo funciona Nginx? Nginx se usa comúnmente como un equilibrador de carga proxy inversa de Nginx como un único punto de entrada a una aplicación web distribuida que funciona en múltiples servidores separados. Utiliza un enfoque asíncrono y basado en eventos para ofrecer un bajo uso de memoria y alta concurrencia. Puede leer más sobre Nginx [aquí][6].

## Balancer de carga {#loadbalancer}

El equilibrio de carga es el proceso de distribución del tráfico de red en múltiples servidores. Y el "software" o "hardware" que realiza este proceso de distribución se llama Balancer de carga. Un equilibrador de carga es como un "policía de tránsito" parado frente a sus servidores y enrutamiento de solicitudes de clientes en todos los servidores. Asegura que su aplicación permanezca operativa incluso si uno de los servidores cae.

{{< figure align=center src="images/223F67DC-2518-4CDD-883A-7DAF3C78A7CC.png" alt="nginx como equilibrador de carga">}}

Las funciones principales de un equilibrador de carga están siguiendo:
  * Distribuye las solicitudes del cliente o la carga de red de manera eficiente en varios servidores
  * Asegura una alta disponibilidad y confiabilidad enviando solicitudes solo a servidores que estén en línea
  * Proporciona la flexibilidad para sumar o restar servidores a medida que la demanda lo dicta

## Configurar nginx como equilibrador de carga {#setup}

Antes de configurar el equilibrio de carga de Round Robin Nginx, debe tener Nginx instalado en su servidor. Puede instalarlo rápidamente con apt-get:
```
sudo apt-get install nginx
```
Para configurar un equilibrador de carga redondo de robín, necesitaremos usar el módulo aguas arriba Nginx. Actualizaremos la configuración del equilibrador de carga NGINX en la configuración de Nginx. Abra la configuración de su sitio web. En aras de este ejemplo, estoy usando el archivo de configuración predeterminado
```
sudo vi /etc/nginx/sites-available/default
```
Necesitamos agregar la configuración de equilibrio de carga al archivo para configurar el equilibrador de carga con Nginx.
Primero debemos incluir el módulo aguas arriba para el equilibrio de carga aguas arriba de Nginx que se ve así:
```
upstream backend  {
  server backend1.example.com;
  server backend2.example.com;
  server backend3.example.com;
}
```
Use este backend ascendente como punto final proxy en su bloque de servidor:
```
server {
  location / {
    proxy_pass  http://backend;
  }
}
```
Reiniciar nginx
```
sudo service nginx restart
```
Siempre que tenga todos los servidores en su lugar, ahora debe encontrar que el equilibrador de carga de código abierto NGINX comenzará a distribuir los visitantes a los servidores por igual. Esta distribución igual se denomina equilibrio de carga de round-robin.

## Directivas aguas arriba {#upstream}

En nuestro último ejemplo, utilizamos un módulo aguas arriba simple para hacer un equilibrio de carga de round-robin para distribuir el tráfico por igual entre los servidores. Sin embargo, hay muchas razones por las cuales esta puede no ser la forma más eficiente de trabajar con el tráfico. Hay varias directivas que podemos usar para dirigir a los visitantes del sitio de manera más efectiva.

### Peso
Una forma de comenzar a asignar a los usuarios a los servidores con más precisión es asignar un peso específico a ciertas máquinas. Nginx nos permite asignar un número que especifique la proporción de tráfico que debe dirigirse a cada servidor.
Una configuración de carga equilibrada que incluía el peso del servidor podría verse así:
```
upstream backend  {
  server backend1.example.com weight=1;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```
El peso predeterminado es 1. Con un peso de 2, Backend2.Example se enviará el doble de tráfico que Backend1, y Backend3, con un peso de 4, se ocupará del doble de tráfico que Backend2 y cuatro veces más que Backend 1.

### hash
El hash IP permite a los servidores responder a los clientes de acuerdo con su dirección IP, enviando a los visitantes de regreso a los mismos VP cada vez que visitan (a menos que ese servidor esté inactivo). Si se sabe que un servidor está inactivo, debe marcarse como hacia abajo. Todos los IP que se suponían que debían enrutar al servidor hacia abajo se dirigen a uno alternativo.
La siguiente configuración proporciona un ejemplo:
```
upstream backend {
  ip_hash;
  server   backend1.example.com;
  server   backend2.example.com;
  server   backend3.example.com  down;
 }
```

### max falla
De acuerdo con la configuración predeterminada de Round-Robin, el equilibrador de carga de la aplicación NGINX continuará enviando datos a los servidores privados virtuales, incluso si los servidores no están respondiendo. Max Fails puede evitar esto automáticamente al hacer que los servidores no respondieran no operativos durante un período de tiempo establecido.
Hay dos factores asociados con el max fallas: max \ _fails y caída \ _timeout. Max Fails se refiere al número máximo de intentos fallidos de conectarse a un servidor que debe ocurrir antes de que se considere inactivo. Fall_TimeOut especifica la longitud de que el servidor no se considera inoperativo. Una vez que expire el tiempo, los nuevos intentos de llegar al servidor se iniciarán nuevamente. El valor de tiempo de espera predeterminado es de 10 segundos.
Una configuración de muestra puede verse así:
```
upstream backend  {
  server backend1.example.com max_fails=3  fail_timeout=15s;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```

## Conclusión: {#conclusion}

En este tutorial de equilibrio de carga Nginx, aprendimos sobre NGNIX, el equilibrio de carga y cómo configurar el equilibrador de carga Nginx para distribuir su tráfico a múltiples servidores. También exploramos diferentes algoritmos de equilibrio de carga como Round-Robin, Hash y Max Fails. Si está ejecutando una aplicación con alto volumen y debe distribuir la carga en diferentes servidores, entonces Nginx es una de las mejores opciones para usted. Y lo más importante es que es un servidor web 100% gratuito y de código abierto.
_Un puede unirse a nosotros en [Twitter][7], [LinkedIn][8] y nuestra página [Facebook][9]. ¿Qué otro potente equilibrador de carga para mejorar la disponibilidad y eficiencia de los recursos de su servidor __do que usa? . Si tiene alguna pregunta o retroalimentación, por favor_ [póngase en contacto][10].

## Explorar
Es posible que encuentre los artículos más relacionados.
  * [Cómo asegurar y cifrar Nginx con Cifrar en Ubuntu 20.04][11]
  * [Apache vs Nginx - Comparación detallada en 2021][12]



[1]: #webserver
[2]: #loadbalancer
[3]: #setup
[4]: #upstream
[5]: #conclusion
[6]: https://products.containerize.com/solution-stack/nginx
[7]: https://twitter.com/containerize_co
[8]: https://www.linkedin.com/company/containerize/
[9]: http://facebook.com/containerize
[10]: mailto:yasir.saeed@aspose.com
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/2021/02/26/apache-vs-nginx-detailed-comparison-in-2021/
