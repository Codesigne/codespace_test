// object oriented
// Pass by reference
var Canvas = {
    // from out
    row_count: 10,
    col_count: this.row_count,
    // internal
    row_index: 1,
    col_index: 1,
    bg: "⬜",
    ink: "✅",
    // op
    row_op: "",
};

{
    function canvas(c1 = {}, frame) {
        // --------------------------------------------------------------------
        console.log("➖➖➖➖➖➖➖➖➖");

        for (c1.row_index = 1; c1.row_index <= c1.row_count; c1.row_index++) {
            for (c1.col_index = 1; c1.col_index <= c1.row_count; c1.col_index++) {
                if (frame) {
                    if (frame(c1)) {
                        c1.row_op += c1.ink;
                    } else {
                        c1.row_op += c1.bg;
                    }
                } else {
                    c1.row_op += c1.bg;
                }
            }
            console.log(c1.row_op);
            c1.row_op = "";
        }
    }

    Canvas.row_count = 15;
    canvas(Canvas, (cnvs) => {
        return cnvs.col_index > cnvs.row_count - cnvs.row_index;
    });

    Canvas.row_count = 5;
    canvas(Canvas, (cnvs) => {
        return cnvs.col_index > cnvs.row_count - cnvs.row_index;
    });

    Canvas.row_count = 10;
    // ------------------------------------------------------------------
    canvas(Canvas, (cnvs) => {
        return cnvs.col_index <= cnvs.row_index;
    });
    canvas(Canvas, (cnvs) => {
        return cnvs.col_index <= cnvs.row_count + 1 - cnvs.row_index;
    });
    canvas(Canvas, (cnvs) => {
        return cnvs.col_index > cnvs.row_index - 1;
    });
    canvas(Canvas, (cnvs) => {
        return cnvs.col_index > cnvs.row_count - cnvs.row_index;
    });
}
