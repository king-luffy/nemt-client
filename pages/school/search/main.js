require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 9 ], {
    308: function(t, i, s) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = s(1), e = s.n(o), n = s(309);
        new e.a(n.a).$mount();
    },
    309: function(t, i, s) {
        var o = s(311), e = s(312), n = !1, c = s(0)(o.a, e.a, function(t) {
            n || s(310);
        }, null, null);
        c.options.__file = "src\\pages\\school\\search\\index.vue", c.esModule && Object.keys(c.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), c.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        i.a = c.exports;
    },
    310: function(t, i) {},
    311: function(t, i, s) {
        var o = 1, e = null;
        i.a = {
            data: function() {
                return {
                    pickList1: [ "山东", "北京" ],
                    pickList2: [ "财经", "师范" ],
                    pickList3: [ "985", "211" ],
                    pickList4: [ "本科", "专科" ],
                    pick1: "",
                    pick2: "",
                    pick3: "",
                    pick4: "",
                    list: [],
                    keyword: "",
                    noMore: !1,
                    isWait: !1,
                    isLoad: !0,
                    consume: 0,
                    adConsume: 0
                };
            },
            mounted: function() {
                o = 1, this.getInfo(), this.getList(), this.adVideo(), this.userInfo && this.getUserInfo(), 
                this.toConsume(), this.toAdConsume();
            },
            methods: {
                getInfo: function() {
                    var t = this;
                    this.post({
                        url: "school/index"
                    }).then(function(i) {
                        t.pickList1 = i.areaList, t.pickList2 = i.typeList, t.pickList3 = i.tagList, t.pickList4 = i.postList, 
                        t.isLoad = !1;
                    });
                },
                getList: function() {
                    var t = this, i = {
                        url: "school/getSchoolList",
                        area: this.pick1,
                        type: this.pick2,
                        tag: this.pick3,
                        post: this.pick4,
                        keyword: this.keyword,
                        page: o
                    };
                    this.post(i).then(function(i) {
                        if (console.log("学校列表", i), 1 === o) t.isWait = !1, t.isLoad = !1, t.list = i; else {
                            var s = i.length < 1;
                            t.noMore = s, t.list = t.list.concat(i);
                        }
                    });
                },
                setPick1: function(t) {
                    var i = t.mp.detail.value;
                    this.pick1 = this.pickList1[i].district, this.anew();
                },
                setPick2: function(t) {
                    var i = t.mp.detail.value;
                    this.pick2 = this.pickList2[i].type, this.anew();
                },
                setPick3: function(t) {
                    var i = t.mp.detail.value;
                    this.pick3 = this.pickList3[i], this.anew();
                },
                setPick4: function(t) {
                    var i = t.mp.detail.value;
                    this.pick4 = this.pickList4[i], this.anew();
                },
                setKeyword: function(t) {
                    this.keyword = t.mp.detail;
                },
                anew: function() {
                    o = 1, this.noMore = !1, this.isWait = !1, this.getList();
                },
                toSearch: function() {
                    var t = this;
                    return t.keyword ? (t.getUserInfo(), t.userInfo ? "1" != t.userInfo.member ? (console.log("用户积分", t.userInfo.score), 
                    console.log("查询所需积分", t.consume), t.userInfo.score > t.consume ? global.mpvue.showModal({
                        title: "提示",
                        cancelText: "取消查询",
                        cancelColor: "#EE0000",
                        confirmText: "使用积分",
                        confirmColor: "#09BB07",
                        content: "本次查询需要消耗" + t.consume + "积分",
                        success: function(i) {
                            i.confirm && (console.log("用户同意使用积分抵扣"), t.pick1 = "", t.pick2 = "", t.pick3 = "", 
                            t.pick4 = "", t.anew(), t.cutConsume());
                        }
                    }) : global.mpvue.showModal({
                        title: "积分不足",
                        cancelText: "不了",
                        cancelColor: "#EE0000",
                        confirmText: "观看广告",
                        confirmColor: "#09BB07",
                        content: "您的积分不足，您可以观看广告获得" + t.adConsume + "积分哦~",
                        success: function(i) {
                            i.confirm && t.openVideo();
                        }
                    })) : (t.pick1 = "", t.pick2 = "", t.pick3 = "", t.pick4 = "", void t.anew()) : t.tools.dd("请登录后操作！")) : t.tools.dd("请输入要查询的学校！");
                },
                toShool: function(t) {
                    global.mpvue.navigateTo({
                        url: "/pages/school/info/main?id=" + t
                    });
                },
                toConsume: function() {
                    var t = this;
                    this.post({
                        url: "index/getSchoolConsume"
                    }).then(function(i) {
                        console.log("查询需要积分", i), t.consume = i;
                    });
                },
                toAdConsume: function() {
                    var t = this;
                    this.post({
                        url: "index/getAdConsume"
                    }).then(function(i) {
                        t.adConsume = i;
                    });
                },
                cutConsume: function() {
                    this.post({
                        url: "user/cutSchoolConsume",
                        login: !0
                    }).then(function(t) {
                        console.log(t);
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
                adVideo: function() {
                    var t = this;
                    global.mpvue.createRewardedVideoAd && ((e = global.mpvue.createRewardedVideoAd({
                        adUnitId: "adunit-a287807af92f4ece"
                    })).onLoad(function() {
                        console.log("广告加载");
                    }), e.onError(function(t) {
                        console.log("广告加载失败");
                    }), e.onClose(function(i) {
                        i && i.isEnded || void 0 === i ? (console.log("正常播放结束，下发奖励"), t.raiseAd()) : console.log("播放中途退出，进行提示");
                    }));
                },
                openVideo: function() {
                    e && e.show().catch(function() {
                        e.load().then(function() {
                            return e.show();
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
                        console.log(i), t.userInfo && t.getUserInfo();
                    });
                }
            },
            onReachBottom: function() {
                o += 1, this.getList();
            }
        };
    },
    312: function(t, i, s) {
        var o = function() {
            var t = this, i = t.$createElement, s = t._self._c || i;
            return s("div", {
                staticClass: "box"
            }, [ s("div", {
                staticClass: "s"
            }, [ s("van-search", {
                attrs: {
                    value: t.keyword,
                    background: "#3B9AFF",
                    placeholder: "输入学校关键字",
                    "use-action-slot": "",
                    eventid: "1",
                    mpcomid: "0"
                },
                on: {
                    change: t.setKeyword,
                    search: t.toSearch
                }
            }, [ s("view", {
                staticClass: "sbtn",
                attrs: {
                    eventid: "0"
                },
                on: {
                    tap: t.toSearch
                },
                slot: "action"
            }, [ t._v("搜索") ]) ]) ], 1), t._v(" "), s("div", {
                staticClass: "stype"
            }, [ s("van-row", {
                attrs: {
                    mpcomid: "9"
                }
            }, [ s("van-col", {
                attrs: {
                    span: "6",
                    mpcomid: "2"
                }
            }, [ s("picker", {
                attrs: {
                    range: t.pickList1,
                    "range-key": "district",
                    eventid: "2"
                },
                on: {
                    change: t.setPick1
                }
            }, [ s("div", {
                staticClass: "dw"
            }, [ t._v("\n                        " + t._s(t.pick1 ? t.pick1 : "所在地") + "\n                        "), s("van-icon", {
                attrs: {
                    name: "arrow-down",
                    "custom-style": "top: 3rpx;left: 5rpx",
                    mpcomid: "1"
                }
            }) ], 1) ]) ], 1), t._v(" "), s("van-col", {
                attrs: {
                    span: "6",
                    mpcomid: "4"
                }
            }, [ s("picker", {
                attrs: {
                    range: t.pickList2,
                    "range-key": "type",
                    eventid: "3"
                },
                on: {
                    change: t.setPick2
                }
            }, [ s("div", {
                staticClass: "dw"
            }, [ t._v("\n                        " + t._s(t.pick2 ? t.pick2 : "院校类型") + "\n                        "), s("van-icon", {
                attrs: {
                    name: "arrow-down",
                    "custom-style": "top: 3rpx;left: 5rpx",
                    mpcomid: "3"
                }
            }) ], 1) ]) ], 1), t._v(" "), s("van-col", {
                attrs: {
                    span: "6",
                    mpcomid: "6"
                }
            }, [ s("picker", {
                attrs: {
                    range: t.pickList3,
                    eventid: "4"
                },
                on: {
                    change: t.setPick3
                }
            }, [ s("div", {
                staticClass: "dw"
            }, [ t._v("\n                        " + t._s(t.pick3 ? t.pick3 : "院校标签") + "\n                        "), s("van-icon", {
                attrs: {
                    name: "arrow-down",
                    "custom-style": "top: 3rpx;left: 5rpx",
                    mpcomid: "5"
                }
            }) ], 1) ]) ], 1), t._v(" "), s("van-col", {
                attrs: {
                    span: "6",
                    mpcomid: "8"
                }
            }, [ s("picker", {
                attrs: {
                    range: t.pickList4,
                    eventid: "5"
                },
                on: {
                    change: t.setPick4
                }
            }, [ s("div", {
                staticClass: "dw"
            }, [ t._v("\n                        " + t._s(t.pick4 ? t.pick4 : "学科层次") + "\n                        "), s("van-icon", {
                attrs: {
                    name: "arrow-down",
                    "custom-style": "top: 3rpx;left: 5rpx",
                    mpcomid: "7"
                }
            }) ], 1) ]) ], 1) ], 1) ], 1), t._v(" "), s("div", {
                staticClass: "scholl"
            }, [ t._l(t.list, function(i, o) {
                return s("div", {
                    key: o,
                    staticClass: "ls",
                    attrs: {
                        eventid: "6_" + o
                    },
                    on: {
                        click: function(s) {
                            t.toShool(i.id);
                        }
                    }
                }, [ s("img", {
                    staticClass: "s-img",
                    attrs: {
                        src: i.avatar
                    }
                }), t._v(" "), s("div", {
                    staticClass: "s-r"
                }, [ s("van-icon", {
                    attrs: {
                        name: "arrow",
                        size: "20px",
                        color: "#999999",
                        mpcomid: "10_" + o
                    }
                }) ], 1), t._v(" "), s("div", {
                    staticClass: "s-info"
                }, [ s("div", {
                    staticClass: "s-name"
                }, [ s("div", {
                    staticClass: "s-bd"
                }, [ t._v(t._s(i.name)) ]), t._v(" "), s("span", {
                    staticClass: "s-small"
                }, [ t._v(t._s(i.district)) ]), t._v(" "), s("div", {
                    staticStyle: {
                        clear: "both"
                    }
                }) ]), t._v(" "), s("div", {
                    staticClass: "s-tag"
                }, [ t._l(i.flags, function(i, o) {
                    return s("div", {
                        key: o,
                        staticClass: "tag"
                    }, [ t._v(t._s(i)) ]);
                }), t._v(" "), t._l(i.type, function(i, o) {
                    return s("div", {
                        key: o,
                        staticClass: "tag2"
                    }, [ t._v(t._s(i)) ]);
                }), t._v(" "), i.publick ? s("div", {
                    staticClass: "tag3"
                }, [ t._v(t._s(i.public)) ]) : t._e(), t._v(" "), s("div", {
                    staticStyle: {
                        clear: "both"
                    }
                }) ], 2) ]) ]);
            }), t._v(" "), t.list.length <= 0 ? s("nodata", {
                attrs: {
                    mpcomid: "11"
                }
            }) : t._e() ], 2), t._v(" "), t.list.length > 8 ? s("reach", {
                attrs: {
                    nomore: t.noMore,
                    iswait: t.isWait,
                    mpcomid: "12"
                }
            }) : t._e(), t._v(" "), t.isLoad ? s("initing", {
                attrs: {
                    mpcomid: "13"
                }
            }) : t._e() ], 1);
        }, e = [];
        o._withStripped = !0;
        var n = {
            render: o,
            staticRenderFns: e
        };
        i.a = n;
    }
}, [ 308 ]);