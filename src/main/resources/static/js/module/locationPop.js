//section과 버튼 객체로 가져오기
const locationSection = document.querySelector(".location-info");
const changeBtn = locationSection.querySelector(".n-btn");

//버튼을 클릭했을 때 location-pop.html 자식창 띄우기
changeBtn.onclick = function (){
    window.open("/location-pop","_blank","width=600,height=200, top=250,left=400");
}

//--------------------------------------------------------




