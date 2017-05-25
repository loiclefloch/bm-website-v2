


export const formatCircle = (circle) => {
  circle = setNumberOfPeople(circle)
  return circle
}


//
//
//


const setNumberOfPeople = (circle) => {
  circle.numberOfMember = circle.members.length
  return circle
}
