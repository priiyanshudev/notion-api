import { Client } from "@notionhq/client";

export default async function handler(req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const notion = new Client({ auth: process.env.NOTION_KEY });

    const response = await notion.databases.query({
      database_id: process.env.DB_ID,
    });

    res.status(200).json(response.results);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
}
