//The speed limit is set to 70km/h hence the variable let speed be 70
let speedLimit = 70
//We create a function speedLimitDetector with the parameter speed
function speedLimitDetector(vehicleSpeed){
    if(vehicleSpeed < speedLimit){
        return "Driver's Speed is within specified limit" 
        //If speed was not exceeded then you get an OK to mean the driver is within speed limit
    }else{
        let driverPoints = ((vehicleSpeed - speedLimit) / 5) 
        //The the current speed, minus the speed limit and divide by 5 to get points
        if(driverPoints >= 12){
            return "License suspended"
        //If the drivers points are 12 or more then the licence is suspended  
        }else {
            return 'Points:' + driverPoints
        }
    }
}
//Input the speed to test the limit and generate points
console.log(speedLimitDetector(80));
