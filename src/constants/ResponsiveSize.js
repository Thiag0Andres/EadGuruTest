import Layout from './Layout'

export function responsiveSize(size) {
    return size * (Layout.isSmallDevice ? 0.8 : 1)
}