// Immediately Invoked Function Expression  (IIFE)
/*
    sometime we face problems from the GLOBAL SCOPE. so, to remove the
    pollution from global scope of variable and declaration-
    we use IIFE too minimise GLOBAL POLLUTION.
*/

(function ben10() {
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();
//ben10()
( (name) => {
    //Un Named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Henry')