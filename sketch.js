var vids = [];
var choice = 0;
var playing = true;
var randomChoice;


function preload() {
	vids[0] = createVideo('vids/vid1.mp4');
  vids[0].volume(0);
  vids[0].hide();
  vids[1] = createVideo('vids/vid2.mp4');
  vids[1].volume(0);
  vids[1].hide();
  vids[2] = createVideo('vids/vid3.mp4');
  vids[2].volume(0);
  vids[2].hide();
}

function setup() {

}





function mousePressed(){ 
  randomChoice = int(random(vids.length));
  vids[randomChoice].show();
 	vids[randomChoice].loop();
}

function mouseReleased(){  
  vids[randomChoice].hide();
  vids[randomChoice].pause();
}
