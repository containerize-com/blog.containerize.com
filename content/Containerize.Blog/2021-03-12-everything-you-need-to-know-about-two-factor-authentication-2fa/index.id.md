---
title: "Semua yang Perlu Anda Ketahui Tentang Otentikasi Dua Faktor (2FA)" 
seoTitle: "Semua yang Perlu Anda Ketahui Tentang Otentikasi Dua Faktor (2FA)" 
description: "Artikel ini menjelaskan otentikasi dua faktor (2FA) secara rinci dan bagaimana cara diimplementasikan dalam .net5 menggunakan IdentityServer4 dan Twilio." 
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: "Artikel ini menjelaskan otentikasi dua faktor secara terperinci dan bagaimana dapat diimplementasikan dalam .NET 5 menggunakan kerangka kerja identitas seperti IdentityServer4 dan penyedia SMS (Twilio). & NBSP;" 
url: /id/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']
---

## Artikel ini menjelaskan otentikasi dua faktor secara rinci dan bagaimana cara diimplementasikan dalam .NET 5 menggunakan kerangka kerja identitas seperti IdentityServer4 dan penyedia SMS (Twilio).
{{_LINE_11_}}
Itu berisi bagian berikut:
  * [Apa itu otentikasi dua faktor? ][1]
  * [Bagaimana cara kerja 2FA?][2]
  * [2FA dan otentikasi multi-faktor][3]
  * [Kelemahan menggunakan 2FA][4]
  * [Menerapkan 2FA di .net5][5]
Pertama, mari kita pahami apa itu 2FA dan mengapa itu perlu menjadi bagian integral dari setiap aplikasi web modern.

## Apa itu otentikasi dua faktor?   {#2fa}
Faktor dalam konteks ini menyiratkan cara Anda dapat meyakinkan aplikasi atau layanan bahwa Anda adalah pemilik akun. Nama pengguna/kata sandi banyak digunakan sebagai faktor otentikasi yang paling umum. Namun, karena banyak masalah keamanan yang terkait dengannya dan pelanggaran data yang luas baru-baru ini-otentikasi faktor tunggal menjadi kurang aman.
Otentikasi dua faktor adalah lapisan keamanan tambahan, yang ikut berperan sebelum Anda dapat mengakses akun Anda. In-addition ke proses login standar-ini memperkenalkan langkah tambahan untuk memverifikasi identitas pengguna dengan mengirim kode (ke email Anda atau sebagai pesan teks). Dengan cara ini, identitas Anda terbukti dan baru kemudian akses diberikan.

## Bagaimana cara kerja 2FA?   {#2Fawork}
Di 2FA, kata sandi masih merupakan faktor otentikasi pertama Anda - jadi ketika Anda masuk ke akun Anda, itu akan mengarahkan Anda ke halaman lain di mana Anda diharuskan memverifikasi kepemilikan akun. Ini dapat dilakukan dengan menggunakan berbagai cara:
  1. Aplikasi mengirimkan kode verifikasi yang sering disebut OTP (kata sandi satu kali) ke alamat email Anda.
  2. Kode dikirimkan sebagai pesan teks di ponsel Anda.
  3. Anda menginstal aplikasi Authenticator di ponsel yang dapat Anda wewenang sebagai permintaan login.
Catatan: Kode verifikasi ini dihasilkan secara acak dan kedaluwarsa setelah digunakan. Juga, mereka berumur pendek - jadi ada jendela pendek sebelum Anda dapat menggunakan kode (ini mencegah peretas untuk memaksa kode verifikasi).

## Bisakah kita menyebut 2FA sebagai otentikasi multi-faktor?   {#Mfa}
Metode otentikasi tidak terbatas pada dua faktor. Banyak aplikasi dan layanan menggerakkan penggunanya melampaui 2FA dan menggunakan otentikasi multi-faktor.
2FA dan MFA (otentikasi multi-faktor) sering digunakan secara bergantian. Namun ada perbedaan. Dalam otentikasi multi-faktor, dua faktor atau lebih digunakan.
Ini dapat memeriksa alamat IP pengguna, geo-lokasi, dan informasi perangkat yang sesuai dengan faktor-faktor lain seperti kata sandi dan OTP untuk memverifikasi identitas pengguna.
Oleh karena itu, kita dapat mengatakan 2FA adalah subset dari MFA. Di 2FA hanya akan ada dua faktor sedangkan multi-faktor dapat memanfaatkan dua atau lebih faktor. MFA menyulitkan peretas karena menambahkan beberapa lapisan keamanan dalam proses otentikasi tradisional.

## Apakah ada kelemahan menggunakan 2FA?   {#mfa-cons}
Mirip dengan banyak solusi 'keamanan dan privasi' yang ada di aplikasi modern. Ini juga dilengkapi dengan harga - ketidaknyamanan, karena ada langkah tambahan yang terlibat yang dapat menyebabkan gesekan dalam pengalaman pengguna.
Namun, itu sedang diadopsi oleh banyak aplikasi dan layanan sehingga pertukaran ini menjadi dapat diterima.

## Bagaimana cara menerapkan otentikasi 2FA?   {#impleming2fa}
Di bagian ini, kita akan belajar cara mengimplementasikan 2FA di .net5 menggunakan IdentityServer4 dan Twilio.
Jadi mari kita buat akun uji coba di Twilio:
  1. Mendaftar
  2. Verifikasi akun Anda dengan memberikan nomor telepon yang valid.
Setelah akun Anda diverifikasi, Anda kemudian dapat menggunakan dasbor konsolnya.

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Dasbor Twilio">}}

  1. Salin Akun Anda Sid dan Auth Token dari dasbor.
  1. Buka untuk membeli nomor yang akan Anda gunakan untuk mengirim SMS/
Catatan: Twilio memberikan kredit $ 15 di semua akun percobaan yang akan Anda gunakan untuk membeli nomor telepon.

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio - Pencarian Nomor Telepon">}}

Anda dapat memilih nomor apa pun selama mendukung 'kemampuan SMS'. (Catat nomor telepon Anda yang akan kami gunakan untuk mengkonfigurasi nanti di proyek kami).
5. Menggunakan akun percobaan, Twilio hanya memungkinkan Anda mengirim SMS ke ID penelepon yang diverifikasi yang dapat Anda kelola menggunakan tautan di bawah ini:
Hanya itu yang perlu Anda konfigurasi menggunakan Dasbor Twilio.
Mari kita buat aplikasi web Core ASP.NET (pilih Project Template seperti di bawah ini dan target .NET5.

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="Visual Studio - Proyek Baru">}}

Kami sekarang akan mengintegrasikan paket IdentityServer4, Twilio dari Nuget.
  1. `install -package identityserver4 -version 4.1.1`
  2. `install -package twilio -version 5.55.0`
IdentityServer4 UI Quick tersedia di:
Anda dapat memasukkannya ke dalam proyek Anda dengan menjalankan perintah di bawah ini dalam shell pengembang:
`iex ((new-object system.net.webclient) .downloadString ('https://raw.githubusercontent.com/identityserver/identityserver4.quickstart.ui/main/getmain.ps1')))`
Jika diinstal dengan benar - Anda akan melihat folder QuickStart di proyek Anda:

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="Hirarki Proyek">}}

Mari kita bangun dan jalankan proyek ini. Anda harus dapat melihat halaman selamat datang seperti yang ditunjukkan di bawah ini:

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}

Templat ini menggunakan penyimpanan data dalam memori sehingga Anda dapat menambahkan pengguna pengujian Anda di file config.cs

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="Kelas config.cs">}}

Buka startup.cs dan tambahkan layanan IdentityServer4 berikut dalam metode ConfigServices:
```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```
Sekarang tambahkan IdentityServer dalam pipa permintaan:
```
app.UseIdentityServer();
```
Jalankan proyek dan navigasikan ke **_/akun/login _** 

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="IdentityServer4 - Login">}}

Masuk dengan kredensial yang ditambahkan dalam **config.cs** 
Setelah IdentityServer dikonfigurasi dan dijalankan. Kami kemudian dapat menambahkan dukungan untuk 2FA menggunakan Twilio.
Mari Tambahkan Kelas Berikut:
```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```
Kelas konfigurasi ini akan digunakan untuk menyuntikkan pengaturan menggunakan injeksi ketergantungan.
  1. RightClick pada proyek dan tambahkan rahasia pengguna dengan konfigurasi Twilio (Sid, Token, Phonenumber)
  2. Suntikan Pengaturan di Metode ConfigureService dari Startup.cs
```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```
Startup.cs telah dikonfigurasi. Kami sekarang dapat beralih ke menambahkan layanan baru yang disebut AuthMessageDender yang akan bertanggung jawab untuk mengirim SMS menggunakan Twilio.
Mari kita buat antarmuka yang akan diimplementasikan oleh AuthMessageSender.
```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```
Kami akan menyuntikkan ini di startup.cs.
```
services.AddTransient <ISmsSender, AuthMessageSender>();

```
Kode pengiriman SMS cukup sederhana. Kami cukup membuat klien twilio dan memohon metode messageresource.createasync untuk mengirim SMS.
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
Kami akan memodifikasi metode login untuk memeriksa apakah pengguna telah mengaktifkan 2FA sehingga kami dapat mengarahkannya untuk verifikasi kode.
Tambahkan VerifyCode.cshtml di QuickStart/Views:

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2FA beraksi">}}

Ubah metode akun/login untuk menghasilkan dan mengirim kode verifikasi setelah memverifikasi kredensial. Kami tidak ingin menyelesaikan permintaan masuk saat ini.
Oleh karena itu, panggilan metode httpcontext.signinasync akan dihapus, dan sebaliknya kami hanya akan menghasilkan kode verifikasi acak dan menyimpannya (saat ini kami menggunakan toko di dalam memori untuk tujuan demonstrasi).
```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```

{{< figure align=center src="images/code-1024x521.png" alt="Tangkapan layar kode">}}

Dan kemudian kami akan mengarahkan pengguna ke halaman "VerifikasiCode" di mana verifikasi kode akan dilakukan dan alur kerja masuk akan selesai.
Dalam verifikasi Action, kami hanya mengambil informasi pengguna dan kode dari memori dan mencocokkannya dengan kode yang disediakan.

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="Tangkapan layar kode">}}

Jika kode dicocokkan maka kami cukup menyelesaikan permintaan otentikasi dengan memanggil Metode SigninAsync dan mengarahkan kembali pengguna ke halaman resmi.
Mari Jalankan Proyek
Langkah -1: Pengguna memberikan kredensial.

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2Fademo - Login">}}

Langkah-2: Kredensial diverifikasi dan kode verifikasi dikirim:

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2Fademo - SMS">}}

Langkah-3: Pengguna memverifikasi kode yang benar.

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2Fademo - VerifikasiCode">}}

Kode Langkah-4 diverifikasi dan otentikasi 2FA telah selesai.

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2Fademo - Halaman Resmi">}}


## # Kesimpulan:
Dalam artikel ini, kami telah belajar tentang 2FA dan implementasinya di .net5 menggunakan IdentityServer4 dan Twilio. Anda dapat mengunduh kode sampel yang digunakan dalam artikel ini dari [repo] ini [6].
Menggunakan SMS untuk 2FA pasti memperkuat keamanan Anda tetapi masih rentan terhadap [serangan swap sim][7]. Oleh karena itu, peneliti keamanan mendorong 2FA untuk menggunakan pendekatan lain seperti aplikasi authenticator dan kunci keamanan ([yubikey][8]) yang tidak dapat dicegat di jaringan telepon. Kami akan belajar lebih banyak tentang itu di artikel yang akan datang - tetaplah disini!

  
[1]: #2FA
[2]: #2fawork
[3]: #MFA
[4]: #mfa-cons
[5]: #implementing2fa
[6]: https://github.com/csehammad/2FAUsingIdentityServer4
[7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
[8]: https://www.yubico.com/
