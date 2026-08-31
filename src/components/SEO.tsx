import {useEffect} from "react";
import {site} from "@/data/site";

type SEOProps = {
    title: string;
    description: string;
    path: string;
    image?: string;
    type?: string;
    structuredData?: object;
};

const BASE_URL = "https://elevatebradford.co.uk";

function setTag(selector: string, attr: string, value: string) {
    let element = document.head.querySelector(selector) as HTMLMetaElement | null;

    if (!element) {
        element = document.createElement("meta");

        const match = selector.match(/\[([^=]+)=["']([^"']+)["']\]/);

        if (match) {
            const [, key, selectorValue] = match;
            element.setAttribute(key, selectorValue);
        }

        document.head.appendChild(element);
    }

    element.setAttribute(attr, value);
}

function setLink(rel: string, href: string) {
    let link = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
    if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
    }
    link.setAttribute("href", href);
}

function setJsonLd(id: string, data: object) {
    const scriptId = `jsonld-${id}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = scriptId;
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
}

export default function SEO({title, description, path, image, type = "website", structuredData}: SEOProps) {
    const fullTitle = `${title} — ${site.name}`;
    const url = `${BASE_URL}${path}`;
    const ogImage =
        image ??
        "https://images.pexels.com/photos/7715518/pexels-photo-7715518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

    useEffect(() => {
        document.title = fullTitle;
        setTag('meta[name="description"]', "content", description);
        setLink("canonical", url);
        setTag('meta[property="og:title"]', "content", fullTitle);
        setTag('meta[property="og:description"]', "content", description);
        setTag('meta[property="og:url"]', "content", url);
        setTag('meta[property="og:type"]', "content", type);
        setTag('meta[property="og:image"]', "content", ogImage);
        setTag('meta[name="twitter:title"]', "content", fullTitle);
        setTag('meta[name="twitter:description"]', "content", description);
        setTag('meta[name="twitter:image"]', "content", ogImage);

        if (structuredData) {
            setJsonLd(path.replace(/\//g, "-"), structuredData);
        }
    }, [fullTitle, description, url, ogImage, type, structuredData, path]);

    return null;
}
