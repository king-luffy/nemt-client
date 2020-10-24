require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 3 ], {
    284: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(1), s = n.n(i), o = n(285);
        new s.a(o.a).$mount();
    },
    285: function(t, e, n) {
        var i = n(287), s = n(292), o = !1, c = n(0)(i.a, s.a, function(t) {
            o || n(286);
        }, null, null);
        c.options.__file = "src\\pages\\question\\nature\\index.vue", c.esModule && Object.keys(c.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), c.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        e.a = c.exports;
    },
    286: function(t, e) {},
    287: function(t, e, n) {
        var i = n(288);
        e.a = {
            components: {
                checkXi: i.a
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
                this.id = t.id, this.show = !1, this.userInfo && this.getInfo(), this.getTestPaper();
            },
            onShow: function() {},
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
                        url: "test_paper/getQuestions",
                        login: !0,
                        paper_id: t.id
                    }).then(function(e) {
                        t.questionList = e, t.show = !0;
                    });
                },
                nextAnswer: function(t) {
                    console.log("next", t);
                    var e = this;
                    if (t.isEnd) {
                        for (var n = 0, i = 0; i < t.checkRes.length; i++) n += t.checkRes[i].score;
                        console.log("score", n), e.getResult(n);
                    }
                },
                getResult: function(t) {
                    var e = this;
                    e.post({
                        url: "test_paper/getAssessment",
                        login: !0,
                        score: t,
                        paper_id: e.id
                    }).then(function(t) {
                        console.log("得分返回", t), t && global.mpvue.showToast({
                            title: t,
                            icon: "none"
                        }), setTimeout(function() {
                            global.mpvue.navigateBack({});
                        }, 2e3);
                    });
                },
                checkOption: function(t) {
                    console.log("check", t);
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
    288: function(t, e, n) {
        var i = n(290), s = n(291), o = !1, c = n(0)(i.a, s.a, function(t) {
            o || n(289);
        }, "data-v-2dc61963", null);
        c.options.__file = "src\\components\\xi-check2.vue", c.esModule && Object.keys(c.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), c.options.functional && console.error("[vue-loader] xi-check2.vue: functional components are not supported with templates, they should use render functions."), 
        e.a = c.exports;
    },
    289: function(t, e) {},
    290: function(t, e, n) {
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
                getImg: function(t) {
                    var e = t.currentTarget.dataset.img;
                    wx.previewImage({
                        current: e,
                        urls: [ e ]
                    });
                },
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
                    if (console.log("sfsafasf", this.checkTest()), 2 == this.checkTest()) return wx.showToast({
                        title: "得数不能大于本题分数",
                        icon: "none"
                    }), !1;
                    if (0 == this.checkTest()) return wx.showToast({
                        title: "请先作答",
                        icon: "none"
                    }), !1;
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
                    return "write" == this.questionList[this.showQuestionIndex].type ? "" !== this.questionList[this.showQuestionIndex].question_key.trim() && (t = !(this.questionList[this.showQuestionIndex].question_key.trim() > this.questionList[this.showQuestionIndex].score) || 2) : this.questionList[this.showQuestionIndex].question_option.map(function(e, n) {
                        if (e.active) return t = !0;
                    }), t;
                },
                formatKey: function(t) {
                    var e = [], n = [];
                    this.questionList.map(function(t, i) {
                        var s = [], o = {
                            id: t.id,
                            keyFormat: []
                        };
                        "write" == t.type ? (s.push(t.question_key.trim()), o.keyFormat.push(t.question_key.trim())) : t.question_option.map(function(t, e) {
                            t.active && (s.push(t), o.keyFormat.push(t.id));
                        }), n.push(o), "radio" == t.type ? "A" == s[0].name ? e.push({
                            id: t.id,
                            type: t.type,
                            title: t.title,
                            score: t.score
                        }) : e.push({
                            id: t.id,
                            type: t.type,
                            title: t.title,
                            score: 0
                        }) : e.push({
                            id: t.id,
                            type: t.type,
                            title: t.title,
                            score: Number(s[0])
                        });
                    }), t.checkRes = e, this.$emit("nextAnswer", t);
                }
            }
        };
    },
    291: function(t, e, n) {
        var i = function() {
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
            }, [ t._v(t._s(t.newOptList[t.showQuestionIndex].number || t.showQuestionIndex + 1) + "/" + t._s(t.newOptList.length) + ".") ]), t._v(" "), n("view", [ t._v("\n\t\t\t\t\t（" + t._s("write" == t.newOptList[t.showQuestionIndex].type ? "填空" : "radio" == t.newOptList[t.showQuestionIndex].type ? "单选" : "checkbox" == t.newOptList[t.showQuestionIndex].type ? "多选" : "") + ")\n\t\t\t\t\t" + t._s(t.newOptList[t.showQuestionIndex].title) + "\n\t\t\t\t") ]) ]), t._v(" "), t.newOptList[t.showQuestionIndex].name_image ? n("view", {
                staticClass: "question__option"
            }, [ n("img", {
                staticClass: "question-img",
                attrs: {
                    mode: "widthFix",
                    src: t.newOptList[t.showQuestionIndex].name_image,
                    "data-img": t.newOptList[t.showQuestionIndex].name_image,
                    eventid: "0"
                },
                on: {
                    tap: t.getImg
                }
            }) ]) : t._e(), t._v(" "), t.newOptList[t.showQuestionIndex].right_image ? n("view", {
                staticClass: "question__option"
            }, [ n("view", {
                staticClass: "question_title"
            }, [ t._v("答案(" + t._s(t.newOptList[t.showQuestionIndex].score) + "分)：") ]), t._v(" "), "radio" == t.newOptList[t.showQuestionIndex].type ? n("img", {
                staticClass: "question-r",
                attrs: {
                    mode: "widthFix",
                    src: t.newOptList[t.showQuestionIndex].right_image
                }
            }) : n("img", {
                staticClass: "question-img",
                attrs: {
                    mode: "widthFix",
                    src: t.newOptList[t.showQuestionIndex].right_image,
                    "data-img": t.newOptList[t.showQuestionIndex].right_image,
                    eventid: "1"
                },
                on: {
                    tap: t.getImg
                }
            }) ]) : t._e(), t._v(" "), n("view", {
                staticClass: "question__option"
            }, [ "radio" == t.newOptList[t.showQuestionIndex].type || "checkbox" == t.newOptList[t.showQuestionIndex].type ? n("block", t._l(t.newOptList[t.showQuestionIndex].question_option, function(e, i) {
                return n("block", {
                    key: i
                }, [ n("view", {
                    staticClass: "question__option__item",
                    style: e.active ? t.optActiveStyle : t.optStyle,
                    attrs: {
                        "data-id": e.id,
                        eventid: "2_" + i
                    },
                    on: {
                        tap: t.checkOption
                    }
                }, [ n("view", [ t._v(t._s(e.content)) ]) ]) ]);
            })) : t._e(), t._v(" "), "write" == t.newOptList[t.showQuestionIndex].type ? n("block", [ n("view", {
                staticClass: "item__key__box"
            }, [ t._v("\n\t\t\t\t\t\t得分："), n("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.newOptList[t.showQuestionIndex].question_key,
                    expression: "newOptList[showQuestionIndex].question_key"
                } ],
                staticClass: "write_input",
                attrs: {
                    type: "number",
                    placeholder: "请填写你的预估分数",
                    eventid: "3"
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
                    eventid: "4"
                },
                on: {
                    tap: t.nextQuestionBtn1
                }
            }, [ t._v("\n\t\t 上一 题\n\t") ]), t._v(" "), n("view", {
                staticClass: "answer__next__btn",
                style: t.nextStyle,
                attrs: {
                    eventid: "5"
                },
                on: {
                    tap: t.nextQuestionBtn
                }
            }, [ t._v("\n\t\t" + t._s(t.isEnd ? "提交" : "下 一 题") + "\n\t") ]) ], 1);
        }, s = [];
        i._withStripped = !0;
        var o = {
            render: i,
            staticRenderFns: s
        };
        e.a = o;
    },
    292: function(t, e, n) {
        var i = function() {
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
        i._withStripped = !0;
        var o = {
            render: i,
            staticRenderFns: s
        };
        e.a = o;
    }
}, [ 284 ]);