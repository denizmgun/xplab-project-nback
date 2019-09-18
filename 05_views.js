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
		text:   `Hello,  on this site you are going to participate in a scientific experiment. The experiment will take approximately 8 to 10 minutes. It can be quite challenging and therefore requires you to be focused. If you have trained extensively on the nback task before, you are asked not to participate. Instructions are on the next page. <br><br> <b> Deutsch </b> <br> <br>
		Hallo, auf dieser Seite nehmen Sie an einem wissenschaftlichen Experiment teil. Dies wird ungefähr 8 bis 10 Minuten in Anspruch nehmen. Das Experiment könnte einigen relativ schwer fallen. Deshalb erfordert es Ihre Konzentration. Falls Sie eine Art nback-Training absolviert haben, sollten Sie nicht an diesem Experiment teilnehmen. Falls Sie nicht wissen, was das ist, fahren Sie fort. Weitere Anweisungen sind auf der nächsten Seite.`,
		buttonText: 'See instructions / Zeige Anweisungen '
	});

const instructions = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'General Instructions',
		text:  `First, you will go through 2 short practice blocks. These are followed by 2 larger test blocks. Your results from the test blocks will be submitted. In each session you will see a sequence of numbers between 1 and 9. At any moment, there will be only one number visible on the screen. Prior to each session you will receive specific instructions. 
		<br> <br> <b> Deutsch </b> <br> <br>
		Das Experiment beginnt mit 2 kurzen Übungsblöcken. Danach folgen 2 Testblöcke. Die Ergebnisse der Testblöcke werden für das Experiment gewertet. Während jeden Durchlaufs sehen Sie nach und nach einzelne Zahlen zwischen 1 und 9. Was genau Sie tun müssen, erfahren Sie vor jedem Durchlauf.
		`,
		buttonText: 'go to practice / zur Übung'
	});

const pre_practice1 = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Instructions - 1back ',
		text:  `This practice session serves as an introduction. In the following sample sequence you would have to press "m" if a number is the same as one step back (indicated in <b>bold</b> font here) and "d" if it is not: <br> <br> <i style="margin-left:40%;"> 1, 2, <b> 2 </b>, 7, 4, <b> 4 </b> </i> <br> <br>  After a number is displayed, you have 4 seconds to give an answer. If you use a keyboard, place your left index finger on "d" and your right index finger on "m" after clicking the button.
		<br><br> <b> Deutsch </b> <br> <br>
		Diese Übung dient dem Einstieg. Drücken Sie "m', wenn die Zahl die gleiche ist wie einen Schritt zuvor; und "d", falls es sich um eine andere Zahl handelt. In dieser Beispielreihe müssten Sie bei den <b>fettgedruckten</b> Zahlen "m" und bei allen anderen "d" drücken:  <br><br> <i style="margin-left:40%"> 1, 2, <b> 2 </b>, 7, 4, <b> 4 </b> </i> <br><br> Nachdem eine Zahl erscheint, bleiben Ihnen 4 Sekunden um sich für eine Antwort zu entscheiden. Wenn Sie eine Tastatur verwenden, platzieren Sie Ihren linken Zeigefinger auf "d" und ihren rechten Zeigefinger auf "m" nach der Betätigung des Knopfes. `,
		buttonText: `Start 1back practice / Beginne 1back Übung`
	});
	
	
const pre_practice2 = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Instructions - 2back ',
		text:  `Just press "m" if the number is the same as 2 numbers back and "d" if it is not. <br> Example: <br> <i style="margin-left:40%"> 1, 2, <b> 1 </b>, 3, 4, <b> 3 </b> </i>
		<br><br> <b> Deutsch </b> <br> <br>
		Drücken Sie diesmal einfach "m", wenn die gezeigte Zahl 2 Schritte zuvor auch gezeigt wurde; und "d", wenn nicht. <br> Beispiel: <br><br>
		<i style="margin-left:40%"> 1, 2, <b> 1 </b>, 3, 4, <b> 3 </b> </i> `,
		buttonText: 'Start 2back practice / Beginne 2back Übung'
	});

const pre_practice3 = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Instructions - 3back ',
		text:  `This practice session serves as an introduction. In the following sample sequence you would have to press "m" if a number is the same as 3 steps back (indicated in <b>bold</b> font here) and "d" if it is not: <br> <br> <i style="margin-left:40%;"> 2, 1, 3, <b> 2 </b>, 7, <b> 3 </b>, 4, 6, 9, <b> 4 </b> </i> <br> <br>  After a number is displayed, you have 4 seconds to give an answer.
		<br><br> <b> Deutsch </b> <br> <br>
		Diese Übung dient dem Einstieg. Drücken Sie "m', wenn die Zahl die gleiche ist wie 3 Schritte zuvor; und "d", falls es sich um eine andere Zahl handelt. In dieser Beispielreihe müssten Sie bei den <b>fettgedruckten</b> Zahlen "m" und bei allen anderen "d" drücken:  <br><br> <i style="margin-left:40%"> 2, 1, 3, <b> 2 </b>, 7, <b> 3 </b>, 4, 6, 9, <b> 4 </b> </i> <br><br> Nachdem eine Zahl erscheint, bleiben Ihnen 4 Sekunden um sich für eine Antwort zu entscheiden. `,
		buttonText: `Start 3back practice / Beginne 3back Übung`
	});
	
const pre_practice4 = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Instructions - 4back ',
		text:  `This time, press "m" if the number is the same as 4 numbers back and "d" if it is not. <br> Example: <br> <i style="margin-left:40%"> 3, 9, 1, 2, <b> 3 </b>, 4 <b> 1 </b>, 7, 5, <b> 4 </b> </i>
		<br><br> <b> Deutsch </b> <br> <br>
		Drücken Sie diesmal einfach "m", wenn die gezeigte Zahl 4 Schritte zuvor auch gezeigt wurde; und "d", wenn nicht. <br> Beispiel: <br><br>
		<i style="margin-left:40%"> 3, 9, 1, 2, <b> 3 </b>, 4 <b> 1 </b>, 7, 5, <b> 4 </b> </i> `,
		buttonText: 'Start 4back practice / Beginne 4back Übung'
	});
	
const pre_practice3_old = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Instructions - 3back ',
		text:  `Your task is the same as previously. But this time the target number is 3 steps back.
		<br><br> <b> Deutsch </b> <br> <br>
		Ihre Aufgabe ist die gleiche, wie in der vorherigen Übung. Doch diesmal liegt die Zahl 3 Schritte zurück.`,
		buttonText: 'Start 3back practice / Beginne 3back Übung'
	});

const pre_practice4_old = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Instructions - 4back ',
		text:  `Almost done, indicate whether the number is equal to the one shown 4 steps earlier. 
		<br><br> <b> Deutsch </b> <br> <br>
		Beinahe fertig, geben Sie diesmal an, ob die gezeigte Zahl 4 Schritte zurückliegt.`,
		buttonText: 'Start 4back practice / Beginne 4back Übung'
	});

	
const post_practice = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: '',
		text:  `Now you have some time to rest.  If you feel like you did not understand the task, reload the page and practice again. \n If you continue here, you will work on two blocks with about 100 numbers each. Before each block you receive an explanation and an opportunity to practice. You can rest inbetween the blocks. 
		<br><br> <b> Deutsch </b> <br> <br>
		Nun können Sie sich für einen Moment ausruhen. Wenn Sie das Gefühl haben, dass Sie Ihre Aufgabe nicht verstanden haben, laden Sie diese Seite neu und wiederholen Sie die Übungen. Wenn Sie von hier aus fortfahren, beginnt das eigentliche Experiment. Sie werden zwei Blöcke mit ca. 100 Zahlen bearbeiten. Vor jedem Block wird die neue Bedingung erklärt und kurz geübt. Zwischen den Blöcken können Sie sich ausruhen. `,
		buttonText: 'Start the first Block / Beginne mit dem ersten Block'
	});

const post_block1 = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'End - Block 1',
		text:  'First Block finished. One more to go. Continue once you feel ready.',
		buttonText: 'Start the second Block / Beginne mit dem zweiten Block'
	});


// Practice Views
const nback_practice1 = babeViews.view_generator("key_press", {
		title:"Practice - 1back",
		trials:nback.practice1.length,
		name:"practice",
		pause:150,
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
		pause:150,
		data:nback.practice2
},
{
		handle_response_function:nback_response_handler,
		answer_container_generator:nback_answer_container_generator
});

const nback_practice3 = babeViews.view_generator("key_press", {
		title:"Practice - 3back",
		trials:nback.practice3.length,
		name:"practice",
		pause:150,
		data:nback.practice3
},
{
		handle_response_function:nback_response_handler,
		answer_container_generator:nback_answer_container_generator
});

const nback_practice4 = babeViews.view_generator("key_press", {
		title:"Practice - 4back",
		trials:nback.practice4.length,
		name:"practice",
		pause:150,
		data:nback.practice4
},
{
		handle_response_function:nback_response_handler,
		answer_container_generator:nback_answer_container_generator
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
		Geben Sie an, ob die Zahl dieselbe ist, wie 3 Schritte zuvor. Der nächste Durchlauf bietet die letzte Gelegenheit, um dies zu üben. ` ,
		buttonText: 'Start final 3back practice / Beginne letzte 3back Übung'
	});
const pre_practice_4back = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Final Instructions - 4back ',
		text:  `Indicate wether the number matches the one from 4 steps back. The next session will be your last opportunity to practice.
		<br><br>
		Geben Sie an, ob die Zahl dieselbe ist, wie 4 Schritte zuvor. Der nächste Durchlauf bietet die letzte Gelegenheit, um dies zu üben. `,
		buttonText: 'Start final 4back practice / Beginne letzt 4back Übung'
	});
	
const post_practice_3back = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'post_practice_n3',
		title: '3back Block',
		text:  `Like you have practiced just now, you need to indicate wether the number is the same one as 3 steps back. You'll see 103 numbers. The first 3 answers wont count. Place your index fingers (or thumbs for handheld devices) above "d" and "m" respectively after pressing the button. Continue when you are ready.
		<br><br>
		Genau wie gerade geübt, müssen Sie nun angeben, ob die Zahl dieselbe ist, wie 3 Schritte zuvor. Es folgen 103 Zahlen. Die ersten 3 Antworten zählen nicht. Positionieren Sie Ihre Zeigefinger (oder Daumen für Smartphones o.ä.) jeweils über "d" und "m" nachdem Sie auf den Knopf geklickt haben. Fahren Sie fort, wenn Sie sich bereit fühlen.  `,
		buttonText: 'Start 3back block / Beginne 3back block'
	});

const post_practice_4back = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'post_practice_n4',
		title: '4back Block',
		text:  `Like you have practiced just now, you need to indicate wether the number is the same one as 4 steps back. You'll see 104 numbers. The first 4 answers wont count. Place your index fingers (or thumbs for handheld devices) above "d" and "m" respectively after pressing the button. Continue when you are ready.
		<br><br>
		Genau wie gerade geübt, müssen Sie nun angeben, ob die Zahl dieselbe ist, wie 4 Schritte zuvor. Es folgen 104 Zahlen. Die ersten 4 Antworten zählen nicht. Positionieren Sie Ihre Zeigefinger (oder Daumen für Smartphones o.ä.) über "d" und "m" nachdem Sie auf den Knopf geklickt haben. Fahren Sie fort, wenn Sie sich bereit fühlen.  `,
		buttonText: 'Start 4back block / Beginne 4back Block'
	});	


// Actual Practice Runs of the Blocks

// n3 Last Practice
const practice_3back = babeViews.view_generator("key_press", {
		title:"Practice - 3back",
		trials:nback.practice_n3final.length,
		name:"practice",
		pause:150,
		data:nback.practice_n3final
},
{
		handle_response_function:nback_response_handler,
		answer_container_generator:nback_answer_container_generator
});

// n4 Last Practice
const practice_4back = babeViews.view_generator("key_press", {
		title:"Practice - 4back",
		trials:nback.practice_n4final.length,
		name:"practice",
		pause:150,
		data:nback.practice_n4final
},
{
		handle_response_function:nback_response_handler,
		answer_container_generator:nback_answer_container_generator
});

//n3 Trials
const trials_3back = babeViews.view_generator("key_press", {
		title:"",
		trials:nback.trials_n3.length,
		name:"main",
		pause:150,
		data:nback.trials_n3
},
{
		handle_response_function:nback_response_handler,
		answer_container_generator:nback_answer_container_generator
});	

//n4 Trials
const trials_4back = babeViews.view_generator("key_press", {
		title:"",
		trials:nback.trials_n4.length,
		name:"main",
		pause:150,
		data:nback.trials_n4
},
{
		handle_response_function:nback_response_handler,
		answer_container_generator:nback_answer_container_generator
});	

//n3 control trials
const control_trials_3back = babeViews.view_generator("key_press", {
		title:"",
		trials:nback.control_trials_n3.length,
		name:"control",
		pause:150,
		data:nback.control_trials_n3
},
{
		handle_response_function:nback_response_handler,
		answer_container_generator:nback_answer_container_generator
});	

//n4 control trials
const control_trials_4back = babeViews.view_generator("key_press", {
		title:"",
		trials:nback.control_trials_n4.length,
		name:"control",
		pause:150,
		data:nback.control_trials_n4
},
{
		handle_response_function:nback_response_handler,
		answer_container_generator:nback_answer_container_generator
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
		title: 'Submission',
		text: `Please press the button below to submit your results. Answering the questions is optional but helps us analyze the results. If you'd like receive your result, leave your email adress in the comment field. You will receive an email once enough participants have taken the test. <br><br> <br><br> 
		Betätigen Sie bitte den Knopf weiter unten, um Ihre Ergebnisse abzuschicken. Die folgenden Fragen sind optional, doch Sie helfen uns mit der Analyse der Ergebnisse. Wenn Sie wissen möchten, wie Sie im Vergleich zu den anderen Teilnehmern abgeschnitten haben, hinterlassen Sie Ihre E-Mail Adresse in der Kommentarbox. Sie erhalten eine E-Mail sobald genügend Leute an dem Experiment teilgenommen haben.`,
		buttonText:"Submit / Abschicken"
	});
	
const thanks = babeViews.view_generator(
	"thanks",
	{
		trials: 1,
		name: 'thanks',
		title: 'Thank you for your valuable contribution to this study! <br><br> Vielen Dank für Ihren wertvollen Beitrag zu dieser Studie! <br><br> The source code for this project is openly accessible at <a href="https://github.com/denizmguen/xplab-project-nback">GitHub</a>',
		prolificConfirmText: 'Confirmed'
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
