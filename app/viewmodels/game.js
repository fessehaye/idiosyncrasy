define(['plugins/router','durandal/app','knockout','jquery-csv','underscore','./data','jquery-bigtext'], function (router,app,ko,jquery_csv,_,data,jquery_bigtext) {
    var questions = {
      '1':[],
      '2':[],
      '3':[],
      '4':[],
      '5':[],
      '6':[],
      '7':[],
      '8':[]
    };
    var question = ko.observable('');

    var scores = {
      '1':0,
      '2':0,
      '3':0,
      '4':0,
      '5':0,
      '6':0,
      '7':0,
      '8':0
    };

    var questionCount = ko.observable(0);
    var category = ko.observable('');
    var chosen =  [];

    function askQuestion(){
      var quiz = chosen[questionCount()];
      console.log(quiz);
      quiz.answers.forEach(function(ans){
        ans.classes = ko.observable('flex-item');
      });
      question(quiz);
      category(chosen[questionCount()].category);
    }

    function getScore(answer){
      //console.log(answer.points);
      scores[category().toString()] += parseInt(answer.points);
      console.log(scores);
      console.log(questionCount(),chosen.length);
      answer.classes('flex-item2 animated pulse');


      setTimeout(
        function() {
          answer.classes('flex-item');
          if (questionCount() >= chosen.length - 1) {
            data.results = scores;
            router.navigate('results');
          }
          else {
            questionCount(questionCount() + 1);
            askQuestion();
          }
        }, 1000);

    }


    return {
      questions,
      question,
      category,
      questionCount,
      askQuestion,
      getScore,
      activate: function(){
        questions = {
          '1':[],
          '2':[],
          '3':[],
          '4':[],
          '5':[],
          '6':[],
          '7':[],
          '8':[]
        };
        question('');

        scores = {
          '1':0,
          '2':0,
          '3':0,
          '4':0,
          '5':0,
          '6':0,
          '7':0,
          '8':0
        };

        questionCount(0);
        category('');
        chosen =  [];

        $('.page-host').css('background-color','#4f5b73');
        // $.get( "../data/score.csv", function( score_data ) {
        //   $.get( "../data/QA.csv", function( QA ) {

            var qa = data.qa;
            //qa.shift();
            var scores = data.scores;
          
            for (var i = 0; i < qa.length; i++) {
              var q = qa[i];
              var score = scores[i];
              var question_obj = {
                test: q[0],
                category: q[8],
                answers: []
              }
              var k = 1;

              while ( q[k] !== "") {
                question_obj.answers.push({
                  name: q[k],
                  points: score[k-1]
                });
                k++;
              }
              questions[question_obj.category].push(question_obj)
            }

            _.each( questions, function( val, key ) {
              if ( val ) {
                chosen = chosen.concat(_.sample(questions[key.toString()],3));
              }
            });

            chosen = _.shuffle(chosen);

            askQuestion();

        //   });
        // });
      },
      deactivate:function(){

        questions = {
          '1':[],
          '2':[],
          '3':[],
          '4':[],
          '5':[],
          '6':[],
          '7':[],
          '8':[]
        };
        question('');

        scores = {
          '1':0,
          '2':0,
          '3':0,
          '4':0,
          '5':0,
          '6':0,
          '7':0,
          '8':0
        };

        questionCount(0);
        category();
        chosen =  [];

      }
    };


});
