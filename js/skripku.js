function cekLogin(){
	//tangkap request form
	let lgn  = window.document.getElementById("login");
	let uname = lgn.username.value;
	let pwd = lgn.password.value;
	if(uname == "mimin" && pwd == "mimin123"){
        alert("Selamat Datang" + uname + "Anda Administrator");
	}
	else if(uname == "budi" && pwd == "budi123"){
        alert("Selamat Datang" + uname + "Anda Operator");
	
	}
	else{
		alert("Maaf Anda Gagal Login");
	}
}

function kosongin(){
	//tangkap request form
	let lgn  = window.document.getElementById("box-login");
	lgn.username.value = "";
}

function kosongin2(){
	//tangkap request form
	let lgn  = window.document.getElementById("box-login");
	lgn.password.value = "";
}