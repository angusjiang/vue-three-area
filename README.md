## Vue-three-area

a vue2.0 plugin for Vue-three-area

vue2.0 省市区三级联动组件

### Install

``` bash
npm install vue-three-area --save
```

Code Example (ES6)
``` html
  <VueThreeArea 
      :placeholers="placeholers" 
      @selectedF="selectedF"
      :selectModule="selectModule"></VueThreeArea>
```
``` js
import VueThreeArea from 'vue-three-area'
export default{
  data() {
    return {
      placeholers: '选择省,选择市,选择区',
      selectModule: 'every', //只有二种，一种是every,一种是single,默认every
    }
  },
  components: {
    VueThreeArea
  },
  methods: {
    //选中之后返回结果
    selectedF(res) {
      console.log(res)
    }
  }
```
Your contributions and suggestions are welcome 😄😄😄💐💐💐.


