import {
  Button,
  Column,
  Flex,
  SmartImage,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";

import { about, document } from "@/app/resources/content";

export async function generateMetadata() {
  const title = document.title;
  const description = document.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Document() {
  return (
      <Column maxWidth="m" gap="l">
        <Text variant="display-strong-l">{document.title}</Text>
        <Column gap="m">
          {document.documents.map((doc, index) => (
              <Flex
                  key={index}
                  gap="m"
                  border="neutral-medium"
                  radius="m"
                  padding="m"
                  align="center"
              >
                <SmartImage
                    src={doc.preview}
                    alt={doc.title}
                    width={120}
                    height={80}
                    radius="m"
                />
                <Column gap="s">
                  <Text variant="heading-strong-m">{doc.title}</Text>
                  <Text variant="body-default-s">{doc.description}</Text>
                  <Button
                      href={`${baseURL}${doc.file}`}
                      target="_blank"
                      variant="secondary"
                      size="s"
                  >

                    View Document
                  </Button>
                </Column>
              </Flex>
          ))}
        </Column>
      </Column>
  );
}