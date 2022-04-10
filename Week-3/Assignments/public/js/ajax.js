function showAns() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("ans").innerHTML = xhr.responseText;
      }
    };

    var inputInteger = document.getElementById("input-integer").value
    var url = "/data";
    if (inputInteger.length !== 0) {
      url = url.concat('?number=', inputInteger)
      xhr.open("GET", url);
      xhr.send();
    }
  }