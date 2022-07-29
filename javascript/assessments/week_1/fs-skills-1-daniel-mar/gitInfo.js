/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1//////////////////// -- completed --
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = 'git is a open source software way of tracking your file changes, who made what changes at what time, that allows for version control and access to previous iterations of a project.';

//////////////////PROBLEM 2//////////////////// -- completed --
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = 'github is a website that gives you access to your own repository as well as working with others, in a gui format. It has become a more social aspected area for developers to share their ideas and collab on projects.'

//////////////////PROBLEM 3//////////////////// -- completed --
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = 'initialize an empty local repository that you may then connect to your github repository to store on the cloud.'

//////////////////PROBLEM 4//////////////////// -- completed --
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition = 'a easy way to copy over a project that may not be yours but are allowed permissions to and all files regarding that repository.'

//////////////////PROBLEM 5//////////////////// -- completed --
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = 'view what is being tracked and what is not, the current state of a file that could be added to be tracked and be prepared for commiting then pushing into your repository.'

//////////////////PROBLEM 6//////////////////// -- completed --
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = 'allows you to add the desired folders/files to prepare for commiting'
let gitAddCode = 'git add .' // - allows you to track and prepare all available files for commiting then pushing into repository
//////////////////PROBLEM 7//////////////////// -- completed --
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = 'stages what had been added by the git add command to be ready for pushing. This is where you may define the changes you may have made to the folders/files. It is important to be as detailed as possible as it may help you or another developer in the future.'
let gitCommitCode = 'git commit -m "enter what you added or removed or modified here"'


//////////////////PROBLEM 8//////////////////// -- completed --
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition = 'you are now pushing all of your committed / staged changed into the desired github repository! On successful run, it will now update the github repository with all of your changes.'