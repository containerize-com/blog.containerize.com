---
title: "Lighttpd | Como configurar e configurar o servidor web de código aberto '" 
seoTitle: "Lighttpd | Como configurar e configurar o servidor web de código aberto" 
description: "Siga este artigo para aprender como configurar e configurar o servidor da web de código aberto. A LightTPD é um servidor da Web compatível que vem com controle robusto de carga da CPU." 
date: Wed, 16 Dec 2020 12:53:41 +0000
author: bilalahmed
summary: "Configure um servidor web seguro, leve e de código aberto. A LightTPD é um servidor web gratuito de nível corporativo e mais adequado para sites de altamente performance." 
url: /pt/lighttpd-how-to-setup-configure-open-source-web-server/
categories: ['Web Server Solution Stack']
---

## Configure um servidor web seguro, leve e de código aberto. A LightTPD é um servidor web gratuito de nível corporativo e mais adequado para sites de altamente performance.

{{< figure align=center src="images/How-to-Setup-and-Configure-Lighttpd-for-High-Performance-Websites.png" alt="servidor web de código aberto">}}

Bem -vindo a outra postagem no blog na categoria [Web Server Solution Stack][1]. Publicamos muitos artigos como [[Configuração xampp e phpmyadmin como localhost no Windows][2]][3], [[5 principais soluções de solução de servidor da web de código aberto em 2021][4] e alguns outros. Esses artigos demonstraram os processos de configuração de vários servidores da Web de código aberto, juntamente com os artigos de guia detalhados. De fato, um servidor da web foi introduzido nas costas dos anos 90 e, desde então, ganhou a maior popularidade no mundo digital. Existem muitos fatores anexados ao serviço de conteúdo pela Internet ou intranet. No entanto, uma grande parte da indústria digital está anexada às empresas ou comunidades que mantêm as soluções do servidor da web. Portanto, fatores como robustez, segurança, confiabilidade, armazenamento, otimização de dados e alguns outros fatores são os principais pilares de um sistema digital em nível empresarial.
Além disso, a Comunidade de código aberto desenvolveu muitos servidores da Web de código aberto e servidores de proxy da Web para permitir que o setor corporativo estabeleça seus próprios servidores da Web para hospedar sites e software de negócios. A Web LightTPD é uma pilha de soluções de servidor de código aberto e de código aberto, projetado especialmente para máquinas Linux. Nesta postagem do blog, passaremos pelo LightTPD cobrindo o seguinte ponto.
  * [O que é LightTPD?][5]
  * [Benefícios do LightTPD][6]
  * [Como configurar o LightTPD?][7]
  * [Conclusão][8]

## O que é LightTPD? {#what}

Comparado a outros servidores da Web, como Apache e Nginx, o servidor Web LightTPD possui uma pequena pegada de memória, por isso fornece um gerenciamento eficaz da carga da CPU. Este servidor da Web leve fornece conjuntos de recursos avançados, incluindo FastCGI, SCGI, AUTH, COMPRESSÃO DE SAÍDA e URL-LEVING, etc. Ele permite que os aplicativos da Web escritos em qualquer linguagem de programação sejam usados ​​com o servidor. O FastCGI do LightTPD pode ser configurado para suportar o PHP. Além do PHP, ele também suporta outras linguagens de programação, incluindo Python, Perl, Ruby e muito mais.
Existem muitos servidores da Web de código aberto e servidores proxy da Web, mas o LightTPD está no topo da lista que está sendo amplamente utilizada. Esta solução de servidor da Web é muito fácil de configurar e requer requisitos simples, como o Ubuntu 18.04. Além disso, aqueles que desejam implantar esta solução de código aberto podem baixar o lançamento mais recente deste [link][9]. Acima de tudo, ele suporta muitos idiomas que não o PHP, como Python, Ruby, Perl e muito mais. Além disso, toda a documentação está disponível em relação ao desenvolvimento e implantação. Portanto, os desenvolvedores podem encontrar o código -fonte no [GitHub][10].

## Benefícios do LightPD {#benefits}

Nesta seção, examinaremos os benefícios e a disposição que este servidor da web de código aberto oferece. Portanto, se você estiver procurando um servidor web rápido, eficiente e seguro, o LightTPD Web Server é a melhor opção para você. Não requer muita memória e uso da CPU. O que o torna um dos melhores para qualquer projeto que precise de velocidade e alto desempenho. A LightTPD pode lidar com até 10000 conexões em paralelo em um único servidor. A LightTPD é a solução perfeita para todos os servidores que sofrem de problemas ou problemas de desempenho. Esta solução gratuita é econômica e econômica.
Além disso, esta solução de servidor da web oferece suporte para quase todas as plataformas populares, como Windows, Linux, Solaris e MacOS. Da mesma forma, o LightTPD é um grande negócio para sistemas incorporados e tem a capacidade de servir conteúdo estático e dinâmico a vários usuários, mesmo com recursos limitados. Conhecida por sua segurança, velocidade, conformidade e flexibilidade, a LightTPD está rapidamente redefinindo a eficiência de um servidor da web.
A LightTPD fornece os seguintes benefícios proeminentes:
  * Suporte HTTP/2
  * Suporte para interfaces FastCGI, SCGI, CGI
  * TLS OCSP grampeando
  * MOD_PROXY faz solicitações http/1.1 para backends (alteração de http/1.0)
  * Suporte para o uso de chroot e mod_rewrite

## Como configurar o LightTPD? {#configure}

Nesta seção desta postagem do blog, exploramos as etapas para configurar o LightTPD. A instalação do LightTPD no Ubuntu é muito simples e direta. Basta usar o seguinte comando e você está pronto para ir
```
$ sudo apt install lighttpd
```
Você também pode instalar o LightTPD diretamente a partir da fonte. Para instalar no Git, use esses comandos
```
git clone https://git.lighttpd.net/lighttpd/lighttpd1.4.git
cd lighttpd1.4
./autogen.sh
```
Para instalar no SVN, use esses comandos
```
svn checkout https://github.com/lighttpd/lighttpd1.4/trunk lighttpd1.4
```
Use este comando para buscar atualizações
```
svn update
```
Para instalar dependências, execute este comando
```
apt-get build-dep lighttpd
```
Depois disso, use o comando de configuração da seguinte maneira
```
./configure --help
```
Construir usando o comando make
```
make
```
Após uma compilação bem -sucedida, agora instale o pacote
```
su make install
```
Verifique se o LightTPD está configurado e instalado corretamente visitando o URL [http: // yourserver-iip][11]. Você deve ver a seguinte página

{{< figure align=center src="images/How-to-Setup-and-Configure-Lighttpd-for-High-Performance-Web-1024x506.png" alt="Como configurar e configurar o LightTPD para sites de alto desempenho">}}


## Conclusão {#conclusion}

Isso nos leva ao final deste post do blog. Passamos pelo que é LightTPD? Como configurar o LightTPD? e configurando procedimento. A LightTPD é um servidor web de código aberto gratuito, de alto desempenho e de código aberto projetado para ambientes críticos de velocidade. A pegada de baixa memória, a carga pequena da CPU e as otimizações de velocidade o tornam adequado para servidores que sofrem problemas de carga. É leve, seguro e rápido em comparação com outros servidores da Web, o que o torna uma das melhores opções para sites de alto desempenho e crítico de velocidade. A LightTPD possui uma comunidade muito viva e vibrante que fornece suporte a problemas e consultas. Existem muitos produtos de código aberto operacional e postagens relevantes do blog que você pode passar pela seção "Explorar" abaixo. Portanto, este artigo pode realmente ajudá -lo se você deseja optar por um servidor da web de código aberto para o seu negócio.
Finalmente,  **[containerize.com][12]**  tem escrito em outros produtos de código aberto. Fique em contato com esta categoria [Solução do servidor da web][1] para atualizações regulares. Além disso, você pode nos seguir em nossas contas de mídia social [Facebook][13], [LinkedIn][14] e [Twitter][15].

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Xampp][16]
  * [Nginx][17]
  * [Caddy][18]
  * [LightTPD | Solução de código aberto e servidor web leve][19]
  * [Melhores opções de pilha de soluções de servidor da web de código aberto][1]
  * [5 Top 5 Solução de servidor da Web de código aberto Stacks em 2021][4]
  * [Configuração xampp e phpmyadmin como localhost no Windows][2]



 [1]: https://products.containerize.com/solution-stack/
 [2]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
 [3]: https://blog.containerize.com/2020/12/16/setup-and-configure-lighttpd-web-server-for-high-performance-websites/
 [4]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
 [5]: #what
 [6]: #benefits
 [7]: #configure
 [8]: #conclusion
 [9]: http://www.lighttpd.net/download/
 [10]: https://github.com/lighttpd/lighttpd1.4
 [11]: http://your-server-ip/
 [12]: https://www.containerize.com/
 [13]: https://web.facebook.com/containerize
 [14]: https://www.linkedin.com/company/containerize/
 [15]: https://twitter.com/containerize_co
 [16]: https://products.containerize.com/solution-stack/xampp/
 [17]: https://products.containerize.com/solution-stack/nginx/
 [18]: https://products.containerize.com/solution-stack/caddy/
 [19]: https://products.containerize.com/solution-stack/lighttpd
