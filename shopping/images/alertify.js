define(["require","prober"],function(e){function i(){this.iframe=$("<iframe></iframe>").addClass("alertify-wrapper-iframe"),this.el=$("<div/>").addClass("alertify-wrapper clearfix"),this.ctn=$("<div/>").addClass("alertify-wrapper-ctn"),this.ctnInner=$("<div/>").addClass("alertify-wrapper-ctn-inner"),this.ctnInnerContWrapper=$("<div/>"),this.contElStr="<i></i>",this.body=$("body"),this.init()}var t=e("prober"),n=t.browser.name=="ie",r=n&&t.browser.version<"7";i.prototype={constructor:i,init:function(){this.runningTime=400,this.stayTime=1e3,this.timeId=null,this.ctn.appendTo(this.el),this.ctnInner.appendTo(this.ctn),n&&this.iframe.appendTo(this.ctnInner),this.ctnInnerContWrapper.appendTo(this.ctnInner),this.el.appendTo(this.body)},showInfo:function(e,t,n,r){var s=this,o=r?r:s.stayTime;if(typeof t!="undefined"&&$.trim(t)!==""){clearTimeout(s.timeId),this.running&&(this.el.hide(),this.ctnInnerContWrapper.removeClass(),clearTimeout(this.timeId),typeof s.callback=="function"&&s.callback()),this.callback=n,this.running=!0,this.ctnInnerContWrapper.addClass(e).html(this.contElStr+t),this.setPosition();try{this.el.fadeIn(this.runningTime,function(){_.indexOf(i.manualType,s.currentType)===-1&&(s.timeId=setTimeout(function(){s.hideInfo()},o))})}catch(u){this.el.css({opacity:1,display:"block"}),s.timeId=setTimeout(function(){s.hideInfo()},o)}}},hideInfo:function(){var e=this;try{this.el.fadeOut(this.runningTime,function(){typeof e.callback=="function"&&e.callback(),e.ctnInnerContWrapper.removeClass(),e.running=!1})}catch(t){this.el.css({opacity:0,display:"none"}),typeof e.callback=="function"&&e.callback(),e.ctnInnerContWrapper.removeClass(),e.running=!1}},setPosition:function(){var e=document.documentElement.clientHeight;try{var t=this.el.innerHeight()}catch(n){var t=this.el.height()}var i=(e-t)/2;this.iframe.css("height",t+"px");if(r){var s={position:"absolute",top:i+$(window).scrollTop()+"px"};this.el.css(s)}else this.el.css("top",i+"px")},hide:function(e,t){var e=typeof e=="number"?e:this.runningTime,n=this;if(!this.running)return;this.el.fadeOut?this.el.fadeOut(e,function(){typeof t=="function"&&t(),n.ctnInnerContWrapper.removeClass(),n.running=!1}):(this.el.hide(),n.ctnInnerContWrapper.removeClass(),n.running=!1)}},i.automaticType=["log","error","success"],i.manualType=["loading"];var s=new i,o={hide:function(e,t){var e=e,t=t;arguments.length===1&&typeof arguments[0]=="function"&&(t=e,e=null),s.hide(e,t)}};return _.each(i.automaticType.concat(i.manualType),function(e,t){o[e]=function(){var t=arguments[0];e==="loading"&&(t||(t="加载中，请稍后...")),s.currentType=e,s.showInfo("alertify-"+e,t,arguments[1],arguments[2])}}),o});