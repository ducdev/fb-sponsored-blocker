window.addEventListener('scroll', function () {
  var sponsoredPosts = document.querySelectorAll("div > div > div > div > div > div > div > div > div > div > div > div > div > div > * > div > div > div > div > div > div > div > div > div > div > div > div > span > a > span");
  sponsoredPosts.forEach((sponsoredPost) => {
    if (sponsoredPost) {
      var ancestor = sponsoredPost.parentNode;
      for (var i = 0; i < 14; i++) {
        ancestor = ancestor.parentNode
      }
      // ancestor.remove()
      ancestor.style.opacity = '0.1'
    }
  })
})