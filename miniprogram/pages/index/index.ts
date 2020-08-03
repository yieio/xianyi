// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
  },
  onShow:function(){
    console.log(this.data.CustomBar);
    console.log(this.data.StatusBar);
  },
})
