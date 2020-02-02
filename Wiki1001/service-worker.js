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
    "revision": "59e278e0546839c0802d3872a67f0f71"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "c6d33b2fac6cde7e5f8e4c36fa327295"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "496751aaa1fe84d060d13e9a28866172"
  },
  {
    "url": "Another/Review.html",
    "revision": "129a8b56a6d06c33bd2d23d2a1c7d7ae"
  },
  {
    "url": "assets/css/0.styles.8aa91856.css",
    "revision": "7f7b98f486ac20ea47166c2580dd2d82"
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
    "url": "assets/img/cssrules.9f296145.png",
    "revision": "9f296145a1b97573527a76c953b32b6d"
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
    "url": "assets/img/pwa-post.5922cce0.jpg",
    "revision": "5922cce0fd661cfc16049db6d4cade75"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
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
    "url": "assets/js/10.246911c6.js",
    "revision": "5e1d3a8c19359e90083cf779b72bdac0"
  },
  {
    "url": "assets/js/11.5320ea54.js",
    "revision": "bbf133c41085eac30ed538260b099f73"
  },
  {
    "url": "assets/js/12.47a5fa58.js",
    "revision": "ebd90dbc92efedae7c7416093857133c"
  },
  {
    "url": "assets/js/13.c0b238fb.js",
    "revision": "a602c50cf720125cad86b3c090262f78"
  },
  {
    "url": "assets/js/14.4b9b4f63.js",
    "revision": "9013c7cf70b95512bcdd8445bed66220"
  },
  {
    "url": "assets/js/15.f4a28953.js",
    "revision": "8dfa4d6415ef701ae19b4849b232e38b"
  },
  {
    "url": "assets/js/16.cece463e.js",
    "revision": "fda06bfb38914ec57ad3544900d4d52c"
  },
  {
    "url": "assets/js/17.93d0d2dc.js",
    "revision": "a6bda4afb67c48a09c4c4a63058d50d5"
  },
  {
    "url": "assets/js/18.ae9f43a0.js",
    "revision": "bcd5dc1ad4958685597341e2ddc8a25e"
  },
  {
    "url": "assets/js/19.6cba3b60.js",
    "revision": "a11b1eeaa84d34619ea81b4e93942c0e"
  },
  {
    "url": "assets/js/2.a01beff6.js",
    "revision": "e2a749a50193623a68d3b91587fbc36b"
  },
  {
    "url": "assets/js/20.80ea80ff.js",
    "revision": "d03512eef3cda2327ff4a9706e028cef"
  },
  {
    "url": "assets/js/21.82d0b5e8.js",
    "revision": "6476d9ea476f342a1a7d960bd32b5ec3"
  },
  {
    "url": "assets/js/22.8203dee4.js",
    "revision": "bad10e31bee0d48a70bdffeb58d257e7"
  },
  {
    "url": "assets/js/23.e57588c0.js",
    "revision": "1ac4d7d76a0d62fed2528b9137b361c9"
  },
  {
    "url": "assets/js/24.e8cbbbe5.js",
    "revision": "7a4f5eebf1136f50b18253cd55265da3"
  },
  {
    "url": "assets/js/25.aa2acd27.js",
    "revision": "2264b9c5df50d980b578cee3502a6519"
  },
  {
    "url": "assets/js/26.ea1f271f.js",
    "revision": "09ed380d59065a835ebe9ca32294aad4"
  },
  {
    "url": "assets/js/27.6a874021.js",
    "revision": "964c9b6772893383685d16d84c5707ae"
  },
  {
    "url": "assets/js/28.9ea85bd0.js",
    "revision": "b8d9305faa42780788402b831c8b9263"
  },
  {
    "url": "assets/js/29.5054a191.js",
    "revision": "ae7e22af46ea4054e2041431562d302e"
  },
  {
    "url": "assets/js/3.007d8eda.js",
    "revision": "048cca9ecef79afaf4ebb670f6eb6e84"
  },
  {
    "url": "assets/js/30.02b47165.js",
    "revision": "0459fdbefee6b8bacf5c204d6fa6aefc"
  },
  {
    "url": "assets/js/31.4b28adcc.js",
    "revision": "964300c95aa5d39147425da872993b6b"
  },
  {
    "url": "assets/js/32.df6cc98d.js",
    "revision": "f674660fa9c3df29102e5f3dac922bb0"
  },
  {
    "url": "assets/js/33.516edceb.js",
    "revision": "57956e4e1b3debcdf624dbd356362bc0"
  },
  {
    "url": "assets/js/34.878f3e68.js",
    "revision": "3fda8ee37c04d76e7260c9aff8a1a95d"
  },
  {
    "url": "assets/js/35.3dc44471.js",
    "revision": "82c685f53ae45070aaf2aa1893a0d55c"
  },
  {
    "url": "assets/js/36.49fa314b.js",
    "revision": "a7f6c929467c2e2f7ef2e1fea72d78e0"
  },
  {
    "url": "assets/js/37.fe985f7a.js",
    "revision": "d5140f8b184a0e74e9621c1e61511a74"
  },
  {
    "url": "assets/js/38.70541531.js",
    "revision": "afb2a9d306d493a88870cb250650a4fd"
  },
  {
    "url": "assets/js/39.1715ad78.js",
    "revision": "1017ea7608eeccd57626a3f187b9029c"
  },
  {
    "url": "assets/js/4.52fcafc6.js",
    "revision": "0541124570afc66b2dd6fad1628948f2"
  },
  {
    "url": "assets/js/40.ee4e37f8.js",
    "revision": "d6b970daddc462a7fbf8da6fea525e19"
  },
  {
    "url": "assets/js/41.6a3783d2.js",
    "revision": "0d002463fbb97adc8c7f8921fd6bf515"
  },
  {
    "url": "assets/js/42.b94abddb.js",
    "revision": "c88cf1869257484bd29f7dd8cdf7ad09"
  },
  {
    "url": "assets/js/43.9a942f75.js",
    "revision": "367c8b00ba633da155a5ae473c611ebf"
  },
  {
    "url": "assets/js/44.fefe64c5.js",
    "revision": "0291e42964aeeb4edd9f7bd6ee1bc938"
  },
  {
    "url": "assets/js/45.c34a03a7.js",
    "revision": "b6b933510c303969093b416ab6d2d552"
  },
  {
    "url": "assets/js/46.801b58a1.js",
    "revision": "0196e47407a5f970b5764d13021b81b4"
  },
  {
    "url": "assets/js/47.13d296de.js",
    "revision": "dc7e392a75e4b15bae54e820496ced70"
  },
  {
    "url": "assets/js/48.20dae84b.js",
    "revision": "f57d2553dc787add1f1a426a362a857f"
  },
  {
    "url": "assets/js/49.2b7c99c0.js",
    "revision": "9a00184f8fb354d107bc2963e376b456"
  },
  {
    "url": "assets/js/5.9b9f9d08.js",
    "revision": "a37ffd679272d868a2994d9249d92571"
  },
  {
    "url": "assets/js/50.24d7503b.js",
    "revision": "b3a3956b8a6a56a09f82a8392e319fd0"
  },
  {
    "url": "assets/js/51.046deb6b.js",
    "revision": "38cf71be3f6398b07e841be8fd22e5ab"
  },
  {
    "url": "assets/js/52.6f2027da.js",
    "revision": "0127105048c0ea4fd28c9588d87777c1"
  },
  {
    "url": "assets/js/53.3ca7a76c.js",
    "revision": "9eb10dedfd067d0c69a2717f10b2577f"
  },
  {
    "url": "assets/js/54.50b5e9ad.js",
    "revision": "d2d3f957b17380c096400eb17e391f17"
  },
  {
    "url": "assets/js/55.c8236ee4.js",
    "revision": "f77adf81225ca41e39a90380a5b4b474"
  },
  {
    "url": "assets/js/56.c6851b88.js",
    "revision": "b18640e190b1158ec74eb26f5bd0204e"
  },
  {
    "url": "assets/js/57.aba5f1a3.js",
    "revision": "290fd17f54adc481fbef577a8477a342"
  },
  {
    "url": "assets/js/58.017d4d50.js",
    "revision": "6b29a647243320198a35c43b4cd37452"
  },
  {
    "url": "assets/js/59.eba8e4da.js",
    "revision": "01097665d0b68de58da30d864da9d156"
  },
  {
    "url": "assets/js/6.c958ade0.js",
    "revision": "ea7f7e063fcb0b07e2dabf2a1906b017"
  },
  {
    "url": "assets/js/60.010e3f10.js",
    "revision": "d1633b8120dc00a08c0bb914f4166ea1"
  },
  {
    "url": "assets/js/61.7dce34a7.js",
    "revision": "f20adecb5224aa8143b6f754a8f9b848"
  },
  {
    "url": "assets/js/62.024e97f0.js",
    "revision": "9553127a1afc1b150724b6e557ec89ad"
  },
  {
    "url": "assets/js/63.11954250.js",
    "revision": "945b678938017a1f1c46c09f45b1297e"
  },
  {
    "url": "assets/js/64.e797ba17.js",
    "revision": "3072c9f8c3a2ee338a0177e85c828ba8"
  },
  {
    "url": "assets/js/65.2fad85e3.js",
    "revision": "72a28d88d92c17bd52595cebc205dc2d"
  },
  {
    "url": "assets/js/66.a06cf461.js",
    "revision": "3dff62169cdfb0a2acaf5091511242ae"
  },
  {
    "url": "assets/js/67.78db3c7a.js",
    "revision": "d8d63ce30dcbd0d9b601522e64ec6464"
  },
  {
    "url": "assets/js/68.af7178ee.js",
    "revision": "da90702b3e9b4c5dbf8ada2ecfe8429f"
  },
  {
    "url": "assets/js/69.0165b35d.js",
    "revision": "fb78a8cca446e7ccff0af90a31ffba61"
  },
  {
    "url": "assets/js/7.957f4b34.js",
    "revision": "eee0ec28621e0e96664bcf7a5b8bf956"
  },
  {
    "url": "assets/js/70.de6d101b.js",
    "revision": "f09cefb0ca307ce0ca94374ad6ad7a6c"
  },
  {
    "url": "assets/js/71.91e8e0da.js",
    "revision": "5ce6da1c46f8e1e2e6186045b2dfadd5"
  },
  {
    "url": "assets/js/72.ef7ed2fc.js",
    "revision": "445d3a5109987762d18d5cbd675aed2a"
  },
  {
    "url": "assets/js/73.ddcb9d68.js",
    "revision": "e4080293228bc7c314e073c9fc686253"
  },
  {
    "url": "assets/js/74.0e0a9591.js",
    "revision": "755f5b3882880b6cb04dabb9eea1c632"
  },
  {
    "url": "assets/js/75.4628a5f0.js",
    "revision": "97c6eab4f4f966d3883453dfcf752d35"
  },
  {
    "url": "assets/js/76.c17a953d.js",
    "revision": "131eb687cc58e799aea12fb052bb8180"
  },
  {
    "url": "assets/js/77.5feda1f8.js",
    "revision": "289affec97700201c48204fc9c842087"
  },
  {
    "url": "assets/js/78.5e38b08b.js",
    "revision": "af9fb58d2fb6a525bd7dede1ddbbcba7"
  },
  {
    "url": "assets/js/79.108cb759.js",
    "revision": "0ae6220a0687e3f3285dae3f14efcb58"
  },
  {
    "url": "assets/js/8.f25163e8.js",
    "revision": "4e87d08c3c11840c8ba896d35f8ec13e"
  },
  {
    "url": "assets/js/80.f7ddd34e.js",
    "revision": "a98414f89d1463cb7843c457fda3edc0"
  },
  {
    "url": "assets/js/81.bfc6f336.js",
    "revision": "3436e206775d3c33d0de9c968fa6ff4a"
  },
  {
    "url": "assets/js/82.2a9e9bf5.js",
    "revision": "eda276e65cf5f8612bebbf6e2724eb19"
  },
  {
    "url": "assets/js/83.f8816208.js",
    "revision": "da554ea3cd092923640120cec4b69f89"
  },
  {
    "url": "assets/js/84.89fe1689.js",
    "revision": "7d7bd14b3ca33564d53e30d0c247b29a"
  },
  {
    "url": "assets/js/85.5b09e23e.js",
    "revision": "aa90004b5f822e6bad1617ec7e2fb88e"
  },
  {
    "url": "assets/js/86.701ef868.js",
    "revision": "d8521fb9fdc3ad5947b521bd4aea2a6b"
  },
  {
    "url": "assets/js/9.8397584b.js",
    "revision": "422e37bf63d8d1b8ddd2813e7d5a989c"
  },
  {
    "url": "assets/js/app.ed0ae8ae.js",
    "revision": "b1906660d2f31e6acfd22a903863d546"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "51a362e3993967b77266175115f411da"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "603facfe96b3680815721c3bf58202ad"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "d011465101150fa859ff3b7bc9dd0e81"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "ffb7b9bb6378a1618b3ac0299dc65836"
  },
  {
    "url": "FAQ/Console/A004.html",
    "revision": "23f014112adfbd5033f978146d51a695"
  },
  {
    "url": "FAQ/Console/A005.html",
    "revision": "b20bf51924108cf07e36e4b2fbe1ee9f"
  },
  {
    "url": "FAQ/Console/A006.html",
    "revision": "7a3d7a22857334325c1ecaa040e76136"
  },
  {
    "url": "FAQ/Console/A007.html",
    "revision": "b2f8addc0852a5e8e37781bffc46d1cd"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "f0c5bdaf762a93f26f01d68dd911a8f0"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "50236c2b885e502b83a145e505f44780"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "c735a5520a7f63b4ddbc77a26e011d51"
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
    "url": "img/Myself/island.png",
    "revision": "4e09cc3d73697cccbca6b0df45b1f184"
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
    "revision": "bea961bc1832a38a6803d8acc581e695"
  },
  {
    "url": "Links/Devil/index.html",
    "revision": "ab987b597563d4a76ed2a41623a49d37"
  },
  {
    "url": "Links/Wiki/index.html",
    "revision": "e64354abac3d1664ebe941d45cb32b06"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "1fe30800e18ff9ce7aa4074279869baf"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "bb72d271970adf4c0dc609540b47848b"
  },
  {
    "url": "Store/index.html",
    "revision": "a59b3347d41885510ef544abe244ae74"
  },
  {
    "url": "Store/Media/Anime/Animed.html",
    "revision": "f02422ed58a8d8d30a9baaaaec7605b9"
  },
  {
    "url": "Store/Media/Anime/AnimeHome.html",
    "revision": "0e29d6b854456e5fb74b04b476b03408"
  },
  {
    "url": "Store/Media/Anime/AnimeLay.html",
    "revision": "def31acb82f8c5d99625c3897601f79a"
  },
  {
    "url": "Store/Media/Anime/AnimeSec.html",
    "revision": "2dba0916ccfb41d7b645eb4462d89d5e"
  },
  {
    "url": "Store/Media/Anime/AnimeWill.html",
    "revision": "66f8b663c6b5c48fd0f7cf93fb5ef42d"
  },
  {
    "url": "Store/Media/Anime/Animing.html",
    "revision": "7c2b64d7468edc325ebc7ab14e5c1e40"
  },
  {
    "url": "Store/Media/Books/Booked.html",
    "revision": "66f23605d020fa341694b1d732776cce"
  },
  {
    "url": "Store/Media/Books/Booking.html",
    "revision": "1b950f61af70850fd57f2e9bc299b22f"
  },
  {
    "url": "Store/Media/Books/BookLay.html",
    "revision": "21e95a0c2c872512c799d74dc5eb39c8"
  },
  {
    "url": "Store/Media/Books/BookSec.html",
    "revision": "013a24a609a2625863b06a1b3a891850"
  },
  {
    "url": "Store/Media/Books/BooksHome.html",
    "revision": "f626c7ba99c8a8ae38c32badeb9513b7"
  },
  {
    "url": "Store/Media/Books/BookWill.html",
    "revision": "a9fcfc8022a2531b32ea7fa56ec9f697"
  },
  {
    "url": "Store/Media/Films/Filmed.html",
    "revision": "d0d54061010fa7e9ecdf19ca2f5226e2"
  },
  {
    "url": "Store/Media/Films/Filming.html",
    "revision": "c05be5aa4a801a923b1a49035b6bdea2"
  },
  {
    "url": "Store/Media/Films/FilmLay.html",
    "revision": "fae7a425a25ddf5d5c6222674a68e028"
  },
  {
    "url": "Store/Media/Films/FilmSec.html",
    "revision": "d55e3d6e465622c0ed7541ee81dae3f0"
  },
  {
    "url": "Store/Media/Films/FilmsHome.html",
    "revision": "2316c3fa7d22c7deb906a78ec2a5a59d"
  },
  {
    "url": "Store/Media/Films/FilmWill.html",
    "revision": "2ae75f8cd60dd06f43baf7c227cc811f"
  },
  {
    "url": "Thought/index.html",
    "revision": "6831d7d6b5f518239791ec24d8373cc4"
  },
  {
    "url": "Thought/Novels/Named/index.html",
    "revision": "614a82a9738e14926e3e3291b64709b9"
  },
  {
    "url": "Thought/Novels/Named/named_s1_001.html",
    "revision": "3e48b312b0d2077337d828551ce3bf3b"
  },
  {
    "url": "Thought/Novels/Named/named_s1_002.html",
    "revision": "710ae4ca5ef0967129a9385c4111a019"
  },
  {
    "url": "Thought/Novels/Named/named_s1_003.html",
    "revision": "d3784ed574280fabc65ee72eb9074c31"
  },
  {
    "url": "Thought/Novels/Named/named_s1_004.html",
    "revision": "61fd8c4da5ef0f9783ddd380f1f2e5cb"
  },
  {
    "url": "Thought/Novels/Named/named_s1_005.html",
    "revision": "85e55591c270cbe6f9c2d064c46b08f6"
  },
  {
    "url": "Thought/Novels/Named/named_s1_006.html",
    "revision": "9b15d0e52a6e36809efcb7ee5a581992"
  },
  {
    "url": "Thought/Novels/Named/named_s1_007.html",
    "revision": "8b634fb6d45592e4fcda641eb137128a"
  },
  {
    "url": "Thought/Novels/Named/named_s1_008.html",
    "revision": "e414cb3e96e92841d3f6c2b76a732573"
  },
  {
    "url": "Thought/Novels/Named/named_s1_009.html",
    "revision": "284d37b91163a178e894a96be1e34439"
  },
  {
    "url": "Thought/Novels/Named/named_s1_010.html",
    "revision": "1bfd86fc15bc8461d118add798aeb007"
  },
  {
    "url": "Thought/Novels/Named/named_s1_011.html",
    "revision": "eea52061e83a2c117cb41ddafa7cddfa"
  },
  {
    "url": "Thought/Novels/Named/named_s1_012.html",
    "revision": "8a081e9c6ef2ffed135db68d417bfe1f"
  },
  {
    "url": "Thought/Novels/Named/named_s1_013.html",
    "revision": "84cf4648c921271594aa297a97f63246"
  },
  {
    "url": "Thought/Novels/Named/named_s1_014.html",
    "revision": "fd0621c5cf9f272cb578e27b2c1b42ed"
  },
  {
    "url": "Thought/Novels/Named/named_s1_015.html",
    "revision": "c99c9ef08fa84f0e20a6f7cdd6b93a3f"
  },
  {
    "url": "Thought/Novels/Named/named_s1_016.html",
    "revision": "25577f66ec0f2751bc91703c0ef4ea02"
  },
  {
    "url": "Thought/Novels/Named/named_s1_017.html",
    "revision": "3d732b2217dd4651a54e16f6edae666c"
  },
  {
    "url": "Thought/Novels/Named/named_s1_018.html",
    "revision": "619b77dec850162a5607f8d16243c456"
  },
  {
    "url": "Thought/Novels/Named/named_s1_019.html",
    "revision": "7ac9d8c6a627f7a9f8efd6e276778c1d"
  },
  {
    "url": "Thought/Novels/Named/named_s1_020.html",
    "revision": "a66bb339fd42830e40dca2b840578391"
  },
  {
    "url": "Thought/TheWord/AmericanGods.html",
    "revision": "7d24d8c2b80312dc6225f0e7c91d5e3f"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "d8e66972ae344826d6573fe4d7153299"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "6729146cd21c674a9c03f25b4611f343"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "ac76b7260b36378398e25e850ecc2839"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "3381f8a46d9e56813a5e6306df888203"
  },
  {
    "url": "Thought/Words/W002.html",
    "revision": "0cf6339b541e13d7dc91d39bef21f6b0"
  },
  {
    "url": "Thought/Words/W003.html",
    "revision": "bbbeb6357938af2c00fa78b8ac483e6f"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "597228831504b3c965c1cad7c8b734a6"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "40d4702b343cb63514f2a4813f6387ab"
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
