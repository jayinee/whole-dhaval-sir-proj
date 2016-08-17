/**
 * Created by shadh01 on 05-08-2016.
 */
(function(window){
    var utilities = {};
    var res='';
    utilities.by = function(list,index,fName) {
        var arr = list.split(',');
        var starIndex = index -1;
        var endIndex = arr.length;
        var st=parseInt(index);
        var rl = endIndex+1;
        //alert(starIndex+"-"+endIndex+"-"+st);
        fName = log;
        res='';
        for(var i=starIndex;i<endIndex;i+=st){
            if(arr[i] <= rl)
            fName(arr[i]);
        }
        document.getElementById("resultValues").innerHTML = res.substr(0,res.length - 1);
        return true;
    };
    window.by = utilities.by;

    function log(gValue) {
        res += gValue + ',';
    }

    utilities.keys = function(userInput) {
        var arr = userInput.split(',');
        res ='';
        for(var i=0;i<arr.length;i++){
            var arrSecond = arr[i].split(':');
            res += "\""+ arrSecond[0] + "\"" + ',';
        }
        document.getElementById("resultValues").innerHTML = res.substr(0,res.length-1);
        return true;
    };
    window.keys = utilities.keys;

    utilities.values = function(userInput) {
        var arr = userInput.split(',');
        res ='';
        for(var i=0;i<arr.length;i++){
            var arrSecond = arr[i].split(':');
            res += arrSecond[1] + ',';
        }
        document.getElementById("resultValues").innerHTML = res.substr(0,res.length-1);
        return true;
    };
    window.values = utilities.values;

    utilities.pairs = function(userInput) {
        var arr = userInput.split(',');
        res ='';
        for(var i=0;i<arr.length;i++){
            var arrSecond = arr[i].split(':');
            res += "\""+ arrSecond[0] + "\"" + ',' + arrSecond[1] + ',';
        }
        document.getElementById("resultValues").innerHTML = res.substr(0,res.length-1);
        return true;
    };
    window.pairs = utilities.pairs;

    utilities.shuffle = function(userInput) {
        var a = userInput.split(',');
        var n = a.length;
        var b = a;
        for(var i = n -1 ; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        for(var i=0;i<b.length;i++){
            var find  = false;
            for(var j=0;j<a.length;j++){
                if(b[i] == a[j]){
                    find = true;
                    break;
                }
             if(!find){
                 a[n] = b[i];
                 break;
             }
          }
        }
        res = a.join(",");
        document.getElementById("resultValues").innerHTML = res.substr(0,res.length-2);
        return true;
    };
    window.shuffle = utilities.shuffle;

    utilities.pluralize = function(userInput) {
        var a = userInput.split(',');
        res = '';
        var no =  parseInt(a[0]);
        var argno = a.length;
        if(no===1) res = a[1];
        if(no != 1){
            if(argno > 2){
                res = a[2];
            }
            else{
                var firInd = a[1].indexOf('"');
                var lstInd = a[1].lastIndexOf('"');
                if(firInd != lstInd){
                  res =  a[1].substr(0,lstInd) + 's' + a[1].substr(lstInd);
                }
                else
                    res = a[1].concat('s');
            }
        }
        document.getElementById("resultValues").innerHTML = res;
        return true;
    };
    window.pluralize = utilities.pluralize;

    utilities.toDash = function(userInput) {
        res = '';
        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L',
                   'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

        for(var i=0;i<userInput.length;i++){
            if(arr.indexOf(userInput[i])>=0)
                res += '-' + userInput[i].toLowerCase();
            else
                res += userInput[i];
        }
        document.getElementById("resultValues").innerHTML = res;
        return true;
    };
    window.toDash = utilities.toDash;

    utilities.toCamel = function(userInput) {
        res = '';
        for(var i=0;i<userInput.length;i++){
            if(userInput[i] == '-'){
                res += userInput[i+1].toUpperCase();
                i++;
            }
            else
                res += userInput[i];
        }
        document.getElementById("resultValues").innerHTML = res;
        return true;
    };
    window.toCamel = utilities.toCamel;

    utilities.has = function(userInput,searchValue) {
        res = false
        searchValue = searchValue.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        res = userInput.match(new RegExp("\\b"+searchValue+"\\b", "i")) != null;
        // if(userInput.search(searchValue) >= 0 )
        //    res = true;
        document.getElementById("resultValues").innerHTML = res;
        return res;
    };
    window.has = utilities.has;

    utilities.pick = function(userInput,searchValue) {
        res = '';
        var inArr = userInput.split(',');
        var serArr = searchValue.split(',');
        for(var i=0;i<serArr.length;i++){
            var find = false;
            for(var j=0;j<inArr.length;j++){
                var inArr1 = inArr[j].split(":");
                if(serArr[i].trim().replace(/ +/g, " ")==inArr1[0].trim().replace(/ +/g, " ")){
                    res += inArr[j] + ',';
                }
            }

        }
        document.getElementById("resultValues").innerHTML = res.substr(0,res.length - 1);
        return res;
    };
    window.pick = utilities.pick;

})(window);
