//기본 배송지 등록 버튼 클릭시
function changeState(state) {
    const stateDiv = document.querySelector(".state-div");
    const stateSpan = stateDiv.querySelector(".icon-check");
    const stateInput = stateDiv.querySelector(".state-input");

    if (state) {
        stateSpan.classList.replace('icon-color:main-6','icon-color:base-6');
        stateInput.value = false;
        return;
    }

    stateSpan.classList.replace('icon-color:base-6','icon-color:main-6');
    stateInput.value = true;
}
