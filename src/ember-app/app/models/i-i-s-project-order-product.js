import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as OrderProductMixin
} from '../mixins/regenerated/models/i-i-s-project-order-product';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OrderProductMixin, Validations, {
});

defineProjections(Model);

export default Model;
