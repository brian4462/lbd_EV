<template>
  <div>
    <!--Stats cards-->
    <div class="row">
      <div :class="[selected==survivors.surv_id?'col-lg-12 col-md-12 col-sm-12 ex_custom':'col-lg-3 col-md-4 col-sm-6 ex_custom',selected==survivors.surv_id?'active':'']" @click="toggleActive(survivors.surv_id)" v-for="survivors in survivorsCards"  :id ="'div_'+survivors.surv_id" :ref="survivors.surv_id" :key="survivors.surv_id">
        <stats-card>
            <div slot="header" v-show="selected==survivors.surv_id?false:true">
              <img style="max-width:120px;max-height:170px;" :src="survivors.photo_path">
            </div>
            <div class="numbers" slot="content" v-show="selected==survivors.surv_id?false:true">
              <p>{{survivors.surv_nm_ko}}</p>
              {{survivors.surv_nm_en}}
            </div>
            <div class="body" slot="body" v-show="selected==survivors.surv_id?true:false">
              <div class="summary">
                  <div class="row">
                    <transition name="fadeLeft">
                      <div class="col-xs-4" v-if="selected==survivors.surv_id"><img :src="survivors.photo_path2"></div>
                    </transition>
                    <div class="col-xs-8">
                      <transition name="fadeLeft">
                        <div v-if="selected==survivors.surv_id" style="transition-delay: 1s;"><h2>{{survivors.surv_nm_ko}}</h2></div>
                      </transition>
                      <transition name="fadeLeft">
                        <div v-if="selected==survivors.surv_id" style="transition-delay: 1.5s;"><h3>{{survivors.surv_nm_en}}</h3></div>
                      </transition>
                      <transition name="fadeRight">
                        <div v-if="selected==survivors.surv_id" style="transition-delay: 2s;">
                          <div style="text-align:right; margin-top:50px;"><h4>{{survivors.role}}</h4></div>
                          <div style="text-align:right;">
                            <h5 v-if="survivors.gender=='M'">{{survivors.race_nation}} 남성</h5>
                            <h5 v-else>{{survivors.race_nation}} 여성</h5>
                          </div>
                          <div style="text-align:right;">
                            <h5 v-if="survivors.difficulty=='easy'" style="color:green;">쉬움</h5>
                            <h5 v-else-if="survivors.difficulty=='normal'" style="color:yellow;">보통</h5>
                            <h5 v-else-if="survivors.difficulty=='hard'" style="color:red;">어려움</h5>
                          </div>
                          <div style="text-align:right;" v-if="survivors.dlc != ''"><blockquote style="border-left:none; padding-right:none;"><p>DLC : {{survivors.dlc}}</p></blockquote></div>
                        </div>
                      </transition>
                    </div>
                  </div>
              </div>
              <transition name="fade">
                <div v-if="selected==survivors.surv_id" class="description" style="margin-top:20px; transition-delay: 2.5s;" v-html="survivors.description"></div>
              <transition name="fade">
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

  .fadeLeft-enter-active, .fadeLeft-leave-active, .fadeRight-enter-active, .fadeRight-leave-active, .fade-enter-active, .fade-leave-active {
    transition: opacity 2s, transform 2s;
    
  }
  .fadeLeft-enter, .fadeLeft-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }
  .fadeRight-enter, .fadeRight-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
