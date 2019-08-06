// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about

// Intro Views
const intro = babeViews.view_generator(
	"intro",
	{
    trials: 1,
    name: 'intro',
		// If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
		text:   `Hello,  on this site you are going to participate in a scientific experiment. The experiment will take approximately 8 to 12 minutes. It can be quite challenging and therefore requires you to be focused. If you have trained extensively on the nback task before, you are asked not to participate. Instructions are on the next page. <br><br> <b> Deutsch </b> <br> <br>
		Hallo, auf dieser Seite nehmen Sie an einem wissenschaftlichen Experiment teil. Dies wird ungefähr 8 bis 12 Minuten in Anspruch nehmen. Das Experiment könnte einigen relativ schwer fallen. Deshalb erfordert es Konzentration Ihrerseits. Falls Sie eine Art nback-Training absolviert haben, sollten Sie nicht an diesem Experiment teilnehmen. Falls Sie nicht wissen, was das ist, fahren Sie fort. Weitere Anweisungen sind auf der nächsten Seite`,
		buttonText: 'See instructions / Zeige Anweisungen '
	});

const instructions = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'General Instructions',
		text:  `First, you will absolve 3 practice sessions. These are followed by two real sessions. Your results in those last two sessions will be submitted.
		In each session you will see a sequence of whole numbers between 1 and 9. At any moment, there will be only one number on the screen. Before each session there will be specific instructions for you. 
		<br> <br> <b> Deutsch </b> <br> <br>
		Es folgen 3 Übungsdurchläufe und 2 Durchläufe, dessen Ergebnisse für das Experiment zählen. In jedem Duchlauf sehen Sie nacheinander einzelne Zahlen zwischen 1 und 9. Was genau Sie tun müssen, erfahren Sie vor jedem Durchlauf.
		`,
		buttonText: 'go to practice / zur Übung'
	});

const pre_practice1 = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Instructions - 1back ',
		text:  `This practice session serves as an introduction. In the following <i> sample </i> sequence you would have to press "m" if a number is the same as one step back and "d" if it is not.: <br> <br> <i style="margin-left:40%;"> 1, 2, <b> 2 </b>, 7, 4, <b> 4 </b> </i> <br> <br> Place your left index finger on "d" and your right index finger on "m" after clicking the button. After a number is displayed, you ahve 4 seconds to indicate an answer.
		<br><br> <b> Deutsch </b> <br> <br>
		Diese Übung dient dem Einstieg. Drücken Sie "m', wenn die Zahl die gleiche ist, wie einen Schritt zuvor und "d", falls es sich um eine andere Zahl handelt. In dieser <i>Beispiel</i> reihe müssten Sie bei den fettgedruckten Zahlen "m" und bei allen anderen "d" drücken.:  <br><br> <i style="margin-left:40%"> 1, 2, <b> 2 </b>, 7, 4, <b> 4 </b> </i> <br><br> Klicken Sie auf den Knopf und Platzieren Sie ihren linken Zeigefinger auf "d" und ihren rechten Zeigefinger auf "m". Nachdem eine Zahl erscheint, bleiben Ihnen 4 Sekunden um sich für eine Antwort zu entscheiden.`,
		buttonText: `Start 1back practice / Beginne 1back Übung`
	});
	
	
const pre_practice2 = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Instructions - 2back ',
		text:  `Just press "m" if the number is the same as 2 numbers back and "d" if it is not. Example: <br> <i style="margin-left:40%"> 1, 2, <b> 1 </b>, 3, 4, <b> 3 </b> </i>
		<br><br> <b> Deutsch </b> <br> <br>
		Drücken Sie diesmal einfach "m", wenn die gezeigte Zahl 2 Schritte zuvor auch gezeigt wurde.<br> Beispiel: <br><br>
		<i style="margin-left:40%"> 1, 2, <b> 1 </b>, 3, 4, <b> 3 </b> </i> `,
		buttonText: 'Start 2back practice / Beginne 2back Übung'
	});

const pre_practice3 = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Instructions - 3back ',
		text:  `Just as before, but this time press "m" if the number is the same as 3 numbers back.
		<br><br> <b> Deutsch </b> <br> <br>
		Die gleiche Aufgabe, wie in der vorherigen Übung, doch diesmal liegt die Zahl 3 Schritte zurück.`,
		buttonText: 'Start 3back practice / Beginne 3back Übung'
	});

const pre_practice4 = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Instructions - 4back ',
		text:  `Almost done, indicate wether the number is the same as 4 numbers back this time. 
		<br><br> <b> Deutsch </b> <br> <br>
		Beinahe fertig, geben Sie diesmal an, ob die Zahl 4 Zahlen züruckliegt.`,
		buttonText: 'Start 4back practice'
	});

	
const post_practice = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: '',
		text:  `Now you have some time to rest.  If you feel like you did not understand the task, refresh the page and practice again. \n If you continue here, you will work on two blocks with about 80 numbers each. Before each block you receive an explanation and an opportunity to practice. After the first block you can take a break again. 
		<br><br> <b> Deutsch </b> <br> <br>
		Nun können Sie sich für einen Moment ausruhen. Wenn Sie das Gefühl haben, dass Sie Ihre Aufgabe nicht verstanden haben, laden Sie diese Seite neu und wiederholen Sie die Übungen. Wenn Sie von hier aus fortfahren, beginnt das eigentliche Experiment. Sie werden zwei Blöcke mit ca. 80 Zahlen bearbeiten. Vor jedem Block wird die neue Bedingung erklärt und kurz geübt. Zwischen den Blöcken können Sie sich ausruhen. `,
		buttonText: 'Start the first Block / Beginne mit dem ersten Block'
	});

const post_block1 = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'End - Block 1',
		text:  'First Block finished. One more to go. Continue once you feel ready.',
		buttonText: 'Start the second Block'
	});


// Practice Views
const nback_practice1 = babeViews.view_generator("key_press", {
		title:"Practice - 1back",
		trials:nback.practice1.length,
		name:"practice",
		data:nback.practice1
},
{
		handle_response_function:nback_response_handler,
		answer_container_generator:nback_answer_container_generator
});

const nback_practice2 = babeViews.view_generator("key_press", {
		title:"Practice - 2back",
		trials:nback.practice2.length,
		name:"practice",
		data:nback.practice2
},
{
		handle_response_function:nback_response_handler
});

const nback_practice3 = babeViews.view_generator("key_press", {
		title:"Practice - 3back",
		trials:nback.practice3.length,
		name:"practice",
		data:nback.practice3
},
{
		handle_response_function:nback_response_handler
});

const nback_practice4 = babeViews.view_generator("key_press", {
		title:"Practice - 4back",
		trials:nback.practice4.length,
		name:"practice",
		data:nback.practice4
},
{
		handle_response_function:nback_response_handler
});


// 3back and 4back conditions for the main trials:

// Pre and Post Practice Instructions for the Blocks

const pre_practice_3back = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Final Instructions - 3back ',
		text:  `Indicate whether the number matches the one from 3 steps back. This is your last opportunity to practice.
		<br><br>
		Geben Sie an, ob die Zahl die selbe ist, wie 3 Schritte zuvor. Dies ist Ihre letze Übungsgelegenheit. ` ,
		buttonText: 'Start final 3back practice / Beginne letze 3back Übung'
	});
const pre_practice_4back = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Final Instructions - 4back ',
		text:  `Indicate wether the numer matches the one from 4 steps back. The next session will be your last opportunity to practice.
		<br><br>
		Geben Sie an, ob die Zahl dieselbe ist, wie 4 Schritte zuvor. Es folgt die letze Gelegenheit, um dies zu üben. `,
		buttonText: 'Start final 4back practice'
	});
	
const post_practice_3back = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'post_practice_n3',
		title: '',
		text:  `You'll see 103 numbers. The first 3 answers wont count. Place your index fingers on "d" and "m" respectively after pressing the button. Continue when you are ready.
		<br><br>
		Es folgen 103 Zahlen. Die ersten 3 Antworten zählen nicht. Platzieren Sie Ihre Zeigefinger jeweils auf "d" und "m" nachdem Sie auf den Knopf geklickt haben. Fahren Sie fort, wenn Sie sich bereit fühlen.  `,
		buttonText: 'Start 3back block / Beginne 3back block'
	});

const post_practice_4back = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'post_practice_n4',
		title: '',
		text:  `You'll see 104 numbers. The first 4 answers wont count. Place your index fingers on "d" and "m" respectively after pressing the button. Continue when you are ready.
		<br><br>
		Es folgen 104 Zahlen. Die ersten 4 Antworten zählen nicht. Platzieren Sie Ihre Zeigefinger jeweils auf "d" und "m" nachdem Sie auf den Knopf geklickt haben. Fahren Sie fort, wenn Sie sich bereit fühlen.  `,
		buttonText: 'Start 4back block / Beginne 4back Block'
	});	


// Actual Practice Runs of the Blocks

// n3 Last Practice
const practice_3back = babeViews.view_generator("key_press", {
		title:"Practice - 3back",
		trials:nback.practice_n3final.length,
		name:"practice",
		data:nback.practice_n3final
},
{
		handle_response_function:nback_response_handler
});

// n4 Last Practice
const practice_4back = babeViews.view_generator("key_press", {
		title:"Practice - 4back",
		trials:nback.practice_n4final.length,
		name:"practice",
		data:nback.practice_n4final
},
{
		handle_response_function:nback_response_handler
});

//n3 Trials
const trials_3back = babeViews.view_generator("key_press", {
		title:"",
		trials:nback.practice1.length,
		name:"main",
		data:nback.trials_n3
},
{
		handle_response_function:nback_response_handler
});	

//n4 Trials
const trials_4back = babeViews.view_generator("key_press", {
		title:"",
		trials:nback.practice1.length,
		name:"main",
		data:nback.trials_n4
},
{
		handle_response_function:nback_response_handler
});	

//n3 control trials
const control_trials_3back = babeViews.view_generator("key_press", {
		title:"",
		trials:nback.control_trials_n3.length,
		name:"control",
		data:nback.control_trials_n3
},
{
		handle_response_function:nback_response_handler
});	

//n4 control trials
const control_trials_4back = babeViews.view_generator("key_press", {
		title:"",
		trials:nback.control_trials_n4.length,
		name:"control",
		data:nback.control_trials_n4
},
{
		handle_response_function:nback_response_handler
});	
	
// Main View Bundles 
const block_3back = {
	pre_practice:pre_practice_3back,
	practice:practice_3back,
	post_practice:post_practice_3back,
	trials:	trials_3back
	
}
const block_4back = {
	pre_practice:pre_practice_4back,
	practice:practice_4back,
	post_practice:post_practice_4back,
	trials:	trials_4back
	
}

const block_3back_control = {
	pre_practice:pre_practice_3back,
	practice:practice_3back,
	post_practice:post_practice_3back,
	trials:	control_trials_3back
	
}
const block_4back_control = {
	pre_practice:pre_practice_4back,
	practice:practice_4back,
	post_practice:post_practice_4back,
	trials:	control_trials_4back
	
}


// Ending Views
const post_test = babeViews.view_generator(
	"post_test",
	{
		trials: 1,
		name: 'post_test',
		title: 'Additional information',
		text: 'Answering the following questions is optional, but your answers will help us analyze our results. <br><br> Ihre Antworten auf diese Fragen sind optional, doch sie helfen uns mit der Auswertung der Ergebnisse.'
	});
	
const thanks = babeViews.view_generator(
	"thanks",
	{
		trials: 1,
		name: 'thanks',
		title: 'Thank you for taking part in this experiment! Please press the button. <br><br> Vielen Dank für Ihre Teilnahme an diesem Experment! Bitte klicken Sie auf den Knopf.',
		prolificConfirmText: 'Press the button / Klick'
}	);



/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view
const forced_choice_2A = babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.forced_choice.length,
    // name should be identical to the variable name
    name: 'forced_choice_2A',
    data: trial_info.forced_choice,
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
