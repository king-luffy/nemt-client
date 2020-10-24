require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 15 ], {
    269: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = o(1), s = o.n(n), c = o(270);
        new s.a(c.a).$mount();
    },
    270: function(t, e, o) {
        var n = o(272), s = o(273), c = !1, i = o(0)(n.a, s.a, function(t) {
            c || o(271);
        }, null, null);
        i.options.__file = "src\\pages\\mine\\subject\\index.vue", i.esModule && Object.keys(i.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), i.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        e.a = i.exports;
    },
    271: function(t, e) {},
    272: function(t, e, o) {
        e.a = {
            data: function() {
                return {
                    result: []
                };
            },
            mounted: function() {
                this.userInfo, this.getSubject();
            },
            methods: {
                onChangeGroup: function(t) {
                    this.result = t.mp.detail, console.log("科目选择：", this.result);
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
                getSubject: function() {
                    var t = this;
                    this.post({
                        url: "user/getSubject",
                        login: !0
                    }).then(function(e) {
                        console.log("我的科目", e), e && (t.result = e);
                    });
                },
                myClick: function() {
                    if (!this.userInfo) return this.tools.dd("请登录后操作！");
                    var t = this;
                    if (t.result.length < 3) return this.tools.dd("科目必须选择3个");
                    t.post({
                        url: "user/subject",
                        login: !0,
                        subject: t.result
                    }).then(function(e) {
                        if (console.log(e), t.getInfo(), e) return t.tools.dd(e.msg);
                    });
                }
            }
        };
    },
    273: function(t, e, o) {
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                staticClass: "box"
            }, [ o("div", {
                staticClass: "exchange"
            }, [ o("div", {
                staticClass: "exchange-txt"
            }, [ t._v("\n                选择科目：\n            ") ]), t._v(" "), o("div", {
                staticClass: "exchange-input"
            }, [ o("van-checkbox-group", {
                attrs: {
                    value: t.result,
                    max: "3",
                    min: "3",
                    eventid: "0",
                    mpcomid: "6"
                },
                on: {
                    change: t.onChangeGroup
                }
            }, [ o("div", {
                staticClass: "bod-r-i"
            }, [ o("div", {
                staticClass: "bod-r-c"
            }, [ o("van-checkbox", {
                attrs: {
                    name: "物理",
                    "checked-color": "#3B9AFF",
                    mpcomid: "0"
                }
            }, [ t._v("物理") ]) ], 1), t._v(" "), o("div", {
                staticClass: "bod-r-c"
            }, [ o("van-checkbox", {
                attrs: {
                    name: "化学",
                    "checked-color": "#3B9AFF",
                    mpcomid: "1"
                }
            }, [ t._v("化学") ]) ], 1), t._v(" "), o("div", {
                staticClass: "bod-r-c"
            }, [ o("van-checkbox", {
                attrs: {
                    name: "生物",
                    "checked-color": "#3B9AFF",
                    mpcomid: "2"
                }
            }, [ t._v("生物") ]) ], 1), t._v(" "), o("div", {
                staticClass: "bod-r-c"
            }, [ o("van-checkbox", {
                attrs: {
                    name: "政治",
                    "checked-color": "#3B9AFF",
                    mpcomid: "3"
                }
            }, [ t._v("政治") ]) ], 1), t._v(" "), o("div", {
                staticClass: "bod-r-c"
            }, [ o("van-checkbox", {
                attrs: {
                    name: "历史",
                    "checked-color": "#3B9AFF",
                    mpcomid: "4"
                }
            }, [ t._v("历史") ]) ], 1), t._v(" "), o("div", {
                staticClass: "bod-r-c"
            }, [ o("van-checkbox", {
                attrs: {
                    name: "地理",
                    "checked-color": "#3B9AFF",
                    mpcomid: "5"
                }
            }, [ t._v("地理") ]) ], 1) ]) ]) ], 1), t._v(" "), o("div", {
                staticClass: "exchange-button"
            }, [ o("button", {
                attrs: {
                    type: "button",
                    eventid: "1"
                },
                on: {
                    click: function(e) {
                        t.myClick();
                    }
                }
            }, [ t._v("提交") ]) ], 1) ]) ]);
        }, s = [];
        n._withStripped = !0;
        var c = {
            render: n,
            staticRenderFns: s
        };
        e.a = c;
    }
}, [ 269 ]);