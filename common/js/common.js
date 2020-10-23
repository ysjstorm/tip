//logo 위치잡기
$(document).ready(function(){
	var $l_width=parseInt($("#wrap h1 a").css("width"));
	var $h_width=parseInt($("#wrap h1").css("width"));
	var left=($h_width)/2-($l_width)/2;
	$("#wrap h1 a").css("left",left);
});

// open popup
function newWindow(a_str_windowURL, a_str_windowName, a_int_windowWidth, a_int_windowHeight, a_bool_scrollbars, a_bool_resizable, a_bool_menubar, a_bool_toolbar, a_bool_addressbar, a_bool_statusbar, a_bool_fullscreen) {
  //var int_windowLeft = (screen.width - a_int_windowWidth) / 2;
  //var int_windowTop = (screen.height - a_int_windowHeight) / 2;
  var int_windowLeft = 0;
  var int_windowTop = 0;
  var str_windowProperties = 'height=' + a_int_windowHeight + ',width=' + a_int_windowWidth + ',top=' + int_windowTop + ',left=' + int_windowLeft + ',scrollbars=' + a_bool_scrollbars + ',resizable=' + a_bool_resizable + ',menubar=' + a_bool_menubar + ',toolbar=' + a_bool_toolbar + ',location=' + a_bool_addressbar + ',statusbar=' + a_bool_statusbar + ',fullscreen=' + a_bool_fullscreen + '';
  var obj_window = window.open(a_str_windowURL, a_str_windowName, str_windowProperties)
    if (parseInt(navigator.appVersion) >= 4) {
      obj_window.window.focus();
    }
}

//GNB
//<![CDATA[
  
//활성화페이지 보여질부분조절
$(function(){

	$('#gnb').menuModel1({hightLight:{level_1:0,level_2:0,level_3:0},target_obj:'#gnb',showOps:{visibility:'visible'},hideOps:{visibility:'hidden'}});

})

//]]>

$(function(){
	$("#msNavi01>ul").bind("mouseover focus", function(){
		$("#msNavi01").children("a").addClass("hover");
		$(this).css("visibility","visible");
		$(this).focus;
	});
	$("#msNavi01>ul").bind("mouseout blur", function(){
		$("#msNavi01").children("a").removeClass("hover");
		$("#msNavi01>ul").css("visibility","hidden");
	});
	$("#msNavi01").bind("mouseout blur", function(){
		$(this).children("a").removeClass("hover");
		$("#msNavi01>ul").css("visibility","hidden");
	});
	$("#msNavi02>ul").bind("mouseover focus", function(){
		$("#msNavi02").children("a").addClass("hover");
		$(this).css("visibility","visible");
	});
	$("#msNavi02>ul").bind("mouseout blur", function(){
		$("#msNavi02").children("a").removeClass("hover");
		$("#msNavi02>ul").css("visibility","hidden");
	});
	$("#msNavi02").bind("mouseout blur", function(){
		$(this).children("a").removeClass("hover");
		$("#msNavi02>ul").css("visibility","hidden");
	});
	$("#msNavi03>ul").bind("mouseover focus", function(){
		$("#msNavi03").children("a").addClass("hover");
		$(this).css("visibility","visible");
	});
	$("#msNavi03>ul").bind("mouseout blur", function(){
		$("#msNavi03").children("a").removeClass("hover");
		$("#msNavi03>ul").css("visibility","hidden");
	});
	$("#msNavi03").bind("mouseout blur", function(){
		$(this).children("a").removeClass("hover");
		$("#msNavi03>ul").css("visibility","hidden");
	});
	//$("#gnb>ul").bind("mouseout blur", function(){
	//	$(this).children("li").children("a").removeClass("hover");
	//	$(this).children("ul").css("visibility","hidden");
	//});
	$("#gnb").bind("mouseover focus", function(){
		$(this).focus;
	});
});

//
$(function(){
	$(".control_box>ul>li>a").bind("mouseover focus",function(){
		$(".control_box>ul>li>a").each(function(){
			$(this).children("img").attr("src",$(this).children("img").attr("src").replace("_on.png",".png"));
		});
		$(this).children("img").attr("src",$(this).children("img").attr("src").replace(".png","_on.png"));
	});
	$(".control_box>ul>li>a").bind("mouseout blur", function(){
		$(".control_box>ul>li>a").each(function(){
			$(this).children("img").attr("src",$(this).children("img").attr("src").replace("_on.png",".png"));
		});
	});
});

// print
var initBody;
function beforePrint()
{
	initBody = document.body.innerHTML;
	document.body.innerHTML = '<div id="print_area">'+document.getElementById('container').innerHTML+'</div>';
}

function afterPrint()
{
	document.body.innerHTML = initBody;
}

function PagePrint()
{
	window.onbeforeprint = beforePrint;
	window.onafterprint = afterPrint;
	window.print();
}


/* input text */
$(document).ready(function() {
	$('.input_id').focus(function() {
		if($(this).val() == "아이디")
		$(this).val('');
	}).blur(function() {
		if($(this).val() == "")
		$(this).val('아이디');
	});
	$('.input_name').focus(function() {
		if($(this).val() == "이름")
		$(this).val('');
	}).blur(function() {
		if($(this).val() == "")
		$(this).val('이름');
	});
	$('.input_phone').focus(function() {
		if($(this).val() == "휴대폰번호")
		$(this).val('');
	}).blur(function() {
		if($(this).val() == "")
		$(this).val('휴대폰번호');
	});
	$('.input_ie').focus(function() {
		if($(this).val() == "아이디(이메일)")
		$(this).val('');
	}).blur(function() {
		if($(this).val() == "")
		$(this).val('아이디(이메일)');
	});
	$('.input_add01').focus(function() {
		if($(this).val() == "도로명+건물번호")
		$(this).val('');
	}).blur(function() {
		if($(this).val() == "")
		$(this).val('도로명+건물번호');
	});
	$('.input_add02').focus(function() {
		if($(this).val() == "동(읍/면/리)명+지번")
		$(this).val('');
	}).blur(function() {
		if($(this).val() == "")
		$(this).val('동(읍/면/리)명+지번');
	});
	$('.input_add03').focus(function() {
		if($(this).val() == "건물명(아파트명 등)")
		$(this).val('');
	}).blur(function() {
		if($(this).val() == "")
		$(this).val('건물명(아파트명 등)');
	});
	$('.input_card').focus(function() {
		if($(this).val() == "카드 매수를 입력해 주세요.")
		$(this).val('');
	}).blur(function() {
		if($(this).val() == "")
		$(this).val('카드 매수를 입력해 주세요.');
	});
	$('.input_email').focus(function() {
		if($(this).val() == "이메일을 @ 이후 주소까지 입력하세요.")
		$(this).val('');
	}).blur(function() {
		if($(this).val() == "")
		$(this).val('이메일을 @ 이후 주소까지 입력하세요.');
	});
});

/* input radio */
$(document).ready(function(){  /* 선택된값의 value는 _value 에 있음 */
	var _designRadio = $('.designRadio');
	var _iLabel = $('.iLabel');
	$(_iLabel).click(function(){
		var _thisRadio = $(this).parent().find('> .designRadio');
		var _value = $(this).parent().find('>input').val();
		$(_designRadio).children().removeClass('checked');
		$(_thisRadio).children().addClass('checked');
	});
	$(_designRadio).click(function(){
		var _value = $(this).parent().find('>input').val();
		$(_designRadio).children().removeClass('checked');
		$(this).children().addClass('checked');
	});
});


//로그인 레이어 팝업
function pushLayerLogin(){
	var $width=parseInt($("#login_pop").css("width"));
	var $height=parseInt($("#login_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	//var sctop=$(window).scrollTop()*2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	//var height=document.getElementsByTagName("body")[0].scrollHeight;
	$("#login_pop").css("left",left);
	$("#login_pop").css("top",top);
	$("#login_pop").css("display","block");
	$("#join_pop").css("display","none");
	$("#findid_pop").css("display","none");
	$("#pwchange_pop").css("display","none");
	$("#garage_pop").css("display","none");
	//$("#lay_pop").css("z-index","555");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//회원가입 레이어 팝업
function pushLayerJoin(){
	var $width=parseInt($("#join_pop").css("width"));
	var $height=parseInt($("#join_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#join_pop").css("left",left);
	$("#join_pop").css("top",top);
	$("#join_pop").css("display","block");
	$("#login_pop").css("display","none");
	$("#findid_pop").css("display","none");
	$("#pwchange_pop").css("display","none");
	$("#garage_pop").css("display","none");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//아이디 찾기 결과 레이어 팝업
function pushLayerFind(){
	var $width=parseInt($("#findid_pop").css("width"));
	var $height=parseInt($("#findid_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#findid_pop").css("left",left);
	$("#findid_pop").css("top",top);
	$("#findid_pop").css("display","block");
	$("#login_pop").css("display","none");
	$("#pwchange_pop").css("display","none");
	$("#join_pop").css("display","none");
	$("#garage_pop").css("display","none");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//비밀번호 변경 레이어 팝업
function pushLayerPw(){
	var $width=parseInt($("#pwchange_pop").css("width"));
	var $height=parseInt($("#pwchange_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#pwchange_pop").css("left",left);
	$("#pwchange_pop").css("top",top);
	$("#pwchange_pop").css("display","block");
	$("#login_pop").css("display","none");
	$("#findid_pop").css("display","none");
	$("#garage_pop").css("display","none");
	$("#join_pop").css("display","none");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//차량예약 레이어 팝업
function pushLayerGarage(){
	var $width=parseInt($("#garage_pop").css("width"));
	var $height=parseInt($("#garage_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#garage_pop").css("left",left);
	$("#garage_pop").css("top",top);
	$("#garage_pop").css("display","block");
	$("#login_pop").css("display","none");
	$("#findid_pop").css("display","none");
	$("#pwchange_pop").css("display","none");
	$("#join_pop").css("display","none");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//회원 비밀번호 변경 레이어 팝업
function pushLayerMpw(){
	var $width=parseInt($("#member_pwchange_pop").css("width"));
	var $height=parseInt($("#member_pwchange_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#member_pwchange_pop").css("left",left);
	$("#member_pwchange_pop").css("top",top);
	$("#member_pwchange_pop").css("display","block");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//admin>관리자 관리>관리자등록 레이어 팝업
function pushLayerManage(){
	var $width=parseInt($("#manage_pop").css("width"));
	var $height=parseInt($("#manage_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#manage_pop").css("left",left);
	$("#manage_pop").css("top",top);
	$("#manage_pop").css("display","block");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//admin>차량관리>그룹선택 레이어 팝업
function pushLayerGroup(){
	var $width=parseInt($("#group_pop").css("width"));
	var $height=parseInt($("#group_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#group_pop").css("left",left);
	$("#group_pop").css("top",top);
	$("#group_pop").css("display","block");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//admin>차량관리>차고지선택 레이어 팝업
function pushLayerHouse(){
	var $width=parseInt($("#house_pop").css("width"));
	var $height=parseInt($("#house_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#house_pop").css("left",left);
	$("#house_pop").css("top",top);
	$("#house_pop").css("display","block");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//admin>차량관리>예약 불가능 시작일시 선택 레이어 팝업
function pushLayerImpossible(){
	var $width=parseInt($("#impossible_pop").css("width"));
	var $height=parseInt($("#impossible_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#impossible_pop").css("left",left);
	$("#impossible_pop").css("top",top);
	$("#impossible_pop").css("display","block");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//admin>차량관리>예약 가능 시작일시 선택 레이어 팝업
function pushLayerPossible(){
	var $width=parseInt($("#possible_pop").css("width"));
	var $height=parseInt($("#possible_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#possible_pop").css("left",left);
	$("#possible_pop").css("top",top);
	$("#possible_pop").css("display","block");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//admin>차량관리>차량제어 팝업
function pushLayerControl(){
	var $width=parseInt($("#control_pop").css("width"));
	var $height=parseInt($("#control_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#control_pop").css("left",left);
	$("#control_pop").css("top",top);
	$("#control_pop").css("display","block");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//admin>차량관리>주차위치 팝업
function pushLayerParking(){
	var $width=parseInt($("#parking_pop").css("width"));
	var $height=parseInt($("#parking_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#parking_pop").css("left",left);
	$("#parking_pop").css("top",top);
	$("#parking_pop").css("display","block");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//admin>기본정보관리>주소검색 레이어 팝업
function pushLayerAddress(){
	var $width=parseInt($("#address_pop").css("width"));
	var $height=parseInt($("#address_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#address_pop").css("left",left);
	$("#address_pop").css("top",top);
	$("#address_pop").css("display","block");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//admin>이용현황>최근 5년 이용현황 팝업
function pushLayerUsestate(){
	var $width=parseInt($("#use_state_pop").css("width"));
	var $height=parseInt($("#use_state_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#use_state_pop").css("left",left);
	$("#use_state_pop").css("top",top);
	$("#use_state_pop").css("display","block");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//sysadmin>기본정보관리>차량관리 법인/단체 선택 팝업
function pushLayerCompany(){
	var $width=parseInt($("#company_pop").css("width"));
	var $height=parseInt($("#company_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#company_pop").css("left",left);
	$("#company_pop").css("top",top);
	$("#company_pop").css("display","block");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//sysadmin>기본정보관리>차량관리 부대장치 선택 팝업
function pushLayerDevice(){
	var $width=parseInt($("#device_pop").css("width"));
	var $height=parseInt($("#device_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#device_pop").css("left",left);
	$("#device_pop").css("top",top);
	$("#device_pop").css("display","block");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
//sysadmin>기본정보관리>차량관리 단말기 선택 팝업
function pushLayerMobile(){
	var $width=parseInt($("#mobile_pop").css("width"));
	var $height=parseInt($("#mobile_pop").css("height"));
	var $w_height=parseInt($("#wrap").css("height"));
	var left=($(window).width()-$width)/2;
	var top=($w_height-$height)/2;
	var w_height=($w_height);
	$("#mobile_pop").css("left",left);
	$("#mobile_pop").css("top",top);
	$("#mobile_pop").css("display","block");
	$("#all_body").css("display","block");
	$("#all_body").css("width",$(window).width());
	$("#all_body").css("height",w_height);

}
function showDiv(obj_t) {   
	document.getElementById("textBox01").style.visibility = 'hidden';
	document.getElementById("textBox02").style.visibility = 'hidden';
	document.getElementById("textBox03").style.visibility = 'hidden';
	document.getElementById(obj_t).style.visibility = 'visible';
	document.getElementById(obj_t).focus();
}  

function layerClose(lay1,lay2){
	$("#"+lay1).css("display","none");
	$("#"+lay2).css("display","none");
}



$(document).ready(function(){
	$('.login_area input').focus(function(){
		$(this).addClass('over');
	});
	$('.login_area input').blur(function(){
		if($(this).val()){
		}else{
			$(this).removeClass('over');
		}
	});

	$(".checking :checkbox").css("opacity","0")
	$(".checking :checkbox").bind("click keydown", function(){
		//alert(123);
		if($(this).is(":checked")){
			$(this).parent().addClass("on");
		}else{
		$(this).parent().removeClass("on");
		}
	});

});
$(document).ready(function(){
	$('.login_box input').focus(function(){
		$(this).addClass('over');
	});
	$('.login_box input').blur(function(){
		if($(this).val()){
		}else{
			$(this).removeClass('over');
		}
	});

});
$(document).ready(function(){
	$('.input_telnum input').focus(function(){
		$(this).addClass('over');
	});
	$('.input_telnum input').blur(function(){
		if($(this).val()){
		}else{
			$(this).removeClass('over');
		}
	});

});
function imgCbox(N, tabstop) {

	var objs, cboxes, Img, Span, A;

	if (N == undefined) return false;
	if (tabstop == undefined) tabstop = true;
	if ((objs=document.getElementsByName(N)) == null) return false;

	for (var i=0; i < objs.length; i++) {
		if (objs[i].tagName.toLowerCase() != "input" || objs[i].type.toLowerCase() != "checkbox") continue;
		
		if (imgCbox.Objs[N] == undefined) {
			imgCbox.Objs[N] = imgCbox.ImgObjs[N] = [];
		}
		
		var len = imgCbox.Objs[N].length;
		imgCbox.Objs[N][len] = objs[i];
		imgCbox.ImgObjs[N][len] = {};
	
		// anchor element for tab stop
		A = document.createElement("A");
		if (tabstop) {
			A.href = "javascript:;";
		}
		A.onclick =  new Function("imgCbox.onclick('"+N+"','"+len+"')");
		A.style.borderWidth = "0px";
		A.style.cursor = "pointer";
		A.ID = "ID_save";

		// for image cache
		Img = document.createElement("IMG");
		Img.src = objs[i].getAttribute("onsrc");
		Img.style.borderWidth = "0px";
		Img.style.display = objs[i].checked?"":"none";
		imgCbox.ImgObjs[N][len]["on"] = Img;
		A.appendChild(Img);

		Img = document.createElement("IMG");
		Img.src = objs[i].getAttribute("offsrc");
		Img.style.borderWidth = "0px";
		Img.style.display = objs[i].checked?"none":"";
		imgCbox.ImgObjs[N][len]["off"] = Img;
		A.appendChild(Img);

		// insert object
		Span = objs[i].parentNode;
		Span.style.display = "none";
		Span.parentNode.insertBefore(A, Span);

	}
}
imgCbox.onclick = function(N, idx) {
	var C = imgCbox.Objs[N][idx];
	var I = imgCbox.ImgObjs[N][idx];

	C.checked = !C.checked;
	if (C.checked) {
		I["on"].style.display = "";
		I["off"].style.display = "none";
	} else {
		I["on"].style.display = "none";
		I["off"].style.display = "";
	}
	
	// fire event
	if (C.onclick != undefined && C.onclick != null) C.onclick();
}
imgCbox.Objs = {};
imgCbox.ImgObjs = {};

//첨부파일 이미지 변환
function fn_fileUpload(){
	var $imga = $('p.img_file01 input[type=image]');
	var $imgb = $('p.img_file02 input[type=image]');
	var imga_width = $imga.attr('width');
	var imgb_width = $imgb.attr('width');
	var $filea = $('p.img_file01 input.upload').css({
		"position": "absolute",
		"top": "2px",
		"right": "0px",
		"width": "63px",
		"height": "26px",
		"cursor": "pointer",
		"opacity": "0.0"
	});
	var $fileb = $('p.img_file02 input.upload').css({
		"position": "absolute",
		"top": "2px",
		"right": "0px",
		"width": "63px",
		"height": "26px",
		"cursor": "pointer",
		"opacity": "0.0"
	});
	$filea.bind('change',function(){
		var filenamea = $(this).val();
		$('p.img_file01 input.ipt').attr("disabled","disabled").val(filenamea);

	});
	$fileb.bind('change',function(){
		var filenameb = $(this).val();
		$('p.img_file02 input.ipt').attr("disabled","disabled").val(filenameb);

	});
};