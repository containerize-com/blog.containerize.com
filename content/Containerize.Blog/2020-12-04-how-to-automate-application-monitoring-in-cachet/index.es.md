---
title: "Cómo automatizar el monitoreo de aplicaciones web en el caché" 
seoTitle: "Cómo automatizar el monitoreo de aplicaciones web en el caché" 
description: "El caché ayuda a monitorear todos sus servicios y notificar instantáneamente a los suscriptores. Este artículo trata sobre la integración del complemento de terceros para automatizar el monitoreo." 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "La página de estado del caché permite a las empresas obtener notificaciones instantáneas sobre el tiempo de inactividad del servicio. Aprenderemos cómo automatizar el monitoreo de aplicaciones web en el caché." 
url: /es/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

## La página de estado del caché permite a las empresas obtener notificaciones instantáneas sobre el tiempo de inactividad del servicio. Aprenderemos cómo automatizar el monitoreo de aplicaciones web en el caché.

{{< figure align=center src="images/cachet-monitor.png" alt="Monitoreo de aplicaciones web">}}

El monitoreo de aplicaciones y servicios es una parte muy importante del negocio en línea. Su sitio web ejecuta 24x7 y puede equivocarse en cualquier momento. No puede saber que cualquiera de los sitios funcione o no hasta que lo visite. Además, los clientes no tendrán información sobre el problema. Pueden comunicarse con su equipo de soporte para el tiempo de inactividad del servicio. Además, esto podría llevar a que sus clientes se decepcionen. Sin embargo, puede reducir el tiempo de inactividad del servicio configurando el sistema de página de estado. El sistema de página de estado supervisará todos sus servicios durante todo el reloj y enviará notificaciones a su equipo y clientes de inmediato. Esto le permitirá tomar medidas rápidas para solucionar el problema y los clientes se mantendrán actualizados sobre el progreso. En esta publicación de blog, aprenderá a integrar la biblioteca de terceros con **caché  **para **  automatizar el monitoreo** .
  * [Requisitos][1]
  * [Complemento de monitoreo de configuración][2]
  * [Creación de servicio Linux][3]
  * [Conclusión][4]

## Requisitos   {#Requirements}
  * Instale la última versión del caché.
  * Familiarizado con los servicios de Linux.

## complemento de monitoreo de configuración   {#plugin}
Los siguientes son pasos para instalar y configurar el complemento para monitorear en Ubuntu.
  * Descargue binario desde [página de lanzamiento][5].
  * Cambie el nombre del archivo a monitor de caché.
  * Haga que el archivo sea ejecutable con el comando.
```
sudo chmod +x cachet-monitor
```
  * Coloque el ejecutable en un directorio de ruta, para que pueda acceder a él directamente a través del terminal. Entonces, le sugiero que se mueva bajo **/usr/local/bin **.
  * Cree un archivo config.json ejecutando el siguiente comando.
```
sudo nano config.json
```
  * Copie el siguiente código en él y guarde el archivo.
```
{
  "api": {
    "url": "https://demo.cachethq.io/api/v1",
    "token": "9yMHsdioQosnyVK4iCVR",
    "insecure": false
  },
  "date_format": "02/01/2006 15:04:05 MST",
  "monitors": [
    {
      "name": "google",
      "target": "https://google.com",
      "strict": true,
      "method": "POST",
      "component_id": 1,
      "metric_id": 4,
      "template": {
        "investigating": {
          "subject": "{{ .Monitor.Name }} - {{ .SystemName }}",
          "message": "{{ .Monitor.Name }} check **failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
        },
        "fixed": {
          "subject": "I HAVE BEEN FIXED"
        }
      },
      "interval": 1,
      "timeout": 1,
      "threshold": 80,
      "expected_status_code": 200
    }
  ]
}
```
  * Ahora, pruebe su configuración con este comando.
```
cachet-monitor -c config.json
```
  * Si todo funciona bien, muévase a la siguiente sección y cree un servicio Linux.

## Crear servicio Linux   {#Service}
Los siguientes son pasos para crear e iniciar un servicio Linux para automatizar el proceso de monitoreo.
  *Crear un servicio **Cachete-monitor.service**  archivo.
```
sudo nano cachet-monitor.service
```
  * Copie el siguiente código en él y guarde el archivo.
```
[Unit]
Description=Cachet Monitor
After=syslog.target
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/usr/local/sbin
ExecStart=cachet-monitor -c /root/config.json
Restart=always
Environment=USER=root HOME=/root

[Install]
WantedBy=multi-user.target
```
  * Actualice la configuración del sistema ejecutando el comando.
```
sudo systemctl daemon-reload
```
  * Habilitar el servicio de monitor de caché ejecutando el comando, para que pueda cargarse en el inicio del sistema.
```
sudo systemctl enable cachet-monitor.service
```

## conclusión   {#conclusion}
El caché A es gratuito y **Página de estado de código abierto  **Sistema. Sin embargo, no proporciona la función fuera de la caja para **  Monitoreo de aplicaciones web** . En cambio, tiene una poderosa API REST que puede usarse para realizar acciones como incidentes, componentes, grupos y muchos más. En este artículo, hemos utilizado el complemento de terceros para automatizar el monitoreo de aplicaciones en el caché. Sobre todo, puede desarrollar su propio complemento o usar cualquier otro complemento existente para hacer el trabajo.
Además, [Contenerize.com][6] está en camino para mejorar la pila de productos de código abierto en múltiples idiomas y marcos. Para actualizaciones regulares, estén atentos a la categoría [7][7] para obtener artículos más interesantes.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [Los mejores sistemas de página de estado de código abierto][8]
  * [Cachete: software de página de estado de código abierto y de código abierto][9]
  * [Software de la página de estado de código abierto Top 5 para 2020][10]

  
[1]: #Requirements
[2]: #Plugin
[3]: #Service
[4]: #Conclusion
[5]: https://github.com/CastawayLabs/cachet-monitor/releases
[6]: https://www.containerize.com/
[7]: https://blog.containerize.com/category/status-page
[8]: https://products.containerize.com/status
[9]: https://products.containerize.com/status/cachet
[10]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
