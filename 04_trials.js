// In this file you can specify the trial data for your experiment
const ID = generateID(6)

const nback = {
	practice1: generate_nback(trials=10, n=1, pbait=0, ptarget=0,stimuli=[1,5,5,4,8,8,2,3,3,9]),
	practice2: generate_nback(trials=10, n=2, pbait=0,ptarget=0,stimuli=[4,9,4,2,1,2,6,7,8,7]),
	practice3: generate_nback(trials=10, n=3, pbait=0,ptarget=0,stimuli=[1,9,8,1,9,6,7,6,5,7]),
	practice4: generate_nback(trials=10, n=4, pbait=0,ptarget=0,stimuli= [5,3,2,1,9,3,8,1,9,5]),
	// Main Trials
    practice_n3final: generate_nback(trials=20, n=3, pbait=(1/9),ptarget=0.25,
	stimuli=[3,7,8,3,7,1,4,1,5,4,9,3,4,1,2,6,5,4,2,5]),
	
	practice_n4final: generate_nback(trials=20, n=4, pbait=(1/9),ptarget=0.25,
	stimuli=[2,3,2,6,7,3,6,1,4,5,3,3,7,4,9,1,3,1,4,2]),
	
	trials_n3: generate_nback(trials=103, n=3, pbait=(2.5/10), ptarget=(1/9)),
	trials_n4: generate_nback(trials=104, n=4, pbait=(2.5/10), ptarget=(1/9)),
	control_trials_n3: generate_nback(trials=103, n=3, pbait=(1/9), ptarget=(1/9)),
	control_trials_n4: generate_nback(trials=104, n=4, pbait=(1/9), ptarget=(1/9))
    }
	
const trial_info = {
    forced_choice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow"
        }
    ],
};