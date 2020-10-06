
function ProcessRecords()
{
//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];

	let cLastNameResults = studentList.map(
	student => {
			return {
				firstName: student.firstName,
				lastName: student.lastName,
				minScore: student.scores.reduce( ( acc, value ) => Math.min( acc, value ), student.scores[ 0 ] ),
				maxScore: student.scores.reduce( ( acc, value ) => Math.max( acc, value ), student.scores[ 0 ] ),
				avgScore: student.scores.reduce( ( acc, value ) => acc + value, 0 ) / student.scores.length
			};
		}
	);

	console.log( cLastNameResults );
}