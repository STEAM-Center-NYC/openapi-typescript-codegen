import type { ApiRequestOptions } from './ApiRequestOptions';
import type { OpenAPIConfig } from './OpenAPI';

export const request = <T>(config: OpenAPIConfig, options: ApiRequestOptions): Promise<T> => {
    return new Promise((resolve, reject) => {
        const url = `${config.BASE}${options.path}`.replace('{api-version}', config.VERSION);

        try {
            // Do your request...
            setTimeout(() => {
                resolve({
                    url,
                    ok: true,
                    status: 200,
                    statusText: 'dummy',
                    body: {
                        ...options,
                    },
                });
            }, 500);
        } catch (e) {
            reject(e);
        }
    });
};
