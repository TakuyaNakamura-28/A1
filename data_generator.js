/*
  This generates our fake newsfeed information.

  There is no need to touch the code in here until you get to basic requirement #4,
  but please check it out to familiarize yourself beforehand.
*/
(() => {
  window.bacefook = {};
  bacefook.newsfeed = [];
  bacefook.friends = {};
  bacefook.friendNames = ["たまろー", "かに", "えりこ", "つばさ", "まさたか"];
  bacefook.friendNames.forEach((name) => {
    bacefook.friends[name] = [];
  });

  const getRandomElement = (array) => {
    // Given an array, returns a random element
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const starters = [
    "豊田市",
    "名古屋市",
    "日進市",
    "岡崎市",
    "碧南市",
    "瀬戸市",
    "一宮市",
    "稲沢市",
    "長久手市",
    "豊橋市",
  ];
  const verbs = [
    "から",
    // "ate",
    // "drank",
    // "threw up in",
    // "refactored",
    // "iterated on",
    // "thought about",
    // "threw up on",
    // "saw",
    // "walked to",
    // "got lost in",
    // "walked into",
    // "googled",
    // "drove",
    // "ran to",
    // "worked on",
    // "slept on",
    // "slept in",
  ];
  const fillers = [
    "豊田市",
    "名古屋市",
    "日進市",
    "岡崎市",
    "碧南市",
    "瀬戸市",
    "一宮市",
    "稲沢市",
    "長久手市",
    "豊橋市",
    // "my",
    // "your",
    // "his",
    // "her",
    // "my favorite",
    // "a beautiful",
    // "a delicious",
    // "that",
    // "this",
    // "an interesting",
    // "",
    // "the best",
    // "the greatest",
    // "a delightful",
  ];
  const nouns = [
    "まで乗せてほしい",
    "まで行くよ"
    // "DIG",
    // "restaurant",
    // "omakase",
    // "hitomedia",
    // "family mart",
    // "private jet",
    // "mama",
    // "lawsons",
    // "conbini",
    // "whisky",
    // "onigiri",
    // "car",
    // "food",
    // "house",
    // "toilet",
    // "tokyo",
    // "city",
    // "iphone",
    // "google",
    // "unicorn",
    // "mess",
    // "pirate ship",
    // "ninja",
  ];
  const hashtags = [
    "＃豊田市",
    "＃名古屋市",
    "＃日進市",
    "＃岡崎市",
    "＃碧南市",
    "＃瀬戸市",
    "＃一宮市",
    "＃稲沢市",
    "＃長久手市",
    "＃豊橋市",
    // "#techlife",
    // "#toyota",
    // "#tokyo",
    // "#japan",
    // "#interesting",
    // "#til",
    // "#lol",
    // "#tgifriday",
    // "#hashtags",
    // "#japanlife",
    // "#oops",
  ];
  const feelings = [
    "小学生１人",
    "小学生２人",
    "小学生３人",
    "小学生１人・中学生１人",
    "小学生１人・中学生２人",
    "小学生２人・中学生１人",
    "小学生２人・中学生２人",
    "高校生１人",
    "高校生２人",
  ];
  const images = [
    "https://www.24028.jp/assets/images/product/kidswear/mv_img_sp.jpg",
    "https://newsatcl-pctr.c.yimg.jp/t/iwiz-yn/rpr/suetomikaori/00281367/title-1646351527610.jpeg?pri=l&w=800&h=450&order=c2r&cx=0&cy=0&cw=1920&ch=1080&exp=10800",
    "https://solasto-hcareer.com/wp-content/uploads/sites/3/images/re_media_17398_1.jpg",
    "https://images-juku-contents.mamastar.jp/wp-content/uploads/41_1.jpg",
    "https://number.ismcdn.jp/mwimgs/4/c/1500wm/img_4c49397b713784bc018838f942bbb71c506616.jpg",
    "https://www.shinko-keirin.co.jp/shinko/wp/wp-content/uploads/2021/03/20210101-MAIN.jpg",
    "https://benesse.jp/kosodate/202009/img/KJ_20200926_09.jpg",
    "https://static.amanaimages.com/imgroom/rf_preview640/10626/10626002813.jpg",
    "https://manabi.benesse.ne.jp/lab/parent/life/__icsFiles/afieldfile/2020/09/06/life003_image.jpg",
    "https://www.green-zemi.co.jp/wp-content/uploads/junior_img001-e1516794693710.jpg",
    "https://as1.ftcdn.net/v2/jpg/03/73/92/70/1000_F_373927017_R60grur77oe0LdISbncKb8XU0RrocDtu.jpg",
  ];

  const generateRandomText = () => {
    return [
      getRandomElement(starters),
      getRandomElement(verbs),
      getRandomElement(fillers),
      getRandomElement(nouns),
      getRandomElement(hashtags),
    ].join(" ");
  };

  const generatePostObj = (timeOffset) => {
    // if an offset is provided, make the timestamp that much older, otherwise just use the current time
    const timestamp = timeOffset
      ? new Date(new Date().getTime() - timeOffset)
      : new Date();

    return {
      friend: getRandomElement(bacefook.friendNames),
      text: generateRandomText(),
      feeling: getRandomElement(feelings),
      image: getRandomElement(images),
      timestamp,
    };
  };

  const addPost = (obj) => {
    const friend = obj.friend;
    bacefook.friends[friend].push(obj);
    bacefook.newsfeed.push(obj);
  };

  const createPost = (timeOffset) => {
    const newPost = generatePostObj(timeOffset);
    addPost(newPost);
  };

  for (let i = 0; i < 10; i++) {
    // make the starting posts look like they were posted over the course of the past day
    const timeOffset = (2 * (10 - i) + Math.random()) * 60 * 60 * 1000;
    createPost(timeOffset);
  }

  const scheduler = () => {
    createPost(null);
    setTimeout(scheduler, (3 + Math.random() * 5) * 1000); // generate a new post every 3 to 8 seconds

    window.globalFunction.m1();
  };

  scheduler();
})();
