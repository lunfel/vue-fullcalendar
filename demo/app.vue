<template>
  <div>
  	<p>
  		Here is the demo of vue-fullcalendar, no jquery fullcalendar.js required!
  	</p>
    <full-calendar class="test-fc" :events="fcEvents" 
      first-day='1' locale="fr"
      @changeMonth="changeMonth"
      @eventClick="eventClick"
      @dayClick="dayClick"
      @moreClick="moreClick">
        <template slot="fc-event-card" scope="p">
            <p><i class="fa"></i> -{{ p.event.title }}- </p>
        </template>
    </full-calendar>
  </div>
</template>
<script>
let demoEvents = [
    {
      title    : 'Sunny 725-727',
      start    : '2017-02-25',
      end      : '2017-02-27',
      cssClass : 'family'
    },
    {
      title : 'Lunfel 726-727',
      start : '2017-02-26',
      end : '2017-02-27',
      cssClass : ['home', 'work']
    },
    {
      title : 'Lunfel 2/27-2/28',
      start : '2017-02-27',
      end : '2017-02-28'
    },
    {
        title : 'Lunfel 2/27-2/28',
        start : '2017-02-27',
        end : '2017-02-28'
    },
    {
        title : 'Lunfel 2/27-2/28',
        start : '2017-02-27',
        end : '2017-02-28'
    },
    {
        title : 'Lunfel 2/26-3/05',
        start : '2017-02-26',
        end : '2017-03-05'
    },
    {
        title : 'Lunfel 1/27-1/28',
        start : '2017-01-27',
        end : '2017-01-28'
    },
    {
        title : 'Lunfel 1/27-2/2',
        start : '2017-01-27',
        end : '2017-02-02'
    },
    {
        title : 'Lunfel 3/27-3/28',
        start : '2017-03-27',
        end : '2017-03-28'
    },
    {
        title : 'Lunfel 5/18-5/29',
        start : '2017-05-18T23:55:00-04:00',
        end : '2017-05-29T01:15:00-04:00'
    },
    {
        title : 'Overlap1',
        start : '2017-11-02T06:55:00-04:00',
        end : '2017-11-03T14:55:00-04:00'
    },
    {
        title : 'Overlap2',
        start : '2017-11-02T06:55:00-04:00',
        end : '2017-11-04T14:55:00-04:00'
    },
    {
        title : 'Overlap3',
        start : '2017-11-03T06:55:00-04:00',
        end : '2017-11-04T14:55:00-04:00'
    },
];

export default {
	data () {
		return {
            name:'Sunny!',
            fcEvents : demoEvents
        }
	},
  methods : {
    'changeMonth' (start, end, current) {
      console.log('changeMonth', start.format(), end.format(), current.format())
    },
    'eventClick' (event, jsEvent, pos) {
       console.log('eventClick', event, jsEvent, pos)
    },
    'dayClick' (day, jsEvent) {
      console.log('dayClick', day, jsEvent)
    },
    'moreClick' (day, events, jsEvent) {
      console.log('moreCLick', day, events, jsEvent)
    }
  },
  components : {
    'full-calendar' : require('src/fullCalendar')
  }
}
</script>
<style lang='scss'>
  .app{
    color:green;
  }
</style>