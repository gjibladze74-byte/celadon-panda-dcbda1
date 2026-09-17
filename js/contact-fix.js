/* Anatali Georgia — AI assistant contact answer + KA / EN / RU */
(function () {
  var ANSWERS = {
    ka: 'შეგიძლიათ დაუკავშირდეთ კომპანიის დირექტორს ვაცაპზე ან ნომერზე: 598-59-59-16.',
    en: 'You can contact the company director on WhatsApp or by phone at: 598-59-59-16.',
    ru: 'Вы можете связаться с директором компании через WhatsApp или по номеру: 598-59-59-16.'
  };

  function getLang() {
    var lang = (document.documentElement.getAttribute('lang') || 'ka').toLowerCase().split('-')[0];
    if (!ANSWERS[lang]) lang = 'ka';
    return lang;
  }

  function replaceGreeting() {
    var answer = ANSWERS[getLang()];
    document.querySelectorAll('.anatali-msg.bot').forEach(function (msg) {
      var text = (msg.textContent || '').trim();
      if (
        text.indexOf('მოგესალმებით! შემიძლია დაგეხმაროთ') === 0 ||
        text.indexOf('მოგესალმებით, დაუკავშირდით') === 0 ||
        text.indexOf('შეგიძლიათ დაუკავშირდეთ კომპანიის დირექტორს') === 0 ||
        text.indexOf('You can contact the company director') === 0 ||
        text.indexOf('Вы можете связаться с директором компании') === 0
      ) {
        msg.textContent = answer;
      }
    });
  }

  function start() {
    replaceGreeting();
    if (document.body) {
      var observer = new MutationObserver(replaceGreeting);
      observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    }
    setInterval(replaceGreeting, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
