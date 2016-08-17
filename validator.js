/**
 * Created by shadh01 on 27-07-2016.
 */
(function(window){
    var validator = {};

    validator.trimmedOutput = function(inputUser) {
        inputUser = inputUser.trim();
        inputUser = inputUser.replace(/ +/g, " ");
        return inputUser;
    };
    window.trimmedOutput = validator.trimmedOutput;
    
    validator.isEmpty = function(inputTest) {
        try {
            if (!inputTest) {
                return false;
            }
            else{
                var find = false;
                for(var i=0;i<inputTest.length;i++){
                    if(inputTest[i] != ' '){
                        find = true;
                        break;
                    }
                }
                if(!find) return false;
                else return true;
            }
        }
        catch(err){
            return false;
        }
    };
    window.isEmpty = validator.isEmpty;

    validator.isName = function(nameTest) {
        try {
            
            if (!nameTest || nameTest.length < 3 || !isEmpty(nameTest)) {
                return false;
            }
            else {
                var arr = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                            't','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L',
                            'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
                var find = false;
                for(var i=0;i<nameTest.length;i++){
                    if(arr.indexOf(nameTest[i])=== -1)
                        find = true;
                }
                if(find)
                    return false;
                else
                    return true;
            }
        }
        catch(err){
            return false;
        }
    };
    window.isName = validator.isName;

    validator.isCreditCard = function(inputTest) {
        try {
            if (!inputTest || !isEmpty(inputTest)) {
               return false;
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
                       return false;
                    else
                        return true;
                }
                else if(inputTest.length===19){
                    var find = false;
                    var splitValue = inputTest.split('-');
                    for(var i=0;i<splitValue.length;i++){
                        if(splitValue[i].length !== 4){
                            find = true;
                            break;
                        }
                    }
                    if(find) return false;
                    if(splitValue.length === 4){
                        for(var i=0;i<splitValue.length;i++){
                                var valueToCheck = splitValue[i];
                                for(var j=0;j<valueToCheck.length;j++){
                                    if(arr.indexOf(valueToCheck[j])=== -1)
                                        find = true;
                                }
                        }
                    }
                    if(find)
                        return false;
                    else
                        return true;
                }
                else
                    return false;
            }

        }
        catch(err){
            return false;
        }
    };
    window.isCreditCard = validator.isCreditCard;

    validator.isCsv = function(inputTest) {
        try {

            if (!inputTest || inputTest.length != 3 || isNaN(inputTest) || inputTest.indexOf(".") >= 0 || !isEmpty(inputTest)) {
                return false;
            }
            return true;
        }
        catch(err){
            return false;
        }
    };
    window.isCsv = validator.isCsv;

    /*To validate Date*/
    validator.isDate = function(inputTest) {
        try {
           
            var res ='';

            if (!inputTest || !isEmpty(inputTest)) {
                return false;
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
                var pdate = inputTest.split('-');
                var dd = pdate[0];
                var mm  = pdate[1];
                var yy =  pdate[2];
                if(isNaN(dd) || isNaN(mm) || isNaN(yy)) return false;
                if(dd.indexOf('.') >= 0) return false;
                if(mm.indexOf('.') >= 0) return false;
                if(yy.indexOf('.') >= 0) return false;
                if( dd < 1 || dd > 31 || mm < 1 || mm > 12 || yy.length != 4) return false;
                var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
                if (mm==1 || mm>2)
                {
                    if (dd>ListofDays[mm-1])
                    {
                        return false;
                    }
                }
                if (mm==2)
                {
                    var lyear = false;
                    if ( (!(yy % 4) && yy % 100) || !(yy % 400))
                    {
                        lyear = true;
                    }
                    if ((lyear==false) && (dd>=29))
                    {
                        return false;
                    }
                    if ((lyear==true) && (dd>29))
                    {
                        return false;
                    }
                }
                return true;
            }
            
            return true;
        }
        catch(err){
            return false;
        }
    };
    window.isDate = validator.isDate;

    validator.isTime = function(inputTest) {
        try {

            var res ='';

            if (!inputTest || !isEmpty(inputTest)) {
                return false;
            }
            else{
                if(inputTest.length > 5) return false;
                var pTime = inputTest.split(':');
                var hh = pTime[0];
                var mm  = pTime[1];
                if(isNaN(hh) || isNaN(mm)) return false;
                if(hh.indexOf('.') >= 0 || hh.indexOf('-') > 0) return false;
                if(mm.indexOf('.') >= 0 || mm.indexOf('-') > 0) return false;
                if( hh < 0 || hh > 23 || mm < 0 || mm > 59) return false;
                return true;
            }

            return true;
        }
        catch(err){
            return false;
        }
    };
    window.isTime = validator.isTime;

    /* To validate Email Address*/
    validator.isEmailAddress = function(emailToTest) {
        try {
            if (!emailToTest || !isEmpty(emailToTest)) {
               return false;
            }
            else{
                if(emailToTest.indexOf("@") < 1) {
                   return false;
                }
                if((emailToTest.match(/@/g)||[]).length > 1){
                    return false;
                }
                if(emailToTest.indexOf(".") < 1) {
                    return false;
                }
                var lc = emailToTest.length - 1;
                if(emailToTest[lc] === '@'){
                    return false;
                }
                if(emailToTest[lc] === '.'){
                    return false;
                }
            }

            return true;
        }
        catch(err){
            return false;
        }
    };
    window.isEmailAddress = validator.isEmailAddress;

    /* To validate Indian Phone number*/
    validator.isPhoneNumber = function(numberToTest) {
        try {
            if (!numberToTest || !isEmpty(numberToTest)) {
                return false;
            }
            else{
                if(isNaN(numberToTest)){
                    return false;

                }
                else{
                    if(numberToTest.indexOf(".") >= 0){
                        return false;
                    }
                    else{
                        var nl = numberToTest.length ;
                        if(nl == 3 || nl == 4 || nl == 10 || nl == 11 || nl == 12)
                            return true;
                        else
                            return false;
                    }
                }
            }
            return true;
        }
        catch(err){
            return false;
        }
    };
    window.isPhoneNumber = validator.isPhoneNumber;

    validator.isAddress = function(nameTest) {
        try {

            if (!nameTest || nameTest.length < 3 || !isEmpty(nameTest)) {
                return false;
            }
            else {
                var arr = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                            't','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L',
                            'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ','/','-','0','1','2','3',
                            '4','5','6','7','8','9',',','.'];
                var find = false;
                for(var i=0;i<nameTest.length;i++){
                    if(arr.indexOf(nameTest[i])=== -1)
                        find = true;
                }
                if(find)
                    return false;
                else
                    return true;
            }
            return true;
        }
        catch(err){
            return false;
        }
    };
    window.isAddress = validator.isAddress;

    validator.isPassword = function(inputTest) {
        try {
            if (!inputTest || inputTest.length < 7 || !isEmpty(inputTest)) {
                return false;
            }
            return true;
        }
        catch(err){
            return false;
        }
    };
    window.isPassword = validator.isPassword;

})(window);


