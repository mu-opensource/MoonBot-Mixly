/*
 * MoonBot_Eyes.h
 *
 *  Created on: 2019年5月23日
 *      Author: ysq
 */

#ifndef MOONBOT_SRC_MOONBOT_EYES_H_
#define MOONBOT_SRC_MOONBOT_EYES_H_

#include <Adafruit_NeoPixel.h>

// LED action
void colorFade(Adafruit_NeoPixel& led,
               uint8_t r, uint8_t g, uint8_t b,
               uint8_t wait);
// Fill the dots one after the other with a color
void colorWipe(Adafruit_NeoPixel& led, uint32_t c, uint8_t wait);
void rainbow(Adafruit_NeoPixel& led, uint8_t wait);
// Slightly different, this makes the rainbow equally distributed throughout
void rainbowCycle(Adafruit_NeoPixel& led, uint8_t wait) ;
//Theatre-style crawling lights.
void theaterChase(Adafruit_NeoPixel& led, uint32_t c, uint8_t wait);
//Theatre-style crawling lights with rainbow effect
void theaterChaseRainbow(Adafruit_NeoPixel& led, uint8_t wait);
// Input a value 0 to 255 to get a color value.
// The colours are a transition r - g - b - back to r.
uint32_t WheelColor(Adafruit_NeoPixel& led, byte WheelPos);



#endif /* MOONBOT_SRC_MOONBOT_EYES_H_ */
