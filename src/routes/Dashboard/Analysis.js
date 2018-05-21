import React, { Component, Fragment } from 'react';
import { connect } from 'dva';


import styles from './Analysis.less';
import imgSrc from "./quickySort.jpg";

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
export default class Analysis extends Component {

  render() {
    return (
      <div className={styles.contentWrapper}>
        <h2>1、深度克隆</h2>
        <p>对于引用数据类型对象来说：</p>
        <div className={styles.codeBg}> var a = [0, 1, 2, 3]; <br />
        var b = a; <br />
        a.push(4); <br />
        console.log(b); // [0, 1, 2, 3, 4] <br />
        </div>
        <p><span className={styles.titleText}>深度克隆: </span>所有元素或属性均完全复制，与原对象完全脱离，也就是说所有对于新对象的修改都不会反映到原对象中 </p>
        <p>由于引用类型数据存储在应用地址内存中，因此赋值复制的也是这一块地址， 因此相当于两个数组对象引用了一块数据地址，所以对a或者b的任何操作或者改变都会体现在对象中。为了避免这种情况，引入了深度克隆。</p>
        <p className={styles.codeBg}>
       function clone(obj)  {'{'}<br />
        var o = obj instanceof Array ? [] : {'{}'};<br />
        for(var k in obj)<br />
          o[k] = typeof obj[k] === Object ? clone(obj[k]) : obj[k];<br />
        return o;<br />
        }<br />
        var a = [[1, 2, 3], [4, 5, 6, 7]];<br />
        var b = clone(a);<br />
        console.log(b);<br />
        </p>
        <h2>2、排序算法</h2>
        <p className={styles.titleText}>2.1、快速排序</p>
        <p className={styles.codeBg}>
          <img src={imgSrc} alt="" style={{ width: '60%', height: '60%' }}/>
        </p>
        <p className={styles.titleText}>2.2、冒泡排序</p>
      </div>
    );
  }
}
