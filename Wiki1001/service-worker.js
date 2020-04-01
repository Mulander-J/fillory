/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fcdf75125d7f453e2f683b4d54a793e0"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "8dcaa10ddcd33d69794ccd11f8c2155b"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "c500769ed50ad7a065460cb122568204"
  },
  {
    "url": "Another/Review.html",
    "revision": "c501bbc391f93a5176e2dc66b98c81fd"
  },
  {
    "url": "assets/css/0.styles.90fc599b.css",
    "revision": "f01b9f053a235ad24e8aaf59336dbb52"
  },
  {
    "url": "assets/img/00.8ce96cb4.jpg",
    "revision": "8ce96cb4cb446f754ee142792cae5a63"
  },
  {
    "url": "assets/img/001.599f91d3.jpg",
    "revision": "599f91d3c11b76edd82f609ce3a15db7"
  },
  {
    "url": "assets/img/001.816c400a.jpg",
    "revision": "816c400a5db50d8fc675d376b349b772"
  },
  {
    "url": "assets/img/001.b9fa5ca8.jpg",
    "revision": "b9fa5ca84f89cadc463d44c68ea8e33e"
  },
  {
    "url": "assets/img/002.3813aefb.jpg",
    "revision": "3813aefbd1ce44d9db5ed98db9cc0f4c"
  },
  {
    "url": "assets/img/002.7f873470.jpg",
    "revision": "7f873470399aa4cc1cb5a20155b24233"
  },
  {
    "url": "assets/img/002.9d888206.jpg",
    "revision": "9d88820621aa16eef49c52dd397a014c"
  },
  {
    "url": "assets/img/003.9d396115.jpg",
    "revision": "9d3961154b92e8b624179bb02b6201a4"
  },
  {
    "url": "assets/img/003.b3aa287d.jpg",
    "revision": "b3aa287d818ecb0ca1ce8899ee4f64c6"
  },
  {
    "url": "assets/img/003.d5ecd8fe.jpg",
    "revision": "d5ecd8fe28a5033d57d79f2bb9f4fb42"
  },
  {
    "url": "assets/img/004.5d3c0888.jpg",
    "revision": "5d3c08883340a97691671eb68012965b"
  },
  {
    "url": "assets/img/004.6102c5a8.jpg",
    "revision": "6102c5a8da8c9c3156dacdd3e1ae6b75"
  },
  {
    "url": "assets/img/005.5a8ea762.png",
    "revision": "5a8ea762a90424fe2b9cfee05bdabca0"
  },
  {
    "url": "assets/img/005.5ee4517a.jpg",
    "revision": "5ee4517ae8ecac8f06ba683930d8a7f3"
  },
  {
    "url": "assets/img/1.70462db7.png",
    "revision": "70462db70a5cf2af4b74374d4f7e87eb"
  },
  {
    "url": "assets/img/A005_multiShadows.172b9df2.jpg",
    "revision": "172b9df2a154d4c986f805969d9e15d6"
  },
  {
    "url": "assets/img/A005_shadow01.d5f30f93.jpg",
    "revision": "d5f30f931661a9263768e360fc64a3da"
  },
  {
    "url": "assets/img/A005_shadow02.0c472907.jpg",
    "revision": "0c472907c476c244e250a4fe92d5bb57"
  },
  {
    "url": "assets/img/blog.07a22c44.jpg",
    "revision": "07a22c448cfa69b3babdcefa70de3dd8"
  },
  {
    "url": "assets/img/bookmark.7d8dd0e7.jpg",
    "revision": "7d8dd0e76257c156f552a0c99252a430"
  },
  {
    "url": "assets/img/cssrules.9f296145.png",
    "revision": "9f296145a1b97573527a76c953b32b6d"
  },
  {
    "url": "assets/img/D001_001.0841a01f.png",
    "revision": "0841a01fd0c4946af6f80d1fdf0b24e1"
  },
  {
    "url": "assets/img/D001_002.c5284bfd.png",
    "revision": "c5284bfd8a9a18cc6cb2f081eb867f41"
  },
  {
    "url": "assets/img/footer.c0b3b7f6.jpg",
    "revision": "c0b3b7f6a54944898fe85b6aff5ee80c"
  },
  {
    "url": "assets/img/githubLink.7fabd7af.jpg",
    "revision": "7fabd7af2a1a06803aa35aabfe33c5a2"
  },
  {
    "url": "assets/img/google_analysis.2edd12f3.jpg",
    "revision": "2edd12f37a95dc9fe395cb91122332b9"
  },
  {
    "url": "assets/img/google_post.e19082be.jpg",
    "revision": "e19082be1304dc86ecea9fa64a2a1dad"
  },
  {
    "url": "assets/img/home.02a9ccad.jpg",
    "revision": "02a9ccadcf89704ccc6900e35ecd8ab1"
  },
  {
    "url": "assets/img/home.88e266fa.jpg",
    "revision": "88e266fac24f711f981f8a5914ebfdb0"
  },
  {
    "url": "assets/img/horseSwing.39c8d1ef.jpg",
    "revision": "39c8d1efaa7383ac829f07646c0cebfa"
  },
  {
    "url": "assets/img/iconSelect.6b3b7652.jpg",
    "revision": "6b3b7652a121ce0f42b35db1b935ac7d"
  },
  {
    "url": "assets/img/linear_home.0d3acd95.jpg",
    "revision": "0d3acd9568bea627a90b9768ea9be234"
  },
  {
    "url": "assets/img/linear_scroll.396161bc.jpg",
    "revision": "396161bcf5dea38a6d98c6dca5b03f53"
  },
  {
    "url": "assets/img/logo-White.98dace1e.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "assets/img/MuOng4.61321995.jpg",
    "revision": "613219957ab284cf8efc74eddba027cf"
  },
  {
    "url": "assets/img/pwa-post.5922cce0.jpg",
    "revision": "5922cce0fd661cfc16049db6d4cade75"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/snap_d001.9cd57df9.jpg",
    "revision": "9cd57df92683e9ce97495409f16d2ebb"
  },
  {
    "url": "assets/img/start_day.bb40877c.jpg",
    "revision": "bb40877c7baf6469844e42214c17e666"
  },
  {
    "url": "assets/img/sw_popup_my.507a1597.png",
    "revision": "507a15970a1fbc312959602df805c514"
  },
  {
    "url": "assets/img/switch.58bb7083.jpg",
    "revision": "58bb7083df2c8877382989b40ca585f9"
  },
  {
    "url": "assets/img/swpopup_demo.bddc4d9d.jpg",
    "revision": "bddc4d9dd7d3934d336a6ab1c554a5bb"
  },
  {
    "url": "assets/img/swpopup_old.1b1dfa29.jpg",
    "revision": "1b1dfa29f19c3a818a4532b97e618de2"
  },
  {
    "url": "assets/img/versions.6306b5ab.jpg",
    "revision": "6306b5ab6610e0e2cce99e20ac4cde9b"
  },
  {
    "url": "assets/js/10.88c61d33.js",
    "revision": "b1dfb97920e755745f6029402f42618e"
  },
  {
    "url": "assets/js/11.047d3283.js",
    "revision": "272e2477524a5cb10d4adc7d6a38e142"
  },
  {
    "url": "assets/js/12.617c8e68.js",
    "revision": "c1f95fc02f6a51cb7dc21c97cf3ad164"
  },
  {
    "url": "assets/js/13.cd40d2f1.js",
    "revision": "8f2d1b514dccc3c7082e9995f2c0d9f2"
  },
  {
    "url": "assets/js/14.1342d4ad.js",
    "revision": "e8d974fd086508083187ad0d0777b5e2"
  },
  {
    "url": "assets/js/15.adb31edf.js",
    "revision": "c432f1eaa8c3c1b0eb7d67a7aacadb0b"
  },
  {
    "url": "assets/js/16.734bab05.js",
    "revision": "a2fdec6a2e2e3a5f24c2ff811d82dc9b"
  },
  {
    "url": "assets/js/17.76f0f315.js",
    "revision": "411ee5b3b8c82f1a2dcd0aac70d6349c"
  },
  {
    "url": "assets/js/18.59ffbe48.js",
    "revision": "ba8521ca3c39aff2bc5711d0e2f0be09"
  },
  {
    "url": "assets/js/19.a5c9d2b3.js",
    "revision": "52f9db38f4c6923925784809a12c077d"
  },
  {
    "url": "assets/js/2.a2a4cd8c.js",
    "revision": "d7ac9a4f046a0fb6a14a2b5d1a340df9"
  },
  {
    "url": "assets/js/20.f265013b.js",
    "revision": "fce3bc7097842c3e45c98bcdd9b1ada5"
  },
  {
    "url": "assets/js/21.e50ae6df.js",
    "revision": "f67f50158eb1d1c41103c17d00523711"
  },
  {
    "url": "assets/js/22.ef7ab838.js",
    "revision": "7706bdb374a59542e6c9e3ecaec5590f"
  },
  {
    "url": "assets/js/23.9bb070f9.js",
    "revision": "a5ca0cfb881340295cb8527e651c121c"
  },
  {
    "url": "assets/js/24.cbb487db.js",
    "revision": "a7aa5c192603dc3b4a05c47f314415d5"
  },
  {
    "url": "assets/js/25.93e2a066.js",
    "revision": "91dc716da324d4219e6e66459075aba5"
  },
  {
    "url": "assets/js/26.a1051334.js",
    "revision": "956eaf464969f6d42e2241df6f825cac"
  },
  {
    "url": "assets/js/27.1871bf8a.js",
    "revision": "6c6677704c302342ddc019908cea1aa0"
  },
  {
    "url": "assets/js/28.7179a919.js",
    "revision": "f9de358b2868ab9968ca00dcbf9ca090"
  },
  {
    "url": "assets/js/29.d8e4dd83.js",
    "revision": "5a195814c510515f6f962f483bff363b"
  },
  {
    "url": "assets/js/3.d06c575a.js",
    "revision": "bf94d13837feb4ecbfc705c1953c02a8"
  },
  {
    "url": "assets/js/30.1cda0628.js",
    "revision": "e677d6e01335f361936fc51471c49d4d"
  },
  {
    "url": "assets/js/31.c1b99ea7.js",
    "revision": "83c4014252de619a6d99a9e7783b002a"
  },
  {
    "url": "assets/js/32.8e7b6117.js",
    "revision": "55565c93e2ab694172b5a05093ba3a94"
  },
  {
    "url": "assets/js/33.195b7510.js",
    "revision": "b6dcd24b206b946d6ae24867d2a8c3ff"
  },
  {
    "url": "assets/js/34.911d0a8f.js",
    "revision": "c449096aff8e413853d3678dc6a2840b"
  },
  {
    "url": "assets/js/35.a5d40bba.js",
    "revision": "12cba1efe73293a4bb443a0b00bb50bd"
  },
  {
    "url": "assets/js/36.89313734.js",
    "revision": "f79b6acd8b4cea7790bbe23810711cee"
  },
  {
    "url": "assets/js/37.81ea9386.js",
    "revision": "645e325da954be29ba8f80ee718585c7"
  },
  {
    "url": "assets/js/38.190cc51f.js",
    "revision": "e7d699bc225f6b0d743f2f59b05ac364"
  },
  {
    "url": "assets/js/39.f2f21633.js",
    "revision": "cd8df6005a2db9d9705fe88c0b308605"
  },
  {
    "url": "assets/js/4.13b05314.js",
    "revision": "0ae52f8780ecea19f50a7010208d8f81"
  },
  {
    "url": "assets/js/40.6e6b4b00.js",
    "revision": "c13fd76d5c4ac2e85323cf14c3373baa"
  },
  {
    "url": "assets/js/41.e68af184.js",
    "revision": "138a6e42559419be7a00f0726a4d0464"
  },
  {
    "url": "assets/js/42.da8048e7.js",
    "revision": "e60d8bec68347c58339d068591ec6ea6"
  },
  {
    "url": "assets/js/43.45add266.js",
    "revision": "e10f470bbaa71ff5ef4da9569be31ee0"
  },
  {
    "url": "assets/js/44.ff977e1f.js",
    "revision": "6cffcb9ead95ce37e8f6e59d32d04361"
  },
  {
    "url": "assets/js/45.b5ba2e66.js",
    "revision": "d53cb6d397f4074aab17654e2d7d1e97"
  },
  {
    "url": "assets/js/46.b71c1cea.js",
    "revision": "9d4e21fa9dc9a3b39d4abb77782a7b50"
  },
  {
    "url": "assets/js/47.c3b0155f.js",
    "revision": "9f90aa752cb7324e816ff9112df07d1a"
  },
  {
    "url": "assets/js/48.b469a8c3.js",
    "revision": "2ac795652bfa014a2e5d7948798b0e83"
  },
  {
    "url": "assets/js/49.1ece8240.js",
    "revision": "58f5fdc3b08ed1177c77ca2833c07aee"
  },
  {
    "url": "assets/js/5.c10212e7.js",
    "revision": "cb765fc8b7aa453e43c8854783edd50c"
  },
  {
    "url": "assets/js/50.56e5a49d.js",
    "revision": "5eb48b584c1a540c81cd2c9a68f43503"
  },
  {
    "url": "assets/js/51.9d26d376.js",
    "revision": "cbcf74c227dfdbf03dd816f3c9af9cbe"
  },
  {
    "url": "assets/js/52.2d2a7888.js",
    "revision": "52ea230c417a101547a51b43e0113441"
  },
  {
    "url": "assets/js/53.e7d27378.js",
    "revision": "973a14e17efa4b07f22e54452c4bf908"
  },
  {
    "url": "assets/js/54.a2bc070d.js",
    "revision": "493bf3865be072c9cf95f2783b2f0413"
  },
  {
    "url": "assets/js/55.cdb316dd.js",
    "revision": "a1b96e39c9fbebcd90f6997454206618"
  },
  {
    "url": "assets/js/56.ce5b1b8d.js",
    "revision": "ecbbbdb22f8844d43e1645286021c29c"
  },
  {
    "url": "assets/js/57.1d4b38c1.js",
    "revision": "7c4777db5b8475b09b818c07a5126b9b"
  },
  {
    "url": "assets/js/58.c51beabd.js",
    "revision": "804ca010885b0bd9dd3e6355a193a65b"
  },
  {
    "url": "assets/js/59.a61e640f.js",
    "revision": "ead0fac7c4cbbcad4bcb3593a3f24a7f"
  },
  {
    "url": "assets/js/6.5308c619.js",
    "revision": "3d80b0f2e7ba86b2f84d75168b2e4869"
  },
  {
    "url": "assets/js/60.00be897c.js",
    "revision": "81de86b56b1f2dc8947582503dccbddd"
  },
  {
    "url": "assets/js/61.03b4f49e.js",
    "revision": "896b8dad3c73ad715a34e81bdf1aebed"
  },
  {
    "url": "assets/js/62.2f6d2546.js",
    "revision": "01a6877c3873ab2f7bf4418275f06304"
  },
  {
    "url": "assets/js/63.5aef3d96.js",
    "revision": "caf876437b9f956be28c75d4b858a4b6"
  },
  {
    "url": "assets/js/64.44554887.js",
    "revision": "08fb7044dcfcef8de0301b8b8cf8c157"
  },
  {
    "url": "assets/js/65.959f917d.js",
    "revision": "634986fa8042e6a62183c17c1d790ee5"
  },
  {
    "url": "assets/js/66.8d48ef3e.js",
    "revision": "69d9b932cbaf2eecf1b5dafa7a228f5c"
  },
  {
    "url": "assets/js/67.5971b128.js",
    "revision": "3de3dec6341646fbf79e249703606903"
  },
  {
    "url": "assets/js/68.6e69b852.js",
    "revision": "74531c1382ae0b3f860a5b4724f96838"
  },
  {
    "url": "assets/js/69.c9edfeac.js",
    "revision": "c7d588b8e7821cb93c0643456b0d3a59"
  },
  {
    "url": "assets/js/7.da0f8031.js",
    "revision": "2decf337632c64375d20dd1d95de91bf"
  },
  {
    "url": "assets/js/70.93977fbb.js",
    "revision": "bfe4b05882ce3cd64378b8febc572464"
  },
  {
    "url": "assets/js/71.a8dde188.js",
    "revision": "ea3eb69c587de9526075f7e8d8e49fe6"
  },
  {
    "url": "assets/js/72.f4cbc2a0.js",
    "revision": "0fd6b6dd374133a6d648b648ac200a69"
  },
  {
    "url": "assets/js/73.c85903b2.js",
    "revision": "3e9bcd58a207389449c20dc0dbe21c51"
  },
  {
    "url": "assets/js/74.73bdb997.js",
    "revision": "1416d6403853dfdd7ee905ab7c48ae3b"
  },
  {
    "url": "assets/js/75.73d7cf17.js",
    "revision": "2d65a9c2aded94c5d0c86e88d469d52b"
  },
  {
    "url": "assets/js/76.ecc2762b.js",
    "revision": "0b4e5ede0a42919aa43ae6d14de4e136"
  },
  {
    "url": "assets/js/77.9031054e.js",
    "revision": "d0ddc9ef612637f4c3795648adffe226"
  },
  {
    "url": "assets/js/78.e5439644.js",
    "revision": "eee79a42c1a5c384ad76c3f5997d7a88"
  },
  {
    "url": "assets/js/79.3b48542f.js",
    "revision": "fff4b420c9c17c99464c0bdc84266ff6"
  },
  {
    "url": "assets/js/8.efc8a059.js",
    "revision": "5804302e4196187011e6cc4a0857e469"
  },
  {
    "url": "assets/js/80.c1bed386.js",
    "revision": "98b370c8a8adb0bbc409afaa23605e98"
  },
  {
    "url": "assets/js/81.e4b11cd0.js",
    "revision": "a9c4ed346954eac2942d4be01ce6064c"
  },
  {
    "url": "assets/js/82.abe44759.js",
    "revision": "66883bbc5f666f48f40fcd6a2ae19934"
  },
  {
    "url": "assets/js/83.be758474.js",
    "revision": "32cc9a821143522d8e6c2d8b69e97d50"
  },
  {
    "url": "assets/js/84.23f77035.js",
    "revision": "d5c8aa61c53b825ec5736676adc7ca0d"
  },
  {
    "url": "assets/js/85.1386f61e.js",
    "revision": "0ce57976494edb6cc20a12ad5c50eefe"
  },
  {
    "url": "assets/js/86.552ac24b.js",
    "revision": "2d728921e4d2d98700389edaccf1ff7c"
  },
  {
    "url": "assets/js/87.89972b1c.js",
    "revision": "6cc850c10124324e976fbc8fe3dfcf55"
  },
  {
    "url": "assets/js/88.c7c06f1f.js",
    "revision": "2c1a9fce857dc8ce7c6353b0166c58ed"
  },
  {
    "url": "assets/js/89.e775aa65.js",
    "revision": "10f69178079f6c27f71e3ccb5e525cc0"
  },
  {
    "url": "assets/js/9.801e8d67.js",
    "revision": "e232df93da8ddbc1e23e5e37c9a7b680"
  },
  {
    "url": "assets/js/app.caeb3fca.js",
    "revision": "c422e2a201033f419eff4b5b899dc995"
  },
  {
    "url": "FAQ/Console/20200313_console_007.html",
    "revision": "f408e6d83d009d47b64a17fec5b4424f"
  },
  {
    "url": "FAQ/Console/20200313_console_008.html",
    "revision": "481f058c1ba4871b3044add8a348c8fe"
  },
  {
    "url": "FAQ/Console/20200331_console_009.html",
    "revision": "aa4921647881c6a0e0ff6a6fbf53a929"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "f1db68c9d4c40b825559c3adc1076ac5"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "f901feea74aa6cf0c165a2962838ae99"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "d9095317dd415c5d3d6597cba327b13a"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "49fbf4b305fa7796b0e503292c08dedc"
  },
  {
    "url": "FAQ/Console/A004.html",
    "revision": "faf198dbf75d707d9d3acb556c96a83f"
  },
  {
    "url": "FAQ/Console/A005.html",
    "revision": "9efde7ade0c8eae2615d1a6c873546fa"
  },
  {
    "url": "FAQ/Console/A006.html",
    "revision": "dcc85d2c2b9ebf034232741ab90069d2"
  },
  {
    "url": "FAQ/DigestionHeap/D001.html",
    "revision": "e7d463a33e59d2d92aad5c29d739e29d"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "eb4e9f62c785f6800f7ddd6c69e3bb8b"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "c67ab2421a810c5807418d9c906aceef"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "3fac72b290a602678b70cc8b7a32ef7d"
  },
  {
    "url": "img/links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/logo-White.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "img/logo.gif",
    "revision": "4fe18208b74ecb4b1c0bae6d1eb8a6ca"
  },
  {
    "url": "img/logo2.jpg",
    "revision": "7af828f6f609dd9f9068cff116dd330a"
  },
  {
    "url": "img/Myself/antForest.png",
    "revision": "c1210c58f6117b2d4f69d86f87df44b2"
  },
  {
    "url": "img/Myself/userHead.gif",
    "revision": "4fe18208b74ecb4b1c0bae6d1eb8a6ca"
  },
  {
    "url": "img/users/finen.png",
    "revision": "97e6724c4f5204f87757b8c98490f506"
  },
  {
    "url": "img/users/orange.jpg",
    "revision": "dfdf9f5b6e8122ac76479ee38297b42e"
  },
  {
    "url": "img/users/yoko.jpeg",
    "revision": "69fde537fd2200ba922eb1442e549b25"
  },
  {
    "url": "img/wiki/Baidu.png",
    "revision": "dfa63b81c92322d44db59e06cd0ad259"
  },
  {
    "url": "img/wiki/baiduHelp.png",
    "revision": "d91ad7ef1b5642a4a291ea87c563d0df"
  },
  {
    "url": "img/wiki/bing.png",
    "revision": "c6c301113aeffd8f80029a72e6e7037d"
  },
  {
    "url": "img/wiki/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/wiki/earth.png",
    "revision": "5bedfd819a77ac7d87befdff600e3a5f"
  },
  {
    "url": "img/wiki/google.png",
    "revision": "b4ddf57cc277d4ac6cb237c71b327c73"
  },
  {
    "url": "img/wiki/hacker.png",
    "revision": "7ce17c1d46025625752d9d8869e4b2d8"
  },
  {
    "url": "img/wiki/vue.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "img/wiki/Wikipedia.png",
    "revision": "a9bcbc01c4d9ca7c299b478d123a6a75"
  },
  {
    "url": "index.html",
    "revision": "9a075079be6113ec8d997e859aad324a"
  },
  {
    "url": "Links/Devil/index.html",
    "revision": "086bf2f6297da55ece7de31b23dafa60"
  },
  {
    "url": "Links/Wiki/index.html",
    "revision": "38ebc5d7cebeb01bffeb99180bc711ae"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "48678c6d42189c715dc2d8c0a9d7fa64"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "45e9e3ab57043d7f8360d1ec6ee041f3"
  },
  {
    "url": "Store/index.html",
    "revision": "a853b0e15d91ae1519e1da1c340c94c5"
  },
  {
    "url": "Store/Media/Anime/Animed.html",
    "revision": "d110b1b63d414b5e80776feb963ef46c"
  },
  {
    "url": "Store/Media/Anime/AnimeHome.html",
    "revision": "15a375c2c1870275c058e6450ff4cdf3"
  },
  {
    "url": "Store/Media/Anime/AnimeLay.html",
    "revision": "0c0ddf65e5b2389dd79a65026d65440f"
  },
  {
    "url": "Store/Media/Anime/AnimeSec.html",
    "revision": "3e5508ad0f53325f142553717fa6015b"
  },
  {
    "url": "Store/Media/Anime/AnimeWill.html",
    "revision": "055fc845c42998b8ad868cd2a5b8d85c"
  },
  {
    "url": "Store/Media/Anime/Animing.html",
    "revision": "8db5d13c01ac1fef422f4bdcc855d7e6"
  },
  {
    "url": "Store/Media/Books/Booked.html",
    "revision": "c72557a9f9750f2685038c32b0d59b42"
  },
  {
    "url": "Store/Media/Books/Booking.html",
    "revision": "d31a9665be4e3b2d8c9088ab4cecb717"
  },
  {
    "url": "Store/Media/Books/BookLay.html",
    "revision": "f2bc6161cc77b3ba44a66577b0a8c8a7"
  },
  {
    "url": "Store/Media/Books/BookSec.html",
    "revision": "a92fb6c697c46b61465cf855be6a129e"
  },
  {
    "url": "Store/Media/Books/BooksHome.html",
    "revision": "9f0b471ad1e44cefbda11b0162ad3a6d"
  },
  {
    "url": "Store/Media/Books/BookWill.html",
    "revision": "4b50ae013c0a69e924c74325398c2873"
  },
  {
    "url": "Store/Media/Films/Filmed.html",
    "revision": "2d9030332c189b4835de0a639ea4e15f"
  },
  {
    "url": "Store/Media/Films/Filming.html",
    "revision": "9b9ab937d9af80b5ad80bbd7320d933f"
  },
  {
    "url": "Store/Media/Films/FilmLay.html",
    "revision": "dd2bfd3dc6bba89509a8d09b37da3fc4"
  },
  {
    "url": "Store/Media/Films/FilmSec.html",
    "revision": "0a006a4131a85c2c397485da26cf39c4"
  },
  {
    "url": "Store/Media/Films/FilmsHome.html",
    "revision": "eeaf0c02a2cd0edf0495cfba6f920316"
  },
  {
    "url": "Store/Media/Films/FilmWill.html",
    "revision": "e3afb788cb8fe3ec2d231ffca865d403"
  },
  {
    "url": "Thought/index.html",
    "revision": "6006f39cd8a0b9c90548831dc4f76f12"
  },
  {
    "url": "Thought/Novels/Named/index.html",
    "revision": "b1830fe68dd6aa8144df184c721c1b00"
  },
  {
    "url": "Thought/Novels/Named/named_s1_001.html",
    "revision": "686d43a1673051e7392860bd6490eb32"
  },
  {
    "url": "Thought/Novels/Named/named_s1_002.html",
    "revision": "3a87b390e412f953c2083eb671897577"
  },
  {
    "url": "Thought/Novels/Named/named_s1_003.html",
    "revision": "145a57a9cfca61759335f772636f0c82"
  },
  {
    "url": "Thought/Novels/Named/named_s1_004.html",
    "revision": "d163c6fb53ef42b1925d2d7dd8440ba8"
  },
  {
    "url": "Thought/Novels/Named/named_s1_005.html",
    "revision": "6a8dfd88cc4d5c3378b216d369abeb57"
  },
  {
    "url": "Thought/Novels/Named/named_s1_006.html",
    "revision": "c414ec039add6d961fcd2a27c069a5ca"
  },
  {
    "url": "Thought/Novels/Named/named_s1_007.html",
    "revision": "7a1b6faa86ef31dda0ea5e0eb67ca8b3"
  },
  {
    "url": "Thought/Novels/Named/named_s1_008.html",
    "revision": "43cd24035c0bb6131896a9c49c61097c"
  },
  {
    "url": "Thought/Novels/Named/named_s1_009.html",
    "revision": "50abbcd458200242e599fbae7b3ad1b1"
  },
  {
    "url": "Thought/Novels/Named/named_s1_010.html",
    "revision": "f1b0f89eb0f4efb92b9fe13acfe20011"
  },
  {
    "url": "Thought/Novels/Named/named_s1_011.html",
    "revision": "d9b4d7ec580db83b17b11e2768e9f37e"
  },
  {
    "url": "Thought/Novels/Named/named_s1_012.html",
    "revision": "f5cb8e8f23b01aa801d0ccf8154054ae"
  },
  {
    "url": "Thought/Novels/Named/named_s1_013.html",
    "revision": "56574427688e3e1c1491a79d9332aedf"
  },
  {
    "url": "Thought/Novels/Named/named_s1_014.html",
    "revision": "db0a7fc8b90ab0615a5fe46a381fab8c"
  },
  {
    "url": "Thought/Novels/Named/named_s1_015.html",
    "revision": "9bf230bcaacd6d8a956f852326dcb2f4"
  },
  {
    "url": "Thought/Novels/Named/named_s1_016.html",
    "revision": "0550d288fa05cbf335dd796cf986b230"
  },
  {
    "url": "Thought/Novels/Named/named_s1_017.html",
    "revision": "9bbab960937c5ea4eb141fa9547d06f2"
  },
  {
    "url": "Thought/Novels/Named/named_s1_018.html",
    "revision": "6b7fc42f41737fd94cfb42b4c32ba4b7"
  },
  {
    "url": "Thought/Novels/Named/named_s1_019.html",
    "revision": "e81a41837dbb2b30019fe29c1ff21605"
  },
  {
    "url": "Thought/Novels/Named/named_s1_020.html",
    "revision": "b62aa9e1efcdd435290d732ff6e51b7a"
  },
  {
    "url": "Thought/TheWord/AmericanGods.html",
    "revision": "deed81026802a84dafae955cbc2ada01"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "887c3737f5db24e608b388f9c9ff7e17"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "0ed9c9c8e15cb8ed647d2c7da9d28dff"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "cacb9d9d4ce1c8a37471aeeed1c24935"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "178f84a25fcbe2bf8f8572272bef4dc7"
  },
  {
    "url": "Thought/Words/W002.html",
    "revision": "984abd5ba12bbcfe647f6b9e33932dff"
  },
  {
    "url": "Thought/Words/W003.html",
    "revision": "9269b8a06556454a88d3b454ffb6472e"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "e28c187cbaba5169f2a6256d471780a5"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "b35de5b7a27a8a4c1222a34d894dbd15"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
