require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 4 ], {
    342: function(t, s, e) {
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var i = e(1), a = e.n(i), r = e(343);
        new a.a(r.a).$mount();
    },
    343: function(t, s, e) {
        var i = e(345), a = e(346), r = !1, n = e(0)(i.a, a.a, function(t) {
            r || e(344);
        }, null, null);
        n.options.__file = "src\\pages\\test\\result\\index.vue", n.esModule && Object.keys(n.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), n.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        s.a = n.exports;
    },
    344: function(t, s) {},
    345: function(t, s, e) {
        s.a = {
            data: function() {
                return {
                    paper_id: "",
                    result: "",
                    desc: "",
                    one_count: "",
                    two_count: "",
                    three_count: "",
                    one: "",
                    two: "",
                    three: "",
                    one_img: "",
                    two_img: "",
                    three_img: ""
                };
            },
            onLoad: function(t) {
                if (this.userInfo, t) {
                    this.paper_id = t.id, this.result = t.result;
                    var s = "";
                    s = t.result.split(/(?=[A-Z])/), this.one = s[0], this.two = s[1], this.three = s[2], 
                    this.one_img = "/static/images/" + s[0].toLowerCase() + ".png", this.two_img = "/static/images/" + s[1].toLowerCase() + ".png", 
                    this.three_img = "/static/images/" + s[2].toLowerCase() + ".png", this.one_count = t.one, 
                    this.two_count = t.two, this.three_count = t.three;
                }
                this.getResult();
            },
            methods: {
                getResult: function() {
                    var t = this;
                    t.post({
                        url: "test_paper/getResult",
                        login: !0,
                        paper_id: t.paper_id,
                        result: t.result,
                        one: t.one_count,
                        two: t.two_count,
                        three: t.three_count,
                        one_c: t.one,
                        two_c: t.two,
                        three_c: t.three,
                        four: 1
                    }).then(function(s) {
                        console.log("结果", s), t.desc = s;
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
    346: function(t, s, e) {
        var i = function() {
            var t = this, s = t.$createElement, e = t._self._c || s;
            return e("div", {
                staticClass: "box"
            }, [ e("div", {
                staticClass: "info"
            }, [ e("div", {
                staticClass: "result"
            }, [ e("div", {
                staticClass: "result-title1"
            }, [ t.userInfo ? e("img", {
                staticClass: "face-img",
                attrs: {
                    src: t.userInfo.avatar
                }
            }) : t._e() ]), t._v(" "), t._m(0), t._v(" "), e("div", {
                staticClass: "result-title3"
            }, [ e("img", {
                staticClass: "result-img",
                attrs: {
                    src: t.one_img
                }
            }), t._v(" "), e("img", {
                staticClass: "result-img",
                attrs: {
                    src: t.two_img
                }
            }), t._v(" "), e("img", {
                staticClass: "result-img",
                attrs: {
                    src: t.three_img
                }
            }) ]) ]) ]), t._v(" "), e("div", {
                staticClass: "result1"
            }, [ e("div", {
                staticClass: "result1-title"
            }, [ t._v("\n                霍兰德职业性格倾向示意图\n            ") ]), t._v(" "), e("div", {
                staticClass: "result1-img"
            }, [ e("div", {
                staticClass: "result1-w"
            }, [ "S" == t.one ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("社会型(S):") ]) : "R" == t.one ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("现实型(R):") ]) : "E" == t.one ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("管理型(E):") ]) : "A" == t.one ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("艺术型(A):") ]) : "C" == t.one ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("常规型(C):") ]) : e("div", {
                staticClass: "result1-x"
            }, [ t._v("研究型(I):") ]), t._v(" "), e("div", {
                staticClass: "result1-y"
            }, [ e("van-progress", {
                attrs: {
                    color: "#f2826a",
                    percentage: t.one_count,
                    mpcomid: "0"
                }
            }) ], 1) ]), t._v(" "), e("div", {
                staticClass: "result1-w"
            }, [ "S" == t.two ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("社会型(S):") ]) : "R" == t.two ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("现实型(R):") ]) : "E" == t.two ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("管理型(E):") ]) : "A" == t.two ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("艺术型(A):") ]) : "C" == t.two ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("常规型(C):") ]) : e("div", {
                staticClass: "result1-x"
            }, [ t._v("研究型(I):") ]), t._v(" "), e("div", {
                staticClass: "result1-y"
            }, [ e("van-progress", {
                attrs: {
                    color: "#f2826a",
                    percentage: t.two_count,
                    mpcomid: "1"
                }
            }) ], 1) ]), t._v(" "), e("div", {
                staticClass: "result1-w"
            }, [ "S" == t.three ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("社会型(S):") ]) : "R" == t.three ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("现实型(R):") ]) : "E" == t.three ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("管理型(E):") ]) : "A" == t.three ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("艺术型(A):") ]) : "C" == t.three ? e("div", {
                staticClass: "result1-x"
            }, [ t._v("常规型(C):") ]) : e("div", {
                staticClass: "result1-x"
            }, [ t._v("研究型(I):") ]), t._v(" "), e("div", {
                staticClass: "result1-y"
            }, [ e("van-progress", {
                attrs: {
                    color: "#3B9AFF",
                    percentage: t.three_count,
                    mpcomid: "2"
                }
            }) ], 1) ]) ]), t._v(" "), e("div", {
                staticClass: "space"
            }), t._v(" "), e("div", {
                staticClass: "space"
            }) ]), t._v(" "), t._l(t.desc, function(s, i) {
                return e("div", {
                    key: i
                }, [ s.character_content ? e("div", {
                    staticClass: "result3"
                }, [ e("div", {
                    staticClass: "result3-title"
                }, [ t._v("性格分析:" + t._s(s.result_keywords)) ]), t._v(" "), t._m(1, !0), t._v(" "), e("div", {
                    staticClass: "result3-content"
                }, [ t._v("\n                    " + t._s(s.character_content) + "\n                ") ]), t._v(" "), t._m(2, !0), t._v(" "), e("div", {
                    staticClass: "result3-content"
                }, [ t._v("\n                    " + t._s(s.common_content) + "\n                ") ]) ]) : t._e(), t._v(" "), e("div", {
                    staticClass: "space"
                }) ]);
            }), t._v(" "), t._l(t.desc, function(s, i) {
                return e("div", {
                    key: i
                }, [ s.position_content ? e("div", {
                    staticClass: "result3"
                }, [ e("div", {
                    staticClass: "result3-title"
                }, [ t._v("职业描述:" + t._s(s.result_keywords)) ]), t._v(" "), t._m(3, !0), t._v(" "), e("div", {
                    staticClass: "result3-content"
                }, [ t._v("\n                " + t._s(s.position_content) + "\n            ") ]), t._v(" "), t._m(4, !0), t._v(" "), e("div", {
                    staticClass: "result3-content"
                }, [ t._v("\n                " + t._s(s.career_direction_content) + "\n\n            ") ]) ]) : t._e(), t._v(" "), e("div", {
                    staticClass: "space"
                }) ]);
            }), t._v(" "), t.desc.result4 ? e("div", {
                staticClass: "result3"
            }, [ e("div", {
                staticClass: "result3-title"
            }, [ t._v("职业方向") ]), t._v(" "), t._m(5), t._v(" "), e("div", {
                staticClass: "result3-content"
            }, [ t._v("\n                " + t._s(t.desc.result4.career_direction_content) + "\n            ") ]) ]) : t._e(), t._v(" "), e("div", {
                staticClass: "space"
            }) ], 2);
        }, a = [ function() {
            var t = this, s = t.$createElement, e = t._self._c || s;
            return e("div", {
                staticClass: "result-title2"
            }, [ e("span", [ t._v("最终测评结果") ]) ]);
        }, function() {
            var t = this, s = t.$createElement, e = t._self._c || s;
            return e("div", {
                staticClass: "result3-title1"
            }, [ e("img", {
                staticClass: "result3-img",
                attrs: {
                    src: "/static/images/fen1.png"
                }
            }), t._v(" "), e("span", {
                staticClass: "result3-span"
            }, [ t._v("性格特点") ]) ]);
        }, function() {
            var t = this, s = t.$createElement, e = t._self._c || s;
            return e("div", {
                staticClass: "result3-title1"
            }, [ e("img", {
                staticClass: "result3-img",
                attrs: {
                    src: "/static/images/fen2.png"
                }
            }), t._v(" "), e("span", {
                staticClass: "result3-span"
            }, [ t._v("共同特征") ]) ]);
        }, function() {
            var t = this, s = t.$createElement, e = t._self._c || s;
            return e("div", {
                staticClass: "result3-title1"
            }, [ e("img", {
                staticClass: "result3-img",
                attrs: {
                    src: "/static/images/fen1.png"
                }
            }), t._v(" "), e("span", {
                staticClass: "result3-span"
            }, [ t._v("职业特征") ]) ]);
        }, function() {
            var t = this, s = t.$createElement, e = t._self._c || s;
            return e("div", {
                staticClass: "result3-title1"
            }, [ e("img", {
                staticClass: "result3-img",
                attrs: {
                    src: "/static/images/fen2.png"
                }
            }), t._v(" "), e("span", {
                staticClass: "result3-span"
            }, [ t._v("职业倾向") ]) ]);
        }, function() {
            var t = this, s = t.$createElement, e = t._self._c || s;
            return e("div", {
                staticClass: "result3-title1"
            }, [ e("img", {
                staticClass: "result3-img",
                attrs: {
                    src: "/static/images/fen1.png"
                }
            }), t._v(" "), e("span", {
                staticClass: "result3-span"
            }, [ t._v("就业方向") ]) ]);
        } ];
        i._withStripped = !0;
        var r = {
            render: i,
            staticRenderFns: a
        };
        s.a = r;
    }
}, [ 342 ]);