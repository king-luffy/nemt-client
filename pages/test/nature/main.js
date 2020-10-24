require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 2 ], {
    333: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(1), s = n.n(o), i = n(334);
        new s.a(i.a).$mount();
    },
    334: function(t, e, n) {
        var o = n(336), s = n(341), i = !1, r = n(0)(o.a, s.a, function(t) {
            i || n(335);
        }, null, null);
        r.options.__file = "src\\pages\\test\\nature\\index.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        e.a = r.exports;
    },
    335: function(t, e) {},
    336: function(t, e, n) {
        var o = n(337);
        e.a = {
            components: {
                checkXi: o.a
            },
            data: function() {
                return {
                    colorStyle: {
                        nextBac: "#3B9AFF",
                        nextCol: "#FFFFFF",
                        optBac: "#EEB67A",
                        optCol: "#232131",
                        optBacActive: "#C9784F",
                        optColActive: "#FFFFFF"
                    },
                    questionList: [],
                    show: !1,
                    id: "",
                    showModal: !1,
                    content: ""
                };
            },
            onLoad: function(t) {
                this.id = t.id;
            },
            onShow: function() {
                this.show = !1, this.userInfo && this.getInfo(), this.getTestPaper();
            },
            methods: {
                preventTouchMove: function() {},
                ok: function() {
                    this.showModal = !1;
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
                login: function(t) {
                    var e = this;
                    this.toLogin(t).then(function(t) {
                        e.$store.commit("setUserInfo", t);
                    });
                },
                getTestPaper: function() {
                    var t = this;
                    t.questionList = [], t.post({
                        url: "test_paper/getQuestion",
                        login: !0,
                        paper_id: t.id
                    }).then(function(e) {
                        t.questionList = e, t.show = !0;
                    });
                },
                nextAnswer: function(t) {
                    console.log("next", t);
                    var e = this;
                    t.isEnd && (1 == e.id ? e.getOneResult(t) : e.getTwoResult(t));
                },
                checkOption: function(t) {
                    console.log("check", t);
                },
                getOneResult: function(t) {
                    for (var e = this, n = [], o = "", s = "", i = "", r = "", c = 0; c < t.checkRes.length; c++) n.push(t.checkRes[c].result_keywords);
                    var u = e.Maxarr(n, "E"), a = e.Maxarr(n, "I");
                    console.log("E:", u), console.log("I:", a), o = u > a ? "E" : "I";
                    var l = e.Maxarr(n, "S"), h = e.Maxarr(n, "N");
                    console.log("S:", l), console.log("N:", h), s = l > h ? "S" : "N";
                    var d = e.Maxarr(n, "T"), p = e.Maxarr(n, "F");
                    console.log("T:", d), console.log("F:", p), i = d > p ? "T" : "F";
                    var v = e.Maxarr(n, "J"), w = e.Maxarr(n, "P");
                    console.log("J:", v), console.log("P:", w), r = v > w ? "J" : "P", console.log(Math.round(u / (u + a) * 100) + "." + Math.round(l / (l + h) * 100) + "." + Math.round(d / (d + p) * 100) + "." + Math.round(v / (v + w) * 100)), 
                    global.mpvue.redirectTo({
                        url: "/pages/test/answer/main?result=" + o + s + i + r + "&id=" + e.id + "&one=" + Math.round(u / (u + a) * 100) + "&two=" + Math.round(l / (l + h) * 100) + "&three=" + Math.round(d / (d + p) * 100) + "&four=" + Math.round(v / (v + w) * 100)
                    });
                },
                getTwoResult: function(t) {
                    for (var e = this, n = [], o = 0; o < t.checkRes.length; o++) t.checkRes[o].result_keywords && n.push(t.checkRes[o].result_keywords);
                    n.length < 3 && (n = [ "S", "E", "C", "C", "A", "E", "R", "S", "A", "C", "I", "R", "E", "S", "C", "I", "A", "E", "S", "C", "C", "R", "S", "R", "A", "C", "S", "I", "C", "S" ], 
                    console.log("结果集")), n = e.Maxarr2(n, 3), console.log(n), global.mpvue.redirectTo({
                        url: "/pages/test/result/main?result=" + n[0].el + n[1].el + n[2].el + "&id=" + e.id + "&one=" + Math.round(n[0].count / (n[0].count + n[1].count + n[2].count) * 100) + "&two=" + Math.round(n[1].count / (n[0].count + n[1].count + n[2].count) * 100) + "&three=" + Math.round(n[2].count / (n[0].count + n[1].count + n[2].count) * 100)
                    });
                },
                Maxarr: function(t, e) {
                    for (var n = 0; n < t.length; n++) {
                        for (var o = e, s = 0, i = 0; i < t.length; i++) t[i] == o && (s++, t[i] = -1);
                        if (-1 != o) return s;
                    }
                },
                Maxarr2: function(t, e, n) {
                    for (var o, s = {}, i = [], r = 0, c = t.length; r < c; r++) s[o = t[r]] ? s[o]++ : s[o] = 1;
                    for (var u in s) i.push({
                        el: u,
                        count: s[u]
                    });
                    i.sort(function(t, e) {
                        return e.count - t.count;
                    }), 1 === n && (i = i.reverse());
                    var a = e || i.length;
                    return i.slice(0, a);
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
    337: function(t, e, n) {
        var o = n(339), s = n(340), i = !1, r = n(0)(o.a, s.a, function(t) {
            i || n(338);
        }, "data-v-2e99e842", null);
        r.options.__file = "src\\components\\xi-check.vue", r.esModule && Object.keys(r.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] xi-check.vue: functional components are not supported with templates, they should use render functions."), 
        e.a = r.exports;
    },
    338: function(t, e) {},
    339: function(t, e, n) {
        e.a = {
            props: {
                questionList: {
                    type: Array,
                    default: function() {
                        return [ {
                            id: 1,
                            type: "radio",
                            number: 1,
                            title: "1生物大灭绝是指大规模的集群灭绝，生物灭绝又叫生物绝种。历史上一共有几次大灭绝？",
                            imageList: [ "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1588056060&di=67dc5595a44e90101f524bae2273cc0a&src=http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg" ],
                            question_option: [ {
                                id: 1,
                                name: "A",
                                content: "一次",
                                active: 0
                            }, {
                                id: 2,
                                name: "B",
                                content: "二次",
                                active: 0
                            }, {
                                id: 3,
                                name: "C",
                                content: "三次",
                                active: 0
                            }, {
                                id: 4,
                                name: "D",
                                content: "四次",
                                active: 0
                            } ]
                        } ];
                    }
                },
                colorStyle: {
                    type: Object,
                    default: function() {
                        return {
                            nextBac: "#3B9AFF",
                            nextCol: "#FFFFFF",
                            optBac: "#EEB67A",
                            optCol: "#232131",
                            optBacActive: "#C9784F",
                            optColActive: "#FFFFFF"
                        };
                    }
                }
            },
            data: function() {
                return {
                    newOptList: [],
                    showQuestionIndex: 0,
                    isEnd: !1
                };
            },
            watch: {},
            computed: {
                nextStyle: function() {
                    return "background:" + this.colorStyle.nextBac + ";color:" + this.colorStyle.nextCol + ";";
                },
                optStyle: function() {
                    return "background:" + this.colorStyle.optBac + ";color:" + this.colorStyle.optCol + ";";
                },
                optActiveStyle: function() {
                    return "background:" + this.colorStyle.optBacActive + ";color:" + this.colorStyle.optColActive + ";";
                }
            },
            created: function() {
                this.newOptList = this.questionList;
            },
            methods: {
                checkOption: function(t) {
                    this.questionList[this.showQuestionIndex];
                    this.checkActive(t.currentTarget.dataset.id);
                    var e = {
                        id: this.questionList[this.showQuestionIndex].id,
                        value: t.currentTarget.dataset.id
                    };
                    this.showQuestionIndex < this.questionList.length - 1 && this.nextQuestionBtn(), 
                    this.$emit("checkOption", e);
                },
                checkActive: function(t) {
                    var e = this.questionList, n = e[this.showQuestionIndex].question_option;
                    "radio" == e[this.showQuestionIndex].type ? n.map(function(e, n) {
                        e.id == t ? e.active = !e.active : e.active = !1;
                    }) : "checkbox" == e[this.showQuestionIndex].type && n.map(function(e, n) {
                        e.id == t && (e.active = !e.active);
                    }), this.questionList = e;
                },
                nextQuestionBtn1: function(t) {
                    var e = this.questionList;
                    this.showQuestionIndex > 0 && (this.showQuestionIndex = this.showQuestionIndex - 1), 
                    console.log(this.showQuestionIndex), console.log(e.length), this.showQuestionIndex == e.length - 2 && (this.isEnd = !1);
                },
                nextQuestionBtn: function(t) {
                    if (!this.checkTest()) return !1;
                    var e = {
                        current_id: this.showQuestionIndex,
                        isEnd: this.isEnd
                    };
                    if (this.isEnd) return this.formatKey(e);
                    var n = this.questionList;
                    this.showQuestionIndex < n.length - 1 && (this.showQuestionIndex = this.showQuestionIndex + 1, 
                    this.showQuestionIndex == n.length - 1 && (this.isEnd = !0)), this.$emit("nextAnswer", e);
                },
                checkTest: function() {
                    var t = !1;
                    return "write" == this.questionList[this.showQuestionIndex].type ? "" !== this.questionList[this.showQuestionIndex].question_key.trim() && (t = !0) : this.questionList[this.showQuestionIndex].question_option.map(function(e, n) {
                        if (e.active) return t = !0;
                    }), t;
                },
                formatKey: function(t) {
                    var e = [], n = [];
                    this.questionList.map(function(t, o) {
                        var s = [], i = {
                            id: t.id,
                            keyFormat: []
                        };
                        "write" == t.type ? (s.push(t.question_key.trim()), i.keyFormat.push(t.question_key.trim())) : t.question_option.map(function(t, e) {
                            t.active && (s.push(t), i.keyFormat.push(t.id));
                        }), n.push(i), e.push({
                            result_keywords: s[0].result_keywords,
                            parent_id: t.parent_id
                        });
                    }), t.checkRes = e, this.$emit("nextAnswer", t);
                }
            }
        };
    },
    340: function(t, e, n) {
        var o = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("view", {
                staticClass: "answer__content"
            }, [ n("block", [ n("view", {
                staticClass: "answer__question"
            }, [ n("view", {
                staticClass: "question_title"
            }, [ n("view", {
                staticClass: "title__number"
            }, [ t._v(t._s(t.newOptList[t.showQuestionIndex].parent_title)) ]) ]), t._v(" "), n("view", {
                staticClass: "question_title"
            }, [ n("view", {
                staticClass: "title__number"
            }, [ t._v(t._s(t.newOptList[t.showQuestionIndex].number || t.showQuestionIndex + 1) + "/" + t._s(t.newOptList.length) + ".") ]), t._v(" "), n("view", [ t._v("\n\t\t\t\t\t（" + t._s("write" == t.newOptList[t.showQuestionIndex].type ? "填空" : "radio" == t.newOptList[t.showQuestionIndex].type ? "单选" : "checkbox" == t.newOptList[t.showQuestionIndex].type ? "多选" : "") + ")\n\t\t\t\t\t" + t._s(t.newOptList[t.showQuestionIndex].title) + "\n\t\t\t\t") ]) ]), t._v(" "), n("view", {
                staticClass: "question__option"
            }, [ "radio" == t.newOptList[t.showQuestionIndex].type || "checkbox" == t.newOptList[t.showQuestionIndex].type ? n("block", t._l(t.newOptList[t.showQuestionIndex].question_option, function(e, o) {
                return n("block", {
                    key: o
                }, [ n("view", {
                    staticClass: "question__option__item",
                    style: e.active ? t.optActiveStyle : t.optStyle,
                    attrs: {
                        "data-id": e.id,
                        eventid: "0_" + o
                    },
                    on: {
                        tap: t.checkOption
                    }
                }, [ n("view", [ t._v(t._s(e.content)) ]) ]) ]);
            })) : t._e(), t._v(" "), "write" == t.newOptList[t.showQuestionIndex].type ? n("block", [ n("view", {
                staticClass: "item__key__box"
            }, [ t._v("\n\t\t\t\t\t\t答案："), n("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.newOptList[t.showQuestionIndex].question_key,
                    expression: "newOptList[showQuestionIndex].question_key"
                } ],
                staticClass: "write_input",
                attrs: {
                    placeholder: "请填写你的答案",
                    eventid: "1"
                },
                domProps: {
                    value: t.newOptList[t.showQuestionIndex].question_key
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.newOptList[t.showQuestionIndex].question_key = e.target.value);
                    }
                }
            }) ]) ]) : t._e() ], 1) ]) ]), t._v(" "), n("view", {
                staticClass: "answer__next__btn2",
                style: t.nextStyle,
                attrs: {
                    eventid: "2"
                },
                on: {
                    tap: t.nextQuestionBtn1
                }
            }, [ t._v("\n\t\t 上一 题\n\t") ]), t._v(" "), n("view", {
                staticClass: "answer__next__btn",
                style: t.nextStyle,
                attrs: {
                    eventid: "3"
                },
                on: {
                    tap: t.nextQuestionBtn
                }
            }, [ t._v("\n\t\t" + t._s(t.isEnd ? "提交" : "下 一 题") + "\n\t") ]) ], 1);
        }, s = [];
        o._withStripped = !0;
        var i = {
            render: o,
            staticRenderFns: s
        };
        e.a = i;
    },
    341: function(t, e, n) {
        var o = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.show ? n("view", {
                staticClass: "content"
            }, [ n("check-xi", {
                attrs: {
                    questionList: t.questionList,
                    eventid: "0",
                    mpcomid: "0"
                },
                on: {
                    nextAnswer: t.nextAnswer,
                    checkOption: t.checkOption
                }
            }), t._v(" "), t.showModal ? n("view", {
                staticClass: "mask",
                attrs: {
                    catchtouchmove: "preventTouchMove",
                    eventid: "1"
                },
                on: {
                    click: t.ok
                }
            }) : t._e(), t._v(" "), t.showModal ? n("view", {
                staticClass: "modalDlg"
            }, [ n("text", {
                staticClass: "text"
            }, [ t._v("测试结果") ]), t._v(" "), n("view", {
                staticClass: "content"
            }, [ n("rich-text", {
                attrs: {
                    nodes: t.content,
                    mpcomid: "1"
                }
            }) ], 1), t._v(" "), n("view", {
                staticClass: "ok",
                attrs: {
                    eventid: "2"
                },
                on: {
                    click: t.ok
                }
            }, [ t._v("好的") ]) ]) : t._e() ], 1) : t._e();
        }, s = [];
        o._withStripped = !0;
        var i = {
            render: o,
            staticRenderFns: s
        };
        e.a = i;
    }
}, [ 333 ]);