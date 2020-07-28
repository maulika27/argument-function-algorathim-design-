function bounceOff(sample1, sample2){
    if(sample1.x - sample2.x < sample1.width/2 + sample2.width/2
      && sample2.x - sample1.x < sample1.width/2 + sample2.width/2){
        sample2.velocityX = (-1)*sample2.velocityX;
        sample1.velocityX = (-1)*sample1.velocityX;
      }
    
      if(sample1.y - sample2.y < sample1.height/2 + sample2.height/2
        && sample2.y - sample1.y < sample1.height/2 + sample2.height/2){
          sample2.velocityY = (-1)*sample2.velocityY;
          sample1.velocityY = (-1)*sample1.velocityY;
        }
    
      }