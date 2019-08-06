// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the babe-object as input
// and has to call babe.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call babe.trial_data.push(trial_data) to save the trial information

// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the babe-object as input
// and has to call babe.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call babe.trial_data.push(trial_data) to save the trial information

/* For generating nback trials */
const generate_nback = function(trials=1, n=1, pbait=(0.2),ptarget=0.8,stimuli=null) {
	/**
	* Generates the nback trials in a _babe conform format.
	*
	* Two loops: The first loop generates a random list of stimuli (files),
	the second loop generates a list of trial objects based on the list of stimuli.
	*
	*@param {int}		trials		Number of trials.
	*@param {int}		n 			How many stimuli ahead lies the target.
	*@param {float} 	pbait		Probability of generating a "baiting" stimulus.
	*@param {float}		ptarget 	Probability of generating a target stimulus.
	*
	*@param {object}	stimuli 	Listlike object with numbers.
	*@return {object} 	nback_trials An object containing all the trials in right order.
	*/
	
	if ((pbait+ptarget) > 1) {
		throw "ValueError: Cumulative probability pbait+ptarget can't be > 1!";
		return;
	}
	
	/* Necessary correction, for pbait, because, let's say we want pbait =0.3. If that's the parameter value, the actual probability to get a bait would be
	(1-parget) * 0.3, which is smaller than pbait.*/
	pbait_corrected = pbait/(1-ptarget);
	//console.log("pbait:" + String(pbait) +" = (1-ptarget)*pbait_corrected")
	//console.log("pbait_corrected:" + String(pbait_corrected))
	
	files = [];
	// Make a list with all numbers (and associated filepaths :: e.g. 'images/5.png')
	if(stimuli == null){
		for(i=0;i<trials;i++){
			
			// add a "target" with probability ptarget
			if(i >= n && Math.random() <= ptarget){
				target = files[i-n]
				files.push(target)
				
			// else add bait with probability pbait
			} else if(i >= n && Math.random() <= pbait_corrected){
				// 0.5 chance to make it either a lure at n+1 or n-1
				//at n+1
				if(i > n+1 && Math.random() <= 0.5){
					bait = files[i-n-1]
				} else {
				//at n-1
					bait = files[i-n+1]
				}
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
	// determine the attributes of the stimulus first
	for(var i=0; i<trials; i++){
		// We have to wait till i > n. If i <= n we can not compare the ith stimulus with the (i-n)th stimulus. 
		
		// determine the attributes of the stimulus
		if (i>=n){
			if(files[i] == files[i-n]){
				type = "match";
			} else {
				type="different";
			}
		} else {
			type = "different";
		}
		
		//determine whether it's a lure
		if(files[i-n+1] == files[i]){
			stim_type = "lure-n-1";
		} else if(files[i-n-1] == files[i]){
			stim_type = "lure-n+1"
		} else if(files[i-n] == files[i]){
			stim_type = "target"
		} else {
			stim_type = "non-target"
		}
		
		// add the stimulus to the list of trials ("nback_trials")
		nback_trials.push(
			{	
				question: "?",
				picture: files[i],
				key1: 'd',
				key2: 'm',         
				d: 'different',
				m: 'match',
				expected: type,
				stim_type: stim_type, 
				ID:ID,
				n:n,
				pbait:pbait,
				ptarget:ptarget
			}
		)
			
	}
	
	return nback_trials
}