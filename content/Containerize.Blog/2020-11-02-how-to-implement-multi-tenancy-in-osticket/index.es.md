---
title: "Personalización de Osticket: implementar múltiples tenientes en Osticket" 
seoTitle: "Personalización de Osticket: implementar múltiples tenientes en Osticket" 
description: "La implementación de la tenencia múltiple en Osticket puede ahorrar costos y la utilización de recursos. En este artículo, haremos la personalización de Osticket para lograr la tenencia múltiple." 
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: "El servicio de ayuda Osticket de múltiples inquilinos le permite crear múltiples inquilinos a partir de una sola instalación. Eso hace un uso óptimo de los recursos del servidor web." 
url: /es/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']
---

## El servicio de ayuda Osticket de múltiples inquilinos le permite crear múltiples inquilinos a partir de una sola instalación. Eso hace un uso óptimo de los recursos del servidor web.

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="Personalización de Osticket: implementar múltiples tenientes en Osticket">}}

En este artículo discutiremos cómo hacer la personalización de Osticket para implementar la tenencia múltiple. Esta publicación cubrirá los siguientes temas:
  * [Descripción general de Osticket][1]
  * [Descripción general de la tenencia múltiple][2]
  * [Beneficios de la tenencia múltiple][3]
  * [Implementación][3]
  * [Conclusión][4]

## Descripción general de Osticket: {#osticket}

[Osticket][5] es un software de mesa de ayuda basado en la web de soporte al cliente en línea de código abierto. Proporciona un panel de control intuitivo y un componente de informes en tiempo real. Tiene el módulo de gestión de consultas fáciles de usar. Esto le permite crear consultas desde su teléfono, correo electrónico y formularios basados ​​en la web. Que ofrece numerosas opciones para ayudar a adaptar todas las partes de la experiencia de soporte del cliente, como comentarios y notificaciones por correo electrónico.

## Descripción general de la tenencia múltiple: {#multitenancy}

Multi-tenencia se refiere a la implementación, donde múltiples instancias independientes de una aplicación operan en un entorno compartido. Las instancias (inquilinos) están lógicamente aisladas, pero físicamente integradas. Una organización posiblemente puede tener múltiples departamentos. Para que puedan crear múltiples inquilinos/instancias de la misma aplicación. Por ejemplo, en nuestro caso, un sistema de servicio de ayuda se puede configurar para diferentes dominios de la misma organización. Podría haber cientos de inquilinos, pero todos usarán los mismos archivos y, por lo tanto, el mismo almacenamiento. Esto reducirá los costos de almacenamiento, así como facilitará las actualizaciones. Los desarrolladores solo necesitan actualizar los archivos de un lugar en lugar de hacer cambios para cada sitio por separado.

## ¿Cuáles son los beneficios de la tenencia múltiple? {#benefits}

Aquí hay algunos beneficios cruciales de la tenencia múltiple
*  **Optimización de recursos:**   Una máquina reservada para un inquilino no es eficiente. Porque no es probable que un inquilino use toda la potencia informática de la máquina. Compartir máquinas maximizará la disponibilidad de recursos.
*  **Costos más bajos:**   con múltiples inquilinos que comparten los mismos recursos costarán mucho más bajo que si cada inquilino requiriera su propia infraestructura dedicada.
*  **Alojamiento eficiente:**   También Osticket de múltiples inquilinos reducirá los costos de alojamiento al mínimo en un entorno compartido.
*  **Seguridad:**   Con menos interacción con el mundo exterior, la exposición al software malicioso se reduce.
*  **Actualización fácil**  : Actualizar archivos solo en un lugar en lugar de actualizarlos por separado. Esto ahorrará mucho tiempo y esfuerzo.

## Implementación de Osticket de múltiples inquilinos: {#implementation}

  * Cree un nuevo nombres de base de datos vacías como "Main_DB".
  * Luego cree una tabla llamada "inquilino" que contendrá detalles sobre todos los inquilinos.
  * Tendrá los siguientes campos:
  1. Site_name
  2. URL
  3. DB_NAME

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="Personalización de Osticket: implementar múltiples tenientes en Osticket">}}

  * Sitio \ _Name El campo contendrá el nombre del inquilino. URL Field mantendrá la URL completa del inquilino. El campo DB \ _Name contendrá el nombre de la base de datos que se creará para el nuevo inquilino.
  * Después de ese archivo Open /include/ost-config.php y agregue el siguiente código
```
$url = $_SERVER['SERVER_NAME'];
$conn = new mysqli(DBHOST,DBUSER,DBPASS,DBSITES);
$sql = "select * from ost_sites where url = '$url'";
$res = $conn->query($sql);
$row = $res->fetch_array();


if ($url == $row['url']) {
	define('DBNAME',$row['db_name']);
} else {
	define('DBNAME','dynabic_osticket');
}

```
  * Este código actualizará la conectividad de base de datos predeterminada. Primero obtendrá la URL del inquilino actual. Luego obtendrá el nombre de la base de datos de acuerdo con esa URL. Así es como la aplicación sabrá a qué base de datos conectarse. Cada inquilino tendrá una base de datos separada. La base de datos se seleccionará sobre la base de la URL del inquilino.
  * Para crear un nuevo inquilino, simplemente configure el nuevo dominio del inquilino en el servidor NGINX. Después de eso, simplemente copie la base de datos actual de Osticket y cambie el nombre. Finalmente, agregue la entrada a la tabla "Inquilino" de la base de datos "Main_DB".

## Conclusión: {#conclusion}

Osticket es un software de gestión de la mesa de ayuda gratuito y de código abierto. Hemos aprendido cómo hacer personalizaciones de Osticket para implementar múltiples tenientes en Osticket para poder ahorrar costos, optimizar la aplicación y menores requisitos de recursos. Hará que la vida sea más fácil para los desarrolladores crear nuevos inquilinos en algunos pasos simples. Por lo tanto, cree múltiples inquilinos de Osticket a partir de la misma instalación.

## Explorar:
Vea la página siguiente para obtener más información sobre Osticket:
  * [Osticket: un software de servicio de ayuda de código abierto gratuito][5]
  * [Una guía para principiantes para desarrollar el complemento Osticket][6]
  * [Cómo configurar el software de la mesa de ayuda en línea usando Osticket][7]
  * [Automatizar el sistema de tickets usando WordPress y Osticket][8]



 [1]: #osticket
 [2]: #multitenancy
 [3]: #benefits
 [4]: #conclusion
 [5]: https://products.containerize.com/helpdesk/osticket
 [6]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
 [7]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
 [8]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
