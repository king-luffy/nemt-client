require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 30 ], {
    131: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1), o = n.n(i), r = n(132);
        new o.a(r.a).$mount();
    },
    132: function(e, t, n) {
        var i = n(134), o = n(135), r = !1, s = n(0)(i.a, o.a, function(e) {
            r || n(133);
        }, null, null);
        s.options.__file = "src\\pages\\html\\article\\index.vue", s.esModule && Object.keys(s.esModule).some(function(e) {
            return "default" !== e && "__" !== e.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), s.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        t.a = s.exports;
    },
    133: function(e, t) {},
    134: function(e, t, n) {
        t.a = {
            data: function() {
                return {
                    url: ""
                };
            },
            onLoad: function() {
                var e = this.$mp.query.id, t = this.$mp.query.follow, n = this.$mp.query.link;
                1 == t ? this.url = "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg2NDE5NDIzNA==&scene=124#wechat_redirect" : 3 == t ? (global.mpvue.setNavigationBarTitle({
                    title: "小程序会员码领取方法"
                }), this.url = "https://mp.weixin.qq.com/s/JoEJ94xb-HmSbyabMb8boA") : 4 == t ? (global.mpvue.setNavigationBarTitle({
                    title: "小程序功能说明"
                }), this.url = "https://mp.weixin.qq.com/s/Iahqe0bbkHcvMRPZaTgR6A") : this.url = n || "https://api.tianziyuan.cn/index/article/info/id/" + e;
            }
        };
    },
    135: function(e, t, n) {
        var i = function() {
            var e = this, t = e.$createElement;
            return (e._self._c || t)("web-view", {
                attrs: {
                    src: e.url,
                    mpcomid: "0"
                }
            });
        }, o = [];
        i._withStripped = !0;
        var r = {
            render: i,
            staticRenderFns: o
        };
        t.a = r;
    }
}, [ 131 ]);