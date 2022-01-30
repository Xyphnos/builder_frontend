
const creationHooks = () =>  {

    const integerizer = (score, prof) => {
        const intScore = parseInt(score);
        const intProf = parseInt(prof)
        const intAdd = intScore + intProf;
        if(!isNaN(+intAdd)){
            return intAdd
        }
        else if(!isNaN(+intScore) && prof == ''){
            return intScore
        }
        else{
            return ''
        }
    }

    return {
        integerizer
    }

}

export default creationHooks