---
title: "개츠비는 WordPress와 어떻게 통합됩니까? | 개츠비 워드 프레스" 
seoTitle: "개츠비는 WordPress와 어떻게 통합됩니까? | 개츠비 워드 프레스" 
description: "Gatsby WordPress를 함께 사용하여 웹 사이트의 속도, 확장 성 및 보안을 향상시킵니다. 이 자습서에서는 이러한 오픈 소스 소프트웨어를 사용하는 방법을 배웁니다." 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "WordPress로 오픈 소스 개츠비를 구성하여 더 많은 사용자 경험과 전반적인 성능을 제공하십시오. 이 정적 사이트 생성기를 사용하는 방법을 배우겠습니다." 
url: /ko/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## WordPress와 함께 오픈 소스 개츠비를 구성하여 더 많은 사용자 경험과 전반적인 성능을 제공합니다. 이 정적 사이트 생성기를 사용하는 방법을 배우겠습니다.

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="개츠비 워드 프레스">}}


## 개요
Gatsbyjs는 무료 및 오픈 소스 반응 기반 GraphQL 전원 정적 사이트 생성기입니다. 강력한 사전 구성을 사용하여 엄청나게 빠른 페이지로드를 위해 정적 파일 만 사용하는 웹 사이트를 작성합니다. WordPress는 훌륭한 오픈 소스 블로깅 플랫폼입니다. 결과적으로, 사이트가 WordPress 사이트인지 파악하여 정보를 훔칠 수 있는지 알아내는 방법을 아는 많은 사람들이 있습니다. Gatsby WordPress를 함께 사용하면 WordPress 컨텐츠 관리 및 Gatsby의 속도와 동일한 힘을 제공합니다.
이 기사에서는 Gatsby가 무엇인지, CMS 소프트웨어와 함께 사용해야하는 이유를 살펴 보겠습니다. 그런 다음 WordPress와 Gatsby를 함께 사용하여 놀라운 웹 사이트 경험을 구축하는 방법에 대해 자세히 설명합니다. 시작하자!
* [**개츠비 란 무엇입니까**?][1]
* **[WordPress 및 Gatsby 사용의 장단점][2]**
* **[WordPress와 함께 Gatsby를 사용하는 방법][3]**
* **[결론][4]**

## Gatsby는 무엇입니까   {#Gatsby}
개츠비는 정적 사이트 생성기입니다. 이는 Gatsby가 웹 사이트 서버에 업로드 된 정적 HTML 파일을 생성 함을 의미합니다. 방문자가 귀하의 사이트에 착륙하면 이러한 정적 파일은 동적 콘텐츠 대신에 일반적으로 제공되는 브라우저에 제공됩니다. REACT를 기반으로 한 무료 및 오픈 소스 프레임 워크로 개발자가 타오르는 웹 사이트 및 앱을 구축 할 수 있도록 도와줍니다.

## WordPress 및 Gatsby 사용의 장단점   {#proscons}
개츠비의 공식 [문서][5]에 따르면, 그들은 개츠비 워드 프레스의 조합이 훌륭하고 그렇지 않은 테이블을 편집했습니다. 쉽게하기 위해, 나는 여기에 나열하고 있습니다.
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      WordPress와 Gatsby는 훌륭합니다
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        WordPress 콘텐츠 편집 경험에 익숙한 콘텐츠 팀
{{_LINE_31_}}
{{_LINE_32_}}
        인기있는 오픈 소스 기술을 사용하는 개발 팀
{{_LINE_34_}}
{{_LINE_35_}}
        WordPress에 이미 저장된 컨텐츠가있는 사이트의 재 설계
{{_LINE_37_}}
{{_LINE_38_}}
        데이터 및 기술 스택을 소유하고자하는 팀
{{_LINE_40_}}
{{_LINE_41_}}
        복잡한 액세스 제어 워크 플로 또는 컨텐츠 모델링 제한
{{_LINE_43_}}
{{_LINE_44_}}
        보안이 중요한 프로젝트
{{_LINE_46_}}
{{_LINE_47_}}
        성능이 가장 높은 높은 수요 프로젝트
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      WordPress와 Gatsby는 좋지 않습니다
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        WordPress UI 테마 사용이 필요한 팀
{{_LINE_59_}}
{{_LINE_60_}}
        완전히 관리되는 클라우드 CM을 찾고있는 사람들
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
이 공식적인 요점 외에도 Gatsby WordPress를 함께 사용하는 장단점을 나열하고 싶습니다.
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      프로
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        더 빠른로드 속도 - 정적 웹 사이트가 동적보다 빠르게로드됩니다. 결과적으로 페이지 속도와 SEO 순위에 영향을 미칩니다.
{{_LINE_75_}}
{{_LINE_76_}}
        서버 비용 - 정적 파일에는 특수 소프트웨어가 필요하지 않으므로 정적 HTML 페이지가 저렴한 서버에서도 제공 될 수 있습니다.
{{_LINE_78_}}
{{_LINE_79_}}
        보다 안전합니다 - 정적 사이트의 경우 부품의 움직이는 구성 요소가 없으므로 해커가 소프트웨어를 이용할 가능성이 없습니다.
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      단점
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        학습 곡선 - 개발자에게는 추가 기술이 필요합니다. rectjs 및 graphql 학습과 마찬가지로
{{_LINE_93_}}
{{_LINE_94_}}
        정적 컨텐츠 만 - 동적 콘텐츠를 제공 해야하는 경우. 그럼 개츠비는 당신을위한 것이 아닙니다. 정적 파일 만 서버 할 수 있습니다. 따라서 데이터베이스에서 데이터를 가져 오는 댓글 시스템이 없을 수 있습니다.
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## WordPress   {#howto}와 함께 Gatsby를 사용하는 방법
Gatsby를 설치하기 전에 웹 사이트 환경에 [Nodejs][6] 및 [NPM][7]을 설치해야합니다.

### 1 단계 - 개츠비를 설치하십시오
```
npm install -g gatsby-cli
```
이 명령은 설치 프로그램을 자동으로 실행합니다. Gatsby를 설치하기 전에 모든 종속성을 다운로드하고 설치합니다. 완료되면 첫 Gatsby 웹 사이트를 만들 수 있습니다.
```
gatsby new gatsby-site
```
이것은 Gatsby의 스타터 템플릿을 다운로드하여 디렉토리/Gatsby-Wordpress에 배치합니다. 설치가 완료되면 사이트의 개발 버전을 열 수 있습니다.
```
gatsby develop
```
이제 웹 브라우저에서 _http : // localhost : 8000_를 입력하면 기본 템플릿이 열려야합니다.

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="개츠비 스타터 템플릿">}}


### 2 단계 - Gatsby를 WordPress에 연결합니다
Gatsby WordPress 안내서 의이 섹션에서는이 정적 사이트 생성기를 WordPress와 연결합니다. 기본 정적 웹 사이트는 있지만 WordPress와 통합해야합니다. 이것은 Gatsby 사이트를 WordPress 블로그의 주소를 지적하여 개발 서버를 실행할 때 최신 데이터를 가져올 수 있습니다. Gatsby는 연결되면 현재 템플릿을 기반으로 정적 웹 사이트를 구축합니다.
NPM 저장소에서 Gatsby 소스 워드 프레스 플러그인을 설치하십시오.
```
npm install gatsby-source-wordpress
```

### 3 단계 - 개츠비를 구성하십시오
다음 코드를 _gatsby-config.js_ 파일에 넣으십시오
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
WordPress 웹 사이트를 가리 키도록이 코드를 업데이트하십시오. 웹 사이트가 로컬로 호스팅되면 BaseURL 후에는 웹 사이트의 URL 대신 _localHost : 8888/WordPress_를 사용할 수 있습니다. 파일을 저장 한 후에는 페이지 템플릿을 작성해야합니다.

### 4 단계 - 페이지 템플릿 빌드
페이지 템플릿 빌딩을 사용하면이 사이트 생성기가 WordPress 웹 사이트의 모든 페이지에 대한 게시물을 생성 할 수 있습니다. 소스 플러그인은이 페이지의 WordPress에서 필요한 데이터를 가져 오지만 디자인 템플릿을 만들어야합니다.
_gatsby-node.js_ 파일에서 다음 코드를 추가하십시오
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
모든 데이터를 호출 한 후 Gatsby는 각 게시물에 대한 페이지를 생성합니다. 개발 명령을 사용하여 생성 된 URL을 사용하여 각 새 페이지로 이동할 수 있습니다.

## 결론   {#conclusion}
이 Gatsby WordPress 튜토리얼에서 WordPress에서 Gatsby 웹 사이트를 생성하는 방법을 다루었습니다. 우리는이 두 오픈 소스 소프트웨어의 장단점이 무엇인지 배웠습니다. 우리는 또한 Gatsby Development 환경을 설치하고 시작하는 방법을 다루었습니다.
마지막으로, [Containerize.com][8]는 추가 오픈 소스 제품에 대한 기사를 작성하고 있습니다. 따라서 일반 뉴스 및 업데이트를 위해 오픈 소스 [블로깅][9] 플랫폼 카테고리와 연락하십시오.

  
[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
