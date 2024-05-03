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

export interface HomePageOfferCards extends Schema.Component {
  collectionName: 'components_home_page_offer_cards';
  info: {
    displayName: 'offerCards';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    navLink: Attribute.String;
    image: Attribute.Media & Attribute.Required;
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

export interface HomePageServices extends Schema.Component {
  collectionName: 'components_home_page_services';
  info: {
    displayName: 'services';
    icon: 'apps';
    description: '';
  };
  attributes: {
    icon: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    serviceId: Attribute.UID<
      undefined,
      undefined,
      {
        'disable-regenerate': false;
      }
    > &
      Attribute.CustomField<
        'plugin::strapi-advanced-uuid.uuid',
        {
          'disable-regenerate': false;
        }
      >;
  };
}

export interface ProductCategories extends Schema.Component {
  collectionName: 'components_product_categories';
  info: {
    displayName: 'categories';
    icon: 'apps';
  };
  attributes: {
    category: Attribute.String & Attribute.Required;
  };
}

export interface ProductColors extends Schema.Component {
  collectionName: 'components_product_colors';
  info: {
    displayName: 'colors';
    icon: 'apps';
    description: '';
  };
  attributes: {
    color: Attribute.String;
  };
}

export interface ProductParent extends Schema.Component {
  collectionName: 'components_product_parents';
  info: {
    displayName: 'parent';
    icon: 'apps';
  };
  attributes: {
    parent: Attribute.String & Attribute.Required;
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
      'home-page.offer-cards': HomePageOfferCards;
      'home-page.sale': HomePageSale;
      'home-page.services': HomePageServices;
      'product.categories': ProductCategories;
      'product.colors': ProductColors;
      'product.parent': ProductParent;
      'product.size': ProductSize;
    }
  }
}
