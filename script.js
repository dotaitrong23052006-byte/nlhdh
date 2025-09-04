const questions = [
  {
    question: "Câu 1: Hệ điều hành là chương trình hoạt động giữa người sử dụng với : ",
    options: ["   A. Phần mềm của máy tính", " B. Các chương trình ứng dụng", " C. Phần cứng của máy tính", "D. CPU và bộ nhớ  "],
    correctAnswer: 2
  },
  {
    question: " Câu 2: Ở HĐH có cấu trúc phân lớp, tập hợp các lời gọi hệ thống được tạo ra bởi :",
    options: ["A. Lớp phần cứng", "B. Lớp giao tiếp với người sử dụng", "C. Lớp kế lớp phần cứng - hạt nhân", "D. Lớp ứng dụng"],
    correctAnswer: 2
  },
  {
    question: "Câu 3: Lời gọi hệ thống là lệnh do hệ điều hành cung cấp dùng để giao tiếp giữa hệ điều hành và: ",
    options: [" A. Người sử dụng ", " B. Chương trình ứng dụng ", "C. Phần cứng máy tính ", "D. Tiến trình "],
    correctAnswer: 1
  },
    {
     question: "4. Trong các cấu trúc của hệ điều hành sau đây, cấu trúc nào tương thích dễ dàng với mô hình hệ thống phân tán?",
  options: ["Cấu trúc Servicer-client", "Cấu trúc máy ảo", "Cấu trúc theo lớp", "Cấu trúc đơn giản"],
  correctAnswer: 0
  },
    {
  question: "5. Phần cứng máy tính được chia làm mấy phần?",
  options: ["1", "2", "3", "4"],
  correctAnswer: 3
},
{
  question: "6. Một số công việc được lưu trong bộ nhớ chính tại cùng một thời điểm và CPU là đa nhiệm giữa chúng được gọi là:",
  options: [
    "Hệ thống xử lý theo lô đa chương",
    "Hệ thống xử lý theo lô",
    "Hệ thống song song",
    "Hệ thống phân tán"
  ],
  correctAnswer: 0
},
{
  question: "7. Phân loại Hệ điều hành (dưới góc độ xử lý) có bao nhiêu phần?",
  options: ["2", "3", "5", "6"],
  correctAnswer: 2
},
{
  question: "8. Ưu điểm chính của time-sharing system so với multiprogrammed system là gì?",
  options: [
    "Tăng hiệu suất của CPU",
    "Chi phí quản lý các process nhỏ hơn",
    "Thời gian đáp ứng (response time) nhỏ hơn",
    "Giảm burst time của process"
  ],
  correctAnswer: 2
},
{
  question: "9. Multitasking được gọi là:",
  options: [
    "Hệ thống phân tán",
    "Hệ thống đa nhiệm",
    "Hệ thống bó",
    "Hệ thống song song"
  ],
  correctAnswer: 1
},
{
  question: "10. Các thành phần Hệ điều hành có bao nhiêu phần?",
  options: ["2", "4", "6", "8"],
  correctAnswer: 2
},
{
  question: "11. Hệ thống quản lý tiến trình, bộ nhớ, nhập xuất, tập tin, dịch lệnh, bảo vệ thuộc về:",
  options: [
    "Các chức năng của Hệ điều hành",
    "Các vai trò của Hệ điều hành",
    "Các thành phần của Hệ điều hành",
    "Các nhiệm vụ của Hệ điều hành"
  ],
  correctAnswer: 2
},
{
  question: "12. File cài đặt *.exe có cài đặt trên hệ điều hành Ubuntu, IOS được không?",
  options: [
    "Có thể cài đặt trên Ubuntu",
    "Có thể cài đặt trên cả HĐH Ubuntu và IOS",
    "Có thể cài đặt trên IOS",
    "Không thể cài đặt trên cả HĐH Ubuntu và IOS"
  ],
  correctAnswer: 3
},
{
  question: "13. File cài đặt *.exe có cài đặt trên hệ điều hành Windows, Android được không?",
  options: [
    "Có thể cài đặt trên cả HĐH Windows và Android",
    "Không thể cài đặt trên cả HĐH Windows và Android",
    "Có thể cài đặt trên Android",
    "Chỉ cài đặt được trên Windows"
  ],
  correctAnswer: 3
},
{
  question: "14. Việc truyền thông số từ chương trình ứng dụng đến hệ điều hành có thể thực hiện bằng cách lưu thông số trong:",
  options: [
    "Các thanh ghi",
    "Stack",
    "Vùng nhớ trong bộ nhớ chính",
    "Các thanh ghi, stack, vùng nhớ trong bộ nhớ chính"
  ],
  correctAnswer: 3
},
{
  question: "15. Unix và Linux là:",
  options: [
    "Vừa là hệ điều hành đa nhiệm vừa là hệ điều hành đơn nhiệm",
    "Hệ điều hành đơn nhiệm",
    "Hệ điều hành đa nhiệm một người dùng",
    "Hệ điều hành đa nhiệm nhiều người dùng"
  ],
  correctAnswer: 3
},
{
  question: "16. Trong các phát biểu sau về chức năng cơ bản của hệ điều hành, phát biểu nào sai?",
  options: [
    "Cung cấp môi trường giao tiếp người - máy",
    "Quản lí thông tin trên bộ nhớ ngoài",
    "Quản lí giao tiếp với các máy tính khác trên mạng",
    "Nhập xuất dữ liệu"
  ],
  correctAnswer: 3
},
{
  question: "17. Hệ điều hành nào dưới đây không phải là hệ điều hành đa nhiệm nhiều người dùng?",
  options: [
    "LINUX",
    "Windows 2000",
    "UNIX",
    "MS - DOS"
  ],
  correctAnswer: 3
},
{
  question: "18. Hệ điều hành là:",
  options: [
    "Thiết bị tính toán số học và Logic",
    "Một chương trình hay hệ chương trình",
    "Một thiết bị",
    "ROM-BIOS"
  ],
  correctAnswer: 1
},
{
  question: "19. Đâu là hệ điều hành?",
  options: [
    "Microsoft Excel",
    "Pascal",
    "Paint",
    "Ubuntu"
  ],
  correctAnswer: 3
},
{
  question: "20. Mainframe được gọi là:",
  options: [
    "Máy tính cỡ nhỏ",
    "Máy tính xách tay",
    "Máy tính cỡ lớn",
    "Máy tính cá nhân"
  ],
  correctAnswer: 2
},
{
  question: "21. Hệ điều hành là phần mềm",
  options: [
    "Điều khiển thiết bị phần cứng",
    "Quản lý và phân phối tài nguyên máy tính phục vụ cho các ứng dụng",
    "Luôn luôn phải có để máy tính hoạt động",
    "Quản lý các ứng dụng do người sử dụng cài đặt"
  ],
  correctAnswer: 1
},
{
  question: "22. Hệ điều hành là:",
  options: [
    "Phần mềm chỉ để quản lý các phần cứng",
    "Phần mềm hoạt động như một lớp trung gian giữa người sử dụng và phần cứng máy tính",
    "Phần mềm chỉ để quản lý các chương trình ứng dụng",
    "Phần mềm máy tính cần có để hoạt động"
  ],
  correctAnswer: 1
},
{
  question: "23. Các nguyên nhân để xây dựng hệ thống phân tán là",
  options: [
    "Chia xẻ tài nguyên và thông tin liên lạc với nhau",
    "An toàn và tăng tốc độ tính toán",
    "Chia xẻ tài nguyên, thông tin liên lạc với nhau, an toàn và tăng tốc độ tính toán",
    "Thông tin liên lạc với nhau và tăng tốc độ tính toán"
  ],
  correctAnswer: 2
},
{
  question: "24. Các mục đích của hệ điều hành",
  options: [
    "Giúp cho việc sử dụng hệ thống máy tính thuận tiện hơn, sử dụng phần cứng máy tính hiệu quả và thực hiện các chương trình của người sử dụng",
    "Sử dụng phần cứng máy tính hiệu quả và thực hiện các chương trình của người sử dụng",
    "Thực hiện các chương trình của người sử dụng",
    "Tạo các giao diện đẹp và thân thiện để người dùng dễ sử dụng."
  ],
  correctAnswer: 0
},
{
  question: "25. Các hạn chế của thiết bị cầm tay PDA (Personal Digital Assistants)",
  options: [
    "Bộ nhớ hạn chế và xử lý chậm",
    "Xử lý chậm và màn hình nhỏ",
    "Màn hình nhỏ và cảm ứng chậm",
    "Bộ nhớ hạn chế, màn hình nhỏ và xử lý chậm"
  ],
  correctAnswer: 0
},
{
  question: "26. Interrupt driven là gì?",
  options: [
    "vecto ngắt",
    "Bộ điều khiển ngắt",
    "Một lỗi của ngắt",
    "Một bẫy (trap) của ngắt"
  ],
  correctAnswer: 1
},
{
  question: "27. Interrupt vector được gọi là",
  options: [
    "Ngắt địa chỉ vector",
    "Ngắt địa chỉ điều khiển",
    "Vector ngắt",
    "Kiến trúc ngắt"
  ],
  correctAnswer: 2
},
{
  question: "28. Trong quản lý ngắt, Hệ điều hành duy trì trạng thái của CPU bằng cách lưu giữ các thanh ghi, bộ đếm chương trình và",
  options: [
    "địa chỉ của lệnh bị ngắt",
    "Dữ liệu của lệnh bị ngắt",
    "thông số dữ liệu",
    "DMA"
  ],
  correctAnswer: 0
},
{
  question: "29. Cache được gọi là . . .",
  options: [
    "nơi ghi các dữ liệu nằm chờ các ứng dụng hay phần cứng xử lý",
    "tên gọi của bộ nhớ chính, nơi lưu trữ các dữ liệu nằm chờ các ứng dụng hay phần cứng xử lý",
    "tên gọi của bộ nhớ đệm, nơi lưu trữ các dữ liệu nằm chờ các ứng dụng hay phần cứng xử lý",
    "tên gọi của bộ nhớ truy cập ngẫu nhiên"
  ],
  correctAnswer: 2
},
{
  question: "30. Trong quản lý ngắt, HĐH duy trì trạng thái của CPU bằng cách ...",
  options: [
    "Lưu giữ các thanh ghivà Lưu giữ bộ đếm chương trình",
    "Lưu giữ bộ đếm chương trình và Lưu giữ địa chỉ của lệnh bị ngắt",
    "Lưu giữ địa chỉ của lệnh bị ngắt và Lưu giữ các thanh ghi",
    "Lưu giữ các thanh ghi, Lưu giữ bộ đếm chương trình và Lưu giữ địa chỉ của lệnh bị ngắt"
  ],
  correctAnswer: 3
},
{
  question: "31. Sau khi I/O bắt đầu, quyền kiểm soát chỉ quay lại chương trình của người sử dụng khi I/O trên . . . .",
  options: [
    "Kết thúc",
    "Thực hiện",
    "Đang chạy",
    "Đang chờ"
  ],
  correctAnswer: 0
},
{
  question: "32. Cấu trúc của hệ thống lưu trữ bao gồm:",
  options: [
    "Main Memory, Magnetic Disk",
    "Secondary Storage và main memory",
    "Magnetic Disk và ROM , RAM",
    "Main Memory, Secondary Storage và Magnetic Disk"
  ],
  correctAnswer: 3
},
{
  question: "33. Trong phần bảo vệ phần cứng có hoạt động theo chế độ nào",
  options: [
    "User Mode và Register Mode",
    "Monitor Mode",
    "Register Mode và Monitor Mode",
    "User Mode và Monitor Mode"
  ],
  correctAnswer: 3
},
{
  question: "34. Để bảo vệ bộ nhớ (protection memory), cần thêm thanh ghi để xác định dải địa chỉ hợp lệ mà một chương trình có thể truy nhập.",
  options: [
    "Base register và Mode register",
    "Limit register",
    "Mode register và Limit register",
    "Base register và Limit register"
  ],
  correctAnswer: 3
},
{
  question: "35. Đâu là lệnh đặc quyền",
  options: [
    "Lệnh nạp các thanh ghi base và Lệnh nạp các thanh ghi limit",
    "Lệnh nạp các thanh ghi limit và Load-timer",
    "Load-timer và Lệnh nạp các thanh ghi base",
    "Lệnh nạp các thanh ghi base, Load-timer và Lệnh nạp các thanh ghi limit"
  ],
  correctAnswer: 3
},
{
  question: "36. Trong chế độ bảo vệ CPU, Timer thường được sử dụng để",
  options: [
    "Thực hiện chia sẻ thời gian",
    "Tính toán thời gian hiện tại",
    "Thu hồi thời gian sử dụng CPU",
    "Cấp phát thời gian sử dụng CPU"
  ],
  correctAnswer: 0
},
{
  question: "37. Bề mặt Đĩa được chia (vật lý) thành",
  options: [
    "Track và Sector",
    "Sector và Cylinder",
    "Cylinder và Track",
    "Track, Sector và Cylinder"
  ],
  correctAnswer: 0
},
{
  question: "38. Có những loại ngắt nào",
  options: [
    "polling và vectored interrup system",
    "vectored interrup system và mixed",
    "mixed và polling",
    "polling, mixed và vectored interrup system"
  ],
  correctAnswer: 0
},
{
  question: "39. Người sử dụng làm việc tại lớp nào trong mô hình phân lớp máy tính?",
  options: [
    "Phần mềm",
    "Phần cứng",
    "Hệ thống",
    "Ứng dụng"
  ],
  correctAnswer: 3
},
{
  question: "40. Windows là một hệ điều hành:",
  options: [
    "Đơn nhiệm",
    "Đơn xử lý",
    "Mã nguồn mở",
    "Đa nhiệm"
  ],
  correctAnswer: 3
},
{
  question: "41. Phát biểu nào sau đây là đúng:",
  options: [
    "Lời gọi hệ thống cung cấp một giao tiếp giữa bộ nhớ và thiết bị vào ra.",
    "Lời gọi hệ thống cung cấp một giao tiếp giữa bộ nhớ và hệ điều hành.",
    "Lời gọi hệ thống cung cấp một giao tiếp giữa tiến trình và bộ nhớ.",
    "Lời gọi hệ thống cung cấp một giao tiếp giữa tiến trình và hệ điều hành."
  ],
  correctAnswer: 3
},
{
  question: "42. Hệ điều hành MS-DOS có cấu trúc:",
  options: [
    "Máy ảo",
    "Hạt nhân",
    "Lớp",
    "Đơn thể"
  ],
  correctAnswer: 3
},
{
  question: "43. Động lực chính khiến cho các hệ điều hành hiện đại thường hỗ trợ môi trường đa nhiệm (multitask) là:",
  options: [
    "Giảm hiệu suất sử dụng CPU, giảm tốc độ xử lý",
    "Giảm hiệu suất sử dụng CPU, tăng tốc độ xử lý",
    "Tăng hiệu suất sử dụng CPU, giảm tốc độ xử lý",
    "Tăng hiệu suất sử dụng CPU, tăng tốc độ xử lý"
  ],
  correctAnswer: 3
},
{
  question: "44. Bộ xử lý trung tâm CPU có chức năng:",
  options: [
    "Lấy chỉ thị từ bộ nhớ chính, giải mã và điều khiển ALU",
    "Thực hiện các thao tác đơn giản",
    "Chứa các kết quả tạm thời và thông tin điều khiển nhất định",
    "Thi hành các chương trình được chứa trong bộ nhớ chính"
  ],
  correctAnswer: 3
},
{
  question: "45. Bộ xử lý trung tâm CPU là bộ phận:",
  options: [
    "Lưu trữ lệnh",
    "Giải mã lệnh",
    "Biên dịch lệnh",
    "Thi hành lệnh"
  ],
  correctAnswer: 3
},
{
  question: "46. Cấu trúc phần cứng của máy tính:",
  options: [
    "CPU, ALU, bộ nhớ trong",
    "CPU, CU, ALU",
    "CPU, CU, bộ nhớ trong",
    "CPU, hệ thống vào ra, bộ nhớ trong."
  ],
  correctAnswer: 3
},
{
  question: "47. Một Process cần các tài nguyên gồm:",
  options: [
    "Thời gian CPU",
    "Bộ nhớ",
    "Các thiết bị I/O",
    "Thời gian CPU, Bộ nhớ, Các thiết bị I/O"
  ],
  correctAnswer: 3
},
{
  question: "48. HĐH chịu trách nhiệm đối với các hoạt động sau trong nối kết với Process Management",
  options: [
    "Tạo và xóa process của người dùng và của hệ thống",
    "Tạm ngừng và tiếp tục process",
    "Cung cấp cơ chế cho: đồng bộ hóa và sự giao tiếp process",
    "Tạo và xóa process của người dùng và của hệ thống, tạm ngừng và tiếp tục process, cung cấp cơ chế cho: đồng bộ hóa và sự giao tiếp process."
  ],
  correctAnswer: 3
},
{
  question: "49. Một trong các dịch vụ của Hệ điều hành",
  options: [
    "Thực thi chương trình",
    "Thao tác nhập/xuất",
    "Tạo ra một ngắt",
    "Thực thi chương trình và thao tác nhập xuất."
  ],
  correctAnswer: 3
},
{
  question: "50. Các kiểu lời gọi hệ thống",
  options: [
    "Điều khiển tiến trình",
    "Quản lý file, thiết bị",
    "Duy trì thông tin, giao tiếp",
    "Điều khiển tiến trình; duy trì thông tin, giao tiếp; quản lý file, thiết bị."
  ],
  correctAnswer: 3
},
{
  question: "51. Các mục tiêu thiết kế HĐH (quan điểm người sử dụng)",
  options: [
    "Dễ sử dụng, dễ học",
    "Đáng tin cậy, an toàn",
    "Tốc độ nhanh",
    "Dễ sử dụng; đáng tin cậy; tốc độ nhanh."
  ],
  correctAnswer: 0
},
{
  question: "52. Hệ điều hành có nhiệm vụ thực hiện các hoạt động sau trong việc quản lý đĩa",
  options: [
    "Quản lý không gian trống",
    "Cấp phát lưu trữ",
    "Định thời đĩa",
    "Quản lý không gian trống, cấp phát lưu trữ, định thời đĩa."
  ],
  correctAnswer: 3
},
{
  question: "53. Phát biểu nào sau đây là đúng:",
  options: [
    "Sự đa chương được tổ chức bằng cách lưu trữ một tiến trình trong bộ nhớ tại một thời điểm, phân phối CPU cho một tiến trình trong hệ thống.",
    "Sự đa chương được tổ chức bằng cách lưu trữ nhiều tiến trình trong bộ nhớ tại một thời điểm, phân phối CPU cho một tiến trình trong hệ thống.",
    "Sự đa chương được tổ chức bằng cách lưu trữ một tiến trình trong bộ nhớ tại một thời điểm, và điều phối CPU qua lại giữa các tiến trình trong hệ thống.",
    "Sự đa chương được tổ chức bằng cách lưu trữ nhiều tiến trình trong bộ nhớ tại một thời điểm, và điều phối CPU qua lại giữa các tiến trình trong hệ thống."
  ],
  correctAnswer: 3
},
{
  question: "54. Phát biểu nào sau đây là đúng:",
  options: [
    "Máy tính yêu cầu HĐH bảo đảm rằng nhiều chương trình bị lỗi.",
    "Chia sẻ tài nguyên hệ thống yêu cầu Phần cứng máy tính bảo đảm rằng một chương trình bị lỗi có gây cho các chương trình khác thực hiện sai theo.",
    "HĐH bảo đảm rằng một chương trình bị lỗi gây cho các chương trình khác thực hiện sai theo.",
    "Chia sẻ tài nguyên hệ thống yêu cầu HĐH bảo đảm rằng một chương trình bị lỗi không gây cho các chương trình khác thực hiện sai theo."
  ],
  correctAnswer: 3
},
{
  question: "55. . . . . là một mảng lớn các word hoặc byte, mỗi word/byte có địa chỉ riêng. Nó là một kho chứa dữ liệu có thể truy nhập nhanh chóng được chia sẻ bởi CPU và các thiết bị I/O",
  options: [
    "Tiến trình",
    "Bộ nhớ",
    "CPU",
    "I/O"
  ],
  correctAnswer: 1
},
{
  question: "56. Một trong những mục đích của hệ điều hành là che giấu sự khác biệt của các thiết bị phần cứng từ người dùng. Chức năng đó do . . . . đảm nhận",
  options: [
    "CPU",
    "Memory",
    "I/O",
    "Register"
  ],
  correctAnswer: 2
},
{
  question: "57. Sự truy nhập tới các tài nguyên chia sẻ cho phép",
  options: [
    "Tăng tốc độ tính toán",
    "Tăng tính khả dụng của dữ liệu",
    "Nâng cao độ tin cậy",
    "Giảm bớt sự tính toán"
  ],
  correctAnswer: 1
},
{
  question: "58. . . . . là một cơ chế điều khiển sự truy nhập của các chương trình, tiến trình hoặc người sử dụng tới tài nguyên của hệ thống và của người sử dụng.",
  options: [
    "Protection",
    "Process",
    "Protocol",
    "Procedure"
  ],
  correctAnswer: 0
},
{
  question: "59. . . . . là một chương trình giả lập phần cứng, chạy N bản copy của chương trình giả lập này.",
  options: [
    "WIN",
    "Máy ảo",
    "LINUX",
    "UNIX"
  ],
  correctAnswer: 1
},
{
  question: "60. Trước đây HĐH được viết bằng ngôn ngữ gì",
  options: [
    "Pascal",
    "C++",
    "Assembly",
    "FOXPRO"
  ],
  correctAnswer: 2
},
  {
    "question": "61. Mục tiêu của bảo vệ hệ thống là",
    "options": [
      "A. Bảo vệ các tài nguyên không bị chiếm dụng",
      "B. Bảo vệ các thao tác I/O",
      "C. Chống ăn cắp bản quyền",
      "D. Chống sự truy suất bất hợp lệ"
    ],
    "correctAnswer": 3
  },
  {
    "question": "62. Một miền bảo vệ có thể được xây dựng cho",
    "options": [
      "A. Một tiến trình",
      "B. Một miền găng",
      "C. Phần mềm nhập xuất",
      "D. Các thiết bị phần cứng"
    ],
    "correctAnswer": 0
  },
  {
    "question": "63. Cách nào sau đây là tốt nhất để chống lại điểm yếu về bảo mật trong phần mềm Hệ điều hành.",
    "options": [
      "A. Tắt hệ thống khi không sử dụng",
      "B. Cài đặt HĐH thông dụng",
      "C. Cài đặt bản service pack mới nhất",
      "D. Sao lưu hệ thống thường xuyên"
    ],
    "correctAnswer": 2
  },
  {
    "question": "64. Loại mã nguồn độc hại nào có thể được cài đặt song không tác hại cho đến khi một hoạt động nào đó được kích hoạt.",
    "options": [
      "A. Logic bomb",
      "B. Trojan horse",
      "C. Sâu",
      "D. Stealth virus"
    ],
    "correctAnswer": 0
  },
  {
    "question": "65. Khi một user báo rằng hệ thống của anh ta đã phát hiện một virus mới. Điều gì sau đây cần làm như là bước đầu tiên để xử lý tình huống này.",
    "options": [
      "A. Định dạng lại đĩa cứng",
      "B. Disable tài khoản mail của anh ta",
      "C. Kiểm tra lại tập tin diệt virus hiện hành",
      "D. Cài đặt lại hệ điều hành"
    ],
    "correctAnswer": 2
  },
  {
    "question": "66. Yếu tố nào sau đây được coi là hữu ích nhất trong việc kiểm soát truy cập khi bị tấn công từ bên ngoài.",
    "options": [
      "A. Phần mềm antivirus",
      "B. Kiểm tra các máy trạm",
      "C. Đăng nhập hệ thống",
      "D. Ngắt toàn bộ hệ thống"
    ],
    "correctAnswer": 2
  },
  {
    "question": "67. Thiết bị nào sử dụng bộ lọc gói và các quy tắc truy cập để kiểm soát truy cập đến các mạng riêng từ các mạng công cộng như là Internet.",
    "options": [
      "A. Router",
      "B. Switch",
      "C. Filewall",
      "D. Wifi"
    ],
    "correctAnswer": 2
  },
  {
    "question": "68. Có bao nhiêu mối liên kết giữa một tiến trình và một miền bảo vệ",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "correctAnswer": 0
  },
  {
    "question": "69. Các phương pháp phân phối đĩa cho tập tin?",
    "options": [
      "A. Phân phối liên tục, phân phối liên kết/chỉ mục",
      "B. Phân phối liên tục",
      "C. Phân phối liên kết/chỉ mục",
      "D. Phân phối liên tục/chỉ mục"
    ],
    "correctAnswer": 0
  },
  {
    "question": "70. Bộ nhớ ảo cho phép những lợi ích gì khác trong thời gian tạo lập tiến trình:",
    "options": [
      "A. Copy-on-View và các file được ánh xạ từ bộ nhớ",
      "B. Copy-on-Read và các file được ánh xạ từ bộ nhớ",
      "C. Copy-on-Write và các file được ánh xạ từ bộ nhớ",
      "D. Copy-on-Listen và các file được ánh xạ từ bộ nhớ"
    ],
    "correctAnswer": 2
  },
  {
    "question": "71. Tiến trình (Process) là gì?",
    "options": [
      "A. Là một chương trình đang được thực thi",
      "B. Là một chương trình đang lưu trên đĩa",
      "C. Là một chương trình nạp vào bộ nhớ",
      "D. Là một chương trình đang chờ xử lý"
    ],
    "correctAnswer": 0
  },
  {
    "question": "72. Đâu không phải là trạng thái của tiến trình",
    "options": [
      "A. New (tạo mới một tiến trình)",
      "B. Running (tiến trình đang được thực thi)",
      "C. Waiting (tiến trình đang chờ sự kiện xảy ra)",
      "D. Swapping (trao đổi giữa các tiến trình)"
    ],
    "correctAnswer": 3
  },
  {
    "question": "73. Để các tiến trình chia sẻ CPU một cách công bằng, không có tiến trình nào phải chờ đợi vô hạn để được cấp CPU, hệ điều hành dùng thành phần nào để giải quyết vấn đề này:",
    "options": [
      "A. Khối quản lí tiến trình",
      "B. Khối quản lí tài nguyên",
      "C. Bộ điều phối",
      "D. Bộ phân phối"
    ],
    "correctAnswer": 2
  },
  {
    "question": "74. Câu trên thuộc dạng chuyển trạng thái nào: Tiến trình yêu cầu một tài nguyên nhưng chưa được đáp ứng vì tài nguyên chưa sẵn sàng, hoặc tiến trình phải chờ một sự kiện hay thao tác nhập xuất.",
    "options": [
      "A. Running -> Blocked",
      "B. Ready -> Running",
      "C. Running -> End",
      "D. Blocked -> Ready"
    ],
    "correctAnswer": 0
  },
{
  "question": "76. Có bao nhiêu trạng thái của tiến trình",
  "options": [
    "A. 3",
    "B. 4",
    "C. 5",
    "D. 6"
  ],
  "correctAnswer": 2
},
{
  "question": "77. Một tiến trình (Process) bao gồm",
  "options": [
    "A. Bộ đếm chương trình và Ngăn xếp",
    "B. Ngăn xếp và Đoạn dữ liệu",
    "C. Đoạn dữ liệu và Bộ đếm chương trình",
    "D. Bộ đếm chương trình, Ngăn xếp và Đoạn dữ liệu"
  ],
  "correctAnswer": 3
},
{
  "question": "78. Khi một tiến trình kết thúc xử lí, hệ điều hành huỷ bỏ nó bằng một số hoạt động nào sau đây?",
  "options": [
    "A. Tiếp tục ghi nhớ định danh của tiến trình.",
    "B. Không thu hồi các tài nguyên cấp phát cho tiến trình",
    "C. Thu hồi các tài nguyên cấp phát cho tiến trình, huỷ tiến trình ra khỏi tất cả các danh sách quản lí của hệ thống",
    "D. Tiếp tục ghi nhớ định danh của tiến trình và không thu hồi các tài nguyên cấp phát cho tiến trình, không hủy tiến trình"
  ],
  "correctAnswer": 2
},
{
  "question": "79. Tiến trình đang thực thi sẽ chuyển về loại danh sách nào khi xảy ra sự kiện đợi một thao tác nhập/xuất hoàn tất, yêu cầu tài nguyên dữ liệu chưa được thoã mãn, yêu cầu tạm dừng:",
  "options": [
    "A. Danh sách chờ đợi (Waiting list)",
    "B. Danh sách sẵn sàng (Ready list)",
    "C. Danh sách tác vụ (Job list)",
    "D. Danh sách chờ đợi (Waiting list) và danh sách sẵn sàng (Ready list)"
  ],
  "correctAnswer": 0
},
{
  "question": "80. Trạng thái BLOCKED của một process là do:",
  "options": [
    "A. Đang chờ nhập xuất",
    "B. Đang chờ một sự kiện nào đó chưa xảy ra.",
    "C. Đang chờ nhập xuất và đang chờ một sự kiện nào đó chưa xảy ra.",
    "D. Đang chờ một sự kiện nào đó chưa xảy ra và hủy process"
  ],
  "correctAnswer": 2
},
{
  "question": "81. Hành động nào HĐH sẽ thực thi một process mới sinh ra:",
  "options": [
    "A. Cấp CPU ngay cho process.",
    "B. Tạo ngay khối PCB để quản lý process.",
    "C. Giao ngay các tài nguyên mà process cần.",
    "D. Cấp bộ nhớ để lưu process"
  ],
  "correctAnswer": 1
},
{
  "question": "82. Độ ưu tiên của các process cho biết:",
  "options": [
    "A. Tầm quan trọng của process.",
    "B. Process chiếm nhiều hay ít vùng nhớ.",
    "C. Process sữ dụng CPU nhiều hay ít.",
    "D. Thời điểm nạp Process"
  ],
  "correctAnswer": 0
},
{
  "question": "83. Tại sao không có chuyển đổi từ trạng thái New sang trạng thái Terminate.",
  "options": [
    "A. Tiến trình đang chạy",
    "B. Tiến trình chưa thực hiện",
    "C. Tiến trình chưa đủ tài nguyên",
    "D. Tiến trình đang chờ"
  ],
  "correctAnswer": 1
},
{
  "question": "84. Tại sao phải chuyển đổi từ trạng thái Running sang trạng thái Waiting.",
  "options": [
    "A. Tiến trình đang chạy",
    "B. Tiến trình chưa thực hiện nên không thể bị Waiting",
    "C. Tiến trình chưa đủ tài nguyên",
    "D. Tiến trình đã đủ tài nguyên"
  ],
  "correctAnswer": 2
},
{
  "question": "85. Phát biểu nào sau đây là đúng?",
  "options": [
    "A. Tại một thời điểm, có nhiều tiến trình có thể nhận trạng thái running trên một bộ xử lý bất kỳ. Trong khi đó, một tiến trình có thể ở trạng thái blocked hay ready",
    "B. Tại một thời điểm, có nhiều tiến trình có thể nhận trạng thái running trên một bộ xử lý bất kỳ và nhiều tiến trình có thể ở trạng thái blocked hay ready",
    "C. Tại một thời điểm, chỉ có một tiến trình có thể nhận trạng thái running trên một bộ xử lý bất kỳ và một tiến trình có thể ở trạng thái blocked hay ready",
    "D. Tại một thời điểm, chỉ có một tiến trình có thể nhận trạng thái running trên một bộ xử lý bất kỳ. Trong khi đó, nhiều tiến trình có thể ở trạng thái blocked hay ready"
  ],
  "correctAnswer": 3
},
{
  "question": "86. Chức năng điều phối tác vụ của hệ điều hành được kích hoạt khi:",
  "options": [
    "A. Hệ thống tạo lập một tiến trình",
    "B. Tiến trình kết thúc xử lí",
    "C. Xảy ra ngắt",
    "D. Hệ thống tạo lập một tiến trình, tiến trình kết thúc xử lí"
  ],
  "correctAnswer": 0
},
{
  "question": "101. Tiến trình loại CPU-bound là:",
  "options": [
    "Tiến trình có một hoặc nhiều phiên sử dụng CPU ngắn.",
    "Tiến trình không có nhiều phiên sử dụng CPU dài.",
    "Tiến trình không có phiên sử dụng CPU.",
    "Tiến trình có một hoặc nhiều phiên sử dụng CPU dài."
  ],
  "correctAnswer": 3
},
{
  "question": "102. Tiến trình loại I/O-bound là:",
  "options": [
    "Tiến trình có một hoặc nhiều phiên sử dụng CPU dài.",
    "Tiến trình không có nhiều phiên sử dụng CPU ngắn.",
    "Tiến trình không có phiên sử dụng CPU và I/O.",
    "Tiến trình có một hoặc nhiều phiên sử dụng CPU ngắn (thời gian vào, ra nhiều)."
  ],
  "correctAnswer": 3
},
{
  "question": "103. Lập lịch non-preemptive là:",
  "options": [
    "Lập lịch ưu tiên",
    "Lập lịch ngắn",
    "Lập lịch dài",
    "Lập lịch không ưu tiên."
  ],
  "correctAnswer": 3
},
{
  "question": "104. Lập lịch preemptive là:",
  "options": [
    "Lập lịch không ưu tiên",
    "Lập lịch ngắn",
    "Lập lịch dài",
    "Lập lịch ưu tiên."
  ],
  "correctAnswer": 3
},
{
  "question": "105. Lập lịch non-preemptive là:",
  "options": [
    "Một tiến trình giữ CPU đến khi nó kết thúc hoặc chuyển sang trạng thái running.",
    "Một tiến trình không giữ CPU đến khi nó kết thúc hoặc chuyển sang trạng thái waiting.",
    "Một tiến trình giữ I/O đến khi nó kết thúc hoặc chuyển sang trạng thái waiting.",
    "Một tiến trình giữ CPU đến khi nó kết thúc hoặc chuyển sang trạng thái waiting."
  ],
  "correctAnswer": 3
},
{
  "question": "106. Lập lịch preemptive là:",
  "options": [
    "Một tiến trình giữ I/O đến khi nó kết thúc hoặc chuyển sang trạng thái waiting.",
    "Tiến trình được phép giữ CPU đến khi kết thúc.",
    "Tiến trình được phép thực hiện trong khoảng thời gian, hệ thống không có quyền ngắt CPU.",
    "Tiến trình chỉ được phép thực hiện trong khoảng thời gian, hệ thống có quyền ngắt CPU bất cứ lúc nào."
  ],
  "correctAnswer": 3
},
{
  "question": "107. Độ trễ điều phối là gì?",
  "options": [
    "Thời gian sử dụng cho bộ lập lịch để khởi động 1 tiến trình khác.",
    "Thời gian sử dụng cho bộ lập lịch để dừng 1 tiến trình.",
    "Thời gian sử dụng cho CPU để dừng 1 tiến trình.",
    "Thời gian sử dụng cho bộ lập lịch để dừng 1 tiến trình và khởi động 1 tiến trình khác"
  ],
  "correctAnswer": 3
},
{
  "question": "108. Trong toàn bộ hệ thống hệ điều hành sử dụng bao nhiêu danh sách sẵn sàng",
  "options": [
    "1 danh sách",
    "2 danh sách",
    "1 danh sách cho mỗi tiến trình",
    "1 danh sách cho mỗi tài nguyên"
  ],
  "correctAnswer": 0
},
{
  "question": "109. Lập lịch theo chính sách xoay vòng phụ thuộc vào yếu tố nào",
  "options": [
    "CPU",
    "Memory",
    "Quantum",
    "I/O"
  ],
  "correctAnswer": 2
},
{
  "question": "110. Hình sau thuộc về loại lập lịch nào:",
  "options": [
    "FCFS",
    "SJF",
    "RR",
    "Ưu tiên"
  ],
  "correctAnswer": 0
},
{
  "question": "111. Hình sau mô tả loại lập lịch gì:",
  "options": [
    "FCFS",
    "Ưu tiên",
    "SJF",
    "RR"
  ],
  "correctAnswer": 2
},
{
  "question": "112. Đoạn sau mô tả lập lịch gì:\nBộ điều phối lần lượt cấp phát cho từng tiến trình trong danh sách một khoảng thời gian sử dụng CPU gọi là quantum",
  "options": [
    "FCFS",
    "Ưu tiên",
    "SJF",
    "RR"
  ],
  "correctAnswer": 3
},
{
  "question": "113. Câu dưới đây thuộc về loại lập lịch nào:\nLập lịch bao gồm cả hai trường hợp ưu tiên và không ưu tiên?",
  "options": [
    "FCFS",
    "Ưu tiên",
    "SJF",
    "RR"
  ],
  "correctAnswer": 2
},
{
  "question": "114. Việc lập lịch CPU sẽ được kích hoạt khi 1 tiến trình ở 1 trong các trạng thái",
  "options": [
    "Chuyển từ trạng thái đang chạy sang trạng thái chờ, Chuyển từ trạng thái đang chờ sang trạng thái sẵn sàng",
    "Chuyển từ trạng thái đang chạy sang trạng thái sẵn sàng, Chuyển từ trạng thái đang chờ sang trạng thái sẵn sàng",
    "Chuyển từ trạng thái đang chạy sang trạng thái chờ, Chuyển từ trạng thái đang chạy sang trạng thái sẵn sàng",
    "Chuyển từ trạng thái đang chạy sang trạng thái chờ, Chuyển từ trạng thái đang chờ sang trạng thái sẵn sàng, Chuyển từ trạng thái đang chạy sang trạng thái sẵn sàng"
  ],
  "correctAnswer": 2
},
{
  "question": "115. Lập lịch nào được kích hoạt theo điều kiện ưu tiên",
  "options": [
    "Chuyển từ trạng thái chạy sang trạng thái sẵn sàng",
    "Kết thúc",
    "Chuyển từ trạng thái đang chạy sang trạng thái chờ",
    "Chuyển từ trạng thái đang chờ sang trạng thái sẵn sàng"
  ],
  "correctAnswer": 0
},
{
  "question": "116. Lập lịch nào được kích hoạt theo điều kiện không ưu tiên",
  "options": [
    "Chuyển từ trạng thái chạy sang trạng thái sẵn sàng",
    "Chuyển từ trạng thái chờ sang trạng thái sẵn sàng",
    "Chuyển từ trạng thái đang chạy sang trạng thái chờ",
    "Chuyển từ trạng thái sẵn sàng sang trạng thái chạy"
  ],
  "correctAnswer": 2
},
{
  "question": "117. Modul điều phối trao quyền điều khiển CPU cho tiến trình được chọn bởi bộ lập lịch ngắn hạn; nó thực hiện công việc:",
  "options": [
    "Chuyển đổi ngữ cảnh, Chuyển sang chế độ người dùng.",
    "Chuyển sang chế độ người dùng, Nhảy đến vị trí chính xác trong chương trình người dùng để khởi động lại chương trình đó.",
    "Chuyển đổi ngữ cảnh, Nhảy đến vị trí chính xác trong chương trình người dùng để khởi động lại chương trình đó.",
    "Chuyển đổi ngữ cảnh, Chuyển sang chế độ người dùng, Nhảy đến vị trí chính xác trong chương trình người dùng để khởi động lại chương trình đó."
  ],
  "correctAnswer": 3
},
{
  "question": "118. Trong các tiêu chuẩn tối ưu về lập lịch, cần tận dụng tối đa ở tài nguyên nào",
  "options": [
    "Tận dụng tối đa CPU và Tận dụng tối đa thời gian chờ",
    "Tận dụng thông lượng tối đa và Tận dụng tối đa thời gian chờ",
    "Tận dụng tối đa thời gian chờ",
    "Tận dụng tối đa CPU và Tận dụng thông lượng tối đa"
  ],
  "correctAnswer": 2
},
{
  "question": "119. Trong các tiêu chuẩn tối ưu về lập lịch, cần tận dụng cực tiểu ở tài nguyên nào",
  "options": [
    "Cực tiểu thời gian lưu lại và Cực tiểu thời gian chờ, Cực tiểu thông lượng",
    "Cực tiểu thời gian chờ và Cực tiểu thời gian đáp ứng, Cực tiểu sử dụng CPU",
    "Cực tiểu thời gian đáp ứng và Cực tiểu thông lượng, Cực tiểu sử dụng CPU",
    "Cực tiểu thời gian lưu lại, Cực tiểu thời gian chờ, Cực tiểu thời gian đáp ứng"
  ],
  "correctAnswer": 3
},
{
  "question": "120. Trong các loại lập lịch CPU sau, loại nào được xử lý vào đầu ra đầu",
  "options": [
    "FCFS",
    "SJF",
    "RR",
    "Độ ưu tiên"
  ],
  "correctAnswer": 0
},
 {
    "question": "121. Trong các loại lập lịch CPU sau, loại nào được xử lý theo chính sách xoay vòng",
    "options": ["FCFS", "SJF", "RR", "Độ ưu tiên"],
    "correctAnswer": 2
  },
  {
    "question": "122. Trong các loại lập lịch CPU sau, loại nào được xử lý theo chính sách ưu tiên và không ưu tiên",
    "options": ["FCFS", "SJF", "RR", "Độ ưu tiên"],
    "correctAnswer": 3
  },
  {
    "question": "123. Thuật toán nào sau đây là thuật toán có thể điều phối theo nguyên tắc độc quyền (không ưu tiên)",
    "options": ["FCFS và RR", "SJF và RR", "RR và Độ ưu tiên", "FCFS và SJF"],
    "correctAnswer": 3
  },
  {
    "question": "124. CPU được cấp phát cho tiến trình đầu tiên trong danh sách sẵn sàng...",
    "options": ["FCFS", "SJF", "RR", "Độ ưu tiên"],
    "correctAnswer": 0
  },
  {
    "question": "125. Nếu một tiến trình mới có độ dài sử dụng CPU nhỏ hơn thời gian còn lại của tiến trình đang thi hành...",
    "options": ["RR", "SJF ưu tiên", "SJF không ưu tiên", "Độ ưu tiên"],
    "correctAnswer": 1
  },
  {
    "question": "126. Độ ưu tiên của các tiến trình cho biết",
    "options": ["Tiến trình sử dụng CPU nhiều hay ít", "Tiến trình chiếm nhiều hay ít vùng nhớ", "Tầm quan trọng của tiến trình", "Tầm quan trọng của thời gian sử dụng CPU"],
    "correctAnswer": 2
  },
  {
    "question": "127. Tiêu chí đánh giá lập lịch?",
    "options": ["Khả năng tận dụng CPU", "Thông lượng", "Thời gian chờ đợi, Thời gian hoàn thành", "Khả năng tận dụng CPU, thông lượng, thời gian hoàn thành, thời gian chờ đợi, thời gian đáp ứng"],
    "correctAnswer": 3
  },
  {
    "question": "128. Các giải pháp phần cứng là",
    "options": ["Cấm ngắt", "Chỉ thị TSL", "Cấm ngắt và không chỉ thị TSL", "Cấm ngắt và Chỉ thị TSL"],
    "correctAnswer": 3
  },
  {
    "question": "129. Đặc điểm chung của các giải pháp phần cứng:",
    "options": ["Cần được sự hỗ trợ của cơ chế phần cứng và dễ mở rộng cho N tiến trình", "Dễ mở rộng cho N tiến trình", "Sử dụng CPU không hiệu quả và dễ mở rộng cho N tiến trình", "Cần được sự hỗ trợ của cơ chế phần cứng, dễ mở rộng cho N tiến trình và sử dụng CPU không hiệu quả"],
    "correctAnswer": 3
  },
  {
    "question": "130. Các quy định để đồng bộ hóa hoạt động của hai tiến trình sản xuất tiêu thụ là",
    "options": [
      "Tiến trình sản xuất không được ghi dữ liệu vào bộ đệm đã đầy và hai tiến trình sản xuất và tiêu thụ không được thao tác trên bộ đệm cùng lúc",
      "Tiến trình tiêu thụ không được đọc dữ liệu từ bộ đệm đang trống và hai tiến trình sản xuất và tiêu thụ không được thao tác trên bộ đệm cùng lúc",
      "Hai tiến trình sản xuất và tiêu thụ không được thao tác trên bộ đệm cùng lúc",
      "Tiến trình sản xuất không được ghi dữ liệu vào bộ đệm đã đầy, tiến trình tiêu thụ không được đọc dữ liệu từ bộ đệm đang trống và hai tiến trình sản xuất và tiêu thụ không được thao tác trên bộ đệm cùng lúc"
    ],
    "correctAnswer": 3
  },
  {
    "question": "131. Trong các giải pháp sau, giải pháp nào tiến trình đang chờ nhưng vẫn chiếm dụng CPU",
    "options": ["Sleep and Wakeup", "Monitor", "Busy waiting", "Semaphore"],
    "correctAnswer": 2
  },
  {
    "question": "132. Khi giải quyết bài toán miền găng, điều kiện nào sau đây là không cần thiết:",
    "options": [
      "Không có hai tiến trình nào ở trong miền găng cùng một lúc",
      "Phải giả thiết tốc độ các tiến trình, cũng như về số luợng bộ xử lí",
      "Một tiến trình bên ngoài miền găng không được ngăn cản các tiến trình khác",
      "Không có tiến trình nào phải chờ vô hạn để được vào miền găng"
    ],
    "correctAnswer": 1
  },
  {
    "question": "133. Phương pháp nhanh nhất để trao đổi thông tin giữa các tiến trình",
    "options": ["Ðuờng ống", "Vùng nhớ chia sẻ", "Trao đổi thông điệp", "Socket"],
    "correctAnswer": 1
  },
  {
    "question": "134. Kĩ thuật nào sau đây là liên lạc trực tiếp giữa hai tiến trình",
    "options": ["Ðuờng ống (Pipe)", "Vùng nhớ chia sẻ", "Trao đổi thông điệp", "Socket"],
    "correctAnswer": 2
  },
  {
    "question": "135. Để đồng bộ hóa tiến trình, giải pháp nào sau đây đòi hỏi sự hỗ trợ của cơ chế phần cứng:",
    "options": ["Chỉ thị TSL", "Giải pháp Peterson", "Giải pháp phần mềm sử dụng biến cờ hiệu", "Giải pháp phần mềm sử dụng biến kiểm tra luân phiên"],
    "correctAnswer": 0
  },
  {
    "question": "136. Khi giải quyết bài toán miền găng, điều kiện nào sau đây là không cần thiết.",
    "options": [
      "Không có tiến trình nào phải chờ vô hạn để được vào miền găng",
      "Một tiến trình bên ngoài miền găng không được ngăn cản các tiến trình khác vào miền găng",
      "Phải giả thiết tốc độ các tiến trình, cũng như về số lượng bộ xử lý",
      "Không có hai tiến trình nào ở trong miền găng cùng một lúc"
    ],
    "correctAnswer": 2
  },
  {
    "question": "137. Phương pháp nhanh nhất để trao đổi thông tin giữa các tiến trình.",
    "options": ["Đường ống (Pipe)", "Vùng nhớ chia sẻ", "Trao đổi thông điệp", "Socket"],
    "correctAnswer": 1
  },
  {
    "question": "138. Để loại bỏ các bất tiện của giải pháp chờ đợi bận, chúng ta có thể tiếp cận theo hướng...",
    "options": ["Ready - Running", "Waiting - Ready", "Running - Waiting", "Sleep - Wakeup"],
    "correctAnswer": 3
  },
  {
    "question": "139. Đâu là bài toán đồng bộ quá trình nguyên thủy.",
    "options": ["Bài toán các triết gia ăn tối", "Bài toán người chủ ngân hàng", "Bài toán người sản xuất - Bộ ghi", "Bài toán Bộ đọc - người tiêu thụ"],
    "correctAnswer": 3
  },
  {
    "question": "140. Khi một quá trình chưa đủ điều kiện vào miền tương trục, nó gọi ….. để tự khoá...",
    "options": ["Ready - Wakeup", "Sleep - Wakeup", "Sleep - Waiting", "Block - Wakeup"],
    "correctAnswer": 1
  },
 {
    "question": "141. Xem xét hệ thống gồm: 3 tiến trình P1, P2, P3 và 1 tài nguyên R có 12 đơn vị...",
    "options": ["Hệ thống không an toàn", "Hệ thống bị lỗi", "Hệ thống chạy mãi không dừng", "Hệ thống an toàn"],
    "correctAnswer": 3
  },
  {
    "question": "142. Xem xét hệ thống gồm: 3 tiến trình P1, P2, P3 và 1 tài nguyên R có 15 đơn vị...",
    "options": ["Hệ thống không an toàn", "Hệ thống bị lỗi", "Hệ thống chạy mãi không dừng", "Hệ thống an toàn"],
    "correctAnswer": 3
  },
  {
    "question": "143. Xem xét hệ thống gồm: 3 tiến trình P1, P2, P3 và 1 tài nguyên R có 9 đơn vị...",
    "options": ["Hệ thống không an toàn với dãy P1, P3", "Hệ thống bị lỗi", "Hệ thống chạy mãi không dừng", "Hệ thống an toàn"],
    "correctAnswer": 3
  },
  {
    "question": "144. Xem xét hệ thống gồm: 3 tiến trình P1, P2, P3 và 1 tài nguyên R có 18 đơn vị...",
    "options": ["Hệ thống không an toàn", "Hệ thống bị lỗi", "Hệ thống chạy mãi không dừng", "Hệ thống an toàn"],
    "correctAnswer": 3
  },
  {
    "question": "145. Xem xét hệ thống gồm: 3 tiến trình P1, P2, P3 và 1 tài nguyên R có 6 đơn vị...",
    "options": ["Hệ thống không an toàn với dãy P1, P3", "Hệ thống bị lỗi", "Hệ thống chạy mãi không dừng", "Hệ thống an toàn"],
    "correctAnswer": 0
  },
  {
    "question": "146. ... tại thời điểm t1 tiến trình P3 yêu cầu và được cấp 1 đơn vị tài nguyên...",
    "options": ["Hệ thống an toàn", "Hệ thống bị lỗi", "Hệ thống chạy mãi không dừng", "Hệ thống không an toàn với dãy P1, P3"],
    "correctAnswer": 0
  },
  {
    "question": "147. ... tại thời điểm t1 tiến trình P3 yêu cầu và được cấp 2 đơn vị tài nguyên...",
    "options": ["Hệ thống an toàn", "Hệ thống bị lỗi", "Hệ thống chạy mãi không dừng", "Hệ thống không an toàn"],
    "correctAnswer": 3
  },
  {
    "question": "148. ... tại thời điểm t1 tiến trình P3 yêu cầu và được cấp 1 đơn vị tài nguyên...",
    "options": ["Hệ thống bị lỗi", "Hệ thống không an toàn", "Hệ thống chạy mãi không dừng", "Hệ thống an toàn"],
    "correctAnswer": 3
  },
  {
    "question": "149. ... tại thời điểm t1 tiến trình P3 yêu cầu và được cấp 1 đơn vị tài nguyên...",
    "options": ["Hệ thống an toàn", "Hệ thống bị lỗi", "Hệ thống chạy mãi không dừng", "Hệ thống không an toàn với dãy P1, P3"],
    "correctAnswer": 3
  },
  {
    "question": "150. ... tại thời điểm t1 tiến trình P3 yêu cầu và được cấp 3 đơn vị tài nguyên...",
    "options": ["Hệ thống bị lỗi", "Hệ thống an toàn", "Hệ thống chạy mãi không dừng", "Hệ thống không an toàn"],
    "correctAnswer": 3
  },
  {
    "question": "151. ... tại thời điểm t1 tiến trình P3 yêu cầu và được cấp 3 đơn vị tài nguyên...",
    "options": ["Hệ thống an toàn", "Hệ thống bị lỗi", "Hệ thống chạy mãi không dừng", "Hệ thống không an toàn"],
    "correctAnswer": 3
  },
  {
    "question": "152. ... hệ thống có an toàn không?",
    "options": ["Hệ thống bị lỗi", "Hệ thống an toàn", "Hệ thống chạy mãi không dừng", "Hệ thống không an toàn"],
    "correctAnswer": 1
  },
  {
    "question": "153. ... hệ thống có an toàn không?",
    "options": ["Hệ thống an toàn", "Hệ thống bị lỗi", "Hệ thống chạy mãi không dừng", "Hệ thống không an toàn"],
    "correctAnswer": 3
  },
  {
    "question": "154. ... hệ thống có an toàn không?",
    "options": ["Hệ thống không an toàn", "Hệ thống bị lỗi", "Hệ thống chạy mãi không dừng", "Hệ thống an toàn"],
    "correctAnswer": 3
  },
  {
    "question": "155. ... hệ thống có an toàn không?",
    "options": ["Hệ thống không an toàn", "Hệ thống bị lỗi", "Hệ thống chạy mãi không dừng", "Hệ thống an toàn"],
    "correctAnswer": 0
  },
  {
    "question": "156. ... tiến trình P1 yêu cầu và được cấp 2 đơn vị tài nguyên...",
    "options": ["Hệ thống bị lỗi", "Hệ thống an toàn", "Hệ thống chạy mãi không dừng", "Hệ thống không an toàn"],
    "correctAnswer": 1
  },
  {
    "question": "157. ... tiến trình P1 yêu cầu và được cấp 2 đơn vị tài nguyên...",
    "options": ["Hệ thống không an toàn", "Hệ thống bị lỗi", "Hệ thống chạy mãi không dừng", "Hệ thống an toàn"],
    "correctAnswer": 3
  },
  {
    "question": "158. ... tiến trình P1 yêu cầu và được cấp 2 đơn vị tài nguyên...",
    "options": ["Hệ thống bị lỗi", "Hệ thống an toàn", "Hệ thống chạy mãi không dừng", "Hệ thống không an toàn"],
    "correctAnswer": 1
  },
  {
    "question": "159. ... tiến trình P1 yêu cầu và được cấp 2 đơn vị, P2 được cấp 2 đơn vị...",
    "options": ["Hệ thống bị lỗi", "Hệ thống an toàn", "Hệ thống chạy mãi không dừng", "Hệ thống không an toàn với dãy P1, P2"],
    "correctAnswer": 1
  },
  {
    "question": "160. Có mấy lớp giải thuật chống tắc nghẽn?",
    "options": ["2 (phòng ngừa, nhận biết và khắc phục)", "3 (phòng ngừa, dự báo - phòng tránh, nhận biết và khắc phục)", "3 (phòng ngừa, điều hòa, nhận biết và khắc phục)", "2 (điều hòa, nhận biết và khắc phục)"],
    "correctAnswer": 1
  },
{
  "question": "161. Để ngăn chặn một tắc nghẽn chỉ cần:",
  "options": ["Có sử dụng tài nguyên không thể chia sẻ", "Sự chiếm giữ và yêu cầu thêm tài nguyên không thể chia sẻ", "Không thu hồi được tài nguyên từ tiến trình đang giữ chúng", "Một trong các điều kiện trên không xảy ra"],
  "correctAnswer": 3
},
{
  "question": "162. Phương pháp dự báo - phòng tránh tắc nghẽn thường được áp dụng với hệ thống có đặc điểm nào?",
  "options": ["Xác suất xảy ra tắc nghẽn lớn, tổn thất do tắc nghẽn gây nên lớn", "Xác suất xảy ra tắc nghẽn nhỏ, tổn thất do tắc nghẽn gây nên lớn", "Xác suất xảy ra tắc nghẽn lớn, tổn thất do tắc nghẽn gây nên nhỏ", "Xác suất xảy ra tắc nghẽn nhỏ, tổn thất do tắc nghẽn gây nên nhỏ"],
  "correctAnswer": 0
},
{
  "question": "163. Có mấy Deadlock trong đồ thị sau:",
  "options": ["1", "2", "3", "4"],
  "correctAnswer": 2
},
{
  "question": "164. Có mấy Deadlock trong đồ thị sau:",
  "options": ["Không có Deadklock", "Có 1 Deadklock", "Có 2 Deadklock", "Có 3 Deadklock"],
  "correctAnswer": 1
},
{
  "question": "165. Thuật ngữ \"deadlock\" được hiểu như thế nào là đúng?",
  "options": ["Do thông lượng tiến trình xử lý trên 1 giây quá nhỏ", "Do xung đột tài nguyên làm treo máy", "Do thiếu tài nguyên đáp ứng cho các tiến trình cùng yêu cầu", "Là điểm chết của các tiến trình bị khóa"],
  "correctAnswer": 3
},
{
  "question": "166. Hệ thống rơi vào trạng thái deadlock khi:",
  "options": ["Không có tiến trình bị deadlock", "Chỉ cần 1 tiến trình bị deadlock", "Thu hổi được tài nguyên", "Không thu hồi được tài nguyên"],
  "correctAnswer": 3
},
{
  "question": "167. Trong bốn điều kiện gây tắc nghẽn hệ thống, cần bao nhiêu điều kiện để gây tắc nghẽn",
  "options": ["1", "2", "3", "4"],
  "correctAnswer": 3
},
{
  "question": "168. Khi một hệ thống tắc nghẽn (deadlock) thì",
  "options": ["những tiến trình trong trạng thái deadlock chờ", "những tiến trình ngoài trạng thái deadlock xử lý", "tất cả thiết bị, phần cứng dừng hoạt động", "tất cả các tiến trình đều dừng lại"],
  "correctAnswer": 0
},
{
  "question": "169. Trong điều kiện xảy ra deadlock có chu trình xác định bằng phương pháp",
  "options": ["vector", "vòng lặp", "đồ thị vô hướng", "đồ thị có hướng"],
  "correctAnswer": 3
},
{
  "question": "170. Điều kiện nào sau đây không nằm trong nhóm điều kiện xảy ra tắc nghẽn",
  "options": ["Tồn tại tài nguyên găng", "Có sự chia sẻ tài nguyên dùng chung", "Không có sự thu hồi tài nguyên từ tiến trình đang chiếm giữ", "Không có tài nguyên găng"],
  "correctAnswer": 1
},
{
  "question": "171. Trong các biện pháp ngăn chặn tắc nghẽn sau, biện pháp nào dễ ảnh hưởng đến việc bảo vệ tính toàn vẹn dữ liệu của hệ thống:",
  "options": ["Tiến trình phải yêu cầu tất cả các tài nguyên trước khi xử lí và Khi một tiến trình yêu cầu một tài nguyên mới và bị từ chối, nó phải giải phóng tài nguyên đang bị chiếm giữ, sau đó được cấp phát trở lại cùng lần với tài nguyên mới", "Khi một tiến trình yêu cầu một tài nguyên mới và bị từ chối, nó phải giải phóng tài nguyên đang bị chiếm giữ, sau đó được cấp phát trở lại cùng lần với tài nguyên mới", "Cho phép hệ thống thu hồi tài nguyên từ các tiến trình bị khoá và cấp phát trở lại cho tiến trình khi nó thoát khỏi tình trạng bị khoá", "Khi một tiến trình yêu cầu một tài nguyên mới và bị từ chối, nó phải giải phóng tài nguyên đang bị chiếm giữ, sau đó được cấp phát trở lại cùng lần với tài nguyên mới và Cho phép hệ thống thu hồi tài nguyên từ các tiến trình bị khoá và cấp phát trở lại cho tiến trình khi nó thoát khỏi tình trạng bị khoá"],
  "correctAnswer": 3
},
{
  "question": "172. Đâu là phương pháp xử lí deadlock?",
  "options": ["Chúng ta có thể sử dụng một giao thức để ngăn chặn hay tránh deadlocks, đảm bảo rằng hệ thống sẽ không bao giờ đi vào trạng thái deadlock và Chúng ta có thể bỏ qua hoàn toàn vấn đề này và giả vờ deadlock không bao giờ xảy ra trong hệ thống. Giải pháp này được dùng trong nhiều hệ điều hành, kể cả UNIX", "Chúng ta có thể cho phép hệ thống đi vào trạng thái deadlock, phát hiện nó và phục hồi và Chúng ta có thể bỏ qua hoàn toàn vấn đề này và giả vờ deadlock không bao giờ xảy ra trong hệ thống. Giải pháp này được dùng trong nhiều hệ điều hành, kể cả UNIX", "Chúng ta có thể bỏ qua hoàn toàn vấn đề này và giả vờ deadlock không bao giờ xảy ra trong hệ thống. Giải pháp này được dùng trong nhiều hệ điều hành, kể cả UNIX", "Chúng ta có thể sử dụng một giao thức để ngăn chặn hay tránh deadlocks, đảm bảo rằng hệ thống sẽ không bao giờ đi vào trạng thái deadlock, Chúng ta có thể cho phép hệ thống đi vào trạng thái deadlock, phát hiện nó và phục hồi và Chúng ta có thể bỏ qua hoàn toàn vấn đề này và giả vờ deadlock không bao giờ xảy ra trong hệ thống. Giải pháp này được dùng trong nhiều hệ điều hành, kể cả UNIX"],
  "correctAnswer": 3
},
{
  "question": "173. Giải thuật \"Người chủ ngân hàng\" thuộc lớp giải thuật chống bế tắc nào sau đây:",
  "options": ["Nhận biết và khắc phục", "Phòng ngừa", "Dự báo - phòng tránh", "Sửa lỗi"],
  "correctAnswer": 2
},
{
  "question": "174. Deadlock có thể xuất hiện nếu điều kiện gì xảy ra?",
  "options": ["Đồng thời xảy ra: Loại trừ lẫn nhau và không ưu tiên, Chờ vòng quanh", "Đồng thời xảy ra: Chờ vòng quanh, Giữ và chờ", "Chờ vòng quanh", "Đồng thời xảy ra: Loại trừ lẫn nhau và không ưu tiên, Giữ và chờ, Chờ vòng quanh"],
  "correctAnswer": 3
},
{
  "question": "175. Nếu đồ thị không chứa 1 đường khép kín, điều gì xảy ra?",
  "options": ["Không Deadlock", "Có Deadlock", "Có chu trình", "Hệ thống không an toàn"],
  "correctAnswer": 0
},
{
  "question": "176. Nếu hệ thống trong trạng thái an toàn thì điều gì xảy ra?",
  "options": ["Chắc chắn có Deadlock", "Có thể có hoặc không có Deadlock", "Không thể có Deadlock", "Không có tranh chấp tài nguyên giữa các tiến trình"],
  "correctAnswer": 2
},
{
  "question": "177. Dưới chế độ điều hành thông thường, một quá trình có thể sử dụng một tài nguyên chỉ trong thứ tự sau:",
  "options": ["Giải phóng - Yêu cầu - Sử dụng", "Yêu cầu - Giải phóng - Sử dụng", "Sử dụng - Yêu cầu - Giải phóng", "Yêu cầu - Sử dụng - Giải phóng"],
  "correctAnswer": 3
},
{
  "question": "178. Trong đồ thị cấp phát tài nguyên, tài nguyên được thể hiện bằng",
  "options": ["Hình tròn", "Hình vuông", "Hình tam giác", "Hình thoi"],
  "correctAnswer": 1
},
{
  "question": "179. Đồ thị trên mô tả trạng thái nào trong tắc nghẽn.",
  "options": ["Đồ thị an toàn không tắc nghẽn", "Đồ thị không tắc nghẽn", "Đồ thị không an toàn có tắc nghẽn", "Đồ thị có thể xảy ra tắc nghẽn"],
  "correctAnswer": 3
},
{
  "question": "180. Trong giải thuật an toàn Available đại diện cho tài nguyên nào",
  "options": ["Hiển thị số lượng tài nguyên sẵn dùng của mỗi loại", "Số lượng tối đa yêu cầu của mỗi quá trình", "Số lượng tài nguyên của mỗi loại hiện được cấp tới mỗi quá trình", "Hiển thị yêu cầu tài nguyên còn lại của mỗi quá trình"],
  "correctAnswer": 0
},
{
  "question": "181. Trong giải thuật an toàn Work đại diện cho tài nguyên nào",
  "options": ["Hiển thị số lượng tài nguyên sẵn dùng của mỗi loại", "Số lượng tối đa yêu cầu của mỗi quá trình", "Số lượng tài nguyên của mỗi loại hiện được cấp tới mỗi quá trình", "Hiển thị yêu cầu tài nguyên còn lại của mỗi quá trình"],
  "correctAnswer": 0
},
{
  "question": "182. Trong giải thuật an toàn Allocation đại diện cho tài nguyên nào",
  "options": ["Hiển thị số lượng tài nguyên sẵn dùng của mỗi loại", "Số lượng tối đa yêu cầu của mỗi quá trình", "Số lượng tài nguyên của mỗi loại hiện được cấp tới mỗi quá trình", "Hiển thị yêu cầu tài nguyên còn lại của mỗi quá trình"],
  "correctAnswer": 2
},
{
  "question": "183. Phương pháp tổ hợp để điều khiển tắc nghẽn, đó là:",
  "options": ["Ngăn chặn - Phòng tránh - Xác định", "Phát hiện - Ngăn ngừa - Phòng tránh", "Ngăn ngừa - Xác định - Phòng tránh", "Xác định - Phòng tránh - Ngăn chặn"],
  "correctAnswer": 0
},
{
  "question": "184. Trong giải thuật an toàn Max đại diện cho tài nguyên nào",
  "options": ["Hiển thị số lượng tài nguyên sẵn dùng của mỗi loại", "Số lượng tối đa yêu cầu của mỗi quá trình", "Số lượng tài nguyên của mỗi loại hiện được cấp tới mỗi quá trình", "Hiển thị yêu cầu tài nguyên còn lại của mỗi quá trình"],
  "correctAnswer": 1
},
{
  "question": "185. Đồ thị trên mô trả trạng thái nào trong tắc nghẽn.",
  "options": ["Đồ thị an toàn không tắc nghẽn", "Đồ thị không xảy ra tắc nghẽn", "Đồ thị không an toàn có tắc nghẽn", "Đồ thị có thể xảy ra tắc nghẽn"],
  "correctAnswer": 2
},
{
  "question": "186. Trong đồ thị cấp phát tài nguyên, tiến trình được thể hiện bằng",
  "options": ["Hình tròn", "Hình vuông", "Hình tam giác", "Hình thoi"],
  "correctAnswer": 0
},
{
  "question": "187. Bộ nhớ chính (bộ nhớ trong ) bao gồm:",
  "options": ["Thanh ghi và ROM", "Rom và Ram", "Cache và Rom", "Thanh ghi và RAM"],
  "correctAnswer": 3
},
{
  "question": "188. Bộ nhớ ảo được sinh ra hỗ trợ và tương tác cho thiết bị nào của máy tính:",
  "options": ["CPU", "Card màn hình", "Mainboard", "Ram"],
  "correctAnswer": 3
},
{
  "question": "189. Thuật toán thay thế trang mà chọn trang lâu được sử dụng nhất trong tương lai thuộc loại:",
  "options": ["FIFO", "LRU", "Tối ưu", "NRU"],
  "correctAnswer": 2
},
{
  "question": "190. Thuật toán thay thế trang dùng thời điểm cuối cùng trang được truy xuất là thuật toán:",
  "options": ["FIFO", "LRU", "Tối ưu", "NRU"],
  "correctAnswer": 1
},
{
  "question": "191. Virtual Memory là:",
  "options": ["Sự tách biệt giữa bộ nhớ logic người dùng với bộ nhớ vật lí.", "Sự tách biệt giữa bộ nhớ người dùng với bộ nhớ logic vật lí.", "Sự tách biệt giữa bộ nhớ logic người dùng với bộ nhớ ảo.", "Sự tách biệt giữa bộ nhớ logic người dùng với bộ nhớ thực."],
  "correctAnswer": 0
},
{
  "question": "192. Bộ nhớ ảo và bộ nhớ vật lí",
  "options": ["Dung lượng bộ nhớ ảo nhỏ hơn bộ nhớ vật lí", "Dung lượng bộ nhớ vật lí lớn hơn bộ nhớ ảo", "Dung lượng bộ nhớ ảo bằng dung lượng bộ nhớ vật lí", "Dung lượng bộ nhớ ảo lớn hơn nhiều bộ nhớ vật lí"],
  "correctAnswer": 3
},
{
  "question": "193. Bộ nhớ ảo tồn tại và hoạt động nhờ vào:",
  "options": ["Monitor", "Ổ đĩa", "CPU", "Mainboard"],
  "correctAnswer": 1
},
{
  "question": "194. Trong quá trình hệ thống trì trệ, nếu 1 quá trình không có đủ các trang thì tỉ lệ lỗi trang sẽ rất cao, điều này dẫn đến",
  "options": ["Hiệu quả sử dụng CPU thấp", "Hiệu quả sử dụng màn hình thấp", "Hiệu quả sử dụng bàn phím thấp", "Hiệu quả sử dụng Rom thấp"],
  "correctAnswer": 0
},
{
  "question": "195. Hệ thống lưu trữ phụ là khái niệm mô tả:",
  "options": ["Bộ nhớ ảo", "RAM, thanh ghi, cache", "RAM, CPU, các thiết bị nhập/xuất", "Các loại đĩa từ"],
  "correctAnswer": 3
},
{
  "question": "196. Khi đề cập đến vấn đề quản bộ nhớ, hệ điều hành có nhiệm vụ:",
  "options": ["Quyết định quá trình nào được nạp vào bộ nhớ khi không gian bộ nhớ trở nên sẵn sàng", "Cấp phát và thu hồi không gian bộ nhớ khi được yêu cầu", "Quyết định quá trình nào được nạp vào bộ nhớ khi không gian bộ nhớ trở nên sẵn sàng và cấp phát và thu hồi không gian bộ nhớ khi được yêu cầu", "Chỉ cấp phát mà không thu hồi không gian bộ nhớ khi được yêu cầu"],
  "correctAnswer": 2
},
{
  "question": "197. Nhiệm vụ của bộ phận quản lý bộ nhớ chính của hệ điều hành là:",
  "options": ["Cấp phát và thu hồi vùng nhớ và Ghi nhận trạng thái của bộ nhớ chính", "Ghi nhận trạng thái của bộ nhớ chính và Quyết định tiến trình nào được nạp vào bộ nhớ và bảo vệ bộ nhớ", "Quyết định tiến trình nào được nạp vào bộ nhớ và bảo vệ bộ nhớ", "Cấp phát và thu hồi vùng nhớ và Ghi nhận trạng thái của bộ nhớ chính, Quyết định tiến trình nào được nạp vào bộ nhớ và bảo vệ bộ nhớ"],
  "correctAnswer": 3
},
{
  "question": "198. Trong kĩ thuật phân trang khi bộ nhớ thực đầy thì hệ điều hành sẽ:",
  "options": ["Tiến hành nạp lại các trang", "Thực hiện chiến lược thay thế trang", "Loại bỏ các trang bị lỗi", "Thu hồi lại các trang"],
  "correctAnswer": 1
},
{
  "question": "199. Bộ nhớ ảo có thể được thi hành thông qua:",
  "options": ["Phân trang theo yêu cầu", "Phân đoạn theo yêu cầu", "Phân đoạn kết hợp với phân trang theo yêu cầu", "Chỉ phân trang mà không phân đoạn"],
  "correctAnswer": 0
},
{
  "question": "200. Khi một tiến trình được tạo ra mà bộ nhớ chưa đủ chỗ, nó sẽ được chèn vào danh sách",
  "options": ["Danh sách tác vụ (job list)", "Danh sách sẵn sàng (ready list)", "Danh sách chờ (waiting list)", "Không nạp bất kỳ danh sách nào"],
  "correctAnswer": 0
},
{
  "question": "201. Nhiệm vụ của bộ phận quản lý bộ nhớ phụ của hệ điều hành là:",
  "options": [
    "Quản lý không gian trống trên đĩa và Lập dịch cho vấn đề đọc/ghi thong tin trên đĩa của đầu từ",
    "Định vị lưu trữ không gian trên đĩa và Lập dịch cho vấn đề đọc/ghi thong tin trên đĩa của đầu từ",
    "Lập dịch cho vấn đề đọc/ghi thong tin trên đĩa của đầu từ",
    "Quản lý không gian trống trên đĩa, Định vị lưu trữ không gian trên đĩa và Lập dịch cho vấn đề đọc/ghi thong tin trên đĩa của đầu từ"
  ],
  "correctAnswer": 3
},
{
  "question": "202. Bộ nhớ ảo là gì?",
  "options": [
    "Là một vùng không gian lưu trữ gần giống RAM nhưng lại được đặt trên đĩa cứng",
    "Là một vùng không gian lưu trữ gần giống RAM có thể thay đổi được địa chỉ vật lý.",
    "Là một vùng không gian lưu trữ của RAM.",
    "Là một vùng không gian lưu trữ của thanh ghi"
  ],
  "correctAnswer": 0
},
{
  "question": "203. Địa chỉ thực tế mà trình quản lý bộ nhớ nhìn thấy và thao tác là",
  "options": [
    "Địa chỉ vật lý",
    "Không gian địa chỉ",
    "Không gian vật lý",
    "Địa chỉ logic"
  ],
  "correctAnswer": 0
},
{
  "question": "204. Tập hợp tất cả địa chỉ ảo phát sinh bởi một chương trình gọi là",
  "options": [
    "Địa chỉ logic",
    "Không gian địa chỉ",
    "Địa chỉ vật lý",
    "Không gian vật lý"
  ],
  "correctAnswer": 1
},
{
  "question": "205. Vào thời điểm nào sau đây tiến trình chỉ thao tác trên địa chỉ ảo, không bao giờ thấy được các địa chỉ vật lý",
  "options": [
    "Thời điểm xử lý",
    "Thời điểm cấp phát",
    "Thời điểm biên dịch",
    "Thời điểm chờ xử lý"
  ],
  "correctAnswer": 2
},
{
  "question": "206. Thuật toán chọn đoạn trống để thỏa mãn nhu cầu cho một tiến trình (trong phân đoạn vùng nhớ)",
  "options": [
    "Best-fit",
    "Worst-fit",
    "First-fit",
    "Không câu nào đúng"
  ],
  "correctAnswer": 0
},
{
  "question": "207. Hiện tượng phân mảnh là",
  "options": [
    "Tổng vùng nhớ trống đủ để thỏa mãn nhu cầu nhưng các vùng nhớ này lại không liên tục nên không đủ để cấp cho tiến trình khác",
    "Vùng nhớ bị phân thành nhiều vùng không liên tục",
    "Vùng nhớ trống được dồn lại từ các mảnh bộ nhớ nhỏ rời rạc",
    "Vùng nhớ trống bị phân thành nhiều vùng không liên tục"
  ],
  "correctAnswer": 0
},
{
  "question": "208. Thuật toán chọn vùng trống tự do nhỏ nhất nhưng đủ lớn để nạp tiến trình là",
  "options": [
    "Best-fit",
    "Worst-fit",
    "First-fit",
    "FIFO"
  ],
  "correctAnswer": 0
},
{
  "question": "209. Thuật toán chọn vùng trống đầu tiên đủ lớn để nạp tiến trình là",
  "options": [
    "FIFO",
    "Worst-fit",
    "First-fit",
    "Best-fit"
  ],
  "correctAnswer": 2
},
{
  "question": "210. Thuật toán chọn vùng trống tự do lớn nhất để nạp tiến trình là",
  "options": [
    "Best-fit",
    "Worst-fit",
    "FIFO",
    "First-fit"
  ],
  "correctAnswer": 1
},
{
  "question": "211. Kỹ thuật phân phát nào sau đây loại bỏ được hiện tượng phân mảnh ngoại vi",
  "options": [
    "Cấp phát liên tục",
    "Phân đoạn",
    "Cấp phát rời rạc",
    "Phân trang"
  ],
  "correctAnswer": 3
},
{
  "question": "212. Điều kiện một phân đoạn có thể thuộc không gian địa chỉ của 2 tiến trình",
  "options": [
    "Các phần tử trong bảng phân đoạn của 2 tiến trình này cùng chỉ đến một vị trí vật lý",
    "Không thực hiện được",
    "Phải phân bổ tài nguyên",
    "Thu hết tất cả tài nguyên rồi phân đoạn cho 2 tiến trình"
  ],
  "correctAnswer": 0
},
{
  "question": "213. Đặc điểm của bộ nhớ RAM",
  "options": [
    "Là bộ nhớ chỉ đọc",
    "Là bộ nhớ hỗn hợp",
    "Dữ liệu không bị mất điện khi tắt máy",
    "Là bộ nhớ truy cập ngẫu nhiên"
  ],
  "correctAnswer": 3
},
{
  "question": "214. Đặc điểm của bộ nhớ ROM",
  "options": [
    "Bộ nhớ truy cập ngẫu nhiên",
    "Dữ liệu bị mất khi tắt máy",
    "Là bộ nhớ Random Acess Memory",
    "Là bộ nhớ chỉ đọc"
  ],
  "correctAnswer": 3
},
{
  "question": "215. Bộ nhớ được xây dựng từ:",
  "options": [
    "Các thanh ghi.",
    "Các transistor.",
    "Các tụ điện",
    "Các phần tử nhớ cơ bản"
  ],
  "correctAnswer": 3
},
{
  "question": "216. Đặc điểm của bộ nhớ ROM là",
  "options": [
    "Là bộ nhớ giữ thông tin cố định, không thay đổi nội dung khi vẫn còn nguồn điện nuôi",
    "Là bộ nhớ giữ thông tin không cố định, không thay đổi nội dung khi vẫn còn nguồn điện nuôi",
    "Là bộ nhớ giữ thông tin không cố định, không thay đổi nội dung ngay cả khi ngắt nguồn điện nuôi.",
    "Là bộ nhớ giữ thông tin cố định, không thay đổi nội dung ngay cả khi ngắt nguồn điện nuôi."
  ],
  "correctAnswer": 3
},
{
  "question": "217. Hệ thống quản lý tập tin là?",
  "options": [
    "Cách thức hệ điều hành tổ chức, truy cập dữ liệu trên hệ thống lưu trữ của bộ nhớ ngoài.",
    "Là cách thức hệ điều hành tổ chức, truy cập dữ liệu trên hệ thống lưu trữ của bộ nhớ trong.",
    "Là cách thức hệ điều hành tổ chức, truy cập dữ liệu trên hệ thống lưu trữ của bộ nhớ RAM.",
    "Là cách thức hệ điều hành tổ chức, truy cập dữ liệu trên hệ thống lưu trữ của bộ nhớ ROM."
  ],
  "correctAnswer": 0
},
{
  "question": "218. Tập tin được xem là?",
  "options": [
    "1 đơn vị lưu trữ thông tin của bộ nhớ ngoài",
    "1 đơn vị lưu trữ thông tin của ALU",
    "1 đơn vị lưu trữ thông tin của máy in",
    "1 đơn vị lưu trữ thông tin của bộ nhớ CU"
  ],
  "correctAnswer": 0
},
{
  "question": "219. Thư mục là?",
  "options": [
    "Là tập hợp các tập tin tổ chức theo hình cây.",
    "Là tập hợp các tập tin và các thư mục con tổ chức theo hình cây",
    "Là tập hợp các thư mục con tổ chức theo hình cây.",
    "Là tập hợp các tập tin và thông số kỹ thuật của nó"
  ],
  "correctAnswer": 1
},
{
  "question": "220. Cách thức truy xuất tập tin có mấy kiểu?",
  "options": [
    "1 (cấp phát liên tục)",
    "2 (cấp phát liên tục, cấp phát danh sách liên kết)",
    "3 (Cấp phát liên tục, cấp phát theo danh sách liên kết, cấp phát theo danh sách liên kết có sử dụng chỉ mục)",
    "0 (không có cách thức truy xuất tập tin)"
  ],
  "correctAnswer": 2
},
{
  "question": "221. Có mấy phương pháp lưu trữ và định vị tập tin?",
  "options": ["2", "3", "4", "5"],
  "correctAnswer": 1
},
{
  "question": "222. Phần mở rộng của tên tệp (nếu có) thể hiện:",
  "options": ["Kiểu tệp tin", "Kích thước tệp.", "Ngày giờ thay đổi tệp.", "Tên tệp."],
  "correctAnswer": 0
},
{
  "question": "223. Câu nào sau đây sai?",
  "options": [
    "Hệ quản lí tệp cho phép người dùng xem nội dung tệp/ thư mục.",
    "Hệ quản lí tệp cho phép người dùng tạo thư mục, đổi tên, xoá thư mục.",
    "Hệ quản lí tệp cho phép người dùng sao chép, di chuyển tệp/ thư mục.",
    "Hệ quản lí tệp cho phép quản lí tất cả các chức năng khác nhau trong máy tính"
  ],
  "correctAnswer": 3
},
{
  "question": "225. Tập tin thường được lưu trữ tại:",
  "options": ["ALU", "ROM", "Bộ xử lí trung tâm", "Bộ nhớ ngoài"],
  "correctAnswer": 3
},
{
  "question": "226. Trong hệ điều hành MS – DOS cách đặt tên tệp nào sau đây là sai?",
  "options": ["Bai_tap.doc", "tailieu.txt", "Van hoc.doc", "baitap1.xls"],
  "correctAnswer": 2
},
{
  "question": "227. Trong hệ điều hành Windows tên tệp có độ dài tối đa là:",
  "options": ["8 kí tự", "11 kí tự.", "255 kí tự.", "256 kí tự"],
  "correctAnswer": 2
},
{
  "question": "228. Trong các câu sau câu nào không phải là nhiệm vụ của hệ quản lí tệp?",
  "options": [
    "Tổ chức thông tin trên bộ nhớ ngoài",
    "Cung cấp các dịch vụ để đọc/ ghi thông tin trên bộ nhớ ngoài dễ dàng.",
    "Đảm bảo cho các chương trình đang hoạt động trong hệ thống có thể đồng thời truycập tới các tệp.",
    "Quản lí các thiết bị vật lý kết nối đến máy tính"
  ],
  "correctAnswer": 3
},
{
  "question": "229. Tìm câu sai. Ưu điểm của hệ quản lí tệp là:",
  "options": [
    "Làm giảm thời gian truy cập thông tin.",
    "Tổ chức thông tin một cách khoa học.",
    "Tiết kiệm không gian đĩa.",
    "Tìm kiếm thông tin dễ dàng"
  ],
  "correctAnswer": 2
},
{
  "question": "230. Tìm câu sai trong các câu dưới đây",
  "options": [
    "Để chỉ một tệp ở thư mục nào người ta thường lấy tên thư mục đó làm phần tên của tệp và bổ xung thêm phần mở rộng.",
    "Thư mục có thể chứa tệp cùng tên với thư mục đó",
    "Trong cùng một thư mục có thể lưu trữ 2 tệp cùng phần tên nhưng có phần mở rộng khác nhau",
    "Hai thư mục cùng tên phải ở trong hai thư mục mẹ khác nhau"
  ],
  "correctAnswer": 0
},
{
  "question": "231. Tìm phương án sai: Trong hệ quản lí tập tin cho phép tồn tại hai tập tin với đường dẫn:",
  "options": [
    "C: KHOI10Tin Kiemtra.txt và C: KHOI10Tin KIEMTRA.TXT",
    "C: KHOI10Tin Kiemtra.txt và C: KHOI10Van Kiemtra.txt",
    "C: KHOI10Tin Kiemtra.txt và D: KHOI10Tin Kiemtra.txt",
    "C: KHOI10Tin Kiemtra.txt và C: KHOI10Tin Thuc hanh Kiem tra.txt"
  ],
  "correctAnswer": 0
},
{
  "question": "232. Cách tốt nhất để lưu một tệp trên đĩa từ là lưu tệp đó trong một vùng liên tục. hãy chọn cách giải thích đúng nhất:",
  "options": [
    "Nó loại các vùng không ghi của đĩa từ và tòan bộ đĩa có thể dùng được",
    "Nó làm giảm bớt vùng cần để lưu thông tin quản lý tệp, và vì vậy khoảng đĩa còn trống cho người dùng tăng lên nhiều nhờ việc đó.",
    "Ít sảy ra lỗi hơn so với trường hợp khi tệp được ghi trong các vùng đã được phân chia",
    "Đầu từ chuyển động ít hơn khi đọc dữ liệu, vì vậy thời gian đọc ngắn hơn."
  ],
  "correctAnswer": 3
},
{
  "question": "233. Giải thích nào sau đây là thích hợp nhất cho cách tổ chức tuần tự được đánh chỉ số, một trong những cách tổ chức tệp:",
  "options": [
    "Truy nhập trực tiếp tới bản ghi có thể thực hiện được bằng cách sử dụng địa chỉ (chỉ số) của mỗi bản ghi.",
    "Những bản ghi được ghi theo trật tự vật lý. Chỉ truy nhập tuần tự mới truy xuất được",
    "Nó bao gồm vùng để lưu trữ các bản ghi và vùng để lưu trữ thông tin về khóa của các bản ghi.",
    "Nó bao gồm một vùng dữ liệu được gọi là thành viên và một vùng thư mục kiểm soát thông tin thành viên"
  ],
  "correctAnswer": 2
},
{
  "question": "234. Máy tính có thể lưu trữ thông tin trong nhiều dạng thiết bị vật lí khác nhau như băng từ, đĩa từ,.. Để thống nhất cách truy xuất hệ thống lưu trữ trong máy tính, hệ điều hành định nghĩa một đơn vị lưu trữ là:",
  "options": ["Thư mục", "Tập tin", "FAT", "Partition"],
  "correctAnswer": 1
},
{
  "question": "235. Kiểu tập tin nào liên quan đến nhập xuất thông qua các thiết bị nhập xuất tuần tự như màn hình, máy in, card mạng…",
  "options": [
    "Tập tin thường",
    "Thư mục",
    "Tập tin có kí tự đặc biệt",
    "Tập tin khối"
  ],
  "correctAnswer": 2
},
{
  "question": "236. Tạo, huỷ, mở ,đóng, đọc, ghi … là các tác vụ cần thiết để hệ điều hành:",
  "options": [
    "Quản lí tập tin",
    "Quản lí bộ nhớ",
    "Quản lí tiến trình",
    "Quản lí mạng"
  ],
  "correctAnswer": 0
},
{
  "question": "237. Khi một hệ thống tập tin được tổ chức thành một cây thư mục, có hai cách để xác định một tên tập tin. Cách thứ nhất là đó là …",
  "options": [
    "Đường dẫn tuyệt đối",
    "Vị trí của tập tin",
    "Dựa vào nhánh từ vị trí tập tin",
    "Dựa vào Root cây thư mục"
  ],
  "correctAnswer": 0
},
{
  "question": "238. VFS được viết tắt bởi những từ gì",
  "options": [
    "Virtual Fat System",
    "Virtual File System",
    "Virtual Fine Socket",
    "Verify File System"
  ],
  "correctAnswer": 1
},
{
  "question": "239. Loại thư mục nào dễ tổ chức và khai thác nhưng gây khó khăn khi đặt tên tập tin không trùng nhau và người sử dụng không thể phân nhóm cho tập tin và tìm kiếm chậm.",
  "options": [
    "Thư mục đa cấp",
    "Thư mục một cấp",
    "Thư mục hai cấp",
    "Nhiều thư mục trong vùng"
  ],
  "correctAnswer": 1
},
{
  "question": "240. Tạo, mở, hủy, đóng, đọc, ghi … là các tác vụ cần thiết để hệ điều hành …",
  "options": [
    "Quản lý tiến trình",
    "Quản lý bộ nhớ",
    "Quản lý tập tin",
    "Quảng lý hệ thống"
  ],
  "correctAnswer": 2
},
{
  "question": "241. Trong hệ thống tập tin MS-DOS, sector đầu tiên, track 0, side 0 đối với đĩa cứng thông tin về",
  "options": ["Dữ liệu thường", "Bảng Partition", "Boot sector", "Bảng FAT"],
  "correctAnswer": 2
},
{
  "question": "242. Trong bảng FAT của hệ thống tập tin MS-DOS người ta mô tả loại đĩa bằng cách",
  "options": ["Dùng 1 entry đầu tiên của bảng FAT", "Dùng entry của bảng thư mục RDET", "Dùng 2 entry đầu tiên của bảng FAT", "Dùng 3 entry đầu tiên của bảng FAT"],
  "correctAnswer": 2
},
{
  "question": "243. Trong cấu trúc partitiion của Window NTFS thông tin về tập tin và thư mục trên partition này được lưu trong",
  "options": ["Master File Table (MFT)", "Partition bootsector", "Các tập tin hệ thống", "Master Boot Record (MBR)"],
  "correctAnswer": 0
},
{
  "question": "244. Cách cài đặt hệ thống tập tin nào không bị lãng phí do phân mảnh ngoại vi, không cần dùng bảng FAT nhưng truy suất ngẫu nhiên sẽ chậm và khó bảo vệ số hiệu khối tập tin",
  "options": ["Dùng FAT", "Dùng NTFS", "Cấp phát liên tục dùng danh sách liên kết", "Cấp phát rời rạc"],
  "correctAnswer": 2
},
{
  "question": "245. Cấu trúc của tập tin bao gồm bao nhiêu loại",
  "options": [
    "1 (không có cấu trúc)",
    "2 (không có cấu trúc, cấu trúc cây)",
    "3 (không có cấu trúc, có cấu trúc và cấu trúc cây)",
    "4 (không có cấu trúc, có cấu trúc và cấu trúc cây, cấu trúc song song)"
  ],
  "correctAnswer": 2
},
{
  "question": "246. Phát biểu nào sau đây là đúng?",
  "options": [
    "Tập tin thường có hai phần: phần tên (name) và phần mở rộng (extension)",
    "Tập tin thường có một phần: phần tên (name)",
    "Tập tin thường có một phần: phần mở rộng (extension)",
    "Tập tin thường có hai phần: phần tên (name) và phần cấu trúc"
  ],
  "correctAnswer": 0
},
{
  "question": "247. Phát biểu nào sau đây là đúng?",
  "options": [
    "Phần mở rộng trong tên tập tin cho biết tập tin là của ứng dụng nào.",
    "Phần mở rộng trong tên tập tin không cho biết tập tin là của ứng dụng nào.",
    "Phần tên trong tên tập tin không cho biết tập tin là của ứng dụng nào.",
    "Phần tên trong tên tập tin cho biết tập tin là của ứng dụng nào."
  ],
  "correctAnswer": 0
},
{
  "question": "248. Phát biểu nào sau đây là đúng?",
  "options": [
    "Tập tin là đơn vị lưu trữ nhỏ nhất trong máy tính",
    "Tập tin là đơn vị lưu trữ lớn nhất trong máy tính",
    "Thư mục là đơn vị lưu trữ nhỏ nhất trong máy tính",
    "Thư mục và tập tin là đơn vị lưu trữ lớn nhất trong máy tính"
  ],
  "correctAnswer": 0
},
{
  "question": "249. Trong hệ thống I/O đĩa thời gian để đầu đọc đến đúng track cần thiết trên một đĩa gọi là",
  "options": ["Tranfer time", "Seek time", "Latency time", "Look time"],
  "correctAnswer": 1
},
{
  "question": "250. Trong hệ thống I/O đĩa thời gian để đầu đọc đến đúng khối cần thiết trên một đĩa gọi là",
  "options": ["Tranfer time", "Seek time", "Latency time", "Look time"],
  "correctAnswer": 2
},
{
  "question": "251. Khi hệ thống phải truy xuất dữ liệu khối lượng lớn thì thuật toán lập lịch nào sau đây là hiệu quả",
  "options": ["FCFS", "SSTF", "LOOK", "SCAN"],
  "correctAnswer": 3
},
{
  "question": "252. Khi hệ thống phải truy xuất dữ liệu có khối liên tục thì thuật toán lập lịch nào sau đây là hiệu quả",
  "options": ["FCFS", "SSTF", "SCAN", "C-SCAN"],
  "correctAnswer": 1
},
{
  "question": "253. Cơ chế DMA được viết tắt bởi các từ",
  "options": [
    "Direct Management Access",
    "Direct Memory Access",
    "Direct Management Application",
    "Direct Main Access"
  ],
  "correctAnswer": 1
},
{
  "question": "254. Chức năng Interleave để đồng bộ chức năng gì",
  "options": ["Đọc dữ liệu", "Ghi dữ liệu", "Xóa dữ liệu và thêm dữ liệu", "Đọc dữ liệu và Ghi dữ liệu"],
  "correctAnswer": 3
},
{
  "question": "255. Thời gian vận chuyển dữ liệu giữa đĩa và bộ nhớ chính gọi là",
  "options": ["Seek time", "Latency time", "Transfer time", "Look time"],
  "correctAnswer": 2
},
{
  "question": "256. Thuật toán lập lịch cho đĩa FCFS sẽ được thực hiện theo thứ tự",
  "options": [
    "Vào sau ra trước",
    "Vào trước ra sau",
    "Vào sau ra sau",
    "Vào trước ra trước"
  ],
  "correctAnswer": 3
},
{
  "question": "257. Đĩa là đối tượng mà khi truy xuất có thể gây nhiều lỗi. Một trong số các lỗi thường gặp là",
  "options": [
    "Lỗi điều khiển",
    "Lỗi không ghi dữ liệu",
    "Lỗi thiết bị I/O",
    "Lỗi DMA"
  ],
  "correctAnswer": 2
},
{
  "question": "258. Có bao nhiêu cách để thực hiện I/O",
  "options": [
    "1 (vào ra bằng ngắt)",
    "2 (vào ra bằng ngắt, bằng chương trình)",
    "3 (vào ra bằng ngắt, vào ra bằng DMA, vào ra bằng chương trình)",
    "0 (không có cách nào)"
  ],
  "correctAnswer": 2
},
{
  "question": "259. Thiết bị nào sau đây không là thiết bị nhập/xuất tuần tự:",
  "options": ["Màn hình", "Bàn phím", "Chuột", "Đĩa"],
  "correctAnswer": 3
},
{
  "question": "260. Đâu không phải là thiết bị lưu trữ thông tin trên bộ nhớ ngoài:",
  "options": ["RAM", "Đĩa cứng", "Đĩa mềm", "Đĩa CD"],
  "correctAnswer": 0
},
  {
    question: "261. Trong các thiết bị sau đây thiết bị nào không phải là thiết bị nhập dữ liệu:",
    options: ["Chuột", "Bàn phím", "Máy in", "Máy ảnh"],
    correctAnswer: 2
  },
  {
    question: "262. Trong các thiết bị sau đây thiết bị nào là thiết bị nhập thông tin:",
    options: ["máy in", "Bàn phím", "Loa", "màn hình"],
    correctAnswer: 1
  },
  {
    question: "263. Công dụng của các thiết bị ngoại vi (bàn phím, chuột, đĩa, máy photo ...)",
    options: [
      "Giúp con người sử dụng máy tính dễ dàng",
      "Làm đẹp cho máy tính",
      "Tăng hiệu quả sử dụng RAM",
      "Tăng khả năng truyền dữ liệu trong bộ nhớ"
    ],
    correctAnswer: 0
  },
  {
    question: "264. Phần cứng Hardware thông thường bao gồm những gì?",
    options: [
      "Bộ xử lý trung tâm CPU, bộ nhớ.",
      "Thiết bị nhập/ xuất, bộ xử lý trung tâm.",
      "Trình biên dịch ứng dụng.",
      "Thiết bị nhập/ xuất, bộ nhớ, bộ xử lý trung tâm."
    ],
    correctAnswer: 3
  },
  {
    question: "265. Máy tính PC sử dụng hệ thống cơ số nào để lưu trữ dữ liệu trên đĩa cứng?",
    options: ["Hệ thập lục phân", "Hệ thập phân.", "Hệ bát phân.", "Hệ nhị phân."],
    correctAnswer: 3
  },
  {
    question: "266. Vận chuyển DMA được thực hiện bởi",
    options: ["Bộ điều khiển thiết bị", "CPU", "Bộ nhớ trong", "Bộ nhớ ngoài"],
    correctAnswer: 0
  },
  {
    question: "267. Khi hệ thống phải truy xuất dữ liệu có số khối liên tục thì thuật toán lập lịch nào sau đây là hiệu quả nhất:",
    options: ["SSTF", "FCFS", "SCAN", "C-SCAN"],
    correctAnswer: 3
  },
  {
    question: "268. Cơ chế DMA (Direct Memory Access) là:",
    options: [
      "Cơ chế truy cập bộ nhớ trực tiếp",
      "Cơ chế truy cập bộ nhớ gián tiếp",
      "Cơ chế truy cập bộ nhớ ngẫu nhiên",
      "Cơ chế truy cập bộ nhớ tuần tự"
    ],
    correctAnswer: 0
  },
  {
    question: "269. Phần mềm điều khiển thiết bị được cài đặt vào HĐH như là:",
    options: ["1 Chương trình", "1 Tiến trình", "1 Tiểu trình", "1 Phần cứng"],
    correctAnswer: 0
  },
  {
    question: "270. Hệ thống quản lý I/O của hệ điều hành là:",
    options: [
      "Một cơ chế trên mọi thiết bị tin học",
      "Một phần của hệ điều hành",
      "Bàn phím",
      "Máy in"
    ],
    correctAnswer: 1
  },
  {
    question: "271. Các thuật toán đọc đĩa là:",
    options: ["FCFS", "FCFS, SCAN", "FCFS, SSTF, SCAN/C-SCAN, LOOK/C-LOOK", "SSTF"],
    correctAnswer: 2
  },
  {
    question: "272. Thuật toán điều phối cho yêu cầu truy cập đĩa SSTF thực hiện theo nguyên lý gì?",
    options: [
      "Truy cập theo vị trí gần đầu đọc nhất",
      "Truy cập theo vị trí xa đầu đọc nhất",
      "Truy cập theo vị trí đầu tiên",
      "Truy cập theo vị trí cuối cùng"
    ],
    correctAnswer: 0
  },
  {
    question: "273. Thuật toán điều phối cho yêu cầu truy cập đĩa FCFS thực hiện theo nguyên lý gì?",
    options: [
      "Truy cập theo thứ tự yêu cầu",
      "Truy cập theo thứ tự song song",
      "Truy cập theo thứ tự gần nhất",
      "Truy cập theo thứ tự xa nhất"
    ],
    correctAnswer: 0
  },
  {
    question: "274. Thuật toán điều phối cho yêu cầu truy cập đĩa SCAN thực hiện theo nguyên lý gì?",
    options: [
      "Đầu từ dịch chuyển từ cylinder ngoài cùng đến cylinder trong cùng và quay ngược lại, trên đường đi phục vụ các yêu cầu đọc",
      "Đầu từ dịch chuyển đến cylinder ngoài cùng trên đường đi phục vụ các yêu cầu đọc",
      "Đầu từ dịch chuyển đến cylinder trong cùng và quay ngược lại, trên đường đi phục vụ các yêu cầu đọc",
      "Đầu từ dịch chuyển từ cylinder ngoài cùng đến cylinder trong cùng và quay ngược lại"
    ],
    correctAnswer: 0
  },
  {
    question: "275. Giả sử đầu đọc tại vị trí 20, dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
    options: [
      "20, 78, 67, 65, 37, 14, 100, 124, 137",
      "20, 65, 67, 37, 14, 78, 100, 124, 137",
      "20, 185, 124, 122, 78, 67, 65, 37, 14",
      "20, 14, 37, 65, 67, 78, 100, 124, 137"
    ],
    correctAnswer: 3
  },
  {
    question: "276. Giả sử đầu đọc tại vị trí 20, dùng thuật toán lập lịch SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
    options: [
      "20, 65, 67, 78, 100, 124, 137, 37, 14",
      "20, 137, 124, 122, 78, 67, 65, 37, 14",
      "20, 185, 100, 124, 78, 67, 65, 14, 37",
      "20, 14, 37, 65, 67, 78, 100, 124, 137"
    ],
    correctAnswer: 3
  },
  {
    question: "277. Giả sử đầu đọc tại vị trí 20, dùng thuật toán lập lịch C-SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
    options: [
      "20, 37, 14, 65, 67, 78, 100, 124, 137",
      "20, 14, 37, 65, 67, 78, 100, 124, 185",
      "20, 137, 124, 122, 78, 67, 65, 37, 14",
      "20, 37, 65, 67, 78, 100, 124, 137, 14"
    ],
    correctAnswer: 0
  },
  {
    question: "278. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 120k theo giải thuật Worst Fit:",
    options: ["500k", "400k", "300k", "100k"],
    correctAnswer: 0
  },
  {
    question: "279. Tính thời gian chờ của các tiến trình theo SJF không ưu tiên:",
    options: [
      "P1 = 0 , P2 = 7, P3 = 13, P4 = 2",
      "P1 = 18 , P2 = 7, P3 = 0, P4 = 13",
      "P1 = 6 , P2 = 0, P3 = 13, P4 = 8",
      "P1 = 0 , P2 = 0, P3 = 7, P4 = 1"
    ],
    correctAnswer: 2
  },
  {
    question: "280. Tính thời gian chờ của các tiến trình theo SJF có ưu tiên:",
    options: [
      "P1 = 18 , P2 = 7, P3 = 0, P4 = 13",
      "P1 = 6 , P2 = 0, P3 = 13, P4 = 8",
      "P1 = 4 , P2 = 0, P3 = 9, P4 = 3",
      "P1 = 0 , P2 = 0, P3 = 7, P4 = 1"
    ],
    correctAnswer: 2
  },
  {
    "question": "281. Cho các tiến trình P1, P2, P3, P4... (RR, q=4):",
    "options": ["P1 = 0 , P2 = 2, P3 = 9, P4 = 3", "P1 = 6 , P2 = 0, P3 = 13, P4 = 8", "P1 = 4 , P2 = 0, P3 = 9, P4 = 3", "P1 = 0 , P2 = 4, P3 = 11, P4 = 14"],
    "correctAnswer": 3
  },
  {
    "question": "282. ...RR, hàng đợi: P1, P2, P4, P3, q=4",
    "options": ["P1 = 0 , P2 = 2, P3 = 9, P4 = 3", "P1 = 5 , P2 = 4, P3 = 14, P4 = 10", "P1 = 4 , P2 = 0, P3 = 9, P4 = 3", "P1 = 0 , P2 = 4, P3 = 11, P4 = 10"],
    "correctAnswer": 1
  },
  {
    "question": "283. ...RR, hàng đợi: P2, P1, P4, P3, q=4",
    "options": ["P1 = 0 , P2 = 2, P3 = 9, P4 = 3", "P1 = 0 , P2 = 4, P3 = 11, P4 = 1", "P1 = 6 , P2 = 0, P3 = 13, P4 = 8", "P1 = 2 , P2 = 0, P3 = 11, P4 = 10"],
    "correctAnswer": 2
  },
  {
    "question": "284. FCFS – thời gian chờ lớn nhất:",
    "options": ["P2, P4, P1, P3", "P4, P1, P2, P3", "P1, P2, P3, P4", "P1, P4, P2, P3"],
    "correctAnswer": 2
  },
  {
    "question": "285. FCFS – thời gian nhỏ trước:",
    "options": ["P1 = 2 , P2 = 7, P3 = 10, P4 = 2", "P1 = 0 , P2 = 7, P3 = 5, P4 = 8", "P1 = 0 , P2 = 9, P3 = 13, P4 = 10", "P1 = 8 , P2 = 1, P3 = 0, P4 = 3"],
    "correctAnswer": 3
  },
  {
    "question": "286. FCFS – thời gian lớn trước:",
    "options": ["P1 = 0 , P2 = 7, P3 = 13, P4 = 2", "P1 = 0 , P2 = 7, P3 = 5, P4 = 8", "P1 = 0 , P2 = 9, P3 = 13, P4 = 10", "P1 = 0 , P2 = 11, P3 = 13, P4 = 6"],
    "correctAnswer": 3
  },
  {
    "question": "287. Lập lịch ưu tiên – độ ưu tiên: 2, 1, 4, 3",
    "options": ["P1 = 0 , P2 = 7, P3 = 13, P4 = 2", "P1 = 18 , P2 = 7, P3 = 0, P4 = 13", "P1 = 0 , P2 = 9, P3 = 13, P4 = 10", "P1 = 2, P2 = 0, P3 = 13, P4 = 8"],
    "correctAnswer": 3
  },
  {
    "question": "288. SJF không ưu tiên – thời gian nạp: 0,2,4,5",
    "options": ["P1 = 0 , P2 = 7, P3 = 13, P4 = 2", "P1 = 18 , P2 = 7, P3 = 0, P4 = 13", "P1 = 6 , P2 = 0, P3 = 13, P4 = 8", "P1 = 0 , P2 = 5, P3 = 2, P4 = 4"],
    "correctAnswer": 3
  },
  {
    "question": "289. SJF ưu tiên – thời gian nạp: 0,2,4,5",
    "options": ["P1 = 18 , P2 = 7, P3 = 0, P4 = 13", "P1 = 6 , P2 = 0, P3 = 13, P4 = 8", "P1 = 4 , P2 = 0, P3 = 9, P4 = 3", "P1 = 3 , P2 = 0, P3 = 0, P4 = 4"],
    "correctAnswer": 3
  },
  {
    "question": "290. RR, hàng đợi: P1, P2, P3, P4, q=2",
    "options": ["P1 = 0 , P2 = 2, P3 = 9, P4 = 3", "P1 = 6 , P2 = 0, P3 = 13, P4 = 8", "P1 = 4 , P2 = 0, P3 = 9, P4 = 3", "P1 = 7 , P2 = 2, P3 = 4, P4 = 9"],
    "correctAnswer": 3
  },
  {
    "question": "291. FCFS – thời gian nhỏ trước – TBTQ:",
    "options": ["5.3", "4.5", "5.0", "3.0"],
    "correctAnswer": 3
  },
  {
    "question": "292. FCFS – thời gian lớn trước – TBTQ:",
    "options": ["9.3", "4.9", "9.0", "7.5"],
    "correctAnswer": 0
  },
  {
    "question": "293. Ưu tiên – TBTQ:",
    "options": ["5.3", "5.0", "5.5", "5.75"],
    "correctAnswer": 3
  },
  {
    "question": "294. SJF không ưu tiên – TBTQ:",
    "options": ["5.5", "4.5", "5.0", "2.75"],
    "correctAnswer": 3
  },
  {
    "question": "295. SJF ưu tiên – TBTQ:",
    "options": ["6.75", "4.5", "5.0", "1.75"],
    "correctAnswer": 3
  },
  {
    "question": "296. RR q=2 – TBTQ:",
    "options": ["4.5", "3.5", "5.0", "4.0"],
    "correctAnswer": 3
  },
  {
    "question": "297. RR q=2 – hàng đợi P1,P2,P4,P3 – TBTQ:",
    "options": ["4.0", "3.5", "5.0", "6.0"],
    "correctAnswer": 1
  },
  {
    "question": "298. RR q=2 – hàng đợi P2,P1,P4,P3 – TBTQ:",
    "options": ["4.0", "6.0", "5.0", "5.5"],
    "correctAnswer": 3
  },
  {
    "question": "299. FCFS – TBTQ nhỏ nhất:",
    "options": ["P1, P2, P3, P4", "P2, P4, P1, P3", "P4, P1, P2, P3", "P3, P2, P4, P1"],
    "correctAnswer": 3
  },
  {
    "question": "300. FCFS – TBTQ lớn nhất:",
    "options": ["P2, P4, P1, P3", "P4, P1, P2, P3", "P1, P2, P3, P4", "P1, P4, P2, P3"],
"correctAnswer": 2
    },
    {
  "question": "301. FCFS – thời gian nhỏ trước:",
  "options": ["P1 = 2 , P2 = 7, P3 = 10, P4 = 2", "P1 = 0 , P2 = 7, P3 = 5, P4 = 8", "P1 = 0 , P2 = 9, P3 = 13, P4 = 10", "P1 = 8 , P2 = 1, P3 = 0, P4 = 3"],
  "correctAnswer": 3
},
{
  "question": "302. FCFS – thời gian lớn trước:",
  "options": ["P1 = 0 , P2 = 7, P3 = 13, P4 = 2", "P1 = 0 , P2 = 7, P3 = 5, P4 = 8", "P1 = 0 , P2 = 9, P3 = 13, P4 = 10", "P1 = 0 , P2 = 11, P3 = 13, P4 = 6"],
  "correctAnswer": 3
},
{
  "question": "303. Ưu tiên: độ ưu tiên 2,1,4,3",
  "options": ["P1 = 0 , P2 = 7, P3 = 13, P4 = 2", "P1 = 18 , P2 = 7, P3 = 0, P4 = 13", "P1 = 0 , P2 = 9, P3 = 13, P4 = 10", "P1 = 2, P2 = 0, P3 = 13, P4 = 8"],
  "correctAnswer": 3
},
{
  "question": "304. SJF không ưu tiên – thời gian nạp: 0,2,4,5",
  "options": ["P1 = 0 , P2 = 7, P3 = 13, P4 = 2", "P1 = 18 , P2 = 7, P3 = 0, P4 = 13", "P1 = 6 , P2 = 0, P3 = 13, P4 = 8", "P1 = 0 , P2 = 5, P3 = 2, P4 = 4"],
  "correctAnswer": 3
},
{
  "question": "305. SJF ưu tiên – thời gian nạp: 0,2,4,5",
  "options": ["P1 = 18 , P2 = 7, P3 = 0, P4 = 13", "P1 = 6 , P2 = 0, P3 = 13, P4 = 8", "P1 = 4 , P2 = 0, P3 = 9, P4 = 3", "P1 = 3 , P2 = 0, P3 = 0, P4 = 4"],
  "correctAnswer": 3
},
{
  "question": "306. RR – hàng đợi P1,P2,P3,P4 – q=2",
  "options": ["P1 = 0 , P2 = 2, P3 = 9, P4 = 3", "P1 = 6 , P2 = 0, P3 = 13, P4 = 8", "P1 = 4 , P2 = 0, P3 = 9, P4 = 3", "P1 = 7 , P2 = 2, P3 = 4, P4 = 9"],
  "correctAnswer": 3
},
{
  "question": "307. RR – hàng đợi P1,P2,P4,P3 – q=2",
  "options": ["P1 = 0 , P2 = 2, P3 = 9, P4 = 3", "P1 = 6 , P2 = 0, P3 = 13, P4 = 8", "P1 = 4 , P2 = 0, P3 = 9, P4 = 3", "P1 = 7 , P2 = 2, P3 = 6, P4 = 9"],
  "correctAnswer": 3
},
{
  "question": "308. RR – hàng đợi P2,P1,P4,P3 – q=2",
  "options": ["P1 = 0 , P2 = 2, P3 = 9, P4 = 3", "P1 = 9 , P2 = 2, P3 = 4, P4 = 1", "P1 = 4 , P2 = 0, P3 = 9, P4 = 3", "P1 = 7 , P2 = 0, P3 = 6, P4 = 9"],
  "correctAnswer": 1
},
{
  "question": "309. FCFS nhỏ trước – TBTQ:",
  "options": ["5.3", "4.5", "5.0", "4.25"],
  "correctAnswer": 3
},
{
  "question": "310. FCFS lớn trước – TBTQ:",
  "options": ["9.3", "4.9", "9.0", "10.0"],
  "correctAnswer": 3
},
{
  "question": "311. Ưu tiên – TBTQ:",
  "options": ["5.3", "5.5", "5.0", "4.5"],
  "correctAnswer": 3
},
{
  "question": "312. SJF không ưu tiên – thời gian nạp: 3,0,1,5 – TBTQ:",
  "options": ["4.5", "5.5", "5.0", "6.25"],
  "correctAnswer": 0
},
{
  "question": "313. SJF ưu tiên – thời gian nạp: 3,0,1,5 – TBTQ:",
  "options": ["6.75", "4.5", "5.0", "3.0"],
  "correctAnswer": 3
},
{
  "question": "314. RR – hàng đợi P1,P2,P3,P4 – q=4 – TBTQ:",
  "options": ["4.5", "3.5", "5.0", "7.25"],
  "correctAnswer": 3
},
{
  "question": "315. RR – hàng đợi P1,P2,P4,P3 – q=4 – TBTQ:",
  "options": ["4.5", "3.5", "5.0", "8.25"],
  "correctAnswer": 3
},
{
  "question": "316. RR – hàng đợi P2,P1,P4,P3 – q=4 – TBTQ:",
  "options": ["4.5", "3.5", "5.0", "9.25"],
  "correctAnswer": 3
},
{
  "question": "317. FCFS – TBTQ nhỏ nhất:",
  "options": ["P1, P2, P3, P4", "P2, P4, P1, P3", "P4, P1, P2, P3", "P1, P3, P4, P2"],
  "correctAnswer": 3
},
{
  "question": "318. FCFS – TBTQ lớn nhất:",
  "options": ["P4, P1, P2, P3", "P3, P2, P4, P1", "P1, P2, P3, P4", "P2, P4, P3, P1"],
  "correctAnswer": 3
},
{
  "question": "319. FCFS nhỏ trước:",
  "options": ["P1 = 2 , P2 = 7, P3 = 10, P4 = 2", "P1 = 0 , P2 = 7, P3 = 5, P4 = 8", "P1 = 0 , P2 = 9, P3 = 13, P4 = 10", "P1 = 0 , P2 = 10, P3 = 2, P4 = 5"],
  "correctAnswer": 3
},
{
  "question": "320. FCFS lớn trước:",
  "options": ["P1 = 0 , P2 = 7, P3 = 13, P4 = 2", "P1 = 0 , P2 = 7, P3 = 5, P4 = 8", "P1 = 0 , P2 = 9, P3 = 13, P4 = 10", "P1 = 17 , P2 = 0, P3 = 14, P4 = 9"],
  "correctAnswer": 3
},
  {
    "question": "321. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 2, 9, 3, 5. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch ưu tiên, biết độ ưu tiên lần lượt là 2, 4, 1, 3.",
    "options": [
      "P1 = 0 , P2 = 7, P3 = 13, P4 = 2",
      "P1 = 18 , P2 = 7, P3 = 0, P4 = 13",
      "P1 = 0 , P2 = 9, P3 = 13, P4 = 10",
      "P1 = 3 , P2 = 10, P3 = 0, P4 = 5"
    ],
    "correctAnswer": 3
  },
  {
    "question": "322. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 2, 9, 3, 5. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch SJF không ưu tiên, biết thời gian nạp của các tiến trình lần lượt là 3, 0, 1, 5.",
    "options": [
      "P1 = 0 , P2 = 7, P3 = 13, P4 = 2",
      "P1 = 18 , P2 = 7, P3 = 0, P4 = 13",
      "P1 = 6 , P2 = 10, P3 = 13, P4 = 8",
      "P1 = 6 , P2 = 0, P3 = 10, P4 = 9"
    ],
    "correctAnswer": 3
  },
  {
    "question": "323. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 2, 9, 3, 5. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch SJF ưu tiên, biết thời gian nạp của các tiến trình lần lượt là 3, 0, 1, 5.",
    "options": [
      "P1 = 18 , P2 = 7, P3 = 0, P4 = 13",
      "P1 = 6 , P2 = 0, P3 = 13, P4 = 8",
      "P1 = 4 , P2 = 0, P3 = 9, P4 = 3",
      "P1 = 1 , P2 = 10, P3 = 0, P4 = 1"
    ],
    "correctAnswer": 3
  },
  {
    "question": "324. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 2, 9, 3, 5. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch RR biết các tiến trình trong hàng đợi theo thứ tự P1, P2, P3, P4 tại thời điểm bắt đầu là 0 và q=4.",
    "options": [
      "P1 = 0 , P2 = 2, P3 = 9, P4 = 3",
      "P1 = 6 , P2 = 0, P3 = 13, P4 = 8",
      "P1 = 4 , P2 = 0, P3 = 9, P4 = 3",
      "P1 = 0 , P2 = 10, P3 = 6, P4 = 13"
    ],
    "correctAnswer": 3
  },
  {
    "question": "325. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 2, 9, 3, 5. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch RR biết các tiến trình trong hàng đợi theo thứ tự P1, P2, P4, P3 tại thời điểm bắt đầu là 0 và q=4.",
    "options": [
      "P1 = 0 , P2 = 2, P3 = 9, P4 = 3",
      "P1 = 6 , P2 = 0, P3 = 13, P4 = 8",
      "P1 = 4 , P2 = 0, P3 = 9, P4 = 3",
      "P1 = 0 , P2 = 10, P3 = 10, P4 = 13"
    ],
    "correctAnswer": 3
  },
  {
    "question": "326. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 2, 9, 3, 5. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch RR biết các tiến trình trong hàng đợi theo thứ tự P2, P1, P4, P3 tại thời điểm bắt đầu là 0 và q=4.",
    "options": [
      "P1 = 0 , P2 = 2, P3 = 9, P4 = 3",
      "P1 = 6 , P2 = 0, P3 = 13, P4 = 8",
      "P1 = 4 , P2 = 0, P3 = 9, P4 = 3",
      "P1 = 4 , P2 = 10, P3 = 10, P4 = 13"
    ],
    "correctAnswer": 3
  },
  {
    "question": "327. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 4, 2, 9, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch FCFS, biết tiến trình có thời gian sử dụng CPU nhỏ được thực hiện trước các tiến trình khác.",
    "options": [
      "5.3",
      "4.5",
      "5.0",
      "4.75"
    ],
    "correctAnswer": 3
  },
  {
    "question": "328. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 4, 2, 9, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch FCFS, biết tiến trình có thời gian sử dụng CPU lớn được thực hiện trước các tiến trình khác.",
    "options": [
      "9.3",
      "4.9",
      "9.0",
      "10.25"
    ],
    "correctAnswer": 3
  },
  {
    "question": "329. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 4, 2, 9, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch ưu tiên, biết độ ưu tiên lần lượt là 1, 2, 4, 3.",
    "options": [
      "5.3",
      "5.5",
      "5.0",
      "5.25"
    ],
    "correctAnswer": 3
  },
  {
    "question": "330. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 4, 2, 9, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch SJF không ưu tiên, biết thời gian nạp của các tiến trình lần lượt là 2, 0, 4, 5.",
    "options": [
      "4.0",
      "4.5",
      "5.5",
      "2.0"
    ],
    "correctAnswer": 3
  },
  {
    "question": "331. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 4, 2, 9, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch SJF ưu tiên, biết thời gian nạp của các tiến trình lần lượt là 2, 0, 4, 5.",
    "options": [
      "6.75",
      "4.5",
      "3.5",
      "2.0"
    ],
    "correctAnswer": 2
  },
  {
    "question": "332. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 4, 2, 9, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch RR biết các tiến trình trong hàng đợi theo thứ tự P1, P2, P3, P4 tại thời điểm bắt đầu là 0 và q=4.",
    "options": [
      "4.5",
      "9.5",
      "5.0",
      "7.25"
    ],
    "correctAnswer": 3
  },
  {
    "question": "333. Cho các tiến trìn P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 1, 5, 7, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch FCFS, biết tiến trình có thời gian sử dụng CPU nhỏ được thực hiện trước các tiến trình khác.",
    "options": [
      "3.5 (đvtg)",
      "4.5 (đvtg)",
      "4.25 (đvtg)",
      "5.25 (đvtg)"
    ],
    "correctAnswer": 1
  },
  {
    "question": "334. Cho các tiến trìn P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 1, 5, 7, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch SJF trong trường hợp không ưu tiên, biết thời gian bắt đầu của tiến trình lần lượt là 4,1,0,3.",
    "options": [
      "4.5",
      "5",
      "5.2",
      "9"
    ],
    "correctAnswer": 0
  },
  {
    "question": "335. Cho các tiến trìn P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 1, 5, 7, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch SJF trong trường hợp ưu tiên, biết thời gian bắt đầu của tiến trình lần lượt là 4,1,0,3.",
    "options": [
      "4",
      "4.5",
      "4.25",
      "6.25"
    ],
    "correctAnswer": 2
  },
  {
    "question": "336. Cho các tiến trìn P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 1, 5, 7, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch ưu tiên biết độ ưu tiên lần lượt là 4,1,2,3.",
    "options": [
      "7.25",
      "7.5",
      "8.25",
      "8.5"
    ],
    "correctAnswer": 0
  },
  {
    "question": "337. Cho các tiến trìn P1, P2, P3, P4, P5 với thời gian sử dụng CPU lần lượt là 10, 1, 2, 1, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch FCFS biết các tiến trình thực hiện theo thứ tự P1, P2, P3, P4, P5 tại thời điểm bắt đầu là 0.",
    "options": [
      "9",
      "9.5",
      "9.6",
      "9.25"
    ],
    "correctAnswer": 2
  },
  {
    "question": "338. Cho các tiến trìn P1, P2, P3, P4, P5 với thời gian sử dụng CPU lần lượt là 10, 1, 2, 1, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch RR biết các tiến trình trong hàng đợi theo thứ tự P1, P2, P3, P4, P5 tại thời điểm bắt đầu là 0 và q=2.",
    "options": [
      "5.5",
      "5.6",
      "5.7",
      "5.8"
    ],
    "correctAnswer": 1
  },
  {
    "question": "339. Chọn câu trả lời đúng\n\nCho các tiến trìn P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 1, 5, 7, 5. Tiến trình sẽ được thực hiện theo thứ tự nào để thời gian chờ trung bình là lớn nhất.",
    "options": [
      "P1, P2, P3, P4",
      "P1, P3, P2, P4",
      "P3, P2, P4, P1",
      "P3, P2, P1, P4"
    ],
    "correctAnswer": 2
  },
  {
    "question": "340. Chọn câu trả lời đúng\n\nCho các tiến trìn P1, P2, P3, P4, P5 với thời gian sử dụng CPU lần lượt là 1, 5, 7, 5, 3. Tiến trình sẽ được thực hiện theo thứ tự nào để thời gian chờ trung bình là nhỏ nhất.",
    "options": [
      "P1, P2, P3, P4, P5",
      "P2, P3, P1, P4, P5",
      "P3, P2, P1, P4, P5",
      "P1, P5, P2, P4, P3"
    ],
    "correctAnswer": 3
  },
  {
    "question": "341. Cho các tiến trìn P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 7, 4, 1, 4. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch SJF với trường hợp ưu tiên biết các tiến trình có thời điểm đến lần lượt là 0, 2, 4, 5.",
    "options": [
      "3.25",
      "3.5",
      "3",
      "4"
    ],
    "correctAnswer": 0
  },
  {
    "question": "342. Cho các tiến trìn P1, P2, P3 với thời gian sử dụng CPU lần lượt là 24, 3, 3. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch FCFS biết các tiến trình thực hiện theo thứ tự P1, P2, P3.",
    "options": [
      "17",
      "18",
      "19",
      "20"
    ],
    "correctAnswer": 0
  },
  {
    "question": "343. Cho các tiến trìn P1, P2, P3 với thời gian sử dụng CPU lần lượt là 24, 3, 3. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch FCFS biết các tiến trình thực hiện theo thứ tự P1, P2, P3.",
    "options": [
      "P1=0, P2= 27, P3=24",
      "P1=2, P2=17, P3=9",
      "P1=0, P2=24, P3=27",
      "P1=0, P2=23, P3=26"
    ],
    "correctAnswer": 2
  },
  {
    "question": "344. Cho các tiến trìn P1, P2, P3 với thời gian sử dụng CPU lần lượt là 24, 3, 3. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch FCFS biết các tiến trình thực hiện theo thứ tự P2, P3, P1.",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 0
  },
  {
    "question": "345. Cho các tiến trìn P1, P2, P3 với thời gian sử dụng CPU lần lượt là 24, 3, 3. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch FCFS biết các tiến trình thực hiện theo thứ tự P2, P3, P1.",
    "options": [
      "P1=0, P2=3, P3=6",
      "P1=0, P2=6, P3=3",
      "P1=0, P2=24, P3=27",
      "P1=6, P2=0, P3=3"
    ],
    "correctAnswer": 3
  },
  {
    "question": "346. Cho các tiến trìn P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 53, 17, 68, 24. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch RR biết q=20.",
    "options": [
      "P1=0, P2=20, P3=37, P4=57",
      "P1=81, P2=20, P3=94, P4=97",
      "P1=77, P2=20, P3=134, P4=117",
      "P1=121, P2=20, P3=134, P4=117"
    ],
    "correctAnswer": 1
  },
  {
    "question": "347. Cho các tiến trìn P1, P2, P3 với thời gian sử dụng CPU lần lượt là 24ms, 3ms, 6ms. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch RR biết q=4ms và thứ tự trong hàng chờ P1, P2, P3, vào hàng chờ cùng thời điểm 0.",
    "options": [
      "P1=9 đvtg, P2=4 đvtg, P3=11đvtg",
      "P1=9ms, P2=5ms, P3=11ms",
      "P1=9ms, P2=5ms, P3=10ms",
      "P1=9ms, P2=4ms, P3=11ms"
    ],
    "correctAnswer": 3
  },
  {
    "question": "348. Cho các tiến trìn P1, P2, P3 với thời gian sử dụng CPU lần lượt là 24ms, 3ms, 6ms. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch RR biết q=4ms và thứ tự trong hàng chờ P1, P2, P3, vào hàng chờ cùng thời điểm 0.",
    "options": [
      "7ms",
      "8ms",
      "9ms",
      "10ms"
    ],
    "correctAnswer": 0
  },
  {
    "question": "349. Cho các tiến trìn P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 4, 2, 9, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch RR biết các tiến trình trong hàng đợi theo thứ tự P1, P2, P4, P3 tại thời điểm bắt đầu là 0 và q=4.",
    "options": [
      "7.25",
      "9.5",
      "5.0",
      "6.25"
    ],
    "correctAnswer": 0
  },
  {
    "question": "350. Cho các tiến trìn P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 4, 2, 9, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch RR biết các tiến trình trong hàng đợi theo thứ tự P2, P1, P4, P3 tại thời điểm bắt đầu là 0 và q=4.",
    "options": [
      "7.25",
      "4.5",
      "9.5",
      "5.75"
    ],
    "correctAnswer": 3
  },
  {
    "question": "351. Cho các tiến trìn P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 4, 2, 9, 5. Đưa ra thứ tự thực hiện để thời gian chờ trung bình của các tiến trình theo thuật toán FCFS là nhỏ nhất.",
    "options": [
      "P1, P2, P3, P4",
      "P1, P4, P2, P3",
      "P4, P1, P2, P3",
      "P2, P1, P4, P3"
    ],
    "correctAnswer": 3
  },
  {
    "question": "352. Cho các tiến trìn P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 4, 2, 9, 5. Đưa ra thứ tự thực hiện để thời gian chờ trung bình của các tiến trình theo thuật toán FCFS là lớn nhất.",
    "options": [
      "P2, P4, P1, P3",
      "P4, P1, P2, P3",
      "P1, P2, P3, P4",
      "P3, P4, P1, P2"
    ],
    "correctAnswer": 3
  },
  {
    "question": "353. Cho các tiến trìn P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 4, 2, 9, 5. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch FCFS, biết tiến trình có thời gian sử dụng CPU nhỏ được thực hiện trước các tiến trình khác.",
    "options": [
      "P1 = 2 , P2 = 7, P3 = 10, P4 = 2",
      "P1 = 0 , P2 = 7, P3 = 5, P4 = 8",
      "P1 = 0 , P2 = 9, P3 = 13, P4 = 10",
      "P1 = 2 , P2 = 0, P3 = 11, P4 = 6"
    ],
    "correctAnswer": 3
  },
  {
    "question": "354. Cho các tiến trìn P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 4, 2, 9, 5. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch FCFS, biết tiến trình có thời gian sử dụng CPU lớn được thực hiện trước các tiến trình khác.",
    "options": [
      "P1 = 0 , P2 = 7, P3 = 13, P4 = 2",
      "P1 = 0 , P2 = 7, P3 = 5, P4 = 8",
      "P1 = 0 , P2 = 9, P3 = 13, P4 = 10",
      "P1 = 14 , P2 = 18, P3 = 0, P4 = 9"
    ],
    "correctAnswer": 3
  },
  {
    "question": "355. Cho các tiến trìn P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 4, 2, 9, 5. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch ưu tiên, biết độ ưu tiên lần lượt là 1, 2, 4, 3.",
    "options": [
      "P1 = 0 , P2 = 7, P3 = 13, P4 = 2",
      "P1 = 18 , P2 = 7, P3 = 0, P4 = 13",
      "P1 = 0 , P2 = 9, P3 = 13, P4 = 10",
      "P1 = 0 , P2 = 4, P3 = 11, P4 = 6"
    ],
    "correctAnswer": 3
  },
  {
    "question": "356. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 6, 2, 1, 5. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch RR biết các tiến trình trong hàng đợi theo thứ tự P1, P2, P4, P3 tại thời điểm bắt đầu là 0 và q=2.",
    "options": [
      "P1 = 0 , P2 = 2, P3 = 9, P4 = 3",
      "P1 = 6 , P2 = 0, P3 = 13, P4 = 8",
      "P1 = 4 , P2 = 0, P3 = 9, P4 = 3",
      "P1 = 7 , P2 = 2, P3 = 6, P4 = 9"
    ],
    "correctAnswer": 3
  },
  {
    "question": "357. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 6, 2, 1, 5. Tính thời gian chờ của các tiến trình theo phương pháp lập lịch RR biết các tiến trình trong hàng đợi theo thứ tự P2, P1, P4, P3 tại thời điểm bắt đầu là 0 và q=2.",
    "options": [
      "P1 = 0 , P2 = 2, P3 = 9, P4 = 3",
      "P1 = 9 , P2 = 2, P3 = 4, P4 = 1",
      "P1 = 4 , P2 = 0, P3 = 9, P4 = 3",
      "P1 = 7 , P2 = 0, P3 = 6, P4 = 9"
    ],
    "correctAnswer": 3
  },
  {
    "question": "358. Cho các tiến trình P1, P2, P3, P4 với thời gian sử dụng CPU lần lượt là 2, 9, 3, 5. Tính thời gian chờ trung bình của các tiến trình theo phương pháp lập lịch FCFS, biết tiến trình có thời gian sử dụng CPU nhỏ được thực hiện trước các tiến trình khác.",
    "options": [
      "5.3",
      "4.5",
      "5.0",
      "4.25"
    ],
    "correctAnswer": 3
  },
{
  "question": "433. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau:100k, 250k, 260k, 300k, 200k, 230k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 210k theo giải thuật Best Fit",
  "options": [
    "250k",
    "260k",
    "300k",
    "230k"
  ],
  "correctAnswer": 3
},
{
  "question": "434. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau:100k, 250k, 260k, 300k, 200k, 230k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 210k theo giải thuật Worst Fit",
  "options": [
    "250k",
    "230k",
    "260k",
    "300k"
  ],
  "correctAnswer": 3
},
{
  "question": "435. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau:100k, 250k, 260k, 300k, 200k, 230k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 210k theo giải thuật First Fit",
  "options": [
    "230k",
    "260k",
    "300k",
    "250k"
  ],
  "correctAnswer": 3
},
{
  "question": "436. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau:100k, 250k, 260k, 300k, 200k, 230k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 220k theo giải thuật Best Fit",
  "options": [
    "250k",
    "260k",
    "300k",
    "230k"
  ],
  "correctAnswer": 3
},
{
  "question": "437. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau:100k, 250k, 260k, 300k, 200k, 230k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 220k theo giải thuật Worst Fit",
  "options": [
    "250k",
    "230k",
    "260k",
    "300k"
  ],
  "correctAnswer": 3
},
{
  "question": "438. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau:100k, 250k, 260k, 300k, 200k, 230k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 220k theo giải thuật First Fit",
  "options": [
    "230k",
    "260k",
    "300k",
    "250k"
  ],
  "correctAnswer": 3
},
{
  "question": "439. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 90k theo giải thuật Best Fit",
  "options": [
    "250k",
    "260k",
    "300k",
    "95k"
  ],
  "correctAnswer": 3
},
{
  "question": "440. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 220k theo giải thuật Worst Fit",
  "options": [
    "250k",
    "230k",
    "260k",
    "500k"
  ],
  "correctAnswer": 3
},
{
  "question": "441. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 220k theo giải thuật First Fit",
  "options": [
    "230k",
    "260k",
    "300k",
    "250k"
  ],
  "correctAnswer": 3
},
{
  "question": "442. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 150k theo giải thuật Best Fit",
  "options": [
    "95k",
    "260k",
    "300k",
    "250k"
  ],
  "correctAnswer": 3
},
{
  "question": "443. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 150k theo giải thuật Worst Fit",
  "options": [
    "250k",
    "230k",
    "260k",
    "500k"
  ],
  "correctAnswer": 3
},
{
  "question": "444. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 150k theo giải thuật First Fit",
  "options": [
    "100k",
    "260k",
    "300k",
    "250k"
  ],
  "correctAnswer": 3
},
{
  "question": "445. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 270k theo giải thuật Best Fit",
  "options": [
    "95k",
    "260k",
    "300k",
    "280k"
  ],
  "correctAnswer": 3
},
{
  "question": "446. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 270k theo giải thuật Worst Fit",
  "options": [
    "250k",
    "230k",
    "260k",
    "500k"
  ],
  "correctAnswer": 3
},
{
  "question": "447. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 270k theo giải thuật First Fit",
  "options": [
    "100k",
    "250k",
    "260k",
    "300k"
  ],
  "correctAnswer": 3
},
{
  "question": "448. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 280k theo giải thuật Best Fit",
  "options": [
    "95k",
    "260k",
    "300k",
    "280k"
  ],
  "correctAnswer": 3
},
{
  "question": "449. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 280k theo giải thuật Worst Fit",
  "options": [
    "250k",
    "230k",
    "260k",
    "500k"
  ],
  "correctAnswer": 3
},
{
  "question": "450. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 280k theo giải thuật First Fit",
  "options": [
    "100k",
    "250k",
    "260k",
    "300k"
  ],
  "correctAnswer": 3
},
{
  "question": "451. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 150k, 400k, 95k, 50k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 80k theo giải thuật Best Fit:",
  "options": [
    "400k",
    "95k",
    "260k",
    "300k"
  ],
  "correctAnswer": 1
},
{
  "question": "452. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 150k, 400k, 95k, 50k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 80k theo giải thuật Worst Fit:",
  "options": [
    "250k",
    "230k",
    "260k",
    "400k"
  ],
  "correctAnswer": 3
},
{
  "question": "453. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 150k, 400k, 95k, 50k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 80k theo giải thuật First Fit:",
  "options": [
    "300k",
    "260k",
    "250k",
    "100k"
  ],
  "correctAnswer": 3
},
{
  "question": "454. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 150k, 400k, 95k, 50k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 100k theo giải thuật Best Fit:",
  "options": [
    "100k",
    "400k",
    "95k",
    "260k"
  ],
  "correctAnswer": 0
},
{
  "question": "455. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 150k, 400k, 95k, 50k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 100k theo giải thuật Worst Fit:",
  "options": [
    "250k",
    "230k",
    "260k",
    "400k"
  ],
  "correctAnswer": 3
},
{
  "question": "456. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 150k, 400k, 95k, 50k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 80k theo giải thuật First Fit:",
  "options": [
    "250k",
    "260k",
    "300k",
    "100k"
  ],
  "correctAnswer": 3
},
{
  "question": "457. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 90k theo giải thuật Best Fit:",
  "options": [
    "95k",
    "100k",
    "250k",
    "400k"
  ],
  "correctAnswer": 0
},
{
  "question": "458. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 80k theo giải thuật Best Fit:",
  "options": [
    "100k",
    "270k",
    "250k",
    "95k"
  ],
  "correctAnswer": 3
},
{
  "question": "459. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 85k theo giải thuật Best Fit:",
  "options": [
    "100k",
    "250k",
    "260k",
    "95k"
  ],
  "correctAnswer": 3
},
{
  "question": "460. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 110k theo giải thuật Best Fit:",
  "options": [
    "250k",
    "100k",
    "400k",
    "280k"
  ],
  "correctAnswer": 0
},
{
  "question": "461. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 120k theo giải thuật Best Fit:",
  "options": [
    "250k",
    "100k",
    "260k",
    "95k"
  ],
  "correctAnswer": 0
},
{
  "question": "462. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 130k theo giải thuật Best Fit:",
  "options": [
    "250k",
    "260k",
    "95k",
    "100k"
  ],
  "correctAnswer": 0
},
{
  "question": "463. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 140k theo giải thuật Best Fit:",
  "options": [
    "250k",
    "100k",
    "200k",
    "400k"
  ],
  "correctAnswer": 0
},
{
  "question": "464. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 200k theo giải thuật Best Fit:",
  "options": [
    "250k",
    "260k",
    "100k",
    "400k"
  ],
  "correctAnswer": 0
},
{
  "question": "465. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 210k theo giải thuật Best Fit:",
  "options": [
    "250k",
    "300k",
    "400k",
    "95k"
  ],
  "correctAnswer": 0
},
{
  "question": "466. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 220k theo giải thuật Best Fit:",
  "options": [
    "250k",
    "260k",
    "100k",
    "400k"
  ],
  "correctAnswer": 0
},
{
  "question": "467. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 230k theo giải thuật Best Fit:",
  "options": [
    "250k",
    "200k",
    "300k",
    "400k"
  ],
  "correctAnswer": 0
},
{
  "question": "468. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 240k theo giải thuật Best Fit:",
  "options": [
    "250k",
    "260k",
    "100k",
    "300k"
  ],
  "correctAnswer": 0
},
{
  "question": "469. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 95k theo giải thuật Worst Fit:",
  "options": [
    "500k",
    "200k",
    "100k",
    "300k"
  ],
  "correctAnswer": 0
},
{
  "question": "470. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 100k theo giải thuật Worst Fit:",
  "options": [
    "500k",
    "400k",
    "100k",
    "300k"
  ],
  "correctAnswer": 0
},
{
  "question": "471. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 110k theo giải thuật Worst Fit:",
  "options": [
    "500k",
    "400k",
    "450k",
    "300k"
  ],
  "correctAnswer": 0
},
{
  "question": "472. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 130k theo giải thuật Worst Fit:",
  "options": [
    "500k",
    "400k",
    "300k",
    "100k"
  ],
  "correctAnswer": 0
},
{
  "question": "473. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 110k theo giải thuật First Fit:",
  "options": [
    "250k",
    "100k",
    "500k",
    "280k"
  ],
  "correctAnswer": 0
},
{
  "question": "474. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 120k theo giải thuật First Fit:",
  "options": [
    "250k",
    "260k",
    "300k",
    "400k"
  ],
  "correctAnswer": 0
},
{
  "question": "475. Trong kĩ thuật quản lí phân chương (vùng) động, các vùng nhớ sau còn trống có kích thước như sau:100k, 250k, 260k, 300k, 200k, 210k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 210k theo giải thuật First Fit:",
  "options": [
    "250k",
    "210k",
    "260k",
    "300k"
  ],
  "correctAnswer": 0
},
{
  "question": "476. Trong kĩ thuật quản lí phân chương (vùng) động, các vùng nhớ sau còn trống có kích thước như sau:100k, 250k, 260k, 300k, 200k, 230k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 210k theo giải thuật Best Fit:",
  "options": [
    "250k",
    "230k",
    "260k",
    "300k"
  ],
  "correctAnswer": 3
},
{
  "question": "477. Trong kĩ thuật quản lí phân chương (vùng) động, các vùng nhớ sau còn trống có kích thước như sau:100k, 250k, 260k, 300k, 200k, 230k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 210k theo giải thuật Worst Fit:",
  "options": [
    "230k",
    "250k",
    "260k",
    "300k"
  ],
  "correctAnswer": 3
},
{
  "question": "478. Trong kĩ thuật quản lí phân chương (vùng) động, các vùng nhớ sau còn trống có kích thước như sau:100k, 250k, 260k, 300k, 200k, 230k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 270k theo giải thuật Worst Fit:",
  "options": [
    "260k",
    "280k",
    "300k",
    "500k"
  ],
  "correctAnswer": 3
},
{
  "question": "479. Trong kĩ thuật quản lí phân chương (vùng) động, các vùng nhớ sau còn trống có kích thước như sau:100k, 250k, 260k, 300k, 200k, 230k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 270k theo giải thuật First Fit:",
  "options": [
    "260k",
    "280k",
    "300k",
    "500k"
  ],
  "correctAnswer": 2
},
{
  "question": "480. Trong kĩ thuật quản lí phân chương (vùng) động, các vùng nhớ sau còn trống có kích thước như sau:100k, 250k, 260k, 300k, 200k, 230k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 270k theo giải thuật Best Fit:",
  "options": [
    "260k",
    "280k",
    "300k",
    "500k"
  ],
  "correctAnswer": 1
},
{
  "question": "481. Trong kĩ thuật quản lí phân chương (vùng) động, các vùng nhớ sau còn trống có kích thước như sau:100k, 250k, 260k, 300k, 200k, 230k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 90k theo giải thuật Best Fit:",
  "options": ["100k", "200k", "230k", "250k"],
  "correctAnswer": 0
},
{
  "question": "482. Trong kĩ thuật quản lí phân chương (vùng) động, các vùng nhớ sau còn trống có kích thước như sau:100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 90k theo giải thuật Worst Fit:",
  "options": ["100k", "300k", "500k", "400k"],
  "correctAnswer": 2
},
{
  "question": "483. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 140k theo giải thuật First Fit:",
  "options": ["250k", "100k", "260k", "400k"],
  "correctAnswer": 0
},
{
  "question": "484. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 210k theo giải thuật First Fit:",
  "options": ["250k", "100k", "400k", "300k"],
  "correctAnswer": 0
},
{
  "question": "485. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 70, dùng thuật toán lập lịch FCFS thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "70, 37, 14, 65, 67, 78, 122, 124, 185",
    "70, 65, 67, 78, 122, 124, 185,37,14",
    "70, 14, 37, 65, 67, 78, 100, 124, 137",
    "70, 78, 137, 37, 100, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "486. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 70, dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "70, 65, 67, 37, 14, 78,100, 124, 137",
    "70, 14, 37, 65, 67, 78, 100, 124, 137",
    "70, 185, 124, 122, 78, 67, 65, 37, 14",
    "70, 67, 65, 78, 100, 124, 137, 37, 14"
  ],
  "correctAnswer": 3
},
{
  "question": "487. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 70, dùng thuật toán lập lịch SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "70, 65, 67, 78, 100, 124, 137,37,14",
    "70, 137, 124, 122, 78, 67, 65, 37, 14",
    "70, 185, 100, 124, 78, 67, 65, 14, 37",
    "70, 67, 65, 37, 14, 78, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "488. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 70, dùng thuật toán lập lịch C-SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "70, 37, 14, 65, 67, 78, 100, 124, 137",
    "70, 14, 37, 65, 67, 78, 100, 124, 185",
    "70, 137, 124, 122, 78, 67, 65, 37, 14",
    "70, 78, 100, 124, 137, 14, 37, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "489. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 71, dùng thuật toán lập lịch FCFS thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "71, 37, 14, 65, 67, 78, 122, 124, 185",
    "71, 65, 67, 78, 122, 124, 185,37,14",
    "71, 14, 37, 65, 67, 78, 100, 124, 137",
    "71, 78, 137, 37, 100, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "490. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 71, dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "71, 65, 67, 37, 14, 78,100, 124, 137",
    "71, 14, 37, 65, 67, 78, 100, 124, 137",
    "71, 185, 124, 122, 78, 67, 65, 37, 14",
    "71, 67, 65, 78, 100, 124, 137, 37, 14"
  ],
  "correctAnswer": 3
},
{
  "question": "491. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 71, dùng thuật toán lập lịch SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "71, 137, 124, 122, 78, 67, 65, 37, 14",
    "71, 65, 67, 78, 100, 124, 137,37,14",
    "71, 185, 100, 124, 78, 67, 65, 14, 37",
    "71, 67, 65, 37, 14, 78, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "492. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 71, dùng thuật toán lập lịch C-SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "71, 37, 14, 65, 67, 78, 100, 124, 137",
    "71, 14, 37, 65, 67, 78, 100, 124, 185",
    "71, 137, 124, 122, 78, 67, 65, 37, 14",
    "71, 78, 100, 124, 137, 14, 37, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "493. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 72, dùng thuật toán lập lịch FCFS thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "72, 37, 14, 65, 67, 78, 122, 124, 185",
    "72, 65, 67, 78, 122, 124, 185,37,14",
    "72, 14, 37, 65, 67, 78, 100, 124, 137",
    "72, 78, 137, 37, 100, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "494. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 72, dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "72, 65, 67, 37, 14, 78,100, 124, 137",
    "72, 14, 37, 65, 67, 78, 100, 124, 137",
    "72, 185, 124, 122, 78, 67, 65, 37, 14",
    "72, 67, 65, 78, 100, 124, 137, 37, 14"
  ],
  "correctAnswer": 3
},
{
  "question": "495. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 72, dùng thuật toán lập lịch SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "72, 65, 67, 78, 100, 124, 137,37,14",
    "72, 137, 124, 122, 78, 67, 65, 37, 14",
    "72, 185, 100, 124, 78, 67, 65, 14, 37",
    "72, 67, 65, 37, 14, 78, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "496. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 72, dùng thuật toán lập lịch C-SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "72, 37, 14, 65, 67, 78, 100, 124, 137",
    "72, 14, 37, 65, 67, 78, 100, 124, 185",
    "72, 137, 124, 122, 78, 67, 65, 37, 14",
    "72, 78, 100, 124, 137, 14, 37, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "497. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 80, dùng thuật toán lập lịch FCFS thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "80, 37, 14, 65, 67, 78, 122, 124, 185",
    "80, 65, 67, 78, 122, 124, 185,37,14",
    "80, 14, 37, 65, 67, 78, 100, 124, 137",
    "80, 78, 137, 37, 100, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "498. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 80, dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "80, 65, 67, 37, 14, 78,100, 124, 137",
    "80, 14, 37, 65, 67, 78, 100, 124, 137",
    "80, 185, 124, 122, 78, 67, 65, 37, 14",
    "80, 78, 67, 65, 37, 14, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "499. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 80, dùng thuật toán lập lịch SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "80, 65, 67, 78, 100, 124, 137,37,14",
    "80, 137, 124, 122, 78, 67, 65, 37, 14",
    "80, 185, 100, 124, 78, 67, 65, 14, 37",
    "80, 78, 67, 65, 37, 14, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "500. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 80, dùng thuật toán lập lịch C-SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây:",
  "options": [
    "80, 37, 14, 65, 67, 78, 100, 124, 137",
    "80, 14, 37, 65, 67, 78, 100, 124, 185",
    "80, 137, 124, 122, 78, 67, 65, 37, 14",
    "80, 100, 124, 137, 14, 37, 65, 67, 78"
  ],
  "correctAnswer": 3
},
{
  "question": "501. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 81, dùng thuật toán lập lịch FCFS thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "81, 37, 14, 65, 67, 78, 122, 124, 185",
    "81, 65, 67, 78, 122, 124, 185, 37, 14",
    "81, 14, 37, 65, 67, 78, 100, 124, 137",
    "81, 78, 137, 37, 100, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "502. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 81, dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "81, 65, 67, 37, 14, 78, 100, 124, 137",
    "81, 14, 37, 65, 67, 78, 100, 124, 137",
    "81, 185, 124, 122, 78, 67, 65, 37, 14",
    "81, 78, 67, 65, 37, 14, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "503. Cần đọc các khối sau 98,183,37,122,14,124,65,67. Giả sử đầu đọc tại vị trí 53, dùng thuật toán lập lịch FCFS thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "53, 37, 14, 65, 67, 98, 122, 124, 183",
    "53, 65, 67, 98, 122, 124, 183, 37, 14",
    "53, 14, 37, 65, 67, 98, 122, 124, 183",
    "53, 98, 183, 37, 122, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "504. Cần đọc các khối sau 98,183,37,122,14,124,65,67. Giả sử đầu đọc tại vị trí 53, dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "53, 37, 14, 65, 67, 98, 122, 124, 183",
    "53, 65, 67, 37, 14, 98, 122, 124, 183",
    "53, 14, 37, 65, 67, 98, 122, 124, 183",
    "53, 183, 124, 122, 98, 67, 65, 37, 14"
  ],
  "correctAnswer": 1
},
{
  "question": "505. Cần đọc các khối sau 98,183,37,122,14,124,65,67. Giả sử đầu đọc tại vị trí 53, dùng thuật toán lập lịch C-SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "53, 37, 14, 65, 67, 98, 122, 124, 183",
    "53, 65, 67, 98, 122, 124, 183, 14, 37",
    "53, 14, 37, 65, 67, 98, 122, 124, 183",
    "53, 183, 124, 122, 98, 67, 65, 37, 14"
  ],
  "correctAnswer": 1
},
{
  "question": "506. Các khối cần đọc 27, 55, 152, 8, 56, 18, 95, 24, 35, 6. Đầu đọc hiện tại đang ở vị trí 83. Dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "83, 27, 55, 152, 8, 56, 18, 95, 24, 35, 6",
    "83, 95, 56, 55, 35, 27, 24, 18, 8, 6, 152",
    "83, 95, 152, 56, 55, 35, 27, 24, 18, 8, 6",
    "83, 95, 56, 55, 35, 27, 24, 18, 8, 152, 6"
  ],
  "correctAnswer": 1
},
{
  "question": "507. Các khối cần đọc 27, 55, 152, 8, 56, 18, 95, 24, 35, 6. Đầu đọc hiện tại đang ở vị trí 83. Dùng thuật toán lập lịch C-SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "83, 95, 152, 6, 8, 18, 24, 27, 35, 55, 56",
    "83, 95, 152, 6, 8, 18, 24, 27, 35, 56, 55",
    "83, 95, 56, 55, 35, 27, 24, 18, 8, 6",
    "83, 27, 55, 152, 8, 56, 18, 95, 24, 35, 6"
  ],
  "correctAnswer": 0
},
{
  "question": "511. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 81, dùng thuật toán lập lịch SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "81, 65, 67, 78, 100, 124, 137,37,14",
    "81, 137, 124, 122, 78, 67, 65, 37, 14",
    "81, 185, 100, 124, 78, 67, 65, 14, 37",
    "81, 78, 67, 65, 37, 14, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "512. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 81, dùng thuật toán lập lịch C-SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "81, 37, 14, 65, 67, 78, 100, 124, 137",
    "81, 137, 124, 122, 78, 67, 65, 37, 14",
    "81, 14, 37, 65, 67, 78, 100, 124, 185",
    "81, 100, 124, 137, 14, 37, 65, 67, 78"
  ],
  "correctAnswer": 3
},
{
  "question": "513. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 82, dùng thuật toán lập lịch FCFS thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "82, 37, 14, 65, 67, 78, 122, 124, 185",
    "82, 65, 67, 78, 122, 124, 185,37,14",
    "82, 14, 37, 65, 67, 78, 100, 124, 137",
    "82, 78, 137, 37, 100, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "514. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 82, dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "82, 65, 67, 37, 14, 78,100, 124, 137",
    "82, 14, 37, 65, 67, 78, 100, 124, 137",
    "82, 185, 124, 122, 78, 67, 65, 37, 14",
    "82, 78, 67, 65, 37, 14, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "515. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 82, dùng thuật toán lập lịch SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "82, 65, 67, 78, 100, 124, 137,37,14",
    "82, 137, 124, 122, 78, 67, 65, 37, 14",
    "82, 185, 100, 124, 78, 67, 65, 14, 37",
    "82, 78, 67, 65, 37, 14, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "516. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 82, dùng thuật toán lập lịch C-SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "82, 37, 14, 65, 67, 78, 100, 124, 137",
    "82, 14, 37, 65, 67, 78, 100, 124, 185",
    "82, 137, 124, 122, 78, 67, 65, 37, 14",
    "82, 100, 124, 137, 14, 37, 65, 67, 78"
  ],
  "correctAnswer": 3
},
{
  "question": "517. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 79, dùng thuật toán lập lịch FCFS thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "79, 37, 14, 65, 67, 78, 122, 124, 185",
    "79, 65, 67, 78, 122, 124, 185,37,14",
    "79, 14, 37, 65, 67, 78, 100, 124, 137",
    "79, 78, 137, 37, 100, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "518. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 79, dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "79, 65, 67, 37, 14, 78,100, 124, 137",
    "79, 14, 37, 65, 67, 78, 100, 124, 137",
    "79, 185, 124, 122, 78, 67, 65, 37, 14",
    "79, 78, 67, 65, 37, 14, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "519. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 79, dùng thuật toán lập lịch SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "79, 65, 67, 78, 100, 124, 137,37,14",
    "79, 137, 124, 122, 78, 67, 65, 37, 14",
    "79, 185, 100, 124, 78, 67, 65, 14, 37",
    "79, 78, 67, 65, 37, 14, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "520. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 79, dùng thuật toán lập lịch C-SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "79, 37, 14, 65, 67, 78, 100, 124, 137",
    "79, 14, 37, 65, 67, 78, 100, 124, 185",
    "79, 137, 124, 122, 78, 67, 65, 37, 14",
    "79, 100, 124, 137, 14, 37, 65, 67, 78"
  ],
  "correctAnswer": 3
},
{
  "question": "521. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 20, dùng thuật toán lập lịch FCFS thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "20, 37, 14, 65, 67, 78, 122, 124, 185",
    "20, 65, 67, 78, 122, 124, 185,37,14",
    "20, 14, 37, 65, 67, 78, 100, 124, 137",
    "20, 78, 137, 37, 100, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "522. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 20, dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "20, 78, 67, 65, 37, 14, 100, 124, 137",
    "20, 65, 67, 37, 14, 78,100, 124, 137",
    "20, 185, 124, 122, 78, 67, 65, 37, 14",
    "20, 14, 37, 65, 67, 78, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "523. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 20, dùng thuật toán lập lịch SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "20, 65, 67, 78, 100, 124, 137,37,14",
    "20, 137, 124, 122, 78, 67, 65, 37, 14",
    "20, 185, 100, 124, 78, 67, 65, 14, 37",
    "20, 14, 37, 65, 67, 78, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "524. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 20, dùng thuật toán lập lịch C-SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "20, 37, 14, 65, 67, 78, 100, 124, 137",
    "20, 14, 37, 65, 67, 78, 100, 124, 185",
    "20, 137, 124, 122, 78, 67, 65, 37, 14",
    "20, 37, 65, 67, 78, 100, 124, 137, 14"
  ],
  "correctAnswer": 3
},
{
  "question": "525. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 120k theo giải thuật Worst Fit",
  "options": [
    "500k",
    "400k",
    "300k",
    "100k"
  ],
  "correctAnswer": 0
},
{
  "question": "526. Trong kĩ thuật quản lí phân vùng động, các vùng nhớ sau còn trống có kích thước như sau: 100k, 250k, 260k, 300k, 400k, 95k, 500k, 280k. Vùng nhớ nào sẽ được chọn để nạp chương trình có kích thước 130k theo giải thuật Worst Fit",
  "options": [
    "500k",
    "400k",
    "300k",
    "100k"
  ],
  "correctAnswer": 0
},
{
  "question": "527. Cần đọc các khối sau 78,185,37,122,14,124,65,67. Giả sử đầu đọc tại vị trí 49, dùng thuật toán lập lịch FCFS thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "49, 37, 14, 65, 67, 78, 122, 124, 185",
    "49, 65, 67, 78, 122, 124, 185,37,14",
    "49, 14, 37, 65, 67, 78, 122, 124, 185",
    "49, 78, 185, 37, 122, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "528. Cần đọc các khối sau 78,185,37,122,14,124,65,67. Giả sử đầu đọc tại vị trí 49, dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "49, 65, 67, 37, 14, 78,122, 124, 185",
    "49, 14, 37, 65, 67, 78, 122, 124, 185",
    "49, 185, 124, 122, 78, 67, 65, 37, 14",
    "49, 37, 14, 65, 67, 78, 122, 124, 185"
  ],
  "correctAnswer": 3
},
{
  "question": "529. Cần đọc các khối sau 78,185,37,122,14,124,65,67. Giả sử đầu đọc tại vị trí 49, dùng thuật toán lập lịch SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "49, 65, 67, 78, 122, 124, 185,37,14",
    "49, 185, 124, 122, 78, 67, 65, 37, 14",
    "49, 185, 122, 124, 78, 67, 65, 14, 37",
    "49, 37, 14, 65, 67, 78, 122, 124, 185"
  ],
  "correctAnswer": 1
},
{
  "question": "530. Cần đọc các khối sau 78,185,37,122,14,124,65,67. Giả sử đầu đọc tại vị trí 49, dùng thuật toán lập lịch C-SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "49, 37, 14, 65, 67, 78, 122, 124, 185",
    "49, 14, 37, 65, 67, 78, 122, 124, 185",
    "49, 185, 124, 122, 78, 67, 65, 37, 14",
    "49, 65, 67, 78, 122, 124, 185,14,37"
  ],
  "correctAnswer": 3
},
{
  "question": "531. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 81, dùng thuật toán lập lịch FCFS thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "81, 37, 14, 65, 67, 78, 122, 124, 185",
    "81, 65, 67, 78, 122, 124, 185, 37, 14",
    "81, 14, 37, 65, 67, 78, 100, 124, 137",
    "81, 78, 137, 37, 100, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "532. Cần đọc các khối sau 78,137,37,100,14,124,65,67. Giả sử đầu đọc tại vị trí 81, dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "81, 65, 67, 37, 14, 78, 100, 124, 137",
    "81, 14, 37, 65, 67, 78, 100, 124, 137",
    "81, 185, 124, 122, 78, 67, 65, 37, 14",
    "81, 78, 67, 65, 37, 14, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "533. Cần đọc các khối sau 98,183,37,122,14,124,65,67. Giả sử đầu đọc tại vị trí 53, dùng thuật toán lập lịch FCFS thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "53, 37, 14, 65, 67, 98, 122, 124, 183",
    "53, 65, 67, 98, 122, 124, 183, 37, 14",
    "53, 14, 37, 65, 67, 98, 122, 124, 183",
    "53, 98, 183, 37, 122, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "534. Cần đọc các khối sau 98,183,37,122,14,124,65,67. Giả sử đầu đọc tại vị trí 53, dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "53, 37, 14, 65, 67, 98, 122, 124, 183",
    "53, 65, 67, 37, 14, 98, 122, 124, 183",
    "53, 14, 37, 65, 67, 98, 122, 124, 183",
    "53, 183, 124, 122, 98, 67, 65, 37, 14"
  ],
  "correctAnswer": 3
},
{
  "question": "535. Cần đọc các khối sau 98,183,37,122,14,124,65,67. Giả sử đầu đọc tại vị trí 53, dùng thuật toán lập lịch C-SCAN thì đầu đọc sẽ lần lượt qua các khối có thứ tự nào sau đây",
  "options": [
    "53, 37, 14, 65, 67, 98, 122, 124, 183",
    "53, 65, 67, 98, 122, 124, 183, 14, 37",
    "53, 14, 37, 65, 67, 98, 122, 124, 183",
    "53, 183, 124, 122, 98, 67, 65, 37, 14"
  ],
  "correctAnswer": 3
},
{
  "question": "536. Các khối cần đọc 27,55,152,8,56,18,95,24,35,6. Đầu đọc hiện tại ở vị trí 83. Dùng thuật toán lập lịch SSTF thì đầu đọc sẽ lần lượt qua các khối nào sau đây",
  "options": [
    "83, 27, 55, 152, 8, 56, 18, 95, 24, 35, 6",
    "83, 95, 56, 55, 35, 27, 24, 18, 8, 6, 152",
    "83, 95, 152, 56, 55, 35, 27, 24, 18, 8, 6",
    "83, 95, 56, 55, 35, 27, 24, 18, 8, 152, 6"
  ],
  "correctAnswer": 3
},
{
  "question": "537. Các khối cần đọc 27,55,152,8,56,18,95,24,35,6. Đầu đọc hiện tại ở vị trí 83. Dùng thuật toán lập lịch C-SCAN thì đầu đọc sẽ lần lượt qua các khối nào sau đây",
  "options": [
    "83, 95, 152, 6, 8, 18, 24, 27, 35, 55, 56",
    "83, 95, 152, 6, 8, 18, 24, 27, 35, 56, 55",
    "83, 95, 56, 55, 35, 27, 24, 18, 8, 6",
    "83, 27, 55, 152, 8, 56, 18, 95, 24, 35, 6"
  ],
  "correctAnswer": 3
},
{
  "question": "538. Các khối cần đọc 98,183,37,122,14,124,65,67. Đầu đọc hiện tại ở vị trí 54. Dùng thuật toán lập lịch SSTF",
  "options": [
    "54, 37, 14, 65, 67, 98, 122, 124, 183",
    "54, 14, 37, 65, 67, 98, 122, 124, 183",
    "54, 183, 124, 122, 98, 67, 65, 37, 14",
    "54, 65, 67, 37, 14, 98, 122, 124, 183"
  ],
  "correctAnswer": 3
},
{
  "question": "539. Các khối cần đọc 98,183,37,122,14,124,65,67. Đầu đọc hiện tại ở vị trí 54. Dùng thuật toán lập lịch SCAN",
  "options": [
    "54, 65, 67, 98, 122, 124, 183, 37, 14",
    "54, 183, 124, 122, 98, 67, 65, 37, 14",
    "54, 183, 122, 124, 98, 67, 65, 14, 37",
    "54, 37, 14, 65, 67, 98, 122, 124, 183"
  ],
  "correctAnswer": 0
},
{
  "question": "540. Các khối cần đọc 98,183,37,122,14,124,65,67. Đầu đọc hiện tại ở vị trí 54. Dùng thuật toán lập lịch C-SCAN",
  "options": [
    "54, 37, 14, 65, 67, 98, 122, 124, 183",
    "54, 14, 37, 65, 67, 98, 122, 124, 183",
    "54, 183, 124, 122, 98, 67, 65, 37, 14",
    "54, 65, 67, 98, 122, 124, 183, 14, 37"
  ],
  "correctAnswer": 3
},
{
  "question": "541. Các khối cần đọc 98,183,37,122,14,124,65,67. Đầu đọc hiện tại ở vị trí 52. Dùng thuật toán lập lịch FCFS",
  "options": [
    "52, 37, 14, 65, 67, 98, 122, 124, 183",
    "52, 65, 67, 98, 122, 124, 183, 37, 14",
    "52, 14, 37, 65, 67, 98, 122, 124, 183",
    "52, 98, 183, 37, 122, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "542. Các khối cần đọc 98,183,37,122,14,124,65,67. Đầu đọc hiện tại ở vị trí 52. Dùng thuật toán lập lịch SSTF",
  "options": [
    "52, 37, 14, 65, 67, 98, 122, 124, 183",
    "52, 14, 37, 65, 67, 98, 122, 124, 183",
    "52, 183, 124, 122, 98, 67, 65, 37, 14",
    "52, 65, 67, 37, 14, 98, 122, 124, 183"
  ],
  "correctAnswer": 0
},
{
  "question": "543. Các khối cần đọc 98,183,37,122,14,124,65,67. Đầu đọc hiện tại ở vị trí 52. Dùng thuật toán lập lịch SCAN",
  "options": [
    "52, 65, 67, 98, 122, 124, 183, 37, 14",
    "52, 183, 124, 122, 98, 67, 65, 37, 14",
    "52, 183, 122, 124, 98, 67, 65, 14, 37",
    "52, 37, 14, 65, 67, 98, 122, 124, 183"
  ],
  "correctAnswer": 3
},
{
  "question": "544. Các khối cần đọc 98,183,37,122,14,124,65,67. Đầu đọc hiện tại ở vị trí 52. Dùng thuật toán lập lịch C-SCAN",
  "options": [
    "52, 37, 14, 65, 67, 98, 122, 124, 183",
    "52, 14, 37, 65, 67, 98, 122, 124, 183",
    "52, 183, 124, 122, 98, 67, 65, 37, 14",
    "52, 65, 67, 98, 122, 124, 183, 14, 37"
  ],
  "correctAnswer": 3
},
{
  "question": "545. Các khối cần đọc 78,185,37,122,14,124,65,67. Đầu đọc hiện tại ở vị trí 49. Dùng thuật toán lập lịch FCFS",
  "options": [
    "49, 37, 14, 65, 67, 78, 122, 124, 185",
    "49, 65, 67, 78, 122, 124, 185, 37, 14",
    "49, 14, 37, 65, 67, 78, 122, 124, 185",
    "49, 78, 185, 37, 122, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "546. Các khối cần đọc 78,185,37,122,14,124,65,67. Đầu đọc hiện tại ở vị trí 49. Dùng thuật toán lập lịch SSTF",
  "options": [
    "49, 65, 67, 37, 14, 78,122, 124, 185",
    "49, 14, 37, 65, 67, 78, 122, 124, 185",
    "49, 185, 124, 122, 78, 67, 65, 37, 14",
    "49, 37, 14, 65, 67, 78, 122, 124, 185"
  ],
  "correctAnswer": 3
},
{
  "question": "547. Các khối cần đọc 78,185,37,122,14,124,65,67. Đầu đọc hiện tại ở vị trí 49. Dùng thuật toán lập lịch SCAN",
  "options": [
    "49, 65, 67, 78, 122, 124, 185,37,14",
    "49, 185, 124, 122, 78, 67, 65, 37, 14",
    "49, 185, 122, 124, 78, 67, 65, 14, 37",
    "49, 37, 14, 65, 67, 78, 122, 124, 185"
  ],
  "correctAnswer": 3
},
{
  "question": "548. Các khối cần đọc 78,185,37,122,14,124,65,67. Đầu đọc hiện tại ở vị trí 49. Dùng thuật toán lập lịch C-SCAN",
  "options": [
    "49, 37, 14, 65, 67, 78, 122, 124, 185",
    "49, 14, 37, 65, 67, 78, 122, 124, 185",
    "49, 185, 124, 122, 78, 67, 65, 37, 14",
    "49, 65, 67, 78, 122, 124, 185,14,37"
  ],
  "correctAnswer": 3
},
{
  "question": "549. Các khối cần đọc 78,137,37,100,14,124,65,67. Đầu đọc hiện tại ở vị trí 35. Dùng thuật toán lập lịch FCFS",
  "options": [
    "35, 37, 14, 65, 67, 78, 122, 124, 185",
    "35, 65, 67, 78, 122, 124, 185,37,14",
    "35, 14, 37, 65, 67, 78, 100, 124, 137",
    "35, 78, 137, 37, 100, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "550. Các khối cần đọc 78,137,37,100,14,124,65,67. Đầu đọc hiện tại ở vị trí 35. Dùng thuật toán lập lịch SSTF",
  "options": [
    "35, 65, 67, 37, 14, 78,100, 124, 137",
    "35, 14, 37, 65, 67, 78, 100, 124, 137",
    "35, 185, 124, 122, 78, 67, 65, 37, 14",
    "35, 37, 14, 65, 67, 78, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "551. Các khối cần đọc 78,137,37,100,14,124,65,67. Đầu đọc hiện tại ở vị trí 35. Dùng thuật toán lập lịch SCAN",
  "options": [
    "35, 65, 67, 78, 100, 124, 137,37,14",
    "35, 137, 124, 122, 78, 67, 65, 37, 14",
    "35, 185, 100, 124, 78, 67, 65, 14, 37",
    "35, 14, 37, 65, 67, 78, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "552. Các khối cần đọc 78,137,37,100,14,124,65,67. Đầu đọc hiện tại ở vị trí 35. Dùng thuật toán lập lịch C-SCAN",
  "options": [
    "35, 37, 14, 65, 67, 78, 100, 124, 137",
    "35, 14, 37, 65, 67, 78, 100, 124, 185",
    "35, 137, 124, 122, 78, 67, 65, 37, 14",
    "35, 37, 65, 67, 78, 100, 124, 137, 14"
  ],
  "correctAnswer": 3
},
{
  "question": "553. Các khối cần đọc 78,137,37,100,14,124,65,67. Đầu đọc hiện tại ở vị trí 36. Dùng thuật toán lập lịch FCFS",
  "options": [
    "36, 37, 14, 65, 67, 78, 122, 124, 185",
    "36, 65, 67, 78, 122, 124, 185,37,14",
    "36, 14, 37, 65, 67, 78, 100, 124, 137",
    "36, 78, 137, 37, 100, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "554. Các khối cần đọc 78,137,37,100,14,124,65,67. Đầu đọc hiện tại ở vị trí 36. Dùng thuật toán lập lịch SSTF",
  "options": [
    "36, 65, 67, 37, 14, 78,100, 124, 137",
    "36, 14, 37, 65, 67, 78, 100, 124, 137",
    "36, 185, 124, 122, 78, 67, 65, 37, 14",
    "36, 37, 14, 65, 67, 78, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "555. Các khối cần đọc 78,137,37,100,14,124,65,67. Đầu đọc hiện tại ở vị trí 36. Dùng thuật toán lập lịch SCAN",
  "options": [
    "36, 65, 67, 78, 100, 124, 137,37,14",
    "36, 137, 124, 122, 78, 67, 65, 37, 14",
    "36, 185, 100, 124, 78, 67, 65, 14, 37",
    "36, 14, 37, 65, 67, 78, 100, 124, 137"
  ],
  "correctAnswer": 3
},
{
  "question": "556. Các khối cần đọc 78,137,37,100,14,124,65,67. Đầu đọc hiện tại ở vị trí 36. Dùng thuật toán lập lịch C-SCAN",
  "options": [
    "36, 37, 14, 65, 67, 78, 100, 124, 137",
    "36, 14, 37, 65, 67, 78, 100, 124, 185",
    "36, 137, 124, 122, 78, 67, 65, 37, 14",
    "36, 37, 65, 67, 78, 100, 124, 137, 14"
  ],
  "correctAnswer": 3
},
{
  "question": "557. Các khối cần đọc 78,137,37,100,14,124,65,67. Đầu đọc hiện tại ở vị trí 64. Dùng thuật toán lập lịch FCFS",
  "options": [
    "64, 37, 14, 65, 67, 78, 122, 124, 185",
    "64, 65, 67, 78, 122, 124, 185,37,14",
    "64, 14, 37, 65, 67, 78, 100, 124, 137",
    "64, 78, 137, 37, 100, 14, 124, 65, 67"
  ],
  "correctAnswer": 3
},
{
  "question": "558. Các khối cần đọc 78,137,37,100,14,124,65,67. Đầu đọc hiện tại ở vị trí 64. Dùng thuật toán lập lịch SSTF",
  "options": [
    "64, 65, 67, 37, 14, 78,100, 124, 137",
    "64, 14, 37, 65, 67, 78, 100, 124, 137",
    "64, 185, 124, 122, 78, 67, 65, 37, 14",
    "64, 65, 67, 78, 100, 124, 137, 37, 14"
  ],
  "correctAnswer": 3
},
{
  "question": "559. Các khối cần đọc 78,137,37,100,14,124,65,67. Đầu đọc hiện tại ở vị trí 64. Dùng thuật toán lập lịch SCAN",
  "options": [
    "64, 65, 67, 78, 100, 124, 137,37,14",
    "64, 137, 124, 122, 78, 67, 65, 37, 14",
    "64, 185, 100, 124, 78, 67, 65, 14, 37",
    "64, 37, 14, 65, 67, 78, 100, 124, 137"
  ],
  "correctAnswer": 0
},
{
  "question": "560. Các khối cần đọc 78,137,37,100,14,124,65,67. Đầu đọc hiện tại ở vị trí 64. Dùng thuật toán lập lịch C-SCAN",
  "options": [
    "64, 37, 14, 65, 67, 78, 100, 124, 137",
    "64, 14, 37, 65, 67, 78, 100, 124, 185",
    "64, 137, 124, 122, 78, 67, 65, 37, 14",
    "64, 65, 67, 78, 100, 124, 137, 14, 37"
  ],
  "correctAnswer": 3
},

];

// Mảng lưu thứ tự hiện tại
let currentQuestions = [...questions];

// Hàm tráo mảng (Fisher–Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Hàm load quiz
function loadQuiz(isShuffle = false) {
  const form = document.getElementById("quizForm");
  form.innerHTML = ""; // reset form

  if (isShuffle) shuffleArray(currentQuestions);
  else currentQuestions = [...questions];

  currentQuestions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";

    const questionHtml = document.createElement("p");
    questionHtml.textContent = `${q.question}`;

    const answerContainer = document.createElement("div");

    q.options.forEach((opt, i) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="q${index}" value="${i}"> ${opt}`;

      const input = label.querySelector("input");
      input.addEventListener("change", function () {
        const resultDiv = div.querySelector(".result");
        if (parseInt(this.value) === q.correctAnswer) {
          resultDiv.innerHTML = `✅ <span class="correct">Đúng</span>`;
        } else {
          resultDiv.innerHTML = `❌ <span class="wrong">Sai</span> – Đáp án đúng: <span class="correct">${q.options[q.correctAnswer]}</span>`;
        }
        div.querySelectorAll(`input[name="q${index}"]`).forEach(r => r.disabled = true);
      });

      answerContainer.appendChild(label);
      answerContainer.appendChild(document.createElement("br"));
    });

    const result = document.createElement("div");
    result.className = "result";

    div.appendChild(questionHtml);
    div.appendChild(answerContainer);
    div.appendChild(result);
    form.appendChild(div);
  });
}

// Gắn sự kiện cho nút tráo
document.getElementById("shuffleBtn").addEventListener("click", () => loadQuiz(true));

// Load lần đầu giữ thứ tự
loadQuiz(false);