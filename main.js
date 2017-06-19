let dijkstra = new Dijkstra();
dijkstra.insert('a', 'b', 50);
dijkstra.ini();




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

while(heap) {
	// let lass
	// for(let i; heap)
	// distances[lass] + (distance)origin[lass]-destination[i] < distances[i]
	// distances[i] = distances[less] + (distance)origin[less]-destination[i]
	// links[i] = less
	// update heap[i] = distances[i]
}


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