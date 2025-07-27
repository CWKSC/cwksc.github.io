---
title: SekaiCTF 2024 - Reverse - Crack Me
description: SekaiCTF 2024 一題 reverse，記錄一下，包括試錯經歷  
# authors: cwksc
tags: []
---

# SekaiCTF 2024 - Reverse - Crack Me

SekaiCTF 2024 一題 reverse，記錄一下，包括試錯經歷 

題目 `.apk` 備份了在 [github.com/CWKSC/ctf/sekai-ctf-2024/crack-me/CrackMe.apk](https://github.com/CWKSC/ctf/blob/main/sekai-ctf-2024/crack-me/CrackMe.apk)

`.apk` 本質是 `zip`，可以改副檔名去 `.zip` 然後 `unzip` 它

但沒有反編譯字節碼是看不到 source code

解壓縮時會看到重複覆蓋，確認或者跳過

<!-- truncate -->

![](./2024-08-27-sekai-ctf-2024-reverse-crack-me/init-vscode-structure.jpg)

看 source code 要用其他方法，例如：

- [decompiler.com](https://www.decompiler.com/) （下載完 zip 無效）

- [apktool](https://apktool.org/) （我太笨不會裝）

- [github.com/skylot/jadx](https://github.com/skylot/jadx) （最後找了這個）

去 [releases](https://github.com/skylot/jadx/releases) 下載，用 `jadx-gui`

本身有 `jre` 就 `jadx-gui-x.x.x-no-jre-win.exe`，沒有就 `jadx-gui-x.x.x-with-jre-win.zip`

![](./2024-08-27-sekai-ctf-2024-reverse-crack-me/jadx-gui-init.jpg)

打開 `Source code`

![](./2024-08-27-sekai-ctf-2024-reverse-crack-me/jadx-gui-source-code.jpg)

看 `SekaiCTF.CrackMe` 裏面的 code，它是動態加載

folder 名有 `expo`，這個是 `React Native` project

Google search how to reverse `React Native`：

[Android Attack: Reversing React Native Applications – Security Queens](https://securityqueens.co.uk/android-attack-reversing-react-native-applications/)

[基于React Native开发的非法App破解记录[原创]-软件逆向-看雪-安全社区|安全招聘|kanxue.com](https://bbs.kanxue.com/thread-275942.htm)

真正代碼在 `index.android.bundle` 裏面

用一開始改副檔名 `unzip` 的方式，在 `assets` 找到 `index.android.bundle`

![](./2024-08-27-sekai-ctf-2024-reverse-crack-me/vscode-index-android-bundle.jpg)

先試一下用 [github.com/ben-sb/javascript-deobfuscator](https://github.com/ben-sb/javascript-deobfuscator) 反混淆

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

不太順利，有 error

```powershell
js-deobfuscator cli -i .\index.android.bundle -o output.js
C:\...\npm\node_modules\js-deobfuscator\node_modules\shift-parser\src\parser.js:1186
        throw this.createError(ErrorMessages.INVALID_LHS_IN_ASSIGNMENT);
        ^

JsError: [1:34]: Invalid left-hand side in assignment
```

單純 beautify，用 [github.com/beautifier/js-beautify](https://github.com/beautifier/js-beautify)

```powershell
npm -g install js-beautify
js-beautify .\index.android.bundle > main.js
```

Search `sekai` 發現有趣的東西

![](./2024-08-27-sekai-ctf-2024-reverse-crack-me/vscode-search-sekai-first.jpg)

- `"admin@sekai.team"`

- `validatePassword`

- `"users/" + e.user.uid + '/flag'`

Search 其他字眼 (e.g `ctf`, `flag`, `crackme`, `validatePassword`) 發現：

![](./2024-08-27-sekai-ctf-2024-reverse-crack-me/vscode-search-validate-password.jpg)

![](./2024-08-27-sekai-ctf-2024-reverse-crack-me/vscode-search-config.jpg)

![](./2024-08-27-sekai-ctf-2024-reverse-crack-me/vscode-search-firebase-api.jpg)

有驗證 function，有 config，有 firebase api key

用 admin 電郵同密碼登入 firebase 拿 flag

先看 `validatePassword` 

```js
e.validatePassword = function(e) {
    if (17 !== e.length) return !1;
    var t = R.default.enc.Utf8.parse(b.default.KEY),
        n = R.default.enc.Utf8.parse(b.default.IV);
    return "03afaa672ff078c63d5bdb0ea08be12b09ea53ea822cd2acef36da5b279b9524" === R.default.AES.encrypt(e, t, {
        iv: n
    }).ciphertext.toString(R.default.enc.Hex)
```

長度不是 `17` 返回 `false`

將 input AES 加密，用 `KEY`, `IV` 

再跟 `03afaa672ff078c63d5bdb0ea08be12b09ea53ea822cd2acef36da5b279b9524` 比較

看 config 部分

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

打開 [CyberChef](https://gchq.github.io/CyberChef/) 煮它（[此連結重現結果](https://gchq.github.io/CyberChef/#recipe=AES_Decrypt(%7B'option':'UTF8','string':'react_native_expo_version_47.0.0'%7D,%7B'option':'UTF8','string':'__sekaictf2023__'%7D,'CBC','Hex','Raw',%7B'option':'Hex','string':''%7D,%7B'option':'Hex','string':''%7D)&input=MDNhZmFhNjcyZmYwNzhjNjNkNWJkYjBlYTA4YmUxMmIwOWVhNTNlYTgyMmNkMmFjZWYzNmRhNWIyNzliOTUyNA)）

![](./2024-08-27-sekai-ctf-2024-reverse-crack-me/chef-aes-get-password.jpg)

獲得密碼 `s3cr3t_SEKAI_P@ss`

用 email `admin@sekai.team` 和 password `s3cr3t_SEKAI_P@ss` 連接 firebase

學 firebase 怎麽用，我用 `node.js`

[將 Firebase 新增至您的 JavaScript 專案](https://firebase.google.com/docs/web/setup?hl=zh-tw)

[開始在網站上使用 Firebase 驗證  |  Firebase Authentication](https://firebase.google.com/docs/auth/web/start?hl=zh-tw#sign_in_existing_users)

```powershell
npm install firebase
```

寫 code，基本上都是跟官方 copy，`main.js`: 

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

拿到 flag，完

全程大約一個半鐘

> 原本是用廣東話口語寫的
>
> 但看著看著感覺很不順眼
> 
> 很難閱讀（e.g. 係/嘅/咗/唔），就把他改回書面語了
> 
> (23/9/2024)

