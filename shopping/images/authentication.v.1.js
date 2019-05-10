/**
 * vr»œ÷§
 */
(function(){
	var classId, rank;
	window.authentication = function(cid, r, content, pic) {
		classId = cid;
		rank = r;
		pic = pic || "auth.gif";
		var h = $s.$("sogou_vr_" + classId + "_title_" + rank).parentNode;
		var img = buildImage(h, pic);
		var content = buildContent(h, content);
		bind(img, content);
	} 
	function buildImage(h, pic) {
		var img = new Image();
		img.src = "/images/vr/service/" + pic;
		img.width = 27;
		img.height = 15;
		img.id = "sogou_vr_" + classId + "_authicon_" + rank;
		img.className = "vr_authico";
		h.appendChild(img);
		return img;
	}
	function buildContent(h, content) {
		var span = $s.$c("span", h, "safeauth");
		span.style.display = "none";
		span.innerHTML = content;
		span.id = "sogou_vr_" + classId + "_authcontent_" + rank;
		span.className = "safeauth";
		return span;
	}
	function bind(img, content) {
		img.onmouseover = function() {
			content.style.display = "";
		}
		img.onmouseout = function() {
			content.style.display = "none";
		}
	}
})();