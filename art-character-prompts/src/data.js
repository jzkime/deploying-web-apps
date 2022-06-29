export const characterTypes = [
    'humanoid',
    'robot',
    'hybrid',
    'creature',
]
// {name: '', googleUrl: '', description: ``, descUrl: ['']},

export const characterSpecies = {
    // humanoid_robot: [
    //     'human',
    //     'vampire',
    //     'faerie',
    //     'light elf',
    //     'dark elf',
    //     'wood elf',
    //     'moon/silver elf',
    //     'high elf',
    //     'dwarf',
    //     'giant',
    //     'cyclops',
    //     'ogre',
    //     'gnome',
    //     'zombie',
    //     'skeleton'
    // ],
    humanoid_robot: [
        {name: 'human', googleUrl: '', description: ``, descUrl: ['']},
        {name: 'vampire', googleUrl: '', description: ``, descUrl: ['']},
        {name: 'faerie', googleUrl: '', description: ``, descUrl: ['']},
    
    
        {name: 'light elf', googleUrl: 'https://www.google.com/search?q=light+elf&tbm=isch&ved=2ahUKEwjDso7HsMn4AhV3BzQIHfE6AkkQ2-cCegQIABAA&oq=light+elf&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECAAQQzoGCAAQHhAHULAHWKQLYOQMaABwAHgAgAHPAYgB8gOSAQU1LjAuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=n2e3YoPnBveO0PEP8fWIyAQ&bih=867&biw=1455', description: `One of a race of elves who live above ground and are radiant. (Norse mythology) A daylight dwelling elf or nature spirit (as opposed to the underground dwelling dark elves or dwarves).`, descUrl: ['https://en.wiktionary.org/wiki/light_elf#:~:text=One%20of%20a%20race%20of,dwelling%20dark%20elves%20or%20dwarves).']},
        {name: 'dark elf', googleUrl: 'https://www.google.com/search?q=dark+elf&tbm=isch&ved=2ahUKEwji55WRrsn4AhUkATQIHa30CWwQ2-cCegQIABAA&oq=dark+elf&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgQIABBDMgUIABCABDIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIIxAnUKcOWKcOYKkRaABwAHgAgAFEiAGBAZIBATKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=FWW3YqKJB6SC0PEPremn4AY&bih=867&biw=1455&hl=en', description: `from dark elf wiki: A member of a race of elves that is evil, has a dark (often greyish or bluish) skin and/or lives in dark places.`, descUrl: ['https://en.wikipedia.org/wiki/Dark_elves_in_fiction', 'https://en.wiktionary.org/wiki/dark_elf#English']},
        {name: 'wood elf', googleUrl: 'https://www.google.com/search?q=forest+elf&sxsrf=ALiCzsZSLzGDRd5Xm1ZDr9-XCCaMokQ1Hg:1656186726294&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiOm4KssMn4AhVcD0QIHQKvAlwQ_AUoAXoECAEQAw&biw=1455&bih=867&dpr=1', description: `ood elf is a generic term for an elf that live in wooded areas such as forests.`, descUrl: ['https://en.wikipedia.org/wiki/Wood_Elf']},
        {name: 'moon/silver elf', googleUrl: '', description: `From Forgotten Realms fandom wiki: Like all elves, the Teu-tel-quessir were tall, close to humans in height, but more slender and beautiful. Moon elf skin was pale, often with an icy blue hue. Moon elf hair was commonly black, blue, or silvery white, although human-like colors were heard of as well, though very rare. Moon elf eyes, like those of other elves, were very commonly green, although some were blue as well. All exhibited a characteristic best described as golden flecks speckled through the iris. Male moon elves were typically taller than females.`, descUrl: ['https://forgottenrealms.fandom.com/wiki/Moon_elf']},
        {
            name: 'high elf',
            googleUrl: 'https://www.google.com/search?q=high+elf&tbm=isch&ved=2ahUKEwjA3rq_q8n4AhW-LTQIHUsLCg0Q2-cCegQIABAA&oq=high+elf&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBAgAEEMyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABFCqBFi9I2DqKmgAcAB4AIABPIgBsAGSAQEzmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=UGK3YsD2Nb7b0PEPy5aoaA&bih=867&biw=1455',
            description: `from Forgotten Realms fandom wiki: High elves were graceful, intelligent beings, with a greater capacity for intelligence than most humanoid races while also possessing an agility comparable with their elven kin. High elves were also unusually strong-willed and had a natural resistance to the effects of enchantment spells.`,
            descUrl: ['https://forgottenrealms.fandom.com/wiki/High_elf']
        },
        {name: 'dwarf', googleUrl: '', description: ``, descUrl: ['']},
        {name: 'giant', googleUrl: '', description: ``, descUrl: ['']},
        {name: 'cyclops', googleUrl: '', description: ``, descUrl: ['']},
        {name: 'ogre', googleUrl: '', description: ``, descUrl: ['']},
        {name: 'gnome', googleUrl: '', description: ``, descUrl: ['']},
        {name: 'zombie', googleUrl: '', description: ``, descUrl: ['']},
        {name: 'skeleton', googleUrl: '', description: ``, descUrl: ['']}
    ],
    creature: [
        '?',
        'dog','wolf',
        'cat', 'panther', 'lion',
        'snake', 'lizard', 'turtle', 'chameleon',
        'frog', 'toad',
        'bird',
        'insect',
        'fish',
        'horse',
        'phoenix',
        'unicorn',
        'dragon', 'fire dragon', 'water dragon', 'wind dragon', 'earth dragon',
        't-rex', 'velociraptor', 'brachiosaurus'
    ]
}
export const hybrid = [...characterSpecies.humanoid_robot.map(ch => ch.name), ...characterSpecies.creature]

export const characterMore = [
    {name: 'human', googleUrl: '', description: ``, descUrl: ['']},
    {name: 'vampire', googleUrl: '', description: ``, descUrl: ['']},
    {name: 'faerie', googleUrl: '', description: ``, descUrl: ['']},


    {name: 'light elf', googleUrl: 'https://www.google.com/search?q=light+elf&tbm=isch&ved=2ahUKEwjDso7HsMn4AhV3BzQIHfE6AkkQ2-cCegQIABAA&oq=light+elf&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECAAQQzoGCAAQHhAHULAHWKQLYOQMaABwAHgAgAHPAYgB8gOSAQU1LjAuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=n2e3YoPnBveO0PEP8fWIyAQ&bih=867&biw=1455', description: `One of a race of elves who live above ground and are radiant. (Norse mythology) A daylight dwelling elf or nature spirit (as opposed to the underground dwelling dark elves or dwarves).`, descUrl: ['https://en.wiktionary.org/wiki/light_elf#:~:text=One%20of%20a%20race%20of,dwelling%20dark%20elves%20or%20dwarves).']},
    {name: 'dark elf', googleUrl: 'https://www.google.com/search?q=dark+elf&tbm=isch&ved=2ahUKEwji55WRrsn4AhUkATQIHa30CWwQ2-cCegQIABAA&oq=dark+elf&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgQIABBDMgUIABCABDIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIIxAnUKcOWKcOYKkRaABwAHgAgAFEiAGBAZIBATKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=FWW3YqKJB6SC0PEPremn4AY&bih=867&biw=1455&hl=en', description: `from dark elf wiki: A member of a race of elves that is evil, has a dark (often greyish or bluish) skin and/or lives in dark places.`, descUrl: ['https://en.wikipedia.org/wiki/Dark_elves_in_fiction', 'https://en.wiktionary.org/wiki/dark_elf#English']},
    {name: 'wood elf', googleUrl: 'https://www.google.com/search?q=forest+elf&sxsrf=ALiCzsZSLzGDRd5Xm1ZDr9-XCCaMokQ1Hg:1656186726294&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiOm4KssMn4AhVcD0QIHQKvAlwQ_AUoAXoECAEQAw&biw=1455&bih=867&dpr=1', description: `ood elf is a generic term for an elf that live in wooded areas such as forests.`, descUrl: ['https://en.wikipedia.org/wiki/Wood_Elf']},
    {name: 'moon/silver elf', googleUrl: '', description: `From Forgotten Realms fandom wiki: Like all elves, the Teu-tel-quessir were tall, close to humans in height, but more slender and beautiful. Moon elf skin was pale, often with an icy blue hue. Moon elf hair was commonly black, blue, or silvery white, although human-like colors were heard of as well, though very rare. Moon elf eyes, like those of other elves, were very commonly green, although some were blue as well. All exhibited a characteristic best described as golden flecks speckled through the iris. Male moon elves were typically taller than females.`, descUrl: ['https://forgottenrealms.fandom.com/wiki/Moon_elf']},
    {
        name: 'high elf',
        googleUrl: 'https://www.google.com/search?q=high+elf&tbm=isch&ved=2ahUKEwjA3rq_q8n4AhW-LTQIHUsLCg0Q2-cCegQIABAA&oq=high+elf&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBAgAEEMyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABFCqBFi9I2DqKmgAcAB4AIABPIgBsAGSAQEzmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=UGK3YsD2Nb7b0PEPy5aoaA&bih=867&biw=1455',
        description: `from Forgotten Realms fandom wiki: High elves were graceful, intelligent beings, with a greater capacity for intelligence than most humanoid races while also possessing an agility comparable with their elven kin. High elves were also unusually strong-willed and had a natural resistance to the effects of enchantment spells.`,
        descUrl: ['https://forgottenrealms.fandom.com/wiki/High_elf']
    },
    {name: 'dwarf', googleUrl: '', description: ``, descUrl: ['']},
    {name: 'giant', googleUrl: '', description: ``, descUrl: ['']},
    {name: 'cyclops', googleUrl: '', description: ``, descUrl: ['']},
    {name: 'ogre', googleUrl: '', description: ``, descUrl: ['']},
    {name: 'gnome', googleUrl: '', description: ``, descUrl: ['']},
    {name: 'zombie', googleUrl: '', description: ``, descUrl: ['']},
    {name: 'skeleton', googleUrl: '', description: ``, descUrl: ['']}
]

export const additionalCharacteristics = ['ghost', 'god'];

export const elements = ['fire', 'wind', 'earth', 'fire', 'blood', 'dark', 'light', 'moon'];

export const emotions = ['happy', 'angry', 'sad', 'scared', 'judgmental', 'devastated', 'ecstatic', 'relaxed', 'shy', 'embarressed']

export const backData = ['butterfly wings', 'angel wings', 'demon wings', 'tail', 'dragon wings']
export const adjData = ['burnt', 'torn', 'half missing', 'short', 'long', 'deranged', 'soft', 'bony'];
export const headData= ['horns', 'halo', 'none']
export const earsData = ['pointy', 'pierced', 'basic']
export const whereData = ['face', 'chest', 'calf', 'thigh', 'bicep', 'forearm', 'none'];
export const whatData = ['scar', 'tattoo', ]

export const clothesData = {
    back: ['cape', 'cloak', 'backpack', 'crop top jacket'],
    top: ['t-shirt', 'turtleneck', 'hoodie', 'crop top', 'spagetti straps', 'dress', 'brand t-shirt', 'blouse', 'sweater', 'belted top', 'button down', 'tank top', 'cold shoulder top', 'vest', 'button down and tie', 'off the shoulder'],
    bottom: ['jeans', 'leggings', 'tights', 'shorts', 'skirt']
}

export const colorsData = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'magenta', 'brown', 'teal', 'pink', 'violet', 'grey', 'white', 'black', 'olive', 'brown', 'tan'];
export const colorsBase = ['brown', 'tan', 'olive', 'pale', 'white', 'black']

export const genderData = ['female', 'male', 'non-binary', 'gender-fluid']

export const basedOn = {
    colorBased: ['the item closest to you', 'your favorite item', 'your favorite color', `your favorite person's favorite color`, `favorite character's main color`, `least favorite character's main color`],
    personal: [
        'have siblings', 
        'have long hair or short short', 
        'currently wearing long sleeves or short sleeves', 
        `have read a book in the last month`, 
        `believe in paranormal`,
        `cat person or dog person`,
        `have a pet(s) or no pets`,
        `prefer indoors or outdoors`,
        `introverted or extraverted`,
        `have allergies or allergy free`,
        `like anime?`,
        `like kpop?`,
        `like sci-fi?`,
        `like videogames?`,
        `like running?`,
        `go to the gym?`,
        `been out of the country?`,
        `watched a show/movie today?`,
        ]
}

/* 
gives 2 random kinds of character designs (wings, long or short hair etc)
and one basedOn[randomPersonalQuestion]
*/