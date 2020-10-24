require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 12 ], {
    293: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(1), i = n.n(o), s = n(294);
        new i.a(s.a).$mount();
    },
    294: function(e, t, n) {
        var o = n(296), i = n(297), s = !1, a = n(0)(o.a, i.a, function(e) {
            s || n(295);
        }, null, null);
        a.options.__file = "src\\pages\\school\\desc\\index.vue", a.esModule && Object.keys(a.esModule).some(function(e) {
            return "default" !== e && "__" !== e.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), a.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        t.a = a.exports;
    },
    295: function(e, t) {},
    296: function(e, t, n) {
        var o = n(27);
        t.a = {
            components: {
                wxParse: o.a
            },
            data: function() {
                return {
                    aid: 0,
                    info: {}
                };
            },
            mounted: function() {
                this.aid = this.$mp.query.id, this.getInfo();
            },
            methods: {
                getInfo: function() {
                    var e = this;
                    this.post({
                        url: "article/getInfo",
                        aid: this.aid
                    }).then(function(t) {
                        console.log("文字内容", t), e.info = t;
                    });
                },
                preview: function(e, t) {
                    console.log("预览功能", e, t);
                },
                navigate: function(e, t) {
                    console.log("导航功能", e, t);
                }
            }
        };
    },
    297: function(e, t, n) {
        var o = function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "box"
            }, [ n("div", {
                staticClass: "info-head"
            }, [ n("div", {
                staticClass: "info-title"
            }, [ e._v(e._s(e.info.title)) ]), e._v(" "), n("div", {
                staticClass: "info-row"
            }, [ n("p", {
                staticClass: "info-from"
            }, [ e._v(e._s(e.info.author)) ]), e._v(" "), n("p", {
                staticClass: "info-date"
            }, [ e._v(e._s(e.info.createtimetext)) ]) ], 1) ]), e._v(" "), n("div", {
                staticClass: "content"
            }, [ n("wxParse", {
                attrs: {
                    content: e.info.content || "暂无信息",
                    eventid: "0",
                    mpcomid: "0"
                },
                on: {
                    preview: e.preview,
                    navigate: e.navigate
                }
            }) ], 1) ]);
        }, i = [];
        o._withStripped = !0;
        var s = {
            render: o,
            staticRenderFns: i
        };
        t.a = s;
    }
}, [ 293 ]);