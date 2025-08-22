import { currentUser } from '@clerk/nextjs/server';
import { db } from './prisma';

export const checkUsers = async () => {
  const user = await currentUser();
  console.log(user);

  if (!user) {
    return null;
  }

  try {
    // check if user already exists in DB
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    // create full name
    const name = `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim();

    // create new user + initial credit transaction
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name,
        imageUrl: user.imageUrl,
        creditTransactions: {
          create: {
            type: 'CREDIT_PURCHASE',
            packageId: 'free-user',
            amount: 2,
          },
        },
      },
      include: {
        creditTransactions: true, // include transaction in return
      },
    });

    return newUser;
  } catch (error) {
    console.error(error);
    return null;
  }
};
