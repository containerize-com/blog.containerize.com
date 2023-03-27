---
title: "Cómo configurar la aplicación múltiple en phplist" 
seoTitle: "Cómo configurar la aplicación múltiple en phplist" 
description: "Phplist es un software de boletín gratuito y de código abierto. Configure la aplicación múltiple en el inquilino y ejecute varias instancias de una aplicación en un entorno compartido." 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "Tutorial para desarrollar una aplicación múltiple en Phplist. La función de múltiples inquilinos utiliza una sola instalación para múltiples hosts para reducir los costos de alojamiento." 
url: /es/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

## Tutorial para desarrollar una aplicación múltiple en Phplist. La función de múltiples inquilinos utiliza una sola instalación para múltiples hosts para reducir los costos de alojamiento.

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="Aplicación de múltiples inquilinos Phplist">}}

En este artículo, cubriremos **qué es multi-tenancia**y cómo podemos configurar**aplicación multiinquilir** en Phplist.

## ¿Qué es Phplist?
Al decidir la estrategia de marketing, el marketing por correo electrónico es una parte clave de todas las empresas digitales en línea. Phplist permite a las empresas llegar a una gran audiencia. Phplist es ampliamente utilizado **Software de boletín de código abierto** para administrar listas y enviar boletines. Ayuda a las empresas a crear, programar, enviar y analizar campañas de boletines. Phplist admite características como análisis, segmentación, procesamiento de rebote, complementos, API y muchas más.

## ¿Qué es la tenencia múltiple?
Multi-Tenanc es una arquitectura en la que muchos clientes/sitios están representados por una sola instancia de una aplicación de software. En la tenencia múltiple, el sitio se considera un inquilino. Cada inquilino tiene características específicas como configuración, temas, SMTP.
Un aspecto importante de la computación en la nube es la tenencia múltiple. La **Arquitectura de múltiples inquilinos** ayuda a las empresas a lograr un mejor ROI mediante la disminución de los costos de mantenimiento y las rápidas actualizaciones de inquilinos. Además, las aplicaciones diseñadas en la arquitectura de multiiniendas pueden ser escalables fácilmente.
Podemos implementar múltiples tenientes utilizando los siguientes enfoques.
  * Base de datos compartida para todos los inquilinos.
  * Base de datos separada para cada inquilino.
Utilizaremos una base de datos separada para cada enfoque de inquilinos para implementar múltiples tenientes en Phplist.
  * [Flujo de solicitud de manejo][1]
  * [Configuración de la base de datos para el inquilino][2]
  * [Configurar nginx para el inquilino][3]

## Manejo del flujo de solicitud {#request}

  * Tome una copia de seguridad de su archivo config.php y puede encontrarlo en el directorio de configuración.
  * Cree un nuevo archivo config.php y agregue el siguiente código para manejar sitios/inquilinos.
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
Reemplace el ejemplo.com con su nombre de dominio. También debe crear un archivo de configuración para cada inquilino. Copie el archivo de copia de seguridad de config.php y guárdelo con un nuevo nombre como config.example.com.php.

## Configuración de la base de datos para el inquilino {#database}

  * Tome una copia de seguridad de la base de datos Phplist existente. Úselo para crear una base de datos para el nuevo inquilino.
  * Abra el archivo config.example.com.php. Cambie las credenciales de la base de datos y cualquier otra configuración según su entorno.

## Configurar nginx para el inquilino {#Nginx}

* Vaya al directorio NGINX **CD/ETC/NGINX/Sites disponible** .
  * Copie el archivo config.php predeterminado y guárdelo con el nombre de su sitio como ejemplo.com.
* Abra la configuración de Ejemplo.com con **sudo nano ejemplo.com** .
  * Cambie la ruta raíz, server_name y cualquier otra configuración.
* Configuraciones de prueba con **sudo nginx -t** 
* Finalmente, cree un enlace simbólico ejecutando **sudo ln -s /etc/nginx/sites-available/example.com/etc/nginx/sites-habilitado/** 
* Reinicie el servidor web Nginx ejecutando **SUDO SystemCTL reiniciar nginx** , para que pueda cargar el archivo de configuración recién creado.

## Conclusión
El software de múltiples tenientes tiene algunas ventajas en comparación con la aplicación de la Tenencia única, como reducir los costos de mantenimiento, el uso efectivo de los recursos y las actualizaciones fáciles de instalar. Si va a construir software SaaS (software como servicio), puede seguir la arquitectura de múltiples tenientes y disfrutar de su verdadero poder.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [Phplist - Boletín de código abierto y software de marketing por correo electrónico][4]
  * [Cómo crear y enviar un boletín con Phplist][5]
  * [Cómo configurar y procesar rebotes en Phplist][6]
  * [Guía para principiantes para desarrollar el complemento Phplist][7]
  * [Configurar reglas avanzadas de gestión y rebote en Phplist][8]



[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
