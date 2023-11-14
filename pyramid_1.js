// Pass by value

{
    function canvas(size = 4, frame = null) {
        let row_count = size;
        let col_count = row_count;
        var row_op = "";
        // --------------------------------------------------------------------
        console.log("+++++++++++++++++++++++++");

        for (let row_index = 1; row_index <= row_count; row_index++) {
            for (let col_index = 1; col_index <= row_count; col_index++) {
                if (frame) {
                    if (frame(row_count, row_index, col_index)) {
                        row_op += "✅";
                    } else {
                        row_op += "⬜";
                    }
                } else {
                    row_op += "⬜";
                }
            }
            console.log(row_op);
            row_op = "";
        }
    }
    // canvas();
    canvas(10, function (row_count, row_index, col_index) {
        return col_index > row_count - row_index;
    });
    canvas(5, function (row_count, row_index, col_index) {
        return col_index > row_count - row_index;
    });
    // ------------------------------------------------------------------
    canvas(15, function (row_count, row_index, col_index) {
        return col_index <= row_index;
    });
    canvas(15, function (row_count, row_index, col_index) {
        return col_index <= row_count + 1 - row_index;
    });
    canvas(15, function (row_count, row_index, col_index) {
        return col_index > row_index - 1;
    });
    canvas(15, function (row_count, row_index, col_index) {
        return col_index > row_count - row_index;
    });
}
