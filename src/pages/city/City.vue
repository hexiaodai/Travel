<template>
  <div>
    <city-header />
    <city-search :cities="cities" />
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter" />
    <city-alphabet :cities="cities" @change="handleLetterChange" />
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      cities: {}, // 城市集合
      hotCities: [], // 热门城市
      letter: null // 选中的城市编号 (CityAlphabet组件传递)
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    // ajax 获取 city数据
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    // 结束 ajax数据
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        console.log(data)
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    // 监听 CityAlphabet组件传递的数据
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style></style>
