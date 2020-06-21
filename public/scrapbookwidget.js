function displayScrapbookUsername(username) {
  var proxyUrl = "https://cors-anywhere.herokuapp.com/";
  var targetUrl = "https://scrapbook.hackclub.com/api/users/" + username;
  fetch(proxyUrl + targetUrl)
    .then(resp => resp.json())
    .then(function(data) {
      console.log(data["profile"]["streakCount"]);
      var d1 = document.getElementsByTagName("BODY")[0];
      d1.insertAdjacentHTML(
        "beforeend",
        '<div class="scrapbookButtonWrapper" style="position:fixed;bottom:20px;right:20px;"> <button class="scrapbookButton" onclick ="window.open(\'https://scrapbook.hackclub.com/'+username+'\')" style="border-radius: 50%; height: 60px; width: 60px; font-size: 30px; background-color: #1f2d3d;">🔥</button><style>.scrapbookButton:hover:after {content: "' +
          data["profile"]["streakCount"] +
          '";text-indent: 0; display: block; cursor: pointer; line-height: initial; margin-bottom: 0.67em;} .scrapbookButton:hover { padding-top: 10px; text-indent: -9999px; line-height: 0; color: #ff8c37; font-weight: bold;} .scrapbookButton:focus{ outline: none; box-shadow: 0 0 10px rgba(51, 142, 218, 1), 0 0 10px rgba(51, 142, 218,1);}</style></div>'
      );
    })

    .catch(function(error) {
      console.log(error);
    });
}
