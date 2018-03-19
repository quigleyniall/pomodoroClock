$(document).ready(function(){
    var buzzer=$("#buzzer")[0];
    var buzzer1=$("#buzzer1")[0];
    var count=parseInt($("#num").html());
    var count1=parseInt($("#breakNum").html());
    console.log(count);
    $("#reset").hide();

    $("#start").click(function(){
        var counter=setInterval(timer, 1000);
        count=count*60;
        count1=count1*60;
        function timer(){
            //hide variables
            $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #title1, #title2, #breakNum").hide()
            $("#timeType").html("Session Time: ")
            $("#timeType").show();
            count-=1;
            if(count===0){
                buzzer.play();
                clearInterval(counter);

                var startBreak= setInterval(breakTimer,1000);
                $("#num").hide();
            }
            if(count%60>=10){
                $("#num").html(Math.floor(count/60)+":"+count%60);
            }
            else{
                $("#num").html(Math.floor(count/60)+":"+"0"+count%60);
            }

            function breakTimer(){
                $("#timeType").html("Break Time: ");
                $("#timeType").show();
                $("#breakNum").show();
                count1-=1;
                if(count1===0){
                    buzzer1.play();
                    clearInterval(startBreak);
                    $("#reset").show();
                    $("#timeType, #breakNum").hide();
                }
                if(count1%60>=10){
                    $("#breakNum").html(Math.floor(count1/60)+":"+count1%60);
                }
                else{
                    $("#breakNum").html(Math.floor(count1/60)+":"+"0"+count1%60);
                }
            }
        }




    });
    $("#reset").click(function(){
        count=25;
        count1=25;
        $("#num").html(count);
        $("#breakNum").html(count1);
        $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #title1, #title2, #breakNum, #num").show();
        $("#reset").hide();


    });

    $("#minus5Clock").click(function(){
        if(count>5){
            count-=5;
            $("#num").html(count)

        }

    });
    $("#add5Clock").click(function(){
        if(count>0){
            count+=5;
            $("#num").html(count)

        }

    });
    $("#minus5Break").click(function(){
        if(count1>5){
            count1-=5;
            $("#breakNum").html(count1)

        }

    });
    $("#add5Break").click(function(){
        if(count1>0){
            count1+=5;
            $("#breakNum").html(count1)

        }

    });

});





