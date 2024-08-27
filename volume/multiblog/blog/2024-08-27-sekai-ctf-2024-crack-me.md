---
title: SekaiCTF 2024 Reverse - Crack Me
description: 好簡單嘅題目，但無聊得滯試下寫篇文章記低佢，包括試錯經歷 ...
authors: cwksc
tags: []
---

# SekaiCTF 2024 Reverse - Crack Me

好簡單嘅題目，但無聊得滯試下寫篇文章記低佢，包括試錯經歷

個 apk 我 backup 咗喺 [github.com/CWKSC/ctf/sekai-ctf-2024/crack-me/CrackMe.apk](https://github.com/CWKSC/ctf/blob/main/sekai-ctf-2024/crack-me/CrackMe.apk)

見到 android apk 題目，直接改副檔名去 `.zip` 然後再 unzip 佢，解壓縮嘅時候會見到重複覆蓋，唔使擔心，確認或者跳過

`apk` 本質係 `zip`，unzip 可以睇到大約框架，但反編譯唔到字節碼，睇唔到 source code

<!-- truncate -->

![](./2024-08-27-sekai-ctf-2024-crack-me/init-vscode-structure.jpg)

睇多啲嘢要用其他方法，例如：

- [www.decompiler.com](https://www.decompiler.com/) （下載完個 zip 落嚟話無效）

- [apktool](https://apktool.org/) （我太蠢唔識裝）

- [github.com/skylot/jadx](https://github.com/skylot/jadx) （最尾搵咗呢個）

去 [releases](https://github.com/skylot/jadx/releases) 下載，用 `jadx-gui`，你部機本身有 `jre` 就 `jadx-gui-x.x.x-no-jre-win.exe`，冇就直接 `jadx-gui-x.x.x-with-jre-win.zip`

![](./2024-08-27-sekai-ctf-2024-crack-me/jadx-gui-init.jpg)

打開 `Source code`

![](./2024-08-27-sekai-ctf-2024-crack-me/jadx-gui-source-code.jpg)

值得留意嘅部分明顯係 `SekaiCTF.CrackMe`

但睇吓入面啲 code 就知冇乜用，佢動態加載咗啲嘢

留意 folder 名見到係 `React Native` project

有 `expo`

Google search 點 reverse `React Native` 發現以下文章

[Android Attack: Reversing React Native Applications – Security Queens](https://securityqueens.co.uk/android-attack-reversing-react-native-applications/)

[基于React Native开发的非法App破解记录[原创]-软件逆向-看雪-安全社区|安全招聘|kanxue.com](https://bbs.kanxue.com/thread-275942.htm)

真正嘅代碼係 `index.android.bundle` 入面

用一開始改副檔名 unzip 嘅形式，可以喺 `assets` 攞到 `index.android.bundle` file

![](./2024-08-27-sekai-ctf-2024-crack-me/vscode-index-android-bundle.jpg)

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

直接單純 beautify 睇下，用 [github.com/beautifier/js-beautify](https://github.com/beautifier/js-beautify)

```powershell
npm -g install js-beautify
js-beautify .\index.android.bundle > main.js
```

Search `sekai` 即刻發現啲好有趣嘅嘢

![](./2024-08-27-sekai-ctf-2024-crack-me/vscode-search-sekai-first.jpg)

- `"admin@sekai.team"`

- `validatePassword`

- `"users/" + e.user.uid + '/flag'`

查其他字眼 (e.g `ctf`, `flag`, `crackme`, `validatePassword`) 發現：

![](./2024-08-27-sekai-ctf-2024-crack-me/vscode-search-validate-password.jpg)

![](./2024-08-27-sekai-ctf-2024-crack-me/vscode-search-config.jpg)

![](./2024-08-27-sekai-ctf-2024-crack-me/vscode-search-firebase-api.jpg)

有驗證 function，有 config，有 firebase api key

睇上去係用 admin 電郵同密碼登入 firebase 攞 flag

先睇 `validatePassword` 

```js
e.validatePassword = function(e) {
    if (17 !== e.length) return !1;
    var t = R.default.enc.Utf8.parse(b.default.KEY),
        n = R.default.enc.Utf8.parse(b.default.IV);
    return "03afaa672ff078c63d5bdb0ea08be12b09ea53ea822cd2acef36da5b279b9524" === R.default.AES.encrypt(e, t, {
        iv: n
    }).ciphertext.toString(R.default.enc.Hex)
```

長度唔係 17 返回 false

將 input 用 AES 加密，用 `KEY`, `IV` 

再同 `03afaa672ff078c63d5bdb0ea08be12b09ea53ea822cd2acef36da5b279b9524` 比較

睇 config 部分

```js
var _ = {
    LOGIN: "LOGIN",
    EMAIL_PLACEHOLDER: "user@sekai.team",
    PASSWORD_PLACEHOLDER: "password",
    BEGIN: "CRACKME",
    SIGNUP: "SIGN UP",
    LOGOUT: "LOGOUT",
    KEY: "react_native_expo_version_47.0.0",
    IV: "__sekaictf2023__"
};
```

有 `KEY`, `IV`，可以 decrypt

打開 [gchq.github.io/CyberChef](https://gchq.github.io/CyberChef/) 煮下佢（[此連結重現結果](https://gchq.github.io/CyberChef/#recipe=AES_Decrypt(%7B'option':'UTF8','string':'react_native_expo_version_47.0.0'%7D,%7B'option':'UTF8','string':'__sekaictf2023__'%7D,'CBC','Hex','Raw',%7B'option':'Hex','string':''%7D,%7B'option':'Hex','string':''%7D)&input=MDNhZmFhNjcyZmYwNzhjNjNkNWJkYjBlYTA4YmUxMmIwOWVhNTNlYTgyMmNkMmFjZWYzNmRhNWIyNzliOTUyNA)）

![](./2024-08-27-sekai-ctf-2024-crack-me/chef-aes-get-password.jpg)

獲得密碼 `s3cr3t_SEKAI_P@ss`

終於到最後部分

用 email `admin@sekai.team` 同 password `s3cr3t_SEKAI_P@ss` 連接 firebase

學 firebase 點用，我用 `node.js`

[將 Firebase 新增至您的 JavaScript 專案](https://firebase.google.com/docs/web/setup?hl=zh-tw)

[開始在網站上使用 Firebase 驗證  |  Firebase Authentication](https://firebase.google.com/docs/auth/web/start?hl=zh-tw#sign_in_existing_users)

```powershell
npm install firebase
```

寫 code，基本上都係跟官方 copy，`main.js`: 

```js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCR2Al5_9U5j6UOhqu0HCDS0jhpYfa2Wgk",
    authDomain: "crackme-1b52a.firebaseapp.com",
    projectId: "crackme-1b52a",
    storageBucket: "crackme-1b52a.appspot.com",
    messagingSenderId: "544041293350",
    appId: "1:544041293350:web:2abc55a6bb408e4ff838e7",
    measurementId: "G-RDD86JV32R",
    databaseURL: "https://crackme-1b52a-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

const email = "admin@sekai.team";
const password = "s3cr3t_SEKAI_P@ss";
const auth = getAuth(app);

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("Signed in")
        const user = userCredential.user;
        console.log(user)

        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${user.uid}/flag`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        })
    })
```

```powershell
node .\main.js
```

```
SEKAI{15_React_N@71v3_R3v3rs3_H@RD???}
```

攞到 flag，完

全程大約一個半鐘


