<template>
  <div class="home">
    <TopBar :nav-bar-data="navBarData" />
    <router-view></router-view>
  </div>
</template>

<script>
import { test } from '../../../services';
import TopBar from '../../../components/teacher/knowledge/top-bar.vue';

export default {
  name: "Home",
  data() {
    return {
      navBarData: [
        {
          name: 'test1',
          path: '/home/test1'
        },
        {
          name: 'test2',
          path: '/home/test2'
        },
      ]
    };
  },
  mounted() {
    test().then(res => {
      console.log(res);
    });
  },
  components: { TopBar }
}
</script>
