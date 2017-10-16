webpackJsonp([0xfad8502528a1],{373:function(n,e){n.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li>\n<p><a href="#%E4%BE%8B%E5%AD%90">例子</a></p>\n<ul>\n<li><a href="#truthy">Truthy</a></li>\n<li><a href="#falsy">Falsy</a></li>\n</ul>\n</li>\n</ul>',internal:{content:"---\ntitle: JavaScript中的True與False\ndate: 2017-02-02 23:19:53\ntags: JavaScript\n---\n\n這幾天用[Enki](https://www.enki.com/)來學習JavaScript，感覺不錯，**You can't handle the truth!** 有一些特別True/False例子。這裡簡單記錄一下。\n\n最簡單的測試方法：\n```[js]\nfunction test(something){\n  if (something) {\n    console.log(something + ' is true.');\n  } else {\n    console.log(something + ' is false.');\n  }\n}\n```\n# 例子\n## Truthy\n```[js]\ntrue <- true當然是true...\n[1][0]\nnew Date()\nnew Number(0)\nObject\nInfinity\n[]\n```\n以下都是[object Object]:\n```\n{a: false}\n{}\n```\n\n## Falsy\n```[js]\nfalse <- false當然是false...\nundefined\n''\n\"\"\n[1][1] <- undefined\nNaN\nnull\n{}.someKey\n0\n[].length <- 這個是0，所以出false\n```\n\n值得注意的是[]，它本身會是`true`，但如果用`[] == true`的話會輸出`false`，\n而`[] == false`的話會輸出`true`。\n"},frontmatter:{title:"JavaScript中的True與False"}}},pathContext:{slug:"/javascript-true-and-false/"}}}});
//# sourceMappingURL=path---2017-02-03-javascript-true-and-false-36c7b8714e587f699842.js.map