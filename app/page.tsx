import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import chargingScreen from "../assets/images/screenshots/charging.jpg";
import dashboardFlipScreen from "../assets/images/screenshots/dashboard-flip.png";
import googlePlayBadge from "../assets/images/google-play-badge.png";
import hudMediaScreen from "../assets/images/screenshots/hud-media.png";
import hudNavigationScreen from "../assets/images/screenshots/hud-navigation.png";
import navigationGaugeScreen from "../assets/images/screenshots/navigation-gauge.png";
import navigationMapScreen from "../assets/images/screenshots/navigation-map.png";
import speedometerScreen from "../assets/images/screenshots/speedometer.png";
import tesdriveIcon from "../assets/images/tesdrive-icon.png";
import vehicleStatusScreen from "../assets/images/screenshots/vehicle-status.jpg";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ts3xy.dash";
const KAKAO_CHAT_URL = "https://open.kakao.com/o/sop1tSDi";
const CONTACT_EMAIL = "prosonic1@gmail.com";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const shell =
  "mx-auto w-[calc(100%-48px)] max-w-[1200px] max-sm:w-[calc(100%-32px)]";
const section = "py-28 max-[900px]:py-[88px] max-sm:py-[70px]";
const eyebrow =
  "mb-[18px] text-xs font-bold uppercase leading-[1.3] tracking-[0.14em] text-[#1746a2]";
const sectionTitle =
  "m-0 text-balance text-[32px] font-bold leading-[1.2] tracking-[-0.05em] sm:text-[clamp(36px,4.1vw,54px)] sm:leading-[1.18]";
const brand =
  "inline-flex min-h-11 items-center gap-2.5 text-[20px] font-bold tracking-[-0.025em] max-sm:text-[18px]";
const brandIcon =
  "size-9 shrink-0 rounded-[10px] object-cover shadow-[0_6px_16px_rgb(5_11_22/18%)] max-sm:size-8 max-sm:rounded-[9px]";
const playBadge =
  "inline-flex min-h-11 w-[194px] transition duration-150 hover:-translate-y-0.5 hover:brightness-[1.08] [&_img]:h-auto [&_img]:w-full";

const navItems = [
  ["#screens", "앱 화면"],
  ["#features", "주요 기능"],
  ["#videos", "사용 영상"],
  ["#faq", "FAQ"],
];

const heroScreens = [
  {
    src: speedometerScreen,
    alt: "대형 원형 속도계와 제한 속도, 목적지 및 미디어 상태가 표시된 Tesdrive 주행 화면",
  },
  {
    src: vehicleStatusScreen,
    alt: "차량 이미지와 배터리, 주행 가능 거리, 문 열림, 목적지와 미디어 정보가 표시된 Tesdrive 차량 상태 화면",
  },
  {
    src: chargingScreen,
    alt: "충전률, 남은 충전 시간, 충전 전력과 전류 및 전압이 표시된 Tesdrive 충전 화면",
  },
];

const screenGroups = [
  {
    id: "dashboard-mode",
    title: "대시보드",
    description: "속도와 기어, 배터리, 타이어 등 필요한 정보를 한눈에.",
    screens: [
      {
        src: dashboardFlipScreen,
        eyebrow: "플립 커버",
        title: "플립 커버 화면으로 깔끔하게",
        description: "작은 플립 커버 화면으로 심플하게도 볼 수 있습니다.",
        alt: "테슬라 운전대 사이의 작은 플립 커버 화면에 Tesdrive 속도계가 표시된 실제 주행 모습",
      },
      {
        src: vehicleStatusScreen,
        eyebrow: "한눈에 확인",
        title: "차량 상태를 한눈에",
        description:
          "배터리와 주행 가능 거리, 문 열림 상태, 목적지와 재생 중인 음악까지 담았습니다.",
        alt: "차량 이미지와 배터리, 주행 가능 거리, 문 열림, 목적지와 미디어 정보가 표시된 Tesdrive 대시보드",
      },
    ],
  },
  {
    id: "navigation-mode",
    title: "내비게이션",
    description:
      "카카오내비 기반 경로 안내와 계기판을 한 화면에 함께 표시합니다.",
    screens: [
      {
        src: navigationMapScreen,
        eyebrow: "지도 크게",
        title: "넓은 지도로 보는 길 안내",
        description:
          "경로를 크게 두고 현재 속도와 제한 속도, 배터리와 도착 시각은 가장자리에 배치했습니다.",
        alt: "지도 위에 현재 속도, 제한 속도, 경로 안내와 배터리 정보가 표시된 Tesdrive 내비게이션 화면",
      },
      {
        src: navigationGaugeScreen,
        eyebrow: "계기판 + 지도",
        title: "계기판과 길 안내를 나란히",
        description:
          "왼쪽엔 디지털 계기판, 오른쪽엔 카카오내비 경로. 시선을 옮기지 않아도 됩니다.",
        alt: "대형 속도계와 카카오내비 기반 경로 안내가 함께 표시된 Tesdrive 내비게이션 화면",
      },
    ],
  },
  {
    id: "hud-mode",
    title: "HUD",
    description:
      "화면을 좌우로 뒤집어 전면 유리에 띄우면, 시선을 내리지 않고 속도를 읽습니다.",
    screens: [
      {
        src: hudMediaScreen,
        eyebrow: "속도 · 미디어",
        title: "목적지가 없을 때 HUD",
        description:
          "속도와 시간, 배터리와 재생 중인 음악을 반사용으로 뒤집어 보여줍니다.",
        alt: "전면 유리 반사를 위해 좌우 반전된 속도계, 시간, 배터리와 미디어 정보가 표시된 Tesdrive HUD 화면",
        badge: "좌우 반전 화면",
      },
      {
        src: hudNavigationScreen,
        eyebrow: "도착 정보",
        title: "도착 정보를 띄우는 HUD",
        description:
          "테슬라에서 목적지를 설정하면 목적지 이름과 예상 도착 시각, 남은 거리, 도착 예상 배터리 잔량이 표시됩니다.",
        alt: "전면 유리 반사를 위해 좌우 반전된 속도계, 목적지명, 예상 도착 시각, 남은 거리와 배터리 정보가 표시된 Tesdrive HUD 화면",
        badge: "좌우 반전 화면",
      },
    ],
  },
];

const features = [
  [
    "실시간 주행 정보",
    "현재 속도와 기어 상태를 고개를 돌리지 않고 확인할 수 있습니다.",
  ],
  [
    "배터리와 차량 상태",
    "배터리, 주행 가능 거리, 타이어 공기압과 온도 정보 등을 표시할 수 있습니다.",
  ],
  [
    "테슬라 목적지 연동",
    "차에서 목적지를 정하면 앱이 카카오내비 기반 경로로 이어받습니다.",
  ],
  [
    "과속카메라 알림",
    "테슬라 화면에서 놓치기 쉬운 단속 구간을 경고음으로 알려줍니다.",
  ],
  [
    "HUD 모드",
    "화면을 좌우로 뒤집어 전면 유리에 반사하면, 시선을 내리지 않고 속도를 읽습니다.",
  ],
  ["화면 맞춤 설정", "무엇을 띄울지, 어떻게 배치할지 직접 고를 수 있습니다."],
];

const permissionPoints = [
  ["근처 기기 (블루투스)", "차량을 찾고 연결하는 데 사용합니다."],
  [
    "위치 (GPS)",
    "GPS 기반 속도 표시와 카카오내비 경로 안내에 사용합니다. 일부 Android 환경에서는 BLE 검색에도 필요합니다.",
  ],
  [
    "차량 · 위치 데이터",
    "주로 기기에서 처리하며 당사 서버에는 저장하지 않습니다. 경로 안내 시 현재 위치와 목적지 정보는 카카오모빌리티 SDK에서 처리됩니다.",
  ],
];

const faqs: [question: string, answer: ReactNode][] = [
  [
    "Tesdrive for Tesla는 어떤 앱인가요?",
    "Android 휴대폰과 테슬라 차량을 저전력 블루투스(BLE)로 연결해, 속도와 차량 상태 등 운전에 필요한 정보를 별도 계기판처럼 보여주는 앱입니다.",
  ],
  [
    "어떤 Android 기기에서 사용할 수 있나요?",
    "BLE와 GPS를 지원하는 Android 13 이상 스마트폰에서 사용할 수 있습니다. Android Auto는 플랫폼 제약으로 지원하지 않습니다.",
  ],
  [
    "차량은 어떻게 연결하나요?",
    <>
      <p>차량 안에서 다음 순서로 등록해 주세요.</p>
      <ol>
        <li>차량 카드키를 준비합니다.</li>
        <li>차량 안에서 Tesdrive를 실행하고 차량 등록을 시작합니다.</li>
        <li>
          Tesla 앱을 열고 화면 맨 아래의 VIN을 눌러 차대번호를 복사합니다.
        </li>
        <li>
          Tesdrive로 돌아와 차량 애칭을 입력하고 복사한 VIN을 붙여넣습니다.
        </li>
        <li>
          1단계 차량 스캔이 끝나면 카드키를 컵홀더 또는 무선 충전기 등
          차량에서 안내하는 위치에 태그합니다.
        </li>
        <li>승인 요청 화면이 나타나면 BLE 연결을 승인합니다.</li>
      </ol>
      <p>
        이 등록은 문을 여는 폰키 등록이 아니라 BLE로 차량 데이터를 받기 위한
        승인입니다. 서브폰을 차량 안에 두고 내리더라도 기기는 슬립 모드로
        전환되며 차량 문은 정상적으로 잠깁니다.
      </p>
    </>,
  ],
  [
    "차량 연결에 계속 실패해요.",
    <>
      <p>
        테슬라 차량은 BLE 연결을 최대 3개까지 허용합니다. 차량의 잠금 장치
        설정에서 카드키를 제외한 폰키가 몇 개 등록되어 있는지 확인해 주세요.
      </p>
      <p>
        Tesla 앱이 연결된 휴대폰도 BLE 연결 한 자리를 사용합니다. 본인의
        휴대폰이 한 자리를 사용하면 앱이 사용할 수 있는 자리는 2개이며, 배우자
        등 다른 사용자의 Tesla 앱까지 연결되어 있다면 한 자리만 남습니다.
        안정적인 연결을 위해 사용하지 않는 폰키 또는 Unknown Key를 삭제한 뒤
        다시 시도해 주세요.
      </p>
    </>,
  ],
  [
    "BLE와 위치 권한은 왜 필요한가요?",
    "BLE 기기 검색과 차량 연결에는 근처 기기 권한이 필요합니다. 위치 권한은 GPS 기반 속도 표시와 카카오내비 경로 안내에 사용되며, 일부 Android 환경에서는 BLE 검색에도 필요합니다.",
  ],
  [
    "카카오내비 앱을 따로 설치해야 하나요?",
    "설치할 필요는 없습니다. Tesdrive가 앱 내부에서 카카오내비 기반 데이터를 사용합니다.",
  ],
  [
    "티맵과 네이버지도는 왜 지원하지 않나요?",
    "두 서비스는 현재 필요한 무료 사용 범위와 데이터 구성 방식에 제약이 있습니다. Tesdrive 화면에 다양한 주행 정보를 구성하기에는 카카오내비 기반 데이터가 가장 적합해 선택했습니다.",
  ],
  [
    "방향지시등이나 오토스티어 상태도 표시할 수 있나요?",
    "현재 테슬라의 BLE 데이터만으로는 해당 정보가 제공되지 않거나 갱신이 느려, 주행 중 필요한 반응 속도로 표시하기 어렵습니다. 해당 정보는 별도 송신기가 필요해 현재 지원하지 않습니다.",
  ],
  [
    "제 차량 색상이 없어요. 추가할 수 있나요?",
    <>
      <p>
        차량 이미지는 확보한 소스를 기준으로 제공하고 있어 일부 색상이 없을 수
        있습니다. 누락된 색상 추가에는 사용자의 도움이 필요합니다.
      </p>
      <p>
        Tesla 앱의 컨트롤 화면에서 차량 전체가 보이도록 스크린샷을 촬영해{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>으로 보내주세요.
      </p>
    </>,
  ],
];

export default function Home() {
  return (
    <>
      <a
        className="fixed top-3 left-3 z-[100] min-h-11 -translate-y-[150%] rounded-[10px] bg-[#0b0f17] px-4 py-2.5 font-bold text-white focus:translate-y-0"
        href="#top"
      >
        본문으로 건너뛰기
      </a>
      <header className="sticky top-0 z-50 border-b border-[#dde1e8]/80 bg-[#f3f4f7]/80 backdrop-blur-[18px] backdrop-saturate-150">
        <div className={`${shell} flex min-h-[76px] items-center justify-between gap-6 max-sm:min-h-[68px] max-sm:gap-3`}>
          <a className={brand} href="#top" aria-label="Tesdrive 홈으로 이동">
            <Image
              className={brandIcon}
              src={tesdriveIcon}
              alt=""
              width={36}
              height={36}
            />
            <span>Tesdrive</span>
          </a>
          <nav
            className="flex items-center gap-8 text-sm font-medium text-[#414958] max-[900px]:hidden [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center [&_a:hover]:text-[#2563eb]"
            aria-label="주요 메뉴"
          >
            {navItems.map(([href, label]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#0b0f17] bg-[#0b0f17] px-[18px] py-2.5 text-sm font-bold leading-[1.2] text-white shadow-[0_10px_25px_rgb(11_15_23/18%)] transition duration-150 hover:-translate-y-0.5 hover:border-[#252b36] hover:bg-[#252b36] max-sm:px-[15px]"
            href={PLAY_STORE_URL}
            aria-label="Google Play에서 Tesdrive 받기"
            {...external}
          >
            앱 다운로드
          </a>
        </div>
      </header>

      <main id="top" tabIndex={-1}>
        <section
          className={`${shell} relative isolate mt-9 overflow-clip rounded-[36px] border border-[#e1e4eb] [background:radial-gradient(circle_at_52%_28%,rgb(37_99_235/13%),transparent_34%),radial-gradient(circle_at_8%_10%,rgb(255_226_153/24%),transparent_23%),#fff] px-[68px] py-16 text-center shadow-[0_24px_70px_rgb(18_27_50/9%)] max-[900px]:px-[38px] max-[900px]:py-[60px] max-sm:mt-2.5 max-sm:w-[calc(100%-16px)] max-sm:rounded-[26px] max-sm:px-3.5 max-sm:py-[52px] before:absolute before:top-24 before:-left-[330px] before:-z-10 before:size-[380px] before:rotate-45 before:border before:border-[#2563eb]/10 before:content-[''] after:absolute after:top-[210px] after:-right-[350px] after:-z-10 after:size-[380px] after:rotate-45 after:border after:border-[#2563eb]/10 after:content-['']`}
          aria-labelledby="hero-title"
        >
          <div className="relative z-[2] mx-auto max-w-[840px]">
            <p className={eyebrow}>테슬라 운전자를 위한 Android 앱</p>
            <h1
              id="hero-title"
              className="mx-auto mb-6 max-w-[820px] text-balance text-[40px] font-bold leading-[1.2] tracking-[-0.065em] sm:text-[clamp(46px,6.3vw,78px)]"
            >
              테슬라에 없는 계기판, 폰이 대신합니다.
            </h1>
            <p className="mx-auto max-w-[660px] text-[19px] leading-[1.55] text-[#5e6675] max-sm:text-[17px]">
              BLE로 차와 연결하면 속도와 배터리 정보, 길 안내와 과속카메라
              알림을 한 화면에서 편리하게 확인할 수 있습니다.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 max-sm:mt-7 max-sm:flex-col max-sm:gap-2">
              <a className={playBadge} href={PLAY_STORE_URL} {...external}>
                <Image
                  src={googlePlayBadge}
                  alt="Google Play에서 다운로드"
                  width={194}
                  height={75}
                  loading="eager"
                />
              </a>
            </div>
          </div>
          <div className="relative mx-auto mt-9 before:absolute before:inset-[12%_8%_10%] before:-z-10 before:rounded-full before:bg-[#2563eb]/30 before:blur-[60px] before:content-[''] max-sm:mt-8">
            <div className="grid place-items-center">
              <div
                className="group relative w-full max-w-[820px] rounded-[clamp(24px,4vw,46px)] border border-[#30394a] bg-[linear-gradient(145deg,#222a38,#07090d_42%,#151b25)] px-[clamp(14px,2vw,22px)] py-[clamp(7px,1.2vw,12px)] shadow-[inset_0_0_0_1px_rgb(255_255_255/6%),0_42px_80px_rgb(5_11_22/28%)] before:absolute before:-top-1 before:left-[18%] before:h-1 before:w-[86px] before:rounded-t before:bg-[#252e3d] before:content-[''] after:absolute after:top-1/2 after:left-[5px] after:size-1.5 after:-translate-y-1/2 after:rounded-full after:border-2 after:border-[#293345] after:bg-[#080b11] after:shadow-[0_0_0_2px_#05070a] after:content-[''] max-sm:px-2.5 max-sm:before:left-1/5 max-sm:before:w-12"
                role="group"
                aria-label="Tesdrive 앱 화면 자동 미리보기. 포커스하거나 마우스를 올리면 일시 정지됩니다."
                tabIndex={0}
              >
                <div className="relative aspect-[19/9] overflow-hidden rounded-[clamp(16px,3vw,32px)] border border-[#05070a] bg-[#05070a]">
                  <div className="h-[500%] will-change-transform animate-[hero-scenes_14s_ease-in-out_infinite] group-hover:[animation-play-state:paused] group-focus-visible:[animation-play-state:paused] motion-reduce:animate-none">
                    <div className="grid h-1/5 place-items-center bg-[#05070a]">
                      <Image
                        className="size-[clamp(88px,15vw,148px)] rounded-[clamp(20px,3vw,36px)]"
                        src={tesdriveIcon}
                        alt="Tesdrive 앱 시작 화면"
                        loading="eager"
                      />
                    </div>
                    {heroScreens.map((screen, index) => (
                      <div className="relative h-1/5" key={screen.src.src}>
                        <Image
                          className="object-cover"
                          src={screen.src}
                          alt={screen.alt}
                          fill
                          placeholder="blur"
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 640px) calc(100vw - 40px), 820px"
                        />
                      </div>
                    ))}
                    {/* 첫 화면을 한 번 더 두어 애니메이션이 되감길 때 튀지 않게 합니다. */}
                    <div
                      className="grid h-1/5 place-items-center bg-[#05070a]"
                      aria-hidden="true"
                    >
                      <Image
                        className="size-[clamp(88px,15vw,148px)] rounded-[clamp(20px,3vw,36px)]"
                        src={tesdriveIcon}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="screens" className={`${section} ${shell}`} aria-labelledby="screens-title">
          <div className="mx-auto mb-[52px] max-w-[720px] text-center max-sm:mb-9 max-sm:px-3">
            <p className={eyebrow}>화면 모드</p>
            <h2 id="screens-title" className={`${sectionTitle} mb-[18px]`}>
              주행 상황에 맞는 화면을 선택하세요.
            </h2>
            <p className="text-[17px] leading-[1.55] text-[#5e6675]">
              익숙한 길에서는 대시보드, 처음 가는 길에서는 내비게이션, 야간
              주행에는 HUD.
              <br />
              세 가지 모드를 상황에 맞게 사용해 보세요.
            </p>
          </div>
          <div className="grid">
            {screenGroups.map((group) => (
              <section
                className="border-b border-[#dde1e8] py-10 first:pt-0 last:border-b-0 last:pb-0 max-sm:py-8"
                aria-labelledby={`${group.id}-title`}
                key={group.id}
              >
                <header className="mb-7 max-sm:mb-5">
                  <h3
                    id={`${group.id}-title`}
                    className="my-3 text-balance text-[30px] font-bold leading-[1.2] tracking-[-0.05em] sm:text-[clamp(34px,3.5vw,48px)] sm:leading-[1.18]"
                  >
                    {group.title}
                  </h3>
                  <p className="m-0 max-w-[640px] text-[17px] leading-[1.55] text-[#5e6675]">
                    {group.description}
                  </p>
                </header>
                <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                  {group.screens.map((screen) => (
                    <article
                      className="overflow-hidden rounded-3xl border border-[#dde1e8] bg-white shadow-[0_12px_32px_rgb(15_23_42/5%)] max-sm:rounded-[18px]"
                      key={screen.src.src}
                    >
                      <div className="relative border-b border-[#dde1e8] bg-[#eef1f6]">
                        <div className="aspect-[19/9] overflow-hidden">
                          <Image
                            className="size-full object-cover"
                            src={screen.src}
                            alt={screen.alt}
                            placeholder="blur"
                            sizes="(max-width: 640px) calc(100vw - 32px), 540px"
                          />
                        </div>
                        {"badge" in screen && screen.badge ? (
                          <span className="absolute bottom-2.5 left-2.5 rounded-full border border-white/15 bg-[#05070a]/70 px-2.5 py-[5px] text-[11px] font-bold leading-[1.2] tracking-[-0.01em] text-[#e7ecf5] backdrop-blur-[6px]">
                            {screen.badge}
                          </span>
                        ) : null}
                      </div>
                      <div className="px-6 pt-6 pb-[26px] max-sm:p-5">
                        <p className={`${eyebrow} mb-2.5`}>{screen.eyebrow}</p>
                        <h4 className="mb-2.5 text-balance text-[clamp(22px,2.2vw,28px)] font-bold leading-[1.25] tracking-[-0.04em]">
                          {screen.title}
                        </h4>
                        <p className="text-base leading-[1.55] text-[#5e6675]">
                          {screen.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section id="features" className={`${section} bg-[#e9eef8]`} aria-labelledby="features-title">
          <div className={`${shell} grid grid-cols-[minmax(260px,0.75fr)_minmax(0,1.25fr)] items-start gap-[clamp(52px,8vw,104px)] max-[900px]:grid-cols-1 max-[900px]:gap-[38px]`}>
            <div className="sticky top-[120px] mb-0 max-[900px]:static">
              <p className={eyebrow}>주요 기능</p>
              <h2 id="features-title" className={sectionTitle}>
                테슬라 주행에 필요한 기능을 한곳에.
              </h2>
            </div>
            <div className="border-t border-[#c8d1e1]">
              {features.map(([title, description], index) => (
                <article
                  className="grid grid-cols-[44px_minmax(170px,0.7fr)_minmax(0,1fr)] items-start gap-[22px] border-b border-[#c8d1e1] py-[30px] max-sm:grid-cols-[38px_minmax(0,1fr)] max-sm:gap-x-3.5 max-sm:gap-y-2 max-sm:py-6"
                  key={title}
                >
                  <span
                    className="grid size-9 place-items-center rounded-full bg-[#2563eb] text-[11px] font-bold text-white"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-[3px] text-xl font-bold leading-[1.3] tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-[3px] text-[15px] leading-[1.55] text-[#5e6675] max-sm:col-start-2">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="videos" className={`${section} ${shell}`} aria-labelledby="videos-title">
          <div className="mx-auto mb-[52px] max-w-[720px] text-center max-sm:mb-9">
            <p className={eyebrow}>사용 영상</p>
            <h2 id="videos-title" className={sectionTitle}>
              앱은 이렇게 동작해요.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
            <article className="rounded-[28px] border border-[#dde1e8] bg-white px-4 pt-4 pb-[26px] shadow-[0_12px_35px_rgb(15_23_42/5%)] max-sm:rounded-[22px] max-sm:px-2.5 max-sm:pt-2.5 max-sm:pb-6">
              <div className="aspect-video overflow-hidden rounded-[18px] bg-[#0a0d13] max-sm:rounded-[14px] [&_iframe]:size-full [&_iframe]:border-0">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/nJFf_bFUwFQ"
                  title="Tesdrive for Tesla 대시보드 사용 영상"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <h3 className="mx-3 mt-6 mb-1.5 text-[22px] font-bold leading-[1.3] tracking-[-0.03em]">
                Tesdrive 대시보드
              </h3>
              <p className="mx-3 leading-[1.55] text-[#5e6675]">
                대시보드의 구성과 차량 상태에 따라 달라지는 정보를 확인할 수 있습니다.
              </p>
            </article>
            <article className="rounded-[28px] border border-[#dde1e8] bg-white px-4 pt-4 pb-[26px] shadow-[0_12px_35px_rgb(15_23_42/5%)] max-sm:rounded-[22px] max-sm:px-2.5 max-sm:pt-2.5 max-sm:pb-6">
              <div className="aspect-video overflow-hidden rounded-[18px] bg-[#0a0d13] max-sm:rounded-[14px] [&_iframe]:size-full [&_iframe]:border-0">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/DnsbxehHpO0"
                  title="Tesdrive for Tesla 내비게이션 모드 사용 영상"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <h3 className="mx-3 mt-6 mb-1.5 text-[22px] font-bold leading-[1.3] tracking-[-0.03em]">
                내비게이션 모드
              </h3>
              <p className="mx-3 leading-[1.55] text-[#5e6675]">
                계기판과 카카오내비 기반 경로 안내를 한 화면에 함께 표시합니다.
              </p>
            </article>
          </div>
        </section>

        <section className={`${section} bg-[#e9eef8]`} aria-labelledby="trust-title">
          <div className={`${shell} grid grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] items-start gap-[clamp(32px,4vw,56px)] max-[900px]:grid-cols-1 max-[900px]:gap-4`}>
            <div>
              <p className={eyebrow}>권한 및 개인정보</p>
              <h2 id="trust-title" className={sectionTitle}>
                앱 사용에 권한이 필요한 이유
              </h2>
            </div>
            <div>
              <p className="mb-[34px] max-w-[620px] text-[17px] leading-[1.55] text-[#5e6675]">
                차량 정보와 내비 정보를 표시하기 위해 필요한 권한은 아래와
                같습니다.
              </p>
              <ul className="grid border-t border-[#dde1e8]">
                {permissionPoints.map(([title, description], index) => (
                  <li
                    className="grid grid-cols-[44px_minmax(150px,0.55fr)_minmax(0,1fr)] items-baseline gap-x-[18px] gap-y-1.5 border-b border-[#dde1e8] py-[22px] max-sm:grid-cols-[36px_1fr] max-sm:gap-1"
                    key={title}
                  >
                    <span className="text-xs font-bold tracking-[0.08em] text-[#1746a2]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong className="text-[15px] leading-[1.4] tracking-[-0.02em]">{title}</strong>
                    <span className="text-[15px] leading-[1.5] text-[#5e6675] max-sm:col-start-2">
                      {description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className={`${section} ${shell} grid grid-cols-[0.38fr_0.62fr] items-start gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-[34px]`}
          aria-labelledby="faq-title"
        >
          <div className="sticky top-[116px] max-[900px]:static">
            <p className={eyebrow}>FAQ</p>
            <h2 id="faq-title" className={`${sectionTitle} mb-5`}>
              자주 묻는 질문
            </h2>
            <p className="text-[17px] leading-[1.55] text-[#5e6675] [&_a]:font-bold [&_a]:text-[#1746a2] [&_a]:underline [&_a]:underline-offset-3">
              여기에 없는 내용은{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>이메일</a>이나{" "}
              <a href={KAKAO_CHAT_URL} {...external}>
                카카오톡 오픈채팅
              </a>
              으로 물어봐 주세요.
            </p>
          </div>
          <div className="border-t border-[#cfd4de]">
            {faqs.map(([question, answer]) => (
              <details className="group border-b border-[#cfd4de]" key={question}>
                <summary className="relative min-h-[76px] cursor-pointer list-none py-6 pr-[54px] pl-1 text-[18px] font-bold leading-[1.4] tracking-[-0.02em] after:absolute after:top-1/2 after:right-2 after:size-7 after:-translate-y-1/2 after:rounded-full after:border after:border-[#cbd0da] after:text-center after:text-[21px] after:font-medium after:leading-[25px] after:text-[#1746a2] after:content-['+'] group-open:after:content-['−'] max-sm:pl-0 max-sm:text-[17px] [&::-webkit-details-marker]:hidden">
                  {question}
                </summary>
                <div className="-mt-1 mr-[54px] mb-6 ml-1 leading-[1.6] text-[#5e6675] max-sm:ml-0 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li+li]:mt-2 [&_p+p]:mt-4 [&_a]:font-bold [&_a]:text-[#1746a2] [&_a]:underline [&_a]:underline-offset-3">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section
          className={`${shell} mb-28 rounded-[34px] [background:radial-gradient(circle_at_50%_0%,rgb(74_124_244/38%),transparent_58%),#0a0d13] px-16 py-[72px] text-center text-white shadow-[0_32px_70px_rgb(5_11_22/22%)] max-[900px]:px-[50px] max-[900px]:py-16 max-sm:mb-[70px] max-sm:w-[calc(100%-20px)] max-sm:rounded-[26px] max-sm:px-6 max-sm:py-12`}
          aria-labelledby="download-title"
        >
          <div className="mx-auto max-w-[680px]">
            <h2 id="download-title" className={`${sectionTitle} mb-[18px]`}>
              테슬라의 부족함을 채우세요.
            </h2>
            <p className="mb-[30px] text-[17px] leading-[1.55] text-[#d2d8e2]">
              Android 13 이상 스마트폰에서 바로 시작할 수 있습니다.
            </p>
            <a className={`${playBadge} mx-auto`} href={PLAY_STORE_URL} {...external}>
              <Image
                src={googlePlayBadge}
                alt="Google Play에서 다운로드"
                width={194}
                height={75}
              />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#dde1e8] bg-white">
        <div className={`${shell} grid grid-cols-[1fr_auto] items-center gap-x-10 gap-y-6 pt-10 pb-6 max-[900px]:grid-cols-1 max-[900px]:pt-[34px]`}>
          <div>
            <a className={brand} href="#top" aria-label="Tesdrive 홈으로 이동">
              <Image
                className={brandIcon}
                src={tesdriveIcon}
                alt=""
                width={36}
                height={36}
              />
              <span>Tesdrive</span>
            </a>
          </div>
          <nav
            className="flex items-center gap-0.5 rounded-full border border-[#dde1e8] bg-[#f3f4f7] p-1 text-sm font-bold text-[#414958] max-[900px]:grid max-[900px]:w-full max-[900px]:grid-cols-2 max-[900px]:gap-x-5 max-[900px]:border-0 max-[900px]:bg-transparent max-[900px]:p-0 [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center [&_a]:rounded-full [&_a]:px-3.5 [&_a]:transition [&_a:hover]:bg-white [&_a:hover]:text-[#1746a2] [&_a:hover]:shadow-[0_2px_10px_rgb(15_23_42/8%)] [&_a:focus-visible]:bg-white [&_a:focus-visible]:text-[#1746a2] [&_a:focus-visible]:shadow-[0_2px_10px_rgb(15_23_42/8%)] max-[900px]:[&_a]:justify-start max-[900px]:[&_a]:rounded-none max-[900px]:[&_a]:px-0 max-[900px]:[&_a]:py-2 max-[900px]:[&_a:hover]:bg-transparent max-[900px]:[&_a:hover]:shadow-none max-[900px]:[&_a:focus-visible]:bg-transparent max-[900px]:[&_a:focus-visible]:shadow-none"
            aria-label="하단 메뉴"
          >
            <a href={PLAY_STORE_URL} {...external}>
              Google Play
            </a>
            <Link href="/privacy">개인정보처리방침</Link>
            <a href={`mailto:${CONTACT_EMAIL}`}>이메일 문의</a>
            <a href={KAKAO_CHAT_URL} {...external}>
              카카오톡 오픈채팅
            </a>
          </nav>
          <p className="col-span-full text-[13px] text-[#6b7280]">
            © 2026 begin0dev. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
