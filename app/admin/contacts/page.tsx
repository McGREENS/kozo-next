import { getSession } from "@/app/lib/session";
import { db } from "@/app/lib/db";
import { redirect } from "next/navigation";
import ContactsClient from "./ContactsClient";

export default async function AdminContactsPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const result = await db.execute(
    "SELECT id, name, email, phone, message, status, created_at FROM contacts ORDER BY created_at DESC"
  );

  const contacts = result.rows.map((r) => ({
    id: r.id as number,
    name: r.name as string,
    email: r.email as string,
    phone: (r.phone ?? "") as string,
    message: r.message as string,
    status: r.status as string,
    created_at: r.created_at as string,
  }));

  return <ContactsClient contacts={contacts} />;
}
