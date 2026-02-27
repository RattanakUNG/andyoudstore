import { DollarSign, Headset, ShoppingBag, WalletCards } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";

const IconBoxes = () => {
  return (
    <div className="my-8">
      <Card>
        <CardContent className="grid gap-8 p-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-2">
            <ShoppingBag />
            <div className="text-sm font-bold">Free Shipping</div>
            <div className="text-sm text-muted-foreground">
              Free shipping on orders above $100
            </div>
          </div>
          <div className="space-y-2">
            <DollarSign />
            <div className="text-sm font-bold">Money Back Guarantee</div>
            <div className="text-sm text-muted-foreground">
              Within 7 days of purchase
            </div>
          </div>
          <div className="space-y-2">
            <WalletCards />
            <div className="text-sm font-bold">Flexible Payment</div>
            <div className="text-sm text-muted-foreground">
              Pay with credit card, PayPal or Stripe
            </div>
          </div>
          <div className="space-y-2">
            <Headset />
            <div className="text-sm font-bold">24/7 Support</div>
            <div className="text-sm text-muted-foreground">
              <div>Get support at any time or</div>
              <Link
                href="/locations"
                className="text-primary font-semibold hover:underline"
              >
                visit our stores
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IconBoxes;
