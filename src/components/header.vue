<template>
  <div class="full-calendar-header">
    <div class="header-left">
      <slot name="header-left">
      </slot>
      <button class="prev-month btn btn-default" @click.stop="goPrev"><i :class="leftBtnIcon"></i></button>
      <button class="next-month btn btn-default" @click.stop="goNext"><i :class="rightBtnIcon"></i></button>
      <button class="today btn btn-default">{{ text.today }}</button>
    </div>
    <div class="header-center">
      <span class="title">{{title}}</span>
    </div>
    <div class="header-right">
      <slot name="header-right">
      </slot>
    </div>
  </div>
</template>
<script type="text/babel">
  import dateFunc from './dateFunc'
  import moment from 'moment';
  import lang from '../dataMap/langSets';

  export default {
    props : {
      currentMonth : {},
      titleFormat  : {},
      firstDay     : {},
      monthNames   : {},
      locale       : String,
      leftBtnIcon  : {
        default: () => ["fa", "fa-chevron-left"],
      },
      rightBtnIcon : {
        default: () => ["fa", "fa-chevron-right"]
      }
    },
    computed: {
      title () {
        if (!this.currentMonth) return;
        return this.currentMonth.locale(this.locale).format('MMMM YYYY')
      },
      text () {
        return lang[this.locale];
      }
    },
    methods : {
      goPrev () {
        var newMonth = moment(this.currentMonth).subtract(1, 'months').startOf('month');
        this.$emit('change', newMonth);
      },
      goNext () {
        var newMonth = moment(this.currentMonth).add(1, 'months').startOf('month');
        this.$emit('change', newMonth);
      }
    }
  }
</script>
<style lang="scss">
.full-calendar-header{
  display: flex;
  align-items: center;
  .header-left,.header-right{
    flex:1;
  }
  .header-center{
    flex:3;
    text-align:center;
    .title{
      margin: 0 10px;
    }
    .prev-month,.next-month{
      cursor: pointer;
    }
  }
}
</style>
