require("../../common/manifest.js"), require("../../common/vendor.js"), global.webpackJsonpMpvue([ 13 ], {
    279: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(1), s = n.n(i), o = n(280);
        new s.a(o.a).$mount();
    },
    280: function(t, e, n) {
        var i = n(282), s = n(283), o = !1, a = n(0)(i.a, s.a, function(t) {
            o || n(281);
        }, null, null);
        a.options.__file = "src\\pages\\question\\index.vue", a.esModule && Object.keys(a.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), a.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        e.a = a.exports;
    },
    281: function(t, e) {},
    282: function(t, e, n) {
        var i, s = n(430), o = n.n(s);
        e.a = {
            data: function() {
                return {
                    list: [],
                    total: 0,
                    articleList: []
                };
            },
            onLoad: function() {
                this.getArticle();
            },
            onShow: function() {
                this.userInfo, this.userInfo ? this.getTest() : this.getTest2();
            },
            methods: (i = {
                login: function(t) {
                    var e = this;
                    this.toLogin(t).then(function(t) {
                        e.$store.commit("setUserInfo", t);
                    });
                },
                getInfo: function() {
                    var t = this;
                    this.post({
                        url: "user/getUserInfo",
                        login: !0
                    }).then(function(e) {
                        t.$store.commit("setUserInfo", e);
                    });
                },
                getArticle: function() {
                    var t = this;
                    this.post({
                        url: "test_paper/getArticleList"
                    }).then(function(e) {
                        t.articleList = e;
                    });
                },
                toArtcle: function(t, e) {
                    e ? global.mpvue.navigateTo({
                        url: "/pages/html/article/main?link=" + e
                    }) : global.mpvue.navigateTo({
                        url: "/pages/html/article/main?id=" + t
                    });
                },
                toHome: function() {
                    global.mpvue.switchTab({
                        url: "/pages/index/main"
                    });
                }
            }, o()(i, "login", function(t) {
                var e = this;
                this.toLogin(t).then(function(t) {
                    e.$store.commit("setUserInfo", t);
                });
            }), o()(i, "getTest", function() {
                var t = this;
                t.post({
                    url: "test_paper/getPaper",
                    login: !0
                }).then(function(e) {
                    t.list = e;
                    for (var n = 0, i = 0; i < e.length; i++) n += e[i].score;
                    t.total = n;
                });
            }), o()(i, "getTest2", function() {
                var t = this;
                t.post({
                    url: "test_paper/getPaper2"
                }).then(function(e) {
                    t.list = e;
                    for (var n = 0, i = 0; i < e.length; i++) n += e[i].score;
                    t.total = n;
                });
            }), o()(i, "toUrl", function(t) {
                if (!this.userInfo) return this.tools.dd("请登录后操作！");
                global.mpvue.navigateTo({
                    url: "/pages/question/nature/main?id=" + t
                });
            }), i),
            onShareAppMessage: function() {
                return {
                    title: "志愿填报助手-匹配名校更准确",
                    path: "/pages/index/main",
                    imageUrl: "https://image.tianziyuan.cn/bg/share.jpg"
                };
            }
        };
    },
    283: function(t, e, n) {
        var i = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "box"
            }, [ n("div", {
                staticClass: "bg-img"
            }, [ n("div", {
                staticClass: "total-title"
            }, [ t._v("\n            总成绩：" + t._s(t.total) + "\n            "), t.userInfo ? t._e() : n("button", {
                staticClass: "login",
                attrs: {
                    "open-type": "getUserInfo",
                    eventid: "0"
                },
                on: {
                    getuserinfo: t.login
                }
            }, [ t._v("登录/注册") ]) ], 1) ]), t._v(" "), t.articleList.length > 0 ? n("div", {
                staticClass: "news"
            }, [ n("image", {
                staticClass: "news-img",
                attrs: {
                    src: "/static/images/tequan.png"
                }
            }), t._v(" "), n("swiper", {
                staticClass: "news-swiper",
                attrs: {
                    vertical: "",
                    autoplay: "",
                    circular: "",
                    interval: "2000"
                }
            }, t._l(t.articleList, function(e, i) {
                return n("swiper-item", {
                    key: i,
                    attrs: {
                        mpcomid: "0_" + i
                    }
                }, [ n("div", {
                    staticClass: "news-item",
                    attrs: {
                        eventid: "1_" + i
                    },
                    on: {
                        click: function(n) {
                            t.toArtcle(e.id, e.wechat_link);
                        }
                    }
                }, [ t._v(t._s(e.title)) ]) ]);
            })) ], 1) : t._e(), t._v(" "), n("div", {
                staticClass: "ls"
            }, [ t._l(t.list, function(e, i) {
                return n("div", {
                    key: i,
                    staticClass: "li",
                    attrs: {
                        eventid: "2_" + i
                    },
                    on: {
                        click: function(n) {
                            t.toUrl(e.id);
                        }
                    }
                }, [ n("div", {
                    staticClass: "li-txt"
                }, [ t._v(t._s(e.name)) ]), t._v(" "), e.score ? n("div", {
                    staticClass: "li-button"
                }, [ t._v("\n                得分:" + t._s(e.score) + "\n            ") ]) : n("div", {
                    staticClass: "li-button"
                }, [ t._v("\n                开始估分\n            ") ]) ]);
            }), t._v(" "), n("div", {
                staticClass: "li2",
                attrs: {
                    eventid: "3"
                },
                on: {
                    click: function(e) {
                        t.toHome();
                    }
                }
            }, [ t._v("去填志愿") ]) ], 2) ]);
        }, s = [];
        i._withStripped = !0;
        var o = {
            render: i,
            staticRenderFns: s
        };
        e.a = o;
    }
}, [ 279 ]);