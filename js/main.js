/* Anatali Georgia — main.js */
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    var toggle=document.querySelector('.menu-toggle'), links=document.querySelector('.nav-links');
    if(toggle&&links){toggle.addEventListener('click',function(){var open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false');document.body.style.overflow=open?'hidden':'';});links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){links.classList.remove('open');toggle.setAttribute('aria-expanded','false');document.body.style.overflow='';});});}
    var reveals=document.querySelectorAll('.reveal');
    if('IntersectionObserver' in window&&reveals.length){var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.15});reveals.forEach(function(e){io.observe(e);});}else reveals.forEach(function(e){e.classList.add('in');});
    var header=document.querySelector('.site-header');if(header)window.addEventListener('scroll',function(){header.style.boxShadow=window.scrollY>12?'0 8px 24px rgba(0,0,0,.25)':'none';},{passive:true});
    var pills=document.querySelectorAll('.filter-pill'),cards=document.querySelectorAll('[data-category]');if(pills.length&&cards.length)pills.forEach(function(p){p.addEventListener('click',function(){pills.forEach(function(x){x.classList.remove('active');});p.classList.add('active');var t=p.getAttribute('data-filter');cards.forEach(function(c){c.style.display=(t==='all'||c.getAttribute('data-category')===t)?'':'none';});});});
    var form=document.querySelector('#contact-form'),success=document.querySelector('.form-success');if(form)form.addEventListener('submit',function(e){if(form.getAttribute('data-native-submit')==='true')return;e.preventDefault();fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form)).toString()}).then(function(){form.reset();if(success)success.classList.add('show');form.style.display='none';}).catch(function(){form.setAttribute('data-native-submit','true');form.submit();});});
    var old=/\+995\s*500\s*00\s*00\s*00|500\s*00\s*00\s*00/g;document.querySelectorAll('a[href^="tel:"]').forEach(function(a){a.textContent='598 59 59 16';a.setAttribute('href','tel:+995598595916');});document.querySelectorAll('*').forEach(function(el){if(el.children.length===0&&old.test(el.textContent||''))el.textContent=el.textContent.replace(old,'598 59 59 16');old.lastIndex=0;});document.querySelectorAll('[data-year]').forEach(function(el){el.textContent='2026';});
    if(!document.querySelector('.whatsapp-float')){var wa=document.createElement('a');wa.className='whatsapp-float';wa.href='https://wa.me/995598595916';wa.target='_blank';wa.rel='noopener noreferrer';wa.innerHTML='<span class="whatsapp-icon">◉</span><span class="whatsapp-label">WhatsApp</span>';document.body.appendChild(wa);}
    ['ხის სანთლის სადგამები','კედლის ხის პანელები','სამზარეულოს ხის ნაკრები','ბრენდირებული საჩუქრის ნაკრები','ივენთის სუვენირები','საჩუქრის ყუთები'].forEach(function(name){document.querySelectorAll('[data-category],.product-card').forEach(function(card){if((card.textContent||'').indexOf(name)!==-1)card.remove();});});
    /* Load the new assistant on every page, alongside WhatsApp. */
    if(!document.querySelector('script[data-anatali-assistant]')){
      var ai=document.createElement('script');
      ai.src='js/ai-assistant.js?v=20260917-1';
      ai.async=false;
      ai.setAttribute('data-anatali-assistant','true');
      document.body.appendChild(ai);
    }
  });
})();
