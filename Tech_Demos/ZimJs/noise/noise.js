const frame = new Frame("fit", 1024, 768, darker, dark);
frame.on("ready", ()=>{ // ES6 Arrow Function - similar to function(){}
    zog("ready from ZIM Frame"); // logs in console (F12 - choose console)

    // often need below - so consider it part of the template
    let stage = frame.stage;
    let stageW = frame.width;
    let stageH = frame.height;

    // REFERENCES for ZIM at http://zimjs.com
    // see http://zimjs.com/learn.html for video and code tutorials
    // see http://zimjs.com/docs.html for documentation
    // see https://www.youtube.com/watch?v=pUjHFptXspM for INTRO to ZIM
    // see https://www.youtube.com/watch?v=v7OT0YrDWiY for INTRO to CODE

    // CODE HERE
   
    // this is where we draw the image
    var shape = new Shape(stageW, stageH).addTo(stage);
    var g = shape.graphics; // a reference to the shape's graphics property

    // this will hold the image as we fade out
    var bitmap = new Bitmap().addTo(stage);

    // Noise gives us equations that look random but actually relate
    var noise = new Noise();

    // noise.simplex1D(i)
    // when we use 1D and pass in an incremental value such as an x value
    // we get results between -1 and 1 which we can use to plot a y value
    // this gives us a curve like mountains for instance

    // noise.simplex2D(i,j)
    // when we have a second parameter, we can shift this curve
    // the smaller j is the more the curve will relate to the last curve
    // we will use simplex2D(i,j)

    // Similarily, 3D will give us blobs and 4D gives us animated blobs

    let bumps = 5; // the starting number of bumps (see dialBumps)
    let curveFactor = .8; // the starting curve factor (see dialCurve)

    // these could be controlled by dial or sliders as well
    const size = 300; // max height (amplitude) of curve
    const step = .015; // how much to advance through the noise to get to next line

    let j = 0; // second parameter for simplex2D that increases by the step
    let count = 0; // ticker count - used to fade out old lines
    const damp = new Damp(bumps, .01); // optional damping for the change of bumps
    let curve; // used to keep track of the amount of curve set by the bezier controls

    Ticker.add(function() {
      count++;
      j += step; // increase second parameter by just a little to animate the line

      g.s(convertColor(picker.selectedColor, "rgba", .2)).ss(2); // set stroke (color) and stroke style (thickness)

      // draw a curve through each bump using horizontal bezier handles as wide as the curve factor
      // this is why when the curve is 0 it looks like teeth or mountains - no curve handles
      // end the curve 100 pixels in where we will place the dials
      let lastX = 0;
      let lastY = stageH/2;
      curve = stageW/bumps/2*dialCurve.currentValue;
      loop(bumps, function(i) { // last line we will draw to middle of stageH
        let x = i*(stageW-100)/bumps;
        let y = stageH/2 + noise.simplex2D(i,j)*size;
        if (i==0) g.mt(0, y);
              // controlPointX and Y, second controlPointX and Y, pointX and Y
              else g.bt(lastX+curve, lastY, x-curve, y, x, y);
        lastX = x;
        lastY = y;
      });
      // finish the line at the position of the dials
      x = stageW-100;
      y = stageH/2;
      g.bt(lastX+curve, lastY, x-curve, y, x, y); // last line

      // if 100 lines drawn then copy the shape to a bitmap
      // fade the bitmap out
      // and clear the shape to start over
      if (count%100==0) {
        shape.cache(0,0,stageW,stageH);
        bitmap.image = shape.cacheCanvas;
        bitmap.alpha = 1;
        bitmap.animate({alpha:0}, 2000);
        shape.uncache();
        g.c();
      }
      // you can try this without the damping to see what happens
      // the damping gives a smoother transition
      bumps = damp.convert(dialBumps.currentValue);
    });

    const dialBumps = new Dial({
        color:blue,
        useTicks:false,
        step:0,
        min:1,
        max:10,
        indicatorScale:.6
    }).center().mov(420);
    dialBumps.indicator.alp(.6)
    dialBumps.currentValue = bumps;

    const dialCurve = new Dial({
        width:65,
        color:green,
        useTicks:false,
        step:0,
        min:0,
        max:4
    }).center().mov(420);
    dialCurve.indicator.alp(.6)
    dialCurve.currentValue = curveFactor;

    const picker = new ColorPicker({
        width:300,
        colors:[green, blue, yellow, orange, red, purple, pink, white],
        circles:"true",
        backingColor:darker,
        cols:8
    }).center().mov(-100, 320);

    const checkBox = new CheckBox({
        label:new Label({text:"cycle", color:white, valign:"center", size:40}).alp(.6),
        startChecked:true
    })
        .pos(picker.x+picker.width+50, picker.y+3, stage)
        .sca(.6);

    const cycleInterval = interval(2000, ()=>{
        picker.selectedIndex = (picker.selectedIndex+1)%picker.colors.length;
    });
    checkBox.on("change", ()=>{
        cycleInterval.pause(!cycleInterval.paused);
    });


    new Label({
        text:"Noise controlled by blue dial (bumps) and green dial (curvature)",
        color:white
    })
        .pos(30,50,stage)
        .alp(.7)
        .sca(.7);

    stage.update(); // this is needed to show any changes
  
    // DOCS FOR ITEMS USED
    // http://zimjs.com/docs.html?item=shape
    // http://zimjs.com/docs.html?item=bitmap
    // http://zimjs.com/docs.html?item=noise
    // http://zimjs.com/docs.html?item=damp
    // http://zimjs.com/docs.html?item=loop
    // http://zimjs.com/docs.html?item=animate
    // http://zimjs.com/docs.html?item=dial
    // http://zimjs.com/docs.html?item=colorpicker
    // http://zimjs.com/docs.html?item=checkbox
    // http://zimjs.com/docs.html?item=label
    // http://zimjs.com/docs.html?item=center
    // http://zimjs.com/docs.html?item=pos
    // http://zimjs.com/docs.html?item=addto
    // http://zimjs.com/docs.html?item=frame
  
    // FOOTER
    // call remote script to make ZIM Foundation for Creative Coding icon
    createIcon(frame, 784, 624); 

}); // end of ready


Resources1×0.5×0.25×Rerun