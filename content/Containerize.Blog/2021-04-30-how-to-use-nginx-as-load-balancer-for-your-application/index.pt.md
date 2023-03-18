---
title: "Como usar o nginx como balanceador de carga para seu aplicativo" 
seoTitle: "Como usar o nginx como balanceador de carga para seu aplicativo" 
description: "O NGINX é um servidor web popular de código aberto. É bem conhecido por alto desempenho e escalabilidade. Neste tutorial, aprenderemos a usar o NGINX como balanceador de carga" 
date: Fri, 30 Apr 2021 07:31:14 +0000
author: Assad Mahmood
summary: "O NGINX é popular por seu alto desempenho e escalabilidade. É o servidor web de código aberto nº 1. Neste tutorial, aprenderemos a usar o NGINX como balanceador de carga." 
url: /pt/how-to-use-nginx-as-load-balancer-for-your-application/
categories: ['Web Server Solution Stack']
---

## nginx é popular por seu alto desempenho e escalabilidade. É o servidor web de código aberto nº 1. Neste tutorial, aprenderemos a usar o NGINX como balanceador de carga.

{{< figure align=center src="images/nginx-as-load-balancer.png" alt="Como usar o nginx como balanceador de carga">}}

Os sites modernos de alta tráfego atendem a centenas de milhares e, em alguns casos, milhões de solicitações simultâneas de usuários ou clientes e retornam os dados corretos de texto, imagens, vídeo ou aplicativos, tudo de maneira rápida e confiável. Para atender às necessidades desses altos volumes e potência de computação, você precisa de mais servidores. Com mais servidores, você precisa de uma maneira de carregar o equilíbrio do tráfego entre esses servidores. Neste tutorial do blog, exploraremos o que é um balanceador de carga e como podemos usar o nginx como balanceador de carga.
Para configurar o balanceamento de carga do Nginx como um pré -requisito, você precisará ter pelo menos dois hosts com um software de servidor web instalado e configurado para ver as vantagens do balanceamento de carga com o NGINX. Se você já possui um host em execução configurado, duplique -o criando uma imagem personalizada e implantá -la em um novo servidor da Web. Então, vamos aprender a configurar a configuração de balanceamento de carga nginx passo a passo para seus servidores em nuvem.!
  *** [Nginx Web Server] [1] **
  *** [Balancer de carga] [2] **
  *** [Configure nginx como balanceador de carga (Round Robin)] [3] **
  *** [Sobre diferentes diretivas a montantes] [4] **
  *** [Conclusão] [5] **

## Nginx Web Server {#WebServer}
O NGINX é um servidor web de alto desempenho e código aberto. Além dos recursos do servidor HTTP, o NGINX também pode funcionar como um servidor proxy para email (IMAP, POP3 e SMTP) e um proxy reverso e para carregar o Balanço NGINX para servidores HTTP, TCP e UDP. Melhora o desempenho, a confiabilidade e a segurança de seus aplicativos. É popular por seu rico conjunto de recursos, configuração simples e baixo consumo de recursos.
Como funciona o nginx? O NGINX é comumente usado como um balanceador de carga de proxy reverso Nginx como um único ponto de entrada para um aplicativo da Web distribuído trabalhando em vários servidores separados. Ele usa uma abordagem assíncrona e orientada por eventos para oferecer baixo uso de memória e alta simultaneidade. Você pode ler mais sobre o nginx [aqui] [6].

## Carregar Balancer {#loadBalancer}
O balanceamento de carga é o processo de distribuição de tráfego de rede em vários servidores. E o "software" ou "hardware" que executa esse processo de distribuição é chamado de balanceador de carga. Um balanceador de carga é como um “policial de trânsito” em pé na frente de seus servidores e roteando solicitações de clientes em todos os servidores. Ele garante que seu aplicativo permaneça operacional, mesmo que um dos servidores diminua.

{{< figure align=center src="images/223F67DC-2518-4CDD-883A-7DAF3C78A7CC.png" alt="nginx como balanceador de carga">}}

As principais funções de um balanceador de carga estão seguindo:
  * Distribui solicitações de clientes ou carga de rede com eficiência em vários servidores
  * Garante alta disponibilidade e confiabilidade enviando solicitações apenas para servidores online
  * Fornece a flexibilidade para adicionar ou subtrair servidores conforme a demanda determina

## Configure nginx como balanceador de carga {#setup}
Antes de configurar o balanceamento de carga Robin Nginx Round Robin, você deve instalar o NGINX no seu servidor. Você pode instalá-lo rapidamente com apt-get:
```
sudo apt-get install nginx
```
Para configurar um balanceador de carga redondo-robin, precisaremos usar o módulo Nginx a montante. Atualizaremos a configuração do balanceador de carga nginx nas configurações do NGINX. Vamos abrir a configuração do seu site. Para o bem deste exemplo, estou usando o arquivo de configuração padrão
```
sudo vi /etc/nginx/sites-available/default
```
Precisamos adicionar a configuração de balanceamento de carga ao arquivo para configurar o balanceador de carga com o nginx.
Primeiro, precisamos incluir o módulo upstream para o balanceamento de carga nginx a montante que se parece com o seguinte:
```
upstream backend  {
  server backend1.example.com;
  server backend2.example.com;
  server backend3.example.com;
}
```
Use este back -end a montante como seu final de proxy em seu bloco de servidor:
```
server {
  location / {
    proxy_pass  http://backend;
  }
}
```
Reinicie o nginx
```
sudo service nginx restart
```
Contanto que você tenha todos os servidores em vigor, agora deve descobrir que o balanceador de carga de código aberto NGINX começará a distribuir os visitantes dos servidores igualmente. Esta distribuição igual é chamada de balanceamento de carga redonda-robina.

## Diretivas upstream {#Upstream}
Em nosso último exemplo, usamos um módulo simples a montante para fazer balanceamento de carga redondo-robin para distribuir o tráfego igualmente entre os servidores. No entanto, existem muitas razões pelas quais essa pode não ser a maneira mais eficiente de trabalhar com o tráfego. Existem várias diretivas que podemos usar para direcionar os visitantes do site com mais eficiência.

### Peso
Uma maneira de começar a alocar usuários para servidores com mais precisão é alocar peso específico para determinadas máquinas. O NGINX nos permite atribuir um número especificando a proporção de tráfego que deve ser direcionada para cada servidor.
Uma configuração equilibrada de carga que incluía o peso do servidor pode ser assim:
```
upstream backend  {
  server backend1.example.com weight=1;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```
O peso padrão é 1. com um peso de 2, backend2.Exemplo será enviado duas vezes mais tráfego do que backend1 e backend3, com um peso de 4, lidará com o dobro do tráfego do backend2 e quatro vezes mais do que o back -end 1.

### Cerquilha
O IP Hash permite que os servidores respondam aos clientes de acordo com seu endereço IP, enviando os visitantes de volta ao mesmo VPS cada vez que visitam (a menos que esse servidor esteja inativo). Se um servidor for conhecido por estar inativo, ele deve ser marcado como inativo. Todos os IPs que deveriam ir para o servidor Down são então direcionados para um alternativo.
A configuração abaixo fornece um exemplo:
```
upstream backend {
  ip_hash;
  server   backend1.example.com;
  server   backend2.example.com;
  server   backend3.example.com  down;
 }
```

### Max falha
De acordo com as configurações padrão de Round-Robin, o NGINX Application Load Balancer continuará enviando dados para os servidores privados virtuais, mesmo que os servidores não estejam respondendo. O MAX falhas pode impedir isso automaticamente, tornando os servidores que não respondem inoperante por um período de tempo definido.
Existem dois fatores associados às falhas máximas: max \ _fails e outono \ _timeout. Max falha refere -se ao número máximo de tentativas com falha de se conectar a um servidor que deve ocorrer antes de ser considerado inativo. Fall_timeout Especifica o comprimento desse servidor é considerado inoperante. Depois que o tempo expirar, novas tentativas de chegar ao servidor serão iniciadas novamente. O valor do tempo limite padrão é de 10 segundos.
Uma configuração de amostra pode ser assim:
```
upstream backend  {
  server backend1.example.com max_fails=3  fail_timeout=15s;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```

## Conclusão: {#conclusion}
Neste tutorial de balanceamento de carga nginx, aprendemos sobre o NGNIX, o balanceamento de carga e como configurar o Nginx Cargas Balancer para distribuir seu tráfego para vários servidores. Também exploramos diferentes algoritmos de balanceamento de carga, como Round-Robin, Hash e Max, falha. Se você estiver executando um aplicativo com alto volume e precisará distribuir a carga em diferentes servidores, o Nginx é uma das melhores opções para você. E o mais importante é que é 100% de servidor web de código aberto e gratuito.
Você pode se juntar a nós no [Twitter] [7], [LinkedIn] [8] e nossa página [Facebook] [9]. Que outro balanceador de carga poderoso para melhorar seus servidores Disponibilidade e eficiência de recursos __Do você u__? . Se você tiver alguma dúvida ou feedback, por favor [entre em contato] [10].

## Explore
Você pode encontrar os artigos mais relacionados abaixo
  * [Como proteger e criptografar Nginx com Let's Encrypt no Ubuntu 20.04] [11]
  * [Apache vs nginx - comparação detalhada em 2021] [12]
[1]: #webserver
[2]: #loadbalancer
[3]: #setup
[4]: #upstream
[5]: #conclusion
[6]: https://products.containerize.com/solution-stack/nginx
[7]: https://twitter.com/containerize_co
[8]: https://www.linkedin.com/company/containerize/
[9]: http://facebook.com/containerize
[10]: mailto:yasir.saeed@aspose.com
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/2021/02/26/apache-vs-nginx-detailed-comparison-in-2021/
