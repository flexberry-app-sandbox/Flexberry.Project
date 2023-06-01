import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  amount: DS.attr('number'),
  product: DS.belongsTo('i-i-s-project-product', { inverse: null, async: false }),
  order: DS.belongsTo('i-i-s-project-order', { inverse: 'orderProduct', async: false })
});

export let ValidationRules = {
  amount: {
    descriptionKey: 'models.i-i-s-project-order-product.validations.amount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  product: {
    descriptionKey: 'models.i-i-s-project-order-product.validations.product.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  order: {
    descriptionKey: 'models.i-i-s-project-order-product.validations.order.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OrderProductE', 'i-i-s-project-order-product', {
    amount: attr('Количество', { index: 0 }),
    product: belongsTo('i-i-s-project-product', 'Товар', {
      name: attr('Товар', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
