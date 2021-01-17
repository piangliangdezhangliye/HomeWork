//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: '',
    name: '',
    author: '',
    src: '',
  },
  // audioPlay() {
  //   var that = this
  //   // this.audioCtx = wx.createAudioContext('myAudio')
  //   wx.request({
  //     url: 'https://api.uomg.com/api/rand.music?sort=热歌榜&format=json',
  //     method: "GET",
  //     success: function (res) {
  //       console.log(res);
        
  //       // var src = that.audioCtx.setSr(res.data.data.url)

  //       that.setData({
  //         poster: res.data.data.picurl,
  //         name: res.data.data.name,
  //         author: res.data.data.artistsname,
  //         src: res.data.data.url,
  //       })
  //     }
  //   })

  handleReadMusic(){
    var _this = this;
    wx.request({
      url: 'https://api.uomg.com/api/rand.music?sort=热歌榜&format=json',
      method: "GET",
      success: function(res){
        console.log(res);
        _this.setData({
          poster: res.data.data.picurl,
          author: res.data.data.artistsname,
          name: res.data.data.name,
          src: res.data.data.url,
        })
      }
    })
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {},

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