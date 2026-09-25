import { PageHeader } from "@/components/dashboard/page-header";
import { TipBanner } from "@/components/shared/tip-banner";
import { FileCard } from "@/components/business-memory/file-card";
import { BrandColorsCard } from "@/components/business-memory/brand-colors-card";
import { PrintTemplatesSection } from "@/components/business-memory/print-templates-section";
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
  BRAND_COLORS_STATUS,
  GENERAL_FILE_CARDS,
  PRINT_DESIGNS_BY_TAB,
  PRODUCT_TYPE_TABS,
} from "@/lib/mock-data/business-memory";

export default function BusinessMemoryPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Business Memory"
        description="Your brand identity, guidelines, logo files, and print templates — uploaded once, stored here permanently. Every order pulls from what's approved."
        location={DEFAULT_LOCATION_LABEL}
        role={DEMO_USER.role}
      />

      <div className="flex flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <Tabs defaultValue="general">
          <div className="overflow-x-auto">
            <TabsList className="w-max">
              <TabsTrigger value="general" className="data-active:text-brand-pink">
                General
              </TabsTrigger>
              {PRODUCT_TYPE_TABS.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="data-active:text-brand-pink"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            General covers your brand foundation. Every product tab stores
            its own front-and-back print templates.
          </p>

          <TabsContent value="general" className="mt-6 flex flex-col gap-6">
            <div>
              <h2 className="text-lg font-semibold">Brand foundation</h2>
              <p className="text-sm text-muted-foreground">
                The identity every template and order is built against.
              </p>
            </div>

            <BrandColorsCard
              colors={DEMO_COMPANY.brandColors}
              status={BRAND_COLORS_STATUS}
            />

            <div className="grid gap-4 md:grid-cols-3">
              {GENERAL_FILE_CARDS.map((card) => (
                <FileCard key={card.id} card={card} />
              ))}
            </div>
          </TabsContent>

          {PRODUCT_TYPE_TABS.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-6">
              <PrintTemplatesSection
                designs={PRINT_DESIGNS_BY_TAB[tab.id] ?? []}
              />
            </TabsContent>
          ))}
        </Tabs>

        <TipBanner
          lead="Upload once, order forever."
          text="Every design is on file front and back — reorders use the highlighted default unless you change it."
        />
      </div>
    </div>
  );
}
