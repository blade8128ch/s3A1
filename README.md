
<h1>我的餐廳清單<h1>
  
![cv](./public/stylesheets/a7.png)

<h2>介紹</h2>
餐廳清單，可以瀏覽餐廳、查看詳細資訊、甚至連結到地圖。
<h3>功能</h3>

- 查看所有餐廳
- 瀏覽餐廳的詳細資訊
- 連結餐廳的地址到 Google 地圖
- 搜尋特定餐廳
- CRUD

<h2>開始使用</h2>
1. 請先確認有安裝 node.js 與 npm

2. 將專案 clone 到本地
   
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```

4. 安裝完畢後，繼續輸入：
載入種子資料
   ```bash
   npm run seed
   ```

啟動網頁
   ```bash
   npm run start
   ```

6. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Listening on http://localhost:3000
   ```
若要新增資料,可使用以下範例
   ```bash
   name : $任意字串
   category: $任意字串
   image : https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg
   location: $任意字串
   phone: $任意字串
   google_map : https://goo.gl/maps/BJdmLuVdDbw
   rating: $任意數字
   description: $任意字串
   ```

7. 若欲暫停使用

   ```bash
   ctrl + c
   ```
<h2>開發工具</h2>

- Node.js 14.16.0
- Express 4.16.4
- Express-Handlebars 4.0.2
- mongoose 5.9.7
- body-parser 1.20.2
- dotenv 16.3.1

