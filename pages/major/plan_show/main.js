require("../../../common/manifest.js"), require("../../../common/vendor.js"), global.webpackJsonpMpvue([ 21 ], {
    234: function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(1), n = i.n(s), a = i(235);
        new n.a(a.a).$mount();
    },
    235: function(t, e, i) {
        var s = i(237), n = i(238), a = !1, o = i(0)(s.a, n.a, function(t) {
            a || i(236);
        }, "data-v-453af18f", null);
        o.options.__file = "src\\pages\\major\\plan_show\\index.vue", o.esModule && Object.keys(o.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), o.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        e.a = o.exports;
    },
    236: function(t, e) {},
    237: function(t, e, i) {
        e.a = {
            data: function() {
                return {
                    id: 0,
                    idx: 0,
                    url: "https://image.tianziyuan.cn/plan/1.jpg",
                    startX: 0,
                    startY: 0,
                    endX: 0,
                    endY: 0,
                    type: ""
                };
            },
            mounted: function() {
                this.id = this.$mp.query.id, this.idx = this.$mp.query.id, this.type = this.$mp.query.type, 
                "本科" == this.type ? this.url = "https://image.tianziyuan.cn/plan/" + this.id + ".jpg" : this.url = "https://image.tianziyuan.cn/plan/zk/" + this.id + ".jpg", 
                console.log("url", this.url);
                var t = Date.parse(new Date());
                t /= 1e3, console.log("当前时间", t), console.log("记录时间", this.gData.pageshow), t > Number(this.gData.pageshow) + 10800 && (this.gData.pageshow = t, 
                global.mpvue.showModal({
                    title: "使用须知",
                    content: "7月26日更新!"
                }), console.log("记录时间", this.gData.pageshow));
            },
            methods: {
                refreshStart: function(t) {
                    console.log(t), this.startX = t.clientX, this.startY = t.clientY;
                },
                refreshEnd: function(t) {
                    console.log(t), this.endX = t.mp.changedTouches[0].clientX, this.endY = t.mp.changedTouches[0].clientY, 
                    console.log(this.startX, this.endX), console.log(this.startY, this.endY);
                    var e = this.endX - this.startX, i = this.endY - this.startY, s = Math.abs(e), n = Math.abs(i);
                    this.refresh ? s >= n && s >= 10 ? e > 10 ? this.left_page() : this.right_page() : n >= s && s >= 10 && (i > 10 ? this.left_page() : this.right_page()) : this.refresh = !0;
                },
                right_page: function() {
                    if (this.id == Number(this.idx) + 1) return global.mpvue.showModal({
                        title: "提示",
                        content: "不能继续翻页了"
                    });
                    this.id = Number(this.id) + 1, "本科" == this.type ? this.url = "https://image.tianziyuan.cn/plan/" + this.id + ".jpg" : this.url = "https://image.tianziyuan.cn/plan/zk/" + this.id + ".jpg", 
                    console.log("url", this.url);
                },
                left_page: function() {
                    if (this.id == this.idx - 1) return global.mpvue.showModal({
                        title: "提示",
                        content: "不能继续翻页了"
                    });
                    this.id = Number(this.id) - 1, "本科" == this.type ? this.url = "https://image.tianziyuan.cn/plan/" + this.id + ".jpg" : this.url = "https://image.tianziyuan.cn/plan/zk/" + this.id + ".jpg", 
                    console.log("url", this.url);
                }
            }
        };
    },
    238: function(t, e, i) {
        var s = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "center",
                attrs: {
                    eventid: "2"
                },
                on: {
                    touchstart: t.refreshStart,
                    touchend: t.refreshEnd
                }
            }, [ i("img", {
                staticClass: "page_img",
                attrs: {
                    src: t.url
                }
            }), t._v(" "), i("div", {
                staticClass: "bottom"
            }, [ i("div", {
                staticClass: "bottom_left",
                attrs: {
                    eventid: "0"
                },
                on: {
                    click: t.left_page
                }
            }, [ t._v("上一页") ]), t._v(" "), i("div", {
                staticClass: "bottom_center"
            }, [ i("p", {
                staticClass: "page_no"
            }, [ t._v("书籍页码：" + t._s(t.id)) ]), t._v(" "), i("p", {
                staticClass: "page_text"
            }, [ t._v("您可以试试左右滑动") ]) ], 1), t._v(" "), i("div", {
                staticClass: "bottom_right",
                attrs: {
                    eventid: "1"
                },
                on: {
                    click: t.right_page
                }
            }, [ t._v("下一页") ]) ]) ]);
        }, n = [];
        s._withStripped = !0;
        var a = {
            render: s,
            staticRenderFns: n
        };
        e.a = a;
    }
}, [ 234 ]);