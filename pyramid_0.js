// console.log("hi");

let row_count = 8;
let col_count = row_count;
var row_op = "";
// --------------------------------------------------------------------

for (let row_index = 1; row_index <= row_count; row_index++) {
    for (let col_index = 1; col_index <= row_count; col_index++) {
        // col_index will always left of expression
        // for right sight try to achive last row of canvas
        if (col_index <= row_index) {
            row_op += "✅";
        } else {
            row_op += "⬜";
        }
    }
    console.log(row_op);
    row_op = "";
}
// ✅⬜⬜⬜⬜⬜⬜⬜
// ✅✅⬜⬜⬜⬜⬜⬜
// ✅✅✅⬜⬜⬜⬜⬜
// ✅✅✅✅⬜⬜⬜⬜
// ✅✅✅✅✅⬜⬜⬜
// ✅✅✅✅✅✅⬜⬜
// ✅✅✅✅✅✅✅⬜
// ✅✅✅✅✅✅✅✅
console.log("----------------------------------");
// --------------------------------------------------------------------

for (let row_index = 1; row_index <= row_count; row_index++) {
    for (let col_index = 1; col_index <= row_count; col_index++) {
        // col_index will always left of expression
        // for right sight try to achive last row of canvas
        if (col_index <= row_count + 1 - row_index) {
            row_op += "✅";
        } else {
            row_op += "⬜";
        }
    }
    console.log(row_op);
    row_op = "";
}
// ✅✅✅✅✅✅✅✅
// ✅✅✅✅✅✅✅⬜
// ✅✅✅✅✅✅⬜⬜
// ✅✅✅✅✅⬜⬜⬜
// ✅✅✅✅⬜⬜⬜⬜
// ✅✅✅⬜⬜⬜⬜⬜
// ✅✅⬜⬜⬜⬜⬜⬜
// ✅⬜⬜⬜⬜⬜⬜⬜
console.log("----------------------------------");
// --------------------------------------------------------------------

for (let row_index = 1; row_index <= row_count; row_index++) {
    for (let col_index = 1; col_index <= row_count; col_index++) {
        // col_index will always left of expression
        // for right sight try to achive last row of canvas
        if (col_index > row_index - 1) {
            row_op += "✅";
        } else {
            row_op += "⬜";
        }
    }
    console.log(row_op);
    row_op = "";
}
// ✅✅✅✅✅✅✅✅
// ⬜✅✅✅✅✅✅✅
// ⬜⬜✅✅✅✅✅✅
// ⬜⬜⬜✅✅✅✅✅
// ⬜⬜⬜⬜✅✅✅✅
// ⬜⬜⬜⬜⬜✅✅✅
// ⬜⬜⬜⬜⬜⬜✅✅
// ⬜⬜⬜⬜⬜⬜⬜✅
console.log("----------------------------------");

// --------------------------------------------------------------------

for (let row_index = 1; row_index <= row_count; row_index++) {
    for (let col_index = 1; col_index <= row_count; col_index++) {
        // if (row_count + 1 - row_index > col_index) {
        if (col_index > row_count - row_index) {
            row_op += "✅";
        } else {
            row_op += "⬜";
        }
    }
    console.log(row_op);
    row_op = "";
}
// ⬜⬜⬜⬜⬜⬜⬜✅
// ⬜⬜⬜⬜⬜⬜✅✅
// ⬜⬜⬜⬜⬜✅✅✅
// ⬜⬜⬜⬜✅✅✅✅
// ⬜⬜⬜✅✅✅✅✅
// ⬜⬜✅✅✅✅✅✅
// ⬜✅✅✅✅✅✅✅
// ✅✅✅✅✅✅✅✅
console.log("----------------------------------");
