import ArrayUtils from '../../../utils/ArrayUtils'

export const formatCircle = (circle) => {
  circle = setNumberOfPeople(circle)
  return circle
}

export const setCircleIsFollowedByMe = (circle, meCirclesIds) => {
  circle.isFollowedByMe = ArrayUtils.exists(meCirclesIds, (id) => id === circle.id)
  return circle
}

//
//
//


const setNumberOfPeople = (circle) => {
  circle.numberOfMember = circle.members.length
  return circle
}
