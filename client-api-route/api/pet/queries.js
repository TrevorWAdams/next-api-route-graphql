export const petQueries = {
  Query: {
    async pets() {
      console.log('pets');
      return [
        {
          id: 'iuiouiouoiuoiuoiu',
          name: 'MeDog'
        }
      ];
    }
  }
};
