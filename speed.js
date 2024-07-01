function checkSpeed(speed) {
    const speedLimit = 70;
  
    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / 5);
      console.log("Demerit points:", demeritPoints);
    }
  }
  
  const carSpeed = ("Enter Speed")
  checkSpeed(carSpeed);
  