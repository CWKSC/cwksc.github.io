# SMTP, IMAP, POP3

[什麼是電子郵件？| 電子郵件定義 | Cloudflare](https://www.cloudflare.com/zh-tw/learning/email-security/what-is-email/)

> 繼續郵政系統的類比，假設 Alice 給 Bob 寫了一封感謝信。她將信交給郵遞員 (MTA)，郵遞員將其帶到郵局進行分類。在郵局裡，處理員 (SMTP) 驗證寫在信封上的地址。如果地址看起來寫得正確，且對應至可以接收郵件的位置（MX 伺服器），那麼另一個郵遞員會將信件投遞到 Bob 的信箱。拿到郵件後，Bob 可能會將感謝信放在他的辦公桌抽屜中，他只能在該位置查閱 (POP)，或者他可以將感謝信放在口袋中，以便在任何位置閱讀 (IMAP)。

Email server send SMTP to DNS, check DNS MX record, get IP address, route to another email server

User can use POP or IMAP to receive email from email server

[深入淺出 Email 通訊運作原理 - Weil Jimmer's Blog](https://weils.net/blog/2017/04/19/how-email-works-dkim-all-in-one/)

> 關於IMAP(Internet Message Access Protocol)、POP3(Post Office Protocol)的區別。IMAP簡言之就是會同步Email伺服器的各種動作，在多個裝置同步登入讀取訊息，郵件也是儲存在伺服器上面。而POP3則會將郵件下載到本機的空間，並且從伺服器上面刪除，導致只有第一次取信的客戶端可以拿到信件，其餘都無法取信，因為已經被刪掉了，由於是存在本機，所以是不占用太多伺服器空間，除非一直不去取信。舉例：手機登入POP3伺服器讀取訊息，電腦版再登入電腦版的郵件軟體，是看不到那則訊息的，但假如是用IMAP，則兩台裝置都可以看到信件，並且其中一台已讀，另一台也會跟著已讀。

## IMAP vs POP3

[The Top 4 Differences Between IMAP and POP3 | Spiceworks - Spiceworks](https://www.spiceworks.com/tech/tech-general/articles/imap-vs-pop3/)

IMAP is saving email in email server, can read email many times

POP3 will download and delete from email server, can read email only once

