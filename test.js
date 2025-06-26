 function appendValue(val) {
      document.getElementById('result').value += val;
    }

    function clearResult() {
      document.getElementById('result').value = '';
    }

    function deleteLast() {
      let res = document.getElementById('result').value;
      document.getElementById('result').value = "";
    }

    function calculate() {
      try {
        let output = eval(document.getElementById('result').value);
        document.getElementById('result').value = output;
      } catch {
        document.getElementById('result').value = 'Error';
      }
    }