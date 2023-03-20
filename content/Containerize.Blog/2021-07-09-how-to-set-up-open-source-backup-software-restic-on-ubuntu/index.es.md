---
title: "Cómo configurar el software de copia de seguridad de código abierto Restic en Ubuntu" 
seoTitle: "Cómo configurar el software de copia de seguridad de código abierto Restic en Ubuntu" 
description: "Restic es un software de respaldo de código abierto rápido, seguro y uno de los mejores de seguridad de código abierto. Admite AWS S3, Microsoft Azure, Google Cloud y otras opciones de backend." 
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: "Realice una copia de seguridad con el software de copia de seguridad de código abierto y guárdelo localmente o en backends externos. Restic es multiplataforma y admite múltiples tipos de almacenamiento." 
url: /es/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']
---

## tome una copia de seguridad con software de copia de seguridad de código abierto y guárdelo localmente o en backends externos. Restic es multiplataforma y admite múltiples tipos de almacenamiento.

{{< figure align=center src="images/restic-post-banner.png" alt="Software de copia de seguridad de código abierto">}}

Un sistema de respaldo es realmente importante tanto para empresas como para individuos. Los datos se pueden perder por varias razones, como un ataque cibernético, falla del sistema, eliminación accidental y muchas más. Debe tener una buena estrategia de respaldo para poder restaurar sus datos rápidamente. Esta guía le mostrará cómo instalar y utilizar el software de copia de seguridad ** Open Source ** Restic en su servidor Ubuntu.
Hemos cubierto las siguientes secciones en este tutorial.
  *[** Prerrequisitos **][1]
  *[** ¿Qué es Restic? **][2]
  *[** Instalación Restic **][3]
  *[** Configuración restante **][4]
  *[** Alternativas a Restic **][5]
  *** [Conclusión][6] **

## Requisitos previos {#Preequisites}
El programa de software de respaldo Restic admite los tres principales sistemas operativos Linux, MacOS y Windows. Antes de instalar ** copia de seguridad restante **, debe cumplir con los siguientes requisitos del sistema.
  * Sistema de máquina o de escritorio con sistema operativo Ubuntu que alberga los datos a respaldar
  * Una última instancia de servidor de Ubuntu
  * Autenticación de clave SSH configurada entre los dos clientes y servidores
  * Usuario no raíz con privilegios de sudo
Con estos bits en la mano, nos mudemos y pongamos a trabajar.

## ¿Qué es Restic? {#Restic}
[** Restic **][7] es una fantástica herramienta de copia de seguridad de código abierto **. Es una utilidad de copia de seguridad gratuita ** que es rápida, segura y eficiente. Es un programa de copia de seguridad multiplataforma, por lo que se ejecutará en Linux, BSD, Mac OS X y Windows. El software de copia de seguridad de código abierto Restic Best es fácil de ejecutar y no requiere un servidor o una configuración complicada. Crea una copia de seguridad de los datos modificados y permite a los usuarios restaurarlos cuando sea necesario. Además, proporciona una variedad de opciones de almacenamiento, que incluyen almacenamiento autohostado e Internet. Además, Restic Open Source Auto Hosted Cloud Storage utiliza técnicas criptográficas robustas para proteger sus datos.
Restic no es una utilidad simple de copia de archivos. Se basa principalmente en dos conceptos: instantáneas y repositorios. ** RESTIC ** Solución de copia de seguridad de código abierto guarda la información como una instantánea, que luego se guarda en un repositorio. Está escrito en el lenguaje de programación GO. La utilidad de copia de seguridad basada en GO Restic y la aplicación de copia de seguridad de código abierto funcionan sin problemas con muchos sistemas de almacenamiento de back -end locales. El código fuente del software de copia de seguridad de archivo de código abierto Restic está disponible en [** GitHub **][8]. Sin embargo, puede encontrar detallado [** documentación **][9] para la instalación y el uso.
La copia de seguridad de la nube de Restic Self Hosted es compatible con los siguientes backends para el almacenamiento de copia de seguridad.
  * Directorio local
  * Servidor SFTP (a través de SSH)
  * Servidor de descanso
  * AWS S3
  * Minio servidor
  * Wasabi
  * Nube de alibaba
  * OpenStack Swift
  * Backblaze B2
  * Microsoft Azure Blob Storage
  * Almacenamiento en la nube de Google
Puede usar [** rclone **][10] para varios backends además de los mencionados anteriormente.

## Instalación restante {#Installation}
Hay varias formas de instalar el mejor almacenamiento de la nube de Restic Best Auto Hosted en su sistema operativo Ubuntu. Cubriremos la instalación del almacenamiento de archivos de Restic Self Hosted utilizando el paquete Ubuntu, Docker y el código fuente.

### Instalación usando el paquete
  * Ejecute el comando a continuación para instalar el servidor de copia de seguridad de código abierto Restic Open en el sistema operativo Ubuntu.
```
$ sudo apt-get install restic
```

### Instalación usando Docker
  * Obtenga la imagen de Restic de Dockerhub.
```
$ docker pull restic/restic
```

### Instalación usando la fuente
  * Primero, debe instalar el lenguaje de programación GO para configurar Restic desde la fuente. Puede visitar el sitio web oficial [** Golang **][11] para obtener las instrucciones para instalar GO.
  * A continuación, ejecute los comandos a continuación para instalar una copia de seguridad incremental restante.
```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```
  * Al especificar el sistema operativo objetivo en el comando, puede compilar rápidamente Restic para todas las plataformas compatibles. Aquí están algunos ejemplos.
```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```

## Configuración restante {#Configuration}
Como ya hemos mencionado anteriormente, ese sistema de copia de seguridad de código abierto restante se basa en instantáneas y repositorios para la copia de seguridad. Echemos un vistazo a cómo configurar un repositorio, tomar una instantánea y luego restaurar la copia de seguridad.

### Crear repositorio
  * Ejecute el siguiente comando para inicializar el repositorio. También debe establecer una contraseña para el repositorio.
```
$ restic init --repo /tmp/
```

### Datos de copia de seguridad a un directorio local
  * En el primer paso, hemos creado un repositorio para almacenar los datos. Ahora, agregaremos datos al repositorio para la copia de seguridad. Ejecutar el siguiente comando.
```
$ restic --repo /tmp/backup backup ~/work
```

### Restaurar la copia de seguridad
  * El comando de restauración restaura archivos y directorios. Los archivos no se restauran a su ubicación original mientras usan la copia de seguridad de la nube de código abierto Restic. Debe elegir una ubicación de destino para que los archivos sean restaurados por Restic.
```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```
  * Sin embargo, puede restaurar la última instantánea sin especificar la ID de instantánea. Debe agregar el último parámetro en el comando como se muestra a continuación.
```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```

### trabajando con instantáneas
En esta sección, veremos algunas de las características de las instantáneas.
  * Ejecute el siguiente comando para enumerar los snaphosts.
```
$ restic snapshots -r /tmp/backup
```
  * Puede comparar dos instantáneas con el siguiente comando.
```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```
  * Es posible que deba eliminar una copia de seguridad antigua para liberar espacio de almacenamiento. Para eliminar una instantánea, ejecute el comando a continuación.
```
$ restic -r /srv/restic-repo forget bdbd3439
```

## Alternativas a Restic
Restic es la aplicación de software de respaldo de código abierto más popular y garantiza la confidencialidad e integridad de sus datos importantes de archivos. Las siguientes son las alternativas más populares y los principales competidores a la herramienta de copia de seguridad de datos RESTIC.
  * Glaciar amazónico
  * Replicación
  * RunRestic
  * AFI
  * Respaldo del día de lluvia
  * Borg
  * Copia de seguridad de Veeam
  * AWS Storage Gateway
  * Cohesión

## Conclusión
En este artículo, cubrimos el software de copia de seguridad de código abierto de Repestic ** GRATIS **. También discutimos varias técnicas de instalación, así como cómo crear una copia de seguridad y cómo restaurar la copia de seguridad. Hay muchas otras formas de almacenamiento de respaldo de datos, y acabamos de abordar una en este artículo. Los tipos de almacenamiento de backend restantes se cubrirán en futuras publicaciones. Esperamos que este tutorial sirva como punto de partida para que use la mejor herramienta de copia de seguridad de código abierto Restic para tomar y restaurar copias de seguridad.
Finalmente, [** Contenerize.com **][12] se encuentra en un proceso consistente de escribir publicaciones de blog sobre otros productos de código abierto más recientes. Por lo tanto, manténgase en contacto con esta categoría [** Software de copia de seguridad **][13] para las últimas actualizaciones.
_ ¿Cuáles son su software de copia de seguridad gratuito y de código abierto favorito? ¿Tiene alguna pregunta sobre el software de copia de seguridad de código abierto?, Por favor_ [Póngase en contacto][14].

## Explorar:
También tenemos otra información relacionada de OSS Watch:
  * [Top 5 Software de almacenamiento en la nube de código abierto en 2021][15]
  * [Cómo instalar NextCloud con Apache en el servidor Ubuntu][16]
  * [Instale y configure OwnCloud con Apache en Ubuntu][17]
  * [Cómo instalar la plataforma de intercambio y sincronización de archivos Pydio en Ubuntu][18]
  * [NSQ vs Kafka | ¿Cuáles son las diferencias clave?][19]
  * [NextCloud vs OwnCloud | ¿Cuáles son las diferencias?][20]
  * [El mejor software de almacenamiento en la nube de código abierto y compartir archivos][21]

  
[1]: #Prerequisites
[2]: #Restic
[3]: #Installation
[4]: #Configuration
[5]: #Alternativestorestic
[6]: #Conclusion
[7]: https://restic.net/
[8]: https://github.com/restic/restic
[9]: https://restic.readthedocs.io/
[10]: https://rclone.org/
[11]: https://golang.org/doc/install
[12]: https://containerize.com
[13]: https://blog.containerize.com/category/backup-software/
[14]: mailto:yasir.saeed@aspose.com
[15]: https://blog.containerize.com/backup-and-sync-software/top-5-open-source-cloud-storage-software-in-2021/
[16]: https://blog.containerize.com/backup-and-sync-software/how-to-install-nextcloud-with-apache-on-ubuntu-server/
[17]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[18]: https://blog.containerize.com/backup-and-sync-software/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
[19]: https://blog.containerize.com/backup-and-sync-software/nsq-vs-kafka-what-are-the-key-differences/
[20]: https://blog.containerize.com/backup-and-sync-software/nextcloud-vs-owncloud-what-are-the-differences/
[21]: https://products.containerize.com/backup-and-sync/
