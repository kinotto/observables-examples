module.exports = (type) => {     
    return {
        next: el => console.log(`next ${type} - ${typeof(el) === 'object' ? JSON.stringify(el) : el}`),
        complete: () => console.log(`complete ${type}`),
        error: err => console.log(`err ${type} ${err}`)
    }
}
