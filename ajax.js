(function(output) {
  var createXHR = function() {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {
      return new window.ActiveXObject("Microsoft.XMLHTTP");
    }
  }

  var ajax = output.ajax = function(config) {
    config.type = (config.type || 'GET').toUpperCase()

    var xhr = createXHR();

    xhr.open(config.type, config.url, true);

    if (config.type === 'POST') {
      xhr.setRequestHeader("Content-Type", config.contentType || "application/x-www-form-urlencoded");
    }

    xhr.send(config.data || null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        config.onSuccess && config.onSuccess(xhr.responseText)
      }
    }
  }
})(this)
