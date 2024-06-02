import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { amount, name, email } = req.body;
    
        try {
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
              {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: 'Donation',
                    description: `Donation from ${name} (${email})`,
                  },
                  unit_amount: amount * 100,
                },
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/success`,
            cancel_url: `${req.headers.origin}/cancel`,
          });
    
          res.status(200).json({ id: session.id });
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
      }
}