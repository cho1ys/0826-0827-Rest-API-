"use strict";
document.addEventListener('DOMContentLoaded', () => {
    // DOM이 완전히 로드된 후 실행
    const submitBtn = document.querySelector('.submitbtn');
    const nameInput = document.querySelector('.name');
    const addressInput = document.querySelector('.address');
    const emailInput = document.querySelector('.email');
    submitBtn.addEventListener('click', async (event) => {
        event.preventDefault(); // 기본 동작 방지
        // 입력 필드 값 가져오기
        const name = nameInput.value;
        const address = addressInput.value;
        const email = emailInput.value;
        try {
            const response = await fetch('/api/v1/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, address, email }) // 입력 데이터를 JSON으로 변환하여 전송
            });
            if (response.ok) {
                alert('회원 정보가 성공적으로 저장되었습니다.');
            }
            else {
                alert('저장 중 오류가 발생했습니다.');
            }
        }
        catch (error) {
            console.error('Error:', error);
            alert('오류 발생');
        }
    });
});
