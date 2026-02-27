import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  // Ensure two decimal places
  const stringValue = value.toFixed(2);
  // Get the int/float
  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl whitespace-nowrap text-center px-2", className)}>
      <span className="text-xs align-super" title="United Arab Emirates Dirham">
        AED
      </span>{" "}
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
  // return null;
};

export default ProductPrice;
