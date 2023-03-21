---
title: "Una guida per principianti per creare tema WordPress da zero" 
seoTitle: "Una guida per principianti per creare tema WordPress da zero" 
description: "Scopri come creare tema WordPress da zero indolore. In questo tutorial abbiamo spiegato il processo in semplici passaggi." 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "Passaggio 5: file Styles.css" 
url: /it/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="Una guida per principianti per creare tema WordPress da zero">}}

Come creare il tema WordPress è tra le migliori query nella ricerca di Google. La creazione di un tema WordPress può essere semplice se conosci HTML di base, CSS e JavaScript. Tuttavia, se sei nuovo a WordPress, questo tutorial è per te. Tutto quello che devi fare è seguire i passaggi menzionati. Quindi, leggiamo questa guida e impariamo come creare tema WordPress da zero.
  * [Requisiti][1]
  * [Guida passo passo][2]

Requisiti ###  {#Requirements}
La prima cosa più importante che devi fare è installare WordPress. WordPress è ben noto per la sua facilità di installazione. È un processo semplice e può essere fatto facilmente da solo seguendo la [guida][3].

### come creare tema WordPress; Guida passo -passo   {#Guide}
Per il tema WordPress, tutto sarà fatto solo nella directory**WP_Content**. Basta fare una nuova sottocartella nel tema nella cartella**WP_Content → Temi.**Supponiamo che tu lo chiami**"CustomTheme"**.
La seconda cosa è decidere il layout del tema. Qui, il tutorial mostra il layout di base composto da**intestazione, area principale, piè di pagina, barra laterale**.
Fondamentalmente, WordPress ha bisogno solo di 2 file, ovvero stile.css e index.php. Ma, per questo layout, hai bisogno di**5 file**, come segue;
***header.php -**contiene il codice per la sezione di intestazione del tema.
***INDICE.php -**contiene il codice per l'area principale e specificherà dove verranno inclusi gli altri file. Questo è il file principale del tema.
***sidebar.php -**contiene le informazioni sulla barra laterale.
***Footer.php -**Gestisce la sezione piè di pagina.
***Style.css -**responsabile dello stile del tuo tema.
***Bootstrap.css -**Non è richiesto alcun codice CSS separato; altamente reattivo.
***Bootstrap.js -**Fornisce il proprio JS per la barra di navigazione, o schede, ecc.
* * bootstrap.js**e**bootstrap.css**devono essere scaricati dal pacchetto bootstrap e copiati nella cartella**tema**.
Ecco i passaggi da seguire per configurare il tema

### Passaggio 1: file header.php
Metti il ​​seguente codice nel file header.php.
```
<html>
<head>
<title>Custom Theme</title>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/jquery.js'; ?>">
</script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/jquery-ui.min.js'; ?>">
</script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/bootstrap.js'; ?>">
</script>
<link  href="<?php echo get_stylesheet_directory_uri().'/css/bootstrap.css'; ?>">
<link  href="<?php bloginfo('stylesheet_url'); ?>">
</head>

<body>

<div id="ttr_header" class="jumbotron">
<h1>HEADER</h1>
</div>
<div class="container">
```
Questo file header.php contiene il codice per la parte dell'intestazione in cui è collegato il file JS e Style. Visualizza l'intestazione della pagina.

### Passaggio 2: file index.php
Metti il ​​seguente codice nel file principale indice.php
```
<?php get_header(); ?>
<div id="ttr_main" class="row">
<div id="ttr_content" class="col-lg-8 col-sm-8 col-md-8 col-xs-12">

<div class="row">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
<h1><?php the_title(); ?></h1>
<h4>Posted on <?php the_time('F jS, Y') ?></h4>
<p><?php the_content(__('(more...)')); ?></p>
</div>
<?php endwhile; else: ?>
<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
<?php endif; ?>
</div>
</div>
<?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>
```
Il codice sopra visualizza il contenuto principale del post, della barra laterale e del piè di pagina.

### Passaggio 3: file sidebar.php
Aggiungi il seguente codice in sidebar.php
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
Nel codice sopra, le funzioni interne di WordPress sono chiamate per visualizzare diverse categorie, archivi di post.

### Passaggio 4: file footer.php
Aggiungi le righe di codice seguenti al file footer.php:
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## Passaggio 5: file Styles.css
Aggiungi le seguenti righe al file style.css
```
body
{
text-align: left;
}
#ttr_sidebar
{
border-left: 1px solid black;
}
#ttr_footer
{
width: 100%;
border-top: 1px #a2a2a2 solid;
text-align: center;
}
.title
{
font-size: 11pt;
font-family: verdana;
font-weight: bold;
}
```
Dopo aver seguito tutti i passaggi sopra, avrai un tema WordPress funzionante di base. Puoi modificarlo ulteriormente per renderlo più bello e adatto alle tue esigenze.

### Conclusione
In questo tutorial abbiamo spiegato come creare tema WordPress in passi semplici e facili. Dopo aver letto e seguito i passaggi, la creazione di un tema WordPress non è più difficile ora. Ma ovviamente questo tutorial si attacca alla configurazione di base e per migliorarlo dovrai saperne di più su HTML, CSS, JS e PHP.

  
[1]: #requirements
[2]: #guide
[3]: https://products.containerize.com/blogging/wordpress
