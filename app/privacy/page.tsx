import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import tesdriveIcon from "../../assets/images/tesdrive-icon.png";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "Tesdrive for Tesla 개인정보처리방침입니다.",
};

const privacyShell =
  "mx-auto w-[calc(100%-48px)] max-w-[1200px] max-sm:w-[calc(100%-32px)]";
const privacyBrand =
  "inline-flex min-h-11 items-center gap-2.5 text-[20px] font-bold tracking-[-0.025em] max-sm:text-[18px]";
const privacyIcon =
  "size-9 shrink-0 rounded-[10px] object-cover shadow-[0_6px_16px_rgb(5_11_22/18%)] max-sm:size-8 max-sm:rounded-[9px]";
const policySection =
  "mt-12 max-sm:mt-10 [&_h2]:mb-4 [&_h2]:text-balance [&_h2]:text-[clamp(23px,3vw,28px)] [&_h2]:font-bold [&_h2]:leading-[1.3] [&_h2]:tracking-[-0.035em] [&_p]:leading-[1.6] [&_p]:text-[#465166]";
const policyList =
  "my-[18px] grid list-disc gap-2.5 pl-[22px] leading-[1.6] text-[#465166] marker:text-[#2563eb] [&_strong]:text-[#0b0f17]";
const policyNote =
  "rounded-r-2xl border-l-4 border-[#2563eb] bg-[#f1f5ff] px-6 py-[18px] max-sm:px-5 max-sm:py-4 [&_span]:text-[15px] [&_span]:font-bold [&_span]:leading-[1.4] [&_span]:text-[#1746a2] [&_p]:mt-2 [&_p]:leading-[1.55] [&_p]:text-[#465166]";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen [background:radial-gradient(circle_at_50%_-120px,rgb(37_99_235/12%),transparent_380px),#f3f4f7]">
      <a
        className="fixed top-3 left-3 z-[100] min-h-11 -translate-y-[150%] rounded-[10px] bg-[#0b0f17] px-4 py-2.5 font-bold text-white focus:translate-y-0"
        href="#terms-content"
      >
        본문으로 건너뛰기
      </a>
      <header className={`${privacyShell} flex min-h-[88px] items-center max-sm:min-h-[72px]`}>
        <Link className={privacyBrand} href="/" aria-label="Tesdrive 홈으로 이동">
          <Image
            className={privacyIcon}
            src={tesdriveIcon}
            alt=""
            width={36}
            height={36}
          />
          <span>Tesdrive</span>
        </Link>
      </header>

      <main
        id="terms-content"
        className={`${privacyShell} mt-4 mb-14 max-sm:mt-5 max-sm:mb-8`}
        tabIndex={-1}
      >
        <article className="rounded-[32px] border border-[#dfe3ea] bg-white px-[clamp(32px,7vw,88px)] py-[76px] shadow-[0_24px_70px_rgb(18_27_50/9%)] max-sm:rounded-3xl max-sm:px-[22px] max-sm:py-12">
          <header className="border-b border-[#dde1e8] pb-[54px] max-sm:pb-[38px]">
            <p className="mb-[18px] text-xs font-bold uppercase leading-[1.3] tracking-[0.14em] text-[#1746a2]">
              PRIVACY POLICY
            </p>
            <h1 className="mb-4 text-balance text-[34px] font-bold leading-[1.18] tracking-[-0.06em] sm:text-[clamp(46px,7vw,70px)] sm:leading-[1.12]">
              개인정보처리방침
            </h1>
            <p className="text-lg leading-[1.55] text-[#5e6675]">
              Tesdrive for Tesla가 사용하는 정보와 보호 원칙을 안내합니다.
            </p>
            <p className="mt-6 text-sm text-[#5e6675]">
              <strong className="mr-2 text-[#0b0f17]">최종 수정일</strong>
              2026년 8월 14일
            </p>
          </header>

          <div className="pt-14 max-sm:pt-10">
            <p className="text-[17px] leading-[1.6] text-[#5e6675]">
              <strong className="text-[#0b0f17]">begin0dev</strong>(이하
              “당사”)는 <strong className="text-[#0b0f17]">Tesdrive for Tesla</strong>
              (이하 “앱”)을 이용하는 사용자의 개인정보를 소중하게 생각하며 관련
              법령을 준수하기 위해 최선을 다하고 있습니다. 본 방침은 앱이 어떤
              정보를 활용하고 어떻게 보호하는지 투명하게 안내하기 위해
              작성되었습니다.
            </p>

            <section className={policySection}>
              <h2>1. 서비스 개요</h2>
              <p>
                Tesdrive for Tesla는 Android 기기에서 BLE(저전력 블루투스)
                통신을 기반으로 차량 데이터를 시각화하는 대시보드 서비스를
                제공합니다. 본 앱은 별도의 회원가입, 로그인, 서버 저장형 계정
                시스템을 운영하지 않으며 광고나 결제 기능을 포함하지 않습니다.
              </p>
            </section>

            <section className={policySection}>
              <h2>2. 수집 및 활용하는 정보</h2>
              <p>앱은 서비스 제공을 위해 다음과 같은 정보를 처리합니다.</p>
              <ul className={policyList}>
                <li>
                  <strong>기기 및 연결 정보:</strong> BLE 기기 검색 결과, 기기 연결
                  상태, 차량이 제공하는 상태 데이터(속도, 배터리 등)
                </li>
                <li>
                  <strong>차량 등록 정보:</strong> 차량 별칭, VIN, BLE 기기 식별자와
                  차량 통신용 키
                </li>
                <li>
                  <strong>위치 및 내비게이션 정보:</strong> GPS 위치, 속도, 목적지명,
                  목적지 좌표와 마지막 위치 정보
                </li>
                <li>
                  <strong>진단 및 분석 정보:</strong> Firebase Analytics·Crashlytics와
                  Sentry(배포 설정에서 활성화된 경우)를 통해 앱 실행·화면 이용,
                  오류·충돌, 앱 및 기기 정보, 설치·세션 식별자와 진단 로그를
                  처리합니다. 차량 등록 오류 진단에는 VIN 일부(마지막 6자리)가
                  포함될 수 있습니다.
                </li>
                <li>
                  <strong>사용자 설정 정보:</strong> 앱 내 테마, 단위 설정 등 사용자
                  환경 설정값
                </li>
              </ul>
              <aside className={policyNote} aria-label="직접 요구하지 않는 정보">
                <span>직접 요구하지 않는 정보</span>
                <p>
                  당사는 사용자의 성명, 이메일, 전화번호와 같은 식별 가능한
                  정보를 앱 가입이나 사용 과정에서 직접 요구하지 않습니다.
                </p>
              </aside>
            </section>

            <section className={policySection}>
              <h2>3. 데이터의 처리 및 저장</h2>
              <ul className={policyList}>
                <li>
                  <strong>기기 내 처리 및 저장:</strong> 차량 상태 데이터는 BLE로
                  수신하여 주로 기기에서 실시간 처리합니다. 기기에는 차량 별칭,
                  VIN, BLE 기기 식별자, 앱 설정, 차량 통신용 키와 마지막 위치
                  좌표·방향·저장 시각이 저장될 수 있습니다.
                </li>
                <li>
                  <strong>내비게이션 처리:</strong> 카카오내비 기반 경로 안내를
                  제공할 때 현재 위치, 목적지명과 목적지 좌표를 카카오모빌리티
                  SDK에 전달합니다. 해당 정보의 처리는 카카오모빌리티의 정책을
                  따릅니다.
                </li>
                <li>
                  <strong>당사 서버:</strong> 당사가 별도로 운영하는 서버에는 차량
                  상태, VIN 또는 이동 경로를 저장하지 않습니다.
                </li>
              </ul>
            </section>

            <section className={policySection}>
              <h2>4. 필수 및 선택적 권한</h2>
              <p>앱의 핵심 기능을 위해 Android의 다음 권한을 사용합니다.</p>
              <ul className={policyList}>
                <li>
                  <strong>근처 기기 권한:</strong> BLE 기기 검색과 차량 연결·통신에
                  사용합니다.
                </li>
                <li>
                  <strong>위치 권한(GPS):</strong> GPS 기반 속도 표시, 카카오내비
                  기반 경로 안내와 일부 Android 환경의 BLE 검색에 사용합니다.
                  앱은 마지막 위치 좌표를 기기에 저장할 수 있습니다.
                </li>
              </ul>
              <aside className={policyNote} aria-label="위치 정보 안내">
                <span>위치 정보 안내</span>
                <p>
                  당사는 위치 정보와 이동 경로를 자체 서버에 저장하거나 광고
                  목적으로 사용하지 않습니다. 경로 안내 시 현재 위치와 목적지
                  정보는 카카오모빌리티 SDK에서 처리됩니다.
                </p>
              </aside>
            </section>

            <section className={policySection}>
              <h2>5. 제3자 서비스 이용</h2>
              <p>
                서비스 제공과 품질 개선을 위해 다음 제3자 SDK를 사용합니다.
              </p>
              <ul className={policyList}>
                <li>
                  <strong>Firebase Analytics:</strong> 앱 실행 횟수와 화면 전환 등
                  앱 이용 통계를 분석하여 사용성을 개선합니다.
                </li>
                <li>
                  <strong>Firebase Crashlytics:</strong> 앱 충돌 원인을 분석하여
                  안정적인 서비스를 제공하는 데 사용합니다.
                </li>
                <li>
                  <strong>Sentry:</strong> 배포 설정에서 활성화된 경우 오류, 성능과
                  진단 정보를 분석합니다. 차량 등록 진단에는 VIN 일부가 포함될 수
                  있습니다.
                </li>
                <li>
                  <strong>카카오모빌리티 SDK:</strong> 지도와 경로 안내를 제공하기
                  위해 현재 위치와 목적지 정보를 처리합니다.
                </li>
              </ul>
              <p>
                각 제3자 서비스가 처리하는 정보의 수집·이용·보관은 해당 사업자의
                개인정보처리방침을 따릅니다.
              </p>
            </section>

            <section className={policySection}>
              <h2>6. 광고 및 추적 정책</h2>
              <p>
                본 앱은 광고를 표시하기 위한 SDK를 포함하지 않습니다. Firebase
                Analytics의 기기 식별자와 광고 관련 정보 처리 여부는 Google 서비스
                및 배포 설정에 따라 달라질 수 있으며, 당사는 해당 분석 정보를 앱
                내 광고 제공에 사용하지 않습니다.
              </p>
            </section>

            <section className={policySection}>
              <h2>7. 데이터 보관 및 파기</h2>
              <ul className={policyList}>
                <li>
                  <strong>기기 데이터:</strong> 앱을 삭제하면 일반적으로 기기 내 앱
                  저장소의 차량 정보, 설정, 통신 키와 마지막 위치 정보가 함께
                  삭제됩니다. 앱 안에서 차량을 삭제하는 경우 차량 목록 정보는
                  제거되지만 기존 통신 키의 삭제 범위는 보장되지 않습니다.
                </li>
                <li>
                  <strong>제3자 처리 데이터:</strong> Firebase, Sentry와
                  카카오모빌리티 SDK가 처리한 정보의 보관 및 삭제는 각 사업자의
                  정책을 따릅니다.
                </li>
              </ul>
            </section>

            <section className={policySection}>
              <h2>8. 사용자의 권리</h2>
              <p>
                사용자는 언제든지 기기 설정에서 앱의 Bluetooth, 위치 등 권한을
                철회할 수 있습니다. 다만 필수 권한을 철회하면 차량 연결과 대시보드
                기능 이용이 제한될 수 있습니다.
              </p>
            </section>

            <section className={policySection}>
              <h2>9. 아동의 개인정보 보호</h2>
              <p>
                당사는 만 14세 미만 아동의 개인정보를 고의로 수집하지 않습니다.
                Tesdrive for Tesla는 만 14세 미만 아동을 대상으로 제공되는 서비스가
                아닙니다. 관련 문의가 있다면 아래 연락처로 알려주시기 바랍니다.
              </p>
            </section>

            <section className={policySection}>
              <h2>10. 문의처</h2>
              <p>
                본 방침 또는 데이터 처리와 관련해 궁금한 점이 있다면 이메일로
                문의해 주세요.
              </p>
              <a
                className="-mt-1 inline-flex min-h-11 items-center font-bold text-[#1746a2] underline underline-offset-4"
                href="mailto:prosonic1@gmail.com"
              >
                prosonic1@gmail.com
              </a>
            </section>
          </div>
        </article>
      </main>

      <footer className="border-t border-[#dde1e8] bg-white">
        <div className={`${privacyShell} py-6`}>
          <p className="text-[13px] text-[#6b7280]">
            © 2026 begin0dev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
