import {
    Button,
    Column,
    Flex,
    Heading,
    SmartImage,
    Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { schoolwork } from "@/app/resources/content";

export async function generateMetadata() {
    const title = schoolwork.title;
    const description = schoolwork.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            url: `https://${baseURL}/schoolwork`,
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

export default function schoolWork() {

}