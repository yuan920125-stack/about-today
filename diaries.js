// 每新增一篇日記，就在陣列最前面加入一個 {...}；首頁會自動按日期排序
window.DIARIES = [
  {
    id: "2026-11-2",
    date: "2026-11-02",
    title: "frost's descent",
    image: "images/2026-11-2.png",
    paragraphs: [
      "At the bus stop at Stevens Creek and Bandley, I met a Taiwanese student from De Anza who grew up in Shanghai. He was taking Bus 51, but for some reason, he had walked all the way over to that stop.",
      "Red leaves are everywhere these days. One tree is now covered in diya-shaped LED lights for Diwali. Another in someone's yard that looked like a pomelo tree, absolutely loaded with fruit.",
      "Daylight saving time quietly came to an end, and we're back to standard time. The house I used to live in is now fenced off, probably getting ready for demolition or renovation. Looking forward to seeing the new design.",
      "I always find myself looking up whenever a flock of starlings flies by. As the sky gets dim, the lights draw my attention to the plane up ahead, which reminds me of the tragedy in Florida. I can't help but hope everyone makes it home safely.",
      "Still not sure whether to line up for some bookstore merch or go on a picnic this Saturday. I should also check out the flea market. Speaking of which, looks like @samlinmusic was playing pickleball at Memorial Park yesterday."
    ]
  },
  {
    id: "2026-10-26",
    date: "2026-10-26",
    title: "cold dew",
    image: "images/2026-10-26.png",
    // image: "",
    imageAlt: "October 26 diary illustration",
    paragraphs: [
      "At noon, I grabbed some pull-apart bread with a layer of cheese sauce in the middle, paired it with BelGioioso Mascarpone, and ate the whole thing without considering fat content.",
      "As I was tossing the packaging, I happened to glance at the dates…only to realize that both had expired on the exact same day: October 17. What a coincidence.",
      "Later, I went to get some groceries. I hesitated between chocolate milk and a lactose-free option (was it Lactaid Calcium Enriched? I think so), but ended up choosing the chocolate milk. Nice choice, honestly.",
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
