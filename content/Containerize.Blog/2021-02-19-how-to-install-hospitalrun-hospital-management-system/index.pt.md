---
title: "Como instalar o HospitalRun | Sistema de gerenciamento hospitalar" 
seoTitle: "Como instalar o HospitalRun | Sistema de gerenciamento hospitalar" 
description: "Este artigo ajuda você a instalar o Hospitalrun no local -host. Automatize os processos médicos usando o sistema de gerenciamento hospitalar de código aberto, de código aberto e de código aberto." 
date: Fri, 19 Feb 2021 09:24:09 +0000
author: muhammadmustafa
summary: "Solução de assistência médica auto-hospedada para facilitar médicos e pacientes. Vamos aprender a implantar o Hospitalrun Grátis no Host, seguindo etapas simples." 
url: /pt/how-to-install-hospitalrun-hospital-management-system/
categories: ['Healthcare Software']
---

## Solução de saúde auto-hospedada para facilitar médicos e pacientes. Vamos aprender a implantar o Hospitalrun Grátis no Host, seguindo etapas simples.

{{< figure align=center src="images/hospitalrun.png" alt="Sistema de gerenciamento hospitalar">}}


## Visão geral
Recentemente, publicamos um post no [como o software de saúde on -line capacita a indústria de saúde][1] que descreve o impacto do sistema de gerenciamento hospitalar de código aberto no setor de saúde. A indústria global de software de saúde está ganhando valor com o passar do tempo. De fato é que a tecnologia transformou todos os campos da vida. O número de pacientes e funcionários se tornou tão alto que se tornou um aborrecimento gerenciar dados tão enormes. Por outro lado, existem muitas tarefas demoradas que ocorrem todos os dias e as entidades de saúde executam repetidamente essas tarefas. Portanto, a comunidade de fontes de código aberto desenvolveu software médico de código aberto que acompanha muitos módulos úteis para atender às necessidades de assistência médica.
Software médico de código aberto é desenvolvido para gerenciar registros de pacientes em relação ao seu histórico médico, bem como às disposições para o gerenciamento hospitalar. Além disso, o software de saúde de código aberto está alavancando a inteligência artificial para fornecer níveis avançados de serviços. A maioria dos tratamentos de doenças está sendo tratada pelo software que não apenas diagnostica os problemas, mas também fornece assistência na cura. No entanto, existem muitos softwares emergentes para hospitais. Nesta postagem do blog, abordaremos os seguintes pontos.
* [ **O que é Hospitalrun?** ][2]
* [ **Quais são as características do hospital** ][3]
* [ **Etapas de instalação do hospitalrun?** ][4]
* [ **Conclusão** ][5]

## O que é Hospitalrun? {#intro}

O HospitalRun é um sistema de gerenciamento de informações hospitalares gratuitas de código aberto. Essa solução gratuita de assistência médica é amigável ao meio ambiente, pois os usuários podem fazer uso total deste software livre, mesmo que não haja conectividade à Internet. Ele fornece muitos recursos, como gerenciamento de usuários, registros de pacientes, compromissos, sistema de cobrança, sistema de descarga de pacientes e muito mais. A interface do usuário deste sistema de eHealth de código aberto é lógico, onde os usuários podem navegar por diferentes elementos facilmente. Além disso, é fácil configurar e oferece uma imagem do Docker, onde os desenvolvedores podem implantá -la usando uma imagem do Docker.
Este **sistema de gerenciamento hospitalar** oferece provisão para integrar laboratórios para centralizar os registros médicos do paciente. Além disso, ele também permite que os usuários mantenham registros de visitas a pacientes, medicamentos e avaliações. Este sistema de registros de eHealth é seguro, flexível e oferece integrações com aplicativos de terceiros. Há uma comunidade muito vibrante que fornece suporte ao HospitalRun. Além disso, existe um sistema completo de alta do paciente. Este software médico de código aberto está completamente escrito em JavaScript. Além disso, há uma documentação abrangente disponível em relação ao desenvolvimento e implantação. De fato, esse software médico de código aberto fornece diferentes painéis para diferentes departamentos, como o Departamento de Apoio, o Departamento Clínico e o Departamento Administrativo. Todas essas funções vêm com diferentes níveis de permissão e acesso.

## Quais são as características do Hospitalrun? {#features}

Nesta seção, passaremos por alguns dos seguintes recursos importantes deste sistema de eHealth.
* **auto-hospedado** : O HospitalRun vem com recursos de auto-hospedagem e requer menos esforços para implantar nos servidores.
* **Agendamento de compromisso** : Este sistema de saúde permite que os usuários agendam compromissos. Há um módulo completo para compromissos disponíveis no painel. Além disso, os usuários podem pesquisar os compromissos com a ajuda de filtros.
* **Sistema de alta do paciente** : Este sistema de gerenciamento hospitalar mantém o registro de pacientes que receberam alta.
* **Gerenciamento de medicamentos** : Este sistema de registro de eHealth permite que os usuários registrem dados completos da medicação de um paciente em particular.
* **Gerenciamento de registros de pacientes** : Existe um módulo completo para o gerenciamento de registros dos pacientes. Os usuários podem registrar os detalhes de novos pacientes, admitidos pacientes contra seu histórico médico completo, como medicina, relatórios e visitas.
* **Sistema de cobrança personalizado** : Existe um rico sistema de cobrança disponível neste software de saúde de código aberto. Ele permite que os usuários gerem e gerenciem faturas com detalhes completos, como preços de laboratório, cobranças de enfermaria, preços de imagem e etc.
* **Registros médicos eletrônicos** : Este software médico de código aberto fornece todos os módulos necessários para manter registros médicos e administrativos.
* **Flexível** : O HospitalRun é flexível e extensível o suficiente para que os desenvolvedores possam estender sua funcionalidade para atender às funcionalidades necessárias.

## Etapas de instalação do Hospitalrun? {#steps}

Esta seção da postagem do blog descreve as etapas de instalação do HospitalRun.
Antes de começarmos, primeiro instale os seguintes pré-requisitos:
  * [Docker][6]
  * [Docker-Compose][7]
Depois que os pré-requisitos forem instalados, faça o download do código-fonte deste [link][8].
Depois disso, abra o terminal e execute os seguintes comandos:
CD genérico
servidor de CD
Agora, altere a senha na linha 8,9 de \ `conf/initcouch.sh \` e a senha na linha 7 de _config-Demo.js_.
Em seguida, execute o seguinte comando para criar e executar o aplicativo:
_docker-Compõe build && Docker-Compose up_
Depois disso, ele aumentará o recipiente do docker, como mostrado na imagem abaixo:

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.45.48-1024x554.png" alt="Sistema de gerenciamento hospitalar">}}

Por fim, você pode acessar esta solução de saúde no navegador em http: // localhost/#/login. Ele mostrará a seguinte tela de login.

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.46.35-1024x676.png" alt="Sistema de gerenciamento hospitalar">}}


## Conclusão {#Conclusão}

Este é o fim deste artigo do tutorial. Este sistema de registro de pacientes realmente ajuda a automatizar os serviços de saúde****. O moderno sistema de gerenciamento hospitalar de código aberto vem com ferramentas analíticas de dados que ajudam os profissionais de saúde a tomar as ações necessárias para melhores instalações de saúde. Esta postagem do blog realmente o ajudará se você estiver seriamente buscando implantar um sistema de eHealth para o seu hospital/clínica. Essas soluções de código aberto são econômicas, pois são integradas aos laboratórios e outras clínicas e também minimizam a papelada, informando todos os processos. A solução de saúde de código aberto permite que os usuários tenham visuais de todas as operações de saúde, como medicamentos, descargas, relatórios e gerenciamento de faturamento dos pacientes. Além disso, você pode se concentrar em outras tarefas importantes, como planejamento de recursos e avaliação de riscos. No entanto, existem muitos outros softwares de nível corporativo para hospitais mencionados na seção "Explorar" abaixo.
No final,* ***[containerize.com][9]****pretende escrever em produtos de código aberto adicionais. Portanto, mantenha contato com esta categoria [Healthcare Technologies][10] para as atualizações mais recentes.

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Openemr][11]
  * [OpenMrs][12]
  * [HospitalRun][13]
  * [Hospital aberto][14]
  * [Solismed][15]
  * [Coisas para revisar antes de optar por software de código aberto em 2021][16]
  * [Apresenta a exploração do gerente de registro médico Hospitalrun][17]
  * [Software de registro de saúde do paciente de código aberto 5 [18][18]
  * [Apresenta a exploração da solução de saúde médica OpenEMR][19]
  * [Como configurar o Sistema de eHealth Hospitalrun no host local][20]
  * [Como o software de saúde on -line capacita a indústria de saúde][1]



[1]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[2]: #intro
[3]: #features
[4]: #steps
[5]: #Conclusion
[6]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Finstall%2F&h=b220f083ceda72a13e4e77091860b9761ee26229422b3c2590128582d7227f81&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[7]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Fcompose%2Finstall%2F&h=58cfa40eb1b8827698a31cbe9ac3661def22ae2b5c28eb832c19da2e3b5a5b0d&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[8]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fhospitalrun.fra1.cdn.digitaloceanspaces.com%2Fdeployments%2Fhr-1.0.0-beta-generic.zip&h=3e79da04f5c6cd968d616537e74f30eef38c16590dc0cbc1945ec8ad214de9c0&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/health-care-technologies
[11]: https://products.containerize.com/health-care-technologies/openemr
[12]: https://products.containerize.com/health-care-technologies/openmrs
[13]: https://products.containerize.com/healthcare-technologies/hospitalrun
[14]: https://products.containerize.com/healthcare-technologies/open-hospital
[15]: https://products.containerize.com/healthcare-technologies/solismed
[16]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
[17]: https://blog.containerize.com/healthcare-software/features-exploration-of-medical-record-manager-hospitalrun/
[18]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[19]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[20]: https://blog.containerize.com/healthcare-software/pt/how-to-install-hospitalrun-hospital-management-system/
