export default {
  projections: {
    OrderE: {
      status: {
        __caption__: 'Статус'
      },
      client: {
        __caption__: 'Клиент',
        password: {
          __caption__: 'Пароль'
        }
      },
      coupon: {
        __caption__: 'Купон',
        productName: {
          __caption__: 'Купон'
        }
      },
      orderProduct: {
        __caption__: 'Товарная позиция',
        amount: {
          __caption__: 'Количество'
        },
        product: {
          __caption__: 'Товар',
          name: {
            __caption__: 'Товар'
          }
        }
      }
    },
    OrderL: {
      status: {
        __caption__: 'Статус'
      },
      client: {
        __caption__: 'Клиент',
        password: {
          __caption__: 'Клиент'
        }
      },
      coupon: {
        __caption__: 'Купон',
        productName: {
          __caption__: 'Купон'
        }
      }
    }
  },
  validations: {
    status: {
      __caption__: 'Статус'
    },
    client: {
      __caption__: 'Клиент'
    },
    coupon: {
      __caption__: 'Купон'
    },
    orderProduct: {
      __caption__: 'Товарная позиция'
    }
  }
};
