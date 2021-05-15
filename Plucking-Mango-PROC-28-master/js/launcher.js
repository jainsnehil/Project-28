class Launcher{
	constructor(bodyA,pointB){
		var options={
			bodyA:bodyA,
			pointB:pointB,
			stiffness:0.03,
			length:10
		}
		this.sling=Constraint.create(options)
		World.add(world,this.sling)
	}
	fly(){
		this.sling.bodyA=null
	}
	attach(body){
		this.sling.bodyA=body
	}
	display(){
		if(this.sling.bodyA){
		var body=this.sling.bodyA
		var point=this.sling.pointB
		strokeWeight(2)
		line(body.position.x,body.position.y,point.x,point.y)
		}
	}
}