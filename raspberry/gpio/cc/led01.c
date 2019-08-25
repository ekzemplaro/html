// -------------------------------------------------------------------
//	led01.c
//
//						Dec/29/2016
// -------------------------------------------------------------------
#include <wiringPi.h>

int main (void)
{
	int it;

	wiringPiSetupGpio ();

	pinMode (16,OUTPUT);
	pinMode (12,OUTPUT);

	for (it=0; it< 5; it++)
		{
		digitalWrite (16,HIGH);
		delay (250);
		digitalWrite (12,HIGH);

		delay (500);
		digitalWrite (16,LOW);
		delay (250);
		digitalWrite (12,LOW);
		delay (500);
		}


}

// -------------------------------------------------------------------
