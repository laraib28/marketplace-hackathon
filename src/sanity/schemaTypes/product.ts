const productSchema = {
  name: 'product2',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Unique identifier for the product, used in URLs.',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Product Price',
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
    },
    {
      name: 'priceWithoutDiscount',
      type: 'number',
      title: 'Price Without Discount',
      description: 'Original price before discount',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Rating of the product',
    },
    {
      name: 'ratingCount',
      type: 'number',
      title: 'Rating Count',
      description: 'Number of ratings',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Selling Products', value: 'selling products' },
          {
            title: 'Our Products',
            value: 'our products',
          },
          { title: 'Sales', value: 'sales' },
        ],
      },
    },
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
    },
    {
      name: 'inventory',
      title: 'Inventory',
      type: 'number',
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
  ],
};

export default productSchema;
