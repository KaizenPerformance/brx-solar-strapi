import type { Schema, Attribute } from '@strapi/strapi';

export interface HomePageMainCarouselItems extends Schema.Component {
  collectionName: 'components_home_page_main_carousel_items';
  info: {
    displayName: 'MainCarouselItems';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    imgUrl: Attribute.Media;
    category: Attribute.String;
    discount: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 1;
        max: 100;
      }>;
    buttonLink: Attribute.String;
    buttonText: Attribute.String;
    description: Attribute.Text;
  };
}

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
      'home-page.main-carousel-items': HomePageMainCarouselItems;
      'home-page.sale': HomePageSale;
    }
  }
}
