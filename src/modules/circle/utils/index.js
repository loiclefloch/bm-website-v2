import ArrayUtils from '../../../utils/ArrayUtils'

export const formatCircle = (circle) => {
  circle = setNumberOfPeople(circle)
  circle = updatetMembersData(circle)
  return circle
}

export const setCircleIsFollowedByMe = (circle, meCirclesIds) => {
  circle.isFollowedByMe = ArrayUtils.exists(meCirclesIds, (id) => id === circle.id)
  return circle
}

export const setCircleIsAdministrateByMe = (circle, meAdministredCirclesIds) => {
  circle.isAdministrateByMe = ArrayUtils.exists(meAdministredCirclesIds, (id) => id === circle.id)
  return circle
}

//
//
//


const setNumberOfPeople = (circle) => {
  circle.numberOfMember = circle.members.length
  return circle
}

//
// Add the following data to a circle.members object.
// isCircleAdmin: boolean. True if the member is also an admin.
//
const updatetMembersData = (circle) => {
  circle.members.forEach(member => {
    // is member admin ?
    const isCircleAdmin = ArrayUtils.exists(circle.admins, admin => {
      return admin.id === member.id
    })

    member.isCircleAdmin = isCircleAdmin
  })
  return circle
}
