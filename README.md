# mshare
基于jQuery以及百度分享的分享组件

依赖关系：
   mShare依赖于jQuery，是扩展在jQuery静态方法上的分享插件。

具体参数：

	type : “page” | “text” | “image”, // 字符串格式或数组格式。page代表页面分享，text代表划词分享，image代表图片分享，三种分享方式可单独使用或随意组合。默认为页面分享。例如： type : "page"或type : ["page" ,"image"]

	style : "image" | "img_txt" | "aside", // 字符串格式，当type参数值为page时有效。image代表分享组件外观为图标格式，img_txt代表图标+文字描述格式，aside代表浮窗模式。例如：style : "image "

	btnList : [], // 数组格式，当type参数值为page时且style参数为image或img_txt时有效。删除或调换数组内容会修改相对应的分享组件中分享媒体的顺序，完整媒体列表参见媒体id对应表http://share.baidu.com/code/advance#toid。例如：btnList : ["qzone","tsina","tqq","renren","weixin","more"]

	wrap : ".wrapper" | "#wrapper" | [".wrapper1","#wrapper2"], // 字符串或数组格式，当type参数值为page时且style参数为image或img_txt时有效。参数值为放置分享组件的外层元素的class或id

	common : 分享组件通用设置，具体见http://share.baidu.com/code/advance#config-common

	share : 分享组件按钮设置，具体见http://share.baidu.com/code/advance#config-share

	slide : 分享组件浮窗模式设置，具体见http://share.baidu.com/code/advance#config-slide

	image : 图片分享设置，具体见http://share.baidu.com/code/advance#config-image

	selectShare : 划词分享设置，具体见http://share.baidu.com/code/advance#config-selectShare



git push origin master test