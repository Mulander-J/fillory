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
    "revision": "8924afe94e7ffe09acfa43f0073eb12a"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "371d790f036724264f190edbc6d1feb3"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "06adf5f93366caeca5c1901ad3ae97e2"
  },
  {
    "url": "Another/Review.html",
    "revision": "cf8ceed678d70b3805f15dc9d53c1b96"
  },
  {
    "url": "assets/css/0.styles.01daf759.css",
    "revision": "7eabd9d2542083d5f22bc5b45f435555"
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
    "url": "assets/img/D001_001.0841a01f.png",
    "revision": "0841a01fd0c4946af6f80d1fdf0b24e1"
  },
  {
    "url": "assets/img/D001_002.c5284bfd.png",
    "revision": "c5284bfd8a9a18cc6cb2f081eb867f41"
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
    "url": "assets/img/snap_d001.9cd57df9.jpg",
    "revision": "9cd57df92683e9ce97495409f16d2ebb"
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
    "url": "assets/js/10.f91b199c.js",
    "revision": "88aa8c76d3728b3ab4dd196bdfd175dc"
  },
  {
    "url": "assets/js/11.3221df6b.js",
    "revision": "d0f9e8af01820c656c0ef3146a2f0cdc"
  },
  {
    "url": "assets/js/12.d79a4fdc.js",
    "revision": "0147907f57972466f48bfda50a726a46"
  },
  {
    "url": "assets/js/13.da64ca30.js",
    "revision": "33cc923c679989418c58a44edd1ef4d4"
  },
  {
    "url": "assets/js/14.7f492a52.js",
    "revision": "3f9819c01a1733cb53cfb82ac8e1fa4c"
  },
  {
    "url": "assets/js/15.aee7a1e8.js",
    "revision": "d62c3374840e3c32f172efe77aa7459b"
  },
  {
    "url": "assets/js/16.7da74239.js",
    "revision": "de3c8a1fa13d97d3bac154f42506bfdf"
  },
  {
    "url": "assets/js/17.9293525f.js",
    "revision": "e699f462898dc2325d99d9e6d086fd02"
  },
  {
    "url": "assets/js/18.17c0fd22.js",
    "revision": "3c8baf3e2e6f019b4c9d90389a0d232b"
  },
  {
    "url": "assets/js/19.7db53ad4.js",
    "revision": "3ef495a964358279f6362cf32918749d"
  },
  {
    "url": "assets/js/2.036d41b0.js",
    "revision": "4f4b16ffbe506a757651ba879889b20f"
  },
  {
    "url": "assets/js/20.b6bcf473.js",
    "revision": "f5c7163180f0e8fb67adf832b2615592"
  },
  {
    "url": "assets/js/21.3340a77e.js",
    "revision": "977fed6810b8567d5ff35dab92603f8d"
  },
  {
    "url": "assets/js/22.954ddb28.js",
    "revision": "9d68998898df40b88ec398cb4c961b06"
  },
  {
    "url": "assets/js/23.e814e974.js",
    "revision": "fd34f164150420c37d102dd279d21cd1"
  },
  {
    "url": "assets/js/24.c85561a0.js",
    "revision": "35e071d9686483ac23e04ad8574dd9ab"
  },
  {
    "url": "assets/js/25.6bdc87a8.js",
    "revision": "425af706d73538b1f97e11e288943cf1"
  },
  {
    "url": "assets/js/26.5500f81f.js",
    "revision": "e57c796d2d81f9047ed0aa477012a8d3"
  },
  {
    "url": "assets/js/27.e15df5f5.js",
    "revision": "eb978462ea0e90f3b99afa1f4f8252bd"
  },
  {
    "url": "assets/js/28.4ed49fb7.js",
    "revision": "d713ab51802814d5ef5b3c4551a1c08d"
  },
  {
    "url": "assets/js/29.50520b97.js",
    "revision": "99f95e78052dca1b74e6989da129d597"
  },
  {
    "url": "assets/js/3.7db108b8.js",
    "revision": "cf523468c7daf2d2bcbb6b232c0bbd07"
  },
  {
    "url": "assets/js/30.ba584a8b.js",
    "revision": "b2a88005f6107db2f55ea53eea43603a"
  },
  {
    "url": "assets/js/31.348c045c.js",
    "revision": "21061cd139577675a8fec5c7fe8d0fa1"
  },
  {
    "url": "assets/js/32.3e8fa38f.js",
    "revision": "0e93e7b1b750580f280590b7f052144a"
  },
  {
    "url": "assets/js/33.5b7e3439.js",
    "revision": "9a1ec9352c029f67e4c33621020e8d3c"
  },
  {
    "url": "assets/js/34.e98de0c3.js",
    "revision": "478e878ee0f5f988e1d91b5d171f654e"
  },
  {
    "url": "assets/js/35.d6cd8922.js",
    "revision": "ba34fcd0afac90ea86bc1608639b6acc"
  },
  {
    "url": "assets/js/36.3d44a28a.js",
    "revision": "2afe78d9e3b3a6336161f140209e9f5e"
  },
  {
    "url": "assets/js/37.fb043709.js",
    "revision": "1c2c06b1a64da4e5812f125095d3255e"
  },
  {
    "url": "assets/js/38.09603468.js",
    "revision": "609dfb312c9053fbf7ba1f4e5bd5d14d"
  },
  {
    "url": "assets/js/39.c69cd571.js",
    "revision": "f5cb9daa53969c4ac5e0c926f21e02c8"
  },
  {
    "url": "assets/js/4.19f7d1e3.js",
    "revision": "15d9a0eee74d93f48d03ecc6851f97f4"
  },
  {
    "url": "assets/js/40.0203c1fc.js",
    "revision": "e8a791cd4e5940b3c5e1eec0259e5c20"
  },
  {
    "url": "assets/js/41.b24375f2.js",
    "revision": "62bb42681561374ef1901b91646a1a87"
  },
  {
    "url": "assets/js/42.eb510e77.js",
    "revision": "574879d7cf993085456cb4b976cbdd2f"
  },
  {
    "url": "assets/js/43.ce3d66e9.js",
    "revision": "284d381e943da2278aa627e89d43b327"
  },
  {
    "url": "assets/js/44.4811bbd0.js",
    "revision": "546e9c71e8654ec2cfd5d3e2012789ed"
  },
  {
    "url": "assets/js/45.bd9b0d47.js",
    "revision": "8e26d590cb6e0c805531e73bc25fa307"
  },
  {
    "url": "assets/js/46.1d39e93d.js",
    "revision": "e459acc39e3cce0ebec943745136215f"
  },
  {
    "url": "assets/js/47.0c49a58b.js",
    "revision": "4846a35510d367c5ba074bdb49f2769f"
  },
  {
    "url": "assets/js/48.ff0bb0ab.js",
    "revision": "03d80eb424f2df7b6f5518bcea93ae39"
  },
  {
    "url": "assets/js/49.2de7bb7e.js",
    "revision": "5d86f14f3a5137f7cce4039eb4de32f3"
  },
  {
    "url": "assets/js/5.98da4af1.js",
    "revision": "6515778b2796dc6dfa8ac6ffa3cc0859"
  },
  {
    "url": "assets/js/50.586dc1fb.js",
    "revision": "3796914006fea267187dacc089113402"
  },
  {
    "url": "assets/js/51.9dd581f4.js",
    "revision": "5357728b34a22754987a6341d0d705cf"
  },
  {
    "url": "assets/js/52.4d7c520f.js",
    "revision": "8231080c581556a10e69fb3829a565d4"
  },
  {
    "url": "assets/js/53.721b44c6.js",
    "revision": "6dcc02c73aefdf71a7177c070c63a1e6"
  },
  {
    "url": "assets/js/54.49a4eb5a.js",
    "revision": "4d95a35ba669cc6eb5db24347e97f8b4"
  },
  {
    "url": "assets/js/55.bbc998be.js",
    "revision": "d897c0e923d01682ad76d9bd9e9b4d51"
  },
  {
    "url": "assets/js/56.c8200c88.js",
    "revision": "66388684dfa6e02a2dd486da5a11a4cd"
  },
  {
    "url": "assets/js/57.37df529d.js",
    "revision": "17d15baa4f574707ab3c3008675bded6"
  },
  {
    "url": "assets/js/58.2cf37021.js",
    "revision": "85537330991b2bae5edfc95bf70b8ced"
  },
  {
    "url": "assets/js/59.9b65bdc5.js",
    "revision": "9ec21fce896bc24e5cb05e376d79a313"
  },
  {
    "url": "assets/js/6.9477777f.js",
    "revision": "8a6bfebbdc1d39d754b9876e23206ab6"
  },
  {
    "url": "assets/js/60.77c0a7b9.js",
    "revision": "e01405cf2f8edb763f8669d6a60df35f"
  },
  {
    "url": "assets/js/61.50e8b01f.js",
    "revision": "f6f07a05ad3af1d8e0cc76b10c84d93a"
  },
  {
    "url": "assets/js/62.34507b01.js",
    "revision": "8fa29b0643fb64df1dd33ec8e64a20a7"
  },
  {
    "url": "assets/js/63.61f4e567.js",
    "revision": "8243dde3ed733246f5bc5383caa829b6"
  },
  {
    "url": "assets/js/64.357ac223.js",
    "revision": "76c11806f3fe657a35b9f44d7b039f47"
  },
  {
    "url": "assets/js/65.fd3e9322.js",
    "revision": "68c69480b9663fb84fd8c727f234dffe"
  },
  {
    "url": "assets/js/66.c01a1d9f.js",
    "revision": "b3f1815c610cf7a13b01eb9b1a272da7"
  },
  {
    "url": "assets/js/67.69bb12c4.js",
    "revision": "32fa82ae90ded7e7a0936c88341f3272"
  },
  {
    "url": "assets/js/68.b691ac26.js",
    "revision": "3713f5463e72537e3a4edaa860ce554e"
  },
  {
    "url": "assets/js/69.cab044b1.js",
    "revision": "529944c604c9fe4a192d1809dfdb346b"
  },
  {
    "url": "assets/js/7.cab31867.js",
    "revision": "760f8eed4a2cc4058df43f39a202fb71"
  },
  {
    "url": "assets/js/70.30aadbca.js",
    "revision": "f1a51d04442b7885e5a262670e4e4834"
  },
  {
    "url": "assets/js/71.e4cd5e03.js",
    "revision": "039208791e6a16420fbb91f948b16c97"
  },
  {
    "url": "assets/js/72.7459a296.js",
    "revision": "a94e2efdc2dad1be0e39e1a8da376fc9"
  },
  {
    "url": "assets/js/73.0da4cc34.js",
    "revision": "95b4acb65e99915daf01872fca1809a3"
  },
  {
    "url": "assets/js/74.6e6e66c7.js",
    "revision": "cbb880dcf152410b70e8c04445a164fe"
  },
  {
    "url": "assets/js/75.e473c691.js",
    "revision": "9cfac8440812a5bcb8d02146c8f8033b"
  },
  {
    "url": "assets/js/76.569f97d2.js",
    "revision": "7c9fc30d8397d804aa180df3a80b8e42"
  },
  {
    "url": "assets/js/77.1ed8fb4d.js",
    "revision": "45fe3f8ff4845449c1c3cfc2e57858f2"
  },
  {
    "url": "assets/js/78.d5003708.js",
    "revision": "17205285ef7cf56407a3dbe43ddf5366"
  },
  {
    "url": "assets/js/79.ab8e446b.js",
    "revision": "70ecb1945b3a8e549183c512c96883e7"
  },
  {
    "url": "assets/js/8.90aa7fac.js",
    "revision": "c195f45bce28eec32f512210e598392f"
  },
  {
    "url": "assets/js/80.1264a1c9.js",
    "revision": "4c798762343a00bdcc5b1f98b3d7e062"
  },
  {
    "url": "assets/js/81.c8134518.js",
    "revision": "348069d71ca2591912a314c435780337"
  },
  {
    "url": "assets/js/82.2a15029b.js",
    "revision": "531b440e95f787f55414631e58fa7bb9"
  },
  {
    "url": "assets/js/83.9bbe7d8d.js",
    "revision": "9424cb73497ff67c060ef3a1e7d6dc4a"
  },
  {
    "url": "assets/js/84.9431d001.js",
    "revision": "3e3795f4502a39e3ab76cc2e204f235d"
  },
  {
    "url": "assets/js/85.b2e4cd5b.js",
    "revision": "bdb4849ede2a082cc36df6f95bf0f16d"
  },
  {
    "url": "assets/js/86.7aa775ed.js",
    "revision": "550adbf933d0c10e7d946ccfee8065a9"
  },
  {
    "url": "assets/js/87.609020ae.js",
    "revision": "8d489f2724dfe2863820a5f11080a421"
  },
  {
    "url": "assets/js/9.658ef2d8.js",
    "revision": "c61caaa674160c2a841f03f7ce09a0b1"
  },
  {
    "url": "assets/js/app.fb5ec115.js",
    "revision": "69d225143afffb1f2eb8802e3aa3fe2a"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "b1342cda502599be28068bb8dac1ff8a"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "b2d1358bbaf337f256e846e0f4d6ef08"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "3d6ce4a7e45bc2dc5f3a01dd09059b5e"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "1224354ae788be35703c3b47f843d51b"
  },
  {
    "url": "FAQ/Console/A004.html",
    "revision": "2ce4046243fc2e629dbbfe483e1ac077"
  },
  {
    "url": "FAQ/Console/A005.html",
    "revision": "670ad8ce01ccb8aa73d886f58f146507"
  },
  {
    "url": "FAQ/Console/A006.html",
    "revision": "aa1b4b5814a989a063d64e68ed573f7d"
  },
  {
    "url": "FAQ/Console/A007.html",
    "revision": "cdeea95ce80fc61b24218a91ddee7b01"
  },
  {
    "url": "FAQ/DigestionHeap/D001.html",
    "revision": "8cf9e17a1d11dcd579b38fca5d3a9408"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "c86926db73c09d952c138429a875a760"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "d3ab28f27c99a4b029e803577b75ca6f"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "eae263a3c287e83a1f0df781a0c75783"
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
    "revision": "eed56c2b05f992b6c8244ea2da91507e"
  },
  {
    "url": "Links/Devil/index.html",
    "revision": "e4f8d65cdb70c404db71803cafe451dd"
  },
  {
    "url": "Links/Wiki/index.html",
    "revision": "594e81296c323f27eeca79044f5ea157"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "37b72c0bcdf4ca69979214e0adf6edbb"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "b5337532e2e8aa7118b71076f8d0a6b0"
  },
  {
    "url": "Store/index.html",
    "revision": "9ebfa9e68fbd8f7531e35806ef7d9424"
  },
  {
    "url": "Store/Media/Anime/Animed.html",
    "revision": "28b162f49c2d2a6a62f65bf296c170c1"
  },
  {
    "url": "Store/Media/Anime/AnimeHome.html",
    "revision": "29eff29e268e89f500ae5ac49a361ce0"
  },
  {
    "url": "Store/Media/Anime/AnimeLay.html",
    "revision": "5169452a44358f682ab37eb624dc0abb"
  },
  {
    "url": "Store/Media/Anime/AnimeSec.html",
    "revision": "6fa188aebb949bbd70465a327c344048"
  },
  {
    "url": "Store/Media/Anime/AnimeWill.html",
    "revision": "84d893dcf1e785f44261b883a628bf12"
  },
  {
    "url": "Store/Media/Anime/Animing.html",
    "revision": "b9ff47c65f750ae7a36ceb20517a17e8"
  },
  {
    "url": "Store/Media/Books/Booked.html",
    "revision": "52ee0efe933cf0a1d9c4cbc0d223ad75"
  },
  {
    "url": "Store/Media/Books/Booking.html",
    "revision": "a8f0e5ca6b3cff68daaaa2612b5dbc51"
  },
  {
    "url": "Store/Media/Books/BookLay.html",
    "revision": "22c080501e9d535f3fd21a1001b1af0b"
  },
  {
    "url": "Store/Media/Books/BookSec.html",
    "revision": "1a8c18c7fe16485345089174d7e9bbc9"
  },
  {
    "url": "Store/Media/Books/BooksHome.html",
    "revision": "c90d5fad3434f3ae94a6e780105ccd9a"
  },
  {
    "url": "Store/Media/Books/BookWill.html",
    "revision": "b13cd204a22235167a10ede042e3fa5e"
  },
  {
    "url": "Store/Media/Films/Filmed.html",
    "revision": "8a0fae2ceebaa0e49a7b1b5be3bf6b4d"
  },
  {
    "url": "Store/Media/Films/Filming.html",
    "revision": "7ac5fa82857c08728e06ef579b738741"
  },
  {
    "url": "Store/Media/Films/FilmLay.html",
    "revision": "759168c6e8ee629afda451cb4cffa01e"
  },
  {
    "url": "Store/Media/Films/FilmSec.html",
    "revision": "9ec3ce1a8c7bd1baed28e86d4d9ae187"
  },
  {
    "url": "Store/Media/Films/FilmsHome.html",
    "revision": "f3a599d264c16275e0303a37f62e5f91"
  },
  {
    "url": "Store/Media/Films/FilmWill.html",
    "revision": "297e4d618af3afde562728be1c0f6547"
  },
  {
    "url": "Thought/index.html",
    "revision": "d4bc62768504e5c7905be89d0974eaa9"
  },
  {
    "url": "Thought/Novels/Named/index.html",
    "revision": "ecb24022081d3736cbc1f6ba9516df85"
  },
  {
    "url": "Thought/Novels/Named/named_s1_001.html",
    "revision": "c18c6dcdfa2ce81c11bb05a7d46436a9"
  },
  {
    "url": "Thought/Novels/Named/named_s1_002.html",
    "revision": "44bbdfbc6f458b4c2b5144ff33f26437"
  },
  {
    "url": "Thought/Novels/Named/named_s1_003.html",
    "revision": "b109e1706a0d352f54f09629956464c6"
  },
  {
    "url": "Thought/Novels/Named/named_s1_004.html",
    "revision": "bde89755b1b340fbe9cbae616818ce12"
  },
  {
    "url": "Thought/Novels/Named/named_s1_005.html",
    "revision": "9cbcc5908cffe017c51f60d2edc08c06"
  },
  {
    "url": "Thought/Novels/Named/named_s1_006.html",
    "revision": "2b1e878993f2c844fee54940438f093f"
  },
  {
    "url": "Thought/Novels/Named/named_s1_007.html",
    "revision": "bf9a5c508f730246dd3d6f17c2a436f6"
  },
  {
    "url": "Thought/Novels/Named/named_s1_008.html",
    "revision": "a3e5a4da8bf10fdd2b77f99c5bee536c"
  },
  {
    "url": "Thought/Novels/Named/named_s1_009.html",
    "revision": "7bc57c19165f391c8a1613e64cfb92ac"
  },
  {
    "url": "Thought/Novels/Named/named_s1_010.html",
    "revision": "a6c148e07e99413baedc56ccdad3b39d"
  },
  {
    "url": "Thought/Novels/Named/named_s1_011.html",
    "revision": "5df474e3bb1a2c073367d298537141a7"
  },
  {
    "url": "Thought/Novels/Named/named_s1_012.html",
    "revision": "5dfa2c554fe6cd6ff3ea4b9647cc40a4"
  },
  {
    "url": "Thought/Novels/Named/named_s1_013.html",
    "revision": "bcc778b5bbbfee23bb82703cd49b7165"
  },
  {
    "url": "Thought/Novels/Named/named_s1_014.html",
    "revision": "9a960197e2fbe79dc6023e78cf11342a"
  },
  {
    "url": "Thought/Novels/Named/named_s1_015.html",
    "revision": "d29bae55bdf8de0d978c37f680a3cf35"
  },
  {
    "url": "Thought/Novels/Named/named_s1_016.html",
    "revision": "e8bb2698ace778a48dd91909c6537bae"
  },
  {
    "url": "Thought/Novels/Named/named_s1_017.html",
    "revision": "5f410be142cc3abdf4c4c29c726a00ef"
  },
  {
    "url": "Thought/Novels/Named/named_s1_018.html",
    "revision": "5abb6948fd1b24fc7b9151ce10f679da"
  },
  {
    "url": "Thought/Novels/Named/named_s1_019.html",
    "revision": "586deb9f402ba6466e71216e3be68c38"
  },
  {
    "url": "Thought/Novels/Named/named_s1_020.html",
    "revision": "192bd02adb34a7a19a990441fe04dc76"
  },
  {
    "url": "Thought/TheWord/AmericanGods.html",
    "revision": "fc598c371bee1a23e4ba450444f3e4eb"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "5f52681694d5c97ea9812096fb58dc2d"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "f41ef73ce7455967d6b244100a9c3dd3"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "bf0a5071ce33eebd474479fa042ec28e"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "15f6d077b0117f775f33c052602f5ed5"
  },
  {
    "url": "Thought/Words/W002.html",
    "revision": "d4db80dc4ffd79a780a960f5abaa2acc"
  },
  {
    "url": "Thought/Words/W003.html",
    "revision": "3a2df0226ac3a3fc53da19094d273893"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "7be8398f817970c5a5531ad5657c45c3"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "e8b1290c87eb562dcff2efdb4c928271"
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
