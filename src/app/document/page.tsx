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
    return (
        <Column maxWidth="m">
            <Heading as="h2" id={document.title} variant="display-strong-s" marginBottom="m">
                {document.title}
            </Heading>
            <Column fillWidth gap="xl" marginBottom="40" align="center">
                {document.documents.map((doc, index) => (
                    <Flex
                        key={`${doc.title}-${index}`}
                        gap="xl"
                        horizontal="center"
                        vertical="start"
                        wrap
                        style={{ width: "100%", maxWidth: "900px" }}
                    >
                        {/* Colonne gauche : titre, bouton, alt alignés à droite et largeur réduite */}
                        <Column
                            style={{ maxWidth: "200px", width: "100%" }}
                            gap="m"
                            align="end"
                        >
                            <Text variant="heading-strong-l">{doc.title}</Text>
                            <Flex style={{ justifyContent: "flex-end" }}>
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

                        </Column>

                        {/* Colonne droite : image adaptée au format portrait avec enlarge */}
                        {doc.images && doc.images.length > 0 && doc.images[0] && (
                            <Flex
                                flex={1}
                                style={{
                                    maxWidth: "350px",
                                    width: "100%",
                                    aspectRatio: "12 / 16",
                                    overflow: "visible",
                                }}
                            >
                                <SmartImage
                                    enlarge
                                    radius="m"
                                    alt={doc.images[0].alt}
                                    src={doc.images[0].link || doc.images[0].src}
                                />
                            </Flex>
                        )}
                    </Flex>
                ))}
            </Column>
        </Column>
    );
}