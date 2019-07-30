// In this file you initialize and configure your experiment using babeInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };
	
	
	/* Make a control trial with p=0.3*/
	if(Math.random() < 0.3){
		blocks = [block_3back, block_4back];
	} else{
		blocks = [block_3back_control, block_4back_control];
	}
	
	// Randomize the order of blocks 
	r = Math.round(Math.random()) // 0 or 1
	block1 = blocks[r]
	block2 = blocks[(r+1)%2]  // (0+1)%2 = 1, (1+1)%2=0 ~ the other

    
    window.babe_monitor = babeInit({
        views_seq: [
            intro,
            instructions,
			pre_practice1,
			nback_practice1,
			pre_practice2,
			nback_practice2,
			pre_practice3,
			nback_practice3,
			pre_practice4,
			nback_practice4,
			post_practice,
			block1.pre_practice,
			block1.practice,
			block1.post_practice,
			block1.trials,
			block2.pre_practice,
			block2.practice,
			block2.post_practice,
			block2.trials,
            post_test,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "83",
            serverAppURL: "https://babe-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "directLink",
            contact_email: "dguen@uos.de",
            prolificURL: "Unnecessary"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                forced_choice_2A.name,
				"control",
				"main",
				"practice"
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
