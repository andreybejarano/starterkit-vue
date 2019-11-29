import HomeService from '@/services/Home';

const moviesStore = {
  state: {
    great: HomeService.getGreat()
  },
  getters: {
    great(state) {
      return state.great;
    }
  }
};

export default moviesStore;
