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
          <Column key={`${doc.title}-${index}`} fillWidth gap="4">
            <Text id={doc.title} variant="heading-strong-l">
              {doc.title}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {doc.alt}
            </Text>
            <Flex fillWidth paddingTop="m" gap="12" wrap>
              <Flex
                border="neutral-medium"
                radius="m"
                style={{
                  maxWidth: "300px", // Limit the container width
                  maxHeight: "400px", // Limit the container height
                  overflow: "hidden", // Prevent overflow
                }}
              >
                <SmartImage
                  enlarge
                  radius="m"
                  alt={doc.alt}
                  src={doc.images.src}
                />
              </Flex>
            </Flex>
            <Button
              href={doc.src}
              target="_blank"
              download
              variant="secondary"
              size="s"
            >
              Download
            </Button>
          </Column>
        ))}
      </Column>
    </Column>
  );
}