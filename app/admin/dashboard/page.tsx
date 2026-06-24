import { getSession } from "@/app/lib/session";
import { db } from "@/app/lib/db";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const result = await db.execute({
    sql: "SELECT name, email FROM admins WHERE id = ?",
    args: [session.userId],
  });
  const admin = result.rows[0];

  return (
    <div className="min-h-screen" style={{ background: "#05060c" }}>
      <header
        className="flex items-center justify-between px-10 py-6 border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div>
          <p
            className="text-[22px] tracking-[0.28em] text-white font-normal"
            style={{ fontFamily: "var(--font-optima), ui-serif, Georgia, serif" }}
          >
            KŌZO
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase mt-0.5" style={{ color: "#b89a5a" }}>
            Admin Panel
          </p>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>
            {admin?.name as string}
          </p>
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="text-[11px] tracking-[0.14em] uppercase px-4 py-2 rounded-[3px] transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      <main className="px-10 py-14">
        <h1
          className="text-[32px] font-normal text-white mb-2"
          style={{ fontFamily: "var(--font-optima), ui-serif, Georgia, serif" }}
        >
          Welcome back, {(admin?.name as string)?.split(" ")[0]}
        </h1>
        <p className="text-[13px] mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>
          Kōzo admin dashboard — manage your restaurant from here.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[560px]">
          <a href="/admin/contacts" className="rounded-[4px] px-6 py-6 flex flex-col gap-2 transition-colors"
            style={{ background: "rgba(242,228,177,0.07)", border: "1px solid rgba(242,228,177,0.18)" }}>
            <p className="text-[13px] tracking-[0.12em] uppercase" style={{ color: "#b89a5a" }}>Messages</p>
            <p className="text-[22px] font-normal text-white" style={{ fontFamily: "var(--font-optima), ui-serif, Georgia, serif" }}>Contact Forms</p>
            <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>View &amp; manage all submissions</p>
          </a>
          <a href="/admin/menus" className="rounded-[4px] px-6 py-6 flex flex-col gap-2 transition-colors"
            style={{ background: "rgba(242,228,177,0.07)", border: "1px solid rgba(242,228,177,0.18)" }}>
            <p className="text-[13px] tracking-[0.12em] uppercase" style={{ color: "#b89a5a" }}>Menus</p>
            <p className="text-[22px] font-normal text-white" style={{ fontFamily: "var(--font-optima), ui-serif, Georgia, serif" }}>PDF Menus</p>
            <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>Upload Food, Drinks &amp; Wine PDFs</p>
          </a>
        </div>
      </main>
    </div>
  );
}
