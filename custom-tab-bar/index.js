import TabMenu from './data';
Component({
  data: {
    active: 0,
    list: TabMenu,
  },

  methods: {
    onChange(event) {
      this.setData({ active: event.detail.value });
      console.log(event.detail.value)
      const url = this.data.list[event.detail.value].url
      wx.switchTab({ url });
    },

    init() {
      console.log('init')
      const page = getCurrentPages().pop();
      const route = page ? page.route.split('?')[0] : '';
      const active = this.data.list.findIndex(item => item.url ===`${route}`);
      this.setData({ active });
    },
  },
});
