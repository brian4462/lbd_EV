<template>
  <div>
    <!--Stats cards-->
    <div class="row">
      <div :class="[selected==survivors.surv_id?'col-lg-12 col-md-12 col-sm-12 ex_custom':'col-lg-3 col-md-4 col-sm-6 ex_custom',selected==survivors.surv_id?'active':'']" @click="toggleActive(survivors.surv_id)" v-for="survivors in survivorsCards"  :id ="'div_'+survivors.surv_id" :ref="survivors.surv_id" :key="survivors.surv_id">
        <stats-card>
            <div slot="header">
              <img style="max-width:120px;max-height:170px;" :src="survivors.photo_path">
            </div>
            <div class="numbers" slot="content">
              <p>{{survivors.surv_nm_ko}}</p>
              {{survivors.surv_nm_en}}
            </div>
            <div class="body" slot="body" v-show="selected==survivors.surv_id?true:false" v-html="survivors.description">
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
          selected : null, 
          survivorsCards: []
        }
    },
    created(){
      this.$http.get('/api/character/getSurvivors')
      .then((res) => {
          this.survivorsCards = res.data;
      })
      .catch((err)=>{
          console.error(err);
      });
    },
    methods: {
      toggleActive: function (id, event) {
        if(this.selected != null && this.selected==id){
          this.selected = null;
        }else{
          this.selected=id;
        }
        
      }
    
    }
    };
</script>
<style>
  .ex_custom {
    transition:all .3s ease;
  }
  .ex_custom .body {
    margin-top:20px;
    margin-bottom:20px;
  }

</style>
