const stripe = require("stripe")(process.env.STRIPE_KEY);

("use strict");

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;

    const lineItems = await Promise.all(
      products.map(async (product) => {
        const item = await strapi
          .service("api::product.product")
          .findOne(product.id);

        const quantity = product.quantity;

        return {
          price_data: {
            currency: "aud",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: quantity,
        };
      })
    );

    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?success=false`,
        line_items: lineItems,
        shipping_address_collection: { allowed_countries: ["AU"] },
        payment_method_types: ["card"],
      });

      await strapi.service("api::order.order").create({
        data: {
          products,
          stripeId: session.id,
        },
      });
      return { stripeSession: session };
    } catch (err) {
      ctx.response.status = 500;
      return err;
    }
  },
}));
