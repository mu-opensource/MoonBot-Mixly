'use strict';

/*              MoonBot              */
goog.provide('Blockly.Blocks.MoonBot');
goog.require('Blockly.Blocks');

Blockly.Blocks.MoonBot.media_path_base = "../../media/morpx_moonbot/";
Blockly.Blocks.MoonBot.HUE_Input = "#D31C32";
Blockly.Blocks.MoonBot.HUE_TankBase = "#4BA354";
Blockly.Blocks.MoonBot.HUE_Servo = "#079B97";
Blockly.Blocks.MoonBot.HUE_Music = "#165299";
Blockly.Blocks.MoonBot.HUE_IMU = "#BC0C74";
Blockly.Blocks.MoonBot.HUE_LED = "#909099";
Blockly.Blocks.MoonBot.HUE_MECH = "#8CB200";
Blockly.Blocks.MoonBot.HUE_HUMANNOID = "#5631A8";

/**************TankBase***************/
Blockly.Blocks['TankBaseInit'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_TankBase);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.MOONBOT_TANK_BASE)
        .appendField(Blockly.Msg.MOONBOT_REVERSE_DIRECTION)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'REVERSE_DIR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_TANKBASE_INIT);
  },
};
Blockly.Blocks['MotorWrite'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_TankBase);
    var dropdown_motor = profile.moonbot.group_motor;
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"left_motor.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_MOTOR)
        .appendField(new Blockly.FieldDropdown(dropdown_motor), "MOTOR_PORT");
    this.appendValueInput("VOLTAGE")
        .appendField(Blockly.Msg.MOONBOT_WRITE+Blockly.Msg.MOONBOT_VALUE+"(±255)")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['MotorRead'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_TankBase);
    var dropdown_motor = profile.moonbot.group_motor;
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"left_motor.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_MOTOR)
        .appendField(new Blockly.FieldDropdown(dropdown_motor), "MOTOR_PORT")
        .appendField(Blockly.Msg.MOONBOT_READ+Blockly.Msg.MOONBOT_VALUE);
    this.setOutput(true, Number);
  },
};
Blockly.Blocks['MotorWriteRpm'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_TankBase);
    var dropdown_motor = profile.moonbot.group_motor;
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"left_motor.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_MOTOR)
        .appendField(new Blockly.FieldDropdown(dropdown_motor), "MOTOR_PORT");
    this.appendValueInput("RPM")
        .appendField(Blockly.Msg.MOONBOT_WRITE+Blockly.Msg.MOONBOT_RPM+"(±100RPM)")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['TankBaseReadRpm'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_TankBase);
    var dropdown_motor = profile.moonbot.group_motor;
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"left_motor.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_MOTOR)
        .appendField(new Blockly.FieldDropdown(dropdown_motor), "MOTOR_PORT")
        .appendField(Blockly.Msg.MOONBOT_READ+Blockly.Msg.MOONBOT_RPM);
    this.setOutput(true, Number);
  },
};
Blockly.Blocks['TankBaseCalibrate'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_TankBase);
    var dropdown_motor = profile.moonbot.group_motor;
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_TANK_BASE)
        .appendField(Blockly.Msg.MOONBOT_STRAIGHT_STEP+Blockly.Msg.MOONBOT_OFFSET+Blockly.Msg.MOONBOT_CALIBRATE+"(%)");
    this.appendValueInput("PERCENT")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_RPM_CALIBRATE);
  },
};
Blockly.Blocks['TankBaseSetDistanceStep'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_TankBase);
    this.appendValueInput("STEP")
        .appendField(Blockly.Msg.MOONBOT_TANK_BASE)
        .appendField(Blockly.Msg.MOONBOT_STRAIGHT_STEP+Blockly.Msg.MOONBOT_DISTANCE+Blockly.Msg.MOONBOT_CALIBRATE+"(%)")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_DISTANCE_CALIBRATE);
  },
};
Blockly.Blocks['TankBaseSetAngleStep'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_TankBase);
    this.appendValueInput("STEP")
        .appendField(Blockly.Msg.MOONBOT_TANK_BASE)
        .appendField(Blockly.Msg.MOONBOT_ANGLE_STEP+Blockly.Msg.MOONBOT_ANGLE+Blockly.Msg.MOONBOT_CALIBRATE+"(%)")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_ANGLE_CALIBRATE);
  },
};
Blockly.Blocks['TankBaseForward'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_TankBase);
    this.appendValueInput("STEP")
        .appendField(Blockly.Msg.MOONBOT_TANK_BASE)
        .appendField(Blockly.Msg.MOONBOT_FORWARD+"(cm)")
        .setCheck(Number);
    this.appendValueInput("SPEED_RPM")
        .appendField(Blockly.Msg.MOONBOT_RPM+"(0~100RPM)")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['TankBaseBackward'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_TankBase);
    this.appendValueInput("STEP")
        .appendField(Blockly.Msg.MOONBOT_TANK_BASE)
        .appendField(Blockly.Msg.MOONBOT_BACKWARD+"(cm)")
        .setCheck(Number);
    this.appendValueInput("SPEED_RPM")
        .appendField(Blockly.Msg.MOONBOT_RPM+"(0~100RPM)")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['TankBaseTurnLeft'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_TankBase);
    this.appendValueInput("STEP")
        .appendField(Blockly.Msg.MOONBOT_TANK_BASE)
        .appendField(Blockly.Msg.MOONBOT_TURN_LEFT+"(°)")
        .setCheck(Number);
    this.appendValueInput("SPEED_RPM")
        .appendField(Blockly.Msg.MOONBOT_RPM+"(0~100RPM)")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['TankBaseTurnRight'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_TankBase);
    this.appendValueInput("STEP")
        .appendField(Blockly.Msg.MOONBOT_TANK_BASE)
        .appendField(Blockly.Msg.MOONBOT_TURN_RIGHT+"(°)")
        .setCheck(Number);
    this.appendValueInput("SPEED_RPM")
        .appendField(Blockly.Msg.MOONBOT_RPM+"(0~100RPM)")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['TankBaseStop'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_TankBase);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_TANK_BASE)
        .appendField(Blockly.Msg.MOONBOT_STOP);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
/**************Servo***************/
Blockly.Blocks['GetFieldAngle'] = {
  init:function() {
    this.angle = new Blockly.FieldAngle(90);
    Blockly.FieldAngle.ROUND = 5;
    this.setColour(Blockly.Blocks.MoonBot.HUE_Servo);
    this.appendDummyInput()
        .appendField(this.angle, 'ANGLE');
    this.setOutput(true, Number);
  },
  onchange:function(e) {
    var angle_value = this.angle.getValue();
    if (angle_value > 180) {
      this.angle.setValue(180);
    }
  }
};
Blockly.Blocks['ServoWrite'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Servo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"servo.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_SERVO)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_servo), "SERVO_PORT");
    this.appendValueInput("ANGLE")
        .appendField(Blockly.Msg.MOONBOT_ANGLE+"(0~180°)")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['ServoRead'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Servo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"servo.png", 30, 30))        
        .appendField(Blockly.Msg.MOONBOT_SERVO)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_servo), "SERVO_PORT")
        .appendField(Blockly.Msg.MOONBOT_READ+Blockly.Msg.MOONBOT_ANGLE);
    this.setInputsInline(true);
    this.setOutput(true, Number);
  },
};
Blockly.Blocks['ServoSet'] = {
  init:function() {
    var dropdown_speed = [[Blockly.Msg.MOONBOT_SLOW, "1"], [Blockly.Msg.MOONBOT_MIDDLE, "2"], [Blockly.Msg.MOONBOT_FAST, "3"]];
    this.setColour(Blockly.Blocks.MoonBot.HUE_Servo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"servo.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_SERVO)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_servo), "SERVO_PORT");
    this.appendValueInput("ANGLE")
        .appendField(Blockly.Msg.MOONBOT_PRESET+Blockly.Msg.MOONBOT_ANGLE+"(0~180°)")
        .setCheck(Number);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_SPEED)
        .appendField(new Blockly.FieldDropdown(dropdown_speed), "SPEED");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_SERVO_SET);
  },
};
Blockly.Blocks['ServoMoveAll'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Servo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"servo.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_MOVE_ALL_SERVO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_MOVE_ALL_SERVO);
  },
};
Blockly.Blocks['ServoReverse'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Servo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"servo.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_SERVO)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_servo), "SERVO_PORT")
        .appendField(Blockly.Msg.MOONBOT_REVERSE_DIRECTION)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'REVERSE_DIR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_SERVO_REVERSE);
  },
};
Blockly.Blocks['ServoCalibrate'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Servo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"servo.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_SERVO)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_servo), "SERVO_PORT");
    this.appendValueInput("VAR")
        .appendField(Blockly.Msg.MOONBOT_CALIBRATE+"(±100°)")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
/**************Music***************/
// play
Blockly.Blocks['SpeakerInit'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Music);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"speaker.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_SPEAKER)
        .appendField(Blockly.Msg.MOONBOT_INIT_ON)
        .appendField(Blockly.Msg.MOONBOT_PORT)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_serial_port), "PORT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['SpeakerPlayMode'] = {
  init:function() {
    var dropdown_paly_mode = [[Blockly.Msg.MOONBOT_SPEAKER_SINGLE+Blockly.Msg.MOONBOT_PLAY, "0"],
                          [Blockly.Msg.MOONBOT_SPEAKER_SINGLE+Blockly.Msg.MOONBOT_REPEAT, "1"],
                          [Blockly.Msg.MOONBOT_PLAY+Blockly.Msg.MOONBOT_ALL, "2"],
                          [Blockly.Msg.MOONBOT_RANDOM+Blockly.Msg.MOONBOT_PLAY, "3"]];
    this.setColour(Blockly.Blocks.MoonBot.HUE_Music);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"speaker.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_SPEAKER)
        .appendField(Blockly.Msg.MOONBOT_SET+Blockly.Msg.MOONBOT_PLAY+Blockly.Msg.MOONBOT_MODE)
        .appendField(new Blockly.FieldDropdown(dropdown_paly_mode), "MODE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['SpeakerPlay'] = {
  init:function() {
    var dropdown_music = [
      [Blockly.Msg.MOONBOT_ELEPHANT, "0101"],
      [Blockly.Msg.MOONBOT_COCK, "0102"],
      [Blockly.Msg.MOONBOT_DOG, "0103"],
      [Blockly.Msg.MOONBOT_WOLF, "0104"],
      [Blockly.Msg.MOONBOT_HORSE, "0105"],
      [Blockly.Msg.MOONBOT_CAT, "0106"],
      [Blockly.Msg.MOONBOT_LION, "0107"],
      [Blockly.Msg.MOONBOT_COW, "0108"],
      [Blockly.Msg.MOONBOT_BEAR, "0109"],
      [Blockly.Msg.MOONBOT_DUCK, "0110"],
      [Blockly.Msg.MOONBOT_SHEEP, "0111"],
      [Blockly.Msg.MOONBOT_PIG, "0112"],
      [Blockly.Msg.MOONBOT_MOSQUITO, "0113"],
      [Blockly.Msg.MOONBOT_BIRD, "0114"],
      [Blockly.Msg.MOONBOT_PENGUIN, "0115"],
      ["hello", "0201"],
      ["hi", "0202"],
      ["how are you", "0203"],
      ["nice to meet you", "0204"],
      ["thank you", "0205"],
      ["what are you doing?", "0206"],
      [Blockly.Msg.MOONBOT_PIANO+" do 1", "0301"],
      [Blockly.Msg.MOONBOT_PIANO+" re 2", "0302"],
      [Blockly.Msg.MOONBOT_PIANO+" mi 3", "0303"],
      [Blockly.Msg.MOONBOT_PIANO+" fa 4", "0304"],
      [Blockly.Msg.MOONBOT_PIANO+" sol 5", "0305"],
      [Blockly.Msg.MOONBOT_PIANO+" la 6", "0306"],
      [Blockly.Msg.MOONBOT_PIANO+" si 7", "0307"],
      [Blockly.Msg.MOONBOT_PIANO+" Do. 1.", "0308"],
      ["110", "0401"],
      ["120", "0402"],
      ["119", "0403"],
      [Blockly.Msg.MOONBOT_BUS, "0404"],
      [Blockly.Msg.MOONBOT_TELL, "0405"],
      [Blockly.Msg.MOONBOT_MOTORCYCLE, "0406"],
      [Blockly.Msg.MOONBOT_CAR, "0407"],
      [Blockly.Msg.MOONBOT_PIANO, "0408"],
      [Blockly.Msg.MOONBOT_DRUM+" 1", "0501"],
      [Blockly.Msg.MOONBOT_DRUM+" 2", "0502"],
      [Blockly.Msg.MOONBOT_DRUM+" 3", "0503"],
      [Blockly.Msg.MOONBOT_DRUM+" 4", "0504"],
      [Blockly.Msg.MOONBOT_DRUM+" 5", "0505"],
      [Blockly.Msg.MOONBOT_DRUM+" 6", "0506"],
    ];
    this.setColour(Blockly.Blocks.MoonBot.HUE_Music);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"speaker.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_SPEAKER)
        .appendField(Blockly.Msg.MOONBOT_PLAY)
        .appendField(new Blockly.FieldDropdown(dropdown_music), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['SpeakerPlayName'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Music);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"speaker.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_SPEAKER)
        .appendField(Blockly.Msg.MOONBOT_PLAY)
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput('',Blockly.FieldTextInput.char_validator), "NAME1")
        .appendField(new Blockly.FieldTextInput('',Blockly.FieldTextInput.char_validator), "NAME2")
        .appendField(new Blockly.FieldTextInput('',Blockly.FieldTextInput.char_validator), "NAME3")
        .appendField(new Blockly.FieldTextInput('',Blockly.FieldTextInput.char_validator), "NAME4")
        .appendField(this.newQuote_(false));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_SPEAKER_PALY_NAME);
  },
  /**
   * Create an image of an open or closed quote.
   * @param {boolean} open True if open quote, false if closed.
   * @return {!Blockly.FieldImage} The field image of the quote.
   * @private
   */
  newQuote_: function(open) {
    if (open == this.RTL) {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
    } else {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
    }
    return new Blockly.FieldImage(file, 12, 12, '"');
  }
};
Blockly.Blocks['SpeakerSet'] = {
  init:function() {
    var dropdown_mode = [
      ["⏯ "+Blockly.Msg.MOONBOT_PLAY+"/"+Blockly.Msg.MOONBOT_PAUSE, "pause"],
      ["⏭ "+Blockly.Msg.MOONBOT_PLAY_NEXT,"playNext"],
      ["⏮ "+Blockly.Msg.MOONBOT_PLAY_LAST,"playPrevious"],
      ["⏹ "+Blockly.Msg.MOONBOT_STOP,"stop"],
    ];
    this.setColour(Blockly.Blocks.MoonBot.HUE_Music);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"speaker.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_SPEAKER)
        .appendField(new Blockly.FieldDropdown(dropdown_mode), "MODE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['SpeakerSetVolume'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Music);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"speaker.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_SPEAKER);
    this.appendValueInput("VOLUME")
        .appendField(Blockly.Msg.MOONBOT_VOLUME+"(0~32)")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
// buzzer
var dropdown_tone = [
  [Blockly.Msg.MOONBOT_LOW+'C', 'NOTE_C3'],
  [Blockly.Msg.MOONBOT_LOW+'D', 'NOTE_D3'],
  [Blockly.Msg.MOONBOT_LOW+'E', 'NOTE_E3'],
  [Blockly.Msg.MOONBOT_LOW+'F', 'NOTE_F3'],
  [Blockly.Msg.MOONBOT_LOW+'G', 'NOTE_G3'],
  [Blockly.Msg.MOONBOT_LOW+'A', 'NOTE_A3'],
  [Blockly.Msg.MOONBOT_LOW+'B', 'NOTE_B3'],
  [Blockly.Msg.MOONBOT_MIDDLE+'C'+"'do'", 'NOTE_C4'],
  [Blockly.Msg.MOONBOT_MIDDLE+'D'+"'re'", 'NOTE_D4'],
  [Blockly.Msg.MOONBOT_MIDDLE+'E'+"'mi'", 'NOTE_E4'],
  [Blockly.Msg.MOONBOT_MIDDLE+'F'+"'fa'", 'NOTE_F4'],
  [Blockly.Msg.MOONBOT_MIDDLE+'G'+"'so'", 'NOTE_G4'],
  [Blockly.Msg.MOONBOT_MIDDLE+'A'+"'la'", 'NOTE_A4'],
  [Blockly.Msg.MOONBOT_MIDDLE+'B'+"'si'", 'NOTE_B4'],
  [Blockly.Msg.MOONBOT_HIGH+'C', 'NOTE_C5'],
  [Blockly.Msg.MOONBOT_HIGH+'D', 'NOTE_D5'],
  [Blockly.Msg.MOONBOT_HIGH+'E', 'NOTE_E5'],
  [Blockly.Msg.MOONBOT_HIGH+'F', 'NOTE_F5'],
  [Blockly.Msg.MOONBOT_HIGH+'G', 'NOTE_G5'],
  [Blockly.Msg.MOONBOT_HIGH+'A', 'NOTE_A5'],
  [Blockly.Msg.MOONBOT_HIGH+'B', 'NOTE_B5']];
var dropdown_beat = [
  ['1/16', 'BEAT_FRACTION_SIXTEENTH'],
  ['1/8', 'BEAT_FRACTION_EIGHTH'],
  ['1/4', 'BEAT_FRACTION_QUARTER'],
  ['1/2', 'BEAT_FRACTION_HALF'],
  ['3/4', 'BEAT_FRACTION_THREE_QUARTER'],
  ['1', 'BEAT_FRACTION_WHOLE'],
  ['2', 'BEAT_FRACTION_DOUBLE'],
  ['4', 'BEAT_FRACTION_BREVE']];
Blockly.Blocks['BuzzerPlayToneForBeat'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Music);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_BUZZER)
        .appendField(Blockly.Msg.MOONBOT_PLAY)
        .appendField(new Blockly.FieldDropdown(dropdown_tone), "TONE")
        .appendField(new Blockly.FieldDropdown(dropdown_beat), "BEAT")
        .appendField(Blockly.Msg.MOONBOT_BEAT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['BuzzerPauseBeat'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Music);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_BUZZER)
        .appendField(Blockly.Msg.MOONBOT_PAUSE)
        .appendField(new Blockly.FieldDropdown(dropdown_beat), "BEAT")
        .appendField(Blockly.Msg.MOONBOT_BEAT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['BuzzerSetTempo'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Music);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_BUZZER);
    this.appendValueInput("TEMPO")
        .appendField(Blockly.Msg.MOONBOT_SET+Blockly.Msg.MOONBOT_TEMPO+"(BPM)")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['BuzzerRing'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Music);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_BUZZER);
    this.appendValueInput("FREQUENCY")
        .appendField(Blockly.Msg.MOONBOT_FREQUENCY+"(Hz)");
    this.appendValueInput("TIME")
        .appendField(Blockly.Msg.MOONBOT_TIME+"(ms)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['BuzzerStop'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Music);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_BUZZER)
        .appendField(Blockly.Msg.MOONBOT_STOP+Blockly.Msg.MOONBOT_PLAY);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
/**************Input***************/
Blockly.Blocks['TouchSensorInit'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Input);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"touch.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_TOUCH)
        .appendField(Blockly.Msg.MOONBOT_INIT_ON)
        .appendField(Blockly.Msg.MOONBOT_PORT)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_port), "PORT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['IrSensorInit'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Input);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"ir.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_IR)
        .appendField(Blockly.Msg.MOONBOT_INIT_ON)
        .appendField(Blockly.Msg.MOONBOT_PORT)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_port), "PORT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['TouchSensorRead'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Input);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"touch.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_TOUCH)
        .appendField(Blockly.Msg.MOONBOT_READ+Blockly.Msg.MOONBOT_PORT)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_port), "PORT");
    this.setOutput(true, Boolean);
  },
};
Blockly.Blocks['IrSensorRead'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Input);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"ir.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_IR)
        .appendField(Blockly.Msg.MOONBOT_READ)
        .appendField(Blockly.Msg.MOONBOT_PORT)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_port), "PORT")
        .appendField(Blockly.Msg.MOONBOT_PIN)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_pin), "PIN");
    this.setOutput(true, Boolean);
  },
};
Blockly.Blocks['ButtonPress'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Input);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_BUTTON)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.on_board_button.concat([["A&B","A&B"]])), "BUTTON")
        .appendField(Blockly.Msg.MOONBOT_PRESSED);
    this.setOutput(true, Boolean);
  },
};
Blockly.Blocks['PortToPin'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_Input);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_PORT)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_port), "PORT")
        .appendField(Blockly.Msg.MOONBOT_PIN)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_pin), "PIN");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_PORT2PIN);
  },
};
/**************IMU***************/
Blockly.Blocks['IMUCompassCalibrate'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_IMU);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_COMPASS+Blockly.Msg.MOONBOT_CALIBRATE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_IMU_COMPASS_CALIBRATE);
  },
};
Blockly.Blocks['IMUReadCompass'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_IMU);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_COMPASS)
        .appendField(Blockly.Msg.MOONBOT_ANGLE+"(0~360°)");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_IMU_READ_COMPASS);
  },
};
Blockly.Blocks['IMUReadAcceleration'] = {
  init:function() {
    var dropdown_axes = [["X"+Blockly.Msg.MOONBOT_AXES, "0"], 
                        ["Y"+Blockly.Msg.MOONBOT_AXES, "1"], 
                        ["Z"+Blockly.Msg.MOONBOT_AXES, "2"], 
                        [Blockly.Msg.MOONBOT_STRENGTH, "3"]];
    this.setColour(Blockly.Blocks.MoonBot.HUE_IMU);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_ACCELERATION+"(1024/g)")
        .appendField(new Blockly.FieldDropdown(dropdown_axes), "AXES");
    this.setOutput(true, Number);
  },
};
Blockly.Blocks['IMUReadRotation'] = {
  init:function() {
    var dropdown_rotation = [[Blockly.Msg.MOONBOT_PITCH, "kAccPitch"], 
                            [Blockly.Msg.MOONBOT_ROLL, "kAccRoll"]];
    this.setColour(Blockly.Blocks.MoonBot.HUE_IMU);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_ACCELERATION+"(°)")
        .appendField(new Blockly.FieldDropdown(dropdown_rotation), "ROTATION");
    this.setOutput(true, Number);
  },
};
Blockly.Blocks['IMUReadTemperature'] = {
  init:function() {
    var dropdown_temperature = [["℃","C"], ["℉","F"]];
    this.setColour(Blockly.Blocks.MoonBot.HUE_IMU);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_TEMPERATRUE)
        .appendField(new Blockly.FieldDropdown(dropdown_temperature), "TEMPERATURE");
    this.setOutput(true, Number);
  },
};
Blockly.Blocks['IMUOn'] = {
  init:function() {
    var dropdown_imu_state = [[Blockly.Msg.MOONBOT_SHAKE, "kIMUShake"], 
                              [Blockly.Msg.MOONBOT_FREE_FALL, "kIMUFreeFall"]];
    this.setColour(Blockly.Blocks.MoonBot.HUE_IMU);
    this.appendDummyInput()
        .appendField("MoonBot "+Blockly.Msg.MOONBOT_ON)
        .appendField(new Blockly.FieldDropdown(dropdown_imu_state), "STATE");
    this.setOutput(true, Boolean);
  },
};
/**************LED***************/
var dropdown_led = [[Blockly.Msg.MOONBOT_EYE,"moonbot_eyes"],[Blockly.Msg.MOONBOT_CONTROLLER_LED,"LED"]];
Blockly.Blocks['EyesInit'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_LED);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"eyes.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_EYE)
        .appendField(Blockly.Msg.MOONBOT_INIT_ON)
        .appendField(Blockly.Msg.MOONBOT_PORT)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_port), "PORT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['ControllerLedShowColor'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_LED);
    var led_color = ['#000','#f00','#0f0','#ff0','#00f','#f0f','#0ff','#fff'];
    var eyes_color = new Array(2);
    for (var i = 0; i < 2; ++i) {
      eyes_color[i] = new Blockly.FieldColour('#000000');
      eyes_color[i].setColours(led_color).setColumns(3);
    }
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_CONTROLLER_LED)
        .appendField(Blockly.Msg.MOONBOT_SHOW)
        .appendField(eyes_color[0], "LED0")
        .appendField(eyes_color[1], "LED1");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['EyesShowColor'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_LED);
    var led_color = ['#000','#f00','#0f0','#ff0','#00f','#f0f','#0ff','#fff'];
    var eyes_color = new Array(12);
    for (var i = 0; i < 12; ++i) {
      eyes_color[i] = new Blockly.FieldColour('#000000');
      eyes_color[i].setColours(led_color).setColumns(3);
    }
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"eyes.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_EYE)
        .appendField(Blockly.Msg.MOONBOT_SHOW);

    this.appendDummyInput()
        .appendField("\t\t\t")
        .appendField(eyes_color[0], "LED0")
        .appendField("\t\t\t\t\t\t\t\t\t\t ")
        .appendField(eyes_color[6], "LED6");
    this.appendDummyInput()
        .appendField(eyes_color[1], "LED1")
        .appendField("\t\t\t")
        .appendField(eyes_color[5], "LED5")
        .appendField("\t\t")
        .appendField(eyes_color[7], "LED7")
        .appendField("\t\t\t")
        .appendField(eyes_color[11], "LED11");
    this.appendDummyInput()
        .appendField(eyes_color[2], "LED2")
        .appendField("\t\t\t")
        .appendField(eyes_color[4], "LED4")
        .appendField("\t\t")
        .appendField(eyes_color[8], "LED8")
        .appendField("\t\t\t")
        .appendField(eyes_color[10], "LED10");
    this.appendDummyInput()
        .appendField("\t\t\t")
        .appendField(eyes_color[3], "LED3")
        .appendField("\t\t\t\t\t\t\t\t\t\t\t")
        .appendField(eyes_color[9], "LED9");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['EyesShowEmotion'] = {
  init:function() {
    var dropdown_emotion = [[Blockly.Msg.MOONBOT_HAPPY, "smile"],
                            [Blockly.Msg.MOONBOT_ANGRY, "angry"],
                            [Blockly.Msg.MOONBOT_SAD, "sad"],
                            [Blockly.Msg.MOONBOT_CIRCLE, "circle"],
                            [Blockly.Msg.MOONBOT_FLASH, "flash"],
                            [Blockly.Msg.MOONBOT_RAINBOW, "rainbow"],
                            [Blockly.Msg.MOONBOT_LOOK_RIGHT, "look_right"], 
                            [Blockly.Msg.MOONBOT_LOOK_LEFT, "look_left"], 
                            [Blockly.Msg.MOONBOT_LOOK_UP, "look_up"], 
                            [Blockly.Msg.MOONBOT_LOOK_DOWN, "look_down"]];
    this.setColour(Blockly.Blocks.MoonBot.HUE_LED);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.MoonBot.media_path_base+"eyes.png", 30, 30))
        .appendField(Blockly.Msg.MOONBOT_EYE)
        .appendField(Blockly.Msg.MOONBOT_SHOW)
        .appendField(new Blockly.FieldDropdown(dropdown_emotion), "EMOTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['LedSetColor'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_LED);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(dropdown_led), "LED_TYPE");
    this.appendValueInput("LED_NUM")
        .appendField(Blockly.Msg.MOONBOT_LED_NUMBER)
        .setCheck(Number);
    this.appendValueInput("R_VALUE")
        .appendField("R "+Blockly.Msg.MOONBOT_VALUE)
        .setCheck(Number);
    this.appendValueInput("G_VALUE")
        .appendField("G "+Blockly.Msg.MOONBOT_VALUE)
        .setCheck(Number);
    this.appendValueInput("B_VALUE")
        .appendField("B "+Blockly.Msg.MOONBOT_VALUE)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_LED_SET_COLOR);
  },
};
Blockly.Blocks['LedSetColorHSV'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_LED);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(dropdown_led), "LED_TYPE");
    this.appendValueInput("LED_NUM")
        .appendField(Blockly.Msg.MOONBOT_LED_NUMBER)
        .setCheck(Number);
    this.appendValueInput("H_VALUE")
        .appendField("H "+Blockly.Msg.MOONBOT_VALUE)
        .setCheck(Number);
    this.appendValueInput("S_VALUE")
        .appendField("S "+Blockly.Msg.MOONBOT_VALUE)
        .setCheck(Number);
    this.appendValueInput("V_VALUE")
        .appendField("V "+Blockly.Msg.MOONBOT_VALUE)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_LED_SET_COLOR_HSV);
  },
};
Blockly.Blocks['LedShow'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_LED);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(dropdown_led), "LED_TYPE")
        .appendField(Blockly.Msg.MOONBOT_SHOW);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_LED_SHOW);
  },
};
Blockly.Blocks['LedClear'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_LED);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(dropdown_led), "LED_TYPE")
        .appendField(Blockly.Msg.MOONBOT_CLEAR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MOONBOT_TIP_LED_CLEAR);
  },
};
Blockly.Blocks['LedSetBrightness'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_LED);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(dropdown_led), "LED_TYPE");
    this.appendValueInput("BRIGHTNESS")
        .appendField(Blockly.Msg.MOONBOT_BRIGHTNESS+"(0~255)")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
/**************MECH***************/
Blockly.Blocks['MechInit'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_MECH);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MOONBOT_MECH)
        .appendField(new Blockly.FieldDropdown([["Mu00", "0"],["Mu01", "1"],["Mu10", "2"],["Mu11", "3"]]), "MU")
        .appendField(Blockly.Msg.MOONBOT_INIT_ON)
        .appendField(Blockly.Msg.MOONBOT_PORT)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_serial_port), "MU_PORT");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MOONBOT_CLAW)
        .appendField(Blockly.Msg.MOONBOT_INIT_ON)
        .appendField(Blockly.Msg.MOONBOT_SERVO)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_servo), "CLAW");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MOONBOT_UPPER_ARM)
        .appendField(Blockly.Msg.MOONBOT_INIT_ON)
        .appendField(Blockly.Msg.MOONBOT_SERVO)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_servo), "UPPER_ARM");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MOONBOT_LOWER_ARM)
        .appendField(Blockly.Msg.MOONBOT_INIT_ON)
        .appendField(Blockly.Msg.MOONBOT_SERVO)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_servo), "LOWER_ARM");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['MechSetGrabBallPosition'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_MECH);
    this.appendValueInput("BALL_X")
        .appendField(Blockly.Msg.MOONBOT_MECH)
        .appendField(Blockly.Msg.MOONBOT_SET)
        .appendField(Blockly.Msg.MOONBOT_GRAB_BALL_POSITION+" X(0~100)=");
    this.appendValueInput("BALL_Y")
        .appendField("Y(0~100)=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("通过设置参数X来调节跟球中心，>50往右偏，<50往左偏;通过设置参数Y来调节抓球距离，数值越大，抓球距离越近");
  },
};
Blockly.Blocks['MechSetShootBallCondition'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_MECH);
    this.appendValueInput("CARD_X")
        .appendField(Blockly.Msg.MOONBOT_MECH)
        .appendField(Blockly.Msg.MOONBOT_SET)
        .appendField(Blockly.Msg.MOONBOT_SHOOT_BALL_CONDITION+" X(0~100)=");
    this.appendValueInput("CARD_WIDTH")
        .appendField(Blockly.Msg.MOONBOT_WIDTH+"(0~100)=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("通过设置参数X来调节投篮中心点，>50往右偏，<50往左偏;通过设置参数`宽度`来调节投篮距离，数值越大，距离越近（物体透视原理，近大远小）");
  },
};
Blockly.Blocks['MechClawSet'] = {
  init:function() {
    var dropdown_claw_type = [[Blockly.Msg.MOONBOT_OPEN, "kClawOpen"],
                              [Blockly.Msg.MOONBOT_CLOSE, "kClawClose"],
                              [Blockly.Msg.MOONBOT_FORWARD, "kClawForward"],
                              [Blockly.Msg.MOONBOT_BACKWARD, 'kClawBackward'],
                              [Blockly.Msg.MOONBOT_UP, 'kClawUp'],
                              [Blockly.Msg.MOONBOT_DOWN, 'kClawDown']];
    this.setColour(Blockly.Blocks.MoonBot.HUE_MECH);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_MECH)
        .appendField(Blockly.Msg.MOONBOT_CLAW)
        .appendField(new Blockly.FieldDropdown(dropdown_claw_type), "CLAW_TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['MechSearchBall'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_MECH);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_MECH)
        .appendField(Blockly.Msg.MOONBOT_SEARCH+Blockly.Msg.MOONBOT_BALL);
    this.setOutput(true, Number);
  },
};
Blockly.Blocks['MechGrabBall'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_MECH);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_MECH)
        .appendField(Blockly.Msg.MOONBOT_GRAB+Blockly.Msg.MOONBOT_BALL);
    this.setOutput(true, Number);
  },
};
Blockly.Blocks['MechSearchCard'] = {
  init:function() {
    var dropdown_card = [
      [Blockly.LKL_VS2_VISION_SHAPE_CARD, "VISION_SHAPE_CARD_DETECT"],
      [Blockly.LKL_VS2_VISION_TRAFFIC_CARD, "VISION_TRAFFIC_CARD_DETECT"],
      [Blockly.LKL_VS2_VISION_NUM_CARD, "VISION_NUM_CARD_DETECT"],
    ];
    this.setColour(Blockly.Blocks.MoonBot.HUE_MECH);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_MECH)
        .appendField(Blockly.Msg.MOONBOT_SEARCH)
        .appendField(new Blockly.FieldDropdown(dropdown_card), "CARD_TYPE");
    this.setOutput(true, Number);
  },
};
Blockly.Blocks['MechShootBall'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_MECH);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_MECH)
        .appendField(Blockly.Msg.MOONBOT_SHOOT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
/**************BOT***************/
Blockly.Blocks['BotInit'] = {
  init:function() {
    this.setColour(Blockly.Blocks.MoonBot.HUE_HUMANNOID);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MOONBOT_HUMANNOID)
        .appendField(Blockly.Msg.MOONBOT_HEAD)
        .appendField(Blockly.Msg.MOONBOT_INIT_ON)
        .appendField(Blockly.Msg.MOONBOT_SERVO)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_servo), "HEAD");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MOONBOT_LEFT+Blockly.Msg.MOONBOT_ARM)
        .appendField(Blockly.Msg.MOONBOT_INIT_ON)
        .appendField(Blockly.Msg.MOONBOT_SERVO)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_servo), "LEFT_ARM");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MOONBOT_RIGHT+Blockly.Msg.MOONBOT_ARM)
        .appendField(Blockly.Msg.MOONBOT_INIT_ON)
        .appendField(Blockly.Msg.MOONBOT_SERVO)
        .appendField(new Blockly.FieldDropdown(profile.moonbot.group_servo), "RIGHT_ARM");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['BotShakeArm'] = {
  init:function() {
    var dropdown_hands_type = [
      [Blockly.Msg.MOONBOT_LEFT+Blockly.Msg.MOONBOT_ARM, "kMoonBotLeftArm"],
      [Blockly.Msg.MOONBOT_RIGHT+Blockly.Msg.MOONBOT_ARM, "kMoonBotRightArm"],
      [Blockly.Msg.MOONBOT_BOTH+Blockly.Msg.MOONBOT_ARM, "kMoonBotBothArm"],
    ];
    var dropdown_speed = [
      [Blockly.Msg.MOONBOT_FAST, "100"],
      [Blockly.Msg.MOONBOT_MIDDLE, "200"],
      [Blockly.Msg.MOONBOT_SLOW, "300"],
    ];
    this.setColour(Blockly.Blocks.MoonBot.HUE_HUMANNOID);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_HUMANNOID)
        .appendField(Blockly.Msg.MOONBOT_SHAKE_ARM)
        .appendField(new Blockly.FieldDropdown(dropdown_hands_type), "ARM_TYPE");
    this.appendValueInput("OFFSET")
        .appendField(Blockly.Msg.MOONBOT_OFFSET+"(°)");
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_SPEED)
        .appendField(new Blockly.FieldDropdown(dropdown_speed), "WAIT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks['BotSwing'] = {
  init:function() {
    var dropdown_motor_type = [
      [Blockly.Msg.MOONBOT_LEFT+Blockly.Msg.MOONBOT_MOTOR, "kMoonBotLeftMotor"],
      [Blockly.Msg.MOONBOT_RIGHT+Blockly.Msg.MOONBOT_MOTOR, "kMoonBotRightMotor"],
      [Blockly.Msg.MOONBOT_BOTH+Blockly.Msg.MOONBOT_MOTOR, "kMoonBotBothMotor"],
    ];
    var dropdown_speed = [
      [Blockly.Msg.MOONBOT_FAST, "80"],
      [Blockly.Msg.MOONBOT_MIDDLE, "120"],
      [Blockly.Msg.MOONBOT_SLOW, "160"],
    ];
    this.setColour(Blockly.Blocks.MoonBot.HUE_HUMANNOID);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_HUMANNOID)
        .appendField(Blockly.Msg.MOONBOT_SWING)
        .appendField(new Blockly.FieldDropdown(dropdown_motor_type), "MOTOR_TYPE")
        .appendField(Blockly.Msg.MOONBOT_SPEED)
        .appendField(new Blockly.FieldDropdown(dropdown_speed), "WAIT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("机器人晃动身体并甩头");
  },
};
Blockly.Blocks['BotShakeBody'] = {
  init:function() {
    var dropdown_speed = [
      [Blockly.Msg.MOONBOT_SLOW, "60"],
      [Blockly.Msg.MOONBOT_MIDDLE, "90"],
      [Blockly.Msg.MOONBOT_FAST, "120"],
    ];
    this.setColour(Blockly.Blocks.MoonBot.HUE_HUMANNOID);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_HUMANNOID)
        .appendField(Blockly.Msg.MOONBOT_SWAY_BODY)
        .appendField(Blockly.Msg.MOONBOT_SPEED)
        .appendField(new Blockly.FieldDropdown(dropdown_speed), "SPEED");
    this.appendValueInput("TIME")
        .appendField(Blockly.Msg.MOONBOT_TIME+"(ms)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("机器人左右晃动身体");
  },
};
Blockly.Blocks['BotTwistBody'] = {
  init:function() {
    var dropdown_speed = [
      [Blockly.Msg.MOONBOT_SLOW, "60"],
      [Blockly.Msg.MOONBOT_MIDDLE, "100"],
      [Blockly.Msg.MOONBOT_FAST, "140"],
    ];
    this.setColour(Blockly.Blocks.MoonBot.HUE_HUMANNOID);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_HUMANNOID)
        .appendField(Blockly.Msg.MOONBOT_TAKE_A_STEP)
        .appendField(Blockly.Msg.MOONBOT_SPEED)
        .appendField(new Blockly.FieldDropdown(dropdown_speed), "SPEED");
    this.appendValueInput("TIME")
        .appendField(Blockly.Msg.MOONBOT_TIME+"(ms)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("机器人双轮向前迈出一步，参数`时间`数值越大，步子迈的越大");
  },
};
Blockly.Blocks['BotNod'] = {
  init:function() {
    var dropdown_speed = [
      [Blockly.Msg.MOONBOT_FAST, "1"],
      [Blockly.Msg.MOONBOT_MIDDLE, "2"],
      [Blockly.Msg.MOONBOT_SLOW, "3"],
    ];
    this.setColour(Blockly.Blocks.MoonBot.HUE_HUMANNOID);
    this.appendValueInput("OFFSET")
        .appendField(Blockly.Msg.MOONBOT_HUMANNOID)
        .appendField(Blockly.Msg.MOONBOT_NOD)
        .appendField(Blockly.Msg.MOONBOT_OFFSET+"(°)");
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOONBOT_SPEED)
        .appendField(new Blockly.FieldDropdown(dropdown_speed), "WAIT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};




