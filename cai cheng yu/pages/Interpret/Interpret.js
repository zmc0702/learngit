// pages/Interpret/Interpret.js
var app=getApp();
var numberID = app.globalData.numberID;
var numberMoney = app.globalData.numberMoney;
// var z=app.globalData.z;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  space: function(){
    var devl=(wx.getStorageSync('devl') || []);
    app.globalData.numberID=devl.numberID;
    app.globalData.numberMoney=devl.numberMoney;
    wx.redirectTo({
    url: '../index/index',
    })
    this.setData({
      numberID: app.globalData.numberID,
      numberMoney: app.globalData.numberMoney,
    })
  },
  onShareAppMessage: function(res){
    if(res.for === 'buttom'){
      console.log(res.target,res)
    }
    return {
      title: '我已经闯过4关，敢否应战？',
      path:'pages/lnterpret/lnterpret/'
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})