---
title: "Cómo migrar de WordPress a Jekyll" 
seoTitle: "Cómo migrar de WordPress a Jekyll" 
description: "En este tutorial aprenderemos cómo migrar su sitio de WordPress a Jekyll en pasos rápidos y fáciles. ¡Empecemos!" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "En este tutorial, aprenderemos cómo migrar su sitio web de WordPress a Jekyll y lo hostemos con GitHub sin costo" 
url: /es/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

## En este tutorial aprenderemos cómo migrar su sitio web de WordPress a Jekyll y alojarlo con GitHub sin costo

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="WordPress a Jekyll">}}

Jeykll es un generador de sitio estático de código abierto. Transforma su texto plano en sitios web y blogs estáticos. Toma texto escrito en su lenguaje de marcado favorito (Markdown, Liquid, HTML / CSS) y utiliza diseños para crear un sitio web estático. Jekyll es un blog consciente y enlaces permanentes, categorías, páginas, publicaciones y diseños personalizados son todos ciudadanos de primera clase. Uno de los mayores beneficios de Jekyll es que puede alojar su sitio web estático en las páginas de GitHub y ejecutar su sitio web o blog sin costo. Por lo tanto, WordPress a Jekyll Migration puede ayudarlo a mejorar el rendimiento y la velocidad de su sitio web.
En esta publicación de blog revisaremos cómo migrar su sitio web o blog existente de WordPress a Jekyll para una mejor velocidad y rendimiento. ¡Entonces empecemos!
*  **[¿Por qué migrar?][1]**  
*  **[Instalación][2]**  
*  **[Importar publicaciones y páginas de WordPress en][3]**  
*  **[Implementación con páginas GitHub][4]**  
*  **[Conclusión][5]**  

## ¿Por qué migrar? {#why}

En Jekyll, puede obtener un 100/100 [puntaje del faro][6] porque no hay interacciones de base de datos. Y, todo el contenido está preprocesado y guardado como archivos HTML. Y Jekyll solo hará una cantidad mínima de solicitudes HTTP. Por lo tanto, es súper rápido.

## Instalación y configuración de jekyll {#install}

Jekyll está escrito en Ruby. Por lo tanto, debe instalarlo primero en su computadora. Esta guía supone que ya tiene Ruby instalado en su computadora. Si no, puede seguir la [Guía oficial][7].
Primero, "  **jekyl** " y "  **Bundler**  " gemas usando el comando " **gema**  " que estará disponible después de instalar Ruby. Abra la línea de comando y ejecute el siguiente código.
```
gem install jekyll bundler
```
Luego, ejecute el siguiente comando para crear un sitio nuevo. Esto creará una carpeta  **myBlog**  .
```
jekyll new myblog
```
Una vez instalado, puede construir el sitio y ponerlo a disposición en un servidor local.
```
bundle exec jekyll serve
```
El sitio estará disponible en http: // localhost: 4000. También genera una carpeta "  **_ sitio**  " en su carpeta, eso es la salida final del sitio.

## Importar páginas y publicaciones de WordPress {#import}

También está disponible un complemento no oficial para WordPress, pero seguiremos el método oficial en este tutorial. Si desea probar el complemento de exportador de WordPess, puede [ir aquí][8].
Para importar sus publicaciones desde un sitio web de WordPress autoestrado, ejecute el siguiente comando en su terminal.
```
ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"         => "",
      "user"           => "",
      "password"       => "",
      "host"           => "localhost",
      "port"           => "3306",
      "socket"         => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'
```
Esto solo importa publicaciones y datos y contenido de la página. Este importador solo convierte sus publicaciones y crea Yaml Front-Matter. No importa ningún diseño, estilo o archivos externos (imágenes, CSS, etc.).

##  **Implementación con páginas GitHub**  {#deploy}

Hasta ahora, creamos nuestro blog Jekyll localmente. Ahora lo vamos a implementar en GitHub. En primer lugar, tenemos que controlar las versiones nuestro sitio usando [GIT][9]. Ejecute los siguientes comandos en la carpeta del sitio.
```
git init
git add .
git commit -m "Initial Commit"
```
Al instalar Jekyll, debe crear automáticamente un archivo "  **. Gitignore**  " en la raíz con al menos el siguiente contenido.
Luego, inicie sesión en GitHub y cree un nuevo repositorio yourname.github.io
A continuación, copie la URL HTTPS del repositorio.

{{< figure align=center src="images/github-img.png" alt="URL GitHub HTTPS">}}

Luego, agregue el repositorio remoto y presione el código.
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
¡Hecho! Su sitio ahora debe estar disponible en YourName.github.io

## Conclusión {#conclusion}

En este artículo, aprendimos a construir un blog estático con sitios de Jekyll. Luego, aprendimos a exportar sus publicaciones y páginas de WordPress a Jekyll. Y finalmente, implementamos el sitio final en las páginas de GitHub.



 [1]: #why
 [2]: #install
 [3]: #import
 [4]: #deploy
 [5]: #conclusion
 [6]: https://web.dev/performance-scoring/
 [7]: https://www.ruby-lang.org/en/documentation/installation/
 [8]: https://wordpress.org/plugins/jekyll-exporter/
 [9]: https://git-scm.com/
