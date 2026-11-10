// 每新增一篇日記，就在陣列最前面加入一個 {...}；首頁會自動按日期排序
window.DIARIES = [
  {
    id: "2026-11-9",
    date: "2026-11-09",
    title: "beginning of winter",
    image: "images/2026-11-9.png",
    paragraphs: [
      "Went to pick up groceries again. This time there was Silk coconut, half-and-half in a glass bottle, and eggnog. I was worried the raw eggs might upset my stomach, so I played it safe and only took two cups of yogurt. Happened to let Donald know I lived within two miles today",
      "Riding my bicycle has somehow become harder than it was a year ago. I called the repair shop inside the nearby Exxon gas station to check if they could inflate my tires. Arrived at Bluetech after 2 pm, and the guy there was really nice. Turns out the valve (chi-tsui) kept slipping inside the tire because it was so flat. He asked about the food nearby, and I mentioned Jenny's Kitchen, a Chinese restaurant next door, only to find out it was closed on Mondays. I threw out 7-Eleven, but he said he wasn't that hungry. Wasn't very familiar with the area either, so I eventually brought up a teashop (Cozy Tea Loft), which has popcorn chicken.",
      "After leaving, I realized I should have offered him some oranges. I took them home for my roommate instead. Hope the repair guy found something good to eat.",
      "It is the first day of the lunar month. Had a Safeway sandwich afterward: two pieces of some kind of cheese and ham, and five whole slices of turkey breast. Quite satisfying.",
      "The bicycle feels plump again. Thought I could head out to World Market around 4 pm for the scavenger hunt, but decided that a thorough shower and a load of laundry sounded much better. Officially entering couch potato mode. Bass Pro Shops also have a Santa photo event, though it's a lot farther away in San Jose."
    ]
  },
  {
    id: "2026-11-2",
    date: "2026-11-02",
    title: "frost's descent",
    image: "images/2026-11-2.png",
    paragraphs: [
      "At the bus stop at Stevens Creek and Bandley, I met a Taiwanese student from De Anza who grew up in Shanghai. He was taking Bus 51, but for some reason, he had walked all the way over to that stop.",
      "Red leaves are everywhere these days. One tree is now covered in diya-shaped LED lights for Diwali. Another in someone's yard that looked like a pomelo tree, absolutely loaded with fruit.",
      "Daylight saving time quietly came to an end, and we're back to standard time. The house I used to live in is now fenced off, probably getting ready for demolition or renovation. Looking forward to seeing the new design.",
      "I always find myself looking up whenever a flock of starlings flies by. As the sky gets dim, the lights draw my attention to the plane up ahead, which reminds me of the tragedy in Florida. Can't help but hope everyone makes it home safely.",
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
