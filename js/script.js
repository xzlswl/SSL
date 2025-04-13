document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript 正在執行...");
    
    /* === 1. 訪客計數器 === */
    const countKey = "visitorCount";
    const visitorCountElement = document.getElementById("visitor-count");

    if (visitorCountElement) {
        let visitorCount = parseInt(localStorage.getItem(countKey)) || 0;
        visitorCount++; // 訪問次數 +1
        localStorage.setItem(countKey, visitorCount);
        visitorCountElement.textContent = visitorCount;
    } else {
        console.warn("訪問次數元素 #visitor-count 未找到，略過計數更新");
    }

    /* === 2. 農曆新年彈窗控制 === */
    const newYearPopup = document.getElementById("newYearPopup");
    const popupClose = document.getElementById("popupClose");

    if (newYearPopup) {
        // 如果改為 false，就不會顯示彈窗
        const showPopup = false; 
        
        // 頁面載入後顯示彈窗,若不顯示彈窗flex修改成none
        newYearPopup.style.display = "none";

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
    const carouselInner = document.getElementById("carousel-inner");
    if (carouselInner) {
        let index = 0;
        const images = carouselInner.querySelectorAll("img");
        const totalImages = images.length;

        if (totalImages > 1) { 
            function animateCarousel() {
                index = (index + 1) % totalImages;
                carouselInner.style.transform = `translateX(-${index * 100}%)`;

                setTimeout(() => requestAnimationFrame(animateCarousel), 3000);
            }
            animateCarousel();
        }
    }
    
    /* === 4. 漂浮按鈕 === */
    const btnContainer = document.querySelector(".floating-btn-container");


    // 按鈕點擊事件（導航到其他頁面）
    document.getElementById("openGallery").addEventListener("click", function () {
        window.location.href = "Graduation.html"; // 跳轉到歷年畢業典禮
    });

    document.getElementById("openVideos").addEventListener("click", function () {
        window.location.href = "Videos.html"; // 跳轉到影片錦集
    });

});
