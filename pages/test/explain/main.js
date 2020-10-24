require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 6 ], {
    323: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(1), s = n.n(i), o = n(324);
        new s.a(o.a).$mount();
    },
    324: function(t, e, n) {
        var i = n(326), s = n(327), o = !1, a = n(0)(i.a, s.a, function(t) {
            o || n(325);
        }, null, null);
        a.options.__file = "src\\pages\\test\\explain\\index.vue", a.esModule && Object.keys(a.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), a.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        e.a = a.exports;
    },
    325: function(t, e) {},
    326: function(t, e, n) {
        e.a = {
            data: function() {
                return {
                    id: ""
                };
            },
            onLoad: function(t) {
                this.id = t.id;
            },
            methods: {
                toUrl: function() {
                    if (!this.userInfo) return this.tools.dd("请登录后操作！");
                    global.mpvue.redirectTo({
                        url: "/pages/test/nature/main?id=" + this.id
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
    327: function(t, e, n) {
        var i = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "box"
            }, [ 1 == t.id ? n("img", {
                staticClass: "img",
                attrs: {
                    src: "https://api.tianziyuan.cn/uploads/other/test3.jpg",
                    mode: "widthFix"
                }
            }) : n("img", {
                staticClass: "img",
                attrs: {
                    src: "https://api.tianziyuan.cn/uploads/other/test4.jpg",
                    mode: "widthFix"
                }
            }), t._v(" "), n("div", {
                staticClass: "add_btn"
            }, [ n("button", {
                staticClass: "btn",
                attrs: {
                    eventid: "0"
                },
                on: {
                    click: t.toUrl
                }
            }, [ t._v("\n            开始评测\n        ") ]) ], 1) ]);
        }, s = [];
        i._withStripped = !0;
        var o = {
            render: i,
            staticRenderFns: s
        };
        e.a = o;
    }
}, [ 323 ]);