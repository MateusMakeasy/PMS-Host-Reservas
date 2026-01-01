import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const guests = await prisma.guest.findMany({
            orderBy: { createdAt: 'desc' },
            include: { reservations: true }
        });
        return NextResponse.json(guests);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching guests' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const json = await request.json();
        const guest = await prisma.guest.create({
            data: json,
        });
        return NextResponse.json(guest);
    } catch (error) {
        return NextResponse.json({ error: 'Error creating guest' }, { status: 500 });
    }
}
