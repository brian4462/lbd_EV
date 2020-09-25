<template>
  <div>
    <!--Stats cards-->
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6" v-for="survivors in survivorsCards" :key="survivors.surv_id">
        <stats-card>
          <div slot="header">
            <img style="max-width:120px;max-height:170px;" :src="survivors.photo_path">
          </div>
          <div class="numbers" slot="content">
            <p>{{survivors.surv_nm_ko}}</p>
            {{survivors.surv_nm_en}}
          </div>
        </stats-card>
      </div>
    </div>
  </div>

</template>
<script>
    import { StatsCard, ChartCard } from "@/components/index";
    import Chartist from 'chartist';
    export default {
    components: {
        StatsCard,
        ChartCard
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data() {
        return {
        survivorsCards: []
        }
    },
    created(){
      this.$http.get('/api/character/getSurvivors')
      .then((res) => {
          this.survivorsCards = res.data;
          console.log(this.survivorsCards);
      })
      .catch((err)=>{
          console.error(err);
      });
    }
    };
</script>
<style>

</style>
