---
title: "Ubuntu'da Docker ile bir Node.js uygulaması nasıl oluşturulur" 
seoTitle: "Ubuntu'da Docker ile bir Node.js uygulaması nasıl oluşturulur" 
description: "Node.js ile ilgileniyorsanız ve Docker'ı kullanmak istiyorsanız. Bu öğretici, Docker ile bir Nodejs uygulaması nasıl oluşturulacağınızı size yönlendirecektir." 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "Bu makale size Docker Containerization ile bir NodeJS uygulamasının nasıl oluşturulacağınızı açıklayacaktır. Docker, uygulamaları kaplar olarak paketlemeye ve çalıştırmaya izin verir." 
url: /tr/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="Docker ile Nodejs uygulaması nasıl oluşturulur">}}


## Bu makale size Docker konteynerizasyonu ile bir Nodejs uygulamasının nasıl oluşturulacağınızı açıklayacaktır. Docker, uygulamaları kaplar olarak paketlemeye ve çalıştırmaya izin verir.
Bugün yazılım geliştirme araçları hakkında bir dizi öğretici başlıyoruz. Ve bu ilk makale, Docker kullanarak bir Node.js uygulamasının nasıl kapsayıcılarını kapsayacağını kapsar. Docker, geliştiricilerin uygulamaları kaplama olarak paketlemelerine ve çalıştırmasına yardımcı olur. Konteyner izole bir işlem ve sanal makinelere hafif bir alternatif olduğundan. Bu makalede, Docker konteynerizasyonu ile bir Nodejs uygulamasının nasıl oluşturulacağı açıklanmaktadır. Başlayalım!
  *[** Docker nedir **][1]
  *** [Önkoşul][2] **
  *[** Kurulum Node.js Uygulaması **][3]
  *[** Dockerfile yaz **][4]
  *[** Görüntü oluşturun ve Docker Container'ı çalıştırın **][5]
  *[** Sonuç **][6]

## Docker nedir {#docker}
Docker, kapsayıcılar adı verilen paketlerde yazılım sunmak için işletim sistemi düzeyindeki sanallaştırma kullanan bir servis ürünleri olarak bir platform kümesidir. Uygulamalar geliştirmek, nakliye ve çalıştırmak için açık bir platformdur. Docker, yazılımları hızlı bir şekilde sunabilmeniz için uygulamalarınızı altyapınızdan ayırmanızı sağlar.
Docker bir müşteri sunucusu mimarisi kullanır. Docker istemcisi, Docker kaplarınızı binanın, çalıştırmanın ve dağıtmanın ağır kaldırmasını yapan Docker Daemon ile konuşuyor. Docker istemcisi ve daemon, UNIX soketleri veya bir ağ arayüzü üzerinden bir REST API kullanarak iletişim kurar. İşte Docker mimarisinin şeması.

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="Docker Mimarisi">}}


## Önkoşullar {#PerRereq}
  * Ubuntu sunucusu
  * Docker sunucuya yüklendi
  * Node.js npm yüklü

## kurulum node.js uygulaması {#setup}
Görüntünüzü oluşturmak için önce uygulama dosyalarınızı yapmanız gerekir; bu, daha sonra kabınıza kopyalayabilirsiniz. Bu dosyalar uygulamanızın statik içeriğini, kodunu ve bağımlılıklarını içerecektir.
İlk olarak, kök dışı kullanıcının ana dizininde projeniz için bir dizin oluşturun. Ardından, oluşturduğunuz yeni bir klasörde aşağıdaki komutu yürütün.
```
npm init -y
npm i -s express
```
Yukarıdaki komut, bağımlılık olarak yüklü Express Framework ile bir Node.js uygulaması oluşturacaktır. Aşağıdaki kodu ** app.js ** dosyasına ekleyelim.
```
const express = require(‘express’);
const app = express();
app.get(‘/’, function(req,res){
  res.send(“Hello World”);
});
const port = 3000;
app.listen(port, function () {
  console.log(‘Listening on port 3000!’)
})
```
Uygulamayı Düğüm App.js ile başlatın
```
node app.js
```
Tarayıcınızı http: // \ _server \ _IP: 3000 adresine yönlendirin. Aşağıdaki açılış sayfasını göreceksiniz.
Şimdi çalışır durumda bir uygulamanız var. Artık bu uygulamayı yeniden yaratmamıza ve ölçeklendirmemize izin verecek DockerFile oluşturmak için devam edebiliriz.

## dockerfile {#dockerfile} yaz
DockerFile kullanarak, uygulandığında uygulama konteynerinize neyin dahil edileceğini ve konteyner ortamı belirleyebilirsiniz.
Her şeyden önce, projenizin kökünde aşağıdaki komutla DockerFile oluşturun.
```
vi Dockerfile
```
Uygulamanın temel resmini ayarlamak için ** talimattan aşağıdaki ** ekleyin:
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    Docker görüntüsüne ait olmayan dosyaları kaldırmak için .docherignore dosyası ekleyebilirsiniz.
{{_LINE_46_}}
{{_LINE_47_}}
Uygulama dizini ile birlikte /ev /düğümde ** node_modules ** alt dizinini oluşturalım. Bu, NPM yüklemeli kapta yerel düğüm modülleri oluşturduğumuzda önemli olacak gerekli izinlere sahip olmalarını sağlayacaktır.
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
Ardından, uygulamanın çalışma dizinini/home/node/app olarak ayarlayın:
```
...
WORKDIR /home/node/app
```
Ardından, Package.json ve Pack-Lock.json'u kopyalayın, proje dosyasını kök olmayan bir kullanıcı “düğüm” e atayın ve ardından NPM yüklemesini çalıştırın
```
...
COPY package*.json ./
USER node
RUN npm install
```
Uygulama kodunuzu uygun izinlerle kapsayıcıdaki uygulama dizinine kopyalayın
```
...
COPY --chown=node:node . .
```
Bağlantı noktasını ortaya çıkarmak için komutu ortaya çıkarın:
```
...
EXPOSE 3000
CMD [ "node", "app.js" ]
```
DockerFile'ın son sürümü şöyle görünmelidir:
```
FROM node:12-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]
```

## Görüntü oluşturun ve kaplama {#build}
Docker resminizi oluşturmak için aşağıdaki komutu çalıştırın
```
docker build -t <<image_name>> .
```
Bu, Docker Images komutunu kullanarak kontrol edebileceğiniz bir _docker image_ oluşturur. Artık aşağıdaki komutu kullanarak bu görüntüle bir kap oluşturmak mümkündür:
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
Bu, Docker PS komutunu çalıştırarak doğrulayabileceğiniz konteyneri başlatır. Şimdi http: // localhost: 3000'e erişerseniz tarayıcınızda node.js uygulamanızın çalıştığını göreceksiniz. Ancak bu sefer şimdi Docker konteynerinizden çalışıyor.

## Sonuç {#Conclusion}
Docker konteyneri ile geliştirme çok basit ve kolaydır. Docker, geliştiricilerin uygulamaları kaplama olarak paketlemelerine ve çalıştırmasına yardımcı olur. Bu öğreticide Ubuntu'da Docker Container kullanarak bir Node.js uygulamasının nasıl oluşturulacağını öğrendik. Yaklaşan makalelerde Docker'ın daha fazla kullanımı hakkında yazacağız ve ayrıca diğer araçları tartışacağız.

## Keşfetmek
  * [Ubuntu'da nginx ile birden fazla PHP sürümü nasıl kurulur][7]
  * [NGINX'i ters proxy olarak nasıl kurar ve yapılandırır][8]

  
[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
