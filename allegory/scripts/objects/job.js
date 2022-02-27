class Job {}

//
// "HEROES"
//

class Freelance extends Job {
  constructor() {
    this.level = 1
    this.hp = 20
    this.attack = 8
    this.description = 'A knight without a lord, in the search of glory. With high defense, high attack, high health, they are the front line warrior. They have a low chance to critical hit, or dodge.'

    this.guard = 0.20 // 20% to do half damage
    this.dodge = 0.03 // 3% chance to dodge attack entirely

    this.criticalHit = 0.05 // 5% chance to critical hit
    this.accuracy = 0.85 // 85% chance to hit on attack

    this.item = new Item('knight_sword')
  }
}

class Mercenary extends Job {
  constructor() {
    this.level = 1
    this.hp = 12
    this.attack = 5
    this.description = 'A fighter who will take on any task, if the coin is right. A decent attack, with a high critical hit, and chance to dodge, they are a skill warrior.'

    this.guard = 0.08
    this.dodge = 0.20

    this.criticalHit = 0.20
    this.accuracy = 0.98

    this.item = new Item('dagger')
  }
}

class Enchanter extends Job {
  constructor() {
    this.level = 1
    this.hp = 6
    this.attack = 2
    this.description = 'Skilled mainly in healing magiks, enchanters possess low health, low attack poower, but can heal themselves and other party members. They aim to rid the land of evil.'

    this.guard = 0.05
    this.dodge = 0.12

    this.criticalHit = 0.50
    this.accuracy = 0.98

    this.item = new Item('staff')
  }
}

//
// "BEASTS"
//

class Puppet extends Job {
  constructor() {
    this.level = 1
    this.hp = 5
    this.attack = 1
    this.description = 'Merchants, farmers, peasants, and the like who are possessed by Rhyz. They have no real fighting skill.'

    this.guard = 0.01
    this.dodge = 0.03

    this.criticalHit = 0.05
    this.accuracy = 0.50
  }
}

class Reanimated extends Job {
  constructor() {
    this.level = 1
    this.hp = 7
    this.attack = 3
    this.description = 'The reanimated skeletons and corpses of fallen warriors. With low health, they are easy targets, but can deal minimal damage.'

    this.guard = 0.03
    this.dodge = 0.05

    this.criticalHit = 0.05
    this.accuracy = 0.60
  }
}

class Worg extends Job {
  constructor() {
    this.level = 1
    this.hp = 10
    this.attack = 6
    this.description = 'Cursed to live as a giant wolf-like creature, they are strong, and have a good amount of health, but are slow.'

    this.guard = 0.09
    this.dodge = 0.02

    this.criticalHit = 0.10
    this.accuracy = 0.70
  }
}

class Dhampir extends Job {
  constructor() {
    this.level = 1
    this.hp = 15
    this.attack = 7
    this.description = 'In the service of Rhyz, dhampirs are half human, half vampire. They are fast, and strong, cunning and possess a fair amount of health. A strong foe.'

    this.guard = 0.09
    this.dodge = 0.02

    this.criticalHit = 0.10
    this.accuracy = 0.70
  }
}
