 export const MANGA = [
    {
        volume: "1",
        price: "12.40€",
        image: 'MANGA/1.jpg',
    },
    {
        volume: "2",
        price: "11.25€",
        newPrice: "8.99€",
        image: 'MANGA/2.jpg',
    },
    {
        volume: "3",
        price: "9.80€",
        image: 'MANGA/3.jpg',
    },
    {
        volume: "4",
        price: "8.95€",
        image: 'MANGA/4.jpg',
    },
    {
        volume: "5",
        price: "10.75€",
        image: 'MANGA/5.jpg',
    },
    {
        volume: "6",
        price: "11.90€",
        image: 'MANGA/6.jpg',
    },
    {
        volume: "7",
        price: "8.65€",
        image: 'MANGA/7.jpg',
    },
    {
        volume: "8",
        price: "12.30€",
        newPrice: "8.99€",
        image: 'MANGA/8.jpg',
    },
    {
        volume: "9",
        price: "9.15€",
        image: 'MANGA/9.jpg',
    },
    {
        volume: "10",
        price: "10.50€",
        image: 'MANGA/10.jpg',
    },
    {
        volume: "11",
        price: "10.20€",
        image: 'MANGA/11.jpg',
    },
    {
        volume: "12",
        price: "11.85€",
        image: 'MANGA/12.jpg',
    },
    {
        volume: "13",
        price: "9.60€",
        image: 'MANGA/13.jpg',
    },
    {
        volume: "14",
        price: "11.05€",
        image: 'MANGA/14.jpg',
    },
    {
        volume: "15",
        price: "9.75€",
        image: 'MANGA/15.jpg',
    },
    {
        volume: "16",
        price: "10.10€",
        newPrice: "8.99€",
        image: 'MANGA/16.jpg',
    },
    {
        volume: "17",
        price: "12.80€",
        image: 'MANGA/17.jpg',
    },
    {
        volume: "18",
        price: "8.85€",
        image: 'MANGA/18.jpg',
    },
    {
        volume: "19",
        price: "9.50€",
        image: 'MANGA/19.jpg',
    },
    {
        volume: "20",
        price: "12.15€",
        image: 'MANGA/20.jpg',
    },
    {
        volume: "21",
        price: "10.35€",
        image: 'MANGA/21.jpg',
    },
    {
        volume: "22",
        price: "8.75€",
        image: 'MANGA/22.jpg',
    }
    ,
    {
        volume: "23",
        price: "8.75€",
        image: 'MANGA/23.jpg',
    }
];

function selectPopManga() {
    var indices = [];

    while (indices.length < 3) {
        var randomIndex = Math.floor(Math.random() * MANGA.length);
        if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
        }
    }

    for (var i = 0; i < indices.length; i++) {
        popMangaList.push(MANGA[indices[i]]);
    }
}

function addNewManga() {
    if (MANGA.length >= 3) {
        newMangaList.push(MANGA[MANGA.length - 3]);
        newMangaList.push(MANGA[MANGA.length - 2]);
        newMangaList.push(MANGA[MANGA.length - 1]);
    } else {
        console.log("Error: Array MANGA contains less than three elements.");
    }
}



