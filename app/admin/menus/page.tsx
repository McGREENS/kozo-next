import { getSession } from "@/app/lib/session";
import { db } from "@/app/lib/db";
import { redirect } from "next/navigation";
import MenusClient from "./MenusClient";

export default async function AdminMenusPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const result = await db.execute(
    "SELECT category, filename, updated_at FROM menus ORDER BY category"
  );

  const menus = result.rows.map((r) => ({
    category: r.category as string,
    filename: r.filename as string,
    updated_at: r.updated_at as string,
  }));

  return <MenusClient menus={menus} />;
}
