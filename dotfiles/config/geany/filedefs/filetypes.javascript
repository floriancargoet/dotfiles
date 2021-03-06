# For complete documentation of this file, please see Geany's main documentation

[styling]
# foreground;background;bold;italic
default=0xffffff;0x1e1e1e;false;false

comment=0x747474;0x1e1e1e;false;false
commentline=0x747474;0x1e1e1e;false;false
commentdoc=0x747474;0x1e1e1e;false;false

number=0x7ECDFF;0x1e1e1e;false;false
word=0xFFCB4F;0x1e1e1e;true;false
word2=0xAAFF57;0x1e1e1e;true;false
string=0x78643c;0x1e1e1e;true;false
character=0xA18651;0x1e1e1e;true;false
uuid=0xffffff;0x1e1e1e;false;false
preprocessor=0xB2A886;0x1e1e1e;true;false
operator=0x98BAC5;0x1e1e1e;true;false

identifier=0xffffff;0x1e1e1e;false;false
stringeol=0xffffff;0xffffff;true;false
verbatim=0xDBB260;0x1e1e1e;false;false
regex=0xAAFF57;0x1e1e1e;false;false

commentlinedoc=0x747474;0x1e1e1e;false;false
commentdockeyword=0xffffff;0x1e1e1e;false;false
commentdockeyworderror=0x747474;0x1e1e1e;false;false

globalclass=0x7EB35B;0x1e1e1e;false;false
styling_within_preprocessor=1;0;false;false

[keywords]
# all items must be in one line
primary=abs abstract acos anchor asin atan atan2 big bold boolean break byte case catch ceil char charAt charCodeAt class concat const continue cos Date debugger default delete do double else enum escape eval exp export extends false final finally fixed float floor fontcolor fontsize for fromCharCode function goto if implements import in indexOf Infinity instanceof int interface isFinite isNaN italics join lastIndexOf length link log long Math max MAX_VALUE min MIN_VALUE NaN native NEGATIVE_INFINITY new null Number package parseFloat parseInt pop POSITIVE_INFINITY pow private protected public push random return reverse round shift short sin slice small sort splice split sqrt static strike String sub substr substring sup super switch synchronized tan this throw throws toLowerCase toString toUpperCase transient true try typeof undefined unescape unshift valueOf var void volatile while with

[settings]
# default extension used when saving files
#extension=js

# the following characters are these which a "word" can contains, see documentation
#wordchars=_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789

# if only single comment char is supported like # in this file, leave comment_close blank
comment_open=//
comment_close=

# set to false if a comment character/string should start at column 0 of a line, true uses any
# indentation of the line, e.g. setting to true causes the following on pressing CTRL+d
	#command_example();
# setting to false would generate this
#	command_example();
# This setting works only for single line comments
comment_use_indent=true

# context action command (please see Geany's main documentation for details)
context_action_cmd=

[build_settings]
# %f will be replaced by the complete filename
# %e will be replaced by the filename without extension
# (use only one of it at one time)
compiler=
run=


[build-menu]
FT_00_LB=rake build_js
FT_00_CM=rake build_js
FT_00_WD=
FT_01_LB=jshint *.js
FT_01_CM=jshint %f
FT_01_WD=
error_regex=(.+): line ([0-9]+),.*
EX_00_LB=_Exécuter
EX_00_CM=./%e
EX_00_WD=
