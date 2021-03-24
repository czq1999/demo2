<template>
<el-row :span="4">
  <el-col :span="4">
    <h5>课设</h5>
    <el-menu :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      router
    >
       <el-menu-item index="/Home" >
        <i class="el-icon-menu"></i>
        <span slot="title">主页</span>
      </el-menu-item>

       <el-menu-item index="/Task1" >
        <i class="el-icon-menu"></i>
        <span slot="title">任务一</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>任务二</span>
        </template>
      <el-menu-item index="/Task2_1">
        <i class="el-icon-menu"></i>
        <span slot="title">地铁线路</span>
      </el-menu-item>
      <el-menu-item index="/Task2_2">
        <i class="el-icon-menu"></i>
        <span slot="title">地铁站点</span>
      </el-menu-item>
      </el-submenu>


      <el-menu-item index="/Task3">
        <i class="el-icon-menu"></i>
        <span slot="title">任务三</span>
      </el-menu-item>
      <el-menu-item index="/Task4">
        <i class="el-icon-menu"></i>
        <span slot="title">任务四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>