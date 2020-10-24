require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 18 ], {
    254: function(t, s, i) {
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var e = i(1), n = i.n(e), a = i(255);
        new n.a(a.a).$mount();
    },
    255: function(t, s, i) {
        var e = i(257), n = i(258), a = !1, o = i(0)(e.a, n.a, function(t) {
            a || i(256);
        }, null, null);
        o.options.__file = "src\\pages\\mine\\integral\\index.vue", o.esModule && Object.keys(o.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), o.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        s.a = o.exports;
    },
    256: function(t, s) {},
    257: function(t, s, i) {
        var e = null;
        s.a = {
            data: function() {
                return {
                    list: [],
                    score: "0",
                    consume: "2",
                    regist_give: "10",
                    shared_points: "10",
                    ad_points: "10",
                    school_consume: "10"
                };
            },
            mounted: function() {
                this.getList(), this.adVideo();
            },
            methods: {
                getList: function() {
                    console.log("进来了吗");
                    var t = this;
                    this.post({
                        url: "user/getUserRecord",
                        login: !0
                    }).then(function(s) {
                        console.log("积分列表", s), t.list = s.list, t.score = s.score, t.consume = s.consume, 
                        t.regist_give = s.regist_give, t.shared_points = s.shared_points, t.ad_points = s.ad_points, 
                        t.school_consume = s.school_consume;
                    });
                },
                toUrl: function() {
                    global.mpvue.navigateTo({
                        url: "/pages/html/article/main?id=13"
                    });
                },
                adVideo: function() {
                    var t = this;
                    global.mpvue.createRewardedVideoAd && ((e = global.mpvue.createRewardedVideoAd({
                        adUnitId: "adunit-a287807af92f4ece"
                    })).onLoad(function() {
                        console.log("广告加载");
                    }), e.onError(function(t) {
                        console.log("广告退出");
                    }), e.onClose(function(s) {
                        s && s.isEnded || void 0 === s ? (console.log("正常播放结束，下发奖励"), t.raiseAd()) : console.log("播放中途退出，进行提示");
                    }));
                },
                toAd: function() {
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
                    }).then(function(s) {
                        console.log(s), t.userInfo && t.getList();
                    });
                }
            },
            onShareAppMessage: function() {
                var t = this;
                return t.userInfo && this.post({
                    url: "user/sharedPoints",
                    login: !0
                }).then(function(s) {
                    t.getList();
                }), {
                    title: "志愿填报助手-匹配名校更准确",
                    path: "/pages/index/main",
                    imageUrl: "https://image.tianziyuan.cn/bg/share.jpg"
                };
            }
        };
    },
    258: function(t, s, i) {
        var e = function() {
            var t = this, s = t.$createElement, i = t._self._c || s;
            return i("div", {
                staticClass: "box"
            }, [ i("div", {
                staticClass: "integral"
            }, [ i("div", {
                staticClass: "integral-title"
            }, [ t._m(0), t._v(" "), i("div", {
                staticClass: "integral-txt"
            }, [ t._v("\n                    " + t._s(t.score) + "\n                ") ]), t._v(" "), i("div", {
                staticClass: "integral-use"
            }, [ t._v("\n                    可用积分\n                ") ]) ]), t._v(" "), i("div", {
                staticClass: "ls"
            }, [ i("div", {
                staticClass: "li-x"
            }, [ i("img", {
                staticClass: "li-img2",
                attrs: {
                    src: "https://image.tianziyuan.cn/bg/5.png"
                }
            }), t._v(" "), i("div", {
                staticClass: "li-txt2"
            }, [ t._v("+" + t._s(t.ad_points)) ]) ]), t._v(" "), i("div", {
                staticClass: "li-x"
            }, [ i("button", {
                staticClass: "share",
                attrs: {
                    "open-type": "share"
                }
            }, [ i("img", {
                staticClass: "li-img2",
                attrs: {
                    src: "https://image.tianziyuan.cn/bg/6.png"
                }
            }) ]), t._v(" "), i("div", {
                staticClass: "li-txt3"
            }, [ t._v("+" + t._s(t.shared_points)) ]) ], 1), t._v(" "), i("div", {
                staticClass: "li-x",
                attrs: {
                    eventid: "0"
                },
                on: {
                    click: function(s) {
                        t.toUrl();
                    }
                }
            }, [ i("img", {
                staticClass: "li-img2",
                attrs: {
                    src: "https://image.tianziyuan.cn/bg/7.png"
                }
            }), t._v(" "), i("div", {
                staticClass: "li-txt4"
            }, [ t._v("+" + t._s(t.regist_give)) ]) ]) ]), t._v(" "), i("div", {
                staticClass: "integral-list"
            }, [ i("div", {
                staticClass: "integral-record"
            }, [ t._v("\n                    积分记录\n                ") ]), t._v(" "), t._l(t.list, function(s, e) {
                return i("div", {
                    key: e
                }, [ i("div", {
                    staticClass: "integral-li"
                }, [ i("div", {
                    staticClass: "li-a"
                }, [ t._v(t._s(s.score)) ]), t._v(" "), i("div", {
                    staticClass: "li-b"
                }, [ t._v(t._s(s.type)) ]), t._v(" "), i("div", {
                    staticClass: "li-c"
                }, [ t._v(t._s(s.createtime)) ]) ]) ]);
            }), t._v(" "), t._m(1) ], 2) ]) ]);
        }, n = [ function() {
            var t = this, s = t.$createElement, i = t._self._c || s;
            return i("div", {
                staticClass: "integral-img"
            }, [ i("img", {
                attrs: {
                    src: "https://image.tianziyuan.cn/bg/m_top.png"
                }
            }) ]);
        }, function() {
            var t = this, s = t.$createElement, i = t._self._c || s;
            return i("div", {
                staticClass: "integral-end"
            }, [ i("div", {
                staticClass: "li-d"
            }, [ t._v("仅显示最新的50条记录") ]) ]);
        } ];
        e._withStripped = !0;
        var a = {
            render: e,
            staticRenderFns: n
        };
        s.a = a;
    }
}, [ 254 ]);