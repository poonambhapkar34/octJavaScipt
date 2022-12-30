function eventFun(data) {
    console.log(data);
    console.log('event',data.value);
   // console.log('event',data.target.value);
}

function blurEveFunction(){
    console.log();
}
function onChangeEventHandlerFun(event) {
    console.log(event.checked);
}
function focusFunction(ele) {
    // console.log(params);
//    var element = document.getElementById('myInput');
//    element.style.backgroundColor = "pink";
    ele.style.backgroundColor = "orange";
}
function blurFunction(params) {
    params.style.backgroundColor = 'yellow'
}
