<template>
  <div class="box">
    <div :class="['box-home', {'box-home-hide': isCollapse}]">
      <span @click="goHome">Demo-Test</span>
    </div>
    <el-menu
      :default-active="defaultActive"
      background-color="#545c64"
      text-color="#fff"
      router
      :collapseTransition="false"
      :collapse="isCollapse"
      active-text-color="#ffd04b">
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/order">
        <i class="el-icon-goods"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>

      <el-submenu index="/product">
        <template slot="title">
          <span>产品档案</span>
        </template>
        <el-menu-item index="/product/list">
          <i class="el-icon-s-shop"></i>
          <span slot="title">产品管理</span>
        </el-menu-item>
        <el-menu-item index="/product/cost">
          <i class="el-icon-s-data"></i>
          <span slot="title">产品费用管理</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: {
      typeof: Boolean,
      default: false,
    }
  },
  data() {
    return {
      defaultActive: '/home',
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler({path}) {
        this.defaultActive = path;
      },
    },
  },

  mounted() {
    
  },

  methods: {
    goHome() {
      this.$router.push({
        path: '/home'
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.box{
  ul {
    height: calc(100vh - 56px);
    margin-top: 56px;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &-home {
    position: absolute;
    top: 0px;
    z-index: 1;
    background-color: rgb(84, 92, 100);
    height: 56px;
    line-height: 56px;
    color: #fff;
    padding: 0 20px;
    width: 259px;
    &>span {
      cursor: pointer;
    }
  }
  &-home-hide {
    // transition-property: width;
    // transition-duration: .7s;
    width: 16px;
    &>span {
      display: none;
    }
  }
}

</style>
<style>
.el-aside::-webkit-scrollbar  {
  display: none;
}
.el-aside {
  background-color: rgb(84, 92, 100);
  position: relative;
}
</style>