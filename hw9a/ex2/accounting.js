module.exports = function(  name  )
{
	this.mName = name;
	this.mBalance = 0;
	this.credit = function( credit )
	{
		this.mBalance += credit;
	};
	this.describe = function()
	{
		return "owner: " + this.mName +
		", balance: " + this.mBalance;
	}
};
	
