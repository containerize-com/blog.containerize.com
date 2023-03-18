---
title: "Bagaimana Gatsby berintegrasi dengan WordPress? | Gatsby WordPress" 
seoTitle: "Bagaimana Gatsby berintegrasi dengan WordPress? | Gatsby WordPress" 
description: "Gunakan Gatsby WordPress bersama untuk meningkatkan kecepatan, skalabilitas, dan keamanan situs web Anda. Dalam tutorial ini, Anda akan belajar cara menggunakan perangkat lunak sumber terbuka ini." 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "Konfigurasikan Gatsby Open Source dengan WordPress Anda untuk membawa pengalaman pengguna yang lebih besar dan kinerja keseluruhan. Mari kita pelajari cara menggunakan generator situs statis ini." 
url: /id/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## Konfigurasikan Gatsby Open Source dengan WordPress Anda untuk membawa pengalaman pengguna yang lebih besar dan kinerja keseluruhan. Mari kita pelajari cara menggunakan generator situs statis ini.

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="Gatsby WordPress">}}


## Ringkasan
GatsbyJS adalah generator situs statis bertenaga graphql yang berbasis reaksi, graphql. Ini menggunakan pra-konfigurasi yang kuat untuk membangun situs web yang hanya menggunakan file statis untuk beban halaman yang sangat cepat. WordPress adalah platform blogging open source yang hebat. Akibatnya, ada banyak orang yang tahu cara mencari tahu apakah situs adalah situs WordPress sehingga mereka dapat meretasnya dan mencuri informasi. Menggunakan Gatsby WordPress bersama -sama akan memberi Anda kekuatan yang sama dari manajemen konten WordPress dan kecepatan Gatsby.
Dalam artikel ini, kita akan melihat apa itu Gatsby dan mengapa Anda perlu menggunakannya dengan perangkat lunak CMS. Kemudian, kami akan membahas tentang cara menggunakan WordPress dan Gatsby bersama untuk membangun pengalaman situs web yang luar biasa. Ayo mulai!
  *[** Apa itu Gatsby **?] [1]
  *** [pro dan kontra menggunakan WordPress dan Gatsby] [2] **
  *** [Cara menggunakan Gatsby dengan WordPress] [3] **
  *** [Kesimpulan] [4] **

## Apa itu gatsby {#gatsby}
Gatsby adalah generator situs statis. Ini berarti bahwa Gatsby menghasilkan file HTML statis yang diunggah ke server situs web Anda. Ketika pengunjung mendarat di situs Anda, file statis ini disajikan ke browser mereka, bukan konten dinamis WordPress umumnya melayani. Ini adalah kerangka kerja open source gratis dan berdasarkan React yang membantu pengembang membangun situs web dan aplikasi yang cepat menyala.

## pro dan kontra menggunakan WordPress dan Gatsby {#proscons}
Sesuai [dokumen] resmi Gatsby [5], mereka telah menyusun meja, untuk siapa kombinasi Gatsby WordPress sangat bagus dan tidak. Demi kemudahan, saya mendaftarkannya di sini.
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      WordPress dan Gatsby bagus untuk
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        Tim konten yang merasa nyaman dengan pengalaman pengeditan konten WordPress
{{_LINE_31_}}
{{_LINE_32_}}
        Tim pengembangan yang menghargai menggunakan teknologi populer dan open-source
{{_LINE_34_}}
{{_LINE_35_}}
        Desain ulang situs dengan konten yang sudah disimpan di WordPress
{{_LINE_37_}}
{{_LINE_38_}}
        Tim yang ingin memiliki data dan tumpukan teknologi mereka
{{_LINE_40_}}
{{_LINE_41_}}
        Alur kerja kontrol akses kompleks atau pembatasan pemodelan konten
{{_LINE_43_}}
{{_LINE_44_}}
        Proyek di mana keamanan itu penting
{{_LINE_46_}}
{{_LINE_47_}}
        Proyek permintaan tinggi di mana kinerja adalah yang terpenting
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      WordPress dan Gatsby tidak bagus
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        Tim yang membutuhkan penggunaan tema UI WordPress
{{_LINE_59_}}
{{_LINE_60_}}
        Mereka yang mencari cloud CMS yang dikelola sepenuhnya
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
Selain poin -poin resmi ini, saya ingin mendaftar beberapa pro dan kontra menggunakan Gatsby WordPress bersama
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      Pro
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        Kecepatan beban yang lebih cepat - situs web statis memuat lebih cepat dari dinamis. Akibatnya, itu berdampak pada halaman Anda memuat kecepatan dan peringkat SEO.
{{_LINE_75_}}
{{_LINE_76_}}
        Kurang Biaya Server - Karena file statis tidak memerlukan perangkat lunak khusus maka halaman HTML statis dapat disajikan dari server yang lebih murah juga.
{{_LINE_78_}}
{{_LINE_79_}}
        Lebih aman - untuk situs statis, tidak ada komponen yang bergerak dari bagian -bagian sehingga tidak ada kesempatan bagi peretas untuk mengeksploitasi perangkat lunak Anda.
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      Kontra
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        Kurva Pembelajaran - Ini membutuhkan keterampilan tambahan untuk pengembang. Seperti belajar reactjs dan graphql
{{_LINE_93_}}
{{_LINE_94_}}
        Hanya konten statis - jika Anda perlu melayani konten dinamis. Maka Gatsby bukan untuk Anda. Itu hanya dapat server file statis. Oleh karena itu, Anda tidak dapat memiliki sistem komentar yang mengambil data dari database.
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## Cara menggunakan Gatsby dengan WordPress {#howto}
Sebelum Anda dapat menginstal Gatsby, Anda perlu menginstal [NodeJs] [6] dan [NPM] [7] di lingkungan situs web Anda.

### Langkah 1 - Instal Gatsby
```
npm install -g gatsby-cli
```
Perintah ini menjalankan penginstal secara otomatis. Itu mengunduh dan menginstal semua dependensi sebelum menginstal Gatsby. Setelah selesai, Anda dapat mulai membuat situs web Gatsby pertama Anda.
```
gatsby new gatsby-site
```
Ini akan mengunduh template starter Gatsby dan menempatkannya di direktori/gatsby-wordpress. Setelah instalasi selesai, Anda dapat membuka versi pengembangan situs
```
gatsby develop
```
Sekarang, di browser web Anda, masukkan _http: // localhost: 8000_ dan template default Anda harus dibuka.

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="Template Starter Gatsby">}}


### Langkah 2 - Hubungkan Gatsby ke WordPress
Di bagian panduan Gatsby WordPress ini, kami akan menghubungkan generator situs statis ini dengan WordPress. Anda memiliki situs web statis dasar, tetapi Anda perlu mengintegrasikannya dengan WordPress. Ini menunjukkan situs Gatsby Anda ke alamat blog WordPress Anda, memungkinkannya untuk menarik data terbaru saat Anda menjalankan server pengembangan. Setelah terhubung, Gatsby akan membangun situs web statis berdasarkan templat Anda saat ini.
Instal plugin Gatsby Source WordPress dari repositori NPM.
```
npm install gatsby-source-wordpress
```

### Langkah 3 - Konfigurasikan Gatsby
Masukkan kode berikut di file _gatsby-config.js_ Anda
```
module.exports = {
  ...
  plugins: [
    ...,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseurl:  `wpexample.com`,
aliases: -  `wpexample.com`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      }
    },
  ]
}
```
Perbarui kode ini untuk menunjuk ke situs web WordPress Anda. Jika situs web Anda di -host secara lokal, setelah BaseUrl Anda dapat menggunakan _Localhost: 8888/WordPress_ alih -alih URL situs web Anda. Setelah menyimpan file, Anda harus membangun templat halaman Anda.

### Langkah 4 - Template Bangun Halaman
Templat Halaman Membangun Aktifkan Generator Situs ini untuk menghasilkan posting untuk setiap halaman di situs web WordPress Anda. Plugin sumber akan menarik data yang Anda butuhkan dari WordPress untuk halaman -halaman ini, tetapi Anda harus membuat templat desain.
Di file _gatsby-node.js_ Anda, tambahkan kode berikut
```
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}
```
Setelah memanggil semua data, Gatsby akan menghasilkan halaman untuk setiap posting. Menggunakan perintah kembangkan, Anda dapat menavigasi ke setiap halaman baru menggunakan URL yang dihasilkan.

## kesimpulan {#conclusion}
Dalam tutorial Gatsby WordPress ini, kami membahas cara menghasilkan situs web Gatsby dari WordPress. Kami belajar apa pro dan kontra dari dua perangkat lunak open source ini. Kami juga membahas cara menginstal dan memulai dengan lingkungan pengembangan Gatsby.
Akhirnya, [containerize.com] [8] menulis artikel tentang produk open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan kategori platform Open Source [Blogging] [9] untuk berita dan pembaruan reguler.
[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
