
        let score= JSON.parse(localStorage.getItem('score'))|| {
                wins: 0,
                losses: 0,
                ties: 0
            }


        updatescore();

        /*if(!score){
            score={
                wins:0,
                losses: 0,
                ties:0
            }
        }*/
        let isautoplaying= false;
        let intervalid
        function autoplay(){
            if(!isautoplaying){
               intervalid= setInterval(function(){
                const player_move = pickcomputermove();
                playgame(player_move);
            },1000);
            isautoplaying=true;
            }
            
            else {
                clearInterval(intervalid);
                isautoplaying= false;
            }
            
        }


        function playgame(playermove){
            const comMove = pickcomputermove();
            let result = '';
            if (playermove==='scissor'){
                if (comMove === 'rock') {
                    result = 'you lose';
                }
                else if (comMove === 'paper') {
                    result = 'you win';
                }
                else if (comMove === 'scissor') {
                    result = 'tie';
                }
            }

            else if(playermove==='paper'){
                
                    if (comMove === 'rock') {
                        result = 'you win';
                    }
                    else if (comMove === 'paper') {
                        result = 'tie';
                    }
                    else if (comMove === 'scissor') {
                        result = 'you lose';
                    }

            }
            else if(playermove==='rock'){
                 
                if (comMove === 'rock') {
                    result = 'tie';
                }
                else if (comMove === 'paper') {
                    result = 'you lose';
                }
                else if (comMove === 'scissor') {
                    result = 'you win';
                }
            }

            if(result === 'you win'){
                score.wins +=1;
            }
            else if(result ==='you lose'){
                score.losses+=1;
            }
            else if(result==='tie'){
                score.ties+=1;
            }

            localStorage.setItem('score',JSON.stringify(score));
             updatescore();
            
            document.querySelector('.js-result').innerHTML=result;

            document.querySelector('.js-move').innerHTML=`
            you
        <img src="./images/${playermove}-emoji.png" class="css-img" alt="">
        <img src="./images/${comMove}-emoji.png"class="css-img"  alt="">
        computer`
            
//             alert(`you picked ${playermove}. Computer picked  ${comMove}. result is ${result}.
// wins: ${score.wins}, losses: ${score.losses},ties: ${score.ties}`);
            
        }
        function updatescore(){
            document.querySelector('.js-score').innerHTML = `
        wins: ${score.wins}  losses: ${score.losses}   ties: ${score.ties}`
        }
       
        function  pickcomputermove(){
             let comMove = ''; 
                const randomNUmber = Math.random();
                
            if (randomNUmber >= 0 && randomNUmber < 1 / 3) {
                comMove = 'rock';
            }
            else if (randomNUmber >= 1 / 3 && randomNUmber < 2 / 3) {
                comMove = 'paper';
            }
            else if (randomNUmber >= 2 / 3 && randomNUmber < 1) {
                comMove = 'scissor';
            }
            return comMove;
        }
