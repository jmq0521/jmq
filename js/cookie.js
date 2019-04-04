function createCookie(key,value,expires){
	var cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';
	if(typeof expires == 'number'){
		var date = new Date();
		date.setDate(date.getDate() + expires);
		cookieText += ";expires=" + date;
	}
	document.cookie = cookieText;
}

function getCookie(key){ 
   var cookieKey = encodeURIComponent(key) + '=';
   var start = document.cookie.indexOf(cookieKey);
   if(start != -1){
	   var end = document.cookie.indexOf(';',start);
	   if(end == -1){
		   end = document.cookie.length;
	   }
	   return decodeURIComponent(document.cookie.substring(start + cookieKey.length,end));
   }
}

function $getCookie(key){
	var arr = document.cookie.split('; ');
	for(var i = 0,len = arr.length;i < len ;i ++){
		var list = arr[i].split('=');
	    if(encodeURIComponent(key) == list[0]){
		   return decodeURIComponent(list[1]);
	    }
	}
}
function removeCookie(key){
	document.cookie = encodeURIComponent(key) + "=;expires=" + new Date(0) + ";path=/";
}