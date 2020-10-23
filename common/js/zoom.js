$(function(){
	/**
	* video zoom
	*/
	// 배율 설정 option
	// video 배율 설정. 기본 2배
	var level = 2; 
	if(level == 0){
		return;
	}
	videoZoom(level);
	
});
function videoZoom(level){
	// fixed value
	const videoW = 1200; // video screen width.
	const videoH = 660; // video screen height.
	const zoomW = calSize(videoW, level);; // zoom screen width.
	const zoomH = calSize(videoH, level);; // zoom screen height.
	const depth = (videoW/zoomW) * level; // video와 zoom screen 비율 * video 배율.
	const minScale = Math.ceil(100 / level); // zoom 비율 최소값 [100% 기준 1/2].
	const maxScale = Math.ceil(100 * level); // video 비율 최대값 [100% 기준 2배].

	// 초기화.
	$(".video").css({
		"width" : videoW +'px',
		"height" : videoH +'px',
		"top" : 0,
		"left" : 0
	});
	$(".zoominner").css({
		"width" : zoomW +'px',
		"height" : zoomH +'px'
	});
	$(".zoomcontroll").css({
		"width" : zoomW +'px',
		"height" : zoomH +'px',
		"top" : 0,
		"left" : 0
	});
	$(".zoomslider a").css("top",'110px');

	let $zoom = $(".zoominner");
	$(".zoomcontroll").draggable({
		containment: "parent",
		snapMode: "inner",
		create : function(event, ui){
			let $video = $(".video");
			$(".zoomslider a").draggable({ // A draggable
				axis: "y",
				containment: "parent",
				drag: function( event, ui ) {
					let Vrate = Math.ceil(maxScale - ((ui.position.top / 11)*10) * (level - 1)) ;// video 비율 계산.
					let zw = Math.ceil((zoomW / level) + ((zoomW - (zoomW / level)) * (ui.position.top / 11 *10)/100));// zoom width 비율 px 계산.
					let zh = Math.ceil((zoomH / level) + ((zoomH - (zoomH / level)) * (ui.position.top / 11 *10)/100));// zoom height 비율 px 계산.
					
					let $posiL = parseInt($(".zoomcontroll").css("left"),10);
					let $posiT = parseInt($(".zoomcontroll").css("top"),10);
					
					// 배울 width, height
					$(".zoomcontroll").css("width",zw +'px');
					$(".zoomcontroll").css("height",zh +'px');
					$video.css("width", Vrate +'%');
					$video.css("height", Vrate +'%');
					
					// 슬라이드 drag시 zoom 좌표 및 video 좌표
					var $scaleW = $(".zoomcontroll").innerWidth();
					var $scaleH = $(".zoomcontroll").innerHeight();
					if($posiL + $scaleW > zoomW){
						$(".zoomcontroll").css("left",zoomW - $scaleW);
						$(".video").css("left", - (zoomW - $scaleW) * depth);
					}
					if($posiT + $scaleH > zoomH){
						$(".zoomcontroll").css("top",zoomH - $scaleH);
						$(".video").css("top", - (zoomH - $scaleH) * depth);
					}
				}
			});
		},
		drag : function(event, ui){
			var $posiL = ui.position.left * depth;
			var $posiT = ui.position.top * depth;
			console.log($posiL, $posiT);
			$(".video").css({
				"left": - $posiL,
				"top": - $posiT,
			});
		}
	});
}
function calSize(size, zoom) {
	let w = Number.parseInt(size /6);
	for(i=0; ; i++) {
		if((w-i)% zoom == 0 ) {
			return w -i;
		}
		
		if(i >= w ) {
			return w;
			
		}
	}
}
function zoomSelect(val){
	beforeDestroy();
	videoZoom(val);
}
function beforeDestroy() {
	$(".zoomcontroll").draggable("destroy");
	$(".zoomslider a").draggable("destroy");
	// 초기화.
	$(".video").css({
		"width" : '100%',
		"height" : '100%',
		"top" : 0,
		"left" : 0
	});
}