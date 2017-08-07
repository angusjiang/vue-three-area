<template>
    <div class='unqie-item start-box box-align box-pack'>
        <select id="provice" class="provice" v-model="provice" >
          <option :value="0">请选择省</option>
          <option v-for="(item, index) in AreaData" :value="item.value">{{item.text}}</option>
        </select>
        <select id="city" class="city" v-model="shi" :disabled="shiDis">
          <option :value="0">请选择市</option>
          <option v-for="(item, index) in getShi" :value="item.value">{{item.text}}</option>
        </select>
        <select id="area" class="area" v-model="qu" :disabled="quDis">
          <option :value="0">请选择区</option>
          <option v-for="(item, index) in getQu" :value="item.value">{{item.text}}</option>
        </select>
  </div>
</template>

<script>
    import {areaLists} from './lib/areaData'
    export default {
      name: 'area',
      data () {
        return {
          person: {
            name: '',
            phone: '',
            unit: '',
            areaData: []
          },
          pop: false,
          msg: '',
          provice: 3,
          shi: 0,
          qu: 0,
          remberS: [],
          shiDis: true,
          quDis: true,
          AreaData: []
        }
      },
      computed: {
        getShi() {
          var self = this;
          if (self.provice != 0) {
            for (var i = 0; i < self.AreaData.length; i++) {
              if (self.provice == self.AreaData[i].value) {
                self.remberS = self.AreaData[i].child;
                self.shiDis = false;
                self.shi = 0;
                return self.AreaData[i].child;
              }
            }
          } else {
            self.qu = 0;
            self.shi = 0;
            self.shiDis = true;
            self.quDis = true;
          }
        },
        getQu() {
          var self = this;
          if (self.shi != 0) {
            for (var i = 0; i < self.remberS.length; i++) {
              if (self.shi == self.remberS[i].value) {
                self.quDis = false;
                self.qu = 0;
                return self.remberS[i].child;
              }
            }
          } else {
            self.quDis = true;
            self.qu = 0;
          }
        }
      },
      created() {
        this.AreaData = areaLists;
      },
      methods: {
        sumitGo() {
          var self = this;
          let getP = {
            sheng: document.getElementById('provice').options[document.getElementById('provice').selectedIndex].text,
            shi: document.getElementById('city').options[document.getElementById('city').selectedIndex].text,
            qu: document.getElementById('area').options[document.getElementById('area').selectedIndex].text
          };
          
        }
      }

    }

</script>