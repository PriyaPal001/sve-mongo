import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.cities.findMany()
}
export async function load() {
  await prisma.$connect();
  const allUsers = await prisma.cities.findMany()
  const poppy = await prisma.hobby.findMany()
  console.log(poppy);
  return {
    hobbies:poppy,
    cities : allUsers
  };
}

export const actions={
  createteam: async ({ request }) => {
    const data = await request.formData();
    const iplname = data.get("City");
    const iplcity = data.get("IPL");
    console.log(iplname,iplcity);
    
    try {
      const data = await prisma.cities.create({
        // @ts-ignore
        data: {
          name:String(iplname), 
          IPL:String(iplcity),
        },
      });
    } catch (err) {
      console.log(err);
    }
    return {
      status: 201,
    };
  },
  createdata:async({request})=>{
    const  poppy=await request.formData();
    try {
      const data=await prisma.hobby.create({
        data:{
          name:String(poppy.get("name")),
          hobby:String(poppy.get("hobby")),
          email:String(poppy.get("email")),
        }
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    return {
      status: 201,
    };
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })








