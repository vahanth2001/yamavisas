document.addEventListener("DOMContentLoaded", function () {

  const banner = document.getElementById("cookieBanner");
  const acceptButton = document.getElementById("acceptCookies");
  const rejectButton = document.getElementById("rejectCookies");

  const changeButton =
    document.getElementById("changeCookieSettings");

  const footerChangeButton =
    document.getElementById("footerCookieSettings");


  /*
   * Check whether the visitor has already
   * selected a cookie preference.
   */

  const cookiePreference =
    localStorage.getItem("yamaCookieConsent");


  if (!cookiePreference && banner) {

    banner.classList.add("cookie-visible");

  }


  /*
   * ACCEPT ALL
   */

  if (acceptButton) {

    acceptButton.addEventListener("click", function () {

      localStorage.setItem(
        "yamaCookieConsent",
        "accepted"
      );

      banner.classList.remove("cookie-visible");


      /*
       * OPTIONAL ANALYTICS CAN BE
       * ACTIVATED HERE IN THE FUTURE.
       *
       * Example:
       *
       * loadAnalytics();
       */

    });

  }


  /*
   * REJECT NON-ESSENTIAL
   */

  if (rejectButton) {

    rejectButton.addEventListener("click", function () {

      localStorage.setItem(
        "yamaCookieConsent",
        "rejected"
      );

      banner.classList.remove("cookie-visible");

    });

  }


  /*
   * REOPEN COOKIE SETTINGS
   */

  function openCookieSettings() {

    if (banner) {

      banner.classList.add("cookie-visible");

    }

  }


  if (changeButton) {

    changeButton.addEventListener(
      "click",
      openCookieSettings
    );

  }


  if (footerChangeButton) {

    footerChangeButton.addEventListener(
      "click",
      openCookieSettings
    );

  }

});