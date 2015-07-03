//EXAMPLE OF AN ASYNCRONOUS FUNCTION


//add outside of the code you want to be async
// example of async prototype


function TestAsync(){
//for control de end of the callback
   thi.initialComplete= false;

}

TestAsync.prototype.async= function (input){


setTimeout(function() {
    //control if its complete the callback
     self.initialComplete=true;
     if( input ){

          //	CODE TO BE EXECUTED



     	return input();
     }

}, 3);   

}





//THIS STAY HERE...

//call to the function and test the results

describe("Example for async", function() {
//create the class
  var variable= new TestAsync;

beforeEach(function(done) {
//call the async function
  TestAsync.async(function(){
  	done();
   });	
 });


 it("must test something", function(done) {
//make expects tests

 /*
  //EXPECTATION
    expect(player.currentlyPlayingSong).toEqual(song);
*/

   done();
 });

it("must do something", function(done) {
    //and so on...
    done();
  });


});


