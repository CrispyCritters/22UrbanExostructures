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
            title: 'Location of All 70 Prisons in the New York State',
            description: '<p> closed/ closing prison are notated in red<p>',
            image: './Images/prison_number_red-03.jpg',
            location: {
                center: [-72.116,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [    
                {layer: 'PrisonLocationAll', opacity: 1},
                {layer: 'PrisonLocationClosed', opacity: 0},
                {layer: 'countiesincome', opacity: 0},
                {layer: 'countiesName',opacity: 0},
                {layer: 'PoliticalLeaning2', opacity: 0},
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
            title: 'Location of 26 Closed/ Closing Prisons',
            image: './Images/prison_number_red-03.jpg',
            description: '<p> Within the past 30 years, 26 prisons are now closed.<p>',
            location: {
                center: [-72.116,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'PrisonLocationClosed', opacity: 1 },
                {layer: 'PrisonLocationAll', opacity: 0 },
                {layer: 'countiesincome', opacity: 0},
                {layer: 'countiesName',opacity: 0},
                {layer: 'PoliticalLeaning2', opacity: 0},
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
            title: 'Lowered Prison Capacity',
            image: './Images/Picture1-04.png',
            description: 'From the closed/closing prisons, 20% of prison capacity is reduced as of 2022.',
            location: {
                center: [-72.116,42.793],
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
                {layer: 'PoliticalLeaning2', opacity: 0},
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
            title: 'Median Income per County',
            image: './Images/median_income-05.jpg',
            description: 'We can see a clear income division between the more upstate counties and the downstate counties along the Hudson River.',
            location: {
                center: [-72.116,42.793],
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
                {layer: 'PoliticalLeaning2', opacity: 0},
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
            title: 'Political Atlas across Prsion Counties',
            image: './Images/political_leaning-06.jpg',
            description: 'During the 2020 election, most of the counties around major cities are more democratically meaning, while most of the northern rural counties are more republican.',
            location: {
                center: [-72.116,42.793],
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
                {layer: 'PoliticalLeaning2', opacity: 1},
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
