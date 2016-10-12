define(['durandal/app','knockout','jquery-csv','underscore','./data','plugins/router'], function (app,ko,jquery_csv,_,data,router) {
    var results = {};
    var colors = ['1','2','3','4','5','6','7','8','9','10'];
    var scores = {
      '1':'',
      '2':'',
      '3':'',
      '4':'',
      '5':'',
      '6':'',
      '7':'',
      '8':''
    };
    var imgs = {
      '1':'a',
      '2':'b',
      '3':'c',
      '4':'d',
      '5':'e',
      '6':'f',
      '7':'g',
      '8':'h'
    };


    return {
      results,
      activate: function(){
        results = data.results;
        console.log(results);
        // _.each( results, function( val, key ) {
        //
        //     var total = val/3;
        //     if (total < -8) {
        //       scores[key] = colors[0];
        //     }
        //     else if (total < -6) {
        //       scores[key] = colors[1];
        //     }
        //     else if (total < -4) {
        //       scores[key] = colors[2];
        //     }
        //     else if (total < -2) {
        //       scores[key] = colors[3];
        //     }
        //     else if (total < 0) {
        //       scores[key] = colors[4];
        //     }
        //     else if (total < 2) {
        //       scores[key] = colors[5];
        //     }
        //     else if (total < 4) {
        //       scores[key] = colors[6];
        //     }
        //     else if (total < 6) {
        //       scores[key] = colors[7];
        //     }
        //     else if (total < 8) {
        //       scores[key] = colors[8];
        //     }
        //     else {
        //       scores[key] = colors[9];
        //     }
        //});


      },
      compositionComplete: function(){

        results = data.results;
        console.log(results);
        _.each( results, function( val, key ) {

            var total = val/3;
            if (total < -8) {
              scores[key] = colors[0];
            }
            else if (total < -6) {
              scores[key] = colors[1];
            }
            else if (total < -4) {
              scores[key] = colors[2];
            }
            else if (total < -2) {
              scores[key] = colors[3];
            }
            else if (total < 0) {
              scores[key] = colors[4];
            }
            else if (total < 2) {
              scores[key] = colors[5];
            }
            else if (total < 4) {
              scores[key] = colors[6];
            }
            else if (total < 6) {
              scores[key] = colors[7];
            }
            else if (total < 8) {
              scores[key] = colors[8];
            }
            else {
              scores[key] = colors[9];
            }

          });

        _.each(scores,function(val,key){
          $('#img' + key).attr('src','img/figures/'+ imgs[key] + '-' + val + '.jpg');
          console.log('img/figures/'+ imgs[key] + '-' + val + '.jpg');
          console.log(key,val);
        });

        setTimeout(
            function() {
             window.print();
            }, 1000);
        setTimeout(
          function() {
           router.navigate('');
          }, 17000);

      },
      deactivate:function(){
        var scores = {
          '1':'',
          '2':'',
          '3':'',
          '4':'',
          '5':'',
          '6':'',
          '7':'',
          '8':''
        };
      }


    };


});
