import { createFormatter, createSubObjectFormatter, createListFormatter } from 'reacticoon/format'
import { existsOnArray } from 'reacticoon/utils/array'
//
//
//

const setCircleIsFollowedByMe = (circle, { meCirclesIds }) => {
  if (meCirclesIds) {
    circle.isFollowedByMe = existsOnArray(meCirclesIds, id => id === circle.id)
  }
  return circle
}

const setCircleIsAdministrateByMe = (circle, { meAdministredCirclesIds }) => {
  if (meAdministredCirclesIds) {
    circle.isAdministrateByMe = existsOnArray(meAdministredCirclesIds, id => id === circle.id)
  }
  return circle
}

const setNumberOfPeople = circle => {
  circle.numberOfMember = circle.members.length
  return circle
}

const formatMemberAdmin = (member, props) => {
  const isCircleAdmin = existsOnArray(props.formattedItem.admins, admin => admin.id === member.id)
  member.isCircleAdmin = isCircleAdmin
  return member
}

const formatMember = createFormatter(formatMemberAdmin)

export const formatCircle = createFormatter(
  setNumberOfPeople,
  setCircleIsFollowedByMe,
  setCircleIsAdministrateByMe,
  createSubObjectFormatter('members', createListFormatter(formatMember))
)
