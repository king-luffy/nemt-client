require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 16 ], {
    264: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = t(1), s = t.n(o), i = t(265);
        new s.a(i.a).$mount();
    },
    265: function(e, n, t) {
        var o = t(267), s = t(268), i = !1, a = t(0)(o.a, s.a, function(e) {
            i || t(266);
        }, null, null);
        a.options.__file = "src\\pages\\mine\\member\\index.vue", a.esModule && Object.keys(a.esModule).some(function(e) {
            return "default" !== e && "__" !== e.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), a.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        n.a = a.exports;
    },
    266: function(e, n) {},
    267: function(e, n, t) {
        n.a = {
            data: function() {
                return {
                    money: 0,
                    days: 0
                };
            },
            mounted: function() {
                this.userInfo, this.getList();
            },
            methods: {
                getInfo: function() {
                    var e = this;
                    this.post({
                        url: "user/getUserInfo",
                        login: !0
                    }).then(function(n) {
                        e.$store.commit("setUserInfo", n);
                    });
                },
                getList: function() {
                    console.log("进来了吗");
                    var e = this;
                    this.post({
                        url: "member/getMember",
                        login: !0
                    }).then(function(n) {
                        e.money = n.money, e.days = n.days;
                    });
                },
                wxPay: function() {
                    console.log("微信支付配置"), this.getWxPayInfo();
                },
                getWxPayInfo: function() {
                    var e = this;
                    this.post({
                        url: "member/getWxPayInfo",
                        login: !0
                    }).then(function(n) {
                        console.log("微信支付信息获取成功"), e.toPay(n.timestamp, n.noncestr, n.package, n.sign);
                    });
                },
                toPay: function(e, n, t, o) {
                    console.log("调起支付");
                    var s = this;
                    global.mpvue.requestPayment({
                        timeStamp: e,
                        nonceStr: n,
                        package: "prepay_id=" + t,
                        signType: "MD5",
                        paySign: o,
                        success: function() {
                            s.getInfo(), global.mpvue.switchTab({
                                url: "/pages/mine/main"
                            }), setTimeout(function() {
                                return s.tools.dd("会员开通成功！");
                            }, 2e3);
                        },
                        fail: function(e) {
                            console.log("支付失败返回", e), global.mpvue.showToast({
                                title: "抱歉！支付失败，请稍后再试。",
                                icon: "none"
                            });
                        }
                    });
                }
            }
        };
    },
    268: function(e, n, t) {
        var o = function() {
            var e = this, n = e.$createElement, t = e._self._c || n;
            return t("div", {
                staticClass: "box"
            }, [ t("div", {
                staticClass: "bg_box"
            }, [ t("img", {
                attrs: {
                    src: "https://image.tianziyuan.cn/bg/bg.png"
                }
            }), e._v(" "), t("div", {
                staticClass: "mem-title"
            }, [ e._v("\n               VIP 规则:\n            ") ]), e._v(" "), t("div", {
                staticClass: "mem-content"
            }, [ e._v("\n                         开通Vip可以使用本程序的所有高级功能，有效期为开通之日起" + e._s(e.days) + "天\n            ") ]) ]) ]);
        }, s = [];
        o._withStripped = !0;
        var i = {
            render: o,
            staticRenderFns: s
        };
        n.a = i;
    }
}, [ 264 ]);