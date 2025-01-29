document.addEventListener("DOMContentLoaded", function () {
    /* === 1. 訪客計數器 === */
    const countKey = "visitorCount";
    const visitorCountElement = document.getElementById("visitor-count");

    if (visitorCountElement) {
        let visitorCount = parseInt(localStorage.getItem(countKey)) || 0;
        visitorCount++; // 訪問次數 +1
        localStorage.setItem(countKey, visitorCount);
        visitorCountElement.textContent = visitorCount;
    } else {
        console.error("訪問次數元素 #visitor-count 未找到，請檢查 HTML 內是否正確放置 id");
    }

    /* === 2. 農曆新年彈窗控制 === */
    const newYearPopup = document.getElementById("newYearPopup");
    const popupClose = document.getElementById("popupClose");

    if (newYearPopup) {
        // 如果改為 false，就不會顯示彈窗
        const showPopup = false; 
        
        // 頁面載入後顯示彈窗,若不顯示彈窗flex修改成none
        newYearPopup.style.display = "flex";

        // 點擊 X 按鈕關閉
        popupClose.addEventListener("click", () => {
            newYearPopup.style.display = "none";
        });

        // 點擊背景關閉彈窗
        newYearPopup.addEventListener("click", (e) => {
            if (e.target === newYearPopup) {
                newYearPopup.style.display = "none";
            }
        });
    }

    /* === 3. 跑馬燈（Carousel）自動滾動 === */
    const carousel = document.getElementById("carousel");
    let index = 0;
    const images = carousel.querySelectorAll("img"); // 抓取所有圖片
    const totalImages = images.length;
    
    function startCarousel() {
        if (!carousel) return;
        setInterval(() => {
            index = (index + 1) % totalImages; // 確保索引值在範圍內循環
            carousel.scrollTo({
                left: carousel.offsetWidth * index, 
                behavior: "smooth"
            });
        }, 3000); // 每 3 秒滾動
    }
    startCarousel();

});
