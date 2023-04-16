
var films = [
    {
        img : "https://musicart.xboxlive.com/7/89ae2f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080", 
        name : "The Wailing", 
        desc: "Lorem ipsum",
        star: "7.9"
    },
    {
        img : "https://m.media-amazon.com/images/M/MV5BMjIwNTM0Mzc5MV5BMl5BanBnXkFtZTgwMDk5NDU1ODE@._V1_.jpg", 
        name : "Warcraft",
        desc: "Lorem ipsum",
        star: "6.5"
    },
    {
        img : "", 
        name : "The Space Between Us", 
        desc: "Lorem ipsum",
        star: "6.7"
    },
    {
        img : "", 
        name : "Lorem", 
        desc: "Lorem ipsum",
        star: "8.0"
    },
    {
        img : "", 
        name : "Lorem", 
        desc: "Lorem ipsum",
        star: "8.0"
    },
    {
        img : "", 
        name : "Lorem", 
        desc: "Lorem ipsum",
        star: "8.0"
    },
    {
        img : "", 
        name : "Lorem", 
        desc: "Lorem ipsum",
        star: "8.2"
    },
    {
        img : "", 
        name : "Lorem", 
        desc: "Lorem ipsum",
        star: "9.0"
    },
    {
        img : "", 
        name : "Lorem", 
        desc: "Lorem ipsum",
        star: "8.0"
    },
    {
        img : "", 
        name : "Loem", 
        desc: "Lorem ipsum",
        star: "3.0"
    },
    {
        img : "", 
        name : "sdfGED", 
        desc: "Lorem ipsum", 
        star: "5.4"
    },
    {
        img : "", 
        name : "LOEMN ", 
        desc: "Lorem ipsum",
        star: "6.5"
    },
    {
        img : "https://m.media-amazon.com/images/M/MV5BMTk4OTY4MDg4Nl5BMl5BanBnXkFtZTgwMTE1MTU3ODE@._V1_.jpg", 
        name : "The fits", 
        desc: "Lorem ipsum",
        star: "7.0"
    }, 
    {
        img : "https://m.media-amazon.com/images/M/MV5BMDk2NWMxNWQtMWIxMS00NjQ0LThkZGEtNDBlZDc3M2JlNjE0XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg", 
        name : "Me Before You",
        desc: "Lorem ipsum",
        star: "8.0"
    }, 
    {
        img : "https://m.media-amazon.com/images/M/MV5BMjIwNTM0Mzc5MV5BMl5BanBnXkFtZTgwMDk5NDU1ODE@._V1_.jpg", 
        name : "Warcraft",
        desc: "Lorem ipsum",
        star: "6.5"
    }

]
for (let i = 0; i < films.length; i++) {
    area.innerHTML +=`<div class="item">
    <div class="bg">
        <img src="${films[i].img}" width="180px" height="240px" alt="">
    </div>
    <div class="names">
        <p>${films[i].name}</p> 
        <span>${films[i].desc}</span>
    </div> 
    <div class="star">${films[i].star}</div>
</div>`
}
