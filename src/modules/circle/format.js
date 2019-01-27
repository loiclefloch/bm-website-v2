import { createFormatter, createSubObjectFormatter, createListFormatter } from 'reacticoon/format'
import ArrayUtils from '../../utils/ArrayUtils'

//
//
//

const setCircleIsFollowedByMe = (circle, { meCirclesIds }) => {
  if (meCirclesIds) {
    circle.isFollowedByMe = ArrayUtils.exists(meCirclesIds, id => id === circle.id)
  }
  return circle
}

const setCircleIsAdministrateByMe = (circle, { meAdministredCirclesIds }) => {
  if (meAdministredCirclesIds) {
    circle.isAdministrateByMe = ArrayUtils.exists(meAdministredCirclesIds, id => id === circle.id)
  }
  return circle
}

const setNumberOfPeople = circle => {
  circle.numberOfMember = circle.members.length
  return circle
}

const formatMemberAdmin = (member, props) => {
  const isCircleAdmin = ArrayUtils.exists(
    props.formattedItem.admins,
    admin => admin.id === member.id
  )
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
