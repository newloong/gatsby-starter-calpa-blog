webpackJsonp([0xbf0c9aa6cfc],{386:function(e,n){e.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#%E5%8F%83%E8%80%83%E8%B3%87%E6%96%99">參考資料</a></li>\n</ul>',internal:{content:"---\ntitle: 【React Native】安裝Android Apk而無需連接伺服器的方法\ndate: 2017-04-11 17:41\ntags:\n  - React Native\n---\n\n正常情況下，我們會用命令`react-native run-android`來在自己的電話中測試app，但是這個方法需要連接電腦。\n\n我們可以利用以下命令：\n```\nreact-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug\n\ncd android\n./gradlew assembleDebug\n```\n\n## 參考資料\n1. [Build and Install unsigned apk on device without the development server? - stackoverflow](http://stackoverflow.com/questions/35283959/build-and-install-unsigned-apk-on-device-without-the-development-server)\n"},frontmatter:{title:"【React Native】安裝Android Apk而無需連接伺服器的方法"}}},pathContext:{slug:"/react-native-run-android/"}}}});
//# sourceMappingURL=path---2017-04-11-react-native-run-android-d83b0908109e8c0ba9e9.js.map