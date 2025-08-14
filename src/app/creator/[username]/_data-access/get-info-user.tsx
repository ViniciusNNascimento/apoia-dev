"use server"

import { z } from "zod";
import { prisma } from "@/lib/prisma";

const createUsernameSchema = z.object({
    username: z.string({ message: "O username é obrigatório" })
})

type CreateUsernameSchema = z.infer<typeof createUsernameSchema>

export async function getInfoUser(data: CreateUsernameSchema) {
    const schema = createUsernameSchema.safeParse(data)

    if (!schema.success) {
        return null

    }

    try {

        const user = await prisma.user.findUnique({
            where: {
                username: data.username
            },
          
        })

        return user

    } catch (err) {
        return null
    }


}