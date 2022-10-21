window.addEventListener("load", () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  if (!username) {
    // Prompt for one if a username isn't found
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
  }

  document.querySelector("#loginUser").innerText =
    localStorage.getItem("username") + " がログイン";

  const containerEl = document.querySelector("#newsfeed");

  // This makes things appear
  function m1() {
    while (containerEl.firstChild) {
      containerEl.removeChild(containerEl.firstChild);
    }
    for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
      const post = bacefook.newsfeed[index];

      const friendEl = document.createElement("div");
      friendEl.className = "friend";
      friendEl.innerText = post.friend;

      // const postFeeling = document.createElement("div");
      // postFeeling.innerText = post.feeling;
      // postEl.append(postFeeling);

      const postEl = document.createElement("div");
      postEl.innerText = post.text;
      postEl.append(friendEl);

      const postFeeling = document.createElement("div");
      postFeeling.innerText = post.feeling;
      postEl.append(postFeeling);

      const postTime = moment(new Date()).diff(
        moment(post.timestamp),
        "second"
      );

      const postTimestamp = document.createElement("div");
      postTimestamp.innerText = postTime + " 秒前に投稿";
      postEl.append(postTimestamp);

      const postImage = document.createElement("img");
      postImage.src = post.image;
      postEl.append(postImage);

      containerEl.append(postEl);
    }
  }
  m1();
  window.globalFunction = {};
  window.globalFunction.m1 = m1;

  const textarea = document.querySelector("#textarea");
  const button = document.querySelector("#button");

  button.addEventListener("click", () => {
    console.log(textarea);

    const mynewfeed = {
      friend: localStorage.getItem("username"),
      text: textarea.value,
      feeling: "高校生１人",
      image: "https://user-images.githubusercontent.com/105757894/177533085-e1e2ece4-c9b9-4a1a-aae0-695a7cf27a8c.jpg",
      timestamp: new Date(),
    };
    bacefook.newsfeed.push(mynewfeed);

    console.log(bacefook.newsfeed);
    m1();
  });

  console.log(form);
});
