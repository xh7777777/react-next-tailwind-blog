import request from './request'

export const getLoggerAPI = () => {
    return request({
        url: '/logger'
    })
}

export const getTalkAPI = () => {
    return request({
        url: '/talk'
    })
}

export const getCateAPI = () => {
    return request({
        url: '/category'
    })
}

export const getTagAPI = () => {
    return request({
        url: '/tag'
    })
}

export const getArticleTableAPI = (pageIndex,pageSize) => {
    return request({
        url: `/article/table?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    })
}

export const getArticleDetailAPI = (id) => {
    return request({
        url: `/article/detail/${id}`
    })
}

export const getPicAPi = (url) => {
    return request({
        url
    })
}