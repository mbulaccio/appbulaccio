const products = [

    { id: 1, name: 'Colombia', price: '$1900', img:'https://www.google.com/search?q=cafe+puerto+blest+colombia&sxsrf=APq-WBvOmDAQtlul4RTrSG0u7AlBoWcSrQ:1644805393778&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjmzeHJkf71AhVQq5UCHc9VDtUQ_AUoAnoECAIQBA&biw=1366&bih=657&dpr=1#imgrc=-oMu7nVV1xV3LM'},
    { id: 2, name: 'Guatemala', price: '$1900', img:'https://www.google.com/search?q=cafe+puerto+blest+peru+bistrea&tbm=isch&ved=2ahUKEwj0h_mPkv71AhVUAdQKHV4EBjEQ2-cCegQIABAA&oq=cafe+puerto+blest+peru+bistrea&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJ1CKDlj4GmCOHWgCcAB4AIABXogBiASSAQE3mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=pL0JYvSlOtSC0AbeiJiIAw&bih=657&biw=1366#imgrc=niouxKW17g_6VM'},
    { id: 3, name: 'Perú', price: '$1900', img:'https://www.google.com/search?q=cafe+puerto+blest+kenia+bistrea&tbm=isch&ved=2ahUKEwi35tfHkv71AhVtJrkGHZztAKAQ2-cCegQIABAA&oq=cafe+puerto+blest+kenia+bistrea&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJ1DsBViwE2CeFWgBcAB4AIABb4gB2QSSAQM3LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=Gb4JYvf1M-3M5OUPnNuDgAo&bih=657&biw=1366#imgrc=r3SiFDt5gVK2SM'},

]

export const getProducts = () => { //Simula llamada a una API
    return new Promise((resolve) => { // Retorna una promesa y recibe como parámetro resolve
        setTimeout(() => {
            resolve(products) // Devuelve los productos
        }, 2000) // En 2 segundos
    })
}