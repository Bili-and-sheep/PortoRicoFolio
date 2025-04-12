import {
    Button,
    Column,
    Flex,
    Heading,
    SmartImage,
    Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { document } from "@/app/resources/content";

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
            url: `https://${baseURL}/document`,
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
    // @ts-ignore
    return (
        <Column maxWidth="m">
            <Heading as="h2" id={document.title} variant="display-strong-s" marginBottom="m">
                {document.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
                {document.documents.map((doc, index) => (


                    <Flex
                        key={`${doc.title}-${index}`}
                        gap="xl"
                        horizontal="center"
                        vertical="start"
                        wrap
                        style={{ width: "100%", maxWidth: "900px" }}
                    >

                        <Column flex={1} gap="m" align="start">
                            <Text variant="heading-strong-l">{doc.title}</Text>
                            <Flex>
                                <Button
                                    href={doc.src}
                                    target="_blank"
                                    download
                                    variant="secondary"
                                    size="s"
                                >
                                    Download
                                </Button>
                            </Flex>
                            <Text variant="body-default-s" onBackground="brand-weak">
                                {doc.alt}
                            </Text>
                        </Column>

                        {doc.images && doc.images.length > 0 && doc.images[0] && (


                            <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                                {doc.images.map((image, index) => (
                                    <Flex

                                        key={index}
                                        border="neutral-medium"
                                        radius="m"

                                        minWidth={image.width}

                                        height={image.height}
                                        // @ts-ignore

                                        horizontal="center"
                                        vertical="center"

                                    >
                                        <SmartImage
                                            enlarge
                                            radius="m"
                                            //@ts-ignore
                                            sizes={image.width.toString()}
                                            //@ts-ignore
                                            alt={image.alt}
                                            //@ts-ignore
                                            src={image.link || image.src}
                                        />
                                    </Flex>
                                ))}
                            </Flex>


                        )}
                    </Flex>
                ))}
            </Column>
        </Column>
    );
}
