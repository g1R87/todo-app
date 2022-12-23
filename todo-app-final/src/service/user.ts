import prisma from "../db";

export const getAllUsers = async () => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getUser = async (id: number) => {
    try {
        const users = await prisma.user.findFirst({
            where: {
                id
            }
        });
        
        if (!users) {
            throw new Error("User not found");
        }

        return users;
    } catch (error: any) {
        throw new Error(error.message);
    }
};


export const createUser = async (name: string, email: string, password: string) => {
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });
        return user;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

