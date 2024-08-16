/********************** 
 * Cdt_Gng_Ius12 Test *
 **********************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'CDT_GNG_IUS12';  // from the Builder filename that created this script
let expInfo = {'participant': '00000', 'age': ''};

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
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
flowScheduler.add(embedded_formRoutineBegin());
flowScheduler.add(embedded_formRoutineEachFrame());
flowScheduler.add(embedded_formRoutineEnd());
flowScheduler.add(random_seedRoutineBegin());
flowScheduler.add(random_seedRoutineEachFrame());
flowScheduler.add(random_seedRoutineEnd());
flowScheduler.add(consent1RoutineBegin());
flowScheduler.add(consent1RoutineEachFrame());
flowScheduler.add(consent1RoutineEnd());
flowScheduler.add(consent1_2RoutineBegin());
flowScheduler.add(consent1_2RoutineEachFrame());
flowScheduler.add(consent1_2RoutineEnd());
flowScheduler.add(consent1_3RoutineBegin());
flowScheduler.add(consent1_3RoutineEachFrame());
flowScheduler.add(consent1_3RoutineEnd());
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
flowScheduler.add(GNG_Instr_TrainRoutineBegin());
flowScheduler.add(GNG_Instr_TrainRoutineEachFrame());
flowScheduler.add(GNG_Instr_TrainRoutineEnd());
flowScheduler.add(GNG_fixRoutineBegin());
flowScheduler.add(GNG_fixRoutineEachFrame());
flowScheduler.add(GNG_fixRoutineEnd());
const GNGtrials_trainLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(GNGtrials_trainLoopBegin, GNGtrials_trainLoopScheduler);
flowScheduler.add(GNGtrials_trainLoopScheduler);
flowScheduler.add(GNGtrials_trainLoopEnd);
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
const engprof_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(engprof_trialsLoopBegin, engprof_trialsLoopScheduler);
flowScheduler.add(engprof_trialsLoopScheduler);
flowScheduler.add(engprof_trialsLoopEnd);
flowScheduler.add(IUS12_InstrRoutineBegin());
flowScheduler.add(IUS12_InstrRoutineEachFrame());
flowScheduler.add(IUS12_InstrRoutineEnd());
const IUS12_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(IUS12_trialsLoopBegin, IUS12_trialsLoopScheduler);
flowScheduler.add(IUS12_trialsLoopScheduler);
flowScheduler.add(IUS12_trialsLoopEnd);
flowScheduler.add(debriefRoutineBegin());
flowScheduler.add(debriefRoutineEachFrame());
flowScheduler.add(debriefRoutineEnd());
flowScheduler.add(thanks_2RoutineBegin());
flowScheduler.add(thanks_2RoutineEachFrame());
flowScheduler.add(thanks_2RoutineEnd());
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


var setupClock;
var thisExp;
var win;
var event;
var shuffle;
var round;
var items;
var contact_info;
var key_resp_ini;
var consent_question;
var embedded_formClock;
var iframe_loading_2;
var showSlider;
var showLoop;
var showVideo;
var showSeed;
var random_seedClock;
var seedString;
var randomnum1;
var randomnum2;
var kb;
var instructions;
var consent1Clock;
var consent_1;
var key_resp_3;
var text_3;
var consent1_2Clock;
var consent;
var key_resp_4;
var text_4;
var consent1_3Clock;
var consent_2;
var key_resp_6;
var text_5;
var CDT_Instr_trainClock;
var instr_text_2;
var space_to_start_2;
var key_reminderClock;
var text_8;
var CDT_Trial_trainClock;
var stim1_2;
var stim2_2;
var stim3_2;
var stim4_2;
var stim5_2;
var stim6_2;
var target_2;
var fix_2;
var key_resp_2;
var CDT_InstrClock;
var instr_text;
var space_to_start;
var take_breakClock;
var text_9;
var key_resp_5;
var CDT_TrialClock;
var stim1;
var stim2;
var stim3;
var stim4;
var stim5;
var stim6;
var target;
var fix;
var key_resp;
var GNG_Instr_TrainClock;
var Instructions_3;
var InstrResp_4;
var GNG_fixClock;
var fix_ini;
var GNG_Trial_TrainClock;
var fix_trial_Train;
var trialBlue_Train;
var trialOrange_Train;
var trialResp_Train;
var GNG_FeedbackClock;
var feedback_color_list;
var feedback_word_list;
var text_feedback;
var fix_3;
var GNG_InstrClock;
var Instructions;
var InstrResp;
var GNG_trialClock;
var fix_trial;
var trialBlue;
var trialOrange;
var trialResp;
var GNG_Instr_2Clock;
var Instructions_2;
var InstrResp_2;
var englishq_sliderClock;
var text_6;
var slider_2;
var IUS12_InstrClock;
var text;
var InstrResp_3;
var trial_sliderClock;
var text_2;
var slider;
var debriefClock;
var debrief_slide_1;
var key_resp_7;
var text_10;
var thanks_2Clock;
var text_7;
var key_resp_end;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  Array.prototype.append = [].push;
  shuffle = util.shuffle;
  round = function(num, n=0) {    
      return +(Math.round(num + ("e+" + n))  + ("e-" + n));
  }
  
  
  !function(a,b,c,d,e,f,g,h,i){function j(a){var b,c=a.length,e=this,f=0,g=e.i=e.j=0,h=e.S=[];for(c||(a=[c++]);d>f;)h[f]=f++;for(f=0;d>f;f++)h[f]=h[g=s&g+a[f%c]+(b=h[f])],h[g]=b;(e.g=function(a){for(var b,c=0,f=e.i,g=e.j,h=e.S;a--;)b=h[f=s&f+1],c=c*d+h[s&(h[f]=h[g=s&g+b])+(h[g]=b)];return e.i=f,e.j=g,c})(d)}function k(a,b){var c,d=[],e=typeof a;if(b&&"object"==e)for(c in a)try{d.push(k(a[c],b-1))}catch(f){}return d.length?d:"string"==e?a:a+"\0"}function l(a,b){for(var c,d=a+"",e=0;e<d.length;)b[s&e]=s&(c^=19*b[s&e])+d.charCodeAt(e++);return n(b)}function m(c){try{return o?n(o.randomBytes(d)):(a.crypto.getRandomValues(c=new Uint8Array(d)),n(c))}catch(e){return[+new Date,a,(c=a.navigator)&&c.plugins,a.screen,n(b)]}}function n(a){return String.fromCharCode.apply(0,a)}var o,p=c.pow(d,e),q=c.pow(2,f),r=2*q,s=d-1,t=c["seed"+i]=function(a,f,g){var h=[];f=1==f?{entropy:!0}:f||{};var o=l(k(f.entropy?[a,n(b)]:null==a?m():a,3),h),s=new j(h);return l(n(s.S),b),(f.pass||g||function(a,b,d){return d?(c[i]=a,b):a})(function(){for(var a=s.g(e),b=p,c=0;q>a;)a=(a+c)*d,b*=d,c=s.g(1);for(;a>=r;)a/=2,b/=2,c>>>=1;return(a+c)/b},o,"global"in f?f.global:this==c)};if(l(c[i](),b),g&&g.exports){g.exports=t;try{o=require("crypto")}catch(u){}}else h&&h.amd&&h(function(){return t})}(this,[],Math,256,6,52,"object"==typeof module&&module,"function"==typeof define&&define,"random");
  items = [];
  
  contact_info = new visual.ImageStim({
    win : psychoJS.window,
    name : 'contact_info', units : 'height', 
    image : 'contact_info.png', mask : undefined,
    ori : 0, pos : [0, (- 0.2)], size : [0.9, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  key_resp_ini = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  consent_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_question',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "embedded_form"
  embedded_formClock = new util.Clock();
  iframe_loading_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'iframe_loading_2',
    text: 'Loading...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  showSlider=1
  showLoop=1
  var showAge=1
  showVideo=0
  showSeed=1
  // Initialize components for Routine "random_seed"
  random_seedClock = new util.Clock();
  seedString = Math.seedrandom();
  randomnum1 = Math.random(); 
  Math.seedrandom(seedString);
  randomnum2 = Math.random(); 
  kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true}); 
  
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "consent1"
  consent1Clock = new util.Clock();
  consent_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent_1', units : 'height', 
    image : 'Slide1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 0.8533],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'After reading, press Space to continue\n\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.49)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "consent1_2"
  consent1_2Clock = new util.Clock();
  consent = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent', units : 'height', 
    image : 'Slide2.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 0.8533],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'After reading, press Space to continue\n\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.49)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "consent1_3"
  consent1_3Clock = new util.Clock();
  consent_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent_2', units : 'height', 
    image : 'Slide3.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 0.8533],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'I consent (Y) I do not consent (Esc)\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.49)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "CDT_Instr_train"
  CDT_Instr_trainClock = new util.Clock();
  instr_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text_2',
    text: 'Welcome to the experiment. \nIn this experiment you will be remembering colors.\n\nEach trial will start with a black fixation cross.\nPLEASE try to keep your eyes on it (it will help you).\nThen, 4 or 6 squares with different colors will appear.\nRemember as many colors as you can.\nAfter a short delay, one square will reappear.\n\nIf it has the SAME color and location, press the "K" key.\nIf the color or location is DIFFERENT, press the "L" key.\nIf you are not sure, just take your best guess.\n\nPress \'S\' to start TRAINING.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  space_to_start_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "key_reminder"
  key_reminderClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'Remember!\n\nSAME color and location, press "K".\n\ncolor or location is DIFFERENT, press "L".',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
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
  
  target_2 = new visual.Rect ({
    win: psychoJS.window, name: 'target_2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  fix_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CDT_Instr"
  CDT_InstrClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'Training completed!\n\nWelcome to the first experiment. \nIn this experiment you will be remembering colors.\n\nEach trial will start with a fixation cross.\nDo your best to keep your eyes on it.\n\nThen, 4 or 6 squares with different colors will appear.\nRemember as many colors as you can.\nAfter a short delay, one square will reappear.\nIf it has the SAME color and location, press the "K" key.\nIf the color or location is DIFFERENT, press the "L" key.\nIf you are not sure, just take your best guess.\n\nIt should take less than 10 minutes.\n\nPress \'S\' to start the EXPERIMENT.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  space_to_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "take_break"
  take_breakClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: "You are halfway through this experiment!\nTake a short break. \n\nPress 'S' to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  
  target = new visual.Rect ({
    win: psychoJS.window, name: 'target', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GNG_Instr_Train"
  GNG_Instr_TrainClock = new util.Clock();
  Instructions_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions_3',
    text: "Thanks for completing the first task, \n\nThe second part will be shorter (aprox. 3 minutes).\n\nPress 'Space' for blue, nothing for orange. \n\nLet's do a short training first...\n\nPress 'S' to start the training\n\n\n\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  InstrResp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GNG_fix"
  GNG_fixClock = new util.Clock();
  fix_ini = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_ini',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "GNG_Trial_Train"
  GNG_Trial_TrainClock = new util.Clock();
  fix_trial_Train = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_trial_Train',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  trialBlue_Train = new visual.Polygon ({
    win: psychoJS.window, name: 'trialBlue_Train', 
    edges: 180, size:[0.15, 0.15],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), 1.0]),
    fillColor: new util.Color([(- 1.0), (- 1.0), 1.0]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  trialOrange_Train = new visual.Polygon ({
    win: psychoJS.window, name: 'trialOrange_Train', 
    edges: 180, size:[0.15, 0.15],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1.0, 0.004, (- 1.0)]),
    fillColor: new util.Color([1.0, 0.004, (- 1.0)]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  trialResp_Train = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GNG_Feedback"
  GNG_FeedbackClock = new util.Clock();
  feedback_color_list = ["green", "red"];
  feedback_word_list = ["correct!", "incorrect!"];
  
  text_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_feedback',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  fix_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_3',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('blue'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "GNG_Instr"
  GNG_InstrClock = new util.Clock();
  Instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions',
    text: "Remember, press 'Space' for blue, nothing for orange. \n\nNow, it is going to be faster and without feedback...\n\nGood Luck!!\n\n\n'S' to start.\n\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
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
    color: new util.Color('black'),  opacity: 1,
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
    color: new util.Color('black'),  opacity: 1,
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
    color: new util.Color('black'),  opacity: 1,
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
    color: new util.Color('black'),  opacity: 1,
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
    color: new util.Color('black'),  opacity: 1,
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
    color: new util.Color('black'),  opacity: 1,
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
    color: new util.Color('black'),  opacity: 1,
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
    color: new util.Color('black'),  opacity: 1,
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
  
  // Initialize components for Routine "englishq_slider"
  englishq_sliderClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_2',
    size: [1.0, 0.05], pos: [0, (- 0.15)], units: 'height',
    labels: undefined, ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 0, style: [visual.Slider.Style.RATING, visual.Slider.Style.RADIO, visual.Slider.Style.LABELS_45, visual.Slider.Style.WHITE_ON_BLACK],
    color: new util.Color('LightGray'), 
    fontFamily: 'Arial', bold: true, italic: false, 
    flip: false,
  });
  
  // Initialize components for Routine "IUS12_Instr"
  IUS12_InstrClock = new util.Clock();
  
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: "The following questions are about how you view uncertainties. \nThere are no right or wrong answers, just click on the statement that describes you.\n\nPlease read each statement and rate on a scale of 1 ('not at all characteristic of me') to 5 ('entirely characteristic of me') in relation to how much each describes your way of being.\n\n\nPress 's' to start",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  InstrResp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_slider"
  trial_sliderClock = new util.Clock();
  
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    size: [1.0, 0.05], pos: [0, (- 0.15)], units: 'height',
    labels: ['Not at all \n characteristic of me', 'A little characteristic of me', 'Somewhat characteristic of me', 'Very characteristic of me', 'Entirely characteristic of me'], ticks: [1, 2, 3, 4, 5],
    granularity: 0, style: [visual.Slider.Style.RATING, visual.Slider.Style.RADIO, visual.Slider.Style.LABELS_45, visual.Slider.Style.WHITE_ON_BLACK],
    color: new util.Color('LightGray'), 
    fontFamily: 'Arial', bold: true, italic: false, 
    flip: false,
  });
  
  // Initialize components for Routine "debrief"
  debriefClock = new util.Clock();
  debrief_slide_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'debrief_slide_1', units : 'height', 
    image : 'debrief_slide.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 0.8533],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: "After reading, press 's' to continue\n\n",
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.49)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "thanks_2"
  thanks_2Clock = new util.Clock();
  
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'default text',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var msg0;
var _key_resp_ini_allKeys;
var setupComponents;
function setupRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    kb.clock.reset();
    msg0 = (("Welcome back to the study!\n Your participant ID is: " + expInfo["participant"].toString()) + "\n\n If you don't know your participant ID, please abort the experiment (press 'Esc' and contact the experimenters (details below). \n Ready to start? Press the Y key when ready");
    
    key_resp_ini.keys = undefined;
    key_resp_ini.rt = undefined;
    _key_resp_ini_allKeys = [];
    consent_question.setText(msg0);
    // keep track of which components have finished
    setupComponents = [];
    setupComponents.push(contact_info);
    setupComponents.push(key_resp_ini);
    setupComponents.push(consent_question);
    
    setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function setupRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    /* Syntax Error: Fix Python code */
    
    // *contact_info* updates
    if (t >= 0.0 && contact_info.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contact_info.tStart = t;  // (not accounting for frame time here)
      contact_info.frameNStart = frameN;  // exact frame index
      
      contact_info.setAutoDraw(true);
    }

    
    // *key_resp_ini* updates
    if (t >= 0.0 && key_resp_ini.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_ini.tStart = t;  // (not accounting for frame time here)
      key_resp_ini.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_ini.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ini.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ini.clearEvents(); });
    }

    if (key_resp_ini.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_ini.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_ini_allKeys = _key_resp_ini_allKeys.concat(theseKeys);
      if (_key_resp_ini_allKeys.length > 0) {
        key_resp_ini.keys = _key_resp_ini_allKeys[_key_resp_ini_allKeys.length - 1].name;  // just the last key pressed
        key_resp_ini.rt = _key_resp_ini_allKeys[_key_resp_ini_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *consent_question* updates
    if (t >= 0.0 && consent_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_question.tStart = t;  // (not accounting for frame time here)
      consent_question.frameNStart = frameN;  // exact frame index
      
      consent_question.setAutoDraw(true);
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
    setupComponents.forEach( function(thisComponent) {
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


function setupRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'setup'-------
    setupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    
    
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var continue_routine;
var embedded_formComponents;
function embedded_formRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'embedded_form'-------
    t = 0;
    embedded_formClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    continue_routine = true; // Routines can't be ended from within Begin Routine
    
    // keep track of which components have finished
    embedded_formComponents = [];
    embedded_formComponents.push(iframe_loading_2);
    
    embedded_formComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function embedded_formRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'embedded_form'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = embedded_formClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *iframe_loading_2* updates
    if (t >= 0.0 && iframe_loading_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iframe_loading_2.tStart = t;  // (not accounting for frame time here)
      iframe_loading_2.frameNStart = frameN;  // exact frame index
      
      iframe_loading_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (iframe_loading_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      iframe_loading_2.setAutoDraw(false);
    }
    continueRoutine = continue_routine;
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    embedded_formComponents.forEach( function(thisComponent) {
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


var showGender;
function embedded_formRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'embedded_form'-------
    embedded_formComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // showSlider = psychoJS.experiment._currentTrialData['showSlider'];
    // showLoop = psychoJS.experiment._currentTrialData['showLoop'];
    // if (showLoop === undefined){
    //     showLoop = 0;
    //    }
    // showAge = psychoJS.experiment._currentTrialData['showAge'];
    showGender = psychoJS.experiment._currentTrialData['showGender'];
    // showVideo = psychoJS.experiment._currentTrialData['showVideo'];
    // showSeed = psychoJS.experiment._currentTrialData['showSeed'];
    
    // the Routine "embedded_form" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var msg;
var random_seedComponents;
function random_seedRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'random_seed'-------
    t = 0;
    random_seedClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    msg = ((("Testing reseeding random numbers.\n\nrandomnum1: " + randomnum1.toString()) + "\n\nrandomnum2: ") + randomnum2.toString());
    
    instructions.setText('');
    // keep track of which components have finished
    random_seedComponents = [];
    random_seedComponents.push(instructions);
    
    random_seedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var _pj;
var keys;
function random_seedRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'random_seed'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = random_seedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys(["space", "quit"], {"waitRelease": true});
    if (_pj.in_es6("quit", keys)) {
        core.quit();
    } else {
        if ((_pj.in_es6("space", keys) || (showSeed !== 1))) {
            continueRoutine = false;
        }
    }
    
    
    // *instructions* updates
    if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instructions.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instructions.setAutoDraw(false);
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
    random_seedComponents.forEach( function(thisComponent) {
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


function random_seedRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'random_seed'-------
    random_seedComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "random_seed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var consent1Components;
function consent1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'consent1'-------
    t = 0;
    consent1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    consent1Components = [];
    consent1Components.push(consent_1);
    consent1Components.push(key_resp_3);
    consent1Components.push(text_3);
    
    consent1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function consent1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'consent1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = consent1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_1* updates
    if (t >= 0.0 && consent_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_1.tStart = t;  // (not accounting for frame time here)
      consent_1.frameNStart = frameN;  // exact frame index
      
      consent_1.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
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
    consent1Components.forEach( function(thisComponent) {
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


function consent1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'consent1'-------
    consent1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "consent1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var consent1_2Components;
function consent1_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'consent1_2'-------
    t = 0;
    consent1_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    consent1_2Components = [];
    consent1_2Components.push(consent);
    consent1_2Components.push(key_resp_4);
    consent1_2Components.push(text_4);
    
    consent1_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function consent1_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'consent1_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = consent1_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent* updates
    if (t >= 0.0 && consent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent.tStart = t;  // (not accounting for frame time here)
      consent.frameNStart = frameN;  // exact frame index
      
      consent.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
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
    consent1_2Components.forEach( function(thisComponent) {
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


function consent1_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'consent1_2'-------
    consent1_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "consent1_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var consent1_3Components;
function consent1_3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'consent1_3'-------
    t = 0;
    consent1_3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    consent1_3Components = [];
    consent1_3Components.push(consent_2);
    consent1_3Components.push(key_resp_6);
    consent1_3Components.push(text_5);
    
    consent1_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function consent1_3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'consent1_3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = consent1_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_2* updates
    if (t >= 0.0 && consent_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_2.tStart = t;  // (not accounting for frame time here)
      consent_2.frameNStart = frameN;  // exact frame index
      
      consent_2.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
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
    consent1_3Components.forEach( function(thisComponent) {
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


function consent1_3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'consent1_3'-------
    consent1_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "consent1_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


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
    trialList: 'conditionsTrain_luria_6_screen_pos.xlsx',
    seed: undefined, name: 'CDT_trials_train'
  });
  psychoJS.experiment.addLoop(CDT_trials_train); // add the loop to the experiment
  currentLoop = CDT_trials_train;  // we're now the current loop

  // Schedule all the trials in the trialList:
  CDT_trials_train.forEach(function() {
    const snapshot = CDT_trials_train.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(key_reminderRoutineBegin(snapshot));
    thisScheduler.add(key_reminderRoutineEachFrame(snapshot));
    thisScheduler.add(key_reminderRoutineEnd(snapshot));
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
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions_luria_6_screen_pos.xlsx',
    seed: undefined, name: 'CDT_trials'
  });
  psychoJS.experiment.addLoop(CDT_trials); // add the loop to the experiment
  currentLoop = CDT_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  CDT_trials.forEach(function() {
    const snapshot = CDT_trials.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(take_breakRoutineBegin(snapshot));
    thisScheduler.add(take_breakRoutineEachFrame(snapshot));
    thisScheduler.add(take_breakRoutineEnd(snapshot));
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


var GNGtrials_train;
function GNGtrials_trainLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  GNGtrials_train = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'GNGCondJK20_Train.xlsx',
    seed: undefined, name: 'GNGtrials_train'
  });
  psychoJS.experiment.addLoop(GNGtrials_train); // add the loop to the experiment
  currentLoop = GNGtrials_train;  // we're now the current loop

  // Schedule all the trials in the trialList:
  GNGtrials_train.forEach(function() {
    const snapshot = GNGtrials_train.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(GNG_Trial_TrainRoutineBegin(snapshot));
    thisScheduler.add(GNG_Trial_TrainRoutineEachFrame(snapshot));
    thisScheduler.add(GNG_Trial_TrainRoutineEnd(snapshot));
    thisScheduler.add(GNG_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(GNG_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(GNG_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function GNGtrials_trainLoopEnd() {
  psychoJS.experiment.removeLoop(GNGtrials_train);

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


var engprof_trials;
function engprof_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  engprof_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'html/resources/engprof_cond.xlsx',
    seed: undefined, name: 'engprof_trials'
  });
  psychoJS.experiment.addLoop(engprof_trials); // add the loop to the experiment
  currentLoop = engprof_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  engprof_trials.forEach(function() {
    const snapshot = engprof_trials.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(englishq_sliderRoutineBegin(snapshot));
    thisScheduler.add(englishq_sliderRoutineEachFrame(snapshot));
    thisScheduler.add(englishq_sliderRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function engprof_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(engprof_trials);

  return Scheduler.Event.NEXT;
}


var IUS12_trials;
function IUS12_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  IUS12_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'html/resources/IUS12_cond.xlsx',
    seed: undefined, name: 'IUS12_trials'
  });
  psychoJS.experiment.addLoop(IUS12_trials); // add the loop to the experiment
  currentLoop = IUS12_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  IUS12_trials.forEach(function() {
    const snapshot = IUS12_trials.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trial_sliderRoutineBegin(snapshot));
    thisScheduler.add(trial_sliderRoutineEachFrame(snapshot));
    thisScheduler.add(trial_sliderRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function IUS12_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(IUS12_trials);

  return Scheduler.Event.NEXT;
}


var key_reminderComponents;
function key_reminderRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'key_reminder'-------
    t = 0;
    key_reminderClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    key_reminderComponents = [];
    key_reminderComponents.push(text_8);
    
    key_reminderComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function key_reminderRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'key_reminder'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = key_reminderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
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
    key_reminderComponents.forEach( function(thisComponent) {
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


function key_reminderRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'key_reminder'-------
    key_reminderComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
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


var _key_resp_5_allKeys;
var take_breakComponents;
function take_breakRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'take_break'-------
    t = 0;
    take_breakClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    take_breakComponents = [];
    take_breakComponents.push(text_9);
    take_breakComponents.push(key_resp_5);
    
    take_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var break_duration;
function take_breakRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'take_break'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = take_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! _pj.in_es6(trials.thisN, [59]))) {
        break_duration = 0;
        continueRoutine = false;
    } else {
        break_duration = 60;
    }
    
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    frameRemains = 0.0 + break_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    frameRemains = 0.0 + break_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_5.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['s'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
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
    take_breakComponents.forEach( function(thisComponent) {
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


function take_breakRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'take_break'-------
    take_breakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "take_break" was not non-slip safe, so reset the non-slip timer
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


var _InstrResp_4_allKeys;
var GNG_Instr_TrainComponents;
function GNG_Instr_TrainRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'GNG_Instr_Train'-------
    t = 0;
    GNG_Instr_TrainClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    InstrResp_4.keys = undefined;
    InstrResp_4.rt = undefined;
    _InstrResp_4_allKeys = [];
    // keep track of which components have finished
    GNG_Instr_TrainComponents = [];
    GNG_Instr_TrainComponents.push(Instructions_3);
    GNG_Instr_TrainComponents.push(InstrResp_4);
    
    GNG_Instr_TrainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function GNG_Instr_TrainRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'GNG_Instr_Train'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = GNG_Instr_TrainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instructions_3* updates
    if (t >= 0.0 && Instructions_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_3.tStart = t;  // (not accounting for frame time here)
      Instructions_3.frameNStart = frameN;  // exact frame index
      
      Instructions_3.setAutoDraw(true);
    }

    
    // *InstrResp_4* updates
    if (t >= 0.0 && InstrResp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstrResp_4.tStart = t;  // (not accounting for frame time here)
      InstrResp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { InstrResp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { InstrResp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { InstrResp_4.clearEvents(); });
    }

    if (InstrResp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = InstrResp_4.getKeys({keyList: ['s'], waitRelease: false});
      _InstrResp_4_allKeys = _InstrResp_4_allKeys.concat(theseKeys);
      if (_InstrResp_4_allKeys.length > 0) {
        InstrResp_4.keys = _InstrResp_4_allKeys[_InstrResp_4_allKeys.length - 1].name;  // just the last key pressed
        InstrResp_4.rt = _InstrResp_4_allKeys[_InstrResp_4_allKeys.length - 1].rt;
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
    GNG_Instr_TrainComponents.forEach( function(thisComponent) {
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


function GNG_Instr_TrainRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'GNG_Instr_Train'-------
    GNG_Instr_TrainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "GNG_Instr_Train" was not non-slip safe, so reset the non-slip timer
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


var _trialResp_Train_allKeys;
var GNG_Trial_TrainComponents;
function GNG_Trial_TrainRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'GNG_Trial_Train'-------
    t = 0;
    GNG_Trial_TrainClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    trialBlue_Train.setOpacity(blueOpacity);
    trialOrange_Train.setOpacity(orangeOpacity);
    trialResp_Train.keys = undefined;
    trialResp_Train.rt = undefined;
    _trialResp_Train_allKeys = [];
    // keep track of which components have finished
    GNG_Trial_TrainComponents = [];
    GNG_Trial_TrainComponents.push(fix_trial_Train);
    GNG_Trial_TrainComponents.push(trialBlue_Train);
    GNG_Trial_TrainComponents.push(trialOrange_Train);
    GNG_Trial_TrainComponents.push(trialResp_Train);
    
    GNG_Trial_TrainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function GNG_Trial_TrainRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'GNG_Trial_Train'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = GNG_Trial_TrainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_trial_Train* updates
    if (t >= 0.0 && fix_trial_Train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_trial_Train.tStart = t;  // (not accounting for frame time here)
      fix_trial_Train.frameNStart = frameN;  // exact frame index
      
      fix_trial_Train.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_trial_Train.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_trial_Train.setAutoDraw(false);
    }
    
    // *trialBlue_Train* updates
    if (t >= 0.0 && trialBlue_Train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialBlue_Train.tStart = t;  // (not accounting for frame time here)
      trialBlue_Train.frameNStart = frameN;  // exact frame index
      
      trialBlue_Train.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialBlue_Train.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialBlue_Train.setAutoDraw(false);
    }
    
    // *trialOrange_Train* updates
    if (t >= 0.0 && trialOrange_Train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialOrange_Train.tStart = t;  // (not accounting for frame time here)
      trialOrange_Train.frameNStart = frameN;  // exact frame index
      
      trialOrange_Train.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialOrange_Train.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialOrange_Train.setAutoDraw(false);
    }
    
    // *trialResp_Train* updates
    if (t >= 0.0 && trialResp_Train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialResp_Train.tStart = t;  // (not accounting for frame time here)
      trialResp_Train.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trialResp_Train.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trialResp_Train.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trialResp_Train.clearEvents(); });
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialResp_Train.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialResp_Train.status = PsychoJS.Status.FINISHED;
  }

    if (trialResp_Train.status === PsychoJS.Status.STARTED) {
      let theseKeys = trialResp_Train.getKeys({keyList: ['space'], waitRelease: false});
      _trialResp_Train_allKeys = _trialResp_Train_allKeys.concat(theseKeys);
      if (_trialResp_Train_allKeys.length > 0) {
        trialResp_Train.keys = _trialResp_Train_allKeys[0].name;  // just the first key pressed
        trialResp_Train.rt = _trialResp_Train_allKeys[0].rt;
        // was this correct?
        if (trialResp_Train.keys == corrAns) {
            trialResp_Train.corr = 1;
        } else {
            trialResp_Train.corr = 0;
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
    GNG_Trial_TrainComponents.forEach( function(thisComponent) {
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


function GNG_Trial_TrainRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'GNG_Trial_Train'-------
    GNG_Trial_TrainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (trialResp_Train.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         trialResp_Train.corr = 1;  // correct non-response
      } else {
         trialResp_Train.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trialResp_Train.keys', trialResp_Train.keys);
    psychoJS.experiment.addData('trialResp_Train.corr', trialResp_Train.corr);
    if (typeof trialResp_Train.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trialResp_Train.rt', trialResp_Train.rt);
        }
    
    trialResp_Train.stop();
    return Scheduler.Event.NEXT;
  };
}


var feedback_color;
var feedback_word;
var GNG_FeedbackComponents;
function GNG_FeedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'GNG_Feedback'-------
    t = 0;
    GNG_FeedbackClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    if (trialResp_Train.corr) {
        feedback_color = feedback_color_list[0];
        feedback_word = feedback_word_list[0];
    } else {
        feedback_color = feedback_color_list[1];
        feedback_word = feedback_word_list[1];
    }
    
    text_feedback.setColor(new util.Color(feedback_color));
    text_feedback.setText(feedback_word);
    // keep track of which components have finished
    GNG_FeedbackComponents = [];
    GNG_FeedbackComponents.push(text_feedback);
    GNG_FeedbackComponents.push(fix_3);
    
    GNG_FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function GNG_FeedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'GNG_Feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = GNG_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_feedback* updates
    if (t >= 0 && text_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_feedback.tStart = t;  // (not accounting for frame time here)
      text_feedback.frameNStart = frameN;  // exact frame index
      
      text_feedback.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_feedback.setAutoDraw(false);
    }
    
    // *fix_3* updates
    if (t >= 0.5 && fix_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_3.tStart = t;  // (not accounting for frame time here)
      fix_3.frameNStart = frameN;  // exact frame index
      
      fix_3.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_3.setAutoDraw(false);
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
    GNG_FeedbackComponents.forEach( function(thisComponent) {
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


function GNG_FeedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'GNG_Feedback'-------
    GNG_FeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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


var _trialResp_allKeys;
var GNG_trialComponents;
function GNG_trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'GNG_trial'-------
    t = 0;
    GNG_trialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.600000);
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

    frameRemains = 0.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

    frameRemains = 0.0 + 0.15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

    frameRemains = 0.0 + 0.15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

    frameRemains = 0.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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


var sliderClick;
var markerSize;
var col;
var englishq_sliderComponents;
function englishq_sliderRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'englishq_slider'-------
    t = 0;
    englishq_sliderClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    text_6.setText(qproficiency);
    slider_2.reset()
    if ((engprof_trials.thisTrial <= 2)) {
        continueRoutine = true;
    } else {
        continueRoutine = false;
    }
    
    sliderClick = 0;
    
    slider_2.size[1] = slider_2.size[1] / 2;
    slider_2._applyStyle();
    markerSize = util.to_px(slider.size, 'height', psychoJS.window)[1];
    slider_2.labels=['0','1','2','3','4','5','6','7','8','9','10'];
    slider_2.labelHeight=.01;
    col = new util.Color('white')
    // keep track of which components have finished
    englishq_sliderComponents = [];
    englishq_sliderComponents.push(text_6);
    englishq_sliderComponents.push(slider_2);
    
    englishq_sliderComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function englishq_sliderRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'englishq_slider'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = englishq_sliderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *slider_2* updates
    if (t >= 0.0 && slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_2.tStart = t;  // (not accounting for frame time here)
      slider_2.frameNStart = frameN;  // exact frame index
      
      slider_2.setAutoDraw(true);
    }

    if ((showSlider === undefined)) {
        continueRoutine = false;
    } else {
        if (((slider_2.getRating() !== undefined) && (sliderClick === 0))) {
            sliderClick = t;
        } else {
            if ((sliderClick === 0)) {
            } else {
                if ((t > (sliderClick + 1))) {
                    continueRoutine = false;
                }
            }
        }
    }
    
    try {
        if (slider_2._markerColor.int !== col.int) {
            slider_2._markerColor = col;
            slider_2._marker.lineStyle(1, col.int, 1, 0.5);
            slider_2._marker.beginFill(col.int, 1);
            slider_2._marker.moveTo(0, 0);
            slider_2._marker.lineTo(markerSize, -markerSize);
            slider_2._marker.lineTo(-markerSize, -markerSize);
            slider_2._marker.endFill();
            slider_2._needUpdate = true;
            slider_2._updateIfNeeded();
    
         }
    } catch (err) {}
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    englishq_sliderComponents.forEach( function(thisComponent) {
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


function englishq_sliderRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'englishq_slider'-------
    englishq_sliderComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_2.response', slider_2.getRating());
    psychoJS.experiment.addData('slider_2.rt', slider_2.getRT());
    // the Routine "englishq_slider" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var PerfoE;
var _InstrResp_3_allKeys;
var IUS12_InstrComponents;
function IUS12_InstrRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'IUS12_Instr'-------
    t = 0;
    IUS12_InstrClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    PerfoE = 0;
    InstrResp_3.keys = undefined;
    InstrResp_3.rt = undefined;
    _InstrResp_3_allKeys = [];
    // keep track of which components have finished
    IUS12_InstrComponents = [];
    IUS12_InstrComponents.push(text);
    IUS12_InstrComponents.push(InstrResp_3);
    
    IUS12_InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var dat;
var corr;
var rts;
var msgE;
function IUS12_InstrRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'IUS12_Instr'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = IUS12_InstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Get JS array of trial objects (i.e., a list of python dicts with response data)
    dat = psychoJS.experiment._trialsData
    
    // Filter data to get correct trials
    corr = dat.filter((trial) => trial['engprof_trials.ran'] === 1)
    
    // Get responses only as an array
    rts = corr.map((trial) => trial['slider_2.response'])
    
    // Reduce RTs to a single number : the mean
    PerfoE = rts.reduce((a, b) => a + b) / rts.length
    
    
    // Get all correct
    //nCorr = 0;
    //var eachResp;
    //for (eachResp=0; eachResp<psychoJS.experiment._trialsData.length; eachResp++) 
    //{
    //  nCorr += psychoJS.experiment._trialsData[eachResp]['slider_2.response'];
    //}
    //PerfoE = 100 * nCorr / psychoJS.experiment._trialsData.length;
    
    msgE = "English Prof:" + PerfoE + ".";
    
    
    if (PerfoE < 5) {
        continueRoutine = false;
        }
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *InstrResp_3* updates
    if (t >= 0.0 && InstrResp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstrResp_3.tStart = t;  // (not accounting for frame time here)
      InstrResp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { InstrResp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { InstrResp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { InstrResp_3.clearEvents(); });
    }

    if (InstrResp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = InstrResp_3.getKeys({keyList: ['s'], waitRelease: false});
      _InstrResp_3_allKeys = _InstrResp_3_allKeys.concat(theseKeys);
      if (_InstrResp_3_allKeys.length > 0) {
        InstrResp_3.keys = _InstrResp_3_allKeys[_InstrResp_3_allKeys.length - 1].name;  // just the last key pressed
        InstrResp_3.rt = _InstrResp_3_allKeys[_InstrResp_3_allKeys.length - 1].rt;
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
    IUS12_InstrComponents.forEach( function(thisComponent) {
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


function IUS12_InstrRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'IUS12_Instr'-------
    IUS12_InstrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "IUS12_Instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial_sliderComponents;
function trial_sliderRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial_slider'-------
    t = 0;
    trial_sliderClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    PerfoE = 0;
    text_2.setText(qenglish);
    slider.reset()
    sliderClick = 0;
    
    slider.size[1] = slider.size[1] / 2;
    slider._applyStyle();
    markerSize = util.to_px(slider.size, 'height', psychoJS.window)[1];
    slider.labels=['Not at all\n characteristic\n of me','A little\n characteristic\n of me','Somewhat\ncharacteristic\n of me','Very\n characteristic\n of me','Entirely\n characteristic\nof me'];
    slider.labelHeight=.01;
    col = new util.Color('white')
    // keep track of which components have finished
    trial_sliderComponents = [];
    trial_sliderComponents.push(text_2);
    trial_sliderComponents.push(slider);
    
    trial_sliderComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function trial_sliderRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial_slider'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial_sliderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Get JS array of trial objects (i.e., a list of python dicts with response data)
    dat = psychoJS.experiment._trialsData
    
    // Filter data to get correct trials
    corr = dat.filter((trial) => trial['engprof_trials.ran'] === 1)
    
    // Get responses only as an array
    rts = corr.map((trial) => trial['slider_2.response'])
    
    // Reduce performance to a single number : the mean
    PerfoE = rts.reduce((a, b) => a + b) / rts.length
    
    if (PerfoE < 5) {
        continueRoutine = false;
        }
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    if ((showSlider === undefined)) {
        continueRoutine = false;
    } else {
        if (((slider.getRating() !== undefined) && (sliderClick === 0))) {
            sliderClick = t;
        } else {
            if ((sliderClick === 0)) {
            } else {
                if ((t > (sliderClick + 1))) {
                    continueRoutine = false;
                }
            }
        }
    }
    
    try {
        if (slider._markerColor.int !== col.int) {
            slider._markerColor = col;
            slider._marker.lineStyle(1, col.int, 1, 0.5);
            slider._marker.beginFill(col.int, 1);
            slider._marker.moveTo(0, 0);
            slider._marker.lineTo(markerSize, -markerSize);
            slider._marker.lineTo(-markerSize, -markerSize);
            slider._marker.endFill();
            slider._needUpdate = true;
            slider._updateIfNeeded();
    
         }
    } catch (err) {}
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_sliderComponents.forEach( function(thisComponent) {
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


function trial_sliderRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial_slider'-------
    trial_sliderComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // the Routine "trial_slider" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var debriefComponents;
function debriefRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'debrief'-------
    t = 0;
    debriefClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    debriefComponents = [];
    debriefComponents.push(debrief_slide_1);
    debriefComponents.push(key_resp_7);
    debriefComponents.push(text_10);
    
    debriefComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function debriefRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'debrief'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = debriefClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debrief_slide_1* updates
    if (t >= 0.0 && debrief_slide_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debrief_slide_1.tStart = t;  // (not accounting for frame time here)
      debrief_slide_1.frameNStart = frameN;  // exact frame index
      
      debrief_slide_1.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space', 's'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
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
    debriefComponents.forEach( function(thisComponent) {
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


function debriefRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'debrief'-------
    debriefComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "debrief" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var msg2;
var _key_resp_end_allKeys;
var thanks_2Components;
function thanks_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'thanks_2'-------
    t = 0;
    thanks_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    msg2 = "Thanks for participating. \n \
    To enter the draw to win an Amazon eVoucher of £20, please send an email to lpzmi@nottingham.ac.uk with subject 'draw2' and in the email cut and paste the following phrase \n\
    'I participated in the study on EFCD36'\n\n \
    Press x to finish the experiment";
    text_7.setText(msg2);
    key_resp_end.keys = undefined;
    key_resp_end.rt = undefined;
    _key_resp_end_allKeys = [];
    // keep track of which components have finished
    thanks_2Components = [];
    thanks_2Components.push(text_7);
    thanks_2Components.push(key_resp_end);
    
    thanks_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function thanks_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'thanks_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = thanks_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    msg2 = "Thanks for participating. \n \
    To enter the draw to win an Amazon eVoucher of £20, please send an email to lpzmi@nottingham.ac.uk with subject 'draw2' and in the email cut and paste the following phrase \n\
    'I participated in the study on EFCD36'\n\n \
    Press x to finish the experiment";
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    
    // *key_resp_end* updates
    if (t >= 0.0 && key_resp_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_end.tStart = t;  // (not accounting for frame time here)
      key_resp_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end.clearEvents(); });
    }

    if (key_resp_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_end.getKeys({keyList: ['x'], waitRelease: false});
      _key_resp_end_allKeys = _key_resp_end_allKeys.concat(theseKeys);
      if (_key_resp_end_allKeys.length > 0) {
        key_resp_end.keys = _key_resp_end_allKeys[_key_resp_end_allKeys.length - 1].name;  // just the last key pressed
        key_resp_end.rt = _key_resp_end_allKeys[_key_resp_end_allKeys.length - 1].rt;
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
    thanks_2Components.forEach( function(thisComponent) {
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


function thanks_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'thanks_2'-------
    thanks_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_end.keys', key_resp_end.keys);
    if (typeof key_resp_end.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_end.rt', key_resp_end.rt);
        routineTimer.reset();
        }
    
    key_resp_end.stop();
    // the Routine "thanks_2" was not non-slip safe, so reset the non-slip timer
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
