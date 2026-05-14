"use client";

import Link from "next/link";
import {
  usePathname,
} from "next/navigation";

import {
  X,
  Home,
  ShoppingBag,
  Sparkles,
  Grid2x2,
  User,
} from "lucide-react";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const menuItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Shop",
    href: "/shop",
    icon: ShoppingBag,
  },
  {
    label: "Trending",
    href: "/trending",
    icon: Sparkles,
  },
  {
    label: "Collections",
    href: "/collections",
    icon: Grid2x2,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const pathname =
    usePathname();

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-[998]

          bg-black/60
          backdrop-blur-sm

          transition-all
          duration-300

          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* MENU */}
      <aside
        className={`
          fixed
          right-0
          top-0
          z-[999]

          flex
          h-screen
          w-[85%]
          max-w-[340px]
          flex-col

          border-l
          border-white/10

          bg-black/95
          backdrop-blur-2xl

          transition-transform
          duration-300

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* HEADER */}
        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-white/10

            px-5
            py-5
          "
        >
          <h2
            className="
              text-lg
              font-semibold
              tracking-wide
              text-white
            "
          >
            MENU
          </h2>

          <button
            onClick={onClose}
            aria-label="Close Menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-white/5

              transition-all
              duration-300

              active:scale-95
            "
          >
            <X
              size={20}
              className="text-white"
            />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav
          className="
            flex
            flex-1
            flex-col

            gap-2

            px-4
            py-6
          "
        >
          {menuItems.map(
            (item) => {
              const Icon =
                item.icon;

              const active =
                pathname ===
                item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex
                    items-center
                    gap-4

                    rounded-2xl

                    px-4
                    py-4

                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          border
                          border-white/10

                          bg-white/10
                          text-white
                        `
                        : `
                          text-white/70

                          hover:bg-white/5
                          hover:text-white
                        `
                    }
                  `}
                >
                  <Icon size={20} />

                  <span
                    className="
                      text-sm
                      font-medium
                      tracking-wide
                    "
                  >
                    {item.label}
                  </span>
                </Link>
              );
            }
          )}
        </nav>

        {/* FOOTER */}
        <div
          className="
            border-t
            border-white/10

            px-5
            py-5
          "
        >
          <p
            className="
              text-center
              text-xs
              tracking-wide
              text-white/40
            "
          >
            NEXTGRID STYLE
          </p>
        </div>
      </aside>
    </>
  );
}