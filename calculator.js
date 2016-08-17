
        var mValue;

function clearKey(val)
{
    document.getElementById("display").value=val;
}
function memoryKey(){
    if(document.getElementById("display").value.length > 0){
        mValue = document.getElementById("display").value;
    }
}
function memoryClearKey(){
    mValue = '';
    document.getElementById("display").value='';
}
function memoryReturnKey(){
    if(mValue.length > 0){
        var ex = document.getElementById("display").value;
        if(ex.indexOf('+') > 0 || ex.indexOf('-') > 0 || ex.indexOf('*') > 0 || ex.indexOf('/') > 0){
            document.getElementById("display").value = ex + mValue;
        }
        else
            document.getElementById("display").value = mValue;
    }

}
function deleteKey() {
    var cv = document.getElementById("display").value;
    cv = cv.substr(0,cv.length-1);
    document.getElementById("display").value = cv;
}
function doKey(val)
{
    if(document.getElementById("display").value.length > 18) return;
    document.getElementById("display").value+=val;
}
function dotKey(val)
{
    if(document.getElementById("display").value.length > 18) return;
    var currentValue = document.getElementById("display").value;
    var countOpt = 0;
    //loop through the word
    for (var i = 0; i < currentValue.length; i++) {
        if (currentValue[i] == '+' || currentValue[i] == '-' || currentValue[i] == '/' || currentValue[i] == '*') {
            countOpt++;
        }
    }
    var count=0;
    for (var i = 0; i < currentValue.length; i++) {
        if (currentValue[i] == '.') {
            count++;
        }
    }
    if(count>countOpt)retun;
    document.getElementById("display").value+=val;
}
function equalKey()
{
    try
    {
        clearKey(eval(document.getElementById("display").value))
    }
    catch(e)
    {
        clearKey('Error')
    }
}
