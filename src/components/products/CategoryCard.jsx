import DefaultProductImage from '../../assets/images/defaultImage.jpg'

export default function CategoryCard({category}){
    return (
        <div className="space-y-2">
            <div className=" border-1 border-gray-100 rounded-xl">
                <img
                    src={category.image}
                    alt={category.name}
                    fill
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>

            <div>
                <h3 className="font-medium text-gray-900 text-sm leading-tight line-clamp-2 mb-1">{category.name}</h3>
                <p className="text-xs text-gray-700">{category.count} Designs</p>
            </div>
        </div>
    )
}