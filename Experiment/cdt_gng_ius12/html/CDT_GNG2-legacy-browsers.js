/***************** 
 * Cdt_Gng2 Test *
 *****************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'CDT_GNG2';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(CDT_Instr_trainRoutineBegin());
flowScheduler.add(CDT_Instr_trainRoutineEachFrame());
flowScheduler.add(CDT_Instr_trainRoutineEnd());
const CDT_trials_trainLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(CDT_trials_trainLoopBegin, CDT_trials_trainLoopScheduler);
flowScheduler.add(CDT_trials_trainLoopScheduler);
flowScheduler.add(CDT_trials_trainLoopEnd);
flowScheduler.add(CDT_InstrRoutineBegin());
flowScheduler.add(CDT_InstrRoutineEachFrame());
flowScheduler.add(CDT_InstrRoutineEnd());
const CDT_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(CDT_trialsLoopBegin, CDT_trialsLoopScheduler);
flowScheduler.add(CDT_trialsLoopScheduler);
flowScheduler.add(CDT_trialsLoopEnd);
flowScheduler.add(GNG_InstrRoutineBegin());
flowScheduler.add(GNG_InstrRoutineEachFrame());
flowScheduler.add(GNG_InstrRoutineEnd());
flowScheduler.add(GNG_fixRoutineBegin());
flowScheduler.add(GNG_fixRoutineEachFrame());
flowScheduler.add(GNG_fixRoutineEnd());
const GNG_trials_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(GNG_trials_1LoopBegin, GNG_trials_1LoopScheduler);
flowScheduler.add(GNG_trials_1LoopScheduler);
flowScheduler.add(GNG_trials_1LoopEnd);
flowScheduler.add(GNG_Instr_2RoutineBegin());
flowScheduler.add(GNG_Instr_2RoutineEachFrame());
flowScheduler.add(GNG_Instr_2RoutineEnd());
flowScheduler.add(GNG_fixRoutineBegin());
flowScheduler.add(GNG_fixRoutineEachFrame());
flowScheduler.add(GNG_fixRoutineEnd());
const GNG_trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(GNG_trials_2LoopBegin, GNG_trials_2LoopScheduler);
flowScheduler.add(GNG_trials_2LoopScheduler);
flowScheduler.add(GNG_trials_2LoopEnd);
flowScheduler.add(GNG_Instr_2RoutineBegin());
flowScheduler.add(GNG_Instr_2RoutineEachFrame());
flowScheduler.add(GNG_Instr_2RoutineEnd());
flowScheduler.add(GNG_fixRoutineBegin());
flowScheduler.add(GNG_fixRoutineEachFrame());
flowScheduler.add(GNG_fixRoutineEnd());
const GNG_trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(GNG_trials_3LoopBegin, GNG_trials_3LoopScheduler);
flowScheduler.add(GNG_trials_3LoopScheduler);
flowScheduler.add(GNG_trials_3LoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var CDT_Instr_trainClock;
var instr_text_2;
var space_to_start_2;
var CDT_Trial_trainClock;
var stim1_2;
var stim2_2;
var stim3_2;
var stim4_2;
var stim5_2;
var stim6_2;
var stim7_2;
var stim8_2;
var target_2;
var fix_2;
var key_resp_2;
var CDT_InstrClock;
var instr_text;
var space_to_start;
var CDT_TrialClock;
var stim1;
var stim2;
var stim3;
var stim4;
var stim5;
var stim6;
var stim7;
var stim8;
var target;
var fix;
var key_resp;
var GNG_InstrClock;
var Instructions;
var InstrResp;
var GNG_fixClock;
var fix_ini;
var GNG_trialClock;
var fix_trial;
var trialBlue;
var trialOrange;
var trialResp;
var GNG_Instr_2Clock;
var Instructions_2;
var InstrResp_2;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "CDT_Instr_train"
  CDT_Instr_trainClock = new util.Clock();
  instr_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text_2',
    text: 'Welcome to the experiment. \nIn this experiment you will be remembering colors.\n\nEach trial will start with a fixation cross.\nDo your best to keep your eyes on it.\nThen, 4 or 8 squares with different colors will appear.\nRemember as many colors as you can.\nAfter a short delay, one square will reappear.\nIf it has the SAME color and location, press the "K" key.\nIf the color or location is DIFFERENT, press the "L" key.\nIf you are not sure, just take your best guess.\n\nPress \'S\' to start TRAINING.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  space_to_start_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CDT_Trial_train"
  CDT_Trial_trainClock = new util.Clock();
  stim1_2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim1_2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  stim2_2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim2_2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  stim3_2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim3_2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  stim4_2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim4_2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  stim5_2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim5_2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  stim6_2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim6_2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -5, interpolate: true,
  });
  
  stim7_2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim7_2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -6, interpolate: true,
  });
  
  stim8_2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim8_2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -7, interpolate: true,
  });
  
  target_2 = new visual.Rect ({
    win: psychoJS.window, name: 'target_2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  fix_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -9.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CDT_Instr"
  CDT_InstrClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'Welcome to the experiment. \nIn this experiment you will be remembering colors.\n\nEach trial will start with a fixation cross.\nDo your best to keep your eyes on it.\nThen, 4 or 8 squares with different colors will appear.\nRemember as many colors as you can.\nAfter a short delay, one square will reappear.\nIf it has the SAME color and location, press the "K" key.\nIf the color or location is DIFFERENT, press the "L" key.\nIf you are not sure, just take your best guess.\n\nIt will take less than 10 minutes.\n\nPress \'S\' to start the EXPERIMENT.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  space_to_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CDT_Trial"
  CDT_TrialClock = new util.Clock();
  stim1 = new visual.Rect ({
    win: psychoJS.window, name: 'stim1', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  stim2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  stim3 = new visual.Rect ({
    win: psychoJS.window, name: 'stim3', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  stim4 = new visual.Rect ({
    win: psychoJS.window, name: 'stim4', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  stim5 = new visual.Rect ({
    win: psychoJS.window, name: 'stim5', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  stim6 = new visual.Rect ({
    win: psychoJS.window, name: 'stim6', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -5, interpolate: true,
  });
  
  stim7 = new visual.Rect ({
    win: psychoJS.window, name: 'stim7', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -6, interpolate: true,
  });
  
  stim8 = new visual.Rect ({
    win: psychoJS.window, name: 'stim8', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -7, interpolate: true,
  });
  
  target = new visual.Rect ({
    win: psychoJS.window, name: 'target', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -9.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GNG_Instr"
  GNG_InstrClock = new util.Clock();
  Instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions',
    text: "Thanks for completing the first task, \n\nThe second part will be shorter (aprox. 3 minutes).\n\nPress 'Space' for blue, nothing for orange. \n\nGood Luck!!\n\n'S' to start.\n\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  InstrResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GNG_fix"
  GNG_fixClock = new util.Clock();
  fix_ini = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_ini',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "GNG_trial"
  GNG_trialClock = new util.Clock();
  fix_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_trial',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  trialBlue = new visual.Polygon ({
    win: psychoJS.window, name: 'trialBlue', 
    edges: 180, size:[0.15, 0.15],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), 1.0]),
    fillColor: new util.Color([(- 1.0), (- 1.0), 1.0]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  trialOrange = new visual.Polygon ({
    win: psychoJS.window, name: 'trialOrange', 
    edges: 180, size:[0.15, 0.15],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1.0, 0.004, (- 1.0)]),
    fillColor: new util.Color([1.0, 0.004, (- 1.0)]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  trialResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GNG_Instr_2"
  GNG_Instr_2Clock = new util.Clock();
  Instructions_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions_2',
    text: "Rest and press 'S' to start. Remember , 'space' for blue, nothing for orange",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  InstrResp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GNG_fix"
  GNG_fixClock = new util.Clock();
  fix_ini = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_ini',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "GNG_trial"
  GNG_trialClock = new util.Clock();
  fix_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_trial',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  trialBlue = new visual.Polygon ({
    win: psychoJS.window, name: 'trialBlue', 
    edges: 180, size:[0.15, 0.15],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), 1.0]),
    fillColor: new util.Color([(- 1.0), (- 1.0), 1.0]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  trialOrange = new visual.Polygon ({
    win: psychoJS.window, name: 'trialOrange', 
    edges: 180, size:[0.15, 0.15],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1.0, 0.004, (- 1.0)]),
    fillColor: new util.Color([1.0, 0.004, (- 1.0)]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  trialResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GNG_Instr_2"
  GNG_Instr_2Clock = new util.Clock();
  Instructions_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions_2',
    text: "Rest and press 'S' to start. Remember , 'space' for blue, nothing for orange",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  InstrResp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GNG_fix"
  GNG_fixClock = new util.Clock();
  fix_ini = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_ini',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "GNG_trial"
  GNG_trialClock = new util.Clock();
  fix_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_trial',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  trialBlue = new visual.Polygon ({
    win: psychoJS.window, name: 'trialBlue', 
    edges: 180, size:[0.15, 0.15],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), 1.0]),
    fillColor: new util.Color([(- 1.0), (- 1.0), 1.0]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  trialOrange = new visual.Polygon ({
    win: psychoJS.window, name: 'trialOrange', 
    edges: 180, size:[0.15, 0.15],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1.0, 0.004, (- 1.0)]),
    fillColor: new util.Color([1.0, 0.004, (- 1.0)]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  trialResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _space_to_start_2_allKeys;
var CDT_Instr_trainComponents;
function CDT_Instr_trainRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'CDT_Instr_train'-------
    t = 0;
    CDT_Instr_trainClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    space_to_start_2.keys = undefined;
    space_to_start_2.rt = undefined;
    _space_to_start_2_allKeys = [];
    // keep track of which components have finished
    CDT_Instr_trainComponents = [];
    CDT_Instr_trainComponents.push(instr_text_2);
    CDT_Instr_trainComponents.push(space_to_start_2);
    
    CDT_Instr_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function CDT_Instr_trainRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'CDT_Instr_train'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = CDT_Instr_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text_2* updates
    if (t >= 0.0 && instr_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text_2.tStart = t;  // (not accounting for frame time here)
      instr_text_2.frameNStart = frameN;  // exact frame index
      
      instr_text_2.setAutoDraw(true);
    }

    
    // *space_to_start_2* updates
    if (t >= 0.0 && space_to_start_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_to_start_2.tStart = t;  // (not accounting for frame time here)
      space_to_start_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space_to_start_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space_to_start_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space_to_start_2.clearEvents(); });
    }

    if (space_to_start_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = space_to_start_2.getKeys({keyList: ['s'], waitRelease: false});
      _space_to_start_2_allKeys = _space_to_start_2_allKeys.concat(theseKeys);
      if (_space_to_start_2_allKeys.length > 0) {
        space_to_start_2.keys = _space_to_start_2_allKeys[_space_to_start_2_allKeys.length - 1].name;  // just the last key pressed
        space_to_start_2.rt = _space_to_start_2_allKeys[_space_to_start_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CDT_Instr_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CDT_Instr_trainRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'CDT_Instr_train'-------
    CDT_Instr_trainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "CDT_Instr_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var CDT_trials_train;
var currentLoop;
function CDT_trials_trainLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CDT_trials_train = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'html/resources/conditionsfileTrain_luria.xlsx',
    seed: undefined, name: 'CDT_trials_train'
  });
  psychoJS.experiment.addLoop(CDT_trials_train); // add the loop to the experiment
  currentLoop = CDT_trials_train;  // we're now the current loop

  // Schedule all the trials in the trialList:
  CDT_trials_train.forEach(function() {
    const snapshot = CDT_trials_train.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(CDT_Trial_trainRoutineBegin(snapshot));
    thisScheduler.add(CDT_Trial_trainRoutineEachFrame(snapshot));
    thisScheduler.add(CDT_Trial_trainRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function CDT_trials_trainLoopEnd() {
  psychoJS.experiment.removeLoop(CDT_trials_train);

  return Scheduler.Event.NEXT;
}


var CDT_trials;
function CDT_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CDT_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 0, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'html/resources/conditionsfileJK_luria.xlsx',
    seed: undefined, name: 'CDT_trials'
  });
  psychoJS.experiment.addLoop(CDT_trials); // add the loop to the experiment
  currentLoop = CDT_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  CDT_trials.forEach(function() {
    const snapshot = CDT_trials.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(CDT_TrialRoutineBegin(snapshot));
    thisScheduler.add(CDT_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(CDT_TrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function CDT_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(CDT_trials);

  return Scheduler.Event.NEXT;
}


var GNG_trials_1;
function GNG_trials_1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  GNG_trials_1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'html/resources/GNGCondJK20.xlsx',
    seed: undefined, name: 'GNG_trials_1'
  });
  psychoJS.experiment.addLoop(GNG_trials_1); // add the loop to the experiment
  currentLoop = GNG_trials_1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  GNG_trials_1.forEach(function() {
    const snapshot = GNG_trials_1.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(GNG_trialRoutineBegin(snapshot));
    thisScheduler.add(GNG_trialRoutineEachFrame(snapshot));
    thisScheduler.add(GNG_trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function GNG_trials_1LoopEnd() {
  psychoJS.experiment.removeLoop(GNG_trials_1);

  return Scheduler.Event.NEXT;
}


var GNG_trials_2;
function GNG_trials_2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  GNG_trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'html/resources/GNGCondJK20.xlsx',
    seed: undefined, name: 'GNG_trials_2'
  });
  psychoJS.experiment.addLoop(GNG_trials_2); // add the loop to the experiment
  currentLoop = GNG_trials_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  GNG_trials_2.forEach(function() {
    const snapshot = GNG_trials_2.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(GNG_trialRoutineBegin(snapshot));
    thisScheduler.add(GNG_trialRoutineEachFrame(snapshot));
    thisScheduler.add(GNG_trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function GNG_trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(GNG_trials_2);

  return Scheduler.Event.NEXT;
}


var GNG_trials_3;
function GNG_trials_3LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  GNG_trials_3 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'html/resources/GNGCondJK20.xlsx',
    seed: undefined, name: 'GNG_trials_3'
  });
  psychoJS.experiment.addLoop(GNG_trials_3); // add the loop to the experiment
  currentLoop = GNG_trials_3;  // we're now the current loop

  // Schedule all the trials in the trialList:
  GNG_trials_3.forEach(function() {
    const snapshot = GNG_trials_3.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(GNG_trialRoutineBegin(snapshot));
    thisScheduler.add(GNG_trialRoutineEachFrame(snapshot));
    thisScheduler.add(GNG_trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function GNG_trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(GNG_trials_3);

  return Scheduler.Event.NEXT;
}


var _key_resp_2_allKeys;
var CDT_Trial_trainComponents;
function CDT_Trial_trainRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'CDT_Trial_train'-------
    t = 0;
    CDT_Trial_trainClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    stim1_2.setOpacity(stim1opa);
    stim1_2.setPos([stim1posx, stim1posy]);
    stim1_2.setSize([stimsizex, stimsizey]);
    stim1_2.setFillColor(new util.Color(stim1col));
    stim1_2.setLineColor(new util.Color(stim1col));
    stim2_2.setOpacity(stim2opa);
    stim2_2.setPos([stim2posx, stim2posy]);
    stim2_2.setSize([stimsizex, stimsizey]);
    stim2_2.setFillColor(new util.Color(stim2col));
    stim2_2.setLineColor(new util.Color(stim2col));
    stim3_2.setOpacity(stim3opa);
    stim3_2.setPos([stim3posx, stim3posy]);
    stim3_2.setSize([stimsizex, stimsizey]);
    stim3_2.setFillColor(new util.Color(stim3col));
    stim3_2.setLineColor(new util.Color(stim3col));
    stim4_2.setOpacity(stim4opa);
    stim4_2.setPos([stim4posx, stim4posy]);
    stim4_2.setSize([stimsizex, stimsizey]);
    stim4_2.setFillColor(new util.Color(stim4col));
    stim4_2.setLineColor(new util.Color(stim4col));
    stim5_2.setOpacity(stim5opa);
    stim5_2.setPos([stim5posx, stim5posy]);
    stim5_2.setSize([stimsizex, stimsizey]);
    stim5_2.setFillColor(new util.Color(stim5col));
    stim5_2.setLineColor(new util.Color(stim5col));
    stim6_2.setOpacity(stim6opa);
    stim6_2.setPos([stim6posx, stim6posy]);
    stim6_2.setSize([stimsizex, stimsizey]);
    stim6_2.setFillColor(new util.Color(stim6col));
    stim6_2.setLineColor(new util.Color(stim6col));
    stim7_2.setOpacity(stim7opa);
    stim7_2.setPos([stim7posx, stim7posy]);
    stim7_2.setSize([stimsizex, stimsizey]);
    stim7_2.setFillColor(new util.Color(stim7col));
    stim7_2.setLineColor(new util.Color(stim7col));
    stim8_2.setOpacity(stim8opa);
    stim8_2.setPos([stim7posx, stim7posy]);
    stim8_2.setSize([stimsizex, stimsizey]);
    stim8_2.setFillColor(new util.Color(stim8col));
    stim8_2.setLineColor(new util.Color(stim8col));
    target_2.setPos([targetposx, targetposy]);
    target_2.setSize([stimsizex, stimsizey]);
    target_2.setFillColor(new util.Color(targetcol));
    target_2.setLineColor(new util.Color(targetcol));
    fix_2.setText('+');
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    CDT_Trial_trainComponents = [];
    CDT_Trial_trainComponents.push(stim1_2);
    CDT_Trial_trainComponents.push(stim2_2);
    CDT_Trial_trainComponents.push(stim3_2);
    CDT_Trial_trainComponents.push(stim4_2);
    CDT_Trial_trainComponents.push(stim5_2);
    CDT_Trial_trainComponents.push(stim6_2);
    CDT_Trial_trainComponents.push(stim7_2);
    CDT_Trial_trainComponents.push(stim8_2);
    CDT_Trial_trainComponents.push(target_2);
    CDT_Trial_trainComponents.push(fix_2);
    CDT_Trial_trainComponents.push(key_resp_2);
    
    CDT_Trial_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function CDT_Trial_trainRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'CDT_Trial_train'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = CDT_Trial_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim1_2* updates
    if (t >= 1 && stim1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1_2.tStart = t;  // (not accounting for frame time here)
      stim1_2.frameNStart = frameN;  // exact frame index
      
      stim1_2.setAutoDraw(true);
    }

    frameRemains = 1 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim1_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim1_2.setAutoDraw(false);
    }
    
    // *stim2_2* updates
    if (t >= 1 && stim2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim2_2.tStart = t;  // (not accounting for frame time here)
      stim2_2.frameNStart = frameN;  // exact frame index
      
      stim2_2.setAutoDraw(true);
    }

    frameRemains = 1 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim2_2.setAutoDraw(false);
    }
    
    // *stim3_2* updates
    if (t >= 1 && stim3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim3_2.tStart = t;  // (not accounting for frame time here)
      stim3_2.frameNStart = frameN;  // exact frame index
      
      stim3_2.setAutoDraw(true);
    }

    frameRemains = 1 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim3_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim3_2.setAutoDraw(false);
    }
    
    // *stim4_2* updates
    if (t >= 1 && stim4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim4_2.tStart = t;  // (not accounting for frame time here)
      stim4_2.frameNStart = frameN;  // exact frame index
      
      stim4_2.setAutoDraw(true);
    }

    frameRemains = 1 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim4_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim4_2.setAutoDraw(false);
    }
    
    // *stim5_2* updates
    if (t >= 1 && stim5_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim5_2.tStart = t;  // (not accounting for frame time here)
      stim5_2.frameNStart = frameN;  // exact frame index
      
      stim5_2.setAutoDraw(true);
    }

    frameRemains = 1 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim5_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim5_2.setAutoDraw(false);
    }
    
    // *stim6_2* updates
    if (t >= 1 && stim6_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim6_2.tStart = t;  // (not accounting for frame time here)
      stim6_2.frameNStart = frameN;  // exact frame index
      
      stim6_2.setAutoDraw(true);
    }

    frameRemains = 1 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim6_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim6_2.setAutoDraw(false);
    }
    
    // *stim7_2* updates
    if (t >= 1.0 && stim7_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim7_2.tStart = t;  // (not accounting for frame time here)
      stim7_2.frameNStart = frameN;  // exact frame index
      
      stim7_2.setAutoDraw(true);
    }

    frameRemains = 1.0 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim7_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim7_2.setAutoDraw(false);
    }
    
    // *stim8_2* updates
    if (t >= 1.0 && stim8_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim8_2.tStart = t;  // (not accounting for frame time here)
      stim8_2.frameNStart = frameN;  // exact frame index
      
      stim8_2.setAutoDraw(true);
    }

    frameRemains = 1.0 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim8_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim8_2.setAutoDraw(false);
    }
    
    // *target_2* updates
    if (t >= 2.05 && target_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_2.tStart = t;  // (not accounting for frame time here)
      target_2.frameNStart = frameN;  // exact frame index
      
      target_2.setAutoDraw(true);
    }

    
    // *fix_2* updates
    if (t >= 0.0 && fix_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_2.tStart = t;  // (not accounting for frame time here)
      fix_2.frameNStart = frameN;  // exact frame index
      
      fix_2.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 2.05 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['k', 'l'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[0].name;  // just the first key pressed
        key_resp_2.rt = _key_resp_2_allKeys[0].rt;
        // was this correct?
        if (key_resp_2.keys == corrAns) {
            key_resp_2.corr = 1;
        } else {
            key_resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CDT_Trial_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CDT_Trial_trainRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'CDT_Trial_train'-------
    CDT_Trial_trainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp_2.corr = 1;  // correct non-response
      } else {
         key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "CDT_Trial_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _space_to_start_allKeys;
var CDT_InstrComponents;
function CDT_InstrRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'CDT_Instr'-------
    t = 0;
    CDT_InstrClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    space_to_start.keys = undefined;
    space_to_start.rt = undefined;
    _space_to_start_allKeys = [];
    // keep track of which components have finished
    CDT_InstrComponents = [];
    CDT_InstrComponents.push(instr_text);
    CDT_InstrComponents.push(space_to_start);
    
    CDT_InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function CDT_InstrRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'CDT_Instr'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = CDT_InstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }

    
    // *space_to_start* updates
    if (t >= 0.0 && space_to_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_to_start.tStart = t;  // (not accounting for frame time here)
      space_to_start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space_to_start.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space_to_start.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space_to_start.clearEvents(); });
    }

    if (space_to_start.status === PsychoJS.Status.STARTED) {
      let theseKeys = space_to_start.getKeys({keyList: ['s'], waitRelease: false});
      _space_to_start_allKeys = _space_to_start_allKeys.concat(theseKeys);
      if (_space_to_start_allKeys.length > 0) {
        space_to_start.keys = _space_to_start_allKeys[_space_to_start_allKeys.length - 1].name;  // just the last key pressed
        space_to_start.rt = _space_to_start_allKeys[_space_to_start_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CDT_InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CDT_InstrRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'CDT_Instr'-------
    CDT_InstrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "CDT_Instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var CDT_TrialComponents;
function CDT_TrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'CDT_Trial'-------
    t = 0;
    CDT_TrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    stim1.setOpacity(stim1opa);
    stim1.setPos([stim1posx, stim1posy]);
    stim1.setSize([stimsizex, stimsizey]);
    stim1.setFillColor(new util.Color(stim1col));
    stim1.setLineColor(new util.Color(stim1col));
    stim2.setOpacity(stim2opa);
    stim2.setPos([stim2posx, stim2posy]);
    stim2.setSize([stimsizex, stimsizey]);
    stim2.setFillColor(new util.Color(stim2col));
    stim2.setLineColor(new util.Color(stim2col));
    stim3.setOpacity(stim3opa);
    stim3.setPos([stim3posx, stim3posy]);
    stim3.setSize([stimsizex, stimsizey]);
    stim3.setFillColor(new util.Color(stim3col));
    stim3.setLineColor(new util.Color(stim3col));
    stim4.setOpacity(stim4opa);
    stim4.setPos([stim4posx, stim4posy]);
    stim4.setSize([stimsizex, stimsizey]);
    stim4.setFillColor(new util.Color(stim4col));
    stim4.setLineColor(new util.Color(stim4col));
    stim5.setOpacity(stim5opa);
    stim5.setPos([stim5posx, stim5posy]);
    stim5.setSize([stimsizex, stimsizey]);
    stim5.setFillColor(new util.Color(stim5col));
    stim5.setLineColor(new util.Color(stim5col));
    stim6.setOpacity(stim6opa);
    stim6.setPos([stim6posx, stim6posy]);
    stim6.setSize([stimsizex, stimsizey]);
    stim6.setFillColor(new util.Color(stim6col));
    stim6.setLineColor(new util.Color(stim6col));
    stim7.setOpacity(stim7opa);
    stim7.setPos([stim7posx, stim7posy]);
    stim7.setSize([stimsizex, stimsizey]);
    stim7.setFillColor(new util.Color(stim7col));
    stim7.setLineColor(new util.Color(stim7col));
    stim8.setOpacity(stim8opa);
    stim8.setPos([stim7posx, stim7posy]);
    stim8.setSize([stimsizex, stimsizey]);
    stim8.setFillColor(new util.Color(stim8col));
    stim8.setLineColor(new util.Color(stim8col));
    target.setPos([targetposx, targetposy]);
    target.setSize([stimsizex, stimsizey]);
    target.setFillColor(new util.Color(targetcol));
    target.setLineColor(new util.Color(targetcol));
    fix.setText('+');
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    CDT_TrialComponents = [];
    CDT_TrialComponents.push(stim1);
    CDT_TrialComponents.push(stim2);
    CDT_TrialComponents.push(stim3);
    CDT_TrialComponents.push(stim4);
    CDT_TrialComponents.push(stim5);
    CDT_TrialComponents.push(stim6);
    CDT_TrialComponents.push(stim7);
    CDT_TrialComponents.push(stim8);
    CDT_TrialComponents.push(target);
    CDT_TrialComponents.push(fix);
    CDT_TrialComponents.push(key_resp);
    
    CDT_TrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function CDT_TrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'CDT_Trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = CDT_TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim1* updates
    if (t >= 1 && stim1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1.tStart = t;  // (not accounting for frame time here)
      stim1.frameNStart = frameN;  // exact frame index
      
      stim1.setAutoDraw(true);
    }

    frameRemains = 1 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim1.setAutoDraw(false);
    }
    
    // *stim2* updates
    if (t >= 1 && stim2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim2.tStart = t;  // (not accounting for frame time here)
      stim2.frameNStart = frameN;  // exact frame index
      
      stim2.setAutoDraw(true);
    }

    frameRemains = 1 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim2.setAutoDraw(false);
    }
    
    // *stim3* updates
    if (t >= 1 && stim3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim3.tStart = t;  // (not accounting for frame time here)
      stim3.frameNStart = frameN;  // exact frame index
      
      stim3.setAutoDraw(true);
    }

    frameRemains = 1 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim3.setAutoDraw(false);
    }
    
    // *stim4* updates
    if (t >= 1 && stim4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim4.tStart = t;  // (not accounting for frame time here)
      stim4.frameNStart = frameN;  // exact frame index
      
      stim4.setAutoDraw(true);
    }

    frameRemains = 1 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim4.setAutoDraw(false);
    }
    
    // *stim5* updates
    if (t >= 1 && stim5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim5.tStart = t;  // (not accounting for frame time here)
      stim5.frameNStart = frameN;  // exact frame index
      
      stim5.setAutoDraw(true);
    }

    frameRemains = 1 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim5.setAutoDraw(false);
    }
    
    // *stim6* updates
    if (t >= 1 && stim6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim6.tStart = t;  // (not accounting for frame time here)
      stim6.frameNStart = frameN;  // exact frame index
      
      stim6.setAutoDraw(true);
    }

    frameRemains = 1 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim6.setAutoDraw(false);
    }
    
    // *stim7* updates
    if (t >= 1.0 && stim7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim7.tStart = t;  // (not accounting for frame time here)
      stim7.frameNStart = frameN;  // exact frame index
      
      stim7.setAutoDraw(true);
    }

    frameRemains = 1.0 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim7.setAutoDraw(false);
    }
    
    // *stim8* updates
    if (t >= 1.0 && stim8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim8.tStart = t;  // (not accounting for frame time here)
      stim8.frameNStart = frameN;  // exact frame index
      
      stim8.setAutoDraw(true);
    }

    frameRemains = 1.0 + stimdur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim8.setAutoDraw(false);
    }
    
    // *target* updates
    if (t >= 2.05 && target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target.tStart = t;  // (not accounting for frame time here)
      target.frameNStart = frameN;  // exact frame index
      
      target.setAutoDraw(true);
    }

    
    // *fix* updates
    if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix.tStart = t;  // (not accounting for frame time here)
      fix.frameNStart = frameN;  // exact frame index
      
      fix.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 2.05 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['k', 'l'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[0].name;  // just the first key pressed
        key_resp.rt = _key_resp_allKeys[0].rt;
        // was this correct?
        if (key_resp.keys == corrAns) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CDT_TrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CDT_TrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'CDT_Trial'-------
    CDT_TrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "CDT_Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _InstrResp_allKeys;
var GNG_InstrComponents;
function GNG_InstrRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'GNG_Instr'-------
    t = 0;
    GNG_InstrClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    InstrResp.keys = undefined;
    InstrResp.rt = undefined;
    _InstrResp_allKeys = [];
    // keep track of which components have finished
    GNG_InstrComponents = [];
    GNG_InstrComponents.push(Instructions);
    GNG_InstrComponents.push(InstrResp);
    
    GNG_InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function GNG_InstrRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'GNG_Instr'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = GNG_InstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instructions* updates
    if (t >= 0.0 && Instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions.tStart = t;  // (not accounting for frame time here)
      Instructions.frameNStart = frameN;  // exact frame index
      
      Instructions.setAutoDraw(true);
    }

    
    // *InstrResp* updates
    if (t >= 0.0 && InstrResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstrResp.tStart = t;  // (not accounting for frame time here)
      InstrResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { InstrResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { InstrResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { InstrResp.clearEvents(); });
    }

    if (InstrResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = InstrResp.getKeys({keyList: ['s'], waitRelease: false});
      _InstrResp_allKeys = _InstrResp_allKeys.concat(theseKeys);
      if (_InstrResp_allKeys.length > 0) {
        InstrResp.keys = _InstrResp_allKeys[_InstrResp_allKeys.length - 1].name;  // just the last key pressed
        InstrResp.rt = _InstrResp_allKeys[_InstrResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    GNG_InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GNG_InstrRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'GNG_Instr'-------
    GNG_InstrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "GNG_Instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var GNG_fixComponents;
function GNG_fixRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'GNG_fix'-------
    t = 0;
    GNG_fixClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    GNG_fixComponents = [];
    GNG_fixComponents.push(fix_ini);
    
    GNG_fixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function GNG_fixRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'GNG_fix'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = GNG_fixClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_ini* updates
    if (t >= 0.0 && fix_ini.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_ini.tStart = t;  // (not accounting for frame time here)
      fix_ini.frameNStart = frameN;  // exact frame index
      
      fix_ini.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_ini.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_ini.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    GNG_fixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GNG_fixRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'GNG_fix'-------
    GNG_fixComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _trialResp_allKeys;
var GNG_trialComponents;
function GNG_trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'GNG_trial'-------
    t = 0;
    GNG_trialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    trialBlue.setOpacity(blueOpacity);
    trialOrange.setOpacity(orangeOpacity);
    trialResp.keys = undefined;
    trialResp.rt = undefined;
    _trialResp_allKeys = [];
    // keep track of which components have finished
    GNG_trialComponents = [];
    GNG_trialComponents.push(fix_trial);
    GNG_trialComponents.push(trialBlue);
    GNG_trialComponents.push(trialOrange);
    GNG_trialComponents.push(trialResp);
    
    GNG_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function GNG_trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'GNG_trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = GNG_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_trial* updates
    if (t >= 0.0 && fix_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_trial.tStart = t;  // (not accounting for frame time here)
      fix_trial.frameNStart = frameN;  // exact frame index
      
      fix_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_trial.setAutoDraw(false);
    }
    
    // *trialBlue* updates
    if (t >= 0.0 && trialBlue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialBlue.tStart = t;  // (not accounting for frame time here)
      trialBlue.frameNStart = frameN;  // exact frame index
      
      trialBlue.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialBlue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialBlue.setAutoDraw(false);
    }
    
    // *trialOrange* updates
    if (t >= 0.0 && trialOrange.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialOrange.tStart = t;  // (not accounting for frame time here)
      trialOrange.frameNStart = frameN;  // exact frame index
      
      trialOrange.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialOrange.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialOrange.setAutoDraw(false);
    }
    
    // *trialResp* updates
    if (t >= 0.0 && trialResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialResp.tStart = t;  // (not accounting for frame time here)
      trialResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trialResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trialResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trialResp.clearEvents(); });
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialResp.status = PsychoJS.Status.FINISHED;
  }

    if (trialResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = trialResp.getKeys({keyList: ['space'], waitRelease: false});
      _trialResp_allKeys = _trialResp_allKeys.concat(theseKeys);
      if (_trialResp_allKeys.length > 0) {
        trialResp.keys = _trialResp_allKeys[0].name;  // just the first key pressed
        trialResp.rt = _trialResp_allKeys[0].rt;
        // was this correct?
        if (trialResp.keys == corrAns) {
            trialResp.corr = 1;
        } else {
            trialResp.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    GNG_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GNG_trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'GNG_trial'-------
    GNG_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (trialResp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         trialResp.corr = 1;  // correct non-response
      } else {
         trialResp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trialResp.keys', trialResp.keys);
    psychoJS.experiment.addData('trialResp.corr', trialResp.corr);
    if (typeof trialResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trialResp.rt', trialResp.rt);
        }
    
    trialResp.stop();
    return Scheduler.Event.NEXT;
  };
}


var _InstrResp_2_allKeys;
var GNG_Instr_2Components;
function GNG_Instr_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'GNG_Instr_2'-------
    t = 0;
    GNG_Instr_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    InstrResp_2.keys = undefined;
    InstrResp_2.rt = undefined;
    _InstrResp_2_allKeys = [];
    // keep track of which components have finished
    GNG_Instr_2Components = [];
    GNG_Instr_2Components.push(Instructions_2);
    GNG_Instr_2Components.push(InstrResp_2);
    
    GNG_Instr_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function GNG_Instr_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'GNG_Instr_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = GNG_Instr_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instructions_2* updates
    if (t >= 0.0 && Instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_2.tStart = t;  // (not accounting for frame time here)
      Instructions_2.frameNStart = frameN;  // exact frame index
      
      Instructions_2.setAutoDraw(true);
    }

    
    // *InstrResp_2* updates
    if (t >= 0.0 && InstrResp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstrResp_2.tStart = t;  // (not accounting for frame time here)
      InstrResp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { InstrResp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { InstrResp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { InstrResp_2.clearEvents(); });
    }

    if (InstrResp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = InstrResp_2.getKeys({keyList: ['s'], waitRelease: false});
      _InstrResp_2_allKeys = _InstrResp_2_allKeys.concat(theseKeys);
      if (_InstrResp_2_allKeys.length > 0) {
        InstrResp_2.keys = _InstrResp_2_allKeys[_InstrResp_2_allKeys.length - 1].name;  // just the last key pressed
        InstrResp_2.rt = _InstrResp_2_allKeys[_InstrResp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    GNG_Instr_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GNG_Instr_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'GNG_Instr_2'-------
    GNG_Instr_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "GNG_Instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
