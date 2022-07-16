
const Sresult =(props)=>{
    const img=`https://source.unsplash.com/random/100×100/?${props.val}`;
    return <div>
        <img src={img} width='400' height='400' alt="search"/>
    </div>;
}

export default Sresult;