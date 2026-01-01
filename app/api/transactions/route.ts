import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const transactions = await prisma.transaction.findMany({
            orderBy: { date: 'desc' },
            include: { reservation: true }
        });
        return NextResponse.json(transactions);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching transactions' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const json = await request.json();
        // Ensure date is Date object if provided, else default
        const data = {
            ...json,
            date: json.date ? new Date(json.date) : new Date(),
        };

        const transaction = await prisma.transaction.create({
            data: data,
        });
        return NextResponse.json(transaction);
    } catch (error) {
        return NextResponse.json({ error: 'Error creating transaction' }, { status: 500 });
    }
}
