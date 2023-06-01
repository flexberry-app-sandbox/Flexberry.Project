import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Project',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Project',
          title: 'Project'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
