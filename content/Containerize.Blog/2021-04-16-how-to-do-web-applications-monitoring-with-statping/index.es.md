---
title: "Cómo hacer un monitoreo de aplicaciones web con estaduto" 
seoTitle: "Cómo hacer un monitoreo de aplicaciones web con estaduto" 
description: "Statping es una de las mejores herramientas de monitoreo de sitios web que le permite monitorear todos los servicios. Renderiza la hermosa página de estado para el tiempo de actividad de los servicios de exhibición." 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "Monitoree automáticamente sus sitios web, aplicaciones web, API con herramientas de monitoreo gratuitas y muestran el tiempo de actividad de los servicios con un sistema de página de estado de código abierto." 
url: /es/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

## Monitoree automáticamente sus sitios web, aplicaciones web, API con herramientas de monitoreo gratuitas y muestran tiempo de actividad de servicios con un sistema de página de estado de código abierto.

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="Monitoreo de aplicaciones web">}}

Statping es un **Software de página de estado de código abierto** y una de las mejores herramientas de monitoreo de sitios web**. También se utiliza para el monitoreo de servicios como los servicios HTTP, TCP, UDP, ICMP y GRPC. Estadificar obtiene automáticamente los servicios, monitorearlos y representar una hermosa página de estado. Es multiplataforma y puede instalarlo en sistemas operativos Liunx, Mac y Windows. Además, permite usar MySQL, Postgres o sistema de base de datos SQLite para almacenar información. Además, viene con aplicaciones móviles fuera de la caja para iPhone y dispositivos Android.
Echemos un vistazo a las características centrales del estadificación.
* **Monitoreo de servicios** : el estaduto le permite rastrear fácilmente todos sus servicios HTTP, TCP, UDP, GRPC e ICMP.
* **Notificaciones** -El estadísticas respalda la mayoría de las principales solicitudes de terceros para recibir notificaciones.
* **Aplicación móvil** - Use la aplicación gratuita para dispositivos iPhone y Android y administre todo sobre la marcha.
* **OAUTH AUTHENTICATIO** N - Admite la autenticación OAuth para servicios populares como GitHub, Google, Slack y OpenId Provider. Use esta característica y aumente la seguridad.
Cubriremos los siguientes temas en este tutorial.
  * [Instalación en Linux][1]
  * [Configurar el servicio Systemd][2]
  * [Crear servicio para el monitoreo][3]
  * [Conclusión][4]

## Instalación en Linux {#Installing}

Ejecute el comando a continuación para la instalación de estadificación.
```
curl -o- -L https://statping.com/install.sh | bash
```

## Configurar el servicio Systemd {#Configure}

Configurar un servicio Systemd es una excelente manera de garantizar que su servidor de estadegos pueda reiniciarse automáticamente cuando sea necesario. Para crear un servicio Systemd, siga los pasos a continuación.
  * Primero, ejecute el siguiente comando para crear un archivo nuevo.
```
sudo nano /etc/systemd/system/statping.service
```
  * Copie el siguiente código y péguelo en él.
```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```
  * Finalmente, use los comandos a continuación para habilitar e iniciar el servicio Systemd.
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## Crear servicio para monitoreo {#Create}

  * Abra su navegador, ingrese URL para iniciar sesión en su instalación de estadificación.
  * Haga clic en el enlace de servicios en la navegación superior. Le mostrará la página de servicios que se ve a continuación.

{{< figure align=center src="images/statping-dashboard.png" alt="Lista de monitoreo de servicios web">}}

  * Haga clic en el botón Crear para agregar un nuevo servicio para el monitoreo. Complete los campos requeridos, como el nombre del servicio, el tipo de servicio, el intervalo de verificación, el punto final del servicio (URL), etc.

## Conclusión {#Conclusión}

Aprendimos sobre el estadificación, cómo instalarlo en Linux y cómo crear un servicio Systemd en este tutorial. Además, hemos creado un nuevo servicio para monitorear y presentarle sobre diferentes características. Esperamos que esta guía lo ayude a comenzar a usar el estadegamiento para realizar **monitoreo del servicio web**y**Monitoreo de aplicaciones web** .
Finalmente, [ **Contenerize.com**][5] se encuentra en un proceso consistente de escribir publicaciones de blog sobre otros productos de código abierto más recientes. Por lo tanto, manténgase en contacto con esta categoría [**Página de estado** ][6] para las últimas actualizaciones.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
* [ **Top 5 Software de página de estado de código abierto para 2020** ][7]
* [ **Estadizamiento** ][8]
* [ **Cachete** ][9]
* [ **Monitoror** ][10]
* [ **Staytus** ][11]
* [ **Upptime** ][12]
* [ **statusfy** ][13]



[1]: #Installing
[2]: #Configure
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/status-page/
[7]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
[8]: https://products.containerize.com/status/statping
[9]: https://products.containerize.com/status/cachet/
[10]: https://products.containerize.com/status/monitoror/
[11]: https://products.containerize.com/status/staytus/
[12]: https://products.containerize.com/status/upptime/
[13]: https://products.containerize.com/status/statusfy/
