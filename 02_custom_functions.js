// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here


/* Helper functions
*
*
*/

/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here


/* Hooks  
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/

/* Modified answer_container_generator for nback: optional_button_choice + question*/
const nback_answer_container_generator = function (config, CT) {
        return `<div class='babe-view-answer-container'>
                    <label for='o1' class='babe-response-buttons'>${config.data[CT].key1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].key1} />
                    <input type='radio' name='answer' id='o2' value=${config.data[CT].key2} />
                    <label for='o2' class='babe-response-buttons'>${config.data[CT].key2}</label>
                   </div>`
}


/* Modified handle response function of keypress for nback functionality */
// modified handle_response_function of keypress for nback functionality
const nback_response_handler = function (config, CT, babe, answer_container_generator, startingTime) {
	/** The only modifications are: 
    * 1. the addition of a timeout
    * 2. Addition of parameters "group" and "stimulus type" to trial data.
    */ 
		var response_in_time = false
        $(".babe-view").append(answer_container_generator(config, CT));
		
        const handleKeyPress = function(e) {
			console.log("HandleKeyPress called?")
			console.log("HandleKeyPress Button is:")
			console.log(e.which)
            const keyPressed = String.fromCharCode(
                e.which
            ).toLowerCase();
			
            if (keyPressed === config.data[CT].key1 || keyPressed === config.data[CT].key2) {
				response_in_time = true
                let correctness;
                const RT = Date.now() - startingTime; // measure RT before anything else

                if (
                    config.data[CT].expected ===
                    config.data[CT][keyPressed.toLowerCase()]
                ) {
                    correctness = "correct";
                } else {
                    correctness = "incorrect";
                }
				
				//**** Addition (3.)
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    key_pressed: keyPressed,
                    correctness: correctness,
                    RT: RT,
					n:config.n
                };

                trial_data[config.data[CT].key1] =
                    config.data[CT][config.data[CT].key1];
                trial_data[config.data[CT].key2] =
                    config.data[CT][config.data[CT].key2];	
                trial_data = babeUtils.view.save_config_trial_data(config.data[CT], trial_data);

                babe.trial_data.push(trial_data);
                
				
				//feedback for the user
				if(correctness == "correct"){
					$(".babe-view-answer-container")[0].innerHTML="<p style='color:green;'> <b>CORRECT"
				} else {
					$(".babe-view-answer-container")[0].innerHTML="<p style='color:red;'> <b>INCORRECT"
				};
				
				setTimeout( function() {
					babe.findNextView();
				}, 300);
				
				// Perhaps the off event for keydown has to be triggered after the time out to prevent further input to be registered
				$("body").off("keydown", handleKeyPress);
            }
        };
		
		const trigger_time_limit = function(time=3900) {
			setTimeout(function(){
				
				/* We need to make sure, the timeout only comes into effect,
				if the User did not press any valid key in time. */
				
				if(!response_in_time){
					
					let trial_data = {
						trial_name: config.name,
						trial_number: CT + 1,
						key_pressed: "none",
						correctness: "incorrect",
						RT: 4001,
						n:config.n
					};
					
					// Save the data 
					trial_data[config.data[CT].key1] =
						config.data[CT][config.data[CT].key1];
					trial_data[config.data[CT].key2] =
						config.data[CT][config.data[CT].key2];	
					trial_data = babeUtils.view.save_config_trial_data(config.data[CT], trial_data);

					babe.trial_data.push(trial_data);
				
					// Feedback for the user
					$(".babe-view-answer-container")[0].innerHTML="<p style='color:red'> <b>SLOW"
					$("body").off("keydown", handleKeyPress);
				
				setTimeout( function() {
					babe.findNextView();
				}, 400);
					
				} else {
					console.log("Response came in time!")
				}
				
			},time);
			
		}
		// This is within a timeout for stability reasons: to avoid the browser from registering too many keypresses and skipping a view 
		setTimeout(function(){
		
		/* Register ButtonPress */
		$("input[name=answer]").on("change", function() {
			var key = $("input[name=answer]:checked").val();
			var buttonevent = new CustomEvent("buttoncheck");
			buttonevent.which = key.charCodeAt(0);
			handleKeyPress(buttonevent);
        });
		/* Register KeyPress */
        $("body").on("keydown", handleKeyPress);
		
		/* Trigger AutoPress (time out after everything has been loaded) */
		trigger_time_limit()
		}, 100)
    }

	
