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
		text:   `Hello. You are going to participate in a scientific experiment on this page. The experiment will take approximately 8 minutes. It can be quite challenging and therefore requires you to be focused. If you have trained extensively on the nback task before, you are asked to not participate. Instructions are on the next page.`,
		buttonText: 'See instructions'
	});

const instructions = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'General Instructions',
		text:  'In this experiment you will see a sequence of numbers from 1 to 9. You will be asked to indicate wether the number you see is the same number as 4 numbers back. You do that by pressing the "m" key for match or "d" for different. <br> For example in the following sequence: <i> 3, 4, 5, 6, <b>3</b>, 2, 3, <b>6</b>, 2 </i> <br> You would have to press "m" when the numbers appear that are marked bold here. <br> First You will go through multiple practice sessions with increasing difficulty. Each session features 10 numbers. The last practice session,"4back", features 20 numbers and will prepare you for the actual experiment. You have 4 seconds to answer.',
		buttonText: 'go to practice'
	});

const pre_practice1 = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Instructions - 1back ',
		text:  'Just press "m" if the number is the same as the one before and "d" if it is not. Example: <br> <i> 1, 2, <b> 2 </b>, 7, 4, <b> 4 </b>',
		buttonText: 'Start 1back practice'
	});
	
const pre_practice2 = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Instructions - 2back ',
		text:  'Just press "m" if the number is the same as 2 numbers back and "d" if it is not. Example: <br> <i> 1, 2, <b> 1 </b>, 3, 4, <b> 3 </b>',
		buttonText: 'Start 2back practice'
	});

const pre_practice3 = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Instructions - 3back ',
		text:  'Just as before, but this time press "m" if the number is the same as 3 numbers back.',
		buttonText: 'Start 3back practice'
	});

const pre_practice4 = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'Instructions - 4back ',
		text:  'The next practice run will will have the same configuration as the actual experiment. Indicate wether the number is the same as 4 numbers before.',
		buttonText: 'Start 4back practice'
	});

	
const post_practice = babeViews.view_generator(
	"instructions",
	{
		trials: 1,
		name: 'instructions',
		title: 'General Instructions',
		text:  'Now you have some time to rest.  If you feel like you did not understand how the task works, reload the page and practice again. \n If you continue here, you will work on two blocks with 50 numbers each. After the first block you can take a break again. Continue once you feel ready.',
		buttonText: 'Start the first Block'
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


// main views 
const nback_practice1 = babeViews.view_generator("key_press", {
		title:"Practice - 1back",
		trials:nback.practice1.length,
		name:"nback_practice",
		data:nback.practice1
},
{
		handle_response_function:nback_response_handler
});

const nback_practice2 = babeViews.view_generator("key_press", {
		title:"Practice - 2back",
		trials:nback.practice2.length,
		name:"nback_practice",
		data:nback.practice2
},
{
		handle_response_function:nback_response_handler
});

const nback_practice3 = babeViews.view_generator("key_press", {
		title:"Practice - 3back",
		trials:nback.practice3.length,
		name:"nback_practice",
		data:nback.practice3
},
{
		handle_response_function:nback_response_handler
});

const nback_practice4 = babeViews.view_generator("key_press", {
		title:"Practice - 4back",
		trials:nback.practice4.length,
		name:"nback_practice",
		data:nback.practice4
},
{
		handle_response_function:nback_response_handler
});

const nback_normal = babeViews.view_generator("key_press", {
	title:"",
	trials:nback.normal.length,
	name:"nback_normal",
	data:nback.normal
},
{
	handle_response_function:nback_response_handler
});
const nback_lure = babeViews.view_generator("key_press", {
	title:"",
	trials:nback.lure.length,
	name:"nback_lure",
	data:nback.lure
},
{
	handle_response_function:nback_response_handler
});


// Ending Views
const post_test = babeViews.view_generator(
	"post_test",
	{
		trials: 1,
		name: 'post_test',
		title: 'Additional information',
		text: 'Answering the following questions is optional, but your answers will help us analyze our results.'
	});
	
const thanks = babeViews.view_generator(
	"thanks",
	{
		trials: 1,
		name: 'thanks',
		title: 'Thank you for taking part in this experiment!',
		prolificConfirmText: 'Press the button'
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
