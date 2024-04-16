// call backhell function

function countdown(num, callback) {
    setTimeout(function() {
      if (num > 0) {
        document.querySelector('.countdown').textContent = num;
        countdown(num - 1, callback);
      } else {
        callback();
      }
    }, 1000);
  }
  
  countdown(10, function() {
    document.querySelector('.countdown').style.display = 'none';
    document.querySelector('.message').style.display = 'block';
  });
