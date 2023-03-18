---
title: "Como automatizar o monitoramento de aplicativos da Web em Cachet" 
seoTitle: "Como automatizar o monitoramento de aplicativos da Web em Cachet" 
description: "O Cachet ajuda a monitorar todos os seus serviços e notificar instantaneamente os assinantes. Este artigo é sobre a integração do plug-in de terceiros para automatizar o monitoramento." 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "A página de status do cache permite que as empresas obtenham notificações instantâneas sobre o tempo de inatividade do serviço. Aprenderemos como automatizar o monitoramento de aplicativos da Web em Cachet." 
url: /pt/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

A página de status do cache permite que as empresas obtenham notificações instantâneas sobre o tempo de inatividade do serviço. Aprenderemos como automatizar o monitoramento de aplicativos da Web em Cachet.

{{< figure align=center src="images/cachet-monitor.png" alt="Monitoramento de aplicativos da web">}}

O monitoramento de aplicativos e serviços é uma parte muito importante dos negócios on -line. Seu site é executado 24x7 e você pode errar a qualquer momento. Você não pode saber que nenhum dos locais está funcionando ou não até visitá -lo. Além disso, os clientes não terão informações sobre o problema. Eles podem entrar em contato com sua equipe de suporte para obter tempo de inatividade de serviço. Além disso, isso pode levar seus clientes decepcionados. No entanto, você pode reduzir o tempo de inatividade do serviço configurando o sistema de página de status. O sistema de página de status monitorará todos os seus serviços o tempo todo e enviará notificações para sua equipe e clientes imediatamente. Isso permitirá que você tome medidas rápidas para corrigir o problema e os clientes se manterão atualizados sobre o progresso. Nesta postagem do blog, você aprenderá como integrar a biblioteca de terceiros com ** cache ** para ** automatizar o monitoramento **.
  * [Requisitos] [1]
  * [Plugin de monitoramento de configuração] [2]
  * [Criando serviço Linux] [3]
  * [Conclusão] [4]

## requisitos {#ReQuirements}
  * Instale a versão mais recente do cache.
  * Familiarizado com os serviços Linux.

## Configuração de plugin de monitoramento {#plugin}
A seguir, as etapas para instalar e configurar o plug -in para monitorar no Ubuntu.
  * Faça o download do binário da [página de liberação] [5].
  * Renomeie o arquivo para Cachet-monitor.
  * Faça o arquivo executável com o comando.
```
sudo chmod +x cachet-monitor
```
  * Coloque o executável em um diretório de caminho, para que você possa acessá -lo diretamente via terminal. Então, eu sugiro que você se mova em **/usr/local/bin **.
  * Crie um arquivo config.json executando o seguinte comando.
```
sudo nano config.json
```
  * Copie o código abaixo e salve o arquivo.
```
{
  "api": {
    "url": "https://demo.cachethq.io/api/v1",
    "token": "9yMHsdioQosnyVK4iCVR",
    "insecure": false
  },
  "date_format": "02/01/2006 15:04:05 MST",
  "monitors": [
    {
      "name": "google",
      "target": "https://google.com",
      "strict": true,
      "method": "POST",
      "component_id": 1,
      "metric_id": 4,
      "template": {
        "investigating": {
          "subject": "{{ .Monitor.Name }} - {{ .SystemName }}",
          "message": "{{ .Monitor.Name }} check **failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
        },
        "fixed": {
          "subject": "I HAVE BEEN FIXED"
        }
      },
      "interval": 1,
      "timeout": 1,
      "threshold": 80,
      "expected_status_code": 200
    }
  ]
}
```
  * Agora, teste sua configuração com este comando.
```
cachet-monitor -c config.json
```
  * Se tudo funcionar bem, vá para a próxima seção e crie um serviço Linux.

## Criando serviço Linux {#Service}
A seguir, as etapas para criar e iniciar um serviço Linux para automatizar o processo de monitoramento.
  *Crie um serviço ** Cachet-monitor.service ** Arquivo.
```
sudo nano cachet-monitor.service
```
  * Copie o código abaixo e salve o arquivo.
```
[Unit]
Description=Cachet Monitor
After=syslog.target
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/usr/local/sbin
ExecStart=cachet-monitor -c /root/config.json
Restart=always
Environment=USER=root HOME=/root

[Install]
WantedBy=multi-user.target
```
  * Atualize a configuração do Systemd executando o comando.
```
sudo systemctl daemon-reload
```
  * Habilite o serviço Cachet-Monitor executando o comando, para que ele possa carregar na inicialização do sistema.
```
sudo systemctl enable cachet-monitor.service
```

## Conclusão {#conclusion}
Cache A é gratuito e ** Página de status de código aberto ** Sistema. No entanto, ele não fornece o recurso de propósito para ** monitoramento de aplicativos da web **. Em vez disso, possui uma poderosa API REST que pode ser usada para executar ações como incidentes, componentes, grupos e muito mais. Neste artigo, usamos o plug-in de terceiros para automatizar o monitoramento de aplicativos no cache. Acima de tudo, você pode desenvolver seu próprio plug -in ou usar qualquer outro plug -in existente para fazer o trabalho.
Além disso, [contenderize.com] [6] está a caminho de aprimorar a pilha de produtos de código aberto em vários idiomas e estruturas. Para atualizações regulares, fique atento à categoria [Status] [7] para artigos mais interessantes.

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Melhores sistemas de página de status de código aberto] [8]
  * [Cachet - Software de status de código aberto e gratuito] [9]
  * [Software de página de status de código aberto 5 para 2020] [10]
[1]: #Requirements
[2]: #Plugin
[3]: #Service
[4]: #Conclusion
[5]: https://github.com/CastawayLabs/cachet-monitor/releases
[6]: https://www.containerize.com/
[7]: https://blog.containerize.com/category/status-page
[8]: https://products.containerize.com/status
[9]: https://products.containerize.com/status/cachet
[10]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
