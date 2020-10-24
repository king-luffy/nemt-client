require("../../common/manifest.js"), require("../../common/vendor.js"), global.webpackJsonpMpvue([ 5 ], {
    328: function(t, e, s) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = s(1), i = s.n(n), o = s(329);
        new i.a(o.a).$mount();
    },
    329: function(t, e, s) {
        var n = s(331), i = s(332), o = !1, r = s(0)(n.a, i.a, function(t) {
            o || s(330);
        }, null, null);
        r.options.__file = "src\\pages\\test\\index.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        e.a = r.exports;
    },
    330: function(t, e) {},
    331: function(t, e, s) {
        e.a = {
            data: function() {
                return {
                    list: [],
                    result1: "",
                    result2: ""
                };
            },
            onLoad: function() {
                this.userInfo;
            },
            onShow: function() {
                this.getTest(), this.getResultInfo(), this.getResultInfo2();
            },
            methods: {
                getInfo: function() {
                    var t = this;
                    this.post({
                        url: "user/getUserInfo",
                        login: !0
                    }).then(function(e) {
                        t.$store.commit("setUserInfo", e);
                    });
                },
                getResultInfo: function() {
                    var t = this;
                    t.post({
                        url: "test_paper/getTestResult",
                        paper_id: 1,
                        login: !0
                    }).then(function(e) {
                        t.result1 = e;
                    });
                },
                getResultInfo2: function() {
                    var t = this;
                    t.post({
                        url: "test_paper/getTestResult",
                        paper_id: 2,
                        login: !0
                    }).then(function(e) {
                        t.result2 = e;
                    });
                },
                login: function(t) {
                    var e = this;
                    this.toLogin(t).then(function(t) {
                        e.$store.commit("setUserInfo", t);
                    });
                },
                getTest: function() {
                    var t = this;
                    t.post({
                        url: "test_paper/getTestPaper",
                        login: !0
                    }).then(function(e) {
                        t.list = e;
                    });
                },
                toUrl: function(t) {
                    if (!this.userInfo) return this.tools.dd("请登录后操作！");
                    global.mpvue.navigateTo({
                        url: "/pages/test/explain/main?id=" + t
                    });
                },
                toUrl2: function() {
                    if (!this.userInfo) return this.tools.dd("请登录后操作！");
                    global.mpvue.navigateTo({
                        url: "/pages/test/answer/main?result=" + this.result1.result + "&id=1&one=" + this.result1.one + "&two=" + this.result1.two + "&three=" + this.result1.three + "&four=" + this.result1.four
                    });
                },
                toUrl3: function() {
                    if (!this.userInfo) return this.tools.dd("请登录后操作！");
                    global.mpvue.navigateTo({
                        url: "/pages/test/result/main?result=" + this.result2.result + "&id=2&one=" + this.result2.one + "&two=" + this.result2.two + "&three=" + this.result2.three
                    });
                }
            },
            onShareAppMessage: function() {
                return {
                    title: "志愿填报助手-匹配名校更准确",
                    path: "/pages/index/main",
                    imageUrl: "https://image.tianziyuan.cn/bg/share.jpg"
                };
            }
        };
    },
    332: function(t, e, s) {
        var n = function() {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {
                staticClass: "box"
            }, [ t._m(0), t._v(" "), s("div", {
                staticClass: "ls"
            }, t._l(t.list, function(e, n) {
                return s("div", {
                    key: n,
                    staticClass: "li",
                    attrs: {
                        eventid: "0_" + n
                    },
                    on: {
                        click: function(s) {
                            t.toUrl(e.id);
                        }
                    }
                }, [ s("div", {
                    staticClass: "li-txt"
                }, [ t._v(t._s(e.name)) ]), t._v(" "), s("div", {
                    staticClass: "li-button"
                }, [ t._v("\n                开始测评\n\n            ") ]) ]);
            })), t._v(" "), s("div", {
                staticClass: "ls"
            }, [ t.result1 ? s("div", {
                staticClass: "li",
                staticStyle: {
                    background: "#ec5300"
                },
                attrs: {
                    eventid: "1"
                },
                on: {
                    click: t.toUrl2
                }
            }, [ s("div", {
                staticClass: "li-txt"
            }, [ t._v("MBTI测试结果") ]), t._v(" "), s("div", {
                staticClass: "li-button"
            }, [ t._v("\n                " + t._s(t.result1.result) + "\n            ") ]) ]) : t._e(), t._v(" "), t.result2 ? s("div", {
                staticClass: "li",
                staticStyle: {
                    background: "#ec5300"
                },
                attrs: {
                    eventid: "2"
                },
                on: {
                    click: t.toUrl3
                }
            }, [ s("div", {
                staticClass: "li-txt"
            }, [ t._v("霍兰德测试结果") ]), t._v(" "), s("div", {
                staticClass: "li-button"
            }, [ t._v("\n                " + t._s(t.result2.result) + "\n            ") ]) ]) : t._e() ]) ]);
        }, i = [ function() {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {
                staticClass: "nav"
            }, [ s("img", {
                staticClass: "bj",
                attrs: {
                    src: "/static/images/bjf.png"
                }
            }), t._v(" "), s("div", {
                staticClass: "info"
            }, [ t._v("\n            高考志愿的填报，选择合适的专业很重要。大学专业不仅仅关系到我们未来四年的学习以及职业素养的培养，将来毕业也能找一份自己喜欢的工作。我们通过研究国际权威的测评模型，从职业性格、兴趣的角度推荐适合的专业，帮你科学的选择专业。\n        ") ]) ]);
        } ];
        n._withStripped = !0;
        var o = {
            render: n,
            staticRenderFns: i
        };
        e.a = o;
    }
}, [ 328 ]);