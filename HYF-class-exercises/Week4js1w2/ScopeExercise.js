// With pen and paper write what is logged out.

const global = 'global';
function scopeTest() {
    console.log(functionScope);// undefined functionScope variable
    console.log(global); // global
    const functionScope = 'functionScope';

    function tester() {
        console.log(global); 

        const testerVariable = 'testerVariable';
    }

    tester(); // global
    console.log(testerVariable); // undefined testerVariable
}

scopeTest();
// undefined functionScope variable
// global (from line6)
// global (from line15)
// undefined testerVariable variable