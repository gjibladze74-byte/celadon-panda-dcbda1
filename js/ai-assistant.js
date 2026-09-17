/* Anatali Georgia — multilingual website assistant */
(function () {
  'use strict';
  if (window.__anataliAssistantLoaded) return;
  window.__anataliAssistantLoaded = true;

  var LANG = {
    ka: {
      title:'ანათალი ასისტენტი', welcome:'გამარჯობა! როგორ დაგეხმაროთ?', placeholder:'დაწერეთ კითხვა...', send:'გაგზავნა', close:'დახურვა',
      buttons:['პროდუქცია','B2B შეკვეთა','მიწოდება','კონტაქტი'],
      product:'ანათალი ამზადებს მაღალი ხარისხის ხის მასალას და სპეციალური ზომის ხის ნაწარმს. შეგიძლიათ მოითხოვოთ პროდუქტი თქვენი ბიზნესის საჭიროების მიხედვით.',
      b2b:'B2B შეკვეთისთვის შეგიძლიათ მოგვწეროთ მოთხოვნა კონტაქტის გვერდიდან. მოგვაწოდეთ სასურველი პროდუქტი, რაოდენობა, ზომა და ვადა.',
      delivery:'მიწოდების პირობები განისაზღვრება შეკვეთისა და მოცულობის მიხედვით. დეტალებისთვის დაგვიკავშირდით.',
      contact:'შეგიძლიათ დაუკავშირდეთ კომპანიის დირექტორს ვაცაპზე ან ნომერზე: 598-59-59-16.',
      price:'ფასი დამოკიდებულია მასალის ტიპზე, ზომაზე, რაოდენობასა და შეკვეთის მოცულობაზე. ზუსტი შეთავაზებისთვის გამოგვიგზავნეთ მოთხოვნა.',
      fallback:'დამატებითი ინფორმაციისთვის დაგვიკავშირდით ნომერზე 598-59-59-16 ან WhatsApp-ზე.',
      open:'AI ასისტენტი'
    },
    en: {
      title:'Anatali Assistant', welcome:'Hello! How can I help you?', placeholder:'Type your question...', send:'Send', close:'Close',
      buttons:['Products','B2B order','Delivery','Contact'],
      product:'Anatali produces high-quality wood materials and custom-size wooden products. You can request products tailored to your business needs.',
      b2b:'For a B2B order, send us your request from the contact page. Include the product, quantity, dimensions and required date.',
      delivery:'Delivery terms depend on the order and volume. Contact us for details.',
      contact:'You can contact the company director on WhatsApp or by phone: 598-59-59-16.',
      price:'Pricing depends on material type, dimensions, quantity and order volume. Send us your request for an exact offer.',
      fallback:'For more information, contact us at 598-59-59-16 or via WhatsApp.',
      open:'AI Assistant'
    },
    ru: {
      title:'Ассистент Anatali', welcome:'Здравствуйте! Чем я могу помочь?', placeholder:'Введите вопрос...', send:'Отправить', close:'Закрыть',
      buttons:['Продукция','B2B заказ','Доставка','Контакты'],
      product:'Anatali производит качественные деревянные материалы и изделия по индивидуальным размерам. Можно заказать продукцию под потребности вашего бизнеса.',
      b2b:'Для B2B заказа отправьте запрос со страницы контактов. Укажите товар, количество, размеры и необходимые сроки.',
      delivery:'Условия доставки зависят от заказа и объёма. Свяжитесь с нами для уточнения деталей.',
      contact:'Вы можете связаться с директором компании по WhatsApp или телефону: 598-59-59-16.',
      price:'Цена зависит от типа материала, размеров, количества и объёма заказа. Отправьте запрос для получения точного предложения.',
      fallback:'Для дополнительной информации свяжитесь с нами по телефону 598-59-59-16 или через WhatsApp.',
      open:'AI Ассистент'
    }
  };

  function selectedLanguage() {
    var saved = localStorage.getItem('anatali-lang');
    return LANG[saved] ? saved : ((document.documentElement.lang || 'ka').slice(0,2) in LANG ? (document.documentElement.lang || 'ka').slice(0,2) : 'ka');
  }
  function detect(text, fallback) {
    if (/[Ⴀ-ჿ]/.test(text)) return 'ka';
    if (/[Ѐ-ӿ]/.test(text)) return 'ru';
    if (/\b(the|what|where|how|price|product|contact|delivery|order|hello|hi|wood)\b/i.test(text)) return 'en';
    return fallback;
  }
  function answer(text, lang) {
    var s = text.toLowerCase();
    var d = LANG[lang];
    if (/whatsapp|ვაცაპ|ვოთსაპ|телефон|номер|contact|კონტაქტ|დირექტ|director|директор/.test(s)) return d.contact;
    if (/product|პროდუქ|მასალ|ხე|wood|товар|продук/.test(s)) return d.product;
    if (/b2b|order|შეკვეთ|заказ|корпорат/.test(s)) return d.b2b;
    if (/deliver|მიწოდ|достав/.test(s)) return d.delivery;
    if (/price|ფას|ღირ|стоим|цена/.test(s)) return d.price;
    if (/hello|hi|გამარჯ|привет|здрав/.test(s)) return d.welcome;
    return d.fallback;
  }

  function injectStyle() {
    if (document.getElementById('anatali-assistant-style')) return;
    var st = document.createElement('style'); st.id='anatali-assistant-style';
    st.textContent = '.anatali-ai-launch{position:fixed;right:20px;bottom:92px;z-index:2147483000;border:0;border-radius:999px;padding:13px 17px;background:#1f1711;color:#fff;box-shadow:0 10px 30px rgba(0,0,0,.28);font:600 14px/1.1 Arial,sans-serif;cursor:pointer}.anatali-ai-launch:hover{transform:translateY(-1px)}.anatali-ai-box{position:fixed;right:20px;bottom:150px;width:350px;max-width:calc(100vw - 24px);height:500px;max-height:calc(100vh - 175px);z-index:2147482999;background:#fff;border:1px solid rgba(139,90,43,.25);border-radius:18px;box-shadow:0 18px 55px rgba(0,0,0,.3);display:none;overflow:hidden;font-family:Arial,sans-serif}.anatali-ai-box.open{display:flex;flex-direction:column}.anatali-ai-head{padding:15px 16px;background:#1f1711;color:#fff;display:flex;align-items:center;justify-content:space-between}.anatali-ai-head strong{font-size:15px}.anatali-ai-close{border:0;background:transparent;color:#fff;font-size:22px;cursor:pointer;padding:0 2px}.anatali-ai-messages{flex:1;overflow:auto;padding:15px;background:#faf8f5}.anatali-ai-msg{max-width:85%;padding:10px 12px;border-radius:13px;margin:0 0 10px;font-size:14px;line-height:1.45;white-space:pre-wrap}.anatali-ai-msg.bot{background:#fff;border:1px solid #eadfD3;color:#2b2119}.anatali-ai-msg.user{margin-left:auto;background:#8b5a2b;color:#fff}.anatali-ai-quick{display:flex;gap:7px;overflow:auto;padding:9px 11px;border-top:1px solid #eee;background:#fff}.anatali-ai-quick button{white-space:nowrap;border:1px solid #d7c7b7;background:#fff;border-radius:999px;padding:7px 10px;font-size:12px;cursor:pointer}.anatali-ai-form{display:flex;gap:7px;padding:10px;border-top:1px solid #eee;background:#fff}.anatali-ai-form input{min-width:0;flex:1;border:1px solid #d7c7b7;border-radius:10px;padding:10px;font-size:14px;outline:none}.anatali-ai-form button{border:0;border-radius:10px;padding:10px 12px;background:#8b5a2b;color:#fff;font-weight:600;cursor:pointer}@media(max-width:600px){.anatali-ai-launch{right:12px;bottom:82px}.anatali-ai-box{right:12px;bottom:140px;width:auto;height:470px;max-height:calc(100vh - 155px)}}';
    document.head.appendChild(st);
  }

  function init() {
    injectStyle();
    document.querySelectorAll('.anatali-ai-box,.anatali-ai-launch').forEach(function(e){e.remove();});
    var lang = selectedLanguage(), d = LANG[lang];
    var launch=document.createElement('button'); launch.type='button'; launch.className='anatali-ai-launch'; launch.textContent='✦ '+d.open; launch.setAttribute('aria-label',d.open);
    var box=document.createElement('section'); box.className='anatali-ai-box'; box.setAttribute('aria-label',d.title);
    box.innerHTML='<div class="anatali-ai-head"><strong></strong><button type="button" class="anatali-ai-close" aria-label=""></button></div><div class="anatali-ai-messages"></div><div class="anatali-ai-quick"></div><form class="anatali-ai-form"><input type="text" autocomplete="off"><button type="submit"></button></form>';
    document.body.appendChild(box); document.body.appendChild(launch);
    var strong=box.querySelector('strong'), close=box.querySelector('.anatali-ai-close'), messages=box.querySelector('.anatali-ai-messages'), quick=box.querySelector('.anatali-ai-quick'), input=box.querySelector('input'), send=box.querySelector('.anatali-ai-form button');
    strong.textContent=d.title; close.textContent='×'; close.setAttribute('aria-label',d.close); input.placeholder=d.placeholder; send.textContent=d.send;
    function add(text,who){var el=document.createElement('div');el.className='anatali-ai-msg '+who;el.textContent=text;messages.appendChild(el);messages.scrollTop=messages.scrollHeight;}
    add(d.welcome,'bot');
    d.buttons.forEach(function(label,i){var b=document.createElement('button');b.type='button';b.textContent=label;b.addEventListener('click',function(){var map=['product','b2b','delivery','contact'];add(label,'user');add(d[map[i]],'bot');});quick.appendChild(b);});
    launch.addEventListener('click',function(){box.classList.add('open');launch.style.display='none';input.focus();});
    close.addEventListener('click',function(){box.classList.remove('open');launch.style.display='';});
    box.querySelector('form').addEventListener('submit',function(e){e.preventDefault();var text=input.value.trim();if(!text)return;var replyLang=detect(text,selectedLanguage());add(text,'user');add(answer(text,replyLang),'bot');input.value='';});
    window.addEventListener('anatali-language-changed',function(){init();});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
