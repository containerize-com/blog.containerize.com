---
title: "Как мигрировать с WordPress в Джекилл" 
seoTitle: "Как мигрировать с WordPress в Джекилл" 
description: "В этом уроке мы узнаем, как перенести ваш сайт с WordPress в Джекил в быстрых и простых шагах. Давайте начнем!" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "В этом уроке мы узнаем, как перенести ваш веб -сайт с WordPress в Джекилл и размещать его с GitHub бесплатно" 
url: /ru/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

## В этом уроке мы узнаем, как перенести ваш сайт с WordPress в Джекилл и размещать его с GitHub бесплатно

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="WordPress To Jekyll">}}

Jeykll - это статический генератор сайтов с открытым исходным кодом. Он превращает ваш простой текст в статические сайты и блоги. Он принимает текст, написанный на вашем любимом языке разметки (Markdown, Liquid, HTML / CSS), и использует макеты для создания статического веб -сайта. Jekyll-это осведомленность о блоге, а постоянные ссылки, категории, страницы, сообщения и индивидуальные макеты-все первоклассные граждане. Одним из самых больших преимуществ Jekyll является то, что вы можете размещать свой статический веб -сайт на страницах GitHub и запустить свой веб -сайт или блог бесплатно. Таким образом, WordPress в Jekyll Migration может помочь вам повысить производительность и скорость вашего сайта.
В этом сообщении мы рассмотрим, как перенести свой существующий веб -сайт или блог с WordPress в Jekyll для лучшей скорости и производительности. Итак, начнем!
*  **[Зачем мигрировать?][1]**  
*  **[Установка][2]**  
*  **[Импортировать посты и страницы WordPress в][3]**  
*  **[развертывание с страницами GitHub][4]**  
*  **[Заключение][5]**  

## Зачем мигрировать? {#why}

В Jekyll вы можете получить 100/100 [оценка маяка][6], потому что нет никаких взаимодействий с базами данных. И весь контент предварительно обрабатывается и сохраняется в виде HTML -файлов. И Jekyll сделает лишь минимальную сумму HTTP -запросов. Следовательно, это очень быстро.

## Установка и настройка Jekyll {#install}

Джекилл написан на Руби. Итак, вы должны установить его сначала на свой компьютер. Это руководство предполагает, что на вашем компьютере уже установлено Ruby. Если нет, вы можете следовать [Официальному руководству][7].
Во -первых, мы будем драгоценными камнями «  **jekyl** » и «  **bundler**  », используя команду « **Gem**  », которая будет доступна после установки Ruby. Откройте командную строку и запустите следующий код.
```
gem install jekyll bundler
```
Затем запустите следующую команду, чтобы создать свежий сайт. Это создаст папку  **MyBlog**  .
```
jekyll new myblog
```
После установки вы можете создать сайт и сделать его доступным на локальном сервере.
```
bundle exec jekyll serve
```
Сайт будет доступен на http: // localhost: 4000. Он также генерирует папку «  **_ сайта**  » в вашей папке, и это то, что является конечным выводом сайта.

## Импортировать страницы и посты WordPress {#import}

Неофициальный плагин для WordPress также доступен, но мы будем следовать официальному методу в этом уроке. Если вы хотите попробовать плагин экспортера WordPess, вы можете [пойти сюда][8].
Чтобы импортировать ваши сообщения с веб -сайта WordPress, запустите следующую команду на вашем терминале.
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
Это только импортирует данные и контент Post & Page. Этот импортер только преобразует ваши посты и создает передний ветер YAML. Он не импортирует никаких макетов, стиля или внешних файлов (изображения, CSS и т. Д.).

##  **Развертывание с страницами GitHub**  {#deploy}

До сих пор мы создали наш блог Jekyll локально. Теперь мы собираемся развернуть его на GitHub. Прежде всего, мы должны контролировать наш сайт, используя [GIT][9]. Запустите следующие команды в папке сайта.
```
git init
git add .
git commit -m "Initial Commit"
```
При установке Jekyll он должен автоматически создать файл «  **. Gitignore**  » в корне, по крайней мере, со следующим содержимым.
Затем войдите в GitHub и создайте новый репозиторий yourname.github.io
Затем скопируйте HTTPS URL -адрес репозитория.

{{< figure align=center src="images/github-img.png" alt="github https url">}}

Затем добавьте удаленный репозиторий и нажмите код.
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
Сделанный! Ваш сайт теперь должен быть доступен на yourname.github.io

## Заключение {#conclusion}

В этой статье мы научились создавать статический блог с сайтами Jekyll. Затем мы научились экспортировать ваши посты и страницы из WordPress в Джекил. И, наконец, мы развернули последний сайт на страницы GitHub.



 [1]: #why
 [2]: #install
 [3]: #import
 [4]: #deploy
 [5]: #conclusion
 [6]: https://web.dev/performance-scoring/
 [7]: https://www.ruby-lang.org/en/documentation/installation/
 [8]: https://wordpress.org/plugins/jekyll-exporter/
 [9]: https://git-scm.com/
