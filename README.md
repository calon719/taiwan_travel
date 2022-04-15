# The F2E 前端 & UI 修煉精神時光屋 第一關
## 使用技術
- Vue 3
- Vue Router
- Vue CLI
- Tailwind CSS

## 使用 plugin
- SweetAlert2
- Axios
- Vue Loading Overlay
- Bootstrap Icons
- jsSHA

## 開發心得
### 嘗試使用 async await
這次一個畫面要串接 2 個以上的 API，直接用 Promise 的 then 接會變的很長，所以嘗試使用之前沒用過的 async await 語法，在所有請求的回來後隱藏 Loading 動畫。

### 串接 TDX API
API 可以代多樣的參數進去，但是資料的 id、name 前面都有加上 path 的文字，例如：HotelID、ActivityID 等等，要額外重新組字串。
另外，有些沒有圖片要使用預設圖片避免破圖。

### 列印頁面
雖然使用的 JavaScript 語法很簡單，但要額外設定 CSS 才能符合想要列印的畫面。

### 分享網頁至 SNS
使用比較簡單的作法，直接 a 標籤並將各個 SNS 的分享連結代入要分享的頁面網址。
