'use strict';

goog.provide('Blockly.Arduino.MoonBot');

goog.require('Blockly.Arduino');

var key_include_moonbot = 'IncludeMoonBot';
var key_tankbase_begin = 'TankBaseBegin';
var key_imu_begin = 'IMUBegin';
var key_servo_all = 'ServoAll';
var key_acceleration = 'AccelerationValue';
var speaker = 'speaker';
var key_beat = 'm_beat';

var check_box2cpp = {"TRUE":"true","FALSE":"false"};

/**************TankBase***************/
Blockly.Arduino.TankBaseInit = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.setups_[key_tankbase_begin] = '';
    var check_box_reverse_dir = this.getFieldValue('REVERSE_DIR');
    var code = 'TankBase.begin('+check_box2cpp[check_box_reverse_dir]+');\n';
    return code;
};
Blockly.Arduino.MotorWrite = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    if (Blockly.Arduino.setups_[key_tankbase_begin] == undefined) {
        Blockly.Arduino.setups_[key_tankbase_begin] = 'TankBase.begin();';
    }
    var motor_port = this.getFieldValue('MOTOR_PORT');
    var voltage = Blockly.Arduino.valueToCode(this, 'VOLTAGE',
                    Blockly.Arduino.ORDER_NONE) || '0';
    var code = motor_port+'.write('+voltage+');\n';
    return code;
};
Blockly.Arduino.MotorRead = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    if (Blockly.Arduino.setups_[key_tankbase_begin] == undefined) {
        Blockly.Arduino.setups_[key_tankbase_begin] = 'TankBase.begin();';
    }
    var motor_port = this.getFieldValue('MOTOR_PORT');
    var code = motor_port+'.read()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.MotorWriteRpm = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    if (Blockly.Arduino.setups_[key_tankbase_begin] == undefined) {
        Blockly.Arduino.setups_[key_tankbase_begin] = 'TankBase.begin();';
    }
    var motor_port = this.getFieldValue('MOTOR_PORT');
    var rpm = Blockly.Arduino.valueToCode(this, 'RPM',
                    Blockly.Arduino.ORDER_NONE) || '0';
    var code = motor_port+'.writeRpm('+rpm+');\n';
    return code;
};
Blockly.Arduino.TankBaseReadRpm = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    if (Blockly.Arduino.setups_[key_tankbase_begin] == undefined) {
        Blockly.Arduino.setups_[key_tankbase_begin] = 'TankBase.begin();';
    }
    var motor_port = this.getFieldValue('MOTOR_PORT');
    var code = motor_port+'.readRpm()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.TankBaseCalibrate = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    if (Blockly.Arduino.setups_[key_tankbase_begin] == undefined) {
        Blockly.Arduino.setups_[key_tankbase_begin] = 'TankBase.begin();';
    }
    var percent = Blockly.Arduino.valueToCode(this, 'PERCENT',
                    Blockly.Arduino.ORDER_NONE) || '100';
    var code = 'TankBase.rpmCorrection('+percent+');\n';
    return code;
};
Blockly.Arduino.TankBaseSetDistanceStep = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    if (Blockly.Arduino.setups_[key_tankbase_begin] == undefined) {
        Blockly.Arduino.setups_[key_tankbase_begin] = 'TankBase.begin();';
    }
    var percent = Blockly.Arduino.valueToCode(this, 'STEP',
                    Blockly.Arduino.ORDER_NONE) || '100';
    var code = 'TankBase.distanceCorrection('+percent+');\n';
    return code;
};
Blockly.Arduino.TankBaseSetAngleStep = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    if (Blockly.Arduino.setups_[key_tankbase_begin] == undefined) {
        Blockly.Arduino.setups_[key_tankbase_begin] = 'TankBase.begin();';
    }
    var percent = Blockly.Arduino.valueToCode(this, 'STEP',
                    Blockly.Arduino.ORDER_NONE) || '100';
    var code = 'TankBase.wheelSpacingSet('+percent+');\n';
    return code;
};
Blockly.Arduino.TankBaseForward = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    if (Blockly.Arduino.setups_[key_tankbase_begin] == undefined) {
        Blockly.Arduino.setups_[key_tankbase_begin] = 'TankBase.begin();';
    }
    var value = Blockly.Arduino.valueToCode(this, 'STEP',
                    Blockly.Arduino.ORDER_NONE) || '0';
    var speed_rpm = Blockly.Arduino.valueToCode(this, 'SPEED_RPM',
                    Blockly.Arduino.ORDER_NONE) || '30';
    var code = 'TankBase.forward('+value+', '+speed_rpm+');\n';
    return code;
};
Blockly.Arduino.TankBaseBackward = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    if (Blockly.Arduino.setups_[key_tankbase_begin] == undefined) {
        Blockly.Arduino.setups_[key_tankbase_begin] = 'TankBase.begin();';
    }
    var value = Blockly.Arduino.valueToCode(this, 'STEP',
                    Blockly.Arduino.ORDER_NONE) || '0';
    var speed_rpm = Blockly.Arduino.valueToCode(this, 'SPEED_RPM',
                    Blockly.Arduino.ORDER_NONE) || '30';
    var code = 'TankBase.backward('+value+', '+speed_rpm+');\n';
    return code;
};
Blockly.Arduino.TankBaseTurnLeft = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    if (Blockly.Arduino.setups_[key_tankbase_begin] == undefined) {
        Blockly.Arduino.setups_[key_tankbase_begin] = 'TankBase.begin();';
    }
    var value = Blockly.Arduino.valueToCode(this, 'STEP',
                    Blockly.Arduino.ORDER_NONE) || '0';
    var speed_rpm = Blockly.Arduino.valueToCode(this, 'SPEED_RPM',
                    Blockly.Arduino.ORDER_NONE) || '30';
    var code = 'TankBase.turnLeft('+value+', '+speed_rpm+');\n';
    return code;
};
Blockly.Arduino.TankBaseTurnRight = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    if (Blockly.Arduino.setups_[key_tankbase_begin] == undefined) {
        Blockly.Arduino.setups_[key_tankbase_begin] = 'TankBase.begin();';
    }
    var value = Blockly.Arduino.valueToCode(this, 'STEP',
                    Blockly.Arduino.ORDER_NONE) || '0';
    var speed_rpm = Blockly.Arduino.valueToCode(this, 'SPEED_RPM',
                    Blockly.Arduino.ORDER_NONE) || '30';
    var code = 'TankBase.turnRight('+value+', '+speed_rpm+');\n';
    return code;
};
Blockly.Arduino.TankBaseStop = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    if (Blockly.Arduino.setups_[key_tankbase_begin] == undefined) {
        Blockly.Arduino.setups_[key_tankbase_begin] = 'TankBase.begin();';
    }
    var code = 'TankBase.stop();\n';
    return code;
};
/**************Servo***************/
Blockly.Arduino.GetFieldAngle = function() {
    var angle = this.getFieldValue('ANGLE');
    return [angle, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.ServoWrite = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var servo_port = this.getFieldValue('SERVO_PORT');
    Blockly.Arduino.setups_['servo_'+servo_port+'_begin'] = 'm_servo['+servo_port+'].attach('+servo_port+');';
    var angle = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_NONE) || '90';
    var code = 'm_servo['+servo_port+'].write('+angle+');\n';
    return code;
};
Blockly.Arduino.ServoRead = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var servo_port = this.getFieldValue('SERVO_PORT');
    Blockly.Arduino.setups_['servo_'+servo_port+'_begin'] = 'm_servo['+servo_port+'].attach('+servo_port+');';
    var code = 'm_servo['+servo_port+'].read()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.ServoSet = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var servo_port = this.getFieldValue('SERVO_PORT');
    Blockly.Arduino.setups_['servo_'+servo_port+'_begin'] = 'm_servo['+servo_port+'].attach('+servo_port+');';
    var angle = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_NONE) || '90';
    var speed = this.getFieldValue('SPEED');
    var code = 'm_servo['+servo_port+'].setTargetAngle('+angle+', '+speed+');\n';
    return code;
};
Blockly.Arduino.ServoMoveAll = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var code = 'MoonBotServo::moveAllServoToTarget();\n';
    return code;
};
Blockly.Arduino.ServoReverse = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var servo_port = this.getFieldValue('SERVO_PORT');
    Blockly.Arduino.setups_['servo_'+servo_port+'_begin'] = 'm_servo['+servo_port+'].attach('+servo_port+');';
    var check_box_reverse_dir = this.getFieldValue('REVERSE_DIR');
    var code = 'm_servo['+servo_port+'].reverse('+check_box2cpp[check_box_reverse_dir]+');\n';
    return code;
};
Blockly.Arduino.ServoCalibrate = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var servo_port = this.getFieldValue('SERVO_PORT');
    Blockly.Arduino.setups_['servo_'+servo_port+'_begin'] = 'm_servo['+servo_port+'].attach('+servo_port+');';
    var value = Blockly.Arduino.valueToCode(this, 'VAR',
                    Blockly.Arduino.ORDER_NONE) || '0';
    var code = 'm_servo['+servo_port+'].correction('+value+');\n';
    return code;
};
/**************Music***************/
Blockly.Arduino.SpeakerInit = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var port = this.getFieldValue('PORT');
    var code = speaker+'.begin('+port+');\n';
    return code;
};
Blockly.Arduino.SpeakerPlayMode = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var mode = this.getFieldValue('MODE');
    var code = speaker+'.setPlayMode('+mode+');\n';
    return code;
};
Blockly.Arduino.SpeakerPlay = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var name = this.getFieldValue('NAME');
    var code = speaker+'.play((char*)"'+name+'");\n';
    return code;
};
Blockly.Arduino.SpeakerPlayName = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var name1 = this.getFieldValue('NAME1');
    var name2 = this.getFieldValue('NAME2');
    var name3 = this.getFieldValue('NAME3');
    var name4 = this.getFieldValue('NAME4');
    var code = speaker+'.play((char*)"'+name1+name2+name3+name4+'");\n';
    return code;
};
Blockly.Arduino.SpeakerSet = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var mode = this.getFieldValue('MODE');
    var code = speaker+'.'+mode+'();\n';
    return code;
};
Blockly.Arduino.SpeakerSetVolume = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var volume = Blockly.Arduino.valueToCode(this, 'VOLUME',
                    Blockly.Arduino.ORDER_NONE) || '20';
    var code = speaker+'.setVolume('+volume+');\n';
    return code;
};
Blockly.Arduino.BuzzerPlayToneForBeat = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.definitions_[key_beat] = 'int m_beat = 500;';
    Blockly.Arduino.setups_[key_beat] = 'pinMode(MOONBOT_PIN_BUZZER_SIG, OUTPUT);\n  pinMode(MOONBOT_PIN_BUZZER_SHDW, OUTPUT);\n  digitalWrite(MOONBOT_PIN_BUZZER_SHDW, LOW);';
    var tone = this.getFieldValue('TONE');
    var beat = this.getFieldValue('BEAT');
    var code = '\
tone(MOONBOT_PIN_BUZZER_SIG, '+tone+');\n\
delay(m_beat*'+beat+'/BEAT_FRACTION_WHOLE);\n\
noTone(MOONBOT_PIN_BUZZER_SIG);\n\
';
    return code;
};
Blockly.Arduino.BuzzerPauseBeat = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.definitions_[key_beat] = 'int m_beat = 500;';
    Blockly.Arduino.setups_[key_beat] = 'pinMode(MOONBOT_PIN_BUZZER_SIG, OUTPUT);\n  pinMode(MOONBOT_PIN_BUZZER_SHDW, OUTPUT);\n  digitalWrite(MOONBOT_PIN_BUZZER_SHDW, LOW);';
    var beat = this.getFieldValue('BEAT');
    var code = 'delay(m_beat*'+beat+'/BEAT_FRACTION_WHOLE);\n';
    return code;
};
Blockly.Arduino.BuzzerSetTempo = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.definitions_[key_beat] = 'int m_beat = 500;';
    Blockly.Arduino.setups_[key_beat] = 'pinMode(MOONBOT_PIN_BUZZER_SIG, OUTPUT);\n  pinMode(MOONBOT_PIN_BUZZER_SHDW, OUTPUT);\n  digitalWrite(MOONBOT_PIN_BUZZER_SHDW, LOW);';
    var tempo = Blockly.Arduino.valueToCode(this, 'TEMPO',
                    Blockly.Arduino.ORDER_NONE) || '120';
    var code = 'm_beat = 1000*60/'+tempo+';\n';
    return code;
};
Blockly.Arduino.BuzzerRing = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.definitions_[key_beat] = 'int m_beat = 500;';
    Blockly.Arduino.setups_[key_beat] = 'pinMode(MOONBOT_PIN_BUZZER_SIG, OUTPUT);\n  pinMode(MOONBOT_PIN_BUZZER_SHDW, OUTPUT);\n  digitalWrite(MOONBOT_PIN_BUZZER_SHDW, LOW);';
    var frequency = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
                    Blockly.Arduino.ORDER_NONE) || '100';
    var time = Blockly.Arduino.valueToCode(this, 'TIME',
                    Blockly.Arduino.ORDER_NONE) || '0';
    var code = 'tone(MOONBOT_PIN_BUZZER_SIG, '+frequency+', '+time+');\n';
    return code;
};
Blockly.Arduino.BuzzerStop = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.definitions_[key_beat] = 'int m_beat = 500;';
    Blockly.Arduino.setups_[key_beat] = 'pinMode(MOONBOT_PIN_BUZZER_SIG, OUTPUT);\n  pinMode(MOONBOT_PIN_BUZZER_SHDW, OUTPUT);\n  digitalWrite(MOONBOT_PIN_BUZZER_SHDW, LOW);';
    var code = 'noTone(MOONBOT_PIN_BUZZER_SIG);\n';
    return code;
};
/**************Input***************/
Blockly.Arduino.TouchSensorInit = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var port = this.getFieldValue('PORT');
    var code = 'pinMode(moonbotPortToPin('+port+', kPortPin1), INPUT_PULLUP);\n';
    return code;
};
Blockly.Arduino.IrSensorInit = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var port = this.getFieldValue('PORT');
    var code = 'pinMode(moonbotPortToPin('+port+', kPortPin1), INPUT);\npinMode(moonbotPortToPin('+port+', kPortPin2), INPUT);\n';
    return code;
};
Blockly.Arduino.TouchSensorRead = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var port = this.getFieldValue('PORT');
    var code = '(!digitalRead(moonbotPortToPin('+port+', kPortPin1)))';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.IrSensorRead = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var port = this.getFieldValue('PORT');
    var pin = this.getFieldValue('PIN');
    var code = 'digitalRead(moonbotPortToPin('+port+', '+pin+'))';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.ButtonPress = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var button = this.getFieldValue('BUTTON');
    var code = '';
    switch(button) {
        case 'A&B':
            code = '(isButtonPressed(MOONBOT_PIN_BUTTON_A) && isButtonPressed(MOONBOT_PIN_BUTTON_B))';
            break;
        default:
            code = 'isButtonPressed('+button+')';
            break;
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.PortToPin = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var port = this.getFieldValue('PORT');
    var pin = this.getFieldValue('PIN');
    var code = 'moonbotPortToPin('+port+', '+pin+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**************IMU***************/
Blockly.Arduino.IMUCompassCalibrate = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.setups_[key_imu_begin] = 'IMU.enable();';
    var code = 'IMU.calibrateMag();\n';
    return code;
};
Blockly.Arduino.IMUReadCompass = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.setups_[key_imu_begin] = 'IMU.enable();';
    var code = 'IMU.getMagAngle();\n';
    return code;
};
Blockly.Arduino.IMUReadAcceleration = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.setups_[key_imu_begin] = 'IMU.enable();';
    var axes = this.getFieldValue('AXES');
    var code = '';
    if (axes == '3') {
        code = 'int(IMU.getAcceleration()*1024)';
    } else {
        Blockly.Arduino.definitions_[key_acceleration] = 'int32_t m_accelerometer[3] = { 0 };';
        code = '(IMU.Acc.GetAxes(m_accelerometer)==LSM303AGR_ACC_STATUS_OK ? m_accelerometer['+axes+']:0)';
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.IMUReadRotation = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.setups_[key_imu_begin] = 'IMU.enable();';
    var rotation = this.getFieldValue('ROTATION');
    var code = 'IMU.getAccAngle('+rotation+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.IMUReadTemperature = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.setups_[key_imu_begin] = 'IMU.enable();';
    var temperature_tyep = this.getFieldValue('TEMPERATURE');
    var code = 'IMU.temperature'+temperature_tyep+'()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.IMUOn = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.setups_[key_imu_begin] = 'IMU.enable();';
    var state = this.getFieldValue('STATE');
    var code = 'IMU.on('+state+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**************LED***************/
Blockly.Arduino.EyesInit = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.setups_['moonbot_eyes'+'begin'] = 'moonbot_eyes.begin();'
    var port = this.getFieldValue('PORT');
    return 'moonbot_eyes.setPin(moonbotPortToPin('+port+', kPortPin1));\n';
};
Blockly.Arduino.ControllerLedShowColor = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.setups_['LED'+'begin'] = 'LED.begin();'
    var code = '';
    for (var i = 0; i < 2; ++i) {
        var led_color = this.getFieldValue('LED'+i);
        code += 'LED.setPixelColor('+i+', '+led_color.replace('#', '0x')+');\n';
    }
    code += 'LED.show();\n';
    return code;
};
Blockly.Arduino.EyesShowColor = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.setups_['moonbot_eyes'+'begin'] = 'moonbot_eyes.begin();'
    var code = '';
    for (var i = 0; i < 12; ++i) {
        var led_color = this.getFieldValue('LED'+i);
        code += 'moonbot_eyes.setPixelColor('+i+', 0x'+led_color.replace('#', '')+');\n';
    }
    code += 'moonbot_eyes.show();\n';
    return code;
};
Blockly.Arduino.EyesShowEmotion = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    Blockly.Arduino.setups_['moonbot_eyes'+'begin'] = 'moonbot_eyes.begin();'
    // FIXME
    var code = '// FIXME not ready for this block\n';
    return code;
};
Blockly.Arduino.LedSetColor = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var led_type = this.getFieldValue('LED_TYPE');
    Blockly.Arduino.setups_[led_type+'begin'] = led_type+'.begin();'
    var led_num = Blockly.Arduino.valueToCode(this, "LED_NUM",
                Blockly.Arduino.ORDER_NONE) || '0';
    var r = Blockly.Arduino.valueToCode(this, "R_VALUE",
                Blockly.Arduino.ORDER_NONE) || '0';
    var g = Blockly.Arduino.valueToCode(this, "G_VALUE",
                Blockly.Arduino.ORDER_NONE) || '0';
    var b = Blockly.Arduino.valueToCode(this, "B_VALUE",
                Blockly.Arduino.ORDER_NONE) || '0';
    var code = led_type+'.setPixelColor('+led_num+', '+r+', '+g+', '+b+');\n';
    return code;
};
Blockly.Arduino.LedSetColorHSV = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var led_type = this.getFieldValue('LED_TYPE');
    Blockly.Arduino.setups_[led_type+'begin'] = led_type+'.begin();'
    var led_num = Blockly.Arduino.valueToCode(this, "LED_NUM",
                Blockly.Arduino.ORDER_NONE) || '0';
    var h = Blockly.Arduino.valueToCode(this, "H_VALUE",
                Blockly.Arduino.ORDER_NONE) || '0';
    var s = Blockly.Arduino.valueToCode(this, "S_VALUE",
                Blockly.Arduino.ORDER_NONE) || '0';
    var v = Blockly.Arduino.valueToCode(this, "V_VALUE",
                Blockly.Arduino.ORDER_NONE) || '0';
    var code = led_type+'.setPixelColor('+led_num+', Adafruit_NeoPixel::ColorHSV('+h+', '+s+', '+v+'));\n';
    return code;
};
Blockly.Arduino.LedShow = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var led_type = this.getFieldValue('LED_TYPE');
    Blockly.Arduino.setups_[led_type+'begin'] = led_type+'.begin();'
    var code = led_type+'.show();\n';
    return code;
};
Blockly.Arduino.LedClear = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var led_type = this.getFieldValue('LED_TYPE');
    Blockly.Arduino.setups_[led_type+'begin'] = led_type+'.begin();'
    var code = led_type+'.clear();\n';
    return code;
};
Blockly.Arduino.LedSetBrightness = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var led_type = this.getFieldValue('LED_TYPE');
    Blockly.Arduino.setups_[led_type+'begin'] = led_type+'.begin();'
    var brightness = Blockly.Arduino.valueToCode(this, "BRIGHTNESS",
                Blockly.Arduino.ORDER_NONE) || '255';
    var code = led_type+'.setBrightness('+brightness+');\n';
    return code;
};
/**************MECH***************/
Blockly.Arduino.MechInit = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var code = '';
    var mu = this.getFieldValue('MU');
    var mu_port = this.getFieldValue('MU_PORT');
    var claw = this.getFieldValue('CLAW');
    var upper_arm = this.getFieldValue('UPPER_ARM');
    var lower_arm = this.getFieldValue('LOWER_ARM');
    Blockly.Arduino.definitions_['var_vs2_mu'+mu] = 'MuVisionSensor Mu'+mu+'(0x60);';
    Blockly.Arduino.definitions_['MoonMECH'] = 'MoonBotMECH mech(Mu'+mu+', m_servo['+claw+'], m_servo['+lower_arm+'], m_servo['+upper_arm+']);';
    Blockly.Arduino.setups_['servo_'+claw+'_begin'] = 'm_servo['+claw+'].attach('+claw+');';
    Blockly.Arduino.setups_['servo_'+upper_arm+'_begin'] = 'm_servo['+upper_arm+'].attach('+upper_arm+');';
    Blockly.Arduino.setups_['servo_'+lower_arm+'_begin'] = 'm_servo['+lower_arm+'].attach('+lower_arm+');';

    code += 'Mu'+mu+'.begin(&'+mu_port+', kSerialMode);\n';
    return code;
};
Blockly.Arduino.MechSetBallX = function() {
    var ball_x = Blockly.Arduino.valueToCode(this, 'BALL_X',
                    Blockly.Arduino.ORDER_NONE) || '50';
    var code = 'mech.ball_center_x_ = '+ball_x+';\n';
    return code;
};
Blockly.Arduino.MechSetGrabBallY = function() {
    var ball_y = Blockly.Arduino.valueToCode(this, 'BALL_Y',
                    Blockly.Arduino.ORDER_NONE) || '70';
    var code = 'mech.ball_grab_y_ = '+ball_y+';\n';
    return code;
};
Blockly.Arduino.MechSetCardX = function() {
    var card_x = Blockly.Arduino.valueToCode(this, 'CARD_X',
                    Blockly.Arduino.ORDER_NONE) || '50';
    var code = 'mech.card_center_x_ = '+card_x+';\n';
    return code;
};
Blockly.Arduino.MechSetShootCardWidth = function() {
    var ball_x = Blockly.Arduino.valueToCode(this, 'CARD_WIDTH',
                    Blockly.Arduino.ORDER_NONE) || '48';
    var code = 'mech.shoot_card_width_ = '+ball_x+';\n';
    return code;
};
Blockly.Arduino.MechSearchBall = function() {
    var code = 'mech.searchBall()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.MechGrabBall = function() {
    var code = '\
[]()->bool{\
  for(;;) {\
    switch(mech.grabBall()) {\
      case kGrabedBall:\
        return true;\
      case kUndetectBall:\
        return false;\
      default:\
        return false;\
    }\
  }\
}';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.MechSearchCard = function() {
    var card_type = this.getFieldValue('CARD_TYPE');
    Blockly.Arduino.setups_['MECHSearchCardType'] = 'mech.card_type_ = '+card_type+';';
    var code = '\
[]()->bool{\
  while(!mech.searchCard());\
  return true;\
}';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.MechShootBall = function() {
    var code = '\
[]()->bool{\
  for(;;) {\
    switch(mech.shootBall()) {\
      case kShootedBall:\
        return true;\
      case kUndetectCard:\
        return false;\
      default:\
        return false;\
    }\
  }\
}';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/**************BOT***************/
Blockly.Arduino.BotInit = function() {
    Blockly.Arduino.definitions_[key_include_moonbot] = '#include <MoonBot.h>';
    var code = '';
    var head = this.getFieldValue('HEAD');
    var left_arm = this.getFieldValue('LEFT_ARM');
    var right_arm = this.getFieldValue('RIGHT_ARM');
    Blockly.Arduino.definitions_['MoonMECH'] = 'MoonBotHumannoid moonbot(Mu, m_servo['+head+'], m_servo['+left_arm+'], m_servo['+right_arm+']);';
    Blockly.Arduino.setups_['servo_'+head+'_begin'] = 'm_servo['+head+'].attach('+head+');';
    Blockly.Arduino.setups_['servo_'+left_arm+'_begin'] = 'm_servo['+left_arm+'].attach('+left_arm+');';
    Blockly.Arduino.setups_['servo_'+right_arm+'_begin'] = 'm_servo['+right_arm+'].attach('+right_arm+');';
    if (Blockly.Arduino.setups_[key_tankbase_begin] == undefined) {
        Blockly.Arduino.setups_[key_tankbase_begin] = 'TankBase.begin();';
    }
    return code;
};
Blockly.Arduino.BotShakeArm = function() {
    var arm_type = this.getFieldValue('ARM_TYPE');
    var offset = Blockly.Arduino.valueToCode(this, 'OFFSET',
                Blockly.Arduino.ORDER_NONE) || '10';
    var wait = this.getFieldValue('WAIT');
    var code = 'moonbot.armShake('+arm_type+', '+offset+', '+wait+');\n';
    return code;
};
Blockly.Arduino.BotSwing = function() {
    var motor_type = this.getFieldValue('MOTOR_TYPE');
    var wait = this.getFieldValue('WAIT');
    var code = 'moonbot.swing('+motor_type+', '+wait+', 100);\n';
    return code;
};
Blockly.Arduino.BotShakeBody = function() {
    var speed = this.getFieldValue('SPEED');
    var time = Blockly.Arduino.valueToCode(this, 'TIME',
    Blockly.Arduino.ORDER_NONE) || '500';
    var code = 'moonbot.bodyShake('+speed+', '+time+');\n';
    return code;
};
Blockly.Arduino.BotTwistBody = function() {
    var speed = this.getFieldValue('SPEED');
    var time = Blockly.Arduino.valueToCode(this, 'TIME',
    Blockly.Arduino.ORDER_NONE) || '500';
    var code = 'moonbot.bodyTwist('+speed+', '+time+');\n';
    return code;
};



