// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////     -- COMPLETED --
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Planning
// Analysis of Requirements
// Design
// Implementation (to me this is the actual coding portion)
/** Testing & Integration (to me this step would be the for loop 
 * condition for everything, how to know when the project is 
 * completed vs if we could add a feature or adjust/debug it.) */
// Maintain


//////////////////PROBLEM 2//////////////////// -- COMPLETED --
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added.";

const analysisofRequirements = 'After initial planning, you can be establishing the scope of the project, this may have an overview of the business rules and data models. Meaning you can be defining what you will be building, for what department and access to what data that is needed, who will be accessing to it, possibly if any new databases are needed as well';

const design = 'Designing the project, application (could be multiple platforms), this is our psuedocode that may include some photos, erds or database designs + uml diagrams. So that we can begin to visualize the actual flow of data and possibly confirm we have thought of everything that is needed.';

const code = 'Done defining what to consider for a completed project and the steps to complete it (from frontend, backend, physical servers or devices. Developers will physically code out the application, solo, peer-programming, and do light testing as it begins to be able to run and continue to be fledged out fully. This part is typically reached when your goals are known and can now code to complete said goals. Understanding that the prototype test ahead may add future goals for our project.';

const testing = 'Developers that code, are also capable of designing their own testing by automating the process. They may also manually input edge cases, attempting to break their application in different ways depending on the access of data from different levels of permissions possibly required. To solve the bugs prior to production deployment. This may bring developers into a redesign or more planning, adding features, removing them, and to begin the coding process again. To repeat a few times as they refine their prototype application to where it is ready for deployment.';

const maintain = 'at this stage the protoype is ready for deployment, but it is possible that it may be in the early stages and user feedback would greatly improve the software, even in a great prototype stage. They should understand how to have their application available to their end-users, how they will be able to debug it when needed, how often they will update the code or add features (maintanence schedule). Also likely understand the levels of priority for certain features that will require immediate resolving. This stage begins a soft agile process, where developers can still continue to design to add features and integrate them as their schedule may be throughout the life of the project.';