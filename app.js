
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
function showTooltipAt(term, def, anchorEl){
  kwTooltipTerm.textContent = term;
  kwTooltipDef.textContent = def;
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
  showTooltipAt(term, def, anchorEl);
}
function skillSlotInfo(sinner, identity, num){
  const prof = IDENTITY_SKILL_PROFILE[`${sinner}|${identity}`];
  if (!prof) return null;
  return num === "def" ? (prof.defense && prof.defense[0]) : prof.skills[Number(num)-1];
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
    const info = skillSlotInfo(sinner, identity, num);
    const holdText = num === "def" ? "" : ` · 기본 보유 ${SKILL_RULE_DEFAULT.defaultSplit[num]}개`;
    const def = info && info.sin ? `${info.sin} 속성${holdText}` : `속성 없음${holdText}`;
    showTooltipAt(label, def, slotBtn);
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
const NEUTRAL_HEX_COLOR = "#6f6155"; // 속성이 없을 때(수비 스킬 등) 쓰는 칙칙한 갈회색
function slotDetailHTML(sinner){
  if (deckState.detailTab === "skill"){
    const prof = IDENTITY_SKILL_PROFILE[`${sinner}|${deckState.assigned[sinner]}`];
    if (!prof) return `<div class="slot-detail"><span class="slot-detail-empty">데이터 없음</span></div>`;
    const counts = deckState.skillCounts[sinner] || SKILL_RULE_DEFAULT.defaultSplit;
    const skillRows = [1,2,3].map(num => {
      const info = prof.skills[num-1];
      const color = info && info.sin ? (SIN_COLOR[info.sin] || NEUTRAL_HEX_COLOR) : NEUTRAL_HEX_COLOR;
      const cur = counts[num] || 0;
      return `<div class="slot-detail-row">${SKILL_HEX_SVG(color, 22)}<span>Skill ${num} x${cur}</span></div>`;
    }).join("");
    const defInfo = prof.defense && prof.defense[0];
    const defColor = defInfo && defInfo.sin ? (SIN_COLOR[defInfo.sin] || NEUTRAL_HEX_COLOR) : NEUTRAL_HEX_COLOR;
    const defRow = `<div class="slot-detail-row">${SKILL_HEX_SVG(defColor, 22)}<span>DEF</span></div>`;
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
const SKILL_HEX_SVG = (color, size) => `<svg class="skill-hex" width="${size||14}" height="${size||14}" viewBox="0 0 100 100"><polygon points="25,4 75,4 98,50 75,96 25,96 2,50" fill="none" stroke="${color}" stroke-width="10"/></svg>`;
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
      const hexHTML = info && info.sin ? SKILL_HEX_SVG(SIN_COLOR[info.sin] || "var(--text-faint)") : "";
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
