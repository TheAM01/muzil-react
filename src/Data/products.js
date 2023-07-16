const products = [
    {
        id: "m4a1",
        name: "M4A1 Airsoft Gun",
        price: "Rs 15,000",
        thumbnail: "https://cheapairsoft.eu/82-large_default/airsoft-spring-rifle-m4a1-with-metal-rails.jpg",
        url: "/products/m4a1",
        category: "Electric Rifles",
        content: [
            "1 M4A1 airsoft gun",
            "300 round high-cap magazine",
            "Battery and charger"
        ],
        reviews: [
            {
                author: "John Doe",
                stars: 4,
                content: "Great gun! Accurate and reliable."
            },
            {
                author: "Jane Smith",
                stars: 5,
                content: "Love this airsoft gun. Solid build quality."
            }
        ]
    },
    {
        id: "p226",
        name: "SIG P226 Airsoft Pistol",
        price: "Rs 5,000",
        thumbnail: "https://www.greentophuntfish.com/media/catalog/product/g/t/gto358472__1.jpg?store=default&image-type=image",
        url: "/products/p226",
        category: "Gas Blowback Pistols",
        content: [
            "1 SIG P226 airsoft pistol",
            "20 round magazine",
            "Green gas canister"
        ],
        reviews: [
            {
                author: "Mark Johnson",
                stars: 5,
                content: "Excellent pistol. Feels and shoots like the real thing."
            },
            {
                author: "Sarah Wilson",
                stars: 4,
                content: "Good value for money. Solid performance."
            }
        ]
    },
    {
        id: "psg1",
        name: "Airsoft PSG1",
        price: "Rs 25,000",
        thumbnail: "https://i.imgur.com/w6OICvk.jpg",
        url: "/products/sniper",
        category: "Spring Sniper Rifles",
        content: [
            "1 airsoft sniper rifle",
            "Scope",
            "Bipod"
        ],
        reviews: [
            {
                author: "Ryan Thompson",
                stars: 4,
                content: "Impressive range and accuracy. Great for long-range shots."
            },
            {
                author: "Emily Davis",
                stars: 5,
                content: "Powerful and reliable. My favorite sniper rifle."
            }
        ]
    },
    {
        id: "mp5",
        name: "MP5 Airsoft Gun",
        price: "Rs 12,000",
        thumbnail: "https://www.therange702.com/wp-content/uploads/2016/08/Mp5-Features.png",
        url: "/products/mp5",
        category: "Electric Rifles",
        content: [
            "1 MP5 airsoft gun",
            "200 round mid-cap magazine",
            "Battery and charger"
        ],
        reviews: [
            {
                author: "Michael Anderson",
                stars: 5,
                content: "Awesome gun! Compact and easy to maneuver."
            },
            {
                author: "Amy Roberts",
                stars: 4,
                content: "Good quality and reliable performance."
            }
        ]
    },
    {
        id: "glock17",
        name: "Glock 17 Airsoft Pistol",
        price: "Rs 4,500",
        thumbnail: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/997814.json",
        url: "/products/glock17",
        category: "Gas Blowback Pistols",
        content: [
            "1 Glock 17 airsoft pistol",
            "25 round magazine",
            "Green gas canister"
        ],
        reviews: [
            {
                author: "David Thompson",
                stars: 4,
                content: "Solid pistol. Feels realistic and performs well."
            },
            {
                author: "Sophia Martinez",
                stars: 5,
                content: "Great value for the price. Accurate and reliable."
            }
        ]
    },
    {
        id: "ak47",
        name: "AK47 Airsoft Gun",
        price: "Rs 18,000",
        thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51DaW23Rx8L._AC_UL600_SR600,600_.jpg",
        url: "/products/ak47",
        category: "Electric Rifles",
        content: [
            "1 AK47 airsoft gun",
            "500 round high-cap magazine",
            "Battery and charger"
        ],
        reviews: [
            {
                author: "Robert Johnson",
                stars: 5,
                content: "Amazing rifle! Sturdy build and impressive firepower."
            },
            {
                author: "Olivia Wilson",
                stars: 4,
                content: "Solid performance. Good for both indoor and outdoor play."
            }
        ]
    },
    {
        id: "ump45",
        name: "UMP45 Airsoft Gun",
        price: "Rs 13,500",
        thumbnail: "https://special-ops.org/wp-content/uploads/2022/08/HK-UMP45-scaled.jpg",
        url: "/products/ump45",
        category: "Electric Rifles",
        content: [
            "1 UMP45 airsoft gun",
            "250 round high-cap magazine",
            "Battery and charger"
        ],
        reviews: [
            {
                author: "Daniel Adams",
                stars: 4,
                content: "Great SMG. Compact and reliable."
            },
            {
                author: "Lily Thompson",
                stars: 5,
                content: "Impressive build quality. Performs well in CQB scenarios."
            }
        ]
    },
    {
        id: "1911",
        name: "1911 Airsoft Pistol",
        price: "Rs 3,500",
        thumbnail: "https://www.scopesandbarrels.com/cdn/shop/articles/we-are-offering-some-serious-discounts-on-artemis-m1911-airsoft-pistol-scopes-and-barrels_1920x.jpg?v=1677750600",
        url: "/products/1911",
        category: "Gas Blowback Pistols",
        content: [
            "1 1911 airsoft pistol",
            "14 round magazine",
            "Green gas canister"
        ],
        reviews: [
            {
                author: "Andrew Miller",
                stars: 5,
                content: "Fantastic replica. Feels great in the hand."
            },
            {
                author: "Sophie Wilson",
                stars: 4,
                content: "Solid performance and good accuracy."
            }
        ]
    },
    {
        id: "g36c",
        name: "G36C Airsoft Gun",
        price: "Rs 14,500",
        thumbnail: "https://www.thefirearmblog.com/blog/wp-content/uploads/2016/11/5555.jpg",
        url: "/products/g36c",
        category: "Electric Rifles",
        content: [
            "1 G36C airsoft gun",
            "300 round high-cap magazine",
            "Battery and charger"
        ],
        reviews: [
            {
                author: "Chris Roberts",
                stars: 4,
                content: "Impressive rifle. Lightweight and accurate."
            },
            {
                author: "Emma Thompson",
                stars: 5,
                content: "Great ergonomics. Performs well in all conditions."
            }
        ]
    },
    {
        id: "m9",
        name: "M9 Airsoft Pistol",
        price: "Rs 4,000",
        thumbnail: "https://www.riflegear.com/images/product/large/2380.jpg",
        url: "/products/m9",
        category: "Gas Blowback Pistols",
        content: [
            "1 M9 airsoft pistol",
            "25 round magazine",
            "Green gas canister"
        ],
        reviews: [
            {
                author: "William Davis",
                stars: 4,
                content: "Solid sidearm. Reliable and easy to use."
            },
            {
                author: "Sophia Thompson",
                stars: 5,
                content: "Great value for the price. Performs well in skirmishes."
            }
        ]
    },
    {
        id: "g3",
        name: "G3 Airsoft Gun",
        price: "Rs 16,000",
        thumbnail: "https://photo.weaponsystems.net/image/s-carousel/n-fa_ar_g3_p01.jpg/--/img/ws/fa_ar_g3_p01.jpg",
        url: "/products/g3",
        category: "Electric Rifles",
        content: [
            "1 G3 airsoft gun",
            "500 round high-cap magazine",
            "Battery and charger"
        ],
        reviews: [
            {
                author: "James Wilson",
                stars: 5,
                content: "Powerful rifle. Great for outdoor games."
            },
            {
                author: "Sophie Davis",
                stars: 4,
                content: "Impressive build quality and reliable performance."
            }
        ]
    },
    // Add more airsoft guns here...
];

export default products;
