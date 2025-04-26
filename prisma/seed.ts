import { PrismaClient } from '@prisma/client';
import { membersData } from './membersData';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function seedMembers() {
    const createUserPromises = membersData.map(async (member) => {
        // Check if the email already exists in the database
        const existingUser = await prisma.user.findUnique({
            where: { email: member.email },
        });

        if (existingUser) {
            console.log(`User with email ${member.email} already exists, skipping...`);
            return null; // Skip creating this user
        }

        // Create user only if not existing
        return prisma.user.create({
            data: {
                email: member.email,
                emailVerified: new Date(),
                name: member.name,
                passwordHash: await hash('password', 10),
                image: member.image,
                profileComplete: true,
                member: {
                    create: {
                        dateOfBirth: new Date(member.dateOfBirth),
                        gender: member.gender,
                        name: member.name,
                        created: new Date(member.created),
                        updated: new Date(member.lastActive),
                        description: member.description,
                        city: member.city,
                        country: member.country,
                        image: member.image,
                        photos: {
                            create: {
                                url: member.image,
                                isApproved: true
                            }
                        }
                    }
                }
            }
        });
    });

    // Wait for all promises to resolve
    await Promise.all(createUserPromises);
}

async function seedAdmin() {
    const existingAdmin = await prisma.user.findUnique({
        where: { email: 'admin@test.com' },
    });

    if (existingAdmin) {
        console.log('Admin user already exists, skipping...');
        return;
    }

    return prisma.user.create({
        data: {
            email: 'admin@test.com',
            emailVerified: new Date(),
            name: 'Admin',
            passwordHash: await hash('password', 10),
            role: 'ADMIN'
        }
    });
}

async function main() {
    await seedMembers();
    await seedAdmin();
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
