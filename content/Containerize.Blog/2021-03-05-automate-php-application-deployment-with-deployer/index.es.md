---
title: "Automatizar la implementación de la aplicación PHP con el implementador" 
seoTitle: "Automatizar la implementación de la aplicación PHP con el implementador" 
description: "Implemente la aplicación PHP con la herramienta de implementación de código abierto y automatice los flujos de trabajo de implementación. Lanzamiento fácilmente características y reversiones a la versión anterior." 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "Automatice el proceso de implementación de la aplicación PHP con la herramienta de implementación de PHP. Aprenderemos cómo configurar el implementador y usarlo para implementar la aplicación PHP." 
url: /es/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## Automatizar el proceso de implementación de la aplicación PHP con la herramienta de implementación de PHP. Aprenderemos cómo configurar el implementador y usarlo para implementar la aplicación PHP.

{{< figure align=center src="images/deployer-blog-post.png" alt="Herramienta de implementación de PHP">}}

Es un trabajo muy crítico implementar la aplicación en el servidor después del desarrollo. Los equipos a menudo son lanzadas por equipos. Por lo tanto, es preferible que los equipos eliminen el trabajo manual y automatice el proceso ** Implementación de software **. Permitiría que los equipos de software se concentren en tareas más importantes. Hay varias ** herramienta de implementación de código abierto **, pero nos concentraremos en ** PHP Deployer ** en este tutorial. Cubriremos la siguiente sección en esta publicación.
  *[** ¿Qué es el implementador **][1]
  *[** Instalación del implementador **][2]
  *[** Implementar la aplicación PHP **][3]
  *[** Conclusión **][4]

## ¿Qué es el implementador {#what}
[** desplegador **][5] es una herramienta de implementación de PHP gratuita y de código abierto **. Permite equipos de software para automatizar los flujos de trabajo de implementación para aplicaciones basadas en PHP. Es muy simple de instalar y fácil de usar. Cualquier persona, desde principiantes hasta la experiencia de nivel experto, puede usarlo rápidamente para implementar aplicaciones PHP. El implementador viene con recetas/scripts listos para usar para marcos PHP populares, CMS y software de carrito de compras. Además, puede hacer ** la implementación de Laravel ** con esta ** herramienta de implementación de código abierto **. El desarrollador puede usar recetas incorporadas para sus proyectos y usarlas para la implementación. Además, puede crear fácilmente script de instalación/implementación con el implementador ** PHP ** Asistente. Además, esta ** herramienta de implementación gratuita ** ofrece excelentes características como implementaciones de tiempo cero, reversión a la versión anterior, SSH, ejecución paralela y muchas más.

## Instalación del implementador {#Installing}
  * El implementador depende de PHP. Debe asegurarse de que PHP se esté ejecutando en su servidor. Sin embargo, puede usar el siguiente comando para instalar PHP en Ubuntu.
```
sudo apt-get install php
```
  * Ejecute los comandos a continuación uno por uno para instalar implementador.
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## Implementar la aplicación PHP {#deploy}
Siga las pautas paso a paso para ** Implementar la aplicación PHP ** con el implementador.
  * Cree un directorio para el implementador y navegue al directorio recién creado.
```
sudo mkdir deployer
cd deployer
```
  * Ejecute el siguiente comando a continuación para generar un script de instalación
```
dep init
```
  * Se le solicitará con la pantalla a continuación. Este es un asistente de implementador para crear un script de instalación básico.

{{< figure align=center src="images/deployer-1.png" alt="">}}

  * Primero, debe seleccionar el tipo de proyecto ingresando un número. Puede ingresar 0, si no está seguro del tipo de proyecto o simplemente se familiariza con el implementador.
  * En segundo lugar, debe proporcionar una ruta de repositorio Git. Es un paso opcional, puede omitirlo y agregar una ruta más tarde.
  * En el último paso, puede compartir información con la comunidad de implementadores seleccionando sí o ingrese no para omitirla.
```
<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'my_project');

// Project repository
set('repository', '');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
set('shared_files', []);
set('shared_dirs', []);

// Writable dirs by web server 
set('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('project.com')
    ->set('deploy_path', '~/{{application}}');    
    

// Tasks

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
```
Debe cambiar las siguientes variables para implementar su aplicación PHP.
  *** set ("aplicación", "my_project"); ** - Establecer el nombre de la aplicación.
  *** set ("repositorio", "); **-Establecer la ruta de repositorio de Git como" git@github.com: masood/first-app-with-deployer.git ". Debe establecer la clave de implementación en su repositorio de GitHub. Puede buscar cómo crear una tecla SSH en el servidor, si no está familiarizado con ella.
  *** Host ("Project.com")
    -> set ("implement_path", "~/{{aplicación}}"); ** -Establecer el nombre del proyecto y definir ruta donde desea almacenar archivos para su aplicación. Se vería como/var/www/html/implementer.
Finalmente, ejecute el siguiente comando a continuación para implementar su aplicación PHP.
```
dep deployer
```
Si encuentra algún problema con el nuevo lanzamiento y desea retroceder cambios. Puede hacerlo simplemente ejecutando el siguiente comando.
```
dep rollback
```

## conclusión {#conclusion}
Hemos discutido sobre el implementador y cómo instalarlo en este tutorial. Además, hemos creado una guía completa para implementar la aplicación basada en PHP del repositorio de GitHub. Con suerte, esta publicación de blog lo ayudará a iniciar ** Implementar la aplicación PHP ** con el implementador. Además, escribiremos más sobre esta herramienta de implementación ** PHP ** en los próximos tutoriales.
Finalmente, [** Contenerize.com **][6] se encuentra en un proceso consistente de escribir publicaciones de blog sobre otros productos de código abierto más recientes. Por lo tanto, manténgase en contacto con esta categoría [** Herramientas de implementación **][7] para las últimas actualizaciones.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  *[** desplegador **][8]
  *[** Jenkins **][9]
  *[** Drone **][10]
  *[** Capistrano **][11]
  *[** Rancher **][12]
  *[** Concurse **][13]
  *[** Ansible **][14]
  *[** GOCD **][15]
  *[** Top 5 Herramientas de implementación de código abierto en 2021 **][16]
  *[** Integración continua e implementación continua desde el servidor de control de origen **][17]

  
[1]: #What
[2]: #Installing
[3]: #Deploy
[4]: #Conclusion
[5]: https://deployer.org/
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/deployment-tools/
[8]: https://products.containerize.com/deployment-tools/deployer
[9]: https://products.containerize.com/deployment-tools/jenkins/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/capistrano/
[12]: https://products.containerize.com/deployment-tools/rancher/
[13]: https://products.containerize.com/deployment-tools/concourse/
[14]: https://products.containerize.com/deployment-tools/ansible/
[15]: https://products.containerize.com/deployment-tools/gocd/
[16]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[17]: https://blog.containerize.com/deployment-tools/automate-software-deployment-process-with-jenkins-and-github/
