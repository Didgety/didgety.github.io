---
layout: post
title:  Chladni Plate Particle Simulation
date:   2023-09-20
description: Visualizing some fun physics phenomena
tags:
categories:
---

Chladni patterns are cool. I first read about them on [Paul Bourke's blog](https://paulbourke.net/geometry/chladni/). Essentially, they are patterns that arise from certain frequencies on a bounded surface. The classic example is a violin bow pulled across the edge of a metal plate with salt on it.

{% include video.liquid path="https://www.youtube.com/embed/lRFysSAxWxI" 
class="w-100 rounded shadow" 
height=450
controls=true %}

Chladni patterns fall under the umbrella of the field of cymatics. There are similar phenomena that can be observed all over. For example, in fluids there are faraday waves. One of my favorite demonstrations of this branch of physics is this [youtube video](https://www.youtube.com/watch?v=KijiWlTJp3Y) which unfortunately does not allow playback when embedded.

The equation for Chladni patterns on a rectangular bounded surface is given by:

$$ \Bigl[\cos\left(\frac{n\pi x}{L}\right)\cdot\cos\left(\frac{m\pi y}{L}\right)\Bigr] - \Bigl[\cos\left(\frac{m\pi x}{L}\right)\cdot\cos\left(\frac{n\pi y}{L}\right)\Bigr] = 0 $$

This equation was recreated using the [Math](https://derivative.ca/UserGuide/Math_CHOP) and [Function](https://docs.derivative.ca/Function_CHOP) CHOPs in [TouchDesigner](https://derivative.ca/). Adding two more channels allowed it to be represented as a 2D texture using [CHOP to TOP](https://docs.derivative.ca/CHOP_to_TOP). A few more tweaks to clean up the texture and a nice normal map was created using the [Normal Map](https://docs.derivative.ca/Normal_Map_TOP) TOP. The normal map provides the velocity at any given point in the texture.

All that's left is to create a particle system. This was achieved using some noise and a GLSL shader to utilize the information encoded in the normal map that was just created. 2D noise was created with the [Noise](https://docs.derivative.ca/Noise_TOP) TOP and fed into a [GLSL Multi](https://docs.derivative.ca/GLSL_Multi_TOP) TOP along with a [Feedback](https://docs.derivative.ca/Feedback_TOP) TOP. 

The shader code:
```glsl
out vec4 fragColor;

uniform float speed;

uniform vec2 vel_add;
uniform vec2 vel_scalar;

uniform vec2 pos_add;
uniform vec2 pos_scalar;
uniform vec2 pos_add_vel_toggle;
uniform vec2 pos_vel_scalar;

void main()
{
    // sTD2DInputs are the incoming TOP connections
    // [0] - Feedback TOP
    // [1] - Noise TOP (Initial state)
    // [2] - Normal Map TOP (Provides the velocity information)
	vec4 position = texture(sTD2DInputs[0], vUV.st);
	vec4 initial = texture(sTD2DInputs[1], vUV.st);
	vec4 velocity = texture(sTD2DInputs[2], position.xy / 2 + .5);

	velocity = velocity * 2.0 - 1.0;

	vec2 derivative = vec2(dFdx(position.r), dFdy(position.y));

	// velocity modifier
	velocity.st += derivative * .05;
	velocity.x += vel_add.x;
	velocity.y += vel_add.y;
	velocity.x *= vel_scalar.x;
	velocity.y *= vel_scalar.y;
	// position modifiers
	position.x += pos_add.x;
	position.y += pos_add.y;
	position.x *= pos_scalar.x;
	position.y *= pos_scalar.y;

	// adds current particle velocity to particle if uniform value is set to 1
	if(pos_add_vel_toggle.x == 1) {
		position.x += velocity.x * pos_vel_scalar.x;
	}
	if(pos_add_vel_toggle.y == 1) {
		position.y += velocity.y * pos_vel_scalar.y;
	}

	position += velocity * speed;

    // reset particle position if out of bounds
	if (position.x < -.995 || position.x > .995 || position.y < -.995 || position.y > .995) {
		position = initial;
	}
	
	fragColor = TDOutputSwizzle(position);
}
```

TouchDesigner provides a useful interface for modifying the values of GLSL uniforms through its GUI while also allowing them to be modified in real time through automation. I really love how this program provides the flexibility to experiment rapidly while also providing low level access. There is even a C++ API available for writing custom operators.

At this point, I have a 2D texture with all the information needed to create a particle system. Particles can easily be instantiated using the [Add](https://docs.derivative.ca/Add_SOP) SOP hooked up to a [Geometry](https://docs.derivative.ca/Geometry_COMP) COMP. Hooking up the output from the GLSL Multi TOP in the instantiation menu of the Geometry COMP gives a working particle system. (It's a little bit more complicated than that, but this isn't meant to be a TouchDesigner tutorial)

{% include video.liquid path="https://www.youtube.com/embed/_lBAmrzcgJ0"
class="w-100 rounded shadow" 
height=450
controls=true %}

It's got a bit of flashing from the automation being applied - but that is used when more effects are applied. The magic of TouchDesigner is layering your components to get really interesting visual effects. After experimenting with this base for a while, I hooked up one of my favorite effects to some music to create an audioreactive animation being rendered in real time. Information was extracted from specific frequencies of the audio to drive different parameters. For example, the kick drum for this song was read slightly below 100Hz to power the pulsing animation change.

Resolution is limited since I used the Non-Commercial license of TouchDesigner.  

{% include video.liquid path="https://www.youtube.com/embed/3auqchAobKA"
class="w-100 rounded shadow" 
height=450
controls=true %}