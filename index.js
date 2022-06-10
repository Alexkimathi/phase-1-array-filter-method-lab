// Code your solution here
const drivers =['Alex','Kim','Ben']
function findMatching (driversA, value){
    let driversList = []

    driversA.forEach(name => {
        if(name.toUpperCase()==value.toUpperCase()){
            driversList.push(name)
        }
    });
    return driversList
}
const fuzzyMatch = (name1, name2) =>{
    let fuzzyDrivers = []
    name1.forEach(name1 =>{
        if(name1.charAt(0) === name2.charAt(0)){
            fuzzyDrivers.push(name1)
        }
    })
    return fuzzyDrivers

}

const matchName =(name1 ,name2)=>{
    let driver =[]
    for(let names of name1){
        if(names.name ===name2){
            driver.push(names)
        }
    }
    return driver

}


