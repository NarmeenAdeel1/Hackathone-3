"use server";  // <- Add this if not already present

import { defineLive } from "next-sanity";
import { client } from './client';

const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: '2021-03-25' // Use a valid version here
  })
});

export { sanityFetch, SanityLive };
