
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