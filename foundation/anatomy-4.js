// IIFE - Immediately Invoked Function Expression
(function (a, b, c) {
    console.log(`Return ${a + b + c}`)
})(1, 3, 7);

(() => {
    console.log('1')
})();

(() => console.log('Arrow 2'))();