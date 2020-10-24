require("../../common/manifest.js"), require("../../common/vendor.js"), global.webpackJsonpMpvue([ 17 ], {
    259: function(t, s, i) {
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var e = i(1), n = i.n(e), a = i(260);
        new n.a(a.a).$mount();
    },
    260: function(t, s, i) {
        var e = i(262), n = i(263), a = !1, o = i(0)(e.a, n.a, function(t) {
            a || i(261);
        }, null, null);
        o.options.__file = "src\\pages\\mine\\index.vue", o.esModule && Object.keys(o.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), o.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        s.a = o.exports;
    },
    261: function(t, s) {},
    262: function(t, s, i) {
        s.a = {
            data: function() {
                return {
                    isVIP: !0,
                    code: ""
                };
            },
            mounted: function() {
                this.userInfo && this.getInfo();
            },
            onShow: function() {
                this.userInfo && this.getInfo();
            },
            methods: {
                getInfo: function() {
                    var t = this;
                    this.post({
                        url: "user/getUserInfo",
                        login: !0
                    }).then(function(s) {
                        console.log("会员时间", s.membertimeNew), console.log("现在时间", new Date().getTime() / 1e3), 
                        s.membertimeNew < new Date().getTime() / 1e3 ? t.isVIP = !1 : t.isVIP = !0, t.$store.commit("setUserInfo", s);
                    });
                },
                login: function(t) {
                    var s = this;
                    this.toLogin(t).then(function(t) {
                        s.$store.commit("setUserInfo", t);
                    });
                },
                toUrl: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && !this.userInfo) return this.tools.dd("请登录后操作！");
                    global.mpvue.navigateTo({
                        url: t
                    });
                },
                toUrlArticle: function() {
                    global.mpvue.navigateTo({
                        url: "/pages/html/article/main?follow=3"
                    });
                }
            },
            onShareAppMessage: function() {
                return this.userInfo && this.post({
                    url: "user/sharedPoints",
                    login: !0
                }), {
                    title: "志愿填报助手-匹配名校更准确",
                    path: "/pages/index/main",
                    imageUrl: "https://image.tianziyuan.cn/bg/share.jpg"
                };
            }
        };
    },
    263: function(t, s, i) {
        var e = function() {
            var t = this, s = t.$createElement, i = t._self._c || s;
            return i("div", {
                staticClass: "box"
            }, [ i("div", {
                staticClass: "info"
            }, [ i("div", {
                staticClass: "card"
            }, [ t.userInfo ? i("img", {
                staticClass: "face-img",
                attrs: {
                    src: t.userInfo.avatar
                }
            }) : i("img", {
                staticClass: "face-img",
                attrs: {
                    src: "/static/images/default-head.jpg"
                }
            }), t._v(" "), i("div", {
                staticClass: "card-r"
            }, [ t.userInfo ? i("div", {
                staticClass: "name"
            }, [ t._v(t._s(t.userInfo.nickname)) ]) : i("button", {
                staticClass: "login",
                attrs: {
                    "open-type": "getUserInfo",
                    eventid: "0"
                },
                on: {
                    getuserinfo: t.login
                }
            }, [ t._v("登录/注册") ]), t._v(" "), t.userInfo && "0" != t.userInfo.member ? i("div", {
                staticClass: "tip-desc"
            }, [ i("img", {
                staticClass: "tip-img",
                attrs: {
                    src: "/static/images/vip.png"
                }
            }), i("br"), t._v(" "), t.isVIP ? i("div", {
                staticClass: "desc"
            }, [ t._v("有效至：" + t._s(t.userInfo.membertime)) ]) : i("div", {
                staticClass: "desc"
            }, [ t._v("会员已到期，公众号直接领取") ]) ], 1) : i("div", {
                staticClass: "tip"
            }, [ i("div", {
                staticClass: "tip-txt"
            }, [ t._v("暂未开通VIP") ]) ]), t._v(" "), t.userInfo.code ? i("div", {
                staticClass: "tip"
            }, [ i("div", {
                staticClass: "tip-txt2"
            }, [ t._v("兑换码:" + t._s(t.userInfo.code)) ]) ]) : t._e() ], 1) ]) ]), t._v(" "), i("div", {
                staticClass: "ls"
            }, [ i("div", {
                staticClass: "li-x",
                attrs: {
                    eventid: "1"
                },
                on: {
                    click: function(s) {
                        t.toUrl("/pages/mine/subject/main");
                    }
                }
            }, [ i("img", {
                staticClass: "li-img2",
                attrs: {
                    src: "/static/images/b1.jpg"
                }
            }) ]), t._v(" "), i("div", {
                staticClass: "li-x",
                attrs: {
                    eventid: "2"
                },
                on: {
                    click: function(s) {
                        t.toUrl("/pages/mine/collection/main");
                    }
                }
            }, [ i("img", {
                staticClass: "li-img2",
                attrs: {
                    src: "https://image.tianziyuan.cn/bg/1.png"
                }
            }) ]), t._v(" "), i("div", {
                staticClass: "li-x",
                attrs: {
                    eventid: "3"
                },
                on: {
                    click: t.toUrlArticle
                }
            }, [ i("img", {
                staticClass: "li-img2",
                attrs: {
                    src: "https://image.tianziyuan.cn/bg/2.png"
                }
            }) ]), t._v(" "), i("div", {
                staticClass: "li-x",
                attrs: {
                    eventid: "4"
                },
                on: {
                    click: function(s) {
                        t.toUrl("/pages/mine/exchange/main");
                    }
                }
            }, [ i("img", {
                staticClass: "li-img2",
                attrs: {
                    src: "https://image.tianziyuan.cn/bg/3.png"
                }
            }) ]), t._v(" "), i("div", {
                staticClass: "li-x"
            }, [ i("button", {
                staticClass: "share",
                attrs: {
                    "open-type": "share"
                }
            }, [ i("img", {
                staticClass: "li-img2",
                attrs: {
                    src: "https://image.tianziyuan.cn/bg/4.png"
                }
            }) ]) ], 1) ]) ]);
        }, n = [];
        e._withStripped = !0;
        var a = {
            render: e,
            staticRenderFns: n
        };
        s.a = a;
    }
}, [ 259 ]);