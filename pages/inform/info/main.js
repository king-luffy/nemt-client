require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 28 ], {
    141: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(1), o = n.n(i), s = n(142);
        new o.a(s.a).$mount();
    },
    142: function(t, e, n) {
        var i = n(144), o = n(208), s = !1, a = n(0)(i.a, o.a, function(t) {
            s || n(143);
        }, null, null);
        a.options.__file = "src\\pages\\inform\\info\\index.vue", a.esModule && Object.keys(a.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), a.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        e.a = a.exports;
    },
    143: function(t, e) {},
    144: function(t, e, n) {
        var i = n(27);
        e.a = {
            components: {
                wxParse: i.a
            },
            data: function() {
                return {
                    isWait: !0,
                    aid: 0,
                    info: {}
                };
            },
            mounted: function() {
                this.aid = this.$mp.query.id, this.getInfo();
            },
            methods: {
                getInfo: function() {
                    var t = this;
                    this.post({
                        url: "article/getInfo",
                        aid: this.aid
                    }).then(function(e) {
                        console.log("文字内容", e), t.info = e, t.isWait = !1;
                    });
                },
                preview: function(t, e) {
                    console.log("预览功能", t, e);
                },
                navigate: function(t, e) {
                    console.log("导航功能", t, e);
                }
            }
        };
    },
    208: function(t, e, n) {
        var i = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "box"
            }, [ n("div", {
                staticClass: "info-head"
            }, [ n("div", {
                staticClass: "info-title"
            }, [ t._v(t._s(t.info.title)) ]), t._v(" "), n("div", {
                staticClass: "info-row"
            }, [ n("p", {
                staticClass: "info-from"
            }, [ t._v(t._s(t.info.author)) ]), t._v(" "), n("p", {
                staticClass: "info-date"
            }, [ t._v(t._s(t.info.createtimetext)) ]) ], 1) ]), t._v(" "), n("div", {
                staticClass: "content"
            }, [ n("wxParse", {
                attrs: {
                    content: t.info.content || "暂无信息",
                    eventid: "0",
                    mpcomid: "0"
                },
                on: {
                    preview: t.preview,
                    navigate: t.navigate
                }
            }) ], 1), t._v(" "), t.isWait ? n("initing", {
                attrs: {
                    mpcomid: "1"
                }
            }) : t._e() ], 1);
        }, o = [];
        i._withStripped = !0;
        var s = {
            render: i,
            staticRenderFns: o
        };
        e.a = s;
    }
}, [ 141 ]);