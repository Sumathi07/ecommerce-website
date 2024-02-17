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
    var originalPrice = document.getElementById('originalPrice').value;
    
    console.log("originalPrice ------------> ",originalPrice);
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
    if ( !(flatNumber >=1 && parseInt(flatNumber) <= parseInt(originalPrice)) && val == 'F'){
        console.log("------444444originalPrice444444------flatNumber> ",originalPrice,flatNumber);
        flatSpan.textContent = "Flat value should not exceed the original value!";
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
    // console.log('originalPrice-->',originalPrice+'\n salePrice',document.getElementById('salePrice').value)
    // localStorage.setItem('originalPrice',originalPrice);
    // localStorage.setItem('discountValue',document.getElementById('discountValue').value);
    // localStorage.setItem('salePrice',document.getElementById('salePrice').value);
}
function nextPage(){
    //console.log('11111111');
    document.getElementById('productNameError').style = 'display:none';
    document.getElementById('productDescError').style = 'display:none';
    document.getElementById('productImageError').style = 'display:none';
    document.getElementById('error').style = 'display:none';
    document.getElementById('discountError').style = 'display:none';
    document.getElementById('percentageError').style = 'display:none';
    document.getElementById('flatError').style = 'display:none';
    document.getElementById('maxQuantityError').style = 'display:none';
    
    let span = document.getElementById('error');
        

    var productName = document.getElementById('productName').value;
    var productDesc = document.getElementById('productDesc').value;
    var productImage = document.getElementById('productImage').value;
    var originalPrice = document.getElementById('originalPrice').value;
    var discount = document.getElementById('discount').value;
    var percentage = document.getElementById('percentage').value;
    var flat = document.getElementById('flat').value;
    var discountValue = document.getElementById('discountValue').value;
    var salePrice = document.getElementById('salePrice').value;
    var maxQuantity = document.getElementById('maxQuantity').value;

    if(productName == ''){
        //console.log('22222222222');
        document.getElementById('productNameError').style = 'display:block';
        return false;
    }else if(productDesc == '') {
        //console.log('33333333');
        document.getElementById('productDescError').style = 'display:block';
    }else if(productImage == '') {
        //console.log('4444444444');
        document.getElementById('productImageError').style = 'display:block';
    }else if(originalPrice == '') {
        //console.log('55555555555555');
        span.textContent = "Original price required!";
        document.getElementById('error').style = 'display:block';
    }else if(discount == '') {
        //console.log('666666666666');
        document.getElementById('discountError').style = 'display:block';
    }else if(discount != '') {
        //console.log('7777discount77777',discount,'percentage--',percentage);
        if(discount == 'P' && percentage == '') {
            document.getElementById('percentageError').style = 'display:block';
        }
        else if(discount == 'F' && flat == ''){
            document.getElementById('flatError').style = 'display:block';
        }
        else if(maxQuantity == ''){
            document.getElementById('maxQuantityError').style = 'display:block';
        }
        else{
            localStorage.setItem('productName',productName);
            localStorage.setItem('productDesc',productDesc);
            localStorage.setItem('originalPrice',originalPrice);
            localStorage.setItem('discountValue',discountValue);
            localStorage.setItem('salePrice',salePrice);
            localStorage.setItem('maxQuantity',maxQuantity);

            window.location.href="productinfo.html"
        }
    }
     
    console.log('product details',productName,productDesc,originalPrice,discountValue,salePrice,productImage)
    return true;
    //window.location.href="productinfo.html"
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
    var maxQuantity = parseInt(localStorage.getItem('maxQuantity'));
    

    document.getElementById('errorNumber').style = 'display:none';
    console.log('errorNumber-----------',errorNumber+'  number ------->',number);
    
    if(value == 'P'){
        number = ++number;
        if(number == 0 || number == maxQuantity+1){
            errorNumber.textContent = "Quantity should be between 1 to "+maxQuantity;
            document.getElementById('errorNumber').style = 'display:block';
        }
        else {
            document.getElementById('numberBox').value = number;
            document.getElementById('originalPrice').value = originalPrice + localoriginalPrice;
            document.getElementById('discountValue').value = discountValue + localdiscountValue;
            document.getElementById('salePrice').value = salePrice + localsalePrice;
        }
        console.log('plus inside number ------->',document.getElementById('numberBox').value);
    }
    else if(value == 'M'){
        number = --number;
        if(number == 0 || number == 11){
            errorNumber.textContent = "Quantity should be between 1 to "+maxQuantity;
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

    
    console.log('plus inside number --xxxx----->',document.getElementById('numberBox').value);
    localStorage.setItem('items',document.getElementById('numberBox').value);
    
}
function setValues(){
    console.log('getting storage values----',localStorage.getItem('originalPrice'));
    
    var productName = localStorage.getItem('productName');
    var productDesc = localStorage.getItem('productDesc');
    var originalPrice = localStorage.getItem('originalPrice');
    var discountValue = localStorage.getItem('discountValue');
    var salePrice = localStorage.getItem('salePrice');
    var productImage = localStorage.getItem("productImage");
    let img = document.getElementById('imagePreview');
    var maxQuantity = localStorage.getItem('maxQuantity');
    
    console.log('originalPrice-----product dts------',originalPrice);
    
    // var originalPrice = localStorage.getItem('originalPrice');
    // var discountValue = localStorage.getItem('discountValue');
    // var salePrice = localStorage.getItem('salePrice');

    img.src = productImage;
    document.getElementById('productName').innerHTML = productName;
    document.getElementById('originalPrice').value = originalPrice;
    document.getElementById('discountValue').value = discountValue;
    document.getElementById('salePrice').value = salePrice;
    document.getElementById('maxQuantity').value = maxQuantity;
    
    if(productDesc.length <= 255){
        document.getElementById('desc').innerHTML = productDesc;
    }       
    else{
        console.log('productDesc.substring(0,255)---',productDesc.substring(0,255))
        document.getElementById('desc').innerHTML = productDesc.substring(0,255)+'...';
    }
    

}
function getProductDetails(){
    
    var productName = localStorage.getItem('productName');
    var productDesc = localStorage.getItem('productDesc');
    var localoriginalPrice = localStorage.getItem('localoriginalPrice');
    var localdiscountValue = localStorage.getItem('localdiscountValue');
    var localsalePrice = localStorage.getItem('localsalePrice');
    var productImage = localStorage.getItem("productImage");
    var originalPrice = localStorage.getItem("originalPrice");
    var maxQuantity = localStorage.getItem("maxQuantity");
    var items = localStorage.getItem('items');

    var spanItem = document.getElementById('noofItems').innerHTML;
    console.log("originalPrice----",originalPrice)
    document.getElementById('noofItems').innerHTML = spanItem.replace("{{items}}",items);
    document.getElementById('originalPrice').value = originalPrice;

    
    let img = document.getElementById('imagePreview');
    console.log('no of items-----------',items);
    if(productDesc.length <= 255){
        document.getElementById('desc').innerHTML = productDesc;
    }       
    else{
        console.log('productDesc.substring(0,255)---',productDesc.substring(0,255))
        document.getElementById('desc').innerHTML = productDesc.substring(0,255)+'...';
    }

    console.log(localoriginalPrice+'-----'+localdiscountValue+'----'+localsalePrice)
    img.src = productImage;
    document.getElementById('productName').innerHTML = productName;
    document.getElementById('productPrice').value = localoriginalPrice;
    document.getElementById('discountValue').value = ('- '+localdiscountValue).toString();
    document.getElementById('totalPrice').value = localsalePrice;

}

function validateFileUpload(event){
    console.log("file---------",event.target.files[0]);
    var type = event.target.files[0].type;
    var imageExtention = (type.split('/')[1]).toLowerCase();
    //var filePath = event.target.files[0];
    document.getElementById('productImageError').style = 'display:none';
    
    if(imageExtention == 'gif' || imageExtention == 'png' || imageExtention == 'jpeg' || imageExtention == 'jpg' || imageExtention == 'bmp'){
        document.getElementById('productImageError').style = 'display:none';
        const imgPath = event.target.files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            // convert image file to base64 string and save to localStorage
            console.log('imgPath ----->',reader.result)
            localStorage.setItem("productImage", reader.result);
        }, false);

        if (imgPath) {
            reader.readAsDataURL(imgPath);
        }
    }
    else {
        document.getElementById('productImageError').style = 'display:block';
    }
}
function addMoreProduct() {
    window.location.href="index.html";
}
