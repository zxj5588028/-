Page({
  data: {
    calcData: '',
    isCalc: false,
    temporary: ''
  },
  onLoad: function(){
    console.log("计算详情");
  },
  //点击数字，小数点
  clickDigit: function(e){
    //没有加减乘除元素
    if(!this.data.isCalc){
      this.setData({
        calcData: this.data.calcData + e.target.id
      })
    } else {
      this.setData({
        temporary: this.data.temporary + e.target.id
      })
    }
  },
  //清除
  clearDigit: function(){
    this.setData({
      calcData: ''
    })
  },
  //回退
  backDigit: function(){
    if (!this.data.calcData.length) {
      return false;
    }
    this.setData({
      calcData: this.data.calcData.substring(0, this.data.calcData.length-1)
    })
  },
  //加法

  add: function(){
    //calcData.length为0，那么加，乘，除都不显示，减显示（当做负数）
    if (!this.data.calcData.length) {
      return false;
    }
    //将之前的数保存为a。
    let a = this.data.calcData;
    //继续拼接calcData
    this.setData({
      calcData: this.data.calcData + "+",
      isCalc: true
    })
    //将+之后输入的数据保存为b
  }
});
