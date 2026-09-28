import { PageHeader } from "@/components/dashboard/page-header";
import { AddressesSection } from "@/components/company-profile/addresses-section";
import { CompanyDetailsCard } from "@/components/company-profile/company-details-card";
import { NotificationsCard } from "@/components/company-profile/notifications-card";
import { ProfileCompleteness } from "@/components/company-profile/profile-completeness";
import { TipBanner } from "@/components/shared/tip-banner";
import { DEMO_COMPANY } from "@/lib/mock-data/company";
import {
  COMPANY_ADDRESSES,
  PROFILE_COMPLETENESS_PERCENT,
} from "@/lib/mock-data/company-profile";
import { DEMO_USER } from "@/lib/mock-data/user";
import { DEFAULT_LOCATION_LABEL } from "@/lib/mock-data/locations";

export default function CompanyProfilePage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Company profile"
        description="Your business record — the details that power every order, invoice, and approval so nothing gets re-typed twice."
        location={DEFAULT_LOCATION_LABEL}
        role={DEMO_USER.role}
      />
      <div className="flex flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <ProfileCompleteness percent={PROFILE_COMPLETENESS_PERCENT} />
        <CompanyDetailsCard company={DEMO_COMPANY} />
        <AddressesSection addresses={COMPANY_ADDRESSES} />
        <NotificationsCard company={DEMO_COMPANY} />
        <TipBanner
          lead="This is what saves you retyping."
          text="Everything here feeds new orders, quotes, and invoices — update it once and it's correct everywhere."
        />
      </div>
    </div>
  );
}
