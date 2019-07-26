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

/* For generating nback trials */
const generate_nback = function(trials=1, n=1, pbait=(0.2),ptarget=0.8,stimuli=null) {
	/**
	* Generates the nback trials in a _babe conform format.
	*
	* Two loops: The first loop generates a random list of stimuli (files),
	the second loop generates a list of trial objects based on the list of stimuli.
	*
	*@param {int}	trials	Number of trials.
	*@param {int}	n 		How many stimuli ahead lies the target.
	*@param {float} pbait	Probability of generating a "baiting" stimulus.
	*@param {float}	ptarget Name of the block or group, Expected: "normal" ,"lure" or "practice".
	*
	*@param {object}stimuli Listlike object with numbers
	*@return {object} An object containing all the trials in right order.
	*/
	
	files = []
	// Make a list with all numbers (and associated filepaths :: e.g. 'images/5.png')
	
	if(stimuli == null){
		for(i=0;i<trials;i++){
			
			// add a "target" with probability ptarget
			if(i >= n && Math.random() <= ptarget){
				console.log("Target call!")
				target = files[i-n]
				files.push(target)
				
			// else add bait with porbability pbait
			} else if(i >= n && Math.random() <= pbait){
				bait = files[i-n+1]
				files.push(bait)
				
			} else {
				numb = String(Math.ceil(Math.random() * 9))
				files.push("images/" + numb + ".png")
			}
		}
	} else {
		for (var i=0; i<=stimuli.length;i++) {
			files.push("images/"+String(stimuli[i])+".png")
		}
	}
	nback_trials = []
	for(var i=0; i<trials; i++){
		// We have to wait till i > n. If i <= n we can not compare the ith stimulus with the (i-n)th stimulus. 
		
		// determine the type
		if (i>=n){
			if(files[i] == files[i-n]){
				type = "match";
			} else {
				type="different";
			}
		} else {
			type = "different";
		}
		
		//determine wetehr it's a lure
		if(files[i-n+1] == files[i]){
				stim_type = "lure"
			} else {
				stim_type = "normal"
			}
		
		// add the stimulus to the list of trials ("nback_trials")
		nback_trials.push(
			{	
				question: "",
				picture: files[i],
				key1: 'd',
				key2: 'm',         
				d: 'different',
				m: 'match',
				expected: type,
				stim_type: stim_type, //****
				ID:ID,
				n:n,
				pbait:pbait*(1-ptarget), // because pbait gets called after ptarget is checked therefore the probability of a bait is (1-ptarget*pbait)
				ptarget:ptarget
			}
		)
			
	}
	
	return nback_trials
}


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

const timeout_press = function(time){ 
				setTimeout(function() {
					var keyboardEvent = document.createEvent("KeyboardEvent");
					var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

					keyboardEvent[initMethod](
					  "keydown", // event type: keydown, keyup, keypress
					  true,      // bubbles
					  true,      // cancelable
					  window,    // view
					  false,     // ctrlKey
					  false,     // altKey
					  false,     // shiftKey
					  false,     // metaKey
					  111,        // keyCode: unsigned long - o
					  0          // charCode: unsigned long - the Unicode
					);
					// Trigger keydown 
					document.dispatchEvent(keyboardEvent);
					console.log("Triggered")
				}, time)
			}	


// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/

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
					$(".babe-view-question")[0].innerHTML="<p style='color:green'> <b>CORRECT"
				} else {
					$(".babe-view-question")[0].innerHTML="<p style='color:red'> <b>INCORRECT"
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
					$(".babe-view-question")[0].innerHTML="<p style='color:red'> <b>SLOW"
					$("body").off("keydown", handleKeyPress);
				
				setTimeout( function() {
					babe.findNextView();
				}, 300);
					
				} else {
					console.log("Response came in time!")
				}
				
			},time);
			
		}
		// This is within a timeout for stability reasons: to avoid the browser from registering too many keypresses and skipping a view 
		setTimeout(function(){
        $("body").on("keydown", handleKeyPress);
		// Trigger time out after everything has been loaded
		trigger_time_limit()
		}, 100)
    }

	