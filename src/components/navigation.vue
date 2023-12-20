<template>
  <div class="box">
    <div class="left">
      <i class="el-icon-s-unfold" v-show="isCollapse"  @click="setIsCollapse"></i>
      <i class="el-icon-s-fold" v-show="!isCollapse" @click="setIsCollapse"></i>
    </div>
    <div class="right">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <span class="userName">用户名</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="exit">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { removeItem } from '@/utils/storage';
export default {
  props: {
    isCollapse: {
      typeof: Boolean,
      default: false,
    }
  },
  data() {
    return {

    };
  },

  mounted() {
    
  },

  methods: {
    setIsCollapse() {
      this.$emit('setIsCollapse');
    },
    handleCommand(type) {
      switch (type) {
        case 'exit':
          this.exit();
          break;
      
        default:
          break;
      }
    },  
    exit() {
      this.$confirm('是否退出系统?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          removeItem('X-Token');
          setTimeout(() => {
            loading.close();
            this.$router.push({
              path: '/login'
            }); 
          }, 1000);
        });
    },  
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 20px;
  line-height: 40px;
  .left {
    font-size: 30px;
  }
  .right {
    .el-dropdown-link {
      color: #FFF;
    }
  }
}
</style>