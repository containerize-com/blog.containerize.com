---
title: "Como fazer o monitoramento de aplicativos da web com estatísticas" 
seoTitle: "Como fazer o monitoramento de aplicativos da web com estatísticas" 
description: "A estatística é uma das melhores ferramentas de monitoramento de sites que permite monitorar todos os serviços. Renderize a página de status bonita para os serviços de exibição de tempo de atividade." 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "Monitore automaticamente seus sites, aplicativos da Web, APIs com ferramentas de monitoramento gratuitas e mostre o tempo de atividade de serviços com um sistema de página de status de código aberto." 
url: /pt/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

## Monitore automaticamente seus sites, aplicativos da Web, APIs com ferramentas de monitoramento gratuitas e mostre os serviços de serviço com um sistema de página de status de código aberto.

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="Monitoramento de aplicativos da Web">}}

Estatando é um software de status de código aberto **e uma das melhores ferramentas de monitoramento de sites****. Ele também é usado para o monitoramento de serviços como serviços HTTP, TCP, UDP, ICMP e GRPC. A estatística busca automaticamente os serviços, monitorá -los e renderizar a página de status bonita. É plataforma cruzada e você pode instalá-lo nos sistemas operacionais LiuNx, Mac e Windows. Além disso, permite usar o sistema de banco de dados MySQL, PostGres ou SQLite para armazenar informações. Além disso, ele vem com aplicativos móveis fora da caixa para dispositivos para iPhone e Android.
Vamos dar uma olhada nos principais recursos da estatística.
* **Monitoramento de serviços** - O estatuto permite rastrear facilmente todos os seus serviços HTTP, TCP, UDP, GRPC e ICMP.
* **Notificações** -A estatística suporta a maioria das principais aplicações de terceiros para receber notificações.
* **App móvel** - Use o aplicativo gratuito para dispositivos para iPhone e Android e gerencie tudo em movimento.
* **OAuth Authenticatio** N - Suporta a autenticação da OAuth para serviços populares como Github, Google, Slack e Personal OpenId Proves. Use esse recurso e aumente a segurança.
Abordaremos os seguintes tópicos deste tutorial.
  * [Instalando no Linux][1]
  * [Configurar o Systemd Service][2]
  * [Crie serviço para monitoramento][3]
  * [Conclusão][4]

## Instalando no Linux {#Installing}

Execute o comando abaixo para estatar a instalação.
```
curl -o- -L https://statping.com/install.sh | bash
```

## Configure o serviço Systemd {#Configure}

A configuração de um serviço Systemd é uma excelente maneira de garantir que seu servidor de estatísticas possa reiniciar automaticamente quando necessário. Para criar um serviço Systemd, siga as etapas abaixo.
  * Primeiro, execute abaixo o comando para criar um novo arquivo.
```
sudo nano /etc/systemd/system/statping.service
```
  * Copie o código abaixo e cola nele.
```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```
  * Finalmente, use os comandos abaixo para ativar e iniciar o serviço Systemd.
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## Crie serviço para monitoramento {#Create}

  * Abra o seu navegador, digite o URL para fazer login na sua instalação de estatísticas.
  * Clique no link de serviços na navegação superior. Ele mostrará a página de serviços que se parecem abaixo de uma.

{{< figure align=center src="images/statping-dashboard.png" alt="Lista de monitoramento de serviços da web">}}

  * Clique no botão Criar para adicionar um novo serviço para monitoramento. Preencha os campos necessários, como nome de serviço, tipo de serviço, intervalo de verificação, ponto de extremidade de serviço (URL) etc.

## Conclusão {#Conclusão}

Aprendemos sobre estatísticas, como instalá -lo no Linux e como criar um serviço Systemd neste tutorial. Além disso, criamos um novo serviço para monitorar e apresentá -lo sobre diferentes recursos. Esperamos que este guia o ajude a começar a usar estatísticas para executar **Monitoramento de Serviços da Web**e**Monitoramento de Aplicativos da Web** .
Finalmente, [ **containerize.com**][5] está em um processo consistente de escrever postagens no blog sobre mais os mais recentes produtos de código aberto. Portanto, mantenha contato com esta [**Página de status** ][6] Categoria para as atualizações mais recentes.

## Explore
Você pode encontrar os seguintes links relevantes:
* [ **Software de página de status de código aberto 5 para 2020** ][7]
* [ **Statping** ][8]
* [ **Cachet** ][9]
* [ **Monitoror** ][10]
* [ **staytus** ][11]
* [ **Upptime** ][12]
* [ **statusfy** ][13]



[1]: #Installing
[2]: #Configure
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/status-page/
[7]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
[8]: https://products.containerize.com/status/statping
[9]: https://products.containerize.com/status/cachet/
[10]: https://products.containerize.com/status/monitoror/
[11]: https://products.containerize.com/status/staytus/
[12]: https://products.containerize.com/status/upptime/
[13]: https://products.containerize.com/status/statusfy/
