import { ChevronsRight } from "lucide-react";
import { ButtonSwapLabel } from "@/components/ui/button-swap-label";

type ButtonTextLinkProps = {
  text: string;
  hoverText?: string;
  showIcon?: boolean;
};

export function ButtonTextLink({
  text,
  hoverText,
  showIcon = true,
}: ButtonTextLinkProps) {
  return (
    <span className="e-text-link__inner">
      <ButtonSwapLabel text={text} hoverText={hoverText} />
      {showIcon ? (
        <>
          <ChevronsRight className="e-text-link__icon" strokeWidth={1.75} aria-hidden />
        </>
      ) : null}
    </span>
  );
}
