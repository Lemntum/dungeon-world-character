import template from './cleric-moves.html'
import { AbstractCharacterMoves } from '../abstract-character-moves'
import '../../../section-header/section-header'
import '../../../detailed-checkbox/detailed-checkbox'
import '../../../labeled-checkbox/labeled-checkbox'

const inputs = [
  ['#diety', 'diety'],
  ['#diety-healing-and-restoration', 'dietyHealingAndRestoration'],
  ['#diety-bloody-conquest', 'dietyBloodyConquest'],
  ['#diety-civilization', 'dietyCivilization'],
  ['#diety-knowledge-and-hidden-things', 'dietyKnowledgeAndHiddenThings'],
  ['#diety-the-downtrodden-and-forgotten', 'dietyTheDowntroddenAndForgotten'],
  ['#diety-what-lies-beneath', 'dietyWhatLiesBeneath'],
  ['#diety-petition-suffering', 'dietyPetitionSuffering'],
  ['#diety-petition-gaining-secrets', 'dietyPetitionGainingSecrets'],
  ['#diety-petition-offering', 'dietyPetitionOffering'],
  ['#diety-petition-personal-victory', 'dietyPetitionPersonalVictory'],
  ['#cast-a-spell', 'castASpell'],
  ['#divine-guidance', 'divineGuidance'],
  ['#commune', 'commune'],
  ['#turn-undead', 'turnUndead'],
  ['#chosen-one', 'chosenOne'],
  ['#divine-intervention', 'divineIntervention'],
  ['#invigorate', 'invigorate'],
  ['#the-scale-of-life-and-death', 'theScaleOfLifeAndDeath'],
  ['#penitent', 'penitent'],
  ['#serenity', 'serenity'],
  ['#first-aid', 'firstAid'],
  ['#orison-for-guidance', 'orisonForGuidance'],
  ['#empower', 'empower'],
  ['#divine-protection', 'divineProtection'],
  ['#devoted-healer', 'devotedHealer'],
  ['#anoited', 'anoited'],
  ['#martyr', 'martyr'],
  ['#apotheosis', 'apotheosis'],
  ['#divine-armor', 'divineArmor'],
  ['#reaper', 'reaper'],
  ['#greater-empower', 'greaterEmpower'],
  ['#providence', 'providence'],
  ['#greater-first-aid', 'greaterFirstAid'],
  ['#divine-invincibility', 'divineInvincibility'],
  ['#multiclass-dabbler', 'multiclassDabbler'],
  ['#light', 'light'],
  ['#sanctify', 'sanctify'],
  ['#guidance', 'guidance'],
]

export class ClericMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-cleric-moves', ClericMoves)
