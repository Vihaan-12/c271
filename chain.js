class chain {

constructor(bodyA, bodyB) {

    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:10
    
    }
    this.chain=Constraint.create(options);
    World.add(world, this.chain);

}

display () {
var varA = this.chain.bodyA.position;
var varB = this.chain.bodyB.position;

strokeWeight(3);
line(varA.x,varA.y,varB.x,varB.y);

}

}