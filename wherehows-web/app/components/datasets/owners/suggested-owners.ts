import Component from '@ember/component';
import { IOwner } from 'wherehows-web/typings/api/datasets/owners';
import { get, set } from '@ember/object';
import { computed } from '@ember-decorators/object';
import { empty } from '@ember-decorators/object/computed';

export default class DatasetsOwnersSuggestedOwners extends Component {
  classNames = ['dataset-authors-suggested'];

  constructor() {
    super(...arguments);

    this.owners || set(this, 'owners', []);
  }

  /**
   * Whether or not the component is expanded. If not, users will only see the initial header information
   * whereas if expanded then users will see the list of all suggested owners
   * @type {boolean}
   * @default false
   */
  isExpanded = false;

  /**
   * Passed in value from parent component, `dataset-authors`, a.k.a. systemGeneratedOwners, this list
   * represents a possible list of owners provided by scanning various systems.
   * @type {Array<IOwner>}
   * @default []
   */
  owners: Array<IOwner>;

  /**
   * Computed based on the owners array, detects whether this array is empty or not
   * @type {ComputedProperty<boolean>}
   */
  @empty('owners')
  isEmpty: boolean;

  /**
   * For the facepile in the suggestions window header, we do not need tos how all the faces of all the
   * possible owners as this could be a large amount. Take only up to the first four to pass into the
   * template for rendering
   * @type {ComputedProperty<Array<IOwner>>}
   */
  @computed('owners')
  get facepileOwners(this: DatasetsOwnersSuggestedOwners): Array<IOwner> {
    return get(this, 'owners').slice(0, 4);
  }
}
