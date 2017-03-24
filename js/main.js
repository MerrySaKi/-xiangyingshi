var toggleView = {
	showMenu: function() {
		change(".showMenu", ".navMenu", "click", "slideToggle");
		change("body", ".navMenu", "click", "slideUp");
	},
	showTeamGroup: function() {
		//显示隐藏teamGroup框
		change(".listRound", "#teamGroup", "click", "fadeIn", "");
		change("#teamGroup .close", "#teamGroup", "click", "fadeOut", "");
		//显示隐藏下面注册框。
		change(".collaborateContext .circular", ".collaborteMessage", "click", "fadeIn");
		change("#collaborate .close", ".collaborteMessage", "click", "fadeOut");
	}
}
//判断兼容 显示隐藏菜单和状态框；
$(document).width() < 800 ? toggleView.showMenu() : toggleView.showTeamGroup();
//更改信息栏地址；
$(".listRound").each(function(n) {
	$(this).on("click", function() {
		//teamArr.map((index) => $("#" + index).text(teamGroup[index][n]))
		teamArr.map(
			function(index) {
				$("#" + index).text(teamGroup[index][n])
			}
		)
	})
})

/*
 *obj:绑定事件的对象，objTo：需要更改事件的对象，fn：绑定的事件，change：触发方法，attr：属性； 
 */
function change(obj, objTo, fn, change, attr) {
	attr = "show" || " "
	$(obj).on(fn, function(e) {
		e.stopPropagation();
		$(objTo)[change](attr);
		//console.log(typeof(callback))
	})
}