---
title: "Integração contínua e implantação contínua do servidor de controle de origem" 
seoTitle: "Integração contínua e implantação contínua do servidor de controle de origem" 
description: "Ferramenta de implantação gratuita ajuda as equipes de desenvolvimento a automatizar fluxos de trabalho de entrega de software. Crie rapidamente, teste, implante software com o repositório Jenkins e Github." 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "Automatize os fluxos de trabalho de desenvolvimento usando a ferramenta de implantação gratuita. Aprenderemos como configurar o CI/CD com o Jenkins Automation Server e o GitHub para implantação de software." 
url: /pt/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## automatize fluxos de trabalho de desenvolvimento usando ferramenta de implantação gratuita. Aprenderemos como configurar o CI/CD com o Jenkins Automation Server e o GitHub para implantação de software.

{{< figure align=center src="images/ci-cd-post.png" alt="Integração contínua e implantação contínua">}}

As equipes de desenvolvimento usam métodos diferentes para implantação de software, como FTP, extraindo código do repositório e muito mais. Todos esses métodos são realizados manualmente e exigem muito esforço. Podemos ver que mais equipes seguem a metodologia ágil para o desenvolvimento de software. Então, eles lançam novos recursos e a correção de bugs com frequência. Portanto, a automação de fluxos de trabalho de entrega de software ajuda as equipes a lançar novas versões rapidamente e sem erros. Aprenderemos a usar ** CI/CD com Jenkins ** e Github para automatizar o processo de entrega de software. Abordaremos as seguintes seções deste artigo.
  *[** O que é Jenkins? **][1]
  *[** integração contínua **][2]
  *[** implantação contínua **][3]
  *[** Configurar Jenkins **][4]
  *[** Crie Jenkins Job **][5]

## O que é Jenkins? {#Jenkins}
** Jenkins ** é uma poderosa ferramenta de implantação gratuita ** para automatizar o processo de entrega de software. É um servidor de automação de código aberto para construção, teste e implantação. Jenkins usa a arquitetura mestre-escravo. Isso permite que as equipes de software executem várias construções e testes para software simultaneamente. Além disso, existem muitos plug -ins disponíveis e as equipes podem usá -los conforme necessário. Você pode visitar a página [** Jenkins **][6] para obter mais informações e instalações. Além disso, você pode encontrar o código -fonte em Jenkins [** github **][7] repositório.

## integração contínua {#ci}
** Integração contínua ** é uma prática de desenvolvimento que exige que os desenvolvedores integrem frequentemente o código em um repositório compartilhado. Toda integração/pressão do código no repositório pode ser verificada por compilação e testes automatizados. Ele também permite que os desenvolvedores identifiquem facilmente problemas no código.

## implantação contínua {#cd}
** A implantação contínua ** é a próxima etapa após a integração contínua. Isso permitiria que as equipes implantassem continuamente o código no servidor. Além disso, ajuda os desenvolvedores a reduzir tarefas repetitivas e aumentar a agilidade.

## Configure Jenkins {#Configure}
Siga abaixo a diretriz passo a passo para configuração em Jenkins.
  * Abra o site Jenkins e o login.
  * Instale o plugin “Publicar sobre SSH”. Você pode pesquisá -lo navegando para "Gerenciar Jenkins → Gerenciar plugins → Disponível".
  * Gere a chave SSH no servidor de construção como o usuário “Jenkins”, como mostrado abaixo.
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/lib/jenkins/.ssh/id_rsa):
Created directory '/var/lib/jenkins/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/lib/jenkins/.ssh/id_rsa.
Your public key has been saved in /var/lib/jenkins/.ssh/id_rsa.pub.
The key fingerprint is:
```
  * Conecte -se ao servidor de destino/implantação usando o SSH. Execute o comando abaixo e cole o conteúdo do arquivo de pub no servidor de destino.
```
$ cd .ssh
$ nano authorized_keys
```
  * Navegue para gerenciar “Jenkins → Configurar o sistema → Publicar sobre o SSH”.
  * Adicione a tecla SSH localizando o caminho do arquivo ou cole o mesmo conteúdo feito para o servidor de implantação.
  * Adicione um servidor SSH clicando no botão "Adicionar" ao lado de "SSH Servers".
  * Digite o nome, nome de host, nome de usuário e diretório remoto para o servidor de implantação/destino.
  * Clique no botão Configuração de teste para garantir que os Jenkins possam se conectar ao servidor de implantação.
  * Finalmente, clique no botão Salvar para armazenar informações.

## Crie Jenkins Job {#Create}
Você pode usar essas etapas para criar o Jenkins Job.
  * Abra o painel Jenkins e clique no botão "Novo item".
  * Digite o nome do projeto e escolha “Freestyle Job”.
  * Digite URL do repositório do GitHub em "Janela de configuração".
  * Na seção “Construir ambiente”, verifique essas opções “Exclua espaço de trabalho antes do início da construção” e “Envie arquivos ou execute os comandos sobre o SSH após a execução da construção”.
  * Digite o nome, arquivos de origem e diretório remoto em ambiente de construção.
  * Salvar emprego e construí -lo.
  * Conecte -se ao servidor de implantação e verifique se o código está lá.

## Conclusão
Discutimos o servidor ** Jenkins **, ** integração contínua ** e ** implantação contínua ** neste artigo. Também aprendemos a configurar a ferramenta de implantação ** ** e criamos um trabalho Jenkins para implantação usando o GitHub. A ferramenta gratuita de CI/CD permite que a equipe de desenvolvimento automatize fluxos de trabalho de entrega de software e mantenha o foco em trabalhos importantes. Estaremos cobrindo outras ferramentas de implantação nas próximas postagens.
Finalmente, [** containerize.com **][8] publicará artigos sobre ferramentas adicionais de implantação de código aberto. Portanto, mantenha contato com [** Ferramentas de implantação **][9] Categoria para atualizações regulares.

## Explore
Você pode encontrar os seguintes links relevantes:
  *** [Jenkins][6] **
  *[** drone **][10]
  *[** Implantador **][11]
  *[** Capistrano **][12]
  *[** Rancher **][13]
  *[** concurso **][14]
  *[** Ansible **][15]
  *[** gocd **][16]
  *[** Top 5 Ferramentas de implantação de código aberto em 2021 **][17]
  *[** Automatize a implantação de aplicativos PHP com implementador **][18]

  
[1]: #Jenkins
[2]: #CI
[3]: #CD
[4]: #Configure
[5]: #Create
[6]: https://products.containerize.com/deployment-tools/jenkins
[7]: https://github.com/jenkinsci/jenkins
[8]: https://containerize.com
[9]: https://blog.containerize.com/category/deployment-tools/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/deployer/
[12]: https://products.containerize.com/deployment-tools/capistrano/
[13]: https://products.containerize.com/deployment-tools/rancher/
[14]: https://products.containerize.com/deployment-tools/concourse/
[15]: https://products.containerize.com/deployment-tools/ansible/
[16]: https://products.containerize.com/deployment-tools/gocd/
[17]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[18]: https://blog.containerize.com/deployment-tools/automate-php-application-deployment-with-deployer/
