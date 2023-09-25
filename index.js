// Write your solution in this file!
var customerName = 'bob';

function returnCustomerName (){
    return customerName;
}

function upperCaseCustomerName (){
    if (typeof customerName === 'string'){
        return customerName = customerName.toUpperCase();
    }
}
// Testing the function
 /*var customerName = 'bob';
 console.log (customerName);
 upperCaseCustomerName();
 console.log(customerName);*/

 function setBestCustomer (){
    bestCustomer = 'not bob';
    }
    setBestCustomer()
    console.log(bestCustomer)
 
   var bestCustomer = undefined;

        function overwriteBestCustomer(){
        bestCustomer = 'maybe bob';
    }
    console.log(bestCustomer);
    //overwriteBestCustomer = ('maybe bob');
    console.log(bestCustomer);

    const leastFavoriteCustomer = 'John';
    function changeLeastFavoriteCustomer(newCustomer){
        leastFavoriteCustomer = newCustomer;
    }
    try{
        changeLeastFavoriteCustomer('Dave');
    }
    catch (error){
        console.error(error);
    }

    console.log(leastFavoriteCustomer);