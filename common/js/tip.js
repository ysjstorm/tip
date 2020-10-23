$(function(){
	
	/* top 버튼 */
	var top = {
		init : function(){
			this.actions();
		},
		actions : function(){
			var bntTop  = $(".move_top");
			var winW,winH;
			var scrollCheck;

			function topScroll(){
				if(  $(window).scrollTop() > 400  ){
					scrollCheck = true;
				} else if(  $(window).scrollTop() < 400 ) {
					scrollCheck = false;
				}
				scrollCheck == true ? bntTop.fadeIn() : bntTop.fadeOut();
			}

			function topPos(){
				winW 	= $(window).width();
				winH 	= $(window).height();
				if( winW >= 1220){
					bntTop.css({ right : parseInt(((winW-1220))-40) })
				} else {
					bntTop.css({ right : 0 })
				}
			}

			topPos();

			$(window).scroll(function(){
				topScroll();
			});

			$(window).resize(function(){
				topPos();
			});

			bntTop.on({
				"click" : function(e){
					$("html,body").stop().animate({ scrollTop : 0 } , 800, "easeInOutQuart");
					e.preventDefault();
				}
			});
		}
	}

	/**
	/* Slide event
	*/
	$(".btn_slide").each(function(){
		var $BtnSlideToggle = $(this);
		var $BtnIcon = $BtnSlideToggle.children(".fa");
		//console.log($BtnIcon);
		$BtnSlideToggle.click(function(){
			$(this).parent(".slide_top").next(".slide_con").slideToggle();
			if($BtnIcon.hasClass("fa-angle-up")){
				$BtnIcon.switchClass("fa-angle-up","fa-angle-down");
			}else{
				$BtnIcon.switchClass("fa-angle-down","fa-angle-up");
			}
		});
	});

	/**
	/* 원형 progress bar
	*/
	$('.progress_bar').each(function(){
		var doms = '';
		var $m = $(this);
		var $data = $m.find('span');
		var data = $m.data('percent');
		var com = Math.round(data / 100 * 360);
		var dur = 2000;

		var getVendorPrefix = function() {
			var body = document.body || document.documentElement,
				style = body.style,
				transition = "Transition",
				vendor = ["Moz", "Webkit", "ms"],
				lastGage,
				i = 0;
			while (i < vendor.length) {
				if (typeof style[vendor[i] + transition] === "string") {
					return vendor[i];
				}
				i++;
			}
			return false;
		};
		var prefix = getVendorPrefix();
		var transform = prefix + 'Transform';

		for(var i=0; i <= com; i++){
			doms = '<div class="bar"></div>';
			$m.append(doms);
			$('.bar:last').css(transform, 'rotate(' + i + 'deg)');
		}

		//$m.append(doms);

		$m.find('div').each(function(index, item){
			$(item).stop().delay(index * 5).fadeIn(50);
		});

		for(var j=0; j <= data; j++){
			(function(index){
				var time = (360/100*index)*5;
				setTimeout(function(){
					//$data.text( index + '%');
				}, time);
			})(j);
		}
	});

	/**
	/* 실시간 순위 롤링전용
	*/
	var Bitems = $("#Brank li");
	var Bcount = Bitems.length;
	var BitemH = Bitems.height();
	var BtotalH = BitemH * Bcount;
	var BTop = new Array();
	var Brank_action = null;

	function Brank(){
		for(var i=0; i<Bcount; i++){
			Bitems.eq(i).css("position","absolute");
			BTop[i] = BitemH*i;
			Bitems.eq(i).css("top",BTop[i]+"px");
			Bitems.eq(i).attr('data-index',(i+1)+".");
		}
		Brank_action = setTimeout(BAni,1000);
	}
	function Brank_start(){
		Brank_action = setTimeout(Brank_move,3000);
	}
	function Brotation(){
		var Ani_time = 3000;
		for(var i=0; i<Bcount; i++){
			if(BTop[i] == BitemH*(-2)){
				BTop[i] = BTop[i] + BtotalH;
				Bitems.eq(i).css("top",BTop[i]+"px");
			}
		}
		Brank_action = setTimeout(BAni,1000);
		//clearTimeout(Brank_action);
		//Brank_action = setTimeout(Brank_move,3000);
	}
	function BAni(){
		var Ani_time = 3000;
		for(var i=0; i<Bcount; i++){
			if(BTop[i] == 0){
				var Awidth = Bitems.eq(i).find("a").width();
				var Swidth = Bitems.eq(i).find("span").innerWidth();
				Ani_time = (Swidth-Awidth)*60;
				//console.log(Awidth, Swidth);
				if(Swidth > Awidth){
					//console.log("animate");
					Bitems.eq(i).find("span").animate({left:-(Swidth-Awidth)},(Swidth-Awidth)*40,'linear');
				}else{
					$("#Brank li").find("span").css("left",0);
				}
			}
		}
		//console.log(Ani_time);
		clearTimeout(Brank_action);
		if(Ani_time > 3000){
			Brank_action = setTimeout(Brank_move,Ani_time);
		}else{
			Brank_action = setTimeout(Brank_move,3000);
		}
	}
	function Brank_move(){
		for(var i=0; i<Bcount; i++){
			BTop[i] = BTop[i] - 2;
			Bitems.eq(i).css("top",BTop[i]+"px");
		}
		if(BTop[0]%BitemH == 0){
			Brotation();
		}else{
			clearTimeout(Brank_action);
			Brank_action = setTimeout(Brank_move,50);
		}
	}
	Brank();

	/**
	/* 실시간 순위 펼치기
	*/
	var items = $("#rank li");
	var count = items.length;
	var itemH = items.height();
	var totalH = itemH * count;
	var Top = new Array();
	var rank_action = null;

	$("#rank").bind("mouseover", function(){
		rank_stop();
	});
	$("#rank a").bind("focus", function(){
		rank_stop();
	});
	$("#rank").bind("mouseout", function(){
		rank_restart();
	});
	$("#rank a").bind("blur", function(){
		rank_restart();
	});

	function rank(){
		$("#rank").css({
			"overflow":"hidden",
			"position":"relative",
			"height":itemH
		});
		for(var i=0; i<count; i++){
			Top[i] = itemH*i;
			items.eq(i).css({
				"position":"absolute",
				"top":Top[i]+"px"
			});
			items.eq(i).children("a").attr('data-index',(i+1));
		}
		rank_start();
	}
	function rank_restart(){
		$("#rank").css({
			"overflow":"hidden",
			"position":"relative",
			"height":itemH
		});
		for(var i=0; i<count; i++){
			items.eq(i).css({
				"position":"absolute",
				"top":Top[i]+"px"
			});
		}
		rank_start();
	}
	function rank_start(){
		for(var i=0; i<count; i++){
			items.eq(i).css("top",Top[i]+"px");
		}
		rank_action = setTimeout(rank_move,3000);
	}
	function rank_stop(){
		for(var i=0; i<count; i++){
			items.eq(i).css({
				"position":"relative",
				"top":"0"
			});
		}
		$("#rank").css({
			"overflow":"auto",
			"position":"absolute",
			"height":"auto"
		});
		clearTimeout(rank_action);
	}
	function rotation(){
		for(var i=0; i<count; i++){
			if(Top[i] == itemH*(-2)){
				Top[i] = Top[i] + totalH;
				items.eq(i).css("top",Top[i]+"px");
			}
		}
		clearTimeout(rank_action);
		rank_action = setTimeout(rank_move,3000);
	}
	function rank_move(){
		for(var i=0; i<count; i++){
			Top[i] = Top[i] - 2;
			items.eq(i).css("top",Top[i]+"px");
		}
		if(Top[0]%itemH == 0){
			rotation();
		}else{
			clearTimeout(rank_action);
			rank_action = setTimeout(rank_move,50);
		}
	}
	rank();

	top.init();
	// init
	UxFormDesign();
});

/**
/* checkbox, radio, file, select design
*/
function UxFormDesign(){
	setCheckBox();
	setRadioBox();
	setFileBox();
	setSelectBox();
}


function setCheckBox(){
	/* Checkbox */
	$(".checkbox input").each(function(){
		var $check = $(this);
		if(!$check.is(":disabled")){
			if($check.is(":checked")){
				$check.parent().addClass("on");
			}else{
				$check.parent().removeClass().addClass("checkbox");
			}
		}else{
			if($check.is(":checked")){
				$check.parent().addClass("on_disabled");
			}else{
				$check.parent().addClass("disabled");
			}
		}
		$check.change(function(){
			if($check.is(":checked")){
				$check.parent().addClass("on").css("outline","none");
			}else{
				$check.parent().removeClass("on").css("outline","none");
			}
		});
	});
	$(".checkbox").click(function(){
		if(!$(this).children("input:disabled")){
			if( $(this).hasClass('on') ){
				$(this).removeClass("on");
				$(this).children("input").prop("checked",false);
				return false;
			}else{
				$(this).addClass("on");
				$(this).children("input").prop("checked",true);
				return false;
			}
		}
	});
	$(".checkbox input").focusin(function() {
			$(this).parent(".checkbox").css("outline","1px dashed #1ab7ea");
	});
	$(".checkbox input").focusout(function(){
		$(this).parent(".checkbox").css("outline","none");
	});
}

function setRadioBox(){
	/* Radio */
	$(".radio input").each(function(){
		var $radio = $(this);
		if(!$radio.is(":disabled")){
			if($radio.is(":checked")){
				$radio.parent("label").addClass("on");
			}else{
				$radio.parent("label").removeClass().addClass("radio");
			}
		}else{
			if($radio.is(":checked")){
				$radio.parent("label").addClass("on_disabled");
			}else{
				$radio.parent("label").addClass("disabled");
			}
		}
	});
	$(".radio").click(function(){
		var $radio = $(this);
		var $radio_item = $(this).children("input");
		var radio_name = $(this).children("input").attr("name");
		if($radio_item.is(":disabled")){
			return false;
		}else{
			$("input[name=" + radio_name + "]").parent("label").removeClass("on");
			$radio.addClass("on").css("outline","none");
		}
	});
	$(".radio input").focusin(function(){
		$(this).parent(".radio").css("outline","1px dashed #1ab7ea");
	});
	$(".radio input").focusout(function(){
		$(this).parent(".radio").css("outline","none");
	});
}

function setFileBox(){
	// File Design
	$(".file_box input[type=file]").each(function(){
		var $file = $(this);
		$file.change(function(){
			if(window.FileReader){ // modern browser var
				filename = $(this)[0].files[0].name;
			}else{ // old IE
				var filename = $(this).val().split("/").pop().split('\\').pop(); // 파일명만 추출
			}
			$(this).siblings(".file_name").text(filename);
			//게사판 첨부파일 삭제버튼 활성화.
			$(this).closest(".file_box").next(".btn_file_del").css("display","inline-block");
		});
	});
	$(".file_box input[type=file]").focus(function(){
		$(".file_box").removeClass("on");
		$(this).parent(".file_box").addClass("on");
	});

	$(".file_box input[type=file]").focusout(function(){
		$(this).parent(".file_box").removeClass("on");
	});
	// file 삭제
	$(".btn_file_del").click(function(){
		$(this).parent("li").remove();
	});
}

function setSelectBox(){
	$("select").each(function(){
		var select = $(this);
		var selected_txt = $(this).children("option:selected").text();
		$(this).parent().find("span").text(selected_txt);

		if(select.children("option:selected")){
			var sel_text = $(this).children("option:selected").text();
			$(this).parent().find("span").text(sel_text);
		}
	});

	$("select").change(function(){
		var select_txt = $(this).children("option:selected").text();
		var person = $(this).children("option:selected").val();
		//직접입력 Input
		if(person == "person"){
			$(this).parent(".select").next(".person_inp").show();
		}else{
			$(this).parent(".select").next(".person_inp").hide();
		}
		$(this).parent().find("span").text(select_txt);
	});

	$("select").focus(function(){
		$(".select").removeClass("on");
		$(this).parent(".select").addClass("on");
	});

	$("select").focusout(function(){
		$(this).parent(".select").removeClass("on").find("ul").remove();
	});
}
/* 초기화 */
function select_reset(){
	$(".search select").each(function(){
		var selected_txt = $(this).children("option").eq(0).text();
		$(this).children("option").eq(0).prop("selected", true);
		$(this).parent().find("span").text(selected_txt);
	});
}

// input number MAxlength
function numberMaxLength(e){
	if(e.value.length > e.maxLength){
		e.value = e.value.slice(0, e.maxLength);
	}
}