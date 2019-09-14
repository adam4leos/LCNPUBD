import facebookLoader from "../services/facebookLoader";

export function getFBPosts() {
    return new Promise((resolve, reject) => {
        facebookLoader().then(FB => {
            FB.api(
                "/LCNPUBD/feed",
                function (response) {
                    if (response && !response.error) {
                        resolve(response);
                    } else {
                        reject(response);
                    }
                }
            );
        });
    });
}