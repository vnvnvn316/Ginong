const { createApp } = Vue;

createApp({
    data() {
        return{
            currentTab : 'info',
            birthDate : '',
            memberList : [],
            locationList : [],
            defaultIctList : [],
            addLocation : '/mypage/location'
        }
    }
    ,methods : {
        formatDate(dateString) {
            // 날짜 문자열을 Date 객체로 변환
            const date = new Date(dateString);
            // 년, 월, 일 추출
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            // yyyy-MM-dd 형식으로 반환
            return `${year}-${month}-${day}`;
        }
        ,cancel(){
            location.href=`index`;
        }
        ,updateLocation(locationId){
            location.href=`location-uptform?locationId=${locationId}`;
        }
        ,confirmDelete(locationId) {
            if(confirm("정말 삭제하시겠습니까?"))
                this.removeItem(locationId);
        }, async removeItem(locationId){
            const url=`/api/member/location/removeItem?locationId=${locationId}`;
            const promise = fetch(url);

            let response = await promise;

            //삭제를 실패한 경우
            if(!response.ok)
               alert("배송지 삭제에 실패했습니다.");

            // 삭제가 성공한 경우 locationList에서 해당 항목 제거
            this.locationList = this.locationList.filter(item => item.id !== locationId);

        },
        //url의 param값에 따른 tab영역 설정
        setInitialTab() {
            const urlParams = new URLSearchParams(window.location.search);
            const tab = urlParams.get('t');

            if (tab)
                this.currentTab = tab;

        }
        , async loadInfolist(){ //회원정보 불러오기

            const infoResponsePromise = fetch("/api/member/userinfo");
            const infoResponse = await infoResponsePromise;

            // 각 응답을 JSON으로 변환 및 null 처리
            const infoList = await infoResponse.json();
            this.memberList = infoList;

        }
        , async loadLocationlist (){ //배송지 목록 불러오기
            // 리스트 초기화
            try {
                const defaultIctResponsePromise = fetch("/api/member/location/defaultList");
                const lctResponsePromise = fetch("/api/member/location/list");

                // 모든 응답이 완료될 때까지 기다림
                const [defaultIctResponse, lctResponse] = await Promise.all([
                    defaultIctResponsePromise,
                    lctResponsePromise
                ]);

                // 신규회원인 경우 기본 배송지가 없을 수 있음
                {
                    let defaultIctList = null;

                    // defaultIctResponse가 존재하고 응답이 성공한 경우
                    if (defaultIctResponse && defaultIctResponse.ok) {
                        const defaultIctListData = await defaultIctResponse.json();

                        if (defaultIctListData.ok)
                            defaultIctList = defaultIctListData.location;
                    }

                    if(defaultIctList!=null)
                        this.defaultIctList = defaultIctList;
                }

                //기본 배송지 이외의 배송지 목록
                {
                    let lctList = null;

                    // lctResponse가 존재하고 응답이 성공한 경우
                    if (lctResponse && lctResponse.ok) {
                        const lctListData = await lctResponse.json();

                        if (lctListData.ok)
                            lctList = lctListData.list;

                    }

                    if(lctList!=null)
                        this.locationList = lctList;
                }

            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }
        ,async updateLocationList(){ //기본배송지 변경

            //기본 배송지 목록
            const defaultIctResponsePromise = fetch("/api/member/location/defaultList");
            //그외 배송지 목록
            const lctResponsePromise = fetch("/api/member/location/list");

            // 모든 응답이 완료될 때까지 기다림
            const [defaultIctResponse, lctResponse] = await Promise.all([
                defaultIctResponsePromise,
                lctResponsePromise
            ]);

            const defaultIctListData = await defaultIctResponse.json();

            if (defaultIctListData.ok)
                this.data.defaultIctList = defaultIctListData.location;

        }
        , async updateState(id) {
            const url = `/api/member/location/updateState?locationId=${id}`;
            const promise = fetch(url);

            let response = await promise;

            //변경을 실패한 경우
            if(!response.ok)
                alert("기본배송지 변경에 실패했습니다.");

            //성공한 경우 다시 바인딩
            this.loadLocationlist();

        }

    }
    , async created(){
        
        //초기 탭 설정
        this.setInitialTab();

        // 리스트 초기화
        try {

            this.loadInfolist();
            this.loadLocationlist();

        } catch (error) {
            console.error("Failed to fetch data:", error);
        }


    }
}).mount('main');

//===============================================================================