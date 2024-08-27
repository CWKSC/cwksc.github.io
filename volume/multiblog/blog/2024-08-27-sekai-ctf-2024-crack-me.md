---
title: SekaiCTF 2024 Reverse Crack Me
description: 好簡單嘅題目，但無聊得滯試下寫篇文章記低佢，包括試錯經歷 ...
authors: cwksc
tags: []
---

# SekaiCTF 2024 Reverse Crack Me

好簡單嘅題目，但無聊得滯試下寫篇文章記低佢，包括試錯經歷

個 apk 我 backup 咗喺 [github.com/CWKSC/ctf/sekai-ctf-2024/crack-me/CrackMe.apk](https://github.com/CWKSC/ctf/blob/main/sekai-ctf-2024/crack-me/CrackMe.apk)

見到 android apk 題目，直接改副檔名去 `.zip` 然後再 unzip 佢，解壓縮嘅時候會見到重複覆蓋，唔使擔心，確認或者跳過

unzip 可以睇到大約框架，但反編譯唔到字節碼，睇唔到 code

<!-- truncate -->

![](./2024-08-27-sekai-ctf-2024-crack-me/init-vscode-structure.jpg)

要睇多啲嘢要用其他方法，例如：

- https://www.decompiler.com/ （下載落嚟話無效）

- https://apktool.org/ （我太蠢唔識裝）

- https://github.com/skylot/jadx （最尾搵咗呢個）

去 [releases](https://github.com/skylot/jadx/releases) 下載，用 `jadx-gui`，你部機本身有 `jre` 就 `jadx-gui-x.x.x-no-jre-win.exe`，冇就直接 `jadx-gui-x.x.x-with-jre-win.zip`

![](./2024-08-27-sekai-ctf-2024-crack-me/jadx-gui-init.jpg)

`Source code` 入面值得留意嘅部分明顯係 `SekaiCTF.CrackMe`

![](./2024-08-27-sekai-ctf-2024-crack-me/jadx-gui-source-code.jpg)

但睇吓入面啲 code 就知冇乜用的，佢動態加載咗啲嘢

留意 file / folder 名會發現呢個係 `React Native` project

Google search 發現以下文章

[Android Attack: Reversing React Native Applications – Security Queens](https://securityqueens.co.uk/android-attack-reversing-react-native-applications/)

[基于React Native开发的非法App破解记录[原创]-软件逆向-看雪-安全社区|安全招聘|kanxue.com](https://bbs.kanxue.com/thread-275942.htm)

真正嘅代碼係 `index.android.bundle` 入面

用一開始改副檔名 unzip 嘅形式，我哋可以喺 `assets` 攞到 `index.android.bundle` 

先試下用 [github.com/ben-sb/javascript-deobfuscator](https://github.com/ben-sb/javascript-deobfuscator) 反混淆

```powershell
npm install -g js-deobfuscator
```

```powershell
js-deobfuscator -h
Usage: cli [options]

Deobfuscate a javascript file

Options:
  -i, --input [input_file]    The input file to deobfuscate (default: "input/source.js")
  -o, --output [output_file]  The deobfuscated output file (default: "output/output.js")
  -h, --help                  display help for command
```

事情冇咁順利，出 error 解唔到

```powershell
js-deobfuscator cli -i .\index.android.bundle -o output.js
C:\...\npm\node_modules\js-deobfuscator\node_modules\shift-parser\src\parser.js:1186
        throw this.createError(ErrorMessages.INVALID_LHS_IN_ASSIGNMENT);
        ^

JsError: [1:34]: Invalid left-hand side in assignment
```

直接單純 beautify 睇下 [github.com/beautifier/js-beautify](https://github.com/beautifier/js-beautify)

```powershell
npm -g install js-beautify
js-beautify .\index.android.bundle > main.js
```




