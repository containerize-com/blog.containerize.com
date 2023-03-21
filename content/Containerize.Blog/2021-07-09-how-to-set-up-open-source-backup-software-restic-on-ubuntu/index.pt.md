---
title: "Como configurar o software de backup de código aberto Restic no Ubuntu" 
seoTitle: "Como configurar o software de backup de código aberto Restic no Ubuntu" 
description: "O Restic é um software de backup rápido, seguro e um dos melhores softwares de backup de código aberto. Ele suporta AWS S3, Microsoft Azure, Google Cloud e outras opções de back -end." 
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: "Faça o backup com o software de backup de código aberto e guarde -o localmente ou em back -ends externos. O Restic é uma plataforma cruzada e suporta vários tipos de armazenamento." 
url: /pt/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']
---

## Retire backup com o software de backup de código aberto e armazene -o localmente ou em back -ends externos. O Restic é uma plataforma cruzada e suporta vários tipos de armazenamento.

{{< figure align=center src="images/restic-post-banner.png" alt="Software de backup de código aberto">}}

Um sistema de backup é realmente importante para empresas e indivíduos. Os dados podem ser perdidos por vários motivos, como ataque cibernético, falha do sistema, remoção acidental e muito mais. Você deve ter uma boa estratégia de backup para que você possa restaurar seus dados rapidamente. Este guia mostrará como instalar e utilizar o  **Software de backup de código aberto **  Restic no seu servidor Ubuntu.
Cobrimos as seguintes seções deste tutorial.
  *[ **Pré -requisitos ** ][1]
  *[ **O que é Restic? ** ][2]
  *[ **Instalação Restic ** ][3]
  *[ **Configuração Restic ** ][4]
  *[ **Alternativas para Restic ** ][5]
  * **[Conclusão][6] ** 

## Pré -requisitos   {#Prereebisites}
O Programa de Software de Backup Restic suporta os três principais sistemas operacionais Linux, MacOS e Windows. Antes de instalar  **Backup Restic ** , você deve atender aos seguintes requisitos do sistema.
  * Máquina ou sistema de mesa com sistema operacional Ubuntu que abriga os dados a serem backup
  * Uma última instância do servidor Ubuntu
  * Autenticação de chave SSH configurada entre os dois clientes e servidor
  * Usuário que não é de raios com privilégios sudo
Com esses bits na mão, vamos nos mover e começar a trabalhar.

## O que é Restic?   {#Restic}
[ **Restic ** ][7] é uma ferramenta fantástica de backup de código aberto **. É um utilitário de backup gratuito ** que é rápido, seguro e eficiente. É um programa de backup de plataforma cruzada, para que ele seja executado no Linux, BSD, Mac OS X e Windows. O Software de backup de código aberto Restic é fácil de executar e não requer um servidor ou uma configuração complicada. Ele cria um backup dos dados modificados e permite que os usuários os restaurem quando necessário. Além disso, fornece uma variedade de opções de armazenamento, incluindo armazenamento auto-hospedado e na Internet. Além disso, o armazenamento em nuvem auto -hospedado de código aberto restrito usa técnicas criptográficas robustas para proteger seus dados.
O Restic não é um utilitário de cópia de arquivo simples. Ele é construído principalmente sobre dois conceitos: instantâneos e repositórios.  **Restic **  Solução de backup de código aberto salva as informações como um instantâneo, que é salvo em um repositório. Está escrito na linguagem de programação Go. O utilitário de backup baseado no Restic Go e o aplicativo de backup de código aberto funciona sem problemas com muitos sistemas de armazenamento em nuvem e back -end. O código -fonte do software de backup de arquivo de código aberto Restic está disponível em [ **github ** ][8]. No entanto, você pode encontrar uma documentação detalhada [ **** ][9] para a instalação e uso.
O Restic Host Hosted Cloud Backup suporta os seguintes back-ends para armazenamento de backup.
  * Diretório local
  * Servidor SFTP (via SSH)
  * Servidor REST
  * AWS S3
  * Minio Server
  * Wasabi
  * Cloud Alibaba
  * OpenStack Swift
  * Backblaze B2
  * Microsoft Azure Blob Storage
  * Google Cloud Storage
Você pode usar [ **rclone ** ][10] para vários back -end, além dos listados acima.

## Restic Instalação   {#Installation}
Existem várias maneiras de instalar o melhor armazenamento em nuvem Restic Best Hosted no seu sistema operacional Ubuntu. Abordaremos a instalação do armazenamento de arquivos Restic Host Host, usando o pacote Ubuntu, o Docker e o código -fonte.

### Instalação usando o pacote
  * Execute o comando abaixo para instalar o Restic Open Source Backup Server no Ubuntu OS.
```
$ sudo apt-get install restic
```

### Instalando usando o Docker
  * Obtenha a imagem Restic do DockerHub.
```
$ docker pull restic/restic
```

### Instalando usando a fonte
  * Primeiro, você precisa instalar a linguagem de programação Go para configurar o Restic da fonte. Você pode visitar o [site  **Golang ** ][11] para obter as instruções para instalar.
  * Em seguida, execute os comandos abaixo para instalar o backup incremental Restic.
```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```
  * Ao especificar o sistema operacional de destino no comando, você pode compilar rapidamente Restic para todas as plataformas suportadas. Aqui estão alguns exemplos.
```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```

## Restic Configuration   {#Configuration}
Como já mencionamos acima, o sistema de backup de código aberto Restic é baseado em instantâneos e repositórios para backup. Vamos dar uma olhada em como configurar um repositório, tirar um instantâneo e depois restaurar o backup.

### Crie repositório
  * Execute o seguinte comando para inicializar o repositório. Você também precisa definir uma senha para o repositório.
```
$ restic init --repo /tmp/
```

### dados de backup para um diretório local
  * Na primeira etapa, criamos um repositório para armazenar os dados. Agora, adicionaremos dados ao repositório para backup. Execute o seguinte comando.
```
$ restic --repo /tmp/backup backup ~/work
```

### Restaure o backup
  * O comando Restauração restaura arquivos e diretórios. Os arquivos não são restaurados em seu local original enquanto usam o Restic Open Source Cloud Backup. Você deve escolher um local de destino para que os arquivos sejam restaurados pelo Restic.
```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```
  * No entanto, você pode restaurar o instantâneo mais recente sem especificar o ID do instantâneo. Você precisa adicionar o parâmetro mais recente no comando como abaixo.
```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```

### trabalhando com instantâneos
Nesta seção, examinaremos alguns dos recursos dos instantâneos.
  * Execute o seguinte comando para listar os snaphosts.
```
$ restic snapshots -r /tmp/backup
```
  * Você pode comparar dois instantâneos com o seguinte comando.
```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```
  * Pode ser necessário excluir um backup antigo para liberar espaço de armazenamento. Para remover um instantâneo, execute o comando abaixo.
```
$ restic -r /srv/restic-repo forget bdbd3439
```

## alternativas ao Restic
O Restic é o aplicativo de software de backup de código aberto mais popular e garante a confidencialidade e a integridade dos dados importantes dos arquivos. A seguir, estão as alternativas mais populares e os principais concorrentes da ferramenta Restic Data Backup.
  * Amazon Glacier
  * Replicação
  * runRestic
  * Afi
  * Backup de Rainyday
  * Borg
  * Backup Veeam
  * AWS Storage Gateway
  * Coesidade

## Conclusão
Neste artigo, abordamos o Restic  **Software de backup de código aberto gratuito ** . Também discutimos várias técnicas de instalação, bem como como criar um backup e como restaurar o backup. Existem muitas outras formas de armazenamento de backup de dados e acabamos de abordar um neste artigo. Os tipos de armazenamento de back -end restantes serão abordados em publicações futuras. Esperamos que este tutorial sirva como ponto de partida para você usar a melhor ferramenta Restic Backup de código aberto para receber e restaurar backups.
Finalmente, [ **containerize.com ** ][12] está em um processo consistente de escrever postagens no blog sobre mais os mais recentes produtos de código aberto. Portanto, mantenha contato com esta categoria [ **Backup Software ** ][13] para as atualizações mais recentes.
_ Quais são o seu software de backup de código aberto mais favorito e de código aberto?. Você tem alguma dúvida sobre o software de backup de código aberto?, Por favor_ [entre em contato][14].

## Explore:
Também temos várias outras informações relacionadas do OSS Watch:
  * [5 Top 5 Software de armazenamento em nuvem de código aberto em 2021][15]
  * [Como instalar o NextCloud com o Apache no servidor Ubuntu][16]
  * [Instale e configure o OwnCloud com o Apache no Ubuntu][17]
  * [Como instalar a plataforma de compartilhamento e sincronização de arquivos PyDIO no Ubuntu][18]
  * [NSQ vs Kafka | Quais são as principais diferenças?][19]
  * [NextCloud vs OwnCloud | Quais são as diferenças?][20]
  * [Melhor software de armazenamento em nuvem e compartilhamento de arquivos de código aberto][21]

  
[1]: #Prerequisites
[2]: #Restic
[3]: #Installation
[4]: #Configuration
[5]: #Alternativestorestic
[6]: #Conclusion
[7]: https://restic.net/
[8]: https://github.com/restic/restic
[9]: https://restic.readthedocs.io/
[10]: https://rclone.org/
[11]: https://golang.org/doc/install
[12]: https://containerize.com
[13]: https://blog.containerize.com/category/backup-software/
[14]: mailto:yasir.saeed@aspose.com
[15]: https://blog.containerize.com/backup-and-sync-software/top-5-open-source-cloud-storage-software-in-2021/
[16]: https://blog.containerize.com/backup-and-sync-software/how-to-install-nextcloud-with-apache-on-ubuntu-server/
[17]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[18]: https://blog.containerize.com/backup-and-sync-software/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
[19]: https://blog.containerize.com/backup-and-sync-software/nsq-vs-kafka-what-are-the-key-differences/
[20]: https://blog.containerize.com/backup-and-sync-software/nextcloud-vs-owncloud-what-are-the-differences/
[21]: https://products.containerize.com/backup-and-sync/
