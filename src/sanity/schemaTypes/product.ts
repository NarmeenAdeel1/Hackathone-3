import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "productName",  // Change 'title' to 'productName'
      title: "Product Name", 
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (rule) => rule.required(),
      options: { source: "productName" },  // Update to use 'productName'
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      validation: (rule) => rule.required().error("Image is required!"),
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Price",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "inventory",
      title: "Inventory",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Detailed description of the product",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of key features of the product",
    }),
    defineField({
      name: "dimensions",
      title: "Dimensions",
      type: "object",
      fields: [
        { name: "height", title: "Height", type: "string" },
        { name: "width", title: "Width", type: "string" },
        { name: "depth", title: "Depth", type: "string" },
      ],
      description: "Dimensions of the product",
    }),
  ],
});
