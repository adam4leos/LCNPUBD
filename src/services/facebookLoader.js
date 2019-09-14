export default function facebookLoader() {
  return new Promise(resolve => {
    if (window.FB) return resolve(window.FB);

    // Set up facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '605839246257218',
        xfbml: false,
        version: 'v4.0',
      });

      resolve(window.FB);
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  });
}
