import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { signinInput, signupInput } from "@shubham18218/medium-common_v1";

export const userRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRoute.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success, data, error } = signupInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs are not correct for SIGNUP",
      errors: error.errors,
    });
  }

  //IF duplicate email comes in

  if (await prisma.user.findFirst({ where: { email: body.email } })) {
    c.status(411);
    return c.json({ msg: "User already exists with this email" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    console.log("User successfully created");

    const jwt_token = await sign({ id: user.id }, c.env.JWT_SECRET);
    console.log(`${jwt_token}token successfully created`);
    return c.json({
      jwt: jwt_token,
      message: "You account is sucessfully created",
    });
  } catch (e) {
    const error = e as Error;
    c.status(411);
    console.log(error);
    return c.json({ error: error.message });
  }
});

userRoute.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success, data, error } = signinInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs are not correct for SIGNIN",
      errors: error.errors,
      data: data,
    });
  }

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "user not found" });
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({
    jwt,
    message: "You are sucessfully logged in",
  });
});
