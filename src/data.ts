import { reactive } from 'vue';

export const data = reactive({
    postData: [
        {
            title: "Post 1",
            image: "/assets/images/outfit1.jpg",
            username: "username",
            isLiked: true
        },
        {
            title: "Post 2",
            image: "/assets/images/outfit2.jpg",
            username: "username",
            isLiked: false
        },
        {
            title: "Post 3",
            image: "/assets/images/outfit3.jpg",
            username: "username",
            isLiked: false
        },
        {
            title: "Post 4",
            image: "/assets/images/outfit4.jpeg",
            username: "username",
            isLiked: true
        }
    ],
    personalPostData: [
        {
            title: "Post 1",
            image: "/assets/images/outfit1.jpg",
            username: "username",
            isLiked: true
        },
        {
            title: "Post 2",
            image: "/assets/images/outfit2.jpg",
            username: "username",
            isLiked: false
        },
        {
            title: "Post 3",
            image: "/assets/images/outfit3.jpg",
            username: "username",
            isLiked: false
        },
        {
            title: "Post 4",
            image: "/assets/images/outfit4.jpeg",
            username: "username",
            isLiked: true
        }
    ],
    wardrobeData: [
        {
            photos: [],
            brand: "",
            size: "",
            materials: [],
            tags: []
        }
    ],
    eventData: [
        {
            name: "Concert",
            date: "08/24/2026",
            time: "12:00",
            tags: ["formal"]
        },
        {
            name: "Concert",
            date: "08/24/2026",
            time: "12:00",
            tags: ["punk", "fun outfit"]
        }
    ],
    analytics: [
        {
            mostWornBrands: ["Brand"],
            mostWornMaterials: ["Cotton", "Wool"],
            mostWornWardrobe: [],
            mostWornSize: "M",
            leastWornBrands: ["Brand"],
            leastWornMaterials: ["Polyester"],
            leastWornWardrobe: [],
            leastWornSize: "S"
        }
    ]
});
