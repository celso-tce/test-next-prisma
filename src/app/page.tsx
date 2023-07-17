import prisma from "@/lib/prisma";

function getData() {
  return prisma.user.findMany({
    include: {
      posts: {
        where: {
          title: {
            contains: 'foo',
          },
        },
      },
    },
  });
}

type UsersWithPosts = Awaited<ReturnType<typeof getData>>;

export default async function Home() {
  const users: UsersWithPosts = await getData();

  return (
    <div className="min-h-screen flex flex-col justify-center bg-slate-800 text-white">
      <div className="flex justify-center">
        <ul>
          {users.map((user) => (
            <li key={user.id}>#{user.id} {user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
