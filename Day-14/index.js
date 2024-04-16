var userUrlWindow;
var statusIntervalId;

function openNewWindow(){
    var url = document.getElementById("userUrlInput").value;
    if(url){
        userUrlWindow = window.open(url,"_blank");
        setTimeout(function (){
          if(userUrlWindow){
            userUrlWindow.close();
            userUrlWindow = null;
          }else{
            appendAlert("No window is currently open","sucess")
          }
        },300000);
    }else{
        appendAlert("Please Enter Url","success");
    }
}
function closeWindow(){
  if(userUrlWindow){
    userUrlWindow.close();
    userUrlWindow = null;
  }else{
    appendAlert('No window is currently open')
}

}
function checkWinStatus(){
    if(userUrlWindow && !userUrlWindow.closed){
      appendAlert('The Window is still open')
    }else{
      appendAlert('The Window is closed')
  }
  
  }
  function startStatusCheck(){
    statusIntervalId = setInterval(function (){
      if(userUrlWindow && !userUrlWindow.closed){
        appendAlert("checked: the window is still open","success");
      }
      else{
        appendAlert("checked: the window is closed or was never opened!","sucess");
      }
    })
  }

  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}

