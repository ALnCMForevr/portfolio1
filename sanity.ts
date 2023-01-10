import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // "pv8y60vp"
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // "production"
    apiVersion: "2022-11-16",
    useCdn: process.env.NODE_ENV === "production"
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => imageUrlBuilder(sanityClient).image(source)