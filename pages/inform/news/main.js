require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 26 ], {
    214: function(t, i, e) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e(1), s = e.n(n), o = e(215);
        new s.a(o.a).$mount();
    },
    215: function(t, i, e) {
        var n = e(217), s = e(218), o = !1, a = e(0)(n.a, s.a, function(t) {
            o || e(216);
        }, null, null);
        a.options.__file = "src\\pages\\inform\\news\\index.vue", a.esModule && Object.keys(a.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), a.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        i.a = a.exports;
    },
    216: function(t, i) {},
    217: function(t, i, e) {
        var n = 1;
        i.a = {
            data: function() {
                return {
                    list: [],
                    noMore: !1,
                    isWait: !1,
                    isLoad: !0
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
                        url: "article/getnews",
                        page: n
                    }).then(function(i) {
                        if (console.log("文章列表", i), 1 === n) t.isWait = !1, t.isLoad = !1, t.list = i; else {
                            var e = i.length < 1;
                            t.noMore = e, t.list = t.list.concat(i);
                        }
                    });
                },
                toInfo: function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    i ? global.mpvue.navigateTo({
                        url: "/pages/html/article/main?link=" + i
                    }) : global.mpvue.navigateTo({
                        url: "/pages/html/article/main?id=" + t
                    });
                }
            },
            onReachBottom: function() {
                n += 1, this.getList();
            }
        };
    },
    218: function(t, i, e) {
        var n = function() {
            var t = this, i = t.$createElement, e = t._self._c || i;
            return e("div", {
                staticClass: "box"
            }, [ t._l(t.list, function(i, n) {
                return e("div", {
                    key: n
                }, [ i.image ? e("div", {
                    staticClass: "art",
                    attrs: {
                        eventid: "1_" + n
                    },
                    on: {
                        click: function(e) {
                            t.toInfo(i.id, i.wechat_link);
                        }
                    }
                }, [ e("img", {
                    staticClass: "art-img",
                    attrs: {
                        src: i.image
                    }
                }), t._v(" "), e("div", {
                    staticClass: "art-txt"
                }, [ e("div", {
                    staticClass: "art-tt"
                }, [ t._v(t._s(i.title)) ]), t._v(" "), e("div", {
                    staticClass: "art-ds"
                }, [ t._v(t._s(i.description)) ]) ]) ]) : e("div", {
                    staticClass: "art2",
                    attrs: {
                        eventid: "0_" + n
                    },
                    on: {
                        click: function(e) {
                            t.toInfo(i.id);
                        }
                    }
                }, [ e("div", {
                    staticClass: "art-tt2"
                }, [ t._v(t._s(i.title)) ]), t._v(" "), e("div", {
                    staticClass: "art-ds2"
                }, [ t._v(t._s(i.description)) ]) ]) ]);
            }), t._v(" "), t.list.length <= 0 ? e("nodata", {
                attrs: {
                    mpcomid: "0"
                }
            }) : t._e(), t._v(" "), t.list.length > 8 ? e("reach", {
                attrs: {
                    nomore: t.noMore,
                    iswait: t.isWait,
                    mpcomid: "1"
                }
            }) : t._e(), t._v(" "), t.isLoad ? e("initing", {
                attrs: {
                    mpcomid: "2"
                }
            }) : t._e() ], 2);
        }, s = [];
        n._withStripped = !0;
        var o = {
            render: n,
            staticRenderFns: s
        };
        i.a = o;
    }
}, [ 214 ]);