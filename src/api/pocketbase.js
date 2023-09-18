import PocketBase from 'pocketbase';

const pb = new PocketBase('https://jijo-cafe.pockethost.io/');

const items = [
  {
    title: '왕할메가커피',
    description:
      '우리 할머니께서 즐겨드시던 달달한 믹스 커피 스타일로 만든 카페 지조만의 메가사이즈 커피 음료',
    price: 2900,
    kcal: '468.7kcal',
    weight: '32oz',
    category: [':r3:', '신상품'],
  },
  {
    title: '할메가커피',
    description:
      '우리 할머니께서 즐겨드시던 달달한 믹스 커피 스타일로 만든 카페 지조만의 시원한 커피 음료',
    price: 1900,
    kcal: '281.9kcal',
    weight: '20oz',
    category: [':r3:', '신상품'],
  },
  {
    title: '(HOT)청송 애플 선셋 티플레저',
    description:
      '달콤한 청송 사과청 위에 향긋한 애플티와 진한 블랙티를 층층이 쌓아 가을 하늘의 노을을 담은 가을 한정 베리에이션 티 음료',
    price: 3900,
    kcal: '206.6kcal',
    weight: '20oz',
    category: ['티', '신상품'],
  },
  {
    title: '청송 애플 선셋 티플레저',
    description:
      '달콤한 청송 사과청 위에 향긋한 애플티와 진한 블랙티를 층층이 쌓아 가을 하늘의 노을을 담은 가을 한정 베리에이션 티 음료',
    price: 3900,
    kcal: '203.6kcal',
    weight: '24oz',
    category: ['티', '신상품'],
  },
  {
    title: '청송 애플파이 프라페',
    description:
      '청송사과의 향긋함이 담긴 바삭한 애플파이를 달달한 음료로 재해석한 메가MGC커피만의 가을 한정음료',
    price: 4400,
    kcal: '565.7kcal',
    weight: '20oz',
    category: ['스무디&프라페', '신상품'],
  },
  {
    title: '고흥 유자 하이볼에이드',
    description:
      '상큼한 고흥유자와 청량한 하이볼 맛 음료가 조화롭게 섞여 남도의 바다색을 느낄 수 있는 여름 한정 무알콜 에이드',
    price: 3800,
    kcal: '346kcal',
    weight: '24oz',
    category: ['에이드&주스', '신상품'],
  },
  {
    title: '코코넛 커피 스무디',
    description:
      '바삭하고 고소한 코코넛 칩을 올리고 쌉싸름한 커피와 달콤한 코코넛이 조화로운 스무디',
    price: 4800,
    kcal: '746.5kcal',
    weight: '20oz',
    category: ['스무디&프라페', '신상품'],
  },
  {
    title: '레드오렌지자몽주스',
    description:
      '엄선된 시칠리아 레드오렌지와 자몽이 만난 상큼한 주스에 프로바이오틱스를 더해 건강한 블렌딩 주스',
    price: 4000,
    kcal: '205.3kcal',
    weight: '20oz',
    category: ['에이드&주스', '신상품'],
  },
  {
    title: '샤인머스캣그린주스',
    description:
      '달콤한 샤인머스캣과 케일이 만난 싱그러운 주스에 칼슘을 더해 건강한 블렌딩 주스',
    price: 4000,
    kcal: '218.1kcal',
    weight: '20oz',
    category: ['에이드&주스', '신상품'],
  },
  {
    title: '딸기주스',
    description: '새콤달콤한 딸기주스에 피쉬 콜라겐을 더해 건강한 블렌딩 주스',
    price: 4000,
    kcal: '188.9kcal',
    weight: '20oz',
    category: ['에이드&주스', '신상품'],
  },
  {
    title: '딸기바나나주스',
    description:
      '상큼한 딸기와 부드러운 바나나가 만나, 새콤달콤한 매력이 살아 있는 과일 음료.',
    price: 4000,
    kcal: '246.9kcal',
    weight: '20oz',
    category: ['에이드&주스', '신상품'],
  },
  {
    title: '(HOT)디카페인 에스프레소',
    description: '디카페인으로 만나는 메가MGC커피 에스프레소',
    price: 1500,
    kcal: '6.2kcal',
    weight: 'One size / 2oz',
    category: '디카페인',
  },
  {
    title: '디카페인 젤라또 아포카토',
    description: '바닐라 젤라또에 진한 디카페인 에스프레소를 부어 만든 디저트',
    price: 3200,
    kcal: '162.2kcal',
    weight: 'One size',
    category: '디카페인',
  },
  {
    title: '(HOT)에스프레소 피에노',
    description:
      '크림과 코코아 파우더를 올려 부드럽게 즐길 수 있는 디카페인 에스프레소',
    price: 2400,
    kcal: '99.48kcal',
    weight: 'One size',
    category: ':r3:',
  },
  {
    title: '(HOT)디카페인 아메리카노',
    description:
      '향과 풍미 그대로 카페인만을 낮춰 민감한 분들도 안심하고 매일매일 즐길 수 있는 디카페인 커피',
    price: 2500,
    kcal: '9.4kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '(HOT)디카페인 꿀아메리카노',
    description:
      '디카페인 아메리카노의 묵직한 바디감에 달콤한 사양벌꿀이 소프트하게 어우러진 커피.',
    price: 3700,
    kcal: '149.3kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '(HOT)디카페인 헤이즐넛 아메리카노',
    description:
      '디카페인 아메리카노에 헤이즐넛의 풍성한 향과 달콤함을 담아 향긋하고 부드럽게 즐기는 커피.',
    price: 3700,
    kcal: '84.2kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '(HOT)디카페인 바닐라 아메리카노',
    description:
      '디카페인 아메리카노에 바닐라의 부드러운 향과 달콤함을 조화롭게 담아낸 커피.',
    price: 3700,
    kcal: '83.0kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '(HOT)디카페인 카페라떼',
    description:
      '디카페인 에스프레소와 부드러운 우유가 어우러져 고소한 풍미를 완성한 라떼.',
    price: 3900,
    kcal: '178.5kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '(HOT)디카페인 카푸치노',
    description:
      '디카페인 에스프레소와 부드러운 우유가 어우러져 고소한 풍미를 완성한 카푸치노.',
    price: 3900,
    kcal: '152.9kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '(HOT)디카페인 바닐라라떼',
    description:
      '디카페인으로 즐기는 바닐라의 짙은 향과 풍부한 폼 밀크의 조화가 인상적인 달콤한 라떼.',
    price: 4400,
    kcal: '233.7kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '(HOT)디카페인 헤이즐넛 라떼',
    description:
      '부드러운 카페라떼에 헤이즐넛의 풍부한 향과 달콤함을 담아 향긋하게 즐길 수 있는 디카페인 라떼.',
    price: 4400,
    kcal: '240.0kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '(HOT)디카페인 카라멜마끼아또',
    description:
      '폼 밀크 속에 진한 디카페인 에스프레소와 달콤한 카라멜을 가미해 부드럽게 즐기는 커피',
    price: 4700,
    kcal: '238.5kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '(HOT)디카페인 연유라떼',
    description:
      '디카페인 에스프레소 샷, 부드러운 우유 그리고 달콤한 연유가 조화롭게 어우러진 라떼.',
    price: 4900,
    kcal: '301.5kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '(HOT)디카페인 카페모카',
    description:
      '초코를 만나 풍부해진 디카페인 에스프레소와 고소한 우유, 부드러운 휘핑크림까지 더해 달콤하게 즐기는 커피.',
    price: 4900,
    kcal: '430.3kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '(HOT)디카페인 티라미수라떼',
    description:
      '디카페인 에스프레소와 티라미수 소스 & 우유 그리고 풍미를 더해주는 달달한 크림까지 곁들여 완성한 티라미수 라떼.',
    price: 4900,
    kcal: '436.7kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '디카페인 아메리카노',
    description:
      '향과 풍미 그대로 카페인만을 낮춰 민감한 분들도 안심하고 매일매일 즐길 수 있는 디카페인 커피',
    price: 3000,
    kcal: '9.5kcal',
    weight: 'One size / 24oz',
    category: '디카페인',
  },
  {
    title: '디카페인 지조리카노',
    description:
      '카페 지조 디카페인 아메리카노를 "960ml" 더 크고 가볍게 즐길 수 있는 대용량 커피',
    price: 4500,
    kcal: '17.1kcal',
    weight: 'One size / 32oz',
    category: '디카페인',
  },
  {
    title: '디카페인 꿀아메리카노',
    description:
      '디카페인 아메리카노의 묵직한 바디감에 달콤한 사양벌꿀이 소프트하게 어우러진 커피.',
    price: 3700,
    kcal: '137.4kcal',
    weight: 'One size / 24oz',
    category: '디카페인',
  },
  {
    title: '디카페인 헤이즐넛 아메리카노',
    description:
      '디카페인 아메리카노에 헤이즐넛의 풍성한 향과 달콤함을 담아 향긋하고 부드럽게 즐기는 커피.',
    price: 3700,
    kcal: '108.7kcal',
    weight: 'One size / 24oz',
    category: '디카페인',
  },
  {
    title: '디카페인 바닐라 아메리카노',
    description:
      '디카페인 아메리카노에 바닐라의 부드러운 향과 달콤함을 조화롭게 담아낸 커피.',
    price: 3700,
    kcal: '107.5kcal',
    weight: 'One size / 24oz',
    category: '디카페인',
  },
  {
    title: '디카페인 카페라떼',
    description:
      '디카페인 에스프레소와 부드러운 우유가 어우러져 고소한 풍미를 완성한 라떼.',
    price: 3900,
    kcal: '147.7kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '디카페인 카푸치노',
    description:
      '디카페인 에스프레소 위에 올려진 우유 거품, 그리고 시나몬 파우더로 완성한 조화로운 맛의 커피.',
    price: 3900,
    kcal: '127.0kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '디카페인 바닐라라떼',
    description:
      '디카페인으로 즐기는 바닐라의 짙은 향과 풍부한 폼 밀크의 조화가 인상적인 달콤한 라떼.',
    price: 4400,
    kcal: '239.3kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '디카페인 헤이즐넛 라떼',
    description:
      '부드러운 카페라떼에 헤이즐넛의 풍부한 향과 달콤함을 담아 향긋하게 즐길 수 있는 디카페인 라떼.',
    price: 4400,
    kcal: '237.0kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '디카페인 카라멜마끼아또',
    description:
      '폼 밀크 속에 진한 디카페인 에스프레소와 달콤한 카라멜을 가미해 부드럽게 즐기는 커피',
    price: 4700,
    kcal: '232.9kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '디카페인 카페모카',
    description:
      '초코를 만나 풍부해진 디카페인 에스프레소와 고소한 우유, 부드러운 휘핑크림까지 더해 달콤하게 즐기는 커피.',
    price: 4900,
    kcal: '319.7kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '디카페인 티라미수라떼',
    description:
      '디카페인 에스프레소와 티라미수 소스 & 우유 그리고 풍미를 더해주는 달달한 크림까지 곁들여 완성한 티라미수 라떼.',
    price: 4900,
    kcal: '404.3kcal',
    weight: 'One size / 20oz',
    category: '디카페인',
  },
  {
    title: '딸기라떼',
    description:
      '산뜻하고 달콤한 딸기가 부드러운 우유와 어우러져 더욱 기분 좋게 즐기는 아이스 라떼.',
    price: 3700,
    kcal: '366.4kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '딸기쿠키프라페',
    description:
      '부드러운 바닐라와 달달한 딸기, 바삭한 오레오 쿠키가 달콤한 하모니를 선물하는 프라페.',
    price: 3900,
    kcal: '564.1kcal',
    weight: 'One size / 20oz',
    category: '스무디&프라페',
  },
  {
    title: '콜드브루디카페인',
    description:
      '카페인을 줄였지만, 원두 본연의 향미를 풍부하게 살려 맛을 잡은 디카페인 콜드브루.',
    price: 3500,
    kcal: '7.7kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)콜드브루디카페인',
    description:
      '카페인을 줄였지만, 원두 본연의 향미를 풍부하게 살려 맛을 잡은 디카페인 콜드브루.',
    price: 3500,
    kcal: '9.4kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '콜드브루디카페인라떼',
    description:
      '우유와 만나 부드럽고 고소한 풍미가 더해진 콜드브루 디카페인 라떼.',
    price: 4000,
    kcal: '140.8kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)콜드브루디카페인라떼',
    description:
      '우유와 만나 부드럽고 고소한 풍미가 더해진 콜드브루 디카페인 라떼.',
    price: 4000,
    kcal: '153.8kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)에스프레소',
    description: '메가MGC커피 원두의 향미를 온전히 즐길 수 있는 에스프레소',
    price: 1500,
    kcal: '7.6kcal',
    weight: '2oz',
    category: ':r3:',
  },
  {
    title: '(HOT)에스프레소 도피오',
    description: '더블샷으로 더욱 진하게 즐길 수 있는 에스프레소',
    price: 2000,
    kcal: '15.2kcal',
    weight: '5oz',
    category: ':r3:',
  },
  {
    title: '(HOT)에스프레소 피에노',
    description: '크림과 코코아 파우더를 올려 부드럽게 즐길 수 있는 에스프레소',
    price: 2400,
    kcal: '112.4kcal',
    weight: '5oz',
    category: ':r3:',
  },
  {
    title: '젤라또 아포가토',
    description: '바닐라 젤라또에 진한 에스프레소를 부어 만든 디저트',
    price: 2400,
    kcal: '155.8kcal',
    weight: '10oz',
    category: ':r3:',
  },
  {
    title: '쿠키프라페',
    description:
      '바삭하고 달콤한 오레오와 고소한 우유, 부드러운 바닐라향의 조화를 느낄 수 있는 프라페.',
    price: 3900,
    kcal: '640.7kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)고구마라떼',
    description:
      '달콤하고 고소한 고구마와 부드러운 우유가 만나 누구나 즐기기 좋은 든든한 라떼.',
    price: 3500,
    kcal: '310.5kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)곡물라떼',
    description: '우유에 곡물을 더해 고소하고 든든하게 즐기는 라떼.',
    price: 3000,
    kcal: '389.0kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '(HOT)메가초코',
    description:
      '부드러운 우유에 진한 초코소스, 달콤한 휘핑크림의 삼박자 조화로 완성한 달콤 초코 음료.',
    price: 3800,
    kcal: '507.0kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '(HOT)토피넛라떼',
    description:
      '은은하게 퍼지는 카라멜의 달달한 향기와 견과의 고소함을 한입에 즐길 수 있는 라떼.',
    price: 3800,
    kcal: '368.0kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '고구마라떼',
    description:
      '달콤하고 고소한 고구마와 부드러운 우유가 만나 누구나 즐기기 좋은 든든한 라떼.',
    price: 3500,
    kcal: '248.8kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '곡물라떼',
    description: '우유에 곡물을 더해 고소하고 든든하게 즐기는 라떼.',
    price: 3000,
    kcal: '390.4kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '오레오초코라떼',
    description:
      '진한 초코와 리얼 오레오를 블렌딩해 씹는 맛을 더한 달콤한 아이스 라떼.',
    price: 3900,
    kcal: '485.6kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '토피넛라떼',
    description:
      '은은하게 퍼지는 카라멜의 달달한 향기와 견과의 고소함을 한입에 즐길 수 있는 라떼.',
    price: 3800,
    kcal: '364.5kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '흑당버블밀크티라떼',
    description:
      '타바론 얼그레이 홍차의 깊은 맛을 살린 일크티 라떼에 진한 흑당과 흑당 버블의 달콤함을 채운 음료.',
    price: 3800,
    kcal: '330.2kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '(HOT)핫초코',
    description:
      '부드러운 우유에 진한 초코소스가 어우러져 달콤하게 입맛을 깨우는 초콜릿 음료.',
    price: 3500,
    kcal: '374.9kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '(HOT)녹차라떼',
    description:
      '향긋한 녹차에 우유를 더해 입 안에 부드러운 푸릇함을 선물하는 라떼.',
    price: 3500,
    kcal: '280.4kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '(HOT)로얄밀크티라떼',
    description:
      '우유와 은은한 홍차가 어우러져 부드럽고 향긋한 한 모금을 완성한 라떼.',
    price: 3700,
    kcal: '232.0kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '흑당라떼',
    description:
      '모리셔스의 진한 흑당과 부드러운 우유가 달콤하게 조화를 이루는 라떼.',
    price: 3300,
    kcal: '322.0kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '흑당밀크티라떼',
    description:
      '타바론 얼그레이 홍차의 깊은 맛을 살린 일크티 라떼에 진한 흑당의 달콤함을 채운 음료.',
    price: 3500,
    kcal: '300.5kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '흑당버블라떼',
    description:
      '모리셔스의 진한 흑당과 부드러운 우유가 달콤한 조화에 흑당 버블을 함께 즐기는 라떼.',
    price: 3700,
    kcal: '320.3kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '아이스초코',
    description:
      '부드러운 우유에 진한 초코소스가 어우러져 달콤하게 입맛을 깨우는 초콜릿 음료.',
    price: 3500,
    kcal: '308.0kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '녹차라떼',
    description:
      '향긋한 녹차에 우유를 더해 입 안에 부드러운 푸릇함을 선물하는 라떼.',
    price: 3500,
    kcal: '308.0kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '로얄밀크티라떼',
    description:
      '우유와 은은한 홍차가 어우러져 부드럽고 향긋한 한 모금을 완성한 라떼.',
    price: 3700,
    kcal: '254.6kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '(HOT)아메리카노',
    description:
      '[기본2샷]메가MGC커피 블렌드 원두로 추출한 에스프레소에 물을 더해, 풍부한 바디감을 느낄 수 있는 스탠다드 커피.',
    price: 1500,
    kcal: '12.2kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)티라미수라떼',
    description:
      '에스프레소와 티라미수 소스 & 우유 그리고 풍미를 더해주는 달달한 크림까지 곁들여 완성한 티라미수 라떼.',
    price: 3900,
    kcal: '419.5kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '지조리카노',
    description:
      '깊고 진한 카페 지조 아메리카노를 "960ml" 더 큼직하게 즐길 수 있는 대용량 커피.',
    price: 3000,
    kcal: '16.7kcal',
    weight: 'One size / 32oz',
    category: ':r3:',
  },
  {
    title: '티라미수라떼',
    description:
      '에스프레소와 티라미수 소스 & 우유 그리고 풍미를 더해주는 달달한 크림까지 곁들여 완성한 티라미수 라떼.',
    price: 3900,
    kcal: '400.6kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)꿀아메리카노',
    description:
      '아메리카노의 묵직한 바디감에 달콤한 사양벌꿀이 소프트하게 어우러진 커피.',
    price: 2700,
    kcal: '172.4kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)바닐라라떼',
    description:
      '바닐라의 짙은 향과 풍부한 폼 밀크의 조화가 인상적인 달콤한 라떼.',
    price: 3400,
    kcal: '231.9kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)바닐라아메리카노',
    description:
      '아메리카노에 바닐라의 부드러운 향과 달콤함을 조화롭게 담아낸 커피.',
    price: 2700,
    kcal: '84.3kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)연유라떼',
    description:
      '향기로운 에스프레소 샷, 부드러운 우유 그리고 달콤한 연유가 조화롭게 어우러진 라떼.',
    price: 3900,
    kcal: '321.6kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)카라멜마끼아또',
    description:
      '폼 밀크 속에 진한 에스프레소와 달콤한 카라멜을 가미해 부드럽게 즐기는 커피.',
    price: 3700,
    kcal: '244.9kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)카페라떼',
    description:
      '진한 에스프레소와 부드러운 우유가 어우러져 고소한 풍미를 완성한 라떼.',
    price: 2900,
    kcal: '175.4kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)카페모카',
    description:
      '초코를 만나 풍부해진 에스프레소와 고소한 우유, 부드러운 휘핑크림까지 더해 달콤하게 즐기는 커피.',
    price: 3900,
    kcal: '380.9kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)카푸치노',
    description:
      '에스프레소 위에 올려진 우유 거품, 그리고 시나몬 파우더로 완성한 조화로운 맛의 커피.',
    price: 2900,
    kcal: '145.5kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)콜드브루라떼',
    description:
      '콜드브루에 고소한 우유를 섞어, 깔끔함과 부드러움을 잡은 라떼.',
    price: 4000,
    kcal: '164.2kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)콜드브루오리지널',
    description:
      '차가운 물에 장시간 우려내 깔끔한 목넘김을 느낄 수 있는 콜드브루.',
    price: 3500,
    kcal: '10.6kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)헤이즐넛라떼',
    description:
      '부드러운 카페라떼에 헤이즐넛의 풍부한 향과 달콤함을 담아 향긋하게 즐길 수 있는 라떼.',
    price: 3400,
    kcal: '240.5kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '(HOT)헤이즐넛아메리카노',
    description:
      '아메리카노에 헤이즐넛의 풍성한 향과 달콤함을 담아 향긋하고 부드럽게 즐기는 커피.',
    price: 2700,
    kcal: '82.7kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '꿀아메리카노',
    description:
      '아메리카노의 묵직한 바디감에 달콤한 사양벌꿀이 소프트하게 어우러진 커피.',
    price: 2700,
    kcal: '162.2kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '바닐라라떼',
    description:
      '바닐라의 짙은 향과 풍부한 폼 밀크의 조화가 인상적인 달콤한 라떼.',
    price: 3400,
    kcal: '244.2kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '바닐라아메리카노',
    description:
      '아메리카노에 바닐라의 부드러운 향과 달콤함을 조화롭게 담아낸 커피.',
    price: 2700,
    kcal: '121.9kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '카라멜마끼아또',
    description:
      '폼 밀크 속에 진한 에스프레소와 달콤한 카라멜을 가미해 부드럽게 즐기는 커피.',
    price: 3700,
    kcal: '243.9kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '카페라떼',
    description:
      '진한 에스프레소와 부드러운 우유가 어우러져 고소한 풍미를 완성한 라떼.',
    price: 2900,
    kcal: '145.1kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '카페모카',
    description:
      '초코를 만나 풍부해진 에스프레소와 고소한 우유, 부드러운 휘핑크림까지 더해 달콤하게 즐기는 커피.',
    price: 3900,
    kcal: '305.4kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '카푸치노',
    description:
      '에스프레소 위에 올려진 우유 거품, 그리고 시나몬 파우더로 완성한 조화로운 맛의 커피.',
    price: 2900,
    kcal: '132.4kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '콜드브루라떼',
    description:
      '콜드브루에 고소한 우유를 섞어, 깔끔함과 부드러움을 잡은 라떼.',
    price: 4000,
    kcal: '167.6kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '콜드브루오리지널',
    description:
      '차가운 물에 장시간 우려내 깔끔한 목넘김을 느낄 수 있는 콜드브루.',
    price: 4000,
    kcal: '7.2kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '헤이즐넛라떼',
    description:
      '부드러운 카페라떼에 헤이즐넛의 풍부한 향과 달콤함을 담아 향긋하게 즐길 수 있는 라떼.',
    price: 3400,
    kcal: '237.4kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '헤이즐넛아메리카노',
    description:
      '아메리카노에 헤이즐넛의 풍성한 향과 달콤함을 담아 향긋하고 부드럽게 즐기는 커피.',
    price: 2700,
    kcal: '113.6kcal',
    weight: 'One size / 24oz',
    category: ':r3:',
  },
  {
    title: '큐브라떼',
    description:
      '연유를 섞은 라떼에 에스프레소를 얼린 커피큐브를 올려, 녹을수록 더 진한 커피가 느껴지는 라떼.',
    price: 4200,
    kcal: '304.4kcal',
    weight: 'One size / 20oz',
    category: ':r3:',
  },
  {
    title: '메가초코',
    description:
      '부드러운 우유에 진한 초코소스, 달콤한 휘핑크림의 삼박자 조화로 완성한 달콤 초코 음료.',
    price: 3800,
    kcal: '397.2kcal',
    weight: 'One size / 20oz',
    category: '음료',
  },
  {
    title: '아메리카노',
    description:
      '[기본2샷]카페 지조 블렌드 원두로 추출한 에스프레소에 물을 더해, 풍부한 바디감을 느낄 수 있는 스탠다드 커피.',
    price: 2000,
    kcal: '12.2kcal',
    weight: 'One size / 24oz',
    category: ':r3:',
  },
  {
    title: '녹차프라페',
    description:
      '향긋한 녹차 위에 우유와 휘핑크림을 더해 더 부드럽게 즐길 수 있는 프라페.',
    price: 3900,
    kcal: '571.1kcal',
    weight: 'One size / 20oz',
    category: '스무디&프라페',
  },
  {
    title: '딸기요거트스무디',
    description:
      '요거트의 상큼함과 딸기의 상큼함을 상냥하게 어우른 상큼 스무디.',
    price: 3900,
    kcal: '401.4kcal',
    weight: 'One size / 20oz',
    category: '스무디&프라페',
  },
  {
    title: '딸기퐁크러쉬',
    description:
      '바삭하고 달달한 퐁에 상큼한 딸기와 부드러운 우유, 얼음을 함께 블렌딩해 시원하게 즐기는 프라페.',
    price: 3900,
    kcal: '536.9kcal',
    weight: 'One size / 20oz',
    category: '스무디&프라페',
  },
  {
    title: '리얼초코프라페',
    description:
      '진한 초코소스와 부드러운 바닐라향의 만남으로 질리지 않는 달콤함을 완성한 프라페.',
    price: 3900,
    kcal: '651.1kcal',
    weight: 'One size / 20oz',
    category: '스무디&프라페',
  },
  {
    title: '망고요거트스무디',
    description:
      '열대과일 망고의 진한 단 맛과 산뜻한 요거트의 하모니가 인상적인 스무디.',
    price: 3900,
    kcal: '374.9kcal',
    weight: 'One size / 20oz',
    category: '스무디&프라페',
  },
  {
    title: '민트프라페',
    description:
      '상쾌한 민트에 달콤하게 씹는 재미를 더한 초콜릿칩의 즐거운 하모니가 매력적인 프라페.',
    price: 3900,
    kcal: '511.7kcal',
    weight: 'One size / 20oz',
    category: '스무디&프라페',
  },
  {
    title: '바나나퐁크러쉬',
    description:
      '바삭하고 달달한 퐁에 부드러운 바나나와 우유, 얼음을 함께 블렌딩해 부드럽고 시원하게 즐기는 프라페.',
    price: 3900,
    kcal: '593.8kcal',
    weight: 'One size / 20oz',
    category: '스무디&프라페',
  },
  {
    title: '스트로베리치즈홀릭',
    description:
      '상큼한 딸기 요거트 스무디 위에 고급스런 맛의 치즈케이크가 듬뿍 올라가 먹는 재미를 배가한 스무디.',
    price: 4500,
    kcal: '502.4kcal',
    weight: 'One size / 20oz',
    category: '스무디&프라페',
  },
  {
    title: '초코허니퐁크러쉬',
    description:
      '리얼 벌꿀이 들어가 더 달콤한 퍼프허니 시리얼과 부드럽게 달달한 초코가 함께 만드는 즐거운 맛의 프라페.',
    price: 3900,
    kcal: '506.2kcal',
    weight: 'One size / 20oz',
    category: '스무디&프라페',
  },
  {
    title: '커피프라페',
    description:
      '바삭한 쿠키와 부드러운 바닐라에 향긋한 에스프레소를 섞어 만든 힐링 프라페.',
    price: 3900,
    kcal: '420.4kcal',
    weight: 'One size / 20oz',
    category: [':r3:', '스무디&프라페'],
  },
  {
    title: '플레인요거트스무디',
    description:
      '더 시원하게 요거트의 새콤달콤한 맛을 오롯이 만끽할 수 있는 스무디.',
    price: 3900,
    kcal: '516.5kcal',
    weight: 'One size / 20oz',
    category: '스무디&프라페',
  },
  {
    title: '슈크림허니퐁크러쉬',
    description:
      '바닐라빈 향을 머금은 부드러운 슈크림과 리얼 벌꿀이 들어간 퍼프허니 시리얼을 시원하게 즐기는 프라페.',
    price: 3900,
    kcal: '568.1kcal',
    weight: 'One size / 20oz',
    category: '스무디&프라페',
  },
  {
    title: '플레인퐁크러쉬',
    description:
      '우유에 죠리퐁 씨리얼이 믹싱 된 얼음을 갈아 만든 시원한 프라페음료',
    price: 3900,
    kcal: '468.6kcal',
    weight: 'One size / 20oz',
    category: '스무디&프라페',
  },
  {
    title: '라임모히또',
    description:
      '상큼한 라임과 달콤한 향기의 애플민트가 어우러져 상쾌함을 한잔에 가득 채운 모히또 음료.',
    price: 3800,
    kcal: '278.6kcal',
    weight: 'One size / 24oz',
    category: '음료',
  },
  {
    title: '레몬에이드',
    description:
      '시트러스향 가득한 레몬의 상큼함과 톡쏘는 탄산의 상쾌함이 만난 청량 에이드.',
    price: 3500,
    kcal: '196.8kcal',
    weight: 'One size / 24oz',
    category: '에이드&주스',
  },
  {
    title: '블루레몬에이드',
    description:
      '레몬에이드의 상큼한 청량감에 블루큐라소의 진한 향미를 더한 에이드.',
    price: 3500,
    kcal: '225.0kcal',
    weight: 'One size / 24oz',
    category: '에이드&주스',
  },
  {
    title: '자몽에이드',
    description:
      '자몽의 달콤쌉싸름한 맛과 탄산의 톡쏘는 목넘김이 어우러진 트로피컬 에이드.',
    price: 3500,
    kcal: '203.8kcal',
    weight: 'One size / 24oz',
    category: '에이드&주스',
  },
  {
    title: '청포도에이드',
    description: '산뜻한 청포도와 상쾌한 탄산의 달달한 조화가 인상적인 에이드.',
    price: 3500,
    kcal: '305.4kcal',
    weight: 'One size / 24oz',
    category: '에이드&주스',
  },
  {
    title: '유니콘매직에이드(핑크)',
    description:
      '섞으면 마법처럼 색이 변하는 재미에 레몬의 상큼함으로 입까지 즐거운 이색 에이드.',
    price: 3800,
    kcal: '219.9kcal',
    weight: 'One size / 24oz',
    category: '에이드&주스',
  },
  {
    title: '유니콘매직에이드(블루)',
    description:
      '섞으면 마법처럼 색이 변하는 재미에 라임의 청량함으로 입까지 즐거운 이색 에이드.',
    price: 3800,
    kcal: '275.5kcal',
    weight: 'One size / 24oz',
    category: '에이드&주스',
  },
  {
    title: '체리콕',
    description:
      '체리의 새콤함과 청량감을 동시에 즐길 수 있는 환상적인 에이드.',
    price: 3300,
    kcal: '323.6kcal',
    weight: 'One size / 24oz',
    category: '에이드&주스',
  },
  {
    title: '지조에이드',
    description:
      '상큼한 레몬, 상쾌한 라임, 달콤쌉싸름한 자몽의 3색 맛을 한데 어우른 카페 지조 시그니처 에이드.',
    price: 3900,
    kcal: '292.4kcal',
    weight: 'One size / 24oz',
    category: '에이드&주스',
  },
  {
    title: '(HOT)녹차',
    description:
      '고소한 감칠맛과 부드러운 목넘김으로 산뜻하게 마음을 위로하는 국내산 녹차.',
    price: 2500,
    kcal: '0.7kcal',
    weight: 'One size / 20oz',
    category: '티',
  },
  {
    title: '(HOT)사과유자차',
    description:
      '애플티의 향긋함과 유자청의 상큼달콤함을 한컵에 담아낸 과일티.',
    price: 3500,
    kcal: '227.1kcal',
    weight: 'One size / 20oz',
    category: '티',
  },
  {
    title: '얼그레이',
    description: '홍차 특유의 풍부한 플레이버를 만끽할 수 있는 허브티.',
    price: 2500,
    kcal: '0.7kcal',
    weight: 'One size / 20oz',
    category: '티',
  },
  {
    title: '캐모마일',
    description: '마음을 진정 시켜주는 산뜻한 풀내음을 느낄 수 있는 허브티.',
    price: 2500,
    kcal: '0.5kcal',
    weight: 'One size / 20oz',
    category: '티',
  },
  {
    title: '페퍼민트',
    description: '멘톨향의 묵직한 청량감, 상쾌한 맛과 향이 인상적인 허브티.',
    price: 2500,
    kcal: '0.2kcal',
    weight: 'One size / 20oz',
    category: '티',
  },
  {
    title: '녹차',
    description:
      '고소한 감칠맛과 부드러운 목넘김으로 산뜻하게 마음을 위로하는 국내산 녹차.',
    price: 2500,
    kcal: '1.0kcal',
    weight: 'One size / 20oz',
    category: '티',
  },
  {
    title: '사과유자차',
    description:
      '애플티의 향긋함과 유자청의 상큼달콤함을 한컵에 담아낸 과일티.',
    price: 3500,
    kcal: '242.2kcal',
    weight: 'One size / 24oz',
    category: '티',
  },
  {
    title: '얼그레이',
    description: '홍차 특유의 풍부한 플레이버를 만끽할 수 있는 허브티.',
    price: 2500,
    kcal: '1.3kcal',
    weight: 'One size / 24oz',
    category: '티',
  },
  {
    title: '캐모마일',
    description: '마음을 진정 시켜주는 산뜻한 풀내음을 느낄 수 있는 허브티.',
    price: 2500,
    kcal: '1.3kcal',
    weight: 'One size / 24oz',
    category: '티',
  },
  {
    title: '페퍼민트',
    description: '멘톨향의 묵직한 청량감, 상쾌한 맛과 향이 인상적인 허브티.',
    price: 2500,
    kcal: '2.5kcal',
    weight: 'One size / 24oz',
    category: '티',
  },
  {
    title: '복숭아아이스티',
    description:
      '깊은 맛의 홍차와 달콤한 복숭아의 은은한 향이 어우러진 시원한 여름철 인기 음료.',
    price: 3000,
    kcal: '297.1kcal',
    weight: 'One size / 24oz',
    category: '티',
  },
  {
    title: '유자차',
    description:
      '비타민이 가득 든 상큼달콤한 유자를 듬뿍 넣어 향긋한 즐거움을 전하는 과일티.',
    price: 3300,
    kcal: '286.4kcal',
    weight: 'One size / 20oz',
    category: '티',
  },
  {
    title: '레몬차',
    description: '상큼한 레몬의 맛과 향을 오롯이 살린 비타민C 가득한 과일티.',
    price: 3300,
    kcal: '275.5kcal',
    weight: 'One size / 20oz',
    category: '티',
  },
  {
    title: '(HOT)자몽차',
    description:
      '달콤쌉싸름한 자몽의 조화로운 맛을 한 잔 가득 느낄 수 있는 과일티.',
    price: 3300,
    kcal: '294.0kcal',
    weight: 'One size / 20oz',
    category: '티',
  },
  {
    title: '(HOT)허니자몽블랙티',
    description:
      '달콤한 꿀청에 재운 자몽에 홍차의 부드러움을 어우른 상큼한 과일티.',
    price: 3700,
    kcal: '302.2kcal',
    weight: 'One size / 20oz',
    category: '티',
  },
  {
    title: '유자차',
    description:
      '비타민이 가득 든 상큼달콤한 유자를 듬뿍 넣어 향긋한 즐거움을 전하는 과일티.',
    price: 3300,
    kcal: '303.1kcal',
    weight: 'One size / 24oz',
    category: '티',
  },
  {
    title: '레몬차',
    description: '상큼한 레몬의 맛과 향을 오롯이 살린 비타민C 가득한 과일티.',
    price: 3300,
    kcal: '327.5kcal',
    weight: 'One size / 24oz',
    category: '티',
  },
  {
    title: '자몽차',
    description:
      '달콤쌉싸름한 자몽의 조화로운 맛을 한 잔 가득 느낄 수 있는 과일티.',
    price: 3300,
    kcal: '297.6kcal',
    weight: 'One size / 24oz',
    category: '티',
  },
  {
    title: '허니자몽블랙티',
    description:
      '달콤한 꿀청에 재운 자몽에 홍차의 부드러움을 어우른 상큼한 과일티.',
    price: 3700,
    kcal: '265.8kcal',
    weight: 'One size / 24oz',
    category: '티',
  },
  {
    title: '유니콘프라페',
    description:
      '다채로운 비주얼로 보는 즐거움을 채우고, 달콤함과 상큼함 색깔마다 달라지는 유쾌한 맛까지 잡은 이색프라페.',
    price: 4800,
    kcal: '474.5kcal',
    weight: 'One size / 20oz',
    category: '스무디&프라페',
  },
];

await pb
  .collection('beverage')
  .update('w28zcdndwkiczwa', { categoryId: ':r3:' });

export default pb;
