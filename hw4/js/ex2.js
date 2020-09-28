function ModelCircle()
{
	const r = Number( prompt("Enter the circle radius:") );
	
	var circle =
	{
		mRadius: r,
		circumference : function()
		{
			return 2 * Math.PI * this.mRadius;
		},
		area : function()
		{
			return Math.PI * this.mRadius * this.mRadius;
		}
	};
	
	console.log( "Its circumference is " + circle.circumference() );
	console.log( "Its area is " + circle.area() );
}