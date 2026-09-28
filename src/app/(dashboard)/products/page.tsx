import { PageHeader } from "@/components/dashboard/page-header";
import { TipBanner } from "@/components/shared/tip-banner";
import { TabCountBadge } from "@/components/shared/tab-count-badge";
import { ProductGrid } from "@/components/products/product-grid";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { DEMO_USER } from "@/lib/mock-data/user";
import { DEMO_COMPANY } from "@/lib/mock-data/company";
import { DEFAULT_LOCATION_LABEL } from "@/lib/mock-data/locations";
import {
  PERSONALIZED_PRODUCTS_COUNT,
  READY_TO_ORDER_PRODUCTS,
} from "@/lib/mock-data/products";

export default function ProductsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Products"
        description={`Everything approved for ${DEMO_COMPANY.displayName} — one-click reorders, or customize a run when the details need to change.`}
        location={DEFAULT_LOCATION_LABEL}
        role={DEMO_USER.role}
      />

      <div className="flex flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold">Your approved products</h2>
          <p className="text-sm text-muted-foreground">
            Every price all-in · every date firm · day of order to day zero.
          </p>
        </div>

        <Tabs defaultValue="ready-to-order">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <TabsList>
              <TabsTrigger value="ready-to-order" className="gap-1.5 data-active:text-brand-pink">
                Ready to order
                <TabCountBadge count={READY_TO_ORDER_PRODUCTS.length} />
              </TabsTrigger>
              <TabsTrigger value="personalized" className="gap-1.5 data-active:text-brand-pink">
                Personalized
                <TabCountBadge count={PERSONALIZED_PRODUCTS_COUNT} />
              </TabsTrigger>
            </TabsList>
            <p className="text-sm text-muted-foreground">
              Fixed specs, reordered as-is — one click, no new files needed.
            </p>
          </div>

          <TabsContent value="ready-to-order" className="mt-4">
            <ProductGrid products={READY_TO_ORDER_PRODUCTS} />
          </TabsContent>
          <TabsContent value="personalized" className="mt-4">
            <p className="text-sm text-muted-foreground">
              Content for this screen is coming next.
            </p>
          </TabsContent>
        </Tabs>

        <TipBanner
          lead="One price, no surprises."
          text="Production, freight, and margin are already folded in — reorders use your approved default unless you change it here."
        />
      </div>
    </div>
  );
}
