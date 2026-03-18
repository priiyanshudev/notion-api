import { Client } from "@notionhq/client";

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_KEY });

  const response = await notion.databases.query({
    database_id: process.env.DB_ID,
  });

  res.status(200).json(response.results);
}
