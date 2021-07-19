export interface Member {
  number: any;          // 사원번호
  working: any;         // 근무상태
  work_sdate: any;      // 입사일
  work_edate: any;      // 퇴사일
  birth_date: any;      // 생년월일
  break_cnt: any;       // 기본연차
  break_cnt2: any;      // 추가연차
  position: any;        // 직급
  extension: any;       // 내선번호
  card_num: any;        // 출입카드
  tel: any;             // 전화번호
  phone: any;           // 핸드폰
  email: any;           // 이메일
  post: any;            // 우편번호
  addr1: any;           // 기본주소
  addr2: any;           // 상세주소
  img: any;             // 이미지
  comment: any;         //?
  sign_img: any;        // 싸인이미지
  level: any;           // ?
  modify: any;          //수정
  date: any;            // 날짜
  writer: any;          // ?
  title: any;           //?
  type: any;            //?
  company: string       // 회사
  department: string    // 부서
  rank: string          //?
  name: string          //?
  task: string          //?
  auth: string          // 권한
  checked?: boolean;
}