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
const policyFacts =
  "mt-3 border-y border-[#dde1e8] text-[#465166] [&>div]:grid [&>div]:grid-cols-[150px_1fr] [&>div]:gap-5 [&>div]:border-b [&>div]:border-[#dde1e8] [&>div]:py-4 [&>div:last-child]:border-b-0 max-sm:[&>div]:grid-cols-1 max-sm:[&>div]:gap-1 [&_dt]:font-bold [&_dt]:text-[#0b0f17] [&_dd]:m-0 [&_dd]:leading-[1.6]";
const policyLink =
  "font-bold text-[#1746a2] underline underline-offset-4";
const policySubheading =
  "mt-9 mb-3 text-[21px] font-bold leading-[1.35] tracking-[-0.025em] text-[#0b0f17]";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen [background:radial-gradient(circle_at_50%_-120px,rgb(37_99_235/12%),transparent_380px),#f3f4f7]">
      <a
        className="fixed top-3 left-3 z-[100] min-h-11 -translate-y-[150%] rounded-[10px] bg-[#0b0f17] px-4 py-2.5 font-bold text-white focus:translate-y-0"
        href="#privacy-content"
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
        id="privacy-content"
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
              <time dateTime="2026-08-19">2026년 8월 19일</time>
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
                통신을 기반으로 차량 데이터를 시각화하고 길 안내 기능을 제공하는
                대시보드 서비스입니다. 자체 회원가입이나 서버 저장형 사용자 계정
                시스템은 운영하지 않습니다. 다만 사용자가 선택하면 Tesla 공식
                OAuth를 통해 Tesla 계정을 연동하고 차량으로 목적지를 전송할 수
                있습니다. Tesla 계정을 연동하지 않아도 BLE 기반 대시보드 기능은
                이용할 수 있습니다.
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
                  목적지 좌표, 마지막 위치 정보와 목적지 검색어
                </li>
                <li>
                  <strong>Tesla 연동 정보:</strong> 선택적 계정 연동에 필요한 인증
                  코드, 접근·갱신 토큰과 만료 정보, 목적지 전송에 필요한 VIN과 목적지
                  좌표
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
              <aside className={policyNote} aria-label="직접 수집하지 않는 정보">
                <span>직접 수집하지 않는 정보</span>
                <p>
                  Tesla 로그인 아이디·비밀번호는 Tesla 공식 로그인 화면에서 직접
                  입력되며 앱과 자체 프록시는 이를 수집하지 않습니다. 앱은 Tesla의
                  프로필 정보 권한인 <code>user_data</code>를 요청하지 않으며 성명,
                  이메일과 전화번호를 직접 수집하지 않습니다.
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
                  정보가 저장될 수 있습니다. Tesla 연동 토큰은 기기의 보안 저장소에
                  연동 해지, 앱 삭제 또는 인증 무효화 시까지 저장됩니다.
                </li>
                <li>
                  <strong>Tesla 연동 및 목적지 전송:</strong> 인증 코드와 토큰, VIN,
                  목적지 좌표는 Tesla 연동과 목적지 전송 과정에서 자체 프록시를 통해
                  일시 처리되며 영구 저장하지 않습니다. 목적지명과 주소는 프록시에
                  전송하지 않으며 토큰 갱신은 앱에서 Tesla로 직접 요청합니다.
                </li>
                <li>
                  <strong>내비게이션 처리:</strong> 카카오내비 기반 경로 안내를
                  제공할 때 현재 위치, 목적지명과 목적지 좌표를 카카오모빌리티
                  SDK에 전달합니다. 해당 정보의 처리는 카카오모빌리티의 정책을
                  따릅니다.
                </li>
                <li>
                  <strong>Kakao Local REST API:</strong> 키워드 검색은 검색어와
                  유효한 현재 좌표를 Kakao에 전송합니다. 주소 검색은 검색어만 보내며,
                  검색 결과와 현재 위치 사이의 거리는 기기에서 계산합니다.
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
                <li>
                  <strong>전화 상태 권한:</strong> 통화가 연결되고 종료되는 시점을
                  감지해 주행 화면에 통화 종료 버튼을 표시하는 데 사용합니다. 앱은
                  통화 상태 값(대기·수신 중·통화 중)만 사용하며 전화번호, 연락처,
                  통화 기록은 사용하지 않습니다.
                </li>
                <li>
                  <strong>전화 관리 권한:</strong> 사용자가 화면의 통화 종료 버튼을
                  누른 경우에만 진행 중인 통화를 종료하는 데 사용합니다. 앱이 전화를
                  걸거나 자동으로 받지 않습니다.
                </li>
                <li>
                  <strong>다른 앱 위에 표시 권한(선택):</strong> 통화가 연결되면
                  가려진 주행 화면을 다시 앞으로 되돌리는 데 사용합니다. 허용하지
                  않아도 통화 종료 버튼은 정상 동작하며 자동 복귀만 제한됩니다.
                </li>
              </ul>
              <aside className={policyNote} aria-label="위치 정보 안내">
                <span>위치 정보 안내</span>
                <p>
                  당사는 위치 정보와 이동 경로를 자체 서버에 영구 저장하거나 광고
                  목적으로 사용하지 않습니다. 경로 안내와 목적지 검색에는 아래에
                  설명한 Kakao 및 Tesla 서비스가 관여할 수 있습니다.
                </p>
              </aside>
              <aside className={policyNote} aria-label="통화 정보 안내">
                <span>통화 정보 안내</span>
                <p>
                  통화 상태는 기기 안에서 실시간으로만 처리하며 저장하거나 외부로
                  전송하지 않습니다. 앱은 통화 기록을 읽는 권한과 전화를 거는 권한을
                  요청하지 않습니다.
                </p>
              </aside>
            </section>

            <section className={policySection}>
              <h2>5. 제3자 서비스</h2>
              <p>
                서비스 제공과 품질 개선을 위해 다음 서비스를 이용합니다.
              </p>
              <ul className={policyList}>
                <li>
                  <strong>Tesla OAuth 및 Fleet API:</strong> 선택적 계정 연동, 토큰
                  발급·갱신과 차량 목적지 전송에 사용합니다. 앱은{" "}
                  <code>openid offline_access vehicle_cmds</code> 권한을 요청합니다.
                  <code>vehicle_cmds</code>는 넓은 차량 명령 권한이지만 현재 앱에서는
                  목적지 전송에만 사용합니다.
                </li>
                <li>
                  <strong>Kakao Local REST API:</strong> 목적지 키워드·주소 검색에
                  사용합니다.
                </li>
                <li>
                  <strong>Firebase Analytics 및 Crashlytics:</strong> 앱 이용 통계와
                  충돌 원인 분석에 사용합니다.
                </li>
                <li>
                  <strong>Sentry:</strong> 배포 설정에서 활성화된 경우 오류, 성능과
                  진단 정보를 분석합니다. 차량 등록 진단에는 VIN 일부가 포함될 수
                  있습니다.
                </li>
                <li>
                  <strong>카카오모빌리티 SDK:</strong> 지도와 경로 안내를 제공하기
                  위해 현재 위치와 목적지 정보를 처리합니다. Kakao Local REST API와는
                  별도의 서비스입니다.
                </li>
              </ul>
              <p>
                각 제3자 서비스가 처리하는 정보의 수집·이용·보관은 해당 사업자의
                개인정보처리방침을 따릅니다.
              </p>
            </section>

            <section className={policySection}>
              <h2>6. 개인정보의 국외 이전</h2>
              <p>
                Tesla 계정 연동과 목적지 전송을 선택하면 아래와 같이 정보가
                국외에서 처리될 수 있습니다. 국외 이전은 개인정보 보호법
                제28조의8에 따른 별도 동의 또는 계약 이행에 필요한 처리위탁·보관
                요건을 갖춘 뒤 진행합니다.
              </p>

              <h3 className={policySubheading}>Render Services, Inc.</h3>
              <dl className={policyFacts}>
                <div>
                  <dt>국가·연락처</dt>
                  <dd>싱가포르 및 미국 · privacy@render.com</dd>
                </div>
                <div>
                  <dt>항목·목적</dt>
                  <dd>
                    인증 코드, 접근·갱신 토큰, VIN과 목적지 좌표 · Tesla 계정 연동과
                    목적지 전송 중계
                  </dd>
                </div>
                <div>
                  <dt>시기·방법</dt>
                  <dd>Tesla 연동 또는 목적지 전송 시 암호화 통신</dd>
                </div>
                <div>
                  <dt>보유기간</dt>
                  <dd>요청 처리 중 일시 처리하며 영구 저장하지 않습니다.</dd>
                </div>
                <div>
                  <dt>거부·영향</dt>
                  <dd>
                    Tesla 계정을 연동하지 않거나 앱에서 연동을 해지할 수 있습니다.
                    거부하면 Tesla 목적지 전송만 사용할 수 없고 BLE 대시보드 기능은
                    계속 이용할 수 있습니다.
                  </dd>
                </div>
              </dl>

              <h3 className={policySubheading}>Tesla OAuth 및 Fleet API</h3>
              <dl className={policyFacts}>
                <div>
                  <dt>수령자·국가</dt>
                  <dd>
                    Tesla Fleet API의 실제 처리 국가와 담당 법인은 Tesla에 확인이
                    필요합니다. 연락처는{" "}
                    <a className={policyLink} href="https://www.tesla.com/legal/privacy">
                      Tesla 개인정보 보호 안내
                    </a>
                    를 따릅니다.
                  </dd>
                </div>
                <div>
                  <dt>항목·목적</dt>
                  <dd>
                    인증 코드와 토큰, VIN과 목적지 좌표 · 계정 인증과 차량 목적지
                    전송
                  </dd>
                </div>
                <div>
                  <dt>시기·방법</dt>
                  <dd>계정 연동, 토큰 갱신 또는 목적지 전송 시 암호화 통신</dd>
                </div>
                <div>
                  <dt>보유기간</dt>
                  <dd>Tesla의 개인정보처리방침과 계약에 따릅니다.</dd>
                </div>
                <div>
                  <dt>거부·영향</dt>
                  <dd>
                    Tesla 계정을 연동하지 않거나 앱에서 연동을 해지할 수 있습니다.
                    거부하면 Tesla 목적지 전송만 사용할 수 없고 BLE 대시보드 기능은
                    계속 이용할 수 있습니다.
                  </dd>
                </div>
              </dl>
            </section>

            <section className={policySection}>
              <h2>7. 광고 및 추적 정책</h2>
              <p>
                본 앱은 광고를 표시하기 위한 SDK를 포함하지 않습니다. Firebase
                Analytics의 기기 식별자와 광고 관련 정보 처리 여부는 Google 서비스
                및 배포 설정에 따라 달라질 수 있으며, 당사는 해당 분석 정보를 앱
                내 광고 제공에 사용하지 않습니다.
              </p>
            </section>

            <section className={policySection}>
              <h2>8. 데이터 보관 및 파기</h2>
              <ul className={policyList}>
                <li>
                  <strong>기기 데이터:</strong> 앱을 삭제하면 일반적으로 기기 내 앱
                  저장소의 차량 정보, 설정, 통신 키와 마지막 위치 정보가 함께
                  삭제됩니다. 앱 안에서 차량을 삭제하는 경우 차량 목록 정보는
                  제거되지만 기존 통신 키의 삭제 범위는 보장되지 않습니다.
                </li>
                <li>
                  <strong>Tesla OAuth 세션:</strong> 앱에서 연동을 해지하거나 앱을
                  삭제할 때 기기에 저장된 토큰을 삭제합니다. 인증이 만료 또는
                  무효화되어 갱신할 수 없는 경우에도 로컬 세션을 삭제합니다.
                </li>
                <li>
                  <strong>자체 프록시:</strong> 인증 코드, 토큰, VIN과 목적지 좌표를
                  요청 중 일시 처리하며 데이터베이스나 파일에 영구 저장하지 않습니다.
                </li>
                <li>
                  <strong>통화 상태:</strong> 앱이 실행되는 동안 메모리에만 유지하며
                  기기나 서버에 저장하지 않습니다.
                </li>
                <li>
                  <strong>제3자 처리 데이터:</strong> 제3자 서비스가 처리한 정보의
                  보관 및 삭제는 각 사업자의 정책과 계약을 따릅니다.
                </li>
              </ul>
            </section>

            <section className={policySection}>
              <h2>9. 사용자의 권리</h2>
              <p>
                사용자는 언제든지 기기 설정에서 앱의 Bluetooth, 위치, 전화 등 권한을
                철회할 수 있습니다. 다만 필수 권한을 철회하면 차량 연결과 대시보드
                기능 이용이 제한될 수 있습니다.
              </p>
              <p>
                전화 권한은 기기 설정의 앱 권한 화면에서, 다른 앱 위에 표시 권한은
                특별 접근 권한 화면에서 각각 철회할 수 있습니다. 두 권한을 철회하면
                통화 종료 버튼과 통화 후 자동 복귀 기능만 동작하지 않으며 나머지
                기능은 영향을 받지 않습니다.
              </p>
              <p>
                앱의 Tesla 연동 해지는 기기에 저장된 토큰을 삭제하는 기능입니다.
                Tesla 계정에 부여된 제3자 앱 승인 자체를 완전히
                철회하려면 Tesla 계정의 <strong>보안 및 개인정보 보호 → 제3자 앱</strong>
                에서 Tesdrive 접근 권한을 별도로 철회해야 합니다. 자세한 절차는{" "}
                <a
                  className={policyLink}
                  href="https://www.tesla.com/support/access-third-party-apps"
                >
                  Tesla 제3자 앱 접근 관리 안내
                </a>
                에서 확인할 수 있습니다.
              </p>
              <p>
                Tesla 계정 연동 또는 국외 이전을 거부하면 목적지 전송 기능만 사용할
                수 없으며, 나머지 BLE 대시보드 기능은 계속 이용할 수 있습니다.
              </p>
            </section>

            <section className={policySection}>
              <h2>10. 아동의 개인정보 보호</h2>
              <p>
                당사는 만 14세 미만 아동의 개인정보를 고의로 수집하지 않습니다.
                Tesdrive for Tesla는 만 14세 미만 아동을 대상으로 제공되는 서비스가
                아닙니다. 관련 문의가 있다면 아래 연락처로 알려주시기 바랍니다.
              </p>
            </section>

            <section className={policySection}>
              <h2>11. 문의처</h2>
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
