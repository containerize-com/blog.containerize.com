---
title: "Todo lo que necesita saber sobre la autenticación de dos factores (2FA)" 
seoTitle: "Todo lo que necesita saber sobre la autenticación de dos factores (2FA)" 
description: "Este artículo explica la autenticación de dos factores (2FA) en detalle y cómo se puede implementar en .NET5 utilizando IdentityServer4 y Twilio." 
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: "Este artículo explica la autenticación de dos factores en detalle y cómo se puede implementar en .NET 5 utilizando marcos de identidad como IdentityServer4 y un proveedor de SMS (Twilio). & NBSP;" 
url: /es/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']
---

## Este artículo explica la autenticación de dos factores en detalle y cómo se puede implementar en .NET 5 utilizando marcos de identidad como IdentityServer4 y un proveedor de SMS (TWILIO).
{{_LINE_11_}}
Contiene las siguientes secciones:
  * [¿Qué es la autenticación de dos factores? ][1]
  * [¿Cómo funciona 2FA?][2]
  * [2fa y autenticación multifactor][3]
  * [Descartos de usar 2FA][4]
  * [Implementación de 2FA en .NET5][5]
En primer lugar, comprendamos qué es 2FA y por qué necesita ser una parte integral de cada aplicación web moderna.

## ¿Qué es la autenticación de dos factores?   {#2fa}
Un factor en este contexto implica una forma en que puede convencer a una aplicación o servicio de que usted es el propietario de la cuenta. El nombre de usuario/contraseña se usa ampliamente como el factor de autenticación más común. Sin embargo, debido a muchos problemas de seguridad asociados con TI y las infracciones de datos generalizadas recientes, la autenticación de un solo factor se ha vuelto menos seguro.
La autenticación de dos factores es una capa adicional de seguridad, que entra en juego antes de que pueda acceder a su cuenta. Entrada en el proceso de inicio de sesión estándar: introduce un paso adicional para verificar la identidad del usuario enviando un código (a su correo electrónico o como un mensaje de texto). De esta manera, su identidad está probada y solo se otorga acceso.

## ¿Cómo funciona 2FA?   {#2fawork}
En 2FA, la contraseña sigue siendo su primer factor de autenticación, por lo que cuando inicia sesión en su cuenta lo redirigirá a otra página donde se le exige que verifique la propiedad de la cuenta. Esto se puede hacer usando varias formas:
  1. La aplicación envía un código de verificación a menudo llamado OTP (contraseñas únicas) a su dirección de correo electrónico.
  2. El código se entrega como un mensaje de texto en su teléfono.
  3. Instala una aplicación Authenticator en el móvil a través de la cual puede autorizar las solicitudes de inicio de sesión.
Nota: Estos códigos de verificación se generan al azar y expiran una vez que se usan. Además, son de corta duración, por lo que hay una ventana corta antes de que pueda usar el código (esto evita que el hacker fuera a la fuerza bruta de los códigos de verificación).

## ¿Podemos llamar a 2FA como autenticación multifactor?   {#Mfa}
Los métodos de autenticación no se limitan a dos factores. Muchas aplicaciones y servicios están moviendo a sus usuarios más allá de 2FA y utilizando la autenticación multifactor.
2FA y MFA (autenticación multifactor) a menudo se usan indistintamente. Sin embargo, hay una diferencia. En la autenticación multifactor, se utilizan dos o más factores.
Puede verificar la dirección IP de un usuario, la ubicación geográfica y la información del dispositivo en la adición a otros factores, como una contraseña y OTP para verificar la identidad del usuario.
Por lo tanto, podemos decir que el 2FA es un subconjunto de MFA. En 2FA solo habrá dos factores, mientras que el factor multifactor puede utilizar dos o más factores. MFA dificulta a los piratas informáticos, ya que agrega múltiples capas de seguridad en el proceso de autenticación tradicional.

## ¿Hay algún inconveniente usando 2FA?   {#MFA-CONS}
Similar a muchas soluciones de "seguridad y privacidad" que existen en las aplicaciones modernas. También viene con un precio: inconveniente, ya que hay un paso adicional involucrado que puede causar fricción en la experiencia del usuario.
Sin embargo, está siendo adoptada por muchas aplicaciones y servicios, por lo que esta compensación se está volviendo aceptable.

## ¿Cómo puedo implementar la autenticación 2FA?   {#implementing2fa}
En esta sección, aprenderemos cómo implementar 2FA en .NET5 utilizando IdentityServer4 y Twilio.
Así que creemos una cuenta de prueba en Twilio:
  1. Registrarse
  2. Verifique su cuenta proporcionando un número de teléfono válido.
Una vez que se verifica su cuenta, puede usar su tablero de consola.

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Twilio Panel">}}

  1. Copie su cuenta SID y Auth Token desde el tablero.
  1. Navegue para comprar un número que usará para enviar SMS/
Nota: Twilio otorga 15 $ crédito en todas las cuentas de prueba que usará para comprar el número de teléfono.

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio - Búsqueda de número de teléfono">}}

Puede elegir cualquier número siempre que admita las "capacidades SMS". (Tenga en cuenta su número de teléfono que usaremos para configurar más adelante en nuestro proyecto).
5. Usando la cuenta de prueba, Twilio solo le permite enviar SMS a un IDS de llamadas verificados que puede administrar utilizando el siguiente enlace:
Eso es todo lo que necesitas para configurar usando Twilio Dashboard.
Creemos una aplicación web ASP.NET Core (seleccione la plantilla de proyecto como se muestra a continuación y se dirige .NET5.

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="Visual Studio - Nuevo proyecto">}}

Ahora integraremos IdentityServer4, paquetes Twilio de Nuget.
  1. `Install -Package IdentityServer4 -Version 4.1.1`
  2. `Instale -Package Twilio -Version 5.55.0`
IdentityServer4 UI Quick está disponible en:
Puede incluirlo en su proyecto ejecutando el siguiente comando en el desarrollador shell:
`IEX ((new-object System.net.webclient) .downloadString ('https://raw.githubusercontent.com/identityserver/identityserver4.quickstart.ui/main/getmain.ps1')`
Si se instaló correctamente, vería la carpeta QuickStart en su proyecto:

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="Jerarquía de proyectos">}}

Vamos a construir y ejecutar este proyecto. Debería poder ver la página de bienvenida como se muestra a continuación:

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}

Esta plantilla utiliza un almacén de datos en memoria para que pueda agregar sus usuarios de prueba en el archivo config.cs

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="Clase config.cs">}}

Abra startup.cs y agregue los siguientes servicios de identidadServer4 en el método configServices:
```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```
Ahora agregue IdentityServer en la tubería de solicitud:
```
app.UseIdentityServer();
```
Ejecute el proyecto y navegue a **_/cuenta/inicio de sesión _** 

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="IdentityServer4 - Iniciar sesión">}}

Inicie sesión con las credenciales como se agregó en **config.cs** 
Una vez que IdentityServer está configurado y en ejecución. Luego podemos agregar soporte para 2FA usando Twilio.
Agreguemos la siguiente clase:
```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```
Esta clase de configuración se utilizará para inyectar configuraciones utilizando la inyección de dependencia.
  1. Recticir directamente en el proyecto y agregar los secretos del usuario con la configuración de Twilio (SID, Token, PhoneNumber)
  2. Configuración de inyección en el método ConfigureService de Startup.cs
```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```
Startup.cs ha sido configurado. Ahora podemos pasar a agregar un nuevo servicio llamado AuthMessageSender que será responsable de enviar SMS usando Twilio.
Creemos una interfaz que implementará AuthMessageSer.
```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```
Inyectaremos esto en startup.cs.
```
services.AddTransient <ISmsSender, AuthMessageSender>();

```
El código de envío de SMS es bastante simple. Simplemente creamos un cliente de Twilio e invocamos el método MessageResource.Createasync para enviar SMS.
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
Modificaremos el método de inicio de sesión para verificar si el usuario ha habilitado 2FA para que podamos redirigirlos para la verificación del código.
Agregue VerifyCode.cshtml en QuickStart/Vistas:

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2fa en acción">}}

Modifique el método de cuenta/inicio de sesión para generar y enviar código de verificación después de verificar las credenciales. No queremos completar la solicitud de registro en este momento.
Por lo tanto, se eliminará httpcontext.signinasync Method Call, y en su lugar simplemente generaremos un código de verificación aleatorio y lo almacenará (actualmente estamos utilizando un almacén en memoria para fines de demostración).
```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```

{{< figure align=center src="images/code-1024x521.png" alt="Captura de pantalla de código">}}

Y luego redirigiremos al usuario a la página "VerifyCode" donde se realizará la verificación del código y se completará el flujo de trabajo de inicio de sesión.
En VerifyCode Action, simplemente estamos obteniendo información del usuario y código de la memoria y la coinciden con el código proporcionado.

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="Captura de pantalla de código">}}

Si el código coincide, simplemente completamos la solicitud de autenticación invocando el método Signinasync y redirigimos al usuario a la página autorizada.
Ejecutemos el proyecto
Paso -1: El usuario proporciona credenciales.

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2fademo - Iniciar sesión">}}

Paso 2: se verifican las credenciales y se envía un código de verificación:

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2fademo - SMS">}}

Paso 3: el usuario verifica el código correcto.

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2fademo - VerifyCode">}}

Se verifica el código del paso 4 y se ha completado la autenticación 2FA.

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2fademo - página autorizada">}}


## # Conclusión:
En este artículo, hemos aprendido sobre 2FA y su implementación en .NET5 utilizando IdentityServer4 y Twilio. Puede descargar el código de muestra utilizado en este artículo de este [Repo][6].
El uso de SMS para 2FA seguramente fortalece su seguridad, pero todavía es vulnerable a [ataques de intercambio SIM][7]. Por lo tanto, los investigadores de seguridad alentan a 2FA a utilizar otros enfoques como aplicaciones de autenticador y claves de seguridad ([yubikey][8]) que no se pueden interceptar en la red telefónica. Aprenderemos más sobre eso en un próximo artículo: ¡estén atentos!

  
[1]: #2FA
[2]: #2fawork
[3]: #MFA
[4]: #mfa-cons
[5]: #implementing2fa
[6]: https://github.com/csehammad/2FAUsingIdentityServer4
[7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
[8]: https://www.yubico.com/
