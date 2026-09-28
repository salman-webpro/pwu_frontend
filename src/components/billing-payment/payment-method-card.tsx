import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PaymentMethodCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Payment method</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
          <span className="shrink-0 rounded-md bg-foreground px-2 py-1 text-[10px] font-bold tracking-wide text-background uppercase">
            Stripe
          </span>
          <div>
            <p className="font-medium">Secure checkout at order</p>
            <p className="text-sm text-muted-foreground">
              Hosted by Stripe · no card stored on file
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-brand-pink/10 p-4 text-sm text-brand-pink">
          Reorders and instant-checkout products are paid the moment you
          submit — quote-based orders are billed once the quote is accepted.
          Cards never touch our servers.
        </div>
      </CardContent>
    </Card>
  );
}
