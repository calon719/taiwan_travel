export default {
  data() {
    return {
      openShareLinkModal: false,
      shareUrl: '',
    };
  },
  methods: {
    toggleShareLinkModal(status) {
      this.openShareLinkModal = status;
    },
  },
};
