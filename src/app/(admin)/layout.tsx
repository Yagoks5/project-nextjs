import Link from "next/link";

const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Users",
    href: "/users",
  },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <hr />
              <Link href={link.href}>{link.name}</Link>
              <hr />
            </li>
          ))}
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
