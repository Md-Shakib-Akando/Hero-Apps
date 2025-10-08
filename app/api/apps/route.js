import clientPromise from "@/lib/mongodb";


export async function POST(req) {
    try {

        const data = await req.json();


        data.createdAt = new Date();


        const client = await clientPromise;
        const db = client.db("hero-apps");
        const collection = db.collection("apps");
        const result = await collection.insertOne(data);
        return Response.json({ success: true, id: result.insertedId });
    } catch (err) {
        return new Response("Failed to create a new app", { status: 500 });
    }

}

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("hero-apps");
        const collection = db.collection("apps");


        const apps = await collection.find({}).sort({ createdAt: -1 }).toArray();

        return new Response(JSON.stringify(apps), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new Response("Failed to fetch apps", { status: 500 });
    }
}