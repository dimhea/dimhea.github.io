window.fbAsyncInit = function() {
  FB.init({
    appId: "101594987382154",
    autoLogAppEvents: true,
    xfbml: true,
    version: "v3.0"
  });

  FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    console.log(response.status)
    var uid = response.authResponse.userID;
    var accessToken = response.authResponse.accessToken;
  } else if (response.status === 'not_authorized') {

  } else {
  }
 });
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
