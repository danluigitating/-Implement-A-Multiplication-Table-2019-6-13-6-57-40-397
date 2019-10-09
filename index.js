function createMultiplyTable(firstNumber, lastNumber) {
    const isValid= areInputsValid(firstNumber,lastNumber);
    const isRangeValid= areInputsRangeValid(firstNumber, lastNumber);
    if(!isValid || !isRangeValid)
        return null;
    const stringTable= mapMultiplyTable(firstNumber,lastNumber);
    return stringTable;
}

function areInputsValid(firstNumber,lastNumber){
    if(firstNumber>lastNumber)
        return false;
    else
        return true;
}

function areInputsRangeValid(firstNumber,lastNumber){
    if(firstNumber<=1000 && firstNumber>0 && lastNumber<=1000 && lastNumber>0)
        return true;
    else
        return false;
}

function formatTable(val){
    var formatTable = '';
    var pad = 3 - val;
      while( pad-- > 0 )
        formatTable += ' ';            
    return formatTable;
  }

function mapMultiplyTable(firstNumber,lastNumber){
    let stringTable='';
    for (var i = firstNumber; i <= lastNumber; i++) {
        for (var j = firstNumber; j <= lastNumber; j++) {
            if(i>=j)
                stringTable +=  j + "x" + i + "=" + i*j + formatTable((i*j+'').length); 
        }
        stringTable += '\n'
    }
    return stringTable;
}

module.exports = createMultiplyTable;