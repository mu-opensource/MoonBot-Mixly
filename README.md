[![Morpx-bbs](http://bbs.morpx.com/template/mu/images/logo.png)](http://bbs.morpx.com/forum.php)
[![Git-rep](https://img.shields.io/github/repo-size/mu-opensource/MoonBot-Mixly.svg)](https://github.com/mu-opensource/MoonBot-Mixly)
[![Git-release](https://img.shields.io/github/downloads/mu-opensource/MoonBot-Mixly/total.svg)](https://github.com/mu-opensource/MoonBot-Mixly/releases)


# MoonBot

[![Pic-MoonBot](http://mai.morpx.com/images/moonbot/moonbot.png)](http://mai.morpx.com/)

MoonBot is a robot kit designed and developed by Morpx Inc.

The goal of MoonBot is to inspire kids to connect what they learned in school to projects that have real world impacts. MoonBot is equipped with state-of-the-art AI sensing technology, making it one of the smartest robots on the market.

This repository will share all the open-source code running on MoonBot, as well as its instruction manuals, example programs, etc.

You can use these libraries to read data or set properties of the MU Vision Sensor.


## Usage

### Before you use

Before you use **MoonBot** Mixly library, you need install the following library first in arduino `[mixly_path]/arduino-1.x.x/arduino.exe`:

[`How to Installing Additional Arduino Libraries?`](https://www.arduino.cc/en/Guide/Libraries/?setlang=en)
* [Servo](https://www.ardu-badge.com/Servo)
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [AsyncDelay](https://www.ardu-badge.com/AsyncDelay)
* SoftwareSerial
* [SoftwareWire](https://www.ardu-badge.com/SoftwareWire)
* Wire

and install [MuVisionSensorIII-Mixly](https://github.com/mu-opensource/MuVisionSensorIII).

### Supported chipsets

We have included code for **Arduino ATmega 1280** only, **DO NOT** use moonbot library on other Arduino chips. 
