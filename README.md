# XPlab_Project_nback
Submission for the XPlab 2019 Project: Implementation of nback, preregistration, analysis plan

Complete the Experiment at
[xplab-nback.netlify.com](https://xplab-nback.netlify.com)

### Experiment
The trials are generated in 04_trials.js. The Function that is used to generate the trials, 'generate_nback' can be found in 03_custom_views_templates.js. The function allows to generate a random sequence of stimuli based on the parameters 'n','trials','pbait','ptarget'. Alternatively a list  of integers can be passed with the parameter 'stimuli' and all the other parameters, except for 'n' can be ignored.

The nback trials are based on the template for keypress trials provided by the \_babe framework. The answer_container_generator and response_handler have been modified in 02_custom_functions.js.

### Analysis
The rmd file and an associated  html document are located in the "analysis" folder. The folder also includes an r script that generates a report for individual subjects who wanted to know their results. The analyses are performed with fake data for demonstrative purposes.

Analysis:
http://htmlpreview.github.io/?https://github.com/denizmguen/xplab-project-nback/blob/master/analysis/nback_analysis.html

Inviduals:
http://htmlpreview.github.io/?https://github.com/denizmguen/xplab-project-nback/blob/master/analysis/visualization_for_individuals.html

### Report
https://www.researchgate.net/publication/354023933_Lure_Foils_elicit_Errors_in_numerical_N-Back_Tasks
