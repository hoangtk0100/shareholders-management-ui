function getParamValue(paramName, search){
    let paramValue = '';
    const arr = search.split("=");
    arr.map( (obj,index) => 
        {
            console.log(index)
            if(obj.indexOf(paramName) > -1 && index < arr.length){
                // Get value from next object
                paramValue = arr[index +1];
                // Remove special character: &,=
                if(paramValue.indexOf('&') > -1){
                    paramValue = paramValue.substring(0, paramValue.lastIndexOf('&'))    
                }
                return paramValue;

            }
        }
    );
    return paramValue;
}

export const parameterUlrHelper = {
    getParamValue
}