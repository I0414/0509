<template>
  <div class="container py-7 py-md-11">
    <h1 class="fs-4 fs-md-2 border-start border-primary border-8 ps-3 ms-n1 mb-4 mb-md-6" data-aos="fade-left">
      門市據點
    </h1>

    <router-view :stores="stores" :areas="areas"></router-view>
  </div>
</template>

<script>
import store1 from'@/assets/images/store-1.png';
import store2 from'@/assets/images/store-2.png';
import store3 from'@/assets/images/store-3.png';
import store4 from'@/assets/images/store-4.png';
import store5 from'@/assets/images/store-5.png';

  export default {
    data() {
      return {
        areas: ['請選擇區域', '台北市', '台中市', '高雄市'], 
        stores:[
          { 
            image: store1,
            area: '台北市',
            name: '台北中山旗艦店',
            phone: '(02000)-1234',
            time: '10:00-21:00',
            address: '台北市中山區南京東路 25巷2-1 號',
            id: 1,
            web: 'https://www.google.com/maps/place/%E4%B9%BE%E6%9D%AF+%E4%B8%AD%E5%B1%B1%E5%BA%97/@25.0531144,121.5156792,17z/data=!4m10!1m2!2m1!1z5Y-w5YyX5biC5Lit5bGx5Y2A5Y2X5Lqs5p2x6LevIDI15be3Mi0xIOiZnw!3m6!1s0x3442a96956d62c77:0xbd5001be159f4f21!8m2!3d25.0531144!4d121.5201853!15sCivlj7DljJfluILkuK3lsbHljYDljZfkuqzmnbHot68gMjXlt7cyLTEg6JmfWjQiMuWPsOWMlyDluIIg5Lit5bGxIOWNgCDljZfkuqwg5p2x6LevIDI1IOW3tyAyIDEg6JmfkgETeWFraW5pa3VfcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOMGVUZEhhVEJuUlJBQuABAA!16s%2Fg%2F1tf7dcbh?authuser=0&entry=ttu',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4387437263845!2d121.51567918885503!3d25.05311440000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96956d62c77%3A0xbd5001be159f4f21!2z5Lm-5p2vIOS4reWxseW6lw!5e0!3m2!1szh-TW!2stw!4v1715682706341!5m2!1szh-TW!2stw',
          },
          { 
            image: store2,
            area: '台北市',
            name: '台北綠園店',
            phone: '(02000)-2345',
            time: '10:00-21:00',
            address: '台北市中正區復興南路 13-1 號',
            id: 2,
            web: 'https://www.google.com/maps/place/%E5%A4%A7%E5%AE%89%E7%AB%99%E9%82%A3%E9%82%8A+%E7%B2%BE%E7%B7%BB%E7%86%B1%E7%82%92/@25.0325596,121.5393007,17z/data=!4m10!1m2!2m1!1z5Y-w5YyX5biC5Lit5q2j5Y2A5b6p6IiI5Y2X6LevIDEzLTEg6Jmf!3m6!1s0x3442ab53fa673baf:0x78a1c78d3b65765f!8m2!3d25.0325596!4d121.5438068!15sCiflj7DljJfluILkuK3mraPljYDlvqnoiIjljZfot68gMTMtMSDomZ9aLiIs5Y-w5YyXIOW4giDkuK3mraMg5Y2AIOW-qeiIiCDljZfot68gMTMgMSDomZ-SARR0YWl3YW5lc2VfcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSV2RHUnRkMEZuRUFF4AEA!16s%2Fg%2F11qh7f1t13?authuser=0&entry=ttu',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0446251543167!2d121.53930068885496!3d25.032559600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab53fa673baf%3A0x78a1c78d3b65765f!2z5aSn5a6J56uZ6YKj6YKKIOeyvue3u-eGseeCkg!5e0!3m2!1szh-TW!2stw!4v1715683074504!5m2!1szh-TW!2stw',
          },
          { 
            image: store3,
            area: '台中市',
            name: '台中清水旗艦店',
            phone: '(04000)-1234',
            time: '10:00-21:00',
            address: '台中市北區學士路91號',
            id: 3,
            web: 'https://www.google.com/maps/place/%E4%B8%AD%E5%9C%8B%E9%86%AB%E8%97%A5%E5%A4%A7%E5%AD%B8/@24.1568173,120.6730763,16z/data=!3m1!5s0x34693d643863de1f:0x9029518b1f7f7ee8!4m9!1m2!2m1!1z5Y-w5Lit5biC5riF5rC05Y2A57aT5Y2X5LiA6LevIDIzIOiZnyA4IOaokw!3m5!1s0x34693d64450c2f5b:0xa63869c21cf2e300!8m2!3d24.1560757!4d120.6803671!16zL20vMDhianpm?authuser=0&entry=ttu',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7280.850347751182!2d120.67307630558673!3d24.156817310018788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d64450c2f5b%3A0xa63869c21cf2e300!2z5Lit5ZyL6Yar6Jel5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1715683461098!5m2!1szh-TW!2stw',
          },
          { 
            image: store4,
            area: '高雄市',
            name: '高雄中正形象店',
            phone: '(07000)-2345',
            time: '10:00-21:00',
            address: '高雄市苓雅區中正一路131號',
            id: 4,
            web: 'https://www.google.com/maps/place/%E5%AE%B6%E9%84%89%E6%A8%93/@22.62869,120.2589672,13z/data=!4m10!1m2!2m1!1z6auY6ZuE5biC6IuT6ZuF5Y2A5Lit5q2j6LevIDEyIOaokw!3m6!1s0x346e05e8365804f1:0xeee482c0796a9a3c!8m2!3d22.6282714!4d120.3310039!15sCiLpq5jpm4TluILoi5Ppm4XljYDkuK3mraPot68gMTIg5qiTWioiKOmrmOmbhCDluIIg6IuTIOmbhSDljYAg5LitIOato-i3ryAxMiDmqJOSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11n119m9l7?authuser=0&entry=ttu',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58922.765037738085!2d120.25896722167968!3d22.62868999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05e8365804f1%3A0xeee482c0796a9a3c!2z5a626YSJ5qiT!5e0!3m2!1szh-TW!2stw!4v1715683569261!5m2!1szh-TW!2stw',
          },
          { 
            image: store5,
            area: '高雄市',
            name: '高雄夢時代店',
            phone: '(07000)-1234',
            time: '10:00-21:00',
            address: '高雄市鼓山區中華一路97號',
            id: 5,
            web: 'https://www.google.com/maps/place/%E9%AB%98%E9%9B%84%E5%B8%82%E7%A7%81%E7%AB%8B%E5%A4%A9%E4%B8%BB%E6%95%99%E6%98%8E%E8%AA%A0%E9%AB%98%E7%B4%9A%E4%B8%AD%E5%AD%B8/@22.6671359,120.2902467,17z/data=!4m9!1m2!2m1!1z6auY6ZuE5biC5YmN6Y6u5Y2A5Lit6I-v5LiA6LevIDYzLTYg6Jmf!3m5!1s0x346e05abfc13d8e7:0x4ee635da5cac3db5!8m2!3d22.666246!4d120.292014!16s%2Fg%2F155spn_2?authuser=0&entry=ttu',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.64191364108!2d120.2902467!3d22.6671359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05abfc13d8e7%3A0x4ee635da5cac3db5!2z6auY6ZuE5biC56eB56uL5aSp5Li75pWZ5piO6Kqg6auY57Sa5Lit5a24!5e0!3m2!1szh-TW!2stw!4v1715683628166!5m2!1szh-TW!2stw',
          },
        ],
      }
    },
    
}
</script>