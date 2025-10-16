import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, context) {
    try {

        const params = await context.params;
        const id = params.id;

        if (!id) {
            return new Response(JSON.stringify({ error: "App ID is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const client = await clientPromise;
        const db = client.db("hero-apps");
        const collection = db.collection("apps");

        const app = await collection.findOne({ _id: new ObjectId(id) });

        if (!app) {
            return new Response(JSON.stringify({ error: "App not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify(app), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: "Failed to fetch app" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
