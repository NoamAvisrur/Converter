function fetchCurrency(current, converted){
    fetch('http://api.fixer.io/latest?base=' + current + '&' + 'symbols=' + converted)  
    .then(function(response) {  
        response.json().then(function(data) {  
            calcCurenncyConvertion(data.rates[converted]);
        }); 
    });  
};

function getRecuestedForm(url){
    fetch(url)
    .then(function(response) { 
        response.text().then(function(data){
            document.querySelector('form').innerHTML = data;
        })     
    });
}

function calcCurenncyConvertion (currency){
    amount = document.querySelector('input[type="text"]').value;
    var result = amount * currency;
    buildCurenncyResult(result);
}

function buildCurenncyResult(result){
    document.querySelector('#show_result').innerHTML = "";
    var resultSpan = document.createElement('span');
    resultSpan.textContent = result.toFixed(2);
    resultSpan.classList.add('result');
    document.querySelector('#show_result').appendChild(resultSpan);
}

function buildWeightLengthResult(current, converted, amount, type){
    document.querySelector('#show_result').innerHTML = "";
    if (type === "Weight"){
        result = Weight[current][converted](amount);
    }else{
        result = Length[current][converted](amount);
    }    
    var resultSpan = document.createElement('span');
    resultSpan.textContent = result.toFixed(3);
    resultSpan.classList.add('result');
    document.querySelector('#show_result').appendChild(resultSpan);
}
  
function changeConvertionType (selector, color, url){
    document.querySelector(selector).addEventListener("click", function(e){
        if(document.querySelector('#show_result')){
            document.querySelector('#show_result').innerHTML = "";
        }
        document.querySelector('form').innerHTML = "";
        getRecuestedForm(url);    
        document.querySelector('.result_header').style.backgroundColor = color;
    });    
};

changeConvertionType('#currency','#4abdac', 'view/currency_form.html');
changeConvertionType('#weight', '#fc4a1a', 'view/weight_form.html');
changeConvertionType('#length','#f7b733', 'view/length_form.html');

document.querySelector('form').addEventListener("submit", function(e){
    e.preventDefault();
    if (document.querySelector('input[type="hidden"]').value === "currency"){  
        var current = (document.querySelector('select[name="current"]').value);
        var converted = (document.querySelector('select[name="converted"]').value);
        if (current != converted){
            fetchCurrency(current, converted);
        }
    }else{    
        var current = (document.querySelector('select[name="current"]').value);
        var converted = (document.querySelector('select[name="converted"]').value);
        var amount = (document.querySelector('input[type="text"]').value);
        var type = (document.querySelector('input[type="hidden"]').value);
        if (current != converted){
        buildWeightLengthResult(current, converted, amount, type);
        }    
    }
});




