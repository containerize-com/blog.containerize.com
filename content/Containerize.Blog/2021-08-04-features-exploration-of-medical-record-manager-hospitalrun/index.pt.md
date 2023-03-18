---
title: "Recursos Exploração do gerente de registro médico Hospitalrun" 
seoTitle: "Recursos Exploração do gerente de registro médico Hospitalrun" 
description: "Siga este guia para começar o gerente de registro médico Hospitalrun. É de código aberto, multilíngue e automatiza muitos dos processos importantes." 
date: Wed, 04 Aug 2021 18:37:19 +0000
author: muhammadmustafa
summary: "O sistema de gerenciamento hospitalar é uma parte essencial dos estabelecimentos de saúde. O HospitalRun fornece controle de dados, funções baseadas em acesso e gerenciamento de receita." 
url: /pt/features-exploration-of-medical-record-manager-hospitalrun/
categories: ['Healthcare Software']
---

O sistema de gerenciamento hospitalar é uma parte essencial dos estabelecimentos de saúde. O HospitalRun fornece controle de dados, funções baseadas em acesso e gerenciamento de receita.

{{< figure align=center src="images/blog-banners-template-1.png" alt="Gerente de registro médico">}}


## Visão geral
Open Source [Healthcare Software] [1] ganhou imensa popularidade no passado recente. Em primeiro lugar, é devido ao avanço da tecnologia. Em segundo lugar, a Covid-19 influenciou a indústria médica de todas as maneiras e deu à luz uma nova oportunidade para a comunidade de código aberto. É altamente importante fornecer serviços de saúde de alta qualidade aos pacientes quando o mundo inteiro está passando por um tempo crucial. Felizmente, estão disponíveis várias soluções de gerenciamento de registros de saúde de código aberto que fornecem centralizações de dados, transparência, segurança, integrações e muitos outros recursos poderosos. Esses serviços gratuitos de saúde oferecem gerenciamento suave de fluxos de trabalho, como médicos, pacientes, clínicas e outros funcionários. Recentemente, o [contenderize.com] [2] publicou alguns artigos sobre sistemas de gerenciamento de informações hospitalares de código aberto que incluem [o 5 Top 5 Software de registro de saúde do paciente de código aberto] [3], [apresenta a exploração da solução de saúde médica OpenEMR] [4], e [como o software de saúde on -line capacita o setor de saúde] [5].
No passado, escrevemos um artigo que descreve o procedimento de criação de [HospitalRun] [6] no host local. Nesta postagem do blog, exploraremos [Hospitalrun] [6] ainda mais cobrindo os seguintes pontos.
  *** [Por que Hospitalrun?] [7] **
  *** [pacientes e módulos de agendamento] [8] **
  *** [integração e medicamentos do laboratório] [9] **
  *** [Imagem e incidentes] [10] **
  *** [Conclusão] [11] **

## por que hospitalrun? {#por que}
Existem muitas razões por trás da popularidade desse gerente de prontuário médico. O Hospitalrun é um registro eletrônico completo de saúde e um sistema de informações hospitalares. Ele suporta versões offline e online. Permite integrar clínicas e fornece sincronização de dados. Além disso, é multilíngue, plataforma cruzada e apresenta recursos de auto-hospedagem. Este sistema de registro de pacientes oferece gerenciamento de registros do paciente, agendamento de compromissos, medicamentos e gerenciamento de prescrição. Há também uma disposição para gerar relatórios personalizados que contêm detalhes completos de diagnóstico. Além disso, os membros da equipe médica podem assistir ao módulo de alta do paciente. Acima de tudo, este sistema de gerenciamento hospitalar oferece gerenciamento de casos acidentais e de emergência. É seguro, confiável e fácil de usar. No entanto, este sistema de gerenciamento de prontuário médico está completamente escrito em JavaScript e todo o código -fonte está disponível no [Github] [12] com documentação sobre desenvolvimento e implantação.

## pacientes e módulos de agendamento {#modules}
Nesta seção, passaremos pelo painel deste sistema de gerenciamento de informações hospitalares. Depois de fazer login, você pousará no painel do Hospitalrun, como mostrado na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.40.46-1024x502.png" alt="Gerente de registro médico">}}

No lado superior direito, existem duas opções. Em primeiro lugar, configurações nas quais os usuários podem escolher um idioma como inglês, italiano, turco e muito mais. Em segundo lugar, existe uma opção para criar um novo registro do paciente, novo compromisso, solicitar medicamentos, laboratório de solicitação, nova solicitação de imagem e incidente de relatório.

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.45.03-1024x576.png" alt="Sistema de gerenciamento hospitalar">}}

Existem várias opções, como pacientes, agendamento, medicamentos, laboratórios, imagens e incidentes no lado esquerdo. No módulo de pacientes, você pode adicionar novos registros de pacientes e ver a lista de pacientes já adicionados. Esse gerente de prontuário médico gratuito permite que os usuários registrem registros completos do paciente, como nome, endereço, contato, tipo de paciente e outros detalhes básicos. Na lista de pacientes, há uma barra de pesquisa também onde os usuários podem pesquisar nos pacientes da lista. Além disso, no módulo de agendamento, os trabalhadores médicos podem agendar uma consulta. A interface deste módulo é mostrada na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.23.42-1024x576.png" alt="sistema de gerenciamento de informações hospitalares">}}

A interface mostra os compromissos programados. Além disso, os usuários podem aplicar filtros para ver o número de compromissos por dia, por semana e por mês. Há uma opção no canto superior direito, onde os funcionários da saúde podem marcar uma nova consulta. As autoridades médicas podem inserir detalhes de nomeação, como data de início, data de término, razão e muito mais.

## Integração e medicamentos do laboratório {#lab}
Esta seção descreve as funcionalidades de dois módulos proeminentes deste software de saúde gratuito. O módulo de medicação permite que os usuários adicionem dados contra medicamentos nos quais eles podem definir a prioridade de medicamentos, como rotina, urgente ou o mais rápido possível. Da mesma forma, existe uma lista de solicitações de medicamentos em que os funcionários podem pesquisar por filtros.

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.54.03-1024x576.png" alt="sistema de gerenciamento de registros médicos">}}

No módulo de laboratório, os oficiais de saúde podem solicitar o laboratório inserindo informações, visitantes e tipos do paciente. Junto com isso, os profissionais de saúde podem adicionar uma nota adicional. Da mesma forma, existem filtros na opção de solicitações de laboratório, onde os usuários podem executar recursos de pesquisa.

## imagem e incidentes {#imaging}
A imagem é sobre a criação de uma representação visual de algo digitalizando um campo eletromagnético. O HospitalRun oferece gerenciamento de registros de imagem. Além disso, permite que os usuários criem novas solicitações de imagem e este módulo está vinculado ao módulo do paciente, pois outros módulos são interligados entre si. Da mesma forma, os usuários podem ver a lista de solicitações de imagem. Em seguida, no módulo de incidentes, as autoridades podem relatar um incidente inserindo os detalhes. Portanto, os usuários podem ver a lista de incidentes já relatados. Há uma representação gráfica de incidentes também disponível no último, como mostrado na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-08-02-at-19.59.11-1024x577.png" alt="Gerenciamento de registros de saúde">}}


## Conclusão {#conclusion}
Este é o fim deste post do blog. De fato, a maioria das instituições de saúde depende das operações manuais. Pode ser vulnerável em relação à segurança e integridade dos dados. No entanto, os sistemas automatizados garantem que os aspectos básicos e mais críticos das operações de saúde de rotina. Portanto, a instalação de um bom gerente de registro médico de código aberto protege seus ativos de fontes não autorizadas e ajuda a executar tarefas de rotina com facilidade e confiança. Esses software de código aberto sincronizam várias entidades, como médicos, pacientes, clínicas, laboratórios e facilitam o fluxo de trabalho. O ponto principal é que é hora de adotar um software de código aberto para o seu hospital ou clínica contra os desafios mais recentes. Você pode economizar seu tempo e esforços e se concentrar em tarefas importantes e críticas.
Finalmente, [contendeRize.com] [2] está escrevendo artigos sobre produtos de código aberto adicionais. Portanto, mantenha contato com a categoria [Healthcare Technologies] [1] para notícias e atualizações regulares.

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Openemr] [13]
  * [OpenMrs] [14]
  * [HospitalRun] [15]
  * [Hospital aberto] [16]
  * [Solismed] [17]
  * [Software de registro de saúde do paciente de código aberto 5] [3]
  * [Apresenta a exploração da solução de saúde médica OpenEMR] [4]
  * [Como configurar o Sistema de eHealth Hospitalrun no host local] [18]
  * [Como o software de saúde on -line capacita a indústria de saúde] [5]
[1]: https://products.containerize.com/healthcare-technologies/
[2]: https://www.containerize.com/
[3]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[4]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[5]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[6]: https://products.containerize.com/healthcare-technologies/hospitalrun/
[7]: #why
[8]: #modules
[9]: #lab
[10]: #imaging
[11]: #Conclusion
[12]: https://github.com/HospitalRun/hospitalrun
[13]: https://products.containerize.com/health-care-technologies/openemr
[14]: https://products.containerize.com/health-care-technologies/openmrs
[15]: https://products.containerize.com/healthcare-technologies/hospitalrun
[16]: https://products.containerize.com/healthcare-technologies/open-hospital
[17]: https://products.containerize.com/healthcare-technologies/solismed
[18]: https://blog.containerize.com/healthcare-software/how-to-install-hospitalrun-hospital-management-system/
