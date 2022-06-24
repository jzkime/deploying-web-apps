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
        'elf',
        'dwarf',
        'giant',
        'cyclops',
        'ogre',
        'gnome',
        'zombie',
        'skeleton'
    ],
    beast: [
        'canine',
        'feline',
        'reptile',
        'amphibian',
        'aves(bird)',
        'insect',
        'fish',
        'horse',
        'phoenix',
        'unicorn',
        'dragon'
    ],
    hybrid: () => [...characterSpecies.humanoid_robot, ...characterSpecies.beast]
}

export const additionalCharacteristics = ['ghost']
