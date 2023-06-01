import {
  defineNamespace,
  defineProjections,
  Model as OrderMixin
} from '../mixins/regenerated/models/i-i-s-project-order';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(OrderMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
