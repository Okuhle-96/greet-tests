describe ("Greeting Exercise Factory Function", function(){
    describe ("Should be able to greet names entered", function(){
        it('Should greet Okuhle', function(){

            let testingGreet = greetFactoryFunction();

            testingGreet.setName("Okuhle");

            assert.equal('Okuhle',testingGreet.getName());
        })

        it('Should greet Achuma', function(){

            let testingGreet = greetFactoryFunction();

            testingGreet.setName("Achuma");

            assert.equal('Achuma',testingGreet.getName());
        })

        it('Should greet Kamva', function(){

            let testingGreet = greetFactoryFunction();

            testingGreet.setName("Kamva");

            assert.equal('Kamva',testingGreet.getName());
        })

    
    })

    describe ("Should be able to greet in three languages", function(){
        it('Should greet a user in IsiXhosa', function(){
            let testingGreet = greetFactoryFunction();
            assert.equal("Mholo, ",testingGreet.greetIsiXhosa());
        })

        it('Should greet a user in SeSotho', function(){
            let testingGreet = greetFactoryFunction();
            assert.equal('Dumelang, ',testingGreet.greetSesotho());
        })

        it('Should greet a user in Xitsonga', function(){
            let testingGreet = greetFactoryFunction();
            assert.equal('Ahee, ',testingGreet.greetXitsonga());
        })

    })

    describe ("Should be able to count names greeted", function(){
        it('Should increase the counter by one when one name is added', function(){
            let testingGreet = greetFactoryFunction();

            testingGreet.setCounter(('Tsholo'));

            assert.equal(1,testingGreet.getCounter());
        })

        it('Should increase the counter by three when three names sre added', function(){
            let testingGreet = greetFactoryFunction();

            testingGreet.setCounter("Lulu");
            testingGreet.setCounter("Soso");
            testingGreet.setCounter("Mbali");

            assert.equal(3,testingGreet.getCounter());
        })

        it('Should not increase the counter when a name is repeatedly inserted', function(){
            let testingGreet = greetFactoryFunction();

            testingGreet.setCounter("Amanda");
            testingGreet.setCounter("Mbali");
            testingGreet.setCounter("Mbali");
            testingGreet.setCounter("Lulu");
            testingGreet.setCounter("Lulu");
            testingGreet.setCounter("Soso");
            testingGreet.setCounter("Soso");
            testingGreet.setCounter("Soso");
            
            
            

            assert.equal(4,testingGreet.getCounter());
        })


    })

    describe ("Clearing counter", function(){
        it('Should be able reset counter to its preserved state', function(){
            let testingGreet = greetFactoryFunction();

            testingGreet.setCounter("Okuhle");
            testingGreet.setCounter("Achuma");
            testingGreet.setCounter("Khanyisa");

            testingGreet.clearCounter();

            assert.equal(0,testingGreet.getCounter());
        })
       

    }) 

    describe ("Should be able to return errors", function(){
      
           it('Should ask a user to select a language when its not selected', function(){
                let testingGreet = greetFactoryFunction();
                assert.equal('Please select your language!',testingGreet.setLanguage());
            })

        it('Should be able to tell a user if the name has been greeted', function(){
            let testingGreet = greetFactoryFunction();

            testingGreet.setName("Okuhle");
            testingGreet.setName("Okuhle");

            testingGreet.setCounter();

            assert.equal("This name already exists!", testingGreet.setCounter());
        })


    }) 
})
