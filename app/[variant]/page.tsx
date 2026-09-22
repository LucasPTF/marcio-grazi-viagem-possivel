import { notFound } from "next/navigation";
import { SalesPage } from "../../components/SalesPage";
import { heroVariants } from "../../content/site-content";

export function generateStaticParams() {
  return Object.keys(heroVariants).map((variant) => ({ variant }));
}

export default async function VariantPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;

  if (!(variant in heroVariants)) {
    notFound();
  }

  return <SalesPage variant={variant as keyof typeof heroVariants} />;
}
