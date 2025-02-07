
export default {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
      {
        name: "firstName",
        title: "First Name",
        type: "string",
      },
      {
        name: "lastName",
        title: "Last Name",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: "contactNumber",
        title: "Contact Number",
        type: "number",
      },
      {
        name: "address",
        title: "Address",
        type: "object",
        fields: [
          {
            name: "street",
            title: "Street",
            type: "string",
          },
          {
            name: "city",
            title: "City",
            type: "string",
          },
          {
            name: "postalCode",
            title: "Postal Code",
            type: "string",
          },
        ],
      },
      {
        name: "discount",
        title: "Discount",
        type: "number",
      },
      {
        name: "cartItems",
        title: "Cart Items",
        type: "array",
        of: [{ type: "reference", to: [{ type: "product" }] }],
      },
      {
        name: "totalPrice",
        title: "Total Price",
        type: "number",
      },
      {
        name: "orderStatus",
        title: "Order Status",
        type: "string",
        options: {
          list: [
            { title: "Pending", value: "pending" },
            { title: "Processing", value: "processing" },
            { title: "Shipped", value: "shipped" },
            { title: "Delivered", value: "delivered" },
            { title: "Cancelled", value: "cancelled" },
          ],
          layout: "radio",
        },
        initialValue: "pending",
      },
    ],
  };
  