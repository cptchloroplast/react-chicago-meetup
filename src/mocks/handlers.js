import { rest } from 'msw';

export const handlers = [
  rest.post('/ping', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(3000), // delay for 3 seconds
      ctx.json({
        message: "pong",
        count: req.body.count
      }),
    )
  }),
];
