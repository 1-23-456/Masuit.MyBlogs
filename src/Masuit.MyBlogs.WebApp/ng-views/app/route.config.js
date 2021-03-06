﻿"use strict";
myApp.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.hashPrefix('');
		$urlRouterProvider.otherwise("/home");
		var vpath = "/ng-views/views";
		var cpath = "/ng-views/controllers";
		$stateProvider.state("dashboard", {
			url: "/home",
			templateUrl: vpath + "/dashboard.html",
			controller: "dashboard",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([{
						files: ["/Scripts/boost.js"],
						cache: true
					}, cpath + "/dashboard.js"]);
				}]
			}
		}).state("post-list", {
			url: "/postlist",
			templateUrl: vpath + "/post/postlist.html",
			controller: "postlist as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([{
						files: ["/Assets/semantic/semantic.css","https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"],
						cache: true
					},cpath + "/post.js"]);
				}]
			}
		}).state("post-pending", {
			url: "/postpending",
			templateUrl: vpath + "/post/pending.html",
			controller: "postpending as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([{
						files: ["/Assets/semantic/semantic.css"],
						cache: true
					}, {
						files: ["https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"],
						cache: true
					},cpath + "/post.js"]);
				}]
			}
		}).state("write-blog", {
			url: "/writeblog",
			templateUrl: vpath + "/post/writeblog.html",
			controller: "writeblog",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([{
							files: ["https://apps.bdimg.com/libs/ueditor/1.4.3.1/ueditor.all.js","/Assets/semantic/semantic.css","https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"],
							cache: true
						},
						cpath + "/post.js"]);
				}]
			}
		}).state("edit-blog", {
			url: "/post/edit",
			templateUrl: vpath + "/post/edit.html",
			controller: "postedit",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([{
							files: ["https://apps.bdimg.com/libs/ueditor/1.4.3.1/ueditor.all.js","/Assets/semantic/semantic.css","https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"],
							cache: true
						},
						cpath + "/post.js"]);
				}]
			}
		}).state("top-post", {
			url: "/post/top",
			templateUrl: vpath + "/post/top.html",
			controller: "toppost",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/post.js"]);
				}]
			}
		}).state("post-cat", {
			url: "/post/cat",
			templateUrl: vpath + "/post/cat.html",
			controller: "category as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/post.js"]);
				}]
			}
		}).state("share", {
			url: "/post/share",
			templateUrl: vpath + "/post/share.html",
			controller: "share as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/post.js"]);
				}]
			}
		}).state("menu", {
			url: "/menu",
			templateUrl: vpath + "/menu.html",
			controller: "menu",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([{
						files: ["https://cdnjs.cloudflare.com/ajax/libs/angular-ui-tree/2.22.6/angular-ui-tree.css","/Assets/checkbox/checkbox.min.css"],
						cache: true
					}, cpath + "/menu.js"]);
				}]
			}
		}).state("comment-list", {
			url: "/comment/list",
			templateUrl: vpath + "/comment/list.html",
			controller: "comment as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/comment.js"]);
				}]
			}
		}).state("system-panel", {
			url: "/system/home",
			templateUrl: vpath + "/system/home.html",
			controller: "system",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([{
						files: ["https://apps.bdimg.com/libs/ueditor/1.4.3.1/ueditor.all.js"],
						cache: true
					}, cpath + "/system.js"]);
				}]
			}
		}).state("system-log", {
			url: "/system/log",
			templateUrl: vpath + "/system/log.html",
			controller: "log",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/system.js"]);
				}]
			}
		}).state("system-firewall", {
			url: "/system/firewall",
			templateUrl: vpath + "/system/firewall.html",
			controller: "firewall as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([{
							files: ["/Assets/semantic/semantic.css","https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"],
							cache: true
						},cpath + "/system.js"]);
				}]
			}
		}).state("email", {
			url: "/system/email",
			templateUrl: vpath + "/system/email.html",
			controller: "email",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/system.js"]);
				}]
			}
		}).state("filemanager", {
			url: "/system/file",
			templateUrl: vpath + "/system/file.html",
			controller: "file",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/system.js"]);
				}]
			}
		}).state("taskcenter", {
			url: "/system/task",
			templateUrl: vpath + "/system/task.html",
			controller: "task",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/system.js"]);
				}]
			}
		}).state("comment", {
			url: "/comment",
			templateUrl: vpath + "/comment/index.html",
			controller: "comment as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/comment.js"]);
				}]
			}
		}).state("msg", {
			url: "/msg",
			templateUrl: vpath + "/msg/index.html",
			controller: "msg as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/msg.js"]);
				}]
			}
		}).state("msgs", {
			url: "/msgs",
			templateUrl: vpath + "/msg/msgs.html",
			controller: "msgs as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/msg.js"]);
				}]
			}
		}).state("interview", {
			url: "/interview",
			templateUrl: vpath + "/analysis/interview.html",
			controller: "interview as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([{
						files: ["/assets/jedate/jedate.min.css", "/Assets/semantic/semantic.css", "/assets/jedate/jquery.jedate.min.js", "/Scripts/boost.js", "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js", "https://img.hcharts.cn/highcharts/modules/data.js", "https://img.hcharts.cn/highcharts/modules/drilldown.js"],
						cache: true
					},cpath + "/analysis.js"]);
				}]
			}
		}).state("search", {
			url: "/search",
			templateUrl: vpath + "/analysis/search.html",
			controller: "searchAnalysis as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([{
						files: ["/assets/jedate/jedate.min.css","/Assets/semantic/semantic.css",  "/assets/jedate/jquery.jedate.min.js","/Scripts/boost.js","https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"],
						cache: true
					},cpath + "/analysis.js"]);
				}]
			}
		}).state("notice-add", {
			url: "/notice/index",
			templateUrl: vpath + "/notice/index.html",
			controller: "noticeAdd",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([{
						files: ["https://apps.bdimg.com/libs/ueditor/1.4.3.1/ueditor.all.js"],
						cache: true
					}, cpath + "/notice.js"]);
				}]
			}
		}).state("notice-list", {
			url: "/notice/list",
			templateUrl: vpath + "/notice/list.html",
			controller: "noticeList as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/notice.js"]);
				}]
			}
		}).state("misc-add", {
			url: "/misc/index",
			templateUrl: vpath + "/misc/index.html",
			controller: "miscAdd",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([{
						files: ["https://apps.bdimg.com/libs/ueditor/1.4.3.1/ueditor.all.js"],
						cache: true
					}, cpath + "/misc.js"]);
				}]
			}
		}).state("misc-list", {
			url: "/misc/list",
			templateUrl: vpath + "/misc/list.html",
			controller: "miscList as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/misc.js"]);
				}]
			}
		}).state("links", {
			url: "/links",
			templateUrl: vpath + "/links.html",
			controller: "links as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/links.js"]);
				}]
			}
		}).state("contact", {
			url: "/contact",
			templateUrl: vpath + "/contact.html",
			controller: "contact as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/contact.js"]);
				}]
			}
		}).state("seminar", {
			url: "/seminar",
			templateUrl: vpath + "/seminar.html",
			controller: "seminar as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/seminar.js"]);
				}]
			}
		}).state("donate", {
			url: "/donate",
			templateUrl: vpath + "/donate.html",
			controller: "donate as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([{
						files: ["/assets/jedate/jedate.min.css", "/assets/jedate/jquery.jedate.min.js"],
						cache: true
					},cpath + "/donate.js"]);
				}]
			}
		}).state("subscribe", {
			url: "/subscribe",
			templateUrl: vpath + "/subscribe.html",
			controller: "subscribe as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/subscribe.js"]);
				}]
			}
			}).state("loginrecord", {
			url: "/loginrecord",
			templateUrl: vpath + "/loginrecord.html",
			controller: "loginrecord as list",
			resolve: {
				deps: ["$ocLazyLoad", function($ocLazyLoad) {
					return $ocLazyLoad.load([cpath + "/loginrecord.js"]);
				}]
			}
		})
	}]);