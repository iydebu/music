var audElem= document.getElementsByTagName('audio')[0].getAttribute('id');
         $(".cassette").click(function(){
            song(Lofi);
            });
        var Lofi = document.getElementById(audElem);
            function song(a){
            $(".teethBox").addClass("playing")
            $(".tape-ribbon").addClass("play")
            $(".tape-ribbon-two").addClass("play-two")
        //start playing at 0
            a.play();
            }
//Song Credits : https://youtu.be/xVf4Zk8CBj0

//design credits: https://dribbble.com/shots/4205824-Cassette-Tape