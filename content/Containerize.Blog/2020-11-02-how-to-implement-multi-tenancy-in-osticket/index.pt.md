---
title: "Personalização de Oticket-Implemente multi-redação no Oticket" 
seoTitle: "Personalização de Oticket-Implemente multi-redação no Oticket" 
description: "A implementação de multi-ingestão no Osticket pode economizar custos e utilização de recursos. Neste artigo, faremos a personalização de osticket para obter multi-literidade." 
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: "Osticket Helpdesk de vários inquilinos permite criar vários inquilinos a partir de uma única instalação. Isso torna o uso ideal dos recursos do servidor da Web." 
url: /pt/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']
---

## Multi-Tenant Osticket helpdesk permite criar vários inquilinos a partir de uma única instalação. Isso torna o uso ideal dos recursos do servidor da Web.

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="Personalização de Oticket - Implementar multi -redação no Oticket">}}

Neste artigo, discutiremos como fazer a personalização de osticket para implementar a multi-literidade. Esta postagem abordará os seguintes tópicos:
  * [Visão geral do Osticket][1]
  * [Visão geral da multiestância][2]
  * [Benefícios da multiestância][3]
  * [Implementação][3]
  * [Conclusão][4]

Visão geral do Osticket: {#osticket}
[OSTICKET][5] é um software de suporte técnico de suporte ao cliente on -line de código aberto. Ele fornece um painel de controle intuitivo e um componente de relatório em tempo real. É fácil usar o módulo de gerenciamento de consultas. Isso permite que você crie perguntas a partir do seu telefone, email e formulários baseados na Web. Que oferece inúmeras opções para ajudar a adaptar todas as partes da experiência de suporte ao cliente, como comentários e notificações por email.

Visão geral da multi-tenancidade: {#multiteNancy}
Multi-ingestão refere-se à implementação, onde várias instâncias independentes de um aplicativo operam em um ambiente compartilhado. As instâncias (inquilinos) são logicamente isoladas, mas fisicamente integradas. Uma organização pode ter vários departamentos. Para que eles possam criar vários inquilinos/instâncias do mesmo aplicativo. Por exemplo, no nosso caso, um sistema helpdesk pode ser configurado para diferentes domínios da mesma organização. Pode haver centenas de inquilinos, mas todos usarão os mesmos arquivos e, portanto, o mesmo armazenamento. Isso reduzirá os custos de armazenamento e também facilitará as atualizações. Os desenvolvedores precisam apenas atualizar os arquivos de um local, em vez de fazer alterações para cada site separadamente.

## Quais são os benefícios da multi-ingestão? {#Benefits}
Aqui estão alguns benefícios cruciais da multi-cinema
  *** Otimização de recursos: ** Uma máquina reservada para um inquilino não é eficiente. Porque um inquilino provavelmente não usará todo o poder de computação da máquina. Máquinas de compartilhamento maximizarão a disponibilidade de recursos.
  *** Custos mais baixos: ** Com vários inquilinos compartilhando os mesmos recursos custarão muito mais baixo do que se cada inquilino exigisse sua própria infraestrutura dedicada.
  *** Hospedagem eficiente: ** Também osticket com vários inquilinos reduzirá os custos de hospedagem ao mínimo em um ambiente compartilhado.
  *** Segurança: ** Com menos interação com o mundo exterior, a exposição a software maliciosa é reduzida.
  *** Atualização fácil **: Atualizar arquivos apenas em um local em vez de atualizá -los separadamente. Isso economizará muito tempo e esforço.

## implementação de osticket multi-tenant: {#implementation}
  * Crie um novo nome de banco de dados vazio como "main_db".
  * Em seguida, crie a tabela chamada "inquilino", que manterá detalhes sobre todos os inquilinos.
  * Terá campos seguintes:
  1. site_name
  2. URL
  3. DB_NAME

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="Personalização de Oticket - Implementar multi -redação no Oticket">}}

  * Site \ _Name Field manterá o nome do inquilino. O campo URL manterá o URL completo do inquilino. DB \ _Name Field manterá o nome do banco de dados que será criado para o novo inquilino.
  * Depois disso, Open /Include/ost-config.php e adicione o código seguinte
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
  * Este código atualizará a conectividade padrão do banco de dados. Primeiro receberá o URL do inquilino atual. Em seguida, ele receberá o nome do banco de dados de acordo com esse URL. É assim que o aplicativo saberá a qual banco de dados se conectar. Cada inquilino terá um banco de dados separado. O banco de dados será selecionado com base no URL do inquilino.
  * Para criar um novo inquilino, basta configurar o novo domínio inquilino no Nginx Server. Depois disso, basta copiar o banco de dados de oticket atual e renomeá -lo. Por fim, adicione a entrada na tabela "inquilino" do banco de dados "main_db".

## Conclusão: {#conclusion}
OSTICKET é um software de gerenciamento de suporte de suporte de It de código aberto gratuito e gratuito. Aprendemos como fazer personalizações de osticket para implementar a multiestação no Osticket para economizar custos, otimizar o aplicativo e reduzir os requisitos de recursos. Isso facilitará a vida para os desenvolvedores criarem novos inquilinos em algumas etapas simples. Portanto, crie vários inquilinos de osticket a partir da mesma instalação.

## Explore:
Confira a página seguinte para saber mais sobre o Oticket:
  * [OSTICKET - um software Helpdesk de código aberto gratuito][5]
  * [Um guia para iniciantes para desenvolver o plugin de osticket][6]
  * [Como configurar o software de suporte técnico on -line usando osticket][7]
  * [Automatize o sistema de emissão de bilhetes usando o WordPress e Osticket][8]

  
[1]: #osticket
[2]: #multitenancy
[3]: #benefits
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/osticket
[6]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[7]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[8]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
