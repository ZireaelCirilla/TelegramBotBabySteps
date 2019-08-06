var axios = require('axios')

export function axiosGet1(url) {
    return axios.get(url)
}

export function axiosGetMultiple(urls) {
    var promisesArr = []
    urls.forEach(url => {
        promisesArr.push(axiosGet1(url))
    });
    return Promise.all(promises)
}