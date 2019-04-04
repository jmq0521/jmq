//首页轮播图
$(function() {
	function Banner() {
		this.banner = $("#banner");
		this.ul = $("#banner > ul");
		this.liIw = $("#banner >ul li").eq(0).width();
		this.dir = $("#dir >a");
		this.aBtn = $("#circle > a");
		this.iNow = 0;
		this.len = 0;
		this.timer = null;
		this.init();
	}
	Banner.prototype = {
		constructor: Banner,
		init: function() {
			this.ul.css("width", $("#banner >ul >li").length * this.liIw);
			this.len = $("#banner > ul >li").length;
			this.autoPlay();
			this.overBanner();
			this.outBanner();
			this.prevclick();
			this.nextClick();
			this.toggle();
		},
		toggle: function() {
			$.each(this.aBtn, $.proxy(this.handleEach, this))
		},
		handleEach: function(i) {
			this.aBtn.eq(i).on("mouseover", i, $.proxy(this.handleToggle, this))
		},
		handleToggle: function(e) {
			var index = e.data;
			this.aBtn.eq(index).addClass("active").siblings().remove("active");
			this.iNow = index;
			this.toImg();
		},
		nextClick: function() {
			this.dir.eq(1).click($.proxy(this.handleNext, this))
		},
		handleNext: function() {
			if(this.iNow == this.len - 1) {
				this.iNow = 0;
				this.ul.css("left", this.liIw);
			} else {
				this.iNow++;
			}
			this.toImg();
		},
		prevclick: function() {
			this.dir.eq(0).click($.proxy(this.handleprev, this))
		},
		handleprev: function() {
			if(this.iNow == 0) {
				this.iNow = this.len - 1;
				this.ul.css("left", -(this.len - 1) * this.liIw)
			} else {
				this.iNow--;
			}
			this.toImg();
		},
		overBanner: function() {
			this.banner.mouseover($.proxy(this.handleoverBanner, this))
		},
		handleoverBanner: function() {
			clearInterval(this.timer)
		},
		outBanner: function() {
			this.banner.mouseout($.proxy(this.handleoutBanner, this))
		},
		handleoutBanner: function() {
			this.autoPlay();
		},
		autoPlay: function() {
			this.timer = setInterval($.proxy(this.handleAuto, this), 2000)
		},
		handleAuto: function() {
			if(this.iNow == this.len - 1) {
				this.iNow = 0;
				this.ul.css("left", this.liIw);
			} else {
				this.iNow++;
			}
			this.toImg();
		},
		toImg: function() {
			this.ul.animate({
				left: -this.iNow * this.liIw
			})
			this.aBtn.eq(this.iNow).addClass("active").siblings().removeClass("active");
		}
	}
	new Banner();
})
//首页 top鼠标移入移出
$(function() {
	$("#top-right p").bind({
		mouseenter: function() {
			$("#top-right img").css("display", "block");
		},
		mouseleave: function() {
			$("#top-right img").css("display", "none");
		}
	})
})
$(function() {
	$("#top-right img").bind({
		mouseenter: function() {
			$("#top-right img").css("display", "block");
		},
		mouseleave: function() {
			$("#top-right img").css("display", "none");
		}
	})
})

//首页 header文本框获取焦点失去焦点
$(function() {
	$("#txt").bind({
		focus: function() {
			$(this).val("");
		},
		blur: function() {
			$(this).val("MK包包");
		}
	})
})

//首页 bottom手机 微信移入移出
$(function() {
	$(".sj").mouseenter(function() {
		$("#sj").css("display", "block");
		$("#wx").css("display", "none");
	})
})
$(function() {
	$(".wx").mouseenter(function() {
		$("#sj").css("display", "none");
		$("#wx").css("display", "block");
	})
})

$(function() {
	$("aside p").click(function() {
		$("body,html").animate({
			scrollTop: 0
		}, "fast");
	})
})


//首页 侧边滑入滑出
$(function() {
	$("aside ul #list1").bind({
		mouseenter: function() {
			$(".list1").slideDown(150);
		},
		mouseleave: function() {
			$(".list1").slideUp(150);
		}
	})
})
$(function() {
	$("aside ul #list2").bind({
		mouseenter: function() {
			$(".list2").slideDown(150);
		},
		mouseleave: function() {
			$(".list2").slideUp(150);
		}
	})
})
$(function() {
	$("aside ul #list3").bind({
		mouseenter: function() {
			$(".list3").slideDown(150);
		},
		mouseleave: function() {
			$(".list3").slideUp(150);
		}
	})
})
$(function() {
	$("aside ul #list4").bind({
		mouseenter: function() {
			$(".list4").slideDown(150);
		},
		mouseleave: function() {
			$(".list4").slideUp(150);
		}
	})
})


//登录页用户名密码失焦获焦
$(function() {
	$("#username").bind({
		focus: function() {
			$("#name").css("display", "block");
		},
		blur: function() {
			$("#name").css("display", "none");
		}
	})
})
$(function() {
	$("#password").bind({
		focus: function() {
			$("#pass").css("display", "block");
		},
		blur: function() {
			$("#pass").css("display", "none");
		}
	})
})


//注册页表单验证
//用户名
$(function() {
	$("#username").bind({
		focus: function() {
			$(this).css("border-color", "blue");
		},
		blur: function() {
			$(this).css("border-color", "");
			var res = /^[a-zA-z0-9]{6,8}$/;
			if(res.test($(this).val())) {
				$("#put1").html("-可以注册");
				$("#put1").css("color", "green");
			} else if($(this).val() == "") {
				$("#put1").html("*用户名不能为空");
				$("#put1").css("color", "red");
			} else {
				$("#put1").html("*6个字符组成必须是字母与数字组成");
				$("#put1").css("color", "red");
			}
		}
	})
})
//email
$(function() {
	$("#email").bind({
		focus: function() {
			$(this).css("border-color", "blue");
		},
		blur: function() {
			$(this).css("border-color", "");
			var res = /^\d+@\w+\.(com||cn)$/;
			if(res.test($(this).val())) {
				$("#put2").html("-邮箱格式正确");
				$("#put2").css("color", "green");
			} else if($(this).val() == "") {
				$("#put2").html("*邮箱不能为空");
				$("#put2").css("color", "red");
			} else {
				$("#put2").html("*qq邮箱的格式 .com或者.cn结尾");
				$("#put2").css("color", "red");
			}
		}
	})
})
//密码
$(function(){
	$("#password").bind({
		focus: function() {
			$(this).css("border-color", "blue");
		},
		blur: function() {
			$(this).css("border-color", "");
			var res = /^\w{6,}$/;
			if($(this).val() == "") {
				$("#put3").html("*密码不能为空");
				$("#put3").css("color", "red");
			}else{
				if(res.test($(this).val())) {
					$("#put3").html("-可以注册");
					$("#put3").css("color", "green");
				} else {
					$("#put3").html("*至少6个字符");
					$("#put3").css("color", "red");
				}
			}
		}
	})
})
//确认密码
$(function() {
	$("#password1").bind({
		focus: function() {
			$(this).css("border-color", "blue");
		},
		blur: function() {
			$(this).css("border-color", "");
			if($(this).val() == $("#password").val()&&$(this).val()!="") {
				$("#put4").html("-密码确认成功");
				$("#put4").css("color", "green");
			}else{
				$("#put4").html("*俩次密码必须一致");
				$("#put4").css("color", "red");
			}
		}
	})
})
//QQ
$(function() {
	$("#QQ").bind({
		focus: function() {
			$(this).css("border-color", "blue");
		},
		blur: function() {
			$(this).css("border-color", "");
			var res = /^\d{8,11}$/;
			if(res.test($(this).val())) {
				$("#put5").html("-QQ号输入正确");
				$("#put5").css("color", "green");
			} else {
				$("#put5").html("*8-11位的数字组成");
				$("#put5").css("color", "red");
			}
		}
	})
})
//手机号
$(function() {
	$("#SJ").bind({
		focus: function() {
			$(this).css("border-color", "blue");
		},
		blur: function() {
			$(this).css("border-color", "");
			var res = /^\d{11}$/;
			if(res.test($(this).val())) {
				$("#put6").html("-手机号输入正确");
				$("#put6").css("color", "green");
			} else if($(this).val() == "") {
				$("#put6").html("*手机号不能为空");
				$("#put6").css("color", "red");
			} else {
				$("#put6").html("*11位数字组成");
				$("#put6").css("color", "red");
			}
		}
	})
})
//个人主页
$(function() {
	$("#ZY").bind({
		focus: function() {
			$(this).css("border-color", "blue");
		},
		blur: function() {
			$(this).css("border-color", "");
			var res = /^http\:\/{2}.+\.com$/;
			if(res.test($(this).val())) {
				$("#put7").html("-输入正确");
				$("#put7").css("color", "green");
			} else {
				$("#put7").html("*http://开头 .com结尾 ");
				$("#put7").css("color", "red");
			}
		}
	})
})

//立即登录按钮
$(function() {
	$("#Btn1").click(function() {
		if($("#username").val() == "" && $("#password").val() != "") {
			alert("用户名不能为空");
		} else if($("#password").val() == "" && $("#username").val() != "") {
			alert("登录密码不能为空")
		} else if($("#username").val() == "" && $("#password").val() == "") {
			alert("用户名 密码不能为空")
		}
		var UsernameGet = $getCookie("username");
		var PasswordGet = $getCookie("password");
		if($("#username").val() != UsernameGet&&$("#username").val() !="") {
			alert("用户名不存在");
		} else if($("#password").val() != PasswordGet&&$("#password").val() !="") {
			alert("密码不正确");
		}
		if($("#username").val() == UsernameGet && $("#password").val() == PasswordGet&&$("#username").val() !=""&&$("#password").val() !="") {
			window.location="index.html";
			alert("登录成功");
		}
	})
})
$(function() {
	$("#Btn2").click(function() {
		createCookie('username', $("#username").val(), 100);
		createCookie('password', $("#password").val(), 100);
		if($("#username").val() == "" && $("#password").val() != "" && $("#password1").val() != "" && $("#email").val() != "" && $("#SJ").val() != "") {
			alert("用户名不能为空");
		}else if($("#password").val() == "" && $("#username").val() != "" && $("#email").val() != "" && $("#SJ").val() != "") {
			alert("登录密码不能为空");
		}else if($("#email").val() == "" && $("#username").val() != "" && $("#password").val() != "" && $("#password1").val() != "" && $("#SJ").val() != "") {
			alert("邮箱不能为空");
		}else if($("#SJ").val() == "" && $("#username").val() != "" && $("#email").val() != "" && $("#password").val() != "" && $("#password1").val() != "") {
			alert("手机号不能为空");
		}else if($("#username").val() == "" && $("#password").val() == "" && $("#email").val() == "" && $("#SJ").val() == "") {
			alert("用户名  密码  邮箱  手机号 不能为空");
		}else if($("#SJ").val() != "" && $("#username").val() != "" && $("#email").val() != "" && $("#password").val() != "" && $("#password").val() != "") {
			window.location="login.html";
			alert("注册成功");
		}
	})
	
})

//列表页列表加减号
$(function() {
	$("#ul-left li span").bind({
		mouseenter:function(){
			$(this).html("-");
		},
		mouseleave:function(){
			$(this).html("+");
		}
	})	
})


//列表页ajax页面获取
$(function(){
	var index = 1;//页码
	var pageNum = 16;//每页的数据量
	$.ajax({
		type:"get",
		url:"js/data.json",
		async:true,
		success : function(arr){
			var conStr = "";
			for( var i = (index-1)*pageNum ; i < index*pageNum ; i++ ){
				var pro = arr[i];
				if( i < arr.length ){
					conStr += `<li>
								<a href="shop.html"><img src="img/${pro.src}" alt="" /></a>
								<p>${ pro.name }</p>
								<h5>${ pro.money }</h5>
								<span>${ pro.price }</span>
								<button>立即购买</button>
							</li>`;
				}
			}
			$("#box-list").html(conStr);
			$("#box-list li p").addClass("pp");
			$("#box-list li span").addClass("price");
			$("#box-list li h5").addClass("money");
			$("#box-list li button").addClass("bt");
			var  pageTotal = Math.ceil(arr.length/pageNum);
			$(".page").pagination({
				pageCount:pageTotal,
				keepShowPN : true,
				callback : function(api){
					index = api.getCurrent();
					$.getJSON("js/data.json",function(arr){
						    var conStr = "";
							for( var i = (index-1)*pageNum ; i < index*pageNum ; i++ ){
								var pro = arr[i];
								if( i < arr.length ){
									conStr += `<li>
													<img src="img/${pro.src}" alt="" />
													<p>${ pro.name }</p>
													<h5>${ pro.money }</h5>
													<span>${ pro.price }</span>
													<button>立即购买</button>
												</li>`;
								}
							}
						$("#box-list").html(conStr);
						$("#box-list li p").addClass("pp");
						$("#box-list li span").addClass("price");
						$("#box-list li h5").addClass("money");
						$("#box-list li button").addClass("bt");
					})
				}
			})
		}
	})
})

//详情页 尺寸加减号
$(function() {
	$("#big span").bind({
		mouseenter:function(){
			$(this).html("-");
		},
		mouseleave:function(){
			$(this).html("+");
		}
	})
	
})
//详情页倒计时
var starttime = new Date("2018/12/14");
setInterval(function(){
    var nowtime = new Date();
    var time = starttime - nowtime;
    var day = parseInt(time / 1000 / 60 / 60 / 24);
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    var minute = parseInt(time / 1000 / 60 % 60);
    var seconds = parseInt(time / 1000 % 60);
    if (day <= 9) day = '0' + day;
    if (hour <= 9) hour = '0' + hour;
    if (minute <= 9) minute = '0' + minute;
	if (seconds <= 9) seconds = '0' + seconds;
	$('.day-show').html(day);
	$('.hour-show').html(hour);
	$('.minute-show').html(minute);
	$('.second-show').html(seconds);
}, 1000);

//详情页选项卡切换
$(function(){
	$('#shop-bottom #shop-ul li').click(function(){
		$(this).addClass('ul-list').siblings().removeClass('ul-list');
		$('#shop-bottom>div:eq('+$(this).index()+')').show().siblings().not("#shop-ul").hide()
	})
});

//详情页加入购物车
$(function(){
	$("#sub1").click(function(){
		$(".header-right form span").html($("#box-three p input").val());
	})
})


//详情页放大镜图片路径的变化
$(function(){
	$("#left-box img").bind({
		mouseenter:function(){
			$(this).css("border-color","black");
		},
		mouseleave:function(){
			$(this).css("border-color","red");
		},
	})
	
})
$(function(){
	$("#left-box img").click(function(){
		var small_src=$(this).attr("src");
		var big_src=$(this).attr("src");
		$("#s-img img").attr("src",small_src);
		$("#b-img #img").attr("src",big_src);
	})
})


//首页楼梯
$(function(){
	var flag = true;//假设值为true时  可以触发滚动条
	$("#Louti li:not(.last)").click(function(){
		flag = false;
		$(this).find("span")
			   .addClass("active")
			   .end()
			   .siblings()
			   .find("span")
			   .removeClass("active");
		var index = $(this).index();
		var t = $("#behalf_warp #behalf").eq(index).offset().top;
		$("body,html").animate({scrollTop : t},1000,function(){
			flag = true;
		});
	})
	$(window).scroll(function(){
		if( flag ){
			var sTop = $(document).scrollTop();
			$floor = $("#behalf_warp #behalf").filter( function(){
				return Math.abs( $(this).offset().top-sTop ) < $(this).height()/2;
			} )
			var index = $floor.index();
			if( index!=-1 ){
				$("#Louti li:not(.last)").eq(index)
									        .find("span")
									        .addClass("active")
									        .end()
									        .siblings()
									        .find("span")
									        .removeClass("active");
			}
			if( sTop < 100 ){
				$("#Louti li:not(.last)").eq(0).find("span").removeClass("active");
			}
		}
	})
})

	
//首页向上的开关滑入滑出
$(function(){
	$(document).scroll(function(){
		var scrTop = $(window).scrollTop();
		if(scrTop>200){
			$("aside p").slideDown(150);
		}else{
			$("aside p").slideUp(150);
		}
	})
})