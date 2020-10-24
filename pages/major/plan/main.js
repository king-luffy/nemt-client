require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 22 ], {
    239: function(t, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = a(1), i = a.n(o), s = a(240);
        new i.a(s.a).$mount();
    },
    240: function(t, e, a) {
        var o = a(242), i = a(243), s = !1, n = a(0)(o.a, i.a, function(t) {
            s || a(241);
        }, "data-v-08d1ae83", null);
        n.options.__file = "src\\pages\\major\\plan\\index.vue", n.esModule && Object.keys(n.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), n.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        e.a = n.exports;
    },
    241: function(t, e) {},
    242: function(t, e, a) {
        var o = null, i = 1;
        e.a = {
            data: function() {
                return {
                    noMore: !1,
                    isWait: !1,
                    isLoad: !0,
                    oneData: [],
                    oneValue: "",
                    twoData: [],
                    twoValue: "",
                    threeData: [],
                    threeValue: "",
                    fourData: [],
                    fourValue: [],
                    accordionIdx: "",
                    way: 1,
                    showway: 1,
                    kw: "",
                    list: [],
                    start_val: "",
                    end_val: "",
                    consume: 0,
                    adConsume: 0,
                    showfenshu: 0,
                    limit: 0,
                    showModal: !1,
                    articleList: [],
                    activeName: "普通类"
                };
            },
            mounted: function() {
                this.getInfo(), this.userInfo && this.getUserInfo(), this.getArticle();
            },
            onShow: function() {
                var t = this;
                global.mpvue.getStorage({
                    key: "type",
                    success: function(e) {
                        console.log("type:", e), 2 == e.data ? (t.activeName = "艺术类", t.getInfo()) : 3 == e.data ? (t.activeName = "特殊类", 
                        t.getInfo()) : (t.activeName = "普通类", t.getInfo());
                    }
                });
            },
            methods: {
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
                    }).then(function(e) {
                        if (console.log(e), e) return t.getUserInfo(), t.hideModal(), t.tools.dd("兑换成功！");
                    });
                },
                onConfirm2: function() {
                    this.hideModal(), global.mpvue.navigateTo({
                        url: "/pages/html/article/main?link=https://mp.weixin.qq.com/s/z1GQ5TnTY6xclu3Iam60MQ"
                    });
                },
                getWay: function(t) {
                    if (this.userInfo.membertimeNew < new Date().getTime() / 1e3) return this.showModal = !0, 
                    !1;
                    this.showway = t, this.way = t, i = 1, this.list = [], this.toGetSearch();
                },
                toSchool: function(t) {
                    t && global.mpvue.navigateTo({
                        url: "/pages/school/info/main?id=" + t + "&subject=w&cate=bk&k4=不限"
                    });
                },
                toSearch2: function() {
                    var t = this;
                    return t.getUserInfo(), t.userInfo ? this.userInfo.membertimeNew < new Date().getTime() / 1e3 ? (console.log("用户积分", t.userInfo.score), 
                    console.log("查询所需积分", t.consume), this.showModal = !0, !1) : (t.limit = 0, i = 1, 
                    void t.toGetSearch()) : t.tools.dd("请登录后操作！");
                },
                onChangeVal: function(t) {
                    this.kw = t.mp.detail;
                },
                toSearch: function(t) {
                    this.kw = t.mp.detail;
                    var e = this;
                    return e.getUserInfo(), e.userInfo ? this.userInfo.membertimeNew < new Date().getTime() / 1e3 ? (console.log("用户积分", e.userInfo.score), 
                    console.log("查询所需积分", e.consume), this.showModal = !0, !1) : (e.limit = 0, i = 1, 
                    void e.toGetSearch()) : e.tools.dd("请登录后操作！");
                },
                getTab: function(t) {
                    var e = this;
                    global.mpvue.removeStorage({
                        key: "type",
                        success: function(t) {
                            console.log(t.data);
                        }
                    }), e.activeName = t, e.limit = 0, i = 1, e.getInfo(), e.toGetSearch();
                },
                toGetSearch: function(t) {
                    var e = this, a = this;
                    a.showway = a.way, this.post({
                        url: "major/getPlanKeyword",
                        keyword: a.kw,
                        position: a.oneValue,
                        subjects: a.twoValue,
                        major: a.threeValue,
                        batch: a.fourValue,
                        way: a.way,
                        start_val: a.start_val,
                        end_val: a.end_val,
                        major_cate: a.activeName,
                        limit: a.limit,
                        page: i
                    }).then(function(t) {
                        if (console.log("关键字搜索返回", t), 1 == i) e.isWait = !1, e.isLoad = !1, e.list = t; else {
                            var a = t.length < 1;
                            e.noMore = a, e.list = e.list.concat(t);
                        }
                    });
                },
                getInfo: function() {
                    var t = this, e = this;
                    e.post({
                        url: "major/getPlan1",
                        major_cate: e.activeName
                    }).then(function(a) {
                        e.oneData = a.one, e.oneValue = e.oneData[0].position, e.twoData = a.two, console.log("sdfsdf", e.userInfo.subject_id), 
                        e.twoValue = e.twoData[0].title, e.threeData = a.three, e.threeValue = e.threeData[0].major, 
                        e.fourData = a.four, e.fourValue = e.fourData[0].batch, "普通批" == e.fourValue ? e.showfenshu = 1 : e.showfenshu = 0, 
                        t.isWait = !1, t.limit = 5, t.toGetSearch();
                    });
                },
                setOne: function(t) {
                    var e = this, a = this, o = t.mp.detail.value;
                    a.oneValue = a.oneData[o].position, console.log("1-position", a.oneValue), a.post({
                        url: "major/getPlan1",
                        position: a.oneValue,
                        major_cate: a.activeName
                    }).then(function(t) {
                        a.twoData = t.two, a.twoValue = a.twoData[0].title, t.four.length > 0 && (a.fourData = t.four, 
                        a.fourValue = a.fourData[0].batch), t.three.length > 0 && (a.threeData = t.three, 
                        a.threeValue = a.threeData[0].major), console.log("position关键字搜索返回", t), e.limit = 5, 
                        e.toGetSearch();
                    });
                },
                setTwo: function(t) {
                    var e = this, a = t.mp.detail.value;
                    this.twoValue = this.twoData[a].title, console.log("2-position", this.oneValue), 
                    console.log("2-subject", this.twoValue), this.post({
                        url: "major/getSubject",
                        position: this.oneValue,
                        subjects: this.twoValue,
                        major_cate: this.activeName
                    }).then(function(t) {
                        console.log("subject关键字搜索返回", t), e.fourData = t.four, e.fourValue = e.fourData[0].batch, 
                        e.threeData = t.three, e.threeValue = e.threeData[0].major, e.limit = 5, e.toGetSearch();
                    });
                },
                setThree: function(t) {
                    var e = t.mp.detail.value;
                    this.threeValue = this.threeData[e].major, this.limit = 5, this.toGetSearch();
                },
                setFour: function(t) {
                    var e = this, a = t.mp.detail.value;
                    e.fourValue = e.fourData[a].batch, console.log("是不是普通批", e.fourValue), "普通批" == e.fourValue ? e.showfenshu = 1 : e.showfenshu = 0, 
                    console.log("2专业类别变了没有", e.threeValue), e.post({
                        url: "major/getBatch1",
                        position: e.oneValue,
                        subjects: e.twoValue,
                        batch: e.fourValue,
                        major_cate: e.activeName
                    }).then(function(t) {
                        e.threeData = t.three, e.threeValue = e.threeData[0].major, e.limit = 5, e.toGetSearch();
                    });
                },
                goToUrl: function(t) {
                    var e = this.oneValue;
                    global.mpvue.navigateTo({
                        url: "/pages/major/plan_show/main?id=" + t + "&type=" + e
                    });
                },
                getArticle: function() {
                    var t = this;
                    this.post({
                        url: "index/getArticle"
                    }).then(function(e) {
                        t.articleList = e;
                    });
                },
                toArtcle: function(t, e) {
                    e ? global.mpvue.navigateTo({
                        url: "/pages/html/article/main?link=" + e
                    }) : global.mpvue.navigateTo({
                        url: "/pages/html/article/main?id=" + t
                    });
                },
                getUserInfo: function() {
                    var t = this;
                    this.post({
                        url: "user/getUserInfo",
                        login: !0
                    }).then(function(e) {
                        t.$store.commit("setUserInfo", e);
                    });
                },
                adVideo: function() {
                    var t = this;
                    global.mpvue.createRewardedVideoAd && ((o = global.mpvue.createRewardedVideoAd({
                        adUnitId: "adunit-a287807af92f4ece"
                    })).onLoad(function() {
                        console.log("广告加载");
                    }), o.onError(function(t) {
                        console.log("广告加载失败");
                    }), o.onClose(function(e) {
                        e && e.isEnded || void 0 === e ? (console.log("正常播放结束，下发奖励"), t.raiseAd()) : console.log("播放中途退出，进行提示");
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
                    }).then(function(e) {
                        console.log(e), t.userInfo && t.getUserInfo();
                    });
                }
            },
            onReachBottom: function() {
                i += 1, this.toGetSearch();
            }
        };
    },
    243: function(t, e, a) {
        var o = function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "center"
            }, [ a("div", {
                staticClass: "tab"
            }, [ a("div", {
                class: "普通类" === t.activeName ? "tab-title tab-x" : "tab-title",
                attrs: {
                    eventid: "0"
                },
                on: {
                    click: function(e) {
                        t.getTab("普通类");
                    }
                }
            }, [ t._v("普通类") ]), t._v(" "), a("div", {
                class: "艺术类" === t.activeName ? "tab-title tab-x" : "tab-title",
                attrs: {
                    eventid: "1"
                },
                on: {
                    click: function(e) {
                        t.getTab("艺术类");
                    }
                }
            }, [ t._v("艺术类") ]), t._v(" "), a("div", {
                class: "特殊类" === t.activeName ? "tab-title tab-x" : "tab-title",
                attrs: {
                    eventid: "2"
                },
                on: {
                    click: function(e) {
                        t.getTab("特殊类");
                    }
                }
            }, [ t._v("单招/综评(专科)") ]) ]), t._v(" "), a("picker", {
                attrs: {
                    range: t.oneData,
                    "range-key": "position",
                    eventid: "3"
                },
                on: {
                    change: t.setOne
                }
            }, [ a("van-cell", {
                attrs: {
                    title: "学历类型",
                    "is-link": "",
                    value: t.oneValue,
                    mpcomid: "0"
                }
            }) ], 1), t._v(" "), a("picker", {
                attrs: {
                    range: t.twoData,
                    "range-key": "title",
                    eventid: "4"
                },
                on: {
                    change: t.setTwo
                }
            }, [ a("van-cell", {
                attrs: {
                    title: "选科要求",
                    "is-link": "",
                    value: t.twoValue,
                    mpcomid: "1"
                }
            }) ], 1), t._v(" "), a("picker", {
                attrs: {
                    range: t.fourData,
                    "range-key": "batch",
                    eventid: "5"
                },
                on: {
                    change: t.setFour
                }
            }, [ a("van-cell", {
                attrs: {
                    title: "专业批次",
                    "is-link": "",
                    value: t.fourValue,
                    mpcomid: "2"
                }
            }) ], 1), t._v(" "), a("div", {
                staticClass: "school_s"
            }, [ a("radio-group", {
                attrs: {
                    mpcomid: "3"
                }
            }, [ a("radio", {
                attrs: {
                    checked: 1 == t.way,
                    eventid: "6"
                },
                on: {
                    click: function(e) {
                        t.getWay(t.way = 1);
                    }
                }
            }, [ t._v("搜学校") ]), t._v(" "), a("radio", {
                staticClass: "ss_2",
                attrs: {
                    checked: 0 == t.way,
                    eventid: "7"
                },
                on: {
                    click: function(e) {
                        t.getWay(t.way = 0);
                    }
                }
            }, [ t._v("搜专业") ]) ], 1) ], 1), t._v(" "), 1 == t.showfenshu ? a("div", {
                staticClass: "school_s2"
            }, [ a("div", {
                staticClass: "school_right1"
            }, [ a("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.start_val,
                    expression: "start_val"
                } ],
                staticClass: "bod-int bod-r",
                attrs: {
                    type: "number",
                    placeholder: "请输入最低分",
                    eventid: "8"
                },
                domProps: {
                    value: t.start_val
                },
                on: {
                    change: function(e) {
                        t.toGetSearch();
                    },
                    input: function(e) {
                        e.target.composing || (t.start_val = e.target.value);
                    }
                }
            }) ]), t._v(" "), a("div", {
                staticClass: "school_right2"
            }, [ t._v("-") ]), t._v(" "), a("div", {
                staticClass: "school_right3"
            }, [ a("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.end_val,
                    expression: "end_val"
                } ],
                staticClass: "bod-int bod-r",
                attrs: {
                    type: "number",
                    placeholder: "请输入最高分",
                    eventid: "9"
                },
                domProps: {
                    value: t.end_val
                },
                on: {
                    change: function(e) {
                        t.toGetSearch();
                    },
                    input: function(e) {
                        e.target.composing || (t.end_val = e.target.value);
                    }
                }
            }) ]) ]) : t._e(), t._v(" "), a("van-search", {
                attrs: {
                    value: t.kw,
                    background: "#3B9AFF",
                    placeholder: "请输入搜索关键词",
                    "use-action-slot": "",
                    eventid: "11",
                    mpcomid: "4"
                },
                on: {
                    search: t.toSearch,
                    change: t.onChangeVal
                }
            }, [ a("div", {
                attrs: {
                    eventid: "10"
                },
                on: {
                    tap: t.toSearch2
                },
                slot: "action"
            }, [ t._v("搜索") ]) ]), t._v(" "), a("div", {
                staticClass: "news"
            }, [ a("image", {
                staticClass: "news-img",
                attrs: {
                    src: "/static/images/tequan.png"
                }
            }), t._v(" "), a("swiper", {
                staticClass: "news-swiper",
                attrs: {
                    vertical: "",
                    autoplay: "",
                    circular: "",
                    interval: "2000"
                }
            }, t._l(t.articleList, function(e, o) {
                return a("swiper-item", {
                    key: o,
                    attrs: {
                        mpcomid: "5_" + o
                    }
                }, [ a("div", {
                    staticClass: "news-item",
                    attrs: {
                        eventid: "12_" + o
                    },
                    on: {
                        click: function(a) {
                            t.toArtcle(e.id, e.wechat_link);
                        }
                    }
                }, [ t._v(t._s(e.title)) ]) ]);
            })) ], 1), t._v(" "), 1 == t.showway ? a("div", {
                staticClass: "scholl"
            }, [ t._l(t.list, function(e, o) {
                return a("div", {
                    key: o,
                    staticClass: "ls"
                }, [ a("img", {
                    staticClass: "s-img",
                    attrs: {
                        src: e.school_logo
                    }
                }), t._v(" "), a("div", {
                    staticClass: "s-info",
                    attrs: {
                        eventid: "13_" + o
                    },
                    on: {
                        click: function(a) {
                            t.toSchool(e.school_id);
                        }
                    }
                }, [ a("div", {
                    staticClass: "s-name"
                }, [ a("div", {
                    staticClass: "s-bd"
                }, [ t._v(t._s(e.school_name) + " " + t._s(e.school_number)) ]), t._v(" "), a("div", {
                    staticStyle: {
                        clear: "both"
                    }
                }) ]), t._v(" "), t._m(0, !0) ]), t._v(" "), t._m(1, !0), t._v(" "), t._l(e.major, function(e, o) {
                    return a("div", {
                        staticClass: "zhuanye",
                        staticStyle: {
                            width: "100%"
                        }
                    }, [ a("div", {
                        staticClass: "zhuanye_left1"
                    }, [ t._v("-") ]), t._v(" "), a("div", {
                        staticClass: "zhuanye_left"
                    }, [ t._v(t._s(e.major_name)) ]), t._v(" "), a("div", {
                        staticStyle: {
                            clear: "both"
                        }
                    }) ]);
                }), t._v(" "), a("div", {
                    staticClass: "line_bottom"
                }) ], 2);
            }), t._v(" "), t.list.length <= 0 ? a("nodata", {
                attrs: {
                    mpcomid: "6"
                }
            }) : t._e(), t._v(" "), t.list.length > 1 ? a("reach", {
                attrs: {
                    nomore: t.noMore,
                    iswait: t.isWait,
                    mpcomid: "7"
                }
            }) : t._e(), t._v(" "), t.isLoad ? a("initing", {
                attrs: {
                    mpcomid: "8"
                }
            }) : t._e() ], 2) : a("div", {
                staticClass: "major"
            }, [ t._l(t.list, function(e, o) {
                return a("div", {
                    key: o,
                    staticClass: "lss"
                }, [ a("div", {
                    staticClass: "s_zhuanye"
                }, [ a("div", {
                    staticClass: "zhuanye_left1"
                }, [ t._v("-") ]), t._v(" "), a("div", {
                    staticClass: "zhuanye_left"
                }, [ t._v(t._s(e.major_name)) ]) ]), t._v(" "), a("div", {
                    staticClass: "s_zhuanye",
                    attrs: {
                        eventid: "14_" + o
                    },
                    on: {
                        click: function(a) {
                            t.toSchool(e.school_id);
                        }
                    }
                }, [ a("div", {
                    staticClass: "s_zhuanye1"
                }, [ a("img", {
                    staticClass: "s1-img",
                    attrs: {
                        src: e.school_logo
                    }
                }) ]), t._v(" "), a("div", {
                    staticClass: "s_zhuanye2"
                }, [ t._v(t._s(e.school_name) + " " + t._s(e.school_number)) ]), t._v(" "), a("div", {
                    staticClass: "s_zhuanye1"
                }), t._v(" "), a("div", {
                    staticStyle: {
                        clear: "both"
                    }
                }) ]) ]);
            }), t._v(" "), t.list.length <= 0 ? a("nodata", {
                attrs: {
                    mpcomid: "9"
                }
            }) : t._e(), t._v(" "), t.list.length > 1 ? a("reach", {
                attrs: {
                    nomore: t.noMore,
                    iswait: t.isWait,
                    mpcomid: "10"
                }
            }) : t._e(), t._v(" "), t.isLoad ? a("initing", {
                attrs: {
                    mpcomid: "11"
                }
            }) : t._e() ], 2), t._v(" "), t.showModal ? a("div", {
                staticClass: "modal-mask",
                attrs: {
                    eventid: "15"
                },
                on: {
                    click: t.hideModal,
                    catchtouchmove: t.preventTouchMove
                }
            }) : t._e(), t._v(" "), t.showModal ? a("div", {
                staticClass: "modal-dialog"
            }, [ a("div", {
                staticClass: "modal-title"
            }, [ t._v("激活码") ]), t._v(" "), a("div", {
                staticClass: "modal-content"
            }, [ a("div", {
                staticClass: "modal-input"
            }, [ a("input", {
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
                    eventid: "16"
                },
                domProps: {
                    value: t.code
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.code = e.target.value);
                    }
                }
            }) ]) ]), t._v(" "), a("div", {
                staticClass: "modal-footer"
            }, [ a("div", {
                staticClass: "btn-confirm",
                attrs: {
                    "data-status": "confirm",
                    eventid: "17"
                },
                on: {
                    click: t.onConfirm
                }
            }, [ t._v("激活使用") ]), t._v(" "), a("div", {
                staticClass: "btn-cancel",
                attrs: {
                    "data-status": "cancel",
                    eventid: "18"
                },
                on: {
                    click: t.onCancel
                }
            }, [ t._v("取消") ]) ]), t._v(" "), a("div", {
                staticClass: "modal-footer"
            }, [ a("div", {
                staticClass: "btn-confirm2",
                attrs: {
                    "data-status": "confirm",
                    eventid: "19"
                },
                on: {
                    click: t.onConfirm2
                }
            }, [ t._v("没有激活码怎么办？") ]) ]) ]) : t._e() ], 1);
        }, i = [ function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "s-tag"
            }, [ a("div", {
                staticStyle: {
                    clear: "both"
                }
            }) ]);
        }, function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "line"
            }, [ a("div", {
                staticClass: "line_text"
            }, [ t._v("招生计划：") ]), t._v(" "), a("div", {
                staticClass: "line_text"
            }, [ t._v("以上数据仅供参考 一切以考试院公布的数据为准") ]) ]);
        } ];
        o._withStripped = !0;
        var s = {
            render: o,
            staticRenderFns: i
        };
        e.a = s;
    }
}, [ 239 ]);