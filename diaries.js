// 每新增一篇日記，就在陣列最前面加入一個 {...}；首頁會自動按日期排序
window.DIARIES = [
  {
    id: "2026-10-26",
    date: "2026-10-26",
    image: "images/2026-10-26.png",
    // image: "",
    imageAlt: "October 26 diary illustration",
    paragraphs: [
      "At noon, I grabbed some pull-apart bread with a layer of cheese sauce in the middle, paired it with BelGioioso Mascarpone, and ate the whole thing with absolutely no restraint.",
      "As I was tossing the packaging, I happened to glance at the dates…only to realize that both had expired on the exact same day: October 17. What a coincidence.",
      "Later, I went to get some groceries. I hesitated between chocolate milk and a lactose-free option (was it Lactaid Calcium Enriched? I think so), but ended up choosing the chocolate milk. Great choice, honestly.",
      "When I headed out on my bike, I noticed that the right handlebar had gotten sticky and smelly from being out in the sun for so long. Someone also kindly pointed out that my rear tire needed some air.",
      "That got me thinking about getting an electric scooter again…but I guess I'll just play it by ear for now."
    ]
  }
];

// 新日記範例：複製下方格式，貼到上方陣列第一篇前面（記得兩篇之間用逗號分隔）
// {
//   id: "2026-10-28",
//   date: "2026-10-28",
//   title: "今天的標題",
//   excerpt: "首頁顯示的短摘要",
//   image: "images/2026-10-28.jpg",
//   paragraphs: ["第一段日記", "第二段日記"]
// },
