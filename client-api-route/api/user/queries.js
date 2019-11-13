export const userQueries = {
  Query: {
    async users() {
      console.log('user');
      return [
        {
          id: 'iuiouiouoiuoiuoiu',
          name: 'Im A User',
        }
      ];
    }
  }
};
