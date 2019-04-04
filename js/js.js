window.onload=function(){
	var oBox=document.getElementById('box');
	var oSmall=document.getElementById('s-img');
	var oMark=document.getElementById('mark');
	var oFloat=document.getElementById('float');
	var oBig=document.getElementById('b-img');
	var oImg=document.getElementById('img');
	//给遮罩添加鼠标移入事件
	oMark.onmouseover=function(){
		oFloat.style.display='block';
		oBig.style.display='block';
	}
	//给遮罩添加鼠标移出事件
	oMark.onmouseout=function(){
		oFloat.style.display='none';
		oBig.style.display='none';
	}
	//给遮罩添加鼠标移动事件
	oMark.onmousemove=function(evt){
		evt.evt||window.event;
		//求滑块距离他的父元素的位置
		var left=evt.pageX-oBox.offsetLeft-oFloat.offsetWidth/2;
		var top=evt.pageY-oBox.offsetTop-oFloat.offsetHeight/2;
		//边界
		if(left<=0){
			left=0;
		}else if(left>=oSmall.offsetWidth-oFloat.offsetWidth){
			left=oSmall.offsetWidth-oFloat.offsetWidth;
		}
		if(top<=0){
			top=0;
		}else if(top>=oSmall.offsetHeight-oFloat.offsetHeight){
			top=oSmall.offsetHeight-oFloat.offsetHeight;
		}
		oFloat.style.left=left+'px';
		oFloat.style.top=top+'px';
		//求小图的比例
		var disX=left/(oSmall.offsetWidth-oFloat.offsetWidth);
		var disY=top/(oSmall.offsetHeight-oFloat.offsetHeight);
		//求大图的位置
		oImg.style.left=-disX*(oImg.offsetWidth-oBig.offsetWidth)+'px';
		oImg.style.top=-disY*(oImg.offsetHeight-oBig.offsetHeight)+'px';
	}	
}

