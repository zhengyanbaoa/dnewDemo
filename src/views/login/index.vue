<template>
  <div class="box">
    <div class="loginBox">
      <div class="left">
        <img src="@/assets/logins.jpeg" alt="">
      </div>
      <div class="right">
        <h1>登录</h1>
        <el-form ref="form" :model="loginForm" :rules="rules">
          <el-form-item prop="user">
            <el-input v-model="loginForm.user" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input v-model="loginForm.pwd" placeholder="密码" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="btn" type="primary" @click="submitForm('loginForm')" v-loading.fullscreen.lock="fullscreenLoading">登 录</el-button>
            <span class="wrong">无法登录</span>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      fullscreenLoading: false,
      loginForm: {
        user: 'admin',
        pwd: 'admin',
      },
      rules: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        pwd: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    };
  },

  mounted() {
    
  },

  methods: {
    async submitForm() {
      this.fullscreenLoading = true;
      this.$refs.form.validate((valid) => {
          if (valid) {
            this.$store.dispatch('SETTOKEN', 'DDDDadfadffadffadff');
            setTimeout(() => {
              this.$router.push({
                path: '/home',
              });
              this.fullscreenLoading = false;
            }, 2000)
          } else {
            this.fullscreenLoading = false;
            return false;
          }
        });
    }
  }, 
};
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
}
.loginBox {
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, .8);
  background-color: #fff;
}
.left {
  img {
    display: inline-block;
    height: 100%;
    width: 100%;
  }
}
.right {
  height: 100%;
  width: 50%;
  padding: 10px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  .btn {
    width: 100%;
  }
  .wrong {
    color: #409EFF;
    text-decoration: underline;
    cursor: poiter;
  }
}
// 适配pc
@media screen and (min-width: 960px) {
  .right {
     width: 50vh;
  }
}

// 适配ipad
@media screen and (max-width: 1200px) {
  .left > img {
    display: none;
  }
  .right {
     width: 100%;
  }
}

// 适配phone
@media screen and (max-width: 750px) {
  // .loginBox {
  //   background-color: yellow;
  // }
}
</style>