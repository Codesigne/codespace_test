// object oriented
// Object Method
// Pass by reference
// chaining

var Canvas = {
    // from out
    row_count: 2,
    col_count: this.row_count,
    // internal
    row_index: 1,
    col_index: 1,
    bg: "⬜",
    ink: "✅",
    // op
    row_op: "",
    setSize: function (size = 4) {
        this.row_count = size;
        return this;
    },
    render: function (frame) {
        console.log("➖➖➖➖➖➖➖➖➖➖");
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

{
    Canvas.row_count = 15;
    Canvas.render((cnvs) => {
        return cnvs.col_index > cnvs.row_count - cnvs.row_index;
    });

    Canvas.row_count = 5;
    Canvas.render((cnvs) => {
        return cnvs.col_index > cnvs.row_count - cnvs.row_index;
    });

    {
        Canvas.row_count = 10;
        // ------------------------------------------------------------------
        Canvas.render((cnvs) => {
            return cnvs.col_index <= cnvs.row_index;
        });
        Canvas.render((cnvs) => {
            return cnvs.col_index <= cnvs.row_count + 1 - cnvs.row_index;
        });
        Canvas.render((cnvs) => {
            return cnvs.col_index > cnvs.row_index - 1;
        });
        Canvas.render((cnvs) => {
            return cnvs.col_index > cnvs.row_count - cnvs.row_index;
        });
        Canvas.render();
        Canvas.setSize().render();
        Canvas.setSize(6).render();
    }

    hypotenuse: {
        Canvas.setSize(6).render((cnvs) => {
            return cnvs.col_index == cnvs.row_index;
        });
        Canvas.setSize(6).render((cnvs) => {
            return cnvs.col_index == cnvs.row_count + 1 - cnvs.row_index;
        });
        Canvas.setSize(6).render((cnvs) => {
            return cnvs.col_index - 1 == cnvs.row_count - cnvs.row_index;
        });
    }
    outLined: {
        setSizeEach: {
            Canvas.setSize(6).render((cnvs) => {
                return cnvs.col_index == cnvs.row_index || cnvs.row_count == cnvs.row_index || 1 == cnvs.col_index;
            });
            Canvas.setSize(5).render((cnvs) => {
                return cnvs.col_index == cnvs.row_count + 1 - cnvs.row_index || cnvs.row_count == cnvs.row_index || cnvs.row_count == cnvs.col_index;
            });
            Canvas.setSize(6).render((cnvs) => {
                return cnvs.col_index == cnvs.row_index || 1 == cnvs.row_index || cnvs.row_count == cnvs.col_index;
            });
            Canvas.setSize(4).render((cnvs) => {
                return cnvs.col_index - 1 == cnvs.row_count - cnvs.row_index || cnvs.row_count == cnvs.row_index || cnvs.row_count == cnvs.col_index;
            });
        }
        setSizeOnce: {
            var c3 = Canvas.setSize(8);
            c3.render((cnvs) => {
                return cnvs.col_index == cnvs.row_index || cnvs.row_count == cnvs.row_index || 1 == cnvs.col_index;
            });
            c3.render((cnvs) => {
                return cnvs.col_index == cnvs.row_count + 1 - cnvs.row_index || cnvs.row_count == cnvs.row_index || cnvs.row_count == cnvs.col_index;
            });
            c3.render((cnvs) => {
                return cnvs.col_index == cnvs.row_index || 1 == cnvs.row_index || cnvs.row_count == cnvs.col_index;
            });
            c3.render((cnvs) => {
                return cnvs.col_index - 1 == cnvs.row_count - cnvs.row_index || cnvs.row_count == cnvs.row_index || cnvs.row_count == cnvs.col_index;
            });
        }
    }
}
