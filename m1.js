function abc1(params) {
    console.log("abc");
    return 1;
}
export function abc(props) {
    console.dir(this);
    return 1;
}

export default abc1;
