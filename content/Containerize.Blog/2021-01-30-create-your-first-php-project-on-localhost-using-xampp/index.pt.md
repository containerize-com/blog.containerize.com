---
title: "Crie seu primeiro projeto PHP no localhost usando o xampp '" 
seoTitle: "Crie seu primeiro projeto PHP no localhost usando XAMPP" 
description: "Configure o ambiente de desenvolvimento da Web usando o servidor da web de código aberto gratuito XAMPP. Crie e teste seus projetos PHP no host localizador seguindo algumas etapas fáceis." 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "Configure o ambiente de desenvolvimento da Web usando o servidor XAMPP de código aberto gratuito e aberto. Aprenda, crie e teste seus projetos PHP no host localizador seguindo algumas etapas fáceis." 
url: /pt/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

## Configure o ambiente de desenvolvimento da Web usando o servidor XAMPP de código aberto gratuito e aberto. Aprenda, crie e teste seus projetos PHP no host localizador seguindo algumas etapas fáceis.

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="Crie seu primeiro projeto PHP com o XAMPP Open Source Web Server">}}

O XAMPP é um servidor da web de código aberto que fornece um ambiente local para criar, executar e testar um projeto PHP antes de implantá -lo em servidores ao vivo. Ele fornece um servidor local para os desenvolvedores testarem e criarem aplicativos da Web. Cobriremos as seguintes seções nesta postagem do blog:
  * [Requisitos][2]
  * [O que é xampp][3]
  * [Criar script PHP][4]
  * [Run e teste PHP Script][5]
  * [Conclusão][6]

## Requisitos {#ReQuirements}
  * Instalação Xampp
  * Aplicativo do editor de código
  * Conhecimento básico de PHP
  * Conhecimento básico de HTML e JavaScript

## O que é xampp? {#xampp}
O XAMPP é uma pilha de soluções de servidor da web de código aberto. Ele contém Apache, MySQL, Mariadb, PHP e Perl. É extremamente fácil de instalar e usar. É por isso que é o ambiente de desenvolvimento PHP mais popular. O XAMPP Server fornece um ambiente completo para o desenvolvimento de aplicativos da Web PHP. Se você ainda não possui a instalação de trabalho XAMPP, siga este guia para instalar o XAMPP:
[Configuração xampp e phpmyadmin como localhost no Windows][7]

## Crie script php {#php}
  * Supondo que você já tenha instalado o XAMPP seguindo o tutorial acima, agora vamos criar um script PHP simples e testá -lo no XAMPP.
  * Primeiro abra seu editor. Se você não possui um editor de programação, basta abrir o bloco de notas.
  * Digite o código seguinte
```
<?php
echo "This is my first PHP project";
?>
```
  * Clique em "Arquivo" no canto superior direito.
  * Pressione o botão "Salvar como".
  * Digite o nome com extensão “.php”.
  *Para “Salvar como tipo”, selecione “Todos os arquivos (\*. \*)”.
  * E finalmente pressione o botão "Salvar".

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="Crie seu primeiro projeto PHP com o XAMPP Open Source Web Server">}}


## Execute e teste o script php {#test}
  * Copie este script PHP para a pasta HTDOCS dentro da instalação do XAMPP. Principalmente a pasta htdocs reside aqui: c: \ xampp \ htdocs
  * Abra seu navegador.
  * Vá para localhost/my \ _first \ _php_project.php

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="Crie seu primeiro projeto PHP com o XAMPP Open Source Web Server">}}

Parabéns! Você acabou de criar seu primeiro projeto PHP.

## Conclusão {#conclusion}
Criar o primeiro projeto da web é sempre muito emocionante para um iniciante. É ótimo quando você projeta seu primeiro script dinâmico, executa -o e vê -lo funcionando no seu navegador. Espero que este guia simples tenha ajudado a criar e executar seu primeiro projeto PHP com o XAMPP Open Source Web Server.

## Explore
Para saber mais sobre Xampp e Phpmyadmin, check -out a seguir Guias:
[Configuração xampp e phpmyadmin como localhost no Windows][7]
[Pilha de solução de servidor web gratuita para desenvolvedores PHP e Perl][1]

  
[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
