<template>
  <div>
    <el-container>
      <el-aside :width="isCollapse ? '56px' : '200px'">
        <Mymenu :isCollapse="isCollapse"/>
      </el-aside>
      <el-container>
        <el-header>
          <Navigation :isCollapse="isCollapse" @setIsCollapse="setIsCollapse"/>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Mymenu from "@/components/mymenu.vue";
import Navigation from "@/components/navigation.vue";
export default {
  components: {
    Mymenu,
    Navigation
  },

  data() {
    return {
      isCollapse: false,
    };
  },

  mounted() {
    this.resize();
    window.addEventListener("resize", this.resize);
  },

  destroyed() {
    window.removeEventListener("resize", this.resize);
  },  

  methods: {
    setIsCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    resize() {
      const w = document.documentElement.clientWidth;
      this.isCollapse = w < 1000;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #3d4f6a;
  height: 56px !important;
}
</style>