var t = require("../common/component"), e = require("../mixins/safe-area");

(0, t.VantComponent)({
    mixins: [ (0, e.safeArea)() ],
    classes: [ "bar-class", "price-class", "button-class" ],
    props: {
        tip: null,
        type: Number,
        price: null,
        label: String,
        loading: Boolean,
        disabled: Boolean,
        buttonText: String,
        currency: {
            type: String,
            value: "¥"
        },
        buttonType: {
            type: String,
            value: "danger"
        },
        decimalLength: {
            type: Number,
            value: 2
        }
    },
    computed: {
        hasPrice: function() {
            return "number" == typeof this.data.price;
        },
        priceStr: function() {
            return (this.data.price / 100).toFixed(this.data.decimalLength);
        },
        tipStr: function() {
            var t = this.data.tip;
            return "string" == typeof t ? t : "";
        }
    },
    methods: {
        onSubmit: function(t) {
            this.$emit("submit", t.detail);
        }
    }
});