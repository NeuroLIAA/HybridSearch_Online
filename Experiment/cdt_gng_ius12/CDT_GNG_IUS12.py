#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.1.2),
    on Wed Jul 29 21:01:06 2020
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, microphone
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.1.2'
expName = 'CDT_GNG_IUS12'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/mji3/Dropbox/projects/hybrid_search_pavlovia/CDT_GNG_IUS12/CDT_GNG_IUS12.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')

# Enable sound input/output:
microphone.switchOn()
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "setup"
setupClock = core.Clock()
items = []
consent_question = visual.TextStim(win=win, name='consent_question',
    text='default text',
    font='Arial',
    units='norm', pos=(0, 0), height=0.1, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "embedded_form"
embedded_formClock = core.Clock()
iframe_loading_2 = visual.TextStim(win=win, name='iframe_loading_2',
    text='Loading...',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "random_seed"
random_seedClock = core.Clock()
import random
seedString = core.Clock()
random.seed(seedString)
randomnum1=random.random()
random.seed(seedString)
randomnum2=random.random()

kb = keyboard.Keyboard()

instructions = visual.TextStim(win=win, name='instructions',
    text=None,
    font='Arial',
    units='norm', pos=(0, 0), height=0.1, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "consent1"
consent1Clock = core.Clock()
consent_1 = visual.ImageStim(
    win=win,
    name='consent_1', units='height', 
    image='Slide1.png', mask=None,
    ori=0, pos=(0, 0), size=[1, 0.8533],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
key_resp_3 = keyboard.Keyboard()
text_3 = visual.TextStim(win=win, name='text_3',
    text='After reading, press Space to continue\n\n',
    font='Arial',
    units='height', pos=(0, -0.49), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "consent1_2"
consent1_2Clock = core.Clock()
consent = visual.ImageStim(
    win=win,
    name='consent', units='height', 
    image='Slide2.png', mask=None,
    ori=0, pos=(0, 0), size=[1, 0.8533],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
key_resp_4 = keyboard.Keyboard()
text_4 = visual.TextStim(win=win, name='text_4',
    text='After reading, press Space to continue\n\n',
    font='Arial',
    units='height', pos=(0, -0.49), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "consent1_3"
consent1_3Clock = core.Clock()
consent_2 = visual.ImageStim(
    win=win,
    name='consent_2', units='height', 
    image='Slide3.png', mask=None,
    ori=0, pos=(0, 0), size=[1, 0.8533],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
key_resp_6 = keyboard.Keyboard()
text_5 = visual.TextStim(win=win, name='text_5',
    text='I consent (Y) I do not consent (Esc)\n',
    font='Arial',
    units='height', pos=(0, -0.49), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "gender_q"
gender_qClock = core.Clock()
gender_question = visual.TextStim(win=win, name='gender_question',
    text='In order to allow us to describe our sample, we would now like you to answer some demographic questions.\n\nWhat is your gender?\n\nWoman (W)\nMan(M)\nNon-binary (N)\nDifferent identity (D)\nPrefer not to say (P)',
    font='Arial',
    units='norm', pos=(0, 0), height=0.1, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
Gender = keyboard.Keyboard()

# Initialize components for Routine "CDT_Instr_train"
CDT_Instr_trainClock = core.Clock()
instr_text_2 = visual.TextStim(win=win, name='instr_text_2',
    text='Welcome to the experiment. \nIn this experiment you will be remembering colors.\n\nEach trial will start with a fixation cross.\nDo your best to keep your eyes on it.\nThen, 4 or 8 squares with different colors will appear.\nRemember as many colors as you can.\nAfter a short delay, one square will reappear.\nIf it has the SAME color and location, press the "K" key.\nIf the color or location is DIFFERENT, press the "L" key.\nIf you are not sure, just take your best guess.\n\nPress \'S\' to start TRAINING.',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
space_to_start_2 = keyboard.Keyboard()

# Initialize components for Routine "CDT_Trial_train"
CDT_Trial_trainClock = core.Clock()
stim1_2 = visual.Rect(
    win=win, name='stim1_2',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=0.0, interpolate=True)
stim2_2 = visual.Rect(
    win=win, name='stim2_2',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=-1.0, interpolate=True)
stim3_2 = visual.Rect(
    win=win, name='stim3_2',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=-2.0, interpolate=True)
stim4_2 = visual.Rect(
    win=win, name='stim4_2',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=-3.0, interpolate=True)
stim5_2 = visual.Rect(
    win=win, name='stim5_2',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=-4.0, interpolate=True)
stim6_2 = visual.Rect(
    win=win, name='stim6_2',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=-5.0, interpolate=True)
stim7_2 = visual.Rect(
    win=win, name='stim7_2',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=-6.0, interpolate=True)
stim8_2 = visual.Rect(
    win=win, name='stim8_2',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=-7.0, interpolate=True)
target_2 = visual.Rect(
    win=win, name='target_2',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-8.0, interpolate=True)
fix_2 = visual.TextStim(win=win, name='fix_2',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "CDT_Instr"
CDT_InstrClock = core.Clock()
instr_text = visual.TextStim(win=win, name='instr_text',
    text='Welcome to the experiment. \nIn this experiment you will be remembering colors.\n\nEach trial will start with a fixation cross.\nDo your best to keep your eyes on it.\nThen, 4 or 8 squares with different colors will appear.\nRemember as many colors as you can.\nAfter a short delay, one square will reappear.\nIf it has the SAME color and location, press the "K" key.\nIf the color or location is DIFFERENT, press the "L" key.\nIf you are not sure, just take your best guess.\n\nIt will take less than 10 minutes.\n\nPress \'S\' to start the EXPERIMENT.',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
space_to_start = keyboard.Keyboard()

# Initialize components for Routine "CDT_Trial"
CDT_TrialClock = core.Clock()
stim1 = visual.Rect(
    win=win, name='stim1',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=0.0, interpolate=True)
stim2 = visual.Rect(
    win=win, name='stim2',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=-1.0, interpolate=True)
stim3 = visual.Rect(
    win=win, name='stim3',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=-2.0, interpolate=True)
stim4 = visual.Rect(
    win=win, name='stim4',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=-3.0, interpolate=True)
stim5 = visual.Rect(
    win=win, name='stim5',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=-4.0, interpolate=True)
stim6 = visual.Rect(
    win=win, name='stim6',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=-5.0, interpolate=True)
stim7 = visual.Rect(
    win=win, name='stim7',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=-6.0, interpolate=True)
stim8 = visual.Rect(
    win=win, name='stim8',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1.0, depth=-7.0, interpolate=True)
target = visual.Rect(
    win=win, name='target',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-8.0, interpolate=True)
fix = visual.TextStim(win=win, name='fix',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "GNG_Instr"
GNG_InstrClock = core.Clock()
Instructions = visual.TextStim(win=win, name='Instructions',
    text="Thanks for completing the first task, \n\nThe second part will be shorter (aprox. 3 minutes).\n\nPress 'Space' for blue, nothing for orange. \n\nGood Luck!!\n\n'S' to start.\n\n",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
InstrResp = keyboard.Keyboard()

# Initialize components for Routine "GNG_fix"
GNG_fixClock = core.Clock()
fix_ini = visual.TextStim(win=win, name='fix_ini',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "GNG_trial"
GNG_trialClock = core.Clock()
fix_trial = visual.TextStim(win=win, name='fix_trial',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
trialBlue = visual.Polygon(
    win=win, name='trialBlue',
    edges=180, size=(0.15, 0.15),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1.000,-1.000,1.000], lineColorSpace='rgb',
    fillColor=[-1.000,-1.000,1.000], fillColorSpace='rgb',
    opacity=1.0, depth=-1.0, interpolate=True)
trialOrange = visual.Polygon(
    win=win, name='trialOrange',
    edges=180, size=(0.15, 0.15),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1.000,0.004,-1.000], lineColorSpace='rgb',
    fillColor=[1.000,0.004,-1.000], fillColorSpace='rgb',
    opacity=1.0, depth=-2.0, interpolate=True)
trialResp = keyboard.Keyboard()

# Initialize components for Routine "GNG_Instr_2"
GNG_Instr_2Clock = core.Clock()
Instructions_2 = visual.TextStim(win=win, name='Instructions_2',
    text="Rest and press 'S' to start. Remember , 'space' for blue, nothing for orange",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
InstrResp_2 = keyboard.Keyboard()

# Initialize components for Routine "GNG_fix"
GNG_fixClock = core.Clock()
fix_ini = visual.TextStim(win=win, name='fix_ini',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "GNG_trial"
GNG_trialClock = core.Clock()
fix_trial = visual.TextStim(win=win, name='fix_trial',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
trialBlue = visual.Polygon(
    win=win, name='trialBlue',
    edges=180, size=(0.15, 0.15),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1.000,-1.000,1.000], lineColorSpace='rgb',
    fillColor=[-1.000,-1.000,1.000], fillColorSpace='rgb',
    opacity=1.0, depth=-1.0, interpolate=True)
trialOrange = visual.Polygon(
    win=win, name='trialOrange',
    edges=180, size=(0.15, 0.15),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1.000,0.004,-1.000], lineColorSpace='rgb',
    fillColor=[1.000,0.004,-1.000], fillColorSpace='rgb',
    opacity=1.0, depth=-2.0, interpolate=True)
trialResp = keyboard.Keyboard()

# Initialize components for Routine "GNG_Instr_2"
GNG_Instr_2Clock = core.Clock()
Instructions_2 = visual.TextStim(win=win, name='Instructions_2',
    text="Rest and press 'S' to start. Remember , 'space' for blue, nothing for orange",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
InstrResp_2 = keyboard.Keyboard()

# Initialize components for Routine "GNG_fix"
GNG_fixClock = core.Clock()
fix_ini = visual.TextStim(win=win, name='fix_ini',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "GNG_trial"
GNG_trialClock = core.Clock()
fix_trial = visual.TextStim(win=win, name='fix_trial',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
trialBlue = visual.Polygon(
    win=win, name='trialBlue',
    edges=180, size=(0.15, 0.15),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1.000,-1.000,1.000], lineColorSpace='rgb',
    fillColor=[-1.000,-1.000,1.000], fillColorSpace='rgb',
    opacity=1.0, depth=-1.0, interpolate=True)
trialOrange = visual.Polygon(
    win=win, name='trialOrange',
    edges=180, size=(0.15, 0.15),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1.000,0.004,-1.000], lineColorSpace='rgb',
    fillColor=[1.000,0.004,-1.000], fillColorSpace='rgb',
    opacity=1.0, depth=-2.0, interpolate=True)
trialResp = keyboard.Keyboard()

# Initialize components for Routine "IUS12_Instr"
IUS12_InstrClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text="The following questions are about how you view uncertainties. \nThere are no right or wrong answers, just click on the statement that describes you.\n\nPlease read each statement and rate on a scale of 1 ('not at all characteristic of me') to 5 ('entirely characteristic of me') in relation to how much each describes your way of being.\n\n\nPress 's' to start",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
InstrResp_3 = keyboard.Keyboard()

# Initialize components for Routine "trial_slider"
trial_sliderClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
slider = visual.Slider(win=win, name='slider',
    size=(1.0, 0.05), pos=(0, -0.15), units='height',
    labels=('Not at all \n characteristic of me', 'A little characteristic of me', 'Somewhat characteristic of me', 'Very characteristic of me', 'Entirely characteristic of me'), ticks=(1, 2, 3, 4, 5),
    granularity=0, style=('rating', 'radio', 'labels45', 'whiteOnBlack'),
    color='LightGray', font='Arial',
    flip=False)

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "setup"-------
continueRoutine = True
# update component parameters for each repeat
kb.clock.reset()  # when you want to start the timer from

consent_question.setText("Welcome! Ready to start? Press the Y key.\n\nYour partipant ID is: "+expInfo['participant'])
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
# keep track of which components have finished
setupComponents = [consent_question, key_resp_5]
for thisComponent in setupComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
setupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "setup"-------
while continueRoutine:
    # get current time
    t = setupClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=setupClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    keys = event.getKeys(['y','quit'], waitRelease=True)
    if 'quit' in keys:
        core.quit()
    elif 'y' in keys:
        continueRoutine=False
        
    
    
    # *consent_question* updates
    if consent_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consent_question.frameNStart = frameN  # exact frame index
        consent_question.tStart = t  # local t and not account for scr refresh
        consent_question.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consent_question, 'tStartRefresh')  # time at next scr refresh
        consent_question.setAutoDraw(True)
    
    # *key_resp_5* updates
    waitOnFlip = False
    if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_5.frameNStart = frameN  # exact frame index
        key_resp_5.tStart = t  # local t and not account for scr refresh
        key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
        key_resp_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_5.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_5.getKeys(keyList=['y'], waitRelease=False)
        _key_resp_5_allKeys.extend(theseKeys)
        if len(_key_resp_5_allKeys):
            key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
            key_resp_5.rt = _key_resp_5_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in setupComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "setup"-------
for thisComponent in setupComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_5.keys in ['', [], None]:  # No response was made
    key_resp_5.keys = None
thisExp.addData('key_resp_5.keys',key_resp_5.keys)
if key_resp_5.keys != None:  # we had a response
    thisExp.addData('key_resp_5.rt', key_resp_5.rt)
thisExp.nextEntry()
# the Routine "setup" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "embedded_form"-------
continueRoutine = True
routineTimer.add(1.000000)
# update component parameters for each repeat
# keep track of which components have finished
embedded_formComponents = [iframe_loading_2]
for thisComponent in embedded_formComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
embedded_formClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "embedded_form"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = embedded_formClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=embedded_formClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *iframe_loading_2* updates
    if iframe_loading_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        iframe_loading_2.frameNStart = frameN  # exact frame index
        iframe_loading_2.tStart = t  # local t and not account for scr refresh
        iframe_loading_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(iframe_loading_2, 'tStartRefresh')  # time at next scr refresh
        iframe_loading_2.setAutoDraw(True)
    if iframe_loading_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > iframe_loading_2.tStartRefresh + 1-frameTolerance:
            # keep track of stop time/frame for later
            iframe_loading_2.tStop = t  # not accounting for scr refresh
            iframe_loading_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(iframe_loading_2, 'tStopRefresh')  # time at next scr refresh
            iframe_loading_2.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in embedded_formComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "embedded_form"-------
for thisComponent in embedded_formComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('iframe_loading_2.started', iframe_loading_2.tStartRefresh)
thisExp.addData('iframe_loading_2.stopped', iframe_loading_2.tStopRefresh)

# ------Prepare to start Routine "random_seed"-------
continueRoutine = True
# update component parameters for each repeat
msg="Testing reseeding random numbers.\n\nrandomnum1: "+str(randomnum1) + "\n\nrandomnum2: "+str(randomnum2)
print(showAge)

instructions.setText('')
# keep track of which components have finished
random_seedComponents = [instructions]
for thisComponent in random_seedComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
random_seedClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "random_seed"-------
while continueRoutine:
    # get current time
    t = random_seedClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=random_seedClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    keys = event.getKeys(['space','quit'], waitRelease=True)
    if 'quit' in keys:
        core.quit()
    elif 'space' in keys or showSeed != 1:
        continueRoutine=False
        
    
    
    # *instructions* updates
    if instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructions.frameNStart = frameN  # exact frame index
        instructions.tStart = t  # local t and not account for scr refresh
        instructions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructions, 'tStartRefresh')  # time at next scr refresh
        instructions.setAutoDraw(True)
    if instructions.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > instructions.tStartRefresh + 0-frameTolerance:
            # keep track of stop time/frame for later
            instructions.tStop = t  # not accounting for scr refresh
            instructions.frameNStop = frameN  # exact frame index
            win.timeOnFlip(instructions, 'tStopRefresh')  # time at next scr refresh
            instructions.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in random_seedComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "random_seed"-------
for thisComponent in random_seedComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "random_seed" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "consent1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
consent1Components = [consent_1, key_resp_3, text_3]
for thisComponent in consent1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
consent1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "consent1"-------
while continueRoutine:
    # get current time
    t = consent1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=consent1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *consent_1* updates
    if consent_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consent_1.frameNStart = frameN  # exact frame index
        consent_1.tStart = t  # local t and not account for scr refresh
        consent_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consent_1, 'tStartRefresh')  # time at next scr refresh
        consent_1.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        text_3.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "consent1"-------
for thisComponent in consent1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('consent_1.started', consent_1.tStartRefresh)
thisExp.addData('consent_1.stopped', consent_1.tStopRefresh)
thisExp.addData('text_3.started', text_3.tStartRefresh)
thisExp.addData('text_3.stopped', text_3.tStopRefresh)
# the Routine "consent1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "consent1_2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
# keep track of which components have finished
consent1_2Components = [consent, key_resp_4, text_4]
for thisComponent in consent1_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
consent1_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "consent1_2"-------
while continueRoutine:
    # get current time
    t = consent1_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=consent1_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *consent* updates
    if consent.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consent.frameNStart = frameN  # exact frame index
        consent.tStart = t  # local t and not account for scr refresh
        consent.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consent, 'tStartRefresh')  # time at next scr refresh
        consent.setAutoDraw(True)
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_4.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_4.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_4_allKeys.extend(theseKeys)
        if len(_key_resp_4_allKeys):
            key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
            key_resp_4.rt = _key_resp_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_4* updates
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        text_4.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent1_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "consent1_2"-------
for thisComponent in consent1_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('consent.started', consent.tStartRefresh)
thisExp.addData('consent.stopped', consent.tStopRefresh)
thisExp.addData('text_4.started', text_4.tStartRefresh)
thisExp.addData('text_4.stopped', text_4.tStopRefresh)
# the Routine "consent1_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "consent1_3"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_6.keys = []
key_resp_6.rt = []
_key_resp_6_allKeys = []
# keep track of which components have finished
consent1_3Components = [consent_2, key_resp_6, text_5]
for thisComponent in consent1_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
consent1_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "consent1_3"-------
while continueRoutine:
    # get current time
    t = consent1_3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=consent1_3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *consent_2* updates
    if consent_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consent_2.frameNStart = frameN  # exact frame index
        consent_2.tStart = t  # local t and not account for scr refresh
        consent_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consent_2, 'tStartRefresh')  # time at next scr refresh
        consent_2.setAutoDraw(True)
    
    # *key_resp_6* updates
    waitOnFlip = False
    if key_resp_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_6.frameNStart = frameN  # exact frame index
        key_resp_6.tStart = t  # local t and not account for scr refresh
        key_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_6, 'tStartRefresh')  # time at next scr refresh
        key_resp_6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_6.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_6.getKeys(keyList=['y'], waitRelease=False)
        _key_resp_6_allKeys.extend(theseKeys)
        if len(_key_resp_6_allKeys):
            key_resp_6.keys = _key_resp_6_allKeys[-1].name  # just the last key pressed
            key_resp_6.rt = _key_resp_6_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_5* updates
    if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_5.frameNStart = frameN  # exact frame index
        text_5.tStart = t  # local t and not account for scr refresh
        text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
        text_5.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent1_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "consent1_3"-------
for thisComponent in consent1_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('consent_2.started', consent_2.tStartRefresh)
thisExp.addData('consent_2.stopped', consent_2.tStopRefresh)
# check responses
if key_resp_6.keys in ['', [], None]:  # No response was made
    key_resp_6.keys = None
thisExp.addData('key_resp_6.keys',key_resp_6.keys)
if key_resp_6.keys != None:  # we had a response
    thisExp.addData('key_resp_6.rt', key_resp_6.rt)
thisExp.addData('key_resp_6.started', key_resp_6.tStartRefresh)
thisExp.addData('key_resp_6.stopped', key_resp_6.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('text_5.started', text_5.tStartRefresh)
thisExp.addData('text_5.stopped', text_5.tStopRefresh)
# the Routine "consent1_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "gender_q"-------
continueRoutine = True
# update component parameters for each repeat
Gender.keys = []
Gender.rt = []
_Gender_allKeys = []
# keep track of which components have finished
gender_qComponents = [gender_question, Gender]
for thisComponent in gender_qComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
gender_qClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "gender_q"-------
while continueRoutine:
    # get current time
    t = gender_qClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=gender_qClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *gender_question* updates
    if gender_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        gender_question.frameNStart = frameN  # exact frame index
        gender_question.tStart = t  # local t and not account for scr refresh
        gender_question.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(gender_question, 'tStartRefresh')  # time at next scr refresh
        gender_question.setAutoDraw(True)
    
    # *Gender* updates
    waitOnFlip = False
    if Gender.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Gender.frameNStart = frameN  # exact frame index
        Gender.tStart = t  # local t and not account for scr refresh
        Gender.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Gender, 'tStartRefresh')  # time at next scr refresh
        Gender.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Gender.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Gender.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Gender.status == STARTED and not waitOnFlip:
        theseKeys = Gender.getKeys(keyList=['w', 'm', 'n', 'd', 'p'], waitRelease=False)
        _Gender_allKeys.extend(theseKeys)
        if len(_Gender_allKeys):
            Gender.keys = _Gender_allKeys[-1].name  # just the last key pressed
            Gender.rt = _Gender_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in gender_qComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "gender_q"-------
for thisComponent in gender_qComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if Gender.keys in ['', [], None]:  # No response was made
    Gender.keys = None
thisExp.addData('Gender.keys',Gender.keys)
if Gender.keys != None:  # we had a response
    thisExp.addData('Gender.rt', Gender.rt)
thisExp.nextEntry()
# the Routine "gender_q" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "CDT_Instr_train"-------
continueRoutine = True
# update component parameters for each repeat
space_to_start_2.keys = []
space_to_start_2.rt = []
_space_to_start_2_allKeys = []
# keep track of which components have finished
CDT_Instr_trainComponents = [instr_text_2, space_to_start_2]
for thisComponent in CDT_Instr_trainComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
CDT_Instr_trainClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "CDT_Instr_train"-------
while continueRoutine:
    # get current time
    t = CDT_Instr_trainClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=CDT_Instr_trainClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instr_text_2* updates
    if instr_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_text_2.frameNStart = frameN  # exact frame index
        instr_text_2.tStart = t  # local t and not account for scr refresh
        instr_text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_text_2, 'tStartRefresh')  # time at next scr refresh
        instr_text_2.setAutoDraw(True)
    
    # *space_to_start_2* updates
    waitOnFlip = False
    if space_to_start_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        space_to_start_2.frameNStart = frameN  # exact frame index
        space_to_start_2.tStart = t  # local t and not account for scr refresh
        space_to_start_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_to_start_2, 'tStartRefresh')  # time at next scr refresh
        space_to_start_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(space_to_start_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(space_to_start_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if space_to_start_2.status == STARTED and not waitOnFlip:
        theseKeys = space_to_start_2.getKeys(keyList=['s'], waitRelease=False)
        _space_to_start_2_allKeys.extend(theseKeys)
        if len(_space_to_start_2_allKeys):
            space_to_start_2.keys = _space_to_start_2_allKeys[-1].name  # just the last key pressed
            space_to_start_2.rt = _space_to_start_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in CDT_Instr_trainComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "CDT_Instr_train"-------
for thisComponent in CDT_Instr_trainComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instr_text_2.started', instr_text_2.tStartRefresh)
thisExp.addData('instr_text_2.stopped', instr_text_2.tStopRefresh)
# the Routine "CDT_Instr_train" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
CDT_trials_train = data.TrialHandler(nReps=0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('html/resources/conditionsfileTrain_luria.xlsx'),
    seed=None, name='CDT_trials_train')
thisExp.addLoop(CDT_trials_train)  # add the loop to the experiment
thisCDT_trials_train = CDT_trials_train.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisCDT_trials_train.rgb)
if thisCDT_trials_train != None:
    for paramName in thisCDT_trials_train:
        exec('{} = thisCDT_trials_train[paramName]'.format(paramName))

for thisCDT_trials_train in CDT_trials_train:
    currentLoop = CDT_trials_train
    # abbreviate parameter names if possible (e.g. rgb = thisCDT_trials_train.rgb)
    if thisCDT_trials_train != None:
        for paramName in thisCDT_trials_train:
            exec('{} = thisCDT_trials_train[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "CDT_Trial_train"-------
    continueRoutine = True
    # update component parameters for each repeat
    stim1_2.setOpacity(stim1opa)
    stim1_2.setPos([stim1posx,stim1posy])
    stim1_2.setSize([stimsizex,stimsizey])
    stim1_2.setFillColor(stim1col)
    stim1_2.setLineColor(stim1col)
    stim2_2.setOpacity(stim2opa)
    stim2_2.setPos([stim2posx,stim2posy])
    stim2_2.setSize([stimsizex,stimsizey])
    stim2_2.setFillColor(stim2col)
    stim2_2.setLineColor(stim2col)
    stim3_2.setOpacity(stim3opa)
    stim3_2.setPos([stim3posx,stim3posy])
    stim3_2.setSize([stimsizex,stimsizey])
    stim3_2.setFillColor(stim3col)
    stim3_2.setLineColor(stim3col)
    stim4_2.setOpacity(stim4opa)
    stim4_2.setPos([stim4posx,stim4posy])
    stim4_2.setSize([stimsizex,stimsizey])
    stim4_2.setFillColor(stim4col)
    stim4_2.setLineColor(stim4col)
    stim5_2.setOpacity(stim5opa)
    stim5_2.setPos([stim5posx,stim5posy])
    stim5_2.setSize([stimsizex,stimsizey])
    stim5_2.setFillColor(stim5col)
    stim5_2.setLineColor(stim5col)
    stim6_2.setOpacity(stim6opa)
    stim6_2.setPos([stim6posx,stim6posy])
    stim6_2.setSize([stimsizex,stimsizey])
    stim6_2.setFillColor(stim6col)
    stim6_2.setLineColor(stim6col)
    stim7_2.setOpacity(stim7opa)
    stim7_2.setPos([stim7posx,stim7posy])
    stim7_2.setSize([stimsizex,stimsizey])
    stim7_2.setFillColor(stim7col)
    stim7_2.setLineColor(stim7col)
    stim8_2.setOpacity(stim8opa)
    stim8_2.setPos([stim7posx,stim7posy])
    stim8_2.setSize([stimsizex,stimsizey])
    stim8_2.setFillColor(stim8col)
    stim8_2.setLineColor(stim8col)
    target_2.setPos([targetposx,targetposy])
    target_2.setSize([stimsizex,stimsizey])
    target_2.setFillColor(targetcol)
    target_2.setLineColor(targetcol)
    fix_2.setText('+')
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    CDT_Trial_trainComponents = [stim1_2, stim2_2, stim3_2, stim4_2, stim5_2, stim6_2, stim7_2, stim8_2, target_2, fix_2, key_resp_2]
    for thisComponent in CDT_Trial_trainComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    CDT_Trial_trainClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "CDT_Trial_train"-------
    while continueRoutine:
        # get current time
        t = CDT_Trial_trainClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=CDT_Trial_trainClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *stim1_2* updates
        if stim1_2.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            stim1_2.frameNStart = frameN  # exact frame index
            stim1_2.tStart = t  # local t and not account for scr refresh
            stim1_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim1_2, 'tStartRefresh')  # time at next scr refresh
            stim1_2.setAutoDraw(True)
        if stim1_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim1_2.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim1_2.tStop = t  # not accounting for scr refresh
                stim1_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim1_2, 'tStopRefresh')  # time at next scr refresh
                stim1_2.setAutoDraw(False)
        
        # *stim2_2* updates
        if stim2_2.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            stim2_2.frameNStart = frameN  # exact frame index
            stim2_2.tStart = t  # local t and not account for scr refresh
            stim2_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim2_2, 'tStartRefresh')  # time at next scr refresh
            stim2_2.setAutoDraw(True)
        if stim2_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim2_2.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim2_2.tStop = t  # not accounting for scr refresh
                stim2_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim2_2, 'tStopRefresh')  # time at next scr refresh
                stim2_2.setAutoDraw(False)
        
        # *stim3_2* updates
        if stim3_2.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            stim3_2.frameNStart = frameN  # exact frame index
            stim3_2.tStart = t  # local t and not account for scr refresh
            stim3_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim3_2, 'tStartRefresh')  # time at next scr refresh
            stim3_2.setAutoDraw(True)
        if stim3_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim3_2.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim3_2.tStop = t  # not accounting for scr refresh
                stim3_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim3_2, 'tStopRefresh')  # time at next scr refresh
                stim3_2.setAutoDraw(False)
        
        # *stim4_2* updates
        if stim4_2.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            stim4_2.frameNStart = frameN  # exact frame index
            stim4_2.tStart = t  # local t and not account for scr refresh
            stim4_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim4_2, 'tStartRefresh')  # time at next scr refresh
            stim4_2.setAutoDraw(True)
        if stim4_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim4_2.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim4_2.tStop = t  # not accounting for scr refresh
                stim4_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim4_2, 'tStopRefresh')  # time at next scr refresh
                stim4_2.setAutoDraw(False)
        
        # *stim5_2* updates
        if stim5_2.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            stim5_2.frameNStart = frameN  # exact frame index
            stim5_2.tStart = t  # local t and not account for scr refresh
            stim5_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim5_2, 'tStartRefresh')  # time at next scr refresh
            stim5_2.setAutoDraw(True)
        if stim5_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim5_2.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim5_2.tStop = t  # not accounting for scr refresh
                stim5_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim5_2, 'tStopRefresh')  # time at next scr refresh
                stim5_2.setAutoDraw(False)
        
        # *stim6_2* updates
        if stim6_2.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            stim6_2.frameNStart = frameN  # exact frame index
            stim6_2.tStart = t  # local t and not account for scr refresh
            stim6_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim6_2, 'tStartRefresh')  # time at next scr refresh
            stim6_2.setAutoDraw(True)
        if stim6_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim6_2.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim6_2.tStop = t  # not accounting for scr refresh
                stim6_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim6_2, 'tStopRefresh')  # time at next scr refresh
                stim6_2.setAutoDraw(False)
        
        # *stim7_2* updates
        if stim7_2.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            stim7_2.frameNStart = frameN  # exact frame index
            stim7_2.tStart = t  # local t and not account for scr refresh
            stim7_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim7_2, 'tStartRefresh')  # time at next scr refresh
            stim7_2.setAutoDraw(True)
        if stim7_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim7_2.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim7_2.tStop = t  # not accounting for scr refresh
                stim7_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim7_2, 'tStopRefresh')  # time at next scr refresh
                stim7_2.setAutoDraw(False)
        
        # *stim8_2* updates
        if stim8_2.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            stim8_2.frameNStart = frameN  # exact frame index
            stim8_2.tStart = t  # local t and not account for scr refresh
            stim8_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim8_2, 'tStartRefresh')  # time at next scr refresh
            stim8_2.setAutoDraw(True)
        if stim8_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim8_2.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim8_2.tStop = t  # not accounting for scr refresh
                stim8_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim8_2, 'tStopRefresh')  # time at next scr refresh
                stim8_2.setAutoDraw(False)
        
        # *target_2* updates
        if target_2.status == NOT_STARTED and tThisFlip >= 2.05-frameTolerance:
            # keep track of start time/frame for later
            target_2.frameNStart = frameN  # exact frame index
            target_2.tStart = t  # local t and not account for scr refresh
            target_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(target_2, 'tStartRefresh')  # time at next scr refresh
            target_2.setAutoDraw(True)
        
        # *fix_2* updates
        if fix_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fix_2.frameNStart = frameN  # exact frame index
            fix_2.tStart = t  # local t and not account for scr refresh
            fix_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fix_2, 'tStartRefresh')  # time at next scr refresh
            fix_2.setAutoDraw(True)
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 2.05-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['k', 'l'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[0].name  # just the first key pressed
                key_resp_2.rt = _key_resp_2_allKeys[0].rt
                # was this correct?
                if (key_resp_2.keys == str(corrAns)) or (key_resp_2.keys == corrAns):
                    key_resp_2.corr = 1
                else:
                    key_resp_2.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in CDT_Trial_trainComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "CDT_Trial_train"-------
    for thisComponent in CDT_Trial_trainComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
        # was no response the correct answer?!
        if str(corrAns).lower() == 'none':
           key_resp_2.corr = 1;  # correct non-response
        else:
           key_resp_2.corr = 0;  # failed to respond (incorrectly)
    # store data for CDT_trials_train (TrialHandler)
    CDT_trials_train.addData('key_resp_2.keys',key_resp_2.keys)
    CDT_trials_train.addData('key_resp_2.corr', key_resp_2.corr)
    if key_resp_2.keys != None:  # we had a response
        CDT_trials_train.addData('key_resp_2.rt', key_resp_2.rt)
    # the Routine "CDT_Trial_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 0 repeats of 'CDT_trials_train'

# get names of stimulus parameters
if CDT_trials_train.trialList in ([], [None], None):
    params = []
else:
    params = CDT_trials_train.trialList[0].keys()
# save data for this loop
CDT_trials_train.saveAsText(filename + 'CDT_trials_train.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "CDT_Instr"-------
continueRoutine = True
# update component parameters for each repeat
space_to_start.keys = []
space_to_start.rt = []
_space_to_start_allKeys = []
# keep track of which components have finished
CDT_InstrComponents = [instr_text, space_to_start]
for thisComponent in CDT_InstrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
CDT_InstrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "CDT_Instr"-------
while continueRoutine:
    # get current time
    t = CDT_InstrClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=CDT_InstrClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instr_text* updates
    if instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_text.frameNStart = frameN  # exact frame index
        instr_text.tStart = t  # local t and not account for scr refresh
        instr_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_text, 'tStartRefresh')  # time at next scr refresh
        instr_text.setAutoDraw(True)
    
    # *space_to_start* updates
    waitOnFlip = False
    if space_to_start.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        space_to_start.frameNStart = frameN  # exact frame index
        space_to_start.tStart = t  # local t and not account for scr refresh
        space_to_start.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_to_start, 'tStartRefresh')  # time at next scr refresh
        space_to_start.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(space_to_start.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(space_to_start.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if space_to_start.status == STARTED and not waitOnFlip:
        theseKeys = space_to_start.getKeys(keyList=['s'], waitRelease=False)
        _space_to_start_allKeys.extend(theseKeys)
        if len(_space_to_start_allKeys):
            space_to_start.keys = _space_to_start_allKeys[-1].name  # just the last key pressed
            space_to_start.rt = _space_to_start_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in CDT_InstrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "CDT_Instr"-------
for thisComponent in CDT_InstrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instr_text.started', instr_text.tStartRefresh)
thisExp.addData('instr_text.stopped', instr_text.tStopRefresh)
# the Routine "CDT_Instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
CDT_trials = data.TrialHandler(nReps=0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('html/resources/conditionsfileJK_luria.xlsx'),
    seed=None, name='CDT_trials')
thisExp.addLoop(CDT_trials)  # add the loop to the experiment
thisCDT_trial = CDT_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisCDT_trial.rgb)
if thisCDT_trial != None:
    for paramName in thisCDT_trial:
        exec('{} = thisCDT_trial[paramName]'.format(paramName))

for thisCDT_trial in CDT_trials:
    currentLoop = CDT_trials
    # abbreviate parameter names if possible (e.g. rgb = thisCDT_trial.rgb)
    if thisCDT_trial != None:
        for paramName in thisCDT_trial:
            exec('{} = thisCDT_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "CDT_Trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    stim1.setOpacity(stim1opa)
    stim1.setPos([stim1posx,stim1posy])
    stim1.setSize([stimsizex,stimsizey])
    stim1.setFillColor(stim1col)
    stim1.setLineColor(stim1col)
    stim2.setOpacity(stim2opa)
    stim2.setPos([stim2posx,stim2posy])
    stim2.setSize([stimsizex,stimsizey])
    stim2.setFillColor(stim2col)
    stim2.setLineColor(stim2col)
    stim3.setOpacity(stim3opa)
    stim3.setPos([stim3posx,stim3posy])
    stim3.setSize([stimsizex,stimsizey])
    stim3.setFillColor(stim3col)
    stim3.setLineColor(stim3col)
    stim4.setOpacity(stim4opa)
    stim4.setPos([stim4posx,stim4posy])
    stim4.setSize([stimsizex,stimsizey])
    stim4.setFillColor(stim4col)
    stim4.setLineColor(stim4col)
    stim5.setOpacity(stim5opa)
    stim5.setPos([stim5posx,stim5posy])
    stim5.setSize([stimsizex,stimsizey])
    stim5.setFillColor(stim5col)
    stim5.setLineColor(stim5col)
    stim6.setOpacity(stim6opa)
    stim6.setPos([stim6posx,stim6posy])
    stim6.setSize([stimsizex,stimsizey])
    stim6.setFillColor(stim6col)
    stim6.setLineColor(stim6col)
    stim7.setOpacity(stim7opa)
    stim7.setPos([stim7posx,stim7posy])
    stim7.setSize([stimsizex,stimsizey])
    stim7.setFillColor(stim7col)
    stim7.setLineColor(stim7col)
    stim8.setOpacity(stim8opa)
    stim8.setPos([stim7posx,stim7posy])
    stim8.setSize([stimsizex,stimsizey])
    stim8.setFillColor(stim8col)
    stim8.setLineColor(stim8col)
    target.setPos([targetposx,targetposy])
    target.setSize([stimsizex,stimsizey])
    target.setFillColor(targetcol)
    target.setLineColor(targetcol)
    fix.setText('+')
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # keep track of which components have finished
    CDT_TrialComponents = [stim1, stim2, stim3, stim4, stim5, stim6, stim7, stim8, target, fix, key_resp]
    for thisComponent in CDT_TrialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    CDT_TrialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "CDT_Trial"-------
    while continueRoutine:
        # get current time
        t = CDT_TrialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=CDT_TrialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *stim1* updates
        if stim1.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            stim1.frameNStart = frameN  # exact frame index
            stim1.tStart = t  # local t and not account for scr refresh
            stim1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim1, 'tStartRefresh')  # time at next scr refresh
            stim1.setAutoDraw(True)
        if stim1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim1.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim1.tStop = t  # not accounting for scr refresh
                stim1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim1, 'tStopRefresh')  # time at next scr refresh
                stim1.setAutoDraw(False)
        
        # *stim2* updates
        if stim2.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            stim2.frameNStart = frameN  # exact frame index
            stim2.tStart = t  # local t and not account for scr refresh
            stim2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim2, 'tStartRefresh')  # time at next scr refresh
            stim2.setAutoDraw(True)
        if stim2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim2.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim2.tStop = t  # not accounting for scr refresh
                stim2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim2, 'tStopRefresh')  # time at next scr refresh
                stim2.setAutoDraw(False)
        
        # *stim3* updates
        if stim3.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            stim3.frameNStart = frameN  # exact frame index
            stim3.tStart = t  # local t and not account for scr refresh
            stim3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim3, 'tStartRefresh')  # time at next scr refresh
            stim3.setAutoDraw(True)
        if stim3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim3.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim3.tStop = t  # not accounting for scr refresh
                stim3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim3, 'tStopRefresh')  # time at next scr refresh
                stim3.setAutoDraw(False)
        
        # *stim4* updates
        if stim4.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            stim4.frameNStart = frameN  # exact frame index
            stim4.tStart = t  # local t and not account for scr refresh
            stim4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim4, 'tStartRefresh')  # time at next scr refresh
            stim4.setAutoDraw(True)
        if stim4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim4.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim4.tStop = t  # not accounting for scr refresh
                stim4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim4, 'tStopRefresh')  # time at next scr refresh
                stim4.setAutoDraw(False)
        
        # *stim5* updates
        if stim5.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            stim5.frameNStart = frameN  # exact frame index
            stim5.tStart = t  # local t and not account for scr refresh
            stim5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim5, 'tStartRefresh')  # time at next scr refresh
            stim5.setAutoDraw(True)
        if stim5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim5.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim5.tStop = t  # not accounting for scr refresh
                stim5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim5, 'tStopRefresh')  # time at next scr refresh
                stim5.setAutoDraw(False)
        
        # *stim6* updates
        if stim6.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            stim6.frameNStart = frameN  # exact frame index
            stim6.tStart = t  # local t and not account for scr refresh
            stim6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim6, 'tStartRefresh')  # time at next scr refresh
            stim6.setAutoDraw(True)
        if stim6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim6.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim6.tStop = t  # not accounting for scr refresh
                stim6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim6, 'tStopRefresh')  # time at next scr refresh
                stim6.setAutoDraw(False)
        
        # *stim7* updates
        if stim7.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            stim7.frameNStart = frameN  # exact frame index
            stim7.tStart = t  # local t and not account for scr refresh
            stim7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim7, 'tStartRefresh')  # time at next scr refresh
            stim7.setAutoDraw(True)
        if stim7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim7.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim7.tStop = t  # not accounting for scr refresh
                stim7.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim7, 'tStopRefresh')  # time at next scr refresh
                stim7.setAutoDraw(False)
        
        # *stim8* updates
        if stim8.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            stim8.frameNStart = frameN  # exact frame index
            stim8.tStart = t  # local t and not account for scr refresh
            stim8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim8, 'tStartRefresh')  # time at next scr refresh
            stim8.setAutoDraw(True)
        if stim8.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim8.tStartRefresh + stimdur-frameTolerance:
                # keep track of stop time/frame for later
                stim8.tStop = t  # not accounting for scr refresh
                stim8.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim8, 'tStopRefresh')  # time at next scr refresh
                stim8.setAutoDraw(False)
        
        # *target* updates
        if target.status == NOT_STARTED and tThisFlip >= 2.05-frameTolerance:
            # keep track of start time/frame for later
            target.frameNStart = frameN  # exact frame index
            target.tStart = t  # local t and not account for scr refresh
            target.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(target, 'tStartRefresh')  # time at next scr refresh
            target.setAutoDraw(True)
        
        # *fix* updates
        if fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fix.frameNStart = frameN  # exact frame index
            fix.tStart = t  # local t and not account for scr refresh
            fix.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fix, 'tStartRefresh')  # time at next scr refresh
            fix.setAutoDraw(True)
        
        # *key_resp* updates
        waitOnFlip = False
        if key_resp.status == NOT_STARTED and tThisFlip >= 2.05-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['k', 'l'], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[0].name  # just the first key pressed
                key_resp.rt = _key_resp_allKeys[0].rt
                # was this correct?
                if (key_resp.keys == str(corrAns)) or (key_resp.keys == corrAns):
                    key_resp.corr = 1
                else:
                    key_resp.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in CDT_TrialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "CDT_Trial"-------
    for thisComponent in CDT_TrialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
        # was no response the correct answer?!
        if str(corrAns).lower() == 'none':
           key_resp.corr = 1;  # correct non-response
        else:
           key_resp.corr = 0;  # failed to respond (incorrectly)
    # store data for CDT_trials (TrialHandler)
    CDT_trials.addData('key_resp.keys',key_resp.keys)
    CDT_trials.addData('key_resp.corr', key_resp.corr)
    if key_resp.keys != None:  # we had a response
        CDT_trials.addData('key_resp.rt', key_resp.rt)
    # the Routine "CDT_Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 0 repeats of 'CDT_trials'

# get names of stimulus parameters
if CDT_trials.trialList in ([], [None], None):
    params = []
else:
    params = CDT_trials.trialList[0].keys()
# save data for this loop
CDT_trials.saveAsText(filename + 'CDT_trials.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "GNG_Instr"-------
continueRoutine = True
# update component parameters for each repeat
InstrResp.keys = []
InstrResp.rt = []
_InstrResp_allKeys = []
# keep track of which components have finished
GNG_InstrComponents = [Instructions, InstrResp]
for thisComponent in GNG_InstrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
GNG_InstrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "GNG_Instr"-------
while continueRoutine:
    # get current time
    t = GNG_InstrClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=GNG_InstrClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Instructions* updates
    if Instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instructions.frameNStart = frameN  # exact frame index
        Instructions.tStart = t  # local t and not account for scr refresh
        Instructions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instructions, 'tStartRefresh')  # time at next scr refresh
        Instructions.setAutoDraw(True)
    
    # *InstrResp* updates
    waitOnFlip = False
    if InstrResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        InstrResp.frameNStart = frameN  # exact frame index
        InstrResp.tStart = t  # local t and not account for scr refresh
        InstrResp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(InstrResp, 'tStartRefresh')  # time at next scr refresh
        InstrResp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(InstrResp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(InstrResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if InstrResp.status == STARTED and not waitOnFlip:
        theseKeys = InstrResp.getKeys(keyList=['s'], waitRelease=False)
        _InstrResp_allKeys.extend(theseKeys)
        if len(_InstrResp_allKeys):
            InstrResp.keys = _InstrResp_allKeys[-1].name  # just the last key pressed
            InstrResp.rt = _InstrResp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in GNG_InstrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "GNG_Instr"-------
for thisComponent in GNG_InstrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('Instructions.started', Instructions.tStartRefresh)
thisExp.addData('Instructions.stopped', Instructions.tStopRefresh)
# the Routine "GNG_Instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "GNG_fix"-------
continueRoutine = True
routineTimer.add(1.000000)
# update component parameters for each repeat
# keep track of which components have finished
GNG_fixComponents = [fix_ini]
for thisComponent in GNG_fixComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
GNG_fixClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "GNG_fix"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = GNG_fixClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=GNG_fixClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *fix_ini* updates
    if fix_ini.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        fix_ini.frameNStart = frameN  # exact frame index
        fix_ini.tStart = t  # local t and not account for scr refresh
        fix_ini.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(fix_ini, 'tStartRefresh')  # time at next scr refresh
        fix_ini.setAutoDraw(True)
    if fix_ini.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > fix_ini.tStartRefresh + 1.0-frameTolerance:
            # keep track of stop time/frame for later
            fix_ini.tStop = t  # not accounting for scr refresh
            fix_ini.frameNStop = frameN  # exact frame index
            win.timeOnFlip(fix_ini, 'tStopRefresh')  # time at next scr refresh
            fix_ini.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in GNG_fixComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "GNG_fix"-------
for thisComponent in GNG_fixComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('fix_ini.started', fix_ini.tStartRefresh)
thisExp.addData('fix_ini.stopped', fix_ini.tStopRefresh)

# set up handler to look after randomisation of conditions etc
GNG_trials_1 = data.TrialHandler(nReps=0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('html/resources/GNGCondJK20.xlsx'),
    seed=None, name='GNG_trials_1')
thisExp.addLoop(GNG_trials_1)  # add the loop to the experiment
thisGNG_trial_1 = GNG_trials_1.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisGNG_trial_1.rgb)
if thisGNG_trial_1 != None:
    for paramName in thisGNG_trial_1:
        exec('{} = thisGNG_trial_1[paramName]'.format(paramName))

for thisGNG_trial_1 in GNG_trials_1:
    currentLoop = GNG_trials_1
    # abbreviate parameter names if possible (e.g. rgb = thisGNG_trial_1.rgb)
    if thisGNG_trial_1 != None:
        for paramName in thisGNG_trial_1:
            exec('{} = thisGNG_trial_1[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "GNG_trial"-------
    continueRoutine = True
    routineTimer.add(0.600000)
    # update component parameters for each repeat
    trialBlue.setOpacity(blueOpacity)
    trialOrange.setOpacity(orangeOpacity)
    trialResp.keys = []
    trialResp.rt = []
    _trialResp_allKeys = []
    # keep track of which components have finished
    GNG_trialComponents = [fix_trial, trialBlue, trialOrange, trialResp]
    for thisComponent in GNG_trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    GNG_trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "GNG_trial"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = GNG_trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=GNG_trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fix_trial* updates
        if fix_trial.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fix_trial.frameNStart = frameN  # exact frame index
            fix_trial.tStart = t  # local t and not account for scr refresh
            fix_trial.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fix_trial, 'tStartRefresh')  # time at next scr refresh
            fix_trial.setAutoDraw(True)
        if fix_trial.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fix_trial.tStartRefresh + 0.60-frameTolerance:
                # keep track of stop time/frame for later
                fix_trial.tStop = t  # not accounting for scr refresh
                fix_trial.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fix_trial, 'tStopRefresh')  # time at next scr refresh
                fix_trial.setAutoDraw(False)
        
        # *trialBlue* updates
        if trialBlue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialBlue.frameNStart = frameN  # exact frame index
            trialBlue.tStart = t  # local t and not account for scr refresh
            trialBlue.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialBlue, 'tStartRefresh')  # time at next scr refresh
            trialBlue.setAutoDraw(True)
        if trialBlue.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > trialBlue.tStartRefresh + 0.15-frameTolerance:
                # keep track of stop time/frame for later
                trialBlue.tStop = t  # not accounting for scr refresh
                trialBlue.frameNStop = frameN  # exact frame index
                win.timeOnFlip(trialBlue, 'tStopRefresh')  # time at next scr refresh
                trialBlue.setAutoDraw(False)
        
        # *trialOrange* updates
        if trialOrange.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialOrange.frameNStart = frameN  # exact frame index
            trialOrange.tStart = t  # local t and not account for scr refresh
            trialOrange.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialOrange, 'tStartRefresh')  # time at next scr refresh
            trialOrange.setAutoDraw(True)
        if trialOrange.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > trialOrange.tStartRefresh + 0.15-frameTolerance:
                # keep track of stop time/frame for later
                trialOrange.tStop = t  # not accounting for scr refresh
                trialOrange.frameNStop = frameN  # exact frame index
                win.timeOnFlip(trialOrange, 'tStopRefresh')  # time at next scr refresh
                trialOrange.setAutoDraw(False)
        
        # *trialResp* updates
        waitOnFlip = False
        if trialResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialResp.frameNStart = frameN  # exact frame index
            trialResp.tStart = t  # local t and not account for scr refresh
            trialResp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialResp, 'tStartRefresh')  # time at next scr refresh
            trialResp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(trialResp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(trialResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if trialResp.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > trialResp.tStartRefresh + 0.60-frameTolerance:
                # keep track of stop time/frame for later
                trialResp.tStop = t  # not accounting for scr refresh
                trialResp.frameNStop = frameN  # exact frame index
                win.timeOnFlip(trialResp, 'tStopRefresh')  # time at next scr refresh
                trialResp.status = FINISHED
        if trialResp.status == STARTED and not waitOnFlip:
            theseKeys = trialResp.getKeys(keyList=['space'], waitRelease=False)
            _trialResp_allKeys.extend(theseKeys)
            if len(_trialResp_allKeys):
                trialResp.keys = _trialResp_allKeys[0].name  # just the first key pressed
                trialResp.rt = _trialResp_allKeys[0].rt
                # was this correct?
                if (trialResp.keys == str(corrAns)) or (trialResp.keys == corrAns):
                    trialResp.corr = 1
                else:
                    trialResp.corr = 0
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in GNG_trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "GNG_trial"-------
    for thisComponent in GNG_trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    GNG_trials_1.addData('fix_trial.started', fix_trial.tStartRefresh)
    GNG_trials_1.addData('fix_trial.stopped', fix_trial.tStopRefresh)
    GNG_trials_1.addData('trialBlue.started', trialBlue.tStartRefresh)
    GNG_trials_1.addData('trialBlue.stopped', trialBlue.tStopRefresh)
    GNG_trials_1.addData('trialOrange.started', trialOrange.tStartRefresh)
    GNG_trials_1.addData('trialOrange.stopped', trialOrange.tStopRefresh)
    # check responses
    if trialResp.keys in ['', [], None]:  # No response was made
        trialResp.keys = None
        # was no response the correct answer?!
        if str(corrAns).lower() == 'none':
           trialResp.corr = 1;  # correct non-response
        else:
           trialResp.corr = 0;  # failed to respond (incorrectly)
    # store data for GNG_trials_1 (TrialHandler)
    GNG_trials_1.addData('trialResp.keys',trialResp.keys)
    GNG_trials_1.addData('trialResp.corr', trialResp.corr)
    if trialResp.keys != None:  # we had a response
        GNG_trials_1.addData('trialResp.rt', trialResp.rt)
    GNG_trials_1.addData('trialResp.started', trialResp.tStartRefresh)
    GNG_trials_1.addData('trialResp.stopped', trialResp.tStopRefresh)
    thisExp.nextEntry()
    
# completed 0 repeats of 'GNG_trials_1'

# get names of stimulus parameters
if GNG_trials_1.trialList in ([], [None], None):
    params = []
else:
    params = GNG_trials_1.trialList[0].keys()
# save data for this loop
GNG_trials_1.saveAsText(filename + 'GNG_trials_1.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "GNG_Instr_2"-------
continueRoutine = True
# update component parameters for each repeat
InstrResp_2.keys = []
InstrResp_2.rt = []
_InstrResp_2_allKeys = []
# keep track of which components have finished
GNG_Instr_2Components = [Instructions_2, InstrResp_2]
for thisComponent in GNG_Instr_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
GNG_Instr_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "GNG_Instr_2"-------
while continueRoutine:
    # get current time
    t = GNG_Instr_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=GNG_Instr_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Instructions_2* updates
    if Instructions_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instructions_2.frameNStart = frameN  # exact frame index
        Instructions_2.tStart = t  # local t and not account for scr refresh
        Instructions_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instructions_2, 'tStartRefresh')  # time at next scr refresh
        Instructions_2.setAutoDraw(True)
    
    # *InstrResp_2* updates
    waitOnFlip = False
    if InstrResp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        InstrResp_2.frameNStart = frameN  # exact frame index
        InstrResp_2.tStart = t  # local t and not account for scr refresh
        InstrResp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(InstrResp_2, 'tStartRefresh')  # time at next scr refresh
        InstrResp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(InstrResp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(InstrResp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if InstrResp_2.status == STARTED and not waitOnFlip:
        theseKeys = InstrResp_2.getKeys(keyList=['s'], waitRelease=False)
        _InstrResp_2_allKeys.extend(theseKeys)
        if len(_InstrResp_2_allKeys):
            InstrResp_2.keys = _InstrResp_2_allKeys[-1].name  # just the last key pressed
            InstrResp_2.rt = _InstrResp_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in GNG_Instr_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "GNG_Instr_2"-------
for thisComponent in GNG_Instr_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('Instructions_2.started', Instructions_2.tStartRefresh)
thisExp.addData('Instructions_2.stopped', Instructions_2.tStopRefresh)
# the Routine "GNG_Instr_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "GNG_fix"-------
continueRoutine = True
routineTimer.add(1.000000)
# update component parameters for each repeat
# keep track of which components have finished
GNG_fixComponents = [fix_ini]
for thisComponent in GNG_fixComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
GNG_fixClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "GNG_fix"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = GNG_fixClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=GNG_fixClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *fix_ini* updates
    if fix_ini.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        fix_ini.frameNStart = frameN  # exact frame index
        fix_ini.tStart = t  # local t and not account for scr refresh
        fix_ini.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(fix_ini, 'tStartRefresh')  # time at next scr refresh
        fix_ini.setAutoDraw(True)
    if fix_ini.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > fix_ini.tStartRefresh + 1.0-frameTolerance:
            # keep track of stop time/frame for later
            fix_ini.tStop = t  # not accounting for scr refresh
            fix_ini.frameNStop = frameN  # exact frame index
            win.timeOnFlip(fix_ini, 'tStopRefresh')  # time at next scr refresh
            fix_ini.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in GNG_fixComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "GNG_fix"-------
for thisComponent in GNG_fixComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('fix_ini.started', fix_ini.tStartRefresh)
thisExp.addData('fix_ini.stopped', fix_ini.tStopRefresh)

# set up handler to look after randomisation of conditions etc
GNG_trials_2 = data.TrialHandler(nReps=0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('html/resources/GNGCondJK20.xlsx'),
    seed=None, name='GNG_trials_2')
thisExp.addLoop(GNG_trials_2)  # add the loop to the experiment
thisGNG_trial_2 = GNG_trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisGNG_trial_2.rgb)
if thisGNG_trial_2 != None:
    for paramName in thisGNG_trial_2:
        exec('{} = thisGNG_trial_2[paramName]'.format(paramName))

for thisGNG_trial_2 in GNG_trials_2:
    currentLoop = GNG_trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisGNG_trial_2.rgb)
    if thisGNG_trial_2 != None:
        for paramName in thisGNG_trial_2:
            exec('{} = thisGNG_trial_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "GNG_trial"-------
    continueRoutine = True
    routineTimer.add(0.600000)
    # update component parameters for each repeat
    trialBlue.setOpacity(blueOpacity)
    trialOrange.setOpacity(orangeOpacity)
    trialResp.keys = []
    trialResp.rt = []
    _trialResp_allKeys = []
    # keep track of which components have finished
    GNG_trialComponents = [fix_trial, trialBlue, trialOrange, trialResp]
    for thisComponent in GNG_trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    GNG_trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "GNG_trial"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = GNG_trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=GNG_trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fix_trial* updates
        if fix_trial.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fix_trial.frameNStart = frameN  # exact frame index
            fix_trial.tStart = t  # local t and not account for scr refresh
            fix_trial.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fix_trial, 'tStartRefresh')  # time at next scr refresh
            fix_trial.setAutoDraw(True)
        if fix_trial.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fix_trial.tStartRefresh + 0.60-frameTolerance:
                # keep track of stop time/frame for later
                fix_trial.tStop = t  # not accounting for scr refresh
                fix_trial.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fix_trial, 'tStopRefresh')  # time at next scr refresh
                fix_trial.setAutoDraw(False)
        
        # *trialBlue* updates
        if trialBlue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialBlue.frameNStart = frameN  # exact frame index
            trialBlue.tStart = t  # local t and not account for scr refresh
            trialBlue.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialBlue, 'tStartRefresh')  # time at next scr refresh
            trialBlue.setAutoDraw(True)
        if trialBlue.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > trialBlue.tStartRefresh + 0.15-frameTolerance:
                # keep track of stop time/frame for later
                trialBlue.tStop = t  # not accounting for scr refresh
                trialBlue.frameNStop = frameN  # exact frame index
                win.timeOnFlip(trialBlue, 'tStopRefresh')  # time at next scr refresh
                trialBlue.setAutoDraw(False)
        
        # *trialOrange* updates
        if trialOrange.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialOrange.frameNStart = frameN  # exact frame index
            trialOrange.tStart = t  # local t and not account for scr refresh
            trialOrange.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialOrange, 'tStartRefresh')  # time at next scr refresh
            trialOrange.setAutoDraw(True)
        if trialOrange.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > trialOrange.tStartRefresh + 0.15-frameTolerance:
                # keep track of stop time/frame for later
                trialOrange.tStop = t  # not accounting for scr refresh
                trialOrange.frameNStop = frameN  # exact frame index
                win.timeOnFlip(trialOrange, 'tStopRefresh')  # time at next scr refresh
                trialOrange.setAutoDraw(False)
        
        # *trialResp* updates
        waitOnFlip = False
        if trialResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialResp.frameNStart = frameN  # exact frame index
            trialResp.tStart = t  # local t and not account for scr refresh
            trialResp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialResp, 'tStartRefresh')  # time at next scr refresh
            trialResp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(trialResp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(trialResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if trialResp.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > trialResp.tStartRefresh + 0.60-frameTolerance:
                # keep track of stop time/frame for later
                trialResp.tStop = t  # not accounting for scr refresh
                trialResp.frameNStop = frameN  # exact frame index
                win.timeOnFlip(trialResp, 'tStopRefresh')  # time at next scr refresh
                trialResp.status = FINISHED
        if trialResp.status == STARTED and not waitOnFlip:
            theseKeys = trialResp.getKeys(keyList=['space'], waitRelease=False)
            _trialResp_allKeys.extend(theseKeys)
            if len(_trialResp_allKeys):
                trialResp.keys = _trialResp_allKeys[0].name  # just the first key pressed
                trialResp.rt = _trialResp_allKeys[0].rt
                # was this correct?
                if (trialResp.keys == str(corrAns)) or (trialResp.keys == corrAns):
                    trialResp.corr = 1
                else:
                    trialResp.corr = 0
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in GNG_trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "GNG_trial"-------
    for thisComponent in GNG_trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    GNG_trials_2.addData('fix_trial.started', fix_trial.tStartRefresh)
    GNG_trials_2.addData('fix_trial.stopped', fix_trial.tStopRefresh)
    GNG_trials_2.addData('trialBlue.started', trialBlue.tStartRefresh)
    GNG_trials_2.addData('trialBlue.stopped', trialBlue.tStopRefresh)
    GNG_trials_2.addData('trialOrange.started', trialOrange.tStartRefresh)
    GNG_trials_2.addData('trialOrange.stopped', trialOrange.tStopRefresh)
    # check responses
    if trialResp.keys in ['', [], None]:  # No response was made
        trialResp.keys = None
        # was no response the correct answer?!
        if str(corrAns).lower() == 'none':
           trialResp.corr = 1;  # correct non-response
        else:
           trialResp.corr = 0;  # failed to respond (incorrectly)
    # store data for GNG_trials_2 (TrialHandler)
    GNG_trials_2.addData('trialResp.keys',trialResp.keys)
    GNG_trials_2.addData('trialResp.corr', trialResp.corr)
    if trialResp.keys != None:  # we had a response
        GNG_trials_2.addData('trialResp.rt', trialResp.rt)
    GNG_trials_2.addData('trialResp.started', trialResp.tStartRefresh)
    GNG_trials_2.addData('trialResp.stopped', trialResp.tStopRefresh)
    thisExp.nextEntry()
    
# completed 0 repeats of 'GNG_trials_2'

# get names of stimulus parameters
if GNG_trials_2.trialList in ([], [None], None):
    params = []
else:
    params = GNG_trials_2.trialList[0].keys()
# save data for this loop
GNG_trials_2.saveAsText(filename + 'GNG_trials_2.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "GNG_Instr_2"-------
continueRoutine = True
# update component parameters for each repeat
InstrResp_2.keys = []
InstrResp_2.rt = []
_InstrResp_2_allKeys = []
# keep track of which components have finished
GNG_Instr_2Components = [Instructions_2, InstrResp_2]
for thisComponent in GNG_Instr_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
GNG_Instr_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "GNG_Instr_2"-------
while continueRoutine:
    # get current time
    t = GNG_Instr_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=GNG_Instr_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Instructions_2* updates
    if Instructions_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instructions_2.frameNStart = frameN  # exact frame index
        Instructions_2.tStart = t  # local t and not account for scr refresh
        Instructions_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instructions_2, 'tStartRefresh')  # time at next scr refresh
        Instructions_2.setAutoDraw(True)
    
    # *InstrResp_2* updates
    waitOnFlip = False
    if InstrResp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        InstrResp_2.frameNStart = frameN  # exact frame index
        InstrResp_2.tStart = t  # local t and not account for scr refresh
        InstrResp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(InstrResp_2, 'tStartRefresh')  # time at next scr refresh
        InstrResp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(InstrResp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(InstrResp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if InstrResp_2.status == STARTED and not waitOnFlip:
        theseKeys = InstrResp_2.getKeys(keyList=['s'], waitRelease=False)
        _InstrResp_2_allKeys.extend(theseKeys)
        if len(_InstrResp_2_allKeys):
            InstrResp_2.keys = _InstrResp_2_allKeys[-1].name  # just the last key pressed
            InstrResp_2.rt = _InstrResp_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in GNG_Instr_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "GNG_Instr_2"-------
for thisComponent in GNG_Instr_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('Instructions_2.started', Instructions_2.tStartRefresh)
thisExp.addData('Instructions_2.stopped', Instructions_2.tStopRefresh)
# the Routine "GNG_Instr_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "GNG_fix"-------
continueRoutine = True
routineTimer.add(1.000000)
# update component parameters for each repeat
# keep track of which components have finished
GNG_fixComponents = [fix_ini]
for thisComponent in GNG_fixComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
GNG_fixClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "GNG_fix"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = GNG_fixClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=GNG_fixClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *fix_ini* updates
    if fix_ini.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        fix_ini.frameNStart = frameN  # exact frame index
        fix_ini.tStart = t  # local t and not account for scr refresh
        fix_ini.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(fix_ini, 'tStartRefresh')  # time at next scr refresh
        fix_ini.setAutoDraw(True)
    if fix_ini.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > fix_ini.tStartRefresh + 1.0-frameTolerance:
            # keep track of stop time/frame for later
            fix_ini.tStop = t  # not accounting for scr refresh
            fix_ini.frameNStop = frameN  # exact frame index
            win.timeOnFlip(fix_ini, 'tStopRefresh')  # time at next scr refresh
            fix_ini.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in GNG_fixComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "GNG_fix"-------
for thisComponent in GNG_fixComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('fix_ini.started', fix_ini.tStartRefresh)
thisExp.addData('fix_ini.stopped', fix_ini.tStopRefresh)

# set up handler to look after randomisation of conditions etc
GNG_trials_3 = data.TrialHandler(nReps=0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('html/resources/GNGCondJK20.xlsx'),
    seed=None, name='GNG_trials_3')
thisExp.addLoop(GNG_trials_3)  # add the loop to the experiment
thisGNG_trial_3 = GNG_trials_3.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisGNG_trial_3.rgb)
if thisGNG_trial_3 != None:
    for paramName in thisGNG_trial_3:
        exec('{} = thisGNG_trial_3[paramName]'.format(paramName))

for thisGNG_trial_3 in GNG_trials_3:
    currentLoop = GNG_trials_3
    # abbreviate parameter names if possible (e.g. rgb = thisGNG_trial_3.rgb)
    if thisGNG_trial_3 != None:
        for paramName in thisGNG_trial_3:
            exec('{} = thisGNG_trial_3[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "GNG_trial"-------
    continueRoutine = True
    routineTimer.add(0.600000)
    # update component parameters for each repeat
    trialBlue.setOpacity(blueOpacity)
    trialOrange.setOpacity(orangeOpacity)
    trialResp.keys = []
    trialResp.rt = []
    _trialResp_allKeys = []
    # keep track of which components have finished
    GNG_trialComponents = [fix_trial, trialBlue, trialOrange, trialResp]
    for thisComponent in GNG_trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    GNG_trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "GNG_trial"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = GNG_trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=GNG_trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fix_trial* updates
        if fix_trial.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fix_trial.frameNStart = frameN  # exact frame index
            fix_trial.tStart = t  # local t and not account for scr refresh
            fix_trial.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fix_trial, 'tStartRefresh')  # time at next scr refresh
            fix_trial.setAutoDraw(True)
        if fix_trial.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fix_trial.tStartRefresh + 0.60-frameTolerance:
                # keep track of stop time/frame for later
                fix_trial.tStop = t  # not accounting for scr refresh
                fix_trial.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fix_trial, 'tStopRefresh')  # time at next scr refresh
                fix_trial.setAutoDraw(False)
        
        # *trialBlue* updates
        if trialBlue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialBlue.frameNStart = frameN  # exact frame index
            trialBlue.tStart = t  # local t and not account for scr refresh
            trialBlue.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialBlue, 'tStartRefresh')  # time at next scr refresh
            trialBlue.setAutoDraw(True)
        if trialBlue.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > trialBlue.tStartRefresh + 0.15-frameTolerance:
                # keep track of stop time/frame for later
                trialBlue.tStop = t  # not accounting for scr refresh
                trialBlue.frameNStop = frameN  # exact frame index
                win.timeOnFlip(trialBlue, 'tStopRefresh')  # time at next scr refresh
                trialBlue.setAutoDraw(False)
        
        # *trialOrange* updates
        if trialOrange.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialOrange.frameNStart = frameN  # exact frame index
            trialOrange.tStart = t  # local t and not account for scr refresh
            trialOrange.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialOrange, 'tStartRefresh')  # time at next scr refresh
            trialOrange.setAutoDraw(True)
        if trialOrange.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > trialOrange.tStartRefresh + 0.15-frameTolerance:
                # keep track of stop time/frame for later
                trialOrange.tStop = t  # not accounting for scr refresh
                trialOrange.frameNStop = frameN  # exact frame index
                win.timeOnFlip(trialOrange, 'tStopRefresh')  # time at next scr refresh
                trialOrange.setAutoDraw(False)
        
        # *trialResp* updates
        waitOnFlip = False
        if trialResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialResp.frameNStart = frameN  # exact frame index
            trialResp.tStart = t  # local t and not account for scr refresh
            trialResp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialResp, 'tStartRefresh')  # time at next scr refresh
            trialResp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(trialResp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(trialResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if trialResp.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > trialResp.tStartRefresh + 0.60-frameTolerance:
                # keep track of stop time/frame for later
                trialResp.tStop = t  # not accounting for scr refresh
                trialResp.frameNStop = frameN  # exact frame index
                win.timeOnFlip(trialResp, 'tStopRefresh')  # time at next scr refresh
                trialResp.status = FINISHED
        if trialResp.status == STARTED and not waitOnFlip:
            theseKeys = trialResp.getKeys(keyList=['space'], waitRelease=False)
            _trialResp_allKeys.extend(theseKeys)
            if len(_trialResp_allKeys):
                trialResp.keys = _trialResp_allKeys[0].name  # just the first key pressed
                trialResp.rt = _trialResp_allKeys[0].rt
                # was this correct?
                if (trialResp.keys == str(corrAns)) or (trialResp.keys == corrAns):
                    trialResp.corr = 1
                else:
                    trialResp.corr = 0
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in GNG_trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "GNG_trial"-------
    for thisComponent in GNG_trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    GNG_trials_3.addData('fix_trial.started', fix_trial.tStartRefresh)
    GNG_trials_3.addData('fix_trial.stopped', fix_trial.tStopRefresh)
    GNG_trials_3.addData('trialBlue.started', trialBlue.tStartRefresh)
    GNG_trials_3.addData('trialBlue.stopped', trialBlue.tStopRefresh)
    GNG_trials_3.addData('trialOrange.started', trialOrange.tStartRefresh)
    GNG_trials_3.addData('trialOrange.stopped', trialOrange.tStopRefresh)
    # check responses
    if trialResp.keys in ['', [], None]:  # No response was made
        trialResp.keys = None
        # was no response the correct answer?!
        if str(corrAns).lower() == 'none':
           trialResp.corr = 1;  # correct non-response
        else:
           trialResp.corr = 0;  # failed to respond (incorrectly)
    # store data for GNG_trials_3 (TrialHandler)
    GNG_trials_3.addData('trialResp.keys',trialResp.keys)
    GNG_trials_3.addData('trialResp.corr', trialResp.corr)
    if trialResp.keys != None:  # we had a response
        GNG_trials_3.addData('trialResp.rt', trialResp.rt)
    GNG_trials_3.addData('trialResp.started', trialResp.tStartRefresh)
    GNG_trials_3.addData('trialResp.stopped', trialResp.tStopRefresh)
    thisExp.nextEntry()
    
# completed 0 repeats of 'GNG_trials_3'

# get names of stimulus parameters
if GNG_trials_3.trialList in ([], [None], None):
    params = []
else:
    params = GNG_trials_3.trialList[0].keys()
# save data for this loop
GNG_trials_3.saveAsText(filename + 'GNG_trials_3.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "IUS12_Instr"-------
continueRoutine = True
# update component parameters for each repeat
InstrResp_3.keys = []
InstrResp_3.rt = []
_InstrResp_3_allKeys = []
# keep track of which components have finished
IUS12_InstrComponents = [text, InstrResp_3]
for thisComponent in IUS12_InstrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
IUS12_InstrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "IUS12_Instr"-------
while continueRoutine:
    # get current time
    t = IUS12_InstrClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=IUS12_InstrClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *InstrResp_3* updates
    waitOnFlip = False
    if InstrResp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        InstrResp_3.frameNStart = frameN  # exact frame index
        InstrResp_3.tStart = t  # local t and not account for scr refresh
        InstrResp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(InstrResp_3, 'tStartRefresh')  # time at next scr refresh
        InstrResp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(InstrResp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(InstrResp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if InstrResp_3.status == STARTED and not waitOnFlip:
        theseKeys = InstrResp_3.getKeys(keyList=['s'], waitRelease=False)
        _InstrResp_3_allKeys.extend(theseKeys)
        if len(_InstrResp_3_allKeys):
            InstrResp_3.keys = _InstrResp_3_allKeys[-1].name  # just the last key pressed
            InstrResp_3.rt = _InstrResp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in IUS12_InstrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "IUS12_Instr"-------
for thisComponent in IUS12_InstrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# the Routine "IUS12_Instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
IUS12_trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('html/resources/IUS12_cond.xlsx'),
    seed=None, name='IUS12_trials')
thisExp.addLoop(IUS12_trials)  # add the loop to the experiment
thisIUS12_trial = IUS12_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisIUS12_trial.rgb)
if thisIUS12_trial != None:
    for paramName in thisIUS12_trial:
        exec('{} = thisIUS12_trial[paramName]'.format(paramName))

for thisIUS12_trial in IUS12_trials:
    currentLoop = IUS12_trials
    # abbreviate parameter names if possible (e.g. rgb = thisIUS12_trial.rgb)
    if thisIUS12_trial != None:
        for paramName in thisIUS12_trial:
            exec('{} = thisIUS12_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial_slider"-------
    continueRoutine = True
    # update component parameters for each repeat
    text_2.setText(qenglish)
    slider.reset()
    sliderClick=0
    # keep track of which components have finished
    trial_sliderComponents = [text_2, slider]
    for thisComponent in trial_sliderComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trial_sliderClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial_slider"-------
    while continueRoutine:
        # get current time
        t = trial_sliderClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trial_sliderClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            text_2.setAutoDraw(True)
        
        # *slider* updates
        if slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider.frameNStart = frameN  # exact frame index
            slider.tStart = t  # local t and not account for scr refresh
            slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider, 'tStartRefresh')  # time at next scr refresh
            slider.setAutoDraw(True)
        if showSlider==None:
            continueRoutine=False
        elif slider.getRating() != None and sliderClick==0:
            sliderClick=t
        elif sliderClick == 0:
            pass
        elif t > sliderClick+1:
            continueRoutine=False
            
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trial_sliderComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial_slider"-------
    for thisComponent in trial_sliderComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    IUS12_trials.addData('text_2.started', text_2.tStartRefresh)
    IUS12_trials.addData('text_2.stopped', text_2.tStopRefresh)
    IUS12_trials.addData('slider.response', slider.getRating())
    IUS12_trials.addData('slider.rt', slider.getRT())
    IUS12_trials.addData('slider.started', slider.tStartRefresh)
    IUS12_trials.addData('slider.stopped', slider.tStopRefresh)
    # the Routine "trial_slider" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'IUS12_trials'

# get names of stimulus parameters
if IUS12_trials.trialList in ([], [None], None):
    params = []
else:
    params = IUS12_trials.trialList[0].keys()
# save data for this loop
IUS12_trials.saveAsText(filename + 'IUS12_trials.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
