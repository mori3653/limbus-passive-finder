
const DATA = [
    {
        "sinner":  "이상",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "정보중화",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명 이번 턴에 정신력이 감소한 경우 턴 종료 시 정신력 10 회복"
    },
    {
        "sinner":  "이상",
        "identity":  "남부 세븐 협회 6과",
        "rarity":  "00",
        "supportPassiveName":  "분석",
        "condition":  "탐식 3 공명",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명 합 진행 시 합 위력 +1"
    },
    {
        "sinner":  "이상",
        "identity":  "어금니 사무소 해결사",
        "rarity":  "00",
        "supportPassiveName":  "벌려진 일 수습",
        "condition":  "나태 3 보유",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명이 적에게 진동 폭발 시 입히는 흐트러짐 손상 4 당 다음 턴에 방어 레벨 감소 1 부여 (턴마다 적 1명당 최대 3)"
    },
    {
        "sinner":  "이상",
        "identity":  "피쿼드호 일등 항해사",
        "rarity":  "00",
        "supportPassiveName":  "일등 항해사의 노련함",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "호흡을 가장 많이 보유한 아군 1명이 크리티컬 적중 시 스킬로 부여하는 출혈 위력 +2 (턴 당 최대 6회)"
    },
    {
        "sinner":  "이상",
        "identity":  "남부 디에치 협회 4과",
        "rarity":  "00",
        "supportPassiveName":  "반복 지식",
        "condition":  "나태 4 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 스킬을 버릴 때, 해당 캐릭터 최대 체력의 (5 × 버린 스킬의 등급)% 만큼 보호막을 얻음 (턴 당 최대 2회)"
    },
    {
        "sinner":  "이상",
        "identity":  "LCE E.G.O::초롱",
        "rarity":  "00",
        "supportPassiveName":  "E.G.O가 붕괴될 때 거름과 같이 분해되오",
        "condition":  "탐식 5 보유",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명이 사망 시 가장 부족한 속성의 E.G.O 자원 2종을 2개씩 얻음"
    },
    {
        "sinner":  "이상",
        "identity":  "검계 살수",
        "rarity":  "000",
        "supportPassiveName":  "사사",
        "condition":  "오만 3 보유",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명 스킬의 효과로 얻는 호흡 횟수 +1"
    },
    {
        "sinner":  "이상",
        "identity":  "개화 E.G.O::동백",
        "rarity":  "000",
        "supportPassiveName":  "알싸한 봄바람",
        "condition":  "나태 3 공명",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명이 2명 이상을 공격할 때 피해량 +10%"
    },
    {
        "sinner":  "이상",
        "identity":  "W사 3등급 정리 요원",
        "rarity":  "000",
        "supportPassiveName":  "정리 시범 교육",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "충전 횟수가 가장 높은 아군 1명이 파열이 있는 대상에게 가하는 피해량이 대상의 파열 위력에 비례하여 증가 (파열 1당 1.5%. 최대 15%)"
    },
    {
        "sinner":  "이상",
        "identity":  "약지 점묘파 스튜던트",
        "rarity":  "000",
        "supportPassiveName":  "미학견습",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "- 정신력이 가장 낮은 아군이 공격 적중시 대상이 보유한 부정적인 효과 1개당 정신력 2 회복 (최대 6)\n- 대상에게 출혈이 있으면 3 추가 회복\n(턴 당 패시브 최대 발동 횟수 : 2회)"
    },
    {
        "sinner":  "이상",
        "identity":  "로보토미 E.G.O::엄숙한 애도",
        "rarity":  "000",
        "supportPassiveName":  "구원의 손",
        "condition":  "우울 6 보유",
        "supportPassiveEffect":  "아군의 스킬 적중 시 대상의 침잠을 2 소모하여 나비 1 부여 (턴 당 3회)"
    },
    {
        "sinner":  "이상",
        "identity":  "남부 리우 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "리우 방진",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "- 정신력이 가장 낮은 아군 2명이 이번 턴에 정신력이 감소한 경우 턴 종료 시 정신력 5 회복\n회복 대상이 화상 위력이나 횟수를 부여하는 기본 스킬을 가지고 있으면, 대신 5 ~ 10 회복"
    },
    {
        "sinner":  "이상",
        "identity":  "N사 E.G.O::흉탄",
        "rarity":  "000",
        "supportPassiveName":  "대상 지정",
        "condition":  "오만 4 공명",
        "supportPassiveEffect":  "속도가 가장 느린 아군이 아군을 공격했다면, 공격 종료 시, 다음 턴에 피해량 증가 1 얻음 (턴 당 최대 2)\n- 이때, 아군이 사망했으면, 위 효과를 대신하여 이번 전투 동안 피해량 증가 1 얻음 (스테이지 및 인격당 최대 2)\n- 위 효과들로 얻는 피해량 증가는 최대 2까지만 얻어짐."
    },
    {
        "sinner":  "이상",
        "identity":  "흑수 - 오 필두",
        "rarity":  "000",
        "supportPassiveName":  "검은 갑각이 살을 째고 돋아 날 지키리",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명에게 아래 효과 적용\n- 전투 시작 시 방어 레벨이 (해당 캐릭터의 이전 턴과 이번 턴 속도 차이 × 2)만큼 증가 (최대 5. 이전 턴에 전투 인원이 아니었다면, 해당 캐릭터의 기본 속도 최솟값으로 계산)\n- 전투 시작 시 현재 체력이 최대 체력의 50% 미만이고, 이전 턴과 이번 턴 속도 차이가 3 이상이면, 체력 50 회복 (전투 당 1회)"
    },
    {
        "sinner":  "이상",
        "identity":  "거미집 검지 아비",
        "rarity":  "000",
        "supportPassiveName":  "신의 가호",
        "condition":  "탐식 1 + 우울 1 + 오만 1 보유",
        "supportPassiveEffect":  "이번 턴에 아군이 적에게 처음으로 사용한 참격, 관통, 타격 기본 공격 스킬의 피해량이 각각 +5%\n- 효과가 적용된 스킬이 검지 소속 인격의 스킬이면, 대신 피해량이 추가로 +10%\n- 공격 시작 전 기준으로 적용됨"
    },
    {
        "sinner":  "이상",
        "identity":  "LCE E.G.O::차원찢개",
        "rarity":  "000",
        "supportPassiveName":  "사람은광선보다도빠르게달아나라",
        "condition":  "질투 3 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 충전 횟수를 소모하거나 얻는 스킬 사용시, 다음 턴에 신속 1 얻음 (턴당 1회)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "관찰",
        "condition":  "오만 3 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명 공격 적중 시 25% 확률로 공격 레벨 감소 2 부여"
    },
    {
        "sinner":  "파우스트",
        "identity":  "W사 2등급 정리 요원",
        "rarity":  "00",
        "supportPassiveName":  "무전",
        "condition":  "질투 3 보유",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명 충전 횟수 얻는 값 +1"
    },
    {
        "sinner":  "파우스트",
        "identity":  "살아남은 로보토미 직원",
        "rarity":  "00",
        "supportPassiveName":  "지지",
        "condition":  "색욕 2 공명",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명 수비 스킬의 최종 위력 +2"
    },
    {
        "sinner":  "파우스트",
        "identity":  "남부 츠바이 협회 4과",
        "rarity":  "00",
        "supportPassiveName":  "보호 요청 수신",
        "condition":  "우울 2 공명",
        "supportPassiveEffect":  "전투 시작 시 체력 비율이 가장 낮은 아군 1명에게 방어 레벨 증가 2 부여\n대상의 체력이 50% 미만이면 추가로 2 부여"
    },
    {
        "sinner":  "파우스트",
        "identity":  "워더링하이츠 버틀러",
        "rarity":  "00",
        "supportPassiveName":  "그 날을 위한 훈련",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명이 침잠이 5 이상 부여된 대상에게 공격 적중 시 자신의 정신력 3 회복 (턴 당 4회)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "쥐는 자",
        "rarity":  "000",
        "supportPassiveName":  "속삭임",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "전투 시작 시 정신력이 가장 낮은 아군 1명의 정신력 15 회복. 대상이 N사 광신도면 광신 2 부여"
    },
    {
        "sinner":  "파우스트",
        "identity":  "남부 세븐 협회 4과",
        "rarity":  "000",
        "supportPassiveName":  "세븐 협회의 티타임",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 상대의 약점, 취약 속성(내성 1 초과)으로 공격 시 대상의 파열에 비례하여 피해량 증가 (파열 1 당 1.5%. 최대 15%)\n효과를 적용받은 대상이 세븐 협회 해결사면, 피해량 추가 증가 (파열 1 당 0.5%. 최대 5%)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "로보토미 E.G.O::후회",
        "rarity":  "000",
        "supportPassiveName":  "억압 작업",
        "condition":  "분노 5 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군 1명이 합 진행 시 대상이 보유한 부정적인 효과가 3개 이상이면, 대상의 합 위력 -1"
    },
    {
        "sinner":  "파우스트",
        "identity":  "검계 살수",
        "rarity":  "000",
        "supportPassiveName":  "미련 서린 검끝",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "편성 순서가 가장 빠른 아군이 참격 속성 스킬로 크리티컬 적중 시 방어 레벨 감소 1 부여 (턴 당 적 1명당 최대 3)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "멀티크랙 사무소 대표",
        "rarity":  "000",
        "supportPassiveName":  "해체 보조 전류",
        "condition":  "질투 5 보유",
        "supportPassiveEffect":  "충전 횟수가 가장 적은 아군 1명이 적 처치 시 충전 횟수 3 증가 (턴 당 1회, 충전을 소모하거나 스스로 획득하는 스킬을 보유한 아군에게 우선으로 적용됨)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "LCE E.G.O::홍염살",
        "rarity":  "000",
        "supportPassiveName":  "잔열",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명이 기본 스킬의 적중시 효과로 화상을 부여할 때 화상 2 추가 부여 (최대 3회 발동)\n- 피격 대상의 화상이 30 이상이면, 대신 화상 횟수 1 증가 (최대 3회 발동)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "흑수 - 묘 필두",
        "rarity":  "000",
        "supportPassiveName":  "쾌도",
        "condition":  "탐식 4 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군이 파열 피해를 입히면, 다음 턴에 공격 레벨 증가 1 얻음 (턴 당 최대 3회)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "동부 시 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "한점 노리기",
        "condition":  "색욕 4 공명",
        "supportPassiveEffect":  "턴 종료 시 전투 중 스킬 및 패시브로 적에게 출혈 위력을 가장 많이 부여한 아군에게 다음 턴에 관통 피해량 증가 1 부여 (E.G.O 스킬 포함, 출혈 부여량이 동일하다면 편성 순서가 가장 빠른 순으로 결정함, 해당 턴에 출혈 위력을 부여하지 않았다면 발동하지 않음)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "검지 수행자:【쪽지】",
        "rarity":  "000",
        "supportPassiveName":  "지령이 이끄는 대로…",
        "condition":  "나태 1 + 우울 1 + 오만 1 보유",
        "supportPassiveEffect":  "편성 순서가 가장 빠른 인격에게 효과 적용\n- 검지 소속 인격이 있으면, 해당 인격에게 우선 적용\n\n전투 시작 시 자신의 조작 슬롯 중 가장 왼쪽 스킬로 지정한 적 슬롯을 다른 아군이 같이 지정했으면, 해당 스킬의 피해량이 자신을 제외하고 해당 슬롯을 타겟한 인원 수 1명당 5% 증가 (최대 15%, 자신과 아군 모두 기본 공격 스킬로 메인 타겟할 때 적용)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "거미집 약지 제자",
        "rarity":  "000",
        "supportPassiveName":  "아이언메이든 - 가시",
        "condition":  "색욕 1 + 질투 2 보유",
        "supportPassiveEffect":  "이번 턴에 수비 스킬을 장착한 아군이 피격 시 공격자에게 출혈 4 부여 (턴당 2회)\n- 이미 출혈이 있으면, 대신 공격자의 출혈 횟수 2 증가"
    },
    {
        "sinner":  "파우스트",
        "identity":  "새벽 사무소 해결사",
        "rarity":  "000",
        "supportPassiveName":  "고독한 해결사",
        "condition":  "분노 3 + 색욕 3 보유",
        "supportPassiveEffect":  "전투 시작 시 생존한 인격이 대기 인원을 전부 포함하여 1명이면, 해당 인격이 공격 레벨 증가 3, 방어 레벨 증가 3 얻음"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "응원",
        "condition":  "색욕 5 보유",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명 관통 스킬의 피해량 +10%"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "남부 시 협회 5과 부장",
        "rarity":  "00",
        "supportPassiveName":  "양단",
        "condition":  "분노 5 보유",
        "supportPassiveEffect":  "속도가 가장 높은 아군 1명 참격 스킬의 피해량 +10%"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "N사 중간 망치",
        "rarity":  "00",
        "supportPassiveName":  "맹목의 망치",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "광신이 있는 아군 중 가장 정신력이 낮은 아군의 피해량 +10%"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "로보토미 E.G.O::초롱",
        "rarity":  "00",
        "supportPassiveName":  "초롱초롱",
        "condition":  "탐식 5 보유",
        "supportPassiveEffect":  "도발치가 가장 높은 슬롯을 보유한 아군 1명이 자신을 타겟으로 삼은 적에게 공격을 적중할 때마다 체력 4 회복 (도발치가 없으면 적용되지 않음)"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "검계 살수",
        "rarity":  "00",
        "supportPassiveName":  "밤산책",
        "condition":  "오만 3 보유",
        "supportPassiveEffect":  "호흡을 가장 적게 보유한 아군 1명이 자신의 스킬, 코인 효과로 호흡 위력을 얻을 때 얻는 호흡 위력 +2"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "W사 3등급 정리 요원",
        "rarity":  "000",
        "supportPassiveName":  "꺾인 마음",
        "condition":  "우울 3 공명",
        "supportPassiveEffect":  "속도가 가장 높은 아군 1명 첫 번째 스킬의 최종 위력 +1"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "남부 섕크 협회 5과 부장",
        "rarity":  "000",
        "supportPassiveName":  "결투 의뢰",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "모든 아군의 속도가 모든 적보다 높으면, 속도가 가장 빠른 아군의 피해량이 속도가 가장 느린 적과의 속도 차이에 비례하여 증가 (속도 차이 1당 3%, 최대 15%)"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "중지 작은 아우",
        "rarity":  "000",
        "supportPassiveName":  "편 가르기",
        "condition":  "질투 3 보유",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명이 자신을 제외한 아군의 피격 횟수 6회마다 다음 턴에 타격 피해량 증가 1을 얻음 (최대 2)"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "T사 3등급 징수직 직원",
        "rarity":  "000",
        "supportPassiveName":  "T사식 물리왜곡장",
        "condition":  "나태 3 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군 1명이 진동이 부여된 적에게 피해를 받을 때, 받는 피해량 -10%"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "라만차랜드 실장",
        "rarity":  "000",
        "supportPassiveName":  "\u0027가족들이여 억눌러온 허기를 채워라\u0027",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "전투 시작 시 체력이 가장 적은 아군 잃은 체력 20% 당 피해량 증가 1 얻음 (최대 3)\n- 대상 아군이 \u0026lt;혈귀\u0026gt;면, 효과를 대신하여 잃은 체력 15% 당 피해량 증가 1 얻음 (최대 3)"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "동부 섕크 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "경신법",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 화상 또는 특수 화상을 보유한 적에게 합 승리 시, 다음 턴에 신속 1을 얻음 (턴 당 1회)\n- 대상의 화상 위력이 20 이상이면, 신속 1을 추가로 얻음"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "로보토미 E.G.O::사랑과 증오의 이름으로",
        "rarity":  "000",
        "supportPassiveName":  "매지컬 파워 차징 서포트",
        "condition":  "질투 3 공명",
        "supportPassiveEffect":  "기본 공격 스킬에서 충전 횟수를 획득하는 아군 중 충전 횟수가 가장 적은 아군 1명이 충전 횟수를 획득하는 기본 공격 스킬 사용 시, 충전 횟수 +2 (턴 당 최대 2회 발동)\n- 정신력이 0 이상이면, 체력을 (대상의 충전 × 2)만큼 회복 (최대 10, 턴당 최대 20 회복)\n- 정신력이 0 미만이면, 정신력을 대상의 충전만큼 회복 (최대 5, 턴당 최대 10 회복)"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "흑수 - 미",
        "rarity":  "000",
        "supportPassiveName":  "살을 뚫고 자라나는 뿔",
        "condition":  "탐식 3 + 우울 3 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군이 파열 횟수 또는 침잠 횟수를 2 이상 보유한 적에게 기본 공격 스킬 적중 시, 방어 레벨 감소 1 부여 (턴당 2회)"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "검지 대행자 - 개화 E.G.O::대행",
        "rarity":  "000",
        "supportPassiveName":  "이 또한 마법의 삐삐님의 은혜일테지",
        "condition":  "우울 3 공명",
        "supportPassiveEffect":  "전투 시작 시, 정신력이 가장 낮은 아군의 정신력 15 회복\n- 더하기 코인을 사용하는 인격에게 우선으로 적용\n- 대상이 검지 소속이면 효과가 강화되어 추가로 피해량 증가 1 부여\n- 침식, 패닉 등 정신력을 회복할 수 없는 대상에게는 적용되지 않음"
    },
    {
        "sinner":  "료슈",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "등떠밀기",
        "condition":  "탐식 3 공명",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명 가하는 피해량 +20%, 받는 피해량 +20%"
    },
    {
        "sinner":  "료슈",
        "identity":  "남부 세븐 협회 6과",
        "rarity":  "00",
        "supportPassiveName":  "아이스 브레이킹",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명 파열 부여 값 +1"
    },
    {
        "sinner":  "료슈",
        "identity":  "LCCB 대리",
        "rarity":  "00",
        "supportPassiveName":  "돛대",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "- 탄환을 가장 적게 보유한 아군 1명이 탄환을 소모하는 스킬을 사용할 때, 호흡 3 부여 (턴 당 1회. 탄환이 없는 대상에게는 적용되지 않음)\n- 탄환을 가장 적게 보유한 아군 1명이 코인에서 마지막 탄환을 소모하면, 코인의 공격 종료 시, 각 대상에게 해당 코인으로 피해를 입힌 대상에게 해당 코인의 공격으로 입힌 피해량의 50%만큼 추가 피해를 줌 (소수점 반올림)"
    },
    {
        "sinner":  "료슈",
        "identity":  "남부 리우 협회 4과",
        "rarity":  "00",
        "supportPassiveName":  "전화",
        "condition":  "분노 4 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군 1명이 화상이 부여된 적 처치 시 무작위 적 2명에게 화상 3 부여 (턴 당 1회)\n- 집중 전투에서는 부위에 부여"
    },
    {
        "sinner":  "료슈",
        "identity":  "20구 유로지비",
        "rarity":  "00",
        "supportPassiveName":  "조.감",
        "condition":  "나태 4 보유",
        "supportPassiveEffect":  "편성 순서가 1번인 아군이 스킬, 코인 효과로 얻는 진동 횟수의 값 +1 (턴 당 2회)"
    },
    {
        "sinner":  "료슈",
        "identity":  "흑운회 와카슈",
        "rarity":  "000",
        "supportPassiveName":  "행동대장",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "속도가 가장 높은 아군 1명 출혈 부여 값 +1"
    },
    {
        "sinner":  "료슈",
        "identity":  "료.고.파. 주방장",
        "rarity":  "000",
        "supportPassiveName":  "예술적인 맛",
        "condition":  "색욕 5 보유",
        "supportPassiveEffect":  "적 사망 시 체력이 가장 낮은 아군 1명의 체력 15 회복. (턴 당 1회 발동)"
    },
    {
        "sinner":  "료슈",
        "identity":  "W사 3등급 정리 요원",
        "rarity":  "000",
        "supportPassiveName":  "차원 굴절 칼날 - Type: Blade Mk7",
        "condition":  "오만 5 보유",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명이 적 처치 시 충전 횟수 3 증가 (턴 당 최대 1회 발동)"
    },
    {
        "sinner":  "료슈",
        "identity":  "에드가 가문 치프 버틀러",
        "rarity":  "000",
        "supportPassiveName":  "청소 지휘",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "편성 순서가 가장 뒤인 아군 1명이 합 승리 시 호흡 횟수 1 증가 (턴 당 3회), 다음 턴에 신속 1 얻음 (턴 당 1회)"
    },
    {
        "sinner":  "료슈",
        "identity":  "로보토미 E.G.O::적안 · 참회",
        "rarity":  "000",
        "supportPassiveName":  "먹고 자라",
        "condition":  "질투 3 공명",
        "supportPassiveEffect":  "전투 시작 시\n- 체력 비율이 가장 낮은 아군 1명이 체력 3 회복\n- 정신력이 가장 낮은 아군 1명이 정신력 3 회복"
    },
    {
        "sinner":  "료슈",
        "identity":  "흑수 - 묘",
        "rarity":  "000",
        "supportPassiveName":  "부분 흑수화 수련",
        "condition":  "탐식 5 보유",
        "supportPassiveEffect":  "턴 종료 시 속도가 가장 빠른 아군 1명이 다음 턴에 신속 2 얻음"
    },
    {
        "sinner":  "료슈",
        "identity":  "N사 E.G.O::경멸, 경외",
        "rarity":  "000",
        "supportPassiveName":  "그건 흐르고 울린다",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "편성 순서가 가장 빠른 아군 1명이 적에게 공격 적중 시, 출혈 1 부여 (적 당 턴 당 최대 1회)\n- 대상에게 출혈이 있으면, 추가로 출혈 횟수 1 증가\n\n편성 순서가 가장 빠른 아군 1명이 적에게 피격시, 공격자에게 진동 1 부여 (턴 당 최대 3회)\n-공격자에게 진동이 있으면, 추가로 진동 횟수 1 증가"
    },
    {
        "sinner":  "료슈",
        "identity":  "홍원 방랑무사",
        "rarity":  "000",
        "supportPassiveName":  "방랑",
        "condition":  "탐식 3 + 오만 3 보유",
        "supportPassiveEffect":  "전투 시작 시 편성 순서가 가장 빠른 아군 1명이 자신의 호흡 위력 1당 보호막 1 얻음 (최대 10)"
    },
    {
        "sinner":  "료슈",
        "identity":  "로보토미 E.G.O::잔향 · 외로움",
        "rarity":  "000",
        "supportPassiveName":  "봄의 탄생",
        "condition":  "나태 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 침잠 위력, 횟수 또는 특수 침잠을 부여하는 스킬로 적에게 적중 시 진동을 2 부여하고, 진동 폭발, 대상의 진동 횟수 1 감소 (턴당 1회)"
    },
    {
        "sinner":  "료슈",
        "identity":  "거미집의 검",
        "rarity":  "000",
        "supportPassiveName":  "사사 [師事]",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "편성 순서가 가장 빠른 아군이 기본 스킬 사용 시, 호흡 위력 2 얻음 (턴당 3회)"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "등뒤 받쳐주기",
        "condition":  "나태 3 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명 공격 스킬로 받는 피해량 -10%"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "남부 리우 협회 6과",
        "rarity":  "00",
        "supportPassiveName":  "마찰 타격점",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "속도가 가장 낮은 아군 1명 화상 부여 값 +1"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "장미스패너 공방 해결사",
        "rarity":  "00",
        "supportPassiveName":  "권고 휴직",
        "condition":  "우울 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 진동이 부여된 적과 합 진행 시 적의 합 위력 -1"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "중지 작은 아우",
        "rarity":  "00",
        "supportPassiveName":  "한 식구",
        "condition":  "질투 3 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명이 자신과 동일한 소속의 캐릭터가 생존해있는 경우, 턴 종료 시 정신력 10 회복"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "데드레빗츠 보스",
        "rarity":  "00",
        "supportPassiveName":  "내가 책임진다",
        "condition":  "탐식 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 파열이 3 이상 부여된 대상에게 공격 적중 시 공격 레벨 감소 1 부여 (적 1명 당 턴 당 최대 3)"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "W사 2등급 정리 요원",
        "rarity":  "000",
        "supportPassiveName":  "묵묵함",
        "condition":  "질투 4 보유",
        "supportPassiveEffect":  "속도가 가장 낮은 아군 1명 파열 부여 값 +1"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "N사 큰 망치",
        "rarity":  "000",
        "supportPassiveName":  "으뜸 영광",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명이 체력이 50% 미만이면 공격 위력 증가, 보호 1을 얻음. 대상이 N사 광신도면 광신 1을 추가로 얻음"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "R사 제 4무리 코뿔소팀",
        "rarity":  "000",
        "supportPassiveName":  "기동 훈련",
        "condition":  "질투 5 보유",
        "supportPassiveEffect":  "턴 종료 시 충전 횟수가 가장 높은 아군 1명이 충전 횟수 5당 다음 턴의 속도 최대 값 +1 (최대 3)"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "검계 우두머리",
        "rarity":  "000",
        "supportPassiveName":  "본국검술",
        "condition":  "오만 5 보유",
        "supportPassiveEffect":  "전투 시작 시 호흡을 가장 많이 보유한 아군 1명의 참격 속성 스킬의 크리티컬 피해량 +15%"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "남부 디에치 협회 4과 부장",
        "rarity":  "000",
        "supportPassiveName":  "성실한 배움",
        "condition":  "우울 5 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명이 스킬을 버릴 때, 해당 인격 최대 체력의 (5 × 버린 스킬의 등급)%만큼 보호막을 얻음 (턴 당 1회)\n탐구한 지식이 있는 경우, 보호막 수치가 1.5배로 적용됨"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "서부 섕크 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "한 발 더 빠르게",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 합 승리 시 다음 턴에 신속 1을 얻음 (턴 당 최대 2회)"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "동부 엄지 카포 IIII",
        "rarity":  "000",
        "supportPassiveName":  "맹호의 도약",
        "condition":  "나태 3 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 탄환을 소모하는 스킬 사용 시 대상보다 속도가 3 이상 높다면, 가하는 피해량 +(대상과의 속도 차이 × 3)% (최대 15%)\n(탄환이 없으면 적용되지 않음. 단, 탄환 버프는 보유하였으나 수치가 0인 경우에는 효과가 적용됨)"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "라만차랜드 왕자",
        "rarity":  "000",
        "supportPassiveName":  "잔이 넘치도록",
        "condition":  "색욕 5 공명",
        "supportPassiveEffect":  "해당 턴 동안 혈찬이 생성될 때 1.5배로 생성됨 (전투당 2회, 소수점 버림)"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "로보토미 E.G.O::호넷【변조】",
        "rarity":  "000",
        "supportPassiveName":  "일벌",
        "condition":  "분노 4 공명",
        "supportPassiveEffect":  "이번 턴 동안 아래 효과 적용 (전투당 최대 2번 발동 가능)\n\n- 아군의 관통 속성 기본 공격 스킬의 공격 종료시, 해당 공격으로 입힌 체력 피해량의 10%만큼 체력 회복\n- 스킬 슬롯에 장착한 모든 기본 공격 스킬이 관통 속성이면, 턴 종료시 모든 아군 정신력 10 회복"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "약지 야수파 스튜던트",
        "rarity":  "000",
        "supportPassiveName":  "겹쳐 그린 상흔",
        "condition":  "색욕 2 + 오만 1 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군이 공격 적중 시 대상의 부정적인 효과 2개당 방어 레벨 감소 1 부여 (턴당 최대 1회, 최대 3)"
    },
    {
        "sinner":  "홍루",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "실없는 농담",
        "condition":  "나태 5 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명 전투 시작 시 정신력 6 회복"
    },
    {
        "sinner":  "홍루",
        "identity":  "흑운회 와카슈",
        "rarity":  "00",
        "supportPassiveName":  "조직의 보복",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "속도가 가장 높은 아군 1명 출혈 부여 값 +1"
    },
    {
        "sinner":  "홍루",
        "identity":  "남부 리우 협회 5과",
        "rarity":  "00",
        "supportPassiveName":  "따뜻하죠?",
        "condition":  "분노 4 보유",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명의 공격 스킬의 스킬 효과, 코인 효과로 부여하는 화상 횟수 부여 값 +1"
    },
    {
        "sinner":  "홍루",
        "identity":  "W사 2등급 정리 요원",
        "rarity":  "00",
        "supportPassiveName":  "열차 정리 매뉴얼 전달",
        "condition":  "오만 3 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군이 전투 시작 시 충전 횟수가 5 이상 있으면, 다음 턴에 신속 2를 얻음"
    },
    {
        "sinner":  "홍루",
        "identity":  "갈고리 사무소 해결사",
        "rarity":  "00",
        "supportPassiveName":  "보급형 생체 장비",
        "condition":  "색욕 5 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 출혈이 부여된 적 처치 시 다음 턴에 공격 위력 증가 1을 얻음 (턴 당 최대 1회)"
    },
    {
        "sinner":  "홍루",
        "identity":  "송곳니 사냥 사무소 해결사",
        "rarity":  "00",
        "supportPassiveName":  "혈귀 공략 교본 - 지혈",
        "condition":  "탐식 5 보유",
        "supportPassiveEffect":  "전투 시작 시, 출혈과 출혈 횟수의 합이 가장 높은 아군 1명의 출혈 횟수 2 감소\n속도가 가장 빠른 아군 1명이 파열이 있는 적에게 공격 적중시, 방어 레벨 감소 1 부여 (턴 당 최대 2회)"
    },
    {
        "sinner":  "홍루",
        "identity":  "콩콩이파 두목",
        "rarity":  "000",
        "supportPassiveName":  "승부수",
        "condition":  "탐식 5 보유",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명 앞면이 나온 코인의 피해량 +20%"
    },
    {
        "sinner":  "홍루",
        "identity":  "K사 3등급 적출직 직원",
        "rarity":  "000",
        "supportPassiveName":  "고농축 앰플",
        "condition":  "탐식 4 공명",
        "supportPassiveEffect":  "전투 시작 시 현재 체력 비율이 가장 낮은 아군에게 K사 앰플 2 부여"
    },
    {
        "sinner":  "홍루",
        "identity":  "남부 디에치 협회 4과",
        "rarity":  "000",
        "supportPassiveName":  "깨우침",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명이 적을 흐트러짐 상태로 만들거나 처치하면, 정신력 7 회복"
    },
    {
        "sinner":  "홍루",
        "identity":  "20구 유로지비",
        "rarity":  "000",
        "supportPassiveName":  "내가 범인이라면...?",
        "condition":  "나태 3 공명",
        "supportPassiveEffect":  "편성 순서 1번인 아군이 스킬, 코인 효과로 진동 폭발 시 25% 확률로 진동 폭발이 추가로 발동 (턴 당 1회)"
    },
    {
        "sinner":  "홍루",
        "identity":  "마침표 사무소 대표",
        "rarity":  "000",
        "supportPassiveName":  "제압 사격",
        "condition":  "오만 5 보유",
        "supportPassiveEffect":  "탄환을 가장 많이 보유한 아군 인격이 탄환을 소모하는 스킬로 가하는 피해량 +10%\n(탄환이 없으면 적용되지 않음)"
    },
    {
        "sinner":  "홍루",
        "identity":  "R사 제 4무리 순록팀",
        "rarity":  "000",
        "supportPassiveName":  "충전 분쇄 지원",
        "condition":  "질투 3 보유",
        "supportPassiveEffect":  "충전이 가장 높은 아군 1명이 충전 횟수를 획득하는 기본 공격 스킬 사용 시, 마지막 코인의 피해량 +15%"
    },
    {
        "sinner":  "홍루",
        "identity":  "홍원 군주",
        "rarity":  "000",
        "supportPassiveName":  "꼬리는 밟히지 말고 처리해주세요.",
        "condition":  "탐식 6 보유",
        "supportPassiveEffect":  "현재 체력 비율이 가장 낮은 인격이 적에게 가하는 피해량 +(대상이 보유한 주살의 종류 × 3)% (최대 15%)"
    },
    {
        "sinner":  "홍루",
        "identity":  "거미집 약지 아비",
        "rarity":  "000",
        "supportPassiveName":  "뛰어다니는 관객은 의자에 앉아 감상하시죠",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "턴 종료 시 속도가 가장 빠른 적 1명에게 다음 턴에 공격 레벨 감소 2 부여하고 출혈 횟수 1 증가 (집중 전투일 경우, 부위로 판정)"
    },
    {
        "sinner":  "홍루",
        "identity":  "S사 추노꾼",
        "rarity":  "000",
        "supportPassiveName":  "악에 받친 추격",
        "condition":  "오만 5 보유",
        "supportPassiveEffect":  "편성 순서가 가장 빠른 아군이 속박이 부여된 적을 공격할 때, 피해량 +10%"
    },
    {
        "sinner":  "홍루",
        "identity":  "동부 섕크 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "퇴로를 녹여둘게요",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군이 화상 또는 특수 화상을 보유한 적에게 합 승리 시, 다음 턴에 속박 1 부여 (턴당 1회)\n- 대상의 화상 횟수가 4 이하면, 추가로 이번 턴에 대상의 화상 횟수 1 증가\n- 대상의 화상 횟수가 5 이상이면, 추가로 이번 턴에 화상 3 부여"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "악에 받친",
        "condition":  "질투 5 보유",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명 타격 스킬의 피해량 +10%"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "남부 시 협회 5과",
        "rarity":  "00",
        "supportPassiveName":  "자신을 돌보지 않음",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명 가하는 피해량 +20%, 받는 피해량 +20%"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "N사 작은 망치",
        "rarity":  "00",
        "supportPassiveName":  "독경",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명의 못 부여 값 +1"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "남부 세븐 협회 4과",
        "rarity":  "00",
        "supportPassiveName":  "단서 연결",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "최대 체력이 가장 많은 아군 1명이 상대의 취약 속성(내성 1.5 초과)으로 공격 시 스킬로 부여하는 파열 부여 값 +1\n효과를 적용받은 대상이 세븐 협회 해결사면, 위 효과의 파열 부여 값 +1"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "멀티크랙 사무소 해결사",
        "rarity":  "00",
        "supportPassiveName":  "충전 모듈 추가",
        "condition":  "질투 7 보유",
        "supportPassiveEffect":  "편성 순서가 1번인 아군 1명의 충전 횟수 최대치 +5\n(조건 충족 시, 다음 턴 시작 전까지 효과 적용)"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "R사 제 4무리 토끼팀",
        "rarity":  "000",
        "supportPassiveName":  "집념",
        "condition":  "분노 5 보유",
        "supportPassiveEffect":  "속도가 가장 높은 아군 1명 관통 스킬의 피해량 +10%"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "로보토미 E.G.O::여우비",
        "rarity":  "000",
        "supportPassiveName":  "해진 우산",
        "condition":  "질투 3 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명이 피격 시 정신력 10 감소하고, 다음 턴에 타격 피해량 증가 1을 얻음 (턴당 1회 발동)"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "피쿼드호 작살잡이",
        "rarity":  "000",
        "supportPassiveName":  "절박",
        "condition":  "질투 5 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명이 자신의 체력이 낮아질수록 관통 피해량 증가\n- 감소한 체력 1%당 피해량 0.3% 증가 (최대 30%)"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "남부 외우피 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "의무 이행 확인",
        "condition":  "오만 6 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명의 진동 위력, 횟수를 부여하는 스킬의 합 위력 +1"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "와일드헌트",
        "rarity":  "000",
        "supportPassiveName":  "울고 또 울어라",
        "condition":  "우울 3 공명",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명이 정신력이 0 미만인 대상에게 입히는 피해량 +5%\n대상의 정신력이 0보다 낮을수록 입히는 피해량이 증가 (정신력 1당 +0.5%, 최대 20%)\n대상에게 정신력이 없는 경우, 대신 공격 스킬의 스킬, 코인 효과로 부여하는 침잠 위력, 횟수 부여량 +1 (턴 당 최대 2회)"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "마침표 사무소 해결사",
        "rarity":  "000",
        "supportPassiveName":  "감적수",
        "condition":  "오만 5 보유",
        "supportPassiveEffect":  "탄환을 가장 적게 보유한 아군 1명이 탄환을 소모하는 스킬을 사용할 때, 호흡 횟수 2 증가\n- 대상이 마침표 사무소 해결사거나, 대상의 호흡 횟수가 5 미만이면, 대신 4 증가 (턴 당 1회. 탄환이 없는 대상에게는 적용되지 않음)"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "흑운회 와카슈",
        "rarity":  "000",
        "supportPassiveName":  "후벼파기",
        "condition":  "색욕 5 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 이번 턴에 수비 스킬을 사용했거나, 공격 시작 전에 최대 체력인 적에게 가하는 피해량 +10%"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "W사 4등급 정리 요원 - CCA",
        "rarity":  "000",
        "supportPassiveName":  "\u0027언젠가 결항 열차용 정리 장비도 노려볼 수 있겠지\u0027",
        "condition":  "질투 3 공명",
        "supportPassiveEffect":  "전투 시작시 편성 순서가 가장 빠른 아군이 자신의 스킬로 충전 횟수 최대치를 초과하여 충전 횟수를 얻으면, 초과한 충전 횟수 1 당 다음 턴에 충전 역장 1 얻음 (최대 3, E.G.O 스킬 포함)"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "흑수 - 유 필두",
        "rarity":  "000",
        "supportPassiveName":  "배수의 진",
        "condition":  "분노 3 + 탐식 3 보유",
        "supportPassiveEffect":  "턴 종료 시 체력 비율이 가장 낮은 아군 1명의 현재 체력이 최대 체력의 50% 미만이라면, 다음 턴에 합 위력 증가 1 얻음"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "중지 작은 형님",
        "rarity":  "000",
        "supportPassiveName":  "의리 사슬",
        "condition":  "질투 4 보유",
        "supportPassiveEffect":  "전투 중 중지 소속 아군이 사망하면 해당 턴과 다음 턴에 모든 중지 소속 아군이 공격 위력 증가 1 얻음 (턴당 1회)"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "거미집 엄지 제자",
        "rarity":  "000",
        "supportPassiveName":  "일대일 결투라면...",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군이 기본 공격 스킬로 합 승리 시, 대상 적의 화상 횟수 1 증가 (턴당 1회)\n- 엄지 소속 인격에게 우선 적용\n- 엄지 소속 인격이면 효과가 강화되어, 대신 대상의 화상 횟수와 진동 횟수 1 증가\n- 전투 시작 시 적이 1명만 있으면 (환상체의 경우, 본체 기준), 이 패시브 효과로 부여하는 화상 횟수와 진동 횟수 +1"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "살아남고 말것이라는 마음",
        "condition":  "분노 6 보유",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명 체력이 50% 미만이면 합 진행 시 합 위력 +1"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "남부 시 협회 5과",
        "rarity":  "00",
        "supportPassiveName":  "투쟁",
        "condition":  "질투 2 공명",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명 반격 스킬의 최종 위력 +2"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "LCCB 대리",
        "rarity":  "00",
        "supportPassiveName":  "매뉴얼대로",
        "condition":  "탐식 2 공명",
        "supportPassiveEffect":  "속도가 가장 낮은 아군 1명 가드 스킬의 최종 위력 +2"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "로보토미 E.G.O::출렁임",
        "rarity":  "00",
        "supportPassiveName":  "부식 점액",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 진동 폭발 발동 시 파열 2 부여"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "에드가 가문 버틀러",
        "rarity":  "00",
        "supportPassiveName":  "충실한 보조",
        "condition":  "우울 5 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 침잠이 부여된 대상 공격시 대상의 침잠 1 당 피해량 +1% (최대 20%)"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "R사 제 4무리 순록팀",
        "rarity":  "000",
        "supportPassiveName":  "집념",
        "condition":  "우울 5 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명 타격 스킬의 피해량 +10%"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "남부 리우 협회 4과",
        "rarity":  "000",
        "supportPassiveName":  "격화",
        "condition":  "분노 6 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군 1명이 공격 적중 시 대상의 화상 횟수 3당 타격 피해량 +5% (최대 15%)"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "어금니 보트 센터 해결사",
        "rarity":  "000",
        "supportPassiveName":  "크랲 드라이버",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 공격 적중 시 앞면이 나온 경우, 코인 효과로 진동 횟수를 적에게 부여할 때 침잠 횟수 1 부여"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "피쿼드호 선장",
        "rarity":  "000",
        "supportPassiveName":  "선장의 명령",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명이 자신의 공격 종료 시 대상이 사망했으면, 호흡 2, 호흡 횟수 2 얻음 (턴 당 2회)"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "서부 츠바이 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "긴급수호",
        "condition":  "오만 3 보유",
        "supportPassiveEffect":  "전투 시작 시 체력이 감소하여 이전 턴 시작과 체력 비율이 가장 차이가 많이 나는 인격에게 방어 레벨 증가 2 부여"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "흑운회 부조장",
        "rarity":  "000",
        "supportPassiveName":  "구름 공방 칼날",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 적에게 스킬 효과, 코인 효과로 부여하는 출혈 위력 또는 횟수 부여 값 +1"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "가주 후보",
        "rarity":  "000",
        "supportPassiveName":  "여환 [餘桓]",
        "condition":  "탐식 4 공명",
        "supportPassiveEffect":  "전투 중 자신이 사망했으면, 자신 다음 턴에 대기 해제되는 인격(대기 편성 순서상 가장 빠른 인격)에게 전투 시작 시 원[援] 부여\n\n연속 전투에서 자신이 퇴각 또는 대기 상태일 때, 아래의 효과 발동\n전투 시작 시 체력이 최대 체력의 50% 이하이고, 수비 스킬을 사용한 인격 중 편성 순서가 가장 빠른 인격이 턴 종료 시 피해로 인한 흐트러짐을 해제하고 전장 퇴각함 (전투당 2회 발동)"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "정사무소 대표",
        "rarity":  "000",
        "supportPassiveName":  "중계",
        "condition":  "나태 3 + 우울 3 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명의 기본 공격 스킬로 앞면 적중시, 해당 아군 정신력 5 회복 (턴당 1회, 정신력 -40인 아군 제외)"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "거미집 중지 제자",
        "rarity":  "000",
        "supportPassiveName":  "당신… 해결사 좋아해요?",
        "condition":  "질투 3 공명",
        "supportPassiveEffect":  "편성 순서 1번의 기본 공격 스킬의 합 위력 +1 (턴당 1회)\n질투 공명이 완전 공명이면, 편성 순서 1번의 기본 스킬 피해량 +10%"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "LCD 현장추리팀",
        "rarity":  "000",
        "supportPassiveName":  "베고, 죽일 뿐",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군이 가하는 참격 스킬 피해량 +10%\n- 신속이 있다면, 대신 참격 스킬 피해량 +15%"
    },
    {
        "sinner":  "로쟈",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "도박사",
        "condition":  "분노 5 보유",
        "supportPassiveEffect":  "현재 체력이 가장 높은 아군 1명 앞면이 나온 코인의 피해량 +20%"
    },
    {
        "sinner":  "로쟈",
        "identity":  "LCCB 대리",
        "rarity":  "00",
        "supportPassiveName":  "브리칭",
        "condition":  "질투 5 보유",
        "supportPassiveEffect":  "현재 체력이 가장 높은 아군 1명 이번 턴에 수비 스킬을 사용한 적에게 입히는 피해량 +20%"
    },
    {
        "sinner":  "로쟈",
        "identity":  "N사 중간 망치",
        "rarity":  "00",
        "supportPassiveName":  "차오르는 신앙",
        "condition":  "분노 3 보유",
        "supportPassiveEffect":  "적이 사망하면 정신력이 가장 높은 아군 1명이 다음 턴에 신속 1, 피해량 증가 1을 얻음 (턴 당 1회 발동)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "남부 츠바이 협회 5과",
        "rarity":  "00",
        "supportPassiveName":  "지정 보호",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "전투 시작 시 현재 체력 비율이 가장 낮은 아군 1명이 자신의 호흡 횟수 1 당 보호막을 1 얻음 (최대 10)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "T사 2등급 징수직 직원",
        "rarity":  "00",
        "supportPassiveName":  "T사식 격투술",
        "condition":  "나태 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 진동을 5 이상 보유한 적과 합 진행 시 합 위력 +1"
    },
    {
        "sinner":  "로쟈",
        "identity":  "흑운회 와카슈",
        "rarity":  "000",
        "supportPassiveName":  "흑운검술",
        "condition":  "우울 5 보유",
        "supportPassiveEffect":  "속도가 가장 낮은 아군 1명 참격 스킬의 피해량 +10%"
    },
    {
        "sinner":  "로쟈",
        "identity":  "장미스패너 공방 대표",
        "rarity":  "000",
        "supportPassiveName":  "공진 스패너",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군 1명이 진동 폭발로 입히는 흐트러짐 피해량 +20%"
    },
    {
        "sinner":  "로쟈",
        "identity":  "남부 디에치 협회 4과",
        "rarity":  "000",
        "supportPassiveName":  "지식 전도",
        "condition":  "우울 3 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명이 이번 턴 동안 받은 피해량에 비례하여 다음 턴에 타격 피해량 증가를 얻음.\n(보호막으로 받은 피해도 받은 피해량에 포함됨. 턴 시작 시 체력의 15%만큼 피해를 받았을 때 최대로 획득. 최대 획득값: 3)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "남부 리우 협회 4과 부장",
        "rarity":  "000",
        "supportPassiveName":  "화끈한 격려",
        "condition":  "분노 6 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명이 공격 적중시 대상의 화상 위력 6 당 관통 피해량 +5% (최대 15%)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "북부 제뱌찌 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "우수 배달부",
        "condition":  "탐식 6 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명의 파열 위력, 횟수를 부여하는 스킬의 합 위력 +1"
    },
    {
        "sinner":  "로쟈",
        "identity":  "라만차랜드 공주",
        "rarity":  "000",
        "supportPassiveName":  "\"피를 피워내..\"",
        "condition":  "색욕 3 + 질투 3 보유",
        "supportPassiveEffect":  "턴 종료시 출혈 위력이 가장 높은 아군 1명의 출혈 위력을 최대 6 감소시키고, (감소한 출혈 위력 / 2)만큼 피어나는 가시 부여 (소수점 버림)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "흑수 - 사",
        "rarity":  "000",
        "supportPassiveName":  "피에 흐르는 독",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 적에게 파열 피해를 입히면, 다음 턴에 공격 레벨 감소 1, 방어 레벨 감소 1 부여 (턴 당 1회)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "로보토미 E.G.O::눈물로 벼려낸 검",
        "rarity":  "000",
        "supportPassiveName":  "절망하는 모든 자들을 위해…",
        "condition":  "우울 5 보유",
        "supportPassiveEffect":  "전투 시작 시 편성 순서가 가장 빠른 아군에게 효과 적용\n- 정신력이 -15 이하면, 빼기 코인 스킬의 최종 위력 +1\n- 정신력이 -30 이하면, 효과가 강화되어 빼기 코인 스킬의 최종 위력 +1, 피해량 +15%"
    },
    {
        "sinner":  "로쟈",
        "identity":  "R사 제 4무리 순록팀",
        "rarity":  "000",
        "supportPassiveName":  "캐롤 속에 죽어가는 동료들",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명의 충전 또는 특수 충전을 소모하고 적에게 침잠을 부여하는 효과를 가진 스킬의 피해량 +10% (E.G.O 스킬 제외)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "약지 야수파 도슨트",
        "rarity":  "000",
        "supportPassiveName":  "부서지진 않게 조심조심…",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "편성 순서가 가장 빠른 인격에게 아래 효과 적용\n- 색욕 공명 수가 홀수면, 출혈 위력 부여량 +1\n- 색욕 공명 수가 짝수면, 침잠 위력 부여량 +1\n- 해당 인격이 약지 소속 인격이면, 전투 시작시 공격 레벨 증가 1 또는 방어 레벨 증가 1을 얻음"
    },
    {
        "sinner":  "로쟈",
        "identity":  "거미집 엄지 아비",
        "rarity":  "000",
        "supportPassiveName":  "약해 빠진 것들",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 적에게 진동 폭발 시, 다음 턴에 공격 레벨 증가 2 얻음 (턴당 1회)\n- 엄지 소속의 경우 추가로 신속 1 얻음 (턴당 1회)"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "앙심",
        "condition":  "오만 3 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명 다른 아군이 사망하면 다음 턴에 공격 위력 증가 1 얻음"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "남부 츠바이 협회 6과",
        "rarity":  "00",
        "supportPassiveName":  "뚝심",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명 받는 피해량 -10%"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "마리아치 보스",
        "rarity":  "00",
        "supportPassiveName":  "농락",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명 자신보다 정신력이 낮은 적 공격 시 피해량 +10%"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "로보토미 E.G.O::홍적",
        "rarity":  "00",
        "supportPassiveName":  "기원부",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "현재 체력이 가장 높은 아군 1명이 공격, 반격 스킬로 부여하는 파열 위력 부여 값 +1"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "어금니 보트 센터 해결사",
        "rarity":  "00",
        "supportPassiveName":  "출력 개조",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군의 공격 스킬의 스킬, 코인 효과로 적에게 부여하는 진동 +1"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "서부 츠바이 협회 3과",
        "rarity":  "00",
        "supportPassiveName":  "의뢰 대상 보호",
        "condition":  "나태 4 보유",
        "supportPassiveEffect":  "턴 종료 시 체력 비율이 가장 낮은 아군 1명에게 다음 턴에 신속 1, 방어 레벨 증가 3 부여"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "검계 살수",
        "rarity":  "000",
        "supportPassiveName":  "피 묻힌 손",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "속도가 가장 낮은 아군 1명 마지막 스킬의 최종 위력 +1"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "쥐어들 자",
        "rarity":  "000",
        "supportPassiveName":  "몰린",
        "condition":  "분노 6 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명의 타격 피해량 +10%\n해당 효과를 받는 대상의 정신력이 0 미만이면 정신력이 낮아질수록 타격 피해량 추가 증가 (최대 10%)"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "남부 섕크 협회 4과 부장",
        "rarity":  "000",
        "supportPassiveName":  "느리시네요",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 회피 성공 시 다음 턴에 신속 1을 얻음 (최대 5회)"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "새벽 사무소 해결사",
        "rarity":  "000",
        "supportPassiveName":  "이글거리는 검",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "편성 순서 1번인 아군이 앞면 적중시 화상 횟수 1 부여 (턴 당 최대 4회 발동)"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "북부 제뱌찌 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "신속 배달부",
        "condition":  "탐식 6 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 파열이 부여된 적에게 공격 적중시 방어 레벨 감소 1 부여 (턴 당 적 1명당 3회)"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "중지 작은 아우",
        "rarity":  "000",
        "supportPassiveName":  "빽",
        "condition":  "질투 5 보유",
        "supportPassiveEffect":  "전투 시작 시, 현재 체력 비율이 가장 낮은 아군 1명이 방어 레벨 증가 2 얻음\n- 대상이 중지 소속이면, 공격 레벨 증가 2 추가로 얻음"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "동부 엄지 솔다토 II",
        "rarity":  "000",
        "supportPassiveName":  "재장전",
        "condition":  "오만 4 공명",
        "supportPassiveEffect":  "탄환을 쓰는 인격 중 편성 순서가 가장 빠른 아군 1명의 공격이 종료되었을 때, 해당 인격의 현재 보유 탄환이 절반 미만이면, 탄환을 최대치의 절반만큼 다시 얻음 (소수점 올림. 전투당 1회. 최대 탄환 획득값 : 5)\n- 위력, 횟수가 분리된 탄환은 위력, 횟수를 무작위로 얻음\n- 만약 위력 또는 횟수가 최댓값인 경우, 최댓값이 아닌 쪽의 탄환으로 얻음\n- 탄환을 사용하는 인격이 없으면, 이 효과는 발동하지 않음"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "흑수 - 유",
        "rarity":  "000",
        "supportPassiveName":  "혈염도 [血炎刀]",
        "condition":  "분노 3 + 탐식 3 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군이 자신의 스킬로 적에게 화상 또는 파열 위력을 부여할 때, 화상, 파열 위력 1 부여 (턴 당 1회)"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "거미집 소지 제자",
        "rarity":  "000",
        "supportPassiveName":  "정념[靜念]",
        "condition":  "오만 2 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 수비 스킬을 장착하고 전투 시작시, 정신력 5 회복, 보호막 5 얻음"
    },
    {
        "sinner":  "오티스",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "군인정신",
        "condition":  "나태 5 보유",
        "supportPassiveEffect":  "현재 체력이 가장 높은 아군 1명 정신력이 0 미만인 적 공격 시 피해량 +30%"
    },
    {
        "sinner":  "오티스",
        "identity":  "검계 살수",
        "rarity":  "00",
        "supportPassiveName":  "확인사살",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명 체력이 25% 미만인 적 공격 시 피해량 +30%"
    },
    {
        "sinner":  "오티스",
        "identity":  "G사 부장",
        "rarity":  "00",
        "supportPassiveName":  "각오",
        "condition":  "나태 4 보유",
        "supportPassiveEffect":  "현재 체력이 가장 높은 아군 1명 전투 시작 시 수비 위력 증가 1, 공격 위력 증가 1, 보호 1 중 무작위 1개 효과를 얻음"
    },
    {
        "sinner":  "오티스",
        "identity":  "남부 섕크 협회 4과",
        "rarity":  "00",
        "supportPassiveName":  "멘토의 지도",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명의 속도가 모든 적보다 높으면, 해당 아군의 합 위력 +1\n효과를 적용받는 아군이 섕크 협회 해결사면, 해당 캐릭터의 관통 피해량 +10%"
    },
    {
        "sinner":  "오티스",
        "identity":  "약지 점묘파 스튜던트",
        "rarity":  "00",
        "supportPassiveName":  "밑그림",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "- 정신력이 가장 낮은 아군 1명이 출혈이 부여된 적 처치 시 정신력 4 회복\n- 대상이 보유한 부정적인 효과 1개당 추가 1 회복 (최대 4. 턴 당 최대 3회 발동)"
    },
    {
        "sinner":  "오티스",
        "identity":  "남부 세븐 협회 6과 부장",
        "rarity":  "000",
        "supportPassiveName":  "정보 공유",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "속도가 가장 높은 아군 1명이 상대의 약점이나 취약 속성으로 공격할 때 피해량 +10%"
    },
    {
        "sinner":  "오티스",
        "identity":  "어금니 사무소 해결사",
        "rarity":  "000",
        "supportPassiveName":  "윽박과 응원",
        "condition":  "나태 3 보유",
        "supportPassiveEffect":  "진동 횟수가 가장 높은 아군 1명이 스킬 효과로 얻는 진동 횟수 +1"
    },
    {
        "sinner":  "오티스",
        "identity":  "로보토미 E.G.O::마탄",
        "rarity":  "000",
        "supportPassiveName":  "의뢰 작업",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명의 E.G.O 스킬의 피해량 +10%\nE.G.O 자원을 7개 이상 소모하는 E.G.O 스킬이면, 추가로 피해량 +5%"
    },
    {
        "sinner":  "오티스",
        "identity":  "워더링하이츠 치프 버틀러",
        "rarity":  "000",
        "supportPassiveName":  "버틀러 교육",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명이 정신력이 -25 미만인 대상과 합 진행 시 합 위력 +1"
    },
    {
        "sinner":  "오티스",
        "identity":  "W사 3등급 정리 요원 팀장",
        "rarity":  "000",
        "supportPassiveName":  "굴절",
        "condition":  "질투 4 공명",
        "supportPassiveEffect":  "턴 시작 시 충전 횟수가 가장 많은 아군 1명의 충전 횟수를 7 이상 소모한 스킬 피해량 +10% (턴 당 1회)"
    },
    {
        "sinner":  "오티스",
        "identity":  "라만차랜드 이발사",
        "rarity":  "000",
        "supportPassiveName":  "돈키호테류 경혈 8식 가위",
        "condition":  "색욕 5 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 공격 종료시 적이 사망했다면, 체력 10 회복 (턴 당 최대 2회)\n속도가 가장 빠른 아군 1명이 공격 종료 시 적이 사망했다면, 다음 턴 동안 스킬, 코인 효과로 출혈 위력 부여 시 출혈 횟수 1 증가 (턴 당 최대 3회)"
    },
    {
        "sinner":  "오티스",
        "identity":  "흑수 - 묘",
        "rarity":  "000",
        "supportPassiveName":  "무리짓는 토끼",
        "condition":  "탐식 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 파열이 있는 대상을 공격할 때, 가하는 피해량 +10%\n다음 턴에 신속 1 얻음 (턴 당 최대 1회)"
    },
    {
        "sinner":  "오티스",
        "identity":  "T사 3등급 강력징수직 직원",
        "rarity":  "000",
        "supportPassiveName":  "신속 공무 집행",
        "condition":  "나태 5 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 흐트러짐 상태인 대상을 공격할 때, 피해량 +10%"
    },
    {
        "sinner":  "오티스",
        "identity":  "LCA 우제트 선봉 3팀 팀장",
        "rarity":  "000",
        "supportPassiveName":  "매의 눈",
        "condition":  "우울 3 공명",
        "supportPassiveEffect":  "전투 시작 시 체력 비율이 제일 낮은 아군에게 다음 턴 보호 1 부여"
    },
    {
        "sinner":  "오티스",
        "identity":  "거미집 중지 아비",
        "rarity":  "000",
        "supportPassiveName":  "누가 가족을 건드렸나",
        "condition":  "질투 4 공명",
        "supportPassiveEffect":  "전투 시작 시 반격을 장착한 아군이 피해량 증가 1, 보호 1 얻음\n- 효과를 받는 아군이 중지 소속이면, 대신 질투 피해량 증가 2, 보호 2 얻음"
    },
    {
        "sinner":  "그레고르",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "인자 코드 G-0",
        "condition":  "우울 3 보유",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명 전투 시작 시 체력 5 회복"
    },
    {
        "sinner":  "그레고르",
        "identity":  "남부 리우 협회 6과",
        "rarity":  "00",
        "supportPassiveName":  "내달리는 마음",
        "condition":  "나태 5 보유",
        "supportPassiveEffect":  "속도가 가장 낮은 아군 1명 3번째 코인 이후부터 피해량 +30%"
    },
    {
        "sinner":  "그레고르",
        "identity":  "료.고.파. 조수",
        "rarity":  "00",
        "supportPassiveName":  "조리 보조",
        "condition":  "색욕 5 보유",
        "supportPassiveEffect":  "체력이 가장 낮은 아군 1명이 전투 시작 시 체력 5 회복\n료.고.파. 주방장 료슈 - 즉흥 조리 패시브의 체력 회복량 +5"
    },
    {
        "sinner":  "그레고르",
        "identity":  "장미스패너 공방 해결사",
        "rarity":  "00",
        "supportPassiveName":  "톱날 정비",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군 1명이 진동이 있는 대상에게 부여하는 파열 +1"
    },
    {
        "sinner":  "그레고르",
        "identity":  "흑운회 부조장",
        "rarity":  "00",
        "supportPassiveName":  "흑운검법",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군 1명이 출혈이 7 이상 부여된 적에게 공격 적중 시 다음 턴에 공격 레벨 감소 1 부여 (턴 당 3회)"
    },
    {
        "sinner":  "그레고르",
        "identity":  "G사 일등대리",
        "rarity":  "000",
        "supportPassiveName":  "인자 코드 G-3",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명 합 승리 시 체력 5 회복"
    },
    {
        "sinner":  "그레고르",
        "identity":  "남부 츠바이 협회 4과",
        "rarity":  "000",
        "supportPassiveName":  "당신의 방패",
        "condition":  "나태 5 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명이 2개 이상의 공격 타겟이 되었으면, 방어 레벨 증가 3을 얻음"
    },
    {
        "sinner":  "그레고르",
        "identity":  "쌍갈고리 해적단 부선장",
        "rarity":  "000",
        "supportPassiveName":  "바람 구멍",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "호흡을 가장 많이 보유한 아군 1명이 적 처치 시 다음 턴에 관통 피해량 증가 1을 얻음. (턴 당 1회)"
    },
    {
        "sinner":  "그레고르",
        "identity":  "에드가 가문 승계자",
        "rarity":  "000",
        "supportPassiveName":  "시달림",
        "condition":  "우울 3 보유",
        "supportPassiveEffect":  "전투 시작 시 정신력이 가장 낮은 아군 1명의 정신력이 5 감소하고 우울 피해량 증가 1 얻음"
    },
    {
        "sinner":  "그레고르",
        "identity":  "라만차랜드 신부",
        "rarity":  "000",
        "supportPassiveName":  "돈키호테류 경혈 6식 채찍",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "현재 체력 비율이 가장 낮은 아군이 공격 적중시 체력 3 회복 (턴 당 3회)\n- 피격 대상이 출혈을 보유하고 있으면 3 추가로 회복"
    },
    {
        "sinner":  "그레고르",
        "identity":  "불주먹 사무소 생존자",
        "rarity":  "000",
        "supportPassiveName":  "저건 우리 사무소의 복장이길...",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 인격 1명이 공격 적중 시 대상의 화상 6 당, 분노 피해량 +5% (최대 20%)"
    },
    {
        "sinner":  "그레고르",
        "identity":  "흑수 - 사",
        "rarity":  "000",
        "supportPassiveName":  "뱀과 같이 유연하고 늘어나며 급작스럽게",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "전투 중 자신이 사망했으면, 이후 대기 해제되는 인격 중 편성 순서가 가장 빠른 대상 1명에게 매 턴마다 전투 시작시 호흡 2 부여"
    },
    {
        "sinner":  "그레고르",
        "identity":  "밤의 송곳 카피타노",
        "rarity":  "000",
        "supportPassiveName":  "틈새 노리기",
        "condition":  "나태 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 기본 공격 스킬 사용 시 메인 타겟의 속도가 자신보다 느리면 속도 차이 3당, 대상에게 수비 위력 감소 1 부여 (턴당 최대 2)"
    },
    {
        "sinner":  "그레고르",
        "identity":  "로보토미 E.G.O::램프",
        "rarity":  "000",
        "supportPassiveName":  "아직 구해야 할 생명이 더 남아있었나",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "턴 종료 시 부정적인 효과를 보유한 아군 중 편성 순서가 가장 빠른 아군에게 아래 효과 적용\n- 다음 턴에 가장 왼쪽 슬롯이 도발치 4 얻음\n- 다음 턴에 타격 피해량 증가 1 얻음"
    },
    {
        "sinner":  "그레고르",
        "identity":  "LCE E.G.O::AEDD",
        "rarity":  "000",
        "supportPassiveName":  "제세동",
        "condition":  "질투 4 공명",
        "supportPassiveEffect":  "편성 순서가 가장 빠른 아군 셋이 턴 종료 시 이번 턴에 각자의 공격 스킬을 사용하여 소모한 충전 횟수와 소모한 특수 충전의 합만큼 각자의 체력을 회복 (최대 10)"
    },
    {
        "sinner":  "그레고르",
        "identity":  "새벽 사무소 대표",
        "rarity":  "000",
        "supportPassiveName":  "스티그마 공방 의체",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "현재 체력이 가장 많은 아군이 화상이 있는 적에게 공격 적중 시, 진동 2 부여 (턴당 1회)\n- 대상의 화상이 10 이상이면, 마지막 코인 적중 시 진동 폭발. 진동 횟수 1 감소\n\n본래 날붙이만을 만드는 스티그마 공방에서 새벽녘의 해결사를 위해 특별히 제작해 준 의체. 스티그마 공방의 특성을 이해하지 못한 자가 사용한다면, 이 열기를 뿜는 팔은 착용자의 신체까지 녹일 것이다."
    }
]
;
const SINS = ["분노","색욕","나태","탐식","우울","오만","질투"];
const ACTIVATIONS = ["공명","보유"];
const SKILL_POSITIONS = [{key:"1", label:"스킬 1"}, {key:"2", label:"스킬 2"}, {key:"3", label:"스킬 3"}, {key:"def", label:"수비"}];
const SIN_SET = new Set(SINS);











const KEYWORD_DEFS = {
  "화상": "턴 종료 시, 효과 위력만큼 고정 피해를 받고 횟수 1 감소.",
  "출혈": "공격 스킬의 코인 판정 시, 효과 위력만큼 고정 체력 피해를 받음. 코인 판정 후 횟수 1 감소.",
  "진동": "진동 폭발 스킬로 피격 시, 효과 위력만큼 흐트러짐 손상을 입힘. 턴 종료 후 횟수 1 감소.",
  "파열": "공격 스킬로 피격 시, 효과 위력만큼 고정 체력 피해를 받음. 피격 후 횟수 1 감소.",
  "침잠": "공격 스킬로 피격 시, 효과 위력만큼 고정 정신력 피해를 받음(정신력이 없는 대상은 우울 속성 피해로 적용). 피격 후 횟수 1 감소.",
  "호흡": "적중 시 효과 위력에 비례한 확률로 치명타 피해를 입힘. 턴 종료 시, 치명타가 발동했다면 횟수 1 감소.",
  "충전": "소모 시 특정 스킬의 위력이 상승함. 최대 20까지 쌓을 수 있고, 턴 종료 시 횟수 1 감소.",
  "나비": "산나비·죽은나비로 구성되는 특수 침잠. 피격 시 공격자의 정신력을 산나비 수치에 비례해 회복시키고, 정신력이 없는 대상은 죽은나비 수치에 비례한 우울 피해를 받음. 턴 종료 시 산나비가 죽은나비로 전환됨. (로보토미 E.G.O::엄숙한 애도 이상 전용 키워드)",
  "탄환": "특정 스킬을 사용할 때 소모되는 자원. 보유한 탄환이 없으면 해당 공격이 취소됨. 인격마다 종류가 다른 전용 탄환을 사용하는 경우가 많음.",
  "광신": "이번 턴 동안 못이 부여된 대상을 공격할 때 최종 위력이 수치만큼 증가. (N사 광신도 계열 인격 전용 키워드)",
  "도발치": "집중 전투에서 도발치가 높은 슬롯일수록 적에게 공격받을 확률이 높아짐.",
  "신속": "한 턴 동안 속도가 수치만큼 증가.",
  "속박": "한 턴 동안 속도가 수치만큼 감소.",
  "방어 레벨": "한 턴 동안 방어 레벨이 수치에 비례하여 증가·감소(방어 스킬의 최종 위력에 영향).",
  "공격 레벨": "한 턴 동안 공격 레벨이 수치에 비례하여 증가·감소(공격 스킬의 최종 위력에 영향).",
  "취약": "한 턴 동안 스킬로 받는 피해가 수치에 비례하여 증가(최대 10).",
  "보호": "한 턴 동안 스킬로 받는 피해가 수치에 비례하여 감소(최대 10).",
  "합 위력": "합(클래시) 진행 시, 합 위력이 수치만큼 증가·감소.",
  "충전 역장": "충전 역장 기준, (수치×3)만큼 보호막을 얻고 그 보호막이 전부 소모되면 역장이 1 감소. 턴 종료 시 남은 역장 수치만큼 충전 횟수를 얻고 소멸.",
  "보호막": "받는 피해를 체력보다 먼저 흡수하는 수치. 전부 소모되면 사라짐.",
  "흐트러짐": "방어가 완전히 무너져 해당 턴 동안 정해진 만큼 추가 피해(흐트러짐 손상)를 받는 상태.",
  "크리티컬": "치명타. 적중 시 피해량이 배수(기본 1.2배)만큼 증가하는 효과로, 주로 호흡 위력에 비례한 확률로 발동함.",
  "패닉": "정신력이 0 미만으로 떨어졌을 때 발생하는 상태로, 인격마다 정해진 특수 효과(패닉 유형)가 적용됨.",
};



const IDENTITY_KEYWORDS_DATA = {
  "홍루|동부 섕크 협회 3과": ["화상","호흡"],
  "이상|LCE E.G.O::차원찢개": ["파열","충전"],
  "파우스트|새벽 사무소 해결사": ["화상","진동"],
  "그레고르|새벽 사무소 대표": ["진동","화상"],
  "히스클리프|거미집 엄지 제자": ["화상","진동"],
  "로쟈|거미집 엄지 아비": ["화상","진동"],
  "홍루|S사 추노꾼": ["출혈","호흡"],
  "이스마엘|LCD 현장추리팀": ["출혈","호흡"],
  "오티스|거미집 중지 아비": ["화상","출혈"],
  "료슈|거미집의 검": ["화상","출혈","호흡"],
  "히스클리프|중지 작은 형님": ["출혈","화상"],
  "뫼르소|약지 야수파 스튜던트": ["출혈","침잠"],
  "로쟈|약지 야수파 도슨트": ["출혈","침잠"],
  "파우스트|거미집 약지 제자": ["출혈","충전"],
  "홍루|거미집 약지 아비": ["출혈","충전"],
  "그레고르|LCE E.G.O::AEDD": ["충전","파열"],
  "료슈|로보토미 E.G.O::잔향 · 외로움": ["침잠","진동","탄환"],
  "뫼르소|로보토미 E.G.O::호넷【변조】": ["출혈","화상"],
  "이상|거미집 검지 아비": ["호흡","침잠"],
  "싱클레어|거미집 소지 제자": ["출혈","호흡"],
  "그레고르|로보토미 E.G.O::램프": ["화상","침잠"],
  "이스마엘|거미집 중지 제자": ["화상","출혈"],
  "돈키호테|검지 대행자 - 개화 E.G.O::대행": ["호흡","침잠"],
  "파우스트|검지 수행자:【쪽지】": ["호흡","침잠"],
  "오티스|LCA 우제트 선봉 3팀 팀장": ["침잠","진동"],
  "로쟈|R사 제 4무리 순록팀": ["충전","침잠"],
  "료슈|홍원 방랑무사": ["호흡","파열"],
  "돈키호테|흑수 - 미": ["파열","침잠"],
  "히스클리프|흑수 - 유 필두": ["화상","파열"],
  "이스마엘|정사무소 대표": ["침잠","진동"],
  "그레고르|밤의 송곳 카피타노": ["출혈","진동"],
  "뫼르소|라만차랜드 왕자": ["출혈","파열","탄환"],
  "히스클리프|W사 4등급 정리 요원 - CCA": ["충전","파열"],
  "파우스트|동부 시 협회 3과": ["출혈","호흡"],
  "료슈|N사 E.G.O::경멸, 경외": ["출혈","진동"],
  "이상|흑수 - 오 필두": ["파열","진동"],
  "싱클레어|흑수 - 유": ["화상","파열","탄환"],
  "홍루|홍원 군주": ["호흡","파열"],
  "오티스|T사 3등급 강력징수직 직원": ["진동"],
  "돈키호테|로보토미 E.G.O::사랑과 증오의 이름으로": ["충전","파열","침잠"],
  "로쟈|로보토미 E.G.O::눈물로 벼려낸 검": ["침잠","충전"],
  "이상|N사 E.G.O::흉탄": ["출혈","호흡"],
  "뫼르소|동부 엄지 카포 IIII": ["화상","진동"],
  "싱클레어|동부 엄지 솔다토 II": ["화상","진동","탄환"],
  "이스마엘|가주 후보": ["호흡","파열"],
  "파우스트|흑수 - 묘 필두": ["파열"],
  "로쟈|흑수 - 사": ["호흡","파열"],
  "그레고르|흑수 - 사": ["호흡","파열"],
  "홍루|R사 제 4무리 순록팀": ["충전","침잠","탄환"],
  "싱클레어|중지 작은 아우": ["출혈"],
  "료슈|흑수 - 묘": ["파열"],
  "오티스|흑수 - 묘": ["파열"],
  "돈키호테|동부 섕크 협회 3과": ["화상","호흡"],
  "그레고르|불주먹 사무소 생존자": ["화상"],
  "이상|남부 리우 협회 3과": ["화상"],
  "히스클리프|흑운회 와카슈": ["출혈","탄환"],
  "이스마엘|흑운회 부조장": ["출혈"],
  "이상|LCE E.G.O::초롱": ["파열"],
  "파우스트|LCE E.G.O::홍염살": ["화상"],
  "홍루|마침표 사무소 대표": ["호흡","탄환"],
  "히스클리프|마침표 사무소 해결사": ["호흡","탄환"],
  "돈키호테|라만차랜드 실장": ["출혈"],
  "싱클레어|북부 제뱌찌 협회 3과": ["파열"],
  "로쟈|라만차랜드 공주": ["출혈","파열"],
  "그레고르|라만차랜드 신부": ["출혈","파열"],
  "홍루|송곳니 사냥 사무소 해결사": ["파열"],
  "오티스|라만차랜드 이발사": ["출혈"],
  "뫼르소|서부 섕크 협회 3과": ["호흡","파열"],
  "싱클레어|서부 츠바이 협회 3과": ["진동"],
  "이스마엘|서부 츠바이 협회 3과": ["진동"],
  "로쟈|북부 제뱌찌 협회 3과": ["파열"],
  "이상|로보토미 E.G.O::엄숙한 애도": ["침잠"],
  "료슈|로보토미 E.G.O::적안 · 참회": ["출혈","충전"],
  "히스클리프|와일드헌트": ["침잠"],
  "파우스트|멀티크랙 사무소 대표": ["충전"],
  "히스클리프|멀티크랙 사무소 해결사": ["충전"],
  "오티스|W사 3등급 정리 요원 팀장": ["충전","파열"],
  "뫼르소|남부 디에치 협회 4과 부장": ["침잠"],
  "돈키호테|T사 3등급 징수직 직원": ["진동"],
  "로쟈|T사 2등급 징수직 직원": ["진동"],
  "료슈|20구 유로지비": ["진동"],
  "홍루|20구 유로지비": ["진동"],
  "이상|약지 점묘파 스튜던트": ["출혈"],
  "오티스|약지 점묘파 스튜던트": ["출혈"],
  "싱클레어|새벽 사무소 해결사": ["화상"],
  "료슈|에드가 가문 치프 버틀러": ["호흡"],
  "이스마엘|에드가 가문 버틀러": ["호흡","침잠"],
  "파우스트|워더링하이츠 버틀러": ["침잠"],
  "그레고르|에드가 가문 승계자": ["침잠"],
  "뫼르소|데드레빗츠 보스": ["파열"],
  "오티스|워더링하이츠 치프 버틀러": ["침잠"],
  "히스클리프|남부 외우피 협회 3과": ["진동"],
  "료슈|남부 리우 협회 4과": ["화상","탄환"],
  "로쟈|남부 리우 협회 4과 부장": ["화상"],
  "파우스트|검계 살수": ["출혈","호흡"],
  "돈키호테|검계 살수": ["호흡"],
  "뫼르소|검계 우두머리": ["호흡"],
  "그레고르|흑운회 부조장": ["출혈"],
  "이스마엘|피쿼드호 선장": ["출혈","화상","호흡"],
  "이상|남부 디에치 협회 4과": ["침잠"],
  "홍루|남부 디에치 협회 4과": ["침잠"],
  "돈키호테|로보토미 E.G.O::초롱": ["파열"],
  "오티스|로보토미 E.G.O::마탄": ["화상"],
  "싱클레어|남부 섕크 협회 4과 부장": ["호흡"],
  "오티스|남부 섕크 협회 4과": ["호흡"],
  "이상|피쿼드호 일등 항해사": ["출혈","호흡"],
  "히스클리프|피쿼드호 작살잡이": ["출혈","호흡"],
  "돈키호테|중지 작은 아우": ["출혈"],
  "뫼르소|중지 작은 아우": ["출혈"],
  "료슈|LCCB 대리": ["호흡","파열","진동","탄환"],
  "그레고르|쌍갈고리 해적단 부선장": ["출혈","호흡","탄환"],
  "이상|W사 3등급 정리 요원": ["충전","파열"],
  "파우스트|로보토미 E.G.O::후회": ["진동"],
  "홍루|갈고리 사무소 해결사": ["출혈"],
  "로쟈|남부 디에치 협회 4과": ["침잠"],
  "이상|어금니 사무소 해결사": ["진동"],
  "오티스|어금니 사무소 해결사": ["진동"],
  "파우스트|남부 세븐 협회 4과": ["파열"],
  "히스클리프|남부 세븐 협회 4과": ["파열"],
  "료슈|W사 3등급 정리 요원": ["충전"],
  "홍루|W사 2등급 정리 요원": ["충전","파열"],
  "파우스트|남부 츠바이 협회 4과": [],
  "그레고르|남부 츠바이 협회 4과": [],
  "이스마엘|어금니 보트 센터 해결사": ["침잠","진동"],
  "싱클레어|어금니 보트 센터 해결사": ["진동"],
  "돈키호테|남부 섕크 협회 5과 부장": [],
  "뫼르소|R사 제 4무리 코뿔소팀": ["출혈","충전"],
  "로쟈|남부 츠바이 협회 5과": ["호흡"],
  "이스마엘|남부 리우 협회 4과": ["화상"],
  "홍루|K사 3등급 적출직 직원": ["파열"],
  "싱클레어|로보토미 E.G.O::홍적": ["파열"],
  "이상|개화 E.G.O::동백": ["침잠"],
  "이스마엘|로보토미 E.G.O::출렁임": ["파열","진동"],
  "히스클리프|로보토미 E.G.O::여우비": ["파열","침잠"],
  "그레고르|장미스패너 공방 해결사": ["충전","파열","진동"],
  "뫼르소|장미스패너 공방 해결사": ["충전","진동"],
  "로쟈|장미스패너 공방 대표": ["충전","진동"],
  "돈키호테|N사 중간 망치": ["진동","출혈"],
  "싱클레어|쥐어들 자": ["출혈","화상"],
  "료슈|료.고.파. 주방장": ["출혈"],
  "그레고르|료.고.파. 조수": ["출혈"],
  "홍루|남부 리우 협회 5과": ["화상"],
  "오티스|남부 세븐 협회 6과 부장": ["파열"],
  "파우스트|쥐는 자": ["출혈"],
  "히스클리프|N사 작은 망치": ["출혈"],
  "뫼르소|N사 큰 망치": ["출혈"],
  "로쟈|N사 중간 망치": ["출혈"],
  "이상|검계 살수": ["호흡"],
  "이상|남부 세븐 협회 6과": ["파열"],
  "이상|LCB 수감자": ["침잠"],
  "파우스트|W사 2등급 정리 요원": ["충전"],
  "파우스트|살아남은 로보토미 직원": ["호흡","파열"],
  "파우스트|LCB 수감자": [],
  "돈키호테|W사 3등급 정리 요원": ["충전","파열"],
  "돈키호테|남부 시 협회 5과 부장": ["호흡"],
  "돈키호테|LCB 수감자": ["출혈"],
  "료슈|흑운회 와카슈": ["출혈"],
  "료슈|남부 세븐 협회 6과": ["파열"],
  "료슈|LCB 수감자": ["호흡"],
  "뫼르소|W사 2등급 정리 요원": ["충전","파열"],
  "뫼르소|남부 리우 협회 6과": ["화상"],
  "뫼르소|LCB 수감자": ["진동"],
  "홍루|콩콩이파 두목": ["출혈"],
  "홍루|흑운회 와카슈": ["출혈"],
  "홍루|LCB 수감자": ["파열","침잠"],
  "히스클리프|R사 제 4무리 토끼팀": ["출혈","충전","파열","탄환"],
  "히스클리프|남부 시 협회 5과": ["호흡"],
  "히스클리프|LCB 수감자": ["진동"],
  "이스마엘|R사 제 4무리 순록팀": ["충전","침잠"],
  "이스마엘|남부 시 협회 5과": ["호흡"],
  "이스마엘|LCCB 대리": ["파열","진동","탄환"],
  "이스마엘|LCB 수감자": ["진동"],
  "로쟈|흑운회 와카슈": ["출혈","호흡"],
  "로쟈|LCCB 대리": [],
  "로쟈|LCB 수감자": ["출혈"],
  "싱클레어|검계 살수": ["출혈","호흡"],
  "싱클레어|남부 츠바이 협회 6과": ["진동"],
  "싱클레어|마리아치 보스": ["호흡","침잠"],
  "싱클레어|LCB 수감자": ["파열"],
  "오티스|검계 살수": ["호흡"],
  "오티스|G사 부장": ["침잠"],
  "오티스|LCB 수감자": ["파열"],
  "그레고르|G사 일등대리": ["파열"],
  "그레고르|남부 리우 협회 6과": ["화상"],
  "그레고르|LCB 수감자": ["파열"],
};

const EGO_CONDITIONAL_DATA = {
  "이상|로보토미 E.G.O::엄숙한 애도": [{type:"ego", name:"엄숙한 애도", sin:"진동"}],
  "뫼르소|검계 우두머리": [{type:"ego", name:"착영휘도", sin:"출혈"}],
  "싱클레어|새벽 사무소 해결사": [{type:"gift", name:"날개 모양 양초", sin:"진동"}],
};


// 특정 인격이 원래 자신의 패시브/킷에 갖고 있는(외부 기프트가 필요 없는) 슬롯 보너스 규칙.
// key: "수감자|인격명". 지정된 groupExtra 예외 목록을 포함해 "거미집" 소속으로 판정되는
// 사망 처리 인격 deadPerStep명당 bonusPerStep만큼 슬롯 보너스, 최대 max까지.
const SLOT_BONUS_INNATE_DATA = {
  "료슈|거미집의 검": { deadPerStep:3, bonusPerStep:1, max:3 },
};
// "거미집" 문자열이 이름에 없지만 거미집 소속으로 판정되는 예외 인격 목록.
const GEOJIP_EXTRA_MEMBERS = new Set([
  "돈키호테|검지 대행자 - 개화 E.G.O::대행",
]);
function isGeojipMember(entry){
  if (!entry) return false;
  if (entry.identity.includes("거미집")) return true;
  return GEOJIP_EXTRA_MEMBERS.has(`${entry.sinner}|${entry.identity}`);
}

const ABBREV_DATA = {
  "이상|약지 점묘파 스튜던트": ["약상"],
  "이상|개화 E.G.O::동백": ["동상"],
  "이상|검계 살수": ["검상","검이상"],
  "이상|W사 3등급 정리 요원": ["W상","떱상"],
  "이상|로보토미 E.G.O::엄숙한 애도": ["죽나상","죽상"],
  "이상|남부 리우 협회 3과": ["리이상","리우상","리상"],
  "이상|흑수 - 오 필두": ["말상","웨이상","오상","오이상"],
  "이상|피쿼드호 일등 항해사": ["피이상","벅상"],
  "이상|LCE E.G.O::초롱": ["초상","초이상","초롱이상","초롱상"],
  "이상|남부 디에치 협회 4과": ["디상","디이상"],
  "이상|어금니 사무소 해결사": ["어상","어이상"],
  "이상|남부 세븐 협회 6과": ["세븐상","셉상","세이상"],
  "파우스트|LCE E.G.O::홍염살": ["홍파우"],
  "파우스트|멀티크랙 사무소 대표": ["멀파우"],
  "파우스트|검계 살수": ["검파우"],
  "파우스트|로보토미 E.G.O::후회": ["후파우"],
  "파우스트|남부 세븐 협회 4과": ["세파우","셉파우"],
  "파우스트|쥐는 자": ["쥐파우"],
  "파우스트|동부 시 협회 3과": ["시파우","활파우"],
  "파우스트|남부 츠바이 협회 4과": ["츠파우"],
  "파우스트|워더링하이츠 버틀러": ["버파우","워파우"],
  "파우스트|살아남은 로보토미 직원": ["로파우","롭파우","L파우"],
  "파우스트|W사 2등급 정리 요원": ["W파우","떱파우"],
  "돈키호테|라만차랜드 실장": ["실돈","혈돈"],
  "돈키호테|T사 3등급 징수직 직원": ["T돈","티돈"],
  "돈키호테|중지 작은 아우": ["중돈"],
  "돈키호테|남부 섕크 협회 5과 부장": ["남섕돈","섕돈"],
  "돈키호테|W사 3등급 정리 요원": ["W돈","떱돈"],
  "돈키호테|동부 섕크 협회 3과": ["동섕돈","섕돈","동생돈"],
  "돈키호테|로보토미 E.G.O::사랑과 증오의 이름으로": ["증돈","증여돈"],
  "돈키호테|흑수 - 미": ["양키","양돈","미돈"],
  "돈키호테|검계 살수": ["검돈"],
  "돈키호테|로보토미 E.G.O::초롱": ["초돈"],
  "돈키호테|N사 중간 망치": ["N돈"],
  "돈키호테|남부 시 협회 5과 부장": ["시돈"],
  "료슈|로보토미 E.G.O::적안 · 참회": ["적슈","적참","적참슈"],
  "료슈|에드가 가문 치프 버틀러": ["넬슈","버슈"],
  "료슈|W사 3등급 정리 요원": ["W슈. 떱슈","W슈","떱슈"],
  "료슈|료.고.파. 주방장": ["요슈"],
  "료슈|흑운회 와카슈": ["'흑슈'","흑슈"],
  "료슈|흑수 - 묘": ["'묘슈'","묘슈"],
  "료슈|홍원 방랑무사": ["대옥슈","료대옥","방랑슈","임대료","방뇨","방뇨료","취슈","취슈야객","방슈"],
  "료슈|20구 유로지비": ["유슈","탐슈"],
  "료슈|남부 리우 협회 4과": ["리료슈","리슈","리우료슈"],
  "료슈|LCCB 대리": ["샷슈","대리슈"],
  "료슈|남부 세븐 협회 6과": ["셉슈","세슈"],
  "뫼르소|서부 섕크 협회 3과": ["섕뫼"],
  "뫼르소|남부 디에치 협회 4과 부장": ["디뫼"],
  "뫼르소|검계 우두머리": ["검뫼"],
  "뫼르소|R사 제 4무리 코뿔소팀": ["R뫼","코뫼"],
  "뫼르소|N사 큰 망치": ["N뫼"],
  "뫼르소|W사 2등급 정리 요원": ["W뫼","떱뫼"],
  "뫼르소|동부 엄지 카포 IIII": ["뫼횡","뇌르소","엄뫼"],
  "뫼르소|라만차랜드 왕자": ["뫼세티","혈뫼","혈르소"],
  "뫼르소|데드레빗츠 보스": ["데뫼"],
  "뫼르소|중지 작은 아우": ["중뫼"],
  "뫼르소|장미스패너 공방 해결사": ["장뫼"],
  "뫼르소|남부 리우 협회 6과": ["리뫼","리우뫼"],
  "홍루|마침표 사무소 대표": ["탕루","마침표 홍루","탕후루","마루"],
  "홍루|20구 유로지비": ["유루","탐루"],
  "홍루|남부 디에치 협회 4과": ["디루"],
  "홍루|K사 3등급 적출직 직원": ["K루","케이루"],
  "홍루|콩콩이파 두목": ["콩루"],
  "홍루|R사 제 4무리 순록팀": ["R루"],
  "홍루|홍원 군주": ["홍치우","군루"],
  "홍루|송곳니 사냥 사무소 해결사": ["송루"],
  "홍루|갈고리 사무소 해결사": ["갈루"],
  "홍루|W사 2등급 정리 요원": ["W루","떱루"],
  "홍루|남부 리우 협회 5과": ["리루","리우루"],
  "홍루|흑운회 와카슈": ["흑루"],
  "히스클리프|흑운회 와카슈": ["흑히스"],
  "히스클리프|마침표 사무소 해결사": ["탕히스","마침표히스"],
  "히스클리프|와일드헌트": ["와히스","마히스"],
  "히스클리프|남부 외우피 협회 3과": ["외히스"],
  "히스클리프|피쿼드호 작살잡이": ["피히스","퀴히스"],
  "히스클리프|로보토미 E.G.O::여우비": ["여히스"],
  "히스클리프|R사 제 4무리 토끼팀": ["R히스"],
  "히스클리프|W사 4등급 정리 요원 - CCA": ["W히스","떱히스"],
  "히스클리프|흑수 - 유 필두": ["유히스 닭히스","닭히스","유히스"],
  "히스클리프|멀티크랙 사무소 해결사": ["멀히스"],
  "히스클리프|남부 세븐 협회 4과": ["세히스","셉히스"],
  "히스클리프|N사 작은 망치": ["N히스"],
  "히스클리프|남부 시 협회 5과": ["시히스"],
  "이스마엘|흑운회 부조장": ["흑이스"],
  "이스마엘|서부 츠바이 협회 3과": ["츠이스"],
  "이스마엘|피쿼드호 선장": ["피이스","선이스","선장마","선장마엘"],
  "이스마엘|어금니 보트 센터 해결사": ["해녀이스","해녀마엘","보트마엘"],
  "이스마엘|남부 리우 협회 4과": ["리이스","리우이스","리우마엘"],
  "이스마엘|R사 제 4무리 순록팀": ["R이스","순록마엘"],
  "이스마엘|가주 후보": ["시춘마엘","가스마엘","시춘이스","가주마엘"],
  "이스마엘|에드가 가문 버틀러": ["버이스","메이스"],
  "이스마엘|로보토미 E.G.O::출렁임": ["출이스","출렁마엘","뚱마엘","출렁이스"],
  "이스마엘|LCCB 대리": ["대이스","대리마엘"],
  "이스마엘|남부 시 협회 5과": ["시이스"],
  "로쟈|라만차랜드 공주": ["혈로쟈","돌쟈","돌로쟈","혈쟈"],
  "로쟈|북부 제뱌찌 협회 3과": ["제로쟈"],
  "로쟈|남부 리우 협회 4과 부장": ["리로쟈","리우로쟈"],
  "로쟈|남부 디에치 협회 4과": ["디로쟈","디쟈"],
  "로쟈|장미스패너 공방 대표": ["장로쟈","장쟈","장미로쟈"],
  "로쟈|흑운회 와카슈": ["'흑로쟈'","흑로쟈","흑쟈"],
  "로쟈|흑수 - 사": ["'사로쟈'","'뱀로쟈'","사로쟈","사쟈","뱀로쟈","뱀쟈"],
  "로쟈|로보토미 E.G.O::눈물로 벼려낸 검": ["절기로쟈","절쟈"],
  "로쟈|남부 츠바이 협회 5과": ["츠로쟈"],
  "로쟈|N사 중간 망치": ["N로쟈","N쟈"],
  "로쟈|LCCB 대리": ["대리로쟈","대로쟈"],
  "싱클레어|북부 제뱌찌 협회 3과": ["제싱"],
  "싱클레어|새벽 사무소 해결사": ["런싱","새싱","필싱"],
  "싱클레어|남부 섕크 협회 4과 부장": ["섕싱"],
  "싱클레어|쥐어들 자": ["쥐싱"],
  "싱클레어|검계 살수": ["검싱"],
  "싱클레어|중지 작은 아우": ["중싱"],
  "싱클레어|동부 엄지 솔다토 II": ["엄싱 엄준싱","엄싱","엄준싱"],
  "싱클레어|흑수 - 유": ["유싱","닭싱"],
  "싱클레어|서부 츠바이 협회 3과": ["츠싱","서츠싱"],
  "싱클레어|어금니 보트 센터 해결사": ["어싱","보트싱"],
  "싱클레어|로보토미 E.G.O::홍적": ["부적싱","홍적싱"],
  "싱클레어|마리아치 보스": ["마리싱","샤카싱"],
  "싱클레어|남부 츠바이 협회 6과": ["츠싱","남츠싱"],
  "오티스|라만차랜드 이발사": ["혈티스","이티스","라티스"],
  "오티스|W사 3등급 정리 요원 팀장": ["W티스","떱티스"],
  "오티스|워더링하이츠 치프 버틀러": ["집티스","버티스","치티스"],
  "오티스|로보토미 E.G.O::마탄": ["마티스"],
  "오티스|어금니 사무소 해결사": ["어티스"],
  "오티스|남부 세븐 협회 6과 부장": ["세티스"],
  "오티스|흑수 - 묘": ["'묘티스'","묘티스"],
  "오티스|T사 3등급 강력징수직 직원": ["티티스","T티스"],
  "오티스|약지 점묘파 스튜던트": ["약티스"],
  "오티스|남부 섕크 협회 4과": ["섕티스"],
  "오티스|검계 살수": ["검티스"],
  "오티스|G사 부장": ["G티스"],
  "그레고르|라만차랜드 신부": ["혈그렉","신부그렉"],
  "그레고르|에드가 가문 승계자": ["퐁그렉","에그렉","에드그렉"],
  "그레고르|쌍갈고리 해적단 부선장": ["갈그렉"],
  "그레고르|남부 츠바이 협회 4과": ["츠그렉"],
  "그레고르|G사 일등대리": ["G그렉"],
  "그레고르|불주먹 사무소 생존자": ["불그렉"],
  "그레고르|흑수 - 사": ["'사그렉'","'뱀그렉'","사그렉","뱀그렉"],
  "그레고르|밤의 송곳 카피타노": ["알그렉","밤그렉","알란그렉"],
  "그레고르|흑운회 부조장": ["'흑그렉'","흑그렉"],
  "그레고르|장미스패너 공방 해결사": ["장미그렉","장그렉"],
  "그레고르|료.고.파. 조수": ["요그렉"],
  "그레고르|남부 리우 협회 6과": ["리그렉","리우그렉"],
  "이상|N사 E.G.O::흉탄": ["흉상","구보상","N상"],
  "이상|거미집 검지 아비": ["뤼상","뤼엔상","크아악","이 새끼","중년","주제에"],
  "이상|LCE E.G.O::차원찢개": ["찢상","차찢상"],
  "파우스트|흑수 - 묘 필두": ["묘파우"],
  "파우스트|검지 수행자:【쪽지】": ["쪽파우"],
  "파우스트|거미집 약지 제자": ["파비나","약파우","텅파우","멍텅이"],
  "파우스트|새벽 사무소 해결사": ["유나파우","유파우","던파우"],
  "돈키호테|검지 대행자 - 개화 E.G.O::대행": ["돈망석"],
  "료슈|N사 E.G.O::경멸, 경외": ["경경슈","경슈"],
  "료슈|로보토미 E.G.O::잔향 · 외로움": ["잔슈","잔향슈","료박사"],
  "료슈|거미집의 검": ["검슈","거검슈","거슈","아라슈","하라슈"],
  "뫼르소|로보토미 E.G.O::호넷【변조】": ["호넷뫼","호뫼"],
  "뫼르소|약지 야수파 스튜던트": ["약뫼"],
  "홍루|거미집 약지 아비": ["홍리스토","칼루","약루"],
  "홍루|S사 추노꾼": ["S루","꾼루","추루"],
  "홍루|동부 섕크 협회 3과": ["동섕루","섕루"],
  "히스클리프|중지 작은 형님": ["히카르도","작형히스","작히스","중지히스","중히스","좁히스"],
  "히스클리프|거미집 엄지 제자": ["히치오","엄지히스","엄히스","닭갈비"],
  "이스마엘|정사무소 대표": ["하나마엘","후다마엘","정이스","좍귀"],
  "이스마엘|거미집 중지 제자": ["키라마엘","중이스","중지이스","중지마엘"],
  "이스마엘|LCD 현장추리팀": ["앵두마엘","좍두"],
  "로쟈|T사 2등급 징수직 직원": ["T로쟈","T쟈"],
  "로쟈|R사 제 4무리 순록팀": ["R쟈"],
  "로쟈|약지 야수파 도슨트": ["약로쟈","약쟈","털로쟈","털쟈"],
  "로쟈|거미집 엄지 아비": ["로렌치나","엄쟈"],
  "싱클레어|거미집 소지 제자": ["렌싱"],
  "오티스|LCA 우제트 선봉 3팀 팀장": ["우티스"],
  "오티스|거미집 중지 아비": ["오티아스","중티스"],
  "그레고르|로보토미 E.G.O::램프": ["램그렉","램프그렉"],
  "그레고르|LCE E.G.O::AEDD": ["충그렉","지네그렉"],
  "그레고르|새벽 사무소 대표": ["살바그렉","던그렉"],
};

const IDENTITY_SKILL_PROFILE = {
  "이상|LCB 수감자": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "이상|남부 세븐 협회 6과": {skills:[{sin:"우울",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "이상|검계 살수": {skills:[{sin:"오만",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"오만",tier:1}]},
  "이상|개화 E.G.O::동백": {skills:[{sin:"탐식",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "이상|어금니 사무소 해결사": {skills:[{sin:"색욕",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "이상|W사 3등급 정리 요원": {skills:[{sin:"나태",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "이상|피쿼드호 일등 항해사": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "이상|남부 디에치 협회 4과": {skills:[{sin:"탐식",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "이상|약지 점묘파 스튜던트": {skills:[{sin:"우울",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "이상|로보토미 E.G.O::엄숙한 애도": {skills:[{sin:"오만",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "이상|LCE E.G.O::초롱": {skills:[{sin:"나태",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "이상|남부 리우 협회 3과": {skills:[{sin:"나태",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "이상|N사 E.G.O::흉탄": {skills:[{sin:"분노",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:1}]},
  "이상|흑수 - 오 필두": {skills:[{sin:"나태",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"탐식",tier:3,num:1},{sin:"탐식",tier:3,num:0}],defense:[{sin:"탐식",tier:4}]},
  "파우스트|LCB 수감자": {skills:[{sin:"오만",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "파우스트|W사 2등급 정리 요원": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "파우스트|살아남은 로보토미 직원": {skills:[{sin:"색욕",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "파우스트|쥐는 자": {skills:[{sin:"질투",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "파우스트|남부 츠바이 협회 4과": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "파우스트|남부 세븐 협회 4과": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "파우스트|로보토미 E.G.O::후회": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"우울",tier:1}]},
  "파우스트|검계 살수": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "파우스트|워더링하이츠 버틀러": {skills:[{sin:"우울",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "파우스트|멀티크랙 사무소 대표": {skills:[{sin:"색욕",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "파우스트|LCE E.G.O::홍염살": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1},{sin:"분노",tier:3,num:0}],defense:[{sin:"분노",tier:4}]},
  "파우스트|흑수 - 묘 필두": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"탐식",tier:3,num:1},{sin:"탐식",tier:3,num:0}],defense:[{sin:"탐식",tier:1},{sin:"탐식",tier:1},{sin:"탐식",tier:3}]},
  "파우스트|동부 시 협회 3과": {skills:[{sin:"분노",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1},{sin:"색욕",tier:3,num:0}],defense:[{sin:"색욕",tier:3},{sin:"색욕",tier:1}]},
  "파우스트|검지 수행자:【쪽지】": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:1}]},
  "돈키호테|LCB 수감자": {skills:[{sin:"색욕",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "돈키호테|W사 3등급 정리 요원": {skills:[{sin:"나태",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "돈키호테|남부 시 협회 5과 부장": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "돈키호테|N사 중간 망치": {skills:[{sin:"색욕",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "돈키호테|남부 섕크 협회 5과 부장": {skills:[{sin:"색욕",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "돈키호테|중지 작은 아우": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"질투",tier:1},{sin:"질투",tier:3}]},
  "돈키호테|로보토미 E.G.O::초롱": {skills:[{sin:"탐식",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "돈키호테|검계 살수": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "돈키호테|T사 3등급 징수직 직원": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "돈키호테|라만차랜드 실장": {skills:[{sin:"나태",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"색욕",tier:3,num:1},{sin:"나태",tier:1,num:0},{sin:"분노",tier:2,num:0},{sin:"색욕",tier:3,num:0}],defense:[{sin:"색욕",tier:1},{sin:"색욕",tier:1}]},
  "돈키호테|동부 섕크 협회 3과": {skills:[{sin:"탐식",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "돈키호테|로보토미 E.G.O::사랑과 증오의 이름으로": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"질투",tier:3,num:1},{sin:"분노",tier:1,num:0},{sin:"질투",tier:2,num:0},{sin:"질투",tier:3,num:0}],defense:[{sin:"질투",tier:4}]},
  "돈키호테|흑수 - 미": {skills:[{sin:"색욕",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "돈키호테|검지 대행자 - 개화 E.G.O::대행": {skills:[{sin:"색욕",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"우울",tier:3,num:1},{sin:"색욕",tier:1,num:0},{sin:"오만",tier:2,num:0},{sin:"우울",tier:3,num:0}],defense:[{sin:"우울",tier:1},{sin:"우울",tier:1}]},
  "료슈|LCB 수감자": {skills:[{sin:"탐식",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "료슈|남부 세븐 협회 6과": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "료슈|흑운회 와카슈": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "료슈|료.고.파. 주방장": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "료슈|W사 3등급 정리 요원": {skills:[{sin:"색욕",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "료슈|LCCB 대리": {skills:[{sin:"색욕",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "료슈|남부 리우 협회 4과": {skills:[{sin:"탐식",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "료슈|에드가 가문 치프 버틀러": {skills:[{sin:"색욕",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "료슈|20구 유로지비": {skills:[{sin:"색욕",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "료슈|로보토미 E.G.O::적안 · 참회": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"색욕",tier:3,num:1},{sin:"색욕",tier:3,num:0}],defense:[{sin:"색욕",tier:1}]},
  "료슈|흑수 - 묘": {skills:[{sin:"색욕",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "료슈|N사 E.G.O::경멸, 경외": {skills:[{sin:"질투",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"색욕",tier:3,num:1},{sin:"색욕",tier:3,num:0},{sin:"오만",tier:4,num:0}],defense:[{sin:"나태",tier:4}]},
  "료슈|홍원 방랑무사": {skills:[{sin:"우울",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "뫼르소|LCB 수감자": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "뫼르소|남부 리우 협회 6과": {skills:[{sin:"색욕",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "뫼르소|W사 2등급 정리 요원": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "뫼르소|N사 큰 망치": {skills:[{sin:"나태",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "뫼르소|장미스패너 공방 해결사": {skills:[{sin:"우울",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "뫼르소|R사 제 4무리 코뿔소팀": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "뫼르소|중지 작은 아우": {skills:[{sin:"나태",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"질투",tier:1}]},
  "뫼르소|검계 우두머리": {skills:[{sin:"오만",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"질투",tier:1},{sin:"오만",tier:3}]},
  "뫼르소|데드레빗츠 보스": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "뫼르소|남부 디에치 협회 4과 부장": {skills:[{sin:"탐식",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "뫼르소|서부 섕크 협회 3과": {skills:[{sin:"오만",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "뫼르소|동부 엄지 카포 IIII": {skills:[{sin:"나태",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"분노",tier:3,num:1},{sin:"분노",tier:3,num:0}],defense:[{sin:"나태",tier:1}]},
  "뫼르소|라만차랜드 왕자": {skills:[{sin:"질투",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1},{sin:"색욕",tier:3,num:0}],defense:[{sin:"색욕",tier:1}]},
  "홍루|LCB 수감자": {skills:[{sin:"오만",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "홍루|흑운회 와카슈": {skills:[{sin:"색욕",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "홍루|콩콩이파 두목": {skills:[{sin:"질투",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "홍루|남부 리우 협회 5과": {skills:[{sin:"우울",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "홍루|K사 3등급 적출직 직원": {skills:[{sin:"오만",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "홍루|W사 2등급 정리 요원": {skills:[{sin:"오만",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "홍루|갈고리 사무소 해결사": {skills:[{sin:"분노",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "홍루|남부 디에치 협회 4과": {skills:[{sin:"분노",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "홍루|20구 유로지비": {skills:[{sin:"우울",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "홍루|송곳니 사냥 사무소 해결사": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "홍루|마침표 사무소 대표": {skills:[{sin:"나태",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"오만",tier:3,num:1},{sin:"우울",tier:2,num:0},{sin:"오만",tier:3,num:0},{sin:"오만",tier:1,num:0}],defense:[{sin:"오만",tier:4},{sin:"오만",tier:1}]},
  "홍루|R사 제 4무리 순록팀": {skills:[{sin:"탐식",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "홍루|홍원 군주": {skills:[{sin:"우울",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"오만",tier:3,num:1},{sin:"오만",tier:3,num:0},{sin:"오만",tier:3,num:0}],defense:[{sin:"탐식",tier:1},{sin:"탐식",tier:1}]},
  "히스클리프|LCB 수감자": {skills:[{sin:"질투",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"질투",tier:1}]},
  "히스클리프|남부 시 협회 5과": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "히스클리프|R사 제 4무리 토끼팀": {skills:[{sin:"분노",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "히스클리프|N사 작은 망치": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "히스클리프|로보토미 E.G.O::여우비": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "히스클리프|남부 세븐 협회 4과": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "히스클리프|피쿼드호 작살잡이": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "히스클리프|남부 외우피 협회 3과": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "히스클리프|멀티크랙 사무소 해결사": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "히스클리프|와일드헌트": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"우울",tier:3,num:1},{sin:"우울",tier:3,num:0}],defense:[{sin:"색욕",tier:1},{sin:"우울",tier:3}]},
  "히스클리프|마침표 사무소 해결사": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"오만",tier:3,num:1},{sin:"오만",tier:3,num:0}],defense:[{sin:"오만",tier:4},{sin:"오만",tier:4}]},
  "히스클리프|흑운회 와카슈": {skills:[{sin:"분노",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1},{sin:"색욕",tier:1,num:0}],defense:[{sin:"색욕",tier:1}]},
  "히스클리프|W사 4등급 정리 요원 - CCA": {skills:[{sin:"탐식",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:1}]},
  "히스클리프|흑수 - 유 필두": {skills:[{sin:"질투",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"분노",tier:3,num:1},{sin:"분노",tier:3,num:0}],defense:[{sin:"탐식",tier:1}]},
  "이스마엘|LCB 수감자": {skills:[{sin:"분노",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "이스마엘|R사 제 4무리 순록팀": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "이스마엘|남부 시 협회 5과": {skills:[{sin:"질투",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"질투",tier:1}]},
  "이스마엘|LCCB 대리": {skills:[{sin:"탐식",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "이스마엘|로보토미 E.G.O::출렁임": {skills:[{sin:"우울",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "이스마엘|남부 리우 협회 4과": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "이스마엘|어금니 보트 센터 해결사": {skills:[{sin:"오만",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "이스마엘|피쿼드호 선장": {skills:[{sin:"질투",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "이스마엘|에드가 가문 버틀러": {skills:[{sin:"나태",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "이스마엘|서부 츠바이 협회 3과": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "이스마엘|흑운회 부조장": {skills:[{sin:"질투",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "이스마엘|가주 후보": {skills:[{sin:"우울",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"질투",tier:3,num:1},{sin:"우울",tier:1,num:0}],defense:[{sin:"우울",tier:4}]},
  "이스마엘|정사무소 대표": {skills:[{sin:"분노",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"우울",tier:3,num:1},{sin:"질투",tier:3,num:0}],defense:[{sin:"오만",tier:1}]},
  "로쟈|LCB 수감자": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "로쟈|흑운회 와카슈": {skills:[{sin:"우울",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:1},{sin:"오만",tier:3}]},
  "로쟈|LCCB 대리": {skills:[{sin:"오만",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "로쟈|N사 중간 망치": {skills:[{sin:"오만",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "로쟈|장미스패너 공방 대표": {skills:[{sin:"오만",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "로쟈|남부 츠바이 협회 5과": {skills:[{sin:"분노",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "로쟈|남부 디에치 협회 4과": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "로쟈|남부 리우 협회 4과 부장": {skills:[{sin:"오만",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "로쟈|T사 2등급 징수직 직원": {skills:[{sin:"질투",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "로쟈|북부 제뱌찌 협회 3과": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"탐식",tier:1},{sin:"탐식",tier:1}]},
  "로쟈|라만차랜드 공주": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"색욕",tier:3,num:1},{sin:"색욕",tier:3,num:0}],defense:[{sin:"색욕",tier:1}]},
  "로쟈|흑수 - 사": {skills:[{sin:"질투",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "로쟈|로보토미 E.G.O::눈물로 벼려낸 검": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"오만",tier:3,num:1},{sin:"우울",tier:1,num:0},{sin:"질투",tier:2,num:0},{sin:"오만",tier:3,num:0}],defense:[{sin:"우울",tier:1},{sin:"우울",tier:1}]},
  "로쟈|R사 제 4무리 순록팀": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "싱클레어|LCB 수감자": {skills:[{sin:"오만",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"오만",tier:1}]},
  "싱클레어|검계 살수": {skills:[{sin:"탐식",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "싱클레어|남부 츠바이 협회 6과": {skills:[{sin:"우울",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "싱클레어|마리아치 보스": {skills:[{sin:"나태",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "싱클레어|쥐어들 자": {skills:[{sin:"우울",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"오만",tier:1}]},
  "싱클레어|로보토미 E.G.O::홍적": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "싱클레어|어금니 보트 센터 해결사": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "싱클레어|남부 섕크 협회 4과 부장": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "싱클레어|새벽 사무소 해결사": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"분노",tier:3,num:1},{sin:"분노",tier:3,num:0}],defense:[{sin:"색욕",tier:4}]},
  "싱클레어|서부 츠바이 협회 3과": {skills:[{sin:"색욕",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "싱클레어|북부 제뱌찌 협회 3과": {skills:[{sin:"색욕",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"탐식",tier:1},{sin:"탐식",tier:1}]},
  "싱클레어|중지 작은 아우": {skills:[{sin:"탐식",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:1},{sin:"질투",tier:2},{sin:"질투",tier:3}]},
  "싱클레어|동부 엄지 솔다토 II": {skills:[{sin:"색욕",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "싱클레어|흑수 - 유": {skills:[{sin:"색욕",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "오티스|LCB 수감자": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "오티스|검계 살수": {skills:[{sin:"분노",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "오티스|G사 부장": {skills:[{sin:"나태",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "오티스|남부 세븐 협회 6과 부장": {skills:[{sin:"탐식",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "오티스|어금니 사무소 해결사": {skills:[{sin:"분노",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "오티스|남부 섕크 협회 4과": {skills:[{sin:"오만",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "오티스|로보토미 E.G.O::마탄": {skills:[{sin:"분노",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "오티스|워더링하이츠 치프 버틀러": {skills:[{sin:"오만",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "오티스|약지 점묘파 스튜던트": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "오티스|W사 3등급 정리 요원 팀장": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "오티스|라만차랜드 이발사": {skills:[{sin:"탐식",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "오티스|흑수 - 묘": {skills:[{sin:"나태",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "오티스|T사 3등급 강력징수직 직원": {skills:[{sin:"오만",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "오티스|LCA 우제트 선봉 3팀 팀장": {skills:[{sin:"오만",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "그레고르|LCB 수감자": {skills:[{sin:"우울",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "그레고르|남부 리우 협회 6과": {skills:[{sin:"분노",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "그레고르|G사 일등대리": {skills:[{sin:"탐식",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "그레고르|료.고.파. 조수": {skills:[{sin:"색욕",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "그레고르|장미스패너 공방 해결사": {skills:[{sin:"탐식",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "그레고르|남부 츠바이 협회 4과": {skills:[{sin:"나태",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "그레고르|쌍갈고리 해적단 부선장": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "그레고르|흑운회 부조장": {skills:[{sin:"나태",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "그레고르|에드가 가문 승계자": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "그레고르|라만차랜드 신부": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "그레고르|불주먹 사무소 생존자": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"우울",tier:1}]},
  "그레고르|흑수 - 사": {skills:[{sin:"오만",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "그레고르|밤의 송곳 카피타노": {skills:[{sin:"나태",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1},{sin:"나태",tier:1,num:0},{sin:"오만",tier:3,num:0}],defense:[{sin:"색욕",tier:4}]},
  "료슈|거미집의 검": {skills:[{sin:"색욕",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "그레고르|로보토미 E.G.O::램프": {skills:[{sin:"분노",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "그레고르|LCE E.G.O::AEDD": {skills:[{sin:"탐식",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "그레고르|새벽 사무소 대표": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "로쟈|약지 야수파 도슨트": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "로쟈|거미집 엄지 아비": {skills:[{sin:"오만",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "료슈|로보토미 E.G.O::잔향 · 외로움": {skills:[{sin:"나태",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "뫼르소|로보토미 E.G.O::호넷【변조】": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "뫼르소|약지 야수파 스튜던트": {skills:[{sin:"분노",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "싱클레어|거미집 소지 제자": {skills:[{sin:"우울",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "오티스|거미집 중지 아비": {skills:[{sin:"색욕",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "이상|거미집 검지 아비": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "이상|LCE E.G.O::차원찢개": {skills:[{sin:"오만",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "이스마엘|거미집 중지 제자": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "이스마엘|LCD 현장추리팀": {skills:[{sin:"분노",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "파우스트|거미집 약지 제자": {skills:[{sin:"탐식",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "파우스트|새벽 사무소 해결사": {skills:[{sin:"오만",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "홍루|거미집 약지 아비": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "홍루|S사 추노꾼": {skills:[{sin:"탐식",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "홍루|동부 섕크 협회 3과": {skills:[{sin:"우울",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "히스클리프|중지 작은 형님": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "히스클리프|거미집 엄지 제자": {skills:[{sin:"색욕",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
};

const IDENTITY_SKILL_DETAIL = {
  "이상|LCB 수감자": {skills:[{name:"쳐내기",power:"4",coin:"+7",coinEffect:null},{name:"밀어찌르기",power:"4",coin:"+4",coinEffect:null},{name:"연격",power:"6",coin:"+2",coinEffect:null}],defense:{name:"가드",power:"7",coin:"+3",coinEffect:null}},
  "이상|남부 세븐 협회 6과": {skills:[{name:"플레쉬",power:"5",coin:"+7",coinEffect:null},{name:"리포스트",power:"5",coin:"+4",coinEffect:null},{name:"물리네",power:"5",coin:"+3",coinEffect:null}],defense:{name:"가드",power:"9",coin:"+3",coinEffect:null}},
  "이상|어금니 사무소 해결사": {skills:[{name:"침착하게",power:"3",coin:"+4",coinEffect:null},{name:"도박수",power:"4",coin:"+12",coinEffect:null},{name:"어금니 갈기",power:"4",coin:"+3",coinEffect:null}],defense:{name:"가드",power:"10",coin:"+5",coinEffect:"[사용시] 자신의 모든 스킬 슬롯에서 등급이 가장 낮은 스킬 1개를 버림"}},
  "이상|피쿼드호 일등 항해사": {skills:[{name:"후벼파기",power:"3",coin:"+4",coinEffect:null},{name:"쑤시고 쑤시기",power:"4",coin:"+4",coinEffect:null},{name:"급습",power:"4",coin:"+6",coinEffect:null}],defense:{name:"회피",power:"3",coin:"+10",coinEffect:null}},
  "이상|남부 디에치 협회 4과": {skills:[{name:"지식 소모",power:"3",coin:"+4",coinEffect:null},{name:"잠궈닫기",power:"4",coin:"+3",coinEffect:null},{name:"지식의 가호",power:"4",coin:"+2",coinEffect:null}],defense:{name:"탐구 몰입",power:"12",coin:"+6",coinEffect:"[사용시] 자신의 모든 스킬 슬롯에서 무작위 스킬 2개를 등급이 낮은 순으로 버림 [사용시] 다음 턴에 이 슬롯이 도발치 5 얻음"}},
  "이상|LCE E.G.O::초롱": {skills:[{name:null,power:"4",coin:"+3",coinEffect:null},{name:null,power:"8",coin:"+6",coinEffect:null},{name:null,power:"16",coin:"-5",coinEffect:null}],defense:{name:null,power:"10",coin:"+5",coinEffect:"[전투 시작시] 미끼 요정 3 얻음 (턴 당 1회) [사용시] 다음 턴에 도발치 8 얻음 [사용시] 대상의 파열 이 15, 파열 횟수가 3 이상이면, 이 스킬의 효과로 파열 횟수를 부여하지 않고, 기본 위력 +3 [적중시] 파열 횟수 2 증가"}},
  "이상|검계 살수": {skills:[{name:"격세",power:"6",coin:"+7",coinEffect:null},{name:"두의틀기",power:"7",coin:"+2",coinEffect:"[합 승리시] 다음 턴에 자신의 호흡 횟수 2 증가"},{name:"이면찬자",power:"8",coin:"+2",coinEffect:null}],defense:{name:"반격",power:"10",coin:"+8",coinEffect:"크리티컬 피해량 +70%"}},
  "이상|개화 E.G.O::동백": {skills:[{name:"움트는 봉우리",power:"3",coin:"+2",coinEffect:null},{name:"찰나의 꽃바람",power:"4",coin:"+4",coinEffect:null},{name:"피를 머금은 향기",power:"6",coin:"+4",coinEffect:null}],defense:{name:"흩날리는 잔향",power:"4",coin:"+10",coinEffect:"[회피 성공시] 침잠 1 부여"}},
  "이상|W사 3등급 정리 요원": {skills:[{name:"차원 긋기",power:"5",coin:"+6",coinEffect:null},{name:"에너지 순환",power:"5",coin:"+5",coinEffect:null},{name:"차원의 틈",power:"5",coin:"+4",coinEffect:null}],defense:{name:"텅 빈 차원",power:"4",coin:"+10",coinEffect:"충전 횟수 5 당 기본 위력 +1(최대 2) [회피 성공 시] 다음 턴에 처음으로 스킬로 부여하는 파열 +1 (턴 당 최대 증가량: 3)"}},
  "이상|약지 점묘파 스튜던트": {skills:[{name:"덧칠",power:"2",coin:"+3",coinEffect:null},{name:"혈점묘화",power:"8",coin:"+8",coinEffect:null},{name:"핏방울 채색",power:"3",coin:"+3",coinEffect:null}],defense:{name:"붓 털기",power:"10",coin:"+4",coinEffect:"대상의 출혈 1 당 기본 위력 +1 (최대 10)"}},
  "이상|로보토미 E.G.O::엄숙한 애도": {skills:[{name:"떠난이에게 축하를",power:"4",coin:"+4",coinEffect:null},{name:"남은자에게 엄숙한 애도를",power:"4",coin:"+6",coinEffect:null},{name:"이상으로 장례는 이상이오",power:"4",coin:"+3",coinEffect:null}],defense:{name:"관에서나비가날아오리라",power:"10",coin:"+4",coinEffect:"[전투 시작시] 재장전 (턴 당 1회) [전투 시작시] 최대 체력의 (지정한 대상의 모든 나비 )%만큼 보호막을 얻음 (턴 당 최대 20%)"}},
  "이상|남부 리우 협회 3과": {skills:[{name:"염참",power:"3",coin:"+4",coinEffect:null},{name:"정면돌파",power:"4",coin:"+4",coinEffect:null},{name:"검의 흐름",power:"4",coin:"+3",coinEffect:null}],defense:{name:"염반",power:"5",coin:"+3",coinEffect:null}},
  "이상|N사 E.G.O::흉탄": {skills:[{name:"헛점 파악",power:"5",coin:"+6",coinEffect:null},{name:"꿰뚫으리라",power:"4",coin:"+6",coinEffect:null},{name:"대상 조정 사격",power:"4",coin:"+7",coinEffect:null}],defense:{name:"전방 지원",power:"5",coin:"+7",coinEffect:"[합 가능 반격] [사용시] 자신의 호흡 2 당 코인 위력 +1 (최대 3) [사용시] 찢어진 추억 2 얻음 [적중시] 호흡 2 얻음 [적중시] 자신의 호흡 횟수 2 증가"}},
  "이상|흑수 - 오 필두": {skills:[{name:"베어 무너뜨리리",power:"3",coin:"+4",coinEffect:null},{name:"월도격 [月刀擊]",power:"4",coin:"+5",coinEffect:null},{name:"선봉주파",power:"5",coin:"+4",coinEffect:null}],defense:{name:"돌진 전, 가다듬겠소",power:"3",coin:"+10",coinEffect:"[합 가능 가드] [전투 시작시] 다음 턴에 각력【오】 3 얻음 [턴 종료 시] 자신에게 부여된 해제 가능한 부정적인 효과 중 무작위 1개 제거 (턴 당 1회) 파괴 불가 코인"}},
  "이상|거미집 검지 아비": {skills:[{name:"얼어붙은 피를 삼백삼십 휘감아",power:"3",coin:"+4",coinEffect:null},{name:null,power:"4",coin:"+4",coinEffect:null},{name:null,power:"4",coin:"+3",coinEffect:null}],defense:{name:"예측할 수 없는 변덕으로",power:"4",coin:"+10",coinEffect:"해금 - Ⅲ 이면, 코인 위력 +2 [전투 시작시] 호흡 횟수 2 증가 (턴당 1회) [회피 성공시] 호흡 2 얻음 (턴당 2회) [턴 종료 시] 해금 - II 미만이면, 다음 효과 발동 (전투당 1회) - 해금 - II 얻음 - 6 미만인 지령의 가호 가 6으로 변경됨 - 증가한 지령의 가호 1당 다음 턴 시작 시 카르마 5 얻음"}},
  "이상|LCE E.G.O::차원찢개": {skills:[{name:"차원 베기",power:"6",coin:"+7",coinEffect:null},{name:"연속 차원 베기",power:"4",coin:"+6",coinEffect:null},{name:"공간 절단",power:"5",coin:"+4",coinEffect:null}],defense:{name:"회피",power:"4",coin:"+10",coinEffect:"[전투 시작시] 자신의 충전 위력만큼 충전 역장 얻음 (턴당 1회, 최대 5) [전투 시작시] 차원 표류 1, 사색 차원 1 얻음 (턴당 1회) - 자신의 충전 위력이 3 이상이면 추가로 1 얻음 [전투 시작시] 자신의 충전 횟수가 7 미만이면, 최대 체력의 (부족한 충전 횟수)%만큼 체력을 소모하여 충전 횟수를 7까지 얻음 (이 피해로 체력이 0이 되지 않음, 소수점 버림) [전투 시작시] 자신의 충전 횟수가 15를 초과하면, 초과하는 충전 횟수를 최대 10 소모하고, 아래 효과 적용 - (소모값)%만큼 체력 회복 - (소모값 / 3)만큼 다음 턴에 신속 얻음 (소수점 버림)"}},
  "파우스트|LCB 수감자": {skills:[{name:"내려베기",power:"4",coin:"+7",coinEffect:null},{name:"올려베기",power:"5",coin:"+4",coinEffect:null},{name:"후벼찌르기",power:"7",coin:"+2",coinEffect:null}],defense:{name:"회피",power:"2",coin:"+10",coinEffect:null}},
  "파우스트|W사 2등급 정리 요원": {skills:[{name:"에너지 순환",power:"4",coin:"+8",coinEffect:null},{name:"도약",power:"6",coin:"+4",coinEffect:null},{name:"과충전",power:"6",coin:"+3",coinEffect:null}],defense:{name:"가드",power:"10",coin:"+2",coinEffect:null}},
  "파우스트|살아남은 로보토미 직원": {skills:[{name:"단격",power:"3",coin:"+8",coinEffect:null},{name:"깊게베기",power:"5",coin:"+3",coinEffect:null},{name:"기회 노리기",power:"4",coin:"+8",coinEffect:null}],defense:{name:"회피",power:"3",coin:"+10",coinEffect:null}},
  "파우스트|남부 츠바이 협회 4과": {skills:[{name:"순찰",power:"3",coin:"+4",coinEffect:null},{name:"고객 경호",power:"4",coin:"+3",coinEffect:null},{name:"치안 수호",power:"6",coin:"+5",coinEffect:null}],defense:{name:"가드",power:"12",coin:"+6",coinEffect:"[사용시] 다음 턴에 이 스킬 슬롯의 도발치 3 증가"}},
  "파우스트|워더링하이츠 버틀러": {skills:[{name:"압수",power:"3",coin:"+4",coinEffect:null},{name:"불청객 맞이",power:"4",coin:"+5",coinEffect:null},{name:"접객도 4식 봉심",power:"4",coin:"+2",coinEffect:null}],defense:{name:"사냥 대비",power:"7",coin:"+6",coinEffect:"[사용시] 대상의 침잠 이 10 이상이면 코인 위력 +7"}},
  "파우스트|쥐는 자": {skills:[{name:"광소",power:"4",coin:"+3",coinEffect:null},{name:"쥐어짐",power:"4",coin:"+4",coinEffect:null},{name:"처단",power:"6",coin:"+2",coinEffect:null}],defense:{name:"불결하군요",power:"4",coin:"+10",coinEffect:"[회피 성공시] 대상의 정신력 3 감소"}},
  "파우스트|남부 세븐 협회 4과": {skills:[{name:"예측 분석",power:"4",coin:"+3",coinEffect:null},{name:"대상 해체",power:"4",coin:"+4",coinEffect:null},{name:"프로파일링",power:"5",coin:"+4",coinEffect:null}],defense:{name:"빠르게 해결하죠",power:"10",coin:"+4",coinEffect:"[사용시] 다음 턴에 신속 1을 얻음 (턴 당 최대 3)"}},
  "파우스트|로보토미 E.G.O::후회": {skills:[{name:"조여오는 구속구",power:"4",coin:"+7",coinEffect:null},{name:"금속성 울림",power:"4",coin:"+4",coinEffect:null},{name:"풀려난 폭력성",power:"3",coin:"+5",coinEffect:null}],defense:{name:"앙금 쌓기",power:"9",coin:"+5",coinEffect:"[사용시] 자신의 진동 횟수 6 증가"}},
  "파우스트|검계 살수": {skills:[{name:"월하검무",power:"3",coin:"+2",coinEffect:null},{name:"자법",power:"4",coin:"+6",coinEffect:null},{name:"흩날리는 홍매화",power:"5",coin:"+6",coinEffect:null}],defense:{name:"흘려내기",power:"10",coin:"+4",coinEffect:"[사용시] 자신의 호흡 4 당 최종 위력 +1 (최대 5)"}},
  "파우스트|멀티크랙 사무소 대표": {skills:[{name:"40Y-3 가동",power:"3",coin:"+4",coinEffect:null},{name:"충전 역류",power:"4",coin:"+4",coinEffect:null},{name:"40Y-3 충전",power:"4",coin:"+3",coinEffect:null}],defense:{name:"충전",power:"12",coin:"+6",coinEffect:"[사용시] 자신의 충전 횟수 4 증가 (턴 당 2회)"}},
  "파우스트|LCE E.G.O::홍염살": {skills:[{name:"착화",power:"3",coin:"+4",coinEffect:null},{name:"E.G.O 홍염살 전개",power:"4",coin:"+4",coinEffect:null},{name:"불에 끌리는 마음으로",power:"5",coin:"+4",coinEffect:null}],defense:{name:"홍염살의 감응도를 올려 공명하겠습니다",power:"4",coin:"+10",coinEffect:"[사용시] 자신의 화상 이 10 이상이면, 코인 위력 +3 [사용시] 자신의 화상 5 감소 (턴 당 1회) [회피 성공시] 자신의 화상 5 감소 (턴 당 1회)"}},
  "파우스트|흑수 - 묘 필두": {skills:[{name:"순보",power:"3",coin:"+4",coinEffect:null},{name:null,power:"4",coin:"+6",coinEffect:null},{name:null,power:"5",coin:"+4",coinEffect:null}],defense:{name:null,power:"5",coin:"+4",coinEffect:null}},
  "파우스트|동부 시 협회 3과": {skills:[{name:"베어내기",power:"4",coin:"+4",coinEffect:null},{name:"거리 확보",power:"4",coin:"+4",coinEffect:null},{name:"궁섬【弓閃】",power:"4",coin:"+3",coinEffect:null}],defense:{name:"궁도【弓刀】전개",power:"14",coin:"+4",coinEffect:"자신에게 화살 - 시 가 없으면, '회피'로 발동됨 [전투 시작시] '섬궁' 사용 예정이면 '회피'로 발동됨 [전투 시작시] 자신에게 저격 자세 가 있으면, 해당 턴 동안 (60 / 목표 조준 수치)만큼 보호막을 얻음 (턴당 1회) [턴 종료시] 자신에게 저격 자세 가 있고, 이번 턴에 공격 스킬을 사용하지 않았으면, 다음 턴에 목표 조준 1 얻음 (턴당 1회) [턴 종료시] 자신에게 저격 자세 가 없고, 화살 - 시 가 1 이상이면, 다음 턴에 저격 자세 , 목표 조준 1 얻음 (턴당 1회)"}},
  "파우스트|검지 수행자:【쪽지】": {skills:[{name:"지령에 따라, 확실하게",power:"3",coin:"+4",coinEffect:null},{name:"지령을 수행하며 수행합니다",power:"4",coin:"+4",coinEffect:null},{name:null,power:"5",coin:"+4",coinEffect:null}],defense:{name:"지령이 하사한 지령으로 만들어진 천",power:"3",coin:"+3",coinEffect:null}},
  "파우스트|거미집 약지 제자": {skills:[{name:"도축 - 갈비뼈",power:"3",coin:"+4",coinEffect:null},{name:"파시아가 굶주렸어",power:"4",coin:"+4",coinEffect:null},{name:"억압당한 육체",power:"4",coin:"+3",coinEffect:null}],defense:{name:"전시회 준비",power:"4",coin:"+10",coinEffect:"합 가능 가드 아이언 메이든 전용 스킬 [합 승리시] 공격자의 출혈 횟수 2 증가 (턴당 최대 2회) [합 승리시] 공격자에게 (공격자의 출혈 위력 × 2)만큼 관통 피해를 입힘 (최대 30) 파괴 불가 코인"}},
  "파우스트|새벽 사무소 해결사": {skills:[{name:"여명의 섬광",power:"3",coin:"+4",coinEffect:null},{name:"나비 베기",power:"4",coin:"+6",coinEffect:null},{name:"사출",power:"5",coin:"+4",coinEffect:null}],defense:{name:"낙인",power:"5",coin:"+4",coinEffect:null}},
  "돈키호테|LCB 수감자": {skills:[{name:"찌르기",power:"4",coin:"+7",coinEffect:"[합 승리시] 다음 턴에 신속 2 얻음"},{name:"모아 찌르기",power:"4",coin:"+12",coinEffect:null},{name:"정의를 위해!",power:"3",coin:"+3",coinEffect:null}],defense:{name:"회피",power:"2",coin:"+10",coinEffect:null}},
  "돈키호테|남부 시 협회 5과 부장": {skills:[{name:"숨고르기",power:"4",coin:"+7",coinEffect:null},{name:"이격",power:"4",coin:"+6",coinEffect:null},{name:"과호흡",power:"4",coin:"+21",coinEffect:"속도가 10 이상이면, 스킬 위력 +5"}],defense:{name:"회피",power:"3",coin:"+10",coinEffect:null}},
  "돈키호테|N사 중간 망치": {skills:[{name:"올곧은 정화",power:"3",coin:"+4",coinEffect:null},{name:"집행!",power:"4",coin:"+12",coinEffect:null},{name:"광적인 심판",power:"5",coin:"+3",coinEffect:null}],defense:{name:"가드",power:"10",coin:"+5",coinEffect:null}},
  "돈키호테|로보토미 E.G.O::초롱": {skills:[{name:"씹어주겠네!",power:"5",coin:"+7",coinEffect:null},{name:"발광 미끼",power:"4",coin:"+3",coinEffect:null},{name:"빙글빙글 냠냠냠!",power:"4",coin:"+3",coinEffect:null}],defense:{name:"들썩이는 이빨",power:"12",coin:"+6",coinEffect:"[사용시] 대상의 파열 이 6 이상이면 최종 위력 +3 [스킬 종료시] 남은 보호막 수치만큼 체력 회복 (턴 당 1회. 최대 회복량: 최대 체력의 10%)"}},
  "돈키호테|검계 살수": {skills:[{name:"발검",power:"3",coin:"+4",coinEffect:null},{name:"검궤",power:"4",coin:"+5",coinEffect:null},{name:"잘가시게!",power:"4",coin:"+3",coinEffect:null}],defense:{name:"회피",power:"3",coin:"+10",coinEffect:null}},
  "돈키호테|W사 3등급 정리 요원": {skills:[{name:"절단",power:"5",coin:"+6",coinEffect:null},{name:"도약",power:"4",coin:"+4",coinEffect:null},{name:"공간 절단",power:"1",coin:"+2",coinEffect:null}],defense:{name:"회피",power:"4",coin:"+10",coinEffect:null}},
  "돈키호테|남부 섕크 협회 5과 부장": {skills:[{name:"르미즈",power:"4",coin:"+3",coinEffect:null},{name:"플레쉬",power:"5",coin:"+5",coinEffect:null},{name:"살뤼!",power:"6",coin:"+6",coinEffect:null}],defense:{name:"데팡시브",power:"4",coin:"+10",coinEffect:"[회피 성공시] 대상의 정신력 3 감소"}},
  "돈키호테|중지 작은 아우": {skills:[{name:"장부 확인",power:"4",coin:"+3",coinEffect:null},{name:"의리 증명",power:"4",coin:"+6",coinEffect:null},{name:"정의로운 앙갚음",power:"4",coin:"+3",coinEffect:null}],defense:{name:"배로 갚기",power:"5",coin:"+4",coinEffect:null}},
  "돈키호테|T사 3등급 징수직 직원": {skills:[{name:"징수 준비를 하지",power:"3",coin:"+4",coinEffect:null},{name:"T사제 가속 절단기",power:"4",coin:"+4",coinEffect:null},{name:"거기 멈추도록!",power:"4",coin:"+3",coinEffect:null}],defense:{name:"시간을 끌어와보도록 하지",power:"15",coin:"+5",coinEffect:"[전투 시작 시] 시간 대여 상태가 아니면, 턴 종료 시 시간 대여 4 얻음 (턴 당 1회) [사용시] 이번 턴 동안 적에게 피격 시, 다음 턴에 대상에게 진동 3 부여 (턴 당 6회)"}},
  "돈키호테|라만차랜드 실장": {skills:[{name:"참는 것은 끝이다",power:"3",coin:"+4",coinEffect:null},{name:"원하는대로 펼쳐라",power:"4",coin:"+6",coinEffect:null},{name:"꿰뚫겠습니다",power:"5",coin:"+4",coinEffect:null}],defense:{name:"웃음소리는 사그라들 것이다",power:"5",coin:"+4",coinEffect:"[합 가능 반격] [전투 시작시] 혈찬 을 최대 50 소모하여, 혈찬 10 당 경혈 1 얻음 - 혈찬 을 소모하지 못했으면, 출혈 10 얻음 [전투 시작시] 공용 누적 소모 혈찬 50 당 체력이 가장 적은 아군 1명에게 일렁임【혈귀】 1 부여 (최대 15, 턴 당 1회) [적중시] 출혈 횟수 2 증가"}},
  "돈키호테|동부 섕크 협회 3과": {skills:[{name:"발경",power:"3",coin:"+4",coinEffect:null},{name:"초염장",power:"4",coin:"+4",coinEffect:null},{name:"한 수 부탁드리겠네",power:"4",coin:"+3",coinEffect:null}],defense:{name:"밥상머리 예절부터 배우시게!",power:"4",coin:"+10",coinEffect:"자신의 속도가 공격자보다 높으면, 속도 차이 2 당 코인 위력 +1 (최대 2)"}},
  "돈키호테|로보토미 E.G.O::사랑과 증오의 이름으로": {skills:[{name:"관리자 나리의 명에 따라 등장!",power:"3",coin:"+4",coinEffect:null},{name:"사랑으로! 욥!",power:"6",coin:"+5",coinEffect:null},{name:null,power:"5",coin:"+4",coinEffect:null}],defense:{name:"단기 영창",power:"2",coin:"+10",coinEffect:"합 가능 가드 [사용시] 자신의 히스테리 당, 기본 위력 +1 (최대 3) [사용시] 자신의 사랑/증오 횟수 4 증가 (턴 당 2회) 파괴 불가 코인"}},
  "돈키호테|흑수 - 미": {skills:[{name:"돌파",power:"3",coin:"+4",coinEffect:null},{name:"파죽지세",power:"4",coin:"+4",coinEffect:null},{name:"파쇄각 [破碎角]",power:"4",coin:"+3",coinEffect:null}],defense:{name:"가로막는 것들을 모조리 박살내주겠네!",power:"5",coin:"+4",coinEffect:null}},
  "돈키호테|검지 대행자 - 개화 E.G.O::대행": {skills:[{name:"머리 으깨기",power:"3",coin:"+4",coinEffect:null},{name:"조,조용히 하시게",power:"4",coin:"+4",coinEffect:null},{name:"빠,빨리 지령을 수행해야만…",power:"6",coin:"+6",coinEffect:null}],defense:{name:"지령이 하사한 지령으로 만들어진 천",power:"3",coin:"+3",coinEffect:null}},
  "료슈|LCB 수감자": {skills:[{name:"칠하기",power:"4",coin:"+7",coinEffect:null},{name:"흩뿌리기",power:"4",coin:"+5",coinEffect:null},{name:"그려내기",power:"5",coin:"+3",coinEffect:null}],defense:{name:"회피",power:"2",coin:"+10",coinEffect:null}},
  "료슈|남부 세븐 협회 6과": {skills:[{name:"슬래시",power:"4",coin:"+8",coinEffect:null},{name:"어퍼 슬래시",power:"4",coin:"+14",coinEffect:null},{name:"스워시",power:"4",coin:"+5",coinEffect:null}],defense:{name:"반격",power:"8",coin:"+4",coinEffect:"[적중시] 참격 취약 1 부여"}},
  "료슈|LCCB 대리": {skills:[{name:"밀치기",power:"5",coin:"+5",coinEffect:null},{name:"타.무",power:"4",coin:"+5",coinEffect:null},{name:"대.박",power:"4",coin:"+3",coinEffect:null}],defense:{name:"가드",power:"8",coin:"+8",coinEffect:null}},
  "료슈|남부 리우 협회 4과": {skills:[{name:"전면전",power:"3",coin:"+4",coinEffect:null},{name:"염수격",power:"4",coin:"+5",coinEffect:null},{name:"염절",power:"4",coin:"+2",coinEffect:null}],defense:{name:"가드",power:"8",coin:"+8",coinEffect:null}},
  "료슈|20구 유로지비": {skills:[{name:"나사빠진 놈들",power:"3",coin:"+4",coinEffect:null},{name:"압착 태엽 스패너",power:"4",coin:"+3",coinEffect:null},{name:"두들기면 고쳐진다",power:"4",coin:"+3",coinEffect:null}],defense:{name:"가드",power:"7",coin:"+6",coinEffect:"[사용시] 자신의 진동 횟수의 2배만큼 보호막 체력을 얻음 (최대 10)"}},
  "료슈|흑운회 와카슈": {skills:[{name:"발경",power:"5",coin:"+6",coinEffect:null},{name:"뒷처리",power:"5",coin:"+5",coinEffect:null},{name:"구름 휘젓기",power:"8",coin:"+4",coinEffect:null}],defense:{name:"가드",power:"10",coin:"+6",coinEffect:null}},
  "료슈|료.고.파. 주방장": {skills:[{name:"요.준",power:"4",coin:"+3",coinEffect:null},{name:"재.사",power:"3",coin:"+5",coinEffect:null},{name:"무엇이든 요리할 수 있지",power:"3",coin:"+3",coinEffect:null}],defense:{name:"신.재 발견",power:"4",coin:"+10",coinEffect:"[회피 성공시] 다음 턴에 신속 1 얻음"}},
  "료슈|W사 3등급 정리 요원": {skills:[{name:"에.순",power:"3",coin:"+2",coinEffect:null},{name:"도약",power:"2",coin:"+5",coinEffect:null},{name:"차.마.공.절",power:"3",coin:"+2",coinEffect:null}],defense:{name:"충전 회피",power:"4",coin:"+10",coinEffect:"충전 횟수 5당 기본 위력 +1 (최대 3)"}},
  "료슈|에드가 가문 치프 버틀러": {skills:[{name:"응접도 1식 사냥",power:"3",coin:"+4",coinEffect:null},{name:"응접도 제 7식 포착",power:"4",coin:"+6",coinEffect:null},{name:"응접도 제 2식 모.분",power:"4",coin:"+7",coinEffect:null}],defense:{name:"한심",power:"4",coin:"+10",coinEffect:"[회피 성공시] 정신력 3 회복 (턴 당 5회) [회피 성공시] 호흡 횟수 1 증가 (턴 당 5회)"}},
  "료슈|로보토미 E.G.O::적안 · 참회": {skills:[{name:"둘 다 닥쳐라",power:"4",coin:"+4",coinEffect:null},{name:"거.대 / 해.바",power:"4",coin:"+4",coinEffect:null},{name:"대가리 터트리기",power:"5",coin:"+4",coinEffect:null}],defense:{name:"먹고 잘 시간이다",power:"5",coin:"+4",coinEffect:null}},
  "료슈|흑수 - 묘": {skills:[{name:"순보",power:"3",coin:"+4",coinEffect:null},{name:"새겨진대로",power:"4",coin:"+6",coinEffect:null},{name:"저주가 새겨진 검을 쑤셔주지",power:"5",coin:"+4",coinEffect:null}],defense:{name:"각력. 해방. 훗",power:"5",coin:"+8",coinEffect:"[합 가능 반격] [사용시] 각력【묘】 3 얻음 [사용시] 자신의 속도가 대상보다 높을수록, 기본 위력 +1 (속도 차이 2 당 기본 위력 +1. 최대 2) [적중시] 파열 횟수 1 증가"}},
  "료슈|N사 E.G.O::경멸, 경외": {skills:[{name:"경멸스러운 것",power:"3",coin:"+4",coinEffect:null},{name:"경외하라",power:"4",coin:"+6",coinEffect:null},{name:"경외, 경멸",power:"5",coin:"+4",coinEffect:null}],defense:{name:"움켜쥔다",power:"10",coin:"+5",coinEffect:"[전투 시작시] 자신에게 시선의 경멸 이 없고 모든 적에게 부여된 시선 의 합이 7 이상 또는 경멸 의 합이 1 이상이면, 시선의 경멸 획득 (턴 당 1회) [사용시] 자신에게 시선의 경멸 이 있으면, 최종 위력 +10 [사용시] 이 스킬 사용 중 피격시, 공격자의 출혈 횟수 1 증가 (턴 당 3회 발동)"}},
  "료슈|홍원 방랑무사": {skills:[{name:"어이, 물러서라",power:"6",coin:"+7",coinEffect:null},{name:"명기누골 [銘肌縷骨]",power:"4",coin:"+4",coinEffect:null},{name:"가척아원 [加斥我援]",power:"4",coin:"+3",coinEffect:null}],defense:{name:"호위",power:"3",coin:"+10",coinEffect:"합 가능 가드 [전투 시작시] 호위태세 2 얻음 [사용시] 자신이 이번 전투에서 잃은 체력 누적 10%당, 이 스킬의 방어 레벨 +1 (최대 6. 발동 시점 최대 체력 기준) [합 승리시] 대상의 파열 만큼 호흡 얻음 (최대 5, 턴 당 1회) 파괴 불가 코인"}},
  "료슈|로보토미 E.G.O::잔향 · 외로움": {skills:[{name:null,power:"4",coin:"+4",coinEffect:null},{name:"공허에 피어나는 향기",power:"4",coin:"+4",coinEffect:null},{name:"만개",power:"5",coin:"+4",coinEffect:null}],defense:{name:null,power:"4",coin:"+10",coinEffect:"[턴 종료시] 꽃잎 10 얻음 (턴당 1회) [턴 종료시] 다음 턴에 취약 2, 공격 위력 증가 2 얻음 (턴당 1회)"}},
  "료슈|거미집의 검": {skills:[{name:"삼연 [三連]",power:"3",coin:"+3",coinEffect:null},{name:null,power:"4",coin:"+4",coinEffect:null},{name:"공간참 [空間斬]",power:"10",coin:"+12",coinEffect:null}],defense:{name:"잔상보 [殘像步]",power:"4",coin:"+10",coinEffect:"[전투 시작시] 출전 인원 중 편성 순서가 가장 느린 아군 거미집 소속 인격 1명 지정 (턴당 2회) - 자신의 절연 [絶緣] 이 1 이상이면, 1명 추가 지정 - 대상이 이번 턴에 장착한 모든 스킬이 종료되거나 흐트러졌거나, 사용할 스킬이 없으면, 대상을 '천살 [天殺]'로 일방공격 (인격당 1회) - 거미집 소지 제자 싱클레어는 가장 낮은 지정 우선순위를 가짐 [전투 시작시] 자신의 호흡 횟수 3 증가 (턴당 1회) [회피 성공시] 호흡 1 얻음 (턴당 3회) “그건 내 잔상이다만”"}},
  "뫼르소|LCB 수감자": {skills:[{name:"원, 투",power:"3",coin:"+4",coinEffect:null},{name:"주먹꽂기",power:"6",coin:"+9",coinEffect:null},{name:"연격",power:"4",coin:"+2",coinEffect:null}],defense:{name:"가드",power:"10",coin:"+3",coinEffect:null}},
  "뫼르소|남부 리우 협회 6과": {skills:[{name:"돌파",power:"3",coin:"+4",coinEffect:null},{name:"진각",power:"7",coin:"+2",coinEffect:null},{name:"연무 붕권",power:"5",coin:"+3",coinEffect:null}],defense:{name:"가드",power:"8",coin:"+8",coinEffect:null}},
  "뫼르소|장미스패너 공방 해결사": {skills:[{name:"떠맡은 업무 처리",power:"4",coin:"+6",coinEffect:null},{name:"강제 휴식",power:"5",coin:"+4",coinEffect:null},{name:"마무리 가속",power:"4",coin:"+2",coinEffect:null}],defense:{name:"가드",power:"8",coin:"+8",coinEffect:null}},
  "뫼르소|중지 작은 아우": {skills:[{name:"기억한다",power:"3",coin:"+4",coinEffect:null},{name:"의리 사슬",power:"4",coin:"+5",coinEffect:null},{name:"새긴다",power:"4",coin:"+3",coinEffect:null}],defense:{name:"배로 갚기",power:"4",coin:"+4",coinEffect:null}},
  "뫼르소|데드레빗츠 보스": {skills:[{name:"배트치기",power:"5",coin:"+6",coinEffect:null},{name:"내려박기",power:"4",coin:"+5",coinEffect:null},{name:"쏟아내기",power:"4",coin:"+2",coinEffect:null}],defense:{name:"반격",power:"7",coin:"+6",coinEffect:"[적중시] 파열 1 부여"}},
  "뫼르소|W사 2등급 정리 요원": {skills:[{name:"절단",power:"5",coin:"+6",coinEffect:null},{name:"에너지 순환",power:"5",coin:"+2",coinEffect:null},{name:"에너지 교류",power:"5",coin:"+2",coinEffect:null}],defense:{name:"가드",power:"12",coin:"+5",coinEffect:"[전투 시작시] 자신의 충전 횟수 2 증가"}},
  "뫼르소|N사 큰 망치": {skills:[{name:"꿰뚫기",power:"5",coin:"+1",coinEffect:null},{name:"죄를 씻어내노라",power:"6",coin:"+3",coinEffect:null},{name:"이단 말살",power:"8",coin:"+3",coinEffect:null}],defense:{name:"어리석도다…!",power:"15",coin:"-5",coinEffect:"[전투 시작시] 보호 1을 얻음 체력이 50% 미만이면 최종 위력 +2"}},
  "뫼르소|R사 제 4무리 코뿔소팀": {skills:[{name:"육중한 충돌",power:"5",coin:"+6",coinEffect:null},{name:"부수기",power:"5",coin:"+3",coinEffect:null},{name:"코뿔소 돌진",power:"6",coin:"+3",coinEffect:null}],defense:{name:"생체 전류 감응",power:"15",coin:"+5",coinEffect:"[사용시] 보호막이 있는 동안 피격 시 충전 횟수 2 증가 (턴 당 최대 10)"}},
  "뫼르소|검계 우두머리": {skills:[{name:"발검",power:"3",coin:"+4",coinEffect:null},{name:"자법",power:"3",coin:"+5",coinEffect:null},{name:"육참",power:"20",coin:"-8",coinEffect:"[사용시] 다음 턴에 이 슬롯이 도발치 3 얻음 [사용시] 이 스킬 종료 시까지 피해로 인해 흐트러짐 상태가 되지 않음 [합 승리시] 호흡 5 얻음 [합 패배] 피격 후 골단 스킬 사용 [크리티컬 발동시] 자신의 호흡 1 당 크리티컬 피해량 +3% (최대 75%) 크리티컬 피해량 +30% 잃은 체력 1% 당 피해량 0.5% 증가 (최대 25%)"}],defense:{name:"살주",power:"8",coin:"+10",coinEffect:"[사용시] 다음 턴에 참격 위력 증가 1 얻음 잃은 체력 1% 당 피해량 0.5% 증가 (최대 25%) [적중시] 호흡 2 얻음"}},
  "뫼르소|남부 디에치 협회 4과 부장": {skills:[{name:"학업 정진",power:"3",coin:"+4",coinEffect:null},{name:"배움의 시간",power:"4",coin:"+6",coinEffect:null},{name:"지식 전소",power:"5",coin:"+4",coinEffect:null}],defense:{name:"탐구 몰입",power:"15",coin:"+5",coinEffect:"[사용시] 자신의 모든 스킬 슬롯에서 등급이 가장 높은 스킬 1개를 버림 [사용시] 다음 턴에 이 스킬 슬롯이 도발치 6을 얻음"}},
  "뫼르소|서부 섕크 협회 3과": {skills:[{name:"알레",power:"3",coin:"+4",coinEffect:null},{name:"팡트",power:"4",coin:"+4",coinEffect:null},{name:"살뤼",power:"5",coin:"+4",coinEffect:null}],defense:{name:"데팡시브",power:"4",coin:"+10",coinEffect:"[사용시] 자신의 속도가 공격자보다 3 이상 높으면, 코인 위력 +2"}},
  "뫼르소|동부 엄지 카포 IIII": {skills:[{name:"이연참-폭 [爆]",power:"4",coin:"+4",coinEffect:null},{name:"삼연격-폭 [爆]",power:"4",coin:"+4",coinEffect:null},{name:"쾌도난마 [快刀亂麻]",power:"5",coin:"+4",coinEffect:null}],defense:{name:null,power:"5",coin:"+4",coinEffect:null}},
  "뫼르소|라만차랜드 왕자": {skills:[{name:"행진 지휘",power:"2",coin:"+3",coinEffect:null},{name:"재건의 의무",power:"4",coin:"+6",coinEffect:null},{name:null,power:"4",coin:"+3",coinEffect:null}],defense:{name:"피 굳히기",power:"5",coin:"+4",coinEffect:null}},
  "뫼르소|로보토미 E.G.O::호넷【변조】": {skills:[{name:"위협 사격",power:"4",coin:"+4",coinEffect:null},{name:"E.G.O 변조 - 산탄",power:"4",coin:"+4",coinEffect:null},{name:"임상 시험 - 분진 작열",power:"4",coin:"+3",coinEffect:null}],defense:{name:"포자 보충",power:"4",coin:"+10",coinEffect:"[전투 시작시] 재장전[포자보충] (턴당 1회) [회피 사용시] 공격자의 화상 과 출혈 의 합 6당 코인 위력 +1 (최대 3) [회피 성공시] 자신의 체력 10 회복 (턴당 1회) - 충성 페로몬 보유 중이면, 수치당 5씩 회복량 추가"}},
  "뫼르소|약지 야수파 스튜던트": {skills:[{name:"거친 묘사",power:"3",coin:"+4",coinEffect:null},{name:"본능적인 휘갈김",power:"4",coin:"+4",coinEffect:null},{name:"야수파 - 출품작 전개",power:"5",coin:"+4",coinEffect:null}],defense:{name:"채색 준비",power:"4",coin:"+4",coinEffect:null}},
  "홍루|LCB 수감자": {skills:[{name:"내려베기",power:"4",coin:"+7",coinEffect:null},{name:"이연격",power:"4",coin:"+4",coinEffect:null},{name:"선풍",power:"6",coin:"+4",coinEffect:null}],defense:{name:"회피",power:"2",coin:"+10",coinEffect:null}},
  "홍루|흑운회 와카슈": {skills:[{name:"베어내기",power:"4",coin:"+7",coinEffect:null},{name:"구름 절개",power:"5",coin:"+4",coinEffect:null},{name:"구름 파열",power:"7",coin:"+2",coinEffect:null}],defense:{name:"가드",power:"9",coin:"+3",coinEffect:null}},
  "홍루|남부 리우 협회 5과": {skills:[{name:"몸풀기",power:"3",coin:"+4",coinEffect:null},{name:"흐르는 불꽃",power:"6",coin:"+2",coinEffect:null},{name:"홍염권",power:"5",coin:"+6",coinEffect:null}],defense:{name:"가드",power:"8",coin:"+8",coinEffect:null}},
  "홍루|W사 2등급 정리 요원": {skills:[{name:"에너지 순환",power:"3",coin:"+4",coinEffect:null},{name:"정리 지원",power:"6",coin:"+4",coinEffect:null},{name:"충전 역장 전개",power:"5",coin:"+4",coinEffect:null}],defense:{name:"가드",power:"12",coin:"+6",coinEffect:"[사용시] 충전 역장 3을 얻음 (턴당 최대 3회)"}},
  "홍루|갈고리 사무소 해결사": {skills:[{name:"추적",power:"3",coin:"+4",coinEffect:null},{name:"먼저 간다",power:"4",coin:"+3",coinEffect:null},{name:"광란",power:"4",coin:"+2",coinEffect:null}],defense:{name:"재빠름",power:"3",coin:"+10",coinEffect:"대상에게 출혈 이 7 이상 있으면 코인 위력 +2 [회피 성공시] 다음 턴에 신속 1을 얻음 (턴 당 최대 3회)"}},
  "홍루|송곳니 사냥 사무소 해결사": {skills:[{name:"내려치기",power:"3",coin:"+4",coinEffect:null},{name:"뼈 부수기",power:"4",coin:"+5",coinEffect:null},{name:"상쾌한 사냥 마무리",power:"4",coin:"+3",coinEffect:null}],defense:{name:"긴급 지혈",power:"10",coin:"+4",coinEffect:"[사용시] 자신의 출혈 위력 2 감소 (턴 당 3회. 출혈이 감소하여 0 이하가 되면, 출혈 소멸)"}},
  "홍루|콩콩이파 두목": {skills:[{name:"목 긋기",power:"5",coin:"+8",coinEffect:null},{name:"후비기",power:"3",coin:"+5",coinEffect:null},{name:"난도질",power:"5",coin:"+25",coinEffect:null}],defense:{name:"회피",power:"2",coin:"+14",coinEffect:"대상의 출혈 이 5 이상이면, 코인 위력 +2 [회피 성공시] 정신력 3 회복"}},
  "홍루|K사 3등급 적출직 직원": {skills:[{name:"침입자 차단",power:"5",coin:"+6",coinEffect:"대상에게 파열 이 5 이상 있으면 코인 위력 +3 [사용시] 다음 턴에 이 스킬 슬롯의 도발치 5 증가"},{name:"붕괴 칼날",power:"6",coin:"+5",coinEffect:null},{name:"대상 적출",power:"8",coin:"+4",coinEffect:null}],defense:{name:"앰플 주입",power:"15",coin:"+5",coinEffect:"[사용시] 다음 턴에 K사 앰플 1 얻음 [사용시] 다음 턴에 이 스킬 슬롯의 도발치 5 증가"}},
  "홍루|남부 디에치 협회 4과": {skills:[{name:"지식 소모",power:"5",coin:"+5",coinEffect:null},{name:"열어 젖히기",power:"4",coin:"+4",coinEffect:null},{name:"순환하는 지식",power:"5",coin:"+3",coinEffect:null}],defense:{name:"인도하는 걸음",power:"4",coin:"+10",coinEffect:"[사용시] 자신의 모든 스킬 슬롯에서 무작위 스킬 2개를 등급이 낮은 순으로 버림"}},
  "홍루|20구 유로지비": {skills:[{name:"추리시작",power:"3",coin:"+4",coinEffect:null},{name:"변형 지팡이 호신술",power:"4",coin:"+4",coinEffect:null},{name:"범인은 당신이군요!",power:"3",coin:"+3",coinEffect:null}],defense:{name:"잠깐만요?!",power:"10",coin:"+4",coinEffect:"[사용시] 대상의 진동 횟수의 2배만큼 보호막 체력을 얻음 (최대 13)"}},
  "홍루|마침표 사무소 대표": {skills:[{name:"발사",power:"3",coin:"+3",coinEffect:null},{name:"타겟 지정",power:"4",coin:"+4",coinEffect:null},{name:"삶의 마침표",power:"7",coin:"+4",coinEffect:null}],defense:{name:"전투 호흡",power:"4",coin:"+10",coinEffect:"턴 시작 시 탄환 이 0이면, '그림자의 건너편'으로 변경됨 [회피 성공시] 호흡 1 얻음 (턴 당 5회)"}},
  "홍루|R사 제 4무리 순록팀": {skills:[{name:"에너지 강타",power:"3",coin:"+4",coinEffect:null},{name:"정신 채찍",power:"2",coin:"+3",coinEffect:null},{name:"집중",power:"8",coin:"+10",coinEffect:null}],defense:{name:"에너지 응집",power:"10",coin:"+6",coinEffect:"[사용시] 자신의 충전 횟수가 10 이상이면, 코인 위력 +4 [사용시] 자신의 충전 횟수 3 증가 (턴 당 2회)"}},
  "홍루|홍원 군주": {skills:[{name:"길을 열고 싶군",power:"4",coin:"+4",coinEffect:null},{name:null,power:"3",coin:"+3",coinEffect:null},{name:"흑수들이여 답하라",power:"10",coin:"+12",coinEffect:null}],defense:{name:"흑수이조[黑獸利爪]",power:"6",coin:"+7",coinEffect:"[합 가능 반격] [전투 시작시] 아군 흑수 인격 (최대 공명 수)명에게 참격 위력 증가 1 부여 (턴 당 1회) [전투 시작시] 대기 인원이 있으면 현재 체력 비율이 가장 낮은 흑수 아군 1명을 지정. - 이 스킬 사용 시 지정한 대상에게 뜻에 따라, 베겠습니다. 부여, 턴 종료시 전장 퇴각 을 명령하고, 퇴각 시 최대 체력의 10%를 회복시킴 (턴 당 1회) - 이 효과로 퇴각한 흑수 인격은, 복귀할 인격 중 흑수가 아닌 인격보다 복귀 순서가 빠르게 배치됨 [전투 시작시] 대기 인원이 없으면, 현재 체력 비율이 가장 낮은 아군 흑수 1명에게 공격 위력 증가 2 부여 (턴 당 1회) 파괴 불가 코인"}},
  "홍루|거미집 약지 아비": {skills:[{name:"해체",power:"3",coin:"+4",coinEffect:null},{name:"재료획득 - 피로 목욕하는 오브제",power:"4",coin:"+4",coinEffect:null},{name:null,power:"4",coin:"+3",coinEffect:null}],defense:{name:"전시회 주최",power:"4",coin:"+10",coinEffect:"[전투 시작시] 원호 방어 1 얻음 (턴당 1회) [회피 성공시] 공격자에게 다음 턴에 속박 1 부여 (턴당 1회) [회피 성공시] 다음 턴에 신속 1 얻음 (턴당 1회)"}},
  "홍루|S사 추노꾼": {skills:[{name:"오랏줄 죄기",power:"2",coin:"+3",coinEffect:null},{name:"찢어베기",power:"4",coin:"+6",coinEffect:null},{name:"추쇄집행",power:"4",coin:"+3",coinEffect:null}],defense:{name:"오랏줄 걸기",power:"5",coin:"+8",coinEffect:"[합 가능 반격] [사용시] 자신의 호흡 과 대상의 출혈 의 합이 6 이상이면, 합 위력 +2 [사용시] 호흡 5 얻음 [합 승리시] 호흡 횟수 3 증가 파괴 불가 코인 [적중시] 포박 [홍루] 부여 [파괴되지 않고 적중시] 출혈 1 부여"}},
  "홍루|동부 섕크 협회 3과": {skills:[{name:"발경",power:"6",coin:"+7",coinEffect:null},{name:"초염장",power:"6",coin:"+5",coinEffect:null},{name:"마지막 수까지 받아주시겠어요?",power:"5",coin:"+4",coinEffect:null}],defense:{name:"구름처렴 가벼이",power:"4",coin:"+10",coinEffect:"자신의 속도가 공격자보다 2 이상 높으면, 코인 위력 +1 [전투 시작시] 자신의 호흡 횟수 3 증가 (턴당 1회)"}},
  "히스클리프|LCB 수감자": {skills:[{name:"배트 치기",power:"4",coin:"+7",coinEffect:null},{name:"내려박기",power:"4",coin:"+4",coinEffect:null},{name:"분풀기",power:"4",coin:"+8",coinEffect:null}],defense:{name:"반격",power:"7",coin:"+4",coinEffect:null}},
  "히스클리프|남부 시 협회 5과": {skills:[{name:"극검",power:"4",coin:"+6",coinEffect:"자신의 체력이 50% 미만일 때 스킬 위력 +2 [사용시] 호흡 횟수 3 얻음"},{name:"비검",power:"5",coin:"+10",coinEffect:"자신의 체력이 50% 미만일 때 스킬 위력 +2 [사용시] 호흡 3 얻음"},{name:"섬격",power:"5",coin:"+6",coinEffect:null}],defense:{name:"반격",power:"8",coin:"+5",coinEffect:"[사용시] 자신의 체력 5 감소 자신의 호흡 횟수가 3 이상이면, 피해량 +50%"}},
  "히스클리프|N사 작은 망치": {skills:[{name:"미숙한 못질",power:"3",coin:"+4",coinEffect:null},{name:"정…화!",power:"6",coin:"+8",coinEffect:null},{name:"미약한 단죄",power:"4",coin:"+4",coinEffect:null}],defense:{name:"가드",power:"8",coin:"+8",coinEffect:null}},
  "히스클리프|남부 세븐 협회 4과": {skills:[{name:"직감",power:"3",coin:"+4",coinEffect:null},{name:"뒷수습",power:"6",coin:"+10",coinEffect:null},{name:"현장 자료 분석",power:"4",coin:"+2",coinEffect:null}],defense:{name:"가드",power:"8",coin:"+8",coinEffect:null}},
  "히스클리프|멀티크랙 사무소 해결사": {skills:[{name:"40S-2 가동",power:"3",coin:"+4",coinEffect:null},{name:"광전 표식",power:"4",coin:"+3",coinEffect:null},{name:"광전 작살",power:"5",coin:"+2",coinEffect:null}],defense:{name:"충전",power:"12",coin:"+6",coinEffect:"[사용시] 자신의 충전 횟수 3 증가 (턴 당 2회)"}},
  "히스클리프|R사 제 4무리 토끼팀": {skills:[{name:"풀뜯기",power:"4",coin:"+2",coinEffect:null},{name:"집중 사격",power:"4",coin:"+2",coinEffect:null},{name:"신속한 제압",power:"3",coin:"+2",coinEffect:null}],defense:{name:"회피",power:"4",coin:"+10",coinEffect:"[사용시] 자신의 충전 횟수 1 증가"}},
  "히스클리프|로보토미 E.G.O::여우비": {skills:[{name:"우산후리기",power:"6",coin:"-2",coinEffect:null},{name:"진창다지기",power:"10",coin:"-3",coinEffect:null},{name:"퍼져라!",power:"18",coin:"-7",coinEffect:null}],defense:{name:"경고",power:"10",coin:"-5",coinEffect:null}},
  "히스클리프|피쿼드호 작살잡이": {skills:[{name:"사냥감 추적",power:"3",coin:"+4",coinEffect:null},{name:"작살박이",power:"4",coin:"+4",coinEffect:null},{name:"매듭 끊기",power:"4",coin:"+3",coinEffect:null}],defense:{name:"되갚기",power:"5",coin:"+4",coinEffect:"[사용시] 다음 턴에 이 슬롯이 도발치 5를 얻음 [전투 시작시] 자신의 호흡 만큼 방어 레벨 증가 를 얻음 (최대 10)"}},
  "히스클리프|남부 외우피 협회 3과": {skills:[{name:"이행 권고",power:"3",coin:"+4",coinEffect:null},{name:"마지막 경고",power:"4",coin:"+6",coinEffect:null},{name:"집행 선고",power:"5",coin:"+4",coinEffect:null}],defense:{name:"방해는 금지다",power:"10",coin:"+4",coinEffect:"보호막이 있는 동안 피격 시 공격자의 진동 횟수 1 증가 (이 스킬의 효과는 중복되어 적용되지 않음)"}},
  "히스클리프|와일드헌트": {skills:[{name:"참수",power:"3",coin:"+4",coinEffect:null},{name:"추도 행진",power:"5",coin:"+3",coinEffect:null},{name:"레퀴엠",power:"6",coin:"+6",coinEffect:null}],defense:{name:"듀라한이여...!",power:"5",coin:"+4",coinEffect:null}},
  "히스클리프|마침표 사무소 해결사": {skills:[{name:"응사",power:"5",coin:"+3",coinEffect:null},{name:"헤드샷",power:"10",coin:"+12",coinEffect:null},{name:"한 점만 노린다",power:"12",coin:"+14",coinEffect:null}],defense:{name:"전투 호흡",power:"4",coin:"+10",coinEffect:"턴 시작 시 탄환 이 0이면, '엄폐'로 변경됨 [사용시] 마침표 사무소 대표 홍루 인격이 전투에 등장해 있으면, 대상에게 근접 지원 요청 (턴 당 1회) [회피 성공시] 호흡 3 얻음 (턴 당 최대 3회) [턴 종료시] 다음 턴에 집중[저격] 1 얻음 (턴 당 1회)"}},
  "히스클리프|흑운회 와카슈": {skills:[{name:"구름베기",power:"3",coin:"+4",coinEffect:null},{name:"폭풍구름",power:"4",coin:"+6",coinEffect:null},{name:"천둥베기",power:"5",coin:"+4",coinEffect:null}],defense:{name:"뒷골목의 규칙",power:"4",coin:"+5",coinEffect:"[합 가능 반격] 흑운회 부조장 이스마엘 인격이 전투에 등장해 있으면, 아래 효과가 적용됨 - 이 스킬의 모든 코인이 파괴 불가 코인 으로 변경됨 - 합 패배시 이 스킬의 최종 위력 +4 대상이 보유한 부정적인 효과 1개당 피해량 +10% (최대 100%) [사용시] 자신이 구름 장벽 을 보유하고 있으면, 이 스킬 코인의 재사용 효과를 조건 없이 모두 발동 [적중시] 출혈 2 부여 [적중시] 자신에게 흑운도 가 있으면 이 코인 1회 재사용 (스킬당 1회) [적중시] 자신에게 임전 이 있으면 이 코인 1회 재사용 (스킬당 1회)"}},
  "히스클리프|W사 4등급 정리 요원 - CCA": {skills:[{name:"혼잡승객 정리",power:"3",coin:"+4",coinEffect:null},{name:"부스트 엘보 커터",power:"5",coin:"+6",coinEffect:null},{name:"공간 절단 - CCA 오버드라이브",power:"3",coin:"+2",coinEffect:null}],defense:{name:"CCA 과충전",power:"3",coin:"+10",coinEffect:"합 가능 가드 [전투 시작시] 자신의 충전 횟수가 15 미만이면, 아래 효과 발동 - 다음 턴에 과충전 얻음 (턴당 1회) - 턴 종료 시 자신의 가장 높은 흐트러짐 구간 1개 제거 (전투 당 1회) - 턴 종료 시 '공간 절단 - CCA 오버드라이브' 1개를 다음 턴에 사용할 스킬 목록에 추가함 (턴당 1회) 파괴 불가 코인"}},
  "히스클리프|흑수 - 유 필두": {skills:[{name:"쪼아먹는다",power:"2",coin:"+3",coinEffect:null},{name:"발톱으로 찢어주지",power:"4",coin:"+4",coinEffect:null},{name:"혈염난무[血炎亂舞]",power:"4",coin:"+3",coinEffect:null}],defense:{name:"먹잇감이군",power:"5",coin:"+4",coinEffect:null}},
  "히스클리프|중지 작은 형님": {skills:[{name:"발길질",power:"2",coin:"+3",coinEffect:null},{name:"뒤통수 조심!",power:"4",coin:"+4",coinEffect:null},{name:"내 헤어쿠포오오오온!!!!",power:"10",coin:"+12",coinEffect:null}],defense:{name:"되갚기",power:"5",coin:"+4",coinEffect:null}},
  "히스클리프|거미집 엄지 제자": {skills:[{name:"팔레르모 스파다",power:"3",coin:"+4",coinEffect:null},{name:"콜피 소타니",power:"4",coin:"+4",coinEffect:null},{name:"카치아토레",power:"5",coin:"+4",coinEffect:null}],defense:{name:"검끝 재기",power:"5",coin:"+4",coinEffect:null}},
  "이스마엘|LCB 수감자": {skills:[{name:"강타",power:"4",coin:"+7",coinEffect:null},{name:"슬라이딩",power:"6",coin:"+9",coinEffect:null},{name:"방어",power:"8",coin:"+12",coinEffect:null}],defense:{name:"가드",power:"7",coin:"+3",coinEffect:null}},
  "이스마엘|남부 시 협회 5과": {skills:[{name:"비검",power:"3",coin:"+4",coinEffect:null},{name:"섬격",power:"5",coin:"+4",coinEffect:null},{name:"숨고르기",power:"6",coin:"+6",coinEffect:null}],defense:{name:"반격",power:"8",coin:"+8",coinEffect:"자신의 호흡 횟수가 5 이상이면, 크리티컬 피해량 +50% [적중시] 호흡 횟수 1 증가"}},
  "이스마엘|LCCB 대리": {skills:[{name:"밀쳐내기",power:"4",coin:"+6",coinEffect:null},{name:"진동탄",power:"4",coin:"+3",coinEffect:null},{name:"제압",power:"4",coin:"+2",coinEffect:null}],defense:{name:"가드",power:"10",coin:"+8",coinEffect:"[사용시] 다음 턴에 이 스킬 슬롯의 도발치 4 증가 탄환 이 0일 때, 도발치 추가 2 증가"}},
  "이스마엘|로보토미 E.G.O::출렁임": {skills:[{name:"무거워…!",power:"4",coin:"+6",coinEffect:null},{name:"울렁거려…!",power:"5",coin:"+4",coinEffect:null},{name:"부식성 점액 타격",power:"6",coin:"+16",coinEffect:null}],defense:{name:"가드",power:"12",coin:"+8",coinEffect:"[사용시] 다음 턴에 이 스킬 슬롯의 도발치 4 증가"}},
  "이스마엘|에드가 가문 버틀러": {skills:[{name:"빗겨쳐내기",power:"3",coin:"+4",coinEffect:null},{name:"정리정돈",power:"4",coin:"+5",coinEffect:null},{name:"동체 속박술",power:"4",coin:"+3",coinEffect:null}],defense:{name:"회피",power:"3",coin:"+10",coinEffect:"[회피 성공시] 정신력 5 회복 (턴 당 1회)"}},
  "이스마엘|R사 제 4무리 순록팀": {skills:[{name:"정신 가격",power:"4",coin:"+5",coinEffect:null},{name:"지져내기",power:"6",coin:"+12",coinEffect:null},{name:"정신 채찍",power:"2",coin:"+6",coinEffect:null}],defense:{name:"회피",power:"4",coin:"+10",coinEffect:"[회피 성공시] 자신의 충전 횟수 1 증가"}},
  "이스마엘|남부 리우 협회 4과": {skills:[{name:"단각",power:"4",coin:"+3",coinEffect:null},{name:"정면 돌파",power:"4",coin:"+4",coinEffect:null},{name:"이문정주",power:"3",coin:"+3",coinEffect:null}],defense:{name:"반격",power:"9",coin:"+7",coinEffect:"[적중시] 화상 횟수 1 증가"}},
  "이스마엘|어금니 보트 센터 해결사": {skills:[{name:"파쇄 준비",power:"4",coin:"+3",coinEffect:null},{name:"작렬",power:"5",coin:"+5",coinEffect:null},{name:"과격한 판단",power:"3",coin:"+5",coinEffect:null}],defense:{name:"신속 보법",power:"10",coin:"+4",coinEffect:"[사용시] 파열 보호 2를 얻음 (턴당 최대 6)"}},
  "이스마엘|피쿼드호 선장": {skills:[{name:"내 주위에 서라!",power:"4",coin:"+4",coinEffect:null},{name:"끝까지 추적한다!",power:"4",coin:"+4",coinEffect:null},{name:"집착의 작살",power:"4",coin:"+3",coinEffect:null}],defense:{name:"공포를 날려주지",power:"10",coin:"+4",coinEffect:"[사용시] 조작 패널에서 자신의 양 옆에 위치한 아군의 정신력 5 회복 (최대 2회)"}},
  "이스마엘|서부 츠바이 협회 3과": {skills:[{name:"츠바이 기사단 대검술",power:"3",coin:"+4",coinEffect:null},{name:null,power:"4",coin:"+4",coinEffect:null},{name:"수호",power:"5",coin:"+4",coinEffect:null}],defense:{name:"당신의 방패",power:"3",coin:"+12",coinEffect:"합 가능 가드 [전투 시작시] 방어 태세 2 얻음 (턴 당 1회) [사용시] 자신의 진동 횟수 10 증가 (턴 당 1회) [합 승리시] 진동 폭발 파괴 불가 코인"}},
  "이스마엘|흑운회 부조장": {skills:[{name:"뒷처리",power:"3",coin:"+4",coinEffect:null},{name:"날카로운 칼날",power:"4",coin:"+6",coinEffect:null},{name:"먹칠",power:"5",coin:"+4",coinEffect:null}],defense:{name:"흩어지는 검격",power:"4",coin:"+10",coinEffect:"[전투 시작시] 보호 1 얻음 (턴 당 1회) [전투 시작시] 자신을 포함하여 속도가 가장 빠른 아군 흑운회 소속 인격 (2 + 최대 공명 수)명에게 수비 위력 증가 2 부여 (턴 당 1회)"}},
  "이스마엘|가주 후보": {skills:[{name:"적격",power:"3",coin:"+4",coinEffect:null},{name:"적봉",power:"2",coin:"+3",coinEffect:null},{name:"적춘",power:"8",coin:"+14",coinEffect:null}],defense:{name:"수회",power:"4",coin:"+10",coinEffect:"[전투 시작시] 자신의 시[始] 가 3 이상이면, 턴 종료시 전장 퇴각 함 - 퇴각 시 대기 순서 1번이 됨 (대기 인원의 대기 해제보다 우선적으로 복귀함) [사용시] 자신의 호흡 횟수 1 증가 (턴 당 최대 2회) [회피 성공시] 호흡 2 얻음(턴 당 최대 2회)"}},
  "이스마엘|정사무소 대표": {skills:[{name:"츠루기리 [鶴斬り]",power:"4",coin:"+4",coinEffect:null},{name:"억새 흘리기",power:"4",coin:"+4",coinEffect:null},{name:"사쿠라센 [桜閃]",power:"5",coin:"+4",coinEffect:null}],defense:{name:"화투패 섞기",power:"5",coin:"+4",coinEffect:null}},
  "이스마엘|거미집 중지 제자": {skills:[{name:"욜라 패기",power:"3",coin:"+4",coinEffect:null},{name:"십자난무",power:"4",coin:"+4",coinEffect:null},{name:"바이올렛 브레이크 슬램",power:"4",coin:"+3",coinEffect:null}],defense:{name:"가만 안둬요",power:"4",coin:"+5",coinEffect:null}},
  "이스마엘|LCD 현장추리팀": {skills:[{name:"세법",power:"3",coin:"+4",coinEffect:null},{name:"자법",power:"3",coin:"+4",coinEffect:null},{name:"청린화",power:"5",coin:"+4",coinEffect:null}],defense:{name:"앞길을 밝힐게요",power:"5",coin:"+8",coinEffect:"[합 가능 가드] [전투 시작시] 원호 방어 1 얻음 (턴당 1회) [사용시] 다음 턴에 신속 2 얻음 (턴당 1회) [사용시] 자신의 호흡 횟수 2 증가 (턴당 1회) [합 승리 시] 호흡 3 얻음 [스킬 종료시] 자신에게 신속 이 있다면, 묵 공방 - 예[銳] 2식 발도 / 추력:도깨비불 2 얻음 (턴당 1회) 파괴 불가 코인"}},
  "로쟈|LCB 수감자": {skills:[{name:"내려찍기",power:"4",coin:"+7",coinEffect:null},{name:"연속 베기",power:"4",coin:"+4",coinEffect:null},{name:"처단",power:"4",coin:"+2",coinEffect:null}],defense:{name:"반격",power:"7",coin:"+4",coinEffect:null}},
  "로쟈|LCCB 대리": {skills:[{name:"타격",power:"5",coin:"+6",coinEffect:null},{name:"찌르기",power:"6",coin:"+1",coinEffect:null},{name:"제압",power:"7",coin:"+2",coinEffect:null}],defense:{name:"가드",power:"8",coin:"+8",coinEffect:null}},
  "로쟈|N사 중간 망치": {skills:[{name:"충실한 못질",power:"3",coin:"+4",coinEffect:null},{name:"광적인 정화",power:"6",coin:"+2",coinEffect:null},{name:"철의 단죄",power:"4",coin:"+2",coinEffect:null}],defense:{name:"반격",power:"7",coin:"+6",coinEffect:"[적중시] 못 1 부여"}},
  "로쟈|남부 츠바이 협회 5과": {skills:[{name:"견제",power:"4",coin:"+2",coinEffect:null},{name:"집중 방어",power:"6",coin:"+4",coinEffect:null},{name:"위협 대상 제압",power:"5",coin:"+2",coinEffect:null}],defense:{name:"가드",power:"15",coin:"+5",coinEffect:"[사용시] 다음 턴에 이 스킬 슬롯의 도발치 5 증가"}},
  "로쟈|T사 2등급 징수직 직원": {skills:[{name:"징수 준비",power:"3",coin:"+4",coinEffect:null},{name:"T사식 제압 격투",power:"4",coin:"+5",coinEffect:null},{name:"징수 집행",power:"2",coin:"+3",coinEffect:null}],defense:{name:"시간 대여",power:"15",coin:"+4",coinEffect:"[전투 시작 시] 시간 대여 상태가 아니면, 턴 종료 시 시간 대여 3 얻음 (턴 당 1회) [사용시] 이번 턴 동안 적에게 피격 시, 다음 턴에 대상에게 진동 2 부여 (턴 당 6회)"}},
  "로쟈|흑운회 와카슈": {skills:[{name:"날카로운 칼날",power:"5",coin:"+6",coinEffect:null},{name:"흩어지는 검격",power:"6",coin:"+3",coinEffect:null},{name:"쾌청 베기",power:"7",coin:"+18",coinEffect:null}],defense:{name:"반격",power:"9",coin:"+6",coinEffect:"[사용시] 보호 1 얻음 [사용시] 자신의 호흡 횟수 2 증가"}},
  "로쟈|장미스패너 공방 대표": {skills:[{name:"시동 걸기",power:"4",coin:"+3",coinEffect:null},{name:"진동압착",power:"6",coin:"+3",coinEffect:null},{name:"한탕 해볼까",power:"5",coin:"+4",coinEffect:null}],defense:{name:"예열",power:"10",coin:"+6",coinEffect:"[전투 시작시] 자신의 충전 횟수 2 증가"}},
  "로쟈|남부 디에치 협회 4과": {skills:[{name:"무지를 밝히리",power:"3",coin:"+2",coinEffect:null},{name:"지식의 무게",power:"3",coin:"+3",coinEffect:null},{name:"고통스러운 계몽",power:"4",coin:"+3",coinEffect:null}],defense:{name:"탐구 몰입",power:"15",coin:"+5",coinEffect:"[사용시] 자신의 모든 스킬 슬롯에서 등급이 가장 높은 스킬 1개를 버림 [사용시] 다음 턴에 이 슬롯이 도발치 5를 얻음"}},
  "로쟈|남부 리우 협회 4과 부장": {skills:[{name:"염권격",power:"3",coin:"+4",coinEffect:null},{name:"염수격-연",power:"4",coin:"+4",coinEffect:null},{name:"일점돌파",power:"4",coin:"+3",coinEffect:null}],defense:{name:"반격",power:"9",coin:"+7",coinEffect:"[적중시] 화상 1 부여"}},
  "로쟈|북부 제뱌찌 협회 3과": {skills:[{name:"딜리버리 캐리어 - 붕괴 나이프",power:"3",coin:"+4",coinEffect:null},{name:"딜리버리 캐리어 - 가젯 사출",power:"4",coin:"+4",coinEffect:null},{name:"플루! 힘 좀 써줘!",power:"5",coin:"+4",coinEffect:null}],defense:{name:"배달 보조 및 통제 시퀀스",power:"9",coin:"+7",coinEffect:"[전투 시작시] 자신의 딜리버리 캐리어 - 로쟈 가 15 이상이면, '이건… 잠시 전략적 휴식이야!'로 발동함 (턴 당 1회) [전투 시작시] 이 스킬로 발동 예정인 경우, 자신의 최대 체력의 ( 딜리버리 캐리어 - 로쟈 )%만큼 보호막을 얻음 (최대 25%, 턴 당 1회) [사용시] 딜리버리 캐리어 - 로쟈 2 얻음 (턴 당 1회) - 자신의 딜리버리 캐리어 - 로쟈 가 15 미만이면, 딜리버리 캐리어 - 로쟈 1 추가로 얻음"}},
  "로쟈|라만차랜드 공주": {skills:[{name:null,power:"3",coin:"+4",coinEffect:null},{name:"흩뿌리며 갈려나가라",power:"4",coin:"+4",coinEffect:null},{name:"축제는 끝날거야",power:"4",coin:"+4",coinEffect:null}],defense:{name:"돈키호테류 경혈 15식 양산",power:"5",coin:"+4",coinEffect:null}},
  "로쟈|흑수 - 사": {skills:[{name:"사섬",power:"3",coin:"+4",coinEffect:null},{name:"뱀 송곳니",power:"4",coin:"+4",coinEffect:null},{name:"절명사난",power:"5",coin:"+4",coinEffect:null}],defense:{name:"반축",power:"3",coin:"+10",coinEffect:"[합 가능 가드] [전투 시작시] 다음 턴에 사완 3 얻음 [사용시] 자신의 호흡 이 10 이상이면, 코인 위력 +1 [파괴 불가 코인]"}},
  "로쟈|로보토미 E.G.O::눈물로 벼려낸 검": {skills:[{name:"기사의 보호",power:"4",coin:"+4",coinEffect:null},{name:"정의의 힘으로",power:"4",coin:"+4",coinEffect:null},{name:"아르카나 피어스",power:"5",coin:"+4",coinEffect:null}],defense:{name:"기사의 믿음",power:"3",coin:"+10",coinEffect:"합 가능 가드 [전투 시작시] 지키는 검 2당, 코인 위력 +1 (최대 2) [전투 시작시] 최대 체력의 (정신력 / 3)%만큼 보호막 얻음 (턴 당 1회) [사용시] 깊은 눈물 5 얻음 (턴 당 2회) [턴 종료시] 눈물 벼리기 가 3 미만이면, 정신력 15 감소하고 눈물 벼리기 1 얻음 (턴 당 1회) - 눈물 벼리기 를 보유한 경우 (보유한 수치 × 15)만큼 정신력 추가로 감소 파괴 불가 코인"}},
  "로쟈|R사 제 4무리 순록팀": {skills:[{name:null,power:"3",coin:"+4",coinEffect:null},{name:null,power:"4",coin:"+6",coinEffect:null},{name:null,power:"4",coin:"+3",coinEffect:null}],defense:{name:null,power:"10",coin:"+5",coinEffect:"[사용시] 자신의 충전 횟수가 5 이상이면, 기본 위력 +2 [사용시] 자신의 충전 횟수 3 증가 (턴당 2회)"}},
  "로쟈|약지 야수파 도슨트": {skills:[{name:"강렬한 덧칠",power:"6",coin:"+7",coinEffect:null},{name:"원색 표현",power:"4",coin:"+6",coinEffect:null},{name:"야수파 - 포악한 전개",power:"4",coin:"+3",coinEffect:null}],defense:{name:"소재 다듬기",power:"5",coin:"+4",coinEffect:null}},
  "로쟈|거미집 엄지 아비": {skills:[{name:"콜피 디 탈리오",power:"3",coin:"+4",coinEffect:null},{name:"기꺼이 이 탄환으로 꿰뚫어주지",power:"4",coin:"+4",coinEffect:null},{name:"세치오나투라 디 엘레판테",power:"4",coin:"+3",coinEffect:null}],defense:{name:"꺼져!",power:"3",coin:"+4",coinEffect:null}},
  "싱클레어|LCB 수감자": {skills:[{name:"내려베기",power:"4",coin:"+7",coinEffect:null},{name:"연속 베기",power:"4",coin:"+2",coinEffect:"[합 승리시] 피해량 +30%"},{name:"헤집어 베기",power:"5",coin:"+3",coinEffect:null}],defense:{name:"반격",power:"7",coin:"+4",coinEffect:null}},
  "싱클레어|남부 츠바이 협회 6과": {skills:[{name:"타격",power:"4",coin:"+6",coinEffect:null},{name:"제압",power:"6",coin:"+2",coinEffect:null},{name:"강타",power:"7",coin:"+13",coinEffect:null}],defense:{name:"가드",power:"12",coin:"+6",coinEffect:"[사용시] 다음 턴에 이 스킬 슬롯의 도발치 4 증가"}},
  "싱클레어|마리아치 보스": {skills:[{name:"춤사위",power:"4",coin:"+2",coinEffect:null},{name:"격정의 춤",power:"5",coin:"+1",coinEffect:null},{name:"파냐타 파티",power:"8",coin:"+11",coinEffect:null}],defense:{name:"회피",power:"5",coin:"+10",coinEffect:"[회피 성공시] 호흡 횟수 1 증가"}},
  "싱클레어|로보토미 E.G.O::홍적": {skills:[{name:"상처 부각",power:"5",coin:"+5",coinEffect:null},{name:"늘어나는 부적",power:"4",coin:"+3",coinEffect:null},{name:"파열부",power:"5",coin:"+6",coinEffect:null}],defense:{name:"가드",power:"8",coin:"+8",coinEffect:"[사용시] 부적 1 얻음"}},
  "싱클레어|어금니 보트 센터 해결사": {skills:[{name:"맹습",power:"2",coin:"+1",coinEffect:null},{name:"침착하게…",power:"4",coin:"+12",coinEffect:null},{name:"도박수",power:"4",coin:"+6",coinEffect:null}],defense:{name:"게 딱지 녀석들…!",power:"8",coin:"+8",coinEffect:"[사용시] 파열 보호 1을 얻음 (턴 당 최대 3)"}},
  "싱클레어|서부 츠바이 협회 3과": {skills:[{name:null,power:"3",coin:"+4",coinEffect:null},{name:"전투 준비",power:"4",coin:"+5",coinEffect:null},{name:"울타리",power:"4",coin:"+3",coinEffect:null}],defense:{name:"츠바이 기사단 대검술 - 가드",power:"2",coin:"+9",coinEffect:"합 가능 가드 [전투 시작시] 다음 턴에 이 스킬 슬롯의 도발치 5 증가 [사용시] 자신의 진동 횟수 3 증가 (턴 당 1회) [합 승리시] 진동 폭발 파괴 불가 코인"}},
  "싱클레어|검계 살수": {skills:[{name:"참관",power:"5",coin:"+2",coinEffect:null},{name:"연참",power:"6",coin:"+2",coinEffect:null},{name:"골단",power:"8",coin:"+18",coinEffect:null}],defense:{name:"반격 - 초생",power:"9",coin:"+6",coinEffect:"[사용시] 다음 턴에 피해량 증가 1 얻음 [사용시] 호흡 횟수 3 증가"}},
  "싱클레어|쥐어들 자": {skills:[{name:"내몰린 심판",power:"8",coin:"-2",coinEffect:null},{name:"판단을 멈춘 집행",power:"16",coin:"-4",coinEffect:null},{name:"자멸적 정화",power:"30",coin:"-12",coinEffect:null}],defense:{name:"그만…",power:"17",coin:"-7",coinEffect:"[전투 시작시] 자신의 정신력 5 ~ 10 회복"}},
  "싱클레어|남부 섕크 협회 4과 부장": {skills:[{name:"르미즈",power:"3",coin:"+4",coinEffect:null},{name:"앙가즈망",power:"4",coin:"+4",coinEffect:null},{name:"꽁트르 아따끄",power:"5",coin:"+4",coinEffect:null}],defense:{name:"데팡시브",power:"4",coin:"+10",coinEffect:null}},
  "싱클레어|새벽 사무소 해결사": {skills:[{name:"맹렬한 돌진",power:"3",coin:"+7",coinEffect:null},{name:"노을빛 검",power:"5",coin:"+3",coinEffect:null},{name:"낙인",power:"4",coin:"+7",coinEffect:null}],defense:{name:"후회",power:"15",coin:"+5",coinEffect:"자신이 불안정 E.G.O 상태면, 대상의 화상 2 당 기본 위력 +1 (최대 20)"}},
  "싱클레어|북부 제뱌찌 협회 3과": {skills:[{name:"딜리버리 캐리어 - 붕괴 망치",power:"3",coin:"+4",coinEffect:null},{name:"딜리버리 캐리어 - 돌파 가젯",power:"4",coin:"+4",coinEffect:null},{name:"플루드니차... 부탁해요!",power:"5",coin:"+4",coinEffect:null}],defense:{name:"배달 지원 및 상황 통제 절차",power:"9",coin:"+7",coinEffect:"[전투 시작시] 자신의 딜리버리 캐리어 - 싱클레어 가 15 이상이면, '자, 잠깐 정비 좀 할게요...!'로 발동함 (턴 당 1회) [전투 시작시] 이 스킬로 발동 예정인 경우, 자신의 최대 체력의 ( 딜리버리 캐리어 - 싱클레어 )%만큼 보호막을 얻음 (최대 25%, 턴 당 1회)"}},
  "싱클레어|중지 작은 아우": {skills:[{name:"네 놈이냐!",power:"3",coin:"+4",coinEffect:null},{name:"배로 먹여주마",power:"4",coin:"+4",coinEffect:null},{name:"똑똑히 새겨라",power:"5",coin:"+4",coinEffect:null}],defense:{name:"동부에서 몸 좀 풀어보죠",power:"5",coin:"+4",coinEffect:null}},
  "싱클레어|동부 엄지 솔다토 II": {skills:[{name:null,power:"3",coin:"+4",coinEffect:null},{name:null,power:"4",coin:"+6",coinEffect:null},{name:"추력 집중",power:"5",coin:"+4",coinEffect:null}],defense:{name:"철의 방어",power:"9",coin:"+6",coinEffect:"보호막이 있는 동안 피격 시, 피격 횟수만큼 공격자에게 진동 2 부여(턴 당 4회 발동)"}},
  "싱클레어|흑수 - 유": {skills:[{name:"타오르는 피 냄새에…",power:"2",coin:"+3",coinEffect:null},{name:null,power:"4",coin:"+4",coinEffect:null},{name:"혈염난무 [血炎亂舞]",power:"4",coin:"+3",coinEffect:null}],defense:{name:"계궁즉살 [鷄窮則殺]",power:"5",coin:"+4",coinEffect:null}},
  "싱클레어|거미집 소지 제자": {skills:[{name:"연격[連擊]",power:"3",coin:"+4",coinEffect:null},{name:"무명참[無名斬]",power:"6",coin:"+5",coinEffect:null},{name:"낙성일살[落星一殺]",power:"8",coin:"+14",coinEffect:null}],defense:{name:"수[守]",power:"3",coin:"+10",coinEffect:"합 가능 가드 턴 시작 시 자신의 호흡 위력이 25 이상이면 '회'로 변경됨 [전투 시작시] 호흡 8 얻음 (턴당 1회) [전투 시작시] 자신의 호흡 횟수 2 증가 (턴당 1회) 파괴 불가 코인"}},
  "오티스|LCB 수감자": {skills:[{name:"칼날 빼기",power:"3",coin:"+2",coinEffect:null},{name:"배후 베기",power:"5",coin:"+4",coinEffect:null},{name:"뚫어내기",power:"7",coin:"+14",coinEffect:null}],defense:{name:"회피",power:"2",coin:"+10",coinEffect:null}},
  "오티스|검계 살수": {skills:[{name:"발검",power:"4",coin:"+6",coinEffect:null},{name:"자법",power:"5",coin:"+4",coinEffect:null},{name:"요격세",power:"6",coin:"+4",coinEffect:null}],defense:{name:"회피",power:"3",coin:"+10",coinEffect:"자신의 호흡 이 6 이상이면, 코인 위력 +3"}},
  "오티스|G사 부장": {skills:[{name:"지휘",power:"4",coin:"+6",coinEffect:null},{name:"공격 명령",power:"6",coin:"+10",coinEffect:null},{name:"기합",power:"6",coin:"+16",coinEffect:null}],defense:{name:"가드",power:"9",coin:"+4",coinEffect:null}},
  "오티스|남부 섕크 협회 4과": {skills:[{name:"마르쉬",power:"3",coin:"+4",coinEffect:null},{name:"퍼니시옹",power:"4",coin:"+5",coinEffect:null},{name:"발레스트라 팡트",power:"8",coin:"+14",coinEffect:null}],defense:{name:"르트레트",power:"5",coin:"+10",coinEffect:"자신의 속도가 공격자보다 높을수록 코인 위력 증가 (속도 차이 1 당 코인 위력 +1. 최대 3) [회피 성공시] 호흡 1 얻음 (최대 10)"}},
  "오티스|약지 점묘파 스튜던트": {skills:[{name:"점찍기",power:"3",coin:"+4",coinEffect:null},{name:"혈묘화",power:"5",coin:"+4",coinEffect:null},{name:"작품 점검",power:"4",coin:"+6",coinEffect:null}],defense:{name:"가드",power:"7",coin:"+6",coinEffect:"[사용시] 대상의 출혈 이 10 이상이면, 코인 위력 +7"}},
  "오티스|남부 세븐 협회 6과 부장": {skills:[{name:"예측 분석",power:"6",coin:"+4",coinEffect:null},{name:"현장 지휘",power:"5",coin:"+5",coinEffect:null},{name:"빈틈 간파",power:"6",coin:"+2",coinEffect:null}],defense:{name:"앞장 서겠다",power:"13",coin:"+7",coinEffect:"[사용시] 다음 턴에 신속 1, 수비 위력 증가 1을 얻음"}},
  "오티스|어금니 사무소 해결사": {skills:[{name:"잠깐!",power:"4",coin:"+7",coinEffect:null},{name:"가르기",power:"3",coin:"+5",coinEffect:null},{name:"과감한 판단",power:"4",coin:"+3",coinEffect:null}],defense:{name:"숙취 해소",power:"12",coin:"+5",coinEffect:"[사용시] 자신의 모든 스킬 슬롯에서 등급이 가장 낮은 스킬 1개를 버림"}},
  "오티스|로보토미 E.G.O::마탄": {skills:[{name:"착화",power:"3",coin:"+4",coinEffect:null},{name:"마탄 기폭",power:"4",coin:"+6",coinEffect:null},{name:"마탄 사격",power:"15",coin:"+4",coinEffect:null}],defense:{name:"마탄의 대가",power:"10",coin:"+4",coinEffect:"[사용시] 마탄 1 증가 [사용시] ( 마탄 × 2)만큼 최종 위력이 증가 [스킬 종료시] 마탄 만큼 정신력 감소"}},
  "오티스|워더링하이츠 치프 버틀러": {skills:[{name:"노크",power:"3",coin:"+4",coinEffect:null},{name:"먼지 털이",power:"4",coin:"+4",coinEffect:null},{name:"마님의 뜻대로",power:"4",coin:"+3",coinEffect:null}],defense:{name:"무례한 것…!",power:"4",coin:"+10",coinEffect:"[회피 성공시] 침잠 1 부여 (턴 당 최대 6회)"}},
  "오티스|W사 3등급 정리 요원 팀장": {skills:[{name:"파동",power:"3",coin:"+4",coinEffect:null},{name:"충전 도약",power:"5",coin:"+6",coinEffect:null},{name:"차원 절단",power:"4",coin:"+3",coinEffect:null}],defense:{name:"플라즈마 전개",power:"10",coin:"+6",coinEffect:"[사용시] 자신의 충전 횟수당 기본 위력 +1 (최대 10) [사용시] 자신의 충전 횟수 2 증가 (턴 당 최대 3회)"}},
  "오티스|라만차랜드 이발사": {skills:[{name:"재봉",power:"3",coin:"+4",coinEffect:null},{name:"컷 오프",power:"4",coin:"+4",coinEffect:null},{name:"새 드레스를 맞춰주지!",power:"3",coin:"+3",coinEffect:null}],defense:{name:"예의에 어긋나는군!",power:"7",coin:"+6",coinEffect:"[사용시] 핏빛 가위날 10 이상이면, 기본 위력 +1 - 핏빛 가위날 20 이상이면, 효과를 대신하여 기본 위력 +2 [사용시] 자신의 출혈 5 당, 코인 위력 +1 (최대 3) [적중시] 출혈 횟수 1 부여"}},
  "오티스|흑수 - 묘": {skills:[{name:"순보",power:"4",coin:"+3",coinEffect:null},{name:"척살",power:"4",coin:"+6",coinEffect:null},{name:"각주살검",power:"5",coin:"+4",coinEffect:null}],defense:{name:"부분 흑수화",power:"5",coin:"+7",coinEffect:"[합 가능 반격] [사용시] 각력【묘】 3 얻음 [사용시] 자신의 속도가 대상보다 높을수록, 기본 위력 +1 (속도 차이 2 당 기본 위력 +1. 최대 2) [적중시] 파열 횟수 1 증가"}},
  "오티스|T사 3등급 강력징수직 직원": {skills:[{name:"징수 준비",power:"3",coin:"+4",coinEffect:null},{name:"T사식 공진 모듈",power:"3",coin:"+5",coinEffect:null},{name:"T3형 징수 철퇴 최대 전개",power:"5",coin:"+4",coinEffect:null}],defense:{name:"시간 대여 - 공진",power:"3",coin:"+10",coinEffect:"[합 가능 가드] [전투 시작시] 시간 대여 상태가 아니면, 턴 종료 시 시간 대여 4 얻음 (턴 당 1회) [합 승리시] 대상과 자신의 진동 횟수 2 증가 [합 패배] 자신의 진동 횟수 4 증가 파괴 불가 코인"}},
  "오티스|LCA 우제트 선봉 3팀 팀장": {skills:[{name:"코페쉬 검술",power:"3",coin:"+4",coinEffect:null},{name:"신기루 절삭",power:"4",coin:"+4",coinEffect:null},{name:"선봉에서 끝낸다",power:"6",coin:"+4",coinEffect:null}],defense:{name:"가다듬기",power:"15",coin:"+5",coinEffect:"보호막이 있는 동안 피격 시 공격자에게 침잠 3 부여 (턴당 3회) [사용시] 우제트의 눈 [선봉] 이 있으면, 보호 1 얻음 (턴당 1회) [사용시] 자신의 보호 1당, 최대 체력의 5%만큼 보호막 얻음 (최대 15%, 턴당 1회)"}},
  "오티스|거미집 중지 아비": {skills:[{name:"짓밟기",power:"3",coin:"+4",coinEffect:null},{name:"고작 이거에 부서지지 말라고!",power:"4",coin:"+4",coinEffect:null},{name:"원한 스탬핑",power:"4",coin:"+3",coinEffect:null}],defense:{name:"규칙 위반",power:"4",coin:"+6",coinEffect:null}},
  "그레고르|LCB 수감자": {skills:[{name:"베기",power:"4",coin:"+7",coinEffect:null},{name:"후비기",power:"5",coin:"+10",coinEffect:null},{name:"썰어내기",power:"6",coin:"+4",coinEffect:null}],defense:{name:"가드",power:"8",coin:"+3",coinEffect:null}},
  "그레고르|남부 리우 협회 6과": {skills:[{name:"일점 찌르기",power:"4",coin:"+2",coinEffect:null},{name:"몰아치기",power:"5",coin:"+2",coinEffect:null},{name:"연무 장타",power:"4",coin:"+2",coinEffect:null}],defense:{name:"가드",power:"8",coin:"+5",coinEffect:null}},
  "그레고르|료.고.파. 조수": {skills:[{name:"신선도 유지",power:"4",coin:"+2",coinEffect:null},{name:"싱싱한 재료인가?",power:"6",coin:"+8",coinEffect:null},{name:"재료 해체",power:"5",coin:"+1",coinEffect:null}],defense:{name:"가드",power:"8",coin:"+8",coinEffect:null}},
  "그레고르|장미스패너 공방 해결사": {skills:[{name:"시동 걸기",power:"3",coin:"+4",coinEffect:null},{name:"사슬 윤활",power:"4",coin:"+12",coinEffect:null},{name:"갈아버리자고",power:"4",coin:"+3",coinEffect:null}],defense:{name:"가드",power:"8",coin:"+8",coinEffect:null}},
  "그레고르|흑운회 부조장": {skills:[{name:"구름베기",power:"5",coin:"+5",coinEffect:null},{name:"먹구름",power:"5",coin:"+5",coinEffect:null},{name:"먹구름 깨어가르기",power:"4",coin:"+3",coinEffect:null}],defense:{name:"가드",power:"8",coin:"+8",coinEffect:null}},
  "그레고르|G사 일등대리": {skills:[{name:"베어내기",power:"4",coin:"+3",coinEffect:null},{name:"사지절단",power:"6",coin:"+10",coinEffect:null},{name:"내장 파기",power:"4",coin:"+2",coinEffect:null}],defense:{name:"가드",power:"10",coin:"+4",coinEffect:null}},
  "그레고르|남부 츠바이 협회 4과": {skills:[{name:"맞서기",power:"4",coin:"+3",coinEffect:null},{name:"유연한 제압",power:"3",coin:"+3",coinEffect:null},{name:"수호자",power:"5",coin:"+3",coinEffect:null}],defense:{name:"최선의 방어",power:"15",coin:"+5",coinEffect:"[전투 시작시] (자신의 방어 레벨 증가 X 2) 만큼 보호막을 얻음 [사용시] 다음 턴에 이 스킬 슬롯의 도발치 5 증가"}},
  "그레고르|쌍갈고리 해적단 부선장": {skills:[{name:"협상 시작",power:"4",coin:"+3",coinEffect:null},{name:"일방적 비즈니스",power:"4",coin:"+6",coinEffect:null},{name:"예정된 결렬",power:"5",coin:"+6",coinEffect:null}],defense:{name:"한 숨 돌릴까",power:"4",coin:"+10",coinEffect:"[회피 성공시] 호흡 1 얻음 (턴 당 최대 5)"}},
  "그레고르|에드가 가문 승계자": {skills:[{name:"세이버 슬래시",power:"5",coin:"+6",coinEffect:null},{name:"르미즈",power:"4",coin:"+6",coinEffect:null},{name:"악몽 사냥",power:"4",coin:"+3",coinEffect:null}],defense:{name:"네놈도 울고싶나?",power:"4",coin:"+10",coinEffect:"[사용시] 대상의 침잠 3 당 코인 위력 +1 (최대 3)"}},
  "그레고르|라만차랜드 신부": {skills:[{name:"가족을 위한 헌신",power:"3",coin:"+4",coinEffect:null},{name:"죄어드는 죄악감",power:"4",coin:"+6",coinEffect:null},{name:"씻을 수 없는 죄",power:"5",coin:"+4",coinEffect:null}],defense:{name:"빛바랜 인내",power:"15",coin:"+5",coinEffect:"[전투 시작시] 자신의 현재 체력이 최대 체력의 40% 이상이면, 출혈 을 5 얻고, 자신의 출혈 을 3회 발동 (턴 당 1회. 발동한 횟수만큼 출혈 횟수 감소) [전투 시작시] 자신의 현재 체력이 최대 체력의 40% 미만이면, 혈찬 을 최대 20 소모하여, 소모한 혈찬 만큼 자신의 체력 회복 (턴 당 1회) [전투 시작시] 닳아버린 마음 3 얻음 (턴 당 1회)"}},
  "그레고르|불주먹 사무소 생존자": {skills:[{name:"화염방사",power:"3",coin:"+4",coinEffect:null},{name:null,power:"4",coin:"+6",coinEffect:null},{name:"불주먹",power:"5",coin:"+4",coinEffect:null}],defense:{name:"누님의 몫이 아직 남았다",power:"9",coin:"+7",coinEffect:"[합 가능 반격] [전투 시작시] 12구산 연료 를 100 얻음 [적중시] 화상 1 부여"}},
  "그레고르|흑수 - 사": {skills:[{name:"뱀 송곳니",power:"3",coin:"+4",coinEffect:null},{name:"시야 밖에서 도려낸다",power:"4",coin:"+4",coinEffect:null},{name:"절사완철",power:"8",coin:"+14",coinEffect:null}],defense:{name:"반축",power:"3",coin:"+10",coinEffect:"[합 가능 가드] [전투 시작시] 다음 턴에 사완 3 얻음 (턴 당 1회) [사용시] 자신의 호흡 이 10 이상이면, 코인 위력 +1 [파괴 불가 코인]"}},
  "그레고르|밤의 송곳 카피타노": {skills:[{name:"틈새 찌르기",power:"3",coin:"+4",coinEffect:null},{name:"스틸레토 도피오",power:"4",coin:"+4",coinEffect:null},{name:"엑시큐션",power:"4",coin:"+3",coinEffect:null}],defense:{name:"궁지에서",power:"3",coin:"+10",coinEffect:"합 가능 가드 [전투 시작시] 이번 턴에 '패밀리의 숙청인' 효과로 발동되는 '메르체'의 사용 가능 횟수가 턴당 2회로 증가 [전투 시작시] 다음 턴에 신속 1 얻음 (턴당 1회) [사용시] 대상의 출혈 과 진동 의 합 6당, 코인 위력 +1 (최대 2) [합 승리시] 진동 2 부여 파괴 불가 코인"}},
  "그레고르|로보토미 E.G.O::램프": {skills:[{name:"영거리 주시",power:"3",coin:"+4",coinEffect:null},{name:null,power:"3",coin:"+3",coinEffect:null},{name:"등불에 현혹된 것에는 구원을",power:"5",coin:"+4",coinEffect:null}],defense:{name:"깃털을 태워 만든 심지",power:"3",coin:"+10",coinEffect:"[합 가능 가드] [전투 시작시] 램프 를 8이 되도록 얻고, 얻은 1당 최대 체력의 1%만큼 체력 피해 입음 (이 효과로 체력이 1 미만이 되지 않음) [턴 종료시] 자신을 제외한 속도가 가장 낮은 아군 (자신의 속박 / 2)명에게 다음 턴에 신속 1 부여 (턴당 1회. 소수점 버림) [파괴 불가 코인]"}},
  "그레고르|LCE E.G.O::AEDD": {skills:[{name:"전기 방류",power:"3",coin:"+4",coinEffect:null},{name:"직류 인버팅",power:"4",coin:"+4",coinEffect:null},{name:"고압 전류 방전",power:"5",coin:"+4",coinEffect:null}],defense:{name:null,power:"5",coin:"+10",coinEffect:"[전투 시작시] 고전압 외피 2 얻음 (턴당 1회) [사용시] 자신의 충전 만큼 코인 위력이 증가 (최대 5) [사용시] 자신의 충전 횟수 2 증가 (턴당 2회) [사용시] 다음 턴에 이 스킬 슬롯의 도발치 5 증가"}},
  "그레고르|새벽 사무소 대표": {skills:[{name:"여명의 섬광",power:"3",coin:"+4",coinEffect:null},{name:"노을빛 검",power:"4",coin:"+4",coinEffect:null},{name:"새벽을 가르는 검",power:"4",coin:"+3",coinEffect:null}],defense:{name:"수호자",power:"3",coin:"+4",coinEffect:null}},
};

const EGO_DATA = {
  "ill-go-fer-scissors-how-bout-you-don-quixote": {sinner:"돈키호테", title:"난 가위를 낼게, 너는? 돈키호테", grade:"ZAYIN", sin:"질투", season:7},
  "solemn-lament-yi-sang": {sinner:"이상", title:"엄숙한 애도 이상", grade:"HE", sin:"우울", season:9},
  "into-the-sunset-rodion": {sinner:"로쟈", title:"노을 속으로 로쟈", grade:"ZAYIN", sin:"색욕", season:7},
  "ardor-blossom-star-faust": {sinner:"파우스트", title:"홍염살 파우스트", grade:"HE", sin:"분노", season:7},
  "harmony-sinclair": {sinner:"싱클레어", title:"하모니 싱클레어", grade:"HE", sin:"분노", season:null},
  "move-in-reg-heathcliff": {sinner:"히스클리프", title:"입주 신고 히스클리프", grade:"TETH", sin:"질투", season:7},
  "ill-go-fer-scissors-how-bout-you-outis": {sinner:"오티스", title:"난 가위를 낼게, 너는? 오티스", grade:"ZAYIN", sin:"질투", season:7},
  "command-meltdown-faust": {sinner:"파우스트", title:"명령 : 용해 파우스트", grade:"HE", sin:"탐식", season:null},
  "tidal-elegy-ishmael": {sinner:"이스마엘", title:"파도의 만가 이스마엘", grade:"HE", sin:"우울", season:null},
  "unbrilliant-glory-gregor": {sinner:"그레고르", title:"눈부시지 않은 영광 그레고르", grade:"WAW", sin:"나태", season:null},
  "crushbound-past-meursault": {sinner:"뫼르소", title:"분쇄될 과거 뫼르소", grade:"WAW", sin:"나태", season:6},
  "in-the-name-of-love-and-hate-don-quixote": {sinner:"돈키호테", title:"사랑과 증오의 이름으로 돈키호테", grade:"WAW", sin:"질투", season:null},
  "red-sheet-don-quixote": {sinner:"돈키호테", title:"홍적 돈키호테", grade:"HE", sin:"탐식", season:6},
  "indicants-trial-rodion": {sinner:"로쟈", title:"지정 재판 로쟈", grade:"WAW", sin:"분노", season:5},
  "thoracalgia-faust": {sinner:"파우스트", title:"흉통 파우스트", grade:"HE", sin:"오만", season:5},
  "thoracalgia-ryoshu": {sinner:"료슈", title:"흉통 료슈", grade:"HE", sin:"오만", season:5},
  "magic-bullet-outis": {sinner:"오티스", title:"마탄 오티스", grade:"HE", sin:"오만", season:null},
  "christmas-nightmare-ishmael": {sinner:"이스마엘", title:"크리스마스 악몽 이스마엘", grade:"HE", sin:"나태", season:5},
  "christmas-nightmare-gregor": {sinner:"그레고르", title:"크리스마스 악몽 그레고르", grade:"HE", sin:"나태", season:5},
  "asymmetrical-inertia-heathcliff": {sinner:"히스클리프", title:"쏠린 관성 히스클리프", grade:"HE", sin:"나태", season:null},
  "fell-bullet-yi-sang": {sinner:"이상", title:"흉탄 이상", grade:"HE", sin:"오만", season:5},
  "yearning-mircalla-don-quixote": {sinner:"돈키호테", title:"갈망 - 미르칼라 돈키호테", grade:"WAW", sin:"색욕", season:5},
  "yearning-mircalla-meursault": {sinner:"뫼르소", title:"갈망 - 미르칼라 뫼르소", grade:"WAW", sin:"색욕", season:5},
  "hex-nail-rodion": {sinner:"로쟈", title:"저주못 로쟈", grade:"HE", sin:"질투", season:5},
  "hex-nail-sinclair": {sinner:"싱클레어", title:"저주못 싱클레어", grade:"TETH", sin:"질투", season:5},
  "lasso-faust": {sinner:"파우스트", title:"올가미 파우스트", grade:"TETH", sin:"탐식", season:5},
  "lasso-hong-lu": {sinner:"홍루", title:"올가미 홍루", grade:"TETH", sin:"탐식", season:5},
  "bygone-days-ishmael": {sinner:"이스마엘", title:"지난 날 이스마엘", grade:"TETH", sin:"우울", season:null},
  "solemn-lament-gregor": {sinner:"그레고르", title:"엄숙한 애도 그레고르", grade:"HE", sin:"우울", season:null},
  "dimension-shredder-outis": {sinner:"오티스", title:"차원찢개 오티스", grade:"HE", sin:"질투", season:4},
  "fell-bullet-heathcliff": {sinner:"히스클리프", title:"흉탄 히스클리프", grade:"TETH", sin:"오만", season:null},
  "contempt-awe-ryoshu": {sinner:"료슈", title:"경멸, 경외 료슈", grade:"WAW", sin:"색욕", season:4},
  "everlasting-faust": {sinner:"파우스트", title:"영속 파우스트", grade:"WAW", sin:"나태", season:4},
  "cavernous-wailing-hong-lu": {sinner:"홍루", title:"낮은울음 홍루", grade:"TETH", sin:"나태", season:null},
  "cavernous-wailing-sinclair": {sinner:"싱클레어", title:"낮은울음 싱클레어", grade:"ZAYIN", sin:"우울", season:null},
  "wingbeat-ishmael": {sinner:"이스마엘", title:"날갯짓 이스마엘", grade:"HE", sin:"탐식", season:null},
  "sanguine-desire-rodion": {sinner:"로쟈", title:"핏빛욕망 로쟈", grade:"WAW", sin:"색욕", season:null},
  "electric-screaming-don-quixote": {sinner:"돈키호테", title:"전기울음 돈키호테", grade:"TETH", sin:"질투", season:4},
  "electric-screaming-meursault": {sinner:"뫼르소", title:"전기울음 뫼르소", grade:"TETH", sin:"질투", season:4},
  "binds-heathcliff": {sinner:"히스클리프", title:"구속 히스클리프", grade:"WAW", sin:"우울", season:4},
  "binds-outis": {sinner:"오티스", title:"구속 오티스", grade:"WAW", sin:"오만", season:4},
  "bygone-days-yi-sang": {sinner:"이상", title:"지난 날 이상", grade:"ZAYIN", sin:"우울", season:4},
  "bygone-days-gregor": {sinner:"그레고르", title:"지난 날 그레고르", grade:"TETH", sin:"우울", season:4},
  "garden-of-thorns-gregor": {sinner:"그레고르", title:"가시 화원 그레고르", grade:"WAW", sin:"색욕", season:3},
  "wishing-cairn-don-quixote": {sinner:"돈키호테", title:"소망석 돈키호테", grade:"TETH", sin:"나태", season:null},
  "holiday-heathcliff": {sinner:"히스클리프", title:"홀리데이 히스클리프", grade:"ZAYIN", sin:"탐식", season:3},
  "holiday-outis": {sinner:"오티스", title:"홀리데이 오티스", grade:"HE", sin:"분노", season:3},
  "pursuance-rodion": {sinner:"로쟈", title:"집행 로쟈", grade:"HE", sin:"나태", season:null},
  "blind-obsession-ryoshu": {sinner:"료슈", title:"맹목 료슈", grade:"TETH", sin:"오만", season:3},
  "blind-obsession-ishmael": {sinner:"이스마엘", title:"맹목 이스마엘", grade:"WAW", sin:"오만", season:3},
  "effervescent-corrosion-rodion": {sinner:"로쟈", title:"들끓는 부식 로쟈", grade:"TETH", sin:"탐식", season:3},
  "92-sinclair": {sinner:"싱클레어", title:"9장 2절 싱클레어", grade:"HE", sin:"색욕", season:3},
  "92-faust": {sinner:"파우스트", title:"9장 2절 파우스트", grade:"TETH", sin:"색욕", season:3},
  "effervescent-corrosion-hong-lu": {sinner:"홍루", title:"들끓는 부식 홍루", grade:"HE", sin:"탐식", season:3},
  "regret-meursault": {sinner:"뫼르소", title:"후회 뫼르소", grade:"TETH", sin:"분노", season:null},
  "lantern-sinclair": {sinner:"싱클레어", title:"초롱 싱클레어", grade:"HE", sin:"탐식", season:null},
  "soda-ryoshu": {sinner:"료슈", title:"소다 료슈", grade:"ZAYIN", sin:"우울", season:2},
  "soda-hong-lu": {sinner:"홍루", title:"소다 홍루", grade:"TETH", sin:"질투", season:2},
  "red-eyes-ryoshu": {sinner:"료슈", title:"적안 료슈", grade:"TETH", sin:"색욕", season:null},
  "sunshower-yi-sang": {sinner:"이상", title:"여우비 이상", grade:"WAW", sin:"나태", season:2},
  "aedd-gregor": {sinner:"그레고르", title:"AEDD 그레고르", grade:"HE", sin:"우울", season:2},
  "aedd-heathcliff": {sinner:"히스클리프", title:"AEDD 히스클리프", grade:"TETH", sin:"우울", season:2},
  "sunshower-outis": {sinner:"오티스", title:"여우비 오티스", grade:"TETH", sin:"탐식", season:2},
  "capote-meursault": {sinner:"뫼르소", title:"카포테 뫼르소", grade:"HE", sin:"분노", season:2},
  "capote-ishmael": {sinner:"이스마엘", title:"카포테 이스마엘", grade:"TETH", sin:"분노", season:2},
  "dimension-shredder-yi-sang": {sinner:"이상", title:"차원찢개 이상", grade:"HE", sin:"오만", season:null},
  "dimension-shredder-hong-lu": {sinner:"홍루", title:"차원찢개 홍루", grade:"HE", sin:"오만", season:null},
  "lifetime-stew-don-quixote": {sinner:"돈키호테", title:"평생 스튜 돈키호테", grade:"TETH", sin:"색욕", season:1},
  "lifetime-stew-sinclair": {sinner:"싱클레어", title:"평생 스튜 싱클레어", grade:"TETH", sin:"색욕", season:1},
  "telepole-faust": {sinner:"파우스트", title:"전봇대 파우스트", grade:"HE", sin:"질투", season:null},
  "telepole-don-quixote": {sinner:"돈키호테", title:"전봇대 돈키호테", grade:"HE", sin:"질투", season:null},
  "4th-match-flame-yi-sang": {sinner:"이상", title:"4번째 성냥불 이상", grade:"TETH", sin:"분노", season:1},
  "wishing-cairn-yi-sang": {sinner:"이상", title:"소망석 이상", grade:"TETH", sin:"나태", season:null},
  "hex-nail-faust": {sinner:"파우스트", title:"저주못 파우스트", grade:"TETH", sin:"질투", season:null},
  "fluid-sac-faust": {sinner:"파우스트", title:"물주머니 파우스트", grade:"HE", sin:"우울", season:1},
  "fluid-sac-don-quixote": {sinner:"돈키호테", title:"물주머니 돈키호테", grade:"HE", sin:"우울", season:1},
  "4th-match-flame-ryoshu": {sinner:"료슈", title:"4번째 성냥불 료슈", grade:"HE", sin:"분노", season:1},
  "screwloose-wallop-meursault": {sinner:"뫼르소", title:"나사빠진 일격 뫼르소", grade:"TETH", sin:"질투", season:1},
  "pursuance-meursault": {sinner:"뫼르소", title:"집행 뫼르소", grade:"HE", sin:"나태", season:null},
  "roseate-desire-hong-lu": {sinner:"홍루", title:"분홍욕망 홍루", grade:"TETH", sin:"색욕", season:1},
  "telepole-heathcliff": {sinner:"히스클리프", title:"전봇대 히스클리프", grade:"HE", sin:"질투", season:1},
  "roseate-desire-ishmael": {sinner:"이스마엘", title:"분홍욕망 이스마엘", grade:"TETH", sin:"색욕", season:1},
  "ardor-blossom-star-ishmael": {sinner:"이스마엘", title:"홍염살 이스마엘", grade:"HE", sin:"분노", season:null},
  "rime-shank-rodion": {sinner:"로쟈", title:"얼음다리 로쟈", grade:"TETH", sin:"우울", season:1},
  "4th-match-flame-rodion": {sinner:"로쟈", title:"4번째 성냥불 로쟈", grade:"HE", sin:"분노", season:1},
  "impending-day-sinclair": {sinner:"싱클레어", title:"다가올날 싱클레어", grade:"TETH", sin:"분노", season:1},
  "ebony-stem-outis": {sinner:"오티스", title:"검은줄기 오티스", grade:"HE", sin:"탐식", season:1},
  "legerdemain-gregor": {sinner:"그레고르", title:"눈속임 그레고르", grade:"ZAYIN", sin:"탐식", season:1},
  "lantern-gregor": {sinner:"그레고르", title:"초롱 그레고르", grade:"TETH", sin:"탐식", season:null},
  "crows-eye-view-yi-sang": {sinner:"이상", title:"오감도 이상", grade:"ZAYIN", sin:"나태", season:null},
  "representation-emitter-faust": {sinner:"파우스트", title:"표상 방출기 파우스트", grade:"ZAYIN", sin:"오만", season:null},
  "la-sangre-de-sancho-don-quixote": {sinner:"돈키호테", title:"라 샹그레 데 산쵸 돈키호테", grade:"ZAYIN", sin:"색욕", season:null},
  "forest-for-the-flames-ryoshu": {sinner:"료슈", title:"삼라염상 료슈", grade:"ZAYIN", sin:"색욕", season:null},
  "chains-of-others-meursault": {sinner:"뫼르소", title:"타인의 사슬 뫼르소", grade:"ZAYIN", sin:"오만", season:null},
  "land-of-illusion-hong-lu": {sinner:"홍루", title:"허환경 홍루", grade:"ZAYIN", sin:"우울", season:null},
  "bodysack-heathcliff": {sinner:"히스클리프", title:"시체자루 히스클리프", grade:"ZAYIN", sin:"질투", season:null},
  "snagharpoon-ishmael": {sinner:"이스마엘", title:"작살박이 이스마엘", grade:"ZAYIN", sin:"우울", season:null},
  "what-is-cast-rodion": {sinner:"로쟈", title:"던져지는 것 로쟈", grade:"ZAYIN", sin:"오만", season:null},
  "branch-of-knowledge-sinclair": {sinner:"싱클레어", title:"지식나무의 가지 싱클레어", grade:"ZAYIN", sin:"탐식", season:null},
  "suddenly-one-day-gregor": {sinner:"그레고르", title:"어느날 갑자기 그레고르", grade:"ZAYIN", sin:"나태", season:null},
  "to-páthos-máthos-outis": {sinner:"오티스", title:"토 파토스 마토스 오티스", grade:"ZAYIN", sin:"오만", season:null},
  "great-trichiliocosm-[三千大世界]-yi-sang": {sinner:"이상", title:"삼천대세계 [三千大世界] 이상", grade:"WAW", sin:"분노", season:7},
  "great-trichiliocosm-[三千大世界]-ryoshu": {sinner:"료슈", title:"삼천대세계 [三千大世界] 료슈", grade:"WAW", sin:"분노", season:7},
  "tears-of-the-tarnished-blood-[汚血泣淚]-hong-lu": {sinner:"홍루", title:"오혈읍루 [汚血泣淚] 홍루", grade:"WAW", sin:"탐식", season:6},
  "tears-of-the-tarnished-blood-[汚血泣淚]-sinclair": {sinner:"싱클레어", title:"오혈읍루 [汚血泣淚] 싱클레어", grade:"WAW", sin:"탐식", season:6},
  "hundred-footed-death-maggot-[蝍蛆殺]-ishmael": {sinner:"이스마엘", title:"즉저살 [蝍蛆殺] 이스마엘", grade:"ZAYIN", sin:"우울", season:6},
  "red-eyes-(open)-ryoshu": {sinner:"료슈", title:"적안(開) 료슈", grade:"HE", sin:"질투", season:null},
  "to-remain-oneself-[宁作吾]-hong-lu": {sinner:"홍루", title:"영작오 [宁作吾] 홍루", grade:"HE", sin:"오만", season:null},
  "ya-śunyatā-tad-rupam-heathcliff": {sinner:"히스클리프", title:"공즉시색 히스클리프", grade:"HE", sin:"색욕", season:null},
  "ya-śunyatā-tad-rupam-outis": {sinner:"오티스", title:"공즉시색 오티스", grade:"TETH", sin:"색욕", season:null},
  "shadow-vested-bladesinger-[着影揮刀]-meursault": {sinner:"뫼르소", title:"착영휘도 [着影揮刀] 뫼르소", grade:"HE", sin:"오만", season:7},
};

const EGO_DEFAULT = {
  "이상": "crows-eye-view-yi-sang",
  "파우스트": "representation-emitter-faust",
  "돈키호테": "la-sangre-de-sancho-don-quixote",
  "료슈": "forest-for-the-flames-ryoshu",
  "뫼르소": "chains-of-others-meursault",
  "홍루": "land-of-illusion-hong-lu",
  "히스클리프": "bodysack-heathcliff",
  "이스마엘": "snagharpoon-ishmael",
  "로쟈": "what-is-cast-rodion",
  "싱클레어": "branch-of-knowledge-sinclair",
  "오티스": "to-páthos-máthos-outis",
  "그레고르": "suddenly-one-day-gregor",
};



const SIN_COLOR = {
  "분노":"#dc2626", "색욕":"#ea580c", "나태":"#ca8a04", "탐식":"#16a34a",
  "우울":"#0ea5e9", "오만":"#4f46e5", "질투":"#9333ea",
};
const EGO_GRADES = ["ZAYIN","TETH","HE","WAW","ALEPH"];
const SKILL_RULE_DEFAULT = { total:6, caps:{1:3,2:5,3:6}, defaultSplit:{1:3,2:2,3:1} };
// key: "수감자|인격명|에고 slug" — 해당 인격이 선택되어 있고 해당 에고도 장착되어 있을 때만 적용.
const SKILL_RULE_OVERRIDE = {
  "돈키호테|로보토미 E.G.O::사랑과 증오의 이름으로|in-the-name-of-love-and-hate-don-quixote": { total:7, caps:{1:3,2:5,3:7}, defaultSplit:{1:3,2:2,3:2} },
};






function sinBadgeSVG(sin, size){
  const src = SIN_ICON_DATA[sin];
  if (!src) return "";
  return `<img class="sin-badge" width="${size}" height="${size}" src="${src}" alt="${sin}" loading="lazy">`;
}

function parseCondition(cond){
  if (!cond) return {terms:[], label:""};
  const chunks = cond.split(" + ").map(c => c.trim()).filter(Boolean);
  let label = "";
  const terms = chunks.map(chunk => {
    const tokens = chunk.split(/\s+/);
    let sin = null, num = tokens[0];
    if (SIN_SET.has(tokens[0])){ sin = tokens[0]; num = tokens[1]; if (tokens[2]) label = tokens[2]; }
    else if (tokens[1]) label = tokens[1];
    return {sin, num};
  });
  return {terms, label};
}

const CATEGORY_DEFS = [
  ["체력 회복", /체력[^,.·]{0,8}회복/],
  ["정신력 회복", /정신력[^,.·]{0,8}회복/],
  ["보호막", /보호막/],
  ["신속", /신속/],
  ["피해량 증가", /(가하는 )?피해량\s*\+|피해량[^,.·]{0,4}증가/],
  ["받는 피해 감소", /받는 피해량[^,.·]{0,10}(-|감소)/],
  ["공격 레벨", /공격 레벨/],
  ["방어 레벨", /방어 레벨/],
  ["출혈", /출혈/],
  ["화상", /화상/],
  ["침잠", /침잠/],
  ["파열", /파열/],
  ["진동", /진동/],
  ["속박", /속박/],
  ["크리티컬", /크리티컬/],
  ["충전", /충전/],
  ["호흡", /호흡/],
  ["탄환", /탄환/],
  ["속도", /속도/],
  ["합 위력", /합 위력/],
  ["적 처치 시", /처치\s*시|처치할\s*때/],
];

// 효과 유형 모음 필터. 선택하면 members에 속한 개별 효과 유형이 모두 선택된 것으로 처리된다.
const CATEGORY_BUNDLES = [
  { label:"생존기", members:["체력 회복","보호막","받는 피해 감소","방어 레벨"] },
  { label:"고점", members:["피해량 증가","공격 레벨","크리티컬"] },
];

function computeMeta(entry){
  const {terms, label} = parseCondition(entry.condition);
  entry.condTerms = terms;
  entry.condLabel = label;
  entry.sins = terms.map(t => t.sin).filter(Boolean);
  const t = entry.supportPassiveEffect;
  entry.cats = CATEGORY_DEFS.filter(([,re]) => re.test(t)).map(([label]) => label);
  entry.identityKeywords = IDENTITY_KEYWORDS_DATA[`${entry.sinner}|${entry.identity}`] || [];
  entry.skillSinsByPos = (() => {
    const prof = IDENTITY_SKILL_PROFILE[`${entry.sinner}|${entry.identity}`];
    const byPos = {"1":null, "2":null, "3":null, "def":null};
    if (!prof) return byPos;
    if (prof.skills[0]) byPos["1"] = prof.skills[0].sin || null;
    if (prof.skills[1]) byPos["2"] = prof.skills[1].sin || null;
    if (prof.skills[2]) byPos["3"] = prof.skills[2].sin || null;
    if (prof.defense[0]) byPos["def"] = prof.defense[0].sin || null;
    return byPos;
  })();
  entry.skillSins = [...new Set(Object.values(entry.skillSinsByPos).filter(Boolean))];
  entry.egoConditional = EGO_CONDITIONAL_DATA[`${entry.sinner}|${entry.identity}`] || [];
  entry.abbrevs = ABBREV_DATA[`${entry.sinner}|${entry.identity}`] || [];
  const searchFields = [entry.sinner, entry.identity, entry.supportPassiveName, entry.supportPassiveEffect, entry.condition, ...entry.abbrevs];
  entry.searchBlob = searchFields.join(" ").toLowerCase();
  entry.searchBlobNoSpace = searchFields.map(f => f.replace(/\s+/g, "")).join(" ").toLowerCase();
}
DATA.forEach(computeMeta);

const SINNERS = [...new Set(DATA.map(d => d.sinner))];
const RARITIES = ["0","00","000","0000"].filter(r => DATA.some(d => d.rarity === r));

const state = {
  q: "",
  sinners: new Set(),
  sinnerMode: "include", // "include" | "exclude"
  rarities: new Set(),
  sins: new Set(),
  activations: new Set(),
  identityKw: new Set(),
  cats: new Set(),
  skillSins: new Set(),
  skillPositions: new Set(),
  skillSinMode: "or", // "or" | "and" — 선택한 여러 속성 사이의 관계
  skillPositionMode: "or", // "or" | "and" — 선택한 여러 스킬 범위 사이의 관계
  syncMode: "gacksung",
  includeEgoKw: false,
  ownedOnly: false,
};

// 에고/기프트 조건부 죄악 판정을 포함한 "실질" 인격 키워드 목록
function effectiveKeywords(d){
  if (!state.includeEgoKw || !d.egoConditional.length) return d.identityKeywords;
  const extra = d.egoConditional.map(e => e.sin);
  return [...new Set([...d.identityKeywords, ...extra])];
}

const IDENTITY_KW_LIST = ["화상","출혈","진동","파열","침잠","호흡","충전","탄환"];
const KEYWORD_TERMS = Object.keys(KEYWORD_DEFS).sort((a,b) => b.length - a.length);
// 키워드 뒤에 특정 글자가 붙으면 무관한 고유명사(예: "광신도")로 취급해 하이라이트에서 제외.
const KEYWORD_EXCLUDE_FOLLOW = { "광신": ["도"] };
const KEYWORD_RE = new RegExp(KEYWORD_TERMS.map(t => {
  const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const excludes = KEYWORD_EXCLUDE_FOLLOW[t];
  return excludes ? `${escaped}(?!${excludes.join("|")})` : escaped;
}).join("|"), "g");
function linkifyKeywords(text){
  return text.replace(KEYWORD_RE, m => `<span class="kw-term" data-kw="${m}">${identityKwIcon(m, 14)}${m}</span>`);
}
function identityKwIcon(term, size){
  const src = KEYWORD_ICON_DATA[term];
  return src ? `<img src="${src}" width="${size}" height="${size}" alt="" loading="lazy">` : "";
}

function countFor(filterFn){ return DATA.filter(filterFn).length; }

function buildChips(container, items, {getKey, getLabel, getCount, selectedSet, iconFor, onChange}){
  container.innerHTML = "";
  const rerender = onChange || render;
  items.forEach(item => {
    const key = getKey(item);
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.type = "button";
    btn.setAttribute("aria-pressed", selectedSet.has(key));
    btn.innerHTML = (iconFor ? iconFor(item) : "") +
      `<span>${getLabel(item)}</span><span class="count">${getCount(item)}</span>`;
    btn.addEventListener("click", () => {
      if (selectedSet.has(key)) selectedSet.delete(key); else selectedSet.add(key);
      rerender();
    });
    container.appendChild(btn);
  });
}

// 모음 필터 칩: members가 모두 selectedSet에 있으면 눌린 상태로 표시. 클릭 시 members 전체를 한번에 추가/제거.
function buildBundleChips(containerId, selectedSet, rerenderFn){
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  CATEGORY_BUNDLES.forEach(b => {
    const isActive = b.members.every(m => selectedSet.has(m));
    const btn = document.createElement("button");
    btn.className = "chip bundle-chip";
    btn.type = "button";
    btn.setAttribute("aria-pressed", isActive);
    btn.innerHTML = `<span>${b.label}</span>`;
    btn.addEventListener("click", () => {
      if (isActive) b.members.forEach(m => selectedSet.delete(m));
      else b.members.forEach(m => selectedSet.add(m));
      rerenderFn();
    });
    container.appendChild(btn);
  });
}

function buildRarityChips(){
  const container = document.getElementById("rarityChips");
  container.innerHTML = "";
  RARITIES.forEach(r => {
    const btn = document.createElement("button");
    btn.className = "chip rarity-chip";
    btn.type = "button";
    btn.setAttribute("aria-pressed", state.rarities.has(r));
    const c = countFor(d => d.rarity === r);
    btn.innerHTML = `<span class="zeros">${r}</span><span class="count">${c}</span>`;
    btn.addEventListener("click", () => {
      if (state.rarities.has(r)) state.rarities.delete(r); else state.rarities.add(r);
      render();
    });
    container.appendChild(btn);
  });
}

function passesFilters(d){
  if (state.q){
    const terms = state.q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.every(t => d.searchBlob.includes(t) || d.searchBlobNoSpace.includes(t))) return false;
  }
  if (state.sinners.size){
    const inSet = state.sinners.has(d.sinner);
    if (state.sinnerMode === "exclude" ? inSet : !inSet) return false;
  }
  if (state.rarities.size && !state.rarities.has(d.rarity)) return false;
  if (state.sins.size && ![...state.sins].every(s => d.sins.includes(s))) return false;
  if (state.activations.size && !state.activations.has(d.condLabel)) return false;
  if (state.cats.size && ![...state.cats].some(c => d.cats.includes(c))) return false;
  if (state.ownedOnly && !isIdentityOwned(d.sinner, d.identity)) return false;
  return true;
}
function skillSetPassesFilters(d){
  if (state.sinners.size){
    const inSet = state.sinners.has(d.sinner);
    if (state.sinnerMode === "exclude" ? inSet : !inSet) return false;
  }
  if (state.identityKw.size && ![...state.identityKw].every(k => effectiveKeywords(d).includes(k))) return false;
  if (state.skillSins.size && !skillFilterPasses(d, state.skillPositions, state.skillPositionMode, state.skillSins, state.skillSinMode)) return false;
  if (state.ownedOnly && !isIdentityOwned(d.sinner, d.identity)) return false;
  return true;
}
// positions: Set of "1"/"2"/"3"/"def" (비어있으면 4개 전부).
// positionMode "or": 선택된 슬롯들의 속성을 합집합(pool)으로 모아 sinMode로 selectedSins와 비교.
// positionMode "and": 선택된 슬롯 하나하나가 각각 selectedSins를 sinMode로 만족해야 함(전부 통과해야 함).
function skillFilterPasses(d, positions, positionMode, selectedSinsSet, sinMode){
  const keys = positions.size ? [...positions] : ["1","2","3","def"];
  const selected = [...selectedSinsSet];
  const sinTest = pool => sinMode === "and" ? selected.every(s => pool.has(s)) : selected.some(s => pool.has(s));
  if (positionMode === "and"){
    return keys.every(k => {
      const sin = d.skillSinsByPos[k];
      return sin ? sinTest(new Set([sin])) : false;
    });
  }
  const pool = new Set();
  keys.forEach(k => { if (d.skillSinsByPos[k]) pool.add(d.skillSinsByPos[k]); });
  return sinTest(pool);
}

function renderActivePills(){
  const wrap = document.getElementById("activePills");
  wrap.innerHTML = "";
  const pills = [];
  state.sinners.forEach(v => pills.push({label: state.sinnerMode === "exclude" ? `제외:${v}` : v, clear:() => state.sinners.delete(v)}));
  state.rarities.forEach(v => pills.push({label:v, clear:() => state.rarities.delete(v)}));
  state.sins.forEach(v => pills.push({label:v, icon:sinBadgeSVG(v,14), clear:() => state.sins.delete(v)}));
  state.activations.forEach(v => pills.push({label:v, clear:() => state.activations.delete(v)}));
  state.cats.forEach(v => pills.push({label:v, clear:() => state.cats.delete(v)}));
  pills.forEach(p => {
    const el = document.createElement("span");
    el.className = "active-pill";
    el.innerHTML = `${p.icon || ""}<span>${p.label}</span>`;
    const btn = document.createElement("button");
    btn.setAttribute("aria-label", `${p.label} 필터 해제`);
    btn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`;
    btn.addEventListener("click", () => { p.clear(); renderBoth(); });
    el.appendChild(btn);
    wrap.appendChild(el);
  });
}
function renderSkillSetActivePills(){
  const wrap = document.getElementById("skillSetActivePills");
  wrap.innerHTML = "";
  const pills = [];
  state.sinners.forEach(v => pills.push({label: state.sinnerMode === "exclude" ? `제외:${v}` : v, clear:() => state.sinners.delete(v)}));
  state.skillSins.forEach(v => pills.push({label:`보유 스킬:${v}`, icon:sinBadgeSVG(v,14), clear:() => state.skillSins.delete(v)}));
  state.skillPositions.forEach(v => {
    const p = SKILL_POSITIONS.find(sp => sp.key === v);
    pills.push({label:`보유 스킬 범위:${p ? p.label : v}`, clear:() => state.skillPositions.delete(v)});
  });
  state.identityKw.forEach(v => pills.push({label:v, icon:identityKwIcon(v,14), clear:() => state.identityKw.delete(v)}));
  pills.forEach(p => {
    const el = document.createElement("span");
    el.className = "active-pill";
    el.innerHTML = `${p.icon || ""}<span>${p.label}</span>`;
    const btn = document.createElement("button");
    btn.setAttribute("aria-label", `${p.label} 필터 해제`);
    btn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`;
    btn.addEventListener("click", () => { p.clear(); renderBoth(); });
    el.appendChild(btn);
    wrap.appendChild(el);
  });
}

function conditionRowHTML(d){
  if (!d.condTerms.length) return `<div class="condition-row none">상시 발동 (조건 없음)</div>`;
  const termsHTML = d.condTerms.map((t,i) => {
    const icon = t.sin ? sinBadgeSVG(t.sin, 20) : "";
    const sep = i > 0 ? `<span class="plus">+</span>` : "";
    return `${sep}<span class="cond-term">${icon}<span class="cond-num">${t.num ?? ""}</span></span>`;
  }).join("");
  const labelHTML = d.condLabel ? `<span class="cond-label">${d.condLabel}</span>` : "";
  return `<div class="condition-row">${termsHTML}${labelHTML}</div>`;
}

function effectHTML(d){
  const lines = d.supportPassiveEffect.split("\n").map(l => l.trim()).filter(Boolean);
  return lines.map(l => {
    const isBullet = l.startsWith("-");
    const text = linkifyKeywords(isBullet ? l.replace(/^-\s*/, "") : l);
    return `<div class="line${isBullet ? " bullet" : ""}">${text}</div>`;
  }).join("");
}

function cardHTML(d){
  const tagsHTML = d.cats.slice(0,5).map(c => `<span class="tag">${c}</span>`).join("");
  const bannerKey = `${d.sinner}|${d.identity}`;
  const bannerSrc = (state.syncMode === "gacksung" ? IDENTITY_BANNER_SYNCED_DATA[bannerKey] : IDENTITY_BANNER_NORMAL_DATA[bannerKey])
    || IDENTITY_BANNER_SYNCED_DATA[bannerKey] || IDENTITY_BANNER_NORMAL_DATA[bannerKey];
  const iconSrc = SINNER_ICON_DATA[d.sinner];
  const iconHTML = iconSrc ? `<img class="sinner-icon-inline" src="${iconSrc}" alt="" loading="lazy">` : "";
  const bannerHTML = bannerSrc ? `<img class="card-banner" src="${bannerSrc}" alt="" loading="lazy">` : "";
  return `
    <article class="card">
      ${bannerHTML}
      <span class="rarity-badge">${d.rarity}</span>
      <div class="card-body">
        <div class="card-info">
          <div class="card-sinner-row">
            ${iconHTML}<span class="card-sinner">${d.sinner}</span>
          </div>
          <span class="card-identity">${d.identity}</span>
        </div>
        <div class="passive-name">${d.supportPassiveName}</div>
        ${conditionRowHTML(d)}
        <div class="passive-effect">${effectHTML(d)}</div>
        ${tagsHTML ? `<div class="card-tags">${tagsHTML}</div>` : ""}
      </div>
    </article>`;
}

function render(){
  const filtered = DATA.filter(passesFilters);
  document.getElementById("shownCount").textContent = filtered.length;
  const grid = document.getElementById("cardGrid");
  const empty = document.getElementById("emptyState");
  if (filtered.length === 0){
    grid.innerHTML = "";
    empty.hidden = false;
  } else {
    empty.hidden = true;
    grid.innerHTML = filtered.map(cardHTML).join("");
  }
  renderActivePills();

  buildChips(document.getElementById("sinnerChips"), SINNERS, {
    getKey:s=>s, getLabel:s=>s, getCount:s=>countFor(d=>d.sinner===s), selectedSet: state.sinners,
    iconFor: s => SINNER_ICON_DATA[s] ? `<img class="sinner-icon" src="${SINNER_ICON_DATA[s]}" alt="" loading="lazy">` : "",
    onChange: renderBoth
  });
  buildRarityChips();
  buildChips(document.getElementById("sinChips"), SINS, {
    getKey:s=>s, getLabel:s=>s, getCount:s=>countFor(d=>d.sins.includes(s)), selectedSet: state.sins,
    iconFor: s => sinBadgeSVG(s, 18)
  });
  const activationsWithCount = ACTIVATIONS.filter(a => countFor(d=>d.condLabel===a) > 0);
  buildChips(document.getElementById("activationChips"), activationsWithCount, {
    getKey:a=>a, getLabel:a=>a, getCount:a=>countFor(d=>d.condLabel===a), selectedSet: state.activations
  });
  const catsWithCount = CATEGORY_DEFS.map(([label]) => label).filter(label => countFor(d=>d.cats.includes(label)) > 0);
  buildChips(document.getElementById("categoryChips"), catsWithCount, {
    getKey:c=>c, getLabel:c=>c, getCount:c=>countFor(d=>d.cats.includes(c)), selectedSet: state.cats
  });
  buildBundleChips("categoryBundleChips", state.cats, render);
}

function renderBoth(){ render(); renderSkillSet(); }

function egoConditionalHTML(d){
  if (!d.egoConditional.length) return "";
  return d.egoConditional.map(e => {
    const verb = e.type === "gift" ? "장착 시" : "사용 시";
    const nameHTML = e.type === "gift"
      ? `${GIFT_ICON_DATA[e.name] ? `<img class="gift-icon" src="${GIFT_ICON_DATA[e.name]}" alt="">` : ""}'${e.name}' 기프트`
      : `'${e.name}' E.G.O`;
    return `<span class="ego-cond-tag">(${nameHTML} ${verb} ${identityKwIcon(e.sin,12)}${e.sin} 판정)</span>`;
  }).join("");
}

function identityKeywordsHTML(d){
  const kwHTML = d.identityKeywords.length
    ? `<div class="identity-kw-tags">${d.identityKeywords.map(k =>
        `<span class="identity-kw-tag">${identityKwIcon(k, 12)}${k}</span>`
      ).join(`<span class="identity-kw-sep">·</span>`)}</div>`
    : "";
  const egoHTML = egoConditionalHTML(d);
  if (!kwHTML && !egoHTML) return "";
  return `${kwHTML}${egoHTML}`;
}

function skillSetCardHTML(d){
  const prof = IDENTITY_SKILL_PROFILE[`${d.sinner}|${d.identity}`];
  const bannerKey = `${d.sinner}|${d.identity}`;
  const bannerSrc = (state.syncMode === "gacksung" ? IDENTITY_BANNER_SYNCED_DATA[bannerKey] : IDENTITY_BANNER_NORMAL_DATA[bannerKey])
    || IDENTITY_BANNER_SYNCED_DATA[bannerKey] || IDENTITY_BANNER_NORMAL_DATA[bannerKey];
  const iconSrc = SINNER_ICON_DATA[d.sinner];
  const iconHTML = iconSrc ? `<img class="sinner-icon-inline" src="${iconSrc}" alt="" loading="lazy">` : "";
  const bannerHTML = bannerSrc ? `<img class="card-banner" src="${bannerSrc}" alt="" loading="lazy">` : "";
  const slots = [
    {label:"Skill 1", num:"1", info: prof && prof.skills[0]},
    {label:"Skill 2", num:"2", info: prof && prof.skills[1]},
    {label:"Skill 3", num:"3", info: prof && prof.skills[2]},
    {label:"DEF", num:"def", info: prof && prof.defense && prof.defense[0]},
  ];
  const slotsHTML = slots.map(s => {
    const sin = s.info && s.info.sin;
    const iconOrEmpty = sin ? sinBadgeSVG(sin, 26) : `<span class="skillset-slot-empty"></span>`;
    return `<button type="button" class="skillset-slot-btn" data-sinner="${d.sinner.replace(/"/g,"&quot;")}" data-identity="${d.identity.replace(/"/g,"&quot;")}" data-num="${s.num}">
      <span class="skillset-slot-label">${s.label}</span>
      ${iconOrEmpty}
    </button>`;
  }).join("");
  return `
    <article class="card">
      ${bannerHTML}
      <span class="rarity-badge">${d.rarity}</span>
      <div class="card-body">
        <div class="card-info">
          <div class="card-sinner-row">
            ${iconHTML}<span class="card-sinner">${d.sinner}</span>
          </div>
          <span class="card-identity">${d.identity}</span>
          ${identityKeywordsHTML(d)}
        </div>
        <div class="skillset-skill-row">${slotsHTML}</div>
      </div>
    </article>`;
}

function renderSkillSet(){
  const filtered = DATA.filter(skillSetPassesFilters);
  document.getElementById("skillSetShownCount").textContent = filtered.length;
  const grid = document.getElementById("skillSetGrid");
  const empty = document.getElementById("skillSetEmptyState");
  if (filtered.length === 0){
    grid.innerHTML = "";
    empty.hidden = false;
  } else {
    empty.hidden = true;
    grid.innerHTML = filtered.map(skillSetCardHTML).join("");
  }
  renderSkillSetActivePills();

  buildChips(document.getElementById("ssSinnerChips"), SINNERS, {
    getKey:s=>s, getLabel:s=>s, getCount:s=>countFor(d=>d.sinner===s), selectedSet: state.sinners,
    iconFor: s => SINNER_ICON_DATA[s] ? `<img class="sinner-icon" src="${SINNER_ICON_DATA[s]}" alt="" loading="lazy">` : "",
    onChange: renderBoth
  });
  const skillSinsWithCount = SINS.filter(s => countFor(d=>d.skillSins.includes(s)) > 0);
  buildChips(document.getElementById("skillSinChips"), skillSinsWithCount, {
    getKey:s=>s, getLabel:s=>s, getCount:s=>countFor(d=>d.skillSins.includes(s)), selectedSet: state.skillSins,
    iconFor: s => sinBadgeSVG(s, 18), onChange: renderSkillSet
  });
  buildChips(document.getElementById("skillPositionChips"), SKILL_POSITIONS, {
    getKey:p=>p.key, getLabel:p=>p.label, getCount:p=>countFor(d=>!!d.skillSinsByPos[p.key]), selectedSet: state.skillPositions,
    onChange: renderSkillSet
  });
  const identityKwWithCount = IDENTITY_KW_LIST.filter(k => countFor(d=>effectiveKeywords(d).includes(k)) > 0);
  buildChips(document.getElementById("identityKwChips"), identityKwWithCount, {
    getKey:k=>k, getLabel:k=>k, getCount:k=>countFor(d=>effectiveKeywords(d).includes(k)), selectedSet: state.identityKw,
    iconFor: k => identityKwIcon(k, 16), onChange: renderSkillSet
  });
}


const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", e => { state.q = e.target.value; render(); });
document.getElementById("clearSearch").addEventListener("click", () => { state.q=""; searchInput.value=""; render(); });
const syncToggle = document.getElementById("syncToggle");
const syncToggleLabel = document.getElementById("syncToggleLabel");
syncToggle.addEventListener("change", () => {
  state.syncMode = syncToggle.checked ? "gacksung" : "normal";
  syncToggleLabel.textContent = syncToggle.checked ? "동기화 후" : "동기화 전";
  render();
});
const egoKwToggle = document.getElementById("egoKwToggle");
const egoKwTogglePicker = document.getElementById("egoKwTogglePicker");
function setIncludeEgoKw(val){
  state.includeEgoKw = val;
  egoKwToggle.checked = val;
  egoKwTogglePicker.checked = val;
  renderSkillSet();
  if (!pickerView.hidden) renderPicker();
}
egoKwToggle.addEventListener("change", e => setIncludeEgoKw(e.target.checked));
egoKwTogglePicker.addEventListener("change", e => setIncludeEgoKw(e.target.checked));
function setSkillSinMode(mode){
  state.skillSinMode = mode;
  document.getElementById("skillSinModeOr").setAttribute("aria-pressed", String(mode === "or"));
  document.getElementById("skillSinModeAnd").setAttribute("aria-pressed", String(mode === "and"));
  renderSkillSet();
}
function setSkillPositionMode(mode){
  state.skillPositionMode = mode;
  document.getElementById("skillPosModeOr").setAttribute("aria-pressed", String(mode === "or"));
  document.getElementById("skillPosModeAnd").setAttribute("aria-pressed", String(mode === "and"));
  renderSkillSet();
}
document.getElementById("skillPosModeOr").addEventListener("click", () => setSkillPositionMode("or"));
document.getElementById("skillPosModeAnd").addEventListener("click", () => setSkillPositionMode("and"));
document.getElementById("skillSinModeOr").addEventListener("click", () => setSkillSinMode("or"));
document.getElementById("skillSinModeAnd").addEventListener("click", () => setSkillSinMode("and"));
function setSinnerMode(mode){
  state.sinnerMode = mode;
  document.getElementById("sinnerModeInclude").setAttribute("aria-pressed", String(mode === "include"));
  document.getElementById("sinnerModeExclude").setAttribute("aria-pressed", String(mode === "exclude"));
  document.getElementById("ssSinnerModeInclude").setAttribute("aria-pressed", String(mode === "include"));
  document.getElementById("ssSinnerModeExclude").setAttribute("aria-pressed", String(mode === "exclude"));
  renderBoth();
}
document.getElementById("sinnerModeInclude").addEventListener("click", () => setSinnerMode("include"));
document.getElementById("sinnerModeExclude").addEventListener("click", () => setSinnerMode("exclude"));
document.getElementById("ssSinnerModeInclude").addEventListener("click", () => setSinnerMode("include"));
document.getElementById("ssSinnerModeExclude").addEventListener("click", () => setSinnerMode("exclude"));
document.getElementById("resetAll").addEventListener("click", () => {
  state.q=""; searchInput.value="";
  state.rarities.clear(); state.sins.clear(); state.activations.clear(); state.cats.clear();
  state.sinners.clear();
  setSinnerMode("include");
});
document.getElementById("skillSetResetAll").addEventListener("click", () => {
  state.sinners.clear(); state.skillSins.clear(); state.skillPositions.clear(); state.identityKw.clear();
  setSkillSinMode("or");
  setSkillPositionMode("or");
  setSinnerMode("include");
});

const kwTooltip = document.getElementById("kwTooltip");
const kwTooltipTerm = kwTooltip.querySelector(".kw-tooltip-term");
const kwTooltipDef = kwTooltip.querySelector(".kw-tooltip-def");
function hideKwTooltip(){ kwTooltip.hidden = true; }
function escapeHTML(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function showTooltipAt(term, defHTML, anchorEl){
  kwTooltipTerm.textContent = term;
  kwTooltipDef.innerHTML = defHTML;
  kwTooltip.hidden = false;
  const r = anchorEl.getBoundingClientRect();
  const tw = kwTooltip.offsetWidth, th = kwTooltip.offsetHeight;
  let left = r.left + r.width/2 - tw/2;
  left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));
  let top = r.top - th - 8;
  if (top < 8) top = r.bottom + 8;
  kwTooltip.style.left = `${left}px`;
  kwTooltip.style.top = `${top}px`;
}
function showKwTooltip(term, anchorEl){
  const def = KEYWORD_DEFS[term];
  if (!def) return;
  showTooltipAt(term, escapeHTML(def), anchorEl);
}
function skillSlotInfo(sinner, identity, num){
  const prof = IDENTITY_SKILL_PROFILE[`${sinner}|${identity}`];
  if (!prof) return null;
  return num === "def" ? (prof.defense && prof.defense[0]) : prof.skills[Number(num)-1];
}
function skillSlotDetail(sinner, identity, num){
  const d = IDENTITY_SKILL_DETAIL[`${sinner}|${identity}`];
  if (!d) return null;
  return num === "def" ? d.defense : d.skills[Number(num)-1];
}
function skillTooltipHTML(sinner, identity, num){
  const info = skillSlotInfo(sinner, identity, num);
  const detail = skillSlotDetail(sinner, identity, num);
  const rows = [];
  if (detail && detail.name) rows.push(`<div class="skill-tt-name">${escapeHTML(detail.name)}</div>`);
  rows.push(`<div class="skill-tt-row"><span>속성</span><span>${info && info.sin ? sinBadgeSVG(info.sin,14)+escapeHTML(info.sin) : "정보 없음"}</span></div>`);
  if (num !== "def" && info && info.num != null){
    rows.push(`<div class="skill-tt-row"><span>기본 보유</span><span>${info.num}개</span></div>`);
  }
  if (detail && detail.power){
    rows.push(`<div class="skill-tt-row"><span>기본 위력</span><span>${escapeHTML(detail.power)}</span></div>`);
  }
  if (detail && detail.coin){
    rows.push(`<div class="skill-tt-row"><span>코인 위력</span><span>${escapeHTML(detail.coin)}</span></div>`);
  }
  if (detail && detail.coinEffect){
    rows.push(`<div class="skill-tt-effect">${escapeHTML(detail.coinEffect)}</div>`);
  }
  return rows.join("");
}
document.body.addEventListener("click", e => {
  const term = e.target.closest(".kw-term");
  if (term){
    const isSame = kwTooltip.dataset.openFor === term.dataset.kw && !kwTooltip.hidden;
    if (isSame){ hideKwTooltip(); kwTooltip.dataset.openFor = ""; return; }
    kwTooltip.dataset.openFor = term.dataset.kw;
    showKwTooltip(term.dataset.kw, term);
    e.stopPropagation();
    return;
  }
  const slotBtn = e.target.closest(".skillset-slot-btn");
  if (slotBtn){
    const { sinner, identity, num } = slotBtn.dataset;
    const openKey = `slot:${sinner}|${identity}|${num}`;
    const isSame = kwTooltip.dataset.openFor === openKey && !kwTooltip.hidden;
    if (isSame){ hideKwTooltip(); kwTooltip.dataset.openFor = ""; return; }
    kwTooltip.dataset.openFor = openKey;
    const label = num === "def" ? "DEF" : `Skill ${num}`;
    showTooltipAt(label, skillTooltipHTML(sinner, identity, num), slotBtn);
    e.stopPropagation();
    return;
  }
  if (!e.target.closest("#kwTooltip")) hideKwTooltip();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") hideKwTooltip(); });
window.addEventListener("scroll", hideKwTooltip, true);
window.addEventListener("resize", hideKwTooltip);

/* ---- 보유 인격/에고 관리 (localStorage) ---- */
const OWNED_STORAGE_KEY = "limbus_owned_v1";
function buildDefaultOwnedState(){
  const identities = {};
  DATA.forEach(d => { if (d.identity === "LCB 수감자") identities[`${d.sinner}|${d.identity}`] = true; });
  const egos = {};
  Object.values(EGO_DEFAULT).forEach(slug => { egos[slug] = true; });
  return { identities, egos };
}
function loadOwnedState(){
  try {
    const raw = localStorage.getItem(OWNED_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e){}
  return buildDefaultOwnedState();
}
let ownedState = loadOwnedState();
function saveOwnedState(){
  try { localStorage.setItem(OWNED_STORAGE_KEY, JSON.stringify(ownedState)); } catch(e){}
}
function isIdentityOwned(sinner, identity){ return !!ownedState.identities[`${sinner}|${identity}`]; }
function isEgoOwned(slug){ return !!ownedState.egos[slug]; }
function toggleIdentityOwned(sinner, identity){
  const key = `${sinner}|${identity}`;
  if (ownedState.identities[key]) delete ownedState.identities[key];
  else ownedState.identities[key] = true;
  saveOwnedState();
}
function toggleEgoOwned(slug){
  if (ownedState.egos[slug]) delete ownedState.egos[slug];
  else ownedState.egos[slug] = true;
  saveOwnedState();
}

render();

/* ================= 덱 빌더 ================= */
const SINNER_ORDER = ["이상","파우스트","돈키호테","료슈","뫼르소","홍루","히스클리프","이스마엘","로쟈","싱클레어","오티스","그레고르"];

const deckState = {
  assigned: {},      // sinner -> identity name
  activeOrder: [],   // sinner names, click order, max 7
  dead: new Set(),   // sinner names marked as 사망 처리 (우클릭)
  egoAssigned: {},   // sinner -> {ZAYIN:slug|null, TETH:.., HE:.., WAW:.., ALEPH:..}
  skillCounts: {},   // sinner -> {1:n, 2:n, 3:n} (스킬 보유 수량)
  detailMode: false, // 파티 그리드 '상세' 오버레이 표시 여부
  detailTab: "skill", // "skill" | "ego"
  mirrorMode: false,
  battleType: "normal", // "normal" | "focused"
  picker: { sinner: null, tab: "identity", q: "", rarities: new Set(), sins: new Set(), activations: new Set(), identityKw: new Set(), cats: new Set() },
};
function defaultEgoAssigned(sn){
  const out = {};
  EGO_GRADES.forEach(g => { out[g] = null; });
  out.ZAYIN = EGO_DEFAULT[sn] || null;
  return out;
}
SINNER_ORDER.forEach(sn => {
  const lcb = DATA.find(d => d.sinner === sn && d.identity === "LCB 수감자");
  deckState.assigned[sn] = lcb ? lcb.identity : DATA.find(d => d.sinner === sn).identity;
  deckState.egoAssigned[sn] = defaultEgoAssigned(sn);
  deckState.skillCounts[sn] = { ...SKILL_RULE_DEFAULT.defaultSplit };
});

// 현재 장착 E.G.O에 따라 적용되는 스킬 보유 수량 규칙(총합/칸별 상한/기본값)을 반환
function skillRuleFor(sinner){
  const identity = deckState.assigned[sinner];
  const eg = deckState.egoAssigned[sinner] || {};
  for (const grade of EGO_GRADES){
    const slug = eg[grade];
    if (slug){
      const override = SKILL_RULE_OVERRIDE[`${sinner}|${identity}|${slug}`];
      if (override) return override;
    }
  }
  return SKILL_RULE_DEFAULT;
}
function isSkillCountValid(sinner){
  const rule = skillRuleFor(sinner);
  const c = deckState.skillCounts[sinner];
  if (!c) return false;
  const sum = (c[1]||0) + (c[2]||0) + (c[3]||0);
  if (sum !== rule.total) return false;
  if (c[1] < 0 || c[2] < 0 || c[3] < 0) return false;
  if (c[1] > rule.caps[1] || c[2] > rule.caps[2] || c[3] > rule.caps[3]) return false;
  return true;
}

function getAssignedEntry(sinner){
  return DATA.find(d => d.sinner === sinner && d.identity === deckState.assigned[sinner]);
}

function portraitSrc(entry){
  const key = `${entry.sinner}|${entry.identity}`;
  return IDENTITY_PORTRAIT_SYNCED_DATA[key] || IDENTITY_PORTRAIT_NORMAL_DATA[key] || SINNER_ICON_DATA[entry.sinner] || "";
}

// '상세' 모드에서 인격패 위에 표시할 스킬 보유수/E.G.O 편성 오버레이
function skillFrameHTML(sin, size){
  const s = size || 14;
  const iconSrc = sin ? SIN_ICON_DATA[sin] : null;
  const innerSize = Math.round(s * 0.56);
  const iconHTML = iconSrc ? `<img class="skill-frame-sin" src="${iconSrc}" alt="${sin}" width="${innerSize}" height="${innerSize}">` : "";
  return `<span class="skill-frame" style="width:${s}px;height:${s}px;"><img class="skill-frame-bg" src="${UI_ICON_DATA.skillFrame}" alt="" width="${s}" height="${s}">${iconHTML}</span>`;
}
function slotDetailHTML(sinner){
  if (deckState.detailTab === "skill"){
    const prof = IDENTITY_SKILL_PROFILE[`${sinner}|${deckState.assigned[sinner]}`];
    if (!prof) return `<div class="slot-detail"><span class="slot-detail-empty">데이터 없음</span></div>`;
    const counts = deckState.skillCounts[sinner] || SKILL_RULE_DEFAULT.defaultSplit;
    const skillRows = [1,2,3].map(num => {
      const info = prof.skills[num-1];
      const cur = counts[num] || 0;
      return `<div class="slot-detail-row">${skillFrameHTML(info && info.sin, 22)}<span>Skill ${num} x${cur}</span></div>`;
    }).join("");
    const defInfo = prof.defense && prof.defense[0];
    const defRow = `<div class="slot-detail-row">${skillFrameHTML(defInfo && defInfo.sin, 22)}<span>DEF</span></div>`;
    return `<div class="slot-detail">${skillRows}${defRow}</div>`;
  }
  const eg = deckState.egoAssigned[sinner] || {};
  const rows = EGO_GRADES.filter(g => eg[g]).map(g => {
    const slug = eg[g];
    const info = EGO_DATA[slug];
    const color = info && info.sin ? (SIN_COLOR[info.sin] || "#999") : "#999";
    return `<div class="slot-detail-row slot-detail-ego-row">
      <span class="slot-detail-grade">${g}</span>
      <img class="slot-detail-ego-icon" src="${EGO_ICON_DATA[slug]}" style="border-color:${color}" alt="">
    </div>`;
  }).join("");
  return `<div class="slot-detail">${rows || `<span class="slot-detail-empty">장착 없음</span>`}</div>`;
}

function renderPartyGrid(){
  const grid = document.getElementById("partyGrid");
  grid.innerHTML = "";
  SINNER_ORDER.forEach(sinner => {
    const entry = getAssignedEntry(sinner);
    const orderIdx = deckState.activeOrder.indexOf(sinner);
    const isActive = orderIdx >= 0;
    const isDead = deckState.dead.has(sinner);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "party-slot" + (isActive ? " is-active" : "") + (isDead ? " is-dead" : "") + (deckState.detailMode ? " is-detail" : "");
    btn.title = `${sinner} · ${entry.identity}${isDead ? " (사망 처리됨)" : ""}`;
    btn.innerHTML = `
      ${isActive ? `<span class="party-slot-order">${orderIdx+1}</span>` : ""}
      ${isDead ? `<span class="party-slot-dead-badge">💀</span>` : ""}
      <img class="party-slot-icon" src="${portraitSrc(entry)}" alt="${sinner} ${entry.identity}" loading="lazy">
      ${deckState.detailMode ? slotDetailHTML(sinner) : ""}`;
    attachSlotPressEvents(btn, sinner);
    grid.appendChild(btn);
  });
}

function attachSlotPressEvents(el, sinner){
  let timer = null, firedLong = false, moved = false, startX = 0, startY = 0;
  const clear = () => { clearTimeout(timer); timer = null; };
  el.addEventListener("pointerdown", e => {
    if (e.button !== undefined && e.button !== 0) return;
    firedLong = false; moved = false;
    startX = e.clientX; startY = e.clientY;
    clear();
    timer = setTimeout(() => { firedLong = true; openPicker(sinner); }, 900);
  });
  el.addEventListener("pointermove", e => {
    if (Math.abs(e.clientX-startX) > 8 || Math.abs(e.clientY-startY) > 8) moved = true;
    if (moved) clear();
  });
  el.addEventListener("pointerup", e => {
    if (e.button !== undefined && e.button !== 0) return;
    const wasLong = firedLong;
    clear();
    if (!wasLong && !moved) toggleActiveSinner(sinner);
  });
  el.addEventListener("pointerleave", clear);
  el.addEventListener("pointercancel", clear);
  el.addEventListener("contextmenu", e => {
    e.preventDefault();
    clear();
    toggleDeadSinner(sinner);
  });
}

function toggleDeadSinner(sinner){
  if (deckState.dead.has(sinner)) deckState.dead.delete(sinner);
  else deckState.dead.add(sinner);
  renderDeck();
}

function toggleActiveSinner(sinner){
  const idx = deckState.activeOrder.indexOf(sinner);
  if (idx >= 0){
    deckState.activeOrder.splice(idx, 1);
  } else {
    if (deckState.activeOrder.length >= 7) return;
    deckState.activeOrder.push(sinner);
  }
  renderDeck();
}

const NORMAL_BATTLE_CAP = 12;
const FOCUSED_BATTLE_CAP = 7;

function battleCap(){
  return deckState.battleType === "focused" ? FOCUSED_BATTLE_CAP : NORMAL_BATTLE_CAP;
}

// 현재 스킬 보유 수량 설정에 맞춰(0개인 스킬은 제외) 죄악 실 합계를 계산한다. 수비 스킬은 항상 포함.
// includeSpecial=false: 스킬1~3만(보유수 0이면 제외) + 수비 스킬 — 공명(슬롯) 계산용.
// includeSpecial=true : 위에 더해 스킬4 이상(특수 발동 스킬, 보유수 조절 대상이 아님)도 항상 포함 — 보유(누적 실) 계산용.
function profileForSinnerBase(sinner, includeSpecial){
  const prof = IDENTITY_SKILL_PROFILE[`${sinner}|${deckState.assigned[sinner]}`];
  if (!prof) return {};
  const counts = deckState.skillCounts[sinner] || SKILL_RULE_DEFAULT.defaultSplit;
  const sums = {};
  prof.skills.forEach((s, i) => {
    if (!s.sin) return;
    if (i < 3){
      const holdCount = counts[i+1];
      if (holdCount === 0) return; // 완전히 다른 스킬로 교체됨 — 해당 속성 자원 수급/공명 불가
    } else {
      if (!includeSpecial) return; // 특수 발동 스킬은 공명(슬롯) 계산에서 제외
    }
    sums[s.sin] = (sums[s.sin] || 0) + s.tier;
  });
  prof.defense.forEach(d => {
    if (!d.sin) return;
    sums[d.sin] = (sums[d.sin] || 0) + d.tier;
  });
  return sums;
}
function profileForSinnerThread(sinner){ return profileForSinnerBase(sinner, true); }
function profileForSinnerSlot(sinner){ return profileForSinnerBase(sinner, false); }

// 해당 수감자가 편성한 인격이 슬롯 보너스 규칙(SLOT_BONUS_INNATE_DATA)을 갖고 있는지
function slotBonusEntryFor(sinner){
  return SLOT_BONUS_INNATE_DATA[`${sinner}|${deckState.assigned[sinner]}`] || null;
}
// sinner 본인을 제외한, 거미집 소속으로 판정되는 사망 처리 인격 수
function deadGeojipCount(sinner){
  return SINNER_ORDER.filter(sn => sn !== sinner && deckState.dead.has(sn))
    .filter(sn => isGeojipMember(getAssignedEntry(sn))).length;
}
// 항상 자동 적용되는(토글 불필요) 슬롯 보너스 수치
function slotBonusFor(sinner){
  const cfg = slotBonusEntryFor(sinner);
  if (!cfg) return 0;
  const deadCount = deadGeojipCount(sinner);
  return Math.min(cfg.max, Math.floor(deadCount / cfg.deadPerStep) * cfg.bonusPerStep);
}

// 현재 장착된 E.G.O들(등급별 1개씩)이 전부 1회 사용된다고 가정했을 때의 죄악별 추가 기여(고정치, 턴에 비례하지 않음)
function egoBonusForSinner(sinner){
  const eg = deckState.egoAssigned[sinner] || {};
  const bonus = {};
  EGO_GRADES.forEach(grade => {
    const slug = eg[grade];
    if (!slug) return;
    const info = EGO_DATA[slug];
    if (!info || !info.sin) return;
    bonus[info.sin] = (bonus[info.sin] || 0) + 1;
  });
  return bonus;
}

// turns[i] = 죄악 실 합계 상태 at 턴 (i+1). 인원이 0명이면 빈 배열.
// threadTurns[i] = 죄악 실(보유용, 스킬 티어 합산) 상태 at 턴 (i+1)
// slotTurns[i]   = 공명용 슬롯 카운트(그 죄악을 낼 수 있는 인격들의 슬롯 수 합) at 턴 (i+1)
// threadTurnsEgo/slotTurnsEgo = 장착된 E.G.O를 전부 1회씩 사용한다고 가정했을 때의 같은 값(추가 기여는 턴과 무관하게 고정으로 더해짐)
// 사망 처리된 인격은 슬롯 성장에는 그대로 참여하되(상한 계산은 편성 인원 기준 그대로), 실제 죄악 기여는 0으로 취급한다.
// 슬롯 보너스 기프트가 켜진 인격은 매 턴 mult에 보너스가 고정으로 더해진다.
function simulateTurnSums(){
  const order = deckState.activeOrder;
  const N = order.length;
  if (N === 0) return { threadTurns: [], slotTurns: [], threadTurnsEgo: [], slotTurnsEgo: [] };
  const cap = battleCap();
  const slotsFor = {};
  order.forEach(s => { slotsFor[s] = 1; });
  const queue = order.slice();

  const threadSumsNow = (withEgo) => {
    const sums = {};
    order.forEach(s => {
      if (deckState.dead.has(s)) return;
      const profile = profileForSinnerThread(s);
      const mult = slotsFor[s] + slotBonusFor(s);
      for (const sin in profile) sums[sin] = (sums[sin] || 0) + profile[sin] * mult;
      if (withEgo){
        const eb = egoBonusForSinner(s);
        for (const sin in eb) sums[sin] = (sums[sin] || 0) + eb[sin];
      }
    });
    return sums;
  };
  const slotCountsNow = (withEgo) => {
    const counts = {};
    order.forEach(s => {
      if (deckState.dead.has(s)) return;
      const profile = profileForSinnerSlot(s);
      const mult = slotsFor[s] + slotBonusFor(s);
      for (const sin in profile){
        if (profile[sin] > 0) counts[sin] = (counts[sin] || 0) + mult;
      }
      if (withEgo){
        const eb = egoBonusForSinner(s);
        for (const sin in eb) counts[sin] = (counts[sin] || 0) + eb[sin];
      }
    });
    return counts;
  };

  const threadTurns = [threadSumsNow(false)];
  const slotTurns = [slotCountsNow(false)];
  const threadTurnsEgo = [threadSumsNow(true)];
  const slotTurnsEgo = [slotCountsNow(true)];
  let total = N;
  while (total < cap){
    const recipient = queue.shift();
    slotsFor[recipient] += 1;
    queue.push(recipient);
    total += 1;
    threadTurns.push(threadSumsNow(false));
    slotTurns.push(slotCountsNow(false));
    threadTurnsEgo.push(threadSumsNow(true));
    slotTurnsEgo.push(slotCountsNow(true));
  }
  return { threadTurns, slotTurns, threadTurnsEgo, slotTurnsEgo };
}

// 필요한 죄악 조건들을 모두 만족하는 최소 턴 반환. 불가능하면 null.
function minTurnFor(condTerms, turns){
  if (turns.length === 0) return null;
  let maxTurn = 1;
  for (const t of condTerms){
    if (!t.sin) continue;
    const need = parseInt(t.num, 10) || 0;
    let foundTurn = null;
    for (let i = 0; i < turns.length; i++){
      if ((turns[i][t.sin] || 0) >= need){ foundTurn = i + 1; break; }
    }
    if (foundTurn === null) return null;
    if (foundTurn > maxTurn) maxTurn = foundTurn;
  }
  return maxTurn;
}

function computeValidBenchedPassives(){
  const activeSet = new Set(deckState.activeOrder);
  const { threadTurns, slotTurns, threadTurnsEgo, slotTurnsEgo } = simulateTurnSums();

  const benched = SINNER_ORDER.filter(sn => !activeSet.has(sn)).map(sn => getAssignedEntry(sn)).filter(Boolean);

  const out = [];
  benched.forEach(d => {
    if (!d.condTerms.length){ out.push({d, minTurn:null, minTurnEgo:null}); return; }
    if (d.condLabel === "공명"){
      const mt = minTurnFor(d.condTerms, slotTurns);
      const mtEgo = minTurnFor(d.condTerms, slotTurnsEgo);
      if (mt === null && mtEgo === null) return; // 기본으로도, E.G.O를 써도 발동 불가하면 표시하지 않음
      out.push({ d, minTurn: mt, minTurnEgo: mtEgo });
      return;
    }
    if (d.condLabel === "보유"){
      if (deckState.mirrorMode){ out.push({d, minTurn:null, minTurnEgo:null}); return; }
      const mt = minTurnFor(d.condTerms, threadTurns);
      if (mt !== null) out.push({d, minTurn:null, minTurnEgo:null}); // 보유는 턴 배지를 표시하지 않음
      return;
    }
    out.push({d, minTurn:null, minTurnEgo:null});
  });
  return out;
}

function turnLabel(mt){
  if (mt === null) return "발동 불가";
  return mt > 1 ? `최소 ${mt}턴` : "1턴부터";
}

function deckCardHTML(item){
  let html = cardHTML(item.d);
  const bothTrivial = item.minTurn === 1 && item.minTurnEgo === 1;
  if (item.d.condLabel === "공명" && item.d.condTerms.length && !bothTrivial){
    const badgeRow = `<div class="deck-turn-badge-row">
      <span class="deck-turn-badge-col">기본 ${turnLabel(item.minTurn)}</span>
      <span class="deck-turn-badge-divider"></span>
      <span class="deck-turn-badge-col ego">E.G.O 사용시 ${turnLabel(item.minTurnEgo)}</span>
    </div>`;
    html = html.replace('<div class="passive-name">', `${badgeRow}<div class="passive-name">`);
  }
  return html;
}

function renderDeckResults(){
  const valid = computeValidBenchedPassives();
  document.getElementById("deckShownCount").textContent = valid.length;
  const grid = document.getElementById("deckCardGrid");
  const empty = document.getElementById("deckEmptyState");
  if (valid.length === 0){
    grid.innerHTML = "";
    empty.hidden = false;
  } else {
    empty.hidden = true;
    grid.innerHTML = valid.map(deckCardHTML).join("");
  }
  const cap = battleCap();
  const n = deckState.activeOrder.length;
  const hint = document.getElementById("turnCapHint");
  if (n === 0){
    hint.textContent = "";
  } else if (n >= cap){
    hint.textContent = `현재 편성(${n}명)이 이미 슬롯 상한(${cap})이라, 수감자가 쓰러지기 전까지 슬롯이 늘어나지 않습니다.`;
  } else {
    hint.textContent = "";
  }
}

function renderDeckSidePanel(){
  const panel = document.getElementById("deckSidePanel");
  const deadSinners = SINNER_ORDER.filter(sn => deckState.dead.has(sn));
  const bonusCandidates = SINNER_ORDER.filter(sn => slotBonusEntryFor(sn));

  const deadBlock = `
    <div class="filter-group">
      <h2>사망 처리</h2>
      ${deadSinners.length
        ? `<div class="dead-chip-list">${deadSinners.map(sn => {
            const e = getAssignedEntry(sn);
            return `<span class="dead-chip" data-revive="${sn}" title="클릭하면 부활 처리">💀 <img src="${portraitSrc(e)}" alt="">${e.identity}</span>`;
          }).join("")}</div>`
        : `<div class="side-panel-empty">아직 사망 처리된 인격이 없습니다.</div>`}
      <p class="deck-hint" style="margin:0;">인격패를 우클릭하면 사망/부활을 전환합니다.</p>
    </div>`;

  const bonusBlock = bonusCandidates.length
    ? `<div class="filter-group">
        <h2>사망 기반 슬롯 보너스</h2>
        ${bonusCandidates.map(sn => {
          const cfg = slotBonusEntryFor(sn);
          const deadCount = deadGeojipCount(sn);
          const bonus = slotBonusFor(sn);
          return `<div class="gift-bonus-block">
            <p class="deck-hint" style="margin:0;">${sn}(${deckState.assigned[sn]}) 자체 패시브: 거미집 소속 사망 인원 ${cfg.deadPerStep}명당 슬롯 +${cfg.bonusPerStep} (최대 +${cfg.max})</p>
            <p class="gift-bonus-note">거미집 소속 사망 ${deadCount}명 → 현재 보너스 +${bonus}슬롯</p>
          </div>`;
        }).join("")}
      </div>`
    : "";

  panel.innerHTML = deadBlock + bonusBlock;

  panel.querySelectorAll("[data-revive]").forEach(chip => {
    chip.addEventListener("click", () => toggleDeadSinner(chip.dataset.revive));
  });
}

function renderDeck(){
  renderPartyGrid();
  renderDeckResults();
  renderDeckSidePanel();
}

document.getElementById("mirrorToggle").addEventListener("change", e => {
  deckState.mirrorMode = e.target.checked;
  renderDeckResults();
});
document.getElementById("detailToggleBtn").addEventListener("click", () => {
  deckState.detailMode = !deckState.detailMode;
  document.getElementById("detailToggleBtn").setAttribute("aria-pressed", String(deckState.detailMode));
  document.getElementById("detailModeTabs").classList.toggle("is-open", deckState.detailMode);
  renderPartyGrid();
});
document.getElementById("detailModeSkill").addEventListener("click", () => {
  deckState.detailTab = "skill";
  document.getElementById("detailModeSkill").setAttribute("aria-pressed","true");
  document.getElementById("detailModeEgo").setAttribute("aria-pressed","false");
  renderPartyGrid();
});
document.getElementById("detailModeEgo").addEventListener("click", () => {
  deckState.detailTab = "ego";
  document.getElementById("detailModeEgo").setAttribute("aria-pressed","true");
  document.getElementById("detailModeSkill").setAttribute("aria-pressed","false");
  renderPartyGrid();
});
document.getElementById("battleNormal").addEventListener("click", () => {
  deckState.battleType = "normal";
  document.getElementById("battleNormal").setAttribute("aria-pressed","true");
  document.getElementById("battleFocused").setAttribute("aria-pressed","false");
  renderDeckResults();
});
document.getElementById("battleFocused").addEventListener("click", () => {
  deckState.battleType = "focused";
  document.getElementById("battleNormal").setAttribute("aria-pressed","false");
  document.getElementById("battleFocused").setAttribute("aria-pressed","true");
  renderDeckResults();
});
document.getElementById("deckResetAll").addEventListener("click", () => {
  deckState.activeOrder = [];
  deckState.dead.clear();
  SINNER_ORDER.forEach(sn => {
    const lcb = DATA.find(d => d.sinner === sn && d.identity === "LCB 수감자");
    deckState.assigned[sn] = lcb ? lcb.identity : DATA.find(d => d.sinner === sn).identity;
    deckState.egoAssigned[sn] = defaultEgoAssigned(sn);
    deckState.skillCounts[sn] = { ...SKILL_RULE_DEFAULT.defaultSplit };
  });
  renderDeck();
});

/* ---- picker modal ---- */
const pickerView = document.getElementById("pickerView");
function openPicker(sinner){
  deckState.picker = { sinner, tab: "identity", q: "", rarities: new Set(), sins: new Set(), activations: new Set(), identityKw: new Set(), cats: new Set() };
  document.getElementById("pickerTitle").textContent = `${sinner} 인격 선택`;
  document.getElementById("pickerSearchInput").value = "";
  document.getElementById("searchView").hidden = true;
  document.getElementById("searchRow").hidden = true;
  document.getElementById("searchFooter").hidden = true;
  document.getElementById("deckView").hidden = true;
  pickerView.hidden = false;
  renderPickerSinnerSwitch();
  setPickerTab("identity", true);
  renderPicker();
}
function closePicker(){
  pickerView.hidden = true;
  document.getElementById("deckView").hidden = false;
}
function tryClosePicker(){
  if (deckState.picker.tab === "skill" && !isSkillCountValid(deckState.picker.sinner)){
    showSkillError();
    return;
  }
  closePicker();
}
document.getElementById("pickerBack").addEventListener("click", tryClosePicker);
document.addEventListener("keydown", e => { if (e.key === "Escape" && !pickerView.hidden) tryClosePicker(); });

/* ---- 인격 선택 창 안에서 다른 수감자로 바로 전환 ---- */
function renderPickerSinnerSwitch(){
  const wrap = document.getElementById("pickerSinnerSwitch");
  wrap.innerHTML = SINNER_ORDER.map(sn => `
    <button type="button" class="picker-sinner-btn${sn === deckState.picker.sinner ? " is-current" : ""}" data-sinner="${sn}" title="${sn}">
      <img src="${SINNER_ICON_DATA[sn] || ""}" alt="${sn}" loading="lazy">
    </button>`).join("");
  wrap.querySelectorAll("[data-sinner]").forEach(btn => {
    btn.addEventListener("click", () => trySwitchPickerSinner(btn.dataset.sinner));
  });
}
function trySwitchPickerSinner(sinner){
  if (sinner === deckState.picker.sinner) return;
  if (deckState.picker.tab === "skill" && !isSkillCountValid(deckState.picker.sinner)){
    showSkillError();
    return;
  }
  const keepTab = deckState.picker.tab;
  deckState.picker.sinner = sinner;
  deckState.picker.q = "";
  document.getElementById("pickerSearchInput").value = "";
  document.getElementById("pickerTitle").textContent = `${sinner} 인격 선택`;
  renderPickerSinnerSwitch();
  setPickerTab(keepTab, true);
  renderPicker();
}

function pickerPool(){
  return DATA.filter(d => d.sinner === deckState.picker.sinner);
}
function pickerPassesFilters(d){
  const p = deckState.picker;
  if (p.q){
    const terms = p.q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.every(t => d.searchBlob.includes(t) || d.searchBlobNoSpace.includes(t))) return false;
  }
  if (p.rarities.size && !p.rarities.has(d.rarity)) return false;
  if (p.sins.size && ![...p.sins].every(s => d.sins.includes(s))) return false;
  if (p.activations.size && !p.activations.has(d.condLabel)) return false;
  if (p.identityKw.size && ![...p.identityKw].every(k => effectiveKeywords(d).includes(k))) return false;
  if (p.cats.size && ![...p.cats].some(c => d.cats.includes(c))) return false;
  if (state.ownedOnly && !isIdentityOwned(d.sinner, d.identity)) return false;
  return true;
}
function pickerCountFor(filterFn){ return pickerPool().filter(filterFn).length; }

function pickerBuildRarityChips(){
  const container = document.getElementById("pickerRarityChips");
  container.innerHTML = "";
  const pool = pickerPool();
  RARITIES.filter(r => pool.some(d => d.rarity === r)).forEach(r => {
    const btn = document.createElement("button");
    btn.className = "chip rarity-chip"; btn.type = "button";
    btn.setAttribute("aria-pressed", deckState.picker.rarities.has(r));
    const c = pickerCountFor(d => d.rarity === r);
    btn.innerHTML = `<span class="zeros">${r}</span><span class="count">${c}</span>`;
    btn.addEventListener("click", () => {
      const s = deckState.picker.rarities;
      s.has(r) ? s.delete(r) : s.add(r);
      renderPicker();
    });
    container.appendChild(btn);
  });
}
function pickerBuildChipGroup(containerId, items, selectedSet, iconFor){
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  items.forEach(item => {
    const c = pickerCountFor(item.test);
    if (c === 0) return;
    const btn = document.createElement("button");
    btn.className = "chip"; btn.type = "button";
    btn.setAttribute("aria-pressed", selectedSet.has(item.key));
    btn.innerHTML = `${iconFor ? iconFor(item.key) : ""}<span>${item.key}</span><span class="count">${c}</span>`;
    btn.addEventListener("click", () => {
      selectedSet.has(item.key) ? selectedSet.delete(item.key) : selectedSet.add(item.key);
      renderPicker();
    });
    container.appendChild(btn);
  });
}

function renderPickerList(){
  const list = document.getElementById("pickerList");
  const empty = document.getElementById("pickerEmpty");
  const items = pickerPool().filter(pickerPassesFilters);
  if (items.length === 0){
    list.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  list.innerHTML = items.map(d => {
    const isCurrent = deckState.assigned[d.sinner] === d.identity;
    return `<button type="button" class="picker-card${isCurrent ? " is-current" : ""}" data-identity="${d.identity.replace(/"/g,"&quot;")}" title="${d.identity}">
      <img src="${portraitSrc(d)}" alt="${d.identity}" loading="lazy">
      <span class="picker-card-rarity">${d.rarity}</span>
      ${isCurrent ? `<span class="picker-card-current-badge">선택됨</span>` : ""}
    </button>`;
  }).join("");
  list.querySelectorAll(".picker-card").forEach(btn => {
    btn.addEventListener("click", () => {
      deckState.assigned[deckState.picker.sinner] = btn.dataset.identity;
      fixSkillCountIfInvalid(deckState.picker.sinner);
      renderPickerList();
      renderDeck();
    });
  });
}

function renderPicker(){
  pickerBuildRarityChips();
  pickerBuildChipGroup("pickerSinChips", SINS.map(s => ({key:s, test:d=>d.sins.includes(s)})), deckState.picker.sins, s => sinBadgeSVG(s,16));
  pickerBuildChipGroup("pickerActivationChips", ACTIVATIONS.map(a => ({key:a, test:d=>d.condLabel===a})), deckState.picker.activations);
  pickerBuildChipGroup("pickerKwChips", IDENTITY_KW_LIST.map(k => ({key:k, test:d=>effectiveKeywords(d).includes(k)})), deckState.picker.identityKw, k => identityKwIcon(k,14));
  pickerBuildChipGroup("pickerCatChips", CATEGORY_DEFS.map(([label]) => ({key:label, test:d=>d.cats.includes(label)})), deckState.picker.cats);
  buildBundleChips("pickerCategoryBundleChips", deckState.picker.cats, renderPicker);
  renderPickerList();
}
document.getElementById("pickerSearchInput").addEventListener("input", e => {
  deckState.picker.q = e.target.value;
  renderPickerList();
});

// 인격/에고 변경으로 인해 스킬 보유수 규칙(총합·상한)이 바뀌어 현재 값이 더 이상 유효하지 않으면
// 스킬3 보유수를 1씩 줄여서 맞춘다 (예: 사랑과 증오의 이름으로 장착 해제/인격 교체 시 총합 7 -> 6).
// 규칙(총합)이 바뀌어 현재 스킬 보유수가 더 이상 유효하지 않으면, 스킬3에서 차이만큼 더하거나 뺀다.
// (총합이 늘어난 규칙으로 바뀌면 스킬3을 늘리고, 줄어든 규칙으로 바뀌면 스킬3을 줄인다)
function fixSkillCountIfInvalid(sinner){
  const rule = skillRuleFor(sinner);
  const counts = deckState.skillCounts[sinner];
  const sum = (counts[1]||0) + (counts[2]||0) + (counts[3]||0);
  const diff = rule.total - sum;
  if (diff === 0) return;
  const next = counts[3] + diff;
  counts[3] = Math.max(0, Math.min(rule.caps[3], next));
}

/* ---- 에고 편성 탭 ---- */
// EGO 표시명에서 뒤에 붙은 수감자 이름을 뗀다 (예: "오감도 이상" -> "오감도")
function egoShortTitle(info){
  return info.title.replace(new RegExp(`\\s*${info.sinner}$`), "");
}
function renderEgoPicker(){
  const sinner = deckState.picker.sinner;
  const wrap = document.getElementById("egoPickerWrap");
  const bySlugGrade = {};
  const allBySlugGrade = {};
  EGO_GRADES.forEach(g => { bySlugGrade[g] = []; allBySlugGrade[g] = []; });
  Object.entries(EGO_DATA).forEach(([slug, info]) => {
    if (info.sinner !== sinner) return;
    allBySlugGrade[info.grade].push({ slug, ...info });
    const selectedForGrade = (deckState.egoAssigned[sinner] || {})[info.grade];
    if (state.ownedOnly && !isEgoOwned(slug) && selectedForGrade !== slug) return;
    bySlugGrade[info.grade].push({ slug, ...info });
  });

  wrap.innerHTML = EGO_GRADES.map(grade => {
    const items = bySlugGrade[grade];
    const selected = (deckState.egoAssigned[sinner] || {})[grade];
    if (!items.length){
      const msg = allBySlugGrade[grade].length
        ? "보유 중인 E.G.O가 없습니다."
        : `보유한 E.G.O 데이터가 없습니다${grade === "ALEPH" ? " (아직 출시되지 않음)" : ""}.`;
      return `<div class="ego-grade-row"><h3>${grade}</h3><div class="ego-grade-empty">${msg}</div></div>`;
    }
    const noneBtn = `<div class="ego-icon-item">
        <button type="button" class="ego-none-btn${selected ? "" : " is-selected"}" data-grade="${grade}" data-slug="">없음</button>
      </div>`;
    const itemsHTML = items.map(e => `
      <div class="ego-icon-item">
        <button type="button" class="ego-icon-btn${selected === e.slug ? " is-selected" : ""}" data-grade="${grade}" data-slug="${e.slug}"
          style="border-color:${SIN_COLOR[e.sin] || "var(--border-strong)"}" title="${egoShortTitle(e)} (${e.sin})">
          <img src="${EGO_ICON_DATA[e.slug]}" alt="${egoShortTitle(e)}" loading="lazy">
        </button>
        <div class="ego-icon-label">${egoShortTitle(e)}</div>
      </div>`).join("");
    return `<div class="ego-grade-row"><h3>${grade}</h3><div class="ego-icon-grid">${noneBtn}${itemsHTML}</div></div>`;
  }).join("");

  wrap.querySelectorAll("[data-grade]").forEach(btn => {
    btn.addEventListener("click", () => {
      const grade = btn.dataset.grade;
      const slug = btn.dataset.slug || null;
      const cur = deckState.egoAssigned[sinner][grade];
      deckState.egoAssigned[sinner][grade] = (cur === slug) ? null : slug;
      fixSkillCountIfInvalid(sinner);
      renderEgoPicker();
      renderDeckResults();
    });
  });
}

/* ---- 스킬 보유수 설정 탭 ---- */
function renderSkillPicker(){
  const sinner = deckState.picker.sinner;
  const wrap = document.getElementById("skillPickerWrap");
  const identity = deckState.assigned[sinner];
  const prof = IDENTITY_SKILL_PROFILE[`${sinner}|${identity}`];
  const rule = skillRuleFor(sinner);
  const counts = deckState.skillCounts[sinner];

  let rowsHTML;
  if (!prof){
    rowsHTML = `<div class="side-panel-empty">이 인격은 스킬 속성 데이터가 없어 보유 수량이 계산에 반영되지 않습니다.</div>`;
  } else {
    rowsHTML = [1,2,3].map(num => {
      const info = prof.skills[num-1];
      const hexHTML = skillFrameHTML(info && info.sin, 16);
      const cur = counts[num] || 0;
      const cap = rule.caps[num];
      return `<div class="skill-row">
        <div class="skill-row-label">${hexHTML} 스킬 ${num}</div>
        <div class="skill-count-control">
          <button type="button" class="skill-count-btn" data-num="${num}" data-delta="-1" ${cur<=0?"disabled":""}>−</button>
          <span class="skill-count-value">x ${cur}</span>
          <button type="button" class="skill-count-btn" data-num="${num}" data-delta="1" ${cur>=cap?"disabled":""}>+</button>
          <span class="skill-count-max">최대 ${cap}</span>
        </div>
      </div>`;
    }).join("");
  }

  const sum = (counts[1]||0) + (counts[2]||0) + (counts[3]||0);
  const valid = isSkillCountValid(sinner);
  const totalRow = `<div class="skill-total-row${valid ? "" : " is-invalid"}">합계 ${sum} / ${rule.total}${valid ? "" : " — 조건을 만족하지 않습니다"}</div>`;

  wrap.innerHTML = `
    <p class="skill-rule-hint">${sinner}(${identity}) — 총 보유 수량 ${rule.total}개, 스킬1 최대 ${rule.caps[1]} · 스킬2 최대 ${rule.caps[2]} · 스킬3 최대 ${rule.caps[3]}</p>
    ${rowsHTML}
    ${totalRow}
    <div class="skill-error-msg" id="skillErrorMsg" hidden>보유 수량 조건(총합 ${rule.total}, 스킬별 상한)을 만족해야 다른 메뉴로 이동할 수 있습니다.</div>
  `;

  wrap.querySelectorAll(".skill-count-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const num = parseInt(btn.dataset.num, 10);
      const delta = parseInt(btn.dataset.delta, 10);
      const cap = rule.caps[num];
      const next = (counts[num] || 0) + delta;
      if (next < 0 || next > cap) return;
      counts[num] = next;
      renderSkillPicker();
      renderDeckResults();
    });
  });
}
function showSkillError(){
  const el = document.getElementById("skillErrorMsg");
  if (el) el.hidden = false;
}

/* ---- 인격 선택 창 서브탭(인격 편성 / 에고 편성 / 스킬 보유수 설정) ---- */
function setPickerTab(tab, force){
  if (!force && deckState.picker.tab === "skill" && tab !== "skill" && !isSkillCountValid(deckState.picker.sinner)){
    showSkillError();
    return false;
  }
  deckState.picker.tab = tab;
  document.getElementById("pickerTabBtnIdentity").setAttribute("aria-pressed", String(tab === "identity"));
  document.getElementById("pickerTabBtnEgo").setAttribute("aria-pressed", String(tab === "ego"));
  document.getElementById("pickerTabBtnSkill").setAttribute("aria-pressed", String(tab === "skill"));
  document.getElementById("pickerTabIdentity").hidden = tab !== "identity";
  document.getElementById("pickerTabEgo").hidden = tab !== "ego";
  document.getElementById("pickerTabSkill").hidden = tab !== "skill";
  if (tab === "ego") renderEgoPicker();
  if (tab === "skill") renderSkillPicker();
  return true;
}
document.getElementById("pickerTabBtnIdentity").addEventListener("click", () => setPickerTab("identity"));
document.getElementById("pickerTabBtnEgo").addEventListener("click", () => setPickerTab("ego"));
document.getElementById("pickerTabBtnSkill").addEventListener("click", () => setPickerTab("skill"));

/* ---- view tab switching ---- */
const tabSearch = document.getElementById("tabSearch");
const tabDeck = document.getElementById("tabDeck");
function renderOwnedIdentityTab(){
  const wrap = document.getElementById("ownedIdentityWrap");
  wrap.innerHTML = SINNER_ORDER.map((sinner, i) => {
    const identities = DATA.filter(d => d.sinner === sinner);
    const cardsHTML = identities.map(d => {
      const owned = isIdentityOwned(sinner, d.identity);
      return `<button type="button" class="owned-card${owned ? " is-owned" : ""}" data-sinner="${sinner}" data-identity="${d.identity.replace(/"/g,"&quot;")}" title="${d.identity}">
        <div class="owned-card-img-wrap">
          <img src="${portraitSrc(d)}" alt="${d.identity}" loading="lazy">
          ${owned ? `<span class="owned-card-check">✓</span>` : ""}
        </div>
        <span class="owned-card-label">${d.identity}</span>
      </button>`;
    }).join("");
    const sep = i > 0 ? `<div class="owned-sinner-sep"></div>` : "";
    return `${sep}<div class="owned-sinner-label"><img src="${SINNER_ICON_DATA[sinner] || ""}" alt="${sinner}"><span>${sinner}</span></div>
      <div class="owned-chip-grid">${cardsHTML}</div>`;
  }).join("");
  wrap.querySelectorAll(".owned-card").forEach(btn => {
    btn.addEventListener("click", () => {
      toggleIdentityOwned(btn.dataset.sinner, btn.dataset.identity);
      btn.classList.toggle("is-owned");
      const owned = btn.classList.contains("is-owned");
      const imgWrap = btn.querySelector(".owned-card-img-wrap");
      let check = imgWrap.querySelector(".owned-card-check");
      if (owned && !check){
        check = document.createElement("span");
        check.className = "owned-card-check";
        check.textContent = "✓";
        imgWrap.appendChild(check);
      } else if (!owned && check){
        check.remove();
      }
    });
  });
}

function renderOwnedEgoTab(){
  const wrap = document.getElementById("ownedEgoWrap");
  wrap.innerHTML = SINNER_ORDER.map((sinner, i) => {
    const egos = Object.entries(EGO_DATA).filter(([,info]) => info.sinner === sinner)
      .sort((a,b) => {
        const aDef = a[0] === EGO_DEFAULT[sinner] ? 0 : 1;
        const bDef = b[0] === EGO_DEFAULT[sinner] ? 0 : 1;
        if (aDef !== bDef) return aDef - bDef;
        return EGO_GRADES.indexOf(a[1].grade) - EGO_GRADES.indexOf(b[1].grade);
      });
    const cardsHTML = egos.map(([slug, info]) => {
      const owned = isEgoOwned(slug);
      const shortTitle = egoShortTitle(info);
      return `<button type="button" class="owned-ego-card${owned ? " is-owned" : ""}" data-slug="${slug}" title="${shortTitle}">
        <div class="owned-ego-card-img-wrap" style="border-color:${SIN_COLOR[info.sin] || "var(--border-strong)"}">
          <img src="${EGO_ICON_DATA[slug]}" alt="${shortTitle}" loading="lazy">
          ${owned ? `<span class="owned-ego-card-check">✓</span>` : ""}
        </div>
        <span class="owned-ego-card-grade">${info.grade}</span>
        <span class="owned-ego-card-label">${shortTitle}</span>
      </button>`;
    }).join("");
    const sep = i > 0 ? `<div class="owned-sinner-sep"></div>` : "";
    return `${sep}<div class="owned-sinner-label"><img src="${SINNER_ICON_DATA[sinner] || ""}" alt="${sinner}"><span>${sinner}</span></div>
      <div class="owned-chip-grid">${cardsHTML}</div>`;
  }).join("");
  wrap.querySelectorAll(".owned-ego-card").forEach(btn => {
    btn.addEventListener("click", () => {
      toggleEgoOwned(btn.dataset.slug);
      btn.classList.toggle("is-owned");
      const owned = btn.classList.contains("is-owned");
      const imgWrap = btn.querySelector(".owned-ego-card-img-wrap");
      let check = imgWrap.querySelector(".owned-ego-card-check");
      if (owned && !check){
        check = document.createElement("span");
        check.className = "owned-ego-card-check";
        check.textContent = "✓";
        imgWrap.appendChild(check);
      } else if (!owned && check){
        check.remove();
      }
    });
  });
}

let ownedTab = "identity";
function setOwnedTab(tab){
  ownedTab = tab;
  document.getElementById("ownedTabBtnIdentity").setAttribute("aria-pressed", String(tab === "identity"));
  document.getElementById("ownedTabBtnEgo").setAttribute("aria-pressed", String(tab === "ego"));
  document.getElementById("ownedTabIdentity").hidden = tab !== "identity";
  document.getElementById("ownedTabEgo").hidden = tab !== "ego";
  if (tab === "identity") renderOwnedIdentityTab();
  else renderOwnedEgoTab();
}
document.getElementById("ownedTabBtnIdentity").addEventListener("click", () => setOwnedTab("identity"));
document.getElementById("ownedTabBtnEgo").addEventListener("click", () => setOwnedTab("ego"));

const ownedView = document.getElementById("ownedView");
function updateHeaderHeightVar(){
  const header = document.querySelector("header.top");
  if (header) document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
}
window.addEventListener("resize", updateHeaderHeightVar);
function openOwnedView(){
  document.getElementById("searchView").hidden = true;
  document.getElementById("searchRow").hidden = true;
  document.getElementById("searchFooter").hidden = true;
  document.getElementById("skillSetView").hidden = true;
  document.getElementById("deckView").hidden = true;
  pickerView.hidden = true;
  ownedView.hidden = false;
  setOwnedTab(ownedTab);
  updateHeaderHeightVar();
}
function closeOwnedView(){
  ownedView.hidden = true;
  if (tabDeck.getAttribute("aria-pressed") === "true") showDeckView();
  else if (tabSkillSet.getAttribute("aria-pressed") === "true") showSkillSetView();
  else showSearchView();
  renderBoth();
}
document.getElementById("ownedSettingsBtn").addEventListener("click", openOwnedView);
document.getElementById("ownedBack").addEventListener("click", closeOwnedView);
document.addEventListener("keydown", e => { if (e.key === "Escape" && !ownedView.hidden) closeOwnedView(); });
document.getElementById("ownedOnlyToggle").addEventListener("change", e => {
  state.ownedOnly = e.target.checked;
  renderBoth();
  if (!pickerView.hidden){
    if (deckState.picker.tab === "ego") renderEgoPicker();
    else renderPicker();
  }
});

const tabSkillSet = document.getElementById("tabSkillSet");
function showSearchView(){
  tabSearch.setAttribute("aria-pressed","true");
  tabDeck.setAttribute("aria-pressed","false");
  tabSkillSet.setAttribute("aria-pressed","false");
  document.getElementById("searchView").hidden = false;
  document.getElementById("searchRow").hidden = false;
  document.getElementById("searchFooter").hidden = false;
  document.getElementById("skillSetView").hidden = true;
  document.getElementById("deckView").hidden = true;
  pickerView.hidden = true;
  ownedView.hidden = true;
}
function showSkillSetView(){
  tabSearch.setAttribute("aria-pressed","false");
  tabDeck.setAttribute("aria-pressed","false");
  tabSkillSet.setAttribute("aria-pressed","true");
  document.getElementById("searchView").hidden = true;
  document.getElementById("searchRow").hidden = true;
  document.getElementById("searchFooter").hidden = true;
  document.getElementById("skillSetView").hidden = false;
  document.getElementById("deckView").hidden = true;
  pickerView.hidden = true;
  ownedView.hidden = true;
  renderSkillSet();
}
function showDeckView(){
  tabSearch.setAttribute("aria-pressed","false");
  tabDeck.setAttribute("aria-pressed","true");
  tabSkillSet.setAttribute("aria-pressed","false");
  document.getElementById("searchView").hidden = true;
  document.getElementById("searchRow").hidden = true;
  document.getElementById("searchFooter").hidden = true;
  document.getElementById("skillSetView").hidden = true;
  document.getElementById("deckView").hidden = false;
  pickerView.hidden = true;
  ownedView.hidden = true;
  renderDeck();
}
tabSearch.addEventListener("click", showSearchView);
tabDeck.addEventListener("click", showDeckView);
tabSkillSet.addEventListener("click", showSkillSetView);

showDeckView();
updateHeaderHeightVar();
