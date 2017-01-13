const rpn = require("../../util/rpn.js");

Page({
  data: {
    calcData: '',
    isResult: false//calcData是否是计算后的结果，true 是，false 否
  },
  /**
   * [clickDigit 点击数字和小数点]
   * @param  {[object]} e [事件对象]
   */
  clickDigit: function(e){
    if (this.data.isResult) {
      var data;
      if(e.target.id === '.'){
        data = "0" + e.target.id;
      } else {
        data = e.target.id;
      }
      this.setData({
        calcData: data,
        isResult: false
      })
    } else {
      this.setData({
        calcData: this.data.calcData + e.target.id
      })
    }
  },
  /**
   * [clearDigit 清除]
   */
  clearDigit: function(){
    this.setData({
      calcData: ''
    })
  },
  /**
   * [backDigit 回退]
   */
  backDigit: function(){
    if (!this.data.calcData.length) {
      return false;
    }
    this.setData({
      calcData: this.data.calcData.substring(0, this.data.calcData.length-1)
    })
  },
  /**
   * [operate 加减乘除]
   * @param  {[object]} e [事件对象]
   */
  operate: function(e){
    //calcData.length为0，那么加，乘，除都不显示，减显示（当做负数）
    if (!this.data.calcData.length || this.data.calcData.substr(-1, 1) === e.target.id) {
      return false;
    }

    //继续拼接calcData
    this.setData({
      calcData: this.data.calcData + e.target.id,
    })
  },
  /**
   * [equal 等于]
   */
  equal: function(){
    let regExp = new RegExp(/['-', '+', 'x', '÷']/, "g");
    if (!this.data.calcData.length || this.data.calcData.substr(-1, 1).indexOf("+-x÷") > -1 || regExp.test(this.data.calcData) == -1) {
      return false;
    }
    if (this.data.isResult) {
      return false;
    }
    var resultData = this.data.calcData.replace(/x/g, '*');
    var resultArray = rpn.outputRpn(resultData);
    var result = rpn.calRpnExp(resultArray);
    this.setData({
      calcData: result,
      isResult: true
    })
  }
});
