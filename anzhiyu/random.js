var posts=["2025/02/21/hello-world/","2025/02/21/luyuejian-hello/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };