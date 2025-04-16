import type { Schema, Struct } from '@strapi/strapi';

export interface TextsReusableText extends Struct.ComponentSchema {
  collectionName: 'components_texts_reusable_texts';
  info: {
    displayName: 'ReusableText';
    icon: 'bold';
  };
  attributes: {
    textData: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'texts.reusable-text': TextsReusableText;
    }
  }
}
