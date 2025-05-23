const productList = [
    {
        id: 1,
        title: "Celestial Ember",
        description: "A radiant, warm fragrance for the bold, featuring notes of cinnamon, cloves, and amber, perfect for evening elegance.",
        price: 549.99,
        image: "https://bibliotheque-de-parfum.ua/cdn/shop/products/SayYes__100ml.jpg",
        category: "Perfumes",
        volume: 100,
        brand: "Bellavita",
        gender: "unisex",
        notes: {
            top: ["Cinnamon", "Orange"],
            middle: ["Cloves", "Rose"],
            base: ["Amber", "Vanilla"],
        },
        tags: ["luxury", "unisex", "spicy", "elegant"],
    },
    {
        id: 2,
        title: "Midnight Whisper",
        description: "An enchanting, mysterious scent with lavender, violet, and sandalwood, ideal for serene nights and intimate moments.",
        price: 399.99,
        image: "https://www.brocard.ua/media/catalog/product/cache/V08472817/eyJ3IjoxMDAwLCJoIjoxMDAwLCJvIjoiY2F0YWxvZ1wvcHJvZHVjdFwvXC8zXC8zXC8zMzQ5NjY4NTc5ODM5XzEuanBnIn0=/rabanne-1-million-parfum.jpg",
        category: "Perfumes",
        volume: 75,
        brand: "Chanel",
        gender: "women",
        notes: {
            top: ["Lavender", "Bergamot"],
            middle: ["Violet", "Jasmine"],
            base: ["Sandalwood", "Musk"],
        },
        tags: ["luxury", "women", "floral", "mysterious"],
    },
    {
        id: 3,
        title: "Ironclad Spirit",
        description: "A rugged, masculine fragrance with oakmoss, tobacco, and leather, crafted for the adventurous soul.",
        price: 479.99,
        image: "https://bibliotheque-de-parfum.ua/cdn/shop/files/100_Nirvana.jpg",
        category: "Perfumes",
        volume: 100,
        brand: "Versace",
        gender: "men",
        notes: {
            top: ["Bergamot", "Citrus"],
            middle: ["Oakmoss", "Sage"],
            base: ["Tobacco", "Leather"],
        },
        tags: ["luxury", "men", "woody", "bold"],
    },
    {
        id: 4,
        title: "Frostbite Aura",
        description: "A crisp, refreshing scent with mint, eucalyptus, and ice notes, perfect for a cool, invigorating day.",
        price: 349.99,
        image: "https://bibliotheque-de-parfum.ua/cdn/shop/files/100_40_of_feelings.jpg",
        category: "Perfumes",
        volume: 50,
        brand: "Versace",
        gender: "unisex",
        notes: {
            top: ["Mint", "Lemon"],
            middle: ["Eucalyptus", "Pine"],
            base: ["Ice", "Musk"],
        },
        tags: ["luxury", "unisex", "fresh", "crisp"],
    },
    {
        id: 5,
        title: "Velvet Rose",
        description: "A luxurious, floral fragrance with black rose, patchouli, and vanilla, designed for timeless elegance.",
        price: 599.99,
        image: "https://bibliotheque-de-parfum.ua/cdn/shop/files/100_Ultimatum.jpg",
        category: "Perfumes",
        volume: 100,
        brand: "Dior",
        gender: "women",
        notes: {
            top: ["Rose", "Geranium"],
            middle: ["Patchouli", "Lily"],
            base: ["Vanilla", "Musk"],
        },
        tags: ["luxury", "women", "floral", "elegant"],
    },
    {
        id: 6,
        title: "Shadow Eclipse",
        description: "A deep, smoky scent with vetiver, incense, and amber, perfect for a mysterious and powerful presence.",
        price: 459.99,
        image: "https://bibliotheque-de-parfum.ua/cdn/shop/files/100_Love_catcher.jpg",
        category: "Perfumes",
        volume: 75,
        brand: "Versace",
        gender: "men",
        notes: {
            top: ["Bergamot", "Pepper"],
            middle: ["Vetiver", "Incense"],
            base: ["Amber", "Leather"],
        },
        tags: ["luxury", "men", "smoky", "mysterious"],
    },
    {
        id: 7,
        title: "Golden Serenity",
        description: "A warm, soothing fragrance with jasmine, sandalwood, and honey, ideal for peaceful moments.",
        price: 429.99,
        image: "https://bibliotheque-de-parfum.ua/cdn/shop/files/IAmFree.jpg",
        category: "Perfumes",
        volume: 50,
        brand: "Dior",
        gender: "unisex",
        notes: {
            top: ["Jasmine", "Citrus"],
            middle: ["Sandalwood", "Honey"],
            base: ["Vanilla", "Musk"],
        },
        tags: ["luxury", "unisex", "warm", "soothing"],
    },
    {
        id: 8,
        title: "Oceanic Breeze",
        description: "A refreshing, aquatic scent with sea salt, grapefruit, and cedar, perfect for a seaside escape.",
        price: 379.99,
        image: "https://bibliotheque-de-parfum.ua/cdn/shop/files/100_Dangerousromance_12.09..jpg",
        category: "Perfumes",
        volume: 100,
        brand: "Bellavita",
        gender: "men",
        notes: {
            top: ["Sea Salt", "Grapefruit"],
            middle: ["Lavender", "Sage"],
            base: ["Cedar", "Musk"],
        },
        tags: ["luxury", "men", "fresh", "aquatic"],
    },
    {
        id: 9,
        title: "Petal Harmony",
        description: "A vibrant, floral fragrance with orchid, lily, and rose, capturing the joy of spring gardens.",
        price: 499.99,
        image: "https://bibliotheque-de-parfum.ua/cdn/shop/files/100_Top_Secret.jpg",
        category: "Perfumes",
        volume: 75,
        brand: "Bellavita",
        gender: "women",
        notes: {
            top: ["Orchid", "Citrus"],
            middle: ["Lily", "Rose"],
            base: ["Musk", "Vanilla"],
        },
        tags: ["luxury", "women", "floral", "vibrant"],
    },
    {
        id: 10,
        title: "Royal Amber",
        description: "A majestic, rich scent with amber, tobacco, and oak, crafted for a regal and commanding aura.",
        price: 649.99,
        image: "https://bibliotheque-de-parfum.ua/cdn/shop/files/100_P.S..jpg",
        category: "Perfumes",
        volume: 100,
        brand: "Gucci",
        gender: "unisex",
        notes: {
            top: ["Bergamot", "Cloves"],
            middle: ["Tobacco", "Rose"],
            base: ["Amber", "Oak"],
        },
        tags: ["luxury", "unisex", "rich", "majestic"],
    }
]

export default productList

