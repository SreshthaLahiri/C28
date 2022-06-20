class Slingshot {
  constructor(bodyA,pointB){
     var options={
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 0.11,
        length : 11,
    }
    this.sling = Constraint.create(options);
    this.pointB = pointB
    World.add(world,this.sling);

   }
  display(){
   if (this.sling.bodyA){
      var posA = this.sling.bodyA.position;
      var posB = this.pointB ;
      strokeWeight(3);
      line(posA.x,posA.y,posB.x,posB.y) ;
   }
   
   }
  fly(){
    this.sling.bodyA = null ;



  }

}