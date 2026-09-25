import Link from "next/link";

import { PageHeader } from "@/components/dashboard/page-header";
import { OrderCutoffBanner } from "@/components/shared/order-cutoff-banner";
import { OrdersTable } from "@/components/orders/orders-table";
import { ProductGrid } from "@/components/products/product-grid";
import { DEMO_USER } from "@/lib/mock-data/user";
import { DEFAULT_LOCATION_LABEL } from "@/lib/mock-data/locations";
import { DEMO_ORDERS, ORDERS_SUMMARY } from "@/lib/mock-data/orders";
import {
  APPROVED_PRODUCTS_TOTAL,
  ORDERS_QUICK_REORDER_PRODUCTS,
} from "@/lib/mock-data/products";

export default function OrdersPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Orders"
        description="Approved products, one-click reorders, and every order's status — no cart, no quoting."
        location={DEFAULT_LOCATION_LABEL}
        role={DEMO_USER.role}
      />

      <div className="flex flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <OrderCutoffBanner countdown="1h 14m" />

        <OrdersTable orders={DEMO_ORDERS} summary={ORDERS_SUMMARY} />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Reorder — 1 click</h2>
            <p className="text-sm text-muted-foreground">
              Approved spec, all-in price, firm delivery date. Nothing to
              configure.
            </p>
          </div>
          <Link
            href="/products"
            className="text-sm font-medium whitespace-nowrap text-brand-pink hover:underline"
          >
            View all {APPROVED_PRODUCTS_TOTAL} →
          </Link>
        </div>

        <ProductGrid products={ORDERS_QUICK_REORDER_PRODUCTS} variant="locked" />
      </div>
    </div>
  );
}
