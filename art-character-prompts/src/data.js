export const characterTypes = [
    'humanoid',
    'robot',
    'hybrid',
    'beast',
]

export const characterSpecies = {
    humanoid_robot: [
        'human',
        'vampire',
        'faerie',
        'elf', 'forest elf', 'dark elf', 'high elf', 'light elf',
        'dwarf',
        'giant',
        'cyclops',
        'ogre',
        'gnome',
        'zombie',
        'skeleton'
    ],
    beast: [
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
        'Tyrannosaurus', 'spinosaurus', 'velociraptor', 'brachiosaurus', 'dilophosaurus',
    ],
    hybrid: () => [...characterSpecies.humanoid_robot, ...characterSpecies.beast]
}


export const additionalCharacteristics = ['ghost', 'god'];

export const elements = ['fire', 'wind', 'earth', 'fire'];

export const emotions = ['happy', 'angry', 'sad', 'scared', 'judgmental', 'devastated', 'ecstatic', 'relaxed', 'shy', 'embarressed']
