---
title: "Automatizar a implantação de aplicativos PHP com o implementador" 
seoTitle: "Automatizar a implantação de aplicativos PHP com o implementador" 
description: "Implante o aplicativo PHP com ferramenta de implantação de código aberto e automatize fluxos de trabalho de implantação. Libere facilmente os recursos e reversão da versão anterior." 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "Automatize o processo de implantação de aplicativos PHP com a ferramenta de implantação de PHP. Aprenderemos como configurar o implementador e usá -lo para implantar o aplicativo PHP." 
url: /pt/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## automatize o processo de implantação do aplicativo PHP com a ferramenta de implantação de PHP. Aprenderemos como configurar o implementador e usá -lo para implantar o aplicativo PHP.

{{< figure align=center src="images/deployer-blog-post.png" alt="Ferramenta de implantação do PHP">}}

É um trabalho muito crítico para implantar aplicativos no servidor após o desenvolvimento. Novos recursos e correções de bugs são frequentemente lançados pelas equipes. Portanto, é preferível que as equipes eliminem o trabalho manual e automatizem o processo ** de implantação de software **. Isso permitiria que as equipes de software se concentrassem em tarefas mais importantes. Existem várias ferramentas de implantação de código aberto ** por aí, mas vamos nos concentrar no ** PHP Impleator ** neste tutorial. Abordaremos a seção a seguir nesta postagem.
  *[** O que é implantador **] [1]
  *[** Instalando o implantador **] [2]
  *[** Implante de aplicativo PHP **] [3]
  *[** Conclusão **] [4]

## o que é implementador {#what}
[** Implantador **] [5] é uma ferramenta de implantação de pHP de código aberto ** **. Ele permite equipes de software para automatizar fluxos de trabalho de implantação para aplicativos baseados em PHP. É muito simples de instalar e fácil de usar. Qualquer pessoa, do iniciante a experiência de um especialista, pode usá -lo rapidamente para implantar aplicativos PHP. O implantador vem com receitas/scripts prontos para uso para estruturas populares, CMS e software de carrinho de compras. Além disso, você pode fazer a implantação do Laravel ** com esta ferramenta de implantação de código aberto **. O desenvolvedor pode usar receitas internas para seus projetos e usá-las para implantação. Além disso, você pode criar facilmente o script de instalação/implantação com o assistente ** php implementador **. Além disso, esta ferramenta de implantação gratuita ** oferece excelentes recursos, como implantações de tempo zero, reversão da versão anterior, SSH, execução paralela e muito mais.

## Instalando o implantador {#Installing}
  * Implantador depende do PHP. Você deve garantir que o PHP esteja em execução no seu servidor. No entanto, você pode usar o comando abaixo para instalar o PHP no Ubuntu.
```
sudo apt-get install php
```
  * Execute os comandos abaixo um por um para instalar o implementador.
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## implante aplicativo PHP {#Deploy}
Siga as diretrizes passo a passo para ** implantar o aplicativo PHP ** com o implementador.
  * Crie um diretório para implementador e navegue até o diretório recém-criado.
```
sudo mkdir deployer
cd deployer
```
  * Execute o comando abaixo para gerar um script de instalação
```
dep init
```
  * Você será solicitado com a tela abaixo. Este é um assistente de implementador para criar um script básico de instalação.

{{< figure align=center src="images/deployer-1.png" alt="">}}

  * Primeiro, você precisa selecionar o tipo de projeto digitando um número. Você pode inserir 0, se não tiver certeza do tipo de projeto ou apenas se familiarizar com o implementador.
  * Em segundo lugar, você precisa fornecer um caminho de repositório Git. É uma etapa opcional, você pode pular e adicionar um caminho mais tarde.
  * Na última etapa, você pode compartilhar informações com a comunidade de implementadores selecionando sim ou digite não para ignorá -las.
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
Você precisa alterar as seguintes variáveis ​​para implantar seu aplicativo PHP.
  *** SET ('APLICAÇÃO', 'MY_PROJECT'); ** - Defina o nome do aplicativo.
  *** set ('repositório' "); **-Defina o caminho do repositório Git como 'git@github.com: masood/primeiro-app-with-deployer.git'. Você deve definir a chave de implantação para o seu repositório do GitHub. Você pode pesquisar como criar uma chave SSH no servidor, se não estiver familiarizado com ela.
  *** host ('Project.com')
    -> set ('implant_path', '~/{{Application}}'); ** -Defina o nome do projeto e defina o caminho onde deseja armazenar arquivos para o seu aplicativo. Parecerá/var/www/html/implementador.
Por fim, execute o comando abaixo para implantar seu aplicativo PHP.
```
dep deployer
```
Se você encontrar algum problema com o novo lançamento e deseja reverter as alterações. Você pode fazer isso simplesmente executando o comando abaixo.
```
dep rollback
```

## Conclusão {#conclusion}
Discutimos sobre o implementador e como instalá -lo neste tutorial. Além disso, criamos diretrizes completas para a implantação de aplicativos baseados em PHP no Repositório do GitHub. Felizmente, esta postagem do blog o ajudará a iniciar ** implantar aplicativo PHP ** com o implementador. Além disso, escreveremos mais sobre essa ** Ferramenta de implantação PHP ** nos próximos tutoriais.
Finalmente, [** containerize.com **] [6] está em um processo consistente de escrever postagens no blog sobre mais os mais recentes produtos de código aberto. Portanto, mantenha contato com esta [** Ferramentas de implantação **] [7] Categoria para as atualizações mais recentes.

## Explore
Você pode encontrar os seguintes links relevantes:
  *[** implantador **] [8]
  *[** Jenkins **] [9]
  *[** drone **] [10]
  *[** Capistrano **] [11]
  *[** Rancher **] [12]
  *[** concurso **] [13]
  *[** Ansible **] [14]
  *[** gocd **] [15]
  *[** Top 5 Ferramentas de implantação de código aberto em 2021 **] [16]
  *[** Integração contínua e implantação contínua do servidor de controle de origem **] [17]
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
