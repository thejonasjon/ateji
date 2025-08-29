import DefaultProductImage from '../../assets/images/defaultImage.jpg'

export default function CategoryCard({category}){
    return (
        <div className="h-11/12 flex flex-col space-y-2">
            <div className="h-[90%] border border-gray-100 rounded-xl overflow-hidden">
                <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-1">
                <h3 className="font-medium text-gray-900 text-sm leading-tight line-clamp-2 mb-1">
                {category.name}
                </h3>
                <p className="text-xs text-gray-700">{category.count} Designs</p>
            </div>
        </div>
    )
}