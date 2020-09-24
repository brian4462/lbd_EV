<template>
  <div>
    <!--Stats cards-->
    <div class="row">
      <div class="col-md-6 col-lg-3 col-xl-3" v-for="survivors in survivorsCards" :key="survivors.en_nm">
        <stats-card>
          <div slot="header">
            <img style="max-width:120px;" :src="survivors.src">
          </div>
          <div class="numbers" slot="content">
            <p>{{survivors.ko_nm}}</p>
            {{survivors.en_nm}}
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
        survivorsCards: [
            {
            src: "/static/img/survivors/ace1.png",
            ko_nm: "에이스 비스콘티",
            en_nm: "Ace Visconti",
            },
            {
            src: "/static/img/survivors/ace1.png",
            ko_nm: "에이스 비스콘티",
            en_nm: "Ace Visconti",
            },
            {
            src: "/static/img/survivors/ace1.png",
            ko_nm: "에이스 비스콘티",
            en_nm: "Ace Visconti",
            },
            {
            src: "/static/img/survivors/ace1.png",
            ko_nm: "에이스 비스콘티",
            en_nm: "Ace Visconti",
            },
            {
            src: "/static/img/survivors/ace1.png",
            ko_nm: "에이스 비스콘티",
            en_nm: "Ace Visconti",
            },
            {
            src: "/static/img/survivors/ace1.png",
            ko_nm: "에이스 비스콘티",
            en_nm: "Ace Visconti",
            },
            {
            src: "/static/img/survivors/ace1.png",
            ko_nm: "에이스 비스콘티",
            en_nm: "Ace Visconti",
            },
            {
            src: "/static/img/survivors/ace1.png",
            ko_nm: "에이스 비스콘티",
            en_nm: "Ace Visconti",
            }
        ]
        }
    }
    };
</script>
<style>

</style>
