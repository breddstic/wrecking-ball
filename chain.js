class Chain {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250,
        }
        this.chain = Constraint.create(options)
            World.add(world,this.chain)
            this.pointB = pointB
    }
    display(){
        strokeWeight(3)
        stroke ("silver")
        line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}

