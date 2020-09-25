<template>
  <div class="card">
    <div class="content">
      <div class="row" style="cursor:pointer;" >
        <div class="col-xs-5">
          <slot name="header"></slot>
        </div>
        <div class="col-xs-7">
          <slot name="content"></slot>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2"></div>
        <div class="col-xs-8"><slot name="body"></slot></div>
        <div class="col-xs-2"></div>
      </div>
    </div>
  
  </div>
</template>
<script>
  export default {
    name: 'stats-card'
  }

</script>
<style>
  
</style>
