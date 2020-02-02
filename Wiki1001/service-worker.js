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
    "revision": "f32ced2e160bc2e02a47aeabf0c365a1"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "cc85cc75069e269bcdb78d4cd25d599d"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "202d33ff9e32d8c80c602118969665d9"
  },
  {
    "url": "Another/Review.html",
    "revision": "0f25a7127195d6947187dca477f79ea8"
  },
  {
    "url": "assets/css/0.styles.c173b02c.css",
    "revision": "764c26d53cff67863b951834f48a625c"
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
    "url": "assets/js/11.162ccc44.js",
    "revision": "60692188407fbf94458e37fb148f40e0"
  },
  {
    "url": "assets/js/12.dcd78624.js",
    "revision": "14b92fc22957859a45f01674376c4334"
  },
  {
    "url": "assets/js/13.cd22f373.js",
    "revision": "f07f35638bfb3ae9a510e92b5f8f3e3a"
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
    "url": "assets/js/16.312e6603.js",
    "revision": "66dad06b1fb5dc1c1feae789abbcbf6f"
  },
  {
    "url": "assets/js/17.e03bff4a.js",
    "revision": "b7e7300af8223e8e7ff8d8dde7637fe2"
  },
  {
    "url": "assets/js/18.213a4b7e.js",
    "revision": "88c2b221884722edaa7ca0d5adbad188"
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
    "url": "assets/js/21.e79f494d.js",
    "revision": "a24877c4bf4d378764b2f0ec352d4b15"
  },
  {
    "url": "assets/js/22.3612f508.js",
    "revision": "806f544de9f7d1b932592fe5094c1c98"
  },
  {
    "url": "assets/js/23.f2c5f88a.js",
    "revision": "5141f88aa1e81260a51c8e589e6d71e3"
  },
  {
    "url": "assets/js/24.e8cbbbe5.js",
    "revision": "7a4f5eebf1136f50b18253cd55265da3"
  },
  {
    "url": "assets/js/25.fb1ad8f3.js",
    "revision": "9897750114f82e65ee066b5baad89aee"
  },
  {
    "url": "assets/js/26.ea1f271f.js",
    "revision": "09ed380d59065a835ebe9ca32294aad4"
  },
  {
    "url": "assets/js/27.798401d0.js",
    "revision": "4061feac70340a992d5b29e2e4ad3eb8"
  },
  {
    "url": "assets/js/28.40f7ef29.js",
    "revision": "0fef49e022c7fb705d92cbad99b38091"
  },
  {
    "url": "assets/js/29.27946611.js",
    "revision": "1fb48ae39e7fd88a6ae4cd1ffd41e8db"
  },
  {
    "url": "assets/js/3.6b759527.js",
    "revision": "0e54b7c98ea06530278e941a9e04c845"
  },
  {
    "url": "assets/js/30.c680f7aa.js",
    "revision": "c22f7ca99d5ac61c970e8f372079d35b"
  },
  {
    "url": "assets/js/31.4b28adcc.js",
    "revision": "964300c95aa5d39147425da872993b6b"
  },
  {
    "url": "assets/js/32.7030648c.js",
    "revision": "1953565969f073621e11135dc591588b"
  },
  {
    "url": "assets/js/33.7157b96f.js",
    "revision": "4a5e7265ca7ea398be4034ec46fe6960"
  },
  {
    "url": "assets/js/34.99e64d51.js",
    "revision": "ee21ec01a2586e62dfb19072ff8a895c"
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
    "url": "assets/js/38.9ff19bf4.js",
    "revision": "680ed52e4820525ce653109423f48af6"
  },
  {
    "url": "assets/js/39.0be025f6.js",
    "revision": "c82742912761c2bb27c08f29ba72516b"
  },
  {
    "url": "assets/js/4.52fcafc6.js",
    "revision": "0541124570afc66b2dd6fad1628948f2"
  },
  {
    "url": "assets/js/40.7a95c3a1.js",
    "revision": "a5242b9e571073c21b30cabb98a54ad5"
  },
  {
    "url": "assets/js/41.b4f74378.js",
    "revision": "043f6a8d36af80eabffad6c289c62131"
  },
  {
    "url": "assets/js/42.598f200f.js",
    "revision": "f6e952fb7be9dfe7dd4615717e35517f"
  },
  {
    "url": "assets/js/43.4eeb0028.js",
    "revision": "90af28b95dd802d32c9970ed84a05c06"
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
    "url": "assets/js/53.fbb46c72.js",
    "revision": "0766bf3e287ec76a66c05add9b5f82fa"
  },
  {
    "url": "assets/js/54.0d7df71d.js",
    "revision": "d3366c58edda55afad5d2f4faaf9a93c"
  },
  {
    "url": "assets/js/55.c856c459.js",
    "revision": "33dcdd4b6e9e12de4d8e4672e16d0295"
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
    "url": "assets/js/6.5336d991.js",
    "revision": "2a9c16fc7811be5f9fb6f24185907866"
  },
  {
    "url": "assets/js/60.010e3f10.js",
    "revision": "d1633b8120dc00a08c0bb914f4166ea1"
  },
  {
    "url": "assets/js/61.ac0ec3d0.js",
    "revision": "d8ac112adeb7fb35a702cbe4c6cbf2ff"
  },
  {
    "url": "assets/js/62.dfc7adf4.js",
    "revision": "bd050b16e45a2952875a62b81a80f152"
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
    "url": "assets/js/67.07337abe.js",
    "revision": "8abeaa5381afe0f34fff36d65ebf82e6"
  },
  {
    "url": "assets/js/68.ee4e0c6d.js",
    "revision": "5d396a4913dd8dcc294b5fea4c2e7374"
  },
  {
    "url": "assets/js/69.0165b35d.js",
    "revision": "fb78a8cca446e7ccff0af90a31ffba61"
  },
  {
    "url": "assets/js/7.48355d12.js",
    "revision": "3ee587a3dad17b4019e3595cec26314a"
  },
  {
    "url": "assets/js/70.9824ffe3.js",
    "revision": "1141e712be0c274fe3e1cafd666a7412"
  },
  {
    "url": "assets/js/71.2e4a36bc.js",
    "revision": "47613c72be8b9c72fc723d9e728c193c"
  },
  {
    "url": "assets/js/72.ef7ed2fc.js",
    "revision": "445d3a5109987762d18d5cbd675aed2a"
  },
  {
    "url": "assets/js/73.4c7af1c4.js",
    "revision": "688eeae9b1dc984d3447199a286ca47e"
  },
  {
    "url": "assets/js/74.3595b58b.js",
    "revision": "830d26a1b0be6727c91e474013f00efd"
  },
  {
    "url": "assets/js/75.31e64eb0.js",
    "revision": "9e0cf74c6134184b601a780d8a9d9fff"
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
    "url": "assets/js/84.a94d4cfd.js",
    "revision": "8f792a35b678db7d2e76a8c030bf1a5d"
  },
  {
    "url": "assets/js/85.0c25bc27.js",
    "revision": "45a14da867c9e259a6f5c3e40689eb37"
  },
  {
    "url": "assets/js/86.701ef868.js",
    "revision": "d8521fb9fdc3ad5947b521bd4aea2a6b"
  },
  {
    "url": "assets/js/9.9eae324b.js",
    "revision": "4a86afb1084953673ffb4911ae2f638e"
  },
  {
    "url": "assets/js/app.3f6fdadd.js",
    "revision": "40ccbd0ef0a67181f617144c45a5b8f6"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "89601aa5f21920f323bf42c6b3a1e02c"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "d99cbda783d135bde4ab789516000487"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "3e7247f14c3eede32bf3756ce2f9b438"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "1cd6f339839dde9af27c6254037a5cfb"
  },
  {
    "url": "FAQ/Console/A004.html",
    "revision": "6b6b3b6edbc97ef0c4d6e112c4ee336d"
  },
  {
    "url": "FAQ/Console/A005.html",
    "revision": "ba57dc0e5e437a2ef7547d283dfd16c3"
  },
  {
    "url": "FAQ/Console/A006.html",
    "revision": "456a521628ed20f56a2df68036e9bb87"
  },
  {
    "url": "FAQ/Console/A007.html",
    "revision": "8b2690e70b11400f4ea93014121eafeb"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "40429e184d4ab1d70505c1861d0b146e"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "6a6d5c64845a1b5de2afe218a09efe68"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "ebcfb013ca89fccaf7ffbe2017295c71"
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
    "revision": "dea72e58e977e2daf16625198fdbff35"
  },
  {
    "url": "Links/Devil/index.html",
    "revision": "b71ed17a49f544a8c9a2043807493163"
  },
  {
    "url": "Links/Wiki/index.html",
    "revision": "803cdcd37b6e6438e6e8d8180e63937f"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "82855ead16e8d3d572e0ab2597578fe4"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "5e481a3e82c346e20e334dcc4dc91a1a"
  },
  {
    "url": "Store/index.html",
    "revision": "4309a5d8e4ba12e936a621f72cc77589"
  },
  {
    "url": "Store/Media/Anime/Animed.html",
    "revision": "ccaa3bbecef66a835f09b9a88d8ba781"
  },
  {
    "url": "Store/Media/Anime/AnimeHome.html",
    "revision": "6a13b12e4d69f9c58f4b389a291479a0"
  },
  {
    "url": "Store/Media/Anime/AnimeLay.html",
    "revision": "ab2c487a5e3e74831963e4b385e208cf"
  },
  {
    "url": "Store/Media/Anime/AnimeSec.html",
    "revision": "5ece0cab97c5b9aebe852b3ede08704e"
  },
  {
    "url": "Store/Media/Anime/AnimeWill.html",
    "revision": "a027a431454589fa7cb63b1b30e9f928"
  },
  {
    "url": "Store/Media/Anime/Animing.html",
    "revision": "d7244491a78f050cec334c798e1cd9b9"
  },
  {
    "url": "Store/Media/Books/Booked.html",
    "revision": "35aabc93ce342bff6a88386d8bc22c33"
  },
  {
    "url": "Store/Media/Books/Booking.html",
    "revision": "4229ae82ed5e9d0ae962fbf50a9e2a7e"
  },
  {
    "url": "Store/Media/Books/BookLay.html",
    "revision": "42b6cb8cfc95bac8ed9f44ae98ca5896"
  },
  {
    "url": "Store/Media/Books/BookSec.html",
    "revision": "1b8e296cf5f6e906d3d8ad53817a8b95"
  },
  {
    "url": "Store/Media/Books/BooksHome.html",
    "revision": "99860826e5c4573588b859bfc75cdd48"
  },
  {
    "url": "Store/Media/Books/BookWill.html",
    "revision": "e3d7c69d0445f3c83b4bef88ebb6164f"
  },
  {
    "url": "Store/Media/Films/Filmed.html",
    "revision": "da63626f2b941dedb06b1376bfd85856"
  },
  {
    "url": "Store/Media/Films/Filming.html",
    "revision": "c6bb86bcc74ef0c8533a2da10272e165"
  },
  {
    "url": "Store/Media/Films/FilmLay.html",
    "revision": "95777de39fa73f649ee1d323f42110e9"
  },
  {
    "url": "Store/Media/Films/FilmSec.html",
    "revision": "05e8e2b088e3fb2c76d3b954503254d0"
  },
  {
    "url": "Store/Media/Films/FilmsHome.html",
    "revision": "47afc889b6f67250e540ceb0b1317c79"
  },
  {
    "url": "Store/Media/Films/FilmWill.html",
    "revision": "604c75be1a2b7697307b0a025508cc8c"
  },
  {
    "url": "Thought/index.html",
    "revision": "ddbc105ba4d56724a2ca5e26dfd1b00c"
  },
  {
    "url": "Thought/Novels/Named/index.html",
    "revision": "0759749a259d17db2499704617405b91"
  },
  {
    "url": "Thought/Novels/Named/named_s1_001.html",
    "revision": "910d29873395e4f4cf6f722bcede7876"
  },
  {
    "url": "Thought/Novels/Named/named_s1_002.html",
    "revision": "c36d9332ec5610671f4ef3dd6ad0d856"
  },
  {
    "url": "Thought/Novels/Named/named_s1_003.html",
    "revision": "273174f1d633ab28fa0ea64d4fdaf771"
  },
  {
    "url": "Thought/Novels/Named/named_s1_004.html",
    "revision": "e1f272dd62fe4096b1c166875ec2529c"
  },
  {
    "url": "Thought/Novels/Named/named_s1_005.html",
    "revision": "d30c22486840d434c9e0a22f54cc3046"
  },
  {
    "url": "Thought/Novels/Named/named_s1_006.html",
    "revision": "e2bbf8ee851dd9f86a5977936892b8e3"
  },
  {
    "url": "Thought/Novels/Named/named_s1_007.html",
    "revision": "02c9745fc4ff6f17dc863486f333646b"
  },
  {
    "url": "Thought/Novels/Named/named_s1_008.html",
    "revision": "34bb0a55b74b5ab33214cef46b835df8"
  },
  {
    "url": "Thought/Novels/Named/named_s1_009.html",
    "revision": "7b4dc09c6739d15ae32e8e2b59ea0f5b"
  },
  {
    "url": "Thought/Novels/Named/named_s1_010.html",
    "revision": "535b5751b62a70dff2939f81ae571503"
  },
  {
    "url": "Thought/Novels/Named/named_s1_011.html",
    "revision": "cb8524b826db2b1271388ebeb6dbfa80"
  },
  {
    "url": "Thought/Novels/Named/named_s1_012.html",
    "revision": "a1cb7a0dc26ced07dd6d770b88523565"
  },
  {
    "url": "Thought/Novels/Named/named_s1_013.html",
    "revision": "52ecc37317215c43c4fe9f8bf37d0b82"
  },
  {
    "url": "Thought/Novels/Named/named_s1_014.html",
    "revision": "e90c15bdaf6b462896658056fe563d09"
  },
  {
    "url": "Thought/Novels/Named/named_s1_015.html",
    "revision": "9dcda9baf949396a608f214d61c8a49a"
  },
  {
    "url": "Thought/Novels/Named/named_s1_016.html",
    "revision": "311aef0cfaf431d9c14246a4cc492616"
  },
  {
    "url": "Thought/Novels/Named/named_s1_017.html",
    "revision": "0c5178c729dd3b1696f61b103a34ff03"
  },
  {
    "url": "Thought/Novels/Named/named_s1_018.html",
    "revision": "96c70caf2ebc7f257d443bf5a96dc325"
  },
  {
    "url": "Thought/Novels/Named/named_s1_019.html",
    "revision": "5f5ca6b76357ff98c028ebe8d98feff1"
  },
  {
    "url": "Thought/Novels/Named/named_s1_020.html",
    "revision": "efb66eaac5989dcd33ee02e25b331024"
  },
  {
    "url": "Thought/TheWord/AmericanGods.html",
    "revision": "691ac5deb47bb83531f2cbf15ea9e14d"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "663da92b4500e955d2b6d75e4f19204a"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "050b3bfb2c21d9bf6052a1f18a25d4ce"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "0eaa1352ac218adf04e31b856fb73cc4"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "090314a7eebe077c46b63c202ed9b73e"
  },
  {
    "url": "Thought/Words/W002.html",
    "revision": "c6c41b455060ca96857c4641d0b7dcea"
  },
  {
    "url": "Thought/Words/W003.html",
    "revision": "074043ebb60b185a0054ce03c88dcf24"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "0a1df180d68f79a4e71d35e274bf0326"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "5e822b7f5f09266e01f1e1255b5d1419"
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
