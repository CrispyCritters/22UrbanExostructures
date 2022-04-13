var config = {
    style: 'mapbox://styles/ccritters7/cl1xle6da000214p2bf8yra7w',
    accessToken: 'pk.eyJ1IjoiY2NyaXR0ZXJzNyIsImEiOiJja3poYzA1YmEwZmNrMm9xaGZuMGR2YXQ0In0.JqqxVq8Bha1S-wGaKqlJvQ',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'chapter1',
            alignment: 'right',
            title: 'NYS Prisons Over Time',
            description: '<p> At the highest number, New York State had 70 prisons.<p>'+ '<p>List of prisons:<p>',
            image: 'images/prison list with year-01.jpg',
            location: {
                center: [-74.076,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [    
                {layer: 'PrisonLocationAll', opacity: 1},
                {layer: 'PrisonLocationClosed', opacity: 0},
                {layer: 'countiesincome', opacity: 0},
                {layer: 'countiesName',opacity: 0},
                {layer: 'PoliticalLeaning', opacity: 0},
                {layer: 'state-label',opacity: 1},
                {layer: 'labels', opacity:1 },
                {layer: 'labelsClosed', opacity:0 },
                {layer: 'PrisonCapacity', opacity:0},
                {layer: 'PrisonCapacityNumber', opacity:0}
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'chapter2',
            alignment: 'right',
            title: 'Closed Prisons',
            image: 'images/closed prison number-01.jpg',
            description: '<p> Within the past 30 years, 26 prisons are now closed.<p>'+ '<p> List of closed prisons:<p>',
            location: {
                center: [-74.076,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'PrisonLocationClosed', opacity: 1 },
                {layer: 'PrisonLocationAll', opacity: 0 },
                {layer: 'countiesincome', opacity: 0},
                {layer: 'countiesName',opacity: 0},
                {layer: 'PoliticalLeaning', opacity: 0},
                {layer: 'state-label',opacity: 1},
                {layer: 'labels', opacity:0 },
                {layer: 'labelsClosed', opacity:1 },
                {layer: 'PrisonCapacity', opacity:0},
                {layer: 'PrisonCapacityNumber', opacity:0}
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter3',
            alignment: 'right',
            title: 'Prison Capacity',
            image: 'images/Picture1.png',
            description: 'Out of these closing prisons, 20% of prison capacity is reduced as of 2022.',
            location: {
                center: [-74.076,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'PrisonLocationClosed', opacity: 0 },
                {layer: 'PrisonLocationAll', opacity: 0 },
                {layer: 'countiesincome', opacity: 0},
                {layer: 'countiesName',opacity: 0},
                {layer: 'state-label',opacity: 1},
                {layer: 'PoliticalLeaning', opacity: 0},
                {layer: 'labels', opacity:0 },
                {layer: 'labelsClosed', opacity:0 },
                {layer: 'PrisonCapacity', opacity:1},
                {layer: 'PrisonCapacityNumber', opacity:1}
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter4',
            alignment: 'right',
            title: 'Medium Income per County',
            image: '',
            description: 'uam erat volutpat. Sed ullamcorper convallis eros ut auctor. Cras vel iaculis ligula, et vestibulum metus.',
            location: {
                center: [-74.076,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'PrisonLocationClosed', opacity: 0 },
                {layer: 'PrisonLocationAll', opacity: 0 },
                {layer: 'countiesincome', opacity: 1},
                {layer: 'countiesName',opacity: 1},
                {layer: 'state-label',opacity: 1},
                {layer: 'PoliticalLeaning', opacity: 0},
                {layer: 'labels', opacity:0 },
                {layer: 'labelsClosed', opacity:0 },
                {layer: 'PrisonCapacity', opacity:0},
                {layer: 'PrisonCapacityNumber', opacity:0}
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter5',
            alignment: 'right',
            title: 'Political Leaning',
            image: '',
            description: '<p> Within the past 30 years, 26 prisons are now closed.<p>'+ '<p> List of closed prisons:<p>',
            location: {
                center: [-74.076,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'PrisonLocationClosed', opacity: 0 },
                {layer: 'PrisonLocationAll', opacity: 0 },
                {layer: 'countiesincome', opacity: 0},
                {layer: 'countiesName',opacity: 1},
                {layer: 'state-label',opacity: 1},
                {layer: 'PoliticalLeaning', opacity: 1},
                {layer: 'labels', opacity:0 },
                {layer: 'labelsClosed', opacity:0 },
                {layer: 'PrisonCapacity', opacity:0},
                {layer: 'PrisonCapacityNumber', opacity:0}
            ],
            onChapterExit: [
              
            ]
        },
        
    ]
};
