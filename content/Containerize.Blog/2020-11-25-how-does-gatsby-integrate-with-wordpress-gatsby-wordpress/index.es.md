---
title: "¿Cómo se integra Gatsby con WordPress? | Gatsby WordPress" 
seoTitle: "¿Cómo se integra Gatsby con WordPress? | Gatsby WordPress" 
description: "Use Gatsby WordPress juntos para mejorar la velocidad, escalabilidad y seguridad de su sitio web. En este tutorial, aprenderá cómo usar este software de código abierto." 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "Configure Open Source Gatsby con su WordPress para aportar una mayor experiencia del usuario y rendimiento general. Aprendamos cómo usar este generador de sitios estáticos." 
url: /es/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## Configure Open Source Gatsby con su WordPress para aportar una mayor experiencia del usuario y rendimiento general. Aprendamos cómo usar este generador de sitios estáticos.

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="Gatsby WordPress">}}


## Descripción general
GatsByJS es un generador de sitios estático alimentado por GraphQL basado en GraphQL de código abierto y gratuito. Utiliza una potente preconfiguración para construir un sitio web que use solo archivos estáticos para cargas de página increíblemente rápidas. WordPress es una gran plataforma de blogs de código abierto. Como resultado, hay muchas personas que saben cómo averiguar si un sitio es un sitio de WordPress para que puedan piratearlo y robar información. El uso de Gatsby WordPress juntos le dará el mismo poder de la gestión de contenido de WordPress y la velocidad del Gatsby.
En este artículo, veremos qué es Gatsby y por qué necesita usarlo con el software CMS. Luego, entraremos en detalles sobre cómo usar WordPress y Gatsby juntos para construir una experiencia de sitio web increíble. ¡Empecemos!
  *[**¿Qué es Gatsby** ?][1]
  ***[Pros y contras de usar WordPress y Gatsby][2]** 
  ***[Cómo usar Gatsby con WordPress][3]** 
  ***[Conclusión][4]** 

## ¿Qué es Gatsby   {#gatsby}
Gatsby es un generador de sitios estático. Esto significa que Gatsby genera los archivos HTML estáticos que se cargan al servidor de su sitio web. Cuando un visitante aterriza en su sitio, estos archivos estáticos se sirven a su navegador, en lugar del contenido dinámico que WordPress generalmente sirve. Es un marco de código abierto y gratuito basado en React que ayuda a los desarrolladores a construir sitios web y aplicaciones de rápido rápido.

## Pros y contras de usar WordPress y Gatsby   {#Proscons}
Según el funcionario [documentos] de Gatsby [5], han compilado una mesa, para quien la combinación de Gatsby WordPress es grande y para quien no lo es. En aras de la facilidad, los estoy enumerando aquí.
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      WordPress y Gatsby son geniales para
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        Equipos de contenido que se sienten cómodos con la experiencia de edición de contenido de WordPress
{{_LINE_31_}}
{{_LINE_32_}}
        Equipos de desarrollo que valoran el uso de tecnologías populares de código abierto
{{_LINE_34_}}
{{_LINE_35_}}
        Rediseños de sitios con contenido ya almacenado en WordPress
{{_LINE_37_}}
{{_LINE_38_}}
        Equipos que desean ser dueños de sus datos y pila de tecnología
{{_LINE_40_}}
{{_LINE_41_}}
        Flujos de trabajo de control de acceso complejo o restricciones de modelado de contenido
{{_LINE_43_}}
{{_LINE_44_}}
        Proyectos donde la seguridad es importante
{{_LINE_46_}}
{{_LINE_47_}}
        Proyectos de alta demanda donde el rendimiento es primordial
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      WordPress y Gatsby no son geniales para
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        Equipos que requieren el uso de temas de ui de WordPress
{{_LINE_59_}}
{{_LINE_60_}}
        Aquellos que buscan un CMS en la nube totalmente administrado
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
Además de estos puntos oficiales, me gustaría enumerar algunos pros y contras de usar Gatsby WordPress juntos
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      Pros
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        Velocidades de carga más rápidas: los sitios web estáticos se cargan más rápido que la dinámica. Como resultado, afecta su página Carga velocidades y clasificación SEO.
{{_LINE_75_}}
{{_LINE_76_}}
        Menos costos del servidor: dado que los archivos estáticos no necesitan software especiales, por lo tanto, las páginas HTML estáticas también se pueden servir desde servidores más baratos.
{{_LINE_78_}}
{{_LINE_79_}}
        Más seguro: para los sitios estáticos, no hay componentes móviles de piezas, por lo tanto, no hay posibilidades para que los piratas informáticos exploten su software.
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      Contras
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        Curva de aprendizaje: requiere habilidades adicionales para los desarrolladores. Como aprender reactjs y graphql
{{_LINE_93_}}
{{_LINE_94_}}
        Solo contenido estático: si necesita servir cualquier contenido dinámico. Entonces Gatsby no es para ti. Solo puede servir archivos estáticos. Por lo tanto, no puede tener ningún sistema de comentarios que obtenga los datos de la base de datos.
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## Cómo usar Gatsby con WordPress   {#HOWTO}
Antes de que pueda instalar Gatsby, debe instalar [NodeJS][6] y [NPM][7] en el entorno de su sitio web.

### Paso 1 - Instale Gatsby
```
npm install -g gatsby-cli
```
Este comando ejecuta el instalador automáticamente. Descarga e instala todas las dependencias antes de instalar Gatsby. Una vez que esté completo, puede comenzar a crear su primer sitio web de Gatsby.
```
gatsby new gatsby-site
```
Esto descargará la plantilla de inicio de Gatsby y la colocará en el Directorio/Gatsby-WordPress. Una vez que se completa la instalación, puede abrir la versión de desarrollo del sitio
```
gatsby develop
```
Ahora, en su navegador web, ingrese _http: // localhost: 8000_ y su plantilla predeterminada debe abrirse.

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="Plantilla de inicio de Gatsby">}}


### Paso 2 - Conecte Gatsby a WordPress
En esta sección de la Guía Gatsby WordPress, conectaremos este generador de sitios estáticos con WordPress. Tiene un sitio web estático básico, pero debe integrarlo con WordPress. Esto apunta a su sitio de Gatsby a la dirección de su blog de WordPress, lo que le permite extraer los últimos datos cuando ejecuta el servidor de desarrollo. Una vez conectado, Gatsby construirá un sitio web estático basado en su plantilla actual.
Instale el complemento Gatsby Source WordPress desde el repositorio NPM.
```
npm install gatsby-source-wordpress
```

### Paso 3 - Configurar Gatsby
Coloque el siguiente código en su archivo _gatsby-config.js_
```
module.exports = {
  ...
  plugins: [
    ...,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseurl:  `wpexample.com`,
aliases: -  `wpexample.com`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      }
    },
  ]
}
```
Actualice este código para señalar a su sitio web de WordPress. Si su sitio web está alojado localmente, después de BaseURL puede usar _localhost: 8888/WordPress_ en lugar de la URL de su sitio web. Después de guardar el archivo, deberá construir sus plantillas de página.

### Paso 4 - Construir plantillas de página
Las plantillas de la página de construcción permiten que este generador de sitios genere una publicación para cada página de su sitio web de WordPress. El complemento de origen extraerá los datos que necesita de WordPress para estas páginas, pero deberá crear la plantilla de diseño.
En su archivo _gatsby-node.js_, agregue el siguiente código
```
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}
```
Después de llamar a todos los datos, Gatsby generará una página para cada publicación. Usando el comando Desarrollar, puede navegar a cada nueva página utilizando la URL generada.

## conclusión   {#conclusion}
En este tutorial de Gatsby WordPress, cubrimos cómo generar un sitio web de Gatsby de WordPress. Aprendimos cuáles son los pros y los contras de estos dos software de código abierto. También cubrimos cómo instalar y comenzar con el entorno de desarrollo de Gatsby.
Finalmente, [Contenerize.com][8] está escribiendo artículos sobre otros productos de código abierto. Por lo tanto, manténgase en contacto con la categoría de plataforma de código abierto [blogging][9] para noticias y actualizaciones regulares.

  
[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
