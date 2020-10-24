require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 19 ], {
    249: function(e, t, s) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = s(1), i = s.n(n), o = s(250);
        new i.a(o.a).$mount();
    },
    250: function(e, t, s) {
        var n = s(252), i = s(253), o = !1, a = s(0)(n.a, i.a, function(e) {
            o || s(251);
        }, null, null);
        a.options.__file = "src\\pages\\mine\\exchange\\index.vue", a.esModule && Object.keys(a.esModule).some(function(e) {
            return "default" !== e && "__" !== e.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), a.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        t.a = a.exports;
    },
    251: function(e, t) {},
    252: function(e, t, s) {
        t.a = {
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
                    var e = this;
                    this.post({
                        url: "user/getUserInfo",
                        login: !0
                    }).then(function(t) {
                        console.log("会员时间", t.membertimeNew), console.log("现在时间", new Date().getTime() / 1e3), 
                        t.membertimeNew < new Date().getTime() / 1e3 ? e.isVIP = !1 : e.isVIP = !0, e.$store.commit("setUserInfo", t);
                    });
                },
                login: function(e) {
                    var t = this;
                    this.toLogin(e).then(function(e) {
                        t.$store.commit("setUserInfo", e);
                    });
                },
                myClick: function() {
                    var e = this;
                    if (!this.userInfo) return this.tools.dd("请登录后操作！");
                    if (!this.code) return this.tools.dd("请输入兑换码！");
                    var t = this;
                    this.post({
                        url: "user/exchangeNew",
                        login: !0,
                        code: this.code
                    }).then(function(s) {
                        if (console.log(s), s) return e.getInfo(), setTimeout(function() {
                            console.log("跳转"), global.mpvue.switchTab({
                                url: "/pages/index/main"
                            });
                        }, 2e3), t.tools.dd("兑换成功！");
                    });
                },
                toUrl: function() {
                    console.log("跳转"), global.mpvue.switchTab({
                        url: "/pages/index/main"
                    });
                }
            }
        };
    },
    253: function(e, t, s) {
        var n = function() {
            var e = this, t = e.$createElement, s = e._self._c || t;
            return s("div", {
                staticClass: "box"
            }, [ s("div", {
                staticClass: "info"
            }, [ s("div", {
                staticClass: "card"
            }, [ e.userInfo ? s("img", {
                staticClass: "face-img",
                attrs: {
                    src: e.userInfo.avatar
                }
            }) : s("img", {
                staticClass: "face-img",
                attrs: {
                    src: "/static/images/default-head.jpg"
                }
            }), e._v(" "), s("div", {
                staticClass: "card-r"
            }, [ e.userInfo ? s("div", {
                staticClass: "name"
            }, [ e._v(e._s(e.userInfo.nickname)) ]) : s("button", {
                staticClass: "login",
                attrs: {
                    "open-type": "getUserInfo",
                    eventid: "0"
                },
                on: {
                    getuserinfo: e.login
                }
            }, [ e._v("登录/注册") ]), e._v(" "), e.userInfo && "0" != e.userInfo.member ? s("div", {
                staticClass: "tip-desc"
            }, [ s("img", {
                staticClass: "tip-img",
                attrs: {
                    src: "/static/images/vip.png"
                }
            }), s("br"), e._v(" "), e.isVIP ? s("div", {
                staticClass: "desc"
            }, [ e._v("有效至：" + e._s(e.userInfo.membertime)) ]) : s("div", {
                staticClass: "desc"
            }, [ e._v("会员已到期，公众号直接领取") ]) ], 1) : s("div", {
                staticClass: "tip"
            }, [ s("div", {
                staticClass: "tip-txt"
            }, [ e._v("暂未开通VIP") ]) ]) ], 1) ]) ]), e._v(" "), s("div", {
                staticClass: "exchange"
            }, [ s("div", {
                staticClass: "exchange-txt"
            }, [ e._v("\n                    请输入您的兑换码：\n                ") ]), e._v(" "), s("div", {
                staticClass: "exchange-input"
            }, [ s("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: e.code,
                    expression: "code"
                } ],
                attrs: {
                    placeholder: "请输入卡片上的序列号",
                    eventid: "1"
                },
                domProps: {
                    value: e.code
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.code = t.target.value);
                    }
                }
            }) ]), e._v(" "), s("div", {
                staticClass: "exchange-button"
            }, [ s("button", {
                attrs: {
                    type: "button",
                    eventid: "2"
                },
                on: {
                    click: function(t) {
                        e.myClick();
                    }
                }
            }, [ e._v("立即兑换") ]) ], 1) ]) ]);
        }, i = [];
        n._withStripped = !0;
        var o = {
            render: n,
            staticRenderFns: i
        };
        t.a = o;
    }
}, [ 249 ]);