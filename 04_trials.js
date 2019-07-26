// In this file you can specify the trial data for your experiment
const ID = generateID(6)

const nback = {
	practice1: generate_nback(trials=10, n=1, pbait=(1/9),
	stimuli = [1,5,5,4,8,8,2,3,3,9]),
	practice2: generate_nback(trials=10, n=2, pbait=(1/9),
	stimuli = [4,9,4,2,1,2,6,7,8,7]),
	practice3: generate_nback(trials=10, n=3, pbait=(1/9),
	stimuli = [1,9,8,1,9,6,7,6,5,7]),
	practice4: generate_nback(trials=20, n=4, pbait=(1/9),
	stimuli = [5,3,2,1,1,3,8,1,7,5,1,6,7,1,4,6,3,4,4,2]),
    normal: generate_nback(trials=80, n=4, pbait=(0.1),ptarget=(0.25)),
	lure: generate_nback(trials=80,n=4,pbait=(0.5),ptarget=(0.25))
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