function Card({food}){
    return(
        <>
            <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs p-3 m-5">
                <img className="rounded-base" src={food.src} alt={food.alt} />
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{food.title}</h5>
                <p className="mb-6 text-body">{food.alt}</p>
                <p className='text-stone-500 text-4xl'>{food.price}$</p>
            </div>
        </>
    )
}

export default Card;