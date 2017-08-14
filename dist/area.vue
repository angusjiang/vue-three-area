<template>
    <div class='unqie-item start-box box-align box-pack'>
        <select id="provice" class="provice" v-model="provice">
          <option :value="0">{{setPlaceholder.provice}}</option>
          <option v-for="(item, index) in AreaData" :value="item.value">{{item.text}}</option>
        </select>
        <select id="city" class="city" v-model="city" :disabled="cityDis">
          <option :value="0">{{setPlaceholder.city}}</option>
          <option v-for="(item, index) in getcity" :value="item.value">{{item.text}}</option>
        </select>
        <select id="area" class="area" v-model="area" :disabled="areaDis">
          <option :value="0">{{setPlaceholder.area}}</option>
          <option v-for="(item, index) in getarea" :value="item.value">{{item.text}}</option>
        </select>
  </div>
</template>

<script>
    import {areaLists} from './lib/areaData'
    export default {
      name: 'area',
      props: {
        placeholers: {
          type: String,
          default: '请选择省,请选择市,请选择区',
        },
        selectModule: {
          type: String,
          default: 'every',
        }
      },
      data () {
        return {
          provice: 0,
          city: 0,
          area: 0,
          remberS: [],
          cityDis: true,
          areaDis: true,
          AreaData: [],
          setPlaceholder: {
            provice: '请选择',
            city: '请选择',
            area: '请选择'
          }
        }
      },
      computed: {
        getcity() {
          var self = this;
          //self._dispatch('selectedF',[self.provice, self.city, self.area]);
          if (self.provice != 0) {
            for (var i = 0; i < self.AreaData.length; i++) {
              if (self.provice == self.AreaData[i].value) {
                self.remberS = self.AreaData[i].child;
                self.cityDis = false;
                self.city = 0;
                return self.AreaData[i].child;
              }
            }
          } else {
            self.area = 0;
            self.city = 0;
            self.cityDis = true;
            self.areaDis = true;
          }
          
        },
        getarea() {
          var self = this;
          if (self.city != 0) {
            for (var i = 0; i < self.remberS.length; i++) {
              if (self.city == self.remberS[i].value) {
                self.areaDis = false;
                self.area = 0;
                return self.remberS[i].child;
              }
            }
          } else {
            self.areaDis = true;
            self.area = 0;
          }
        }
      },
      created() {
        let self = this;
        this._init();
        if (this.selectModule == 'single') {
          this.$watch('area',(newD,oldD) => {
            if (newD != oldD) {
              self._dispatch('selectedF',{
                code: [self.provice, self.city, self.area],
                value: [self._getValue('provice'), self._getValue('city'), self._getValue('area')]
              });
            };
          });
        } else if(this.selectModule == 'every') {
          this.$watch('provice', (newD, oldD) => {
            if (newD != oldD) {
              self._dispatch('selectedF',{
                code: [self.provice, self.city, self.area],
                value: [self._getValue('provice'), self._getValue('city'), self._getValue('area')]
              });
            };
          });
          this.$watch('city', (newD, oldD) => {
            if (newD != oldD) {
              self._dispatch('selectedF',{
                code: [self.provice, self.city, self.area],
                value: [self._getValue('provice'), self._getValue('city'), self._getValue('area')]
              });
            };
          });
          this.$watch('area', (newD, oldD) => {
            if (newD != oldD) {
              self._dispatch('selectedF',{
                code: [self.provice, self.city, self.area],
                value: [self._getValue('provice'), self._getValue('city'), self._getValue('area')]
              });
            };
          });
        }
        
      },
      methods: {
        _init() {
          //初始化数据
          this.AreaData = areaLists;
          //初始化placeholder
          let holderArr = this.placeholers.split(',');
          if (holderArr.length == 3) {
            this.setPlaceholder.provice = holderArr[0];
            this.setPlaceholder.city = holderArr[1];
            this.setPlaceholder.area = holderArr[2];
            console.log(this.setPlaceholder)
          } else {
            alert('placeholder set error');
          }
        },
        _getElement(ele) {
          return document.getElementById(ele);
        },
        _getValue(ele) {
          if (this._getElement(ele).selectedIndex < 0) {
            return;
          } else
          return this._getElement(ele).options[this._getElement(ele).selectedIndex].text;
        },
        _dispatch(name, res) {
          this.$emit && this.$emit(name, res);
        },
      }

    }

</script>