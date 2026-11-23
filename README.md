# SSL 網站專案說明文件

本專案託管於 **GitHub Pages**，線上瀏覽網址為：  
👉 [https://xzlswl.github.io/SSL/](https://xzlswl.github.io/SSL/)

---

## 一、 專案檔案與資料夾功能說明

### 1. 網頁頁面（`.html`）
| 檔案名稱 | 功能與修改說明 |
| :--- | :--- |
| `index.html` | **網站首頁**。網站入口頁面，通常搭配 `static/2025.jpg` 與 `static/images/index/` 的活動/聚餐照片呈現。 |
| `About.html` | **關於我們 / 成員介紹頁**。對應 `static/images/About/` 的教授與成員照片（如 `professor_BM.jpg`、`professor_SB.JPG` 及各成員照）。 |
| `Graduated.html` | **畢業校友 / 畢業生專區**。對應 `static/images/Graduated/` 的畢業成員照片。 |
| `Graduation.html` | **畢業典禮相簿頁**。對應 `static/images/Graduation/` 的畢典照片（`畢典 (1).jpg` 至 `畢典 (26).jpg` 等）。 |
| `Daily_life.html` | **日常生活 / 聚餐活動頁**。對應 `static/images/Daily_life/` 的聚餐、慶生、交換禮物、教師節與出遊照片。 |
| `Honor.html` | **榮譽獲獎 / 競賽紀錄頁**。對應 `static/images/Honor/` 的競賽與尾牙照片（如 `全國專題競賽2021.jpg`、`全國專題競賽2023.jpg`）。 |
| `Videos.html` | **影音專區**。放置影片相關內容或連結。 |

### 2. 樣式與互動腳本
| 檔案 / 資料夾 | 功能與修改說明 |
| :--- | :--- |
| `css/style.css` | **網站外觀樣式表**。控制字體、顏色、排版間距與版面呈現；若要改整體視覺風格可調整此檔。 |
| `js/script.js` | **網頁互動腳本**。控制頁面互動效果、選單或動態顯示邏輯。 |

### 3. 圖片與說明文字（`static/`）
| 路徑 | 功能與修改說明 |
| :--- | :--- |
| `static/2025.jpg` | 首頁或年度主視覺相關圖片。 |
| `static/照片設置說明.txt` | **既有照片設置備註**。新增或替換照片前建議先看此檔的命名或尺寸提醒。 |
| `static/images/About/` | 成員與教授大頭照（含預設空圖 `空.jpg`）。 |
| `static/images/Daily_life/` | 日常活動與聚餐照片（檔名多含日期或活動名稱，如 `交換禮物20241225.jpg`、`淡水20250407.jpg`）。 |
| `static/images/Graduated/` | 已畢業成員照片（含 `空.jpg`）。 |
| `static/images/Graduation/` | 畢業典禮照片集。 |
| `static/images/Honor/` | 競賽獲獎與活動照片。 |
| `static/images/index/` | 首頁輪播或精選照片。 |

---

## 二、 共同維護者最常做的兩件事

### 1. 修改文字或頁面內容（直接在 GitHub 網頁改）
1. 在儲存庫找到要修改的 `.html` 檔（例如 `About.html` 或 `Daily_life.html`）。
2. 點擊右上角 **鉛筆圖示（Edit this file）** 進行修改。
3. 填寫修改說明後點擊 **Commit changes**，等待 GitHub Pages 更新（約 1～2 分鐘）即可在網頁看到變化。

### 2. 新增照片
1. 先確認 `static/照片設置說明.txt` 的規範，並盡量將照片檔名設為清楚、不含空白或特殊字元的名稱（例如 `2026_聚餐.jpg`），注意副檔名大小寫（`.jpg` 與 `.JPG` 在部分環境會視為不同檔名）。
2. 到對應的 `static/images/...` 資料夾點擊 **Add file** → **Upload files** 上傳圖片並按 **Commit changes**。
3. 再到對應的 `.html` 檔案中補上或更新該張圖片的路徑。

---

## 三、 如何加入共同維護人員

1. 進入儲存庫，點擊上方 **Settings** → 左側 **Collaborators**。
2. 點擊 **Add people**，輸入對方的 GitHub 帳號或 Email 送出邀請。
3. 請對方到 Email 或 GitHub 通知信箱點選 **Accept invitation**。
4. 對方接受邀請後，即可直接在網頁上修改檔案與上傳照片。
