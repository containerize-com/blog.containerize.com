---
title: "Guía para principiantes para crear una plantilla básica de Joomla" 
seoTitle: "Guía para principiantes para crear una plantilla básica de Joomla" 
description: "Joomla es un popular sistema de gestión de contenido de código abierto. En este tutorial, explicaremos paso a paso cómo crear una plantilla de Joomla." 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomla es uno de los sistemas de gestión de contenido de código abierto más populares. Este tutorial lo guiará a través de los pasos necesarios para crear una plantilla de Joomla desde cero." 
url: /es/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomla es uno de los sistemas de gestión de contenido de código abierto más populares. Este tutorial lo guiará a través de los pasos necesarios para crear una plantilla de Joomla desde cero.

{{< figure align=center src="images/joomla-templates-2.png" alt="Plantilla básica de Joomla">}}

En esta era digital, un sistema de gestión de contenido es una necesidad básica de cualquier negocio para todas sus necesidades de creación de contenido. Y, hay una serie de software de código abierto y CMS pagado disponible en el mercado. También hemos [enumerados][1] algunos de los mejores software de gestión de contenido de código abierto para empresas. Joomla es uno de los software CMS de código abierto más popular y en este tutorial lo guiaremos paso a paso y explicaremos cómo crear una plantilla de Joomla desde cero. ¡Entonces empecemos!
** Nota: Asumimos que tiene instalada la versión de Joomla 2.5 **
  *** [Estructura de directorio de configuración][2] **
  *** [Crear un archivo básico de platlatedetails.xml][3] **
  *** [Crear un archivo básico index.php][4] **
  *** [Descubrir e instalar plantilla][5] **
  *** [Empaque la plantilla][6] **
  *** [Conclusión][7] **

## Configuración de la estructura del directorio {#setup}
Para crear una plantilla de Joomla muy básica primero, cree una nueva carpeta en la carpeta de plantillas. Nombra la carpeta como quieras llamar tu plantilla, por ejemplo, "** myNewtemplate **".
Usando su editor de texto favorito, cree los archivos ** index.php ** y ** Templatedetails.xml **. Para administrar sus imágenes y hojas de estilo, haga 2 nuevas carpetas llamadas ** Imágenes ** y ** CSS **. Dentro de la carpeta ** CSS ** Cree un archivo llamado ** Template.css **.
Su estructura de directorio se verá así

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="Estructura del directorio de plantilla de Joomla">}}


## Crear un archivo básico de platlatedetails.xml {#XML}
El archivo ** Templatedetails.xml ** contiene todos los metadatos sobre su plantilla. Y, este archivo es esencial sin él, ¡su plantilla no será vista por Joomla!.
```
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mynewtemplate</name>
	<creationDate>2008-05-01</creationDate>
	<author>Auther Name</author>
	<authorEmail>auther@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Auther Name 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.0</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```
Los contenidos de la plantilla de cola.xml se explican por sí mismas. Simplemente puede copiar el contenido de modificar los bits necesarios.
Deje las posiciones como son: estos son un conjunto común, por lo que podrá cambiar fácilmente de las plantillas estándar.

## Crear un archivo básico index.php {#php}
¡Index.php se convierte en el archivo de arranque principal de cada página que Joomla! entrega. Esta página mostrará el código básico listo para que pueda cortar y pegar en su propio diseño.
```
<?php defined('_JEXEC') or die('Restricted access');?>
<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<jdoc:include type="modules" name="top" /> 
<jdoc:include type="component" />
<jdoc:include type="modules" name="footer" />
</body>
</html>
```

## Discover e instalar plantilla {#install}
¡Primero necesitas decirle a Joomla! que has creado una nueva plantilla. Esta característica se llama extensiones Discover y se puede acceder a través de
```
Extensions -> Extension Manager -> Discover
```
Haga clic en el botón Descubrir para descubrir su plantilla, luego seleccione y haga clic en Instalar para instalarla. Ahora su plantilla debe aparecer en el Administrador de plantillas (estilos), accesibles a través de
```
Extensions -> Template Manager
```

## Empaque la plantilla {#packge}
Un directorio descomprimido con varios archivos no es un buen método para la distribución. Entonces, en aras de la distribución, debemos crear un paquete de nuestra plantilla. El paquete puede estar en formato zip (con una extensión .zip).
Si su plantilla está en un directorio mytemplate/, para hacer el paquete, puede conectarse a ese directorio y usar comandos como:
```
zip -r ..\mytemplate.zip .
```

## conclusión {#conclusion}
En este artículo, aprendimos sobre la plantilla de Joomla. Pasamos paso a paso sobre cómo crear una plantilla de Joomla. Este es solo un tutorial muy básico para comenzar con la creación de plantillas. Por supuesto, puede construir una plantilla muy personalizada y mejorada basada en esta estructura de hueso desnudo.

## Páginas de productos relevantes
Puede encontrar los siguientes enlaces relevantes:
  * [Guía de desarrollo de plantillas de Joomla para los principiantes][8]

  
[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
