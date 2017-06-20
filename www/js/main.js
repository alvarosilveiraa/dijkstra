let dijkstra = new Dijkstra();


dikstra.insert('A', 'B', 10)
dikstra.insert('A', 'D', 30)
dikstra.insert('A', 'E', 100)
dikstra.insert('B', 'C', 50)
dikstra.insert('C', 'E', 10)
dikstra.insert('D', 'C', 20)
dikstra.insert('D', 'E', 60)


// distances
{
	's': 0,
	'2': Infinity,
	'6': Infinity,
	'7': Infinity,
	'3': Infinity,
	'5': Infinity,
	'4': Infinity,
	'y': Infinity
}

// links
{
	's': '',
	'2': '',
	'6': '',
	'7': '',
	'3': '',
	'5': '',
	'4': '',
	'y': ''
}

// heap
{
	's': 0,
	'2': Infinity,
	'6': Infinity,
	'7': Infinity,
	'3': Infinity,
	'5': Infinity,
	'4': Infinity,
	'y': Infinity
}

// while(heap) {
	// let lass
	// for(let i; heap)
	// distances[lass] + (distance)origin[lass]-destination[i] < distances[i]
	// distances[i] = distances[less] + (distance)origin[less]-destination[i]
	// links[i] = less
	// update heap[i] = distances[i]
// }


/****************************/
// base
[
	{
		'origin': 's',
		'destination': '2',
		'distance': 9
	},
	{
		'origin': 's',
		'destination': '6',
		'distance': 14
	},
	{
		'origin': 's',
		'destination': '7',
		'distance': 15
	},
	{
		'origin': '2',
		'destination': '3',
		'distance': 23
	},
	{
		'origin': '6',
		'destination': '3',
		'distance': 18
	},
	{
		'origin': '6',
		'destination': '5',
		'distance': 30
	},
	{
		'origin': '6',
		'destination': '7',
		'distance': 5
	},
	{
		'origin': '7',
		'destination': '5',
		'distance': 20
	},
	{
		'origin': '7',
		'destination': 't',
		'distance': 44
	},
	{
		'origin': '3',
		'destination': '5',
		'distance': 2
	},
	{
		'origin': '3',
		'destination': 't',
		'distance': 19
	},
	{
		'origin': '5',
		'destination': '4',
		'distance': 11
	},
	{
		'origin': '5',
		'destination': 't',
		'distance': 16
	},
	{
		'origin': '4',
		'destination': '3',
		'distance': '6'
	},
	{
		'origin': '4',
		'destination': 't',
		'distance': 6
	}
]
