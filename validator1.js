/**
 * Created by shadh01 on 27-07-2016.
 */
(function(window){
    var validator = {};
    /* To validate Email Address*/
    validator.isEmailAddress = function(emailToTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '';
            if (!emailToTest) {
                document.getElementById("resultValues").innerHTML = "Missing email address";
                error =  "Missing email address";
            }
            else{
                if(emailToTest.indexOf("@") < 1) {
                    document.getElementById("resultValues").innerHTML = "Missing @ in given value";
                    error += " Missing @ in given value";
                }
                if((emailToTest.match(/@/g)||[]).length > 1){
                    document.getElementById("resultValues").innerHTML = "Multiple @ in given value";
                    error += " Multiple @ in given value";
                }
                if(emailToTest.indexOf(".") < 1) {
                    document.getElementById("resultValues").innerHTML = "Missing . in given value";
                    error += " Missing . in given value";
                }
                var lc = emailToTest.length - 1;
                if(emailToTest[lc] === '@'){
                    document.getElementById("resultValues").innerHTML = "Given value NOT end with @";
                    error += " Given value NOT end with @";
                }
                if(emailToTest[lc] === '.'){
                    document.getElementById("resultValues").innerHTML = "Given value NOT end with .";
                    error += " Given value NOT end with .";
                }
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = "Valid Email address";
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isEmailAddress = validator.isEmailAddress;

    /* To validate Indian Phone number*/
    validator.isPhoneNumber = function(numberToTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '';
            if (!numberToTest) {
                document.getElementById("resultValues").innerHTML = "Missing phone number";
                error =  "Missing phone number";
            }
            else{
               if(isNaN(numberToTest)){
                   error = "Given value is not a number";

               }
                else{
                    if(numberToTest.indexOf(".") >= 0){
                        error = "Given value is not whole number";
                    }
                   else{
                        var nl = numberToTest.length ;
                        if(nl == 3 || nl == 4 || nl == 10 || nl == 11 || nl == 12)
                            document.getElementById("resultValues").innerHTML = "Valid Indian phone number";
                        else
                            error = "Length of Service Number:3 or 4, Toll Free:10, Land line: 10 or 11 & Mobile:10,11 or 12";
                    }
               }
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isPhoneNumber = validator.isPhoneNumber;

    /* Remove all symbols from input except [a-z],[A-Z],[0,9],' '*/
    validator.withoutSymbols = function(inputTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', res ='';
            
            if (!inputTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
               var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                          't','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L',
                          'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5',
                          '6','7','8','9','0',' '];
                
                for(var i=0;i<inputTest.length;i++){
                    if(arr.indexOf(inputTest[i])>=0)
                        res += inputTest[i];
                }
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.withoutSymbols = validator.withoutSymbols;

    /*To validate Date*/
    validator.isDate = function(inputTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', res ='';

            if (!inputTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                /*
                var timestamp=Date.parse(inputTest);
                if (isNaN(timestamp)==false){
                    res=new Date(timestamp);
                }
                else{
                       error = "Given value is no a DATE"                 
                }
                */
               res = new Date(inputTest);
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isDate = validator.isDate;

    validator.isBeforeDate = function(inputTest,refTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', d1 ='',d2='',res='';

            if (!inputTest || !refTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                d1 = new Date(inputTest);
                d2 = new Date(refTest);
                if(d2>d1)
                 res = "First Date is before Second Date";
                else
                 res = "Second Date is before First Date";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isBeforeDate = validator.isBeforeDate;

    validator.isAfterDate = function(inputTest,refTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', d1 ='',d2='',res='';

            if (!inputTest || !refTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                d1 = new Date(inputTest);
                d2 = new Date(refTest);
                if(d1>d2)
                    res = "First Date is after Second Date";
                else
                    res = "Second Date is after First Date";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isAfterDate = validator.isAfterDate;

    validator.isBeforeToday = function(inputTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', d1 ='',d2='',res='';

            if (!inputTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                d1 = new Date(inputTest);
                d2 = new Date();
                if(d1>d2)
                    res = "Today is before Given Date";
                else
                    res = "Given Date is before today";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isBeforeToday = validator.isBeforeToday;

    validator.isAfterToday = function(inputTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', d1 ='',d2='',res='';

            if (!inputTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                d1 = new Date(inputTest);
                d2 = new Date();
                if(d1>d2)
                    res = "Given Date is after Today";
                else
                    res = "Today is after given date";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isAfterToday = validator.isAfterToday;

    validator.isEmpty = function(inputTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '',res='';

            if (!inputTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
               res = inputTest;
               var find = false;
               for(var i=0;i<inputTest.length;i++){
                    if(inputTest[i] != ' '){
                        find = true;
                        break;
                    }
                }
                if(!find)   error = "Missing value";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isEmpty = validator.isEmpty;

    validator.Contains = function(inputTest,refTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', res='';
            if (!inputTest || !refTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                refTest.toLowerCase();
                inputTest.toLowerCase();
                var arr = refTest.split(',');
                var arr2 = inputTest.split(" ");
                var find = false;
                res = "Words:"
                for(var i = 0 ; i<arr.length;i++){
                    for(var j=0;j<arr2.length;j++){
                        if(arr[i] === arr2[j]){
                            find = true;
                            res += arr[i] + ",";
                        }
                    }
                }
                if(find) res += " found in string";
                else
                     res = "Given word not found in string";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.Contains = validator.Contains;

    validator.Lacks = function(inputTest,refTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '',res='';
            if (!inputTest || !refTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                var arr = refTest.split(',');
                var arr2 = inputTest.split(" ");
                var find;
                res = "Words:"
                for(var i = 0 ; i<arr.length;i++){
                    find = false;
                    for(var j=0;j<arr2.length;j++){
                        if(arr[i] === arr2[j]){
                            find = true;
                        }
                    }
                    if(!find) res += arr[i] + ",";
                }
                if(res.length>6) res += " NOT found in string";
                else
                    res = "All given word found in string";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.Lacks = validator.Lacks;

    validator.isComposedOf = function(inputTest,refTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '',res='';
            if (!inputTest || !refTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                inputTest = inputTest.toLowerCase();
                refTest = refTest.toLowerCase();
                var arr = refTest.split(',');
                var arr2 = inputTest.split(" ");
                var find;
                if(arr2.length > 1){
                    alert(arr2.length);
                    for(var i = 0 ; i<arr2.length;i++){
                        find = false;
                        for(var j=0;j<arr.length;j++){
                            if(arr[j] === arr2[i]){
                                find = true;
                            }
                        }
                        if(!find) break;
                    }

                }
                else{
                    for(var i=0;i<arr2.length;i++){

                    }
                }
                if(find) res = " Composed-YES";
                else
                    res = "Composed-NO";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isComposedOf = validator.isComposedOf;

    validator.isLength = function(inputTest,refTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', res='';
            if (!inputTest || !refTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                var first = inputTest.length;
                if(isNaN(refTest)) error = "Given reference value is not a NUMBER";
                if(first > refTest) res = " Length of given string is greater than ref value";
                else
                    res = "Length of ref value is greater than length of given string";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isLength = validator.isLength;

    validator.isOfLength = function(inputTest,refTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', res='';
            if (!inputTest || !refTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                var first = inputTest.length;
                if(isNaN(refTest)) error = "Given reference value is not a NUMBER";
                if(first > refTest) res = " Length of given string is greater than ref value";
                else
                    res = "Length of ref value is greater than length of given string";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isOfLength = validator.isOfLength;

    validator.countWords = function(inputTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '',res='';

            if (!inputTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                inputTest = inputTest.split(' ').join('-');
                inputTest = inputTest.split(',').join('-');
                var arr = inputTest.split("-");
                res = "Total Words:" + arr.length;
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.countWords = validator.countWords;

    validator.lessWordsThan = function(inputTest,refTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '',res='';

            if (!inputTest || !refTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                inputTest = inputTest.split(' ').join('-');
                inputTest = inputTest.split(',').join('-');
                if(isNaN(refTest)) error = "Given reference value is not a NUMBER";
                var arr = inputTest.split("-");
                if(arr.length < refTest)
                    res = arr.length + " Words" + " in given string is less than reference value " + refTest;
                else
                    res = "Reference value " + refTest + " is less than no of words in given string " + arr.length;
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.lessWordsThan = validator.lessWordsThan;

    validator.moreWordsThan = function(inputTest,refTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '',res='';

            if (!inputTest || !refTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                inputTest = inputTest.split(' ').join('-');
                inputTest = inputTest.split(',').join('-');
                if(isNaN(refTest)) error = "Given reference value is not a NUMBER";
                var arr = inputTest.split("-");
                if(arr.length > refTest)
                    res = arr.length + " Words" + " in given string is more than reference value " + refTest;
                else
                    res = "Reference value " + refTest + " is more than no of words in given string " + arr.length;
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.moreWordsThan = validator.moreWordsThan;

    validator.isBetween = function(inputTest,refFloor,refCeil) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '',res='';

            if (!inputTest || !refFloor || !refCeil) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                inputTest = inputTest.split(' ').join('-');
                inputTest = inputTest.split(',').join('-');
                if(isNaN(refFloor)) error = "Given reference value is not a NUMBER";
                if(isNaN(refCeil)) error = "Given reference value is not a NUMBER";
                if(refFloor > refCeil) error = "Ceiling value is less than floor value";
                var arr = inputTest.split("-");
                if(arr.length >= refFloor && arr.length <= refCeil)
                    res = "No of words "+ arr.length + " in given string is between given range" ;
                else
                    res = "No of words " + arr.length + " in given string is NOT between given range" ;
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isBetween = validator.isBetween;

    validator.isAlphanumeric = function(inputTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', res ='';

            if (!inputTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                var arr = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                            't','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L',
                            'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5',
                            '6','7','8','9','0',' '];

                var find = false;
                for(var i=0;i<inputTest.length;i++){
                    if(arr.indexOf(inputTest[i])=== -1)
                        find = true;
                }
                if(find)
                    res = "Given string contains special characters";
                else
                    res = "Given string DOES NOT contains special characters";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isAlphanumeric = validator.isAlphanumeric;

    validator.isCreditCard = function(inputTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', res ='';

            if (!inputTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                var arr = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                    't','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L',
                    'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5',
                    '6','7','8','9','0'];
                if(inputTest.length === 16){
                    var find = false;
                    for(var i=0;i<inputTest.length;i++){
                        if(arr.indexOf(inputTest[i])=== -1)
                            find = true;
                    }
                    if(find)
                        res = "Given no is NOT a valid credit card number";
                    else
                        res = "Given no is a valid Credit card number";
                }
                else if(inputTest.length===19){
                    var find = false;
                    var splitValue = inputTest.split('-');
                    for(var i=0;i<splitValue.length;i++){
                        if(splitValue[i].length !== 4){
                            find = true;
                        }
                    }
                    if(splitValue.length === 4 && !find){
                        for(var i=0;i<splitValue.length;i++){
                            for(var j=0;j<splitValue[i].length;j++){
                                if(arr.indexOf(inputTest[i])=== -1)
                                    find = true;
                            }
                          }
                    }
                    else{
                        find = true;
                    }
                    if(!find)
                        res = "Given no is a valid credit card number";
                    else
                        res = "Given no is NOT a valid Credit card number";
                }
                else
                res ="Given no is NOT a valid Credit card number";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isCreditCard = validator.isCreditCard;

    validator.isHex = function(inputTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', res ='';

            if (!inputTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                var arr = [ 'a','b','c','d','e','f','A','B','C','D','E','F','1','2','3','4','5',
                            '6','7','8','9','0'];
                if(inputTest.length <= 7 && inputTest.length >= 4){
                    var find = false;
                    var countHash = 0;
                    var hashLoca = 0;

                    for(var i=0;i<inputTest.length;i++){
                        if(inputTest[i]==='#')
                        {
                            countHash++;
                            hashLoca = i;
                        }
                    }
                    if(countHash != 1 || hashLoca != 0)
                        res = "Given Hexa code is NOT valid";
                    else{
                        for(var i=1;i<inputTest.length;i++){
                            if(arr.indexOf(inputTest[i])=== -1)
                                find = true;
                        }
                        if(!find)
                            res = "Given Hexa code is valid";
                        else
                            res = "Given Hexa code is NOT valid";
                    }
                }
                else
                    res ="Given Hexa code is NOT valid";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
        finally {
            return res;
        }
    };
    window.isHex = validator.isHex;

    validator.isRGB = function(inputTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', res ='';

            if (!inputTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
               var startString = inputTest.substr(0,4);
                if(startString === 'rgb('){
                    var countOp = 0,countCl =0,countCom=0;
                    for(var i=0;i<inputTest.length;i++){
                        if(inputTest[i]=='(') countOp++;
                        if(inputTest[i]==')') countCl++;
                        if(inputTest[i]==',') countCom++;
                    }
                    if(countOp == 1 && countCl== 1 && countCom == 2){
                        var firstIn = inputTest.indexOf('(');
                        var lastIn = inputTest.indexOf(')');
                        var start = firstIn + 1;
                        var total = lastIn - start;
                        var numberList = inputTest.substr(start,total);
                        var finalList = numberList.split(',');
                        if(finalList.length == 3){
                            var find = false;
                            for(var i=0;i<finalList.length;i++){
                                if(isNaN(finalList[i])){
                                    find = true;
                                    break;
                                }
                                else{
                                    if(finalList[i]<0 || finalList[i]> 255){
                                        find = true;
                                        break;
                                    }
                                }
                            }
                            if(find)
                                res = "Valid format for input is rgb(0-255,0-255,0-255)";
                            else
                                res = "Valid value";
                        }
                        else
                            res = "Valid format for input is rgb(0-255,0-255,0-255)";
                    }
                    else
                        res = "Valid format for input is rgb(0-255,0-255,0-255)";
                }
                else
                    res ="Must start with rgb(";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
        finally {
            return res;
        }
    };
    window.isRGB = validator.isRGB;

    validator.isHSL = function(inputTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', res ='';

            if (!inputTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                var startString = inputTest.substr(0,4);
                if(startString === 'hsl('){
                    var countOp = 0,countCl =0,countCom=0;
                    for(var i=0;i<inputTest.length;i++){
                        if(inputTest[i]=='(') countOp++;
                        if(inputTest[i]==')') countCl++;
                        if(inputTest[i]==',') countCom++;
                    }
                    if(countOp == 1 && countCl== 1 && countCom == 2){
                        var firstIn = inputTest.indexOf('(');
                        var lastIn = inputTest.indexOf(')');
                        var start = firstIn + 1;
                        var total = lastIn - start;
                        var numberList = inputTest.substr(start,total);
                        var finalList = numberList.split(',');
                        if(finalList.length == 3){
                            var find = false;
                            for(var i=0;i<finalList.length;i++){
                                if(isNaN(finalList[i])){
                                    find = true;
                                    break;
                                }
                                else{
                                    var ul = i == 0 ? 360 : 1;
                                    if(finalList[i]<0 || finalList[i]> ul){
                                        find = true;
                                        break;
                                    }
                                }
                            }
                            if(find)
                                res = "Valid format for input is hsl(0-360,0-1,0-1)";
                            else
                                res = "Valid value";
                        }
                        else
                            res = "Valid format for input is hsl(0-360,0-1,0-1)";
                    }
                    else
                        res = "Valid format for input is hsl(0-360,0-1,0-1)";
                }
                else
                    res ="Must start with hsl(";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
        finally {
            return res;
        }
    };
    window.isHSL = validator.isHSL;

    validator.isColor = function(inputTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '', res ='';

            if (!inputTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                var startString = inputTest.substr(0,4);
                if(inputTest[0]==='#'){
                    res = isHex(inputTest);
                }
                else if(startString === 'hsl('){
                    res = isHSL(inputTest);
                }
                else if(startString === 'rgb('){
                    res = isRGB(inputTest);
                }
                else
                    res ="Must start with either hsl( or rgb( or #";
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isColor = validator.isColor;

    validator.isTrimmed = function(inputTest) {
        try {
            document.getElementById("resultValues").innerHTML = "";
            var error = '',res='';

            if (!inputTest) {
                document.getElementById("resultValues").innerHTML = "Missing value";
                error =  "Missing value";
            }
            else{
                inputTest = inputTest.split(' ').join('-');
                inputTest = inputTest.split(',').join('-');
                var arr = inputTest.split("-");
                if(arr[0].trim().length == 0){
                    res = "Has Leading space";
                }
                else if(arr[arr.length-1].trim().length == 0){
                    res = "Has Trailing space";
                }
                else{
                      var find = false;
                      for(var i=0;i<arr.length;i++){
                           if(arr[i].trim().length == 0 ){
                               find =true;
                               break;
                            }
                        }
                        if(find)
                            res = 'More than one spaces between two words';
                        else
                            res = "Valid-No leading & trailing space";
                }
            }
            if (error.length > 0) {
                document.getElementById("resultValues").innerHTML = error;
                throw error;
            }
            document.getElementById("resultValues").innerHTML = res;
            return true;
        }
        catch(err){
            alert("Error:" + err);
        }
    };
    window.isTrimmed = validator.isTrimmed;

})(window);


