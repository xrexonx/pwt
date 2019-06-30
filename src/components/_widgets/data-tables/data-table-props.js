export const dataTableDefaultProps = {
  pageIndex: {
    type: Number,
    value: 0,
    observer: 'observePageIndex'
  },
  pageSize: {
    type: Number,
    value: 10,
    observer: 'observePageSize'
  },
  sorted: {
    type: String,
    value: 'name',
    observer: 'observeSort'
  },
  sortDirection: {
    type: String,
    value: 'ASC'
  },
  rawItems: { type: Array }
};
