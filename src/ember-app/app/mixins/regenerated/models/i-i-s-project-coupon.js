import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  percent: DS.attr('decimal'),
  productName: DS.attr('string')
});

export let ValidationRules = {
  percent: {
    descriptionKey: 'models.i-i-s-project-coupon.validations.percent.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  productName: {
    descriptionKey: 'models.i-i-s-project-coupon.validations.productName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CouponE', 'i-i-s-project-coupon', {
    percent: attr('Процент', { index: 0 }),
    productName: attr('Название товара', { index: 1 })
  });

  modelClass.defineProjection('CouponL', 'i-i-s-project-coupon', {
    percent: attr('Процент', { index: 0 }),
    productName: attr('Название товара', { index: 1 })
  });
};
