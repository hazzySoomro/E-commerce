interface IPrams {
    productId?: String;
}



const contactus = ({ params }: { params: IPrams }) => {
    console.log(params)
    return <div>helloaa</div>

}
export default contactus;