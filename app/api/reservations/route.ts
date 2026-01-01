import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const reservations = await prisma.reservation.findMany({
            include: {
                guest: true,
                room: true
            },
            orderBy: { checkIn: 'asc' }
        });
        return NextResponse.json(reservations);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error fetching reservations' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const json = await request.json();

        // Ensure dates are Date objects
        const data = {
            ...json,
            checkIn: new Date(json.checkIn),
            checkOut: new Date(json.checkOut),
        };

        const reservation = await prisma.reservation.create({
            data: data,
        });
        return NextResponse.json(reservation);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error creating reservation' }, { status: 500 });
    }
}
