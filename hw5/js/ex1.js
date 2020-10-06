class Square
{
	mSide = 0;
	constructor( side )
	{
		this.mSide = side;
	};
	getPerimeter(){ return this.mSide * 4; };
	getArea(){ return this.mSide * this.mSide; };
	getDiagonal(){ return Math.sqrt( 2 * this.mSide * this.mSide ).toFixed( 3 ); };
	getDescription(){ return "Square with side " + this.mSide + " has perimeter of " + this.getPerimeter() + ", area of " + this.getArea() + ", and diagonal of " + this.getDiagonal(); }
}

function DescribeSquares()
{
	let squares = [];
	for( var i = 0; i < 3; ++i )
	{
		squares.push( new Square( 1 + Math.floor( Math.random() * 100 ) ) );
	}
	
	alert( squares[ 0 ].getDescription() + "\n" + squares[ 1 ].getDescription() + "\n" + squares[ 2 ].getDescription() );
}