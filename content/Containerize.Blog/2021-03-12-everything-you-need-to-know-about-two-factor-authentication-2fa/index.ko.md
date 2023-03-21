---
title: "2 단계 인증 (2FA)에 대해 알아야 할 모든 것" 
seoTitle: "2 단계 인증 (2FA)에 대해 알아야 할 모든 것" 
description: "이 기사는 2 단계 (2FA) 인증을 자세히 설명하고 IdentityServer4 및 Twilio를 사용하여 .NET5에서 구현할 수있는 방법을 설명합니다." 
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: "이 기사는 IdentityServer4 및 SMS 제공 업체 (Twilio)와 같은 Identity Frameworks를 사용하여 .NET 5에서 구현할 수있는 2 단계 인증을 자세히 설명합니다. & nbsp;" 
url: /ko/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']
---

##이 기사에서는 IdentityServer4 및 SMS 제공 업체 (Twilio)와 같은 Identity Frameworks를 사용하여 .NET 5에서 구현할 수있는 2 단계 인증을 자세히 설명합니다.
{{_LINE_11_}}
다음 섹션이 포함되어 있습니다.
  * [2 요인 인증이란 무엇입니까? ][1]
  * [2FA는 어떻게 작동합니까?][2]
  * [2FA 및 다중 인증 인증][3]
  * [2FA 사용 단점][4]
  * [.NET5에서 2FA 구현][5]
먼저, 2FA가 무엇인지, 왜 모든 최신 웹 애플리케이션에서 없어야하는지 이해해 봅시다.

## 2 요인 인증이란 무엇입니까?   {#2fa}
이 맥락의 요소는 귀하가 귀하가 계정의 소유자임을 앱이나 서비스에 설득 할 수있는 방법을 의미합니다. 사용자 이름/비밀번호는 가장 일반적인 인증 요소로 널리 사용됩니다. 그러나 IT와 관련된 많은 보안 문제와 최근의 광범위한 데이터 유출로 인해 단일 요소 인증이 덜 안전 해졌습니다.
2 요인 인증은 추가 보안 계층으로 계정에 액세스하기 전에 작동합니다. 표준 로그인 프로세스에 대한 구조-코드를 이메일 또는 문자 메시지로 보내서 사용자 ID를 확인하는 추가 단계가 소개됩니다. 이런 식으로, 당신의 정체성이 입증되고 만 액세스가 부여됩니다.

## 2FA는 어떻게 작동합니까?   {#2fawork}
2FA에서 비밀번호는 여전히 첫 번째 인증 요소입니다. 따라서 계정에 로그인하면 계정 소유권을 확인 해야하는 다른 페이지로 리디렉션됩니다. 이것은 다양한 방법을 사용하여 수행 할 수 있습니다.
  1. 응용 프로그램은 종종 이메일 주소로 OTP (일회성 비밀번호)라는 확인 코드를 보냅니다.
  2. 코드는 휴대 전화의 문자 메시지로 전달됩니다.
  3. 모바일에 인증기 앱을 설치하여 로그인 요청을 승인 할 수 있습니다.
참고 :이 검증 코드는 무작위로 생성되며 일단 사용되면 만료됩니다. 또한 수명이 짧으므로 코드를 사용하기 전에 짧은 창이 있습니다 (해커가 검증 코드를 무차별하게하지 않도록합니다).

## 2FA를 다중 인증 인증으로 호출 할 수 있습니까?   {#mfa}
인증 방법은 2 요인으로 제한되지 않습니다. 많은 앱과 서비스는 사용자를 2FA 이상으로 이동시키고 다중 인증 인증을 사용하고 있습니다.
2FA 및 MFA (다중 인증 인증)는 종종 상호 교환 적으로 사용됩니다. 그러나 차이가 있습니다. 다단계 인증에서 두 개 이상의 요소가 사용됩니다.
사용자의 IP 주소, 지리적 위치 및 장치 정보를 비밀번호 및 OTP와 같은 다른 요소로 확인하여 사용자의 신원을 확인할 수 있습니다.
따라서 2FA가 MFA의 서브 세트라고 말할 수 있습니다. 2FA에는 두 가지 요소 만있는 반면, 다중 인자는 둘 이상의 요소를 활용할 수 있습니다. MFA는 기존 인증 프로세스에서 여러 계층의 보안을 추가하기 때문에 해커에게는 어렵습니다.

## 2FA를 사용하는 단점이 있습니까?   {#mfa-cons}
최신 앱에 존재하는 많은 '보안 및 개인 정보'솔루션과 유사합니다. 또한 사용자 경험의 마찰을 유발할 수있는 추가 단계가 포함되어 있기 때문에 가격과 함께 제공됩니다.
그러나 많은 앱과 서비스에 의해 채택되고 있으므로이 트레이드 오프가 허용되고 있습니다.

## 2FA 인증을 어떻게 구현할 수 있습니까?   {#구현 2fa}
이 섹션에서는 IdentityServer4 및 Twilio를 사용하여 .NET5에서 2FA를 구현하는 방법을 배웁니다.
Twilio에서 평가판 계정을 만들어 봅시다.
  1. 가입
  2. 유효한 전화 번호를 제공하여 계정을 확인하십시오.
계정이 확인되면 콘솔 대시 보드를 사용할 수 있습니다.

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Twilio 대시 보드">}}

  1. 계정 SID를 복사하고 대시 보드에서 토큰을 복사하십시오.
  1. SMS를 보내기 위해 사용할 번호를 구매하려면 이동하십시오.
참고 : Twilio는 모든 평가판 계정에서 전화 번호를 구매하는 데 사용할 15 달러 크레딧을 제공합니다.

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio- 전화 번호 검색">}}

'SMS 기능'을 지원하는 한 숫자를 선택할 수 있습니다. (프로젝트 후반에 구성하는 데 사용할 전화 번호를 기록하십시오).
5. 시험 계정을 사용하여 Twilio는 아래 링크를 사용하여 관리 할 수있는 검증 된 발신자 ID로 SMS를 보낼 수 있습니다.
Twilio Dashboard를 사용하여 구성해야 할 전부입니다.
ASP.NET Core 웹 앱을 만들어 봅시다 (아래와 같이 프로젝트 템플릿을 선택하고 .net5를 대상.

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="Visual Studio- 새로운 프로젝트">}}

이제 Nuget의 IdentityServer4, Twilio 패키지를 통합합니다.
  1.`설치 패키지 IdentityServer4 -version 4.1.1`
  2.`설치 패키지 트와 일리오 -버전 5.55.0`
IdentityServer4 Quick UI는 다음에서 사용할 수 있습니다.
Developer Shell에서 아래 명령을 실행하여 프로젝트에 포함시킬 수 있습니다.
`iEx ((new-Object System.net.WebClient) .downloadString ( 'https://raw.githubusercontent.com/identityserver/InditityServer4.quickstart.ui/main/getmain.ps1'))))).
올바르게 설치된 경우 - 프로젝트에 QuickStart 폴더가 표시됩니다.

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="프로젝트 계층">}}

이 프로젝트를 구축하고 실행합시다. 다음과 같이 환영 페이지를 볼 수 있어야합니다.

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}

이 템플릿은 Memory Inmory Data Store를 사용하므로 Config.cs 파일에 테스트 사용자를 추가 할 수 있습니다.

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="config.cs 클래스">}}

startup.cs를 엽니 다. configservices 메소드에서 IdentityServer4 서비스를 추가하십시오.
```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```
이제 요청 파이프 라인에 IdentityServer를 추가하십시오.
```
app.UseIdentityServer();
```
프로젝트를 실행하고 **_/계정/로그인 _** 로 이동하십시오.

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="IdentityServer4- 로그인">}}

**config.cs **에 추가 된 자격 증명으로 로그인
IdentityServer가 구성 및 실행되면. 그런 다음 Twilio를 사용하여 2FA에 대한 지원을 추가 할 수 있습니다.
다음 수업을 추가하겠습니다.
```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```
이 구성 클래스는 종속성 주입을 사용하여 설정을 주입하는 데 사용됩니다.
  1. 프로젝트를 마우스 오른쪽 클릭하고 Twilio의 구성으로 사용자 비밀을 추가하십시오 (SID, 토큰, PHONENEMBER)
  2. startup.cs 구성 메소드에서 설정을 주입합니다
```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```
startup.cs가 구성되었습니다. 이제 Twilio를 사용하여 SMS를 보내는 책임이있는 AuthMessagesender라는 새로운 서비스를 추가 할 수 있습니다.
AuthMessagesender가 구현할 인터페이스를 만들어 봅시다.
```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```
우리는 이것을 startup.cs에 주입합니다.
```
services.AddTransient <ISmsSender, AuthMessageSender>();

```
SMS 전송 코드는 매우 간단합니다. 우리는 단순히 Twilio 클라이언트를 생성하고 MessagerEsource.createAsync 메소드를 호출하여 SMS를 보냅니다.
```
public Task SendSmsAsync(string number, string message)
{
              var sid = _twilioSettings.Value.Sid;
            var token = _twilioSettings.Value.Token;
            var from = _twilioSettings.Value.From;
            TwilioClient.Init(sid, token);
            MessageResource.CreateAsync(new PhoneNumber(number),
                from: new PhoneNumber(from),
                body: message);
            return Task.FromResult(0);
}

```
로그인 메소드를 수정하여 사용자가 2FA를 활성화했는지 확인하여 코드 확인을 위해 리디렉션 할 수 있습니다.
QuickStart/views에서 verifycode.cshtml을 추가하십시오.

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2FA 행동">}}

자격 증명을 확인한 후 계정/로그인 메소드를 수정하여 확인 코드를 생성하고 보내십시오. 우리는이 순간에 서명 된 요청을 완료하고 싶지 않습니다.
따라서 httpcontext.signinasync 메소드 호출이 제거되고 대신 무작위 검증 코드를 생성하고 저장합니다 (현재 시연 목적으로 메모리 저장소를 사용하고 있습니다).
```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```

{{< figure align=center src="images/code-1024x521.png" alt="코드 스크린 샷">}}

그런 다음 코드 확인이 수행되고 로그인 워크 플로가 완료되는 "VerifyCode"페이지로 사용자를 리디렉션합니다.
VerifyCode 조치에서 우리는 단순히 메모리에서 사용자 및 코드 정보를 가져와 제공된 코드와 일치시키는 것입니다.

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="코드 스크린 샷">}}

코드가 일치하는 경우 SignInasync 메소드를 호출하여 인증 요청을 완료하고 사용자를 공인 페이지로 리디렉션합니다.
프로젝트를 실행합시다
단계 -1 : 사용자는 자격 증명을 제공합니다.

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2fademo- 로그인">}}

2 단계 : 자격 증명이 확인되고 확인 코드가 전송됩니다.

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2fademo -SMS">}}

3 단계 : 사용자는 올바른 코드를 확인합니다.

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2fademo- verifycode">}}

STEP-4 코드가 확인되고 2FA 인증이 완료되었습니다.

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2fademo- 공인 페이지">}}


### 결론:
이 기사에서는 IdentityServer4 및 Twilio를 사용하여 2FA와 .NET5의 구현에 대해 배웠습니다. 이 기사에서 사용 된 샘플 코드를이 [Repo][6]에서 다운로드 할 수 있습니다.
2FA에 SMS를 사용하면 보안이 반드시 강화되지만 여전히 [SIM 스왑 공격]에 취약합니다 [7]. 따라서 보안 연구원들은 2FA가 전화 네트워크에서 가로 채지 못하는 인 Apperenticator 앱 및 보안 키 ([Yubikey][8])와 같은 다른 접근법을 사용하도록 권장하고 있습니다. 우리는 다가오는 기사에서 그에 대해 더 많이 배울 것입니다 - 계속 지켜봐 주시기 바랍니다!

  
[1]: #2FA
[2]: #2fawork
[3]: #MFA
[4]: #mfa-cons
[5]: #implementing2fa
[6]: https://github.com/csehammad/2FAUsingIdentityServer4
[7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
[8]: https://www.yubico.com/
