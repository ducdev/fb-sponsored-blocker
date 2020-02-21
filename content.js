window.addEventListener('scroll', function () {
  var sponsoredPosts = document.querySelectorAll("div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > span > a");
  sponsoredPosts.forEach((sponsoredPost) => {
    if (sponsoredPost && sponsoredPost.innerText === 'Sponsored') {
      var ancestor = sponsoredPost.parentNode;
      for (var i = 0; i < 13; i++) {
        ancestor = ancestor.parentNode
      }
      // ancestor.remove()
      ancestor.style.opacity = '0.1'
    }
  })
})