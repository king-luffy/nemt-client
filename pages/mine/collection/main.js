require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 20 ], {
    244: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(1), i = n.n(o), s = n(245);
        new i.a(s.a).$mount();
    },
    245: function(t, e, n) {
        var o = n(247), i = n(248), s = !1, a = n(0)(o.a, i.a, function(t) {
            s || n(246);
        }, null, null);
        a.options.__file = "src\\pages\\mine\\collection\\index.vue", a.esModule && Object.keys(a.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), a.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        e.a = a.exports;
    },
    246: function(t, e) {},
    247: function(t, e, n) {
        var o = 1;
        e.a = {
            data: function() {
                return {
                    list: [],
                    noMore: !1,
                    isWait: !1
                };
            },
            mounted: function() {
                this.getList();
            },
            methods: {
                getList: function() {
                    console.log("进来了吗");
                    var t = this;
                    if (this.noMore) return !1;
                    this.isWait = !0, this.post({
                        url: "collection/getCollectionList",
                        page: o,
                        login: !0
                    }).then(function(e) {
                        if (console.log("收藏列表", e), 1 === o) t.isWait = !1, t.list = e; else {
                            var n = e.length < 1;
                            t.noMore = n, t.list = t.list.concat(e);
                        }
                    });
                },
                toInfo: function(t) {
                    global.mpvue.navigateTo({
                        url: "/pages/school/info/main?id=" + t
                    });
                }
            },
            onReachBottom: function() {
                o += 1, this.getList();
            }
        };
    },
    248: function(t, e, n) {
        var o = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "box"
            }, [ t._l(t.list, function(e, o) {
                return n("div", {
                    key: o
                }, [ n("div", {
                    staticClass: "art",
                    attrs: {
                        eventid: "0_" + o
                    },
                    on: {
                        click: function(n) {
                            t.toInfo(e.school_id);
                        }
                    }
                }, [ n("img", {
                    staticClass: "art-img",
                    attrs: {
                        src: e.avatar
                    }
                }), t._v(" "), n("div", {
                    staticClass: "art-txt"
                }, [ n("div", {
                    staticClass: "art-tt"
                }, [ t._v(t._s(e.name)) ]), t._v(" "), n("div", {
                    staticClass: "art-ds"
                }, [ t._v(t._s(e.flag)) ]) ]) ]) ]);
            }), t._v(" "), t.list.length > 8 ? n("reach", {
                attrs: {
                    nomore: t.noMore,
                    iswait: t.isWait,
                    mpcomid: "0"
                }
            }) : t._e(), t._v(" "), t.list.length <= 0 ? n("nodata", {
                attrs: {
                    mpcomid: "1"
                }
            }) : t._e() ], 2);
        }, i = [];
        o._withStripped = !0;
        var s = {
            render: o,
            staticRenderFns: i
        };
        e.a = s;
    }
}, [ 244 ]);