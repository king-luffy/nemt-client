require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 24 ], {
    219: function(t, e, s) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = s(1), a = s.n(i), n = s(220);
        new a.a(n.a).$mount();
    },
    220: function(t, e, s) {
        var i = s(222), a = s(223), n = !1, r = s(0)(i.a, a.a, function(t) {
            n || s(221);
        }, "data-v-57d1dc2c", null);
        r.options.__file = "src\\pages\\major\\info_pre\\index.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        e.a = r.exports;
    },
    221: function(t, e) {},
    222: function(t, e, s) {
        var i = s(27);
        e.a = {
            components: {
                wxParse: i.a
            },
            data: function() {
                return {
                    profess: []
                };
            },
            mounted: function() {
                this.cid = this.$mp.query.cid, this.getInfo();
            },
            methods: {
                getInfo: function() {
                    var t = this;
                    this.post({
                        url: "major/getCateInfoPro",
                        cid: this.cid
                    }).then(function(e) {
                        console.log("职业详情", e), t.profess = e;
                    });
                },
                preview: function() {},
                navigate: function() {}
            }
        };
    },
    223: function(t, e, s) {
        var i = function() {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {
                staticClass: "box"
            }, [ s("div", {
                staticClass: "title1"
            }, [ s("div", {
                staticClass: "title1_span"
            }, [ t._v(t._s(t.profess.name)) ]) ]), t._v(" "), s("div", {
                staticClass: "title2"
            }, [ s("div", {
                staticClass: "title3"
            }, [ t._m(0), t._v(" "), s("div", {
                staticClass: "desc"
            }, [ s("wxParse", {
                attrs: {
                    content: t.profess.content,
                    eventid: "0",
                    mpcomid: "0"
                },
                on: {
                    preview: t.preview,
                    navigate: t.navigate
                }
            }) ], 1), t._v(" "), t._m(1), t._v(" "), t.profess.job_content ? s("div", {
                staticClass: "desc"
            }, [ s("wxParse", {
                attrs: {
                    content: t.profess.job_content,
                    eventid: "1",
                    mpcomid: "1"
                },
                on: {
                    preview: t.preview,
                    navigate: t.navigate
                }
            }) ], 1) : s("div", {
                staticClass: "desc"
            }, [ t._v("\n                无\n            ") ]), t._v(" "), t._m(2), t._v(" "), t.profess.job_requirements ? s("div", {
                staticClass: "desc"
            }, [ s("wxParse", {
                attrs: {
                    content: t.profess.job_requirements,
                    eventid: "2",
                    mpcomid: "2"
                },
                on: {
                    preview: t.preview,
                    navigate: t.navigate
                }
            }) ], 1) : s("div", {
                staticClass: "desc"
            }, [ t._v("\n                无\n            ") ]), t._v(" "), t._m(3), t._v(" "), t.profess.job_trait ? s("div", {
                staticClass: "desc"
            }, [ s("wxParse", {
                attrs: {
                    content: t.profess.job_trait,
                    eventid: "3",
                    mpcomid: "3"
                },
                on: {
                    preview: t.preview,
                    navigate: t.navigate
                }
            }) ], 1) : s("div", {
                staticClass: "desc"
            }, [ t._v("\n                无\n            ") ]), t._v(" "), t._m(4), t._v(" "), t.profess.tips ? s("div", {
                staticClass: "desc"
            }, [ s("wxParse", {
                attrs: {
                    content: t.profess.tips,
                    eventid: "4",
                    mpcomid: "4"
                },
                on: {
                    preview: t.preview,
                    navigate: t.navigate
                }
            }) ], 1) : s("div", {
                staticClass: "desc"
            }, [ t._v("\n                无\n            ") ]) ]) ]) ]);
        }, a = [ function() {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {
                staticClass: "title t2"
            }, [ s("img", {
                staticClass: "title_img",
                attrs: {
                    src: "/static/images/sj.png"
                }
            }), t._v(" "), s("div", {
                staticClass: "title_div"
            }, [ t._v("职业介绍") ]) ]);
        }, function() {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {
                staticClass: "title t2"
            }, [ s("img", {
                staticClass: "title_img",
                attrs: {
                    src: "/static/images/sj.png"
                }
            }), t._v("工作内容") ]);
        }, function() {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {
                staticClass: "title t2"
            }, [ s("img", {
                staticClass: "title_img",
                attrs: {
                    src: "/static/images/sj.png"
                }
            }), t._v("工作要求") ]);
        }, function() {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {
                staticClass: "title t2"
            }, [ s("img", {
                staticClass: "title_img",
                attrs: {
                    src: "/static/images/sj.png"
                }
            }), t._v("工作特点") ]);
        }, function() {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {
                staticClass: "title t2"
            }, [ s("img", {
                staticClass: "title_img",
                attrs: {
                    src: "/static/images/sj.png"
                }
            }), t._v("小贴士") ]);
        } ];
        i._withStripped = !0;
        var n = {
            render: i,
            staticRenderFns: a
        };
        e.a = n;
    }
}, [ 219 ]);