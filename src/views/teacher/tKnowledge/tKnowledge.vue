<template>
  <div class="knowledge">
    <TopBar />
    <TopBarV2 :nav-bar-data="$store.state.currentNavBarData.children" />
    <router-view></router-view>
  </div>
</template>

<script >
import TopBar from '../../../components/teacher/knowledge/top-bar.vue';
import TopBarV2 from '../../../components/teacher/knowledge/top-bar-v2.vue';
import store from '../../../store';


export default {
  data() {
    return {

    };
  },
  methods: {
  },
  // computed: {
  //   getNavBarData() {
  //     return store.state.currentNavBarData.children
  //   }
  // },
  components: { TopBar, TopBarV2 }
};
</script>

<style lang="less" scoped>

</style>