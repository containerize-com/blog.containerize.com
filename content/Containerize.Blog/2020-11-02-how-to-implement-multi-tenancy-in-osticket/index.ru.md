---
title: "Настройка Osticket-реализовать многоцелевое место в Osticket" 
seoTitle: "Настройка Osticket-реализовать многоцелевое место в Osticket" 
description: "Реализация мультицентра в Osticket может сэкономить затраты и использование ресурсов. В этой статье мы сделаем настройку Osticket для достижения многоцелевого." 
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: "Multianant Osticket Helpdesk позволяет создавать несколько арендаторов из одной установки. Это делает оптимальное использование ресурсов веб -сервера." 
url: /ru/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']
---

## Multianant Osticket Helpdesk позволяет создавать несколько арендаторов из одной установки. Это делает оптимальное использование ресурсов веб -сервера.

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="Настройка Osticket - реализовать многоцелевое место в Osticket">}}

В этой статье мы обсудим, как сделать настройку Osticket для реализации многоцелевого. Этот пост будет охватывать следующие темы:
  * [Обзор Osticket][1]
  * [Обзор мультицентровых средств][2]
  * [Преимущества мультицензии][3]
  * [Реализация][3]
  * [Заключение][4]

## Обзор Osticket: {#osticket}

[Osticket][5] - это программное обеспечение для поддержки поддержки клиентов с открытым исходным кодом. Он предоставляет интуитивно понятную панель управления и компонент отчетности в реальном времени. У него простой в использовании модуль управления запросами. Это позволяет вам создавать запросы из вашего телефона, электронной почты и веб-форм. Который предлагает множество вариантов, чтобы помочь адаптировать все части опыта поддержки клиентов, такие как комментарии и уведомления по электронной почте.

## Обзор мультиченного затраты: {#multitenancy}

Многоцелевое больное относится к реализации, где несколько независимых экземпляров приложения работают в общей среде. Экземпляры (арендаторы) логически изолированы, но физически интегрированы. Организация может иметь несколько отделов. Таким образом, они могут создать несколько арендаторов/экземпляров одного и того же приложения. Например, в нашем случае система Helpdesk может быть настроена для разных доменов одной и той же организации. Там могут быть сотни арендаторов, но все они будут использовать одни и те же файлы и, следовательно, одинаковое хранилище. Это снизит затраты на хранение, а также будет проще улучшить обновление. Разработчики должны обновлять файлы только из одного места вместо того, чтобы вносить изменения для каждого сайта отдельно.

## Каковы преимущества многопользователя? {#benefits}

Вот некоторые важные преимущества многопользовательского
*  **Оптимизация ресурсов:**   Одна машина, зарезервированная для одного арендатора, не эффективна. Потому что один арендатор вряд ли будет использовать всю вычислительную мощность машины. Обмен машинами будет максимизировать доступность ресурсов.
*  **Снижение затрат:**   с несколькими арендаторами, разделяющими одни и те же ресурсы, будут стоить намного ниже, чем если бы каждый арендатор нуждается в собственной специальной инфраструктуре.
*  **Эффективное хостинг:**   Также мультитенантное остикет уменьшит расходы на хостинг до минимума в общей среде.
*  **Безопасность:**   При меньшем взаимодействии с внешним миром воздействие вредоносного программного обеспечения уменьшается.
*  **Легкое обновление**  : обновить файлы только в одном месте вместо обновления их отдельно. Это сэкономит много времени и усилий.

## Внедрение мультитенантного остикета: {#implementation}

  * Создайте новые пустые имена базы данных как «main_db».
  * Затем создайте таблицу с именем «Арендатор», в котором будут содержатся подробности обо всех арендаторах.
  * У него будут следующие поля:
  1. site_name
  2. URL
  3. DB_NAME

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="Настройка Osticket - реализовать многоцелевое место в Osticket">}}

  * Сайт \ _name Поле будет содержать имя арендатора. URL Field будет иметь полный URL -адрес арендатора. Поле DB \ _name содержит имя базы данных, которое будет создано для нового арендатора.
  * После этого открыть файл /include/ost-config.php и добавить следующий код
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
  * Этот код обновит подключение к базе данных по умолчанию. Сначала он получит URL нынешнего арендатора. Тогда он получит имя базы данных в соответствии с этим URL. Вот как приложение будет знать, к какой базе данных подключиться. Каждый арендатор будет иметь отдельную базу данных. База данных будет выбрана на основе URL -адреса арендатора.
  * Для создания нового арендатора просто настройте новый домен арендатора на Nginx Server. После этого просто скопируйте текущую базу данных Osticket и переименуйте ее. Наконец, добавьте вход в таблицу «Арендатор» базы данных «main_db».

## Заключение: {#conclusion}

Osticket - это бесплатное программное обеспечение для управления службой управления и с открытым исходным кодом. Мы узнали, как создавать настройки Osticket для внедрения многоцелевого в Osticket, чтобы сэкономить затраты, оптимизировать приложение и более низкие требования к ресурсам. Это облегчит жизнь разработчикам, чтобы создать новых арендаторов в нескольких простых шагах. Следовательно, создайте несколько арендаторов Osticket из одной и той же установки.

## Исследовать:
Пожалуйста, загляните на следующую страницу, чтобы узнать больше о Osticket:
  * [Osticket - бесплатное программное обеспечение с открытым исходным кодом Helpdesk][5]
  * [Руководство для начинающих по разработке плагина Osticket][6]
  * [Как настроить программное обеспечение для службы поддержки онлайн с помощью Osticket][7]
  * [Автоматизируйте систему билетов с использованием WordPress и Osticket][8]



 [1]: #osticket
 [2]: #multitenancy
 [3]: #benefits
 [4]: #conclusion
 [5]: https://products.containerize.com/helpdesk/osticket
 [6]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
 [7]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
 [8]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
