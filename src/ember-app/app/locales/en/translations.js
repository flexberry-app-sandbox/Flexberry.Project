import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProjectClientLForm from './forms/i-i-s-project-client-l';
import IISProjectCouponLForm from './forms/i-i-s-project-coupon-l';
import IISProjectOrderLForm from './forms/i-i-s-project-order-l';
import IISProjectProductLForm from './forms/i-i-s-project-product-l';
import IISProjectClientEForm from './forms/i-i-s-project-client-e';
import IISProjectCouponEForm from './forms/i-i-s-project-coupon-e';
import IISProjectOrderEForm from './forms/i-i-s-project-order-e';
import IISProjectProductEForm from './forms/i-i-s-project-product-e';
import IISProjectClientModel from './models/i-i-s-project-client';
import IISProjectCouponModel from './models/i-i-s-project-coupon';
import IISProjectOrderProductModel from './models/i-i-s-project-order-product';
import IISProjectOrderModel from './models/i-i-s-project-order';
import IISProjectProductModel from './models/i-i-s-project-product';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-project-client': IISProjectClientModel,
    'i-i-s-project-coupon': IISProjectCouponModel,
    'i-i-s-project-order-product': IISProjectOrderProductModel,
    'i-i-s-project-order': IISProjectOrderModel,
    'i-i-s-project-product': IISProjectProductModel
  },

  'application-name': 'Project',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Project',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Project',
          title: 'Project'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'проект-одежда': {
          caption: 'Проект Одежда',
          title: 'Проект Одежда',
          'i-i-s-project-product-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-project-coupon-l': {
            caption: 'Купоны',
            title: ''
          },
          'i-i-s-project-client-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-project-order-l': {
            caption: 'Заказы',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-project-client-l': IISProjectClientLForm,
    'i-i-s-project-coupon-l': IISProjectCouponLForm,
    'i-i-s-project-order-l': IISProjectOrderLForm,
    'i-i-s-project-product-l': IISProjectProductLForm,
    'i-i-s-project-client-e': IISProjectClientEForm,
    'i-i-s-project-coupon-e': IISProjectCouponEForm,
    'i-i-s-project-order-e': IISProjectOrderEForm,
    'i-i-s-project-product-e': IISProjectProductEForm
  },

});

export default translations;
