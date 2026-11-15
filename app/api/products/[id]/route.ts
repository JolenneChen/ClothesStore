import {getProduct} from '@/lib/api';
import {NextResponse} from 'next/server';

type RouteParams = {
    params:Promise<{ id: string }>
};


export async function GET(request: Request, { params }: RouteParams) {
    try {
        const { id } = await params;
        const userId = Number(id);
        if (isNaN(userId)) {
            return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
        }
        const user = await getProduct(userId);
        return NextResponse.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
    }

}