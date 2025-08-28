---
layout: post
title:  Fourier Analysis Presentation
date:   2023-02-25
description: A presentation given for the Western Washington Community College Student Mathematics Conference
tags:
categories:
---

This is an example post with image galleries.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/9.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/7.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A simple, elegant caption looks good between image rows, after each row, or doesn't have to be there at all.
</div>

Images can be made zoomable.
Simply add `data-zoomable` to `<img>` tags that you want to make zoomable.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/8.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/10.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

The rest of the images in this post are all zoomable, arranged into different mini-galleries.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/12.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/7.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>


<!-- In February of 2023 I gave this presentation on Fourier Analysis for the Western Washington Community College Student Mathematics Conference. It was typeset using LaTeX and the beamer package.

<div style="width: 100%; height: auto; margin: auto;">
  <object 
    data="/assets/pdf/fourier_series_presentation_no_enumeration.pdf" 
    type="application/pdf" 
    style="width: 100%; height: 700px; border: none;">
  </object>
</div>

Example 1: Fourier Approximation [(Source)](https://www.shadertoy.com/view/ltKSWD)
{% include video.liquid 
path="assets/video/fourier-interp.mp4" 
class="w-100 h-auto rounded shadow" 
controls=true %}

Example 2: Fourier Interpolation [(Source)](https://www.shadertoy.com/view/4lGSDw)
{% include video.liquid 
path="assets/video/fourier-trans.mp4" 
class="w-100 h-auto rounded shadow" 
controls=true %}

Rendering of 1, 5 and 50 epicycles
{% include video.liquid 
path="assets/video/fs_visualization_1_5_50_epicycles.mp4" 
class="w-100 h-auto rounded shadow" 
controls=true %}

Source code (p5.js):
```python
let time = 0;
let wave = [[],[],[]]

// white, red, purple, blue, green, another blue
let colors = [[255, 255, 255], [220, 20, 60], [255, 204, 60], [100, 255, 100], [100, 100, 255], [0, 200, 100]];


function setup() {
  createCanvas(1920, 1080);
  strokeWeight(2);
}

function draw() {
  background(0);
  draw_wave(1, 200, 0);
  draw_wave(5, 300, 1);
  draw_wave(50, 300, 2);

  time += 0.015;
}

function draw_wave(epicycles, translate_y, wave_num) {
  translate(250, translate_y);

  //for coloring the epicycles
  let color_index = 0;

  let x = 0;
  let y = 0;
  //draws wave with specified number of epicycles
  for(let i = 0; i < epicycles; i++) {
    let stroke_red = colors[color_index][0]
    let stroke_green = colors[color_index][1]
    let stroke_blue = colors[color_index][2]

    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    let radius = 100 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);    

    //draws epicycle circles
    stroke(stroke_red, stroke_blue, stroke_green, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2)
    
    //draws points on circles
    fill(255);
    stroke(stroke_red, stroke_blue, stroke_green);
    line(prevx, prevy, x, y);
    ellipse(x, y, 2);
    
    color_index++;
      if(color_index > 5) {
        color_index = 1;
      }
  }

  // appends y coordinate to the beginning of the array
  wave[wave_num].unshift(y);
  
  stroke(255);
  translate(400, 0);
  line(x - 400, y, 0, wave[wave_num][0]);

  beginShape();
  noFill();
  for(let i = 0; i < wave[wave_num].length; i++) {
    vertex(i, wave[wave_num][i]);
  }
  endShape();

  // prevents array from being filled infinitely
  if(wave[0].length > 1500) {
    wave[0].pop();
  }
  if(wave[1].length > 1500) {
    wave[1].pop();
  }
  if(wave[2].length > 1500) {
    wave[2].pop();
  }

  // resets position
  translate(-650, 0);
}
``` -->