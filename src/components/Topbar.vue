<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <el-button class="primary">保存</el-button>
        <el-button>预览</el-button>
      </div>
    </div>
  </div>

</template>

<script>
	export default {
		name: "topbar"
	}
</script>

<style>
  #topbar {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
  }
  #topbar > .wrapper {
    min-width: 1024px;
    max-width: 1440px;
    margin: 0 auto;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }
  #topbar  .logo {
    font-size: 24px;
    color: #000;
  }
  /*button {*/
    /*width: 72px;*/
    /*height: 32px;*/
    /*border: none;*/
    /*cursor: pointer;*/
    /*font-size: 16px;*/
    /*background: #ddd;*/
    /*color: #222;*/
  /*}*/
</style>
