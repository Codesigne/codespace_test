const MyClass = (function (/*not needed*/) {
    return function (params) {
        return {
            row_count: 5,
            col_count: this.row_count,
            bg: "⬜",
            ink: "✅",
            row_index: 1,
            col_index: 1,
            row_op: "",
            init(params) {
                console.log(this);
            },
            setSize(size = 2) {
                this.row_count = size;
                return this;
            },
            render(frame) {
                for (this.row_index = 1; this.row_index <= this.row_count; this.row_index++) {
                    for (this.col_index = 1; this.col_index <= this.row_count; this.col_index++) {
                        if (frame) {
                            if (frame(this)) {
                                this.row_op += this.ink;
                            } else {
                                this.row_op += this.bg;
                            }
                        } else {
                            this.row_op += this.bg;
                        }
                    }
                    console.log(this.row_op);
                    this.row_op = "";
                }
            },
        };
    };
})(/*not needed*/);

var obj = MyClass();
// obj.init();
// obj.setSize(4);
// obj.render();
obj.setSize(7).render((cnvs) => {
    return cnvs.col_index > cnvs.row_count - cnvs.row_index;
});
