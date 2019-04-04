function ajax(url,fnWin,fnFaild){
	//1.买手机(创建XMLHttpRequest对象)
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	//2.拨号(与服务器建立连接)
	xhr.open("GET",url,true);
	//3.说话(发送请求)
	xhr.send();
	//4.听(接收返回)
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				if(typeof fnWin === 'function'){
					fnWin(xhr.responseText);
				}
				
			}else{
				if(typeof fnFaild === 'function'){
					fnFaild();
				}
				
			}
		}
	}
}

