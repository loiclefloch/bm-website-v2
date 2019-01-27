import { createFormatter } from "reacticoon/format";

const formatLastPage = paging => {
  paging.isLastPage = paging.lastPage === paging.page
  return paging
}

export const formatPaging = createFormatter(
  formatLastPage,
)
