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

export const getArticleTableAPI = ({pageIndex,pageSize,category_name = null, tag_name=null, searchText = null}) => {
    let url = `/article/table?pageIndex=${pageIndex}&pageSize=${pageSize}`
    if(category_name) {
        url += `&category_name=${category_name}`
    } else if(tag_name) {
        url += `&tag_name=${tag_name}`
    } else if(searchText) {
        url += `&searchText=${searchText}`
    }
    return request({
        url,
    })
}

export const getArticleDetailAPI = (id) => {
    return request({
        url: `/article/detail/${id}`
    })
}

export const getCoverAPI = () => {
    return request({
        url: '/about/main'
    })
}