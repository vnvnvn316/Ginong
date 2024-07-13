//section과 버튼 객체로 가져오기
const locationSection = document.querySelector(".location-info");
const prdSection = document.querySelector(".prd-list")
const changeBtn = locationSection.querySelector(".n-btn");

    //변경버튼을 클릭했을 때 location-pop.html 자식창 띄우기
    changeBtn.onclick = function (){

        const selectedId = prdSection.querySelector(".location-id").value;
        const popup = window.open("/location-pop", "_blank", "width=600,height=200, top=250,left=100");

        // 자식 창이 로드된 후에 메시지를 보냄
        popup.onload = function() {
            popup.postMessage(selectedId, "*");
        };

    }

//--------------------------------------------------------




