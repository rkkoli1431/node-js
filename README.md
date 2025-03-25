# Session => 3 Module :- 

# Module IMP
        => Module Protected By their variables and function from leaking
        => Module access the explicitylly imporated Import 
                Ex- module.exports  = {x, calculateSum};
                import Ex- const calculateSum = requier("./sum.js");
        => Destructure On The Fly Export Ex- 
                const {x, calculateSum} = require("./sum.js");

# Types Of Module
1  - Comman Js Module (cjs)
        => module.exports require()
        => by default used node js module
        => older way
        => synchronization  
        => non strict mode  (ex:- z="hello word");

2   - ES Module (mjs)
        => import, export
        => by default used it Recat, Anguler, 
        => new Way
        => async
        => strick mode