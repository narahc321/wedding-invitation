// Create Countdown
var Countdown = {
  
  // Backbone-like structure
  $el: $('.countdown'),
  
  // Params
  countdown_interval: null,
  total_seconds     : 0,
  
  // Initialize the countdown  
  init: function() {
    var now = new Date();
        var eventDate = new Date(2018, 7, 29 , 2 ,50);
        var currentTime = now.getTime();
        var eventTime = eventDate.getTime();
        var remTime = eventTime - currentTime;
    var s = Math.floor(remTime / 1000);
                var m = Math.floor(s / 60);
                var h = Math.floor(m / 60);
                var d = Math.floor(h / 24);
        d %= 100;
                h %= 24;
                m %= 60;
                s %= 60;

    // DOM
        this.$ = {
      days  : this.$el.find('.bloc-time.days .figure'),
        hours  : this.$el.find('.bloc-time.hours .figure'),
        minutes: this.$el.find('.bloc-time.min .figure'),
        seconds: this.$el.find('.bloc-time.sec .figure')
        };

    // Init countdown values
    // this.values = {
    // hours  : this.$.hours.parent().attr('data-init-value'),
    //     minutes: this.$.minutes.parent().attr('data-init-value'),
    //     seconds: this.$.seconds.parent().attr('data-init-value'),
    // };
    
    // Init countdown values
    this.values = {
      days : d,
    hours  : h,
        minutes: m,
        seconds:s,
    };
    
    // Initialize total seconds
    this.total_seconds = remTime/1000;

    // Animate countdown to the end 
    this.count();    
  },
  
  count: function() {
    
    var that    = this,
        $day_1 = this.$.days.eq(0),
        $day_2 = this.$.days.eq(1),
        $hour_1 = this.$.hours.eq(0),
        $hour_2 = this.$.hours.eq(1),
        $min_1  = this.$.minutes.eq(0),
        $min_2  = this.$.minutes.eq(1),
        $sec_1  = this.$.seconds.eq(0),
        $sec_2  = this.$.seconds.eq(1);
    
        this.countdown_interval = setInterval(function() {

        if(that.total_seconds > 0) {

            --that.values.seconds;              

            if(that.values.minutes >= 0 && that.values.seconds < 0) {

                that.values.seconds = 59;
                --that.values.minutes;
            }

            if(that.values.hours >= 0 && that.values.minutes < 0) {

                that.values.minutes = 59;
                --that.values.hours;
            }
            if(that.values.days >= 0 && that.values.hours < 0) {

                that.values.hours = 23;
                --that.values.days;
            }

            // Update DOM values
            // Hours
          that.checkHour(that.values.days, $day_1, $day_2);
          that.checkHour(that.values.hours, $hour_1, $hour_2);

            // Minutes
            that.checkHour(that.values.minutes, $min_1, $min_2);

            // Seconds
            that.checkHour(that.values.seconds, $sec_1, $sec_2);

            --that.total_seconds;
        }
        else {
            clearInterval(that.countdown_interval);
        }
    }, 1000);    
  },
  
  animateFigure: function($el, value) {
    
     var that         = this,
             $top         = $el.find('.top'),
         $bottom      = $el.find('.bottom'),
         $back_top    = $el.find('.top-back'),
         $back_bottom = $el.find('.bottom-back');

    // Before we begin, change the back value
    $back_top.find('span').html(value);

    // Also change the back bottom value
    $back_bottom.find('span').html(value);

    // Then animate
    TweenMax.to($top, 0.8, {
        rotationX           : '-180deg',
        transformPerspective: 300,
          ease                : Quart.easeOut,
        onComplete          : function() {

            $top.html(value);

            $bottom.html(value);

            TweenMax.set($top, { rotationX: 0 });
        }
    });

    TweenMax.to($back_top, 0.8, { 
        rotationX           : 0,
        transformPerspective: 300,
          ease                : Quart.easeOut, 
        clearProps          : 'all' 
    });    
  },
  
  checkHour: function(value, $el_1, $el_2) {
    
    var val_1       = value.toString().charAt(0),
        val_2       = value.toString().charAt(1),
        fig_1_value = $el_1.find('.top').html(),
        fig_2_value = $el_2.find('.top').html();

    if(value >= 10) {

        // Animate only if the figure has changed
        if(fig_1_value !== val_1) this.animateFigure($el_1, val_1);
        if(fig_2_value !== val_2) this.animateFigure($el_2, val_2);
    }
    else {

        // If we are under 10, replace first figure with 0
        if(fig_1_value !== '0') this.animateFigure($el_1, 0);
        if(fig_2_value !== val_1) this.animateFigure($el_2, val_1);
    }    
  }
};

// Let's go !
Countdown.init();