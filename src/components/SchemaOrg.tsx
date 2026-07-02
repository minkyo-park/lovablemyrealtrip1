import { Head } from "vite-react-ssg";

interface SchemaOrgProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
  title: string;
  description: string;
  canonical: string;
}

export default function SchemaOrg({ schema, title, description, canonical }: SchemaOrgProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  );
}
