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
# require  ("/path) module and work the excution in node js 
        1- Resolving the module
          -> ./localpath
          -> .json 
        2- Loading the module
          -> file content in loades
          -> access the file type

        3- Wrap inside the IIFE
        
        4- Evaluvation
          -> module.exports

        5- Caching 

# MangoDB 
        - Go to mangodb website 
        - Create a free M0 cluster
        - Create a user
        - Get the connection string 
        - Install Mango DB Compass   :- is software to help us to create database 
        - Create a database
        - Install mangodb packages
        - Create a connection from code
        - Document CRUD - Create, Read, Update, Delete