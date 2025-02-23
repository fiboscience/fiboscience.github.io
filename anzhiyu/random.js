var posts=["2025/02/21/cv-luyuejian/","2025/02/23/basin/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };