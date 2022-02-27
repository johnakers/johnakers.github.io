const ItemList = {
  'knightSword': {
    name: 'Knight Sword',
    attackPower: 4,
    cost: 5,
    image: ''
  },
  'greatSword': {
    name: 'Great Sword',
    attackPower: 7,
    cost: 7,
    image: ''
  },
  'daggers': {
    name: 'Daggers',
    attackPower: 3,
    cost: 3,
    image: ''
  },
  'knives': {
    name: 'Knives',
    attackPower: 4,
    cost: 5,
    image: ''
  },
  'staff': {
    name: 'Staff',
    attackPower: 1,
    cost: 2,
    image: ''
  },
  'Book': {
    name: 'Book',
    attackPower: 2,
    cost: 4,
    image: ''
    }
}

class Item {
  constructor(name) {
    Object.assign(this, ItemList[name])
  }
}
