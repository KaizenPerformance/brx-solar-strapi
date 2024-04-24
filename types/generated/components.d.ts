import type { Schema, Attribute } from '@strapi/strapi';

export interface HomePageSale extends Schema.Component {
  collectionName: 'components_home_page_sales';
  info: {
    displayName: 'sale';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 25;
      }>;
    salePhrase: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 42;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home-page.sale': HomePageSale;
    }
  }
}
