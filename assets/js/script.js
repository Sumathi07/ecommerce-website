//document.getElementById('originalPrice').focus();
function validateNumber(){
    document.getElementById('error').style = 'display:none';
    var originalPrice = document.getElementById('originalPrice').value;
    let span = document.getElementById('error');
    if ( originalPrice == ''){
        //console.log("originalPrice ------------> ",originalPrice);
        span.textContent = "Original price required!";
        document.getElementById('error').style = 'display:block';
        return false;
    }
    if ( !( originalPrice >= 1) ){
        // alert("Please only enter numeric characters only for your Age! (Allowed input:1-100)");
        span.textContent = "Please enter only number value";
        document.getElementById('error').style = 'display:block';
        return false;
    }
    return true;
  }
function selectDiscount(event){
    document.getElementById('discountPercentage').style = 'display:none';
    document.getElementById('discountFlat').style = 'display:none';
    document.getElementById('discountValue').value = "";
    document.getElementById('salePrice').value = "";
    console.log("selectDiscount ------------> ",event.target.value);
    discountValue = event.target.value;
    if(discountValue != "" &&  discountValue == 'P'){
        console.log("discountPercentage-------",document.getElementById('discountPercentage'))
        document.getElementById('discountPercentage').style = 'display:block';
    }else if(discountValue != "" &&  discountValue == 'F'){
        document.getElementById('discountFlat').style = 'display:block';
    }

}
function validatePercentageNumber(val) {
    document.getElementById('percentageError').style = 'display:none';
    document.getElementById('flatError').style = 'display:none';
    var percentageNumber = document.getElementById('percentage').value;
    var flatNumber = document.getElementById('flat').value;
    let span = document.getElementById('percentageError');
    let flatSpan = document.getElementById('flatError');
    console.log("val ------------> ",val+'  flatNumber --->',flatNumber);
    if(val == 'P' && percentageNumber == ''){
        console.log("------1111111111111------> ");
        span.textContent = "Percentage required!";
        document.getElementById('percentageError').style = 'display:block';
        return false;
    }
    if(!( percentageNumber >= 1 && percentageNumber <= 100 ) && val == 'P'){
        console.log("------222222222222------> ");
        span.textContent = "Please enter only number value! (Allowed input:1-100)!";
        document.getElementById('percentageError').style = 'display:block';
        return false;
    }
    if(val == 'F' && flatNumber == ''){
        console.log("------333333333333------> ");
        flatSpan.textContent = "Flat required!";
        document.getElementById('flatError').style = 'display:block';
        return false;
    }
    if ( !( flatNumber >= 1) && val == 'F'){
        console.log("------444444444444------> ");
        flatSpan.textContent = "Please enter only number value";
        document.getElementById('flatError').style = 'display:block';
        return false;
    }
    calculateSalePrice(val);
    return true;
}

function calculateSalePrice(val){
    console.log('calculateSalePrice --------',val)
    var originalPrice = document.getElementById('originalPrice').value;
    var percentageNumber = document.getElementById('percentage').value;
    var flatNumber = document.getElementById('flat').value;

    if(val == 'P' && percentageNumber != '' && originalPrice != ''){
        var percentage = ((percentageNumber/ 100) * originalPrice).toFixed(2);
        console.log('discountValue --------',document.getElementById('discountValue').value)
        document.getElementById('discountValue').value = percentage;
        console.log('discountValue ---after-----',document.getElementById('discountValue').value)
        document.getElementById('salePrice').value = originalPrice - percentage;
    }
    if(val == 'F' && flatNumber != '' && originalPrice != ''){
        var flatVal = originalPrice - flatNumber;
        console.log('flatVal --------',flatVal)
        document.getElementById('discountValue').value = flatNumber;
        console.log('discountValue ---after-----',document.getElementById('discountValue').value)
        document.getElementById('salePrice').value = flatVal;
    }
    console.log('originalPrice-->',originalPrice+'\n salePrice',document.getElementById('salePrice').value)
    localStorage.setItem('originalPrice',originalPrice);
    localStorage.setItem('discountValue',document.getElementById('discountValue').value);
    localStorage.setItem('salePrice',document.getElementById('salePrice').value);
}
function nextPage(){
    window.location.href="productinfo.html"
}
function cartPage(){
    window.location.href="cart.html";
    var localoriginalPrice = document.getElementById('originalPrice').value;
    var localdiscountValue = document.getElementById('discountValue').value;
    var localsalePrice = document.getElementById('salePrice').value;
    localStorage.setItem('localoriginalPrice',localoriginalPrice);
    localStorage.setItem('localdiscountValue',localdiscountValue);
    localStorage.setItem('localsalePrice',localsalePrice);
    //console.log(localoriginalPrice+'-----'+localdiscountValue+'----'+localsalePrice)
}
function addMore(value) {
    
    var number = parseInt(document.getElementById('numberBox').value);
    var errorNumber = document.getElementById('errorNumber');
    var originalPrice = parseInt(document.getElementById('originalPrice').value);
    var discountValue = parseInt(document.getElementById('discountValue').value);
    var salePrice = parseInt(document.getElementById('salePrice').value);
    var localoriginalPrice = parseInt(parseInt(localStorage.getItem('originalPrice')));
    var localdiscountValue = parseInt(localStorage.getItem('discountValue'));
    var localsalePrice = parseInt(localStorage.getItem('salePrice'));
    

    document.getElementById('errorNumber').style = 'display:none';
    console.log('errorNumber-----------',errorNumber+'  number ------->',number);
    
    if(value == 'P'){
        number = ++number;
        if(number == 0 || number == 11){
            errorNumber.textContent = "Quantity should be between 1 to 10";
            document.getElementById('errorNumber').style = 'display:block';
        }
        else {
            document.getElementById('numberBox').value = number;
            document.getElementById('originalPrice').value = originalPrice + localoriginalPrice;
            document.getElementById('discountValue').value = discountValue + localdiscountValue;
            document.getElementById('salePrice').value = salePrice + localsalePrice;
        }
        //console.log('plus inside number ------->',++number);
    }
    else if(value == 'M'){
        number = --number;
        if(number == 0 || number == 11){
            errorNumber.textContent = "Quantity should be between 1 to 10";
            document.getElementById('errorNumber').style = 'display:block';
        }
        else {
            document.getElementById('numberBox').value = number;
            document.getElementById('originalPrice').value = originalPrice - localoriginalPrice;
            document.getElementById('discountValue').value = discountValue - localdiscountValue;
            document.getElementById('salePrice').value = salePrice - localsalePrice;
        }
        console.log('minus inside number ------->',document.getElementById('numberBox').value);
    }

    

    
}
function setValues(){
    console.log('getting storage values----',localStorage.getItem('originalPrice'));
    var originalPrice = localStorage.getItem('originalPrice');
    var discountValue = localStorage.getItem('discountValue');
    var salePrice = localStorage.getItem('salePrice');
    document.getElementById('originalPrice').value = originalPrice;
    document.getElementById('discountValue').value = discountValue;
    document.getElementById('salePrice').value = salePrice;
}
function getProductDetails(){
    var localoriginalPrice = localStorage.getItem('localoriginalPrice');
    var localdiscountValue = localStorage.getItem('localdiscountValue');
    var localsalePrice = localStorage.getItem('localsalePrice');
    console.log(localoriginalPrice+'-----'+localdiscountValue+'----'+localsalePrice)
    document.getElementById('productPrice').value = localoriginalPrice;
    document.getElementById('discountValue').value = ('- '+localdiscountValue).toString();
    document.getElementById('totalPrice').value = localsalePrice;
}
