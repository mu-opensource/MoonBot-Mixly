/*
 * MoonBot_Rover.cpp
 *
 *  Created on: 2019年4月21日
 *      Author: ysq
 */
#include <MoonBot_Rover.h>
#include <Adafruit_NeoPixel.h>
#include <MoonBot_TankBase.h>
#include <MoonBot_Eyes.h>

extern Adafruit_NeoPixel onBoardLED;
extern MoonBotTankBase TankBase;
extern Adafruit_NeoPixel moonbot_eyes;

MoonBotRover::MoonBotRover(MuVisionSensor& mu)
    : Mu_(mu) {
}

MoonBotRover::~MoonBotRover(void) {
  end();
}

int MoonBotRover::begin(void) {
  mu_err_t err;
  err = Mu_.VisionBegin(VISION_TRAFFIC_CARD_DETECT);
  if (err) return err;
  err = Mu_.VisionBegin(VISION_NUM_CARD_DETECT);
  if (err) return err;
  err = Mu_.VisionSetLevel(VISION_TRAFFIC_CARD_DETECT, kLevelAccuracy);
  if (err) return err;
  err = Mu_.VisionSetLevel(VISION_NUM_CARD_DETECT, kLevelAccuracy);
  return err;
}

void MoonBotRover::end(void) {
  Mu_.VisionEnd(VISION_TRAFFIC_CARD_DETECT);
  Mu_.VisionEnd(VISION_NUM_CARD_DETECT);
  TankBase.write(0, 0);
}

void MoonBotRover::runTrafficOnly(void) {
  if ((Mu_.UpdateResult(VISION_TRAFFIC_CARD_DETECT, false)&VISION_TRAFFIC_CARD_DETECT)
      && Mu_.read(VISION_TRAFFIC_CARD_DETECT, kStatus)) {
    switch (Mu_.read(VISION_TRAFFIC_CARD_DETECT, kLabel)) {
      case MU_TRAFFIC_CARD_FORWARD:
        TankBase.writeRpm(30, 30);
        break;
      case MU_TRAFFIC_CARD_LEFT:
        TankBase.writeAngle(-30, 90);
        break;
      case MU_TRAFFIC_CARD_RIGHT:
        TankBase.writeAngle(30, 90);
        break;
      case MU_TRAFFIC_CARD_TURN_AROUND:
        TankBase.writeAngle(30, 180);
        break;
      case MU_TRAFFIC_CARD_PARK:
        TankBase.write(0, 0);
        break;
      default:
        break;
    }
  }
}

void MoonBotRover::runTrafficNumber(void) {
  if ((Mu_.UpdateResult(VISION_TRAFFIC_CARD_DETECT, false)&VISION_TRAFFIC_CARD_DETECT)
      && Mu_.read(VISION_TRAFFIC_CARD_DETECT, kStatus)) {
    int traffic_label = Mu_.GetValue(VISION_TRAFFIC_CARD_DETECT, kLabel);
    tone(tone_pin_, 500, 200);
    onBoardLED.fill(0x204000, 0, 0);
    onBoardLED.show();
    delay(200);
    onBoardLED.clear();
    onBoardLED.show();
    switch (traffic_label) {
      case MU_TRAFFIC_CARD_TURN_AROUND:
        for (int i = 0; i < 2; ++i) {
          MoonBotEyesCircle(moonbot_eyes,
                            Adafruit_NeoPixel::Color(0, 175, 100),
                            kEyesBoth,
                            60);
        }
        moonbot_eyes.clear();
        moonbot_eyes.show();
        TankBase.writeAngle(30, 180);
        while(TankBase.read(kLeftMotor)&&TankBase.read(kRightMotor));
        return;
      case MU_TRAFFIC_CARD_PARK:
        moonbot_eyes.fill(Adafruit_NeoPixel::Color(220, 0, 30),
                          0, 0);
        moonbot_eyes.show();
        TankBase.write(0, 0);
        delay(500);
        moonbot_eyes.clear();
        moonbot_eyes.show();
        return;
      default:
        TankBase.write(0, 0);
        break;
    }
    unsigned long start_time = millis();
    int num = 0;
    static const int kPausePeriod = 600;
    while (millis()-start_time < kPausePeriod) {
      if (Mu_.GetValue(VISION_NUM_CARD_DETECT, kStatus)) {
        tone(tone_pin_, 1000, 400);
        onBoardLED.fill(0x204010, 0, 0);
        onBoardLED.show();
        delay(400);
        onBoardLED.clear();
        onBoardLED.show();
        num = Mu_.GetValue(VISION_NUM_CARD_DETECT, kLabel);
        break;
      }
    }
    if (num > 0) {
      switch (traffic_label) {
        case MU_TRAFFIC_CARD_FORWARD:
          TankBase.writeDistance(30, num*10);
          MoonBotEyesScroll(moonbot_eyes, kEyesScrollUp,
                            Adafruit_NeoPixel::Color(0, 175, 100), 50);
          while(TankBase.read(kLeftMotor)&&TankBase.read(kRightMotor));
          break;
        case MU_TRAFFIC_CARD_LEFT:
          TankBase.writeAngle(-30, num*90);
          MoonBotEyesScroll(moonbot_eyes, kEyesScrollLeft,
                            Adafruit_NeoPixel::Color(0, 175, 100), 50);
          while(TankBase.read(kLeftMotor)&&TankBase.read(kRightMotor));
          break;
        case MU_TRAFFIC_CARD_RIGHT:
          TankBase.writeAngle(30, num*90);
          MoonBotEyesScroll(moonbot_eyes, kEyesScrollRight,
                            Adafruit_NeoPixel::Color(0, 175, 100), 50);
          while(TankBase.read(kLeftMotor)&&TankBase.read(kRightMotor));
          break;
        default:
          return;
      }
    } else {
      switch (traffic_label) {
        case MU_TRAFFIC_CARD_FORWARD:
          TankBase.writeRpm(30, 30);
          MoonBotEyesScroll(moonbot_eyes, kEyesScrollUp,
                            Adafruit_NeoPixel::Color(0, 175, 100), 50);
          break;
        case MU_TRAFFIC_CARD_LEFT:
          TankBase.writeRpm(-30, 30);
          for (int i = 0; i < 3; ++i) {
            moonbot_eyes.fill(Adafruit_NeoPixel::Color(230, 140, 0), 6, 6);
            moonbot_eyes.show();
            delay(300);
            moonbot_eyes.clear();
            moonbot_eyes.show();
            delay(300);
          }
          break;
        case MU_TRAFFIC_CARD_RIGHT:
          TankBase.writeRpm(30, -30);
          for (int i = 0; i < 3; ++i) {
            moonbot_eyes.fill(Adafruit_NeoPixel::Color(230, 140, 0), 0, 6);
            moonbot_eyes.show();
            delay(300);
            moonbot_eyes.clear();
            moonbot_eyes.show();
            delay(300);
          }
          break;
        default:
          return;
      }
      delay(500);
    }
  }
}

int MoonBotRover::followBallBegin(void) {
  Mu_.CameraSetFPS(kFPSHigh);
  Mu_.VisionBegin(VISION_BALL_DETECT);
  return Mu_.VisionSetLevel(VISION_BALL_DETECT, kLevelAccuracy);
}

void MoonBotRover::followBallEnd(void) {
  Mu_.VisionEnd(VISION_BALL_DETECT);
}

void MoonBotRover::runFollowBall(void) {
  if (Mu_.UpdateResult(VISION_BALL_DETECT, false) & VISION_BALL_DETECT) {
//    printf("time = %lu\n", millis());
    MuVsVisionState* vision_state = Mu_.GetVisionState(VISION_BALL_DETECT);
    if (vision_state->detect) {
      uint8_t ball_width = vision_state->vision_result[0].width;
      ball_x_ = vision_state->vision_result[0].x_value;
//      printf("  ball_x = %hu, ball_width = %hu\n", ball_x_, ball_width);
      if (ball_x_ < ball_center_x_-10) {
        TankBase.write(-ball_search_rpm_, ball_search_rpm_);
      } else if (ball_x_ > ball_center_x_ + 10) {
        TankBase.write(ball_search_rpm_, -ball_search_rpm_);
      } else if (ball_width < 30) {
        TankBase.write(ball_search_rpm_, ball_search_rpm_);
      } else if (ball_width > 36) {
        TankBase.write(-ball_search_rpm_, -ball_search_rpm_);
      } else {
        TankBase.write(0, 0);
      }
    } else {
      TankBase.write(0, 0);
//      if (ball_x_ > ball_center_x_) {
//        TankBase.write(ball_search_rpm_, -ball_search_rpm_);
//      } else {
//        TankBase.write(-ball_search_rpm_, ball_search_rpm_);
//      }
    }
  }
}




