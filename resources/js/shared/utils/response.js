export const is404 = function (err) {
    return isErrorWithResponseStatus(err) && 404 === err.response.status;
}

export const is422 = function (err) {
    return isErrorWithResponseStatus(err) && 422 === err.response.status;
}

const isErrorWithResponseStatus = function (err) {
    return err.response && err.response.status;
}