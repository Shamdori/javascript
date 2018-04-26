document.addEventListener("DOMContentLoaded", function(){
	// validation
	function memberValidation() {
		// hidden input
		var userId = document.joinForm.userId;
		var userPassword = document.joinForm.userPassword;
		var userName = document.joinForm.userName;
		var userEmail = document.joinForm.userEmail;
		var userPhone = document.joinForm.userPhone;

		// member input
		var memberId = document.joinForm.memberId;
		var memberPassword = document.joinForm.memberPassword;
		var memberPasswordConfirm = document.joinForm.memberPasswordConfirm;
		var memberName = document.joinForm.memberName;
		var memberEmailId = document.joinForm.memberEmailId;
		var memberEmailDirect = document.joinForm.memberEmailDirect;
		var memberEmailDomain = document.getElementById('memberEmailDomain');
		var memberEmail = memberEmailId.value + '@' + memberEmailDirect.value;
		var memberPhone = document.joinForm.memberPhone;

		// 조건식
		var reId = /^[a-z]+[a-z0-9]/;
		var reId2 = /^[0-9]/;
		var rePassword = /([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~,-])|([!,@,#,$,%,^,&,*,?,_,~,-].*[a-zA-Z0-9])/;
		var reName = /^[ㄱ-ㅎ가-힣]/;
		var reEmailId = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		var rePhone = /^01([0|1|6|7|8|9]?)([0-9]{3,4})([0-9]{4})$/;

		// error text element
		var errorId = document.querySelector('.wrap_id .txt_error');
		var errorPassword = document.querySelector('.wrap_password .txt_error');
		var errorPasswordConfirm = document.querySelector('.wrap_password2 .txt_error');
		var errorName = document.querySelector('.wrap_name .txt_error');
		var errorEmail = document.querySelector('.wrap_email .txt_error');
		var errorPhone = document.querySelector('.wrap_phone .txt_error');

		// 아이디
		if(memberId.value == ''){
			errorId.innerHTML = '아이디를 입력하세요.';
		}else if(memberId.value.length < 2){
			errorId.innerHTML = '아이디는 2자 이상 입력하세요.';
		}else if(reId2.test(memberId.value)) {
			errorId.innerHTML = '아이디는 영문 소문자로 시작해야합니다.';
		}else if(!reId.test(memberId.value)) {
			errorId.innerHTML = '영문과 숫자만 사용할 수 있습니다.';
		}else {
			errorId.innerHTML = 'Good!!!';
			userId.value = memberId.value;
			console.log(userId.value);
			console.log(memberId.value);
		}

		// 비밀번호
		if(memberPassword.value == ''){
			errorPassword.innerHTML = '비밀번호를 입력하세요.';
		}else if(!rePassword.test(memberPassword.value)) {
			errorPassword.innerHTML = '비밀번호는 영문(대소문자구분),숫자,특수문자(~!@#$%^&*()-_? 만 허용)를 혼용하여 입력해주세요.';
		}else {
			errorPassword.innerHTML = 'Good!!!';
		}

		// 비밀번호 확인
		if(memberPasswordConfirm.value == ''){
			errorPasswordConfirm.innerHTML = '비밀번호를 재입력 하세요.';
		}else if(memberPasswordConfirm.value != memberPassword.value){
			errorPasswordConfirm.innerHTML = '비밀번호가 일치하지 않습니다.';
		}else {
			errorPasswordConfirm.innerHTML = 'Good!!!';
			userPassword.value = memberPassword.value;
		}

		// 이름
		if(memberName.value == ''){
			errorName.innerHTML = '이름을 입력하세요.';
		}else if(!reName.test(memberName.value)) {
			errorName.innerHTML = '이름은 한글로만 입력해주세요.';
		}else {
			errorName.innerHTML = 'Good!!!';
			userName.value = memberName.value;
		}

		// 이메일
		if(memberEmailId.value == '' || memberEmailDirect.value == '') {
			errorEmail.innerHTML = '이메일을 입력하세요.';
		}else if(!reEmailId.test(memberEmail)) {
			errorEmail.innerHTML = '이메일 형식에 맞게 입력해주세요.';
		}else{
			errorEmail.innerHTML = 'Good!!!';
			userEmail.value = memberEmail;
		}

		// 휴대폰번호
		if(memberPhone.value == ''){
			errorPhone.innerHTML = '핸드폰번호를 입력하세요.';
		}else if(memberPhone.value.indexOf('-') != -1){
			errorPhone.innerHTML = '"-"를 제외하고 입력하세요.';
		}else if(!rePhone.test(memberPhone.value)) {
			errorPhone.innerHTML = '휴대폰번호를 형식에 맞게 입력하세요.';
		}else {
			errorPhone.innerHTML = 'Good!!!';
			userPhone.value = memberPhone.value;
		}
	}

	// 이메일 도메인 선택
	function emailSelect() {
		var memberEmailDirect = document.joinForm.memberEmailDirect;
		var memberEmailDomain = document.getElementById('memberEmailDomain');

		if(memberEmailDomain.value == '') {
			memberEmailDirect.readOnly = false;
			memberEmailDirect.value = '';
		}else {
			memberEmailDirect.readOnly = true;
			memberEmailDirect.value = memberEmailDomain.options[memberEmailDomain.selectedIndex].value;
		}
	}

	// 약관동의
	function memberAgree() {
		var memberAgree = document.joinForm.memberAgree;
		var memberAgreeCheck = false;

		var errorAgree = document.querySelector('.wrap_agree .txt_error');

		if(!memberAgreeCheck){
			errorAgree.innerHTML = '약관동의를 선택해주세요.';
		};

		for(var i = 0; i < memberAgree.length; i++) {
			if(memberAgree[0].checked) {
				memberAgreeCheck = true;
				errorAgree.innerHTML = '동의완료!!';
				break;
			}else if(memberAgree[1].checked) {
				memberAgreeCheck = true;
				errorAgree.innerHTML = '약관에 동의하지 않으면 서비스 이용에 제한이 있을 수 있습니다.';
				break;
			}
		}
	}

	// 실행
	function joinForm() {
		emailSelect();
		memberValidation();
		memberAgree();
	}

	// 이벤트
	document.getElementById('memberEmailDomain').addEventListener("change", emailSelect, false);
	document.getElementById('memberJoin').addEventListener('click', joinForm, false);
});