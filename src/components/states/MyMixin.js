const DataTableMixin = (superClass) => class extends superClass {

  async initialize() {
    await this.fetchRecords()
  }

};

export default DataTableMixin;