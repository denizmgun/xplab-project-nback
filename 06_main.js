// In this file you initialize and configure your experiment using babeInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };
	
	
	/* Make the order of the normal and lure block random.*/
	blocks = [nback_normal, nback_lure]
	r = Math.round(Math.random()) // 0 or 1
	block1 = blocks[r]
	block2 = blocks[(r+1)%2]  // (0+1)%2 = 1, (1+1)%2=0

    
    window.babe_monitor = babeInit({
        views_seq: [
            intro,
            instructions,
			/*pre_practice1,
			back_practice1,
			pre_practice2,
			nback_practice2,
			pre_practice3,
			nback_practice3,
			pre_practice4,
			*/nback_practice4,
			/*post_practice,
            block1,
			post_block1,
			block2,
            */post_test,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "INSERT_A_NUMBER",
            serverAppURL: "https://babe-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "debug",
            contact_email: "dguen@uos.de",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                forced_choice_2A.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
