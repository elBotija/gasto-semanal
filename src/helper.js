export const validateBudget = budget => {
    let totalBudget = parseInt(budget, 10) || 0

    if( totalBudget > 0 ) {
        return 'totalBudget'
    } else {
        return false
    }
}

export const checkBudget = (budget, remaning) => {
    let changeClass

    if( (budget / 4) > remaning ) {
        changeClass = 'red'
    } else if( (budget / 2) > remaning ) {
        changeClass ='orange'
    } else {
        changeClass ='blue'
    }
    return changeClass
}
