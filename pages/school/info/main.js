require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 11 ], {
    298: function(s, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(1), e = i.n(a), n = i(299);
        new e.a(n.a).$mount();
    },
    299: function(s, t, i) {
        var a = i(301), e = i(302), n = !1, o = i(0)(a.a, e.a, function(s) {
            n || i(300);
        }, null, null);
        o.options.__file = "src\\pages\\school\\info\\index.vue", o.esModule && Object.keys(o.esModule).some(function(s) {
            return "default" !== s && "__" !== s.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), o.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        t.a = o.exports;
    },
    300: function(s, t) {},
    301: function(s, t, i) {
        t.a = {
            data: function() {
                return {
                    sid: 0,
                    isCollect: 0,
                    indexOne: 0,
                    indexTwo: 0,
                    indexThree: 0,
                    indexFour: 0,
                    indexFive: 0,
                    indexSix: 0,
                    nian: "",
                    k1: "",
                    k2: "",
                    k3: "",
                    k4: "",
                    k5: "",
                    k6: "",
                    k7: "正序",
                    arrayOne: [],
                    arrayTwo: [],
                    arrayThree: [],
                    arrayFour: [],
                    arrayFive: [],
                    arraySix: [],
                    sort: [ "正序", "倒序" ],
                    info: {},
                    login: !1,
                    education: "",
                    subject: "文理",
                    spring: !0
                };
            },
            mounted: function() {
                this.sid = this.$mp.query.id, this.k4 = this.$mp.query.k4, "c" == this.$mp.query.subject ? (this.k1 = "春季高考", 
                this.k6 = this.$mp.query.chun, this.indexOne = 1, this.spring = !1, "bk" == this.$mp.query.cate ? (this.k2 = "本科批次", 
                this.indexTwo = 0) : (this.k2 = "专科批次", this.indexTwo = 1)) : "w" == this.$mp.query.subject ? (this.k1 = "夏季高考", 
                this.spring = !0, this.indexOne = 0, "zk" == this.$mp.query.cate ? (this.k2 = "专科批次", 
                this.indexTwo = 1) : (this.k2 = "本科批次", this.indexTwo = 0), this.indexThree = 0, 
                this.k3 = "文理平均", this.k6 = "", this.indexSix = 0) : "l" == this.$mp.query.subject ? (this.k1 = "夏季高考", 
                this.spring = !0, this.indexOne = 0, "zk" == this.$mp.query.cate ? (this.k2 = "专科批次", 
                this.indexTwo = 1) : (this.k2 = "本科批次", this.indexTwo = 0), this.indexThree = 0, 
                this.k3 = "文理平均", this.k6 = "", this.indexSix = 0) : (this.k1 = "夏季高考", this.k2 = "", 
                this.k3 = "", this.k6 = "", this.indexOne = 0, this.indexTwo = 0, this.indexThree = 0, 
                this.indexSix = 0, this.spring = !0), this.getInfo(), this.userInfo && (this.login = !0), 
                this.gData.isShow = !0;
            },
            methods: {
                getInfo: function() {
                    var s = this;
                    this.post({
                        url: "school/getSchoolInfo",
                        sid: this.sid,
                        k1: this.k1,
                        k2: this.k2,
                        k3: this.k3,
                        k4: this.k4,
                        k5: this.k5,
                        k6: this.k6,
                        k7: this.k7,
                        login: this.login
                    }).then(function(t) {
                        console.log("学校详情", t), s.info = t, s.arrayOne = t.k1ist1, s.arrayTwo = t.k1ist2, 
                        s.arrayThree = t.k1ist3, s.arrayFour = t.k1ist4, s.indexFour = t.k4_id, s.arrayFive = t.k1ist5, 
                        s.arraySix = t.k1ist6, s.isCollect = t.isCollect, s.k3 && "理科" == s.k3 ? s.education = t.page : s.k3 && "文科" == s.k3 ? s.education = t.page_wen : s.education = t.page, 
                        s.k6 && (s.indexSix = s.arraySix.indexOf(s.k6));
                    });
                },
                bindChangeOne: function(s) {
                    var t = s.mp.detail.value;
                    this.indexOne = t, this.k1 = this.arrayOne[t], this.k1 == this.arrayOne[1] ? (this.spring = !1, 
                    this.subject = "专业") : (this.subject = this.arrayThree[this.indexThree], this.spring = !0), 
                    this.getInfo();
                },
                bindChangeTwo: function(s) {
                    var t = s.mp.detail.value;
                    this.indexTwo = t, this.k2 = this.arrayTwo[t], this.getInfo();
                },
                bindChangeThree: function(s) {
                    var t = s.mp.detail.value;
                    this.indexThree = t, this.k3 = this.arrayThree[t], this.subject = this.arrayThree[t], 
                    this.getInfo();
                },
                bindChangeFour: function(s) {
                    var t = s.mp.detail.value;
                    this.indexFour = t, this.k4 = this.arrayFour[t], this.getInfo();
                },
                bindChangeFive: function(s) {
                    var t = s.mp.detail.value;
                    this.indexFive = t, this.k5 = this.arrayFive[t], this.nian = this.arrayFive[t], 
                    this.getInfo();
                },
                bindChangeSix: function(s) {
                    var t = s.mp.detail.value;
                    this.indexSix = t, this.k6 = this.arraySix[t], this.getInfo();
                },
                bindSort: function(s) {
                    var t = s.mp.detail.value;
                    this.k7 = this.sort[t], this.getInfo();
                },
                collect: function() {
                    var s = this, t = this;
                    this.post({
                        url: "collection/collect",
                        schoolId: this.sid,
                        login: !0
                    }).then(function(i) {
                        return 1 == i ? (t.isCollect = 1, s.tools.dd("收藏成功！")) : 2 == i ? (t.isCollect = 0, 
                        s.tools.dd("取消收藏成功！")) : s.tools.dd("收藏失败！");
                    });
                }
            }
        };
    },
    302: function(s, t, i) {
        var a = function() {
            var s = this, t = s.$createElement, i = s._self._c || t;
            return i("div", {
                staticClass: "box"
            }, [ i("div", {
                staticClass: "head"
            }, [ i("div", {
                staticClass: "row"
            }, [ i("img", {
                staticClass: "img",
                attrs: {
                    src: s.info.avatar
                }
            }), s._v(" "), i("div", [ i("p", {
                staticClass: "name"
            }, [ s._v(s._s(s.info.name)) ]), s._v(" "), i("div", {
                staticClass: "row"
            }, [ i("div", {
                staticClass: "desc"
            }, [ s._v(s._s(s.info.position)) ]), s._v(" "), s._l(s.info.flags, function(t, a) {
                return void 0 !== s.info.flags && s.info.flags.length > 0 ? i("div", {
                    key: a,
                    staticClass: "desc"
                }, [ s._v("\n                            " + s._s(t) + "\n                        ") ]) : s._e();
            }), s._v(" "), i("div", {
                staticClass: "desc"
            }, [ s._v(s._s(s.info.district)) ]) ], 2), s._v(" "), i("p", {
                staticClass: "msg"
            }, [ s._v("院校代码：" + s._s(s.info.number) + "  " + s._s(s.info.type) + "  " + s._s(s.info.position) + "  " + s._s(s.info.public ? s.info.public : "")) ]) ], 1) ]) ]), s._v(" "), i("van-tabs", {
                attrs: {
                    color: "rgba(59, 154, 255, 1)",
                    mpcomid: "16"
                }
            }, [ i("van-tab", {
                attrs: {
                    title: "高考录取",
                    mpcomid: "14"
                }
            }, [ i("div", {
                staticClass: "ls"
            }, [ i("div", {
                staticClass: "ls-1"
            }, [ i("van-row", {
                attrs: {
                    mpcomid: "4"
                }
            }, [ i("van-col", {
                attrs: {
                    mpcomid: "1"
                }
            }, [ i("picker", {
                attrs: {
                    value: s.indexOne,
                    range: s.arrayOne,
                    eventid: "0"
                },
                on: {
                    change: s.bindChangeOne
                }
            }, [ i("div", {
                staticClass: "dw"
            }, [ s._v("\n                                            " + s._s(s.arrayOne[s.indexOne]) + "\n                                            "), i("van-icon", {
                attrs: {
                    name: "arrow-down",
                    "custom-style": "top: 3rpx;left: 5rpx",
                    mpcomid: "0"
                }
            }) ], 1) ]) ], 1), s._v(" "), i("van-col", {
                attrs: {
                    mpcomid: "3"
                }
            }, [ i("picker", {
                attrs: {
                    value: s.indexTwo,
                    range: s.arrayTwo,
                    eventid: "1"
                },
                on: {
                    change: s.bindChangeTwo
                }
            }, [ i("div", {
                staticClass: "dw"
            }, [ s._v("\n                                            " + s._s(s.arrayTwo[s.indexTwo]) + "\n                                            "), i("van-icon", {
                attrs: {
                    name: "arrow-down",
                    "custom-style": "top: 3rpx;left: 5rpx",
                    mpcomid: "2"
                }
            }) ], 1) ]) ], 1) ], 1) ], 1), s._v(" "), i("div", {
                staticClass: "row-right"
            }, [ i("p", {
                staticClass: "text1"
            }, [ s._v("生源地：") ]), s._v(" "), i("p", {
                staticClass: "text2"
            }, [ s._v("山东") ]) ], 1) ]), s._v(" "), i("div", {
                staticClass: "row-blue"
            }, [ i("p", {
                staticClass: "title"
            }, [ s._v("年份") ]), s._v(" "), i("p", {
                staticClass: "title"
            }, [ s._v("批次") ]), s._v(" "), i("p", {
                staticClass: "title"
            }, [ s._v(s._s(s.subject)) ]), s._v(" "), i("p", {
                staticClass: "title"
            }, [ s._v("最高分") ]), s._v(" "), i("p", {
                staticClass: "title"
            }, [ s._v("最低分") ]), s._v(" "), i("p", {
                staticClass: "title"
            }, [ s._v("计划数") ]), s._v(" "), i("p", {
                staticClass: "title"
            }, [ s._v("投出数") ]), s._v(" "), i("p", {
                staticClass: "title"
            }, [ s._v("位次") ]) ], 1), s._v(" "), i("div", [ void 0 !== s.info.schoolScore && s.info.schoolScore.length > 0 ? i("div", s._l(s.info.schoolScore, function(t, a) {
                return i("div", {
                    key: a
                }, [ i("div", {
                    staticClass: "row-white"
                }, [ i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.years)) ]), s._v(" "), i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.batch)) ]), s._v(" "), i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.subject)) ]), s._v(" "), i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.maximize)) ]), s._v(" "), i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.lowest)) ]), s._v(" "), i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.plan)) ]), s._v(" "), i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.joins)) ]), s._v(" "), i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.rank_min)) ]) ], 1) ]);
            })) : void 0 !== s.info.schoolSpring && s.info.schoolSpring.length > 0 ? i("div", s._l(s.info.schoolSpring, function(t, a) {
                return i("div", {
                    key: a
                }, [ i("div", {
                    staticClass: "row-white"
                }, [ i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.years)) ]), s._v(" "), i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.position)) ]), s._v(" "), i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.category)) ]), s._v(" "), i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.high_score)) ]), s._v(" "), i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.low_score)) ]), s._v(" "), i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.people_number)) ]), s._v(" "), i("p", {
                    staticClass: "hang"
                }, [ s._v(s._s(t.archive__number)) ]), s._v(" "), i("p", {
                    staticClass: "hang"
                }, [ s._v("-") ]) ], 1) ]);
            })) : i("div", [ i("nodata", {
                attrs: {
                    mpcomid: "5"
                }
            }) ], 1) ]), s._v(" "), i("div", {
                staticClass: "line-blue"
            }), s._v(" "), i("div", {
                staticClass: "message"
            }, [ i("div", {
                staticClass: "message-li"
            }, [ i("div", {
                staticClass: "message-a"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v("创建时间：") ]) ], 1), s._v(" "), i("div", {
                staticClass: "message-b"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v(s._s(s.info.creation_time)) ]) ], 1), s._v(" "), i("div", {
                staticClass: "message-a"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v("重点学科：") ]) ], 1), s._v(" "), i("div", {
                staticClass: "message-b"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v(s._s(s.info.disciplines)) ]) ], 1) ]), s._v(" "), i("div", {
                staticClass: "message-li"
            }, [ i("div", {
                staticClass: "message-a"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v("隶属于：") ]) ], 1), s._v(" "), i("div", {
                staticClass: "message-b"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v(s._s(s.info.subjection)) ]) ], 1), s._v(" "), i("div", {
                staticClass: "message-a"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v("学校类型：") ]) ], 1), s._v(" "), i("div", {
                staticClass: "message-b"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v(s._s(s.info.type)) ]) ], 1) ]), s._v(" "), i("div", {
                staticClass: "message-li"
            }, [ i("div", {
                staticClass: "message-a"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v("学生人数：") ]) ], 1), s._v(" "), i("div", {
                staticClass: "message-b"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v(s._s(s.info.students)) ]) ], 1), s._v(" "), i("div", {
                staticClass: "message-a"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v("博士点数：") ]) ], 1), s._v(" "), i("div", {
                staticClass: "message-b"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v(s._s(s.info.doctor)) ]) ], 1) ]), s._v(" "), i("div", {
                staticClass: "message-li"
            }, [ i("div", {
                staticClass: "message-a"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v("院士人数：") ]) ], 1), s._v(" "), i("div", {
                staticClass: "message-b"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v(s._s(s.info.academician)) ]) ], 1), s._v(" "), i("div", {
                staticClass: "message-a"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v("硕士点数：") ]) ], 1), s._v(" "), i("div", {
                staticClass: "message-b"
            }, [ i("p", {
                staticClass: "brief"
            }, [ s._v(s._s(s.info.master)) ]) ], 1) ]) ]), s._v(" "), i("div", [ i("div", {
                staticClass: "row"
            }, [ i("img", {
                staticClass: "icon2",
                attrs: {
                    src: "/static/images/nannv.png"
                }
            }), s._v(" "), i("p", {
                staticClass: "zi"
            }, [ s._v("男女比例") ]) ], 1), s._v(" "), i("div", {
                staticClass: "row0"
            }, [ i("img", {
                staticClass: "icon3",
                attrs: {
                    src: "/static/images/boy.png"
                }
            }), s._v(" "), i("div", {
                staticClass: "progress"
            }, [ i("div", {
                staticClass: "row00"
            }, [ i("p", {
                staticClass: "zi2"
            }, [ s._v(s._s(s.info.man ? s.info.man : 50)) ]), s._v(" "), i("p", {
                staticClass: "zi0"
            }, [ s._v(":") ]), s._v(" "), i("p", {
                staticClass: "zi4"
            }, [ s._v(s._s(100 - (s.info.man ? s.info.man : 50))) ]) ], 1), s._v(" "), i("van-progress", {
                attrs: {
                    color: "#297FE0",
                    "show-pivot": "false",
                    percentage: s.info.man ? s.info.man : 50,
                    mpcomid: "6"
                }
            }) ], 1), s._v(" "), i("img", {
                staticClass: "icon4",
                attrs: {
                    src: "/static/images/girl.png"
                }
            }) ]) ]), s._v(" "), i("div", {
                staticClass: "info-ul"
            }, [ i("div", {
                staticClass: "info-a"
            }, [ i("img", {
                staticClass: "icon",
                attrs: {
                    src: "/static/images/bianzu.png"
                }
            }) ]), s._v(" "), i("div", {
                staticClass: "info-li-title info-b"
            }, [ s._v("\n                            专业历年录取分数\n                        ") ]), s._v(" "), i("div", {
                staticClass: "info-c"
            }, [ i("van-row", {
                attrs: {
                    mpcomid: "13"
                }
            }, [ i("van-col", {
                attrs: {
                    mpcomid: "8"
                }
            }, [ i("picker", {
                attrs: {
                    value: s.indexFour,
                    range: s.arrayFour,
                    eventid: "2"
                },
                on: {
                    change: s.bindChangeFour
                }
            }, [ i("div", {
                staticClass: "dw"
            }, [ s._v("\n                                            " + s._s(s.arrayFour[s.indexFour]) + "\n                                            "), i("van-icon", {
                attrs: {
                    name: "arrow-down",
                    "custom-style": "top: 3rpx;left: 5rpx",
                    mpcomid: "7"
                }
            }) ], 1) ]) ], 1), s._v(" "), i("van-col", {
                attrs: {
                    mpcomid: "10"
                }
            }, [ i("picker", {
                attrs: {
                    value: s.indexFive,
                    range: s.arrayFive,
                    eventid: "3"
                },
                on: {
                    change: s.bindChangeFive
                }
            }, [ i("div", {
                staticClass: "dw2"
            }, [ s._v("\n                                            " + s._s(s.arrayFive[s.indexFive]) + "\n                                            "), i("van-icon", {
                attrs: {
                    name: "arrow-down",
                    "custom-style": "top: 3rpx;left: 5rpx",
                    mpcomid: "9"
                }
            }) ], 1) ]) ], 1), s._v(" "), i("van-col", {
                attrs: {
                    mpcomid: "12"
                }
            }, [ i("picker", {
                attrs: {
                    value: s.sort[0],
                    range: s.sort,
                    eventid: "4"
                },
                on: {
                    change: s.bindSort
                }
            }, [ i("div", {
                staticClass: "dw3"
            }, [ s._v("\n                                            " + s._s(s.k7) + "\n                                            "), i("van-icon", {
                attrs: {
                    name: "arrow-down",
                    "custom-style": "top: 3rpx;left: 5rpx",
                    mpcomid: "11"
                }
            }) ], 1) ]) ], 1) ], 1) ], 1) ]), s._v(" "), i("div", {
                staticClass: "line"
            }), s._v(" "), i("div", s._l(s.info.schoolPro, function(t, a) {
                return i("div", {
                    key: a
                }, [ i("p", {
                    staticClass: "txt-32"
                }, [ s._v(s._s(t.name)) ]), s._v(" "), i("div", {
                    staticClass: "row-item"
                }, [ i("div", {
                    staticClass: "block"
                }, [ i("p", {
                    staticClass: "txt-24-grey"
                }, [ s._v(s._s(t.subject) + "最低分数") ]), s._v(" "), i("p", {
                    staticClass: "txt-24-blue"
                }, [ s._v(s._s(t.lowest)) ]) ], 1), s._v(" "), i("div", {
                    staticClass: "block3"
                }, [ i("p", {
                    staticClass: "txt-24-grey"
                }, [ s._v("专业代号") ]), s._v(" "), i("p", {
                    staticClass: "txt-24-blue"
                }, [ s._v(s._s(t.code)) ]) ], 1), s._v(" "), i("div", {
                    staticClass: "block"
                }, [ i("p", {
                    staticClass: "txt-24-grey"
                }, [ s._v(s._s(t.subject) + "最低位次") ]), s._v(" "), i("p", {
                    staticClass: "txt-24-blue"
                }, [ s._v(s._s(t.seating)) ]) ], 1) ]), s._v(" "), i("div", {
                    staticClass: "row-item"
                }, [ i("div", {
                    staticClass: "block4"
                }, [ i("p", {
                    staticClass: "txt-24-grey"
                }, [ s._v("文理平均最低分") ]), s._v(" "), i("p", {
                    staticClass: "txt-24-blue"
                }, [ s._v(s._s(t.average)) ]) ], 1), s._v(" "), i("div", {
                    staticClass: "block4"
                }, [ i("p", {
                    staticClass: "txt-24-grey"
                }, [ s._v("文理位次之和") ]), s._v(" "), i("p", {
                    staticClass: "txt-24-blue"
                }, [ s._v(s._s(t.ranks)) ]) ], 1) ]), s._v(" "), i("div", {
                    staticClass: "row-item"
                }, [ i("div", {
                    staticClass: "block2"
                }, [ i("p", {
                    staticClass: "txt-24-grey"
                }, [ s._v("专业要求") ]), s._v(" "), i("p", {
                    staticClass: "txt-24-blue"
                }, [ s._v(" " + s._s(t.major)) ]) ], 1) ]), s._v(" "), i("div", {
                    staticClass: "line"
                }) ], 1);
            })) ]), s._v(" "), i("van-tab", {
                attrs: {
                    title: "学校简介",
                    mpcomid: "15"
                }
            }, [ i("div", {
                staticClass: "row row_content"
            }, [ i("img", {
                staticClass: "icon2",
                attrs: {
                    src: "/static/images/school-info-icon.png"
                }
            }), s._v(" "), i("p", {
                staticClass: "zi"
            }, [ s._v("联系方式") ]) ], 1), s._v(" "), i("div", {
                staticClass: "gf-content",
                staticStyle: {
                    "line-height": "2"
                }
            }, [ i("img", {
                staticClass: "icon21",
                attrs: {
                    src: "/static/images/telphone.png"
                }
            }), s._v("联系电话：" + s._s(s.info.telephone)) ]), s._v(" "), i("div", {
                staticClass: "gf-content3"
            }, [ i("div", {
                staticClass: "content3-img"
            }, [ i("img", {
                staticClass: "icon21",
                attrs: {
                    src: "/static/images/web.png"
                }
            }), s._v("校园官网：") ]), s._v(" "), i("div", {
                staticClass: "content3-title"
            }, [ s._v(" " + s._s(s.info.weburl)) ]) ]), s._v(" "), i("div", {
                staticClass: "gf-content",
                staticStyle: {
                    "line-height": "2"
                }
            }, [ i("img", {
                staticClass: "icon2",
                attrs: {
                    src: "/static/images/email.png"
                }
            }), s._v("邮箱地址：" + s._s(s.info.mailbox)) ]), s._v(" "), i("div", {
                staticClass: "gf-content",
                staticStyle: {
                    "line-height": "2"
                }
            }, [ i("img", {
                staticClass: "icon2",
                attrs: {
                    src: "/static/images/address.png"
                }
            }), s._v("院校地址：" + s._s(s.info.address)) ]), s._v(" "), i("div", {
                staticClass: "gf-content",
                staticStyle: {
                    color: "#f2be5a",
                    "line-height": "2",
                    "margin-top": "20rpx"
                }
            }, [ s._v("学习指数：" + s._s(s.info.index_study) + "\n                 "), i("div", {
                style: "width:" + s.info.index_study_p + "%; border:#f2be5a solid 5rpx;"
            }) ]), s._v(" "), i("div", {
                staticClass: "gf-content",
                staticStyle: {
                    color: "#ed4a22",
                    "line-height": "2"
                }
            }, [ s._v("生活指数：" + s._s(s.info.index_life) + "\n                    "), i("div", {
                style: "width:" + s.info.index_life_p + "%; border:#ed4a22 solid 5rpx;"
            }) ]), s._v(" "), i("div", {
                staticClass: "gf-content",
                staticStyle: {
                    color: "#33a6f3",
                    "line-height": "2"
                }
            }, [ s._v("就业指数：" + s._s(s.info.index_obtain) + "\n                    "), i("div", {
                style: "width:" + s.info.index_obtain_p + "%; border:#33a6f3 solid 5rpx;"
            }) ]), s._v(" "), i("div", {
                staticClass: "gf-content",
                staticStyle: {
                    color: "#3fe174",
                    "line-height": "2"
                }
            }, [ s._v("综合评分：" + s._s(s.info.index_count) + "\n                    "), i("div", {
                style: "width:" + s.info.index_count_p + "%; border:#3fe174 solid 5rpx;"
            }) ]), s._v(" "), i("div", {
                staticClass: "row row_content"
            }, [ i("img", {
                staticClass: "icon2",
                attrs: {
                    src: "/static/images/school-info-icon.png"
                }
            }), s._v(" "), i("p", {
                staticClass: "zi"
            }, [ s._v("官方介绍") ]) ], 1), s._v(" "), i("p", {
                staticClass: "gf-content"
            }, [ s._v("        " + s._s(s.info.info)) ]) ], 1) ], 1), s._v(" "), i("div", {
                staticClass: "collection",
                attrs: {
                    eventid: "5"
                },
                on: {
                    click: function(t) {
                        s.collect();
                    }
                }
            }, [ s.isCollect ? i("img", {
                staticClass: "collect",
                attrs: {
                    src: "/static/images/ysc.png"
                }
            }) : i("img", {
                staticClass: "collect",
                attrs: {
                    src: "/static/images/wsc.png"
                }
            }) ]) ], 1);
        }, e = [];
        a._withStripped = !0;
        var n = {
            render: a,
            staticRenderFns: e
        };
        t.a = n;
    }
}, [ 298 ]);