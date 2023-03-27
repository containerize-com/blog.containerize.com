---
title: "Cách cài đặt Bệnh viện | Hệ thống quản lý bệnh viện" 
seoTitle: "Cách cài đặt Bệnh viện | Hệ thống quản lý bệnh viện" 
description: "Bài viết này giúp bạn cài đặt bệnh viện trên localhost. Tự động hóa các quy trình y tế sử dụng hệ thống quản lý bệnh viện miễn phí, nguồn mở, miễn phí." 
date: Fri, 19 Feb 2021 09:24:09 +0000
author: muhammadmustafa
summary: "Giải pháp chăm sóc sức khỏe tự lưu trữ để tạo điều kiện cho các bác sĩ lâm sàng và bệnh nhân. Chúng ta hãy tìm hiểu cách triển khai bệnh viện miễn phí trên localhost bằng cách làm theo các bước đơn giản." 
url: /vi/how-to-install-hospitalrun-hospital-management-system/
categories: ['Healthcare Software']
---

## Giải pháp chăm sóc sức khỏe tự lưu trữ để tạo điều kiện cho các bác sĩ lâm sàng và bệnh nhân. Hãy cùng học cách triển khai bệnh viện miễn phí trên localhost bằng cách làm theo các bước đơn giản.

{{< figure align=center src="images/hospitalrun.png" alt="Hệ thống quản lý bệnh viện">}}


## Tổng quan
Gần đây chúng tôi đã xuất bản một bài đăng trên blog về [cách thức phần mềm chăm sóc sức khỏe trực tuyến trao quyền cho ngành chăm sóc sức khỏe][1] mô tả tác động của hệ thống quản lý bệnh viện nguồn mở đối với ngành chăm sóc sức khỏe. Ngành công nghiệp phần mềm chăm sóc sức khỏe toàn cầu đang đạt được giá trị với thời gian trôi qua. Vấn đề thực tế là công nghệ đã biến đổi mọi lĩnh vực của cuộc sống. Số lượng bệnh nhân và nhân viên đã trở nên cao đến mức nó đã trở thành rắc rối để quản lý dữ liệu khổng lồ như vậy. Mặt khác, có nhiều nhiệm vụ tốn thời gian diễn ra mỗi ngày và các thực thể chăm sóc sức khỏe liên tục thực hiện các nhiệm vụ đó. Do đó, cộng đồng nguồn nguồn mở đã phát triển phần mềm y tế nguồn mở đi kèm với nhiều mô-đun hữu ích để giải quyết các nhu cầu chăm sóc sức khỏe.
Phần mềm y tế nguồn mở được phát triển để quản lý hồ sơ bệnh nhân liên quan đến lịch sử y tế cũng như các điều khoản cho quản lý bệnh viện. Ngoài ra, phần mềm chăm sóc sức khỏe nguồn mở đang tận dụng trí tuệ nhân tạo để cung cấp các cấp độ dịch vụ nâng cao. Hầu hết các phương pháp điều trị bệnh hiện đang được xử lý bởi phần mềm không chỉ chẩn đoán các vấn đề mà còn cung cấp hỗ trợ trong việc chữa bệnh. Tuy nhiên, có rất nhiều phần mềm mới nổi cho các bệnh viện. Trong bài đăng trên blog này, chúng tôi sẽ đề cập đến các điểm sau.
* [ **Bệnh viện là gì?** ][2]
* [ **Các tính năng của bệnh viện là gì** ][3]
* [ **Các bước cài đặt của bệnh viện?** ][4]
* [ **Kết luận** ][5]

## Bệnh viện là gì? {#intro}

Bệnh viện là một hệ thống quản lý thông tin bệnh viện nguồn mở miễn phí. Giải pháp chăm sóc sức khỏe miễn phí này thân thiện với môi trường vì người dùng có thể sử dụng đầy đủ phần mềm miễn phí này ngay cả khi không có kết nối Internet. Nó cung cấp nhiều tính năng như quản lý người dùng, đăng ký bệnh nhân, cuộc hẹn, hệ thống thanh toán, hệ thống xuất viện bệnh nhân, v.v. Giao diện người dùng của hệ thống eHealth nguồn mở này là logic trong đó người dùng có thể điều hướng qua các yếu tố khác nhau một cách dễ dàng. Ngoài ra, thật dễ dàng để thiết lập và cung cấp hình ảnh Docker nơi các nhà phát triển có thể triển khai nó bằng hình ảnh Docker.
Hệ thống quản lý bệnh viện **này** cung cấp cung cấp để tích hợp các phòng thí nghiệm để tập trung các hồ sơ y tế của bệnh nhân. Hơn nữa, nó cũng cho phép người dùng duy trì hồ sơ thăm khám bệnh nhân, thuốc và đánh giá. Hệ thống hồ sơ EHealth này an toàn, linh hoạt và cung cấp tích hợp với các ứng dụng của bên thứ ba. Có một cộng đồng rất sôi động cung cấp hỗ trợ cho bệnh viện. Hơn nữa, có một hệ thống xuất viện bệnh nhân hoàn chỉnh. Phần mềm y tế nguồn mở này được viết hoàn toàn bằng JavaScript. Hơn nữa, có tài liệu toàn diện có sẵn liên quan đến phát triển và triển khai. Trên thực tế, phần mềm y tế nguồn mở này cung cấp các bảng điều khiển khác nhau cho các bộ phận khác nhau như bộ phận hỗ trợ, bộ phận lâm sàng và bộ phận hành chính. Tất cả các vai trò này đi kèm với các cấp độ cho phép và truy cập khác nhau.

## Các tính năng của bệnh viện là gì? {#features}

Trong phần này, chúng tôi sẽ trải qua một số tính năng chính sau của hệ thống EHealth này.
* **Tự lưu trữ** : Bệnh viện đi kèm với khả năng tự lưu trữ và đòi hỏi ít nỗ lực hơn để triển khai trên các máy chủ.
* **Lập lịch hẹn** : Hệ thống y tế này cho phép người dùng sắp xếp các cuộc hẹn. Có một mô -đun hoàn chỉnh cho các cuộc hẹn có sẵn trên bảng điều khiển. Hơn nữa, người dùng có thể tìm kiếm các cuộc hẹn với sự trợ giúp của các bộ lọc.
* **Hệ thống xuất viện bệnh nhân** : Hệ thống quản lý bệnh viện này duy trì hồ sơ của những bệnh nhân đã được xuất viện.
* **Quản lý thuốc** : Hệ thống hồ sơ EHealth này cho phép người dùng ghi lại dữ liệu đầy đủ về thuốc của một bệnh nhân cụ thể.
* **Quản lý hồ sơ bệnh nhân** : Có một mô -đun hoàn chỉnh cho bệnh nhân quản lý hồ sơ. Người dùng có thể ghi lại chi tiết của bệnh nhân mới, thừa nhận bệnh nhân chống lại lịch sử y tế đầy đủ của họ như y học, báo cáo và thăm khám.
* **Hệ thống thanh toán tùy chỉnh** : Có một hệ thống thanh toán phong phú có sẵn trong phần mềm chăm sóc sức khỏe nguồn mở này. Nó cho phép người dùng tạo và quản lý hóa đơn với các chi tiết đầy đủ như giá phòng thí nghiệm, phí phường, giá hình ảnh, v.v.
* **Hồ sơ y tế điện tử** : Phần mềm y tế nguồn mở này cung cấp tất cả các mô -đun cần thiết để duy trì hồ sơ y tế và hành chính.
* **Linh hoạt** : Bệnh viện là linh hoạt và có thể mở rộng đủ để các nhà phát triển có thể mở rộng chức năng của nó để đáp ứng các chức năng cần thiết.

## Các bước cài đặt của bệnh viện? {#steps}

Phần này của bài đăng trên blog mô tả các bước cài đặt của bệnh viện.
Trước khi chúng tôi bắt đầu, trước tiên hãy cài đặt các điều kiện tiên quyết sau:
  * [Docker][6]
  * [Docker-compose][7]
Khi các điều kiện tiên quyết được cài đặt, hãy tải xuống mã nguồn từ [liên kết] này [8].
Sau đó, hãy mở thiết bị đầu cuối và chạy các lệnh sau:
CD chung chung
Máy chủ CD
Bây giờ, hãy thay đổi mật khẩu trên hàng 8,9 của \ `conf/initcouch.sh \` và mật khẩu trên hàng 7 của _config-demo.js_.
Sau đó, chạy lệnh sau để xây dựng và chạy ứng dụng:
_Docker-compose build && docker-compose UP_
Sau đó, nó sẽ quay bộ container Docker như trong hình dưới đây:

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.45.48-1024x554.png" alt="Hệ thống quản lý bệnh viện">}}

Cuối cùng, bạn có thể truy cập giải pháp chăm sóc sức khỏe này trong trình duyệt tại http: // localhost/#/đăng nhập. Nó sẽ hiển thị màn hình đăng nhập sau.

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.46.35-1024x676.png" alt="Hệ thống quản lý bệnh viện">}}


## Phần kết luận {#Phần kết luận}

Đây là kết thúc của bài viết hướng dẫn này. Hệ thống hồ sơ bệnh nhân này thực sự giúp tự động hóa **Dịch vụ chăm sóc sức khỏe** . Hệ thống quản lý bệnh viện nguồn mở hiện đại đi kèm với các công cụ phân tích dữ liệu giúp các nhân viên chăm sóc sức khỏe thực hiện các hành động cần thiết cho các cơ sở chăm sóc sức khỏe tốt hơn. Bài đăng trên blog này sẽ thực sự giúp bạn nếu bạn đang thực sự tìm cách triển khai một hệ thống eHealth cho bệnh viện/phòng khám của bạn. Các giải pháp nguồn mở này có hiệu quả về chi phí khi chúng được tích hợp với các phòng thí nghiệm và các phòng khám khác và cũng giảm thiểu giấy tờ bằng cách vi tính hóa mọi quy trình. Giải pháp chăm sóc sức khỏe nguồn mở cho phép người dùng có hình ảnh về tất cả các hoạt động chăm sóc sức khỏe như bệnh nhân Thuốc, xuất viện, báo cáo và quản lý thanh toán. Hơn nữa, bạn có thể tập trung vào các nhiệm vụ quan trọng khác như lập kế hoạch tài nguyên và đánh giá rủi ro. Tuy nhiên, có nhiều phần mềm cấp độ doanh nghiệp khác cho các bệnh viện được đề cập trong phần khám phá trên mạng bên dưới.
Cuối cùng,* ***[containerize.com][9]****được dự định viết trên các sản phẩm nguồn mở tiếp theo. Do đó, hãy giữ liên lạc với danh mục [Công nghệ chăm sóc sức khỏe][10] này cho các bản cập nhật mới nhất.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [OpenEmr][11]
  * [OpenMrs][12]
  * [Bệnh viện][13]
  * [Bệnh viện mở][14]
  * [Solismed][15]
  * [Những điều cần xem xét trước khi chọn phần mềm nguồn mở vào năm 2021][16]
  * [Các tính năng khám phá của Bệnh viện quản lý hồ sơ y tế][17]
  * [Top 5 Phần mềm hồ sơ sức khỏe bệnh nhân nguồn mở][18]
  * [Tính năng khám phá giải pháp y tế OpenEMR][19]
  * [Cách thiết lập Bệnh viện Hệ thống EHealth trên localhost][20]
  * [Làm thế nào phần mềm chăm sóc sức khỏe trực tuyến trao quyền cho ngành chăm sóc sức khỏe][1]



[1]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[2]: #intro
[3]: #features
[4]: #steps
[5]: #Conclusion
[6]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Finstall%2F&h=b220f083ceda72a13e4e77091860b9761ee26229422b3c2590128582d7227f81&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[7]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Fcompose%2Finstall%2F&h=58cfa40eb1b8827698a31cbe9ac3661def22ae2b5c28eb832c19da2e3b5a5b0d&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[8]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fhospitalrun.fra1.cdn.digitaloceanspaces.com%2Fdeployments%2Fhr-1.0.0-beta-generic.zip&h=3e79da04f5c6cd968d616537e74f30eef38c16590dc0cbc1945ec8ad214de9c0&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/health-care-technologies
[11]: https://products.containerize.com/health-care-technologies/openemr
[12]: https://products.containerize.com/health-care-technologies/openmrs
[13]: https://products.containerize.com/healthcare-technologies/hospitalrun
[14]: https://products.containerize.com/healthcare-technologies/open-hospital
[15]: https://products.containerize.com/healthcare-technologies/solismed
[16]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
[17]: https://blog.containerize.com/healthcare-software/features-exploration-of-medical-record-manager-hospitalrun/
[18]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[19]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[20]: https://blog.containerize.com/healthcare-software/vi/how-to-install-hospitalrun-hospital-management-system/
