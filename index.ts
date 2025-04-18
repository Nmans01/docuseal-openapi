import * as docuseal from "./generated";
import { client } from "./generated/client.gen";

type DocusealConfig = Parameters<typeof client.setConfig>[0];

export type Docuseal = typeof docuseal;
export const createDocusealClient = (apiKey: string, config: DocusealConfig = {}): Docuseal => {
    client.setConfig({ ...config, headers: { ...config.headers, "X-Auth-Token": apiKey } });
    return docuseal;
};