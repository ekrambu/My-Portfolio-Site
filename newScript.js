
/* Calculator Scripting */

    var additionBtn = document.getElementById('addition');
        additionBtn.onclick = function() {
            var firstNumberValue = Number(document.getElementById('firstNumber').value);
            var lastNumberValue = Number(document.getElementById('lastNumber').value);
            var result = firstNumberValue + lastNumberValue;
            document.getElementById('result').value = result;

    };

    var submitionBtn = document.getElementById('submition');
        submitionBtn.onclick = function(){
          var firstNumberValue = Number(document.getElementById('firstNumber').value);
          var lastNumberValue = Number(document.getElementById('lastNumber').value);
          var result = firstNumberValue - lastNumberValue;
          document.getElementById('result').value = result;
    };

    var multiplicationBtn = document.getElementById('multiplication');
        multiplicationBtn.onclick = function () {
            var firstNumberValue = Number(document.getElementById('firstNumber').value);
            var lastNumberValue = Number(document.getElementById('lastNumber').value);
            var result = firstNumberValue * lastNumberValue;
            document.getElementById('result').value = result ;
    };

    var divisionBtn = document.getElementById('division');
        divisionBtn.onclick = function () {
          var firstNumberValue = Number(document.getElementById('firstNumber').value);
          var lastNumberValue = Number(document.getElementById('lastNumber').value);
          var result = firstNumberValue / lastNumberValue ;
          document.getElementById('result').value = result ;
    };

    var modulasBtn = document.getElementById('modulas');
        modulas.onclick = function(){
          var firstNumberValue = Number(document.getElementById('firstNumber').value);
          var lastNumberValue = Number(document.getElementById('lastNumber').value);
          var result = firstNumberValue % lastNumberValue ;
          document.getElementById('result').value = result ;
    };

















































