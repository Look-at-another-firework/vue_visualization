<template>
  <div class="screen-container" :style="containStyle">
    <header class="screen-header">
      <div>
        <img :src="headerSrc" alt="" />
      </div>
      <span class="logo">
        <img :src="logoSrc" alt="" />
      </span>
      <span class="title">可视化平台监控系统</span>
      <div class="title-right">
        <img :src="themeSrc" class="qiehuan" @click="handleChangeTheme" />
        <span class="datetime">2022-01-01 00:00:00</span>
      </div>
    </header>
    <div class="screen-body">
      <section class="screen-left">
        <div id="left-top" :class="[fullScreenStatue.trend ? 'fullscreen' : '']">
          <Trend ref="trend"></Trend>
          <div class="resize">
            <span
              @click="changeStatus('trend')"
              :class="[
                'iconfont',
                fullScreenStatue.trend ? 'icon-compress-alt' : 'icon-expand-alt'
              ]"
            ></span>
          </div>
        </div>
        <div id="left-bottom" :class="[fullScreenStatue.seller ? 'fullscreen' : '']">
          <Seller ref="seller"></Seller>
          <div class="resize">
            <span
              @click="changeStatus('seller')"
              :class="[
                'iconfont',
                fullScreenStatue.seller ? 'icon-compress-alt' : 'icon-expand-alt'
              ]"
            ></span>
          </div>
        </div>
      </section>
      <section class="screen-middle">
        <div id="middle-top" :class="[fullScreenStatue.map ? 'fullscreen' : '']">
          <Map ref="map"></Map>
          <div class="resize">
            <span
              @click="changeStatus('map')"
              :class="['iconfont', fullScreenStatue.map ? 'icon-compress-alt' : 'icon-expand-alt']"
            ></span>
          </div>
        </div>
        <div id="middle-bottom" :class="[fullScreenStatue.rank ? 'fullscreen' : '']">
          <Rank ref="rank"></Rank>
          <div class="resize">
            <span
              @click="changeStatus('rank')"
              :class="['iconfont', fullScreenStatue.rank ? 'icon-compress-alt' : 'icon-expand-alt']"
            ></span>
          </div>
        </div>
      </section>
      <section class="screen-right">
        <div id="right-top" :class="[fullScreenStatue.hot ? 'fullscreen' : '']">
          <Hot ref="hot"></Hot>
          <div class="resize">
            <span
              @click="changeStatus('hot')"
              :class="['iconfont', fullScreenStatue.hot ? 'icon-compress-alt' : 'icon-expand-alt']"
            ></span>
          </div>
        </div>
        <div id="right-bottom" :class="[fullScreenStatue.stock ? 'fullscreen' : '']">
          <Stock ref="stock"></Stock>
          <div class="resize">
            <span
              @click="changeStatus('stock')"
              :class="[
                'iconfont',
                fullScreenStatue.stock ? 'icon-compress-alt' : 'icon-expand-alt'
              ]"
            ></span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Hot from '@/components/hotView.vue'
import Map from '@/components/mapView.vue'
import Rank from '@/components/rankView.vue'
import Seller from '@/components/sellerView.vue'
import Stock from '@/components/stockView.vue'
import Trend from '@/components/TrendView.vue'
import { mapState } from 'vuex'
import { getThemeValue } from '@/utils/theme_utils'
export default {
  components: {
    Hot,
    Map,
    Rank,
    Seller,
    Stock,
    Trend
  },
  data() {
    return {
      fullScreenStatue: {
        hot: false,
        trend: false,
        seller: false,
        map: false,
        rank: false,
        stock: false
      }
    }
  },
  methods: {
    changeStatus(chartName) {
      this.fullScreenStatue[chartName] = !this.fullScreenStatue[chartName]
      this.$nextTick(() => {
        this.$refs[chartName].screenAdapter()
      })
    },
    recvData(data) {
      const chartName = data.chartName
      const targetValue = data.value
      this.fullScreenStatue[chartName] = targetValue
      this.$nextTick(() => {
        this.$refs[chartName].screenAdapter()
      })
    },
    handleChangeTheme() {
      this.$store.commit('change')
    }
  },
  computed: {
    ...mapState(['theme']),
    logoSrc() {
      return '/static/img/' + getThemeValue(this.theme).logoSrc
    },
    headerSrc() {
      return '/static/img/' + getThemeValue(this.theme).headerLine
    },
    themeSrc() {
      return '/static/img/' + getThemeValue(this.theme).themeSrc
    },
    containStyle() {
      return {
        backgroundColor: getThemeValue(this.theme).backgroundColor,
        color: getThemeValue(this.theme).titleColor
      }
    }
  }
}
</script>

<style lang="less" scoped>
// 全屏样式的定义
.fullscreen {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  z-index: 100;
}

.screen-container {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: #161522;
  color: #fff;
  box-sizing: border-box;
}
.screen-header {
  width: 100%;
  height: 64px;
  font-size: 20px;
  position: relative;
  > div {
    img {
      width: 100%;
    }
  }
  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 20px;
    transform: translate(-50%, -50%);
  }
  .title-right {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-80%);
  }
  .qiehuan {
    width: 33px;
    // height: 21px;
    cursor: pointer;
  }
  .datetime {
    font-size: 15px;
    margin-left: 10px;
  }
  .logo {
    position: absolute;
    left: 6px;
    top: 57%;
    transform: translateY(-80%);
    img {
      height: 38px;
      width: 128px;
    }
  }
}
.screen-body {
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 10px;
  .screen-left {
    height: 100%;
    width: 27.6%;
    #left-top {
      height: 53%;
      position: relative;
    }
    #left-bottom {
      height: 31%;
      margin-top: 25px;
      position: relative;
    }
  }
  .screen-middle {
    height: 100%;
    width: 41.5%;
    margin-left: 1.6%;
    margin-right: 1.6%;
    #middle-top {
      width: 100%;
      height: 56%;
      position: relative;
    }
    #middle-bottom {
      margin-top: 25px;
      width: 100%;
      height: 28%;
      position: relative;
    }
  }
  .screen-right {
    height: 100%;
    width: 27.6%;
    #right-top {
      height: 46%;
      position: relative;
    }
    #right-bottom {
      height: 38%;
      margin-top: 25px;
      position: relative;
    }
  }
}
.resize {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
</style>
