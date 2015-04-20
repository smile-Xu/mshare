/*
 *  jquery.mshare.js
 *  based on jQuery,baidushare,json2
 *  Smile 2014.08.29
 */

if(typeof JSON!=="object"){JSON={}}(function(){"use strict";function f(t){return t<10?"0"+t:t}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var cx,escapable,gap,indent,meta,rep;function quote(t){escapable.lastIndex=0;return escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return typeof e==="string"?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var n,r,f,o,u=gap,i,p=e[t];if(p&&typeof p==="object"&&typeof p.toJSON==="function"){p=p.toJSON(t)}if(typeof rep==="function"){p=rep.call(e,t,p)}switch(typeof p){case"string":return quote(p);case"number":return isFinite(p)?String(p):"null";case"boolean":case"null":return String(p);case"object":if(!p){return"null"}gap+=indent;i=[];if(Object.prototype.toString.apply(p)==="[object Array]"){o=p.length;for(n=0;n<o;n+=1){i[n]=str(n,p)||"null"}f=i.length===0?"[]":gap?"[\n"+gap+i.join(",\n"+gap)+"\n"+u+"]":"["+i.join(",")+"]";gap=u;return f}if(rep&&typeof rep==="object"){o=rep.length;for(n=0;n<o;n+=1){if(typeof rep[n]==="string"){r=rep[n];f=str(r,p);if(f){i.push(quote(r)+(gap?": ":":")+f)}}}}else{for(r in p){if(Object.prototype.hasOwnProperty.call(p,r)){f=str(r,p);if(f){i.push(quote(r)+(gap?": ":":")+f)}}}}f=i.length===0?"{}":gap?"{\n"+gap+i.join(",\n"+gap)+"\n"+u+"}":"{"+i.join(",")+"}";gap=u;return f}}if(typeof JSON.stringify!=="function"){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};JSON.stringify=function(t,e,n){var r;gap="";indent="";if(typeof n==="number"){for(r=0;r<n;r+=1){indent+=" "}}else if(typeof n==="string"){indent=n}rep=e;if(e&&typeof e!=="function"&&(typeof e!=="object"||typeof e.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":t})}}if(typeof JSON.parse!=="function"){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;JSON.parse=function(text,reviver){var j;function walk(t,e){var n,r,f=t[e];if(f&&typeof f==="object"){for(n in f){if(Object.prototype.hasOwnProperty.call(f,n)){r=walk(f,n);if(r!==undefined){f[n]=r}else{delete f[n]}}}}return reviver.call(t,e,f)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})();

(function($){
	$.extend({
		mShare : function(support_share,args_share,jQuery){
			var $ = window.$ || window.jQuery,
				argContent = arguments,
				argLength = argContent.length,
				supportList = ["bd_share"],
				support,shareArgs,
				btnList_bdShare = {mshare : "一键分享",qzone : "QQ空间",tsina : "新浪微博",baidu : "百度搜藏",renren : "人人网",tqq : "腾讯微博",bdxc : "百度相册",kaixin001 : "开心网",tqf : "腾讯朋友",tieba : "百度贴吧",douban : "豆瓣网",tsohu : "搜狐微博",bdhome : "百度新首页",sqq : "QQ好友",thx : "和讯微博",qq : "QQ收藏",taobao : "我的淘宝",hi : "百度空间",bdysc : "百度云收藏",sohu : "搜狐白社会",t163 : "网易微博",qy : "奇艺奇谈",meilishuo : "美丽说",mogujie : "蘑菇街",diandian : "点点网",huaban : "花瓣",leho : "爱乐活",share189 : "手机快传",duitang : "堆糖",hx : "和讯",tfh : "凤凰微博",fx : "飞信",youdao : "有道云笔记",sdo : "麦库记事",qingbiji : "轻笔记",ifeng : "凤凰快博",people : "人民微博",xinhua : "新华微博",ff : "饭否",mail : "邮件分享",kanshou : "搜狐随身看",isohu : "我的搜狐",yaolan : "摇篮空间",wealink : "若邻网",xg : "鲜果",ty : "天涯社区",fbook : "Facebook",twi : "Twitter",deli : "delicious",s51 : "51游戏社区",s139 : "139说客",linkedin : "linkedin",copy : "复制网址",print : "打印",ibaidu : "百度个人中心",weixin : "微信",iguba : "股吧",more : "更多"};

			function iConsole(type,str){
				if(window.console){
					console[type](str);
				}
			}
			function isSupport(args){
				if(typeof args === "string"){
					return true;
				}else{
					return false;
				}
			}
			function isShareArgs(args){
				/*if($.type(args) === "array"){
					for(var i=0,j=args.length;i<j;i++){
						if(!($.type(args[i]) === "object" && $.isPlainObject(args[i]))){
							return false;
						}
					}
					return true;
				}else */if($.type(args) === "object" && $.isPlainObject(args)){
					return true;
				}else{
					return false;
				}
			}
			function isJQuery(args){
				if(typeof args === "function" && args().jquery){
					return true;
				}
			}
			if(!$ || !isJQuery($)){
				for(var i=0,j=argLength;i<j;i++){
					if(isJQuery(argContent[i])){
						$ = argContent[i];
						argLength = i + 1;
						break;
					}
				}
				if(!$ || !isJQuery($)){
					iConsole("warn","亲，页面中没了jQuery，整个人都不舒服了呢。");
					return false;
				}
			}
			function bdShare(){
				$("#mShare_confScript").remove();
				$("#mShare_srcScript").remove();
				var type = shareArgs.type || "page",
					style = shareArgs.style || "image",
					btnList = shareArgs.btnList || ["qzone","tsina","tqq","renren","weixin","more"],
					wrap,
					typeList = ["page","text","image"],
					styleList = ["image","img_txt","aside"],
					conf_common = {common : {bdMini : "2",bdStyle : "0",bdSize : "16"}},
					conf_share = {share : {}},
					conf_slide = {slide : {"type":"slide","bdImg":"0","bdPos":"right","bdTop":"100"}},
					conf_image = {image : {"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"}},
					conf_selectShare = {selectShare : {}},
					btnTpl = "",
					confTpl = {},
					srcTpl = 'with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];',
					confScript = document.createElement("script"),
					srcScript = document.createElement("script");
				confScript.id = 'mShare_confScript';
				srcScript.id = 'mShare_srcScript';
				function appendBtn(wrap,tag){
					function makeStr(hasTxt){
						var btnTxt;
						btnTpl = '<div class="bdsharebuttonbox">';
						if($.type(btnList) !== "array"){
							btnList = ["qzone","tsina","tqq","renren","weixin","more"];
						}
						if(hasTxt){
							for(var i=0,j=btnList.length;i<j;i++){
								btnTxt = btnList_bdShare[btnList[i]];
								if(!btnTxt){
									iConsole("warn","btnList参数乱入了，你逗我玩儿呢？╭∩╮（︶︿︶）╭∩╮");
									continue;
								}
								if(btnList[i] == "more"){
									btnTpl += '<a href="#" class="bds_' + btnList[i] + '" data-cmd="' + btnList[i] + '">' + btnTxt + '</a>';
								}
								else{
									btnTpl += '<a href="#" class="bds_' + btnList[i] + '" data-cmd="' + btnList[i] + '" title="分享到' + btnTxt + '">' + btnTxt + '</a>';
								}
							}
						}else{
							for(var i=0,j=btnList.length;i<j;i++){
								btnTxt = btnList_bdShare[btnList[i]];
								if(!btnTxt){
									iConsole("warn","btnList参数乱入了，你逗我玩儿呢？╭∩╮（︶︿︶）╭∩╮");
									continue;
								}
								if(btnList[i] == "more"){
									btnTpl += '<a href="#" class="bds_' + btnList[i] + '" data-cmd="' + btnList[i] + '"></a>';
								}
								else{
									btnTpl += '<a href="#" class="bds_' + btnList[i] + '" data-cmd="' + btnList[i] + '" title="分享到' + btnTxt + '"></a>';
								}
							}
						}
						btnTpl += "</div>";
					}
					if(style == "image" || $.inArray(style,styleList) < 0){
						makeStr(0);
					}else if(style == "img_txt"){
						makeStr(1);
					}
					wrap.each(function(){
						$(this).empty().append($(btnTpl));
						tag && $(this).children(".bdsharebuttonbox").attr("data-tag",tag);
					});
				}
				function ifPageType(){
					function normal(){
						wrap = shareArgs.wrap;
						if(wrap){
							if(typeof wrap === "string"){
								if($(wrap).length != 0){
									if(shareArgs.share && $.type(shareArgs.share) === "array" && (shareArgs.share).length != 0){
										if((shareArgs.share)[0].tag){
											appendBtn($(wrap),(shareArgs.share)[0].tag);
										}else{
											appendBtn($(wrap));
										}
									}else if(shareArgs.share && $.type(shareArgs.share) === "object" && $.isPlainObject(shareArgs.share)){
										if(shareArgs.share.tag){
											appendBtn($(wrap),shareArgs.share.tag);
										}else{
											appendBtn($(wrap));
										}
									}else{
										appendBtn($(wrap));
									}
								}else{
									iConsole("warn","啊哦，找不到相对应的元素⊙︿⊙");
								}
							}else if($.type(wrap) === "array"){
								for(var i=0,j=wrap.length;i<j;i++){
									if(typeof wrap[i] === "string"){
										if($(wrap[i]).length != 0){
											if(shareArgs.share && $.type(shareArgs.share) === "array" && (shareArgs.share).length != 0){
												if((shareArgs.share)[i] && (shareArgs.share)[i].tag){
													appendBtn($(wrap[i]),(shareArgs.share)[i].tag);
												}else{
													appendBtn($(wrap[i]));
												}
											}else if(shareArgs.share && $.type(shareArgs.share) === "object" && $.isPlainObject(shareArgs.share)){
												if(shareArgs.share.tag){
													appendBtn($(wrap[i]),shareArgs.share.tag);
												}else{
													appendBtn($(wrap[i]));
												}
											}else{	
												appendBtn($(wrap[i]));
											}
										}else{
											iConsole("warn","啊哦，找不到相对应的元素 '" + wrap[i] + "' ⊙︿⊙");
										}
									}
								}
							}else{
								iConsole("warn","啊哦，wrap参数不正确⊙︿⊙。正确参数为字符串格式或数组格式，内容为容器的标签、class或id。class或id时，需要加.或#");
							}
						}else{
							appendBtn($("body"));
						}
						shareArgs.common && $.extend(true,conf_common.common,shareArgs.common);
						shareArgs.share && (conf_share.share = shareArgs.share);
						$.extend(true,confTpl,conf_common,conf_share);
						iConsole("info","页面分享具体设置参见：http://share.baidu.com/code/advance#config-common及http://share.baidu.com/code/advance#config-share");
					}
					if(style && typeof style === "string"){
						if(style != "aside"){
							normal();
						}else{
							shareArgs.common && $.extend(true,conf_common.common,shareArgs.common);
							shareArgs.slide && (conf_slide.slide = shareArgs.slide);
							$.extend(true,confTpl,conf_common,conf_slide);
							iConsole("info","页面分享浮窗模式具体设置参见：http://share.baidu.com/code/advance#config-slide");
						}
					}else{
						normal();
					}
				}
				function ifTextType(){
					shareArgs.common && $.extend(true,conf_common.common,shareArgs.common);
					if(shareArgs.selectShare){
						conf_selectShare.selectShare = shareArgs.selectShare;
						$.extend(true,confTpl,conf_common,conf_selectShare);
						iConsole("info","划词分享具体设置参见：http://share.baidu.com/code/advance#config-selectShare");
					}
					else{
						iConsole("warn","亲，使用划词分享时，需要设置selectShare参数，具体设置参见：http://share.baidu.com/code/advance#config-selectShare");
					}
				}
				function ifImageType(){
					shareArgs.common && $.extend(true,conf_common.common,shareArgs.common);
					shareArgs.image && (conf_image.image = shareArgs.image);
					$.extend(true,confTpl,conf_common,conf_image);
					iConsole("info","图片分享具体设置参见：http://share.baidu.com/code/advance#config-image");
				}
				function getConfTpl(type){
					switch(type){
						case "page" : 
							ifPageType();
							break;
						case "text" :
							ifTextType();
							break;
						case "image" :
							ifImageType();
							break;
					}
				}
				if(type){
					if(typeof type === "string"){
						if(type == "page" || $.inArray(type,typeList) < 0){
							getConfTpl("page");
						}else if(type == "text"){
							getConfTpl("text");
						}else if(type == "image"){
							getConfTpl("image");
						}
					}else if($.type(type) === "array"){
						for(var i=0,j=type.length;i<j;i++){
							if(typeof type[i] === "string" && $.inArray(type[i],typeList) >= 0){
								getConfTpl(type[i]);
							}
						}
					}else{
						getConfTpl("page");
					}
				}
				confTpl = 'window._bd_share_config = ' + JSON.stringify(confTpl);
				confScript.text = confTpl;
				document.body.appendChild(confScript);
				srcScript.text = srcTpl;
				document.body.appendChild(srcScript);
			}
			if(isSupport(argContent[0])){
				support = argContent[0];
				if($.inArray(support, supportList) < 0){
					support = "bd_share";
				}
				shareArgs = argContent[1];
				if(!isShareArgs(shareArgs)){
					shareArgs = {}
				}
			}else if(isShareArgs(argContent[0])){
				support = "bd_share";
				shareArgs = argContent[0];
			}else{
				support = "bd_share";
				shareArgs = {}
			}
			switch(support){
				case "bd_share" :
					bdShare();
					break;
			}
		}
	});
})(jQuery);