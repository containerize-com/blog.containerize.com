---
title: "Phplist에서 설정 및 프로세스 바운스를 설정하는 방법" 
seoTitle: "Phplist에서 설정 및 프로세스 바운스를 설정하는 방법" 
description: "Phplist는 강력한 자체 주최 메일 링리스트 및 뉴스 레터 관리자입니다. 비즈니스가 뉴스 레터 캠페인을 보내고 프로세스가 쉽게 바운스를 보내도록 도와줍니다." 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "오픈 소스 뉴스 레터 및 이메일 마케팅 소프트웨어로 캠페인을 보내십시오. Phplist에서 바운스 관리 및 건강한 메일 링리스트를위한 바운스 처리를 자동화합니다." 
url: /ko/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## 오픈 소스 뉴스 레터 및 이메일 마케팅 소프트웨어로 캠페인을 보냅니다. Phplist에서 바운스 관리 및 건강한 메일 링리스트를위한 바운스 처리를 자동화합니다.

{{< figure align=center src="images/phplist-2.png" alt="프로세스는 Phplist를 바운다">}}

우리는 Phplist에서 [Multi-Tenancy][1] 및 [뉴스 레터 캠페인][2]를 구현하기위한 기사를 작성했습니다. 이 기사에서는 Phplist의 프로세스 바운스에 대한 이러한 점을 자세히 다룰 것입니다.
  * [Phplist 란 무엇입니까?][3]
  * [바운스 란 무엇입니까?][4]
  * [바운스 관리 설정][5]
  * [바운스 처리 방법?][6]
  * [결론][7]

## Phplist는 무엇입니까? {#phplist}

Phplist는 가장 인기있는 무료 및 오픈 소스 뉴스 레터 보내기 소프트웨어입니다. Phplist를 사용하면 비즈니스가 마케팅 이메일, 제품 업데이트 및 공지 사항을 가입자에게 전송할 수 있습니다. 비즈니스가 목록 관리, 아름다운 뉴스 레터 설계, 일정 캠페인 및 바운스 관리에 도움이됩니다. [더 읽기][8]

## 바운스 란 무엇입니까? {#bounce}

바운스는 여러 가지 이유로 인해 전달할 수없는 이메일 메시지입니다. 우편함과 같은 이유가 가득 차고 이메일 주소가 더 이상 유효하거나 잘못된 이메일 주소가되지 않을 수 있습니다. 이로 인해 바운스를 처리해야합니다.

## 설정 바운스 관리 {#setup}

바운스 관리를 설정하려면 config.php 파일에서 다음 설정을 구성해야합니다.

{{< figure align=center src="images/bounce-handling-phplist.png" alt="PHPLIST- 바운스 처리 관리">}}

이러한 구성에 대해 아래 단계에서 더 설명하겠습니다.
  * 먼저 바운스 메시지를 받으려는 곳에 이메일 주소를 추가해야합니다. **message_envelope** 변수를 찾아 이메일 주소를 추가 할 수 있습니다.
* Phplist는 두 개의 프로토콜을 통해 바운스 사서함에서 이메일을 가져올 수 있습니다. **mbox 및 pop3**. 따라서**bounce_protocol** 변수를 찾아 환경에 따라 변경하십시오.
* **mbox**prototcol을 설정 한 경우 파일 형식을 정의해야합니다. 따라서**bounce_mailbox** 를 찾아 '/var/spool/mail/listbounces'와 같은 경로를 설정하십시오.
* **POP3** 프로토콜을 사용한 경우 메일 상자의 호스트, 사용자 이름 및 비밀번호**를 구성해야합니다. 위의 Sreenshot에서 이러한 설정을 볼 수 있습니다.
* **POP3** 프로토콜의 위 설정 외에도 포트 및 암호화를 추가해야 할 수도 있습니다.

## 바운스를 처리하는 방법? {#process}

PHPLIST는 프로세스 바운스를위한 두 가지 방법 인 수동 및 자동화를 지원합니다. 바운스 처리를 자동화하려면 Cron 작업을 만들어야합니다. **시스템> 프로세스 바운스**페이지를 방문하여 수동으로 처리 할 수도 있습니다. 따라서 먼저 요구 사항에 따라**수동 \ _process \ _bounces** 설정을 변경해야합니다. [Phplist Docs][9]를 방문하여 프로세스 바운스에 대한 Cron 작업을 설정할 수 있습니다.

## 결론 {#conclusion}

이 게시물에서는 반송 이메일 주소 및 프로세스 바운스를 구성하는 방법을 배웠습니다. 가입자가 적은 경우 수동 방법으로 바운스를 쉽게 처리 할 수 ​​있습니다. 그러나 큰 목록에는 자동 바운스 처리 프로세스를 사용해야합니다. 시간을 절약하고 깨끗하고 유효한 가입자 목록을 만들 수 있습니다.



[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
