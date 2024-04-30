import type { Schema, Attribute } from '@strapi/strapi';

export interface HomePageBrands extends Schema.Component {
  collectionName: 'components_home_page_brands';
  info: {
    displayName: 'Brands';
    icon: 'apps';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
    type: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    featured: Attribute.Boolean;
  };
}

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

export interface ProductColors extends Schema.Component {
  collectionName: 'components_product_colors';
  info: {
    displayName: 'colors';
    icon: 'apps';
  };
  attributes: {
    colors: Attribute.String;
  };
}

export interface ProductSize extends Schema.Component {
  collectionName: 'components_product_sizes';
  info: {
    displayName: 'size';
    icon: 'apps';
  };
  attributes: {
    size: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home-page.brands': HomePageBrands;
      'home-page.main-carousel-items': HomePageMainCarouselItems;
      'home-page.sale': HomePageSale;
      'product.colors': ProductColors;
      'product.size': ProductSize;
    }
  }
}
