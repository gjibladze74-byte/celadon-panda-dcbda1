# ანათალი Georgia — ვებსაიტი

სრულფასოვანი, სტატიკური ვებსაიტი (HTML5 / CSS3 / Vanilla JavaScript), მზადაა Netlify-ზე Drag & Drop განთავსებისთვის.

## 📁 რა შედის პროექტში

```
anatali/
├── index.html          მთავარი გვერდი
├── about.html           ჩვენ შესახებ
├── products.html         პროდუქციის კატალოგი (ფილტრებით)
├── b2b.html               B2B თანამშრომლობის გვერდი
├── contact.html         კონტაქტის ფორმა (Netlify Forms)
├── css/style.css        დიზაინი, ცვლადები, responsive
├── js/main.js            მობილური მენიუ, ანიმაციები, ფორმა
├── images/mark.svg      ლოგო/ფავიკონი (რგოლების სიმბოლო)
├── robots.txt
└── sitemap.xml
```

## 🚀 როგორ განათავსოთ Netlify-ზე (Drag & Drop)

1. შედით **netlify.com**-ზე და გაიარეთ ავტორიზაცია.
2. მთავარ დეშბორდზე გადაათრიეთ (drag & drop) მთელი **anatali** ფოლდერი (ან ZIP-ის გახსნის შემდეგ მიღებული ფოლდერი) იმ ველში, სადაც ეწერება „Drag and drop your site output folder here“.
3. Netlify ავტომატურად აიტვირთავს საიტს და მოგცემთ დროებით `.netlify.app` მისამართს.
4. სასურველი დომენის მისაბმელად: **Site settings → Domain management → Add a domain**.

**Netlify Forms ავტომატურად ჩაირთვება** — `contact.html`-ში ფორმას აქვს `data-netlify="true"`, ასე რომ შეტყობინებები გამოჩნდება Netlify-ის დეშბორდზე (**Forms** ტაბი), დამატებითი backend-ის გარეშე. შეგიძლიათ დააკონფიგუროთ ელფოსტის შეტყობინებები: **Site settings → Forms → Form notifications**.

## ✏️ რისი შეცვლა დაგჭირდებათ განთავსებამდე/შემდეგ

| რა | სად |
|---|---|
| რეალური დომენი | ყველა `<link rel="canonical">` და `og:url` მეტა თეგი თითოეულ HTML ფაილში (ამჟამად `https://www.anatali.ge/`) |
| ტელეფონი / ელფოსტა / მისამართი | header/footer-ში და `contact.html`-ის საკონტაქტო სვეტში |
| Google tag (GA4/Google Ads) ID | ყველა ფაილში მოძებნეთ `G-XXXXXXXXXX` და ჩაანაცვლეთ თქვენი რეალური ID-ით |
| Meta (Facebook/Instagram) Pixel ID | ყველა ფაილში მოძებნეთ `YOUR_PIXEL_ID` (2 ადგილას თითო ფაილში — script-სა და noscript-ში) |
| სოც. ქსელების ბმულები | footer-ში `instagram.com/anatali.ge` და `facebook.com/anatali.ge` |
| პროდუქტების რეალური ფოტოები | ამჟამად `product-thumb`/`product-card` გამოსახულებები არის ხის ტექსტურის CSS ილუსტრაცია + SVG აიქონი — ჩაანაცვლეთ რეალური ფოტოებით (`<img>` თეგით) სასურველ მომენტში |
| Google Maps რუკა | `contact.html`-ში `.map-box`-ის ადგილას ჩასვით რეალური `<iframe>` Google Maps-იდან |
| og-cover.jpg | `images/`-ში დაამატეთ რეალური 1200×630px სურათი გაზიარებისთვის (Facebook/LinkedIn პრევიუ) — ამჟამად ბმული მითითებულია, მაგრამ ფაილი არ არსებობს |

`Ctrl/Cmd+F` საძიებლად: `G-XXXXXXXXXX`, `YOUR_PIXEL_ID`, `anatali.ge`, `+995500000000`.

## 🎨 დიზაინის სისტემა

ფერები და ტიპოგრაფია განსაზღვრულია `css/style.css`-ის თავში (`:root` ცვლადები) — ერთ ადგილას შეცვლით მთელი საიტის ფერთა პალიტრას. სახელოსნოს/ხის თემის სიმბოლოდ გამოყენებულია **ხის რგოლები** (tree rings) — ლოგოში, hero-ს ილუსტრაციაში და პროცესის ნუმერაციაში.

## ✅ SEO და გამართულობა

- სემანტიკური HTML5, `lang="ka"`, თითოეულ გვერდს — უნიკალური title/description
- Open Graph და Twitter Card მეტა თეგები გაზიარებისთვის
- `robots.txt` და `sitemap.xml` მზადაა (განაახლეთ დომენი განთავსების შემდეგ)
- JSON-LD სტრუქტურირებული მონაცემები (`Organization`) მთავარ გვერდზე
- სრულად რესპონსიული: Desktop / Tablet / Mobile (mobile-ზე — hamburger მენიუ)
- `prefers-reduced-motion` პატივისცემა ანიმაციებში
- ხილული focus მდგომარეობა კლავიატურით ნავიგაციისთვის
