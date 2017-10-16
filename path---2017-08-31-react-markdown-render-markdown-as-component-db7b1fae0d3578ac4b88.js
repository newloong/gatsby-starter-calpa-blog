webpackJsonp([0xbc37f83b9468],{412:function(n,a){n.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#%E5%89%8D%E8%A8%80">前言</a></li>\n<li>\n<p><a href="#react-markdown">react-markdown</a></p>\n<ul>\n<li><a href="#%E5%AE%89%E8%A3%9D">安裝</a></li>\n<li><a href="#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95">使用方法</a></li>\n<li><a href="#webpack-1-%E9%85%8D%E7%BD%AE">Webpack 1 配置</a></li>\n<li><a href="#%E9%81%B8%E9%A0%85">選項</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#markdown-%E8%AA%9E%E6%B3%95">Markdown 語法</a></p>\n<ul>\n<li><a href="#%E6%A8%99%E9%A1%8C">標題</a></li>\n<li><a href="#%E6%B8%85%E5%96%AE">清單</a></li>\n</ul>\n</li>\n<li><a href="#%E5%BE%8C%E8%A8%98">後記</a></li>\n</ul>',internal:{content:"---\ntitle: React-markdown -- 實時渲染 Markdown 的 React 工具\ndate: 2017-08-31 14:25:00\ntags:\n  - React\n  - Markdown\nheaderSize: contain;\nheaderBackgroundColor: fff\ntheme: white\n# translator: Calpa\n# author:\nbackground-position-x: 50%\n\nmagic: false\nheaderImage: IYhTVXU.png\nshare-img: https://i.imgur.com/UtbKsLJ.jpg\n# juejin: 59a2419a51882524481c9309\n# imgur: https://imgur.com/a/BiUy9\n---\n\n## 前言\n\n要寫出優雅的文檔是有難度的，尤其是需要格式規範的文章。而利用 Markdown，則可以專心寫作。Markdown 除了可以直接編譯為 HTML，還能編譯為 PowerPoint, Resume，還有 React 組件。無論是[利用 Markdown 製作 PowerPoint](https://calpa.me/2017/06/01/create-markdown-powerpoint-in-5-mins/)，還是利用 Markdown 製作簡歷，都是非常方便的。如果你不是很熟悉 Markdown 語法的話，你可以在下文看 [Markdown 語法](#Markdown-語法)。但是如果可以接受他人傳進來的 Markdown 文章，然後渲染他們的文章，那就會更加好。所以我就找了一下 React + Markdown 的組合，發現這個 React-markdown 工具下載的人數蠻多的。雖然那個項目還在開發階段，但是你可以在 [Live Demo](http://rexxars.github.io/react-markdown) 測試一下渲染為 React 組件的效果。\n\n---\n\n![Live Demo](https://i.imgur.com/UFkBeEN.png)\n\n![直接渲染為 React 組件](https://i.imgur.com/q2q2RJv.png)\n\n## react-markdown\n\nGithub: https://github.com/rexxars/react-markdown\nnpmjs: https://www.npmjs.com/package/react-markdown\n\n### 安裝\n```\nnpm install --save react-markdown\n```\n\n### 使用方法\n使用 ES6 Import `ReactMarkdown`，然后使用 <ReactMarkdown />，並傳入 Markdown 到 source。\n\n```js\nimport ReactMarkdown from 'react-markdown';\n\nconst input = '# This is a header\\n\\nAnd this is a paragraph';\n\n<ReactMarkdown source={input} />\n```\n\n然後你會看到這樣的：\n\n![React Markdown 例子](https://i.imgur.com/zR2Olai.png)\n\n官網上是這樣說的：\n```js\nvar React = require('react');\nvar ReactDOM = require('react-dom');\nvar ReactMarkdown = require('react-markdown');\n\nvar input = '# This is a header\\n\\nAnd this is a paragraph';\n\nReactDOM.render(\n    <ReactMarkdown source={input} />,\n    document.getElementById('container')\n);\n```\n\n### Webpack 1 配置\n\n如果你是用 Webpack 1 的話，你需要安裝 json-loader：\n```\nnpm install --save json-loader\n```\n\n並在你的 webpack 設置裡面加上：\n\n```js\n{\n  module: {\n    loaders: [{\n      test: /\\.json$/,\n      loader: 'json-loader'\n    }]\n  }\n}\n```\n\n如果你設置 `escapeHtml` 或 `skipHtml` 為 `true`，該組件就不會使用`dangerouslySetInnerHTML`。\n\n### 選項\n\n以下選項除了`source`之外都是可選的，其實這個工具已經配置成開箱即用，這裡就說幾個最底部的選項，更多的選項請去官網看。\n\n* `source` - 你的 Markdown 來源（必須）- string\n* `className` - 容器的 className - string\n* `containerTagName` - 容器的標籤名字 ，因為 Markdown 會有很多不同層次的 elements，容器需要把它們封裝。默認是`div` - string\n\n這個渲染器會渲染的組件有：\n\n* `HtmlInline` - 行內 HTML\n* `HtmlBlock` - HTML 塊\n* `Text` - 文字 (在段落裡面)\n* `Paragraph` - 段落 (`<p>`)\n* `Heading` - 標題 (`<h1>`, `<h2>` etc)\n* `Softbreak` - 換行\n* `Hardbreak` - 斷行（強制換行） (`<br>`)\n* `Link` - 鏈接 (`<a>`)\n* `Image` - 圖像 (`<img>`)\n* `Emph` - 強調 (`<em>`)\n* `Code` - Inline code nodes (`<code>`)\n* `CodeBlock` - Blocks of code (`<code>`)\n* `BlockQuote` - 參照 (`<blockquote>`)\n* `List` - 列表 (`<ol>`, `<ul>`)\n* `Item` - 列表 (`<li>`)\n* `Strong` - Strong/bold nodes (`<strong>`)\n* `ThematicBreak` - 水平分割線 (`<hr>`)\n\n## Markdown 語法\n\nMarkdown 的目標是易讀易寫，而它能夠幫助程序員專注開發，減少編寫文檔時候遇到的格式問題。Markdown 和 HTML 的寫法差不多，雖然 HTML 已經很容易寫，但是 Markdown 則是更加格式化，如果你直接閱讀 Markdown 文檔，你也可以想象到它渲染後的樣式。\n\n### 標題\n```\n# H1\n## H2\n### H3\n```\n\n### 清單\n無序清單使用`*`, `+` 或`-`，而我這是常用`-`\n```\n*   Red\n*   Green\n*   Blue\n\n+   Red\n+   Green\n+   Blue\n\n-   Red\n-   Green\n-   Blue\n```\n有序清單則使用數字接著一個英文句點：\n```\n1.  Apple\n2.  Banana\n3.  Watermelon\n```\n\n## 後記\n\n順帶說一下，我的博客已經配置好 Service Worker，現在可以離線訪問網站。也就是下次訪問的時候，即使沒有 Wifi 或者連接到網絡，你也能夠瀏覽到文章內容。\n\n有機會的話，我會說說如何配置 Service Worker，以及當中的原理。\n\n我的簡歷也差不多重構一次了（逃。。。\n"},frontmatter:{title:"React-markdown -- 實時渲染 Markdown 的 React 工具"}}},pathContext:{slug:"/react-markdown-render-markdown-as-component/"}}}});
//# sourceMappingURL=path---2017-08-31-react-markdown-render-markdown-as-component-db7b1fae0d3578ac4b88.js.map