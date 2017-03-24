$(document).ready(function() {
	var sectionPage = new Swiper("#sectionContainer", {
		direction: "vertical",
		mousewheelControl: true,
		speed: 450,
		onTransitionStart: function() {
			toggleShow("#contact", "footer")
			toggleShow("#hello", "nav")
		},
		onTransitionEnd: function() {}

	})
	$('.container i').on('click', function() {
		sectionPage.slideTo(0, 1000, false);
		toggleShow("#contact", "footer");
		toggleShow("#hello", "nav");
	})
	$('#linkto1').on('click', function() {
		sectionPage.slideTo(1, 1000, false);
		toggleShow("#contact", "footer")
			toggleShow("#hello", "nav")
	})
	$('#linkto2').on('click', function() {
		sectionPage.slideTo(2, 1000, false);
		toggleShow("#contact", "footer")
			toggleShow("#hello", "nav")
	})
	$('#linkto3').on('click', function() {
		sectionPage.slideTo(3, 1000, false);
		toggleShow("#contact", "footer")
			toggleShow("#hello", "nav")
	})
	$('#linkto4').on('click', function() {
		sectionPage.slideTo(3, 1000, false);
		toggleShow("#contact", "footer")
			toggleShow("#hello", "nav")
	})

})

function toggleShow(obj, objTo) {
	if($(obj).hasClass("swiper-slide-active")) {
		$(objTo).css({ "display": "flex" })
	} else {
		$(objTo).css({ "display": "none" })
	}
}
$('.centerContext .btnRead').on("click",function(){
     $(this).html(" <img src='../img/123.jpg'/> ")
})
$('.rightContext .btnRead').on("click",function(){
     $(this).html(" <img src='../img/123.jpg'/> ")
})