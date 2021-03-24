<template>
  <div>
    <el-container>
      <el-main>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-upload
        class="upload-demo"
        ref="upload"
        :on-success="handleSubmitSuccess"
        :on-error="handleSubmitError"
        :action="action_link"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>
        <div slot="tip" class="el-upload__tip">请上传地铁站点文件</div>
      </el-upload>
      <br>
      <el-button size="small" type="primary" @click="handleStopTable">生成</el-button><br>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          width="100"
          prop="number"
          label="序号"
         >
        </el-table-column>
        <el-table-column
          prop="station_name"
          label="站点名"
          sortable
          width="150"
          >
        </el-table-column>
        <el-table-column
          prop="location"
          label="位置"
          >
        </el-table-column>
        <el-table-column
          prop="route"
          label="所属线路"
          sortable
          width="150"
          >
        </el-table-column>
        <el-table-column
          prop="route_common"
          label="经过线路"
          width="180"
          >
        </el-table-column>

        <el-table-column
          fixed="right"
          label="操作"
          width="180"
          >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

    </el-form>
      </el-main>
      <el-footer>
        <el-pagination
          :current-page="currentPage"
          :page-sizes="[ 5, 10, 20]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-footer>
    </el-container>
  </div>

</template>

<script>
  export default {
    created(){
      this.getTableData()
    },
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },

        currentPage:1,
        pagesize: 5,
        total:0,

        action_link: this.$settings.base_url+'/task2/receive_stop.action',
        tableData: []
      }
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleSubmitSuccess(response){
        this.$message.success(response.msg)
      },
      handleSubmitError(response){
        this.$message.success(response.msg)
      },
      handleStopTable(){
        if(this.tableData.length){
          this.$message.warning('数据已入库，请勿重复提交！！！')
        }
        else{
          this.$axios.post(this.$settings.base_url+'/task2/generate_stop_table.action').then(response => {
            console.log(response.data)
            if(response.data.success){
              this.$message.success(response.data.msg)
              this.tableData = response.data.tableData
            }
            else{
              this.$message.error(response.data.msg)
            }
          })
        }

      },
      getTableData(){

        this.$axios.post(this.$settings.base_url+'/task2/get_stop_table.action',
            {currentPage:this.currentPage,pagesize:this.pagesize},{emulateJSON: true}).then(response => {
          // this.tableData = response.data.tableData
          console.log(response.data)
          if (response.data.code == 1){
            this.total = response.data.total;
            this.tableData = response.data.tableData;
          }
          else{
            this.$message.error(response.data.msg);
          }
        })
      },
      handleSizeChange(size){
        this.pagesize = size
        this.getTableData()
      },
      handleCurrentChange(currentPage){
        this.currentPage = currentPage
        this.getTableData()
      },
    }
  }
</script>

<style scoped>
.el-main {

    /*text-align: center;*/
    /*line-height: 160px;*/
  }
.el-footer {

  /*position:relative;*/
  /*bottom:0;*/
  }
</style>