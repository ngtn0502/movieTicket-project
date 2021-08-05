const data = [
  {
    id: '1',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png',
    title: 'TENET công bố ngày khởi chiếu chính thức tại Việt Nam',
    content:
      'Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bê...',
    link:
      'https://tix.vn/goc-dien-anh/7943-tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam',
    like: '15',
    comment: '0',
  },
  {
    id: '2',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/05/quang-tuan-thuong-tu-ky-tren-phim-truong-de-tap-trung-dien-vai-toi-pham-15906671009175.png',
    title:
      'Quang Tuấn thường tự kỷ trên phim trường để tập trung diễn vai tội phạm',
    content:
      'Quang Tuấn thường tự kỷ trên phim trường để tập trung diễn vai tội phạmdiện trên màn ảnh, Quang Tuấn mang đến một hình ảnh hoàn toàn khác với nhân vật tên tội phạm biến thái có vỏ bọc tri thức.',
    link:
      'https://tix.vn/goc-dien-anh/7923-quang-tuan-thuong-tu-ky-tren-phim-truong-de-tap-trung-dien-vai-toi-pham',
    like: '20',
    comment: '1',
  },
  {
    id: '3',
    picture:
      'https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png',
    title:
      'PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù',
    content:
      'Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn đẫm máu nhất sự nghiệp của cô trong phim',
    link:
      'https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi',
    like: '25',
    comment: '5',
  },
  {
    id: '4',
    picture:
      'https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png',
    title: 'VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ”',
    content:
      'Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành',
    link:
      'https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em',
    like: '1',
    comment: '0',
  },
  {
    id: '5',
    picture:
      'https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg',
    title: 'Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn',
    content:
      'Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành',
    link:
      'https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon',
    like: '2',
    comment: '3',
  },
  {
    id: '6',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png',
    title: 'Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành',
    content: 'Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành',
    link:
      'https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh',
    like: '2',
    comment: '0',
  },
  {
    id: '7',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png',
    title: 'Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công',
    content: 'Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công',
    link:
      'https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu',
    like: '5',
    comment: '0',
  },
  {
    id: '8',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/08/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-15965999321682.png',
    title: 'Gái Già Lắm Chiêu V – Những cuộc đời vương giả',
    content: 'Gái Già Lắm Chiêu V – Những cuộc đời vương giả',
    link:
      'https://tix.vn/goc-dien-anh/7948-gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia',
    like: '6',
    comment: '0',
  },
  {
    id: '9',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/11/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png',
    title:
      '[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng',
    content:
      'Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante',
    link:
      'https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang',
    like: '25',
    comment: '2',
  },
  {
    id: '10',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937528932506.png',
    title: 'Gerard Butler cùng bồ cũ Deadpool tham gia Greenland',
    content:
      'Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.',
    link:
      'https://tix.vn/goc-dien-anh/7940-gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland',
    like: '30',
    comment: '3',
  },
  {
    id: '11',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png',
    title:
      'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan',
    content:
      'Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.',
    link:
      'https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han',
    like: '5',
    comment: '2',
  },
  {
    id: '12',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122361852.png',
    title:
      'Truy Cùng Giết Tận - Cuộc tái ngộ của hai ông hoàng phòng vé xứ Hàn',
    content:
      'Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68 triệu vé, hai tên tuổi lão làng trong làng điện ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết Tận – một bộ phim hành động siêu “nặng đô”.',
    link:
      'https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han',
    like: '3',
    comment: '0',
  },
  {
    id: '13',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/08/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png',
    title:
      '6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood',
    content:
      '6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood',
    link:
      'https://tix.vn/goc-dien-anh/7949-6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood',
    like: '25',
    comment: '2',
  },
  {
    id: '14',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/08/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-15965999321682.png',
    title: 'Gái Già Lắm Chiêu V – Những cuộc đời vương giả',
    content: 'Gái Già Lắm Chiêu V – Những cuộc đời vương giả',
    link:
      'https://tix.vn/goc-dien-anh/7948-gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia',
    like: '25',
    comment: '2',
  },
  {
    id: '15',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/07/kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu-15959988694730.png',
    title: 'Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm Chiêu',
    content: 'Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm Chiêu',
    link:
      'https://tix.vn/goc-dien-anh/7945-kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu',
    like: '25',
    comment: '2',
  },
  {
    id: '15',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/07/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331601790.png',
    title:
      '5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ Pinocchio',
    content:
      '5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ Pinocchio',
    link:
      'https://tix.vn/goc-dien-anh/7944-5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio',
    like: '25',
    comment: '2',
  },
  {
    id: '16',
    picture:
      'https://s3img.vcdn.vn/123phim/2021/03/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png',
    title:
      '[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA..',
    content:
      'Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.',
    link:
      'https://tix.vn/goc-dien-anh/7964-mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam',
    like: '20',
    comment: '1',
  },
  {
    id: '17',
    picture:
      'https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg',
    title: 'BHD 59K/VÉ CẢ TUẦN !!!',
    content:
      'Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.',
    link: 'https://tix.vn/khuyen-mai/7958-bhd-59k-ve-ca-tuan',
    like: '20',
    comment: '1',
  },
  {
    id: '18',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg',
    title: 'TIX 1K/VÉ NGẠI CHI GIÁ VÉ',
    content:
      'Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga',
    link: 'https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve',
    like: '20',
    comment: '1',
  },
  {
    id: '19',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png',
    title: 'ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX ',
    content:
      'ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.',
    link: 'https://tix.vn/khuyen-mai/7954-dong-gia-1k-ve-khi-mua-ve-qua-tix',
    like: '20',
    comment: '1',
  },
  {
    id: '20',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg',
    title: 'BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!',
    content:
      'Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.',
    link: 'https://tix.vn/khuyen-mai/7919-bhd-star-ve-chi-59-000d-ca-tuan',
    like: '20',
    comment: '1',
  },
  {
    id: '21',
    picture:
      'https://s3img.vcdn.vn/123phim/2020/05/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png',
    title: 'Beta Cineplex trở lại với hàng loạt ưu đãi lớn',
    content: 'Beta Cineplex trở lại với hàng loạt ưu đãi lớn',
    link:
      'https://tix.vn/khuyen-mai/7908-beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon',
    like: '20',
    comment: '1',
  },
  {
    id: '22',
    picture:
      'https://s3img.vcdn.vn/123phim/2019/11/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg',
    title:
      '[123Phim] Thứ 6 Không Đen Tối -  Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái',
    content:
      '[123Phim] Thứ 6 Không Đen Tối -  Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái',
    link:
      'https://tix.vn/khuyen-mai/7806-123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai',
    like: '20',
    comment: '1',
  },
  {
    id: '23',
    picture:
      'https://s3img.vcdn.vn/123phim/2019/11/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg',
    title:
      '[123Phim] NHẬP MÃ PSM30K - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay',
    content:
      '[123Phim] NHẬP MÃ PSM30K - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay',
    link:
      'https://tix.vn/khuyen-mai/7801-123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay',
    like: '20',
    comment: '1',
  },
  {
    id: '24',
    picture:
      'https://s3img.vcdn.vn/123phim/2019/10/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg',
    title: '[Mega GS] Một đoá hoa thay ngàn lời yêu',
    content: '[Mega GS] Một đoá hoa thay ngàn lời yêu',
    link:
      'https://tix.vn/khuyen-mai/7792-mega-gs-mot-doa-hoa-thay-ngan-loi-yeu',
    like: '20',
    comment: '1',
  },
  {
    id: '25',
    picture:
      'https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976725554.jpg',
    title: '[123Phim] NHẬP MÃ BKT - Giảm ngay 20k khi đặt vé Bắc Kim Thang',
    content:
      '123Phim đồng hành cùng phim Việt - Giảm ngay 20k mỗi giao dịch khi đặt vé Bắc Kim Thang trên ứng dụng 123Phim.',
    link:
      'https://tix.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang',
    like: '20',
    comment: '1',
  },
  {
    id: '26',
    picture:
      'https://s3img.vcdn.vn/123phim/2019/08/sinh-nhat-mega-gs-15663933683466.jpg',
    title: 'Sinh Nhật Mega GS',
    content:
      'Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta lại đến tháng 8, tháng sinh nhật của Mega GS Cinemas.',
    link: 'https://tix.vn/khuyen-mai/7774-sinh-nhat-mega-gs',
    like: '20',
    comment: '1',
  },
  {
    id: '27',
    picture:
      'https://s3img.vcdn.vn/123phim/2019/05/123phim-tixshop-tro-lai-qua-xin-hon-xua-15583511037699.jpg',
    title: '[123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa',
    content: 'Nhiều Tix làm gì, để tiêu vào TixShop chứ còn chờ chi.',
    link:
      'https://tix.vn/khuyen-mai/7741-123phim-tixshop-tro-lai-qua-xin-hon-xua',
    like: '20',
    comment: '1',
  },
  {
    id: '28',
    picture:
      'https://s3img.vcdn.vn/123phim/2019/05/galaxy-trang-thi-xem-phim-hay-say-qua-tang-15572160162243.jpg',
    title: '[Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng',
    content:
      'Nhân dịp khai trương Galaxy Tràng Thi, Galaxy Cinema dành tặng các Stars Hà Nội loạt phần quà siêu hấp dẫn.',
    link:
      'https://tix.vn/khuyen-mai/7732-galaxy-trang-thi-xem-phim-hay-say-qua-tang',
    like: '20',
    comment: '1',
  },
  {
    id: '29',
    picture:
      'https://s3img.vcdn.vn/123phim/2019/04/mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve-15563607309238.jpg',
    title: 'Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé',
    content: 'Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé',
    link:
      'https://tix.vn/khuyen-mai/7727-mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve',
    like: '20',
    comment: '1',
  },
  {
    id: '30',
    picture:
      'https://s3img.vcdn.vn/123phim/2019/04/123phim-ban-la-fan-cung-marvel-15562538560772.jpg',
    title: '[123Phim] Bạn Là Fan Cứng Marvel?',
    content: '[123Phim] Bạn Là Fan Cứng Marvel?',
    link: 'https://tix.vn/khuyen-mai/7723-123phim-ban-la-fan-cung-marvel',
    like: '20',
    comment: '1',
  },
  {
    id: '31',
    picture:
      'https://s3img.vcdn.vn/123phim/2019/04/galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui-15561704693167.jpg',
    title: '[Galaxy Tràng Thi] Trải Nghiệm Bom Tấn Càng Đông Càng Vui',
    content: '[Galaxy Tràng Thi] Trải Nghiệm Bom Tấn Càng Đông Càng Vui',
    link:
      'https://tix.vn/khuyen-mai/7722-galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui',
    like: '20',
    comment: '1',
  },
  {
    id: '32',
    picture:
      'https://s3img.vcdn.vn/123phim/2019/04/mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve-15547979641987.jpg',
    title: 'Mua Vé BHD Star Trên 123Phim Bằng ZaloPay: 1.000đ/vé',
    content: 'Mua Vé BHD Star Trên 123Phim Bằng ZaloPay: 1.000đ/vé',
    link:
      'https://tix.vn/khuyen-mai/7716-mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve',
    like: '20',
    comment: '1',
  },
];
