module.exports = {
  title: "投票システム",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "format-detection", content: "telephone=no" },
    { hid: "description", name: "description", content: "投票システム" }
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  ],
  script: [
    {
      src:
      "//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js",
      defer: ""
    },
    {
      src:
        "//www.gstatic.com/firebasejs/4.6.0/firebase.js"
    }
  ],
  // innerHTML内の文字がエスケープされるのを防ぐ
  __dangerouslyDisableSanitizers: ['script']
};
