# Description:
#   Reply to a coworker with a random developer excuse
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   hubot reply to [NAME] -> [NAME], [Random Excuse]
#
# Author:
#   jorgesierra

EXCUSES = {
  1: "it works on my machine.",
  2: "where were you when the program blew up?",
  3: "why do you want to do it that way?",
  4: "you can't use that version on your system.",
  5: "even though it doesn't work, how does it feel?",
  6: "did you check for a virus on your system?",
  7: "somebody must have changed my code.",
  8: "it works, but it hasn't been tested.",
  9: "THIS can't be the source of THAT.",
  10: "I can't test everything!",
  11: "it's just some unlucky coincidence.",
  12: "you must have the wrong version.",
  13: "I haven't touched that module in weeks!",
  14: "there is something funky in your data.",
  15: "what did you type in wrong to get it to crash?",
  16: "it must be a hardware problem.",
  17: "how is that possible?",
  18: "it worked yesterday.",
  19: "it's never done that before.",
  20: "that's weird...",
  21: "you probably need to clear your cache."
};

module.exports = (robot) ->
  robot.respond /reply to (.+)/i, (msg) ->
    msg.send msg.match[1]+", "+EXCUSES[Math.floor(Math.random() * (EXCUSES.length - 0) + 0)]