// 로그인 정규식 적기
// 아이디랑 비번이 같지 않을때에 대해서도 고민 해보기

export function Validator(body) {
    if (!/^([a-z0-9]+)$/.test(body.user_id)) {
        throw new Error('소문자와 숫자가 아닌 아이디 인지 확인을 해주세요.')
    }
}