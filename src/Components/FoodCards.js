const FoodCards=({imageID, name}) =>{
    return(
        <>
        <div className="w-[490px] h-[700px] p-2 m-2 shadow-xl">
             <img className="w-full h-[600px]" src={imageID} alt="" />
             <h1 className="text-4xl text-center mt-2 ">{name}</h1>
        </div>
        </>
    )
}

export default FoodCards