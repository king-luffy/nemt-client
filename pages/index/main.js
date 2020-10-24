require("../../common/manifest.js"), require("../../common/vendor.js"), global.webpackJsonpMpvue([ 29 ], {
    136: function(t, i, s) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var e = s(1), a = s.n(e), o = s(137);
        new a.a(o.a).$mount();
    },
    137: function(t, i, s) {
        var e = s(139), a = s(140), o = !1, n = s(0)(e.a, a.a, function(t) {
            o || s(138);
        }, null, null);
        n.options.__file = "src\\pages\\index\\index.vue", n.esModule && Object.keys(n.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), n.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        i.a = n.exports;
    },
    138: function(t, i) {},
    139: function(t, i, s) {
        var e = s(38), a = 0, o = null;
        i.a = {
            data: function() {
                return {
                    isWait: !0,
                    subject: "w",
                    way: !0,
                    cate: !0,
                    val: "",
                    adList: [],
                    btmList: [],
                    articleList: [],
                    exam: !1,
                    free: 0,
                    consume: 0,
                    chun: "",
                    chunList: [ "农林果蔬", "畜牧养殖", "电工电子", "护理", "医药", "土建", "信息技术", "汽车", "财经", "商贸", "学前教育", "机械", "机电一体化", "旅游服务", "化工", "文秘", "烹饪", "服装" ],
                    result: [],
                    section: "",
                    sectionConfig: "",
                    rank: "",
                    showModal: !1,
                    code: "",
                    distance: "",
                    days: "000",
                    title: "",
                    title2: "",
                    menuList: [],
                    policyList: [],
                    infoList: [],
                    show: !0,
                    ad_new: "block",
                    ad_news: []
                };
            },
            mounted: function() {
                this.getInfo();
            },
            computed: {
                usable: function() {
                    return this.userInfo ? Math.floor(this.userInfo.score / this.consume) : 0;
                }
            },
            onShow: function() {
                this.getUserInfo() && this.userInfo && this.getExamInfo(), this.gData.isShow = !1, 
                this.getTime();
            },
            methods: {
                getTime: function() {
                    var t = this;
                    setInterval(function() {
                        t.ad_new = "block";
                    }, 6e5);
                },
                closeAd: function() {
                    this.ad_new = "none";
                },
                showDialogBtn: function() {
                    this.showModal = !0;
                },
                preventTouchMove: function() {},
                hideModal: function() {
                    this.showModal = !1;
                },
                onCancel: function() {
                    this.hideModal();
                },
                onConfirm: function() {
                    if (!this.userInfo) return this.tools.dd("请登录后操作！");
                    if (!this.code) return this.tools.dd("请输入兑换码！");
                    var t = this;
                    this.post({
                        url: "user/exchangeNew",
                        login: !0,
                        code: this.code
                    }).then(function(i) {
                        if (console.log(i), i) return t.getUserInfo(), t.hideModal(), t.tools.dd("兑换成功！");
                    });
                },
                onConfirm2: function() {
                    this.hideModal(), global.mpvue.navigateTo({
                        url: "/pages/html/article/main?follow=3"
                    });
                },
                onChangeGroup: function(t) {
                    this.result = [];
                   if(t.mp.detail.length==2){
                      var tmp=t.mp.detail[1];
                      t.mp.detail.pop();
                      t.mp.detail.pop();
                      t.mp.detail.push(tmp);
                   }
                    this.result = t.mp.detail, console.log("科目选择：", this.result);
                 
                },
                getEmpty: function() {
                    this.result = [];
                },
                getExamInfo: function() {
                    var t = this;
                    this.post({
                        url: "index/getExamInfo",
                        login: !0
                    }).then(function(i) {
                        if (console.log("登录", i), t.exam = i, i.score != t.userInfo.score) {
                            var s = t.userInfo;
                            s.score = i.score, t.$store.commit("setUserInfo", s);
                        }
                    });
                },
                getInfo: function() {
                    var t = this, i = {
                        url: "/index/index"
                    };
                    this.userInfo && (i.login = !0), this.post(i).then(function(i) {
                        i.subject && (t.result = i.subject), t.adList = i.indexList, t.btmList = i.serveList, 
                        t.articleList = i.articleList, t.isWait = !1, t.free = i.free, t.consume = i.consume, 
                        t.days = i.days, t.title = i.title, t.title2 = i.title2, t.menuList = i.menuList, 
                        t.policyList = i.policyList, t.infoList = i.infoList, t.sectionConfig = i.section, 
                        t.rank = i.rank, t.distance = i.distance, t.ad_news = i.adNews[0];
                    });
                },
                getUserInfo: function() {
                    var t = this;
                    this.post({
                        url: "user/getUserInfo",
                        login: !0
                    }).then(function(i) {
                        t.$store.commit("setUserInfo", i);
                    });
                },
                setSubject: function(t) {
                    this.subject = t, "c" == t && (this.way = !0);
                },
                setChun: function(t) {
                    var i = t.mp.detail.value;
                    this.chun = this.chunList[i];
                },
                toArtcle: function(t, i) {
                    i ? -1 != i.indexOf("page") ? global.mpvue.navigateTo({
                        url: i
                    }) : global.mpvue.navigateTo({
                        url: "/pages/html/article/main?link=" + i
                    }) : global.mpvue.navigateTo({
                        url: "/pages/html/article/main?id=" + t
                    });
                },
                toAd: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    console.log("asad", t), "/pages/major/plan/main" == t ? global.mpvue.switchTab({
                        url: t
                    }) : "/pages/major/plan/main1" == t ? (global.mpvue.setStorage({
                        key: "type",
                        data: 1
                    }), global.mpvue.switchTab({
                        url: "/pages/major/plan/main"
                    })) : "/pages/major/plan/main2" == t ? (global.mpvue.setStorage({
                        key: "type",
                        data: 2
                    }), global.mpvue.switchTab({
                        url: "/pages/major/plan/main"
                    })) : "/pages/major/plan/main3" == t ? (global.mpvue.setStorage({
                        key: "type",
                        data: 3
                    }), global.mpvue.switchTab({
                        url: "/pages/major/plan/main"
                    })) : "/pages/major/main" == t ? global.mpvue.switchTab({
                        url: t
                    }) : "/pages/inform/main" == t ? global.mpvue.switchTab({
                        url: t
                    }) : "/pages/mine/main" == t ? global.mpvue.switchTab({
                        url: t
                    }) : t && global.mpvue.navigateTo({
                        url: t
                    });
                },
                toInfo: function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    i ? -1 != i.indexOf("page") ? global.mpvue.navigateTo({
                        url: i
                    }) : global.mpvue.navigateTo({
                        url: "/pages/html/article/main?link=" + i
                    }) : global.mpvue.navigateTo({
                        url: "/pages/html/article/main?id=" + t
                    });
                },
                getShow: function(t) {
                    console.log("sdfasdf", t), this.show = 1 == t;
                },
                toSearch: function() {
                    global.mpvue.navigateTo({
                        url: "/pages/school/search/main"
                    });
                },
                toSubmit: function(t) {
                    var i = this, s = this;
                    if (a = 0, !this.userInfo) return this.toLogin(t).then(function(t) {
                        i.$store.commit("setUserInfo", t), i.getExamInfo(), i.tools.toast({
                            title: "登录成功"
                        });
                    });
                    if (this.result.length < 1) return this.tools.dd("请至少选择1个科目");
                    if (!e.a.isNumber(this.val)) return this.tools.dd("请输入正确数字");
                    if (!e.a.isNumber(this.section)) return this.tools.dd("请输入正确浮动区间");
                    if (this.way) {
                        if (this.val < 100) return this.tools.dd("您输入的分数过低");
                        if (this.section <= 0) return this.tools.dd("浮动区间分数必须大于0");
                        if (Number(this.section) > this.sectionConfig) return this.tools.dd("浮动区间分数不能大于" + this.sectionConfig);
                    } else {
                        if (0 == this.cate) return this.tools.dd("暂无专科名次数据");
                        if (this.val < 1) return this.tools.dd("请输入正确的名次");
                        if (this.section <= 0) return this.tools.dd("浮动区间位次必须大于0");
                        if (Number(this.section) > this.rank) return this.tools.dd("浮动区间位次不能大于" + this.rank);
                    }
                    return "c" == this.subject && e.a.isEmpty(this.chun) ? this.tools.dd("请选择春季高考的类别") : (console.log("用户", this.userInfo), 
                    console.log("所需积分", this.exam), console.log("当前时间", new Date().getTime() / 1e3), 
                    console.log("到期时间", this.userInfo.membertimeNew), this.userInfo.membertimeNew < new Date().getTime() / 1e3 ? (this.showModal = !0, 
                    !1) : void s.whatToDo());
                },
                whatToDo: function() {
                    var t = this, i = this.exam.is_tips ? " (" + this.exam.tips + ")" : "", s = "本科生分数输入区间为" + this.exam.wen_total_min + "-" + this.exam.wen_total_max + i, e = "本科生分数输入区间为" + this.exam.li_total_min + "-" + this.exam.li_total_max + i, o = "专科生分数输入区间为" + this.exam.zwen_total_min + "-" + this.exam.zwen_total_max + i, n = "专科生分数输入区间为" + this.exam.zli_total_min + "-" + this.exam.zli_total_max + i, c = "名次输入区间为" + this.exam.wen_ci_min + "-" + this.exam.wen_ci_max + i, l = "名次输入区间为" + this.exam.li_ci_min + "-" + this.exam.li_ci_max + i;
                    if (this.way) {
                        if (this.val > 550 && "c" != this.subject && this.popTj("鉴于您分数较高，我们更推荐您使用位次查询。"), 
                        "w" == this.subject) if (this.cate) {
                            if (this.val < this.exam.wen_total_min || this.val > this.exam.wen_total_max) return this.pop(s);
                        } else if (this.val < this.exam.zwen_total_min || this.val > this.exam.zwen_total_max) return this.pop(o);
                        if ("l" == this.subject) if (this.cate) {
                            if (this.val < this.exam.li_total_min || this.val > this.exam.li_total_max) return this.pop(e);
                        } else if (this.val < this.exam.zli_total_min || this.val > this.exam.zli_total_max) return this.pop(n);
                        if ("c" == this.subject) {
                            var r = {
                                url: "/Index/getSpringSeting"
                            };
                            this.userInfo && (r.login = !0), r.key = this.chun, this.post(r).then(function(s) {
                                console.log("返回结果：", s);
                                var e = "春季高考本科输入区间为" + s.total_min + "-" + s.total_max + i, a = "春季高考专科输入区间为" + s.ztotal_min + "-" + s.ztotal_max + i;
                                if (t.cate) {
                                    if (t.val < s.total_min || t.val > s.total_max) return t.pop(e);
                                } else if (t.val < s.ztotal_min || t.val > s.ztotal_max) return t.pop(a);
                            });
                        }
                    } else {
                        if ("w" == this.subject && (this.val < this.exam.wen_ci_min || this.val > this.exam.wen_ci_max)) return this.pop(c);
                        if ("l" == this.subject && (this.val < this.exam.li_ci_min || this.val > this.exam.li_ci_max)) return this.pop(l);
                    }
                    this.exam.is_tips && this.popc(this.exam.tips, "is_tips"), a <= 0 && this.toQuery();
                },
                popTj: function(t) {
                    var i = this;
                    a += 1, global.mpvue.showModal({
                        title: "提示",
                        cancelText: "取消",
                        cancelColor: "#EE0000",
                        confirmText: "继续查询",
                        confirmColor: "#09BB07",
                        content: t,
                        success: function(t) {
                            t.confirm && (a -= 1), a <= 0 && i.toQuery();
                        }
                    });
                },
                pop: function(t) {
                    a += 1, global.mpvue.showModal({
                        title: "提示",
                        confirmText: "重新填写",
                        showCancel: !1,
                        content: t,
                        success: function(t) {}
                    });
                },
                popc: function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "is_cms", s = this;
                    s.isTips(i) && (a += 1, global.mpvue.showModal({
                        title: "提示",
                        cancelText: "不再提示",
                        cancelColor: "#EE0000",
                        confirmText: "知道了",
                        confirmColor: "#09BB07",
                        content: t,
                        success: function(t) {
                            t.cancel && s.setTips(i), (a -= 1) <= 0 && s.toQuery();
                        }
                    }));
                },
                toQuery: function() {
                    var t = this, i = this.way ? "zf" : "mc", s = this.cate ? "bk" : "zk";
                    if (console.log("用户信息", this.userInfo), !t.userInfo.subject_id) return global.mpvue.showModal({
                        title: "是否设为默认选科",
                        cancelText: "是",
                        cancelColor: "#EE0000",
                        confirmText: "否",
                        confirmColor: "#09BB07",
                        content: "可在我的中进行修改！",
                        success: function(e) {
                            e.confirm && global.mpvue.navigateTo({
                                url: "/pages/school/list/main?val=" + t.val + "&subject=" + t.subject + "&way=" + i + "&cate=" + s + "&chun=" + t.chun + "&subjects=" + t.result
                            }), e.cancel && t.post({
                                url: "user/subject",
                                login: !0,
                                subject: t.result
                            }).then(function(e) {
                                t.getUserInfo(), global.mpvue.navigateTo({
                                    url: "/pages/school/list/main?val=" + t.val + "&subject=" + t.subject + "&way=" + i + "&cate=" + s + "&chun=" + t.chun + "&subjects=" + t.result + "&section=" + t.section
                                });
                            });
                        }
                    });
                    global.mpvue.navigateTo({
                        url: "/pages/school/list/main?val=" + t.val + "&subject=" + t.subject + "&way=" + i + "&cate=" + s + "&chun=" + t.chun + "&subjects=" + t.result + "&section=" + t.section
                    });
                },
                goToA13: function() {
                    global.mpvue.navigateTo({
                        url: "/pages/html/article/main?id=13"
                    });
                },
                setTips: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "is_cms", i = new Date();
                    global.mpvue.setStorage({
                        key: t,
                        data: "" + i.getFullYear() + i.getMonth() + i.getDate()
                    });
                },
                isTips: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "is_cms", i = new Date();
                    return "" + i.getFullYear() + i.getMonth() + i.getDate() != global.mpvue.getStorageSync(t);
                },
                adVideo: function() {
                    var t = this;
                    global.mpvue.createRewardedVideoAd && ((o = global.mpvue.createRewardedVideoAd({
                        adUnitId: "adunit-a287807af92f4ece"
                    })).onLoad(function() {
                        console.log("广告加载");
                    }), o.onError(function(t) {
                        console.log("广告退出");
                    }), o.onClose(function(i) {
                        i && i.isEnded || void 0 === i ? (console.log("正常播放结束，下发奖励"), t.raiseAd()) : console.log("播放中途退出，进行提示");
                    }));
                },
                openVideo: function() {
                    o && o.show().catch(function() {
                        o.load().then(function() {
                            return o.show();
                        }).catch(function(t) {
                            console.log("激励视频 广告显示失败");
                        });
                    });
                },
                raiseAd: function() {
                    var t = this;
                    this.post({
                        url: "user/raiseAd",
                        login: !0
                    }).then(function(i) {
                        console.log(i), t.userInfo && t.getExamInfo();
                    });
                }
            }
        };
    },
    140: function(t, i, s) {
        var e = function() {
            var t = this, i = t.$createElement, s = t._self._c || i;
            return s("div", {
                staticClass: "center"
            }, [ s("div", {
                staticClass: "new-bg"
            }, [ s("div", {
                staticClass: "new-kao"
            }, [ s("div", {
                staticClass: "new-gao"
            }, [ t._v(t._s(t.distance) + " " + t._s(t.days) + "  DAYS") ]) ]), t._v(" "), s("div", {
                staticClass: "search_bg",
                attrs: {
                    eventid: "0"
                },
                on: {
                    click: t.toSearch
                }
            }, [ t._m(0) ]), t._v(" "), s("div", {
                staticClass: "new-title"
            }, [ s("div", {
                staticClass: "title1"
            }, [ s("div", [ t._v(t._s(t.title)) ]), t._v(" "), s("div", {
                staticClass: "title1-x"
            }) ]), t._v(" "), s("div", {
                staticClass: "title2"
            }, [ s("div", {
                staticClass: "title2-x"
            }), t._v(" "), s("div", [ t._v(t._s(t.title2)) ]) ]) ]), t._v(" "), s("div", {
                staticClass: "new-list"
            }, [ s("div", {
                staticClass: "list"
            }, t._l(t.menuList, function(i, e) {
                return s("div", {
                    key: e,
                    staticClass: "li",
                    attrs: {
                        eventid: "1_" + e
                    },
                    on: {
                        click: function(s) {
                            t.toAd(i.url);
                        }
                    }
                }, [ s("div", [ s("img", {
                    attrs: {
                        src: i.image
                    }
                }) ]), t._v(" "), s("div", {
                    staticClass: "li-title"
                }, [ t._v(t._s(i.title)) ]) ]);
            })) ]) ]), t._v(" "), s("div", {
                staticClass: "tabs"
            }, [ s("div", {
                staticClass: "tab-box"
            }, [ s("div", {
                staticClass: "tab-head"
            }, [ s("van-row", {
                attrs: {
                    mpcomid: "1"
                }
            }, [ s("van-col", {
                attrs: {
                    span: "24",
                    mpcomid: "0"
                }
            }, [ s("div", {
                staticClass: "tab-head-ls",
                class: "w" == t.subject ? "tab-active" : "",
                attrs: {
                    eventid: "2"
                },
                on: {
                    click: function(i) {
                        t.setSubject("w");
                    }
                }
            }, [ t._v("\n                                夏季高考\n                            ") ]) ]) ], 1) ], 1), t._v(" "), s("div", {
                staticClass: "tab-body"
            }, [ s("div", {
                staticClass: "bod-ls"
            }, [ s("p", {
                staticClass: "bod-l"
            }, [ t._v("生源地") ]), t._v(" "), s("div", {
                staticClass: "bod-r"
            }, [ t._v("山东") ]) ], 1), t._v(" "), "c" == t.subject ? s("div", {
                staticClass: "bod-ls"
            }, [ s("picker", {
                attrs: {
                    range: t.chunList,
                    eventid: "3"
                },
                on: {
                    change: t.setChun
                }
            }, [ s("p", {
                staticClass: "bod-l"
            }, [ t._v("春考类别") ]), t._v(" "), s("div", {
                staticClass: "bod-r"
            }, [ t._v(t._s(t.chun ? t.chun : "点击选择")) ]) ], 1) ], 1) : t._e(), t._v(" "), s("div", {
                staticClass: "bod-ls"
            }, [ s("p", {
                staticClass: "bod-l"
            }, [ t._v("选择查询方式") ]), t._v(" "), s("div", {
                staticClass: "bod-r"
            }, [ s("radio-group", {
                attrs: {
                    mpcomid: "2"
                }
            }, [ s("radio", {
                attrs: {
                    checked: t.way,
                    eventid: "4"
                },
                on: {
                    click: function(i) {
                        t.way = !0;
                    }
                }
            }, [ t._v("总分") ]), t._v(" "), "c" != t.subject ? s("radio", {
                attrs: {
                    checked: !t.way,
                    eventid: "5"
                },
                on: {
                    click: function(i) {
                        t.way = !1;
                    }
                }
            }, [ t._v("名次") ]) : t._e() ], 1) ], 1) ], 1), t._v(" "), "w" == t.subject ? s("div", {
                staticClass: "bod-lsn"
            }, [ s("p", {
                staticClass: "bod-l"
            }, [ t._v("选科"), s("button", {
                staticClass: "commt-btn2",
                attrs: {
                    eventid: "6"
                },
                on: {
                    click: t.getEmpty
                }
            }, [ t._v(" 清空") ]) ], 1), t._v(" "), s("div", {
                staticClass: "bod-r"
            }, [ s("van-checkbox-group", {
                attrs: {
                    value: t.result,
                    max: "3",
                    eventid: "7",
                    mpcomid: "9"
                },
                on: {
                    change: t.onChangeGroup
                }
            }, [ s("div", {
                staticClass: "bod-r-i"
            }, [ s("div", {
                staticClass: "bod-r-c"
            }, [ s("van-checkbox", {
                attrs: {
                    name: "物理",
                    "checked-color": "#3B9AFF",
                    mpcomid: "3"
                }
            }, [ t._v("物理") ]) ], 1), t._v(" "), s("div", {
                staticClass: "bod-r-c"
            }, [ s("van-checkbox", {
                attrs: {
                    name: "化学",
                    "checked-color": "#3B9AFF",
                    mpcomid: "4"
                }
            }, [ t._v("化学") ]) ], 1), t._v(" "), s("div", {
                staticClass: "bod-r-c"
            }, [ s("van-checkbox", {
                attrs: {
                    name: "生物",
                    "checked-color": "#3B9AFF",
                    mpcomid: "5"
                }
            }, [ t._v("生物") ]) ], 1), t._v(" "), s("div", {
                staticClass: "bod-r-c"
            }, [ s("van-checkbox", {
                attrs: {
                    name: "政治",
                    "checked-color": "#3B9AFF",
                    mpcomid: "6"
                }
            }, [ t._v("政治") ]) ], 1), t._v(" "), s("div", {
                staticClass: "bod-r-c"
            }, [ s("van-checkbox", {
                attrs: {
                    name: "历史",
                    "checked-color": "#3B9AFF",
                    mpcomid: "7"
                }
            }, [ t._v("历史") ]) ], 1), t._v(" "), s("div", {
                staticClass: "bod-r-c"
            }, [ s("van-checkbox", {
                attrs: {
                    name: "地理",
                    "checked-color": "#3B9AFF",
                    mpcomid: "8"
                }
            }, [ t._v("地理") ]) ], 1) ]) ]) ], 1) ], 1) : t._e(), t._v(" "), s("div", {
                staticClass: "bod-ls"
            }, [ s("p", {
                staticClass: "bod-l"
            }, [ t._v(t._s(t.way ? "总分" : "位次")) ]), t._v(" "), s("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.val,
                    expression: "val"
                } ],
                staticClass: "bod-int bod-r",
                attrs: {
                    type: "number",
                    placeholder: t.way ? "请输入高考总分" : "请输入位次",
                    eventid: "8"
                },
                domProps: {
                    value: t.val
                },
                on: {
                    input: function(i) {
                        i.target.composing || (t.val = i.target.value);
                    }
                }
            }) ], 1), t._v(" "), s("div", {
                staticClass: "bod-ls"
            }, [ s("p", {
                staticClass: "bod-l"
            }, [ t._v("浮动区间") ]), t._v(" "), s("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.section,
                    expression: "section"
                } ],
                staticClass: "bod-int bod-r",
                attrs: {
                    type: "number",
                    placeholder: t.way ? "请输入分数浮动区间" : "请输入位次浮动区间",
                    eventid: "9"
                },
                domProps: {
                    value: t.section
                },
                on: {
                    input: function(i) {
                        i.target.composing || (t.section = i.target.value);
                    }
                }
            }) ], 1), t._v(" "), s("div", {
                staticClass: "bod-ls"
            }, [ s("p", {
                staticClass: "bod-l"
            }, [ t._v("报考类别") ]), t._v(" "), s("div", {
                staticClass: "bod-r"
            }, [ s("radio-group", {
                attrs: {
                    mpcomid: "10"
                }
            }, [ s("radio", {
                attrs: {
                    checked: t.cate,
                    eventid: "10"
                },
                on: {
                    click: function(i) {
                        t.cate = !0;
                    }
                }
            }, [ t._v("本科") ]), t._v(" "), s("radio", {
                attrs: {
                    checked: !t.cate,
                    eventid: "11"
                },
                on: {
                    click: function(i) {
                        t.cate = !1;
                    }
                }
            }, [ t._v("专科") ]) ], 1) ], 1) ], 1), t._v(" "), s("div", {
                staticClass: "commt"
            }, [ s("button", {
                staticClass: "commt-btn",
                attrs: {
                    "open-type": "getUserInfo",
                    eventid: "12"
                },
                on: {
                    getuserinfo: t.toSubmit
                }
            }, [ t._v(" 立即填报") ]), t._v(" "), s("div", {
                staticClass: "commt-txt"
            }, [ t._v("系统内数据仅供参考") ]) ], 1) ]) ]) ]), t._v(" "), t.articleList.length > 0 ? s("div", {
                staticClass: "news"
            }, [ s("image", {
                staticClass: "news-img",
                attrs: {
                    src: "/static/images/kuaibao.png"
                }
            }), t._v(" "), s("swiper", {
                staticClass: "news-swiper",
                attrs: {
                    vertical: "",
                    autoplay: "",
                    circular: "",
                    interval: "2000"
                }
            }, t._l(t.articleList, function(i, e) {
                return s("swiper-item", {
                    key: e,
                    attrs: {
                        mpcomid: "11_" + e
                    }
                }, [ s("div", {
                    staticClass: "news-item",
                    attrs: {
                        eventid: "13_" + e
                    },
                    on: {
                        click: function(s) {
                            t.toArtcle(i.id, i.wechat_link);
                        }
                    }
                }, [ t._v(t._s(i.title)) ]) ]);
            })) ], 1) : t._e(), t._v(" "), s("swiper", {
                staticClass: "swip",
                attrs: {
                    "indicator-dots": "",
                    "indicator-active-color": "#3B9AFF",
                    autoplay: "",
                    circular: "",
                    interval: "2000",
                    duration: "900"
                }
            }, t._l(t.adList, function(i, e) {
                return s("swiper-item", {
                    key: e,
                    attrs: {
                        mpcomid: "12_" + e
                    }
                }, [ s("image", {
                    staticClass: "top-swiper",
                    attrs: {
                        src: i.image,
                        model: "scaleToFil",
                        eventid: "14_" + e
                    },
                    on: {
                        click: function(s) {
                            t.toAd(i.url);
                        }
                    }
                }) ]);
            })), t._v(" "), t.btmList.length > 0 ? s("div", [ s("div", {
                staticClass: "servce-title"
            }, [ t._v("服务项目") ]), t._v(" "), s("div", {
                staticClass: "serve-box"
            }, t._l(t.btmList, function(i, e) {
                return s("img", {
                    key: e,
                    staticClass: "serve-ls",
                    attrs: {
                        src: i.image,
                        eventid: "15_" + e
                    },
                    on: {
                        click: function(s) {
                            t.toAd(i.url);
                        }
                    }
                });
            })) ]) : t._e(), t._v(" "), s("div", {
                staticClass: "info"
            }, [ s("div", {
                class: [ "info-title", {
                    "info-b": t.show
                } ],
                attrs: {
                    eventid: "16"
                },
                on: {
                    click: function(i) {
                        t.getShow(1);
                    }
                }
            }, [ t._v("高考政策") ]), t._v(" "), s("div", {
                class: [ "info-title", {
                    "info-b": 0 == t.show
                } ],
                attrs: {
                    eventid: "17"
                },
                on: {
                    click: function(i) {
                        t.getShow(2);
                    }
                }
            }, [ t._v("考试信息") ]) ]), t._v(" "), t.show ? s("div", {
                staticClass: "box"
            }, t._l(t.policyList, function(i, e) {
                return s("div", {
                    key: e
                }, [ s("div", {
                    staticClass: "art",
                    attrs: {
                        eventid: "18_" + e
                    },
                    on: {
                        click: function(s) {
                            t.toInfo(i.id, i.wechat_link);
                        }
                    }
                }, [ s("img", {
                    staticClass: "art-img",
                    attrs: {
                        src: i.image
                    }
                }), t._v(" "), s("div", {
                    staticClass: "art-txt"
                }, [ s("div", {
                    staticClass: "art-tt"
                }, [ t._v(t._s(i.title)) ]), t._v(" "), s("div", {
                    staticClass: "art-ds"
                }, [ t._v(t._s(i.description)) ]) ]) ]) ]);
            })) : s("div", {
                staticClass: "box"
            }, t._l(t.infoList, function(i, e) {
                return s("div", {
                    key: e
                }, [ s("div", {
                    staticClass: "art",
                    attrs: {
                        eventid: "19_" + e
                    },
                    on: {
                        click: function(s) {
                            t.toInfo(i.id, i.wechat_link);
                        }
                    }
                }, [ s("img", {
                    staticClass: "art-img",
                    attrs: {
                        src: i.image
                    }
                }), t._v(" "), s("div", {
                    staticClass: "art-txt"
                }, [ s("div", {
                    staticClass: "art-tt"
                }, [ t._v(t._s(i.title)) ]), t._v(" "), s("div", {
                    staticClass: "art-ds"
                }, [ t._v(t._s(i.description)) ]) ]) ]) ]);
            })), t._v(" "), t.showModal ? s("div", {
                staticClass: "modal-mask",
                attrs: {
                    eventid: "20"
                },
                on: {
                    click: t.hideModal,
                    catchtouchmove: t.preventTouchMove
                }
            }) : t._e(), t._v(" "), t.showModal ? s("div", {
                staticClass: "modal-dialog"
            }, [ s("div", {
                staticClass: "modal-title"
            }, [ t._v("激活码") ]), t._v(" "), s("div", {
                staticClass: "modal-content"
            }, [ s("div", {
                staticClass: "modal-input"
            }, [ s("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.code,
                    expression: "code"
                } ],
                staticClass: "input",
                attrs: {
                    "placeholder-class": "input-holder",
                    type: "text",
                    placeholder: "请输入激活码",
                    eventid: "21"
                },
                domProps: {
                    value: t.code
                },
                on: {
                    input: function(i) {
                        i.target.composing || (t.code = i.target.value);
                    }
                }
            }) ]) ]), t._v(" "), s("div", {
                staticClass: "modal-footer"
            }, [ s("div", {
                staticClass: "btn-confirm",
                attrs: {
                    "data-status": "confirm",
                    eventid: "22"
                },
                on: {
                    click: t.onConfirm
                }
            }, [ t._v("激活使用") ]), t._v(" "), s("div", {
                staticClass: "btn-cancel",
                attrs: {
                    "data-status": "cancel",
                    eventid: "23"
                },
                on: {
                    click: t.onCancel
                }
            }, [ t._v("取消") ]) ]), t._v(" "), s("div", {
                staticClass: "modal-footer"
            }, [ s("div", {
                staticClass: "btn-confirm2",
                attrs: {
                    "data-status": "confirm",
                    eventid: "24"
                },
                on: {
                    click: t.onConfirm2
                }
            }, [ t._v("免费领取激活码") ]) ]) ]) : t._e(), t._v(" "), t.isWait ? s("initing", {
                attrs: {
                    mpcomid: "13"
                }
            }) : t._e(), t._v(" "), s("div", {
                staticClass: "ad_new",
                style: "display:" + t.ad_new
            }, [ s("div", {
                staticClass: "ad_content"
            }, [ s("img", {
                staticClass: "ad_img",
                attrs: {
                    src: t.ad_news.image
                }
            }), t._v(" "), s("div", {
                staticClass: "ad_title"
            }, [ t._v(t._s(t.ad_news.title)) ]), t._v(" "), s("div", {
                staticClass: "ad_desc"
            }, [ t._v(t._s(t.ad_news.description)) ]), t._v(" "), s("div", {
                staticClass: "ad_botton",
                attrs: {
                    eventid: "25"
                },
                on: {
                    click: function(i) {
                        t.toArtcle(t.ad_news.id, t.ad_news.wechat_link);
                    }
                }
            }, [ t._v("查看详情") ]) ]), t._v(" "), s("div", {
                staticClass: "ad_close",
                attrs: {
                    eventid: "26"
                },
                on: {
                    click: function(i) {
                        t.closeAd();
                    }
                }
            }, [ t._v("x") ]) ]) ], 1);
        }, a = [ function() {
            var t = this, i = t.$createElement, s = t._self._c || i;
            return s("div", {
                staticClass: "search"
            }, [ s("img", {
                staticClass: "search_img",
                attrs: {
                    src: "/static/images/index_search.png"
                }
            }), t._v("搜索大学\n                ") ]);
        } ];
        e._withStripped = !0;
        var o = {
            render: e,
            staticRenderFns: a
        };
        i.a = o;
    }
}, [ 136 ]);