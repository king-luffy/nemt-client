require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 7 ], {
    318: function(t, s, e) {
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var a = e(1), i = e.n(a), r = e(319);
        new i.a(r.a).$mount();
    },
    319: function(t, s, e) {
        var a = e(321), i = e(322), r = !1, c = e(0)(a.a, i.a, function(t) {
            r || e(320);
        }, null, null);
        c.options.__file = "src\\pages\\test\\answer\\index.vue", c.esModule && Object.keys(c.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), c.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        s.a = c.exports;
    },
    320: function(t, s) {},
    321: function(t, s, e) {
        s.a = {
            data: function() {
                return {
                    paper_id: 1,
                    result: "",
                    desc: "",
                    one: "",
                    two: "",
                    three: "",
                    four: "",
                    one_count: 50,
                    two_count: 50,
                    three_count: 50,
                    four_count: 50
                };
            },
            onLoad: function(t) {
                this.userInfo, t && (this.paper_id = t.id, this.result = t.result, this.one_count = t.one, 
                this.two_count = t.two, this.three_count = t.three, this.four_count = t.four), this.getResult();
            },
            methods: {
                getResult: function() {
                    var t = this;
                    t.post({
                        url: "test_paper/getResult",
                        login: !0,
                        paper_id: t.paper_id,
                        one: t.one_count,
                        two: t.two_count,
                        three: t.three_count,
                        four: t.four_count,
                        result: t.result
                    }).then(function(s) {
                        t.desc = s;
                        var e = "";
                        e = s.result_keywords.split(/(?=[A-Z])/), console.log("结果", e), t.one = e[0], t.two = e[1], 
                        t.three = e[2], t.four = e[3];
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
    322: function(t, s, e) {
        var a = function() {
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
            }, [ "E" == t.one ? e("img", {
                staticClass: "result-img",
                attrs: {
                    src: "/static/images/E.jpg"
                }
            }) : e("img", {
                staticClass: "result-img",
                attrs: {
                    src: "/static/images/I.jpg"
                }
            }), t._v(" "), "S" == t.two ? e("img", {
                staticClass: "result-img",
                attrs: {
                    src: "/static/images/S.jpg"
                }
            }) : e("img", {
                staticClass: "result-img",
                attrs: {
                    src: "/static/images/N.jpg"
                }
            }), t._v(" "), "T" == t.three ? e("img", {
                staticClass: "result-img",
                attrs: {
                    src: "/static/images/T.jpg"
                }
            }) : e("img", {
                staticClass: "result-img",
                attrs: {
                    src: "/static/images/F.jpg"
                }
            }), t._v(" "), "J" == t.four ? e("img", {
                staticClass: "result-img",
                attrs: {
                    src: "/static/images/J.jpg"
                }
            }) : e("img", {
                staticClass: "result-img",
                attrs: {
                    src: "/static/images/P.jpg"
                }
            }) ]) ]) ]), t._v(" "), e("div", {
                staticClass: "result1"
            }, [ e("div", {
                staticClass: "result1-title"
            }, [ t._v("\n            MBTI职业性格倾向示意图\n        ") ]), t._v(" "), e("div", {
                staticClass: "result1-img"
            }, [ e("div", {
                staticClass: "result1-w"
            }, [ e("div", {
                staticClass: "result1-x"
            }, [ t._v("外向(E):") ]), t._v(" "), e("div", {
                staticClass: "result1-y"
            }, [ e("van-progress", {
                attrs: {
                    color: "#f2826a",
                    percentage: t.one_count,
                    mpcomid: "0"
                }
            }) ], 1) ]), t._v(" "), e("div", {
                staticClass: "result1-w"
            }, [ e("div", {
                staticClass: "result1-y"
            }, [ e("van-progress", {
                attrs: {
                    color: "#f2826a",
                    percentage: 100 - t.one_count,
                    mpcomid: "1"
                }
            }) ], 1), t._v(" "), e("div", {
                staticClass: "result1-x"
            }, [ t._v("内向(I):") ]) ]), t._v(" "), e("div", {
                staticClass: "result1-w"
            }, [ e("div", {
                staticClass: "result1-x"
            }, [ t._v("感觉(S):") ]), t._v(" "), e("div", {
                staticClass: "result1-y"
            }, [ e("van-progress", {
                attrs: {
                    color: "#3B9AFF",
                    percentage: t.two_count,
                    mpcomid: "2"
                }
            }) ], 1) ]), t._v(" "), e("div", {
                staticClass: "result1-w"
            }, [ e("div", {
                staticClass: "result1-y"
            }, [ e("van-progress", {
                attrs: {
                    color: "#3B9AFF",
                    percentage: 100 - t.two_count,
                    mpcomid: "3"
                }
            }) ], 1), t._v(" "), e("div", {
                staticClass: "result1-x"
            }, [ t._v("直觉(N):") ]) ]), t._v(" "), e("div", {
                staticClass: "result1-w"
            }, [ e("div", {
                staticClass: "result1-x"
            }, [ t._v("思考(T):") ]), t._v(" "), e("div", {
                staticClass: "result1-y"
            }, [ e("van-progress", {
                attrs: {
                    color: "#f2826a",
                    percentage: t.three_count,
                    mpcomid: "4"
                }
            }) ], 1) ]), t._v(" "), e("div", {
                staticClass: "result1-w"
            }, [ e("div", {
                staticClass: "result1-y"
            }, [ e("van-progress", {
                attrs: {
                    color: "#f2826a",
                    percentage: 100 - t.three_count,
                    mpcomid: "5"
                }
            }) ], 1), t._v(" "), e("div", {
                staticClass: "result1-x"
            }, [ t._v("情感(F):") ]) ]), t._v(" "), e("div", {
                staticClass: "result1-w"
            }, [ e("div", {
                staticClass: "result1-x"
            }, [ t._v("判断(J):") ]), t._v(" "), e("div", {
                staticClass: "result1-y"
            }, [ e("van-progress", {
                attrs: {
                    color: "#3B9AFF",
                    percentage: t.four_count,
                    mpcomid: "6"
                }
            }) ], 1) ]), t._v(" "), e("div", {
                staticClass: "result1-w"
            }, [ e("div", {
                staticClass: "result1-y"
            }, [ e("van-progress", {
                attrs: {
                    color: "#3B9AFF",
                    percentage: 100 - t.four_count,
                    mpcomid: "7"
                }
            }) ], 1), t._v(" "), e("div", {
                staticClass: "result1-x"
            }, [ t._v("知觉(p):") ]) ]) ]), t._v(" "), e("div", {
                staticClass: "result1-title1"
            }, [ t._v("\n             倾向程度示意图表示4个维度分别的倾向程度，从中间往两侧看，彩色指示条占比越多倾向越明显。\n        ") ]), t._v(" "), e("div", {
                staticClass: "space"
            }), t._v(" "), e("div", {
                staticClass: "result1-title2"
            }, [ t._v('\n           外向与内向是指我们心理能量的作用方向，判断与知觉是我们做事的两种方式。心理学称之为"态度"。感觉与直觉是我们获取信息的方式\n            ，思考和情感是做决定的方式，心理学称之为功能，功能是人格理论的精髓、核心。每一个人在都会用到四种功能，但对功能应用的喜好程度不一样\n            等级中第一位的称之为“主导功能”，第二位的称为“辅助功能”，每个人都需要运用到两个过程。\n        ') ]), t._v(" "), e("div", {
                staticClass: "space"
            }) ]), t._v(" "), e("div", {
                staticClass: "result2"
            }, [ e("div", {
                staticClass: "result2-title"
            }, [ t._v(" " + t._s(t.desc.description)) ]) ]), t._v(" "), e("div", {
                staticClass: "result3"
            }, [ e("div", {
                staticClass: "result3-title"
            }, [ t._v("性格描述") ]), t._v(" "), t._m(1), t._v(" "), e("div", {
                staticClass: "result3-content"
            }, [ t._v("\n            " + t._s(t.desc.character_content) + "\n        ") ]), t._v(" "), t._m(2), t._v(" "), e("div", {
                staticClass: "result3-content"
            }, [ t._v("\n            " + t._s(t.desc.blind_spot_content) + "\n        ") ]) ]), t._v(" "), e("div", {
                staticClass: "space"
            }), t._v(" "), e("div", {
                staticClass: "result3"
            }, [ e("div", {
                staticClass: "result3-title"
            }, [ t._v("职业描述") ]), t._v(" "), t._m(3), t._v(" "), e("div", {
                staticClass: "result3-content"
            }, [ t._v("\n            " + t._s(t.desc.position_goodness_content) + "\n        ") ]), t._v(" "), t._m(4), t._v(" "), e("div", {
                staticClass: "result3-content"
            }, [ t._v("\n            " + t._s(t.desc.position_infer_content) + "\n        ") ]), t._v(" "), t._m(5), t._v(" "), e("div", {
                staticClass: "result3-content"
            }, [ t._v("\n            " + t._s(t.desc.job_content) + "\n        ") ]) ]), t._v(" "), e("div", {
                staticClass: "space"
            }), t._v(" "), e("div", {
                staticClass: "result3"
            }, [ e("div", {
                staticClass: "result3-title"
            }, [ t._v("就业方向") ]), t._v(" "), t._m(6), t._v(" "), e("div", {
                staticClass: "result3-content"
            }, [ t._v("\n            " + t._s(t.desc.career_direction_content) + "\n        ") ]) ]), t._v(" "), e("div", {
                staticClass: "space"
            }), t._v(" "), e("div", {
                staticClass: "result3"
            }, [ e("div", {
                staticClass: "result3-title"
            }, [ t._v("发展建议") ]), t._v(" "), t._m(7), t._v(" "), e("div", {
                staticClass: "result3-content"
            }, [ t._v("\n            " + t._s(t.desc.result) + "\n        ") ]) ]), t._v(" "), e("div", {
                staticClass: "space"
            }) ]);
        }, i = [ function() {
            var t = this, s = t.$createElement, e = t._self._c || s;
            return e("div", {
                staticClass: "result-title2"
            }, [ e("span", [ t._v("最终测评结果") ]) ]);
        }, function() {
            var t = this, s = t.$createElement, e = t._self._c || s;
            return e("div", {
                staticClass: "result3-title1",
                staticStyle: {
                    width: "200rpx"
                }
            }, [ e("img", {
                staticClass: "result3-img",
                attrs: {
                    src: "/static/images/fen1.png",
                    mode: "widthFix"
                }
            }), t._v(" "), e("span", {
                staticClass: "result3-span"
            }, [ t._v("个性特征描述") ]) ]);
        }, function() {
            var t = this, s = t.$createElement, e = t._self._c || s;
            return e("div", {
                staticClass: "result3-title1",
                staticStyle: {
                    width: "220rpx"
                }
            }, [ e("img", {
                staticClass: "result3-img",
                attrs: {
                    src: "/static/images/fen2.png"
                }
            }), t._v(" "), e("span", {
                staticClass: "result3-span"
            }, [ t._v("可能存在的盲点") ]) ]);
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
            }, [ t._v("工作优势") ]) ]);
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
            }, [ t._v("工作劣势") ]) ]);
        }, function() {
            var t = this, s = t.$createElement, e = t._self._c || s;
            return e("div", {
                staticClass: "result3-title1"
            }, [ e("img", {
                staticClass: "result3-img",
                attrs: {
                    src: "/static/images/fen3.png"
                }
            }), t._v(" "), e("span", {
                staticClass: "result3-span"
            }, [ t._v("岗位特征") ]) ]);
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
            }, [ t._v("发展建议") ]) ]);
        } ];
        a._withStripped = !0;
        var r = {
            render: a,
            staticRenderFns: i
        };
        s.a = r;
    }
}, [ 318 ]);