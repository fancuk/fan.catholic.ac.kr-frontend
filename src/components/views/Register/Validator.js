// 회원가입 정규식 적기

export function Validator(body) {
    if (!/^([a-z0-9]+)$/.test(body.user_id)) {
        throw new Error('소문자와 숫자가 아닌 아이디 인지 확인을 해주세요.')
    } else if (!/^([가-힣]*)$/.test(body.name)) {
        throw new Error('이름을 다시 확인해주세요.')
    } else if (!/^([0-9])+$/.test(body.student_id)) {
        throw new Error('학번은 총 9자리며 숫자만 입력해주세요')
    } else if (!/(\d)/.test(body.grade)) {
        throw new Error('학년은 1~4학년까지 있습니다.')
    } else if (!/(\d)/.test(body.semester)) {
        throw new Error('학기는 1~2학기만 가능합니다.')
    } else if (!/(d{2,3}-\d{3,4}-\d{4})/.test(body.phone)) {
        throw new Error('전화번호를 다시 확인해주세요')
    } else if (!/([a-zA-Z0-9_-]+@[a-z]+.[a-z]+)/.test(body.email)) {
        throw new Error('이메일을 확인해주세요')
    }
}