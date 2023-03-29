---
title: "Cách phát triển plugin Osticket | Nó trợ giúp phần mềm" 
seoTitle: "Cách phát triển plugin Osticket | Nó trợ giúp phần mềm" 
description: "Thực hiện theo hướng dẫn này để tìm hiểu cách phát triển plugin Osticket. Phần mềm trợ giúp này quản lý thông tin liên lạc của khách hàng và tự động hóa giải quyết vấn đề." 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "Tạo một plugin Osticket để thêm các tính năng vào cài đặt Osticket của bạn. Hệ thống bán vé nguồn mở này giúp các doanh nghiệp xử lý khách hàng một cách hiệu quả." 
url: /vi/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## Tạo một plugin Osticket để thêm các tính năng vào cài đặt Osticket của bạn. Hệ thống bán vé nguồn mở này giúp các doanh nghiệp xử lý khách hàng một cách hiệu quả.

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="Nó trợ giúp phần mềm">}}


## Tổng quan
Chào mừng bạn đến với một bài đăng trên blog thú vị khác trong loạt [phần mềm bán vé trợ giúp][1]. Chúng tôi đã xuất bản một số bài đăng trên blog về các chủ đề như [Hệ thống trợ giúp và chăm sóc khách hàng dựa trên bán vé miễn phí phổ biến][2], [tự động hóa hệ thống bán vé sử dụng WordPress và Osticket][3], và một số khác. Tuy nhiên, Osticket là một hệ thống trợ giúp dựa trên vé nguồn mở được thiết kế cho khách hàng để báo cáo các truy vấn và khiếu nại của họ để hỗ trợ nhân viên. Hệ thống hỗ trợ miễn phí này cung cấp mô-đun quản lý yêu cầu dễ sử dụng để chuyển đổi các yêu cầu đến từ điện thoại, email và biểu mẫu thành vé dựa trên web. Nó cung cấp một loạt các tính năng và tùy chọn cho phép nhân viên hỗ trợ cung cấp trải nghiệm hỗ trợ khách hàng đáng kinh ngạc cho khách hàng.
Hệ thống bán vé nguồn mở này (Osticket) là một khung vé hỗ trợ hoàn toàn linh hoạt, cung cấp nhiều tùy chọn để giúp điều chỉnh tất cả các phần của trải nghiệm hỗ trợ của khách hàng như tin nhắn được gửi đến khách hàng, trang và thông báo. Trong bài viết của mình, chúng tôi sẽ tìm hiểu phát triển plugin Osticket để tăng cường chức năng theo nhu cầu của chúng tôi. Để làm điều đó, chúng tôi sẽ đề cập đến các chủ đề sau:
  * [Tại sao sử dụng plugin?][4]
  * [Yêu cầu][5]
  * [Làm thế nào để phát triển plugin Osticket?][6]
  * [Kết luận][7]

## Tại sao phải sử dụng plugin? {#why}

Trong chủ đề này, chúng tôi sẽ tìm hiểu cách tạo một plugin đơn giản để mở rộng chức năng cốt lõi của phần mềm trợ giúp này**nó (Osticket). Plugin là một phần mềm, mở rộng chức năng cốt lõi của bất kỳ ứng dụng/phần mềm nào. Ngoài ra, có rất nhiều phần mềm nguồn mở cấp doanh nghiệp có một chồng plugin khổng lồ mở rộng các chức năng. Hơn nữa, các phần mềm nguồn mở phổ biến này bao gồm WordPress, Joomla và nhiều thứ khác. Trên hết, cộng đồng sôi động và sống động hỗ trợ và phát triển các plugin theo nhu cầu. Tuy nhiên, Frameworks cung cấp tài liệu toàn diện về sự phát triển của các plugin. Sau đây là một số lý do để các ứng dụng hỗ trợ các plugin:
  * Nó cho phép các nhà phát triển bên thứ ba tạo các thành phần phần mềm mở rộng chức năng của một ứng dụng.
  * Plugin cho phép dễ dàng tích hợp các tính năng mới.
  * Ngoài ra, nó không làm tăng kích thước và độ phức tạp của một ứng dụng.
  * Cũng như các nhà phát triển có thể giữ và quản lý các plugin mã riêng biệt với ứng dụng cốt lõi.

## Yêu cầu {#requirements}

Phần này của phần mềm  **CNTT trợ giúp**  Hướng dẫn mô tả các yêu cầu cần thiết để phát triển plugin Osticket.
  * Php phiên bản 5.6 trở lên
  * Cài đặt Osticket
  * Kiến thức PHP cơ bản

## Làm thế nào để phát triển plugin Osticket? {#how}

Trong phần này, chúng tôi sẽ trải qua các bước phát triển plugin của hệ thống bán vé nguồn mở này (Osticket).
  * Tạo thư mục plugin plugin trong /bao gồm /plugins. Trong hướng dẫn này, chúng tôi sẽ tạo một plugin demo tích hợp  **hệ thống Osticket**  với redmine.
  * Nó nên có các tệp cần thiết sau: Plugin.php và Config.php.
  * Tệp plugin.php chứa mô tả chung của plugin. Sử dụng mã mẫu sau trong tệp plugin.php:
```
<?php

return array(
    'id' =>             'dynabic:redmine', # notrans
    'version' =>        '0.1',
    'name' =>           /* trans */ 'Dynabic Redmine',
    'author' =>         'Bilal Kiani',
    'description' =>    /* trans */ 'Integration with Dynabic.Redmine',
    'url' =>            '',
    'plugin' =>         'redmine.php:DynabicRedminePlugin',
);

?>

```
  * Sau đó, thay thế ID, tên, tên tác giả và tên lớp plugin từ mã trên.
  * Sau đó, chúng tôi cần hiển thị các tùy chọn cấu hình plugin vào phụ trợ Osticket. Thêm mã mẫu sau vào tệp config.php.
```
<?php
require_once INCLUDE_DIR . 'class.plugin.php';
class DynabicRedminePluginConfig extends PluginConfig {

    // Provide compatibility function for versions of osTicket prior to
    // translation support (v1.9.4)
    function translate() {
        if (!method_exists('Plugin', 'translate')) {
            return array(
                function($x) { return $x; },
                function($x, $y, $n) { return $n != 1 ? $y : $x; },
            );
        }
        return Plugin::translate('dynabic-redmine');
    }

    function getOptions() {
        list($__, $_N) = self::translate();        
        return array(
            'dynabicRedmineCredentials' => new SectionBreakField(array(
                'label' => $__('Redmine Credentials')
            )),
            'dynabic-Redmine-username' => new TextboxField(array(
                'label' => $__('Username'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
            'dynabic-Redmine-password' => new PasswordField(array(
                'label' => $__('Password'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
        );
    }
}
```
  * Do đó, điều này sẽ tạo các trường tên người dùng và mật khẩu trên trang cấu hình như được hiển thị ở đây:

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="Hướng dẫn dành cho người mới bắt đầu để phát triển plugin Osticket">}}

  * Sau đây là danh sách các trường lớp có sẵn, chúng được xác định trong `[install_root]/bao gồm/class.forms.php`:
      * TextBoxfield - Hộp văn bản
      * Textareafield - khu vực văn bản
      * ThreadEntryfield - Khu vực văn bản phong phú, được sử dụng cho các chủ đề thảo luận
      * DateTimeField - JQuery DatePicker
      * PhoneField - Hộp văn bản được tối ưu hóa cho các số điện thoại
      * Booleanfield - Hộp kiểm
      * Lựa chọn trường-Trường chọn thả xuống
      * Phần Breakbreakfield - Phá vỡ phần ngang
  * Sau đó, chúng ta cần tạo tệp trong đó chức năng plugin sẽ được xác định.
  * Tên tệp phải giống như được xác định trong tệp plugin.php. tức là redmine.php.
  * Điều này sẽ phải giữ lớp dynabicredmineplugin. Kiểm tra mã mẫu sau:
```
class DynabicRedminePlugin extends Plugin {
    var $config_class = "DynabicRedminePluginConfig";
	 /**
     * The Redmine WSDL endpoint.
     */

    function bootstrap() {
        $config = $this->getConfig();
        # ----- Dynabic.Redmine credentials ---------------------
        $dynabicRedmine = json_decode($config->get('dynabicRedmine-enabled'));
		define('Redmine_USERNAME', $config->get('dynabic-Redmine-username'));
		define('Redmine_PASSWORD', $config->get('dynabic-Redmine-password'));
    }
```
  * Mã này tìm nạp các giá trị cấu hình và bạn có thể sử dụng các giá trị này trong các chức năng của mình. Trong tệp này, bạn có thể thêm chức năng plugin của bạn như các yêu cầu của bạn.

## Phần kết luận {#conclusion}

Điều này đưa chúng ta đến cuối bài viết trên blog này. Osticket là một phần mềm quản lý vé cung cấp cấu trúc plugin cho các nhà phát triển để họ có thể thêm chức năng mới theo yêu cầu. Plugin là các thành phần mở rộng chức năng cốt lõi của bất kỳ ứng dụng/phần mềm nào. Trong bài viết của mình, chúng tôi đã thảo luận về sự phát triển plugin của hệ thống hỗ trợ khách hàng  **này** (Osticket), giúp các nhà phát triển thêm các tính năng và cải tiến tùy chỉnh theo yêu cầu của họ. Do đó, bài đăng trên blog này sẽ thực sự giúp bạn nếu bạn đang tìm cách triển khai phần mềm  **CNTT CNTT**  cho doanh nghiệp của bạn. Hơn nữa, có một phần mềm bán vé **trợ giúp khác**  và các bài viết được đề cập trong phần Khám phá trên mạng bên dưới.
Cuối cùng, [containerize.com][8] liên tục viết các bài đăng trên blog về các sản phẩm và chủ đề nguồn mở tiếp theo. Do đó, vui lòng giữ liên lạc với danh mục [phần mềm bán vé trợ giúp][1] để cập nhật thường xuyên. Hơn nữa, bạn có thể theo dõi chúng tôi trên các tài khoản truyền thông xã hội của chúng tôi [Facebook][9], [LinkedIn][10] và [Twitter][11].

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Uvdesk][12]
  * [Zammad][13]
  * [Freescout][14]
  * [Trợ giúp][15]
  * [Nguồn mở tốt nhất và phần mềm bàn trợ giúp CNTT miễn phí][16]
  * [Hệ thống chăm sóc khách hàng và trợ giúp dựa trên vé miễn phí phổ biến][2]
  * [Cách thiết lập phần mềm bàn trợ giúp trực tuyến bằng Osticket][17]
  * [Cách thực hiện nhiều người thuê trong Osticket][18]
  * [Tự động hóa hệ thống bán vé bằng cách sử dụng WordPress và Osticket][3]
  * [Tự động hóa hoạt động kinh doanh bằng phần mềm nguồn mở và miễn phí][19]



[1]: https://products.containerize.com/video-editing-software
[2]: https://products.containerize.com/helpdesk/osticket
[3]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[4]: #why
[5]: #requirements
[6]: #how
[7]: #conclusion
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://products.containerize.com/helpdesk/uvdesk/
[13]: https://products.containerize.com/helpdesk/zammad/
[14]: https://products.containerize.com/helpdesk/freescout/
[15]: https://products.containerize.com/helpdesk/helpy/
[16]: https://products.containerize.com/helpdesk/
[17]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[18]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
