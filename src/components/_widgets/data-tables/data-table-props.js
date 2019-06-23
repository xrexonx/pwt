export const dataTableDefaultProps = {
  pageIndex: {
    type: Number,
    value: 0
  },
  pageSize: {
    type: Number,
    value: 10
  },
  sorted: {
    type: String,
    value: 'name'
  },
  sortDirection: {
    type: String,
    value: 'ASC'
  },
  filterValue: {
    type: String,
    value: ''
  },
  isSearch: {
    type: Boolean,
    value: false
  },
  placeHolder: {
    type: String,
    value: 'Search chuchu here'
  },
  rawItems: { type: Array }
};
