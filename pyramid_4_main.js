const MyClass = (function (/*not needed*/) {
    let config = {
        row_count: 5,
        col_count: this.row_count,
        bg: "⬜",
        ink: "✅",
        row_index: 1,
        col_index: 1,
        row_op: "",
    };

    const sayHi = () => {
        console.log("Hi........!");
    };
    sayHi();
    const setSize = (size = 2) => {
        config.row_count = size;
        // return this;
    };
    sayHi();
    let render = (frame) => {
        // console.log("1➖➖➖➖➖➖➖➖➖➖");
        // console.log("this :", this);
        console.log("config :", config);
        for (config.row_index = 1; config.row_index <= config.row_count; config.row_index++) {
            // console.log("2 ➖➖➖➖➖➖➖➖➖➖", row_index);
            for (config.col_index = 1; config.col_index <= config.row_count; config.col_index++) {
                // console.log("5  ➖➖➖➖➖➖➖➖➖➖", col_index);
                if (frame) {
                    if (frame(config)) {
                        // console.log("6   ➖➖➖➖ ", row_index, col_index);
                        config.row_op += config.ink;
                    } else {
                        // console.log("7   ➖➖➖➖ ", row_index, col_index);
                        config.row_op += config.bg;
                    }
                } else {
                    config.row_op += config.bg;
                }
            }
            console.log(config.row_op);
            config.row_op = "";
        }
    };
    return {
        setSize: setSize,
        render: render,
    };
})(/*not needed*/);

let config = {};
// MyClass.fun1(config);
MyClass.render();
MyClass.setSize(4);
MyClass.render((cnvs) => {
    return cnvs.col_index > cnvs.row_count - cnvs.row_index;
});
// MyClass.fun2(config);
